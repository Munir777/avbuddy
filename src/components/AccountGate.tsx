interface AccountGateProps {
  title?: string;
  message: string;
  onSignIn: () => void;
}

export default function AccountGate({ title = "Sign in required", message, onSignIn }: AccountGateProps) {
  return (
    <div className="card">
      <div className="gate">
        <div className="gate__title">{title}</div>
        <p className="gate__text">{message}</p>
        <button className="btn-primary" onClick={onSignIn}>
          Sign in — it's free
        </button>
      </div>
    </div>
  );
}
