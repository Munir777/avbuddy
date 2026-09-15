import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleRooms } from "./_rooms.js";
import { handleMessages } from "./_messages.js";
import { handleProfile } from "./_profile.js";

// One Vercel Function for Community's read-side endpoints -- rooms.ts,
// messages.ts, and profile.ts used to each be their own Vercel Function.
// Not a design choice: Vercel's Hobby plan caps a deployment at 12
// Vercel Functions when (as here) every api/*.ts file maps 1:1 to a
// Function, and shipping Community's 8 files pushed this project's total
// to 20. Splitting the surface into 3 files (this one for reads, actions.ts
// for signed-in POSTs, admin.ts for the admin panel) plus the same move
// for api/auth.ts and api/submissions.ts brings the total to 9 -- see
// those two files for the same story applied there.
//
// Nothing in the underlying logic changed: each api/community/_*.ts file
// is the original handler, unchanged, just renamed and no longer itself
// a routed file (the leading underscore excludes it from becoming a
// Function -- same convention already used for api/_auth.ts, api/_db.ts,
// api/community/_common.ts, etc).
//
// Routed by ?resource=, since rooms/messages/profile have nothing else
// in common: rooms and messages are public and GET-only; profile is a
// signed-in user's own GET-or-POST (unchanged -- it already handled both
// methods itself, so this just forwards regardless of method).
//
// TO REVERT once this consolidation is no longer needed (Pro plan, or a
// future Vercel limit change): create api/community/rooms.ts,
// messages.ts, profile.ts, each containing just
// `export { handleX as default } from "./_x.js";`, delete this file (and
// actions.ts / admin.ts the same way -- see the matching comments there),
// and change src/lib/community.ts's fetch calls back to
// /api/community/{rooms,messages,send,report,profile} and
// /api/community/admin/{settings,reports,moderate} for
// src/admin/CommunityPanel.tsx, dropping the `resource` and `op` fields.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const resource = typeof req.query.resource === "string" ? req.query.resource : "";
  if (resource === "rooms") return handleRooms(req, res);
  if (resource === "messages") return handleMessages(req, res);
  if (resource === "profile") return handleProfile(req, res);
  res.status(400).json({ ok: false, error: "invalid_resource" });
}
