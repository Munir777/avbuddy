import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema } from "../_db.js";
import { createSession, setSessionCookie, verifySignInCode } from "../_auth.js";

interface Body {
  email?: unknown;
  code?: unknown;
}

// Sign in by typing the 6-digit code from the email into the tab you're
// already in -- the alternative to clicking the link (which signs in
// whatever browser the email app happens to open).
export async function handleVerifyCode(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const email = typeof body.email === "string" ? body.email : "";
  const code = typeof body.code === "string" ? body.code.replace(/\s+/g, "") : "";
  if (!email || !code) {
    res.status(400).json({ ok: false, error: "invalid_code" });
    return;
  }

  try {
    await ensureSchema();
    const result = await verifySignInCode(email, code);
    if (!result.ok) {
      res.status(result.error === "too_many_attempts" ? 429 : 401).json({ ok: false, error: result.error });
      return;
    }
    const sessionToken = await createSession(result.userId);
    setSessionCookie(res, sessionToken);
    res.status(200).json({ ok: true, email: email.trim().toLowerCase() });
  } catch (err) {
    console.error("verify-code error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
