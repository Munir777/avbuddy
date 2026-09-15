import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { checkAdminAuth } from "../_admin.js";

interface Row {
  id: string;
  airline: string;
  raw_title: string | null;
  raw_body: string;
  status: string;
  published_title: string | null;
  published_summary: string | null;
  published_body: string | null;
  admin_notes: string | null;
  created_at: string;
  reviewed_at: string | null;
  submitter_email: string;
}

const VALID_STATUSES = ["pending", "approved", "rejected"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();
    const statusFilter =
      typeof req.query.status === "string" && VALID_STATUSES.includes(req.query.status)
        ? req.query.status
        : "pending";

    const rows = await sql`
      SELECT s.id, s.airline, s.raw_title, s.raw_body, s.status, s.published_title,
             s.published_summary, s.published_body, s.admin_notes, s.created_at, s.reviewed_at,
             u.email AS submitter_email
      FROM shared_submissions s
      JOIN users u ON u.id = s.user_id
      WHERE s.status = ${statusFilter}
      ORDER BY s.created_at ASC
    `;

    const submissions = (rows as Row[]).map((r) => ({
      id: r.id,
      airline: r.airline,
      rawTitle: r.raw_title,
      rawBody: r.raw_body,
      status: r.status,
      publishedTitle: r.published_title,
      publishedSummary: r.published_summary,
      publishedBody: r.published_body,
      adminNotes: r.admin_notes,
      createdAt: r.created_at,
      reviewedAt: r.reviewed_at,
      submitterEmail: r.submitter_email,
    }));

    res.status(200).json({ ok: true, submissions });
  } catch (err) {
    console.error("submissions/list error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
