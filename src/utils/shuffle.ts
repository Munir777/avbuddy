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
export function shuffleOptions<Q extends { options: string[]; answer: number }>(question: Q): Q {
  const order = shuffle(question.options.map((_, i) => i));
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    answer: order.indexOf(question.answer),
  };
}
