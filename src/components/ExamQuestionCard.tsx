import type { Question, SystemColor } from "../types";
import { formatClock } from "../lib/exam";

interface ExamQuestionCardProps {
  question: Question;
  color: SystemColor;
  index: number;
  total: number;
  selected: number | null;
  onPick: (index: number) => void;
  onNext: () => void;
  remainingSeconds: number;
  bookmarked: boolean;
  onToggleBookmark: () => void;
}

export default function ExamQuestionCard({
  question,
  color,
  index,
  total,
  selected,
  onPick,
  onNext,
  remainingSeconds,
  bookmarked,
  onToggleBookmark,
}: ExamQuestionCardProps) {
  const low = remainingSeconds <= 60;

  return (
    <>
      <div className="exam-bar">
        <div className="exam-bar__progress">
          QUESTION {index + 1} / {total}
        </div>
        <div className={"exam-bar__timer" + (low ? " exam-bar__timer--low" : "")}>
          {formatClock(remainingSeconds)}
        </div>
      </div>

      <div className="card">
        <div className="card__top">
          <div className="card__badges">
            <div className="card__badge" style={{ color: color.fg, background: color.bg }}>
              {question.system.toUpperCase()}
            </div>
          </div>
          <button
            type="button"
            className={"card__bookmark" + (bookmarked ? " card__bookmark--active" : "")}
            onClick={onToggleBookmark}
            aria-label={bookmarked ? "Remove flag" : "Flag for review"}
            title={bookmarked ? "Remove flag" : "Flag for review"}
          >
            {bookmarked ? "★" : "☆"}
          </button>
        </div>

        <div className="card__question">{question.q}</div>

        <div className="options">
          {question.options.map((opt, i) => (
            <button
              key={i}
              className={"option" + (selected === i ? " option--selected" : "")}
              disabled={selected !== null}
              onClick={() => onPick(i)}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="card__actions" style={{ justifyContent: "flex-end" }}>
          <button className="btn-primary" disabled={selected === null} onClick={onNext}>
            {index + 1 >= total ? "FINISH →" : "NEXT →"}
          </button>
        </div>
      </div>
    </>
  );
}
