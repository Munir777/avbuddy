import type { Question } from "../../types";
import { AIR_LAW_QUESTIONS } from "../categories/general-knowledge/air-law";
import { METEOROLOGY_QUESTIONS } from "../categories/general-knowledge/meteorology";
import { HUMAN_FACTORS_QUESTIONS } from "../categories/general-knowledge/human-factors";
import { NAVIGATION_FLIGHT_PLANNING_QUESTIONS } from "../categories/general-knowledge/navigation-flight-planning";
import { OPERATIONAL_PROCEDURES_QUESTIONS } from "../categories/general-knowledge/operational-procedures";
import { INSTRUMENTS_QUESTIONS } from "../categories/general-knowledge/instruments";
import { PERFORMANCE_PRINCIPLES_QUESTIONS } from "../categories/general-knowledge/performance-principles";
import { POWERPLANT_QUESTIONS } from "../categories/general-knowledge/powerplant";
import { ELECTRICS_QUESTIONS } from "../categories/general-knowledge/electrics";
import { ATPL_HYDRAULICS_QUESTIONS } from "../categories/general-knowledge/hydraulics";
import { ATPL_FUEL_QUESTIONS } from "../categories/general-knowledge/fuel-systems";
import { AIRFRAME_STRUCTURES_QUESTIONS } from "../categories/general-knowledge/airframe-structures";
import { ATPL_FLIGHT_CONTROLS_QUESTIONS } from "../categories/general-knowledge/flight-controls";
import { ATPL_FIRE_PROTECTION_QUESTIONS } from "../categories/general-knowledge/fire-protection";
import { ATPL_ICE_PROTECTION_QUESTIONS } from "../categories/general-knowledge/ice-protection";
import { ATPL_AIRCOND_QUESTIONS } from "../categories/general-knowledge/air-cond-pressurization";
import { ATPL_OXYGEN_QUESTIONS } from "../categories/general-knowledge/oxygen";

// One subject's questions, in display order. Kept in its own module so the
// main app can load each subject as a separate chunk on demand (see
// src/data/bank.ts) instead of shipping the whole bank on first paint.
// IDs are NOT assigned here -- see src/data/index.ts / bank.ts.
export const SUBJECT = "ATPL General Knowledge";

const questions: Question[] = [
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
].map((q) => ({ ...q, subject: q.subject ?? SUBJECT }));

export default questions;
