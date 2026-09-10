import { FREE_QUIZ_COUNT } from "../lib/freeTier";

interface FreeQuizOfferProps {
  onStart: () => void;
  onSignIn: () => void;
}

export default function FreeQuizOffer({ onStart, onSignIn }: FreeQuizOfferProps) {
  return (
    <div className="card">
      <div className="gate">
        <div className="gate__title">Try AvBuddy free</div>
        <p className="gate__text">
          Take one {FREE_QUIZ_COUNT}-question quiz pulled at random from all systems — no account needed.
          Sign in any time for unlimited quizzes, Study mode, and progress tracking that syncs across your
          devices.
        </p>
        <button className="btn-primary" onClick={onStart}>
          START FREE {FREE_QUIZ_COUNT}-QUESTION QUIZ →
        </button>
        <button className="modal__link" style={{ marginTop: 12 }} onClick={onSignIn}>
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
}
