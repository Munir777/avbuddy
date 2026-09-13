import type { Question } from "../../../types";

// 737 MAX 8 - Flight Instruments, Displays & Recording. Original,
// independently-written questions based on general/public 737-family
// systems knowledge (not sourced from any operator-specific or
// manufacturer-proprietary document) - no company, airline, publisher, or
// person names.
export const B737_INDICATING_RECORDING_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Indicating & Recording",
    q: "What is the general purpose of a dedicated engine-indication and crew-alerting display, combining engine parameters with system messages in one place?",
    options: [
      "It centralizes primary engine readings and system caution/warning messages onto one or two displays, so the crew has a single, consistent place to check both rather than scanning many separate dedicated gauges",
      "It exists solely to show cabin temperature",
      "It replaces the need for any engine parameters to be shown at all",
      "It is used only during engine start, and is blank for the remainder of the flight",
    ],
    answer: 0,
    explain:
      "Bringing primary engine parameters and crew-alerting (caution/warning) messages together on one or two central electronic displays reduces the scanning workload compared with older instrument panels full of individual dedicated gauges, and gives the crew a single consistent place to check both engine health and system status.",
    reference: "Indicating & Recording - Engine/Crew Alerting Display",
  },
  {
    id: 2,
    system: "Indicating & Recording",
    q: "What is the general purpose of an independent standby instrument set (attitude, airspeed, and altitude)?",
    options: [
      "To provide basic flight information that stays available even if the main electronic flight displays or their underlying computers are lost",
      "To provide a more accurate primary reference that replaces the main displays in normal flight",
      "To display only cabin pressurization information",
      "To function only while the aircraft is on autopilot",
    ],
    answer: 0,
    explain:
      "A standby instrument set is kept functionally and often electrically independent of the main flight display architecture specifically so the crew retains basic attitude, airspeed, and altitude information if the main displays (or the computers driving them) are lost - a deliberately simple, robust last-resort reference rather than the primary source of flight information.",
    reference: "Indicating & Recording - Standby Instruments",
  },
  {
    id: 3,
    system: "Indicating & Recording",
    q: "Why might a flight data recorder and a cockpit voice recorder sometimes be combined into a single physical unit rather than two separate boxes?",
    options: [
      "Combining them can reduce weight, installation complexity, and the number of separately protected/crash-survivable units needed, while still keeping both recording functions",
      "A combined unit is required because the two functions cannot legally exist on the same aircraft",
      "It is done to intentionally make the data harder to recover after an incident",
      "Combined units are used only on aircraft that don't carry passengers",
    ],
    answer: 0,
    explain:
      "Housing both flight data and cockpit voice recording functions in a single combined, crash-protected unit can simplify installation and reduce weight and the number of separately hardened recorder boxes needed, while still preserving both sets of recorded information for post-flight or post-incident review.",
    reference: "Indicating & Recording - Combined Recorder Units",
  },
  {
    id: 4,
    system: "Indicating & Recording",
    q: "What is the general purpose of recording engine parameter 'exceedances' (values that briefly exceed a defined limit) with an associated timestamp?",
    options: [
      "It lets maintenance personnel identify exactly when and how severely a limit was exceeded, supporting a decision on what inspection or maintenance action may be required",
      "Exceedance data is recorded purely for the crew's own in-flight entertainment display",
      "It is used only to calculate the aircraft's fuel burn for that flight",
      "Recorded exceedances are automatically deleted at the end of every flight and never reviewed",
    ],
    answer: 0,
    explain:
      "Recording an engine parameter exceedance together with a timestamp (and typically its peak value and duration) gives maintenance personnel the specific information needed to assess whether the engine may require inspection or other maintenance action, rather than the crew or maintenance having to rely purely on a general impression that 'something briefly looked high.'",
    reference: "Indicating & Recording - Exceedance Recording",
  },
  {
    id: 5,
    system: "Indicating & Recording",
    q: "What is the general purpose of an underwater locator beacon (ULB) fitted to a flight recorder?",
    options: [
      "It automatically emits a detectable acoustic signal if the recorder is submerged, helping searchers locate it (and the recorder) after an accident over water",
      "It broadcasts a radio signal that can only be received while the aircraft is airborne",
      "It permanently disables the recorder once it contacts water, to protect the data",
      "It is used to charge the recorder's battery from seawater",
    ],
    answer: 0,
    explain:
      "An underwater locator beacon activates automatically on contact with water, emitting an acoustic pulse that search equipment can detect underwater - addressing the specific challenge of finding a flight recorder that has ended up submerged, where a purely radio-based or visual search wouldn't be effective.",
    reference: "Indicating & Recording - Underwater Locator Beacon",
  },
];
