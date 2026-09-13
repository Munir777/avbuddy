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
  {
    id: 6,
    system: "Limitations",
    q: "Why do approved limitations generally include minimum and maximum outside air temperatures for engine and APU starting?",
    options: [
      "Engine/APU systems, fluids, and materials have a validated operating temperature range, outside of which a start isn't approved because normal operation can't be assured",
      "Temperature limitations exist only for passenger comfort, with no bearing on engines or the APU",
      "There is no such limitation; engines and the APU can be started at any temperature",
      "The limitation applies only to the airframe structure, never to the engines or APU",
    ],
    answer: 0,
    explain:
      "Engine and APU starting has only been tested and validated across a certain temperature range, so the approved limitations define minimum and maximum starting temperatures reflecting that validated envelope - starting outside that range risks a condition (such as inadequate lubrication flow when very cold) that hasn't been shown to work reliably.",
    reference: "Limitations - Engine/APU Starting Temperature",
  },
  {
    id: 7,
    system: "Limitations",
    q: "Why is there generally a maximum tire groundspeed limitation?",
    options: [
      "Tires generate heat and experience centrifugal stress that increase with rotational speed, so a maximum groundspeed limitation keeps them within their certified safe operating envelope",
      "Tire speed has no bearing on tire safety at any groundspeed",
      "The limitation exists only to control noise levels during taxi",
      "It only applies to the nose gear, never to the main gear",
    ],
    answer: 0,
    explain:
      "As a tire rotates faster, it experiences greater centrifugal stress and generates more heat, both of which are factored into its certified limits, so a maximum groundspeed limitation exists to keep the tire operating within the envelope it was actually tested and approved for.",
    reference: "Limitations - Maximum Tire Groundspeed",
  },
  {
    id: 8,
    system: "Limitations",
    q: "What is the general concept behind a brake energy (or 'brake kinetic energy') limit?",
    options: [
      "A given combination of aircraft weight and speed corresponds to a certain amount of kinetic energy the brakes must absorb as heat during a stop, and this is limited to avoid exceeding what the brakes can safely handle in a single application",
      "It limits only how many times the brakes can be used across the aircraft's entire service life",
      "It has no connection to weight or speed and applies a single fixed number regardless of conditions",
      "It limits fuel consumption during taxi",
    ],
    answer: 0,
    explain:
      "Stopping the aircraft converts its kinetic energy (driven by weight and speed) into heat absorbed by the brakes, so the approved limitations define a maximum energy the brakes can safely absorb in a single stop - relevant, for example, to a high-speed rejected takeoff - beyond which brake damage, fire risk, or reduced structural margin could result.",
    reference: "Limitations - Brake Energy Limit",
  },
  {
    id: 9,
    system: "Limitations",
    q: "Why might the approved limitations specify a maximum taxi speed for turns, separate from the maximum straight-ahead taxi speed?",
    options: [
      "Turning at speed generates additional side loads on the landing gear and tires beyond what straight-ahead taxiing produces, so a lower speed limit applies specifically to turning",
      "Turning at any speed is always safer than taxiing in a straight line",
      "There is no meaningful difference between turning and straight-ahead taxi loads",
      "The limitation exists purely to reduce cabin noise during ground movement",
    ],
    answer: 0,
    explain:
      "Making a turn while taxiing introduces lateral (side) loads on the landing gear and tires that straight-ahead taxiing doesn't produce, so a separate, generally lower speed limitation for turns helps keep those side loads within the gear and tires' safe structural margin.",
    reference: "Limitations - Taxi Turn Speed",
  },
  {
    id: 10,
    system: "Limitations",
    q: "Why does the approved limitations section generally specify a separate (and often lower) maximum altitude for APU operation and starting, distinct from the aircraft's own maximum operating altitude?",
    options: [
      "The APU's own performance and start reliability degrade with the thinner air at higher altitude, so its safe/reliable operating envelope is validated only up to its own defined altitude limit",
      "The APU's altitude limit is always identical to the aircraft's maximum operating altitude, with no separate figure",
      "APU altitude limitations exist purely for noise abatement purposes",
      "The APU can be operated at any altitude with no limitation of its own",
    ],
    answer: 0,
    explain:
      "Because the APU is a separate small gas turbine with its own performance characteristics, its ability to start reliably and produce adequate bleed air/electrical output in the thinner air at higher altitudes is validated only up to its own defined altitude limit - which is why the approved limitations generally list a distinct APU operating/start altitude, separate from (and often lower than) the aircraft's own maximum operating altitude.",
    reference: "Limitations - APU Operating Altitude",
  },
];
