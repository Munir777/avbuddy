import { useEffect, useState } from "react";
import type { Question } from "../types";
import { SUBJECTS } from "./meta";
import { SUBJECT_COUNTS, SUBJECT_ID_OFFSETS, TOTAL_QUESTIONS } from "./bankMeta.generated";

// Lazy, per-subject question bank for the main app.
//
// The full bank is ~5 MB of source; shipping it in the main bundle meant
// every first visit downloaded all of it before showing a single question.
// Instead each subject is its own chunk, fetched on demand: the selected
// subject first, then the rest in the background so cross-subject features
// (Progress, missed/bookmarked review) fill in a moment later.
//
// IDs are assigned exactly as src/data/index.ts does (position across the
// whole bank, via the generated offsets), so bookmarks / saved quiz state
// keep pointing at the same questions.

// Same order as SUBJECT_BANKS in ./index.ts.
const SUBJECT_LOADERS: Record<string, () => Promise<{ default: Question[] }>> = {
  "A320 Systems": () => import("./subjects/a320"),
  "ATPL General Knowledge": () => import("./subjects/general-knowledge"),
  "737 MAX 8": () => import("./subjects/b737-max-8"),
  "FAA ATP": () => import("./subjects/faa-atp"),
  "Canada TC ATPL": () => import("./subjects/canada-tc-atpl"),
};

export const ALL_QUESTION_IDS: number[] = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => i + 1);

const loaded = new Map<string, Question[]>();
const inFlight = new Map<string, Promise<void>>();
const byId = new Map<number, Question>();
let allQuestions: Question[] = [];
const listeners = new Set<() => void>();

function rebuild() {
  // Keep global ID order regardless of which subject happened to land first.
  allQuestions = SUBJECTS.flatMap((s) => loaded.get(s) ?? []);
  listeners.forEach((fn) => fn());
}

export function loadSubject(subject: string): Promise<void> {
  if (loaded.has(subject)) return Promise.resolve();
  const existing = inFlight.get(subject);
  if (existing) return existing;
  const loader = SUBJECT_LOADERS[subject];
  if (!loader) return Promise.reject(new Error(`Unknown subject: ${subject}`));

  const promise = loader()
    .then((mod) => {
      const offset = SUBJECT_ID_OFFSETS[subject] ?? 0;
      const questions = mod.default.map((q, i) => ({ ...q, id: offset + i + 1 }));
      if (import.meta.env.DEV && questions.length !== SUBJECT_COUNTS[subject]) {
        console.warn(
          `[bank] ${subject}: ${questions.length} questions but bankMeta.generated.ts says ${SUBJECT_COUNTS[subject]} -- run \`npm run bank-meta\``
        );
      }
      for (const q of questions) byId.set(q.id, q);
      loaded.set(subject, questions);
      rebuild();
    })
    .finally(() => inFlight.delete(subject));
  inFlight.set(subject, promise);
  return promise;
}

export function getQuestionById(id: number): Question | undefined {
  return byId.get(id);
}

export interface QuestionBank {
  /** Every question loaded so far, in global ID order. */
  questions: Question[];
  isLoaded: (subject: string) => boolean;
  allLoaded: boolean;
  /** Bumps whenever more questions arrive -- use as a memo dependency. */
  version: number;
  /** Set if a chunk failed to download (e.g. connection dropped). */
  error: boolean;
}

/**
 * Loads `prioritySubject` first, then every other subject in the
 * background, and re-renders as each one arrives.
 */
export function useQuestionBank(prioritySubject: string): QuestionBank {
  const [version, setVersion] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onChange = () => setVersion((v) => v + 1);
    listeners.add(onChange);
    return () => {
      listeners.delete(onChange);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadSubject(prioritySubject)
      .then(() => Promise.all(SUBJECTS.map((s) => loadSubject(s))))
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [prioritySubject]);

  return {
    questions: allQuestions,
    isLoaded: (s) => loaded.has(s),
    allLoaded: loaded.size === SUBJECTS.length,
    version,
    error,
  };
}
