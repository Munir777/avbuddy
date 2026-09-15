// Client-side helpers for the Shared Material submission pipeline -- talks
// to /api/submissions (one consolidated endpoint, see the comment at the
// top of that file for why) and /api/shared-material, mirroring the
// pattern in lib/auth.ts (session cookie handled by the browser, this
// module just wraps the fetch calls and normalises the response shape).
import type { Airline } from "../data/sharedMaterial";

export interface MySubmission {
  id: string;
  airline: string;
  title: string | null;
  status: "pending" | "approved" | "rejected";
  adminNotes: string | null;
  createdAt: string;
}

export interface CommunityEntry {
  id: string;
  airline: string;
  title: string;
  summary: string | null;
  body: string;
}

export async function submitExperience(
  airline: Airline,
  rawTitle: string,
  rawBody: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ op: "create", airline, rawTitle, rawBody }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "request_failed" };
    return { ok: true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

export async function fetchMySubmissions(): Promise<MySubmission[]> {
  try {
    const res = await fetch("/api/submissions?resource=mine", { credentials: "include" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.ok ? data.submissions : [];
  } catch {
    return [];
  }
}

export async function fetchCommunityEntries(): Promise<CommunityEntry[]> {
  try {
    const res = await fetch("/api/shared-material");
    if (!res.ok) return [];
    const data = await res.json();
    return data.ok ? data.entries : [];
  } catch {
    return [];
  }
}
