import type { Question } from "../../../types";

// General aviation knowledge - Meteorology.
// Original questions written from general, widely-published aviation
// meteorology knowledge, not copied from any single source document. No
// company, brand, or publisher names appear anywhere below.
export const METEOROLOGY_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "What is the dew point?",
    options: [
      "The temperature to which air must be cooled, at constant pressure, for it to become saturated",
      "The temperature at which precipitation always freezes",
      "The altitude at which cloud base always forms",
      "The pressure level at which the tropopause is found",
    ],
    answer: 0,
    explain:
      "The dew point is the temperature air must be cooled to (at constant pressure and moisture content) for it to reach saturation and condensation to begin. A small spread between air temperature and dew point suggests air close to saturation, favouring cloud or fog.",
    reference: "Meteorology - Temperature, Moisture & Saturation",
  },
  {
    id: 2,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "In an aerodrome weather report, what does the term 'CAVOK' indicate?",
    options: [
      "Visibility of 10 km or more, no cloud below 5,000 ft (or the minimum sector altitude, if higher), and no significant weather",
      "Ceiling and visibility are both below landing minima",
      "Clear skies with visibility below 5 km",
      "Variable wind with gusts exceeding 30 knots",
    ],
    answer: 0,
    explain:
      "CAVOK ('ceiling and visibility OK') is reported when visibility is 10 km or greater, there is no cloud below 5,000 ft (or the relevant minimum sector altitude if that's higher) and no cumulonimbus or towering cumulus, and no significant weather is occurring.",
    reference: "Meteorology - Aerodrome Weather Reporting",
  },
  {
    id: 3,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "If the amount of water vapour in a parcel of air stays constant, what happens to its relative humidity as the air cools?",
    options: ["It decreases", "It increases", "It stays the same", "It becomes negative"],
    answer: 1,
    explain:
      "Cooler air can hold less water vapour before becoming saturated, so with the actual moisture content unchanged, relative humidity rises as temperature falls - reaching 100% once the air cools to its dew point.",
    reference: "Meteorology - Temperature, Moisture & Saturation",
  },
  {
    id: 4,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "What is the tropopause?",
    options: [
      "The boundary layer between the troposphere and the stratosphere",
      "The layer of the atmosphere where all commercial jet traffic operates",
      "The boundary between the stratosphere and the mesosphere",
      "A local low-pressure system associated with frontal weather",
    ],
    answer: 0,
    explain:
      "The tropopause is the transition layer separating the troposphere below (where most weather occurs and temperature generally falls with height) from the stratosphere above (where temperature levels off or begins to rise with height). Its altitude varies with latitude and season, roughly 36,000 ft near the poles up to around 55,000 ft near the equator.",
    reference: "Meteorology - Atmospheric Structure",
  },
  {
    id: 5,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "Under the International Standard Atmosphere (ISA), what are the defined sea-level temperature and pressure?",
    options: ["15°C and 1013.25 hPa", "0°C and 1000 hPa", "20°C and 1020 hPa", "15°C and 1000 hPa"],
    answer: 0,
    explain:
      "ISA defines sea-level conditions as 15°C and 1013.25 hPa, with a standard temperature lapse rate of about 1.98°C per 1,000 ft (commonly rounded to 2°C per 1,000 ft) through the troposphere. This standard model is what altimeter and performance calculations are referenced against.",
    reference: "Meteorology - International Standard Atmosphere",
  },
  {
    id: 6,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "What best describes a microburst?",
    options: [
      "A small-scale, intense downdraft that produces a localised but severe wind shear hazard near the surface",
      "A slow, steady increase in headwind during a long final approach",
      "A large-scale area of light and gradual turbulence spanning many miles",
      "A rise in barometric pressure that occurs ahead of a warm front",
    ],
    answer: 0,
    explain:
      "A microburst is a concentrated, short-lived downdraft - often associated with convective activity - that spreads out on hitting the surface and can produce a rapid shift from headwind to tailwind (or vice versa) over a very short distance, making it a serious wind shear hazard during takeoff and landing.",
    reference: "Meteorology - Convective Weather & Wind Shear",
  },
  {
    id: 7,
    subject: "General Knowledge",
    system: "Meteorology",
    q: "Freezing rain is most commonly associated with which condition?",
    options: [
      "Rain falling from warmer air aloft through a sub-freezing layer near the surface, freezing on contact",
      "Snow melting completely before reaching the ground",
      "Ice crystals forming directly in clear, cloudless air",
      "Warm air rising rapidly through an unstable atmosphere",
    ],
    answer: 0,
    explain:
      "Freezing rain typically forms when precipitation falls as rain through a warm layer aloft, then passes through a shallow sub-freezing layer near the surface without fully refreezing - so it lands as liquid water that freezes on contact with cold surfaces, making it a significant icing hazard.",
    reference: "Meteorology - Icing & Precipitation Types",
  },
];
