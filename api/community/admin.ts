import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleAdminSettings } from "./_adminSettings.js";
import { handleAdminReports } from "./_adminReports.js";
import { handleAdminModerate } from "./_adminModerate.js";
import { handleAdminMessages } from "./_adminMessages.js";

// Admin-only surface for Community: the kill switch + per-room status,
// the flagged-message queue, a general per-room post browser, and
// moderation actions. See index.ts for the full consolidation story and
// the revert procedure.
//
// GET ?resource=settings|reports|messages (messages also takes &room=
//   and, for paging further back, &before=).
// POST body.op="settings" (same fields the GET-side settings call
//   returns: enabled / room / status) or body.op="moderate" (that
//   action -- delete_message/clear_flag/edit_message/mute_user/unmute_user
//   -- is its own `action` field inside the body, unrelated to this `op`
//   field, see api/community/_adminModerate.ts).
//
// Each handler already enforces admin auth and its own allowed method(s)
// internally (unchanged from before the consolidation), so this file is
// purely a router.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const resource = typeof req.query.resource === "string" ? req.query.resource : "settings";
    if (resource === "settings") return handleAdminSettings(req, res);
    if (resource === "reports") return handleAdminReports(req, res);
    if (resource === "messages") return handleAdminMessages(req, res);
    res.status(400).json({ ok: false, error: "invalid_resource" });
    return;
  }

  if (req.method === "POST") {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const op = typeof body.op === "string" ? body.op : "";
    if (op === "settings") return handleAdminSettings(req, res);
    if (op === "moderate") return handleAdminModerate(req, res);
    res.status(400).json({ ok: false, error: "invalid_op" });
    return;
  }

  res.status(405).json({ ok: false });
}
