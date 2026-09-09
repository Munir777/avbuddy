interface QuizSetupProps {
  systems: string[];
  system: string;
  onSystemChange: (system: string) => void;
  availableCount: number;
  count: number;
  onCountChange: (count: number) => void;
  onStart: () => void;
  missedOnly: boolean;
  onMissedOnlyChange: (missedOnly: boolean) => void;
  missedCount: number;
}

const COUNT_OPTIONS = [10, 20, 30];

export default function QuizSetup({
  systems,
  system,
  onSystemChange,
  availableCount,
  count,
  onCountChange,
  onStart,
  missedOnly,
  onMissedOnlyChange,
  missedCount,
}: QuizSetupProps) {
  return (
    <div className="card">
      {missedCount > 0 && (
        <>
          <div className="setup__label">MODE</div>
          <div className="filters" style={{ marginBottom: 20 }}>
            <button
              onClick={() => onMissedOnlyChange(false)}
              className={"filter-chip" + (!missedOnly ? " filter-chip--active" : "")}
            >
              ALL QUESTIONS
            </button>
            <button
              onClick={() => onMissedOnlyChange(true)}
              className={"filter-chip filter-chip--missed" + (missedOnly ? " filter-chip--active" : "")}
            >
              ⚠ MISSED ONLY ({missedCount})
            </button>
          </div>
        </>
      )}

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

      <div className="setup__label">NUMBER OF QUESTIONS</div>
      <div className="filters" style={{ marginBottom: 24 }}>
        {COUNT_OPTIONS.filter((c) => c <= availableCount).map((c) => (
          <button
            key={c}
            onClick={() => onCountChange(c)}
            className={"filter-chip" + (c === count ? " filter-chip--active" : "")}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => onCountChange(availableCount)}
          className={"filter-chip" + (count === availableCount ? " filter-chip--active" : "") + (availableCount === 0 ? " filter-chip--disabled" : "")}
        >
          ALL ({availableCount})
        </button>
      </div>

      {availableCount === 0 ? (
        <div className="progress__empty">No missed questions in this category yet.</div>
      ) : (
        <button className="btn-primary" style={{ width: "100%", padding: "12px" }} onClick={onStart}>
          START QUIZ →
        </button>
      )}
    </div>
  );
}
