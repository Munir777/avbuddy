// Anonymous (signed-out) visitors get exactly one 30-question random quiz
// before everything else requires an account. This flag is the only thing
// that gates it -- deliberately simple (a determined visitor could clear
// localStorage or use a private window to get another free quiz), same
// trade-off as the rest of this app's localStorage-based state. It's a
// soft gate meant to get people to sign up, not a security boundary.

const FREE_QUIZ_KEY = "avbuddy_free_quiz_used";
export const FREE_QUIZ_COUNT = 30;

export function hasUsedFreeQuiz(): boolean {
  try {
    return localStorage.getItem(FREE_QUIZ_KEY) === "1";
  } catch {
    return false;
  }
}

export function markFreeQuizUsed(): void {
  try {
    localStorage.setItem(FREE_QUIZ_KEY, "1");
  } catch {
    // Best-effort -- worst case a blocked/full localStorage means the free
    // quiz can be retried, which is the safe direction to fail in.
  }
}
