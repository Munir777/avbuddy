# A320 Systems Trainer

React + TypeScript + Vite quiz/flashcard app for A320 systems knowledge, category by category.

## Question bank status

| Category | Questions | Needs review |
|---|---|---|
| Air Cond / Pressurization | 108 | 0 (Q62 was reviewed and confirmed earlier) |
| APU | 35 | 11 |
| Autoflight | 41 | 0 |
| Communication | 53 | 0 |
| Doors | 17 | 0 |
| Electrical | 73 | 22 |
| Engine | 63 | 0 |
| Equipment | 12 | 0 |
| Fire Protection | 46 | 0 |
| Flight Controls | 78 | 0 |
| Fuel | 27 | 0 |
| Hydraulic System | 46 | 18 |
| Ice & Rain Protection | 38 | 0 |
| Indicating / Recording | 51 | 0 |
| Landing Gear | 67 | 1 |
| Limitation | 46 | 0 |
| Navigation | 66 | 0 |
| Oxygen | 12 | 0 |
| Pneumatics | 45 | 0 |
| **Total** | **924** | **52** |

"Needs review" = the source doc's exported review page bolded two options instead of one for that question (both the user's own pick and the actual correct answer got bolded on export, with nothing distinguishing which is which). Those questions were resolved using A320 systems knowledge and flagged `needsReview: true` in the data file, with a `// REVIEW (confidence level): reasoning` comment directly above each one — check those against your FCOM/AMM, especially the ones marked "low" confidence:

- **Electrical**: Q45 (battery charge time) is the lowest-confidence one in that category
- **Hydraulic System**: Q9 (LAF accumulator hydraulic sourcing) and Q36 (yellow system pump count) are explicitly low-confidence guesses, worth double-checking first
- **Landing Gear**: Q65 (alternate brake system) is high confidence — the source text itself contained the word "correct" next to the right option

The `QuestionCard` component already renders a "⚠ NEEDS REVIEW" badge on any flagged question, so they're easy to spot while studying.

## Running it

```
npm install
npm run dev
```

## Adding another category

1. Get the category's questions into the shape of an entry in `src/data/categories/<name>.ts` (see any existing file for the pattern — `id`, `system`, `q`, `options`, `answer`, `explain`, optional `needsReview`).
2. Import it in `src/data/index.ts` and add it to the `QUESTIONS` array and `SYSTEM_COLORS`.
3. Nothing else needs to change — the filter, quiz, and study mode all read from `QUESTIONS`.
