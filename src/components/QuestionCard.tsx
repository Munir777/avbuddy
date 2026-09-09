import type { Question, SystemColor } from "../types";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  color: SystemColor;
  selected: number | null;
  revealed: boolean;
  onPick: (index: number) => void;
  onNext: () => void;
  onReset: () => void;
  resetLabel?: string;
  progressLabel: string;
}

export default function QuestionCard({
  question,
  color,
  selected,
  revealed,
  onPick,
  onNext,
  onReset,
  resetLabel = "RESHUFFLE / RESET",
  progressLabel,
}: QuestionCardProps) {
  return (
    <>
      <div className="card">
        <div
          className="card__badge"
          style={{ color: color.fg, background: color.bg }}
        >
          {question.system.toUpperCase()}
        </div>
        {question.needsReview && (
          <div
            className="card__badge"
            style={{ color: "#F0A99E", background: "#3A1410", marginLeft: 8 }}
          >
            ⚠ NEEDS REVIEW
          </div>
        )}

        <div className="card__question">{question.q}</div>

        <div className="options">
          {question.options.map((opt, i) => (
            <AnswerOption
              key={i}
              text={opt}
              index={i}
              isAnswer={i === question.answer}
              isSelected={i === selected}
              revealed={revealed}
              onPick={onPick}
            />
          ))}
        </div>

        {revealed && question.explain && <div className="explain">{question.explain}</div>}

        <div className="card__actions">
          <button className="btn-secondary" onClick={onReset}>
            {resetLabel}
          </button>
          <button className="btn-primary" disabled={!revealed} onClick={onNext}>
            NEXT →
          </button>
        </div>
      </div>

      <div className="footer-note">{progressLabel}</div>
    </>
  );
}
