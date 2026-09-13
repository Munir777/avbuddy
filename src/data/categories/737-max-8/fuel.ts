import type { Question } from "../../../types";

// 737 MAX 8 - Fuel system. Original, independently-written questions based
// on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_FUEL_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Fuel",
    q: "In general terms, how is fuel commonly stored across the airframe on this type?",
    options: [
      "In a left and a right main wing tank, plus a center tank in the fuselage/wing center section when fitted",
      "In a single tank located entirely within the fuselage, with none in the wings",
      "In four independent wing tanks per side, with no center tank ever fitted",
      "Fuel is carried only in removable external tanks",
    ],
    answer: 0,
    explain:
      "This class of twin-engine airliner typically carries fuel in a left and right main wing tank, with an additional center tank in the fuselage/wing center section on most variants to extend total capacity beyond what the wings alone can hold.",
    reference: "Fuel - General/Description",
  },
  {
    id: 2,
    system: "Fuel",
    q: "What is the general purpose of a fuel crossfeed valve?",
    options: [
      "It allows fuel from either main tank to be supplied to either engine, which is useful for correcting a fuel imbalance or feeding both engines from one tank if a boost pump fails",
      "It permanently joins both main tanks into a single tank with no ability to isolate them",
      "It is used only to transfer fuel to the APU, never to an engine",
      "It has no operational use and exists purely as a manufacturing artifact",
    ],
    answer: 0,
    explain:
      "Opening the crossfeed valve connects the two main tank feed systems, so either tank can supply either engine - useful for deliberately correcting a lateral fuel imbalance, or for keeping both engines fed from a single good tank if pumps in the other tank have failed.",
    reference: "Fuel - Crossfeed System",
  },
  {
    id: 3,
    system: "Fuel",
    q: "When a center tank is fitted and contains fuel, why is it typically used before the wing main tanks are drawn down?",
    options: [
      "Center tank pumps are generally set to output a higher pressure than the main tank pumps, so center tank fuel is automatically drawn first without any crew selection needed",
      "The center tank must always be manually selected first by the crew before any main tank fuel can be used",
      "Center tank fuel is chemically different and must be burned before it degrades",
      "The main tanks are physically incapable of supplying fuel until the center tank is empty",
    ],
    answer: 0,
    explain:
      "Center tank fuel pumps are typically set to a higher output pressure than the main tank pumps, so as long as the center tank has fuel and its pumps are running, that higher pressure automatically overrides the main tank pumps at the shared feed point - meaning center tank fuel is used first with no manual tank-selection needed.",
    reference: "Fuel - Feed System Priority",
  },
  {
    id: 4,
    system: "Fuel",
    q: "If the electric fuel boost pumps in a tank all fail, can the engine on that side still get fuel?",
    options: [
      "Often yes, through suction feed - the engine-driven fuel pump can draw fuel from the tank without boost pump pressure, though usually with an altitude restriction",
      "No - without boost pump pressure, no fuel can reach the engine under any circumstances",
      "Only if the APU is shut down first",
      "Only if the landing gear is extended",
    ],
    answer: 0,
    explain:
      "Many transport jets are designed so the engine-driven fuel pump can suction-feed fuel from the tank even with all electric boost pumps failed, though this capability is normally limited to below a defined maximum altitude in the approved procedures, since suction feed becomes less reliable as ambient pressure drops.",
    reference: "Fuel - Suction Feed",
  },
  {
    id: 5,
    system: "Fuel",
    q: "Many smaller narrow-body twin-jets of this class do not have a fuel jettison (dump) system at all. Why is that generally acceptable?",
    options: [
      "Their maximum landing weight is close enough to their maximum takeoff weight that burning down fuel (or simply holding, if enough remains) is normally sufficient to get to a safe landing weight",
      "Regulations exempt all twin-engine aircraft from ever needing a way to reduce weight before landing",
      "These aircraft are incapable of landing overweight under any circumstances",
      "Jettisoning fuel is always illegal regardless of aircraft type",
    ],
    answer: 0,
    explain:
      "A fuel jettison system is primarily justified when an aircraft's maximum takeoff weight is far above its maximum landing weight, since that gap has to be closed quickly in an emergency; many smaller narrow-body twin-jets have a small enough gap between the two (or can dispatch at a low enough weight) that burning down fuel, or simply landing overweight within a permitted overweight-landing allowance, covers the need without requiring a dedicated dump system.",
    reference: "Fuel - Jettison System (Absence On This Class Of Aircraft)",
  },
  {
    id: 6,
    system: "Fuel",
    q: "Why does the fuel system generally include a low fuel temperature limitation for flight at altitude?",
    options: [
      "At very low temperatures, fuel can begin to gel or form wax/ice crystals that could restrict fuel flow, so a minimum fuel temperature is defined to stay well clear of that risk",
      "Fuel temperature has no effect on flow characteristics at any temperature",
      "The limitation exists only to prevent the fuel from evaporating too quickly",
      "Low fuel temperature is a concern only on the ground, never at cruise altitude",
    ],
    answer: 0,
    explain:
      "Fuel that gets too cold can begin to form wax crystals or gel, which could restrict its flow through filters and lines at exactly the wrong time; a minimum fuel temperature limitation (monitored via a fuel temperature indication) keeps the crew aware of margin above that risk, especially on long flights at cold cruise altitudes.",
    reference: "Fuel - Minimum Fuel Temperature",
  },
  {
    id: 7,
    system: "Fuel",
    q: "How does a capacitance-type fuel quantity indicating system generally measure how much fuel is in a tank?",
    options: [
      "Fuel quantity probes sense a change in electrical capacitance that varies depending on how much fuel (versus air) surrounds them, which the system converts into a quantity reading",
      "It relies entirely on a simple mechanical float and needle, with no electronic sensing at all",
      "It measures fuel weight by weighing the entire aircraft",
      "It uses sonar-like sound pulses bounced off the fuel surface",
    ],
    answer: 0,
    explain:
      "Capacitance-type fuel probes work because fuel and air have different electrical properties; as the fuel level around a probe changes, so does the capacitance the system measures, and that changing capacitance is converted into a corresponding fuel quantity reading - allowing quantity to be measured without moving parts inside the tank.",
    reference: "Fuel - Fuel Quantity Indicating System",
  },
  {
    id: 8,
    system: "Fuel",
    q: "What is the general advantage of single-point pressure refueling, as commonly used on this class of aircraft?",
    options: [
      "It lets ground crew refuel all tanks from one connection point, under pressure, rather than needing to access and fill each tank individually from the top",
      "It only allows one specific tank to ever be filled, with the others inaccessible",
      "It removes fuel from the aircraft rather than adding it",
      "It requires the engines to be running throughout the refueling process",
    ],
    answer: 0,
    explain:
      "Single-point pressure refueling lets ground crew connect at one location and refuel all the tanks (in the correct sequence/proportions) under pressure, which is considerably faster and simpler than needing separate access points and open filling for each individual tank.",
    reference: "Fuel - Single-Point Pressure Refueling",
  },
  {
    id: 9,
    system: "Fuel",
    q: "Why does the fuel system generally include a means of removing water that collects at the bottom of a tank?",
    options: [
      "Water is denser than fuel and settles at the bottom, and if left to accumulate it can be drawn into the engine feed or, at altitude, freeze and cause a blockage",
      "Water in a fuel tank has no effect on engine operation",
      "It is done purely to reduce the aircraft's overall weight",
      "The fuel system cannot contain any water under any circumstances, making removal unnecessary",
    ],
    answer: 0,
    explain:
      "Water that gets into a fuel tank (from condensation or contamination) is denser than fuel and settles at the bottom near the tank outlets, where it risks being drawn into the fuel feed or freezing into ice at cold cruise temperatures and restricting flow - so tanks include drains and/or scavenge provisions specifically to remove that accumulated water.",
    reference: "Fuel - Water Removal",
  },
  {
    id: 10,
    system: "Fuel",
    q: "What is the general purpose of a fuel tank vent system?",
    options: [
      "It keeps the tank open to outside/ambient pressure so pressure inside the tank stays equalized as fuel is used or as it expands and contracts with temperature",
      "It is used to jettison fuel overboard in an emergency",
      "It pressurizes the fuel tank to a fixed value well above ambient",
      "It has no function once the tank is initially filled",
    ],
    answer: 0,
    explain:
      "A fuel tank vent system keeps the tank's internal air space connected to outside ambient pressure, so as fuel is used (reducing liquid volume) or as temperature changes cause the fuel and vapor to expand or contract, the tank pressure stays equalized rather than building up a harmful positive or negative pressure inside a sealed structure.",
    reference: "Fuel - Tank Venting",
  },
  {
    id: 11,
    system: "Fuel",
    q: "What is the general purpose of a manual drip-stick (or magnetic dripstick) fuel measurement, alongside the electronic fuel quantity indicating system?",
    options: [
      "It provides an independent, purely mechanical way to physically verify fuel quantity in a tank, useful for cross-checking or if the electronic system's reading is in doubt",
      "It replaces the need for any electronic fuel quantity indication at all",
      "It measures fuel temperature rather than quantity",
      "It can only be used while the aircraft is in flight",
    ],
    answer: 0,
    explain:
      "A manual drip-stick (or similar mechanical dipstick-type) measurement lets ground personnel physically verify how much fuel is actually in a tank, independent of the electronic fuel quantity indicating system - a useful cross-check if the electronic reading looks suspect or needs independent confirmation.",
    reference: "Fuel - Manual Drip-Stick Cross-Check",
  },
  {
    id: 12,
    system: "Fuel",
    q: "What is the general purpose of a fuel filter bypass indication?",
    options: [
      "It alerts the crew or maintenance that the fuel filter has become clogged enough that fuel is bypassing it unfiltered, rather than the blockage silently starving the engine of fuel",
      "It shows how much fuel remains in the tank",
      "It indicates that the fuel crossfeed valve is open",
      "It has no relationship to filter condition and only monitors temperature",
    ],
    answer: 0,
    explain:
      "A fuel filter is generally designed with a spring-loaded bypass that opens if the filter becomes clogged enough to restrict flow significantly, so the engine keeps getting fuel (now unfiltered) rather than being starved; a bypass indication flags to the crew or maintenance that this has happened, since continuing to fly with unfiltered fuel isn't a condition to just leave unaddressed.",
    reference: "Fuel - Fuel Filter Bypass Indication",
  },
  {
    id: 13,
    system: "Fuel",
    q: "What is the general purpose of a fuel heater in the fuel supply system?",
    options: [
      "It warms fuel before it reaches sensitive components, reducing the risk of ice crystals (which can form from residual water in the fuel at cold temperatures) restricting fuel flow",
      "It is used to cool the fuel down before it enters the tanks",
      "It heats the cabin using fuel as the heat source",
      "It has no function related to fuel temperature or ice",
    ],
    answer: 0,
    explain:
      "Fuel can carry small amounts of dissolved or entrained water, which can form ice crystals at the low temperatures encountered at cruise altitude; a fuel heater (often using engine oil heat, which also helps cool the oil) warms the fuel enough to prevent that ice from forming or to melt ice crystals before they can restrict flow through filters or other components.",
    reference: "Fuel - Fuel Heater",
  },
  {
    id: 14,
    system: "Fuel",
    q: "How is the APU typically fed with fuel relative to the main engines' fuel supply?",
    options: [
      "It draws from the same tank system (commonly via a dedicated feed line), rather than needing an entirely separate fuel tank of its own",
      "It has its own completely separate onboard fuel tank, unconnected to the main tanks",
      "It cannot be fueled at all and instead runs on stored electrical energy",
      "It can only run using fuel transferred manually by ground crew before each start",
    ],
    answer: 0,
    explain:
      "The APU generally draws fuel from the same tank system that feeds the main engines - typically via its own dedicated feed line and pump arrangement - rather than requiring a separate, independent fuel tank, keeping the fuel system simpler while still giving the APU a reliable supply.",
    reference: "Fuel - APU Fuel Feed",
  },
  {
    id: 15,
    system: "Fuel",
    q: "What is the general purpose of a low fuel quantity caution in the flight deck?",
    options: [
      "It alerts the crew that remaining fuel quantity has dropped to a level where it needs their close attention and planning, well before an actual fuel exhaustion situation could develop",
      "It only appears after a tank is completely empty",
      "It indicates a fuel temperature problem rather than quantity",
      "It has no operational significance and requires no crew action",
    ],
    answer: 0,
    explain:
      "A low fuel quantity caution is set to trigger with meaningful remaining fuel and time margin, specifically so the crew has advance notice to review their fuel plan, consider diversion options, or take other precautions - rather than the first indication of a developing problem being an imminent fuel exhaustion situation.",
    reference: "Fuel - Low Fuel Quantity Caution",
  },
];
