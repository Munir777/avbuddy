interface QuizSetupProps {
  systems: string[];
  system: string;
  onSystemChange: (system: string) => void;
  availableCount: number;
  count: number;
  onCountChange: (count: number) => void;
  onStart: () => void;
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
}: QuizSetupProps) {
  return (
    <div className="card">
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
          className={"filter-chip" + (count === availableCount ? " filter-chip--active" : "")}
        >
          ALL ({availableCount})
        </button>
      </div>

      <button className="btn-primary" style={{ width: "100%", padding: "12px" }} onClick={onStart}>
        START QUIZ →
      </button>
    </div>
  );
}
