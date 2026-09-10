// Client-side auth helpers -- talks to the api/auth/* endpoints. The actual
// session lives in an httpOnly cookie the browser manages automatically;
// this module never touches a token directly except to forward the one
// from the emailed magic-link URL to /api/auth/verify.

export interface AuthState {
  signedIn: boolean;
  email: string | null;
}

export async function fetchMe(): Promise<AuthState> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    if (!res.ok) return { signedIn: false, email: null };
    const data = await res.json();
    return data.signedIn ? { signedIn: true, email: data.email } : { signedIn: false, email: null };
  } catch {
    return { signedIn: false, email: null };
  }
}

export async function requestMagicLink(email: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/auth/request-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "request_failed" };
    return { ok: true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

export async function verifyMagicLink(token: string): Promise<{ ok: boolean; email?: string; error?: string }> {
  try {
    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ token }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "verify_failed" };
    return { ok: true, email: data.email };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

export async function signOut(): Promise<void> {
  try {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
  } catch {
    // Best-effort -- the cookie clears client-side via the response even if
    // this throws after the request went out.
  }
}
