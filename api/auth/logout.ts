import type { VercelRequest, VercelResponse } from "@vercel/node";
import { destroySession, clearSessionCookie, parseCookies, SESSION_COOKIE } from "../_auth.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    const raw = parseCookies(req.headers.cookie)[SESSION_COOKIE];
    if (raw) await destroySession(raw);
    clearSessionCookie(res);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("logout error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
