import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { checkAdminAuth } from "../_admin.js";

interface Row {
  id: string;
  room: string;
  body: string;
  created_at: string;
  flag_count: number;
  author_email: string;
  author_id: string;
  reasons: (string | null)[];
}

// Flagged, not-yet-deleted messages, most-reported first -- this is the
// whole admin moderation queue. A message drops off the list the moment
// it's soft-deleted or cleared (see api/community/_adminModerate.ts), so
// there's no separate "handled" flag to manage.
//
// Logic moved out of api/community/admin/reports.ts -- see api/community/admin.ts.
export async function handleAdminReports(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();
    const rows = await sql`
      SELECT m.id, m.room, m.body, m.created_at, m.flag_count, u.email AS author_email, u.id AS author_id,
             array_agg(r.reason) AS reasons
      FROM community_messages m
      JOIN users u ON u.id = m.user_id
      LEFT JOIN community_message_reports r ON r.message_id = m.id
      WHERE m.flagged = true AND m.deleted_at IS NULL
      GROUP BY m.id, m.room, m.body, m.created_at, m.flag_count, u.email, u.id
      ORDER BY m.flag_count DESC, m.created_at ASC
    `;

    const reports = (rows as Row[]).map((r) => ({
      id: r.id,
      room: r.room,
      body: r.body,
      createdAt: r.created_at,
      flagCount: r.flag_count,
      authorEmail: r.author_email,
      authorId: r.author_id,
      reasons: r.reasons.filter((reason): reason is string => !!reason),
    }));

    res.status(200).json({ ok: true, reports });
  } catch (err) {
    console.error("community/admin/reports error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
