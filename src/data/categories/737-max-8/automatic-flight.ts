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
  {
    id: 6,
    system: "Automatic Flight",
    q: "What is the general purpose of the flight director's command bars (or steering cues) on the primary flight display?",
    options: [
      "They show the pitch and roll guidance needed to fly the currently selected mode's targets, whether the pilot is following them manually or the autopilot is flying them automatically",
      "They display only the current outside air temperature",
      "They exist purely to show cabin pressure differential",
      "They are visible only when the autopilot is engaged, never during manual flight director use",
    ],
    answer: 0,
    explain:
      "The command bars translate whatever the automatic flight system's currently selected modes are commanding - a heading, an altitude, a glidepath, and so on - into a simple pitch-and-roll steering cue on the primary flight display, which the pilot can hand-fly by following, or which the autopilot itself uses as its own guidance if engaged.",
    reference: "Automatic Flight - Flight Director Command Bars",
  },
  {
    id: 7,
    system: "Automatic Flight",
    q: "What generally happens as an aircraft climbing or descending under autopilot control approaches its selected target altitude?",
    options: [
      "The automatic flight system transitions from the climb/descent mode into an altitude-capture mode, smoothly leveling the aircraft off at the selected altitude",
      "The autopilot immediately disconnects the moment the target altitude is approached",
      "The aircraft continues climbing or descending straight through the selected altitude with no change in mode",
      "The aircraft automatically enters a holding pattern",
    ],
    answer: 0,
    explain:
      "As the aircraft nears its selected target altitude, the automatic flight system transitions out of the active climb or descent mode and into an altitude-capture mode, which smoothly reduces the vertical rate so the aircraft levels off precisely at the selected altitude rather than overshooting past it.",
    reference: "Automatic Flight - Altitude Capture",
  },
  {
    id: 8,
    system: "Automatic Flight",
    q: "What is the general function of a heading (or track) select mode on the automatic flight system?",
    options: [
      "The crew dials in a desired heading or track, and the autopilot turns the aircraft to intercept and then hold it",
      "It can only maintain whatever heading the aircraft happened to be on at engagement, with no ability to select a new one",
      "It controls altitude rather than lateral direction",
      "It is used only during an automatic landing, never in cruise",
    ],
    answer: 0,
    explain:
      "A heading/track select mode is a straightforward way for the crew to command a lateral change: dialing in the desired value and engaging the mode causes the autopilot to turn the aircraft (typically in the selected direction) to intercept and then maintain that heading or track, without needing to fly it manually.",
    reference: "Automatic Flight - Heading/Track Select Mode",
  },
  {
    id: 9,
    system: "Automatic Flight",
    q: "What generally happens if the aircraft deviates from its computed vertical navigation (VNAV) path by more than an acceptable tolerance?",
    options: [
      "The system can revert to a more basic mode and/or alert the crew, rather than silently continuing to claim it's tracking a path it's no longer actually following",
      "The aircraft's flight controls are automatically locked in place",
      "VNAV deviation always goes completely undetected and unreported",
      "The aircraft is instructed to immediately climb to its maximum operating altitude",
    ],
    answer: 0,
    explain:
      "If the aircraft's actual vertical profile diverges too far from the computed VNAV path - beyond what the system considers an acceptable tolerance - it's designed to flag that rather than continuing to silently display path guidance the aircraft isn't really following; depending on the design, that can include reverting to a simpler vertical mode and/or annunciating the deviation to the crew.",
    reference: "Automatic Flight - VNAV Path Deviation",
  },
  {
    id: 10,
    system: "Automatic Flight",
    q: "In a typical automatic approach mode sequence, what is the general order of localizer and glideslope engagement?",
    options: [
      "The localizer mode is generally armed and captured first, establishing lateral alignment with the runway centerline, with the glideslope mode then arming and capturing to establish the vertical approach path",
      "The glideslope is always captured before the localizer, with lateral alignment established last",
      "Both must be manually flown by the pilot with no automatic capture available at all",
      "There is no defined sequence; either can be captured in any order with no operational difference",
    ],
    answer: 0,
    explain:
      "The typical sequence arms the localizer first so the aircraft captures and establishes lateral alignment with the runway centerline, with the glideslope mode then arming and subsequently capturing the vertical path once the aircraft is established - a sequence that reflects getting the aircraft correctly lined up with the runway before beginning to follow the vertical descent profile.",
    reference: "Automatic Flight - Localizer/Glideslope Capture Sequence",
  },
];
