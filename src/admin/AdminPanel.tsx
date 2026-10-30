import { useEffect, useState } from "react";
import "./admin.css";
import SubmissionsPanel from "./SubmissionsPanel";
import CommunityPanel from "./CommunityPanel";
import { INTERNAL_KEY } from "../lib/analytics";

interface Retention {
  returningVisitors: number;
  returningPct: number | null;
  studiedVisitors: number;
  studiedReturningPct: number | null;
  regulars: number;
  d7Eligible: number;
  d7Returned: number;
  d7Pct: number | null;
  d30Eligible: number;
  d30Returned: number;
  d30Pct: number | null;
  active7d: number;
  returning7d: number;
  cohorts: { week: string; size: number; weeks: (number | null)[] }[];
  accountsActive7d: number;
  accountsActive30d: number;
  accountsCameBack: number;
  accountsNeverAnswered: number;
}

interface Stats {
  totalSessions: number;
  uniqueVisitors: number;
  studiedSessions: number;
  sessionsToday: number;
  avgDurationSeconds: number;
  studiedPct: number;
  quizLimitHits: number;
  quizLimitSigninClicks: number;
  quizLimitSigninPct: number;
  studyLimitHits: number;
  studyLimitSigninClicks: number;
  studyLimitSigninPct: number;
  dailyTrend: { day: string; sessions: number; studied: number }[];
  topSources: { source: string; sessions: number }[];
  topCountries: { country: string; sessions: number }[];
  totalUsers: number;
  signupsToday: number;
  signups7d: number;
  recentSignups: {
    email: string;
    joinedAt: string;
    lastActive: string | null;
    answered: number;
    signedIn: boolean;
  }[];
  activation?: {
    firstVisits: number;
    answered: number;
    firstVisits7d: number;
    answered7d: number;
    daily: { day: string; new_visitors: number; answered: number }[];
    picks: { subject: string; picks: number; answered: number }[];
  };
  signin?: {
    linksSent: number;
    linksUsed: number;
    linksExpired: number;
    medianSecondsToClick: number | null;
    usedAfter15Min: number;
    neverSignedIn: number;
  };
  retention?: Retention;
}

function pctText(value: number | null | undefined): string {
  return value === null || value === undefined ? "—" : `${value}%`;
}

const SECRET_KEY = "avbuddy_admin_secret";

type Tab = "usage" | "submissions" | "community";

