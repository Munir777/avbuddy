import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import {
  createMagicLinkToken,
  deleteMagicLinkToken,
  getOrCreateUserByEmail,
  sendMagicLinkEmail,
} from "../_auth.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_COOLDOWN_MS = 60 * 1000;

interface Body {
  email?: unknown;
}

// Logic moved out of api/auth/request-link.ts -- see api/auth.ts.
export async function handleRequestLink(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email) || email.length > 200) {
    res.status(400).json({ ok: false, error: "invalid_email" });
    return;
  }

  try {
    await ensureSchema();
    const userId = await getOrCreateUserByEmail(email);

    // Basic anti-spam: don't let the same account request a second link
    // within a minute (prevents someone hammering another person's inbox).
    const recent = await sql`
      SELECT created_at FROM auth_tokens
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 1
    `;
    const last = (recent as { created_at: string }[])[0];
    if (last && Date.now() - new Date(last.created_at).getTime() < RESEND_COOLDOWN_MS) {
      // Still respond success -- same generic response either way, see below.
      res.status(200).json({ ok: true });
      return;
    }

    const rawToken = await createMagicLinkToken(userId);
    const origin = `https://${req.headers.host}`;
    const link = `${origin}/auth/callback?token=${encodeURIComponent(rawToken)}`;

    try {
      await sendMagicLinkEmail(email, link);
    } catch (sendErr) {
      // Don't leave a token behind for the cooldown check above to
      // mistake as "already sent" -- a failed send should be
      // immediately retryable, not silently masked as success for the
      // rest of the cooldown window. Best-effort: if this delete
      // itself fails, fall through to the same error response anyway.
      await deleteMagicLinkToken(rawToken).catch(() => {});
      throw sendErr;
    }

    // Always the same response regardless of whether the email is new,
    // existing, or rate-limited -- don't give a caller a way to probe
    // which emails have accounts.
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("request-link error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
