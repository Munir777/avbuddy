import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema } from "../_db.js";
import { COMMUNITY_ROOMS, isCommunityEnabled, getAllRoomStatuses } from "./_common.js";

// Public, unauthenticated -- reading which rooms exist and whether they're
// open is part of "read is open to everyone" (see CommunityView.tsx). The
// room list itself is the fixed COMMUNITY_ROOMS set; this only adds live
// status on top of it.
//
// Logic moved out of api/community/rooms.ts -- see api/community/index.ts.
export async function handleRooms(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();
    const enabled = await isCommunityEnabled();
    const statuses = await getAllRoomStatuses();
    const rooms = COMMUNITY_ROOMS.map((room) => ({ room, status: statuses[room] }));
    res.status(200).json({ ok: true, enabled, rooms });
  } catch (err) {
    console.error("community/rooms error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
