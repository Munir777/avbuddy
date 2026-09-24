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
import { POWERPLANT_QUESTIONS } from "./categories/general-knowledge/powerplant";
import { ELECTRICS_QUESTIONS } from "./categories/general-knowledge/electrics";
import { ATPL_HYDRAULICS_QUESTIONS } from "./categories/general-knowledge/hydraulics";
import { ATPL_FUEL_QUESTIONS } from "./categories/general-knowledge/fuel-systems";
import { AIRFRAME_STRUCTURES_QUESTIONS } from "./categories/general-knowledge/airframe-structures";
import { ATPL_FLIGHT_CONTROLS_QUESTIONS } from "./categories/general-knowledge/flight-controls";
import { ATPL_FIRE_PROTECTION_QUESTIONS } from "./categories/general-knowledge/fire-protection";
import { ATPL_ICE_PROTECTION_QUESTIONS } from "./categories/general-knowledge/ice-protection";
import { ATPL_AIRCOND_QUESTIONS } from "./categories/general-knowledge/air-cond-pressurization";
import { ATPL_OXYGEN_QUESTIONS } from "./categories/general-knowledge/oxygen";
import { B737_ELECTRICAL_QUESTIONS } from "./categories/737-max-8/electrical";
import { B737_HYDRAULICS_QUESTIONS } from "./categories/737-max-8/hydraulics";
import { B737_ENGINES_APU_QUESTIONS } from "./categories/737-max-8/engines-apu";
import { B737_FLIGHT_CONTROLS_QUESTIONS } from "./categories/737-max-8/flight-controls";
import { B737_AIR_SYSTEMS_QUESTIONS } from "./categories/737-max-8/air-systems";
import { B737_LIMITATIONS_QUESTIONS } from "./categories/737-max-8/limitations";
import { B737_FUEL_QUESTIONS } from "./categories/737-max-8/fuel";
import { B737_LANDING_GEAR_QUESTIONS } from "./categories/737-max-8/landing-gear";
import { B737_NAVIGATION_QUESTIONS } from "./categories/737-max-8/navigation";
import { B737_WARNING_SYSTEMS_QUESTIONS } from "./categories/737-max-8/warning-systems";
import { B737_DOORS_EQUIPMENT_QUESTIONS } from "./categories/737-max-8/doors-equipment";
import { B737_AUTOMATIC_FLIGHT_QUESTIONS } from "./categories/737-max-8/automatic-flight";
import { B737_ANTI_ICE_RAIN_QUESTIONS } from "./categories/737-max-8/anti-ice-rain";
import { B737_COMMUNICATIONS_QUESTIONS } from "./categories/737-max-8/communications";
import { B737_FIRE_PROTECTION_QUESTIONS } from "./categories/737-max-8/fire-protection";
import { B737_INDICATING_RECORDING_QUESTIONS } from "./categories/737-max-8/indicating-recording";
import { FAA_ATP_BATCH_01_QUESTIONS } from "./categories/faa-atp/batch-01";
import { FAA_ATP_BATCH_02_QUESTIONS } from "./categories/faa-atp/batch-02";
import { FAA_ATP_BATCH_03_QUESTIONS } from "./categories/faa-atp/batch-03";
import { FAA_ATP_BATCH_04_QUESTIONS } from "./categories/faa-atp/batch-04";
import { FAA_ATP_BATCH_05_QUESTIONS } from "./categories/faa-atp/batch-05";
import { FAA_ATP_BATCH_06_QUESTIONS } from "./categories/faa-atp/batch-06";
import { FAA_ATP_BATCH_07_QUESTIONS } from "./categories/faa-atp/batch-07";
import { FAA_ATP_BATCH_08_QUESTIONS } from "./categories/faa-atp/batch-08";
import { FAA_ATP_BATCH_09_QUESTIONS } from "./categories/faa-atp/batch-09";
import { FAA_ATP_BATCH_10_QUESTIONS } from "./categories/faa-atp/batch-10";
import { FAA_ATP_BATCH_11_QUESTIONS } from "./categories/faa-atp/batch-11";
import { FAA_ATP_BATCH_12_QUESTIONS } from "./categories/faa-atp/batch-12";
import { FAA_ATP_BATCH_13_QUESTIONS } from "./categories/faa-atp/batch-13";
import { FAA_ATP_BATCH_14_QUESTIONS } from "./categories/faa-atp/batch-14";
import { FAA_ATP_BATCH_15_QUESTIONS } from "./categories/faa-atp/batch-15";
import { FAA_ATP_BATCH_16_QUESTIONS } from "./categories/faa-atp/batch-16";
import { FAA_ATP_BATCH_17_QUESTIONS } from "./categories/faa-atp/batch-17";
import { CANADA_TC_ATPL_BATCH_01_QUESTIONS } from "./categories/canada-tc-atpl/batch-01";
import { CANADA_TC_ATPL_BATCH_02_QUESTIONS } from "./categories/canada-tc-atpl/batch-02";
import { CANADA_TC_ATPL_BATCH_03_QUESTIONS } from "./categories/canada-tc-atpl/batch-03";
import { CANADA_TC_ATPL_BATCH_04_QUESTIONS } from "./categories/canada-tc-atpl/batch-04";
import { CANADA_TC_ATPL_BATCH_05_QUESTIONS } from "./categories/canada-tc-atpl/batch-05";
import { CANADA_TC_ATPL_BATCH_06_QUESTIONS } from "./categories/canada-tc-atpl/batch-06";
import { CANADA_TC_ATPL_BATCH_07_QUESTIONS } from "./categories/canada-tc-atpl/batch-07";
import { CANADA_TC_ATPL_BATCH_08_QUESTIONS } from "./categories/canada-tc-atpl/batch-08";
import { CANADA_TC_ATPL_BATCH_09_QUESTIONS } from "./categories/canada-tc-atpl/batch-09";
import { CANADA_TC_ATPL_BATCH_10_QUESTIONS } from "./categories/canada-tc-atpl/batch-10";
import { CANADA_TC_ATPL_BATCH_11_QUESTIONS } from "./categories/canada-tc-atpl/batch-11";
import { CANADA_TC_ATPL_BATCH_12_QUESTIONS } from "./categories/canada-tc-atpl/batch-12";
import { CANADA_TC_ATPL_BATCH_13_QUESTIONS } from "./categories/canada-tc-atpl/batch-13";
import { CANADA_TC_ATPL_BATCH_14_QUESTIONS } from "./categories/canada-tc-atpl/batch-14";
import { CANADA_TC_ATPL_BATCH_15_QUESTIONS } from "./categories/canada-tc-atpl/batch-15";
import { CANADA_TC_ATPL_BATCH_16_QUESTIONS } from "./categories/canada-tc-atpl/batch-16";
import { CANADA_TC_ATPL_BATCH_17_QUESTIONS } from "./categories/canada-tc-atpl/batch-17";
import { CANADA_TC_ATPL_BATCH_18_QUESTIONS } from "./categories/canada-tc-atpl/batch-18";
import { CANADA_TC_ATPL_BATCH_19_QUESTIONS } from "./categories/canada-tc-atpl/batch-19";
import { CANADA_TC_ATPL_BATCH_20_QUESTIONS } from "./categories/canada-tc-atpl/batch-20";
import { CANADA_TC_ATPL_BATCH_21_QUESTIONS } from "./categories/canada-tc-atpl/batch-21";
import { CANADA_TC_ATPL_BATCH_22_QUESTIONS } from "./categories/canada-tc-atpl/batch-22";
import { CANADA_TC_ATPL_BATCH_23_QUESTIONS } from "./categories/canada-tc-atpl/batch-23";
import { CANADA_TC_ATPL_BATCH_24_QUESTIONS } from "./categories/canada-tc-atpl/batch-24";
import { CANADA_TC_ATPL_BATCH_25_QUESTIONS } from "./categories/canada-tc-atpl/batch-25";
import { CANADA_TC_ATPL_BATCH_26_QUESTIONS } from "./categories/canada-tc-atpl/batch-26";
import { CANADA_TC_ATPL_BATCH_27_QUESTIONS } from "./categories/canada-tc-atpl/batch-27";
import { CANADA_TC_ATPL_BATCH_28_QUESTIONS } from "./categories/canada-tc-atpl/batch-28";
import { CANADA_TC_ATPL_BATCH_29_QUESTIONS } from "./categories/canada-tc-atpl/batch-29";
import { CANADA_TC_ATPL_BATCH_30_QUESTIONS } from "./categories/canada-tc-atpl/batch-30";
import { CANADA_TC_ATPL_BATCH_31_QUESTIONS } from "./categories/canada-tc-atpl/batch-31";
import { CANADA_TC_ATPL_BATCH_32_QUESTIONS } from "./categories/canada-tc-atpl/batch-32";
import { CANADA_TC_ATPL_BATCH_33_QUESTIONS } from "./categories/canada-tc-atpl/batch-33";
import { CANADA_TC_ATPL_BATCH_34_QUESTIONS } from "./categories/canada-tc-atpl/batch-34";
import { CANADA_TC_ATPL_BATCH_35_QUESTIONS } from "./categories/canada-tc-atpl/batch-35";
import { CANADA_TC_ATPL_BATCH_36_QUESTIONS } from "./categories/canada-tc-atpl/batch-36";
import { CANADA_TC_ATPL_BATCH_37_QUESTIONS } from "./categories/canada-tc-atpl/batch-37";
import { CANADA_TC_ATPL_BATCH_38_QUESTIONS } from "./categories/canada-tc-atpl/batch-38";
import { CANADA_TC_ATPL_BATCH_39_QUESTIONS } from "./categories/canada-tc-atpl/batch-39";
import { CANADA_TC_ATPL_BATCH_40_QUESTIONS } from "./categories/canada-tc-atpl/batch-40";
import { CANADA_TC_ATPL_BATCH_41_QUESTIONS } from "./categories/canada-tc-atpl/batch-41";

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
  ...POWERPLANT_QUESTIONS,
  ...ELECTRICS_QUESTIONS,
  ...ATPL_HYDRAULICS_QUESTIONS,
  ...ATPL_FUEL_QUESTIONS,
  ...AIRFRAME_STRUCTURES_QUESTIONS,
  ...ATPL_FLIGHT_CONTROLS_QUESTIONS,
  ...ATPL_FIRE_PROTECTION_QUESTIONS,
  ...ATPL_ICE_PROTECTION_QUESTIONS,
  ...ATPL_AIRCOND_QUESTIONS,
  ...ATPL_OXYGEN_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "ATPL General Knowledge" }));

