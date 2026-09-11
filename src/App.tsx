import { useState, useMemo, useEffect } from "react";
import type { Question } from "./types";
import { QUESTIONS, SYSTEMS, SYSTEM_COLORS, DEFAULT_SYSTEM_COLOR } from "./data";
import { shuffle } from "./utils/shuffle";
import { initAnalytics, trackStudied } from "./lib/analytics";
import { recordAnswer, getMissedQuestions, getSystemStats, getOverallStats, resetProgress } from "./lib/progress";
import { syncProgressOnSignIn, pushProgressEntries, clearServerProgress } from "./lib/progressSync";
import { fetchMe, signOut as authSignOut, type AuthState } from "./lib/auth";
import { hasUsedFreeQuiz, markFreeQuizUsed, FREE_QUIZ_COUNT } from "./lib/freeTier";
import { getBookmarkedIds, toggleBookmark } from "./lib/bookmarks";
import { EXAM_LENGTH_OPTIONS, EXAM_PASS_THRESHOLD, EXAM_SECONDS_PER_QUESTION } from "./lib/exam";
import AccountBar from "./components/AccountBar";
import SignInModal from "./components/SignInModal";
import AccountGate from "./components/AccountGate";
import ScoreBadge from "./components/ScoreBadge";
import SystemFilter from "./components/SystemFilter";
import SearchBox from "./components/SearchBox";
import QuestionCard from "./components/QuestionCard";
import ModeToggle, { type Mode } from "./components/ModeToggle";
import QuizSetup from "./components/QuizSetup";
import ResultsScreen from "./components/ResultsScreen";
import ExamSetup from "./components/ExamSetup";
import ExamQuestionCard from "./components/ExamQuestionCard";
import ExamResults from "./components/ExamResults";
import ProgressView from "./components/ProgressView";
import avbuddyLogo from "./assets/avbuddy-logo.png";
import "./styles/app.css";

function poolFor(
  system: string,
  ids: number[],
  missedOnly: boolean,
  missedIds: Set<number>,
  bookmarkedOnly: boolean,
  bookmarkedIds: Set<number>,
  searchQuery: string
): Question[] {
  let filtered =
    system === "All" ? ids : ids.filter((id) => QUESTIONS.find((q) => q.id === id)!.system === system);
  if (missedOnly) filtered = filtered.filter((id) => missedIds.has(id));
  if (bookmarkedOnly) filtered = filtered.filter((id) => bookmarkedIds.has(id));
  let questions = filtered.map((id) => QUESTIONS.find((q) => q.id === id)!);
  const query = searchQuery.trim().toLowerCase();
  if (query) {
    questions = questions.filter(
      (q) =>
        q.q.toLowerCase().includes(query) ||
        q.explain.toLowerCase().includes(query) ||
        q.options.some((opt) => opt.toLowerCase().includes(query))
    );
  }
  return questions;
}

