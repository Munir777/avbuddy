import type { Question } from "../types";

interface ExamResultItem {
  question: Question;
  selected: number | null;
  correct: boolean;
}

interface ExamResultsProps {
  items: ExamResultItem[];
  passThresholdPct: number;
  onNewExam: () => void;
}

export default function ExamResults({ items, passThresholdPct, onNewExam }: ExamResultsProps) {
  const total = items.length;
  const correctCount = items.filter((i) => i.correct).length;
  const pct = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = pct >= passThresholdPct;
  const missed = items.filter((i) => !i.correct);

  return (
    <div className="card results">
      <div className={"exam-verdict" + (passed ? " exam-verdict--pass" : " exam-verdict--fail")}>
        {passed ? "PASS" : "FAIL"}
      </div>
      <div className="results__pct">{pct}%</div>
      <div className="results__score">
        {correctCount} / {total} correct · pass mark {passThresholdPct}%
      </div>

      <div className="card__actions" style={{ marginTop: 24, justifyContent: "center" }}>
        <button className="btn-primary" onClick={onNewExam}>
          NEW EXAM
        </button>
      </div>

      {missed.length > 0 && (
        <div className="exam-review">
          <div className="setup__label" style={{ textAlign: "left", marginTop: 28, marginBottom: 10 }}>
            REVIEW MISSED ({missed.length})
          </div>
          {missed.map(({ question, selected }) => {
            // A question whose options are pictures (optionImages set) has
            // nothing useful in options[i] itself beyond alt text -- show
            // the actual image in the review instead of that placeholder.
            const renderChoice = (i: number | null) => {
              if (i === null) return "(skipped — time ran out)";
              const img = question.optionImages?.[i];
              return img ? (
                <img src={img} alt={question.options[i]} className="exam-review__image" />
              ) : (
                question.options[i]
              );
            };
            return (
              <div key={question.id} className="exam-review__item">
                <div className="exam-review__q">{question.q}</div>
                {question.diagram && (
                  <div className="card__diagram">
                    <img src={question.diagram} alt="" />
                  </div>
                )}
                <div className="exam-review__a exam-review__a--wrong">
                  Your answer: {renderChoice(selected)}
                </div>
                <div className="exam-review__a exam-review__a--correct">
                  Correct: {renderChoice(question.answer)}
                </div>
                {question.explain && (
                  <div className="exam-review__explain">
                    {question.explain}
                    {question.reference && <div className="reference">Ref: {question.reference}</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
