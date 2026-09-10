import type { AuthState } from "../lib/auth";

interface AccountBarProps {
  auth: AuthState;
  authReady: boolean;
  onSignOut: () => void;
  onOpenSignIn: () => void;
}

export default function AccountBar({ auth, authReady, onSignOut, onOpenSignIn }: AccountBarProps) {
  if (!authReady) {
    // Avoid a flash of "Sign in" before we know the real state.
    return <div className="account-bar" />;
  }

  return (
    <div className="account-bar">
      {auth.signedIn ? (
        <>
          <span className="account-bar__email">{auth.email}</span>
          <button className="account-bar__link" onClick={onSignOut}>
            Sign out
          </button>
        </>
      ) : (
        <button className="account-bar__link account-bar__link--accent" onClick={onOpenSignIn}>
          Sign in
        </button>
      )}
    </div>
  );
}
