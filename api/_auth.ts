import { randomBytes, randomInt, createHash, timingSafeEqual } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "./_db.js";

export const SESSION_COOKIE = "avbuddy_session";
// 24 hours, not minutes: the email provider has been seen delivering these
// over an hour late, which made a 15-minute link useless by the time it
// arrived. Still single-use (see consumeMagicLinkToken), and the token is
// 256 bits of randomness, so the longer window doesn't make it guessable.
const MAGIC_LINK_TTL_MS = 24 * 60 * 60 * 1000;
// Sliding 1-year session: every visit pushes the expiry a full year out
// again (see refreshSession / api/auth/_me.ts), so anyone who keeps using
// the site stays signed in until they sign out or clear their browser data.
const SESSION_TTL_MS = 365 * 24 * 60 * 60 * 1000;

// Random tokens, not passwords -- high entropy already, so a fast SHA-256
// hash (rather than bcrypt/argon2) is enough to keep the raw token out of
// the database. Only the hash is ever stored; the raw token only exists in
// the emailed link / the session cookie.
function hashToken(raw: string): string {
  return createHash("sha256").update(raw).digest("hex");
}

function newRawToken(): string {
  return randomBytes(32).toString("base64url");
}

export interface SessionUser {
  id: string;
  email: string;
}

// --- Magic link tokens (single-use, short-lived, emailed) ---

// Max wrong sign-in codes per account per 24h. A code is 6 digits (1 in a
// million), so 10 guesses a day leaves brute-forcing hopeless.
const MAX_CODE_FAILURES_PER_DAY = 10;

function hashCode(tokenHash: string, code: string): string {
  return createHash("sha256").update(`${tokenHash}:${code}`).digest("hex");
}

// Every emailed sign-in carries both a link (raw token) and a 6-digit code
// for the same single-use login -- using either one consumes it.
export async function createMagicLinkToken(userId: string): Promise<{ raw: string; code: string }> {
  const raw = newRawToken();
  const tokenHash = hashToken(raw);
  const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
  const expiresAt = new Date(Date.now() + MAGIC_LINK_TTL_MS);
  await sql`
    INSERT INTO auth_tokens (token_hash, user_id, expires_at, code_hash)
    VALUES (${tokenHash}, ${userId}, ${expiresAt.toISOString()}, ${hashCode(tokenHash, code)})
  `;
  return { raw, code };
}

export type CodeCheck = { ok: true; userId: string } | { ok: false; error: "invalid_code" | "too_many_attempts" };

// Checks a typed 6-digit code against every still-valid sign-in for this
// email (an earlier email can arrive after a later one, so any live code
// works). Consumes the matching sign-in on success. Unknown emails get the
// same "invalid_code" as a wrong code, so this can't be used to probe
// which addresses have accounts.
export async function verifySignInCode(email: string, code: string): Promise<CodeCheck> {
  const normalized = email.trim().toLowerCase();
  if (!/^\d{6}$/.test(code)) return { ok: false, error: "invalid_code" };

  const users = await sql`SELECT id FROM users WHERE email = ${normalized}`;
  const userId = (users as { id: string }[])[0]?.id;
  if (!userId) return { ok: false, error: "invalid_code" };

  const failures = await sql`
    SELECT COUNT(*)::int AS n FROM auth_code_failures
    WHERE user_id = ${userId} AND at > now() - interval '24 hours'
  `;
  if (((failures as { n: number }[])[0]?.n ?? 0) >= MAX_CODE_FAILURES_PER_DAY) {
    return { ok: false, error: "too_many_attempts" };
  }

  const candidates = await sql`
    SELECT token_hash, code_hash FROM auth_tokens
    WHERE user_id = ${userId} AND used_at IS NULL AND expires_at > now() AND code_hash IS NOT NULL
  `;
  for (const c of candidates as { token_hash: string; code_hash: string }[]) {
    const expected = Buffer.from(c.code_hash, "hex");
    const actual = Buffer.from(hashCode(c.token_hash, code), "hex");
    if (expected.length === actual.length && timingSafeEqual(expected, actual)) {
      const consumed = await sql`
        UPDATE auth_tokens SET used_at = now()
        WHERE token_hash = ${c.token_hash} AND used_at IS NULL
        RETURNING user_id
      `;
      if ((consumed as unknown[]).length > 0) return { ok: true, userId };
    }
  }

  await sql`INSERT INTO auth_code_failures (user_id) VALUES (${userId})`;
  return { ok: false, error: "invalid_code" };
}

