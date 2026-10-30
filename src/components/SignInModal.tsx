import { useState } from "react";
import { requestMagicLink, verifySignInCode } from "../lib/auth";
import "../admin/admin.css";

interface SignInModalProps {
  onClose: () => void;
}

type Phase = "idle" | "sending" | "sent" | "error";

export default function SignInModal({ onClose }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [codeState, setCodeState] = useState<"idle" | "checking" | "error">("idle");
  const [codeError, setCodeError] = useState<string | null>(null);

  async function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (codeState === "checking") return;
    setCodeState("checking");
    setCodeError(null);
    const result = await verifySignInCode(email, code);
    if (result.ok) {
      // Simplest way to pick the new session up everywhere (account bar,
      // progress sync, gated features) -- the free quiz and other local
      // state already survive a reload.
      window.location.reload();
      return;
    }
    setCodeState("error");
    setCodeError(
      result.error === "too_many_attempts"
        ? "Too many wrong codes — use the link in the email instead, or try again tomorrow."
        : "That code didn't work. Check the latest email and try again."
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phase === "sending") return;
    setPhase("sending");
    setError(null);
    const result = await requestMagicLink(email);
    if (result.ok) {
      setPhase("sent");
    } else {
      setPhase("error");
      setError(result.error === "invalid_email" ? "That doesn't look like a valid email." : "Something went wrong — try again.");
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {phase === "sent" ? (
          <>
            <div className="modal__title">Check your email</div>
            <p className="modal__text">
              We emailed a 6-digit code and a sign-in link to <strong>{email}</strong>. Type the code here, or click
              the link. Both are valid for 24 hours. Emails can take a few minutes — check spam or promotions if it
              isn&apos;t there.
            </p>
            <form onSubmit={handleCodeSubmit} className="modal__form">
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                className="admin__input"
                placeholder="6-digit code"
                maxLength={7}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                autoFocus
              />
              <button className="admin__btn" type="submit" disabled={code.length !== 6 || codeState === "checking"}>
                {codeState === "checking" ? "Checking…" : "Sign in"}
              </button>
              {codeError && <div className="admin__error">{codeError}</div>}
            </form>
            <button className="modal__link" onClick={() => setPhase("idle")}>
              Use a different email
            </button>
          </>
        ) : (
          <>
            <div className="modal__title">Sign in</div>
            <p className="modal__text">
              No password needed — we'll email you a link. Free accounts get full access to Study, Quiz,
              and Progress tracking, synced across your devices.
            </p>
            <form onSubmit={handleSubmit} className="modal__form">
              <input
                type="email"
                className="admin__input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
              />
              <button className="admin__btn" type="submit" disabled={phase === "sending"}>
                {phase === "sending" ? "Sending…" : "Send sign-in link"}
              </button>
              {error && <div className="admin__error">{error}</div>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
