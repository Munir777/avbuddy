interface SystemFilterProps {
  systems: string[];
  active: string;
  onChange: (system: string) => void;
  missedOnly?: boolean;
  onMissedOnlyChange?: (missedOnly: boolean) => void;
  missedCount?: number;
  bookmarkedOnly?: boolean;
  onBookmarkedOnlyChange?: (bookmarkedOnly: boolean) => void;
  bookmarkedCount?: number;
}

export default function SystemFilter({
  systems,
  active,
  onChange,
  missedOnly,
  onMissedOnlyChange,
  missedCount,
  bookmarkedOnly,
  onBookmarkedOnlyChange,
  bookmarkedCount,
}: SystemFilterProps) {
  const showMissedToggle = onMissedOnlyChange && !!missedCount && missedCount > 0;
  const showBookmarkedToggle = onBookmarkedOnlyChange && !!bookmarkedCount && bookmarkedCount > 0;

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
      {showBookmarkedToggle && (
        <button
          onClick={() => onBookmarkedOnlyChange!(!bookmarkedOnly)}
          className={"filter-chip filter-chip--bookmarked" + (bookmarkedOnly ? " filter-chip--active" : "")}
        >
          ★ BOOKMARKED ({bookmarkedCount})
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
