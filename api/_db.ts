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
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_user_sessions_user ON user_sessions (user_id)`)
      // --- Cross-device progress sync ---
      // question_key mirrors the client's localStorage key (`system::question
      // text`) rather than the numeric id, which isn't stable across data
      // reordering -- see src/lib/progress.ts.
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS user_progress (
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            question_key TEXT NOT NULL,
            correct INTEGER NOT NULL DEFAULT 0,
            wrong INTEGER NOT NULL DEFAULT 0,
            box INTEGER NOT NULL DEFAULT 0,
            due_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            PRIMARY KEY (user_id, question_key)
          )
        `
      )
      // --- Community-submitted shared material -- candidates' own
      // write-ups, submitted signed-in via the Shared Material tab and held
      // as `pending` until reviewed and rewritten in the admin panel
      // (/admin -- same shared-secret gate as the stats view). Only
      // `status = 'approved'` rows are ever served back to the public, by
      // api/shared-material.ts; the raw_* fields are never shown to anyone
      // but the admin and the original submitter (their own status only).
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS shared_submissions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            airline TEXT NOT NULL,
            raw_title TEXT,
            raw_body TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'pending',
            published_title TEXT,
            published_summary TEXT,
            published_body TEXT,
            admin_notes TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            reviewed_at TIMESTAMPTZ
          )
        `
      )
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_shared_submissions_status ON shared_submissions (status)`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_shared_submissions_user ON shared_submissions (user_id)`)
      // --- Community chat -- per-airline rooms, near-live via polling
      // (see api/community/*.ts). `app_settings` is a small generic
      // key/value table; the one key it holds today is
      // 'community_enabled', the global kill switch checked before
      // anything else. `community_rooms` holds each room's status
      // ('open' | 'read_only' | 'hidden'); a room with no row here is
      // treated as 'open' by convention, so the table only needs a row
      // once an admin actually changes something away from the default.
      .then(() => sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS display_name TEXT`)
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS app_settings (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )
        `
      )
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS community_rooms (
            room TEXT PRIMARY KEY,
            status TEXT NOT NULL DEFAULT 'open',
            updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )
        `
      )
      // `seq` is what polling clients page on ("give me everything after
      // seq N") -- a plain increasing integer avoids the same-millisecond
      // ordering ambiguity two UUID-keyed rows with an identical
      // created_at could otherwise cause.
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS community_messages (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            seq BIGSERIAL,
            room TEXT NOT NULL,
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            body TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            deleted_at TIMESTAMPTZ,
            deleted_reason TEXT,
            flagged BOOLEAN NOT NULL DEFAULT false,
            flag_count INTEGER NOT NULL DEFAULT 0
          )
        `
      )
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_community_messages_room_seq ON community_messages (room, seq)`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_community_messages_user ON community_messages (user_id)`)
      .then(() => sql`CREATE INDEX IF NOT EXISTS idx_community_messages_flagged ON community_messages (flagged)`)
      // One report per user per message (PK), so re-clicking "report"
      // can't inflate the count -- flag_count on the message itself is
      // still what the admin queue sorts/displays by.
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS community_message_reports (
            message_id UUID NOT NULL REFERENCES community_messages (id) ON DELETE CASCADE,
            user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
            reason TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
            PRIMARY KEY (message_id, user_id)
          )
        `
      )
      // A mute is scoped to Community only -- it never touches the
      // account itself, so a muted user keeps their quiz/progress access.
      // muted_until = NULL means indefinite, until an admin unmutes.
      .then(
        () => sql`
          CREATE TABLE IF NOT EXISTS community_mutes (
            user_id UUID PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
            muted_until TIMESTAMPTZ,
            reason TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )
        `
      );
  }
  return schemaReady;
}
