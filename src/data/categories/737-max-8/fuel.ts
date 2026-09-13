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
];
