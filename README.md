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
| Landing Gear | 77 | 1 |
| Limitation | 46 | 0 |
| Navigation | 66 | 0 |
| Oxygen | 12 | 0 |
| Pneumatics | 45 | 0 |
| **Total** | **934** | **52** |

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

## Usage analytics + admin panel

The app tracks anonymous usage (no accounts, no PII): a random visitor id in `localStorage`, a per-tab session id in `sessionStorage`, a `session_start` + `heartbeat` (every 20s while the tab is visible) so session length can be measured, and a one-time `studied` event the first time someone answers a question in Study or Quiz mode. Events post to `/api/track`; nothing here ever blocks or errors the app itself if a request fails.

`/api/stats` (called only by the admin page) reads that data back with Postgres via [Neon](https://neon.com), which is Vercel's current native Postgres integration (`@neondatabase/serverless` — the older `@vercel/postgres` package is deprecated).

**One-time setup, in your Vercel dashboard:**

1. Project → **Storage** tab → **Create Database** → choose the Postgres/Neon option → connect it to this project. Vercel injects the DB connection string as an environment variable automatically (checked in this order in `api/_db.ts`: `DATABASE_URL`, then `POSTGRES_URL`, then `DATABASE_URL_UNPOOLED` — whichever the integration actually sets).
2. Project → **Settings** → **Environment Variables** → add `ADMIN_SECRET` set to whatever password you want to gate the admin page with.
3. Redeploy (a normal `git push` triggers this) so the new env vars are picked up.

**Viewing stats:** go to `/admin` on your deployed site and enter the `ADMIN_SECRET` password. The database schema (`sessions` table) is created automatically on first use — no manual migration needed.
