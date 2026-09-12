import { randomBytes, createHash } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "./_db.js";

export const SESSION_COOKIE = "avbuddy_session";
const MAGIC_LINK_TTL_MS = 15 * 60 * 1000; // 15 minutes
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

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

export async function createMagicLinkToken(userId: string): Promise<string> {
  const raw = newRawToken();
  const tokenHash = hashToken(raw);
  const expiresAt = new Date(Date.now() + MAGIC_LINK_TTL_MS);
  await sql`
    INSERT INTO auth_tokens (token_hash, user_id, expires_at)
    VALUES (${tokenHash}, ${userId}, ${expiresAt.toISOString()})
  `;
  return raw;
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

export async function sendMagicLinkEmail(email: string, link: string): Promise<void> {
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
      console.log(`[dev] Magic link for ${email}: ${link}`);
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
      subject: "Sign in to AvBuddy",
      htmlContent: `
        <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #111;">Sign in to AvBuddy</h2>
          <p style="color: #333; line-height: 1.5;">
            Click the link below to sign in. This link expires in 15 minutes and can only be used once.
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
