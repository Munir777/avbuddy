import { useEffect, useState } from "react";
import "./admin.css";

interface RoomRow {
  room: string;
  status: "open" | "read_only" | "hidden";
}

interface ReportRow {
  id: string;
  room: string;
  body: string;
  createdAt: string;
  flagCount: number;
  authorEmail: string;
  authorId: string;
  reasons: string[];
}

interface ModeratePayload {
  action: string;
  messageId?: string;
  userId?: string;
  reason?: string;
  muteHours?: number;
}

async function fetchSettings(secret: string): Promise<{ enabled: boolean; rooms: RoomRow[] }> {
  const res = await fetch("/api/community/admin/settings", { headers: { "x-admin-secret": secret } });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load settings.");
  const data = await res.json();
  return { enabled: data.enabled, rooms: data.rooms };
}

async function postSettings(
  secret: string,
  payload: { enabled?: boolean; room?: string; status?: string }
): Promise<{ enabled: boolean; rooms: RoomRow[] } | null> {
  const res = await fetch("/api/community/admin/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) return null;
  return { enabled: data.enabled, rooms: data.rooms };
}

async function fetchReports(secret: string): Promise<ReportRow[]> {
  const res = await fetch("/api/community/admin/reports", { headers: { "x-admin-secret": secret } });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load reports.");
  const data = await res.json();
  return data.reports;
}

async function moderate(secret: string, payload: ModeratePayload): Promise<boolean> {
  const res = await fetch("/api/community/admin/moderate", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && !!data.ok;
}

const STATUS_LABEL: Record<RoomRow["status"], string> = {
  open: "Open",
  read_only: "Read-only",
  hidden: "Hidden",
};

function ReportCard({ report, secret, onHandled }: { report: ReportRow; secret: string; onHandled: () => void }) {
  const [busy, setBusy] = useState(false);

  async function run(payload: ModeratePayload) {
    setBusy(true);
    const ok = await moderate(secret, payload);
    setBusy(false);
    if (ok) onHandled();
  }

  return (
    <div className="admin__review-card">
      <div className="admin__review-meta">
        {report.room} · {report.authorEmail} · {new Date(report.createdAt).toLocaleString()} · {report.flagCount}{" "}
        report{report.flagCount === 1 ? "" : "s"}
      </div>
      <div className="admin__raw">{report.body}</div>
      {report.reasons.length > 0 && <div className="admin__note">Reasons: {report.reasons.join("; ")}</div>}
      <div className="admin__actions">
        <button
          type="button"
          className="admin__btn"
          disabled={busy}
          onClick={() => run({ action: "clear_flag", messageId: report.id })}
        >
          Dismiss
        </button>
        <button
          type="button"
          className="admin__btn admin__btn--danger"
          disabled={busy}
          onClick={() => run({ action: "delete_message", messageId: report.id })}
        >
          Delete message
        </button>
        <button
          type="button"
          className="admin__btn admin__btn--danger"
          disabled={busy}
          onClick={() => run({ action: "mute_user", userId: report.authorId, muteHours: 24 })}
        >
          Mute author (24h)
        </button>
      </div>
    </div>
  );
}

export default function CommunityPanel({ secret }: { secret: string }) {
  const [enabled, setEnabled] = useState(true);
  const [rooms, setRooms] = useState<RoomRow[]>([]);
  const [reports, setReports] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function reloadSettings() {
    setLoading(true);
    setError(null);
    fetchSettings(secret)
      .then(({ enabled, rooms }) => {
        setEnabled(enabled);
        setRooms(rooms);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Something went wrong."))
      .finally(() => setLoading(false));
  }

  function reloadReports() {
    // Errors here piggyback on reloadSettings' error state -- both hit the
    // same admin secret, so a wrong password already surfaces from there.
    fetchReports(secret)
      .then(setReports)
      .catch(() => {});
  }

  useEffect(() => {
    reloadSettings();
    reloadReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleToggleEnabled() {
    const result = await postSettings(secret, { enabled: !enabled });
    if (result) {
      setEnabled(result.enabled);
      setRooms(result.rooms);
    }
  }

  async function handleRoomStatus(room: string, status: string) {
    const result = await postSettings(secret, { room, status });
    if (result) {
      setEnabled(result.enabled);
      setRooms(result.rooms);
    }
  }

  return (
    <div>
      {loading && <div className="admin__loading">Loading…</div>}
      {error && <div className="admin__error">{error}</div>}

      <div className="admin__field">
        <span className="admin__label">Global kill switch</span>
        <button
          type="button"
          className={"admin__btn" + (enabled ? "" : " admin__btn--danger")}
          onClick={handleToggleEnabled}
        >
          {enabled ? "Community is ON — turn off" : "Community is OFF — turn on"}
        </button>
      </div>

      <div className="admin__trend-label">Rooms</div>
      <table className="admin__trend-table">
        <thead>
          <tr>
            <th>Room</th>
            <th>Status</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((r) => (
            <tr key={r.room}>
              <td>{r.room}</td>
              <td>{STATUS_LABEL[r.status]}</td>
              <td>
                <select
                  className="admin__input"
                  value={r.status}
                  onChange={(e) => handleRoomStatus(r.room, e.target.value)}
                >
                  <option value="open">Open</option>
                  <option value="read_only">Read-only</option>
                  <option value="hidden">Hidden</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="admin__trend-label">Flagged messages</div>
      {reports.length === 0 ? (
        <div className="admin__trend-empty">Nothing flagged.</div>
      ) : (
        <div className="admin__review-list">
          {reports.map((r) => (
            <ReportCard key={r.id} report={r} secret={secret} onHandled={reloadReports} />
          ))}
        </div>
      )}
    </div>
  );
}
