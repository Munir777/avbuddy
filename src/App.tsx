import { useState, useMemo } from "react";
import type { Question } from "./types";
import { QUESTIONS, SYSTEMS, SYSTEM_COLORS, DEFAULT_SYSTEM_COLOR } from "./data";
import { shuffle } from "./utils/shuffle";
import ScoreBadge from "./components/ScoreBadge";
import SystemFilter from "./components/SystemFilter";
import QuestionCard from "./components/QuestionCard";
import ModeToggle from "./components/ModeToggle";
import QuizSetup from "./components/QuizSetup";
import ResultsScreen from "./components/ResultsScreen";
import "./styles/app.css";

function poolFor(system: string, ids: number[]): Question[] {
  const filtered =
    system === "All" ? ids : ids.filter((id) => QUESTIONS.find((q) => q.id === id)!.system === system);
  return filtered.map((id) => QUESTIONS.find((q) => q.id === id)!);
}

export default function App() {
  const [mode, setMode] = useState<"study" | "quiz">("study");

  // ---- Study mode state (infinite loop, running score) ----
  const [studySystem, setStudySystem] = useState<string>("All");
  const [studyOrder, setStudyOrder] = useState<number[]>(() => shuffle(QUESTIONS.map((q) => q.id)));
  const [studyIndex, setStudyIndex] = useState(0);
  const [studySelected, setStudySelected] = useState<number | null>(null);
  const [studyRevealed, setStudyRevealed] = useState(false);
  const [studyScore, setStudyScore] = useState({ correct: 0, seen: 0 });

  const studyPool = useMemo(() => poolFor(studySystem, studyOrder), [studySystem, studyOrder]);
  const studyCurrent = studyPool[studyIndex % studyPool.length];
  const studyColor = studyCurrent
    ? SYSTEM_COLORS[studyCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  function studyPick(i: number) {
    if (studyRevealed || !studyCurrent) return;
    setStudySelected(i);
    setStudyRevealed(true);
    setStudyScore((s) => ({
      correct: s.correct + (i === studyCurrent.answer ? 1 : 0),
      seen: s.seen + 1,
    }));
  }

  function studyNext() {
    setStudySelected(null);
    setStudyRevealed(false);
    setStudyIndex((i) => (i + 1) % studyPool.length);
  }

  function studyChangeSystem(s: string) {
    setStudySystem(s);
    setStudyIndex(0);
    setStudySelected(null);
    setStudyRevealed(false);
  }

  function studyReshuffle() {
    setStudyOrder(shuffle(QUESTIONS.map((q) => q.id)));
    setStudyIndex(0);
    setStudySelected(null);
    setStudyRevealed(false);
    setStudyScore({ correct: 0, seen: 0 });
  }

  // ---- Quiz mode state (bounded set, results screen) ----
  type QuizPhase = "setup" | "active" | "results";
  const [quizPhase, setQuizPhase] = useState<QuizPhase>("setup");
  const [quizSystem, setQuizSystem] = useState<string>("All");
  const [quizCount, setQuizCount] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [quizResults, setQuizResults] = useState<{ questionId: number; correct: boolean }[]>([]);

  const quizAvailableCount = useMemo(
    () => (quizSystem === "All" ? QUESTIONS.length : QUESTIONS.filter((q) => q.system === quizSystem).length),
    [quizSystem]
  );

  const quizCurrent = quizQuestions[quizIndex];
  const quizColor = quizCurrent
    ? SYSTEM_COLORS[quizCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  function startQuiz() {
    const candidatePool =
      quizSystem === "All" ? QUESTIONS : QUESTIONS.filter((q) => q.system === quizSystem);
    const drawn = shuffle(candidatePool).slice(0, Math.min(quizCount, candidatePool.length));
    setQuizQuestions(drawn);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizResults([]);
    setQuizPhase("active");
  }

  function quizPick(i: number) {
    if (quizRevealed || !quizCurrent) return;
    setQuizSelected(i);
    setQuizRevealed(true);
    setQuizResults((r) => [...r, { questionId: quizCurrent.id, correct: i === quizCurrent.answer }]);
  }

  function quizNext() {
    if (quizIndex + 1 >= quizQuestions.length) {
      setQuizPhase("results");
      return;
    }
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizIndex((i) => i + 1);
  }

  function quizRetrySameSet() {
    setQuizQuestions((qs) => shuffle(qs));
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizResults([]);
    setQuizPhase("active");
  }

  function quizNewQuiz() {
    setQuizPhase("setup");
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div>
            <div className="header__eyebrow">A320 SYSTEMS TRAINER</div>
            <div className="header__title">{mode === "study" ? "Study mode" : "Quiz mode"}</div>
          </div>
          {mode === "study" && <ScoreBadge correct={studyScore.correct} seen={studyScore.seen} />}
        </div>

        <ModeToggle mode={mode} onChange={setMode} />

        {mode === "study" && studyCurrent && (
          <>
            <SystemFilter systems={SYSTEMS} active={studySystem} onChange={studyChangeSystem} />
            <QuestionCard
              question={studyCurrent}
              color={studyColor}
              selected={studySelected}
              revealed={studyRevealed}
              onPick={studyPick}
              onNext={studyNext}
              onReset={studyReshuffle}
              resetLabel="RESHUFFLE / RESET"
              progressLabel={`${studyPool.length} question${studyPool.length === 1 ? "" : "s"} in this set · question ${
                (studyIndex % studyPool.length) + 1
              } of ${studyPool.length}`}
            />
          </>
        )}

        {mode === "quiz" && quizPhase === "setup" && (
          <QuizSetup
            systems={SYSTEMS}
            system={quizSystem}
            onSystemChange={(s) => {
              setQuizSystem(s);
              setQuizCount(10);
            }}
            availableCount={quizAvailableCount}
            count={Math.min(quizCount, quizAvailableCount)}
            onCountChange={setQuizCount}
            onStart={startQuiz}
          />
        )}

        {mode === "quiz" && quizPhase === "active" && quizCurrent && (
          <QuestionCard
            question={quizCurrent}
            color={quizColor}
            selected={quizSelected}
            revealed={quizRevealed}
            onPick={quizPick}
            onNext={quizNext}
            onReset={quizNewQuiz}
            resetLabel="ABANDON QUIZ"
            progressLabel={`Question ${quizIndex + 1} of ${quizQuestions.length}`}
          />
        )}

        {mode === "quiz" && quizPhase === "results" && (
          <ResultsScreen results={quizResults} onRetry={quizRetrySameSet} onNewQuiz={quizNewQuiz} />
        )}
      </div>
    </div>
  );
}
