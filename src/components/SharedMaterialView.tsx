import { useEffect, useState } from "react";
import { AIRLINES, SHARED_MATERIAL, type Airline, type SharedEntry } from "../data/sharedMaterial";
import { fetchMe, type AuthState } from "../lib/auth";
import {
  submitExperience,
  fetchMySubmissions,
  fetchCommunityEntries,
  type MySubmission,
  type CommunityEntry,
} from "../lib/submissions";
import { parseSubmissionText } from "../lib/submissionFormat";
import SignInModal from "./SignInModal";
import "../admin/admin.css";

// Curated entries (SharedEntry, numeric id) and community-submitted ones
// (CommunityEntry from the API, uuid id) get normalised into this one
// shape so EntryCard doesn't need to know which kind it's rendering.
interface DisplayEntry {
  id: string;
  title: string;
  summary?: string;
  body?: string;
  sections?: { heading: string; body: string }[];
  note?: string;
  community?: boolean;
}

function curatedToDisplay(entry: SharedEntry): DisplayEntry {
  return {
    id: `curated-${entry.id}`,
    title: entry.title,
    summary: entry.summary,
    body: entry.body,
    sections: entry.sections,
    note: entry.note,
  };
}

function communityToDisplay(entry: CommunityEntry): DisplayEntry {
  const parsed = parseSubmissionText(entry.body);
  return {
    id: `community-${entry.id}`,
    title: entry.title,
    summary: entry.summary ?? undefined,
    body: parsed.body,
    sections: parsed.sections,
    note: "Shared by a member of the AvBuddy community.",
    community: true,
  };
}

function EntryCard({ entry }: { entry: DisplayEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card interview-item">
      <button type="button" className="interview-item__question" onClick={() => setOpen((o) => !o)}>
        <span className="shared-entry__heading">
          <span className="shared-entry__title-row">
            <span className="interview-item__text">{entry.title}</span>
            {entry.community && <span className="shared-entry__badge">COMMUNITY</span>}
          </span>
          {entry.summary && !open && <span className="shared-entry__summary">{entry.summary}</span>}
        </span>
        <span className="interview-item__chevron">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="interview-item__answer shared-entry__content">
          {entry.sections ? (
            entry.sections.map((section, i) => (
              <div key={i} className="shared-entry__section">
                <div className="shared-entry__section-heading">{section.heading}</div>
                <p className="shared-entry__body">{section.body}</p>
              </div>
            ))
          ) : (
            <p className="shared-entry__body">{entry.body}</p>
          )}
          {entry.note && <div className="shared-entry__note">{entry.note}</div>}
        </div>
      )}
    </div>
  );
}

const STATUS_LABEL: Record<MySubmission["status"], string> = {
  pending: "Pending review",
  approved: "Published",
  rejected: "Not published",
};

function SubmissionRow({ submission }: { submission: MySubmission }) {
  return (
    <div className="my-submissions__row">
      <div className="my-submissions__title">
        {submission.title || `Untitled submission — ${submission.airline}`}
        {submission.status === "rejected" && submission.adminNotes && (
          <div className="my-submissions__note">{submission.adminNotes}</div>
        )}
      </div>
      <span className={`status-badge status-badge--${submission.status}`}>{STATUS_LABEL[submission.status]}</span>
    </div>
  );
}

