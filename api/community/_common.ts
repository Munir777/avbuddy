import { sql } from "../_db.js";

// Kept in sync by hand with AIRLINES in src/data/sharedMaterial.ts, same
// reasoning as api/_shared.ts -- these are the pre-made rooms, one per
// airline. Not imported across the api/src boundary on purpose.
export const COMMUNITY_ROOMS = ["Emirates", "Qatar Airways", "Etihad", "Riyadh Air", "FlyDubai"] as const;
export type CommunityRoom = (typeof COMMUNITY_ROOMS)[number];

export type RoomStatus = "open" | "read_only" | "hidden";

// The global kill switch. Missing row (nothing ever changed) = enabled,
// by convention -- the app_settings table only ever holds an explicit
// row once an admin has actually flipped something.
export async function isCommunityEnabled(): Promise<boolean> {
  const rows = await sql`SELECT value FROM app_settings WHERE key = 'community_enabled'`;
  const row = (rows as { value: string }[])[0];
  return row ? row.value === "true" : true;
}

export async function setCommunityEnabled(enabled: boolean): Promise<void> {
  await sql`
    INSERT INTO app_settings (key, value, updated_at)
    VALUES ('community_enabled', ${enabled ? "true" : "false"}, now())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()
  `;
}

// A room with no row is 'open' by the same missing-row-means-default
// convention as the global switch above.
export async function getRoomStatus(room: string): Promise<RoomStatus> {
  const rows = await sql`SELECT status FROM community_rooms WHERE room = ${room}`;
  const row = (rows as { status: string }[])[0];
  return (row?.status as RoomStatus) ?? "open";
}

export async function getAllRoomStatuses(): Promise<Record<string, RoomStatus>> {
  const rows = await sql`SELECT room, status FROM community_rooms`;
  const map: Record<string, RoomStatus> = {};
  for (const r of rows as { room: string; status: RoomStatus }[]) map[r.room] = r.status;
  for (const room of COMMUNITY_ROOMS) if (!map[room]) map[room] = "open";
  return map;
}

export async function setRoomStatus(room: string, status: RoomStatus): Promise<void> {
  await sql`
    INSERT INTO community_rooms (room, status, updated_at)
    VALUES (${room}, ${status}, now())
    ON CONFLICT (room) DO UPDATE SET status = EXCLUDED.status, updated_at = now()
  `;
}

// null = not muted. A mute is scoped to Community only (see the table
// comment in _db.ts) -- it never blocks sign-in or anything else in the app.
export async function getMuteStatus(userId: string): Promise<{ muted: boolean; until: string | null } | null> {
  const rows = await sql`
    SELECT muted_until FROM community_mutes
    WHERE user_id = ${userId} AND (muted_until IS NULL OR muted_until > now())
  `;
  const row = (rows as { muted_until: string | null }[])[0];
  if (!row) return null;
  return { muted: true, until: row.muted_until };
}

// Anonymous-by-default display name, derived deterministically from the
// user id so it's stable across sessions/devices without ever exposing
// the account's email in a public chat room. A user can override it via
// api/community/profile.ts.
export function anonName(userId: string): string {
  const hex = userId.replace(/-/g, "").slice(0, 6).toUpperCase();
  return `Pilot-${hex}`;
}

export function resolveDisplayName(displayName: string | null, userId: string): string {
  return displayName && displayName.trim() ? displayName.trim() : anonName(userId);
}
