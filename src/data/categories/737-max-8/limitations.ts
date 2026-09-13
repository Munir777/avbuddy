import type { Question } from "../../../types";

// 737 MAX 8 - Limitations. Original, independently-written questions based
// on general/public 737-family systems knowledge and widely-published
// certification facts (not sourced from any operator-specific or
// manufacturer-proprietary document) - no company, airline, publisher, or
// person names.
export const B737_LIMITATIONS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Limitations",
    q: "What is the maximum certificated operating altitude generally applicable to this aircraft type?",
    options: [
      "41,000 feet",
      "51,000 feet",
      "25,000 feet",
      "There is no maximum certificated altitude specified",
    ],
    answer: 0,
    explain:
      "This aircraft family is certificated with a maximum operating altitude of 41,000 feet, a widely published limitation reflecting the structural and pressurization design of the type.",
    reference: "Limitations - Altitude",
  },
  {
    id: 2,
    system: "Limitations",
    q: "What is the minimum flight crew complement this aircraft type is certificated to be operated with?",
    options: [
      "Two pilots",
      "One pilot only",
      "Three flight crew members (two pilots plus a flight engineer)",
      "It varies with no defined minimum",
    ],
    answer: 0,
    explain:
      "Like other modern transport-category jets in its class, this aircraft type is certificated for a minimum flight crew of two pilots, with no flight engineer position required.",
    reference: "Limitations - Minimum Flight Crew",
  },
  {
    id: 3,
    system: "Limitations",
    q: "What is the general difference between a 'demonstrated' limitation (such as a demonstrated crosswind component) and a hard structural limit?",
    options: [
      "A demonstrated limitation reflects the maximum value actually tested during certification (and isn't necessarily the absolute capability of the aircraft), while a structural limit is a fixed boundary tied to the airframe's design strength",
      "The two terms are interchangeable with no meaningful difference",
      "A demonstrated limitation is always higher than any structural limit",
      "Structural limits are simply suggestions that can be exceeded at the crew's discretion",
    ],
    answer: 0,
    explain:
      "A demonstrated limitation (like a demonstrated crosswind component) reflects the most extreme condition actually flown during certification testing, rather than necessarily the aircraft's absolute physical capability, whereas a structural limit is a firm boundary set by the airframe's certified design strength - the two represent different kinds of constraint even though both appear in the approved limitations.",
    reference: "Limitations - Demonstrated vs Structural Limits",
  },
  {
    id: 4,
    system: "Limitations",
    q: "Why does the approved limitations section generally specify a different maximum speed for each individual flap position, rather than one single flap speed limit?",
    options: [
      "Because the structural and aerodynamic loads the flap system can safely withstand change with how far the flaps are extended, so each position needs its own placard speed",
      "Because only the first flap position ever has a speed limit; all others are unlimited",
      "Because flap speed limits are purely a training convention with no structural basis",
      "Because the limit is identical at every flap position, just repeated for each one",
    ],
    answer: 0,
    explain:
      "As flaps extend further, the loads they can safely carry generally decrease, so the approved limitations specify a maximum speed for each individual flap position (often shown together as a placard/flap-speed schedule) rather than a single blanket flap speed limit that would either be unnecessarily conservative at low flap settings or unsafe at high ones.",
    reference: "Limitations - Flap Placard Speeds",
  },
  {
    id: 5,
    system: "Limitations",
    q: "Why does the approved limitations section generally specify a maximum permitted fuel imbalance between the left and right main tanks?",
    options: [
      "Because an excessive lateral fuel imbalance can affect handling and structural loading, so a maximum imbalance is defined that the crew must not exceed",
      "Because fuel imbalance has no effect on the aircraft at all",
      "Because it only matters for ground operations, not for flight",
      "Because the two main tanks are physically incapable of ever holding different quantities",
    ],
    answer: 0,
    explain:
      "An excessive difference in fuel quantity between the left and right main tanks shifts the aircraft's lateral center of gravity and can affect handling, so the limitations section defines a maximum permitted imbalance, with a crossfeed capability available to help correct it if it's exceeded.",
    reference: "Limitations - Fuel Imbalance",
  },
];
