// Licensing Hub — pilot licensing pathways by country/regulator.
//
// Structure-first: each regulator (Canada/TC, US/FAA, Europe/EASA) has the
// same four licence levels (PPL, CPL, IR, ATPL). Content per leaf is a
// short, deliberately general overview — no specific hour/age requirements
// are asserted here since those are regulation-dependent and change, and
// getting them wrong on a resource pilots rely on would be worse than not
// stating them. Detailed requirement breakdowns and practice questions can
// be filled in per leaf later without touching the navigation shell.

export type LicenseLevelKey = "ppl" | "cpl" | "ir" | "atpl";

export interface LicenseLevelInfo {
  key: LicenseLevelKey;
  label: string; // short badge, e.g. "PPL"
  fullName: string; // e.g. "Private Pilot Licence"
}

export const LICENSE_LEVELS: LicenseLevelInfo[] = [
  { key: "ppl", label: "PPL", fullName: "Private Pilot Licence" },
  { key: "cpl", label: "CPL", fullName: "Commercial Pilot Licence" },
  { key: "ir", label: "IR", fullName: "Instrument Rating" },
  { key: "atpl", label: "ATPL", fullName: "Airline Transport Pilot Licence" },
];

export interface LicensingAuthority {
  key: string;
  country: string;
  authorityName: string;
  authorityAbbr: string;
  regulator: string;
  summary: string;
}

export const LICENSING_AUTHORITIES: LicensingAuthority[] = [
  {
    key: "canada",
    country: "Canada",
    authorityName: "Transport Canada",
    authorityAbbr: "TC",
    regulator: "Canadian Aviation Regulations (CARs)",
    summary:
      "Canadian pilot licensing runs through Transport Canada under the CARs. The path typically progresses from a Private Pilot Licence through a Commercial Pilot Licence, with an Instrument Rating added along the way, up to the Airline Transport Pilot Licence required to act as pilot-in-command at an airline.",
  },
  {
    key: "us",
    country: "United States",
    authorityName: "Federal Aviation Administration",
    authorityAbbr: "FAA",
    regulator: "14 CFR Part 61 / Part 141",
    summary:
      "In the US, the FAA issues pilot certificates under 14 CFR Part 61 (or an approved Part 141 school curriculum). Pilots generally progress from Private to Commercial, add an Instrument Rating, and finish at the Airline Transport Pilot certificate needed for airline operations.",
  },
  {
    key: "europe",
    country: "Europe",
    authorityName: "European Union Aviation Safety Agency",
    authorityAbbr: "EASA",
    regulator: "EASA Part-FCL",
    summary:
      "EASA licensing (Part-FCL) applies across EU member states, with each national authority issuing the licence to a common standard. The usual route is PPL, then CPL, with an Instrument Rating, leading to the ATPL — the licence airline captains hold once experience requirements are met.",
  },
];

export function findLicensingAuthority(key: string): LicensingAuthority | undefined {
  return LICENSING_AUTHORITIES.find((a) => a.key === key);
}

export function findLicenseLevel(key: string): LicenseLevelInfo | undefined {
  return LICENSE_LEVELS.find((l) => l.key === key);
}
