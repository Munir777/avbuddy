import type { Question } from "../../../types";

// 737 MAX 8 - Warning Systems. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_WARNING_SYSTEMS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Warning Systems",
    q: "In a typical master warning/caution hierarchy, what is the general distinction between a 'warning' and a 'caution'?",
    options: [
      "A warning represents a more time-critical condition (often paired with a distinct aural alert) requiring immediate action, while a caution is a less urgent condition the crew needs to be aware of but that generally allows more time to respond",
      "Warnings and cautions are simply two different names for exactly the same urgency of condition",
      "A caution is always more urgent than a warning",
      "Warnings only ever occur on the ground, never in flight",
    ],
    answer: 0,
    explain:
      "A tiered annunciation scheme like this exists so the crew can prioritize: warnings flag conditions serious and time-critical enough to demand immediate attention (often reinforced with a distinct aural tone), while cautions flag conditions the crew should be aware of and address, but which don't require the same immediate, drop-everything response.",
    reference: "Warning Systems - Master Warning/Caution Hierarchy",
  },
  {
    id: 2,
    system: "Warning Systems",
    q: "What is the general purpose of a takeoff configuration warning?",
    options: [
      "To alert the crew with a distinct warning (commonly a horn) if the throttles are advanced for takeoff while flaps, trim, spoilers, or other relevant items are not in a valid takeoff configuration",
      "To warn the crew only after the aircraft is already airborne",
      "To indicate that the landing gear has failed to retract",
      "To confirm that the cabin doors are correctly closed",
    ],
    answer: 0,
    explain:
      "A takeoff configuration warning is specifically designed to catch an unsafe configuration before the takeoff roll even begins - triggering (typically as a horn) if the crew advances the thrust levers for takeoff while one or more relevant items, such as flap position, stabilizer trim setting, or spoiler position, are outside the valid range for takeoff.",
    reference: "Warning Systems - Takeoff Configuration Warning",
  },
  {
    id: 3,
    system: "Warning Systems",
    q: "What does an overspeed warning (often a distinctive repetitive 'clacker' tone) generally indicate?",
    options: [
      "That the aircraft has exceeded its maximum operating speed limit (VMO or MMO, whichever applies)",
      "That the aircraft has descended below its minimum safe altitude",
      "That a door or hatch has become unlatched",
      "That the cabin has lost pressurization",
    ],
    answer: 0,
    explain:
      "An overspeed warning is triggered specifically by exceeding the maximum operating speed limit - VMO (an indicated airspeed limit) or MMO (a Mach number limit), whichever is currently binding - alerting the crew clearly and distinctly (commonly with a repetitive 'clacker' tone) so they can reduce speed without needing to notice it purely from the airspeed indication.",
    reference: "Warning Systems - Overspeed Warning",
  },
  {
    id: 4,
    system: "Warning Systems",
    q: "What is the general function of a stick shaker as a stall warning device?",
    options: [
      "It vibrates the control column to give the pilot a strong tactile warning that the aircraft is approaching a stall, based on the sensed angle of attack",
      "It automatically pushes the control column forward with no pilot input required",
      "It is purely a visual warning light with no tactile component at all",
      "It only activates after the aircraft has already fully stalled",
    ],
    answer: 0,
    explain:
      "A stick shaker gives the pilot a distinctly tactile, hard-to-miss warning - vigorously vibrating the control column - as the sensed angle of attack approaches the stalling angle, prompting a stall recovery response before the aircraft actually reaches a full aerodynamic stall.",
    reference: "Warning Systems - Stick Shaker Stall Warning",
  },
  {
    id: 5,
    system: "Warning Systems",
    q: "What is the general purpose of a master caution 'recall' function?",
    options: [
      "It lets the crew re-display previously cancelled caution indications, in case one needs to be reviewed again after being cleared",
      "It permanently deletes all caution history so it can never be reviewed again",
      "It silences every future caution for the remainder of the flight",
      "It only works for warnings, never for cautions",
    ],
    answer: 0,
    explain:
      "Once a caution light has been individually cancelled, a recall function lets the crew bring back the full set of active-but-cancelled caution indications for review, which is useful if the crew wants to double-check what's still active after having cleared the master caution light earlier.",
    reference: "Warning Systems - Master Caution Recall",
  },
];
