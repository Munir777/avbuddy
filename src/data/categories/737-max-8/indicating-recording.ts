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
  {
    id: 6,
    system: "Indicating & Recording",
    q: "Why does an electronic flight instrument system (EFIS) typically use more than one independent display computer/channel?",
    options: [
      "So a single computer failure doesn't blank both pilots' primary displays at once, preserving at least one pilot's flight information",
      "Multiple channels exist purely to allow different color schemes for each pilot",
      "A single display computer is physically incapable of driving even one screen",
      "Redundant channels are used only to reduce electrical power consumption",
    ],
    answer: 0,
    explain:
      "Using independent display computers/channels for each pilot's displays means a fault in one doesn't necessarily take down the other pilot's information as well - an important redundancy consideration given how central these displays are to safely flying the aircraft.",
    reference: "Indicating & Recording - EFIS Redundancy",
  },
  {
    id: 7,
    system: "Indicating & Recording",
    q: "What is the general purpose of a display 'reversion' capability, where a remaining screen can be reformatted to show information from a display that has failed?",
    options: [
      "It lets critical information (such as engine parameters) still be presented to the crew on a surviving display, rather than being lost entirely if its normal dedicated screen fails",
      "It permanently disables the remaining working displays as well",
      "It only functions while the aircraft is parked on the ground",
      "It has no real function and exists purely as a demonstration mode",
    ],
    answer: 0,
    explain:
      "If a dedicated display fails, reversion logic lets a remaining, still-working screen be reformatted to show the information that display would normally have carried (such as combining primary flight and engine information onto one screen), so that information isn't simply lost to the crew - just consolidated onto fewer physical displays.",
    reference: "Indicating & Recording - Display Reversion",
  },
  {
    id: 8,
    system: "Indicating & Recording",
    q: "What is a general purpose of the flight deck clock/chronometer system beyond simply showing the time of day?",
    options: [
      "It commonly also provides elapsed-time and countdown timing functions useful for procedures such as timing a hold or an approach",
      "It exists solely to display cabin temperature",
      "It has no function beyond showing the current calendar date",
      "It is used only to control cabin lighting schedules",
    ],
    answer: 0,
    explain:
      "Beyond showing the current time (commonly in UTC for consistency across time zones), flight deck clocks/chronometers typically also provide elapsed-time and countdown functions that support procedures where precise timing matters, such as timing a non-precision approach segment or a holding pattern leg.",
    reference: "Indicating & Recording - Clock/Chronometer",
  },
  {
    id: 9,
    system: "Indicating & Recording",
    q: "In general terms, how much cockpit audio does a cockpit voice recorder typically retain?",
    options: [
      "A rolling recent time window, with the oldest recordings automatically overwritten as new audio is recorded",
      "Every recording made across the aircraft's entire service life, with nothing ever overwritten",
      "Only the first few minutes of each flight, with nothing recorded afterward",
      "It records audio only once per week, regardless of how many flights occur",
    ],
    answer: 0,
    explain:
      "A cockpit voice recorder is designed to continuously retain a rolling window of the most recent cockpit audio, with older recordings automatically overwritten as new audio comes in - meaning what matters after an event is preserving that data promptly, since ordinary continued operation will otherwise eventually overwrite it.",
    reference: "Indicating & Recording - CVR Retention Window",
  },
  {
    id: 10,
    system: "Indicating & Recording",
    q: "Why does a flight data recorder typically capture control surface positions and control inputs, not just basic flight parameters like altitude and airspeed?",
    options: [
      "Recording what the controls and surfaces were actually doing gives investigators a much fuller picture of how the aircraft was being flown and how it responded, not just the resulting flight path",
      "Control surface data has no investigative value and is recorded only by tradition",
      "Only altitude and airspeed are ever recorded; control positions are never captured",
      "Recording control inputs is done solely to monitor pilot comfort",
    ],
    answer: 0,
    explain:
      "Basic flight parameters like altitude and airspeed show what happened to the aircraft's flight path, but recording control surface positions and control inputs as well shows what the pilot(s) and automatic systems were actually commanding - giving investigators a much more complete picture of cause and effect than flight path data alone could provide.",
    reference: "Indicating & Recording - Control Position Recording",
  },
];
