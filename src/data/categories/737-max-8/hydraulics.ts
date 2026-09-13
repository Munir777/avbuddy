import type { Question } from "../../../types";

// 737 MAX 8 - Hydraulic system. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_HYDRAULICS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Hydraulics",
    q: "How many independent hydraulic systems does the aircraft generally have, and what are they commonly designated?",
    options: [
      "Three: System A, System B, and a Standby system",
      "Two: a single main system and a backup electric system only",
      "Four fully independent systems, one per major flight control surface",
      "One central system with no independent backup",
    ],
    answer: 0,
    explain:
      "The type generally uses three hydraulic systems - System A and System B as the two main systems, plus a Standby system that can be brought online to back up specific functions if A or B is lost.",
    reference: "Hydraulics - General/Description",
  },
  {
    id: 2,
    system: "Hydraulics",
    q: "How are hydraulic Systems A and B each normally pressurized?",
    options: [
      "Each is normally pressurized by its own engine-driven pump, backed up by an electric pump on the same system",
      "Both systems share a single engine-driven pump between them",
      "Only electric pumps are used, with no engine-driven pumps at all",
      "Compressed bleed air alone pressurizes both systems",
    ],
    answer: 0,
    explain:
      "System A is normally driven by an engine-driven pump on one engine with an electric pump as backup, and System B mirrors that arrangement on the other engine - giving each main system both an engine-driven and an electric pressure source.",
    reference: "Hydraulics - System A & B Pumps",
  },
  {
    id: 3,
    system: "Hydraulics",
    q: "What is the Standby hydraulic system generally used to back up if System A or B pressure is lost?",
    options: [
      "Selected functions such as the rudder and the leading edge flaps/slats, providing a reduced but usable level of control",
      "The entire aircraft's hydraulics with no reduction in capability at all",
      "Only the cabin pressurization system",
      "Nothing - it exists purely as an unpressurized reserve reservoir",
    ],
    answer: 0,
    explain:
      "The Standby system is sized to back up specific, safety-critical functions - notably the rudder and the leading edge devices - rather than the full range of services normally provided by Systems A and B, giving the crew reduced but adequate control if a main system is lost.",
    reference: "Hydraulics - Standby System",
  },
  {
    id: 4,
    system: "Hydraulics",
    q: "If normal hydraulic gear extension is unavailable, how is the landing gear generally extended as a backup?",
    options: [
      "Via an alternate extension method that releases the uplocks and allows the gear to free-fall into place under gravity and airloads, independent of hydraulic pressure",
      "The Standby hydraulic system always takes over gear extension automatically",
      "The aircraft cannot land until hydraulic pressure is restored",
      "The APU is used to hydraulically drive the gear down",
    ],
    answer: 0,
    explain:
      "The alternate gear extension method is deliberately independent of any hydraulic system - releasing the mechanical uplocks lets gravity and aerodynamic loads drive the gear down and into its locked position, so gear extension remains available even with a total hydraulic failure.",
    reference: "Hydraulics - Landing Gear Alternate Extension",
  },
  {
    id: 5,
    system: "Hydraulics",
    q: "Why are the hydraulic system reservoirs typically kept pressurized rather than left open to ambient air pressure?",
    options: [
      "A positive air pressure on the reservoir helps ensure adequate fluid supply to the pump inlets, particularly at altitude, reducing the risk of pump cavitation",
      "Pressurizing the reservoirs is done purely to save weight",
      "It has no functional purpose and is simply a manufacturing convention",
      "It is required only to keep the fluid warm in cold weather",
    ],
    answer: 0,
    explain:
      "Keeping the reservoirs under a positive air pressure (commonly supplied from the pneumatic system) helps push fluid reliably into the pump inlets, especially at altitude where ambient pressure is low - reducing the risk of the pump drawing in air (cavitation) and losing effective pressure output.",
    reference: "Hydraulics - Reservoir Pressurization",
  },
];
