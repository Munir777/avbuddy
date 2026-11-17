// Runs before every build (see "prebuild" in package.json). Pulls the
// approved, admin-reviewed Shared Material submissions out of Postgres into
// src/data/communityEntries.generated.json, so the public /airline-interviews
// pages are prerendered WITH them (crawlable) instead of only fetching them
// client-side. Only the post-review published_* columns are read -- never the
// raw submission text or who submitted it (same rule as api/shared-material.ts).
//
// No database env var (e.g. a local build) or any error -> writes [] and the
// build carries on; the pages still fetch approved posts live in the browser.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const out = fileURLToPath(new URL("../src/data/communityEntries.generated.json", import.meta.url));
const conn = process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? process.env.DATABASE_URL_UNPOOLED ?? "";

let entries = [];
if (conn) {
  try {
    const sql = neon(conn);
    const rows = await sql`
      SELECT id, airline, published_title, published_summary, published_body
      FROM shared_submissions
      WHERE status = 'approved'
      ORDER BY reviewed_at DESC
    `;
    entries = rows.map((r) => ({
      id: String(r.id),
      airline: r.airline,
      title: r.published_title,
      summary: r.published_summary,
      body: r.published_body,
    }));
  } catch (err) {
    console.warn("community entries: couldn't read database, continuing without them:", err?.message ?? err);
  }
} else {
  console.log("community entries: no database env var, skipping (fine for local builds)");
}
writeFileSync(out, JSON.stringify(entries, null, 2) + "\n");
console.log(`community entries: wrote ${entries.length} approved posts`);
