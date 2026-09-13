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
  {
    id: 6,
    system: "Fire Protection",
    q: "What is the general purpose of a fire detection/warning system test function that the crew can activate before flight?",
    options: [
      "It lets the crew confirm the detection and warning circuitry itself is functioning correctly, without needing an actual fire to verify it",
      "It permanently disables the fire detection system for the remainder of the flight once used",
      "It can only be performed by ground maintenance personnel, never the flight crew",
      "It has no real diagnostic function and exists purely as a checklist formality",
    ],
    answer: 0,
    explain:
      "A pre-flight fire detection/warning test lets the crew confirm that the detection loops and warning indications actually respond correctly, giving confidence the system will work if it's ever genuinely needed - rather than only discovering a fault in the wiring or indications during an actual fire.",
    reference: "Fire Protection - Fire Detection Test Function",
  },
  {
    id: 7,
    system: "Fire Protection",
    q: "In general terms, how does a fire extinguishing agent typically work to put out a fire, beyond simply cooling it?",
    options: [
      "Many agents work by displacing oxygen around the fire and/or interrupting the chemical chain reaction of combustion, not just by lowering temperature",
      "All extinguishing agents work exclusively by cooling, with no other mechanism involved",
      "Extinguishing agents work only by adding more fuel to burn the fire out faster",
      "Extinguishing agents function only in a vacuum with no atmosphere present",
    ],
    answer: 0,
    explain:
      "Beyond any cooling effect, many aviation fire extinguishing agents work by displacing the oxygen available to the fire and/or chemically interrupting the combustion reaction itself, both of which can stop a fire from sustaining itself even without dramatically lowering the surrounding temperature.",
    reference: "Fire Protection - Extinguishing Agent Mechanism",
  },
  {
    id: 8,
    system: "Fire Protection",
    q: "Why are engine fire zones generally designed with defined ventilation and drainage paths?",
    options: [
      "To prevent flammable fluids (such as fuel or oil from a leak) from pooling and accumulating in the fire zone, which would otherwise increase fire risk and severity",
      "Ventilation and drainage exist purely to reduce engine noise",
      "They exist only to cool the fire zone in cold weather",
      "Fire zones are deliberately sealed with no ventilation or drainage at all",
    ],
    answer: 0,
    explain:
      "If a flammable fluid leak (fuel, oil, or hydraulic fluid) were allowed to simply pool inside an engine fire zone, it would significantly raise the risk and potential severity of a fire; defined ventilation and drainage paths are designed in specifically to carry such fluids away rather than letting them accumulate.",
    reference: "Fire Protection - Fire Zone Ventilation & Drainage",
  },
  {
    id: 9,
    system: "Fire Protection",
    q: "Why is a fire detection system generally required to respond within a defined, tested time limit, rather than simply being judged on whether it eventually detects a fire?",
    options: [
      "A fire left undetected for too long can grow far more dangerous, so the system's actual response speed - not just its eventual ability to detect - is what makes it operationally useful",
      "Response time has no bearing on how useful a fire detection system actually is",
      "A slower detection response is always preferred to avoid false alarms",
      "This requirement applies only to smoke detectors, never to fire/overheat loops",
    ],
    answer: 0,
    explain:
      "A fire that grows for an extended period before being detected is far more dangerous and harder to control than one caught early, so fire detection systems are validated against a defined response-time requirement - being correct only eventually isn't good enough if it comes too late to matter operationally.",
    reference: "Fire Protection - Detection Response Time",
  },
  {
    id: 10,
    system: "Fire Protection",
    q: "After successfully discharging an extinguishing agent into an engine and seeing the fire indication clear, what is a generally sensible crew consideration?",
    options: [
      "Continue monitoring closely for any sign of re-ignition, and be aware of how much extinguishing agent (if any) remains available should a second discharge be needed",
      "Immediately disregard the engine entirely, since a fire indication clearing means no further monitoring is needed",
      "Restart the affected engine right away regardless of the fire history",
      "Assume the fire warning system itself is now permanently unreliable",
    ],
    answer: 0,
    explain:
      "A fire indication clearing after extinguishing agent discharge is a good sign, but it doesn't guarantee the fire can't reignite, so continued monitoring remains important - along with being aware of remaining extinguishing capacity, since a second bottle (where fitted) may be needed if the first discharge doesn't fully resolve the situation.",
    reference: "Fire Protection - Post-Extinguishing Monitoring",
  },
  {
    id: 11,
    system: "Fire Protection",
    q: "Why have many aviation fire extinguishing agents shifted away from older halon-based agents toward alternative agents in newer designs?",
    options: [
      "Certain halon agents have environmental concerns (such as ozone-depletion potential), prompting the development and adoption of alternative agents with similar firefighting effectiveness but a better environmental profile",
      "Halon agents were replaced because they were completely ineffective at extinguishing any fire",
      "The shift occurred only because halon agents were more expensive with no other consideration",
      "There has been no shift away from halon agents in aviation at any point",
    ],
    answer: 0,
    explain:
      "Some traditional halon fire extinguishing agents have recognized environmental concerns, including ozone-depletion potential, which has driven ongoing efforts across the industry to develop and adopt alternative agents that still provide effective fire suppression while reducing that environmental impact.",
    reference: "Fire Protection - Halon to Alternative Agent Shift",
  },
  {
    id: 12,
    system: "Fire Protection",
    q: "Why might cargo compartments be classified into different categories (such as by accessibility and level of built-in fire protection) rather than being treated identically?",
    options: [
      "The level of fire risk and the practicality of crew access differ between compartment types, so the required detection and suppression equipment is matched to each compartment's specific risk and accessibility",
      "All cargo compartments are always treated as functionally identical with no distinction",
      "Classification is based only on which compartment is largest by volume",
      "It is done purely for weight and balance labeling with no fire-protection basis",
    ],
    answer: 0,
    explain:
      "Cargo compartments vary in how accessible they are to the crew in flight and in the kind of fire risk they present, so classifying them accordingly lets detection and suppression requirements be matched appropriately - a compartment that's inaccessible to the crew in flight, for example, generally needs a more self-sufficient built-in detection and suppression capability than one the crew can reach directly.",
    reference: "Fire Protection - Cargo Compartment Classification",
  },
  {
    id: 13,
    system: "Fire Protection",
    q: "Why is a smoke detector's alert threshold generally tuned carefully, rather than set to trigger on the smallest possible amount of smoke?",
    options: [
      "Setting the threshold too sensitively risks frequent nuisance alarms from routine sources (like a passenger's vaping or ordinary aerosol use), which could erode crew confidence in genuine warnings",
      "Threshold tuning has no effect on how often nuisance alarms occur",
      "A more sensitive threshold is always better with no operational tradeoff",
      "Smoke detectors are never adjustable and use a single universal threshold across all installations",
    ],
    answer: 0,
    explain:
      "If a smoke detector's threshold were set to react to the smallest conceivable trace of smoke, it would likely trigger frequently from routine, non-hazardous sources, and frequent nuisance alarms risk eroding crew trust and urgency in responding to a real warning; tuning the threshold balances catching genuine fires promptly against not crying wolf too often.",
    reference: "Fire Protection - Smoke Detector Alert Threshold",
  },
  {
    id: 14,
    system: "Fire Protection",
    q: "How can maintenance personnel generally check that a fire extinguisher bottle is still serviceable (properly charged) without discharging it?",
    options: [
      "By checking indications such as the bottle's pressure gauge/pressure switch and the condition of its discharge cartridge, which reflect whether it remains properly charged and ready to fire",
      "The only way to check serviceability is to actually discharge the bottle and observe the result",
      "Serviceability cannot be determined by any means short of full disassembly of the aircraft",
      "Bottles never need any serviceability checks once installed",
    ],
    answer: 0,
    explain:
      "Fire extinguisher bottles are typically fitted with a pressure indication (a gauge or pressure switch reflecting whether the bottle is still properly charged) and a discharge cartridge whose condition can be checked, letting maintenance confirm the bottle remains serviceable and ready to fire without needing to actually discharge it to find out.",
    reference: "Fire Protection - Fire Bottle Serviceability Check",
  },
  {
    id: 15,
    system: "Fire Protection",
    q: "Why is a fire extinguisher bottle discharge (even a successful one that stops the fire) generally followed by a maintenance logging/inspection requirement?",
    options: [
      "A discharge means that bottle's protection is now used up and the affected system needs to be inspected for damage, so recording and following up on the event ensures the aircraft isn't returned to service with reduced fire protection or unaddressed damage",
      "Logging is done purely for historical record-keeping with no bearing on airworthiness",
      "No follow-up action is ever required after a successful fire bottle discharge",
      "The requirement applies only if the discharge failed to extinguish the fire",
    ],
    answer: 0,
    explain:
      "Once a fire extinguisher bottle has discharged, that bottle's protection capacity is used up and needs to be recharged or replaced, and the area where the fire occurred generally needs inspection for damage from the fire and the extinguishing agent itself - so a maintenance logging and follow-up requirement makes sure the aircraft isn't returned to service with reduced fire protection or unassessed damage left unaddressed.",
    reference: "Fire Protection - Post-Discharge Maintenance Requirement",
  },
];