// Compensating delete for when the email after createMagicLinkToken()
// fails to send -- see the try/catch around sendMagicLinkEmail in
// api/auth/_requestLink.ts. Without this, a failed send still leaves a
// row in auth_tokens, and that row is exactly what the resend-cooldown
// check there looks for, so the next attempt (and the one after that,
// for the rest of the cooldown window) would be fooled into reporting
// success without ever trying to send again.
export async function deleteMagicLinkToken(raw: string): Promise<void> {
  const tokenHash = hashToken(raw);
  await sql`DELETE FROM auth_tokens WHERE token_hash = ${tokenHash}`;
}

// Consumes the token (marks it used) if valid. A token is valid exactly
// once, before it expires. Returns the user id, or null if invalid/expired/
// already used.
export async function consumeMagicLinkToken(raw: string): Promise<string | null> {
  const tokenHash = hashToken(raw);
  const rows = await sql`
    UPDATE auth_tokens
    SET used_at = now()
    WHERE token_hash = ${tokenHash}
      AND used_at IS NULL
      AND expires_at > now()
    RETURNING user_id
  `;
  const row = (rows as { user_id: string }[])[0];
  return row ? row.user_id : null;
}

export interface MagicLinkTokenInfo {
  userId: string;
  email: string;
  used: boolean;
  expired: boolean;
  createdAt: string;
}

// Read-only lookup of a token's state, whether or not it's still valid --
// used to tell an expired link apart from an already-used or bogus one, and
// to send a fresh link to the same address without the person retyping it.
export async function getMagicLinkTokenInfo(raw: string): Promise<MagicLinkTokenInfo | null> {
  const tokenHash = hashToken(raw);
  const rows = await sql`
    SELECT t.user_id, u.email, t.used_at, t.created_at, (t.expires_at <= now()) AS expired
    FROM auth_tokens t
    JOIN users u ON u.id = t.user_id
    WHERE t.token_hash = ${tokenHash}
  `;
  const row = (
    rows as { user_id: string; email: string; used_at: string | null; created_at: string; expired: boolean }[]
  )[0];
  if (!row) return null;
  return {
    userId: row.user_id,
    email: row.email,
    used: row.used_at !== null,
    expired: row.expired,
    createdAt: row.created_at,
  };
}

// "munir@gmail.com" -> "m•••r@gmail.com" -- enough for someone to recognise
// their own address, without echoing it in full to whoever holds the link.
export function maskEmail(email: string): string {
  const at = email.indexOf("@");
  if (at <= 0) return "•••";
  const local = email.slice(0, at);
  const domain = email.slice(at);
  if (local.length <= 2) return `${local[0]}•••${domain}`;
  return `${local[0]}•••${local[local.length - 1]}${domain}`;
}

// --- Sessions (long-lived, cookie-based) ---

export async function createSession(userId: string): Promise<string> {
  const raw = newRawToken();
  const tokenHash = hashToken(raw);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await sql`
    INSERT INTO user_sessions (token_hash, user_id, expires_at)
    VALUES (${tokenHash}, ${userId}, ${expiresAt.toISOString()})
  `;
  return raw;
}

export async function destroySession(raw: string): Promise<void> {
  const tokenHash = hashToken(raw);
  await sql`DELETE FROM user_sessions WHERE token_hash = ${tokenHash}`;
}

// Extends a live session to a full SESSION_TTL_MS from now. Only writes
// when the expiry is more than a day stale, so the per-page-load "who am I"
// call doesn't turn into a DB write every time. Returns the raw token if the
// session is live (so the caller can refresh the cookie too), else null.
export async function refreshSession(req: VercelRequest): Promise<string | null> {
  const raw = parseCookies(req.headers.cookie)[SESSION_COOKIE];
  if (!raw) return null;
  const tokenHash = hashToken(raw);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await sql`
    UPDATE user_sessions SET expires_at = ${expiresAt.toISOString()}
    WHERE token_hash = ${tokenHash}
      AND expires_at > now()
      AND expires_at < ${new Date(expiresAt.getTime() - 24 * 60 * 60 * 1000).toISOString()}
  `;
  return raw;
}

