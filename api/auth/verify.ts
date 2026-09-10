import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { consumeMagicLinkToken, createSession, setSessionCookie } from "../_auth.js";

interface Body {
  token?: unknown;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    const userId = await consumeMagicLinkToken(token);
    if (!userId) {
      res.status(401).json({ ok: false, error: "invalid_or_expired" });
      return;
    }

    const rows = await sql`SELECT email FROM users WHERE id = ${userId}`;
    const email = (rows as { email: string }[])[0]?.email ?? "";

    const sessionToken = await createSession(userId);
    setSessionCookie(res, sessionToken);

    res.status(200).json({ ok: true, email });
  } catch (err) {
    console.error("verify error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
