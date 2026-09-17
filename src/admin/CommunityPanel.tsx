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
  body?: string;
}

interface PostRow {
  id: string;
  seq: number;
  room: string;
  displayName: string;
  authorEmail: string;
  authorId: string;
  body: string;
  createdAt: string;
  editedAt: string | null;
  flagged: boolean;
}

// Talks to /api/community/admin (one consolidated endpoint -- see the
// comment at the top of api/community/admin.ts for why). GET takes
// ?resource=settings|reports; POST needs an op field ("settings" or
// "moderate") alongside the payload itself.
async function fetchSettings(secret: string): Promise<{ enabled: boolean; rooms: RoomRow[] }> {
  const res = await fetch("/api/community/admin?resource=settings", { headers: { "x-admin-secret": secret } });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load settings.");
  const data = await res.json();
  return { enabled: data.enabled, rooms: data.rooms };
}

async function postSettings(
  secret: string,
  payload: { enabled?: boolean; room?: string; status?: string }
): Promise<{ enabled: boolean; rooms: RoomRow[] } | null> {
  const res = await fetch("/api/community/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify({ op: "settings", ...payload }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) return null;
  return { enabled: data.enabled, rooms: data.rooms };
}

async function fetchReports(secret: string): Promise<ReportRow[]> {
  const res = await fetch("/api/community/admin?resource=reports", { headers: { "x-admin-secret": secret } });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load reports.");
  const data = await res.json();
  return data.reports;
}

// Admin's general post browser -- newest-first, paged backward with
// `before` (see api/community/_adminMessages.ts for why it's shaped
// differently than the public feed's forward-only polling).
async function fetchAdminMessages(
  secret: string,
  room: string,
  before?: number
): Promise<{ messages: PostRow[]; hasMore: boolean }> {
  const url = before
    ? `/api/community/admin?resource=messages&room=${encodeURIComponent(room)}&before=${before}`
    : `/api/community/admin?resource=messages&room=${encodeURIComponent(room)}`;
  const res = await fetch(url, { headers: { "x-admin-secret": secret } });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load posts.");
  const data = await res.json();
  return { messages: data.messages, hasMore: data.hasMore };
}

async function moderate(secret: string, payload: ModeratePayload): Promise<boolean> {
  const res = await fetch("/api/community/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify({ op: "moderate", ...payload }),
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

function PostCard({
  post,
  secret,
  onChanged,
}: {
  post: PostRow;
  secret: string;
  onChanged: (updated?: PostRow) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(post.body);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    if (!text.trim()) {
      setError("Can't save an empty post -- delete it instead.");
      return;
    }
    setBusy(true);
    setError(null);
    const ok = await moderate(secret, { action: "edit_message", messageId: post.id, body: text });
    setBusy(false);
    if (ok) {
      setEditing(false);
      onChanged({ ...post, body: text.trim(), editedAt: new Date().toISOString() });
    } else {
      setError("Something went wrong saving that.");
    }
  }

  async function handleDelete() {
    setBusy(true);
    const ok = await moderate(secret, { action: "delete_message", messageId: post.id });
    setBusy(false);
    if (ok) onChanged();
  }

  return (
    <div className="admin__review-card">
      <div className="admin__review-meta">
        {post.room} · {post.displayName} ({post.authorEmail}) · {new Date(post.createdAt).toLocaleString()}
        {post.editedAt && <> · edited {new Date(post.editedAt).toLocaleString()}</>}
        {post.flagged && <> · flagged</>}
      </div>
      {editing ? (
        <>
          <textarea
            className="admin__input admin__textarea"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {error && <div className="admin__error">{error}</div>}
          <div className="admin__actions">
            <button type="button" className="admin__btn" disabled={busy} onClick={handleSave}>
              {busy ? "Saving…" : "Save"}
            </button>
            <button
              type="button"
              className="admin__btn"
              disabled={busy}
              onClick={() => {
                setText(post.body);
                setError(null);
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="admin__raw">{post.body}</div>
          <div className="admin__actions">
            <button type="button" className="admin__btn" disabled={busy} onClick={() => setEditing(true)}>
              Edit
            </button>
            <button type="button" className="admin__btn admin__btn--danger" disabled={busy} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function CommunityPanel({ secret }: { secret: string }) {
  const [enabled, setEnabled] = useState(true);
  const [rooms, setRooms] = useState<RoomRow[]>([]);
  const [reports, setReports] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [browseRoom, setBrowseRoom] = useState<string>("");
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

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

  // Default the browser to the first room once the room list loads --
  // this is the only thing that picks an initial room, so it only fires
  // once (guarded by browseRoom already being set).
  useEffect(() => {
    if (!browseRoom && rooms.length > 0) setBrowseRoom(rooms[0].room);
  }, [rooms, browseRoom]);

  function loadPosts(room: string, before?: number) {
    setPostsLoading(true);
    setPostsError(null);
    fetchAdminMessages(secret, room, before)
      .then(({ messages, hasMore: more }) => {
        setPosts((prev) => (before ? [...prev, ...messages] : messages));
        setHasMore(more);
      })
      .catch((err) => setPostsError(err instanceof Error ? err.message : "Something went wrong."))
      .finally(() => setPostsLoading(false));
  }

  useEffect(() => {
    if (browseRoom) loadPosts(browseRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [browseRoom]);

  function handlePostChanged(updated?: PostRow) {
    if (!updated) {
      // Deleted -- reload from the top rather than trying to splice out
      // one row, since a delete can also change what "load more" should
      // fetch next.
      if (browseRoom) loadPosts(browseRoom);
      return;
    }
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }

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

      <div className="admin__trend-label">All posts</div>
      <div className="admin__field">
        <span className="admin__label">Room</span>
        <select className="admin__input" value={browseRoom} onChange={(e) => setBrowseRoom(e.target.value)}>
          {rooms.map((r) => (
            <option key={r.room} value={r.room}>
              {r.room}
            </option>
          ))}
        </select>
      </div>
      {postsLoading && posts.length === 0 && <div className="admin__loading">Loading…</div>}
      {postsError && <div className="admin__error">{postsError}</div>}
      {!postsLoading && posts.length === 0 && !postsError && (
        <div className="admin__trend-empty">No posts in this room yet.</div>
      )}
      {posts.length > 0 && (
        <div className="admin__review-list">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} secret={secret} onChanged={handlePostChanged} />
          ))}
        </div>
      )}
      {hasMore && (
        <div className="admin__field">
          <button
            type="button"
            className="admin__btn"
            disabled={postsLoading}
            onClick={() => loadPosts(browseRoom, posts[posts.length - 1]?.seq)}
          >
            {postsLoading ? "Loading…" : "Load more"}
          </button>
        </div>
      )}

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
