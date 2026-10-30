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
        ROUND(AVG(LEAST(EXTRACT(EPOCH FROM (last_ping_at - started_at)), 7200)))::int AS avg_duration_seconds,
        COUNT(*) FILTER (WHERE hit_quiz_limit)::int AS quiz_limit_hits,
        COUNT(*) FILTER (WHERE hit_quiz_limit AND quiz_limit_signin_click)::int AS quiz_limit_signin_clicks,
        COUNT(*) FILTER (WHERE hit_study_limit)::int AS study_limit_hits,
        COUNT(*) FILTER (WHERE hit_study_limit AND study_limit_signin_click)::int AS study_limit_signin_clicks
      FROM sessions
      WHERE NOT internal
    `;

    const dailyTrend = await sql`
      SELECT
        to_char(date_trunc('day', started_at), 'YYYY-MM-DD') AS day,
        COUNT(*)::int AS sessions,
        COUNT(*) FILTER (WHERE studied)::int AS studied
      FROM sessions
      WHERE started_at >= now() - interval '7 days' AND NOT internal
      GROUP BY 1
      ORDER BY 1 DESC
    `;

    // Grouped by raw referrer here (cheap, indexed-free GROUP BY on a small
    // table); bucketed into friendly source names in JS below since that
    // needs URL parsing Postgres doesn't do for us.
    const referrerRows = await sql`
      SELECT referrer, COUNT(*)::int AS sessions
      FROM sessions
      WHERE NOT internal
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
      WHERE NOT internal
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

    // Signed-up accounts (magic-link email sign-in creates a row in `users`
    // the first time someone signs in) -- separate from the anonymous
    // `sessions` visit-tracking above.
    const signupTotals = await sql`
      SELECT
        COUNT(*)::int AS total_users,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE)::int AS signups_today,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '7 days')::int AS signups_7d
      FROM users
    `;

    // last_active = most recent answer synced to user_progress (only
    // signed-in study is synced, so this is real account activity).
    const recentSignups = await sql`
      SELECT
        u.email,
        to_char(u.created_at, 'YYYY-MM-DD HH24:MI') AS joined_at,
        to_char(MAX(p.last_seen_at), 'YYYY-MM-DD') AS last_active,
        COUNT(p.question_key)::int AS answered,
        EXISTS (SELECT 1 FROM auth_tokens t WHERE t.user_id = u.id AND t.used_at IS NOT NULL) AS signed_in
      FROM users u
      LEFT JOIN user_progress p ON p.user_id = u.id
      GROUP BY u.id, u.email, u.created_at
      ORDER BY u.created_at DESC
      LIMIT 50
    `;

    // --- Return visits ---
    // A visitor (anonymous, per-browser id) "returned" if they have a
    // session on a later calendar day (UTC) than their first. Day-7/day-30
    // rates only count visitors whose full window has already elapsed, so
    // brand-new visitors don't drag the rate down just for being new.
    const retentionRows = await sql`
      WITH s AS (
        SELECT visitor_id, started_at, studied FROM sessions WHERE NOT internal
      ),
      v AS (
        SELECT
          visitor_id,
          date_trunc('day', MIN(started_at)) AS first_day,
          COUNT(DISTINCT date_trunc('day', started_at))::int AS active_days,
          BOOL_OR(studied) AS ever_studied
        FROM s
        GROUP BY visitor_id
      ),
      r AS (
        SELECT
          v.*,
          EXISTS (
            SELECT 1 FROM s
            WHERE s.visitor_id = v.visitor_id
              AND s.started_at >= v.first_day + interval '1 day'
              AND s.started_at < v.first_day + interval '8 days'
          ) AS back_d7,
          EXISTS (
            SELECT 1 FROM s
            WHERE s.visitor_id = v.visitor_id
              AND s.started_at >= v.first_day + interval '1 day'
              AND s.started_at < v.first_day + interval '31 days'
          ) AS back_d30
        FROM v
      )
      SELECT
        COUNT(*)::int AS visitors,
        COUNT(*) FILTER (WHERE active_days >= 2)::int AS returning_visitors,
        COUNT(*) FILTER (WHERE ever_studied)::int AS studied_visitors,
        COUNT(*) FILTER (WHERE ever_studied AND active_days >= 2)::int AS studied_returning,
        COUNT(*) FILTER (WHERE active_days >= 5)::int AS regulars,
        COUNT(*) FILTER (WHERE first_day + interval '8 days' <= now())::int AS d7_eligible,
        COUNT(*) FILTER (WHERE first_day + interval '8 days' <= now() AND back_d7)::int AS d7_returned,
        COUNT(*) FILTER (WHERE first_day + interval '31 days' <= now())::int AS d30_eligible,
        COUNT(*) FILTER (WHERE first_day + interval '31 days' <= now() AND back_d30)::int AS d30_returned
      FROM r
    `;

    const active7dRows = await sql`
      WITH f AS (
        SELECT visitor_id, MIN(started_at) AS first_at FROM sessions WHERE NOT internal GROUP BY visitor_id
      )
      SELECT
        COUNT(DISTINCT s.visitor_id)::int AS active_7d,
        COUNT(DISTINCT s.visitor_id) FILTER (WHERE f.first_at < now() - interval '7 days')::int AS returning_7d
      FROM sessions s
      JOIN f ON f.visitor_id = s.visitor_id
      WHERE NOT s.internal AND s.started_at >= now() - interval '7 days'
    `;

    // Weekly cohorts: visitors grouped by the (Monday-start) week of their
    // first visit, then how many were back in each following week.
    const cohortRows = await sql`
      WITH s AS (
        SELECT visitor_id, started_at FROM sessions WHERE NOT internal
      ),
      f AS (
        SELECT visitor_id, date_trunc('week', MIN(started_at)) AS cohort FROM s GROUP BY visitor_id
      ),
      a AS (
        SELECT DISTINCT
          s.visitor_id,
          f.cohort,
          ((date_trunc('week', s.started_at)::date - f.cohort::date) / 7)::int AS wk
        FROM s
        JOIN f ON f.visitor_id = s.visitor_id
      )
      SELECT
        to_char(cohort, 'YYYY-MM-DD') AS week,
        ((date_trunc('week', now())::date - cohort::date) / 7)::int AS weeks_elapsed,
        COUNT(*) FILTER (WHERE wk = 0)::int AS size,
        COUNT(*) FILTER (WHERE wk = 1)::int AS w1,
        COUNT(*) FILTER (WHERE wk = 2)::int AS w2,
        COUNT(*) FILTER (WHERE wk = 3)::int AS w3,
        COUNT(*) FILTER (WHERE wk = 4)::int AS w4
      FROM a
      WHERE cohort >= date_trunc('week', now()) - interval '9 weeks'
      GROUP BY cohort
      ORDER BY cohort DESC
    `;

    const accountActivityRows = await sql`
      WITH ua AS (
        SELECT u.id, u.created_at, MAX(p.last_seen_at) AS last_active, COUNT(p.question_key)::int AS answered
        FROM users u
        LEFT JOIN user_progress p ON p.user_id = u.id
        GROUP BY u.id, u.created_at
      )
      SELECT
        COUNT(*) FILTER (WHERE last_active >= now() - interval '7 days')::int AS active_7d,
        COUNT(*) FILTER (WHERE last_active >= now() - interval '30 days')::int AS active_30d,
        COUNT(*) FILTER (WHERE last_active >= created_at + interval '1 day')::int AS came_back,
        COUNT(*) FILTER (WHERE answered = 0)::int AS never_answered
      FROM ua
    `;

    // Sign-in funnel: every emailed link is a row in auth_tokens. "Never
    // signed in" = accounts (created the moment a link is requested) with no
    // link ever used -- people who asked to sign in but never got through.
    const signinRows = await sql`
      SELECT
        COUNT(*)::int AS links_sent,
        COUNT(*) FILTER (WHERE used_at IS NOT NULL)::int AS links_used,
        COUNT(*) FILTER (WHERE used_at IS NULL AND expires_at <= now())::int AS links_expired,
        ROUND(
          (percentile_cont(0.5) WITHIN GROUP (ORDER BY EXTRACT(EPOCH FROM (used_at - created_at))))::numeric
        )::int AS median_seconds_to_click,
        COUNT(*) FILTER (WHERE used_at IS NOT NULL AND used_at - created_at > interval '15 minutes')::int AS used_after_15min
      FROM auth_tokens
    `;
    const neverSignedInRows = await sql`
      SELECT COUNT(*)::int AS never_signed_in
      FROM users u
      WHERE NOT EXISTS (SELECT 1 FROM auth_tokens t WHERE t.user_id = u.id AND t.used_at IS NOT NULL)
    `;
    const si = (signinRows[0] ?? {}) as Record<string, number | null>;
    const signin = {
      linksSent: si.links_sent ?? 0,
      linksUsed: si.links_used ?? 0,
      linksExpired: si.links_expired ?? 0,
      medianSecondsToClick: si.median_seconds_to_click ?? null,
      usedAfter15Min: si.used_after_15min ?? 0,
      neverSignedIn: ((neverSignedInRows[0] ?? {}) as Record<string, number>).never_signed_in ?? 0,
    };

    // First-visit activation: of each visitor's FIRST session, how many
    // answered at least one question. The number the welcome picker and
    // free-tier fixes are meant to move -- daily, so a change is visible.
    const activationRows = await sql`
      WITH f AS (
        SELECT DISTINCT ON (visitor_id) visitor_id, started_at, studied
        FROM sessions
        WHERE NOT internal
        ORDER BY visitor_id, started_at
      )
      SELECT
        COUNT(*)::int AS first_visits,
        COUNT(*) FILTER (WHERE studied)::int AS answered,
        COUNT(*) FILTER (WHERE started_at >= now() - interval '7 days')::int AS first_visits_7d,
        COUNT(*) FILTER (WHERE started_at >= now() - interval '7 days' AND studied)::int AS answered_7d
      FROM f
    `;
    const activationDaily = await sql`
      WITH f AS (
        SELECT DISTINCT ON (visitor_id) visitor_id, started_at, studied
        FROM sessions
        WHERE NOT internal
        ORDER BY visitor_id, started_at
      )
      SELECT
        to_char(date_trunc('day', started_at), 'YYYY-MM-DD') AS day,
        COUNT(*)::int AS new_visitors,
        COUNT(*) FILTER (WHERE studied)::int AS answered
      FROM f
      WHERE started_at >= now() - interval '14 days'
      GROUP BY 1
      ORDER BY 1 DESC
    `;
    const pickRows = await sql`
      SELECT
        picked_subject AS subject,
        COUNT(*)::int AS picks,
        COUNT(*) FILTER (WHERE studied)::int AS answered
      FROM sessions
      WHERE picked_subject IS NOT NULL AND NOT internal
      GROUP BY picked_subject
      ORDER BY picks DESC
    `;
    const act0 = (activationRows[0] ?? {}) as Record<string, number>;
    const activation = {
      firstVisits: act0.first_visits ?? 0,
      answered: act0.answered ?? 0,
      firstVisits7d: act0.first_visits_7d ?? 0,
      answered7d: act0.answered_7d ?? 0,
      daily: activationDaily as { day: string; new_visitors: number; answered: number }[],
      picks: pickRows as { subject: string; picks: number; answered: number }[],
    };

    const pct = (n: number, d: number) => (d > 0 ? Math.round((n / d) * 100) : null);
    const ret = (retentionRows[0] ?? {}) as Record<string, number>;
    const act = (active7dRows[0] ?? {}) as Record<string, number>;
    const accAct = (accountActivityRows[0] ?? {}) as Record<string, number>;
    const retention = {
      returningVisitors: ret.returning_visitors ?? 0,
      returningPct: pct(ret.returning_visitors ?? 0, ret.visitors ?? 0),
      studiedVisitors: ret.studied_visitors ?? 0,
      studiedReturningPct: pct(ret.studied_returning ?? 0, ret.studied_visitors ?? 0),
      regulars: ret.regulars ?? 0,
      d7Eligible: ret.d7_eligible ?? 0,
      d7Returned: ret.d7_returned ?? 0,
      d7Pct: pct(ret.d7_returned ?? 0, ret.d7_eligible ?? 0),
      d30Eligible: ret.d30_eligible ?? 0,
      d30Returned: ret.d30_returned ?? 0,
      d30Pct: pct(ret.d30_returned ?? 0, ret.d30_eligible ?? 0),
      active7d: act.active_7d ?? 0,
      returning7d: act.returning_7d ?? 0,
      cohorts: (
        cohortRows as {
          week: string;
          weeks_elapsed: number;
          size: number;
          w1: number;
          w2: number;
          w3: number;
          w4: number;
        }[]
      ).map((c) => ({
        week: c.week,
        size: c.size,
        // null = that week hasn't started yet for this cohort
        weeks: [c.w1, c.w2, c.w3, c.w4].map((n, i) => (i + 1 <= c.weeks_elapsed ? n : null)),
      })),
      accountsActive7d: accAct.active_7d ?? 0,
      accountsActive30d: accAct.active_30d ?? 0,
      accountsCameBack: accAct.came_back ?? 0,
      accountsNeverAnswered: accAct.never_answered ?? 0,
    };

    const row = totals[0] ?? {
      total_sessions: 0,
      unique_visitors: 0,
      studied_sessions: 0,
      sessions_today: 0,
      avg_duration_seconds: 0,
      quiz_limit_hits: 0,
      quiz_limit_signin_clicks: 0,
      study_limit_hits: 0,
      study_limit_signin_clicks: 0,
    };

    const signupRow = signupTotals[0] ?? {
      total_users: 0,
      signups_today: 0,
      signups_7d: 0,
    };

    res.status(200).json({
      ok: true,
      totalSessions: row.total_sessions,
      uniqueVisitors: row.unique_visitors,
      studiedSessions: row.studied_sessions,
      sessionsToday: row.sessions_today,
      avgDurationSeconds: row.avg_duration_seconds ?? 0,
      studiedPct: row.total_sessions > 0 ? Math.round((row.studied_sessions / row.total_sessions) * 100) : 0,
      quizLimitHits: row.quiz_limit_hits,
      quizLimitSigninClicks: row.quiz_limit_signin_clicks,
      quizLimitSigninPct:
        row.quiz_limit_hits > 0 ? Math.round((row.quiz_limit_signin_clicks / row.quiz_limit_hits) * 100) : 0,
      studyLimitHits: row.study_limit_hits,
      studyLimitSigninClicks: row.study_limit_signin_clicks,
      studyLimitSigninPct:
        row.study_limit_hits > 0 ? Math.round((row.study_limit_signin_clicks / row.study_limit_hits) * 100) : 0,
      dailyTrend: dailyTrend,
      topSources,
      topCountries,
      totalUsers: signupRow.total_users,
      signupsToday: signupRow.signups_today,
      signups7d: signupRow.signups_7d,
      recentSignups: (
        recentSignups as {
          email: string;
          joined_at: string;
          last_active: string | null;
          answered: number;
          signed_in: boolean;
        }[]
      ).map((r) => ({
        signedIn: r.signed_in,
        email: r.email,
        joinedAt: r.joined_at,
        lastActive: r.last_active,
        answered: r.answered,
      })),
      retention,
      signin,
      activation,
    });
  } catch (err) {
    console.error("stats error", err);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
