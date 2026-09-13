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
  {
    id: 6,
    system: "Navigation",
    q: "Why might an aircraft carry more than one independent inertial reference system (IRS/ADIRU) unit?",
    options: [
      "Redundancy - if one unit fails or its output becomes suspect, the others can continue supplying position/attitude data, and cross-comparing them helps catch a fault in any single unit",
      "Multiple units are fitted only to reduce total weight",
      "A single IRS unit is physically incapable of producing any usable output",
      "Extra units exist purely as unused spares with no active monitoring function",
    ],
    answer: 0,
    explain:
      "Carrying multiple independent inertial reference units means the aircraft isn't dependent on any single one - if a unit fails, others can continue supplying the needed data - and continuously comparing their outputs against each other helps the system detect if any individual unit's data has become unreliable, rather than trusting one source blindly.",
    reference: "Flight Management - Multiple IRS Redundancy",
  },
  {
    id: 7,
    system: "Navigation",
    q: "Why does a GPS/GNSS-based navigation system typically perform its own integrity monitoring, checking that enough satellites are in agreement, rather than simply trusting any single satellite signal?",
    options: [
      "A single faulty or degraded satellite signal could otherwise silently produce a misleading position, so cross-checking multiple satellites (and flagging when there aren't enough to do so reliably) protects against relying on bad data without warning",
      "Integrity monitoring is only a cosmetic feature with no real protective function",
      "GPS receivers cannot function at all unless every visible satellite is used simultaneously",
      "Integrity monitoring exists only to conserve battery power",
    ],
    answer: 0,
    explain:
      "Because a single degraded or faulty satellite signal could otherwise feed a plausible-looking but wrong position into the navigation solution without any obvious warning, GPS/GNSS integrity monitoring cross-checks the available satellites against each other and alerts the crew if there isn't enough redundant satellite geometry to reliably detect such a fault - rather than the system silently trusting whatever signals happen to be available.",
    reference: "Flight Management - GNSS Integrity Monitoring",
  },
  {
    id: 8,
    system: "Navigation",
    q: "Why might an automatic direction finder (ADF), an older style of radio navigation receiver, still be retained as a backup on some aircraft?",
    options: [
      "It can still be used with widely available non-directional beacons (NDBs), which remain in use in some regions and for some approach procedures even as newer navigation methods have become primary",
      "ADF is required to be the primary navigation method on all modern aircraft",
      "ADF equipment provides more accurate position information than GPS",
      "ADF has no remaining operational use anywhere in the world",
    ],
    answer: 0,
    explain:
      "Even though satellite and area navigation systems are now primary in most regions, non-directional beacons (NDBs) - which an ADF receiver is built to use - remain in service in various parts of the world and for some published procedures, so retaining ADF capability keeps the option of using those facilities available as a backup or where required.",
    reference: "Flight Management - ADF as a Backup Navigation Aid",
  },
  {
    id: 9,
    system: "Navigation",
    q: "What is the general benefit of overlaying weather radar returns on the navigation display, alongside the route and waypoints?",
    options: [
      "It lets the crew see hazardous weather in the same spatial context as their planned route, making it easier to judge whether and how much to deviate",
      "It replaces the need to ever look outside the aircraft",
      "It has no operational benefit over a completely separate, unrelated weather display",
      "It is used only to display terrain, never actual weather returns",
    ],
    answer: 0,
    explain:
      "Showing weather radar returns directly overlaid on the same display as the route and waypoints lets the crew judge the position and extent of hazardous weather relative to their actual flight path at a glance, making it much easier to plan and execute a sensible deviation than if weather and route information were shown on entirely separate, unrelated displays.",
    reference: "Flight Management - Weather Radar/Navigation Display Overlay",
  },
  {
    id: 10,
    system: "Navigation",
    q: "During an approach, what does a lateral deviation (course deviation) indication on the primary flight display generally show the pilot?",
    options: [
      "How far the aircraft is currently offset to the left or right of the intended lateral course, helping the pilot make timely corrections to stay on track",
      "The aircraft's current airspeed relative to the target approach speed",
      "The remaining distance to the destination in nautical miles",
      "The current outside air temperature",
    ],
    answer: 0,
    explain:
      "A lateral deviation indication gives the pilot a continuously updated, at-a-glance picture of how far off (left or right) the aircraft currently is from the intended course, letting corrections be made promptly and smoothly rather than needing to compare raw position data to a chart to figure out the current offset.",
    reference: "Flight Management - Lateral Deviation Indication",
  },
];
