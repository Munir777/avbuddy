import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

// Each top-level route is its own chunk, so e.g. /admin never downloads the
// study app, and the study app never downloads the admin panel. The
// question bank itself is split further, per subject -- see src/data/bank.ts.
const App = lazy(() => import("./App"));
const AdminPanel = lazy(() => import("./admin/AdminPanel"));
const AuthCallback = lazy(() => import("./components/AuthCallback"));
const LibraryApp = lazy(() => import("./library/LibraryApp"));
const LicensingApp = lazy(() => import("./licensing/LicensingApp"));

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
