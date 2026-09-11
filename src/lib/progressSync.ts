// Cross-device progress sync -- talks to /api/progress. Mirrors the pattern
// in auth.ts: the session cookie is httpOnly and handled by the browser, so
// this module just needs `credentials: "include"` on every call.
//
// Local storage (progress.ts) stays the source of truth for rendering and
// for signed-out / offline use (studying during a flight or sim session
// with no signal is a stated requirement). This module's job is narrower:
// keep the server copy converging with whatever localStorage says, in both
// directions, whenever the visitor is signed in.

import { mergeServerProgress, type ProgressMap, type QuestionStat } from "./progress";

interface ServerEntry {
  key: string;
  correct: number;
  wrong: number;
  box: number;
  dueAt: number;
  lastSeenAt: number;
}

export async function pullServerProgress(): Promise<ProgressMap | null> {
  try {
    const res = await fetch("/api/progress", { credentials: "include" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.ok ? (data.progress as ProgressMap) : null;
  } catch {
    return null;
  }
}

export async function pushProgressEntries(entries: { key: string; stat: QuestionStat }[]): Promise<void> {
  if (entries.length === 0) return;
  const payload: ServerEntry[] = entries.map(({ key, stat }) => ({
    key,
    correct: stat.correct,
    wrong: stat.wrong,
    box: stat.box,
    dueAt: stat.dueAt,
    lastSeenAt: stat.lastSeenAt,
  }));
  try {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ entries: payload }),
    });
  } catch {
    // Best-effort -- localStorage already has this device's copy; a failed
    // push just means it retries on the next answer or the next sign-in.
  }
}

// Called once, right after the app learns the visitor is signed in: pulls
// whatever the account already has on the server, merges it into this
// device's localStorage (most-recently-studied wins per question -- see
// mergeServerProgress), then pushes the merged result back up. That push-
// back matters the first time someone signs in on a device that already had
// local (pre-sign-in / guest) progress -- otherwise it would sit on this
// device only until the next answer happened to touch each question.
export async function syncProgressOnSignIn(): Promise<void> {
  const server = await pullServerProgress();
  if (!server) return;
  const merged = mergeServerProgress(server);
  await pushProgressEntries(Object.keys(merged).map((key) => ({ key, stat: merged[key] })));
}

// Clears this account's server-side progress. Called alongside the existing
// local resetProgress() so "reset progress" while signed in doesn't leave a
// stale copy on the server that comes back on the next sync.
export async function clearServerProgress(): Promise<void> {
  try {
    await fetch("/api/progress", { method: "DELETE", credentials: "include" });
  } catch {
    // Best-effort, same reasoning as pushProgressEntries.
  }
}
