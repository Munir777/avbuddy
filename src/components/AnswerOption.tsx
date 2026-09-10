interface AnswerOptionProps {
  text: string;
  index: number;
  isAnswer: boolean;
  // True once this specific option has been picked and found wrong — in
  // study mode that can happen on a retry before the right one is found; in
  // quiz mode it's just the single wrong pick, shown at the same time as reveal.
  isWrong: boolean;
  revealed: boolean;
  onPick: (index: number) => void;
}

export default function AnswerOption({
  text,
  index,
  isAnswer,
  isWrong,
  revealed,
  onPick,
}: AnswerOptionProps) {
  let className = "option";
  if (revealed && isAnswer) className += " option--correct";
  else if (isWrong) className += " option--incorrect";

  return (
    <button className={className} disabled={revealed || isWrong} onClick={() => onPick(index)}>
      {text}
    </button>
  );
}
