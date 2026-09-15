import { useEffect, useState } from "react";
import "./admin.css";

interface AdminSubmission {
  id: string;
  airline: string;
  rawTitle: string | null;
  rawBody: string;
  status: string;
  publishedTitle: string | null;
  publishedSummary: string | null;
  publishedBody: string | null;
  adminNotes: string | null;
  createdAt: string;
  reviewedAt: string | null;
  submitterEmail: string;
}

async function fetchSubmissions(secret: string, status: string): Promise<AdminSubmission[]> {
  const res = await fetch(`/api/submissions/list?status=${status}`, {
    headers: { "x-admin-secret": secret },
  });
  if (!res.ok) throw new Error(res.status === 401 ? "Wrong password." : "Couldn't load submissions.");
  const data = await res.json();
  return data.submissions;
}

interface ReviewPayload {
  id: string;
  action: "approve" | "reject";
  publishedTitle?: string;
  publishedSummary?: string;
  publishedBody?: string;
  adminNotes?: string;
}

async function reviewSubmission(secret: string, payload: ReviewPayload): Promise<boolean> {
  const res = await fetch("/api/submissions/review", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && !!data.ok;
}

const STATUS_TABS: { key: string; label: string }[] = [
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Published" },
  { key: "rejected", label: "Rejected" },
];

function ReviewCard({
  submission,
  secret,
  onHandled,
}: {
  submission: AdminSubmission;
  secret: string;
  onHandled: () => void;
}) {
  const [title, setTitle] = useState(submission.publishedTitle ?? submission.rawTitle ?? "");
  const [summary, setSummary] = useState(submission.publishedSummary ?? "");
  const [text, setText] = useState(submission.publishedBody ?? submission.rawBody);
  const [notes, setNotes] = useState(submission.adminNotes ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleApprove() {
    if (!title.trim() || !text.trim()) {
      setError("Needs a title and a body before it can go live.");
      return;
    }
    setBusy(true);
    setError(null);
    const ok = await reviewSubmission(secret, {
      id: submission.id,
      action: "approve",
      publishedTitle: title,
      publishedSummary: summary,
      publishedBody: text,
      adminNotes: notes,
    });
    setBusy(false);
    if (ok) onHandled();
    else setError("Something went wrong publishing that.");
  }

  async function handleReject() {
    setBusy(true);
    setError(null);
    const ok = await reviewSubmission(secret, { id: submission.id, action: "reject", adminNotes: notes });
    setBusy(false);
    if (ok) onHandled();
    else setError("Something went wrong.");
  }

  return (
    <div className="admin__review-card">
      <div className="admin__review-meta">
        {submission.airline} · {submission.submitterEmail} · {new Date(submission.createdAt).toLocaleString()}
      </div>

      <div className="admin__field">
        <span className="admin__label">
          Raw submission{submission.rawTitle ? ` — "${submission.rawTitle}"` : ""}
        </span>
        <div className="admin__raw">{submission.rawBody}</div>
      </div>

      {submission.status === "pending" ? (
        <>
          <div className="admin__field">
            <label className="admin__label" htmlFor={`title-${submission.id}`}>
              Published title
            </label>
            <input
              id={`title-${submission.id}`}
              className="admin__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="admin__field">
            <label className="admin__label" htmlFor={`summary-${submission.id}`}>
              Published summary (optional teaser)
            </label>
            <input
              id={`summary-${submission.id}`}
              className="admin__input"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div className="admin__field">
            <label className="admin__label" htmlFor={`body-${submission.id}`}>
              Published body — rewrite and de-brand here. Start a line with "## Heading" to break it into
              sections.
            </label>
            <textarea
              id={`body-${submission.id}`}
              className="admin__input admin__textarea"
              rows={12}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="admin__field">
            <label className="admin__label" htmlFor={`notes-${submission.id}`}>
              Admin notes (only shown to the submitter if rejected)
            </label>
            <input
              id={`notes-${submission.id}`}
              className="admin__input"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {error && <div className="admin__error">{error}</div>}

          <div className="admin__actions">
            <button type="button" className="admin__btn" onClick={handleApprove} disabled={busy}>
              {busy ? "Publishing…" : "Publish"}
            </button>
            <button type="button" className="admin__btn admin__btn--danger" onClick={handleReject} disabled={busy}>
              Reject
            </button>
          </div>
        </>
      ) : (
        <div className="admin__resolved-note">
          {submission.status === "approved" ? "Published" : "Rejected"}
          {submission.publishedTitle ? ` as "${submission.publishedTitle}"` : ""}
          {submission.adminNotes ? ` — note: ${submission.adminNotes}` : ""}
        </div>
      )}
    </div>
  );
}

export default function SubmissionsPanel({ secret }: { secret: string }) {
  const [status, setStatus] = useState<string>("pending");
  const [submissions, setSubmissions] = useState<AdminSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function reload() {
    setLoading(true);
    setError(null);
    fetchSubmissions(secret, status)
      .then(setSubmissions)
      .catch((err) => setError(err instanceof Error ? err.message : "Something went wrong."))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div>
      <div className="admin__tabs">
        {STATUS_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={"admin__tab" + (status === t.key ? " admin__tab--active" : "")}
            onClick={() => setStatus(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading && <div className="admin__loading">Loading…</div>}
      {error && <div className="admin__error">{error}</div>}
      {!loading && !error && submissions.length === 0 && <div className="admin__trend-empty">Nothing here.</div>}

      <div className="admin__review-list">
        {submissions.map((s) => (
          <ReviewCard key={s.id} submission={s} secret={secret} onHandled={reload} />
        ))}
      </div>
    </div>
  );
}
