import { useState, useMemo, useEffect } from "react";
import type { Question } from "./types";
import { QUESTIONS, SYSTEMS, SYSTEM_COLORS, DEFAULT_SYSTEM_COLOR } from "./data";
import { shuffle } from "./utils/shuffle";
import { initAnalytics, trackStudied } from "./lib/analytics";
import { recordAnswer, getMissedQuestions, getSystemStats, getOverallStats, resetProgress } from "./lib/progress";
import ScoreBadge from "./components/ScoreBadge";
import SystemFilter from "./components/SystemFilter";
import QuestionCard from "./components/QuestionCard";
import ModeToggle, { type Mode } from "./components/ModeToggle";
import QuizSetup from "./components/QuizSetup";
import ResultsScreen from "./components/ResultsScreen";
import ProgressView from "./components/ProgressView";
import "./styles/app.css";

function poolFor(system: string, ids: number[], missedOnly: boolean, missedIds: Set<number>): Question[] {
  let filtered =
    system === "All" ? ids : ids.filter((id) => QUESTIONS.find((q) => q.id === id)!.system === system);
  if (missedOnly) filtered = filtered.filter((id) => missedIds.has(id));
  return filtered.map((id) => QUESTIONS.find((q) => q.id === id)!);
}

export default function App() {
  const [mode, setMode] = useState<Mode>("study");

  useEffect(() => {
    initAnalytics();
  }, []);

  // Bumped on every recorded answer / progress reset so the missed-question
  // set and weak-areas stats (both derived from localStorage) recompute.
  const [progressTick, setProgressTick] = useState(0);

  const missedQuestions = useMemo(() => getMissedQuestions(QUESTIONS), [progressTick]);
  const missedIds = useMemo(() => new Set(missedQuestions.map((q) => q.id)), [missedQuestions]);
  const systemStats = useMemo(() => getSystemStats(QUESTIONS), [progressTick]);
  const overallStats = useMemo(() => getOverallStats(QUESTIONS), [progressTick]);

  // ---- Study mode state (infinite loop, running score) ----
  const [studySystem, setStudySystem] = useState<string>("All");
  const [studyMissedOnly, setStudyMissedOnly] = useState(false);
  const [studyOrder, setStudyOrder] = useState<number[]>(() => shuffle(QUESTIONS.map((q) => q.id)));
  const [studyIndex, setStudyIndex] = useState(0);
  const [studySelected, setStudySelected] = useState<number | null>(null);
  const [studyRevealed, setStudyRevealed] = useState(false);
  const [studyScore, setStudyScore] = useState({ correct: 0, seen: 0 });

  const studyPool = useMemo(
    () => poolFor(studySystem, studyOrder, studyMissedOnly, missedIds),
    [studySystem, studyOrder, studyMissedOnly, missedIds]
  );
  const studyCurrent = studyPool.length > 0 ? studyPool[studyIndex % studyPool.length] : undefined;
  const studyColor = studyCurrent
    ? SYSTEM_COLORS[studyCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  function studyPick(i: number) {
    if (studyRevealed || !studyCurrent) return;
    trackStudied();
    const correct = i === studyCurrent.answer;
    recordAnswer(studyCurrent, correct);
    setProgressTick((t) => t + 1);
    setStudySelected(i);
    setStudyRevealed(true);
    setStudyScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      seen: s.seen + 1,
    }));
  }

  function studyNext() {
    setStudySelected(null);
    setStudyRevealed(false);
    setStudyIndex((i) => (i + 1) % Math.max(studyPool.length, 1));
  }

  function studyChangeSystem(s: string) {
    setStudySystem(s);
    setStudyIndex(0);
    setStudySelected(null);
    setStudyRevealed(false);
  }

  function studyChangeMissedOnly(v: boolean) {
    setStudyMissedOnly(v);
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
  const [quizMissedOnly, setQuizMissedOnly] = useState(false);
  const [quizCount, setQuizCount] = useState(10);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [quizResults, setQuizResults] = useState<{ questionId: number; correct: boolean }[]>([]);

  const quizCandidatePool = useMemo(() => {
    const bySystem = quizSystem === "All" ? QUESTIONS : QUESTIONS.filter((q) => q.system === quizSystem);
    return quizMissedOnly ? bySystem.filter((q) => missedIds.has(q.id)) : bySystem;
  }, [quizSystem, quizMissedOnly, missedIds]);

  const quizAvailableCount = quizCandidatePool.length;

  const quizCurrent = quizQuestions[quizIndex];
  const quizColor = quizCurrent
    ? SYSTEM_COLORS[quizCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  function startQuiz() {
    const drawn = shuffle(quizCandidatePool).slice(0, Math.min(quizCount, quizCandidatePool.length));
    setQuizQuestions(drawn);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizResults([]);
    setQuizPhase("active");
  }

  function quizPick(i: number) {
    if (quizRevealed || !quizCurrent) return;
    trackStudied();
    const correct = i === quizCurrent.answer;
    recordAnswer(quizCurrent, correct);
    setProgressTick((t) => t + 1);
    setQuizSelected(i);
    setQuizRevealed(true);
    setQuizResults((r) => [...r, { questionId: quizCurrent.id, correct }]);
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

  function quizChangeMissedOnly(v: boolean) {
    setQuizMissedOnly(v);
    setQuizCount(10);
  }

  // ---- Progress mode actions ----
  function goStudyMissed() {
    setMode("study");
    setStudySystem("All");
    setStudyMissedOnly(true);
    setStudyIndex(0);
    setStudySelected(null);
    setStudyRevealed(false);
  }

  function goQuizMissed() {
    setMode("quiz");
    setQuizSystem("All");
    setQuizMissedOnly(true);
    setQuizCount((c) => Math.min(c, Math.max(missedQuestions.length, 1)));
    setQuizPhase("setup");
  }

  function handleResetProgress() {
    resetProgress();
    setProgressTick((t) => t + 1);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div>
            <div className="header__eyebrow">A320 SYSTEMS TRAINER</div>
            <div className="header__title">
              {mode === "study" ? "Study mode" : mode === "quiz" ? "Quiz mode" : "Progress"}
            </div>
          </div>
          {mode === "study" && <ScoreBadge correct={studyScore.correct} seen={studyScore.seen} />}
        </div>

        <ModeToggle mode={mode} onChange={setMode} />

        {mode === "study" && (
          <>
            <SystemFilter
              systems={SYSTEMS}
              active={studySystem}
              onChange={studyChangeSystem}
              missedOnly={studyMissedOnly}
              onMissedOnlyChange={studyChangeMissedOnly}
              missedCount={missedQuestions.length}
            />
            {studyCurrent ? (
              <QuestionCard
                key={studyCurrent.id}
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
            ) : (
              <div className="card">
                <div className="progress__empty">
                  No missed questions in this category yet — nice work. Try a different category or turn
                  off "missed only".
                </div>
              </div>
            )}
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
            count={Math.min(quizCount, Math.max(quizAvailableCount, 1))}
            onCountChange={setQuizCount}
            onStart={startQuiz}
            missedOnly={quizMissedOnly}
            onMissedOnlyChange={quizChangeMissedOnly}
            missedCount={missedQuestions.length}
          />
        )}

        {mode === "quiz" && quizPhase === "active" && quizCurrent && (
          <QuestionCard
            key={quizCurrent.id}
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

        {mode === "progress" && (
          <ProgressView
            overall={overallStats}
            systemStats={systemStats}
            systemColors={SYSTEM_COLORS}
            defaultColor={DEFAULT_SYSTEM_COLOR}
            onStudyMissed={goStudyMissed}
            onQuizMissed={goQuizMissed}
            onReset={handleResetProgress}
          />
        )}
      </div>
    </div>
  );
}
