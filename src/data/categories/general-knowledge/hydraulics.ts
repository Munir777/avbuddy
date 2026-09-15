import type { Question } from "../../../types";

// ATPL General Knowledge - Hydraulics. Original questions written from
// general, widely-published aircraft hydraulic systems knowledge, not
// copied verbatim from any single source. No company, brand, or publisher
// names appear anywhere below.
export const ATPL_HYDRAULICS_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "A Ram Air Turbine (RAT) that drives a hydraulic pump is typically provided on transport aircraft to supply emergency power for:",
    options: [
      "Flight controls, in the event the normal engine-driven hydraulic pumps are lost",
      "Flap extension only",
      "Landing gear extension only, if the normal system fails",
      "Nose wheel steering only",
    ],
    answer: 0,
    explain:
      "A RAT is a small propeller-driven turbine that deploys into the airstream to generate emergency hydraulic (and often electrical) power when normal engine-driven sources are lost. Its primary purpose is keeping flight controls operable, since loss of all hydraulic control authority is a much more urgent problem than losing gear or flap actuation.",
    reference: "Hydraulics - Ram Air Turbine",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "Desirable characteristics of an aircraft hydraulic fluid generally include:",
    options: [
      "Thermal stability, anti-corrosive properties, and a high flash point",
      "Thermal stability, high compressibility, and high volatility",
      "Anti-corrosive properties, a high flash point, and high compressibility",
      "Thermal stability, anti-corrosive properties, and high volatility",
    ],
    answer: 0,
    explain:
      "A good aircraft hydraulic fluid needs to remain stable across a wide temperature range, resist corroding system components, and have a high flash point for fire safety - it should also be as close to incompressible as practical (not highly compressible) and have low, not high, volatility, so as not to boil off or lose viscosity in service.",
    reference: "Hydraulics - Hydraulic Fluid Properties",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "The purpose of a hydraulic fuse fitted in a system line, such as one feeding a wheel brake unit, is to:",
    options: [
      "Prevent loss of system fluid if the line downstream of the fuse should rupture",
      "Allow a deliberately reduced pressure to the brakes to avoid locking the wheels",
      "Prevent over-pressurizing the reservoir as altitude increases",
      "Allow the parking brake to remain set overnight without leaking down",
    ],
    answer: 0,
    explain:
      "A hydraulic fuse senses an abnormally high flow rate through it - as would occur if the line downstream ruptured - and shuts off flow through that line, preventing the rest of the system from losing all its fluid through the break while isolating only the affected branch.",
    reference: "Hydraulics - Hydraulic Fuses",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "The type of hydraulic fluid generally used in modern jet airliners is:",
    options: [
      "A synthetic fluid",
      "A mineral-based fluid",
      "A vegetable-based fluid",
      "A mineral/alcohol blend",
    ],
    answer: 0,
    explain:
      "Modern jet transport aircraft generally use a synthetic (phosphate-ester based) hydraulic fluid rather than a mineral-oil-based fluid, chiefly because synthetic fluid has a much higher fire resistance - an important safety property given how close hydraulic lines often run to hot engine or brake components.",
    reference: "Hydraulics - Hydraulic Fluid Type",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "A shuttle valve in an aircraft hydraulic system will generally:",
    options: [
      "Automatically switch a component to a more appropriate (usually alternate or emergency) source of hydraulic supply when the normal source pressure is lost",
      "Allow the accumulator to empty automatically after engine shutdown",
      "Reduce pump loading once normal system pressure has been reached",
      "Operate only on a rising pressure higher than the full-flow relief valve setting",
    ],
    answer: 0,
    explain:
      "A shuttle valve sits between two possible hydraulic sources feeding the same component (for example, normal and emergency/alternate brake systems) and automatically shifts to whichever source currently has the higher available pressure - so if the normal source fails, the valve shuttles across to feed the component from the alternate source instead.",
    reference: "Hydraulics - Shuttle Valves",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "Aircraft hydraulic reservoirs are commonly pressurized using:",
    options: [
      "Engine bleed air",
      "Ram air, but only while airborne",
      "A separate dedicated helium gas system",
      "Air tapped from the cabin air conditioning system",
    ],
    answer: 0,
    explain:
      "Reservoirs are commonly pressurized with regulated engine bleed air, which provides positive pressure at the pump inlet across the full altitude range - helping ensure the pump receives fluid without cavitating, particularly important for pumps mounted high or operating during rapid altitude changes.",
    reference: "Hydraulics - Reservoir Pressurization",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "In a modern jet airliner using synthetic (phosphate-ester) hydraulic fluid, the fluid's color is typically:",
    options: [
      "Purple",
      "Yellow",
      "Pink",
      "Red",
    ],
    answer: 0,
    explain:
      "Modern synthetic phosphate-ester hydraulic fluid, widely used on jet transport aircraft, is characteristically dyed purple - distinguishing it visually from mineral-based fluids (often red) that were more common on older or smaller aircraft, helping avoid the two fluid types being mixed.",
    reference: "Hydraulics - Hydraulic Fluid Identification",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "The hydraulic system pressure typically used on large transport aircraft falls in the region of:",
    options: [
      "3000 to 4000 psi",
      "1000 to 2000 psi",
      "2000 to 3000 psi",
      "4000 to 5000 psi",
    ],
    answer: 0,
    explain:
      "Large transport aircraft hydraulic systems commonly operate around 3000 psi (with some more modern designs running higher still), a level that provides enough force for large flight control surfaces, landing gear, and brakes while keeping component size and weight manageable.",
    reference: "Hydraulics - System Operating Pressure",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "Hydraulic fluid, as a general safety hazard, is best described as:",
    options: [
      "Harmful to eyes and skin, and also a fire hazard",
      "A fire hazard, but with no particular effect on eyes or skin",
      "Requiring no special handling precautions",
      "Harmful to eyes and skin, but not a fire hazard",
    ],
    answer: 0,
    explain:
      "Aircraft hydraulic fluid is both an irritant/hazard to eyes and skin on contact and, being an oil-based fluid handled at high pressure and temperature near hot components, a genuine fire hazard - both properties are the reason maintenance personnel handle it with protective equipment and strict care around ignition sources.",
    reference: "Hydraulics - Hydraulic Fluid Hazards",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "The purposes of an accumulator in an aircraft hydraulic system are generally to:",
    options: [
      "Damp pressure fluctuations in the system and serve as a limited alternate source of pressure",
      "Cool the hydraulic fluid and serve as a limited alternate source of pressure",
      "Cool the hydraulic fluid and serve as the main pressure source for normal operation",
      "Damp pressure fluctuations and serve as the main pressure source for normal operation",
    ],
    answer: 0,
    explain:
      "An accumulator - a gas-charged, spring-loaded chamber holding a reserve of pressurized fluid - smooths out pressure fluctuations from pump cycling and system demand changes, and provides a limited, temporary reserve of pressure (for example, for parking brake application or a set number of emergency brake applications) when the main pump is not running or has failed.",
    reference: "Hydraulics - Hydraulic Accumulators",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Hydraulics",
    q: "The purpose of hydraulically powered actuators in a fully powered (irreversible) flight control system is to:",
    options: [
      "Convert hydraulic pressure directly into control surface movement",
      "Operate a set of control valves, which then move the control surfaces mechanically",
      "Convert hydraulic pressure into control column movement, with the surfaces moved separately",
      "Serve no real function, since fully powered systems do not use actuators",
    ],
    answer: 0,
    explain:
      "In a fully powered flight control system, the pilot's control inputs move a control valve that meters hydraulic fluid to a power actuator; that actuator is what actually converts hydraulic pressure into the physical movement of the control surface itself, since aerodynamic loads on modern high-speed aircraft are far too great to move the surfaces by muscle power alone.",
    reference: "Hydraulics - Powered Flight Control Actuators",
  },
];
