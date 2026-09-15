import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ensureSchema } from "../../_db.js";
import { checkAdminAuth } from "../../_admin.js";
import {
  COMMUNITY_ROOMS,
  isCommunityEnabled,
  setCommunityEnabled,
  getAllRoomStatuses,
  setRoomStatus,
  type RoomStatus,
} from "../_common.js";

const VALID_STATUSES: RoomStatus[] = ["open", "read_only", "hidden"];

interface Body {
  enabled?: unknown;
  room?: unknown;
  status?: unknown;
}

// One endpoint for both halves of the kill switch: the global `enabled`
// flag (community_enabled in app_settings) and a single room's status.
// A request can set either or both in one call -- GET just reads the
// current state, which the admin panel also uses to repaint after a POST.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!checkAdminAuth(req, res)) return;

  try {
    await ensureSchema();

    if (req.method === "GET") {
      const enabled = await isCommunityEnabled();
      const statuses = await getAllRoomStatuses();
      const rooms = COMMUNITY_ROOMS.map((room) => ({ room, status: statuses[room] }));
      res.status(200).json({ ok: true, enabled, rooms });
      return;
    }

    if (req.method === "POST") {
      const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

      if (typeof body.enabled === "boolean") {
        await setCommunityEnabled(body.enabled);
      }

      if (typeof body.room === "string" && typeof body.status === "string") {
        if (!(COMMUNITY_ROOMS as readonly string[]).includes(body.room)) {
          res.status(400).json({ ok: false, error: "invalid_room" });
          return;
        }
        if (!VALID_STATUSES.includes(body.status as RoomStatus)) {
          res.status(400).json({ ok: false, error: "invalid_status" });
          return;
        }
        await setRoomStatus(body.room, body.status as RoomStatus);
      }

      const enabled = await isCommunityEnabled();
      const statuses = await getAllRoomStatuses();
      const rooms = COMMUNITY_ROOMS.map((room) => ({ room, status: statuses[room] }));
      res.status(200).json({ ok: true, enabled, rooms });
      return;
    }

    res.status(405).json({ ok: false });
  } catch (err) {
    console.error("community/admin/settings error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
