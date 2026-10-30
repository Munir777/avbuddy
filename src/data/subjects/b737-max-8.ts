import type { Question } from "../../types";
import { B737_ELECTRICAL_QUESTIONS } from "../categories/737-max-8/electrical";
import { B737_HYDRAULICS_QUESTIONS } from "../categories/737-max-8/hydraulics";
import { B737_ENGINES_APU_QUESTIONS } from "../categories/737-max-8/engines-apu";
import { B737_FLIGHT_CONTROLS_QUESTIONS } from "../categories/737-max-8/flight-controls";
import { B737_AIR_SYSTEMS_QUESTIONS } from "../categories/737-max-8/air-systems";
import { B737_LIMITATIONS_QUESTIONS } from "../categories/737-max-8/limitations";
import { B737_FUEL_QUESTIONS } from "../categories/737-max-8/fuel";
import { B737_LANDING_GEAR_QUESTIONS } from "../categories/737-max-8/landing-gear";
import { B737_NAVIGATION_QUESTIONS } from "../categories/737-max-8/navigation";
import { B737_WARNING_SYSTEMS_QUESTIONS } from "../categories/737-max-8/warning-systems";
import { B737_DOORS_EQUIPMENT_QUESTIONS } from "../categories/737-max-8/doors-equipment";
import { B737_AUTOMATIC_FLIGHT_QUESTIONS } from "../categories/737-max-8/automatic-flight";
import { B737_ANTI_ICE_RAIN_QUESTIONS } from "../categories/737-max-8/anti-ice-rain";
import { B737_COMMUNICATIONS_QUESTIONS } from "../categories/737-max-8/communications";
import { B737_FIRE_PROTECTION_QUESTIONS } from "../categories/737-max-8/fire-protection";
import { B737_INDICATING_RECORDING_QUESTIONS } from "../categories/737-max-8/indicating-recording";

// One subject's questions, in display order. Kept in its own module so the
// main app can load each subject as a separate chunk on demand (see
// src/data/bank.ts) instead of shipping the whole bank on first paint.
// IDs are NOT assigned here -- see src/data/index.ts / bank.ts.
export const SUBJECT = "737 MAX 8";

const questions: Question[] = [
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
].map((q) => ({ ...q, subject: q.subject ?? SUBJECT }));

export default questions;
