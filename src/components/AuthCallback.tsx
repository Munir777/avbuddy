import { useEffect, useState } from "react";
import { verifyMagicLink, resendMagicLink } from "../lib/auth";
import "../admin/admin.css";

type Phase = "verifying" | "success" | "expired" | "used" | "invalid" | "resending" | "resent" | "resend_error";

export default function AuthCallback() {
  const [phase, setPhase] = useState<Phase>("verifying");
  const [maskedEmail, setMaskedEmail] = useState<string | null>(null);
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) {
      setPhase("invalid");
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
      } else if (result.error === "expired") {
        setPhase("expired");
      } else if (result.error === "used") {
        setPhase("used");
      } else {
        setPhase("invalid");
      }
    });
  }, [token]);

  async function handleResend() {
    if (!token) return;
    setPhase("resending");
    const result = await resendMagicLink(token);
    if (result.ok) {
      setMaskedEmail(result.maskedEmail ?? null);
      setPhase("resent");
    } else if (result.error === "used") {
      setPhase("used");
    } else {
      setPhase("resend_error");
    }
  }

  const backLink = (
    <a className="admin__btn" style={{ display: "inline-block", textDecoration: "none" }} href="/">
      Back to AvBuddy
    </a>
  );

  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__login" style={{ textAlign: "center" }}>
          <div className="admin__eyebrow">AVBUDDY</div>
          {phase === "verifying" && <div className="admin__loading">Signing you in…</div>}
          {phase === "success" && <div className="modal__text">Signed in — taking you back to the app…</div>}

          {(phase === "expired" || phase === "resending") && (
            <>
              <div className="modal__text">
                This sign-in link has expired. No problem — we can send a fresh one to the same email.
              </div>
              <button className="admin__btn" type="button" onClick={handleResend} disabled={phase === "resending"}>
                {phase === "resending" ? "Sending…" : "Send me a new link"}
              </button>
            </>
          )}

          {phase === "resent" && (
            <>
              <div className="modal__text">
                New link sent{maskedEmail ? ` to ${maskedEmail}` : ""}. It's valid for 24 hours. Emails can take a
                few minutes — check spam or promotions if it isn't there.
              </div>
              {backLink}
            </>
          )}

          {phase === "used" && (
            <>
              <div className="modal__text">
                This link has already been used. If you're not signed in on this device, request a new link from
                the Sign in button.
              </div>
              {backLink}
            </>
          )}

          {(phase === "invalid" || phase === "resend_error") && (
            <>
              <div className="admin__error">
                {phase === "invalid"
                  ? "That sign-in link isn't valid. Request a new one from the Sign in button."
                  : "Couldn't send a new link — try again from the Sign in button."}
              </div>
              {backLink}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
