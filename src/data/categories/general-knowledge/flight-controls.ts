import type { Question } from "../../../types";

// ATPL General Knowledge - Flight Controls. Original questions written from
// general, widely-published flight control systems knowledge, not copied
// verbatim from any single source. No company, brand, or publisher names
// appear anywhere below.
export const ATPL_FLIGHT_CONTROLS_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "A basic artificial 'Q feel' system for flight controls derives its feel force input from:",
    options: [
      "Dynamic (pitot) pressure",
      "Static pressure alone",
      "A pre-loaded spring box, independent of airspeed",
      "A hydraulic actuator and servo valve, independent of airspeed",
    ],
    answer: 0,
    explain:
      "A basic Q-feel system uses dynamic (pitot, or 'Q') pressure, which increases with airspeed, as its input, so the artificial resistance felt through the controls increases with speed in a way that mimics the natural aerodynamic feedback a fully manual, unboosted control system would give, even though the surface itself is moved by a powered actuator.",
    reference: "Flight Controls - Q Feel Systems",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "On aircraft fitted with both inboard and outboard ailerons, the inboard ailerons are generally used alone at high speed primarily to:",
    options: [
      "Reduce the wing twisting (torsional) loads that outboard ailerons would otherwise induce at high speed",
      "Reduce wing bending loads at low speed",
      "Reduce wing bending loads at high speed",
      "Reduce wing twisting at low speed",
    ],
    answer: 0,
    explain:
      "Outboard ailerons, being further from the wing root, generate a larger twisting moment on the wing structure for a given input - a growing concern at high speed, where aerodynamic loads are greater. Many aircraft automatically lock out the outboard ailerons at high speed and use only the inboard ailerons, which produce far less wing twist for the same roll authority.",
    reference: "Flight Controls - Inboard/Outboard Ailerons",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "An artificial feel unit fitted to a powered flight control system is typically connected:",
    options: [
      "In parallel with the primary flight controls",
      "In parallel with the secondary flight controls",
      "In series with the primary flight controls",
      "In series with the secondary flight controls",
    ],
    answer: 0,
    explain:
      "The feel unit is connected in parallel with the primary control run, adding a speed-related resistive force to what the pilot feels without sitting in the direct mechanical path that transmits the pilot's input to the control valve or actuator, so a feel unit failure does not itself block control movement.",
    reference: "Flight Controls - Artificial Feel Units",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "Kreuger flaps, a type of leading-edge high-lift device, are typically fitted:",
    options: [
      "At the inner (root) section of the wing leading edge",
      "Along the entire leading edge span",
      "At the wing leading edge near the tip",
      "At the wing trailing edge",
    ],
    answer: 0,
    explain:
      "Kreuger flaps are hinged leading-edge panels that fold down and forward from the wing's underside to increase camber, and to a lesser extent area. They are typically fitted at the inboard (root) section of the leading edge, often ahead of the flaps, complementing slats which are more commonly used further outboard.",
    reference: "Flight Controls - Kreuger Flaps",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "The term 'flaperons' describes a control surface that combines the functions of:",
    options: [
      "Flaps and ailerons",
      "Ailerons and elevators",
      "Elevators and flaps",
      "Spoilers and flaps",
    ],
    answer: 0,
    explain:
      "Flaperons perform both roles at once: acting like flaps by deflecting symmetrically to increase lift and drag for low-speed flight, and acting like ailerons by deflecting differentially, one up and one down, to provide roll control - typically used on aircraft that don't have dedicated separate flap and aileron surfaces.",
    reference: "Flight Controls - Flaperons",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "An artificial feel system in the pitch channel is specifically needed when:",
    options: [
      "The elevators are moved through an irreversible, fully powered servo system, which otherwise transmits no natural aerodynamic feedback to the pilot",
      "The aircraft has a variable-incidence tailplane instead of elevators",
      "The elevators are controlled through a reversible servo system",
      "The elevator is controlled through a servo tab rather than a direct linkage",
    ],
    answer: 0,
    explain:
      "An irreversible, fully powered control system moves the surface with no mechanical connection carrying aerodynamic loads back to the control column, so the pilot would feel nothing from the surface itself without an artificial feel system providing a speed-related force in its place. A reversible system, or one using aerodynamic assistance like a servo tab, naturally transmits at least some real aerodynamic feedback.",
    reference: "Flight Controls - Artificial Feel Requirement",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "The purpose of a trim tab on a flight control surface is to:",
    options: [
      "Reduce the stick or control column holding force required to zero, for a chosen flight condition",
      "Increase the effectiveness of the control surface it is fitted to",
      "Reduce the effectiveness of the control surface it is fitted to",
      "Reduce stick forces during active manoeuvring only, with no effect in steady flight",
    ],
    answer: 0,
    explain:
      "A trim tab deflects to create its own small aerodynamic force that holds the main control surface at whatever position balances the aircraft in the desired flight condition, without the pilot having to continuously hold a force on the controls - properly trimmed, the residual control force required from the pilot is reduced to zero.",
    reference: "Flight Controls - Trim Tabs",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "Which of the following are commonly used to limit rudder surface deflection as airspeed increases?",
    options: [
      "A ratio changer, variable mechanical stops, and aerodynamic blow-back",
      "A gust lock, control locks, and aerodynamic blow-back",
      "Variable stops, control locks, and aerodynamic blow-back",
      "A gust lock, variable stops, and control locks",
    ],
    answer: 0,
    explain:
      "Rudder travel is commonly limited as speed increases by a ratio changer, which reduces the pedal-to-surface deflection ratio with speed, by variable mechanical stops that physically restrict maximum travel, and by aerodynamic blow-back, where airload itself progressively resists further deflection. Gust locks and control locks, by contrast, are ground-parking devices with no role in limiting deflection in flight.",
    reference: "Flight Controls - Rudder Travel Limiting",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Flight Controls",
    q: "Trailing-edge flaps on large transport aircraft are typically powered:",
    options: [
      "Hydraulically, with an electrical backup system",
      "Pneumatically, with a hydraulic backup system",
      "Electrically, with a hydraulic backup system",
      "Manually, with an electrical backup system",
    ],
    answer: 0,
    explain:
      "Trailing-edge flaps on large aircraft are normally driven hydraulically, providing the power density needed to move large flap surfaces against significant airloads, with an electrically-driven backup system provided so the flaps can still be extended, usually at a reduced rate, if hydraulic power to that system is lost.",
    reference: "Flight Controls - Flap Actuation",
  },
];
