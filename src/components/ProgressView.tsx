import type { SystemColor } from "../types";
import { useState } from "react";
import type { SystemStat, OverallStats } from "../lib/progress";

interface ProgressViewProps {
  overall: OverallStats;
  systemStats: SystemStat[];
  systemColors: Record<string, SystemColor>;
  defaultColor: SystemColor;
  onStudyMissed: () => void;
  onQuizMissed: () => void;
  onReset: () => void;
}

export default function ProgressView({
  overall,
  systemStats,
  systemColors,
  defaultColor,
  onStudyMissed,
  onQuizMissed,
  onReset,
}: ProgressViewProps) {
  const [confirmingReset, setConfirmingReset] = useState(false);
  const overallAccuracy =
    overall.correctAttempts + overall.wrongAttempts === 0
      ? 0
      : Math.round((overall.correctAttempts / (overall.correctAttempts + overall.wrongAttempts)) * 100);

  function handleResetClick() {
    if (confirmingReset) {
      onReset();
      setConfirmingReset(false);
    } else {
      setConfirmingReset(true);
      window.setTimeout(() => setConfirmingReset(false), 3000);
    }
  }

  if (overall.questionsAttempted === 0) {
    return (
      <div className="card">
        <div className="progress__empty">
          Answer a few questions in Study or Quiz mode and your weak areas will show up here.
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="progress__grid">
        <div className="progress__tile">
          <div className="progress__tile-value">{overallAccuracy}%</div>
          <div className="progress__tile-label">Overall accuracy</div>
        </div>
        <div className="progress__tile">
          <div className="progress__tile-value">{overall.questionsAttempted}</div>
          <div className="progress__tile-label">Questions attempted</div>
        </div>
        <div className="progress__tile">
          <div className="progress__tile-value">{overall.missedCount}</div>
          <div className="progress__tile-label">Currently missed</div>
        </div>
      </div>

      {overall.missedCount > 0 && (
        <div className="card__actions" style={{ marginBottom: 24 }}>
          <button className="btn-secondary" onClick={onStudyMissed}>
            STUDY MISSED ({overall.missedCount}) →
          </button>
          <button className="btn-primary" onClick={onQuizMissed}>
            QUIZ MISSED ({overall.missedCount}) →
          </button>
        </div>
      )}

      <div className="setup__label">WEAK AREAS (weakest first)</div>
      <div className="progress__systems">
        {systemStats.map((s) => {
          const color = systemColors[s.system] ?? defaultColor;
          return (
            <div key={s.system} className="progress__row">
              <div className="progress__row-top">
                <span className="card__badge" style={{ color: color.fg, background: color.bg }}>
                  {s.system.toUpperCase()}
                </span>
                <span className="progress__row-count">
                  {s.correct}/{s.total} · {s.accuracy}%
                </span>
              </div>
              <div className="progress__bar">
                <div
                  className="progress__bar-fill"
                  style={{ width: `${s.accuracy}%`, background: color.fg }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button className="progress__reset" onClick={handleResetClick}>
        {confirmingReset ? "CLICK AGAIN TO CONFIRM" : "Reset progress"}
      </button>
    </div>
  );
}
