import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { checkAdminAuth } from "../_admin.js";

const MAX_TITLE_LEN = 200;
const MAX_SUMMARY_LEN = 300;
const MAX_BODY_LEN = 20000;
const MAX_NOTES_LEN = 1000;

interface Body {
  id?: unknown;
  action?: unknown; // "approve" | "reject"
  publishedTitle?: unknown;
  publishedSummary?: unknown;
  publishedBody?: unknown;
  adminNotes?: unknown;
}

// The `AND status = 'pending'` guard on both updates below is what makes
// this safe against a double-click or two admin tabs open at once --
// whichever request lands first flips the row out of 'pending', so the
// second is a no-op rather than a second publish/reject.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();
    const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const id = typeof body.id === "string" ? body.id : "";
    const action = body.action === "approve" || body.action === "reject" ? body.action : null;
    const adminNotes = typeof body.adminNotes === "string" ? body.adminNotes.trim().slice(0, MAX_NOTES_LEN) : "";

    if (!id || !action) {
      res.status(400).json({ ok: false, error: "invalid_request" });
      return;
    }

    if (action === "reject") {
      await sql`
        UPDATE shared_submissions
        SET status = 'rejected', admin_notes = ${adminNotes || null}, reviewed_at = now(), updated_at = now()
        WHERE id = ${id} AND status = 'pending'
      `;
      res.status(200).json({ ok: true });
      return;
    }

    const publishedTitle =
      typeof body.publishedTitle === "string" ? body.publishedTitle.trim().slice(0, MAX_TITLE_LEN) : "";
    const publishedSummary =
      typeof body.publishedSummary === "string" ? body.publishedSummary.trim().slice(0, MAX_SUMMARY_LEN) : "";
    const publishedBody =
      typeof body.publishedBody === "string" ? body.publishedBody.trim().slice(0, MAX_BODY_LEN) : "";

    if (!publishedTitle || !publishedBody) {
      res.status(400).json({ ok: false, error: "missing_published_content" });
      return;
    }

    await sql`
      UPDATE shared_submissions
      SET status = 'approved',
          published_title = ${publishedTitle},
          published_summary = ${publishedSummary || null},
          published_body = ${publishedBody},
          admin_notes = ${adminNotes || null},
          reviewed_at = now(),
          updated_at = now()
      WHERE id = ${id} AND status = 'pending'
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("submissions/review error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