const FAA_ATP_QUESTIONS: Question[] = [
  ...FAA_ATP_BATCH_01_QUESTIONS,
  ...FAA_ATP_BATCH_02_QUESTIONS,
  ...FAA_ATP_BATCH_03_QUESTIONS,
  ...FAA_ATP_BATCH_04_QUESTIONS,
  ...FAA_ATP_BATCH_05_QUESTIONS,
  ...FAA_ATP_BATCH_06_QUESTIONS,
  ...FAA_ATP_BATCH_07_QUESTIONS,
  ...FAA_ATP_BATCH_08_QUESTIONS,
  ...FAA_ATP_BATCH_09_QUESTIONS,
  ...FAA_ATP_BATCH_10_QUESTIONS,
  ...FAA_ATP_BATCH_11_QUESTIONS,
  ...FAA_ATP_BATCH_12_QUESTIONS,
  ...FAA_ATP_BATCH_13_QUESTIONS,
  ...FAA_ATP_BATCH_14_QUESTIONS,
  ...FAA_ATP_BATCH_15_QUESTIONS,
  ...FAA_ATP_BATCH_16_QUESTIONS,
  ...FAA_ATP_BATCH_17_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "FAA ATP" }));

const CANADA_TC_ATPL_QUESTIONS: Question[] = [
  ...CANADA_TC_ATPL_BATCH_01_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_02_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_03_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_04_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_05_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_06_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_07_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_08_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_09_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_10_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_11_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_12_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_13_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_14_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_15_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_16_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_17_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_18_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_19_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_20_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_21_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_22_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_23_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_24_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_25_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_26_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_27_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_28_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_29_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_30_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_31_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_32_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_33_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_34_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_35_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_36_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_37_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_38_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_39_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_40_QUESTIONS,
  ...CANADA_TC_ATPL_BATCH_41_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "Canada TC ATPL" }));

