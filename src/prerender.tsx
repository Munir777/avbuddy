// Server-side entry used only at build time (scripts/prerender.mjs): renders
// the public Library and Licensing pages to static HTML so search engines
// (and first-time visitors) get real content without running JavaScript.
import { renderToString } from "react-dom/server";
import LibraryApp from "./library/LibraryApp";
import LicensingApp from "./licensing/LicensingApp";
import { ssrMeta } from "./lib/docMeta";
import { getLibrarySubjects } from "./lib/library";
import { LICENSING_AUTHORITIES, LICENSE_LEVELS } from "./data/licensing";

export function prerenderRoutes(): string[] {
  const routes = ["/library", "/licensing"];
  for (const subject of getLibrarySubjects()) {
    routes.push(`/library/${subject.slug}`);
    for (const category of subject.categories) routes.push(`/library/${subject.slug}/${category.slug}`);
  }
  for (const authority of LICENSING_AUTHORITIES) {
    routes.push(`/licensing/${authority.key}`);
    for (const level of LICENSE_LEVELS) routes.push(`/licensing/${authority.key}/${level.key}`);
  }
  return routes;
}

export function render(pathname: string): { html: string; title: string | null; description: string | null } {
  // The pages read window.location.pathname when they first render; the
  // rest of window is only touched in effects/handlers, which never run here.
  (globalThis as unknown as { window: unknown }).window = { location: { pathname } };
  ssrMeta.current = null;
  const Page = pathname.startsWith("/library") ? LibraryApp : LicensingApp;
  const html = renderToString(<Page />);
  // Re-read after rendering (TS narrowed it to null from the reset above).
  const meta = ssrMeta.current as { title: string; description: string } | null;
  return { html, title: meta?.title ?? null, description: meta?.description ?? null };
}
