export interface Question {
  id: number;
  system: string;
  q: string;
  options: string[];
  answer: number; // index into options
  explain: string;
  reference?: string; // generic FCOM chapter/section name only - never a company-specific doc code or identifier
  needsReview?: boolean; // true if the source doc had ambiguous/conflicting markup for this question
  subject?: string; // top-level grouping above `system`, e.g. "A320 Systems" vs "General Knowledge". Defaults to "A320 Systems" when absent.
}

export interface SystemColor {
  fg: string;
  bg: string;
}

export interface SubjectMeta {
  label: string;
  blurb: string;
  accent: string; // border/highlight color for the active subject card
}
