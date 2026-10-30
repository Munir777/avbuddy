import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema } from "../_db.js";
import { getMagicLinkTokenInfo, maskEmail } from "../_auth.js";
import { sendLinkToUser } from "./_requestLink.js";

interface Body {
  token?: unknown;
}

// Only offer a one-click resend for reasonably recent links -- an ancient
// link turning up somewhere shouldn't be able to trigger mail forever.
const RESEND_FROM_TOKEN_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

// "Send me a new link" from an expired sign-in link. The token identifies
// the account, so the person doesn't have to retype their email -- and the
// new link only ever goes to that account's own address, so holding an old
// link gives nobody anything except the ability to re-send to its owner.
export async function handleResendLink(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const token = typeof body.token === "string" ? body.token : "";
  if (!token) {
    res.status(400).json({ ok: false, error: "missing_token" });
    return;
  }

  try {
    await ensureSchema();
    const info = await getMagicLinkTokenInfo(token);
    if (!info || Date.now() - new Date(info.createdAt).getTime() > RESEND_FROM_TOKEN_MAX_AGE_MS) {
      res.status(400).json({ ok: false, error: "invalid" });
      return;
    }
    if (info.used) {
      res.status(400).json({ ok: false, error: "used" });
      return;
    }

    await sendLinkToUser(req, info.userId, info.email);
    res.status(200).json({ ok: true, maskedEmail: maskEmail(info.email) });
  } catch (err) {
    console.error("resend-link error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
