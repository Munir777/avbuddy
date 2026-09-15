// Shared Material — interview experiences and notes organised by airline.
//
// Curated content only for now (no public submission form yet — that's a
// planned future feature). Entries get added here as material is collected;
// each entry should note where/how it was gathered so readers can judge its
// currency, since airline interview processes change over time.

export interface SharedEntry {
  id: number;
  title: string;
  body: string;
  note?: string; // e.g. how/when this was gathered
}

export const AIRLINES = ["Emirates", "Qatar Airways", "Etihad", "Riyadh Air", "FlyDubai"] as const;

export type Airline = (typeof AIRLINES)[number];

export const SHARED_MATERIAL: Record<Airline, SharedEntry[]> = {
  Emirates: [],
  "Qatar Airways": [],
  Etihad: [],
  "Riyadh Air": [],
  FlyDubai: [],
};
