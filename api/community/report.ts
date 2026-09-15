import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";

const MAX_REASON_LEN = 300;

interface Body {
  messageId?: unknown;
  reason?: unknown;
}

// One report per user per message -- the PRIMARY KEY on
// community_message_reports (message_id, user_id) is what makes the
// ON CONFLICT DO NOTHING below safe against re-clicking "report": the
// RETURNING clause only comes back non-empty the first time, so the
// flag_count increment only ever fires once per user per message. A
// single report is enough to land a message in the admin queue (see
// api/community/admin/reports.ts) -- there's no threshold to clear.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();
    const user = await getSessionUser(req);
    if (!user) {
      res.status(401).json({ ok: false, error: "not_signed_in" });
      return;
    }

    const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const messageId = typeof body.messageId === "string" ? body.messageId : "";
    const reason = typeof body.reason === "string" ? body.reason.trim().slice(0, MAX_REASON_LEN) : "";
    if (!messageId) {
      res.status(400).json({ ok: false, error: "invalid_request" });
      return;
    }

    const inserted = await sql`
      INSERT INTO community_message_reports (message_id, user_id, reason)
      VALUES (${messageId}, ${user.id}, ${reason || null})
      ON CONFLICT (message_id, user_id) DO NOTHING
      RETURNING message_id
    `;
    if ((inserted as unknown[]).length > 0) {
      await sql`
        UPDATE community_messages
        SET flagged = true, flag_count = flag_count + 1
        WHERE id = ${messageId}
      `;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("community/report error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
