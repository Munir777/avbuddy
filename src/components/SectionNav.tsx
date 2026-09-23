export type Section = "technical" | "interview" | "shared" | "licensing" | "community";

interface SectionNavProps {
  section: Section;
  onChange: (section: Section) => void;
}

const SECTIONS: { key: Section; label: string }[] = [
  { key: "technical", label: "STUDY FOR YOUR TECHNICAL" },
  { key: "interview", label: "INTERVIEW PREPARATION" },
  { key: "shared", label: "SHARED MATERIAL" },
  { key: "licensing", label: "LICENSING HUB" },
  { key: "community", label: "COMMUNITY" },
];

export default function SectionNav({ section, onChange }: SectionNavProps) {
  return (
    <div className="section-nav">
      {SECTIONS.map((s) => (
        <button
          key={s.key}
          type="button"
          className={"section-nav__btn" + (section === s.key ? " section-nav__btn--active" : "")}
          onClick={() => onChange(s.key)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
