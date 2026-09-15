import type { Question } from "../../../types";

// ATPL General Knowledge - Fire Protection (plus one thrust reverser
// indication question). Original questions written from general, widely-
// published aircraft fire/smoke detection knowledge, not copied verbatim
// from any single source. No company, brand, or publisher names appear
// anywhere below.
export const ATPL_FIRE_PROTECTION_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "Activation of an engine fire detection system typically produces which flight deck warning?",
    options: [
      "Both a warning light and an aural warning bell or tone",
      "A warning light only, with no aural warning",
      "A gear warning tone, shared with the landing gear warning system",
      "An aural warning bell only, with no light",
    ],
    answer: 0,
    explain:
      "An engine fire warning is deliberately designed to be unmistakable, combining a dedicated visual warning light (or illuminated fire handle) with a distinct aural warning, ensuring the crew is alerted through both channels regardless of what else may be competing for their attention.",
    reference: "Fire Protection - Engine Fire Warning",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "An engine fire extinguisher bottle is discharged into the engine:",
    options: [
      "By the pilot manually selecting it, when required",
      "Automatically after a time delay, allowing the engine to spin down first",
      "Automatically, only after the engine has already been shut down",
      "Automatically and immediately whenever a fire warning is triggered",
    ],
    answer: 0,
    explain:
      "Fire extinguisher discharge is a manual crew action, not automatic. After a fire warning, the crew runs the fire drill, typically shutting down the affected engine and closing relevant fuel/hydraulic/bleed shutoffs, and then manually selects the extinguisher bottle discharge themselves, retaining control over when the limited agent supply is used.",
    reference: "Fire Protection - Extinguisher Activation",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "An ionization-type smoke detector is designed to detect:",
    options: [
      "Smoke",
      "Overheat conditions specifically",
      "Visible light or flame directly",
      "Both smoke and open flame equally well",
    ],
    answer: 0,
    explain:
      "An ionization detector uses a small ionizing source to create a tiny, steady current between two electrodes; smoke particles entering the chamber attach to ions and disrupt that current, which the detector senses as smoke - it responds specifically to smoke particles rather than to heat or visible flame directly.",
    reference: "Fire Protection - Ionization Smoke Detectors",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "The sensing principle of a continuous-loop ('firewire') fire/overheat detection element is generally based on a core material whose:",
    options: [
      "Capacitance rises and whose electrical resistance falls as temperature increases",
      "Resistance rises and whose capacitance falls as temperature increases",
      "Inductance rises and whose impedance falls as temperature increases",
      "Impedance rises and whose inductance falls as temperature increases",
    ],
    answer: 0,
    explain:
      "The sensing element inside a continuous-loop detector contains a core material whose electrical resistance falls and whose capacitance rises as temperature increases. Detection circuitry monitors both effects together, letting it distinguish a genuine overheat or fire condition from a simple wiring fault such as a short or open circuit.",
    reference: "Fire Protection - Continuous-Loop Detection",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "For a fire involving a flammable gas such as propane, a commonly recommended type of portable extinguisher is:",
    options: [
      "Foam",
      "Dry powder",
      "Carbon dioxide (CO2)",
      "Water",
    ],
    answer: 0,
    needsReview: true,
    explain:
      "Different extinguishing agents suit different fire classes; some references cite foam as a suitable general answer for this type of question, while dry chemical powder and CO2 are also widely used and, in many practical firefighting contexts, are preferred over foam for a pressurized gas fire specifically. This one is presented with that caveat rather than as a fully settled fact.",
    reference: "Fire Protection - Extinguisher Agent Selection",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "Aircraft smoke detection systems, such as those fitted in lavatories and cargo compartments, commonly work on which detection principle(s)?",
    options: [
      "Optical (photoelectric) detection, ionization detection, or a combination of both",
      "Magnetic detection only",
      "Purely chemical reactive strips",
      "Purely a change in electrical resistance",
    ],
    answer: 0,
    explain:
      "Aircraft smoke detectors commonly use one or both of two principles: optical/photoelectric detectors, which sense smoke particles scattering or obscuring a light beam, and ionization detectors, which sense smoke disrupting a small ionized-air current - the choice depends on the installation location and required sensitivity.",
    reference: "Fire Protection - Smoke Detection Principles",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "The recommended type of extinguisher for a wheel brake fire is generally:",
    options: [
      "Dry powder",
      "Foam",
      "Carbon dioxide (CO2)",
      "Water",
    ],
    answer: 0,
    explain:
      "A hot brake fire involves extremely high metal temperatures. Dry powder is generally recommended because it avoids the thermal-shock risk that a sudden application of water could pose to hot brake and wheel assemblies, and is effective on this type of fire - crews are also generally taught to approach from the side rather than directly in line with the wheel, given the risk of a tyre or wheel failure under such heat.",
    reference: "Fire Protection - Wheel Brake Fires",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Fire Protection",
    q: "Aircraft smoke detectors are typically fitted in which locations?",
    options: [
      "Lavatories, and specific classes of cargo compartment whose fire protection design relies on automatic smoke detection",
      "Lavatories only",
      "All cargo compartments without exception, regardless of fire-protection classification",
      "All cargo compartments except lavatories",
    ],
    answer: 0,
    explain:
      "Smoke detectors are fitted in lavatories, a well-known ignition risk area, and in cargo compartment classes whose fire protection design relies specifically on automatic smoke detection - not every cargo compartment classification requires detectors, since some rely instead on crew accessibility to visually check for fire.",
    reference: "Fire Protection - Smoke Detector Locations",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "On the flight deck, a thrust reverser annunciator light illuminates when the:",
    options: [
      "Thrust reverser doors are unlocked, i.e. not fully stowed and locked",
      "Thrust reverser doors are locked in the stowed position",
      "Thrust reverser doors have moved fully to the reverse thrust position",
      "Reverser has been selected but the doors have not yet moved",
    ],
    answer: 0,
    explain:
      "The reverser annunciator is designed to alert the crew whenever the reverser doors are anything other than fully stowed and mechanically locked, so the light illuminates as soon as the doors unlock - the condition the crew most needs to be warned about, such as an unlocked reverser in flight - rather than only once the doors have physically moved to the deployed position.",
    reference: "Powerplant - Thrust Reverser Indication",
  },
];
