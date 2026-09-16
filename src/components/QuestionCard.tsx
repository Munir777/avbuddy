import type { Question, SystemColor } from "../types";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  color: SystemColor;
  wrongIndices: Set<number>;
  revealed: boolean;
  onPick: (index: number) => void;
  onNext: () => void;
  onReset: () => void;
  resetLabel?: string;
  progressLabel: string;
  bookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export default function QuestionCard({
  question,
  color,
  wrongIndices,
  revealed,
  onPick,
  onNext,
  onReset,
  resetLabel = "RESHUFFLE / RESET",
  progressLabel,
  bookmarked = false,
  onToggleBookmark,
}: QuestionCardProps) {
  return (
    <>
      <div className="card">
        <div className="card__top">
          <div className="card__badges">
            <div
              className="card__badge"
              style={{ color: color.fg, background: color.bg }}
            >
              {question.system.toUpperCase()}
            </div>
            {question.needsReview && (
              <div
                className="card__badge"
                style={{ color: "#F0A99E", background: "#3A1410" }}
              >
                ⚠ NEEDS REVIEW
              </div>
            )}
          </div>
          {onToggleBookmark && (
            <button
              type="button"
              className={"card__bookmark" + (bookmarked ? " card__bookmark--active" : "")}
              onClick={onToggleBookmark}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this question"}
              title={bookmarked ? "Remove bookmark" : "Bookmark this question"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18.5 L6 22 L7 15 L2 10 L9 9 Z" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        <div className="card__question">{question.q}</div>

        {question.diagram && (
          <div className="card__diagram">
            <img src={question.diagram} alt="" />
          </div>
        )}

        <div className="options">
          {question.options.map((opt, i) => (
            <AnswerOption
              key={i}
              text={opt}
              imageSrc={question.optionImages?.[i]}
              index={i}
              isAnswer={i === question.answer}
              isWrong={wrongIndices.has(i)}
              revealed={revealed}
              onPick={onPick}
            />
          ))}
        </div>

        {revealed && question.explain && (
          <div className="explain">
            {question.explain}
            {question.reference && <div className="reference">Ref: {question.reference}</div>}
          </div>
        )}

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
