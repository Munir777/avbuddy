export type Mode = "study" | "quiz" | "exam" | "progress";

interface ModeToggleProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
}

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="mode-toggle">
      <button
        className={"mode-toggle__btn" + (mode === "study" ? " mode-toggle__btn--active" : "")}
        onClick={() => onChange("study")}
      >
        STUDY
      </button>
      <button
        className={"mode-toggle__btn" + (mode === "quiz" ? " mode-toggle__btn--active" : "")}
        onClick={() => onChange("quiz")}
      >
        QUIZ
      </button>
      <button
        className={"mode-toggle__btn" + (mode === "exam" ? " mode-toggle__btn--active" : "")}
        onClick={() => onChange("exam")}
      >
        EXAM
      </button>
      <button
        className={"mode-toggle__btn" + (mode === "progress" ? " mode-toggle__btn--active" : "")}
        onClick={() => onChange("progress")}
      >
        PROGRESS
      </button>
    </div>
  );
}
