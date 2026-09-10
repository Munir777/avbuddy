import { useState } from "react";
import { requestMagicLink } from "../lib/auth";
import "../admin/admin.css";

interface SignInModalProps {
  onClose: () => void;
}

type Phase = "idle" | "sending" | "sent" | "error";

export default function SignInModal({ onClose }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);

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
              We sent a sign-in link to <strong>{email}</strong>. It expires in 15 minutes and works once.
            </p>
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
