import type { Question } from "../../../types";

// 737 MAX 8 - Flight Management & Navigation. Original, independently-written
// questions based on general/public 737-family systems knowledge (not
// sourced from any operator-specific or manufacturer-proprietary document) -
// no company, airline, publisher, or person names.
export const B737_NAVIGATION_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Navigation",
    q: "In a typical dual flight management computer (FMC) arrangement, what generally happens if one FMC fails?",
    options: [
      "The remaining FMC can continue to drive both control/display units, so navigation and performance computation isn't entirely lost",
      "Both control/display units go completely blank with no navigation function at all",
      "The aircraft immediately loses all electrical power",
      "The APU must take over the failed FMC's function",
    ],
    answer: 0,
    explain:
      "A dual-FMC arrangement is normally set up so the surviving computer can supply both flight deck displays/control units, meaning the crew retains flight management and performance computation (with reduced redundancy) rather than losing the function entirely if one FMC fails.",
    reference: "Flight Management - Dual FMC Architecture",
  },
  {
    id: 2,
    system: "Navigation",
    q: "Why does an inertial reference system (IRS) generally need a longer alignment time at higher latitudes?",
    options: [
      "The system aligns partly by sensing the Earth's rotation, and the horizontal component of that rotation rate it can sense decreases toward the poles, making alignment slower and less precise there",
      "Higher latitudes have less gravity, which slows the alignment process",
      "IRS alignment time is completely unrelated to latitude",
      "Alignment is actually faster at higher latitudes due to colder ambient temperatures",
    ],
    answer: 0,
    explain:
      "Part of how an IRS aligns itself is by sensing the horizontal component of the Earth's rotation to determine true north; that horizontal component shrinks toward the poles (it's greatest at the equator and zero exactly at the poles), so alignment generally takes longer, and can be less precise, at higher latitudes.",
    reference: "Flight Management - IRS Alignment",
  },
  {
    id: 3,
    system: "Navigation",
    q: "How are VOR/DME navigation radio frequencies generally selected when the flight management system is coupled to the flight plan?",
    options: [
      "The system can autotune an appropriate station automatically based on the active flight plan/route, though the crew can also tune stations manually",
      "Only fully manual tuning by the crew is ever possible, with no automatic option",
      "Frequencies can only be selected before engine start and never changed in flight",
      "The system requires the crew to type frequencies in Morse code",
    ],
    answer: 0,
    explain:
      "Modern flight management systems can automatically select and tune an appropriate VOR/DME station relevant to the active route (autotuning), reducing crew workload, while still leaving a manual tuning option available if the crew wants to select a specific station themselves.",
    reference: "Flight Management - Navigation Radio Tuning",
  },
  {
    id: 4,
    system: "Navigation",
    q: "Why is a standby magnetic compass still retained on modern flight decks despite extensive digital navigation systems?",
    options: [
      "It provides a heading reference that works independently of all aircraft electrical power and computer systems, as an ultimate backup",
      "It is kept purely as a historical decoration with no operational function",
      "It is more accurate than any digital heading system and is used as the primary reference",
      "It is required only for aircraft that never fly over water",
    ],
    answer: 0,
    explain:
      "A standby magnetic compass needs no electrical power or computer processing to work, making it the one heading reference that survives a total loss of aircraft electrical power or navigation computers - which is exactly why it's retained as a simple, independent last-resort backup rather than being removed once digital systems became standard.",
    reference: "Flight Management - Standby Magnetic Compass",
  },
  {
    id: 5,
    system: "Navigation",
    q: "In general terms, how does a flight management system typically compute the aircraft's 'best' position?",
    options: [
      "By blending the inertial reference system's computed position with available radio position updates (such as VOR/DME or GPS/GNSS), rather than relying on any single source alone",
      "By using GPS position exclusively, with all other position sources ignored whenever GPS is available",
      "By using inertial position exclusively, with radio updates never applied",
      "By asking air traffic control for a position report each time",
    ],
    answer: 0,
    explain:
      "Rather than trusting one single source, the flight management system's position-computation logic typically blends the inertial reference system's continuously-computed position with periodic radio-based updates (VOR/DME, GPS/GNSS, or other available sources), weighting each according to its expected accuracy so the resulting computed position is generally more accurate and more robust to any single sensor's errors than either source alone.",
    reference: "Flight Management - Position Computation",
  },
];
