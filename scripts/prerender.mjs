// Runs after `vite build` + the SSR build of src/prerender.tsx. Writes one
// static HTML file per public Library/Licensing URL into dist/, each with its
// own title, description, canonical URL and the page's real content inside
// #root. Vercel serves these files directly (static files take priority over
// the SPA rewrite in vercel.json); the app then takes over in the browser.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_ORIGIN = "https://www.avbuddy.app";
const template = readFileSync(join(root, "dist/index.html"), "utf8");
const { render, prerenderRoutes } = await import(pathToFileURL(join(root, "dist-ssr/prerender.js")).href);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setOnce(html, re, replacement, label, route) {
  if (!re.test(html)) throw new Error(`prerender: couldn't find ${label} in index.html (route ${route})`);
  return html.replace(re, replacement);
}

let count = 0;
for (const route of prerenderRoutes()) {
  const { html, title, description } = render(route);
  if (!title || !description) throw new Error(`prerender: ${route} rendered without a title/description`);
  if (!html || html.length < 200) throw new Error(`prerender: ${route} rendered almost nothing`);
  const url = SITE_ORIGIN + route;
  let page = template;
  page = setOnce(page, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`, "<title>", route);
  page = setOnce(page, /(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`, "meta description", route);
  page = setOnce(page, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, "canonical", route);
  page = setOnce(page, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, "og:url", route);
  page = setOnce(page, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`, "og:title", route);
  page = setOnce(page, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`, "og:description", route);
  page = setOnce(page, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`, "twitter:title", route);
  page = setOnce(page, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`, "twitter:description", route);
  page = setOnce(page, /<div id="root"><\/div>/, `<div id="root">${html}</div>`, "#root", route);
  const out = join(root, "dist", route.slice(1), "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page);
  count++;
}
console.log(`prerender: wrote ${count} static pages`);