export async function getSessionUser(req: VercelRequest): Promise<SessionUser | null> {
  const raw = parseCookies(req.headers.cookie)[SESSION_COOKIE];
  if (!raw) return null;
  const tokenHash = hashToken(raw);
  const rows = await sql`
    SELECT users.id, users.email
    FROM user_sessions
    JOIN users ON users.id = user_sessions.user_id
    WHERE user_sessions.token_hash = ${tokenHash}
      AND user_sessions.expires_at > now()
  `;
  const row = (rows as SessionUser[])[0];
  return row ?? null;
}

// --- Users ---

export async function getOrCreateUserByEmail(email: string): Promise<string> {
  const normalized = email.trim().toLowerCase();
  const rows = await sql`
    INSERT INTO users (email)
    VALUES (${normalized})
    ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
    RETURNING id
  `;
  return (rows as { id: string }[])[0].id;
}

// --- Cookies (no external dependency -- Vercel's Node runtime doesn't
// parse `cookie` for us, and this app avoids adding libraries where a few
// lines of code will do). ---

export function parseCookies(header: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    if (key) out[key] = decodeURIComponent(value);
  }
  return out;
}

export function setSessionCookie(res: VercelResponse, raw: string): void {
  const maxAgeSeconds = Math.floor(SESSION_TTL_MS / 1000);
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=${encodeURIComponent(raw)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAgeSeconds}`
  );
}

export function clearSessionCookie(res: VercelResponse): void {
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
}

// --- Email ---

// Talks to Brevo's HTTP API directly with fetch rather than pulling in
// their SDK -- one dependency-free POST is simpler than a new package for
// something this small, consistent with the rest of this project.
//
// AUTH_EMAIL_FROM uses the same "Name <email>" format either way; it's
// parsed into Brevo's separate name/email fields below. Whatever address
// you put here MUST be verified as a sender in your Brevo account first
// (Settings > Senders & IP > Senders) -- unlike Resend's onboarding@resend.dev,
// Brevo has no built-in test sender, so sending will fail until you do this.
function parseFrom(from: string): { name?: string; email: string } {
  const match = from.match(/^(.*)<(.+)>$/);
  if (match) {
    const name = match[1].trim();
    return { name: name || undefined, email: match[2].trim() };
  }
  return { email: from.trim() };
}

export async function sendMagicLinkEmail(email: string, link: string, code: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.AUTH_EMAIL_FROM ?? "AvBuddy <noreply@avbuddy.app>";
  if (!apiKey) {
    // Dev convenience: `vercel dev` sets VERCEL_ENV to "development" -- that
    // is the ONLY environment this should silently no-op in. Bug fixed
    // 2026-09-11: this used to check `!== "production"`, which also matched
    // "preview" -- so a branch's Vercel preview deployment (VERCEL_ENV is
    // "preview" there, not "production") silently swallowed the email and
    // told the caller it succeeded, while the real link only ever reached a
    // server log nobody could see. A preview URL is somewhere a real person
    // actually tries to sign in, so it needs to fail loudly here too, same
    // as production, if the key is missing.
    if (process.env.VERCEL_ENV === "development") {
      console.log(`[dev] Magic link for ${email}: ${link} (code ${code})`);
      return;
    }
    throw new Error("BREVO_API_KEY is not set");
  }
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: parseFrom(from),
      to: [{ email }],
      subject: `${code} is your AvBuddy sign-in code`,
      htmlContent: `
        <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #111;">Sign in to AvBuddy</h2>
          <p style="color: #333; line-height: 1.5;">
            Enter this code in the AvBuddy sign-in box:
          </p>
          <p style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #111; margin: 16px 0;">
            ${code}
          </p>
          <p style="color: #333; line-height: 1.5;">
            Or just click the button. The code and link are valid for 24 hours and work once.
          </p>
          <p style="margin: 24px 0;">
            <a href="${link}" style="background: #3fa65a; color: #fff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Sign in
            </a>
          </p>
          <p style="color: #888; font-size: 13px;">
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
      `,
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Brevo request failed: ${res.status} ${body}`);
  }
}
