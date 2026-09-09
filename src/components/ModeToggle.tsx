interface ModeToggleProps {
  mode: "study" | "quiz";
  onChange: (mode: "study" | "quiz") => void;
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
    </div>
  );
}
