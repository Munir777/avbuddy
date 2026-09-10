import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminPanel from "./admin/AdminPanel";
import AuthCallback from "./components/AuthCallback";

const path = window.location.pathname.replace(/\/+$/, "");
const isAdminRoute = path === "/admin";
const isAuthCallbackRoute = path === "/auth/callback";

function Root() {
  if (isAdminRoute) return <AdminPanel />;
  if (isAuthCallbackRoute) return <AuthCallback />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
