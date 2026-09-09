interface ScoreBadgeProps {
  correct: number;
  seen: number;
}

export default function ScoreBadge({ correct, seen }: ScoreBadgeProps) {
  return <div className="header__score">SCORE {correct}/{seen}</div>;
}
