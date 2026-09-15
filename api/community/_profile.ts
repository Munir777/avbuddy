import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "../_db.js";
import { getSessionUser } from "../_auth.js";
import { anonName } from "./_common.js";

const MIN_LEN = 2;
const MAX_LEN = 24;
// Kept plain and short on purpose -- this is the name shown next to every
// message someone posts, not a bio field. No spaces-only, no control
// characters; otherwise fairly permissive (unicode letters allowed).
const VALID = /^[\p{L}\p{N} ._-]+$/u;

interface Body {
  displayName?: unknown;
}

// GET returns the signed-in user's current Community display name (and
// the anonymous default they'd fall back to); POST sets it. Nobody has to
// set one -- the default (see _common.ts: anonName) is deterministic and
// never exposes the account's email in a public room. Unlike the other
// community/_*.ts files, this one already handled both GET and POST
// itself before the consolidation, so api/community/index.ts forwards to
// it regardless of method rather than picking a single one.
//
// Logic moved out of api/community/profile.ts -- see api/community/index.ts.
export async function handleProfile(req: VercelRequest, res: VercelResponse) {
  try {
    await ensureSchema();
    const user = await getSessionUser(req);
    if (!user) {
      res.status(401).json({ ok: false, error: "not_signed_in" });
      return;
    }

    if (req.method === "GET") {
      const rows = await sql`SELECT display_name FROM users WHERE id = ${user.id}`;
      const displayName = (rows as { display_name: string | null }[])[0]?.display_name ?? null;
      res.status(200).json({ ok: true, displayName, isDefault: !displayName, defaultName: anonName(user.id) });
      return;
    }

    if (req.method === "POST") {
      const body: Body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const displayName = typeof body.displayName === "string" ? body.displayName.trim() : "";

      if (!displayName) {
        // Empty clears back to the anonymous default rather than being
        // rejected -- that's a legitimate choice, not an error.
        await sql`UPDATE users SET display_name = NULL WHERE id = ${user.id}`;
        res.status(200).json({ ok: true, displayName: null });
        return;
      }
      if (displayName.length < MIN_LEN || displayName.length > MAX_LEN || !VALID.test(displayName)) {
        res.status(400).json({ ok: false, error: "invalid_name" });
        return;
      }

      await sql`UPDATE users SET display_name = ${displayName} WHERE id = ${user.id}`;
      res.status(200).json({ ok: true, displayName });
      return;
    }

    res.status(405).json({ ok: false });
  } catch (err) {
    console.error("community/profile error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
