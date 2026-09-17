import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { checkAdminAuth } from "../_admin.js";
import { COMMUNITY_ROOMS, resolveDisplayName } from "./_common.js";

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

interface Row {
  id: string;
  seq: string; // bigint comes back as a string from the driver
  room: string;
  user_id: string;
  display_name: string | null;
  email: string;
  body: string;
  created_at: string;
  edited_at: string | null;
  flagged: boolean;
}

// Admin's general "browse any post" view -- unlike api/community/_messages.ts
// (the public feed, newest-last, only ever growing forward from a `seq`
// cursor), this reads newest-first and pages backward with `before` (the
// lowest seq already loaded) so an admin can scroll back through a room's
// whole history, not just what's currently flagged. Deleted messages are
// left out on purpose: there's nothing left worth editing on one, and
// api/community/_adminReports.ts already covers the flagged queue.
export async function handleAdminMessages(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();
    const room = typeof req.query.room === "string" ? req.query.room : "";
    if (!(COMMUNITY_ROOMS as readonly string[]).includes(room)) {
      res.status(400).json({ ok: false, error: "invalid_room" });
      return;
    }

    const parsedBefore = Number.parseInt(typeof req.query.before === "string" ? req.query.before : "", 10);
    const before = Number.isFinite(parsedBefore) && parsedBefore > 0 ? parsedBefore : null;
    const parsedLimit = Number.parseInt(typeof req.query.limit === "string" ? req.query.limit : "", 10);
    const limit = Number.isFinite(parsedLimit) ? Math.min(MAX_LIMIT, Math.max(1, parsedLimit)) : DEFAULT_LIMIT;

    const rows = before
      ? await sql`
          SELECT m.id, m.seq, m.room, m.user_id, u.display_name, u.email, m.body, m.created_at, m.edited_at, m.flagged
          FROM community_messages m
          JOIN users u ON u.id = m.user_id
          WHERE m.room = ${room} AND m.seq < ${before} AND m.deleted_at IS NULL
          ORDER BY m.seq DESC
          LIMIT ${limit}
        `
      : await sql`
          SELECT m.id, m.seq, m.room, m.user_id, u.display_name, u.email, m.body, m.created_at, m.edited_at, m.flagged
          FROM community_messages m
          JOIN users u ON u.id = m.user_id
          WHERE m.room = ${room} AND m.deleted_at IS NULL
          ORDER BY m.seq DESC
          LIMIT ${limit}
        `;

    const messages = (rows as Row[]).map((r) => ({
      id: r.id,
      seq: Number(r.seq),
      room: r.room,
      displayName: resolveDisplayName(r.display_name, r.user_id),
      authorEmail: r.email,
      authorId: r.user_id,
      body: r.body,
      createdAt: r.created_at,
      editedAt: r.edited_at,
      flagged: r.flagged,
    }));

    const oldestSeq = messages.length > 0 ? messages[messages.length - 1].seq : null;
    res.status(200).json({ ok: true, messages, oldestSeq, hasMore: messages.length === limit });
  } catch (err) {
    console.error("community/admin/messages error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
