import type { SubjectMeta } from "../types";

interface WelcomePickerProps {
  subjects: string[];
  subjectMeta: Record<string, SubjectMeta>;
  countBySubject: Record<string, number>;
  totalQuestions: number;
  onPick: (subject: string) => void;
}

// First thing a brand-new (signed-out) visitor sees: what AvBuddy is, and
// one question -- which exam are you studying for? Picking one drops them
// straight into a free quiz in THAT subject, instead of a random A320
// question they may not care about.
export default function WelcomePicker({
  subjects,
  subjectMeta,
  countBySubject,
  totalQuestions,
  onPick,
}: WelcomePickerProps) {
  const rounded = Math.floor(totalQuestions / 100) * 100;
  return (
    <div className="welcome">
      <h1 className="welcome__title">Free practice questions for pilot exams</h1>
      <p className="welcome__text">
        {rounded.toLocaleString()}+ questions with explanations — aircraft systems, ATPL theory, FAA and
        Transport Canada written exams. Start a 30-question quiz now, no sign-up.
      </p>
      <div className="welcome__ask">What are you studying for?</div>
      <div className="welcome__grid">
        {subjects.map((subject) => {
          const meta = subjectMeta[subject];
          return (
            <button
              key={subject}
              type="button"
              className="welcome__option"
              style={{ borderLeftColor: meta.accent }}
              onClick={() => onPick(subject)}
            >
              <span className="welcome__option-label">{meta.label}</span>
              <span className="welcome__option-count">{(countBySubject[subject] ?? 0).toLocaleString()} questions</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
