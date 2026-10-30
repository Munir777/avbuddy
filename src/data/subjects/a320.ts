import type { Question } from "../../types";
import { AIRCOND_QUESTIONS } from "../categories/aircond";
import { APU_QUESTIONS } from "../categories/apu";
import { AUTOFLIGHT_QUESTIONS } from "../categories/autoflight";
import { DOORS_QUESTIONS } from "../categories/doors";
import { COMMUNICATION_QUESTIONS } from "../categories/communication";
import { ELECTRICAL_QUESTIONS } from "../categories/electrical";
import { ENGINE_QUESTIONS } from "../categories/engine";
import { EQUIPMENT_QUESTIONS } from "../categories/equipment";
import { FIRE_PROTECTION_QUESTIONS } from "../categories/fire-protection";
import { FLIGHT_CONTROLS_QUESTIONS } from "../categories/flight-controls";
import { FUEL_QUESTIONS } from "../categories/fuel";
import { HYDRAULIC_SYSTEM_QUESTIONS } from "../categories/hydraulic-system";
import { PNEUMATICS_QUESTIONS } from "../categories/pneumatics";
import { ICE_RAIN_PROTECTION_QUESTIONS } from "../categories/ice-rain-protection";
import { INDICATING_RECORDING_QUESTIONS } from "../categories/indicating-recording";
import { LANDING_GEAR_QUESTIONS } from "../categories/landing-gear";
import { LIMITATION_QUESTIONS } from "../categories/limitation";
import { NAVIGATION_QUESTIONS } from "../categories/navigation";
import { OXYGEN_QUESTIONS } from "../categories/oxygen";

// One subject's questions, in display order. Kept in its own module so the
// main app can load each subject as a separate chunk on demand (see
// src/data/bank.ts) instead of shipping the whole bank on first paint.
// IDs are NOT assigned here -- see src/data/index.ts / bank.ts.
export const SUBJECT = "A320 Systems";

const questions: Question[] = [
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
].map((q) => ({ ...q, subject: q.subject ?? SUBJECT }));

export default questions;
