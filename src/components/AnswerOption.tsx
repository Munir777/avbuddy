interface AnswerOptionProps {
  text: string;
  // Set for a question whose options are pictures (a wind-barb symbol, a
  // chart glyph) rather than words -- `text` is still used as the image's
  // alt text and for search, but rendered instead of shown.
  imageSrc?: string;
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
  imageSrc,
  index,
  isAnswer,
  isWrong,
  revealed,
  onPick,
}: AnswerOptionProps) {
  let className = "option";
  const showCorrect = revealed && isAnswer;
  const showIncorrect = isWrong;
  if (showCorrect) className += " option--correct";
  else if (showIncorrect) className += " option--incorrect";

  const letter = String.fromCharCode(65 + index);

  return (
    <button className={className} disabled={revealed || isWrong} onClick={() => onPick(index)}>
      <span className="option__letter">{letter}</span>
      {showCorrect && (
        <svg className="option__icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 12.5 L9.5 18 L20 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {showIncorrect && (
        <svg className="option__icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 5 L19 19 M19 5 L5 19" strokeLinecap="round" />
        </svg>
      )}
      {imageSrc ? (
        <span className="option__image-wrap">
          <img src={imageSrc} alt={text} className="option__image" />
        </span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
