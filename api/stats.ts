import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureSchema } from "./_db.js";

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
    });
  } catch (err) {
    console.error("stats error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
