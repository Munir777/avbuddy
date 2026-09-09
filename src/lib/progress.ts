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

import type { Question } from "../types";

const STORAGE_KEY = "avbuddy_progress_v1";

interface QuestionStat {
  correct: number;
  wrong: number;
  lastSeenAt: number;
}

type ProgressMap = Record<string, QuestionStat>;

function keyFor(question: Question): string {
  return `${question.system}::${question.q}`;
}

function readMap(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
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
  const existing = map[key] ?? { correct: 0, wrong: 0, lastSeenAt: 0 };
  map[key] = {
    correct: existing.correct + (correct ? 1 : 0),
    wrong: existing.wrong + (correct ? 0 : 1),
    lastSeenAt: Date.now(),
  };
  writeMap(map);
}

// "Missed" = you've gotten this one wrong more often than right, across all
// attempts. A single lucky guess doesn't clear it, and a single slip on a
// question you otherwise know doesn't add it.
export function getMissedQuestions(all: Question[]): Question[] {
  const map = readMap();
  return all.filter((q) => {
    const stat = map[keyFor(q)];
    return !!stat && stat.wrong > stat.correct;
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
    if (stat.wrong > stat.correct) missedCount += 1;
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
