interface SystemFilterProps {
  systems: string[];
  active: string;
  onChange: (system: string) => void;
  missedOnly?: boolean;
  onMissedOnlyChange?: (missedOnly: boolean) => void;
  missedCount?: number;
}

export default function SystemFilter({
  systems,
  active,
  onChange,
  missedOnly,
  onMissedOnlyChange,
  missedCount,
}: SystemFilterProps) {
  const showMissedToggle = onMissedOnlyChange && !!missedCount && missedCount > 0;

  return (
    <div className="filters">
      {showMissedToggle && (
        <button
          onClick={() => onMissedOnlyChange!(!missedOnly)}
          className={"filter-chip filter-chip--missed" + (missedOnly ? " filter-chip--active" : "")}
        >
          ⚠ MISSED ONLY ({missedCount})
        </button>
      )}
      {systems.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={"filter-chip" + (s === active ? " filter-chip--active" : "")}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
