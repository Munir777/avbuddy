// Regenerates public/sitemap.xml from the live question bank so every
// subject/category page in the public Study Library gets a real sitemap
// entry -- add a new category anywhere in src/data and this picks it up
// automatically next build. Runs automatically before `npm run build`
// (see the "prebuild" script in package.json).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { getLibrarySubjects } from "../src/lib/library";
import { LICENSING_AUTHORITIES, LICENSE_LEVELS } from "../src/data/licensing";

const BASE = "https://avbuddy.app";
const today = new Date().toISOString().slice(0, 10);

interface SitemapUrl {
  loc: string;
  priority: string;
  changefreq: string;
}

const urls: SitemapUrl[] = [
  { loc: `${BASE}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${BASE}/library`, priority: "0.8", changefreq: "weekly" },
  { loc: `${BASE}/licensing`, priority: "0.7", changefreq: "monthly" },
];

for (const subject of getLibrarySubjects()) {
  urls.push({ loc: `${BASE}/library/${subject.slug}`, priority: "0.7", changefreq: "monthly" });
  for (const category of subject.categories) {
    urls.push({
      loc: `${BASE}/library/${subject.slug}/${category.slug}`,
      priority: "0.6",
      changefreq: "monthly",
    });
  }
}

for (const authority of LICENSING_AUTHORITIES) {
  urls.push({ loc: `${BASE}/licensing/${authority.key}`, priority: "0.6", changefreq: "monthly" });
  for (const level of LICENSE_LEVELS) {
    urls.push({
      loc: `${BASE}/licensing/${authority.key}/${level.key}`,
      priority: "0.5",
      changefreq: "monthly",
    });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
writeFileSync(outPath, xml);
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`);
