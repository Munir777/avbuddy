import { useEffect, useState } from "react";
import { verifyMagicLink } from "../lib/auth";
import "../admin/admin.css";

type Phase = "verifying" | "success" | "error";

export default function AuthCallback() {
  const [phase, setPhase] = useState<Phase>("verifying");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      setPhase("error");
      return;
    }
    verifyMagicLink(token).then((result) => {
      if (result.ok) {
        setPhase("success");
        // Send them back to the app itself -- the callback route has no
        // other purpose once the session cookie is set.
        window.setTimeout(() => {
          window.location.href = "/";
        }, 900);
      } else {
        setPhase("error");
      }
    });
  }, []);

  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__login" style={{ textAlign: "center" }}>
          <div className="admin__eyebrow">AVBUDDY</div>
          {phase === "verifying" && <div className="admin__loading">Signing you in…</div>}
          {phase === "success" && <div className="modal__text">Signed in — taking you back to the app…</div>}
          {phase === "error" && (
            <>
              <div className="admin__error">
                That link is invalid or has expired. Sign-in links only work once and expire after 15
                minutes.
              </div>
              <a className="admin__btn" style={{ display: "inline-block", textDecoration: "none" }} href="/">
                Back to AvBuddy
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
