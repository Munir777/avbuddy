import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../../_db.js";
import { checkAdminAuth } from "../../_admin.js";

const MAX_REASON_LEN = 300;

type Action = "delete_message" | "clear_flag" | "mute_user" | "unmute_user";
const VALID_ACTIONS: Action[] = ["delete_message", "clear_flag", "mute_user", "unmute_user"];

interface Body {
  action?: unknown;
  messageId?: unknown;
  userId?: unknown;
  reason?: unknown;
  muteHours?: unknown; // omitted/0 = indefinite, until manually unmuted
}

// Four moderation actions behind one endpoint, same shape as
// api/submissions/review.ts (id + action). delete_message soft-deletes
// (deleted_at, not a row removal, so it can still be audited) and
// clear_flag un-flags a message the admin decided was fine without
// touching it -- both act on a message id; mute_user / unmute_user act on
// a user id and are scoped to Community only, see community_mutes.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();
    const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const action = VALID_ACTIONS.includes(body.action as Action) ? (body.action as Action) : null;
    const reason = typeof body.reason === "string" ? body.reason.trim().slice(0, MAX_REASON_LEN) : "";
    if (!action) {
      res.status(400).json({ ok: false, error: "invalid_action" });
      return;
    }

    if (action === "delete_message" || action === "clear_flag") {
      const messageId = typeof body.messageId === "string" ? body.messageId : "";
      if (!messageId) {
        res.status(400).json({ ok: false, error: "invalid_request" });
        return;
      }
      if (action === "delete_message") {
        await sql`
          UPDATE community_messages
          SET deleted_at = now(), deleted_reason = ${reason || null}
          WHERE id = ${messageId}
        `;
      } else {
        await sql`UPDATE community_messages SET flagged = false WHERE id = ${messageId}`;
      }
      res.status(200).json({ ok: true });
      return;
    }

    // mute_user / unmute_user
    const userId = typeof body.userId === "string" ? body.userId : "";
    if (!userId) {
      res.status(400).json({ ok: false, error: "invalid_request" });
      return;
    }

    if (action === "unmute_user") {
      await sql`DELETE FROM community_mutes WHERE user_id = ${userId}`;
      res.status(200).json({ ok: true });
      return;
    }

    const hours = typeof body.muteHours === "number" && body.muteHours > 0 ? body.muteHours : null;
    const mutedUntil = hours ? new Date(Date.now() + hours * 60 * 60 * 1000).toISOString() : null;
    await sql`
      INSERT INTO community_mutes (user_id, muted_until, reason)
      VALUES (${userId}, ${mutedUntil}, ${reason || null})
      ON CONFLICT (user_id) DO UPDATE SET muted_until = EXCLUDED.muted_until, reason = EXCLUDED.reason, created_at = now()
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("community/admin/moderate error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
