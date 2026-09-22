import type { Question } from "../types";

// Anonymous (signed-out) visitors get exactly one 30-question random quiz
// before everything else requires an account. This flag is the only thing
// that gates it -- deliberately simple (a determined visitor could clear
// localStorage or use a private window to get another free quiz), same
// trade-off as the rest of this app's localStorage-based state. It's a
// soft gate meant to get people to sign up, not a security boundary.

const FREE_QUIZ_KEY = "avbuddy_free_quiz_used";
export const FREE_QUIZ_COUNT = 30;

export function hasUsedFreeQuiz(): boolean {
  try {
    return localStorage.getItem(FREE_QUIZ_KEY) === "1";
  } catch {
    return false;
  }
}

export function markFreeQuizUsed(): void {
  try {
    localStorage.setItem(FREE_QUIZ_KEY, "1");
  } catch {
    // Best-effort -- worst case a blocked/full localStorage means the free
    // quiz can be retried, which is the safe direction to fail in.
  }
}

// The drawn question set + progress for an in-progress (or just-finished)
// free quiz, so an accidental refresh resumes exactly where the visitor
// left off instead of burning their one free quiz on a reload. Cleared once
// they abandon it, start a new one, or sign in.
export interface FreeQuizState {
  phase: "active" | "results";
  questions: Question[];
  index: number;
  selected: number | null;
  revealed: boolean;
  results: { questionId: number; correct: boolean }[];
}

const FREE_QUIZ_STATE_KEY = "avbuddy_free_quiz_state";

export function saveFreeQuizState(state: FreeQuizState): void {
  try {
    localStorage.setItem(FREE_QUIZ_STATE_KEY, JSON.stringify(state));
  } catch {
    // Best-effort -- worst case a refresh loses progress, same as before this existed.
  }
}

export function loadFreeQuizState(): FreeQuizState | null {
  try {
    const raw = localStorage.getItem(FREE_QUIZ_STATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as FreeQuizState;
    if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearFreeQuizState(): void {
  try {
    localStorage.removeItem(FREE_QUIZ_STATE_KEY);
  } catch {
    // Best-effort.
  }
}

// Anonymous (signed-out) visitors also get Study mode, capped at a running
// total of distinct questions seen (not per-category, not per-session --
// once a question's been unlocked for free it stays revisitable forever,
// but the 26th *new* one requires an account). Same soft-gate philosophy
// as the free quiz: simple, not a security boundary, easy to clear by
// clearing localStorage.
const FREE_STUDY_KEY = "avbuddy_free_study_seen";
export const FREE_STUDY_LIMIT = 25;

export function getFreeStudySeenIds(): Set<number> {
  try {
    const raw = localStorage.getItem(FREE_STUDY_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    return new Set(Array.isArray(parsed) ? (parsed as number[]) : []);
  } catch {
    return new Set();
  }
}

export function recordFreeStudyQuestionSeen(id: number): void {
  try {
    const seen = getFreeStudySeenIds();
    if (seen.has(id) || seen.size >= FREE_STUDY_LIMIT) return;
    seen.add(id);
    localStorage.setItem(FREE_STUDY_KEY, JSON.stringify(Array.from(seen)));
  } catch {
    // Best-effort.
  }
}
