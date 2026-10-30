import type { SystemColor, SubjectMeta } from "../types";

// Lightweight subject/colour metadata -- no question data, so it can be
// imported anywhere without pulling the question bank into that chunk.

export const SUBJECTS: string[] = ["A320 Systems", "ATPL General Knowledge", "737 MAX 8", "FAA ATP", "Canada TC ATPL"];

export const SUBJECT_META: Record<string, SubjectMeta> = {
  "A320 Systems": {
    label: "A320 Systems",
    blurb: "Aircraft systems: hydraulics, electrics, engines, and every other A320 chapter.",
    accent: "#3fa65a",
  },
  "ATPL General Knowledge": {
    label: "ATPL General Knowledge",
    blurb: "Air law, meteorology, human factors, navigation, operational procedures, instruments, and performance — the technical knowledge that airline interviews and ATPL written exams draw from.",
    accent: "#a68fd9",
  },
  "737 MAX 8": {
    label: "737 MAX 8",
    blurb: "Aircraft systems and limitations: electrical, hydraulics, engines/APU, flight controls, air systems.",
    accent: "#3b82c4",
  },
  "FAA ATP": {
    label: "FAA ATP",
    blurb: "FAA Airline Transport Pilot written-test questions: 14 CFR Part 121/117 regulations, crew rest and duty limits, emergency equipment, and human factors.",
    accent: "#c47a3b",
  },
  "Canada TC ATPL": {
    label: "Canada TC ATPL",
    blurb: "Transport Canada SARON/SAMRA written-exam questions: CARs, TC AIM procedures, aircraft systems, meteorology, and flight planning, with regulation references.",
    accent: "#c4423b",
  },
};

export const SYSTEM_COLORS: Record<string, SystemColor> = {
  "Air Cond / Pressurization": { fg: "#D9A441", bg: "#3A2C0D" },
  APU: { fg: "#3B82C4", bg: "#0E2A3D" },
  Autoflight: { fg: "#3FA65A", bg: "#0F2E18" },
  Doors: { fg: "#C4483B", bg: "#3A1410" },
  Communication: { fg: "#8F6FC4", bg: "#241A3A" },
  Electrical: { fg: "#E0C23A", bg: "#3A320D" },
  Engine: { fg: "#E0703A", bg: "#3A1D0D" },
  Equipment: { fg: "#5FB8A6", bg: "#0D3A34" },
  "Fire Protection": { fg: "#E0433A", bg: "#3A0F0D" },
  "Flight Controls": { fg: "#4A90D9", bg: "#0D223A" },
  Fuel: { fg: "#C4A23B", bg: "#332A0D" },
  "Hydraulic System": { fg: "#3ACEB8", bg: "#0D3A34" },
  Pneumatics: { fg: "#B8863B", bg: "#332508" },
  "Ice & Rain Protection": { fg: "#7FC8E0", bg: "#0D2A32" },
  "Indicating / Recording": { fg: "#9B9FA6", bg: "#232527" },
  "Landing Gear": { fg: "#6B7FD9", bg: "#141A3A" },
  Limitation: { fg: "#D95F5F", bg: "#3A1414" },
  Navigation: { fg: "#5FD98A", bg: "#0F3320" },
  Oxygen: { fg: "#4AA3D9", bg: "#0D2A3A" },
  // ATPL General Knowledge subject — a distinct purple/indigo palette so these
  // read as a different "family" of categories at a glance, without
  // clashing with any A320 systems color above.
  "Air Law": { fg: "#B08FD9", bg: "#241A3A" },
  Meteorology: { fg: "#7FA8D9", bg: "#16233A" },
  "Human Factors": { fg: "#D98FC0", bg: "#3A1A2E" },
  "Navigation & Flight Planning": { fg: "#8FC0D9", bg: "#16303A" },
  "Operational Procedures": { fg: "#C0A8D9", bg: "#251A3A" },
  Instruments: { fg: "#A88FD9", bg: "#1E163A" },
  "Performance & Principles of Flight": { fg: "#9F8FD9", bg: "#1A163A" },
  // 737 MAX 8 subject — reuses the "Electrical" and "Flight Controls" colors
  // above (same conceptual categories as A320 Systems); these are the new
  // system names specific to this subject.
  Hydraulics: { fg: "#3ACEB8", bg: "#0D3A34" },
  "Engines & APU": { fg: "#E0703A", bg: "#3A1D0D" },
  "Air Systems": { fg: "#D9A441", bg: "#3A2C0D" },
  Limitations: { fg: "#D95F5F", bg: "#3A1414" },
  "Warning Systems": { fg: "#E0433A", bg: "#3A0F0D" },
  "Doors & Equipment": { fg: "#C4483B", bg: "#3A1410" },
  "Automatic Flight": { fg: "#3FA65A", bg: "#0F2E18" },
  "Anti-Ice & Rain": { fg: "#7FC8E0", bg: "#0D2A32" },
  Communications: { fg: "#8F6FC4", bg: "#241A3A" },
  // New ATPL General Knowledge categories added from a second source doc.
  Powerplant: { fg: "#C48F5F", bg: "#2E1F10" },
  "Airframe & Structures": { fg: "#8FA6C4", bg: "#16202E" },
  // FAA ATP subject — a warm amber/orange family distinct from the A320,
  // ATPL GK, and 737 palettes above.
  "Regulations & Certification": { fg: "#C4923B", bg: "#332508" },
  "Crew Rest & Duty Limits": { fg: "#D9A05F", bg: "#3A2810" },
  "Emergency & Survival Equipment": { fg: "#E0433A", bg: "#3A0F0D" },
  "Airport & Approach Operations": { fg: "#4A90D9", bg: "#0D223A" },
  "Abnormal & Emergency Procedures": { fg: "#D95F5F", bg: "#3A1414" },
  "Aerodynamics & Aircraft Performance": { fg: "#7FC97F", bg: "#0F2E10" },
  "Powerplant & Systems": { fg: "#B08FD9", bg: "#241A3A" },
  "Weight & Balance": { fg: "#E0B354", bg: "#332405" },
  // Canada TC ATPL subject -- a maple-red family distinct from every
  // palette above.
  "Air Law and Procedures": { fg: "#D95F52", bg: "#3A1712" },
  "Airframes, Power Plants, Propellers and Aircraft Systems": { fg: "#C4703B", bg: "#331F0D" },
  // "Instruments" reuses the ATPL General Knowledge color defined above.
  "Navigation - General": { fg: "#5FA6C4", bg: "#12232E" },
  "Flight Operations": { fg: "#7FC97F", bg: "#132E13" },
  "Theory of Flight": { fg: "#9F8FD9", bg: "#1A163A" },
  "Flight Planning": { fg: "#D9A05F", bg: "#3A2810" },
  "Radio Communications and Aids to Navigation": { fg: "#5FC4A6", bg: "#0D2E24" },
};

export const DEFAULT_SYSTEM_COLOR: SystemColor = { fg: "#8FA68E", bg: "#1a2620" };
