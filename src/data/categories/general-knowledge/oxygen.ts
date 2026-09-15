import type { Question } from "../../../types";

// ATPL General Knowledge - Oxygen & Emergency Equipment. Original
// questions written from general, widely-published aircraft oxygen system
// and emergency equipment knowledge, not copied verbatim from any single
// source. No company, brand, or publisher names appear anywhere below.
export const ATPL_OXYGEN_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "An unpressurized aircraft operating above FL100 must generally have supplemental oxygen available for:",
    options: [
      "Both pilots essentially immediately, plus cabin crew and a portion of the passengers once more than 30 minutes has been spent between FL100 and FL130",
      "Both pilots and all passengers, regardless of time spent at altitude",
      "Both pilots only, with no requirement extending to cabin crew or passengers",
      "Both pilots immediately, plus cabin crew and all passengers after 30 minutes between FL100 and FL130",
    ],
    answer: 0,
    explain:
      "Regulations generally require flight crew to use supplemental oxygen essentially immediately above FL100 in an unpressurized aircraft, while a more graduated requirement applies to cabin crew and passengers - typically covering cabin crew and only a portion of passengers once more than 30 minutes has been spent in the FL100-FL130 band, reflecting the increasing physiological risk with both altitude and time of exposure.",
    reference: "Oxygen - Unpressurized Flight Requirements",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "Oxygen supplied to the flight deck crew oxygen system on a modern transport aircraft is typically:",
    options: [
      "Gaseous oxygen, diluted with cabin air if required",
      "Chemically generated oxygen, diluted with ambient air if required",
      "Gaseous oxygen, diluted with ambient (outside) air if required",
      "Chemically generated oxygen, diluted with cabin air if required",
    ],
    answer: 0,
    explain:
      "Flight crew oxygen is normally supplied from a gaseous oxygen cylinder system, rather than a chemical generator (typically used instead for the one-shot passenger system), with a diluter-demand regulator mixing in cabin air as needed depending on cabin altitude, rather than drawing in unconditioned outside air directly.",
    reference: "Oxygen - Flight Crew Oxygen Supply",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "An aircraft certified to operate above 25,000 ft, with a maximum certified passenger capacity of 240, is actually configured for 200 passenger seats. The minimum number of automatically-deployable passenger oxygen masks required to be installed is generally based on:",
    options: [
      "About 110% of the number of installed passenger seats (roughly 220 in this case), not the maximum certified capacity or the number of passengers actually carried",
      "The maximum certified passenger capacity of 240",
      "The number of installed seats exactly, with no margin (200)",
      "The number of passengers actually on board a given flight",
    ],
    answer: 0,
    explain:
      "The regulatory mask-count requirement is generally tied to the number of passenger seats actually installed, with roughly a 10% margin built in to allow for things such as a lap-held infant sharing an adult's mask coverage. It is based on neither the aircraft's maximum certified capacity nor how many passengers happen to be aboard on a particular flight.",
    reference: "Oxygen - Passenger Oxygen Mask Provisioning",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "Emergency oxygen on a transport aircraft is generally provided by:",
    options: [
      "Two independent systems - one dedicated to the flight deck, one to the cabin",
      "A single combined system serving both the flight deck and cabin",
      "Two systems, each independently capable of supplying both the flight deck and cabin",
      "Three separate systems, one each for flight deck, passengers, and cabin crew",
    ],
    answer: 0,
    explain:
      "Flight deck and cabin oxygen are generally kept as two independent systems, so a fault, depletion, or contamination affecting one does not also compromise the other - the flight deck's gaseous cylinder-based system is entirely separate from the cabin's chemical-generator-based drop-down system.",
    reference: "Oxygen - System Redundancy",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "Above which altitude is it generally mandatory for at least one flight deck crew member to be wearing an oxygen mask continuously, regardless of whether both pilots are at their stations?",
    options: [
      "41,000 ft",
      "25,000 ft",
      "32,000 ft",
      "37,000 ft",
    ],
    answer: 0,
    needsReview: true,
    explain:
      "Beyond the well-known rule requiring the remaining pilot to don a mask if the other leaves the flight deck above a lower threshold, some operating rules additionally require at least one pilot to wear an oxygen mask continuously above a very high altitude such as 41,000 ft, reflecting the very short time of useful consciousness following a decompression at that altitude. The exact regulatory altitude and conditions can vary by operating rule set, so this figure is presented with that caveat.",
    reference: "Oxygen - Mandatory Mask-Wear Altitude",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "The passenger oxygen mask stowage compartment doors are typically released:",
    options: [
      "Electrically for a chemical oxygen generator system, or pneumatically for a gaseous oxygen system",
      "Purely mechanically, via a spring latch only",
      "Manually, by cabin crew reaching up to open each compartment",
      "By a lanyard connected to a barometric pressure capsule",
    ],
    answer: 0,
    explain:
      "The stowage door release method depends on which passenger oxygen system is fitted: aircraft using chemical oxygen generators typically release the doors electrically, as part of triggering generator activation, while aircraft using a centralized gaseous supply typically release the doors pneumatically, using the oxygen system's own pressure - both normally triggered automatically by a barometric switch, with a manual backup available to the crew.",
    reference: "Oxygen - Passenger Mask Door Release",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "The purpose of a diluter-demand valve in the flight crew oxygen system is to:",
    options: [
      "Mix supplied oxygen with cabin air, delivering a lower concentration when full undiluted oxygen isn't needed",
      "Supply oxygen continuously regardless of breathing, rather than only on demand",
      "Dilute oxygen with air specifically in the passenger drop-down system",
      "Supply pure oxygen only when the wearer inhales, with no dilution ever",
    ],
    answer: 0,
    explain:
      "A diluter-demand regulator mixes cabin air with the pure oxygen supply, delivering only as much oxygen as needed for the current cabin altitude rather than always delivering 100% oxygen, and can typically be switched to deliver 100% oxygen directly when required, such as in a smoke or fume event.",
    reference: "Oxygen - Diluter-Demand Regulator",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Oxygen",
    q: "Aircraft gaseous oxygen cylinders are typically charged to a pressure in the region of:",
    options: [
      "1800 psi",
      "2000 psi",
      "1200 psi",
      "1000 psi",
    ],
    answer: 0,
    explain:
      "Aircraft oxygen cylinders are commonly charged to roughly 1800 psi when full, though the exact figure and tolerance varies somewhat by installation and cylinder design, giving crews a straightforward pressure-gauge reference to judge remaining oxygen quantity.",
    reference: "Oxygen - Cylinder Charging Pressure",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Equipment",
    q: "A protective smoke hood, where fitted as emergency equipment, is generally designed to:",
    options: [
      "Cover the full face and provide a continuous flow of breathable air or oxygen",
      "Cover only the mouth and nose, providing oxygen on demand",
      "Cover the full face, providing oxygen only on demand",
      "Cover only the mouth and nose, with a continuous flow",
    ],
    answer: 0,
    explain:
      "A smoke hood is a full-face protective covering, sealing around the head to also shield the eyes from smoke and irritants, and supplies a continuous flow of breathable gas rather than demand-only flow, since a demand system typically relies on a seal and inhalation pattern that a panicked or smoke-affected user might not maintain reliably.",
    reference: "Equipment - Smoke Hoods",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Equipment",
    q: "The crash axe carried on aircraft above a certain size is provided primarily to:",
    options: [
      "Enable crew to gain access behind panels and soundproofing in order to fight a hidden fire",
      "Cut firewood in a post-landing survival situation",
      "Cut through the fuselage skin to create an escape route",
      "Restrain a disorderly or dangerous passenger",
    ],
    answer: 0,
    explain:
      "A fire that has started behind a panel, in the soundproofing, or in another concealed area may not be reachable with a hand extinguisher until the crew can physically open up access to it. The crash axe exists specifically to let crew break through panels and insulation to reach and fight such a hidden fire, not as a general-purpose cutting or self-defence tool.",
    reference: "Equipment - Crash Axe",
  },
];
