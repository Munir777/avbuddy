import type { Question } from "../../../types";

// 737 MAX 8 - Automatic Flight. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_AUTOMATIC_FLIGHT_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Automatic Flight",
    q: "Why might an autopilot use more than one independent computation channel when flying an automatic landing?",
    options: [
      "So the channels can cross-monitor each other, reducing the chance that a single computation fault leads to an unsafe automatic landing",
      "Extra channels are used only to make the autopilot fly faster approaches",
      "A second channel exists purely as an unused spare with no active function",
      "Multiple channels are required only for manual (non-automatic) landings",
    ],
    answer: 0,
    explain:
      "For the demanding, low-margin task of an automatic landing, using multiple independent autopilot channels that continuously cross-check each other's outputs adds redundancy and fault detection that a single channel can't provide - if the channels disagree beyond an acceptable tolerance, the system can disconnect or revert rather than risk an unsafe automatic landing.",
    reference: "Automatic Flight - Multi-Channel Autopilot",
  },
  {
    id: 2,
    system: "Automatic Flight",
    q: "What is a common function of an autothrottle system during the landing flare?",
    options: [
      "It automatically retards the thrust levers toward idle at a defined height above the runway, rather than requiring the pilot to manually close them",
      "It automatically advances to maximum thrust just before touchdown",
      "It disengages completely the moment the aircraft descends below 1,000 feet",
      "It has no function at all during the landing phase",
    ],
    answer: 0,
    explain:
      "Many autothrottle systems are designed to automatically retard the thrust levers toward idle once the aircraft descends through a defined height during the flare, reducing pilot workload at a busy phase of flight - though the pilot can also manually retard the throttles if needed.",
    reference: "Automatic Flight - Autothrottle Retard Function",
  },
  {
    id: 3,
    system: "Automatic Flight",
    q: "What is the general purpose of an altitude alert system?",
    options: [
      "To give the crew an aural and/or visual alert as the aircraft approaches, or deviates from, a selected target altitude",
      "To automatically change the aircraft's transponder code",
      "To warn only of an approaching stall",
      "To alert the crew only about outside air temperature changes",
    ],
    answer: 0,
    explain:
      "An altitude alert system is intended to catch a level-off that's about to happen (or an unintended deviation once level) by giving the crew a distinct aural tone and/or visual indication as the aircraft nears its selected target altitude, or if it subsequently drifts away from it by more than a defined amount.",
    reference: "Automatic Flight - Altitude Alert",
  },
  {
    id: 4,
    system: "Automatic Flight",
    q: "What is the general function of a mode control panel (MCP) in the automatic flight system?",
    options: [
      "It's the panel where the crew selects autopilot/flight director/autothrottle modes and enters targets such as altitude, heading, and speed",
      "It is used only to control cabin lighting",
      "It exists solely to display outside air temperature",
      "It is a purely passive display with no selectable controls at all",
    ],
    answer: 0,
    explain:
      "The mode control panel is the crew's primary interface for commanding the automatic flight system - selecting which lateral and vertical modes the flight director/autopilot/autothrottle should fly in, and dialing in numeric targets like a selected altitude, heading, or airspeed for those modes to fly toward.",
    reference: "Automatic Flight - Mode Control Panel",
  },
  {
    id: 5,
    system: "Automatic Flight",
    q: "What does pressing a dedicated go-around (TO/GA) switch on the thrust levers generally command?",
    options: [
      "A go-around pitch and thrust mode, commanding a climb attitude and go-around thrust without the crew needing to manually select each element",
      "An immediate autopilot disconnect with no other effect",
      "A reduction to idle thrust for a normal landing",
      "A shutdown of both engines",
    ],
    answer: 0,
    explain:
      "The go-around switch is a single, quickly accessible control specifically for the time-critical go-around maneuver - pressing it commands the flight director/autothrottle into a go-around mode that sets an appropriate climb pitch cue and go-around thrust together, rather than requiring the crew to separately select thrust and pitch targets during an already busy moment.",
    reference: "Automatic Flight - Go-Around Mode",
  },
];
