export interface Question {
  id: number;
  system: string;
  q: string;
  options: string[];
  answer: number; // index into options
  explain: string;
  reference?: string; // generic FCOM chapter/section name only - never a company-specific doc code or identifier
  needsReview?: boolean; // true if the source doc had ambiguous/conflicting markup for this question
}

export interface SystemColor {
  fg: string;
  bg: string;
}
