import { EXAM_LENGTH_OPTIONS, EXAM_PASS_THRESHOLD, EXAM_SECONDS_PER_QUESTION, formatClock } from "../lib/exam";

interface ExamSetupProps {
  systems: string[];
  system: string;
  onSystemChange: (system: string) => void;
  availableCount: number;
  length: number;
  onLengthChange: (length: number) => void;
  onStart: () => void;
}

export default function ExamSetup({
  systems,
  system,
  onSystemChange,
  availableCount,
  length,
  onLengthChange,
  onStart,
}: ExamSetupProps) {
  const effectiveLength = Math.min(length, Math.max(availableCount, 1));
  const timeBudget = effectiveLength * EXAM_SECONDS_PER_QUESTION;

  return (
    <div className="card">
      <p className="gate__text" style={{ margin: "0 0 20px", textAlign: "left", maxWidth: "none" }}>
        Fixed-length, single-shot, timed — no retries and no answer feedback until it's over, like the real
        thing. Score {Math.round(EXAM_PASS_THRESHOLD * 100)}% or higher to pass.
      </p>

      <div className="setup__label">CATEGORY</div>
      <div className="filters" style={{ marginBottom: 20 }}>
        {systems.map((s) => (
          <button
            key={s}
            onClick={() => onSystemChange(s)}
            className={"filter-chip" + (s === system ? " filter-chip--active" : "")}
          >
            {s.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="setup__label">LENGTH</div>
      <div className="filters" style={{ marginBottom: 20 }}>
        {EXAM_LENGTH_OPTIONS.filter((c) => c <= availableCount).map((c) => (
          <button
            key={c}
            onClick={() => onLengthChange(c)}
            className={"filter-chip" + (c === length ? " filter-chip--active" : "")}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => onLengthChange(availableCount)}
          className={
            "filter-chip" +
            (length === availableCount ? " filter-chip--active" : "") +
            (availableCount === 0 ? " filter-chip--disabled" : "")
          }
        >
          ALL ({availableCount})
        </button>
      </div>

      {availableCount === 0 ? (
        <div className="progress__empty">No questions available in this category.</div>
      ) : (
        <>
          <div className="footer-note" style={{ marginBottom: 16 }}>
            {effectiveLength} questions · {formatClock(timeBudget)} time limit
          </div>
          <button className="btn-primary" style={{ width: "100%", padding: "12px" }} onClick={onStart}>
            START EXAM →
          </button>
        </>
      )}
    </div>
  );
}
