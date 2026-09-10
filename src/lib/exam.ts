// Timed exam simulation -- fixed-length, single-shot, pass/fail. Meant to
// simulate real test pressure (a checkride oral, an interview knowledge
// screen) rather than open-ended drilling: no question-by-question feedback,
// no retries, and a hard clock. You find out how you did at the end, not as
// you go, same as the real thing.

export const EXAM_PASS_THRESHOLD = 0.8; // 80% -- a typical type-rating / interview knowledge-test bar
export const EXAM_SECONDS_PER_QUESTION = 90; // ~1.5 min/question: tight enough to feel like real pressure
export const EXAM_LENGTH_OPTIONS = [25, 40, 60];

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
