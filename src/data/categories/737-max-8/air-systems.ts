import type { Question } from "../../../types";

// 737 MAX 8 - Air Systems (bleed air, packs, pressurization, anti-ice).
// Original, independently-written questions based on general/public
// 737-family systems knowledge (not sourced from any operator-specific or
// manufacturer-proprietary document) - no company, airline, publisher, or
// person names.
export const B737_AIR_SYSTEMS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Air Systems",
    q: "Engine bleed air for the pneumatic system is generally tapped from which compressor stages, and how is the source generally selected?",
    options: [
      "From an intermediate and a high-pressure compressor stage on each engine, with the system automatically selecting whichever stage is appropriate for current engine power",
      "From the turbine exhaust section only, regardless of engine power setting",
      "From a single fixed compressor stage with no automatic switching at all",
      "Bleed air is never taken from the engines, only from the APU",
    ],
    answer: 0,
    explain:
      "The pneumatic system typically taps bleed air from both an intermediate and a high-pressure compressor stage on each engine, and automatically selects between them (favoring the intermediate stage where its pressure is sufficient, and switching to the high-pressure stage as needed) so adequate bleed air pressure is available across the full range of engine power settings.",
    reference: "Air Systems - Engine Bleed Air Sources",
  },
  {
    id: 2,
    system: "Air Systems",
    q: "What is the general function of the air conditioning 'packs' fed by bleed air?",
    options: [
      "They cool and condition hot, high-pressure bleed air through an air cycle machine before it is distributed to the cabin and flight deck",
      "They exist solely to heat the cabin, with no cooling function at all",
      "They generate electrical power directly from bleed air",
      "They are used only to pressurize the hydraulic reservoirs",
    ],
    answer: 0,
    explain:
      "The packs take hot, high-pressure bleed air and pass it through an air cycle machine (using expansion and heat exchange rather than a vapor-compression refrigerant cycle) to cool and condition it before it's distributed as conditioned air to the cabin and flight deck.",
    reference: "Air Systems - Air Conditioning Packs",
  },
  {
    id: 3,
    system: "Air Systems",
    q: "How is cabin pressurization generally controlled in normal operation, and what backup exists if that fails?",
    options: [
      "A dedicated automatic cabin pressure controller normally schedules cabin altitude throughout the flight, with a manual mode available for the crew to control the outflow valve directly if the automatic mode fails",
      "Cabin pressure is fixed at one value for the entire flight with no scheduling at all",
      "There is no backup; pressurization control is lost entirely if the automatic controller fails",
      "The crew must always control pressurization manually, with no automatic mode available",
    ],
    answer: 0,
    explain:
      "Normal operation relies on an automatic cabin pressure controller that schedules cabin altitude appropriately for the flight profile, but a manual backup mode lets the crew directly command the outflow valve position themselves if the automatic control function is lost.",
    reference: "Air Systems - Cabin Pressure Control",
  },
  {
    id: 4,
    system: "Air Systems",
    q: "How is wing leading-edge anti-ice typically provided on this type?",
    options: [
      "Hot bleed air is ducted to the wing leading edge slats to prevent or remove ice accumulation",
      "Small electrical heating elements are the only method used on the wing leading edge",
      "Wing anti-ice is provided by a chemical fluid spray system only",
      "The wing leading edge has no anti-ice protection of any kind",
    ],
    answer: 0,
    explain:
      "Wing leading-edge (slat) anti-ice on this type is typically provided thermally, by ducting hot bleed air from the pneumatic system to the affected leading-edge surfaces to prevent ice from forming or to remove it once formed - a common approach on bleed-air-equipped jet transports.",
    reference: "Air Systems - Wing Anti-Ice",
  },
  {
    id: 5,
    system: "Air Systems",
    q: "What is the general purpose of cabin air recirculation fans, used alongside bleed-air-sourced fresh air?",
    options: [
      "They recirculate a portion of existing cabin air, mixing it with fresh conditioned air to maintain airflow while reducing the total bleed air demand placed on the engines",
      "They exist solely to remove all cabin air with no fresh air ever supplied",
      "They pressurize the hydraulic reservoirs using cabin air",
      "They are used only during ground operations and are disabled for the entire flight",
    ],
    answer: 0,
    explain:
      "Recirculation fans take a portion of the cabin's existing (filtered) air and mix it back in with fresh, bleed-air-sourced conditioned air, which maintains good total airflow through the cabin while reducing how much fresh bleed air the engines need to supply - improving engine efficiency compared with using 100% fresh bleed air throughout the flight.",
    reference: "Air Systems - Cabin Air Recirculation",
  },
];
