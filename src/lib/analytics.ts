// Minimal, privacy-light usage tracking: no PII, just an anonymous
// per-browser id (localStorage) and a per-tab session id (sessionStorage),
// used to answer three questions — how many people use the site, how
// long, and whether they actually engage with quiz/study mode or just browse.

const VISITOR_KEY = "avbuddy_visitor_id";
const SESSION_KEY = "avbuddy_session_id";
const HEARTBEAT_MS = 20_000;

type TrackEvent = "start" | "heartbeat" | "studied";

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = randomId();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return randomId();
  }
}

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = randomId();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return randomId();
  }
}

function send(event: TrackEvent) {
  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorId, sessionId, event }),
    keepalive: true,
  }).catch(() => {
    // Analytics is best-effort; never let a network hiccup affect the app.
  });
}

let initialized = false;
let studiedSent = false;

export function initAnalytics(): void {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  send("start");

  const timer = window.setInterval(() => {
    if (document.visibilityState === "visible") {
      send("heartbeat");
    }
  }, HEARTBEAT_MS);

  window.addEventListener("beforeunload", () => {
    window.clearInterval(timer);
  });
}

export function trackStudied(): void {
  if (studiedSent) return;
  studiedSent = true;
  send("studied");
}
