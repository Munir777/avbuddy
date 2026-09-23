import type { SubjectMeta } from "../types";

interface SubjectSidebarProps {
  subjects: string[];
  subjectMeta: Record<string, SubjectMeta>;
  active: string;
  onChange: (subject: string) => void;
  countBySubject: Record<string, number>;
}

export default function SubjectSidebar({
  subjects,
  subjectMeta,
  active,
  onChange,
  countBySubject,
}: SubjectSidebarProps) {
  return (
    <aside className="subject-sidebar">
      {subjects.map((subject) => {
        const meta = subjectMeta[subject];
        const isActive = subject === active;
        return (
          <button
            key={subject}
            type="button"
            className={"subject-sidebar__item" + (isActive ? " subject-sidebar__item--active" : "")}
            style={isActive ? { borderColor: meta.accent, color: meta.accent } : undefined}
            onClick={() => onChange(subject)}
            title={meta.blurb}
          >
            <span className="subject-sidebar__label">{meta.label}</span>
            <span className="subject-sidebar__count">{countBySubject[subject] ?? 0}</span>
          </button>
        );
      })}
    </aside>
  );
}
