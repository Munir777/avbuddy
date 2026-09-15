import type { VercelRequest, VercelResponse } from "@vercel/node";

// Same shared-secret gate /api/stats already uses (the admin panel sends
// this header on every request once it's been unlocked with the
// password). Returns true and does nothing further when authorized;
// otherwise it writes the 401 itself and returns false, so a handler can
// just do `if (!checkAdminAuth(req, res)) return;` as its first line.
export function checkAdminAuth(req: VercelRequest, res: VercelResponse): boolean {
  const providedSecret = req.headers["x-admin-secret"];
  const expectedSecret = process.env.ADMIN_SECRET;
  if (!expectedSecret || providedSecret !== expectedSecret) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return false;
  }
  return true;
}
