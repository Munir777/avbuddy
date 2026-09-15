import { useEffect, useRef, useState } from "react";
import { fetchMe, type AuthState } from "../lib/auth";
import {
  fetchRooms,
  fetchMessages,
  sendMessage,
  reportMessage,
  fetchProfile,
  setDisplayName,
  type RoomInfo,
  type RoomStatus,
  type CommunityMessage,
} from "../lib/community";
import SignInModal from "./SignInModal";
import "../admin/admin.css";

const POLL_MS = 3000;
const ROOMS_POLL_MS = 30000;
const MAX_MESSAGE_LEN = 2000;

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function MessageRow({
  message,
  canReport,
  onReport,
}: {
  message: CommunityMessage;
  canReport: boolean;
  onReport: (id: string) => void;
}) {
  const [reported, setReported] = useState(false);
  return (
    <div className="community-msg">
      <div className="community-msg__meta">
        <span className="community-msg__author">{message.displayName}</span>
        <span className="community-msg__time">{formatTime(message.createdAt)}</span>
        {canReport && !reported && (
          <button
            type="button"
            className="community-msg__report"
            onClick={() => {
              onReport(message.id);
              setReported(true);
            }}
          >
            Report
          </button>
        )}
        {reported && <span className="community-msg__reported">Reported</span>}
      </div>
      <div className="community-msg__body">{message.body}</div>
    </div>
  );
}

// One chat room's whole state (messages, polling cursor, compose box,
// display name). CommunityView renders this with `key={room}` below, so
// switching rooms remounts it fresh -- React's own initial state for the
// new room, rather than an effect reaching in to reset a previous room's
// messages and seq cursor.
function RoomChat({
  room,
  signedIn,
  authReady,
  onOpenSignIn,
}: {
  room: string;
  signedIn: boolean;
  authReady: boolean;
  onOpenSignIn: () => void;
}) {
  const [messages, setMessages] = useState<CommunityMessage[]>([]);
  const [roomStatus, setRoomStatus] = useState<RoomStatus>("open");
  const seqRef = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetchMessages(room, 0).then((result) => {
      if (cancelled) return;
      setRoomStatus(result.status);
      setMessages(result.messages);
      seqRef.current = result.latestSeq;
    });
    return () => {
      cancelled = true;
    };
  }, [room]);

  // The actual near-live polling loop -- paused whenever the browser tab
  // is backgrounded (Page Visibility API), so an idle background tab
  // isn't quietly hammering the API every 3 seconds. Navigating away from
  // Community unmounts CommunityView (and this along with it), tearing
  // the interval down via the same cleanup.
  useEffect(() => {
    let cancelled = false;

    async function poll() {
      if (document.visibilityState !== "visible") return;
      const result = await fetchMessages(room, seqRef.current);
      if (cancelled) return;
      setRoomStatus(result.status);
      if (result.messages.length > 0) {
        setMessages((prev) => [...prev, ...result.messages]);
        seqRef.current = result.latestSeq;
      }
    }

    const t = setInterval(poll, POLL_MS);
    document.addEventListener("visibilitychange", poll);
    return () => {
      cancelled = true;
      clearInterval(t);
      document.removeEventListener("visibilitychange", poll);
    };
  }, [room]);

  // Auto-scroll to the newest message, but only if the reader was already
  // near the bottom -- someone scrolled up to read history shouldn't get
  // yanked back down every time a new message lands.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
    if (nearBottom) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    const text = draft.trim();
    if (!text) return;
    setSending(true);
    setSendError(null);
    const result = await sendMessage(room, text);
    setSending(false);
    if (result.ok && result.message) {
      setMessages((prev) => [...prev, result.message as CommunityMessage]);
      seqRef.current = Math.max(seqRef.current, result.message.seq);
      setDraft("");
    } else {
      setSendError(
        result.error === "too_soon"
          ? "Give it a second between messages."
          : result.error === "muted"
          ? "You've been muted from Community for now."
          : result.error === "room_read_only"
          ? "This room is read-only right now."
          : result.error === "message_too_long"
          ? "That's a bit long for one message."
          : "Something went wrong sending that — try again."
      );
    }
  }

  const [displayName, setDisplayNameState] = useState<string | null>(null);
  const [defaultName, setDefaultName] = useState("");
  const [nameEditing, setNameEditing] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);

  useEffect(() => {
    if (authReady && signedIn) {
      fetchProfile().then((profile) => {
        if (!profile) return;
        setDisplayNameState(profile.displayName);
        setDefaultName(profile.defaultName);
      });
    }
  }, [authReady, signedIn]);

  async function handleSaveName(e: React.FormEvent) {
    e.preventDefault();
    const result = await setDisplayName(nameDraft.trim());
    if (result.ok) {
      setDisplayNameState(nameDraft.trim() || null);
      setNameEditing(false);
      setNameError(null);
    } else {
      setNameError("That name didn't work — try something shorter, letters and numbers only.");
    }
  }

  async function handleReport(messageId: string) {
    await reportMessage(messageId);
  }

  return (
    <div className="card community-room">
      <div className="community-room__list" ref={listRef}>
        {messages.length === 0 ? (
          <div className="progress__empty">No messages yet — be the first to say something.</div>
        ) : (
          messages.map((m) => <MessageRow key={m.id} message={m} canReport={signedIn} onReport={handleReport} />)
        )}
      </div>

      {authReady && !signedIn && (
        <div className="gate community-room__gate">
          <div className="gate__title">Sign in to post</div>
          <p className="gate__text">Reading is open to everyone — posting needs a free account.</p>
          <button className="btn-primary" onClick={onOpenSignIn}>
            Sign in — it's free
          </button>
        </div>
      )}

      {authReady && signedIn && roomStatus === "read_only" && (
        <div className="community-room__notice">This room is read-only right now.</div>
      )}

      {authReady && signedIn && roomStatus === "open" && (
        <>
          <div className="community-room__identity">
            {nameEditing ? (
              <form className="community-room__name-form" onSubmit={handleSaveName}>
                <input
                  type="text"
                  className="admin__input"
                  value={nameDraft}
                  onChange={(e) => setNameDraft(e.target.value)}
                  placeholder={defaultName}
                  maxLength={24}
                  autoFocus
                />
                <button type="submit" className="modal__link">
                  Save
                </button>
                <button type="button" className="modal__link" onClick={() => setNameEditing(false)}>
                  Cancel
                </button>
              </form>
            ) : (
              <span>
                Posting as <strong>{displayName || defaultName}</strong>{" "}
                <button
                  type="button"
                  className="modal__link"
                  onClick={() => {
                    setNameDraft(displayName ?? "");
                    setNameEditing(true);
                  }}
                >
                  change
                </button>
              </span>
            )}
            {nameError && <div className="admin__error">{nameError}</div>}
          </div>

          <form className="community-room__compose" onSubmit={handleSend}>
            <input
              type="text"
              className="admin__input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Message #${room}`}
              maxLength={MAX_MESSAGE_LEN}
            />
            <button type="submit" className="admin__btn" disabled={sending || !draft.trim()}>
              Send
            </button>
          </form>
          {sendError && <div className="admin__error">{sendError}</div>}
        </>
      )}
    </div>
  );
}

