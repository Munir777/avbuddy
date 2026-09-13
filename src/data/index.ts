import type { Question, SystemColor, SubjectMeta } from "../types";
import { AIRCOND_QUESTIONS } from "./categories/aircond";
import { APU_QUESTIONS } from "./categories/apu";
import { AUTOFLIGHT_QUESTIONS } from "./categories/autoflight";
import { DOORS_QUESTIONS } from "./categories/doors";
import { COMMUNICATION_QUESTIONS } from "./categories/communication";
import { ELECTRICAL_QUESTIONS } from "./categories/electrical";
import { ENGINE_QUESTIONS } from "./categories/engine";
import { EQUIPMENT_QUESTIONS } from "./categories/equipment";
import { FIRE_PROTECTION_QUESTIONS } from "./categories/fire-protection";
import { FLIGHT_CONTROLS_QUESTIONS } from "./categories/flight-controls";
import { FUEL_QUESTIONS } from "./categories/fuel";
import { HYDRAULIC_SYSTEM_QUESTIONS } from "./categories/hydraulic-system";
import { PNEUMATICS_QUESTIONS } from "./categories/pneumatics";
import { ICE_RAIN_PROTECTION_QUESTIONS } from "./categories/ice-rain-protection";
import { INDICATING_RECORDING_QUESTIONS } from "./categories/indicating-recording";
import { LANDING_GEAR_QUESTIONS } from "./categories/landing-gear";
import { LIMITATION_QUESTIONS } from "./categories/limitation";
import { NAVIGATION_QUESTIONS } from "./categories/navigation";
import { OXYGEN_QUESTIONS } from "./categories/oxygen";
import { AIR_LAW_QUESTIONS } from "./categories/general-knowledge/air-law";
import { METEOROLOGY_QUESTIONS } from "./categories/general-knowledge/meteorology";
import { HUMAN_FACTORS_QUESTIONS } from "./categories/general-knowledge/human-factors";
import { NAVIGATION_FLIGHT_PLANNING_QUESTIONS } from "./categories/general-knowledge/navigation-flight-planning";
import { OPERATIONAL_PROCEDURES_QUESTIONS } from "./categories/general-knowledge/operational-procedures";
import { INSTRUMENTS_QUESTIONS } from "./categories/general-knowledge/instruments";
import { PERFORMANCE_PRINCIPLES_QUESTIONS } from "./categories/general-knowledge/performance-principles";
import { B737_ELECTRICAL_QUESTIONS } from "./categories/737-max-8/electrical";
import { B737_HYDRAULICS_QUESTIONS } from "./categories/737-max-8/hydraulics";
import { B737_ENGINES_APU_QUESTIONS } from "./categories/737-max-8/engines-apu";
import { B737_FLIGHT_CONTROLS_QUESTIONS } from "./categories/737-max-8/flight-controls";
import { B737_AIR_SYSTEMS_QUESTIONS } from "./categories/737-max-8/air-systems";
import { B737_LIMITATIONS_QUESTIONS } from "./categories/737-max-8/limitations";

// To add a new category to an existing subject:
//   1. Create src/data/categories/<name>.ts (or categories/<subject-folder>/<name>.ts)
//      exporting a Question[] array.
//   2. Import it above and add it to the relevant subject's list below.
// To add a whole new subject:
//   1. Create src/data/categories/<subject-folder>/ with one or more category files.
//   2. Add the subject to SUBJECTS and SUBJECT_META below.
//   3. Add its systems (in display order) to SYSTEMS_BY_SUBJECT.
//   4. Add a SYSTEM_COLORS entry for each new system.
// Nothing else in the app needs to change.

