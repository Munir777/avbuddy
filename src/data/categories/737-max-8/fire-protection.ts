import type { Question } from "../../../types";

// 737 MAX 8 - Fire Protection. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_FIRE_PROTECTION_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Fire Protection",
    q: "What is the general purpose of an engine fire extinguisher bottle system, and how are the bottles commonly arranged?",
    options: [
      "One or more bottles discharge a fire-suppressing agent into the engine nacelle/pylon area to smother a confirmed fire, and are often arranged so either bottle can be selected for either engine for redundancy",
      "The bottles exist purely as ballast and are never actually intended to discharge",
      "Each bottle can only ever be used once per aircraft's entire service life, regardless of maintenance",
      "The bottles supply cooling air to the engine, not fire suppressant",
    ],
    answer: 0,
    explain:
      "Engine fire extinguisher bottles are designed to flood the engine's fire zone (the nacelle/pylon area) with a suppressing agent once a fire is confirmed, and many aircraft arrange the bottles so either one can be selected to discharge into either engine - so losing use of one bottle doesn't necessarily mean losing fire suppression capability on both engines.",
    reference: "Fire Protection - Engine Fire Extinguishing",
  },
  {
    id: 2,
    system: "Fire Protection",
    q: "Why does APU fire protection often include a greater degree of automatic action than engine fire protection?",
    options: [
      "The APU compartment is often unattended in flight (with no cockpit crew member able to directly monitor it visually), so a higher degree of automatic shutdown/extinguishing response reduces reliance on manual crew action",
      "The APU is considered less important, so automation is used purely to save cost",
      "APU fires are physically impossible, so no protection is actually needed",
      "Automatic APU fire response was added only for cosmetic certification reasons",
    ],
    answer: 0,
    explain:
      "Because the APU compartment isn't directly observable in flight the way an engine might be, and the APU itself may be running unattended (for example, on the ground or as a backup source), fire protection logic for it commonly includes more automatic response - such as automatically shutting down the APU and/or discharging extinguishing agent on detecting a fire - rather than relying entirely on a manual crew-initiated response.",
    reference: "Fire Protection - APU Fire Protection",
  },
  {
    id: 3,
    system: "Fire Protection",
    q: "What is the general concept behind a cargo compartment fire suppression system, as opposed to a simple one-time extinguisher discharge?",
    options: [
      "After an initial discharge to knock down the fire, the system can meter a continued, lower-rate discharge of suppressing agent over an extended period to keep the fire suppressed for the remainder of the flight",
      "It is designed to discharge fully only once the aircraft has already landed",
      "It only detects smoke and has no ability to discharge any suppressing agent",
      "It automatically opens the cargo compartment to the outside atmosphere to vent smoke",
    ],
    answer: 0,
    explain:
      "Because a cargo fire may need to be kept under control for a long diversion rather than instantly and permanently extinguished, many cargo fire suppression systems are designed to deliver an initial higher-rate discharge followed by a slower, metered discharge that continues to suppress the fire over an extended period - buying time to reach a suitable diversion aerodrome.",
    reference: "Fire Protection - Cargo Compartment Fire Suppression",
  },
  {
    id: 4,
    system: "Fire Protection",
    q: "What is the general design purpose of a single engine fire handle/switch that, when pulled or activated, isolates multiple systems at once?",
    options: [
      "It lets the crew isolate fuel, hydraulic fluid, bleed air, and electrical power to that engine with one deliberate action, rather than requiring several separate switch selections during a time-critical emergency",
      "It is designed to shut down only the opposite, unaffected engine",
      "It has no functional effect and is a purely symbolic cockpit control",
      "It only isolates electrical power, with fuel and hydraulics shut off by a separate control",
    ],
    answer: 0,
    explain:
      "Combining the isolation of several relevant systems - fuel, hydraulic fluid, bleed air, and electrical power - into one deliberate fire-handle action reduces the number of individual selections the crew has to make correctly under the time pressure of an engine fire, cutting down on the chance of missing a critical isolation step.",
    reference: "Fire Protection - Engine Fire Switch/Handle",
  },
  {
    id: 5,
    system: "Fire Protection",
    q: "Why are dedicated fire/overheat detection loops also installed in areas such as wheel wells or the APU compartment, not just around the engines?",
    options: [
      "Because a fire or overheat condition can potentially develop in any defined fire zone of the aircraft, not only in the engines, so each such zone needs its own detection coverage",
      "Because wheel wells and the APU compartment are actually incapable of ever catching fire",
      "Because a single engine detection loop already automatically covers every other compartment on the aircraft",
      "Detection loops are installed in these areas purely for weight and balance reasons, with no detection function",
    ],
    answer: 0,
    explain:
      "Fire protection is generally designed around each defined fire zone of the aircraft - not just the engines - since overheat or fire conditions can develop wherever there's a meaningful ignition/fuel source, such as a wheel well (from an overheated brake) or the APU compartment, so each such zone gets its own dedicated detection coverage rather than relying on engine-area detection alone.",
    reference: "Fire Protection - Fire Zone Detection Coverage",
  },
];