export default function CommunityView() {
  const [auth, setAuth] = useState<AuthState>({ signedIn: false, email: null });
  const [authReady, setAuthReady] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    fetchMe().then((state) => {
      setAuth(state);
      setAuthReady(true);
    });
  }, []);

  // ---- Rooms: the fixed per-airline list, with live open/read-only/hidden
  // status layered on top. Polled far less often than messages -- an
  // admin flipping a room's status is a rare event, not something that
  // needs a 3-second turnaround. ----
  const [enabled, setEnabled] = useState(true);
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
  const [roomsReady, setRoomsReady] = useState(false);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  useEffect(() => {
    function loadRooms() {
      fetchRooms().then(({ enabled, rooms }) => {
        setEnabled(enabled);
        setRooms(rooms);
        setRoomsReady(true);
        setActiveRoom((prev) => {
          const visible = rooms.filter((r) => r.status !== "hidden");
          if (prev && visible.some((r) => r.room === prev)) return prev;
          return visible[0]?.room ?? null;
        });
      });
    }
    loadRooms();
    const t = setInterval(loadRooms, ROOMS_POLL_MS);
    return () => clearInterval(t);
  }, []);

  const visibleRooms = rooms.filter((r) => r.status !== "hidden");

  return (
    <div>
      <div className="card interview-intro">
        <div className="interview-intro__title">Community</div>
        <p className="interview-intro__text">
          Near-live chat rooms, one per airline — ask questions, swap notes, help each other out. Anyone can read;
          posting needs a free account. Keep it civil — messages can be reported, and moderators can act on them.
        </p>
      </div>

      {roomsReady && !enabled && (
        <div className="card">
          <div className="progress__empty">Community is temporarily unavailable — check back later.</div>
        </div>
      )}

      {roomsReady && enabled && (
        <>
          <div className="filters">
            {visibleRooms.map((r) => (
              <button
                key={r.room}
                onClick={() => setActiveRoom(r.room)}
                className={"filter-chip" + (activeRoom === r.room ? " filter-chip--active" : "")}
              >
                {r.room.toUpperCase()}
                {r.status === "read_only" && " (READ-ONLY)"}
              </button>
            ))}
          </div>

          {activeRoom && (
            <RoomChat
              key={activeRoom}
              room={activeRoom}
              signedIn={auth.signedIn}
              authReady={authReady}
              onOpenSignIn={() => setSignInOpen(true)}
            />
          )}
        </>
      )}

      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
    </div>
  );
}
