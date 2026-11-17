// Data helpers for the public /interview-prep and /airline-interviews pages.
// Kept free of CSS/asset imports so scripts/generate-sitemap.ts (run by tsx)
// can import it too.
import { INTERVIEW_CATEGORIES, INTERVIEW_QUESTIONS } from "../data/interviewPrep";
import { AIRLINES, SHARED_MATERIAL, type Airline } from "../data/sharedMaterial";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function interviewCategories() {
  return INTERVIEW_CATEGORIES.map((name) => ({
    name,
    slug: slugify(name),
    questions: INTERVIEW_QUESTIONS.filter((q) => q.category === name),
  })).filter((c) => c.questions.length > 0);
}

// Airlines with no entries yet are left out entirely: an empty page would be
// thin content that drags on the rest of the site.
export function airlinesWithMaterial() {
  return AIRLINES.map((name) => ({ name, slug: slugify(name), entries: SHARED_MATERIAL[name as Airline] })).filter(
    (a) => a.entries.length > 0
  );
}
