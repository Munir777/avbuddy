import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCreate } from "./submissions/_create.js";
import { handleList } from "./submissions/_list.js";
import { handleMine } from "./submissions/_mine.js";
import { handleReview } from "./submissions/_review.js";

// One Vercel Function for the whole submissions surface, instead of the
// four (create/list/mine/review) it used to be -- see api/community/index.ts
// for the full story on why (Hobby's 12-function-per-deployment cap) and
// the exact revert procedure this file's comment mirrors.
//
// GET ?resource=mine -> the signed-in user's own submissions.
// GET (default)      -> the admin moderation list (still takes ?status=).
// POST body.op="create" -> submit a new one.
// POST body.op="review" -> admin approve/reject (that decision is its
//   own `action` field inside the body, "approve"/"reject" -- unrelated
//   to this file's `op` field, see submissions/_review.ts).
//
// TO REVERT: create api/submissions/create.ts, list.ts, mine.ts,
// review.ts, each containing just
// `export { handleX as default } from "./_x.js";`, delete this file, and
// update src/lib/submissions.ts (drop the `op` field, point at
// /api/submissions/create and /api/submissions/mine) and
// src/admin/SubmissionsPanel.tsx (point at /api/submissions/list and
// /api/submissions/review, dropping the `op` field from the review body).
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    if (req.query.resource === "mine") return handleMine(req, res);
    return handleList(req, res);
  }

  if (req.method === "POST") {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const op = typeof body.op === "string" ? body.op : "";
    if (op === "create") return handleCreate(req, res);
    if (op === "review") return handleReview(req, res);
    res.status(400).json({ ok: false, error: "invalid_op" });
    return;
  }

  res.status(405).json({ ok: false });
}