const B737_MAX_8_QUESTIONS: Question[] = [
  ...B737_ELECTRICAL_QUESTIONS,
  ...B737_HYDRAULICS_QUESTIONS,
  ...B737_ENGINES_APU_QUESTIONS,
  ...B737_FLIGHT_CONTROLS_QUESTIONS,
  ...B737_AIR_SYSTEMS_QUESTIONS,
  ...B737_LIMITATIONS_QUESTIONS,
  ...B737_FUEL_QUESTIONS,
  ...B737_LANDING_GEAR_QUESTIONS,
  ...B737_NAVIGATION_QUESTIONS,
  ...B737_WARNING_SYSTEMS_QUESTIONS,
  ...B737_DOORS_EQUIPMENT_QUESTIONS,
  ...B737_AUTOMATIC_FLIGHT_QUESTIONS,
  ...B737_ANTI_ICE_RAIN_QUESTIONS,
  ...B737_COMMUNICATIONS_QUESTIONS,
  ...B737_FIRE_PROTECTION_QUESTIONS,
  ...B737_INDICATING_RECORDING_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? "737 MAX 8" }));

// Each category file numbers its own questions from 1, so IDs are
// reassigned here to be globally unique across the combined bank — this
// way category files never need to coordinate ID ranges with each other,
// even across subjects.
export const QUESTIONS: Question[] = [
  ...A320_SYSTEMS_QUESTIONS,
  ...GENERAL_KNOWLEDGE_QUESTIONS,
  ...B737_MAX_8_QUESTIONS,
  ...FAA_ATP_QUESTIONS,
  ...CANADA_TC_ATPL_QUESTIONS,
].map((q, i) => ({ ...q, id: i + 1 }));

export const SUBJECTS: string[] = ["A320 Systems", "ATPL General Knowledge", "737 MAX 8", "FAA ATP", "Canada TC ATPL"];

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
  "FAA ATP": [
    "All",
    ...Array.from(new Set(FAA_ATP_QUESTIONS.map((q) => q.system))),
  ],
  "Canada TC ATPL": [
    "All",
    ...Array.from(new Set(CANADA_TC_ATPL_QUESTIONS.map((q) => q.system))),
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