export default function SharedMaterialView() {
  const [activeAirline, setActiveAirline] = useState<Airline>(AIRLINES[0]);

  const [auth, setAuth] = useState<AuthState>({ signedIn: false, email: null });
  const [authReady, setAuthReady] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    fetchMe().then((state) => {
      setAuth(state);
      setAuthReady(true);
    });
  }, []);

  const [communityEntries, setCommunityEntries] = useState<CommunityEntry[]>([]);
  useEffect(() => {
    fetchCommunityEntries().then(setCommunityEntries);
  }, []);

  const [mySubmissions, setMySubmissions] = useState<MySubmission[]>([]);
  useEffect(() => {
    if (authReady && auth.signedIn) {
      fetchMySubmissions().then(setMySubmissions);
    }
  }, [authReady, auth.signedIn]);

  const [composeOpen, setComposeOpen] = useState(false);
  const [composeAirline, setComposeAirline] = useState<Airline>(AIRLINES[0]);
  const [composeTitle, setComposeTitle] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitDone, setSubmitDone] = useState(false);

  function openCompose() {
    setComposeAirline(activeAirline);
    setComposeOpen(true);
    setSubmitDone(false);
    setSubmitError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (composeBody.trim().length < 30) {
      setSubmitError("A few more details would help — try to give at least a few sentences.");
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    const result = await submitExperience(composeAirline, composeTitle, composeBody);
    setSubmitting(false);
    if (result.ok) {
      setSubmitDone(true);
      setComposeTitle("");
      setComposeBody("");
      fetchMySubmissions().then(setMySubmissions);
    } else {
      setSubmitError(
        result.error === "too_soon"
          ? "You just submitted something — give it a couple of minutes before sending another."
          : result.error === "too_many_pending"
          ? "You've got a few submissions already waiting on review — we'll get to those before taking more."
          : result.error === "body_too_long"
          ? "That's a bit long for one submission — try trimming it down or splitting it up."
          : "Something went wrong sending that — try again in a moment."
      );
    }
  }

  const entries: DisplayEntry[] = [
    ...SHARED_MATERIAL[activeAirline].map(curatedToDisplay),
    ...communityEntries.filter((e) => e.airline === activeAirline).map(communityToDisplay),
  ];

  return (
    <div>
      <div className="card interview-intro">
        <div className="interview-intro__title">Shared interview material, by airline</div>
        <p className="interview-intro__text">
          Notes and experiences gathered from real interview processes, organised by airline — some curated
          directly, some submitted by other AvBuddy users below. Every submission is reviewed before it's posted,
          so nothing goes live unedited.
        </p>
      </div>

      <div className="card share-panel">
        {!composeOpen ? (
          <button type="button" className="admin__btn" onClick={openCompose}>
            Share Your Experience
          </button>
        ) : authReady && !auth.signedIn ? (
          <div className="gate">
            <div className="gate__title">Sign in to submit</div>
            <p className="gate__text">
              Submitting your own interview experience needs a free account — mainly so we can let you know once
              it's reviewed, and to keep this section spam-free.
            </p>
            <button className="btn-primary" onClick={() => setSignInOpen(true)}>
              Sign in — it's free
            </button>
            <div className="share-panel__gate-actions">
              <button type="button" className="modal__link" onClick={() => setComposeOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : submitDone ? (
          <div>
            <p className="share-form__success">
              Thanks for sharing — we'll review it and it'll appear here once it's posted.
            </p>
            <button type="button" className="modal__link" onClick={() => setComposeOpen(false)}>
              Close
            </button>
          </div>
        ) : (
          <form className="share-form" onSubmit={handleSubmit}>
            <div>
              <label className="share-form__label" htmlFor="share-airline">
                Airline
              </label>
              <select
                id="share-airline"
                className="admin__input"
                value={composeAirline}
                onChange={(e) => setComposeAirline(e.target.value as Airline)}
              >
                {AIRLINES.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="share-form__label" htmlFor="share-title">
                Title (optional)
              </label>
              <input
                id="share-title"
                type="text"
                className="admin__input"
                placeholder="e.g. First Officer assessment day, Abu Dhabi"
                value={composeTitle}
                onChange={(e) => setComposeTitle(e.target.value)}
                maxLength={200}
              />
            </div>
            <div>
              <label className="share-form__label" htmlFor="share-body">
                What happened?
              </label>
              <textarea
                id="share-body"
                className="admin__input admin__textarea"
                rows={8}
                placeholder="Written test, simulator, interview questions, group exercise — whatever you remember. Don't worry about formatting, we'll tidy it up before it goes live. Please leave your name out of it."
                value={composeBody}
                onChange={(e) => setComposeBody(e.target.value)}
                maxLength={20000}
              />
            </div>
            <p className="share-form__hint">
              We review every submission before posting and never publish your name or email.
            </p>
            {submitError && <div className="admin__error">{submitError}</div>}
            <div className="share-form__actions">
              <button type="submit" className="admin__btn" disabled={submitting}>
                {submitting ? "Sending…" : "Submit for review"}
              </button>
              <button type="button" className="modal__link" onClick={() => setComposeOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {authReady && auth.signedIn && mySubmissions.length > 0 && (
          <div className="my-submissions">
            <div className="admin__trend-label">Your submissions</div>
            {mySubmissions.map((s) => (
              <SubmissionRow key={s.id} submission={s} />
            ))}
          </div>
        )}
      </div>

      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}

      <div className="filters">
        {AIRLINES.map((airline) => {
          const count = SHARED_MATERIAL[airline].length + communityEntries.filter((e) => e.airline === airline).length;
          return (
            <button
              key={airline}
              onClick={() => setActiveAirline(airline)}
              className={"filter-chip" + (activeAirline === airline ? " filter-chip--active" : "")}
            >
              {airline.toUpperCase()} ({count})
            </button>
          );
        })}
      </div>

      {entries.length === 0 ? (
        <div className="card">
          <div className="progress__empty">No shared material for {activeAirline} yet — check back soon.</div>
        </div>
      ) : (
        <div className="interview-list">
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
