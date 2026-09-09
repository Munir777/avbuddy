export interface Question {
  id: number;
  system: string;
  q: string;
  options: string[];
  answer: number; // index into options
  explain: string;
  needsReview?: boolean; // true if the source doc had ambiguous/conflicting markup for this question
}

export interface SystemColor {
  fg: string;
  bg: string;
}
