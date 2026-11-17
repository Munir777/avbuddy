// Data helpers for the public /interview-prep and /airline-interviews pages.
// Kept free of CSS/asset imports so scripts/generate-sitemap.ts (run by tsx)
// can import it too.
import { INTERVIEW_CATEGORIES, INTERVIEW_QUESTIONS } from "../data/interviewPrep";
import { AIRLINES, SHARED_MATERIAL, type Airline, type SharedEntry } from "../data/sharedMaterial";
import communityAtBuild from "../data/communityEntries.generated.json";

// Approved user submissions (reviewed in /admin). Snapshot taken at build
// time by scripts/fetch-community-entries.mjs; the page also refetches
// /api/shared-material in the browser so posts approved since the last
// deploy show up too.
export interface CommunityPost {
  id: string;
  airline: string;
  title: string;
  summary: string | null;
  body: string;
}
export const COMMUNITY_AT_BUILD = communityAtBuild as CommunityPost[];

export function toEntry(p: CommunityPost): SharedEntry & { community: true } {
  return {
    id: -1,
    title: p.title,
    summary: p.summary ?? undefined,
    body: p.body,
    note: "Shared by a pilot through AvBuddy and edited for clarity.",
    community: true,
  };
}

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
export function airlinesWithMaterial(community: CommunityPost[] = COMMUNITY_AT_BUILD) {
  return AIRLINES.map((name) => ({
    name,
    slug: slugify(name),
    entries: [
      ...SHARED_MATERIAL[name as Airline],
      ...community.filter((p) => p.airline === name).map(toEntry),
    ] as SharedEntry[],
  })).filter((a) => a.entries.length > 0);
}
