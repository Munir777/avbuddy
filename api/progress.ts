import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "./_db.js";
import { getSessionUser } from "./_auth.js";

interface IncomingEntry {
  key: string;
  correct: number;
  wrong: number;
  box: number;
  dueAt: number; // ms epoch
  lastSeenAt: number; // ms epoch
}

function isValidEntry(e: unknown): e is IncomingEntry {
  if (!e || typeof e !== "object") return false;
  const v = e as Record<string, unknown>;
  return (
    typeof v.key === "string" &&
    v.key.length > 0 &&
    v.key.length <= 500 &&
    Number.isFinite(v.correct) &&
    Number.isFinite(v.wrong) &&
    Number.isFinite(v.box) &&
    Number.isFinite(v.dueAt) &&
    Number.isFinite(v.lastSeenAt)
  );
}

// Sanity cap -- the whole question bank is under 1,000 questions, so a
// batch bigger than this is either a bug on the client or someone poking
// the endpoint directly.
const MAX_BATCH = 2000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await ensureSchema();
    const user = await getSessionUser(req);
    if (!user) {
      res.status(401).json({ ok: false, error: "not_signed_in" });
      return;
    }

    if (req.method === "GET") {
      const rows = await sql`
        SELECT question_key, correct, wrong, box, due_at, last_seen_at
        FROM user_progress
        WHERE user_id = ${user.id}
      `;
      const progress: Record<
        string,
        { correct: number; wrong: number; box: number; dueAt: number; lastSeenAt: number }
      > = {};
      for (const r of rows as {
        question_key: string;
        correct: number;
        wrong: number;
        box: number;
        due_at: string;
        last_seen_at: string;
      }[]) {
        progress[r.question_key] = {
          correct: r.correct,
          wrong: r.wrong,
          box: r.box,
          dueAt: new Date(r.due_at).getTime(),
          lastSeenAt: new Date(r.last_seen_at).getTime(),
        };
      }
      res.status(200).json({ ok: true, progress });
      return;
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const rawEntries: unknown[] = Array.isArray(body.entries) ? body.entries : [];
      const entries = rawEntries.filter(isValidEntry).slice(0, MAX_BATCH);

      if (entries.length > 0) {
        // One round trip regardless of batch size: unnest the arrays into
        // rows, then upsert. `WHERE EXCLUDED.last_seen_at >= ...` makes this
        // safe against an out-of-order retry or two tabs racing each other —
        // an older write can never clobber a newer one server-side, on top
        // of the last-write-wins merge already done on the client.
        const keys = entries.map((e) => e.key);
        const corrects = entries.map((e) => Math.max(0, Math.trunc(e.correct)));
        const wrongs = entries.map((e) => Math.max(0, Math.trunc(e.wrong)));
        const boxes = entries.map((e) => Math.max(0, Math.trunc(e.box)));
        const dueAts = entries.map((e) => new Date(e.dueAt).toISOString());
        const lastSeenAts = entries.map((e) => new Date(e.lastSeenAt).toISOString());

        await sql`
          INSERT INTO user_progress (user_id, question_key, correct, wrong, box, due_at, last_seen_at)
          SELECT ${user.id}, k, c, w, b, d::timestamptz, l::timestamptz
          FROM unnest(
            ${keys}::text[],
            ${corrects}::int[],
            ${wrongs}::int[],
            ${boxes}::int[],
            ${dueAts}::text[],
            ${lastSeenAts}::text[]
          ) AS t(k, c, w, b, d, l)
          ON CONFLICT (user_id, question_key) DO UPDATE
          SET correct = EXCLUDED.correct,
              wrong = EXCLUDED.wrong,
              box = EXCLUDED.box,
              due_at = EXCLUDED.due_at,
              last_seen_at = EXCLUDED.last_seen_at
          WHERE EXCLUDED.last_seen_at >= user_progress.last_seen_at
        `;
      }

      res.status(200).json({ ok: true });
      return;
    }

    if (req.method === "DELETE") {
      await sql`DELETE FROM user_progress WHERE user_id = ${user.id}`;
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ ok: false });
  } catch (err) {
    console.error("progress error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
