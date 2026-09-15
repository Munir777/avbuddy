import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";

interface Row {
  id: string;
  airline: string;
  raw_title: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

// Lets a signed-in submitter see the status of their own submissions --
// pending / published / not published, with the admin's note if they left
// one on a rejection -- without needing to ask separately. Deliberately
// never exposes anyone else's submissions or raw content.
//
// Logic moved out of api/submissions/mine.ts -- see api/submissions.ts.
export async function handleMine(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
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

    const rows = await sql`
      SELECT id, airline, raw_title, status, admin_notes, created_at
      FROM shared_submissions
      WHERE user_id = ${user.id}
      ORDER BY created_at DESC
    `;

    const submissions = (rows as Row[]).map((r) => ({
      id: r.id,
      airline: r.airline,
      title: r.raw_title,
      status: r.status,
      adminNotes: r.admin_notes,
      createdAt: r.created_at,
    }));

    res.status(200).json({ ok: true, submissions });
  } catch (err) {
    console.error("submissions/mine error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