const A320_SYSTEMS_QUESTIONS: Question[] = [
  ...AIRCOND_QUESTIONS,
  ...APU_QUESTIONS,
  ...AUTOFLIGHT_QUESTIONS,
  ...DOORS_QUESTIONS,
  ...COMMUNICATION_QUESTIONS,
  ...ELECTRICAL_QUESTIONS,
  ...ENGINE_QUESTIONS,
  ...EQUIPMENT_QUESTIONS,
  ...FIRE_PROTECTION_QUESTIONS,
  ...FLIGHT_CONTROLS_QUESTIONS,
  ...FUEL_QUESTIONS,
  ...HYDRAULIC_SYSTEM_QUESTIONS,
  ...PNEUMATICS_QUESTIONS,
  ...ICE_RAIN_PROTECTION_QUESTIONS,
  ...INDICATING_RECORDING_QUESTIONS,
  ...LANDING_GEAR_QUESTIONS,
  ...LIMITATION_QUESTIONS,
  ...NAVIGATION_QUESTIONS,
  ...OXYGEN_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "A320 Systems" }));

const GENERAL_KNOWLEDGE_QUESTIONS: Question[] = [
  ...AIR_LAW_QUESTIONS,
  ...METEOROLOGY_QUESTIONS,
  ...HUMAN_FACTORS_QUESTIONS,
  ...NAVIGATION_FLIGHT_PLANNING_QUESTIONS,
  ...OPERATIONAL_PROCEDURES_QUESTIONS,
  ...INSTRUMENTS_QUESTIONS,
  ...PERFORMANCE_PRINCIPLES_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "ATPL General Knowledge" }));

const B737_MAX_8_QUESTIONS: Question[] = [
  ...B737_ELECTRICAL_QUESTIONS,
  ...B737_HYDRAULICS_QUESTIONS,
  ...B737_ENGINES_APU_QUESTIONS,
  ...B737_FLIGHT_CONTROLS_QUESTIONS,
  ...B737_AIR_SYSTEMS_QUESTIONS,
  ...B737_LIMITATIONS_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "737 MAX 8" }));

// Each category file numbers its own questions from 1, so IDs are
// reassigned here to be globally unique across the combined bank — this
// way category files never need to coordinate ID ranges with each other,
// even across subjects.
export const QUESTIONS: Question[] = [
  ...A320_SYSTEMS_QUESTIONS,
  ...GENERAL_KNOWLEDGE_QUESTIONS,
  ...B737_MAX_8_QUESTIONS,
].map((q, i) => ({ ...q, id: i + 1 }));

export const SUBJECTS: string[] = ["A320 Systems", "ATPL General Knowledge", "737 MAX 8"];

export const SUBJECT_META: Record<string, SubjectMeta> = {
  "A320 Systems": {
    label: "A320 Systems",
    blurb: "Aircraft systems: hydraulics, electrics, engines, and every other A320 chapter.",
    accent: "#3fa65a",
  },
  "ATPL General Knowledge": {
    label: "ATPL General Knowledge",
    blurb: "Air law, meteorology, human factors, navigation, operational procedures, instruments, and performance — the exam-wide fundamentals.",
    accent: "#a68fd9",
  },
  "737 MAX 8": {
    label: "737 MAX 8",
    blurb: "Aircraft systems and limitations: electrical, hydraulics, engines/APU, flight controls, air systems.",
    accent: "#3b82c4",
  },
};

// Per-subject system lists, in the order they should appear in filter chips
// and setup screens. "All" is prepended by the component that consumes this,
// matching the previous global SYSTEMS convention.
export const SYSTEMS_BY_SUBJECT: Record<string, string[]> = {
  "A320 Systems": [
    "All",
    ...Array.from(new Set(A320_SYSTEMS_QUESTIONS.map((q) => q.system))),
  ],
  "ATPL General Knowledge": [
    "All",
    ...Array.from(new Set(GENERAL_KNOWLEDGE_QUESTIONS.map((q) => q.system))),
  ],
  "737 MAX 8": [
    "All",
    ...Array.from(new Set(B737_MAX_8_QUESTIONS.map((q) => q.system))),
  ],
};

// Kept for any code that still wants the full unscoped list (e.g. exam mode
// drawing across everything, or a future "All subjects" view).
export const SYSTEMS: string[] = [
  "All",
  ...Array.from(new Set(QUESTIONS.map((q) => q.system))),
];

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
};

export const DEFAULT_SYSTEM_COLOR: SystemColor = { fg: "#8FA68E", bg: "#1a2620" };
