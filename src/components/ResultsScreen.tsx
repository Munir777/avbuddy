interface QuizResult {
  questionId: number;
  correct: boolean;
}

interface ResultsScreenProps {
  results: QuizResult[];
  onRetry: () => void;
  onNewQuiz: () => void;
}

export default function ResultsScreen({ results, onRetry, onNewQuiz }: ResultsScreenProps) {
  const correct = results.filter((r) => r.correct).length;
  const total = results.length;
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);

  let verdict = "Keep at it.";
  if (pct === 100) verdict = "Perfect score.";
  else if (pct >= 90) verdict = "Excellent.";
  else if (pct >= 75) verdict = "Solid.";
  else if (pct >= 50) verdict = "Getting there.";

  return (
    <div className="card results">
      <div className="results__pct">{pct}%</div>
      <div className="results__verdict">{verdict}</div>
      <div className="results__score">
        {correct} / {total} correct
      </div>

      <div className="card__actions" style={{ marginTop: 24 }}>
        <button className="btn-secondary" onClick={onNewQuiz}>
          NEW QUIZ
        </button>
        <button className="btn-primary" onClick={onRetry}>
          RETRY SAME SET
        </button>
      </div>
    </div>
  );
}
