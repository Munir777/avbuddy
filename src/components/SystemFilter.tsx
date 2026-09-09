interface SystemFilterProps {
  systems: string[];
  active: string;
  onChange: (system: string) => void;
}

export default function SystemFilter({ systems, active, onChange }: SystemFilterProps) {
  return (
    <div className="filters">
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
