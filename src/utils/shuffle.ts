export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Question data is authored with the correct answer wherever the source
// material happened to put it -- for two whole content sets (737 MAX 8 and
// the ATPL/general-knowledge bank) that's almost always index 0, which is
// exactly the "the answer is always the top one" bug this fixes. Returns a
// new Question with its options (and the answer index pointing at them)
// randomly reordered -- the original Question object is never mutated, so
// it's still safe to read q.answer/q.options straight off the shared
// QUESTIONS array anywhere else in the app.
//
// Options like "All of the above" / "None of the above" only make sense
// after the options they refer to, so those are kept at the end (in their
// authored order) and only the rest are shuffled.
const REFERS_TO_OTHER_OPTIONS = /^\s*(all|none|any|both|neither)\s+(of\s+)?(the\s+)?(above|preceding|previous)\b/i;

export function isPositionalOption(option: string): boolean {
  return REFERS_TO_OTHER_OPTIONS.test(option);
}

export function shuffleOptions<Q extends { options: string[]; answer: number; optionImages?: string[] }>(
  question: Q
): Q {
  const indices = question.options.map((_, i) => i);
  const pinned = indices.filter((i) => isPositionalOption(question.options[i]));
  const free = indices.filter((i) => !isPositionalOption(question.options[i]));
  const order = [...shuffle(free), ...pinned];
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    answer: order.indexOf(question.answer),
    // Image-only options (see Question.optionImages) have to move in lockstep
    // with the text reorder above, or the letter/answer would point at the
    // wrong picture.
    optionImages: question.optionImages ? order.map((i) => question.optionImages![i]) : question.optionImages,
  };
}
