import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

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

// Belt and braces for the route chunks themselves: if the import fails,
// reload (once) instead of leaving a blank page.
function lazyRoute<T extends React.ComponentType>(load: () => Promise<{ default: T }>) {
  return lazy(() =>
    load().catch((err) => {
      if (reloadForNewBuild()) return new Promise<{ default: T }>(() => {});
      throw err;
    })
  );
}

// Each top-level route is its own chunk, so e.g. /admin never downloads the
// study app, and the study app never downloads the admin panel. The
// question bank itself is split further, per subject -- see src/data/bank.ts.
const App = lazyRoute(() => import("./App"));
const AdminPanel = lazyRoute(() => import("./admin/AdminPanel"));
const AuthCallback = lazyRoute(() => import("./components/AuthCallback"));
const LibraryApp = lazyRoute(() => import("./library/LibraryApp"));
const LicensingApp = lazyRoute(() => import("./licensing/LicensingApp"));

const path = window.location.pathname.replace(/\/+$/, "");
const isAdminRoute = path === "/admin";
const isAuthCallbackRoute = path === "/auth/callback";
const isLibraryRoute = path === "/library" || path.startsWith("/library/");
const isLicensingRoute = path === "/licensing" || path.startsWith("/licensing/");

function Root() {
  if (isAdminRoute) return <AdminPanel />;
  if (isAuthCallbackRoute) return <AuthCallback />;
  if (isLibraryRoute) return <LibraryApp />;
  if (isLicensingRoute) return <LicensingApp />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Root />
    </Suspense>
  </React.StrictMode>
);
