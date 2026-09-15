// Client-side auth helpers -- talks to the api/auth endpoint. The actual
// session lives in an httpOnly cookie the browser manages automatically;
// this module never touches a token directly except to forward the one
// from the emailed magic-link URL to a verify call.
//
// All four operations live behind one Vercel Function (api/auth.ts,
// consolidated from four separate files to stay under Vercel Hobby's
// 12-function cap) -- GET is always "who am I", POST's `op` field picks
// logout / request-link / verify.

export interface AuthState {
  signedIn: boolean;
  email: string | null;
}

export async function fetchMe(): Promise<AuthState> {
  try {
    const res = await fetch("/api/auth", { credentials: "include" });
    if (!res.ok) return { signedIn: false, email: null };
    const data = await res.json();
    return data.signedIn ? { signedIn: true, email: data.email } : { signedIn: false, email: null };
  } catch {
    return { signedIn: false, email: null };
  }
}

export async function requestMagicLink(email: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ op: "request-link", email }),
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
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ op: "verify", token }),
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
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ op: "logout" }),
    });
  } catch {
    // Best-effort -- the cookie clears client-side via the response even if
    // this throws after the request went out.
  }
}
