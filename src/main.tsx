import React from "react";
import ReactDOM from "react-dom/client";
// Global theme (colour tokens, fonts, body background). Loaded here, not
// just in App, so every route -- /admin and /auth/callback included -- gets
// it now that routes are separate lazy chunks.
import "./styles/app.css";

// After a deploy, a tab that was already open still references the OLD
// chunk filenames, which no longer exist on the server -- the next lazy
// import 404s and React renders nothing (a blank white page). Vite fires
// `vite:preloadError` for exactly this; reload once to pick up the new
// build. The sessionStorage guard stops a reload loop if the failure is
// something else (e.g. offline).
const RELOAD_KEY = "avbuddy_chunk_reload_at";
function reloadForNewBuild(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) ?? 0);
    if (Date.now() - last < 30_000) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    // No sessionStorage -- still worth one reload attempt.
  }
  window.location.reload();
  return true;
}
window.addEventListener("vite:preloadError", (event) => {
  if (reloadForNewBuild()) event.preventDefault();
});

// Each top-level route is its own chunk, so e.g. /admin never downloads the
// study app, and the study app never downloads the admin panel. The
// question bank itself is split further, per subject -- see src/data/bank.ts.
//
// The route's chunk is loaded BEFORE React renders anything (rather than
// React.lazy + Suspense), because the public Library/Licensing pages arrive
// pre-rendered in the HTML (scripts/prerender.mjs) -- a Suspense fallback
// would wipe that content while the chunk downloads.
const path = window.location.pathname.replace(/\/+$/, "");
type RouteModule = Promise<{ default: React.ComponentType }>;
function loadRoute(): RouteModule {
  if (path === "/admin") return import("./admin/AdminPanel");
  if (path === "/auth/callback") return import("./components/AuthCallback");
  if (path === "/library" || path.startsWith("/library/")) return import("./library/LibraryApp");
  if (path === "/licensing" || path.startsWith("/licensing/")) return import("./licensing/LicensingApp");
  return import("./App");
}

loadRoute()
  .then(({ default: Page }) => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <Page />
      </React.StrictMode>
    );
  })
  .catch((err) => {
    // Most likely a stale tab after a deploy (see above) -- reload once.
    if (!reloadForNewBuild()) throw err;
  });
