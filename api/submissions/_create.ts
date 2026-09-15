import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";
import { SUBMITTABLE_AIRLINES } from "../_shared.js";

const MAX_TITLE_LEN = 200;
const MIN_BODY_LEN = 30;
const MAX_BODY_LEN = 20000;
// Basic anti-spam, same idea as the auth_tokens resend cooldown in
// api/auth/_requestLink.ts: a signed-in account (itself gated behind
// email verification) can only fire this so often, and can only have so
// many things sitting in the review queue at once.
const SUBMIT_COOLDOWN_MS = 2 * 60 * 1000;
const MAX_PENDING_PER_USER = 5;

interface Body {
  airline?: unknown;
  rawTitle?: unknown;
  rawBody?: unknown;
}

// Logic moved out of api/submissions/create.ts -- see api/submissions.ts.
export async function handleCreate(req: VercelRequest, res: VercelResponse) {
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
    const airline = typeof body.airline === "string" ? body.airline : "";
    const rawTitle = typeof body.rawTitle === "string" ? body.rawTitle.trim().slice(0, MAX_TITLE_LEN) : "";
    const rawBody = typeof body.rawBody === "string" ? body.rawBody.trim() : "";

    if (!(SUBMITTABLE_AIRLINES as readonly string[]).includes(airline)) {
      res.status(400).json({ ok: false, error: "invalid_airline" });
      return;
    }
    if (rawBody.length < MIN_BODY_LEN) {
      res.status(400).json({ ok: false, error: "body_too_short" });
      return;
    }
    if (rawBody.length > MAX_BODY_LEN) {
      res.status(400).json({ ok: false, error: "body_too_long" });
      return;
    }

    const pendingRows = await sql`
      SELECT count(*)::int AS n FROM shared_submissions WHERE user_id = ${user.id} AND status = 'pending'
    `;
    const pendingCount = (pendingRows as { n: number }[])[0]?.n ?? 0;
    if (pendingCount >= MAX_PENDING_PER_USER) {
      res.status(429).json({ ok: false, error: "too_many_pending" });
      return;
    }

    const recentRows = await sql`
      SELECT created_at FROM shared_submissions WHERE user_id = ${user.id} ORDER BY created_at DESC LIMIT 1
    `;
    const last = (recentRows as { created_at: string }[])[0];
    if (last && Date.now() - new Date(last.created_at).getTime() < SUBMIT_COOLDOWN_MS) {
      res.status(429).json({ ok: false, error: "too_soon" });
      return;
    }

    const inserted = await sql`
      INSERT INTO shared_submissions (user_id, airline, raw_title, raw_body)
      VALUES (${user.id}, ${airline}, ${rawTitle || null}, ${rawBody})
      RETURNING id
    `;
    const id = (inserted as { id: string }[])[0]?.id;
    res.status(200).json({ ok: true, id });
  } catch (err) {
    console.error("submissions/create error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
