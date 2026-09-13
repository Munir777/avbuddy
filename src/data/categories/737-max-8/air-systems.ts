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
  {
    id: 6,
    system: "Air Systems",
    q: "What is the general purpose of a cabin pressurization negative-relief valve?",
    options: [
      "It prevents outside pressure from exceeding cabin pressure by an unsafe amount (a 'negative' differential), which could otherwise damage the fuselage structure or cabin fittings",
      "It caps the maximum positive cabin pressure differential, protecting against over-pressurization",
      "It controls cabin temperature rather than pressure",
      "It has no protective function and is purely decorative",
    ],
    answer: 0,
    explain:
      "A negative-relief valve opens automatically to admit outside air into the cabin if outside pressure would otherwise exceed cabin pressure by more than a safe margin - protecting the fuselage structure (which is generally designed for pressure differential in one direction) from being pushed the 'wrong way.'",
    reference: "Air Systems - Negative Pressure Relief Valve",
  },
  {
    id: 7,
    system: "Air Systems",
    q: "What is the general purpose of a positive pressure relief valve on the cabin?",
    options: [
      "It automatically vents excess air if cabin pressure differential would otherwise exceed a safe maximum, protecting the fuselage from over-pressurization",
      "It is the same component as the negative-relief valve, just under a different name",
      "It only operates while the aircraft is on the ground",
      "It controls how much fresh air enters the cabin during normal cruise",
    ],
    answer: 0,
    explain:
      "A positive pressure relief valve is a safety backup that automatically opens to vent air overboard if the cabin-to-outside pressure differential would otherwise climb beyond its safe maximum - protecting the fuselage structure even if the normal pressure controller and outflow valve failed to limit it themselves.",
    reference: "Air Systems - Positive Pressure Relief Valve",
  },
  {
    id: 8,
    system: "Air Systems",
    q: "What is the general purpose of a dedicated equipment cooling system for avionics/electronics compartments?",
    options: [
      "It circulates cooling air specifically to electronic equipment bays, removing the heat that densely packed avionics generate, separate from cabin air conditioning",
      "It is simply another name for the cabin air conditioning packs",
      "It exists only to warm avionics equipment in cold weather",
      "It has no distinct function separate from wing anti-ice",
    ],
    answer: 0,
    explain:
      "Densely packed electronic equipment generates significant heat that needs to be continuously removed to keep it operating reliably, so a dedicated equipment cooling system circulates air specifically through avionics bays - a distinct function from the cabin air conditioning system, even though both may draw from related sources of air.",
    reference: "Air Systems - Equipment Cooling",
  },
  {
    id: 9,
    system: "Air Systems",
    q: "What is a general purpose of cargo compartment heating/ventilation?",
    options: [
      "It keeps the cargo compartment within an acceptable temperature range, which matters both for temperature-sensitive cargo and for compartments that may carry live animals",
      "It exists solely to pressurize the hydraulic reservoirs",
      "Cargo compartments are never heated or ventilated on any aircraft",
      "It is used only to cool the engines during ground operations",
    ],
    answer: 0,
    explain:
      "Cargo compartment heating/ventilation keeps the compartment within a reasonable temperature range in flight, which matters for temperature-sensitive cargo and is particularly important in compartments approved to carry live animals, rather than leaving the compartment to passively follow the very cold temperatures found at cruise altitude.",
    reference: "Air Systems - Cargo Compartment Heating",
  },
  {
    id: 10,
    system: "Air Systems",
    q: "Why does cabin altitude typically change more gradually than the aircraft's actual altitude during climb and descent, rather than matching it directly?",
    options: [
      "The cabin pressure controller deliberately schedules cabin altitude to change at a comfortable, limited rate, protecting passenger and crew ears/comfort rather than tracking the aircraft's often much faster rate of altitude change",
      "Cabin altitude is completely unrelated to aircraft altitude and changes on its own arbitrary schedule",
      "The outflow valve is physically incapable of responding quickly to changes in aircraft altitude",
      "Cabin altitude actually changes faster than aircraft altitude during climb, not slower",
    ],
    answer: 0,
    explain:
      "The cabin pressure controller deliberately limits how quickly cabin altitude changes - well within what the aircraft's actual rate of climb or descent might otherwise demand - so passengers and crew experience a much gentler pressure change on their ears than the aircraft's own often much faster climb or descent rate would produce if cabin altitude tracked it directly.",
    reference: "Air Systems - Cabin Rate of Change",
  },
  {
    id: 11,
    system: "Air Systems",
    q: "What is the general purpose of a bleed air isolation valve between the left and right sides of the pneumatic system?",
    options: [
      "It lets the crew separate the two sides of the pneumatic system, for example to stop a leak or contamination on one side from affecting the other, or to isolate a failed source",
      "It permanently joins both sides together with no ability to separate them",
      "It controls hydraulic pressure rather than bleed air",
      "It has no function and exists only as a manufacturing artifact",
    ],
    answer: 0,
    explain:
      "An isolation valve gives the crew the ability to split the pneumatic system into independent left and right sides - useful for containing a leak, duct fault, or contamination event to one side, or for isolating a failed bleed air source while still supplying the rest of the system from the other side.",
    reference: "Air Systems - Bleed Isolation Valve",
  },
  {
    id: 12,
    system: "Air Systems",
    q: "Why are bleed air ducts typically fitted with duct leak/overheat detection along their length?",
    options: [
      "A leaking or overheating duct carries hot, high-pressure air that could damage surrounding structure or systems, so detecting it early lets the crew isolate that duct before more serious damage occurs",
      "Duct temperature has no bearing on aircraft safety",
      "Detection exists purely to monitor cabin comfort, not duct integrity",
      "It is required only for ducts located inside the passenger cabin",
    ],
    answer: 0,
    explain:
      "Bleed air ducts carry air that is both hot and under significant pressure, so a leak or overheat condition along the duct run could damage nearby structure, wiring, or other systems if left unaddressed; dedicated detection along the duct's length lets the crew get an early alert and isolate the affected duct before the damage becomes severe.",
    reference: "Air Systems - Duct Leak/Overheat Detection",
  },
  {
    id: 13,
    system: "Air Systems",
    q: "What is the general purpose of a ground air connection point on the pneumatic system?",
    options: [
      "It lets an external ground air cart supply conditioned or high-pressure air to the aircraft, for cabin conditioning or engine starting, without needing the APU or main engines running",
      "It can only be used to remove air from the aircraft, never supply it",
      "It functions only once the aircraft is airborne",
      "It replaces the need for any onboard bleed air system entirely",
    ],
    answer: 0,
    explain:
      "A ground air connection lets the aircraft take conditioned or high-pressure air from an external ground cart, which can be used for cabin air conditioning during ground servicing or to assist an engine start, giving an alternative to relying on the APU or a running main engine for that air.",
    reference: "Air Systems - Ground Air Cart Connection",
  },
  {
    id: 14,
    system: "Air Systems",
    q: "What is the general purpose of separate cabin temperature zone controls, rather than one single cabin-wide temperature setting?",
    options: [
      "Different areas of the cabin (and the flight deck) can have different heating/cooling needs due to factors like sun exposure, occupancy, or equipment heat load, so zone control lets each area be conditioned to a more appropriate temperature",
      "Zone control exists only to control cabin lighting, not temperature",
      "Only the flight deck can ever have its own temperature setting; the cabin is always uniform",
      "It has no real effect since all zones are always held at exactly the same temperature",
    ],
    answer: 0,
    explain:
      "Different zones of the aircraft - forward cabin, aft cabin, flight deck - can have different heating or cooling needs based on things like sun load, passenger occupancy density, or equipment heat generation, so allowing each zone some independent temperature control lets the conditioning better match the actual needs of each area rather than forcing one setting on the whole aircraft.",
    reference: "Air Systems - Cabin Temperature Zone Control",
  },
  {
    id: 15,
    system: "Air Systems",
    q: "What is the general purpose of a ram air system as a backup source of ventilation air?",
    options: [
      "It can bring in outside air directly through an inlet, using the aircraft's forward speed, to provide at least basic ventilation if normal bleed-air-based air conditioning is lost",
      "It is the primary source of all cabin air under normal operation",
      "It generates hydraulic power rather than providing air",
      "It functions only while the aircraft is parked on the ground",
    ],
    answer: 0,
    explain:
      "A ram air inlet can admit outside air into the cabin ventilation system using the aircraft's own forward motion, without depending on bleed air or the packs - giving the crew a basic, unconditioned but functional source of ventilation air as a backup if the normal bleed-air-based air conditioning system is unavailable.",
    reference: "Air Systems - Ram Air Backup Ventilation",
  },
];
