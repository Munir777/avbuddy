import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleSend } from "./_send.js";
import { handleReport } from "./_report.js";

// POST-only actions for signed-in users -- send a message, report one.
// See index.ts for the full consolidation story and the revert
// procedure. Routed by body.op.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const op = typeof body.op === "string" ? body.op : "";
  if (op === "send") return handleSend(req, res);
  if (op === "report") return handleReport(req, res);
  res.status(400).json({ ok: false, error: "invalid_op" });
}
