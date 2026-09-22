import { SUBJECTS, SUBJECT_META, SYSTEMS_BY_SUBJECT, QUESTIONS } from "../data";
import type { Question } from "../types";

// Slugs for the public /library URLs. Deterministic and derived straight
// from the live question bank -- add a new subject or category anywhere in
// src/data and it shows up here automatically, no manual list to update.
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface LibraryCategory {
  subjectName: string;
  subjectSlug: string;
  system: string;
  slug: string;
  questionCount: number;
}

export interface LibrarySubject {
  name: string;
  slug: string;
  blurb: string;
  accent: string;
  questionCount: number;
  categories: LibraryCategory[];
}

function questionsForSubject(subjectName: string): Question[] {
  return QUESTIONS.filter((q) => (q.subject ?? "A320 Systems") === subjectName);
}

export function getLibrarySubjects(): LibrarySubject[] {
  return SUBJECTS.map((name) => {
    const meta = SUBJECT_META[name];
    const subjectSlug = slugify(name);
    const subjectQuestions = questionsForSubject(name);
    const systems = SYSTEMS_BY_SUBJECT[name].filter((s) => s !== "All");
    const categories: LibraryCategory[] = systems.map((system) => ({
      subjectName: name,
      subjectSlug,
      system,
      slug: slugify(system),
      questionCount: subjectQuestions.filter((q) => q.system === system).length,
    }));
    return {
      name,
      slug: subjectSlug,
      blurb: meta.blurb,
      accent: meta.accent,
      questionCount: subjectQuestions.length,
      categories,
    };
  });
}

export function findLibrarySubject(subjectSlug: string): LibrarySubject | undefined {
  return getLibrarySubjects().find((s) => s.slug === subjectSlug);
}

export function findLibraryCategory(subjectSlug: string, systemSlug: string): LibraryCategory | undefined {
  return findLibrarySubject(subjectSlug)?.categories.find((c) => c.slug === systemSlug);
}

// A small, deterministic, evenly-spaced sample -- representative of the
// full category rather than always the first N, and stable across rebuilds
// so the page's indexed content doesn't shuffle every deploy.
export function getSampleQuestions(subjectName: string, system: string, sampleSize = 8): Question[] {
  const pool = questionsForSubject(subjectName).filter((q) => q.system === system);
  if (pool.length <= sampleSize) return pool;
  const step = pool.length / sampleSize;
  const sample: Question[] = [];
  for (let i = 0; i < sampleSize; i++) {
    sample.push(pool[Math.floor(i * step)]);
  }
  return sample;
}
