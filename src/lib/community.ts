// Client-side helpers for the Community feature -- talks to
// /api/community/*. Polling (not sockets) is the whole design: CommunityView
// calls fetchMessages on an interval, only while its tab is mounted and the
// browser tab itself is foreground (Page Visibility API) -- see that
// component for the actual loop.
export type RoomStatus = "open" | "read_only" | "hidden";

export interface RoomInfo {
  room: string;
  status: RoomStatus;
}

export interface CommunityMessage {
  id: string;
  seq: number;
  displayName: string;
  body: string;
  createdAt: string;
}

export async function fetchRooms(): Promise<{ enabled: boolean; rooms: RoomInfo[] }> {
  try {
    const res = await fetch("/api/community/rooms");
    if (!res.ok) return { enabled: false, rooms: [] };
    const data = await res.json();
    return data.ok ? { enabled: data.enabled, rooms: data.rooms } : { enabled: false, rooms: [] };
  } catch {
    return { enabled: false, rooms: [] };
  }
}

export async function fetchMessages(
  room: string,
  after: number
): Promise<{ enabled: boolean; status: RoomStatus; messages: CommunityMessage[]; latestSeq: number }> {
  try {
    const res = await fetch(`/api/community/messages?room=${encodeURIComponent(room)}&after=${after}`);
    if (!res.ok) return { enabled: false, status: "hidden", messages: [], latestSeq: after };
    const data = await res.json();
    if (!data.ok) return { enabled: false, status: "hidden", messages: [], latestSeq: after };
    return { enabled: data.enabled, status: data.status, messages: data.messages, latestSeq: data.latestSeq };
  } catch {
    return { enabled: false, status: "hidden", messages: [], latestSeq: after };
  }
}

export async function sendMessage(
  room: string,
  body: string
): Promise<{ ok: boolean; message?: CommunityMessage; error?: string }> {
  try {
    const res = await fetch("/api/community/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ room, body }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "request_failed" };
    return { ok: true, message: data.message };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

export async function reportMessage(messageId: string, reason?: string): Promise<boolean> {
  try {
    const res = await fetch("/api/community/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ messageId, reason }),
    });
    const data = await res.json().catch(() => ({}));
    return res.ok && !!data.ok;
  } catch {
    return false;
  }
}

export interface ProfileInfo {
  displayName: string | null;
  isDefault: boolean;
  defaultName: string;
}

export async function fetchProfile(): Promise<ProfileInfo | null> {
  try {
    const res = await fetch("/api/community/profile", { credentials: "include" });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.ok) return null;
    return { displayName: data.displayName, isDefault: data.isDefault, defaultName: data.defaultName };
  } catch {
    return null;
  }
}

export async function setDisplayName(displayName: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/community/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ displayName }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "request_failed" };
    return { ok: true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}
