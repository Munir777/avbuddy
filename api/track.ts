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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body: TrackBody = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { visitorId, sessionId, event } = body;
  const referrer = normalizeReferrer(body.referrer);

  if (!isValidId(visitorId) || !isValidId(sessionId) || !VALID_EVENTS.includes(event as TrackEvent)) {
    res.status(400).json({ ok: false });
    return;
  }

  try {
    await ensureSchema();

    if (event === "start") {
      await sql`
        INSERT INTO sessions (session_id, visitor_id, started_at, last_ping_at, studied, referrer)
        VALUES (${sessionId}, ${visitorId}, now(), now(), false, ${referrer})
        ON CONFLICT (session_id) DO NOTHING
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
