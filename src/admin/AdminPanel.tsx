import { useEffect, useState } from "react";
import "./admin.css";

interface Stats {
  totalSessions: number;
  uniqueVisitors: number;
  studiedSessions: number;
  sessionsToday: number;
  avgDurationSeconds: number;
  studiedPct: number;
  dailyTrend: { day: string; sessions: number; studied: number }[];
}

const SECRET_KEY = "avbuddy_admin_secret";

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

  useEffect(() => {
    if (!secret) return;
    setLoading(true);
    setError(null);
    fetchStats(secret)
      .then((data) => {
        setStats(data);
        sessionStorage.setItem(SECRET_KEY, secret);
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
        <div className="admin__title">Usage</div>

        {loading && <div className="admin__loading">Loading…</div>}
        {error && <div className="admin__error">{error}</div>}

        {stats && (
          <>
            <div className="admin__grid">
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

            <div className="admin__note">
              "Studied" = answered at least one question during the session, in either Study or
              Quiz mode. Session length is capped at 2h to avoid a backgrounded tab skewing the
              average.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
