import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { COMMUNITY_ROOMS, isCommunityEnabled, getRoomStatus, resolveDisplayName } from "./_common.js";

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;

interface Row {
  id: string;
  seq: string; // bigint comes back as a string from the driver
  user_id: string;
  display_name: string | null;
  body: string;
  created_at: string;
}

// Public, unauthenticated -- reading a room never requires sign-in (the
// access model is "open to read, gated to post"). Polling clients pass
// `after` (the highest `seq` they already have) and get back only what's
// new since then, in seq order -- that's the whole near-live mechanism,
// no sockets involved. See CommunityView.tsx for the polling loop.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();
    const room = typeof req.query.room === "string" ? req.query.room : "";
    if (!(COMMUNITY_ROOMS as readonly string[]).includes(room)) {
      res.status(400).json({ ok: false, error: "invalid_room" });
      return;
    }

    const parsedAfter = Number.parseInt(typeof req.query.after === "string" ? req.query.after : "0", 10);
    const after = Number.isFinite(parsedAfter) ? Math.max(0, parsedAfter) : 0;
    const parsedLimit = Number.parseInt(typeof req.query.limit === "string" ? req.query.limit : "", 10);
    const limit = Number.isFinite(parsedLimit) ? Math.min(MAX_LIMIT, Math.max(1, parsedLimit)) : DEFAULT_LIMIT;

    const enabled = await isCommunityEnabled();
    const status = await getRoomStatus(room);

    // A disabled/hidden room still answers 200 (not an error -- a client
    // polling a room that just got hidden shouldn't treat that as a
    // network failure) but with nothing in it.
    if (!enabled || status === "hidden") {
      res.status(200).json({ ok: true, enabled, status, messages: [], latestSeq: after });
      return;
    }

    const rows = await sql`
      SELECT m.id, m.seq, m.user_id, u.display_name, m.body, m.created_at
      FROM community_messages m
      JOIN users u ON u.id = m.user_id
      WHERE m.room = ${room} AND m.seq > ${after} AND m.deleted_at IS NULL
      ORDER BY m.seq ASC
      LIMIT ${limit}
    `;

    const messages = (rows as Row[]).map((r) => ({
      id: r.id,
      seq: Number(r.seq),
      displayName: resolveDisplayName(r.display_name, r.user_id),
      body: r.body,
      createdAt: r.created_at,
    }));

    const latestSeq = messages.length > 0 ? messages[messages.length - 1].seq : after;
    res.status(200).json({ ok: true, enabled, status, messages, latestSeq });
  } catch (err) {
    console.error("community/messages error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
