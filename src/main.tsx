import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminPanel from "./admin/AdminPanel";
import AuthCallback from "./components/AuthCallback";
import LibraryApp from "./library/LibraryApp";
import LicensingApp from "./licensing/LicensingApp";

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
    <Root />
  </React.StrictMode>
);
