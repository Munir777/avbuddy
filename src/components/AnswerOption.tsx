interface AnswerOptionProps {
  text: string;
  index: number;
  isAnswer: boolean;
  isSelected: boolean;
  revealed: boolean;
  onPick: (index: number) => void;
}

export default function AnswerOption({
  text,
  index,
  isAnswer,
  isSelected,
  revealed,
  onPick,
}: AnswerOptionProps) {
  let className = "option";
  if (revealed && isAnswer) className += " option--correct";
  else if (revealed && isSelected) className += " option--incorrect";

  return (
    <button className={className} disabled={revealed} onClick={() => onPick(index)}>
      {text}
    </button>
  );
}
