import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";

// Logic moved out of api/auth/me.ts -- see api/auth.ts.
export async function handleMe(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();
    const user = await getSessionUser(req);
    if (!user) {
      res.status(200).json({ ok: true, signedIn: false });
      return;
    }
    res.status(200).json({ ok: true, signedIn: true, email: user.email });
  } catch (err) {
    console.error("me error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
