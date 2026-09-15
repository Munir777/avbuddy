import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleMe } from "./auth/_me.js";
import { handleLogout } from "./auth/_logout.js";
import { handleRequestLink } from "./auth/_requestLink.js";
import { handleVerify } from "./auth/_verify.js";

// One Vercel Function for the whole auth surface, instead of the four
// (logout/me/request-link/verify) it used to be. Not a design choice --
// Vercel's Hobby plan caps a deployment at 12 Vercel Functions when every
// api/*.ts file maps 1:1 to a Function (see api/community/index.ts for
// the fuller story; this project hit that cap once Community shipped).
// Nothing in the underlying logic changed: each api/auth/_*.ts file is
// the original handler, unchanged, just renamed and no longer itself a
// routed file (the leading underscore excludes it from becoming a
// Function -- same convention as api/_auth.ts, api/_db.ts, etc).
//
// GET -> "who am I". POST -> body.op picks the operation.
//
// TO REVERT once this consolidation is no longer needed (Pro plan, or a
// future Vercel limit change): create api/auth/logout.ts, me.ts,
// request-link.ts, verify.ts, each containing just
// `export { handleX as default } from "./_x.js";`, delete this file, and
// change src/lib/auth.ts's four fetch calls back to
// /api/auth/{logout,me,request-link,verify} (dropping the `op` field).
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return handleMe(req, res);
  }

  if (req.method === "POST") {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const op = typeof body.op === "string" ? body.op : "";
    if (op === "logout") return handleLogout(req, res);
    if (op === "request-link") return handleRequestLink(req, res);
    if (op === "verify") return handleVerify(req, res);
    res.status(400).json({ ok: false, error: "invalid_op" });
    return;
  }

  res.status(405).json({ ok: false });
}
