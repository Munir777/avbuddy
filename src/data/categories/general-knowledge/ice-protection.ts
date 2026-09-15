import type { Question } from "../../../types";

// ATPL General Knowledge - Ice & Rain Protection. Original questions
// written from general, widely-published aircraft ice protection
// knowledge, not copied verbatim from any single source. No company,
// brand, or publisher names appear anywhere below.
export const ATPL_ICE_PROTECTION_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Ice & Rain Protection",
    q: "On many modern turboprop aircraft, wing leading-edge ice protection is typically provided by:",
    options: [
      "Pneumatic de-icing boots",
      "Hot air bled from the engines",
      "Anti-icing fluid weeping through the leading edge",
      "Electrical heating mats",
    ],
    answer: 0,
    explain:
      "Many turboprops use inflatable pneumatic boots along the wing and tail leading edges. Rather than continuously preventing ice, the boots are periodically inflated with bleed or pneumatic pump air to crack and shed accumulated ice - an approach well suited to aircraft where continuous bleed-air anti-icing would be a heavier draw on available engine bleed.",
    reference: "Ice & Rain Protection - Pneumatic De-Icing Boots",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Ice & Rain Protection",
    q: "Carburettor icing in a normally-aspirated piston engine can generally occur:",
    options: [
      "Across a fairly wide outside air temperature range, roughly -7C to +33C, whenever visible moisture or high humidity is present",
      "Only above 5000 ft",
      "Only at temperatures below 0C",
      "Only below 0C, and only with visible moisture present",
    ],
    answer: 0,
    explain:
      "Carburettor icing results mainly from the sharp temperature drop caused by fuel vaporisation and the venturi effect inside the carburettor, which can lower the local temperature well below the outside air temperature. Icing risk therefore exists across a surprisingly wide range of ambient temperatures whenever sufficient moisture is present, not only when the outside air is already near or below freezing.",
    reference: "Ice & Rain Protection - Carburettor Icing",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Ice & Rain Protection",
    q: "In a typical bleed-air wing anti-icing system, the areas that are heated are generally:",
    options: [
      "The wing leading edges and leading-edge slats",
      "The entire wing upper and lower surface",
      "The trailing-edge flaps",
      "Leading-edge slats and trailing-edge flaps together",
    ],
    answer: 0,
    explain:
      "Bleed-air anti-icing ducting is generally routed specifically to the wing leading edge and leading-edge slats, the areas where ice accretion first forms and most disrupts airflow, rather than heating the whole wing surface or the trailing-edge flap areas, which are not typically protected this way.",
    reference: "Ice & Rain Protection - Bleed Air Wing Anti-Icing",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Ice & Rain Protection",
    q: "The ice protection system used on most modern jet transport aircraft wing leading edges is:",
    options: [
      "Hot bleed air",
      "Electrical heating elements",
      "Pressure-operated pneumatic boots",
      "Anti-icing fluid",
    ],
    answer: 0,
    explain:
      "Most modern jet transport aircraft use hot bleed air, tapped from the engine compressors and ducted to the wing leading edges, as their primary wing anti-icing method - a continuous-heat approach generally preferred over pneumatic boots, which are more common on turboprops, given airflow-disturbance concerns boots can raise at higher jet cruise speeds.",
    reference: "Ice & Rain Protection - Jet Transport Wing Anti-Icing",
  },
];
