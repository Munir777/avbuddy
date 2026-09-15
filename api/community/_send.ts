import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";
import { COMMUNITY_ROOMS, isCommunityEnabled, getRoomStatus, getMuteStatus, resolveDisplayName } from "./_common.js";

const MIN_BODY_LEN = 1;
const MAX_BODY_LEN = 2000;
// A message every couple of seconds is normal typing pace -- this only
// catches a runaway script or a fast double-submit, not an actual
// conversation, same spirit as the submissions cooldown in
// api/submissions/_create.ts.
const SEND_COOLDOWN_MS = 1500;

interface Body {
  room?: unknown;
  body?: unknown;
}

// Logic moved out of api/community/send.ts -- see api/community/actions.ts.
export async function handleSend(req: VercelRequest, res: VercelResponse) {
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

    const enabled = await isCommunityEnabled();
    if (!enabled) {
      res.status(403).json({ ok: false, error: "community_disabled" });
      return;
    }

    const mute = await getMuteStatus(user.id);
    if (mute) {
      res.status(403).json({ ok: false, error: "muted", mutedUntil: mute.until });
      return;
    }

    const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const room = typeof body.room === "string" ? body.room : "";
    const text = typeof body.body === "string" ? body.body.trim() : "";

    if (!(COMMUNITY_ROOMS as readonly string[]).includes(room)) {
      res.status(400).json({ ok: false, error: "invalid_room" });
      return;
    }
    const status = await getRoomStatus(room);
    if (status !== "open") {
      res.status(403).json({ ok: false, error: status === "hidden" ? "room_hidden" : "room_read_only" });
      return;
    }
    if (text.length < MIN_BODY_LEN) {
      res.status(400).json({ ok: false, error: "empty_message" });
      return;
    }
    if (text.length > MAX_BODY_LEN) {
      res.status(400).json({ ok: false, error: "message_too_long" });
      return;
    }

    const recentRows = await sql`
      SELECT created_at FROM community_messages WHERE user_id = ${user.id} ORDER BY created_at DESC LIMIT 1
    `;
    const last = (recentRows as { created_at: string }[])[0];
    if (last && Date.now() - new Date(last.created_at).getTime() < SEND_COOLDOWN_MS) {
      res.status(429).json({ ok: false, error: "too_soon" });
      return;
    }

    const rows = await sql`
      INSERT INTO community_messages (room, user_id, body)
      VALUES (${room}, ${user.id}, ${text})
      RETURNING id, seq, created_at
    `;
    const inserted = (rows as { id: string; seq: string; created_at: string }[])[0];

    const profileRows = await sql`SELECT display_name FROM users WHERE id = ${user.id}`;
    const displayName = (profileRows as { display_name: string | null }[])[0]?.display_name ?? null;

    // Returning the fully-formed message here (rather than making the
    // client immediately re-poll) is deliberate -- see CommunityView.tsx:
    // the sender's own bubble appears from this response, and the next
    // regular poll naturally continues on from its `seq` for everyone else.
    res.status(200).json({
      ok: true,
      message: {
        id: inserted.id,
        seq: Number(inserted.seq),
        displayName: resolveDisplayName(displayName, user.id),
        body: text,
        createdAt: inserted.created_at,
      },
    });
  } catch (err) {
    console.error("community/send error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
