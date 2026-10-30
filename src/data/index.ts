import type { Question } from "../types";
import A320_SYSTEMS_QUESTIONS from "./subjects/a320";
import GENERAL_KNOWLEDGE_QUESTIONS from "./subjects/general-knowledge";
import B737_MAX_8_QUESTIONS from "./subjects/b737-max-8";
import FAA_ATP_QUESTIONS from "./subjects/faa-atp";
import CANADA_TC_ATPL_QUESTIONS from "./subjects/canada-tc-atpl";

export { SUBJECTS, SUBJECT_META, SYSTEM_COLORS, DEFAULT_SYSTEM_COLOR } from "./meta";

// The FULL question bank, loaded synchronously. Only the public /library
// pages and the build scripts (sitemap, bank meta) import this -- the main
// app loads subjects lazily, one chunk each, via ./bank.ts.
//
// To add a new category to an existing subject:
//   1. Create src/data/categories/<name>.ts (or categories/<subject-folder>/<name>.ts)
//      exporting a Question[] array.
//   2. Import it in that subject's file under src/data/subjects/ and add it
//      to the list there.
// To add a whole new subject:
//   1. Create src/data/categories/<subject-folder>/ with one or more category files.
//   2. Create src/data/subjects/<subject>.ts (copy an existing one).
//   3. Append it to SUBJECT_BANKS below AND to SUBJECT_LOADERS in ./bank.ts
//      (same order -- question IDs depend on it).
//   4. Add the subject to SUBJECTS and SUBJECT_META in ./meta.ts, plus a
//      SYSTEM_COLORS entry for each new system.
// src/data/bankMeta.generated.ts (counts, ID offsets, system lists) is
// regenerated automatically by `npm run dev` / `npm run build`.

// Order matters: IDs are assigned by position across this whole list, and
// bookmarks / saved quiz state store those IDs. Only ever APPEND.
export const SUBJECT_BANKS: Question[][] = [
  A320_SYSTEMS_QUESTIONS,
  GENERAL_KNOWLEDGE_QUESTIONS,
  B737_MAX_8_QUESTIONS,
  FAA_ATP_QUESTIONS,
  CANADA_TC_ATPL_QUESTIONS,
];

// Each category file numbers its own questions from 1, so IDs are
// reassigned here to be globally unique across the combined bank — this
// way category files never need to coordinate ID ranges with each other,
// even across subjects.
export const QUESTIONS: Question[] = SUBJECT_BANKS.flat().map((q, i) => ({ ...q, id: i + 1 }));

// Per-subject system lists, in the order they should appear in filter chips
// and setup screens. "All" is prepended by the component that consumes this,
// matching the previous global SYSTEMS convention.
export const SYSTEMS_BY_SUBJECT: Record<string, string[]> = {
  "A320 Systems": [
    "All",
    ...Array.from(new Set(A320_SYSTEMS_QUESTIONS.map((q) => q.system))),
  ],
  "ATPL General Knowledge": [
    "All",
    ...Array.from(new Set(GENERAL_KNOWLEDGE_QUESTIONS.map((q) => q.system))),
  ],
  "737 MAX 8": [
    "All",
    ...Array.from(new Set(B737_MAX_8_QUESTIONS.map((q) => q.system))),
  ],
  "FAA ATP": [
    "All",
    ...Array.from(new Set(FAA_ATP_QUESTIONS.map((q) => q.system))),
  ],
  "Canada TC ATPL": [
    "All",
    ...Array.from(new Set(CANADA_TC_ATPL_QUESTIONS.map((q) => q.system))),
  ],
};

// Kept for any code that still wants the full unscoped list (e.g. exam mode
// drawing across everything, or a future "All subjects" view).
export const SYSTEMS: string[] = [
  "All",
  ...Array.from(new Set(QUESTIONS.map((q) => q.system))),
];
