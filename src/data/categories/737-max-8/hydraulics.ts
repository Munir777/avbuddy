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
  {
    id: 6,
    system: "Hydraulics",
    q: "Why is aircraft hydraulic fluid generally a fire-resistant synthetic fluid rather than a simple petroleum-based oil?",
    options: [
      "Because hydraulic lines run through areas with hot surfaces and potential ignition sources, so a fluid resistant to catching fire reduces that risk if a leak occurs",
      "Because synthetic fluid is significantly cheaper to manufacture than petroleum-based oil",
      "Because fire resistance has no bearing on the choice of hydraulic fluid",
      "Because synthetic fluid is required only for aesthetic (color) reasons",
    ],
    answer: 0,
    explain:
      "Hydraulic lines and components are routed through areas that can include hot engine or APU surfaces, so using a fire-resistant synthetic fluid (rather than a more flammable petroleum-based oil) reduces the risk that a hydraulic leak turns into a fire hazard.",
    reference: "Hydraulics - Hydraulic Fluid Properties",
  },
  {
    id: 7,
    system: "Hydraulics",
    q: "What is the general purpose of hydraulic system quantity and pressure gauges in the flight deck?",
    options: [
      "They let the crew monitor each system's fluid level and pressure, helping detect a developing leak or pump problem before it becomes a bigger issue",
      "They only ever display information while the aircraft is on the ground",
      "They measure cabin pressure, not hydraulic system status",
      "They exist purely as a backup for the fuel quantity indication",
    ],
    answer: 0,
    explain:
      "Continuously displaying each hydraulic system's fluid quantity and pressure gives the crew an early indication of a developing problem - a slow leak or failing pump - so it can potentially be addressed or worked around before a system loses function entirely.",
    reference: "Hydraulics - Quantity & Pressure Indication",
  },
  {
    id: 8,
    system: "Hydraulics",
    q: "Why are the three hydraulic systems kept physically separate, with their own reservoirs and fluid lines, rather than sharing one common reservoir?",
    options: [
      "So that a fluid leak in one system doesn't drain fluid from (and disable) the other systems as well, keeping the loss contained to just the affected system",
      "Sharing a single reservoir would make the aircraft lighter with no downside",
      "Physical separation is done purely for ease of manufacturing, with no safety benefit",
      "It is required only so each system can use a different color of fluid",
    ],
    answer: 0,
    explain:
      "Keeping each hydraulic system's reservoir and fluid lines physically separate from the others means a leak in one system can only drain that system's own fluid - it can't also drain the other systems - which is exactly the kind of containment that keeps a single leak from turning into a total hydraulic failure.",
    reference: "Hydraulics - System Separation",
  },
  {
    id: 9,
    system: "Hydraulics",
    q: "Unlike some other twin-engine jet types, this class of aircraft typically relies on which combination for emergency electrical power, rather than a ram air turbine (RAT)?",
    options: [
      "The APU generator together with the battery/standby power system",
      "A wind-driven propeller mounted on the nose",
      "A dedicated fifth engine carried solely for emergency power",
      "There is no emergency electrical power source at all on this class of aircraft",
    ],
    answer: 0,
    explain:
      "Rather than deploying a ram air turbine into the airstream, this class of aircraft is typically designed to fall back on the APU generator (started in flight if needed) together with the battery-fed standby power system, providing emergency electrical power through existing installed equipment instead of a dedicated wind-driven emergency generator.",
    reference: "Hydraulics - Emergency Power Source Comparison",
  },
  {
    id: 10,
    system: "Hydraulics",
    q: "If the crew observes a hydraulic system's fluid quantity steadily decreasing in flight, what is a generally sensible precaution regarding use of that system?",
    options: [
      "Minimize unnecessary use of hydraulically-powered functions on that system to conserve the remaining fluid for functions that will still be needed later, such as landing gear or flight controls",
      "Immediately shut down both engines",
      "Continue using every hydraulically-powered function exactly as normal, since fluid quantity has no operational significance",
      "Manually vent the remaining fluid overboard to prevent a fire",
    ],
    answer: 0,
    explain:
      "A steadily decreasing quantity points to an ongoing leak, so a sensible precaution is to reduce non-essential use of that system's hydraulically-powered functions, conserving whatever fluid remains for functions - like extending the landing gear or operating the flight controls - that will still be needed later in the flight.",
    reference: "Hydraulics - Low Quantity Precautions",
  },
];
