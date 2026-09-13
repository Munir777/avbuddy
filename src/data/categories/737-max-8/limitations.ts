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
  {
    id: 11,
    system: "Limitations",
    q: "What does it generally mean that the maximum operating speed is expressed as 'VMO/MMO, whichever is lower'?",
    options: [
      "At lower altitudes the indicated airspeed limit (VMO) is normally the binding constraint, while at higher altitudes the Mach limit (MMO) becomes the binding constraint, so the crew must respect whichever one is more restrictive at the current altitude",
      "VMO and MMO are simply two different names for exactly the same limit",
      "MMO applies only on the ground, and VMO applies only in flight",
      "The crew may always use whichever of the two limits happens to be higher",
    ],
    answer: 0,
    explain:
      "VMO (a maximum indicated airspeed) and MMO (a maximum Mach number) are two ways of expressing essentially the same underlying aerodynamic/structural boundary, but they cross over at some altitude; below that crossover, VMO tends to be the binding limit, and above it, MMO becomes binding - so the operating limitation is stated as whichever of the two is currently the more restrictive.",
    reference: "Limitations - VMO/MMO Relationship",
  },
  {
    id: 12,
    system: "Limitations",
    q: "What is the general purpose of a maximum zero fuel weight (MZFW) limitation?",
    options: [
      "It caps the aircraft's weight excluding usable fuel, keeping bending loads on the wing (which are relieved by fuel weight in the wing) within the structure's certified limits",
      "It limits only how much fuel can be carried, with no relationship to payload",
      "It is simply another name for maximum takeoff weight",
      "It applies only while the aircraft is on the ground, not in flight",
    ],
    answer: 0,
    explain:
      "Fuel carried in the wings helps relieve the bending load the wing structure experiences in flight, so the maximum zero fuel weight limitation caps how much weight (essentially the aircraft plus payload, excluding usable fuel) is permitted before any fuel is added - protecting the wing structure from carrying more bending load than it's certified for if there were too little wing fuel to help relieve it.",
    reference: "Limitations - Maximum Zero Fuel Weight",
  },
  {
    id: 13,
    system: "Limitations",
    q: "How does a minimum equipment list (MEL) generally relate to the aircraft's approved limitations?",
    options: [
      "The MEL specifies conditions under which the aircraft may be dispatched with certain equipment inoperative, but it operates within (and can add extra restrictions on top of) the aircraft's approved limitations - it doesn't override a limitation itself",
      "The MEL replaces the approved limitations entirely once it is applied",
      "The MEL and the limitations section are simply two names for the same document",
      "The MEL only applies to cabin equipment, never to any system covered by the limitations",
    ],
    answer: 0,
    explain:
      "A minimum equipment list lets an aircraft be dispatched with specific inoperative items under defined conditions (which can include extra restrictions or procedures), but it works within the aircraft's approved limitations rather than overriding them - a limitation in the approved limitations section still applies regardless of what the MEL separately permits for dispatch with inoperative equipment.",
    reference: "Limitations - MEL Relationship to Limitations",
  },
  {
    id: 14,
    system: "Limitations",
    q: "Why might a maximum brake temperature limitation for dispatch (before departure) be treated separately from the single-stop brake energy limit?",
    options: [
      "A single-stop energy limit addresses one demanding stop (like a rejected takeoff), while a pre-departure brake temperature limit addresses whether the brakes have had enough time to cool down from previous use before being relied on again",
      "The two limitations are identical and exist only for redundancy",
      "Brake temperature has no bearing on dispatch decisions",
      "The pre-departure limitation applies only to the nose gear brakes",
    ],
    answer: 0,
    explain:
      "A single-stop brake energy limit is about whether the brakes can safely absorb the energy of one demanding stop, whereas a pre-departure brake temperature limitation is about confirming the brakes have already cooled down enough from prior taxiing or landing before the aircraft is dispatched again - two related but distinct considerations about brake condition at two different points in time.",
    reference: "Limitations - Pre-Departure Brake Temperature",
  },
  {
    id: 15,
    system: "Limitations",
    q: "What does it generally mean that an engine's takeoff thrust rating is 'flat-rated' to a certain outside air temperature?",
    options: [
      "The engine can produce its full rated thrust up to that temperature, with thrust then reducing above it as ambient conditions become hot enough to limit the engine's actual capability",
      "The engine produces exactly the same fixed thrust value regardless of any operating condition, including altitude and temperature",
      "Flat-rating means the engine's thrust output decreases steadily with every degree of temperature increase from the coldest possible day",
      "It refers only to the shape of the engine nacelle, not to its thrust output",
    ],
    answer: 0,
    explain:
      "A flat-rated thrust rating means the engine can deliver its full rated thrust across a range of temperatures up to a defined breakpoint; beyond that temperature, the engine's actual capability begins to fall off with rising temperature, so the approved rating chart shows constant available thrust up to the flat-rate temperature and a declining value above it.",
    reference: "Limitations - Flat-Rated Thrust Concept",
  },
];
