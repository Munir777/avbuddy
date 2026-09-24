import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 18 -- Section 8: Meteorology
// (SAMRA), second pass. Original questions written from meteorological
// principles, the TC AIM (MET), and the TP 690 syllabus (topic
// headings only, no sample questions). Covers fog types, severe
// convective weather, local winds, and reporting/forecast terminology
// not yet addressed in batch 8. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_18_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Advection fog forms primarily when",
    options: [
      "moist air is forced upward over rising terrain and cools adiabatically as it ascends.",
      "the ground radiates heat away on a clear, calm night, cooling the air directly above it to its dew point.",
      "relatively warm, moist air moves horizontally over a colder surface and is cooled from below to its dew point.",
      "cold air moves out over a considerably warmer body of water, picking up moisture that immediately condenses.",
    ],
    answer: 2,
    explain:
      "Advection fog is defined by horizontal air movement: relatively warm, moist air drifts over a colder surface (often cold water or snow-covered ground) and is cooled from underneath as it travels, eventually reaching saturation -- distinguishing it from radiation fog (vertical cooling from the ground on a calm clear night, no horizontal air movement required), upslope fog (cooling by forced ascent), or steam fog (the reverse temperature relationship, cold air over warm water).",
    reference: "TP 690 Section 8 - Meteorology, Fog",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Upslope fog forms when",
    options: [
      "warm air moves horizontally over a colder land or water surface, cooling from below by contact.",
      "very cold air moves over comparatively warm, ice-free water, causing rapid evaporation and immediate condensation.",
      "the ground cools rapidly by radiation on a calm, clear night, chilling a thin layer of air directly above it.",
      "moist, stable air is forced to rise along sloping terrain and cools adiabatically as it ascends until it reaches saturation.",
    ],
    answer: 3,
    explain:
      "Upslope fog is produced by mechanical lifting rather than surface contact cooling or nighttime radiation: moist, stable air is pushed up rising terrain, expands and cools adiabatically as it climbs, and forms fog once it reaches saturation -- a mechanism distinct from advection fog's horizontal surface cooling and radiation fog's calm-night ground cooling.",
    reference: "TP 690 Section 8 - Meteorology, Fog",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Steam fog (sometimes called arctic sea smoke), often seen rising visibly off open water in very cold conditions, forms when",
    options: [
      "cold air moves out over considerably warmer water, causing rapid evaporation that quickly saturates and condenses in the cold air just above the surface.",
      "moist air is mechanically lifted over rising terrain adjacent to the body of water, cooling adiabatically as it climbs.",
      "the water surface radiates heat away overnight under clear, calm conditions, cooling a thin layer of air directly above it.",
      "warm, moist air moves over water that is considerably colder than the air itself, cooling from below by contact.",
    ],
    answer: 0,
    explain:
      "Steam fog is essentially the temperature relationship of advection fog reversed: very cold air moves over comparatively much warmer, open water, evaporation from the water surface rapidly adds moisture to the cold air immediately above it, and that added moisture quickly condenses back out as a visible, often wispy 'steaming' fog rising from the surface.",
    reference: "TP 690 Section 8 - Meteorology, Fog",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Ice fog is distinguished from other fog types mainly in that",
    options: [
      "it forms at any temperature, and is distinguished from other fog types solely by its unusually high visibility restriction.",
      "it is composed of tiny ice crystals rather than liquid water droplets, and typically forms only in very cold temperatures (well below freezing).",
      "it forms only over open ocean water and never occurs over land at any latitude.",
      "it is composed of liquid water droplets identical to other fog types, with the 'ice' in its name referring only to its effect on aircraft surfaces.",
    ],
    answer: 1,
    explain:
      "Ice fog is a direct-deposition phenomenon: at very cold temperatures, water vapour bypasses the liquid phase entirely and forms tiny suspended ice crystals rather than liquid droplets, which is what distinguishes it physically from radiation, advection, upslope, or steam fog -- all of which are composed of liquid water droplets and can occur across a wider range of temperatures.",
    reference: "TP 690 Section 8 - Meteorology, Fog",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A squall line is best described as",
    options: [
      "a single, isolated thunderstorm cell that forms independently of any frontal system or organized line of storms.",
      "a line of stable, non-convective stratus cloud that produces continuous light precipitation with no associated turbulence.",
      "a relatively narrow band of active, often severe thunderstorms, frequently forming ahead of an advancing cold front.",
      "the boundary line on a surface analysis chart marking the edge of an area of forecast icing, unrelated to any actual weather phenomenon.",
    ],
    answer: 2,
    explain:
      "A squall line is an organized, often continuous or near-continuous band of active thunderstorms, commonly (though not always) developing out ahead of an advancing cold front -- distinct from an isolated, single-cell thunderstorm, and capable of presenting a more continuous hazard along its length than scattered individual cells would.",
    reference: "TP 690 Section 8 - Meteorology, Thunderstorms",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A supercell thunderstorm is distinguished from an ordinary single-cell thunderstorm primarily by having",
    options: [
      "a shorter overall lifespan than an ordinary single-cell thunderstorm, typically dissipating within 10 to 15 minutes of formation.",
      "no associated updraft or downdraft at all, relying instead purely on frontal lifting for whatever precipitation it produces.",
      "a cloud base that never reaches the cumulonimbus stage, remaining a towering cumulus cloud throughout its life cycle.",
      "a persistent, rotating updraft (a mesocyclone), which is associated with an increased likelihood of severe weather such as large hail, damaging wind, and tornadoes.",
    ],
    answer: 3,
    explain:
      "The defining feature of a supercell is its persistent, rotating updraft -- a mesocyclone -- which allows the storm to sustain itself far longer than an ordinary single-cell thunderstorm's simple life cycle, and which is strongly associated with the most severe convective hazards: large hail, damaging straight-line wind, and tornadoes.",
    reference: "TP 690 Section 8 - Meteorology, Thunderstorms",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A microburst is best described as",
    options: [
      "a small-scale, concentrated downburst producing an intense, localized outflow of wind that can extend less than a few kilometres, often lasting only a few minutes.",
      "a large-scale, widespread downburst covering an area of many tens of kilometres, typically lasting several hours.",
      "a horizontal, not vertical, wind phenomenon, unrelated to any downward-moving air current.",
      "a general term for any downward-moving column of air associated with a thunderstorm, of any size or duration.",
    ],
    answer: 0,
    explain:
      "A downburst is the general term for a thunderstorm-associated downdraft reaching the surface and spreading outward; a microburst is specifically the small-scale, intense, and short-lived variety -- typically affecting an area only a few kilometres across and lasting just minutes -- which is exactly what makes it so hazardous to aircraft on approach or departure: the wind shear it produces develops and dissipates too quickly for it to be reliably forecast at a specific moment and location.",
    reference: "TP 690 Section 8 - Meteorology, Thunderstorms and Wind Shear",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Wind shear, as a general meteorological term, refers to",
    options: [
      "a change in wind speed only, with wind direction changes not considered a form of wind shear at all.",
      "a change in wind speed and/or direction over a relatively short distance, which may occur horizontally, vertically, or both.",
      "a steady, unchanging wind that remains constant with both altitude and horizontal distance across a wide area.",
      "a phenomenon that occurs exclusively near thunderstorms, with no other meteorological cause capable of producing it.",
    ],
    answer: 1,
    explain:
      "Wind shear is defined broadly as a change in wind (speed, direction, or both) over a short distance -- it can be vertical (such as within a temperature inversion or a jet stream) or horizontal (such as across a frontal boundary or a microburst's outflow), and while thunderstorms are one prominent and hazardous source, they are far from the only cause.",
    reference: "TP 690 Section 8 - Meteorology, Wind",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Compared to a SIGMET, an AIRMET is generally intended to advise of",
    options: [
      "weather phenomena relevant only to aircraft operating above FL 250, with no application to lower-altitude flight.",
      "exactly the same category and severity of weather phenomena as a SIGMET, with the two terms simply describing the same product for different regions of Canada.",
      "weather phenomena that are significant primarily to smaller aircraft and less demanding operations, at a level of severity below what a SIGMET is issued for.",
      "administrative NOTAM information about the availability of weather services, rather than any actual weather phenomenon.",
    ],
    answer: 2,
    explain:
      "SIGMETs are reserved for weather significant to the safety of aircraft operations generally, including more severe or hazardous phenomena; AIRMETs are pitched at a lower severity threshold, covering weather that's particularly significant to smaller aircraft, aircraft with more limited equipment, or less experienced operations, even where the phenomenon wouldn't necessarily meet the higher bar for a SIGMET.",
    reference: "TC AIM MET 5.0",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Turbulence reported in a PIREP is generally classified using intensity categories that include",
    options: [
      "numeric-only reporting on a scale of 1 to 100, with no descriptive category labels used.",
      "minor, major, and catastrophic, a three-tier scale with no 'light' category.",
      "a single, undifferentiated category simply labelled 'turbulence present,' with no distinction of intensity at all.",
      "light, moderate, severe, and extreme.",
    ],
    answer: 3,
    explain:
      "Standard turbulence intensity reporting uses a four-tier descriptive scale -- light, moderate, severe, and extreme -- letting a PIREP convey a consistent, widely understood sense of intensity (based on the effect on the aircraft and occupants) to other pilots and to forecasters, rather than a single undifferentiated label or a numeric-only scale.",
    reference: "TP 690 Section 8 - Meteorology, PIREPs and Turbulence Reporting",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Airframe icing intensity, as reported in a PIREP, is generally classified using categories that include",
    options: [
      "trace, light, moderate, and severe.",
      "type I, II, III, and IV, the same classification scheme used for de-icing/anti-icing fluids.",
      "a binary present/not-present classification only, with no distinction of accumulation rate or severity.",
      "wet, dry, and mixed, describing the composition of the ice rather than its accumulation rate.",
    ],
    answer: 0,
    explain:
      "Icing intensity reports typically use a trace/light/moderate/severe scale, reflecting how quickly ice is accumulating and how significant its effect on the aircraft is -- a scale conceptually similar in structure to turbulence reporting but describing a physically different hazard (ice accretion rather than aircraft disturbance) and not to be confused with the Type I-IV de-icing/anti-icing fluid classification.",
    reference: "TP 690 Section 8 - Meteorology, Icing",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A reported 'ceiling' at an aerodrome refers to",
    options: [
      "the average height of all cloud layers reported in the METAR, rather than any single specific layer.",
      "the lesser of: the height above ground or water of the base of the lowest cloud layer covering more than half of the sky, or the vertical visibility into a surface-based obscuration.",
      "a fixed, regulation-defined altitude (such as 1 000 ft AGL) used uniformly at every aerodrome regardless of actual cloud conditions.",
      "the height of the highest cloud layer present, regardless of how much of the sky that layer covers.",
    ],
    answer: 1,
    explain:
      "A ceiling isn't just 'the clouds' height' in a loose sense -- it's specifically defined as the lesser of the base height of the lowest cloud layer that covers more than half the sky (broken or overcast, not merely scattered or few) or, when there's a surface-based obscuration instead of a distinct cloud layer, the vertical visibility into it.",
    reference: "TC AIM MET 8.2 / Glossary",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Runway Visual Range (RVR), compared to reported ground visibility, is",
    options: [
      "a purely subjective estimate made by the pilot on final approach, with no instrumentation or specific published value at all.",
      "reported only for the purpose of ground vehicle operations, with no application to arriving or departing aircraft.",
      "a specific, instrumented measurement of the distance a pilot can see down a particular runway, and is used operationally for approach and landing minima where available.",
      "identical in every respect to prevailing visibility; the two terms are simply regional naming variants of the same measurement.",
    ],
    answer: 2,
    explain:
      "RVR is a specific, instrumented (transmissometer- or forward-scatter-sensor-based) measurement of visibility along a particular runway, distinct from the more general prevailing visibility reported for the aerodrome as a whole -- and where RVR is available and published, it's what's actually used operationally to assess whether visibility meets the minima for a given approach or takeoff, rather than a general visibility figure.",
    reference: "TC AIM RAC 9.20",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A katabatic wind is best described as a",
    options: [
      "a large-scale wind associated exclusively with an approaching warm front, unrelated to local terrain effects.",
      "a horizontal wind shift associated only with sea breeze/land breeze circulation along a coastline, unrelated to elevated terrain.",
      "upslope wind generated purely by daytime solar heating of a mountainside, with no relationship to nighttime cooling at all.",
      "downslope drainage wind, generated as air near a sloping surface cools (typically overnight) and, being denser, flows downhill under gravity.",
    ],
    answer: 3,
    explain:
      "A katabatic wind is driven by gravity acting on cooled, denser air: as air in contact with a sloping surface (often a mountainside or glacier) loses heat, typically overnight, it becomes denser than the surrounding air and drains downhill under its own weight -- the reverse of an anabatic (upslope, daytime-heating-driven) wind, and a purely local, terrain-driven effect rather than a frontal or coastal phenomenon.",
    reference: "TP 690 Section 8 - Meteorology, Local Winds",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Standing lenticular clouds and rotor clouds, observed downwind of a mountain range in stable, strong-wind conditions, are visual indicators of",
    options: [
      "mountain wave activity, which can produce significant turbulence -- including severe turbulence in an associated rotor -- well beyond the immediate vicinity of the terrain itself.",
      "the presence of a temperature inversion at the surface only, with no significance at flight levels above it.",
      "conditions guaranteed to be smooth and turbulence-free, since lenticular clouds only form in perfectly stable air.",
      "an approaching warm front, with no association to terrain or mountain wave phenomena at all.",
    ],
    answer: 0,
    explain:
      "Lenticular (lens-shaped) clouds mark the crests of a standing wave pattern set up as stable air flows over and is disturbed by mountainous terrain, while rotor clouds mark a separate, turbulent, horizontally rotating circulation that can form beneath the wave -- together they're a strong visual warning of mountain wave activity, which can produce significant, occasionally severe, turbulence and altitude excursions that extend well downwind of the mountains themselves.",
    reference: "TP 690 Section 8 - Meteorology, Turbulence",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Virga -- precipitation visible falling from a cloud base but evaporating before reaching the ground -- is significant to pilots partly because it",
    options: [
      "always indicates that the cloud producing it is entirely benign and free of any associated turbulence or wind hazard.",
      "can be associated with a downburst or microburst, since the evaporative cooling of the falling precipitation can help drive a strong, hazardous downdraft.",
      "is, by definition, only ever observed in association with stratiform (layered) cloud, never with cumuliform or convective cloud.",
      "guarantees that precipitation will reach the ground at that same location within the next several minutes.",
    ],
    answer: 1,
    explain:
      "As virga's falling precipitation evaporates in a drier layer of air below cloud base, that evaporation cools the surrounding air, making it denser and accelerating its descent -- a process that can meaningfully contribute to, or even trigger, a downburst or microburst beneath the cloud, which is exactly why virga observed near an aerodrome is treated as a caution flag rather than a purely benign, dry-weather curiosity.",
    reference: "TP 690 Section 8 - Meteorology, Thunderstorms and Wind Shear",
  },
];