export default function App() {
  // Quiz is the default landing mode: it's the only thing a signed-out
  // visitor can use without an account, so it's what they should land on
  // rather than immediately hitting the Study-mode sign-in gate.
  const [mode, setMode] = useState<Mode>("quiz");

  useEffect(() => {
    initAnalytics();
  }, []);

  // ---- Account state ----
  const [auth, setAuth] = useState<AuthState>({ signedIn: false, email: null });
  const [authReady, setAuthReady] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    fetchMe().then((state) => {
      setAuth(state);
      setAuthReady(true);
    });
  }, []);

  // One-time reconcile the moment we learn this visitor is signed in (fresh
  // sign-in, or a returning session found on page load): pull the account's
  // server-side progress, merge it with whatever this device already has
  // locally, and push the merged result back up. See progressSync.ts for
  // why this needs to be a merge rather than a one-directional copy -- a
  // device can have local (pre-sign-in / guest) progress of its own.
  useEffect(() => {
    if (authReady && auth.signedIn) {
      syncProgressOnSignIn().then(() => setProgressTick((t) => t + 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReady, auth.signedIn]);

  async function handleSignOut() {
    await authSignOut();
    setAuth({ signedIn: false, email: null });
  }

  // Anonymous visitors: one free 30-question quiz, drawn from every system.
  // Re-render tracked via a tick so the gate flips the instant it's used,
  // without needing a page reload.
  const [freeQuizUsedTick, setFreeQuizUsedTick] = useState(0);
  const freeQuizUsed = useMemo(() => hasUsedFreeQuiz(), [freeQuizUsedTick]);

  // Manual "revisit this" bookmarks -- independent of the auto-tracked missed
  // list. Same localStorage + tick pattern as the rest of this file's derived state.
  const [bookmarkTick, setBookmarkTick] = useState(0);
  const bookmarkedIds = useMemo(() => getBookmarkedIds(), [bookmarkTick]);

  function handleToggleBookmark(id: number) {
    toggleBookmark(id);
    setBookmarkTick((t) => t + 1);
  }

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
  const [studyBookmarkedOnly, setStudyBookmarkedOnly] = useState(false);
  const [studySearchQuery, setStudySearchQuery] = useState("");
  const [studyOrder, setStudyOrder] = useState<number[]>(() => shuffle(QUESTIONS.map((q) => q.id)));
  const [studyIndex, setStudyIndex] = useState(0);
  // Options tried on the current question and found wrong — study mode lets
  // you keep trying until you pick the right one (revealed only flips true
  // then), unlike quiz mode's single shot.
  const [studyWrongIndices, setStudyWrongIndices] = useState<Set<number>>(new Set());
  const [studyRevealed, setStudyRevealed] = useState(false);
  const [studyScore, setStudyScore] = useState({ correct: 0, seen: 0 });

  const studyPool = useMemo(
    () =>
      poolFor(
        studySystem,
        studyOrder,
        studyMissedOnly,
        missedIds,
        studyBookmarkedOnly,
        bookmarkedIds,
        studySearchQuery
      ),
    [studySystem, studyOrder, studyMissedOnly, missedIds, studyBookmarkedOnly, bookmarkedIds, studySearchQuery]
  );
  const studyCurrent = studyPool.length > 0 ? studyPool[studyIndex % studyPool.length] : undefined;
  const studyColor = studyCurrent
    ? SYSTEM_COLORS[studyCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  function studyPick(i: number) {
    if (studyRevealed || !studyCurrent || studyWrongIndices.has(i)) return;
    trackStudied();
    const correct = i === studyCurrent.answer;
    // Every attempt is recorded, including retries — if it took two tries to
    // land on the right answer, that question genuinely is a weak spot, and
    // this is what lets "missed questions" pick that up.
    const { key, stat } = recordAnswer(studyCurrent, correct);
    setProgressTick((t) => t + 1);
    // Study mode is only reachable signed-in, so this is always a real sync
    // push, not a wasted call for an anonymous visitor.
    if (auth.signedIn) void pushProgressEntries([{ key, stat }]);

    if (correct) {
      // Session score only credits a first-try correct — getting there after
      // a wrong guess still locks the card in, but shouldn't count as a win.
      const firstTry = studyWrongIndices.size === 0;
      setStudyRevealed(true);
      setStudyScore((s) => ({
        correct: s.correct + (firstTry ? 1 : 0),
        seen: s.seen + 1,
      }));
    } else {
      setStudyWrongIndices((prev) => new Set(prev).add(i));
    }
  }

  function studyNext() {
    setStudyWrongIndices(new Set());
    setStudyRevealed(false);
    setStudyIndex((i) => (i + 1) % Math.max(studyPool.length, 1));
  }

  function studyChangeSystem(s: string) {
    setStudySystem(s);
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
    setStudyRevealed(false);
  }

  function studyChangeMissedOnly(v: boolean) {
    setStudyMissedOnly(v);
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
    setStudyRevealed(false);
  }

  function studyChangeBookmarkedOnly(v: boolean) {
    setStudyBookmarkedOnly(v);
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
    setStudyRevealed(false);
  }

  function studyChangeSearch(q: string) {
    setStudySearchQuery(q);
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
    setStudyRevealed(false);
  }

  function studyReshuffle() {
    setStudyOrder(shuffle(QUESTIONS.map((q) => q.id)));
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
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
  // Quiz mode is still single-shot: the only "wrong" option is whatever was
  // picked, if it wasn't the answer.
  const quizWrongIndices = useMemo(() => {
    if (quizSelected !== null && quizCurrent && quizSelected !== quizCurrent.answer) {
      return new Set([quizSelected]);
    }
    return new Set<number>();
  }, [quizSelected, quizCurrent]);

  function startQuiz() {
    const drawn = shuffle(quizCandidatePool).slice(0, Math.min(quizCount, quizCandidatePool.length));
    setQuizQuestions(drawn);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizResults([]);
    setQuizPhase("active");
  }

  // Anonymous free quiz: always 30 questions drawn from the full pool,
  // ignoring whatever category/count the (hidden, for anon users) setup
  // controls are currently set to.
  function startFreeQuiz() {
    const drawn = shuffle(QUESTIONS).slice(0, Math.min(FREE_QUIZ_COUNT, QUESTIONS.length));
    setQuizQuestions(drawn);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizRevealed(false);
    setQuizResults([]);
    setQuizPhase("active");
    markFreeQuizUsed();
    setFreeQuizUsedTick((t) => t + 1);
  }

  // Signed-out visitors who still have their free quiz available shouldn't
  // have to click through an offer screen -- drop them straight into the
  // first question the moment we know they're signed out and unused.
  useEffect(() => {
    if (mode === "quiz" && quizPhase === "setup" && authReady && !auth.signedIn && !freeQuizUsed) {
      startFreeQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, quizPhase, authReady, auth.signedIn, freeQuizUsed]);

  function quizPick(i: number) {
    if (quizRevealed || !quizCurrent) return;
    trackStudied();
    const correct = i === quizCurrent.answer;
    const { key, stat } = recordAnswer(quizCurrent, correct);
    setProgressTick((t) => t + 1);
    // Quiz mode is reachable signed-out (the free quiz), so this only syncs
    // when there's actually an account behind it.
    if (auth.signedIn) void pushProgressEntries([{ key, stat }]);
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

  // ---- Exam mode state (fixed-length, single-shot, timed, pass/fail) ----
  type ExamPhase = "setup" | "active" | "results";
  const [examPhase, setExamPhase] = useState<ExamPhase>("setup");
  const [examSystem, setExamSystem] = useState<string>("All");
  const [examLength, setExamLength] = useState(EXAM_LENGTH_OPTIONS[0]);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examSelected, setExamSelected] = useState<number | null>(null);
  // One slot per question in the exam; null until answered, stays null if
  // time runs out before it's reached -- a skipped question counts as wrong,
  // same as a real test.
  const [examAnswers, setExamAnswers] = useState<(number | null)[]>([]);
  const [examSecondsRemaining, setExamSecondsRemaining] = useState(0);

  const examCandidatePool = useMemo(
    () => (examSystem === "All" ? QUESTIONS : QUESTIONS.filter((q) => q.system === examSystem)),
    [examSystem]
  );
  const examAvailableCount = examCandidatePool.length;
  const examCurrent = examQuestions[examIndex];
  const examColor = examCurrent
    ? SYSTEM_COLORS[examCurrent.system] ?? DEFAULT_SYSTEM_COLOR
    : DEFAULT_SYSTEM_COLOR;

  const examResultItems = useMemo(
    () =>
      examQuestions.map((q, i) => ({
        question: q,
        selected: examAnswers[i] ?? null,
        correct: examAnswers[i] === q.answer,
      })),
    [examQuestions, examAnswers]
  );

  function startExam() {
    const len = Math.min(examLength, examCandidatePool.length);
    const drawn = shuffle(examCandidatePool).slice(0, len);
    setExamQuestions(drawn);
    setExamIndex(0);
    setExamSelected(null);
    setExamAnswers(new Array(drawn.length).fill(null));
    setExamSecondsRemaining(drawn.length * EXAM_SECONDS_PER_QUESTION);
    setExamPhase("active");
  }

  function examPick(i: number) {
    if (examSelected !== null || !examCurrent) return;
    setExamSelected(i);
    setExamAnswers((prev) => {
      const next = [...prev];
      next[examIndex] = i;
      return next;
    });
  }

  function examFinish() {
    setExamPhase("results");
  }

  function examNext() {
    if (examIndex + 1 >= examQuestions.length) {
      examFinish();
      return;
    }
    setExamIndex((i) => i + 1);
    setExamSelected(null);
  }

  function examNewExam() {
    setExamPhase("setup");
  }

  // Countdown timer: ticks once a second while an exam is active, and
  // auto-finishes when it hits zero (unanswered questions were already
  // recorded as null, which scores as wrong).
  useEffect(() => {
    if (mode !== "exam" || examPhase !== "active") return;
    if (examSecondsRemaining <= 0) {
      examFinish();
      return;
    }
    const t = setTimeout(() => setExamSecondsRemaining((s) => s - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, examPhase, examSecondsRemaining]);

  // ---- Progress mode actions ----
  function goStudyMissed() {
    setMode("study");
    setStudySystem("All");
    setStudyMissedOnly(true);
    setStudyIndex(0);
    setStudyWrongIndices(new Set());
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
    // Otherwise the next sign-in (or the next answer's push) would just
    // pull the old server copy straight back into the freshly-cleared
    // local one.
    if (auth.signedIn) void clearServerProgress();
  }

  // ---- Keyboard shortcuts: 1-4 to pick an answer, Enter to advance ----
  // Ignored while typing in any input/textarea (search box, sign-in email
  // field, etc.) so shortcuts never steal a keystroke from actual typing.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      if (mode === "study" && auth.signedIn && studyCurrent) {
        if (!studyRevealed && ["1", "2", "3", "4"].includes(e.key)) {
          const idx = Number(e.key) - 1;
          if (idx < studyCurrent.options.length) studyPick(idx);
        } else if (studyRevealed && e.key === "Enter") {
          studyNext();
        }
        return;
      }

      if (mode === "quiz" && quizPhase === "active" && quizCurrent) {
        if (!quizRevealed && ["1", "2", "3", "4"].includes(e.key)) {
          const idx = Number(e.key) - 1;
          if (idx < quizCurrent.options.length) quizPick(idx);
        } else if (quizRevealed && e.key === "Enter") {
          quizNext();
        }
        return;
      }

      if (mode === "exam" && examPhase === "active" && examCurrent) {
        if (examSelected === null && ["1", "2", "3", "4"].includes(e.key)) {
          const idx = Number(e.key) - 1;
          if (idx < examCurrent.options.length) examPick(idx);
        } else if (examSelected !== null && e.key === "Enter") {
          examNext();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    mode,
    auth.signedIn,
    studyCurrent,
    studyRevealed,
    quizPhase,
    quizCurrent,
    quizRevealed,
    examPhase,
    examCurrent,
    examSelected,
  ]);

  return (
    <div className="app">
      <div className="container">
        <AccountBar
          auth={auth}
          authReady={authReady}
          onSignOut={handleSignOut}
          onOpenSignIn={() => setSignInOpen(true)}
        />
        {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}

        <div className="header">
          <div>
            <img src={avbuddyLogo} alt="AvBuddy" className="header__logo" />
            <div className="header__eyebrow">A320 SYSTEMS TRAINER</div>
            <div className="header__title">
              {mode === "study"
                ? "Study mode"
                : mode === "quiz"
                ? "Quiz mode"
                : mode === "exam"
                ? "Exam mode"
                : "Progress"}
            </div>
          </div>
          {mode === "study" && <ScoreBadge correct={studyScore.correct} seen={studyScore.seen} />}
        </div>

        <ModeToggle mode={mode} onChange={setMode} />

        {mode === "study" && authReady && !auth.signedIn && (
          <AccountGate
            message="Study mode tracks your weak areas with spaced repetition and syncs across your devices — sign in to unlock it."
            onSignIn={() => setSignInOpen(true)}
          />
        )}

        {mode === "study" && authReady && auth.signedIn && (
          <>
            <SearchBox value={studySearchQuery} onChange={studyChangeSearch} />
            <SystemFilter
              systems={SYSTEMS}
              active={studySystem}
              onChange={studyChangeSystem}
              missedOnly={studyMissedOnly}
              onMissedOnlyChange={studyChangeMissedOnly}
              missedCount={missedQuestions.length}
              bookmarkedOnly={studyBookmarkedOnly}
              onBookmarkedOnlyChange={studyChangeBookmarkedOnly}
              bookmarkedCount={bookmarkedIds.size}
            />
            {studyCurrent ? (
              <QuestionCard
                key={studyCurrent.id}
                question={studyCurrent}
                color={studyColor}
                wrongIndices={studyWrongIndices}
                revealed={studyRevealed}
                onPick={studyPick}
                onNext={studyNext}
                onReset={studyReshuffle}
                resetLabel="RESHUFFLE / RESET"
                progressLabel={`${studyPool.length} question${studyPool.length === 1 ? "" : "s"} in this set · question ${
                  (studyIndex % studyPool.length) + 1
                } of ${studyPool.length}`}
                bookmarked={bookmarkedIds.has(studyCurrent.id)}
                onToggleBookmark={() => handleToggleBookmark(studyCurrent.id)}
              />
            ) : (
              <div className="card">
                <div className="progress__empty">
                  {studySearchQuery.trim()
                    ? `No questions match "${studySearchQuery.trim()}" in this category.`
                    : studyBookmarkedOnly
                    ? "No bookmarked questions in this category yet."
                    : 'No missed questions in this category yet — nice work. Try a different category or turn off "missed only".'}
                </div>
              </div>
            )}
          </>
        )}

        {mode === "quiz" && quizPhase === "setup" && authReady && auth.signedIn && (
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

        {mode === "quiz" && quizPhase === "setup" && authReady && !auth.signedIn && freeQuizUsed && (
          <AccountGate
            message="You've used your free quiz. Sign in for unlimited quizzes, Study mode, and progress tracking."
            onSignIn={() => setSignInOpen(true)}
          />
        )}

        {mode === "quiz" && quizPhase === "active" && quizCurrent && (
          <QuestionCard
            key={quizCurrent.id}
            question={quizCurrent}
            color={quizColor}
            wrongIndices={quizWrongIndices}
            revealed={quizRevealed}
            onPick={quizPick}
            onNext={quizNext}
            onReset={quizNewQuiz}
            resetLabel="ABANDON QUIZ"
            progressLabel={`Question ${quizIndex + 1} of ${quizQuestions.length}`}
            bookmarked={bookmarkedIds.has(quizCurrent.id)}
            onToggleBookmark={() => handleToggleBookmark(quizCurrent.id)}
          />
        )}

        {mode === "quiz" && quizPhase === "results" && (
          <ResultsScreen
            results={quizResults}
            onRetry={quizRetrySameSet}
            onNewQuiz={quizNewQuiz}
            signedIn={auth.signedIn}
            onSignIn={() => setSignInOpen(true)}
          />
        )}

        {mode === "exam" && authReady && !auth.signedIn && (
          <AccountGate
            message="Exam mode is a full-access feature — sign in to unlock timed, pass/fail practice exams."
            onSignIn={() => setSignInOpen(true)}
          />
        )}

        {mode === "exam" && authReady && auth.signedIn && examPhase === "setup" && (
          <ExamSetup
            systems={SYSTEMS}
            system={examSystem}
            onSystemChange={(s) => {
              setExamSystem(s);
              const count = s === "All" ? QUESTIONS.length : QUESTIONS.filter((q) => q.system === s).length;
              setExamLength((l) => Math.min(l, Math.max(count, 1)));
            }}
            availableCount={examAvailableCount}
            length={Math.min(examLength, Math.max(examAvailableCount, 1))}
            onLengthChange={setExamLength}
            onStart={startExam}
          />
        )}

        {mode === "exam" && authReady && auth.signedIn && examPhase === "active" && examCurrent && (
          <ExamQuestionCard
            key={examCurrent.id}
            question={examCurrent}
            color={examColor}
            index={examIndex}
            total={examQuestions.length}
            selected={examSelected}
            onPick={examPick}
            onNext={examNext}
            remainingSeconds={examSecondsRemaining}
            bookmarked={bookmarkedIds.has(examCurrent.id)}
            onToggleBookmark={() => handleToggleBookmark(examCurrent.id)}
          />
        )}

        {mode === "exam" && authReady && auth.signedIn && examPhase === "results" && (
          <ExamResults
            items={examResultItems}
            passThresholdPct={Math.round(EXAM_PASS_THRESHOLD * 100)}
            onNewExam={examNewExam}
          />
        )}

        {mode === "progress" && authReady && !auth.signedIn && (
          <AccountGate
            message="Progress tracking syncs your weak areas across devices — sign in to see your stats."
            onSignIn={() => setSignInOpen(true)}
          />
        )}

        {mode === "progress" && authReady && auth.signedIn && (
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
