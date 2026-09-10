import { neon } from "@neondatabase/serverless";

// Vercel's Neon Postgres integration injects a few aliased env vars for
// historical compatibility with the old @vercel/postgres product — check
// whichever one actually exists after you provision the database (Project
// Settings -> Environment Variables) and adjust this list if needed.
const connectionString =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.DATABASE_URL_UNPOOLED ??
  "";

export const sql = neon(connectionString);

let schemaReady: Promise<unknown> | null = null;

// Idempotent — safe to call on every request. Postgres treats
// CREATE TABLE/INDEX IF NOT EXISTS as a cheap no-op once they exist.
export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS sessions (
        session_id TEXT PRIMARY KEY,
        visitor_id TEXT NOT NULL,
        started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        last_ping_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        studied BOOLEAN NOT NULL DEFAULT false,
        referrer TEXT,
        country TEXT
      )
    `
      // ADD COLUMN IF NOT EXISTS so this stays a no-op on a table that
      // already existed before these columns were introduced.
      .then(() => sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS referrer TEXT`)
      .then(() => sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS country TEXT`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_sessions_visitor ON sessions (visitor_id)`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_sessions_started ON sessions (started_at)`)
      // --- Accounts (magic-link auth) ---
      // Named auth_tokens / user_sessions rather than "tokens"/"sessions" to
      // avoid colliding with the anonymous-usage `sessions` table above,
      // which is a completely different thing (analytics, not login state).
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT UNIQUE NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )
        `
      )
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS auth_tokens (
            token_hash TEXT PRIMARY KEY,
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            expires_at TIMESTAMPTZ NOT NULL,
            used_at TIMESTAMPTZ
          )
        `
      )
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS user_sessions (
            token_hash TEXT PRIMARY KEY,
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            expires_at TIMESTAMPTZ NOT NULL
          )
        `
      )
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_auth_tokens_user ON auth_tokens (user_id)`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_user_sessions_user ON user_sessions (user_id)`);
  }
  return schemaReady;
}
