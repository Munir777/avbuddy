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
