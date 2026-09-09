import type { Question, SystemColor } from "../types";
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

// To add a new category:
//   1. Create src/data/categories/<name>.ts exporting a Question[] array
//   2. Import it above and add it to this list
// Nothing else in the app needs to change.
// Each category file numbers its own questions from 1, so IDs are
// reassigned here to be globally unique across the combined bank —
// this way category files never need to coordinate ID ranges with
// each other.
export const QUESTIONS: Question[] = [
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
].map((q, i) => ({ ...q, id: i + 1 }));

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
};

export const DEFAULT_SYSTEM_COLOR: SystemColor = { fg: "#8FA68E", bg: "#1a2620" };
