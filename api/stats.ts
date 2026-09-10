import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "./_db.js";

// Turns a raw stored referrer into a friendly bucket name. The raw value is
// either a full referrer URL (from document.referrer), a bare UTM source
// string like "reddit" (no scheme, so `new URL` throws — that's the signal
// to use it as-is), or "" for direct/no-referrer traffic.
function bucketSource(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "Direct / None";
  try {
    const host = new URL(trimmed).hostname.replace(/^www\./, "");
    return host || "Direct / None";
  } catch {
    return trimmed.slice(0, 100);
  }
}

// Node's Intl has the ISO 3166-1 country names built in, so a 2-letter code
// from the x-vercel-ip-country header (see api/track.ts) doesn't need a
// hand-maintained lookup table.
const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
function countryLabel(code: string | null): string {
  if (!code) return "Unknown";
  try {
    return countryNames.of(code) ?? code;
  } catch {
    return code;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false });
    return;
  }

  const providedSecret = req.headers["x-admin-secret"];
  const expectedSecret = process.env.ADMIN_SECRET;

  if (!expectedSecret || providedSecret !== expectedSecret) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }

  try {
    await ensureSchema();

    // Duration is capped at 2h per session so an abandoned/backgrounded tab
    // (heartbeat stopped, browser never closed) doesn't skew the average.
    const totals = await sql`
      SELECT
        COUNT(*)::int AS total_sessions,
        COUNT(DISTINCT visitor_id)::int AS unique_visitors,
        COUNT(*) FILTER (WHERE studied)::int AS studied_sessions,
        COUNT(*) FILTER (WHERE started_at >= CURRENT_DATE)::int AS sessions_today,
        ROUND(AVG(LEAST(EXTRACT(EPOCH FROM (last_ping_at - started_at)), 7200)))::int AS avg_duration_seconds
      FROM sessions
    `;

    const dailyTrend = await sql`
      SELECT
        to_char(date_trunc('day', started_at), 'YYYY-MM-DD') AS day,
        COUNT(*)::int AS sessions,
        COUNT(*) FILTER (WHERE studied)::int AS studied
      FROM sessions
      WHERE started_at >= now() - interval '7 days'
      GROUP BY 1
      ORDER BY 1 DESC
    `;

    // Grouped by raw referrer here (cheap, indexed-free GROUP BY on a small
    // table); bucketed into friendly source names in JS below since that
    // needs URL parsing Postgres doesn't do for us.
    const referrerRows = await sql`
      SELECT referrer, COUNT(*)::int AS sessions
      FROM sessions
      GROUP BY referrer
      ORDER BY sessions DESC
      LIMIT 200
    `;

    const sourceCounts = new Map<string, number>();
    for (const r of referrerRows as { referrer: string | null; sessions: number }[]) {
      const bucket = bucketSource(r.referrer ?? "");
      sourceCounts.set(bucket, (sourceCounts.get(bucket) ?? 0) + r.sessions);
    }
    const topSources = Array.from(sourceCounts.entries())
      .map(([source, sessions]) => ({ source, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    const countryRows = await sql`
      SELECT country, COUNT(*)::int AS sessions
      FROM sessions
      GROUP BY country
      ORDER BY sessions DESC
      LIMIT 200
    `;

    const countryCounts = new Map<string, number>();
    for (const r of countryRows as { country: string | null; sessions: number }[]) {
      const label = countryLabel(r.country);
      countryCounts.set(label, (countryCounts.get(label) ?? 0) + r.sessions);
    }
    const topCountries = Array.from(countryCounts.entries())
      .map(([country, sessions]) => ({ country, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    const row = totals[0] ?? {
      total_sessions: 0,
      unique_visitors: 0,
      studied_sessions: 0,
      sessions_today: 0,
      avg_duration_seconds: 0,
    };

    res.status(200).json({
      ok: true,
      totalSessions: row.total_sessions,
      uniqueVisitors: row.unique_visitors,
      studiedSessions: row.studied_sessions,
      sessionsToday: row.sessions_today,
      avgDurationSeconds: row.avg_duration_seconds ?? 0,
      studiedPct: row.total_sessions > 0 ? Math.round((row.studied_sessions / row.total_sessions) * 100) : 0,
      dailyTrend: dailyTrend,
      topSources,
      topCountries,
    });
  } catch (err) {
    console.error("stats error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
