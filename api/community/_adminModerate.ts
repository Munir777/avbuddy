import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { checkAdminAuth } from "../_admin.js";

const MAX_REASON_LEN = 300;
// Same cap as api/community/_send.ts's own MAX_BODY_LEN -- an admin edit
// is still a message body, so it stays inside the limit a normal post
// would have to.
const MAX_BODY_LEN = 2000;

type Action = "delete_message" | "clear_flag" | "mute_user" | "unmute_user" | "edit_message";
const VALID_ACTIONS: Action[] = ["delete_message", "clear_flag", "mute_user", "unmute_user", "edit_message"];

interface Body {
  action?: unknown; // this message/user-scoped decision -- unrelated to api/community/admin.ts's `op` field
  messageId?: unknown;
  userId?: unknown;
  reason?: unknown;
  muteHours?: unknown; // omitted/0 = indefinite, until manually unmuted
  body?: unknown; // edit_message only -- the replacement text
}

// Five moderation actions behind one endpoint, same shape as
// api/submissions/_review.ts (id + action). delete_message soft-deletes
// (deleted_at, not a row removal, so it can still be audited), clear_flag
// un-flags a message the admin decided was fine without touching it, and
// edit_message rewrites the body in place and stamps edited_at (also not
// a row removal -- the original text isn't kept anywhere separate, same
// as delete_message doesn't keep the pre-delete body, but the edited_at
// timestamp is exposed to every reader so an edit is never silent) --
// all three act on a message id; mute_user / unmute_user act on a user
// id and are scoped to Community only, see community_mutes.
//
// Logic moved out of api/community/admin/moderate.ts -- see api/community/admin.ts.
export async function handleAdminModerate(req: VercelRequest, res: VercelResponse) {
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

    if (action === "delete_message" || action === "clear_flag" || action === "edit_message") {
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
      } else if (action === "clear_flag") {
        await sql`UPDATE community_messages SET flagged = false WHERE id = ${messageId}`;
      } else {
        const text = typeof body.body === "string" ? body.body.trim() : "";
        if (text.length < 1 || text.length > MAX_BODY_LEN) {
          res.status(400).json({ ok: false, error: "invalid_body" });
          return;
        }
        await sql`
          UPDATE community_messages
          SET body = ${text}, edited_at = now()
          WHERE id = ${messageId} AND deleted_at IS NULL
        `;
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
