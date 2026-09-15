import type { Question } from "../../../types";

// ATPL General Knowledge - Air Conditioning / Pressurization. Original
// questions written from general, widely-published ECS/pressurization
// knowledge, not copied verbatim from any single source. No company,
// brand, or publisher names appear anywhere below.
export const ATPL_AIRCOND_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "In an air-cycle Environmental Control System (ECS) pack, the water separator is typically fitted:",
    options: [
      "Downstream of the cold air unit's expansion turbine",
      "Upstream of the cold air unit's compressor",
      "Between the cold air unit's compressor and turbine",
      "Downstream of the humidifier only",
    ],
    answer: 0,
    explain:
      "As air expands through the cold air unit's turbine it cools sharply, condensing much of its moisture into visible water droplets. The water separator sits immediately after that expansion turbine specifically to catch and remove this condensed water before the air reaches the cabin, preventing fog and free water in the ducting.",
    reference: "Air Cond / Pressurization - Water Separator",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "In an air-cycle air conditioning pack, the purpose of the ground cooling fan is to:",
    options: [
      "Draw cooling (ram) air across the pack's heat exchangers while the aircraft is on the ground",
      "Draw cooling air specifically over the expansion turbine",
      "Blow air directly into the compressor inlet",
      "Recirculate cabin air through the mix manifold",
    ],
    answer: 0,
    explain:
      "With the aircraft stationary or moving slowly on the ground, there isn't enough natural ram airflow through the pack's heat exchangers to cool the compressed bleed air effectively. A dedicated, electrically-driven ground cooling fan draws air across the heat exchangers instead, substituting for the ram airflow normally available in flight.",
    reference: "Air Cond / Pressurization - Ground Cooling Fan",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "When an aircraft's maximum operating altitude is limited by pressurization considerations, that limit is generally set by:",
    options: [
      "The maximum allowable positive pressure differential at the aircraft's maximum operating cabin altitude",
      "The maximum number of pressurization cycles the airframe can accumulate",
      "The maximum zero fuel mass at maximum pressure altitude",
      "The maximum positive differential achievable, regardless of cabin altitude",
    ],
    answer: 0,
    explain:
      "A pressurization-limited maximum operating altitude is set by keeping the cabin at an acceptable altitude for occupant physiology without exceeding the structural maximum positive pressure differential the fuselage is designed for - as outside altitude increases, differential pressure increases for a given cabin altitude, eventually reaching that structural limit.",
    reference: "Air Cond / Pressurization - Maximum Operating Altitude",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "The purpose of a ditching control valve, fitted on some transport aircraft, is to:",
    options: [
      "Close the pressurization outflow valve(s), helping keep water out of the fuselage after a ditching",
      "Dump toilet waste water immediately after landing",
      "Open the outflow valves to allow rapid depressurisation",
      "Allow rapid depressurisation before an emergency evacuation",
    ],
    answer: 0,
    explain:
      "In a ditching, a ditching control valve closes off various normally-open openings such as the pressurization outflow valve(s), reducing the paths through which water could enter the fuselage and helping the aircraft remain buoyant and watertight for longer, improving the chances of a survivable evacuation.",
    reference: "Air Cond / Pressurization - Ditching Control Valve",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "In a 'bootstrap' type air-cycle air conditioning system, the sequence the bleed air generally follows is:",
    options: [
      "Primary heat exchanger, then the cold air unit's own compressor, then the secondary heat exchanger, before finally the expansion turbine",
      "Compressor, then turbine, then secondary heat exchanger",
      "Turbine, then compressor, then secondary heat exchanger",
      "Compressor, then secondary heat exchanger, then turbine",
    ],
    answer: 0,
    explain:
      "In a bootstrap pack, hot bleed air is first cooled somewhat in the primary heat exchanger, then that cooled air drives the cold air unit's own compressor, raising its pressure and temperature again, then passes through the secondary heat exchanger to remove that added heat before finally expanding through the turbine - the arrangement that gives the 'bootstrap' system its name.",
    reference: "Air Cond / Pressurization - Bootstrap Air Cycle System",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "In a bootstrap air conditioning system, air is deliberately re-compressed by the cold air unit's own compressor before reaching the secondary heat exchanger and turbine, primarily in order to:",
    options: [
      "Ensure a large enough pressure (and temperature) drop is available across the turbine to achieve effective cooling",
      "Provide a constant-temperature airflow to the cabin regardless of conditions",
      "Achieve the most rapid possible cooling through the heat exchanger itself",
      "Provide a constant mass flow of air to the cabin",
    ],
    answer: 0,
    explain:
      "The cooling achieved across the expansion turbine depends on how much pressure and temperature drop is available to expand through. Re-compressing the air first guarantees a large enough pressure ratio across the turbine to produce effective cooling even when the raw engine bleed pressure available is comparatively low, such as at low engine power settings.",
    reference: "Air Cond / Pressurization - Bootstrap System Rationale",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "If the pressurization outflow valve fails fully closed during pressurized flight, the aircraft is generally protected from over-pressurization by:",
    options: [
      "A dedicated safety (positive pressure relief) valve, which opens once cabin differential pressure reaches its set structural maximum",
      "The air conditioning packs automatically shutting down",
      "The negative-pressure relief valve opening to vent excess pressure",
      "No specific protection; the fuselage would simply be over-stressed",
    ],
    answer: 0,
    explain:
      "A dedicated positive-pressure safety/relief valve, separate from the normally-modulating outflow valve, is set to open automatically once cabin differential pressure reaches a predetermined maximum, protecting the fuselage even if the main outflow valve control system has failed and left the primary valve stuck closed.",
    reference: "Air Cond / Pressurization - Positive Pressure Relief Valve",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Air Cond / Pressurization",
    q: "If, during an emergency descent, cabin pressure were to momentarily decrease below outside ambient pressure, the aircraft is protected by:",
    options: [
      "The negative pressure (inward) relief valve opening to admit outside air and equalise the pressure",
      "The positive pressure safety valve closing further",
      "The normal outward-flow outflow valve opening further",
      "The outflow valve closing completely",
    ],
    answer: 0,
    explain:
      "A fuselage built to withstand positive differential pressure is generally not designed to withstand much negative differential the other way. A dedicated negative-pressure (inward) relief valve opens automatically to admit outside air into the cabin if cabin pressure ever threatens to fall below outside ambient pressure, protecting the structure from being crushed inward.",
    reference: "Air Cond / Pressurization - Negative Pressure Relief Valve",
  },
];