function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${seconds}s`;
}

async function fetchStats(secret: string): Promise<Stats> {
  const res = await fetch("/api/stats", {
    headers: { "x-admin-secret": secret },
  });
  if (!res.ok) {
    throw new Error(res.status === 401 ? "Wrong password." : "Something went wrong loading stats.");
  }
  return res.json();
}

export default function AdminPanel() {
  const [secret, setSecret] = useState<string>(() => sessionStorage.getItem(SECRET_KEY) ?? "");
  const [inputValue, setInputValue] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<Tab>("usage");

  useEffect(() => {
    if (!secret) return;
    setLoading(true);
    setError(null);
    fetchStats(secret)
      .then((data) => {
        setStats(data);
        sessionStorage.setItem(SECRET_KEY, secret);
        // This browser belongs to the site owner: exclude its visits
        // (past and future) from the usage stats. See api/track.ts.
        try {
          localStorage.setItem(INTERNAL_KEY, "1");
        } catch {
          // Best-effort only.
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        sessionStorage.removeItem(SECRET_KEY);
        setSecret("");
      })
      .finally(() => setLoading(false));
  }, [secret]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSecret(inputValue);
  }

  if (!secret) {
    return (
      <div className="admin">
        <div className="admin__container">
          <form className="admin__login" onSubmit={handleSubmit}>
            <div className="admin__eyebrow">AVBUDDY ADMIN</div>
            <input
              type="password"
              className="admin__input"
              placeholder="Password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
            <button className="admin__btn" type="submit">
              Enter
            </button>
            {error && <div className="admin__error">{error}</div>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__eyebrow">AVBUDDY ADMIN</div>
        <div className="admin__title">
          {tab === "usage" ? "Usage" : tab === "submissions" ? "Shared Material Submissions" : "Community"}
        </div>

        <div className="admin__tabs">
          <button
            type="button"
            className={"admin__tab" + (tab === "usage" ? " admin__tab--active" : "")}
            onClick={() => setTab("usage")}
          >
            Usage
          </button>
          <button
            type="button"
            className={"admin__tab" + (tab === "submissions" ? " admin__tab--active" : "")}
            onClick={() => setTab("submissions")}
          >
            Submissions
          </button>
          <button
            type="button"
            className={"admin__tab" + (tab === "community" ? " admin__tab--active" : "")}
            onClick={() => setTab("community")}
          >
            Community
          </button>
        </div>

        {tab === "submissions" && <SubmissionsPanel secret={secret} />}
        {tab === "community" && <CommunityPanel secret={secret} />}

        {tab === "usage" && (
          <>
            {loading && <div className="admin__loading">Loading…</div>}
            {error && <div className="admin__error">{error}</div>}

            {stats && (
              <>
                <div className="admin__grid">
                  <div className="admin__tile admin__tile--accent">
                    <div className="admin__tile-value">{stats.totalUsers}</div>
                    <div className="admin__tile-label">Signed-up accounts</div>
                  </div>
                  <div className="admin__tile admin__tile--accent">
                    <div className="admin__tile-value">{stats.signupsToday}</div>
                    <div className="admin__tile-label">Signups today</div>
                  </div>
                  <div className="admin__tile admin__tile--accent">
                    <div className="admin__tile-value">{stats.signups7d}</div>
                    <div className="admin__tile-label">Signups (7 days)</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.uniqueVisitors}</div>
                    <div className="admin__tile-label">Unique visitors</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.totalSessions}</div>
                    <div className="admin__tile-label">Total sessions</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.sessionsToday}</div>
                    <div className="admin__tile-label">Sessions today</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{formatDuration(stats.avgDurationSeconds)}</div>
                    <div className="admin__tile-label">Avg. session length</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.studiedPct}%</div>
                    <div className="admin__tile-label">Sessions that studied</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.studiedSessions}</div>
                    <div className="admin__tile-label">Studied (count)</div>
                  </div>
                </div>

                {/* Free-tier limit funnel: did hitting the free quiz / free
                    study cap make someone click Sign In right there, or did
                    they bounce? Doesn't capture whether they went on to
                    finish the magic-link email (can happen on another
                    device) -- the click is the honest signal available. */}
                <div className="admin__trend-label">Free-tier limit → sign-in click-through</div>
                <div className="admin__grid">
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.quizLimitHits}</div>
                    <div className="admin__tile-label">Hit free quiz limit</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.quizLimitSigninClicks}</div>
                    <div className="admin__tile-label">→ clicked Sign In</div>
                  </div>
                  <div className="admin__tile admin__tile--accent">
                    <div className="admin__tile-value">{stats.quizLimitSigninPct}%</div>
                    <div className="admin__tile-label">Quiz limit → sign-in rate</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.studyLimitHits}</div>
                    <div className="admin__tile-label">Hit free study limit</div>
                  </div>
                  <div className="admin__tile">
                    <div className="admin__tile-value">{stats.studyLimitSigninClicks}</div>
                    <div className="admin__tile-label">→ clicked Sign In</div>
                  </div>
                  <div className="admin__tile admin__tile--accent">
                    <div className="admin__tile-value">{stats.studyLimitSigninPct}%</div>
                    <div className="admin__tile-label">Study limit → sign-in rate</div>
                  </div>
                </div>

                {stats.activation && (
                  <>
                    <div className="admin__trend-label">First visits — did they answer a question?</div>
                    <div className="admin__grid">
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">
                          {pctText(
                            stats.activation.firstVisits7d > 0
                              ? Math.round((stats.activation.answered7d / stats.activation.firstVisits7d) * 100)
                              : null
                          )}
                        </div>
                        <div className="admin__tile-label">
                          Last 7 days ({stats.activation.answered7d}/{stats.activation.firstVisits7d})
                        </div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">
                          {pctText(
                            stats.activation.firstVisits > 0
                              ? Math.round((stats.activation.answered / stats.activation.firstVisits) * 100)
                              : null
                          )}
                        </div>
                        <div className="admin__tile-label">
                          All time ({stats.activation.answered}/{stats.activation.firstVisits})
                        </div>
                      </div>
                    </div>
                    <table className="admin__trend-table">
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>New visitors</th>
                          <th>Answered a question</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stats.activation.daily.length === 0 && (
                          <tr>
                            <td colSpan={3} className="admin__trend-empty">
                              No new visitors in the last 14 days.
                            </td>
                          </tr>
                        )}
                        {stats.activation.daily.map((row) => (
                          <tr key={row.day}>
                            <td>{row.day}</td>
                            <td>{row.new_visitors}</td>
                            <td>
                              {row.answered} ({row.new_visitors > 0 ? Math.round((row.answered / row.new_visitors) * 100) : 0}%)
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="admin__trend-label">What new visitors are studying for</div>
                    <table className="admin__trend-table">
                      <thead>
                        <tr>
                          <th>Exam picked</th>
                          <th>Picks</th>
                          <th>Then answered</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stats.activation.picks.length === 0 && (
                          <tr>
                            <td colSpan={3} className="admin__trend-empty">
                              No picks yet — this fills in as new visitors use the welcome screen.
                            </td>
                          </tr>
                        )}
                        {stats.activation.picks.map((row) => (
                          <tr key={row.subject}>
                            <td>{row.subject}</td>
                            <td>{row.picks}</td>
                            <td>{row.answered}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {stats.retention && (
                  <>
                    <div className="admin__trend-label">Return visits</div>
                    <div className="admin__grid">
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">{pctText(stats.retention.returningPct)}</div>
                        <div className="admin__tile-label">
                          Visitors who came back ({stats.retention.returningVisitors})
                        </div>
                      </div>
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">{pctText(stats.retention.d7Pct)}</div>
                        <div className="admin__tile-label">
                          Back within 7 days ({stats.retention.d7Returned}/{stats.retention.d7Eligible})
                        </div>
                      </div>
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">{pctText(stats.retention.d30Pct)}</div>
                        <div className="admin__tile-label">
                          Back within 30 days ({stats.retention.d30Returned}/{stats.retention.d30Eligible})
                        </div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{pctText(stats.retention.studiedReturningPct)}</div>
                        <div className="admin__tile-label">
                          Studiers who came back (of {stats.retention.studiedVisitors})
                        </div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.retention.regulars}</div>
                        <div className="admin__tile-label">Regulars (5+ different days)</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">
                          {stats.retention.returning7d}/{stats.retention.active7d}
                        </div>
                        <div className="admin__tile-label">Returning / active visitors (7 days)</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.retention.accountsActive7d}</div>
                        <div className="admin__tile-label">Accounts active (7 days)</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.retention.accountsActive30d}</div>
                        <div className="admin__tile-label">Accounts active (30 days)</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">
                          {stats.retention.accountsCameBack}/{stats.totalUsers}
                        </div>
                        <div className="admin__tile-label">Accounts that studied after signup day</div>
                      </div>
                    </div>

                    <div className="admin__trend-label">Weekly cohorts (by first-visit week)</div>
                    <table className="admin__trend-table">
                      <thead>
                        <tr>
                          <th>Week of</th>
                          <th>New</th>
                          <th>Wk 1</th>
                          <th>Wk 2</th>
                          <th>Wk 3</th>
                          <th>Wk 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stats.retention.cohorts.length === 0 && (
                          <tr>
                            <td colSpan={6} className="admin__trend-empty">
                              No visitors yet.
                            </td>
                          </tr>
                        )}
                        {stats.retention.cohorts.map((c) => (
                          <tr key={c.week}>
                            <td>{c.week}</td>
                            <td>{c.size}</td>
                            {c.weeks.map((n, i) => (
                              <td key={i}>
                                {n === null ? "—" : `${n} (${c.size > 0 ? Math.round((n / c.size) * 100) : 0}%)`}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                {stats.signin && (
                  <>
                    <div className="admin__trend-label">Sign-in emails</div>
                    <div className="admin__grid">
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.signin.linksSent}</div>
                        <div className="admin__tile-label">Sign-in links sent</div>
                      </div>
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">
                          {pctText(
                            stats.signin.linksSent > 0
                              ? Math.round((stats.signin.linksUsed / stats.signin.linksSent) * 100)
                              : null
                          )}
                        </div>
                        <div className="admin__tile-label">
                          Links clicked ({stats.signin.linksUsed}/{stats.signin.linksSent})
                        </div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.signin.linksExpired}</div>
                        <div className="admin__tile-label">Expired unused</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">
                          {stats.signin.medianSecondsToClick === null
                            ? "—"
                            : formatDuration(stats.signin.medianSecondsToClick)}
                        </div>
                        <div className="admin__tile-label">Median time to click</div>
                      </div>
                      <div className="admin__tile">
                        <div className="admin__tile-value">{stats.signin.usedAfter15Min}</div>
                        <div className="admin__tile-label">Clicked after 15 min (old limit)</div>
                      </div>
                      <div className="admin__tile admin__tile--accent">
                        <div className="admin__tile-value">
                          {stats.signin.neverSignedIn}/{stats.totalUsers}
                        </div>
                        <div className="admin__tile-label">Accounts that never got signed in</div>
                      </div>
                    </div>
                  </>
                )}

                <div className="admin__trend-label">Recent signups</div>
                <table className="admin__trend-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Joined</th>
                      <th>Signed in</th>
                      <th>Last active</th>
                      <th>Answered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentSignups.length === 0 && (
                      <tr>
                        <td colSpan={5} className="admin__trend-empty">
                          No sign-ups yet.
                        </td>
                      </tr>
                    )}
                    {stats.recentSignups.map((row) => (
                      <tr key={row.email}>
                        <td>{row.email}</td>
                        <td>{row.joinedAt}</td>
                        <td>{row.signedIn ? "yes" : "never"}</td>
                        <td>{row.lastActive ?? "never"}</td>
                        <td>{row.answered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="admin__trend-label">Last 7 days</div>
                <table className="admin__trend-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Sessions</th>
                      <th>Studied</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.dailyTrend.length === 0 && (
                      <tr>
                        <td colSpan={3} className="admin__trend-empty">
                          No sessions yet in this window.
                        </td>
                      </tr>
                    )}
                    {stats.dailyTrend.map((row) => (
                      <tr key={row.day}>
                        <td>{row.day}</td>
                        <td>{row.sessions}</td>
                        <td>{row.studied}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="admin__trend-label">Traffic sources</div>
                <table className="admin__trend-table">
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th>Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.topSources.length === 0 && (
                      <tr>
                        <td colSpan={2} className="admin__trend-empty">
                          No sessions yet.
                        </td>
                      </tr>
                    )}
                    {stats.topSources.map((row) => (
                      <tr key={row.source}>
                        <td>{row.source}</td>
                        <td>{row.sessions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="admin__trend-label">Traffic by country</div>
                <table className="admin__trend-table">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.topCountries.length === 0 && (
                      <tr>
                        <td colSpan={2} className="admin__trend-empty">
                          No sessions yet.
                        </td>
                      </tr>
                    )}
                    {stats.topCountries.map((row) => (
                      <tr key={row.country}>
                        <td>{row.country}</td>
                        <td>{row.sessions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="admin__note">
                  "Signed-up accounts" = anyone who has completed the magic-link email sign-in at
                  least once (recent signups list shows their email + join time, server clock/UTC).
                  "Studied" = answered at least one question during the session, in either Study or
                  Quiz mode. Session length is capped at 2h to avoid a backgrounded tab skewing the
                  average. Sessions recorded before traffic-source tracking was added show as
                  "Direct / None"; country is detected server-side from IP location at the edge (not
                  stored as a raw IP) and only resolves on the live deployment, not local dev.
                  "Came back" = a visit on a later calendar day (UTC) than the visitor's first, per
                  browser -- the same person on a second device or after clearing storage counts as a
                  new visitor, so return rates are a floor, not a ceiling. Day-7/day-30 rates only
                  count visitors whose full window has passed. Account "last active" / "answered" come
                  from synced signed-in progress. This browser is excluded from all visit stats once
                  it has unlocked this page (including its past visits).
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
