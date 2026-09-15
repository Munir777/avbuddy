import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "./_db.js";

interface Row {
  id: string;
  airline: string;
  published_title: string;
  published_summary: string | null;
  published_body: string;
}

// Public, unauthenticated -- only ever returns `status = 'approved'` rows.
// The raw submission text and the submitter's identity never leave
// api/submissions/mine.ts (their own) or api/submissions/list.ts (admin
// only); this endpoint only ever sees the post-review published_* columns.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();
    const rows = await sql`
      SELECT id, airline, published_title, published_summary, published_body
      FROM shared_submissions
      WHERE status = 'approved'
      ORDER BY reviewed_at DESC
    `;

    const entries = (rows as Row[]).map((r) => ({
      id: r.id,
      airline: r.airline,
      title: r.published_title,
      summary: r.published_summary,
      body: r.published_body,
    }));

    res.status(200).json({ ok: true, entries });
  } catch (err) {
    console.error("shared-material error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
