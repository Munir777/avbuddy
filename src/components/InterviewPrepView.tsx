import { useMemo, useState } from "react";
import { INTERVIEW_CATEGORIES, INTERVIEW_QUESTIONS } from "../data/interviewPrep";

export default function InterviewPrepView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      activeCategory === "All"
        ? INTERVIEW_QUESTIONS
        : INTERVIEW_QUESTIONS.filter((q) => q.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <div className="filters">
        <button
          onClick={() => setActiveCategory("All")}
          className={"filter-chip" + (activeCategory === "All" ? " filter-chip--active" : "")}
        >
          ALL ({INTERVIEW_QUESTIONS.length})
        </button>
        {INTERVIEW_CATEGORIES.map((cat) => {
          const count = INTERVIEW_QUESTIONS.filter((q) => q.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={"filter-chip" + (activeCategory === cat ? " filter-chip--active" : "")}
            >
              {cat.toUpperCase()} ({count})
            </button>
          );
        })}
      </div>

      <div className="interview-list">
        {visible.map((q) => {
          const isOpen = openId === q.id;
          return (
            <div key={q.id} className="card interview-item">
              <button
                type="button"
                className="interview-item__question"
                onClick={() => setOpenId(isOpen ? null : q.id)}
              >
                <span className="shared-entry__heading">
                  <span className="interview-item__text">{q.question}</span>
                  {!isOpen && <span className="shared-entry__summary">{q.teaser}</span>}
                </span>
                <span className="interview-item__chevron">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="interview-item__answer">
                  <p>{q.howToAnswer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
