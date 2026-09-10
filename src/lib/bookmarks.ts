// Manual "revisit this" flags -- independent of the auto-tracked missed-
// question list. Sometimes you want to mark something for reasons the
// algorithm can't see (a weird edge case, something an instructor mentioned).
// Stored in localStorage as a plain set of question ids, same soft/local
// trade-off as the rest of this app's client-side state.

const BOOKMARKS_KEY = "avbuddy_bookmarks";

function readIds(): number[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((n): n is number => typeof n === "number") : [];
  } catch {
    return [];
  }
}

function writeIds(ids: Set<number>): void {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...ids]));
  } catch {
    // Best-effort -- a blocked/full localStorage just means bookmarks don't persist.
  }
}

export function getBookmarkedIds(): Set<number> {
  return new Set(readIds());
}

export function isBookmarked(id: number): boolean {
  return readIds().includes(id);
}

export function toggleBookmark(id: number): void {
  const ids = getBookmarkedIds();
  if (ids.has(id)) ids.delete(id);
  else ids.add(id);
  writeIds(ids);
}
