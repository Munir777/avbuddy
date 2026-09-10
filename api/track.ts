import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "./_db.js";

type TrackEvent = "start" | "heartbeat" | "studied";

interface TrackBody {
  visitorId?: unknown;
  sessionId?: unknown;
  event?: unknown;
  referrer?: unknown;
}

const VALID_EVENTS: readonly TrackEvent[] = ["start", "heartbeat", "studied"];

function isValidId(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 100;
}

// Optional and looser than isValidId: empty string (direct traffic) is
// valid, and it's allowed to be absent entirely on non-"start" events.
function normalizeReferrer(value: unknown): string {
  return typeof value === "string" ? value.slice(0, 500) : "";
}

// Vercel sets this header at the edge from the requester's IP on every
// request that hits a deployment — no client-side code, no IP stored, and
// nothing to spoof via document.referrer stripping. Only present on a real
// deployment (blank in local dev / behind a proxy in front of Vercel).
function countryFromHeader(value: string | string[] | undefined): string | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const code = raw.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body: TrackBody = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { visitorId, sessionId, event } = body;
  const referrer = normalizeReferrer(body.referrer);
  const country = countryFromHeader(req.headers["x-vercel-ip-country"]);

  if (!isValidId(visitorId) || !isValidId(sessionId) || !VALID_EVENTS.includes(event as TrackEvent)) {
    res.status(400).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();

    if (event === "start") {
      // sessionId lives in sessionStorage, which survives a page refresh in
      // the same tab — so "start" can legitimately fire again for a row that
      // already exists (e.g. from before referrer/country tracking existed).
      // Backfill those fields on conflict instead of leaving them stuck null.
      await sql`
        INSERT INTO sessions (session_id, visitor_id, started_at, last_ping_at, studied, referrer, country)
        VALUES (${sessionId}, ${visitorId}, now(), now(), false, ${referrer}, ${country})
        ON CONFLICT (session_id) DO UPDATE
        SET referrer = COALESCE(sessions.referrer, EXCLUDED.referrer),
            country = COALESCE(sessions.country, EXCLUDED.country)
      `;
    } else if (event === "heartbeat") {
      await sql`
        UPDATE sessions SET last_ping_at = now() WHERE session_id = ${sessionId}
      `;
    } else if (event === "studied") {
      await sql`
        UPDATE sessions SET studied = true, last_ping_at = now() WHERE session_id = ${sessionId}
      `;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("track error", err);
    // Never let analytics failures surface to the user — fail soft.
    res.status(200).json({ ok: false });
  }
}
