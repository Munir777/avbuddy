// Per-question progress tracking, stored locally in the browser only (no
// server involved — this is separate from the anonymous usage analytics in
// analytics.ts). Lets the app remember which questions you tend to get
// wrong across sessions, so "missed questions" mode and the weak-areas
// summary have something to work from.
//
// Questions get renumbered whenever categories are added/reordered in
// src/data/index.ts, so numeric `id` isn't a safe long-term key — a
// question's system + text is stable regardless of where it sits in the
// combined array, so that's what's used as the storage key.
//
// Spaced repetition: a missed question doesn't just sit in a static "wrong"
// bucket forever, and it doesn't get permanently cleared by one lucky guess
// either. Each question has a Leitner-style box (0-5) and a due date. Get it
// wrong -> back to box 0, due again immediately. Get it right -> advance a
// box, due again after that box's interval. So a question you just missed
// resurfaces right away; one you've now gotten right a few times in a row
// backs off to being asked again in a week, then a month, rather than
// nagging you or vanishing outright.

import type { Question } from "../types";

const STORAGE_KEY = "avbuddy_progress_v1";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
// Index = box number. Box 0 = due immediately (freshly missed / never
// scheduled). Each correct answer advances one box; any wrong answer drops
// straight back to box 0.
const BOX_INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];
const MAX_BOX = BOX_INTERVAL_DAYS.length - 1;

interface QuestionStat {
  correct: number;
  wrong: number;
  lastSeenAt: number;
  box: number;
  dueAt: number; // ms epoch; due for review once now >= dueAt
}

type ProgressMap = Record<string, QuestionStat>;

function keyFor(question: Question): string {
  return `${question.system}::${question.q}`;
}

function readMap(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, Partial<QuestionStat>>;
    const map: ProgressMap = {};
    for (const key of Object.keys(parsed)) {
      const s = parsed[key];
      // Backward-compat: entries saved before spaced repetition existed
      // won't have box/dueAt. Treat them as due right away with a rough
      // starting box guessed from their historical accuracy — after the
      // next attempt they're on a real schedule either way, and nothing
      // about their correct/wrong history is lost.
      const hasSchedule = typeof s.box === "number" && typeof s.dueAt === "number";
      map[key] = {
        correct: s.correct ?? 0,
        wrong: s.wrong ?? 0,
        lastSeenAt: s.lastSeenAt ?? 0,
        box: hasSchedule ? s.box! : (s.correct ?? 0) > (s.wrong ?? 0) ? 1 : 0,
        dueAt: hasSchedule ? s.dueAt! : 0,
      };
    }
    return map;
  } catch {
    return {};
  }
}

function writeMap(map: ProgressMap): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // Best-effort — a full/blocked localStorage just means progress isn't
    // remembered this session, not a reason to break studying.
  }
}

export function recordAnswer(question: Question, correct: boolean): void {
  const map = readMap();
  const key = keyFor(question);
  const existing = map[key] ?? { correct: 0, wrong: 0, lastSeenAt: 0, box: 0, dueAt: 0 };
  const now = Date.now();
  const box = correct ? Math.min(existing.box + 1, MAX_BOX) : 0;
  map[key] = {
    correct: existing.correct + (correct ? 1 : 0),
    wrong: existing.wrong + (correct ? 0 : 1),
    lastSeenAt: now,
    box,
    dueAt: now + BOX_INTERVAL_DAYS[box] * ONE_DAY_MS,
  };
  writeMap(map);
}

// "Missed" = ever gotten wrong at least once, and currently due for review
// on its spaced-repetition schedule. Unlike a simple wrong-more-than-right
// tally, a question you've now answered right several times in a row still
// resurfaces eventually (just on a longer interval) rather than being
// permanently cleared by a streak.
export function getMissedQuestions(all: Question[]): Question[] {
  const map = readMap();
  const now = Date.now();
  return all.filter((q) => {
    const stat = map[keyFor(q)];
    return !!stat && stat.wrong > 0 && stat.dueAt <= now;
  });
}

export interface SystemStat {
  system: string;
  correct: number;
  total: number;
  accuracy: number; // 0-100, rounded
}

// One row per system that has at least one attempted question, sorted
// weakest-first so the things worth drilling show up at the top.
export function getSystemStats(all: Question[]): SystemStat[] {
  const map = readMap();
  const bySystem = new Map<string, { correct: number; total: number }>();

  for (const q of all) {
    const stat = map[keyFor(q)];
    if (!stat) continue;
    const attempts = stat.correct + stat.wrong;
    if (attempts === 0) continue;
    const entry = bySystem.get(q.system) ?? { correct: 0, total: 0 };
    entry.correct += stat.correct;
    entry.total += attempts;
    bySystem.set(q.system, entry);
  }

  return Array.from(bySystem.entries())
    .map(([system, { correct, total }]) => ({
      system,
      correct,
      total,
      accuracy: total === 0 ? 0 : Math.round((correct / total) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export interface OverallStats {
  questionsAttempted: number;
  correctAttempts: number;
  wrongAttempts: number;
  missedCount: number;
}

export function getOverallStats(all: Question[]): OverallStats {
  const map = readMap();
  const now = Date.now();
  let questionsAttempted = 0;
  let correctAttempts = 0;
  let wrongAttempts = 0;
  let missedCount = 0;

  for (const q of all) {
    const stat = map[keyFor(q)];
    if (!stat) continue;
    questionsAttempted += 1;
    correctAttempts += stat.correct;
    wrongAttempts += stat.wrong;
    if (stat.wrong > 0 && stat.dueAt <= now) missedCount += 1;
  }

  return { questionsAttempted, correctAttempts, wrongAttempts, missedCount };
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to do if storage isn't available.
  }
}
