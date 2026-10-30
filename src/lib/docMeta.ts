import { useEffect } from "react";

// The site's one real address. The apex (avbuddy.app) redirects here, so
// every canonical tag, sitemap entry and share URL must use www -- pointing
// search engines at the redirecting apex got pages skipped as redirects.
export const SITE_ORIGIN = "https://www.avbuddy.app";

export function canonicalFor(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return SITE_ORIGIN + (clean === "/" ? "/" : clean);
}

// Filled synchronously during server-side prerendering (scripts/prerender.mjs)
// so each pre-built page gets its own <title> / description in the HTML.
export const ssrMeta: { current: { title: string; description: string } | null } = { current: null };

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Per-page title, description and canonical URL for the public Library and
// Licensing pages -- previously every page inherited index.html's canonical
// of the homepage, which told Google they were all duplicates of "/".
export function useDocMeta(title: string, description: string) {
  if (import.meta.env.SSR) ssrMeta.current = { title, description };
  useEffect(() => {
    document.title = title;
    upsert('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", description);
    const canonical = canonicalFor(window.location.pathname);
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", canonical);
    upsert('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    }, "content", canonical);
  }, [title, description]);
}
