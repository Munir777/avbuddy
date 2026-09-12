import type { SubjectMeta } from "../types";

interface SubjectToggleProps {
  subjects: string[];
  subjectMeta: Record<string, SubjectMeta>;
  active: string;
  onChange: (subject: string) => void;
  countBySubject: Record<string, number>;
}

export default function SubjectToggle({
  subjects,
  subjectMeta,
  active,
  onChange,
  countBySubject,
}: SubjectToggleProps) {
  return (
    <div className="subject-toggle">
      {subjects.map((subject) => {
        const meta = subjectMeta[subject];
        const isActive = subject === active;
        return (
          <button
            key={subject}
            type="button"
            className={"subject-toggle__card" + (isActive ? " subject-toggle__card--active" : "")}
            style={isActive ? { borderColor: meta.accent } : undefined}
            onClick={() => onChange(subject)}
          >
            <div className="subject-toggle__label" style={isActive ? { color: meta.accent } : undefined}>
              {meta.label}
            </div>
            <div className="subject-toggle__blurb">{meta.blurb}</div>
            <div className="subject-toggle__count">{countBySubject[subject] ?? 0} questions</div>
          </button>
        );
      })}
    </div>
  );
}
