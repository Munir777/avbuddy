import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 36 -- Section 8: Meteorology,
// fourth pass. Original questions written from standard aviation
// meteorology principles and the TP 690 syllabus (topic headings
// only, no sample questions). Covers lapse rates, atmospheric
// standards, cloud/precipitation processes, and additional
// reporting elements not yet addressed in batches 8, 18, or 26.
// Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_36_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The Saturated Adiabatic Lapse Rate (SALR), applying to a saturated rising air parcel, is generally",
    options: [
      "lower than the Dry Adiabatic Lapse Rate (DALR), because the latent heat released as water vapour condenses partially offsets the cooling that would otherwise occur as the parcel rises.",
      "higher than the DALR, since condensation within a saturated rising parcel further accelerates its rate of cooling with altitude.",
      "identical to the DALR under all conditions, since condensation has no measurable effect on a rising parcel's cooling rate.",
      "entirely undefined, since the concept of an adiabatic lapse rate does not apply to a saturated air parcel at all.",
    ],
    answer: 0,
    explain:
      "As a saturated parcel rises and continues to cool, ongoing condensation releases latent heat into the parcel, which partially offsets the cooling that would otherwise occur -- meaning the SALR is a smaller (lower) rate of temperature decrease with altitude than the DALR (which applies to unsaturated air, with no condensation and no latent heat release to slow the cooling), rather than a higher or identical rate, and it's a well-defined, meaningful lapse rate distinct from the dry case, not an inapplicable concept.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The Lifting Condensation Level (LCL), the altitude at which a rising, unsaturated air parcel becomes saturated and cloud (typically cumulus) begins to form, corresponds to the altitude at which",
    options: [
      "the parcel's temperature, cooling at the dry adiabatic lapse rate as it rises, first reaches the parcel's dew point.",
      "the parcel's temperature first reaches 0 degrees Celsius, regardless of the parcel's moisture content or dew point.",
      "the parcel reaches the tropopause, since cloud formation is, by definition, confined to the boundary between the troposphere and stratosphere.",
      "the parcel's pressure first equals standard sea-level pressure, a pressure-based rather than a temperature/moisture-based criterion.",
    ],
    answer: 0,
    explain:
      "As an unsaturated parcel rises, it cools at the dry adiabatic lapse rate while its dew point also decreases with altitude, but more slowly -- the LCL is the altitude at which those two values converge (the parcel's temperature reaches its dew point), at which point the parcel becomes saturated and, if it continues rising, visible cloud (commonly the flat base of a cumulus cloud) begins to form; it's a temperature/moisture-based threshold, not tied to a fixed 0°C isotherm, the tropopause, or a specific pressure value.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The International Standard Atmosphere (ISA) defines a reference model of the atmosphere with a standard sea-level pressure and temperature, and a standard temperature lapse rate (in the troposphere) of approximately",
    options: [
      "2 degrees Celsius per 1,000 feet (roughly 6.5 degrees Celsius per kilometre), used as a common reference against which actual, varying atmospheric conditions are compared.",
      "10 degrees Celsius per 1,000 feet, a rate that would represent a highly unstable, rarely sustained real-world atmospheric condition if actually observed.",
      "0 degrees Celsius per 1,000 feet, meaning the ISA model assumes temperature never changes with altitude at all.",
      "a rate that varies significantly by geographic location, since the ISA model is defined separately and differently for each region of the world.",
    ],
    answer: 0,
    explain:
      "The ISA is a single, globally standardized reference model (not a set of regionally varying models) -- defining a standard sea-level pressure (1013.25 hPa) and temperature (15°C), with temperature decreasing through the troposphere at a standard rate of approximately 2°C per 1,000 feet -- providing a consistent baseline against which actual observed atmospheric conditions (which do vary by location, season, and weather pattern) are compared, for instrument calibration, performance chart, and other standardization purposes; it isn't a zero-lapse-rate or unrealistically steep 10°C-per-1,000-ft model.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "For a given temperature and pressure, increasing the amount of water vapour (humidity) in the air generally",
    options: [
      "decreases air density, since water vapour molecules are less dense than the dry air molecules they displace, which in turn increases density altitude.",
      "increases air density, since water vapour molecules are denser than the dry air molecules they displace.",
      "has no effect on air density whatsoever, since density altitude is determined by pressure and temperature alone, with humidity playing no role at all.",
      "decreases air density only at temperatures below freezing, with humidity increasing air density at all other, warmer temperatures.",
    ],
    answer: 0,
    explain:
      "Water vapour molecules are actually lighter than the nitrogen and oxygen molecules that make up most of dry air, so humid air is, for the same temperature and pressure, less dense than dry air -- meaning higher humidity increases density altitude (on top of whatever effect temperature and pressure altitude are already having), a real, if often secondary, factor in performance planning on a hot, humid day, rather than something with no effect or an effect that only appears below freezing.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "On a surface weather chart, isobars spaced closely together (a steep pressure gradient) generally indicate",
    options: [
      "stronger wind, since a steeper pressure gradient over a given distance produces a greater pressure gradient force driving the air.",
      "weaker wind, since closely spaced isobars indicate a comparatively uniform pressure field with little tendency to drive air movement.",
      "no relationship at all to wind speed, since isobar spacing reflects temperature distribution rather than any pressure-related quantity.",
      "an approaching warm front specifically, with isobar spacing otherwise unrelated to wind speed under any other synoptic situation.",
    ],
    answer: 0,
    explain:
      "Isobars connect points of equal pressure, and how closely they're spaced reflects the pressure gradient -- the rate of pressure change over distance -- which directly drives the pressure gradient force responsible for wind: closely spaced isobars mean a steep gradient and a strong pressure gradient force, producing stronger wind, while widely spaced isobars indicate a gentler gradient and generally lighter wind, a relationship that holds generally across synoptic situations, not specifically or exclusively around an approaching warm front.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The Coriolis force, an apparent force resulting from the Earth's rotation, causes moving air (and other moving objects) in the Northern Hemisphere to be deflected",
    options: [
      "to the right of its direction of motion, an effect that increases with latitude and with the speed of the moving air.",
      "to the left of its direction of motion, the opposite of the actual deflection direction in the Northern Hemisphere.",
      "directly toward the nearest area of low pressure, with no deflection to either side involved in the Coriolis effect at all.",
      "only at the equator, with the Coriolis effect considered negligible or entirely absent at all other latitudes.",
    ],
    answer: 0,
    explain:
      "In the Northern Hemisphere, the Coriolis force deflects moving air to the right of its direction of travel (and to the left in the Southern Hemisphere) -- an effect that strengthens with increasing latitude (it's weakest near the equator, not strongest there, the opposite of one common misconception) and with the speed of the moving air, and it's this deflection, working together with the pressure gradient force, that produces the characteristic wind flow patterns around highs and lows rather than air simply flowing straight from high to low pressure.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Embedded thunderstorms -- thunderstorm cells obscured within a broader layer of stratiform cloud -- present a particular hazard because",
    options: [
      "they may not be visible to a pilot relying on outside visual reference alone, making them difficult to detect and avoid without weather radar or similar equipment.",
      "they are, by definition, less intense than an isolated, clearly visible thunderstorm cell, making them a comparatively minor operational concern.",
      "they occur exclusively at night, with embedded thunderstorms considered a non-issue for any daytime flight.",
      "they are always accompanied by clear, cloud-free gaps immediately surrounding the storm cell, making them just as easy to visually identify and avoid as an isolated cell.",
    ],
    answer: 0,
    explain:
      "Because an embedded thunderstorm is hidden within a larger mass of stratiform cloud, a pilot relying purely on visual detection may not see it coming the way an isolated, visually obvious cumulonimbus cell would be seen -- which is exactly why airborne weather radar (or ATC radar advisories) becomes particularly valuable in that situation, and an embedded cell isn't necessarily any less intense than a visible one, isn't confined to night flying, and by definition lacks the clear surrounding gaps that would make it easy to visually pick out.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The dew point temperature, reported alongside air temperature in a METAR, represents",
    options: [
      "the temperature to which air would need to be cooled, at constant pressure and moisture content, for it to become saturated and condensation to begin.",
      "the actual current temperature of the air, making dew point and air temperature simply two different names for an identical value.",
      "the highest temperature the air is forecast to reach at any point during the current day, a forecast maximum rather than a current moisture-related value.",
      "a value entirely unrelated to atmospheric moisture content, describing instead the air's current barometric pressure trend.",
    ],
    answer: 0,
    explain:
      "Dew point is fundamentally a moisture-content indicator: it's the temperature air would need to cool to (without changing pressure or moisture content) to become saturated, at which point condensation (dew, fog, or cloud) begins to form -- the closer the dew point is to the actual air temperature, the closer the air already is to saturation, which is why the temperature/dew-point spread is a key indicator used in assessing fog, cloud, and precipitation potential, and it's not simply identical to air temperature, a forecast high, or a pressure-related figure.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Frost forming on an aircraft parked outside overnight is most commonly the result of",
    options: [
      "radiational cooling of the aircraft's surface below the surrounding air's dew point (specifically its frost point) on a clear, calm night, causing water vapour to deposit directly as ice.",
      "rain that fell earlier in the day and subsequently froze solid on the aircraft's surface as temperatures dropped overnight.",
      "warm, moist air blowing across a colder body of water and then over the aircraft, an advection-driven rather than a radiational-cooling-driven process.",
      "frost forming exclusively as a byproduct of active precipitation occurring at the time frost is observed, with clear-sky conditions considered incompatible with frost formation.",
    ],
    answer: 0,
    explain:
      "Overnight frost typically forms through radiational cooling: on a clear night with little cloud cover to trap outgoing heat, and with light or calm wind, an exposed surface (such as an aircraft's skin) can cool below the surrounding air's frost point, causing water vapour in contact with that cold surface to deposit directly as ice crystals -- a process distinct from rain freezing on contact, advection fog's warm-air-over-cold-water mechanism, or active precipitation, and it's specifically associated with clear, calm conditions rather than incompatible with them.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a METAR, sky condition (cloud cover) is reported using terms such as FEW, SCT (scattered), BKN (broken), and OVC (overcast), which describe",
    options: [
      "the fraction of the sky covered by cloud at that layer's height, expressed using a standardized scale of eighths (oktas) of sky coverage.",
      "the specific cloud genus (such as cumulus or stratus) present at that layer, with coverage amount playing no role in these particular terms.",
      "the precise cloud base height alone, with the amount of sky actually covered by cloud not reflected in these terms at all.",
      "the expected duration, in hours, for which that reported cloud layer is forecast to persist, a time-based rather than coverage-based measurement.",
    ],
    answer: 0,
    explain:
      "These terms describe how much of the sky is covered by cloud at a given reported layer, using a standardized eighths (oktas) scale: FEW covers roughly one to two oktas, SCT roughly three to four, BKN roughly five to seven, and OVC a full eight oktas (completely overcast) -- a coverage-amount classification, reported alongside (but distinct from) the layer's height and separate from any specific cloud genus identification or forecast duration.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Clouds are broadly classified into families based on their typical height (low, middle, and high) and into genera based on their form, with the fundamental distinction between the cumuliform and stratiform forms being that",
    options: [
      "cumuliform clouds develop vertically, with a heaped or puffy appearance associated with convective (rising) air currents, while stratiform clouds form in flat, layered sheets associated with more stable, horizontally extensive air.",
      "cumuliform clouds are, by definition, always found only at high altitude, while stratiform clouds are, by definition, always found only at low altitude.",
      "cumuliform and stratiform are simply two alternate names for the identical cloud form, with no actual structural or formative difference between them.",
      "cumuliform clouds always produce precipitation, while stratiform clouds, by definition, never produce any precipitation of any kind.",
    ],
    answer: 0,
    explain:
      "Cumuliform and stratiform describe two fundamentally different cloud-formation processes: cumuliform clouds (like cumulus and cumulonimbus) build vertically through convective, rising air currents, giving them a heaped, puffy structure, while stratiform clouds (like stratus and altostratus) form in broad, flat, layered sheets typically associated with more stable air gently lifted over a wide horizontal area -- height family (low/middle/high) is a separate classification axis from this cumuliform/stratiform distinction, and both forms can, in different circumstances, produce precipitation.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The tropopause is defined as",
    options: [
      "the boundary layer separating the troposphere below from the stratosphere above, generally marked by a change from decreasing to roughly constant (or slowly changing) temperature with increasing altitude.",
      "a fixed altitude, identical everywhere on Earth and at every time of year, marking the top of the atmosphere entirely.",
      "the boundary between the stratosphere and the even higher mesosphere, one layer higher in the atmosphere than its actual position.",
      "a layer characterized by continuously and rapidly decreasing temperature with altitude, at a rate steeper than found anywhere else in the atmosphere.",
    ],
    answer: 0,
    explain:
      "The tropopause marks the transition from the troposphere (where temperature generally decreases with altitude) to the stratosphere (where temperature levels off and, higher up, can even begin increasing with altitude) -- its altitude isn't fixed globally, varying with latitude and season (generally higher over the tropics and lower over the poles), and it's specifically the troposphere/stratosphere boundary, not the (much higher) stratosphere/mesosphere boundary, and it's characterized by a change to a much more gradual temperature trend, not an especially steep decrease.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A steadily falling barometric pressure trend at a station, observed over several hours, often serves as an indicator of",
    options: [
      "an approaching area of low pressure or an approaching frontal system, frequently associated with deteriorating weather conditions.",
      "an approaching area of high pressure specifically, with falling pressure generally indicating improving rather than deteriorating conditions.",
      "no meaningful weather trend at all, since barometric pressure trend is considered unrelated to short-term weather development.",
      "a guaranteed, precisely timed arrival of precipitation within exactly one hour, a specific and reliably fixed forecast window.",
    ],
    answer: 0,
    explain:
      "A sustained falling pressure trend is a classic indicator that an area of lower pressure -- often accompanying an approaching frontal system or developing weather disturbance -- is nearing the station, frequently, though not with perfect precision or timing, foreshadowing deteriorating weather; it's the opposite association from an approaching high (generally linked to improving conditions and rising pressure), it's a genuinely meaningful trend rather than an unrelated one, and it doesn't reliably specify an exact, fixed arrival time for any resulting precipitation.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Condensation trails (contrails), sometimes visible behind an aircraft at high altitude, form primarily when",
    options: [
      "water vapour in engine exhaust (combined with existing atmospheric moisture) condenses and, in sufficiently cold air, freezes into visible ice crystals shortly after being expelled.",
      "the aircraft's fuselage generates enough frictional heat at high speed to visibly vapourize surrounding moisture, an airframe-generated rather than an engine-exhaust-driven process.",
      "fuel is deliberately vented overboard and ignited, producing a visible trail that is unrelated to any water vapour or condensation process.",
      "cabin pressurization air is vented directly overboard at altitude, with contrail formation entirely unrelated to the engine's own combustion exhaust.",
    ],
    answer: 0,
    explain:
      "Jet engine combustion produces water vapour as a byproduct, and in the cold, often already near-saturated air found at typical cruising altitudes, that added exhaust moisture readily condenses and freezes into visible ice crystals -- a genuinely exhaust-driven, moisture-condensation process (not simple airframe frictional heating, deliberate fuel venting/ignition, or cabin air venting), and whether a persistent contrail forms (and how long it lasts) also depends on the ambient humidity and temperature of the air the aircraft is flying through.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A multicell thunderstorm cluster, as distinguished from a single, isolated thunderstorm cell, consists of",
    options: [
      "several thunderstorm cells at different stages of their individual life cycles, grouped together and often interacting, so that as one cell dissipates another nearby cell may be developing or mature.",
      "a single thunderstorm cell that has simply grown to an unusually large physical size, with 'multicell' referring to size rather than to the presence of multiple distinct cells.",
      "thunderstorm cells that, by definition, can never produce any hazardous weather, since hazard potential is considered exclusive to single-cell and supercell storms.",
      "cells that are entirely independent of one another, with absolutely no interaction, shared outflow, or influence between the individual cells within the cluster.",
    ],
    answer: 0,
    explain:
      "A multicell cluster is genuinely made up of multiple distinct thunderstorm cells, typically at varying stages of development (some forming, some mature, some dissipating) within a relatively organized group, often with new cell development triggered along the outflow boundary of a preceding cell -- a structurally different organization from a single isolated cell (which the older analogy of the classic three-stage life cycle most directly describes) or a supercell (organized around a single, persistent, rotating updraft), and a multicell cluster is very capable of producing hazardous weather, including heavy precipitation, gusty outflow winds, and turbulence.",
    reference: "TP 690 Section 8 - Meteorology",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In METAR/SPECI reporting, a 'squall' (SQ) refers specifically to",
    options: [
      "a sudden, sharp increase in wind speed (to a specified threshold), sustained for at least a defined minimum duration, then followed by a comparatively rapid decrease.",
      "a steady, gradually increasing wind that builds over the course of many hours before reaching its eventual peak speed.",
      "an observed decrease in wind speed only, with 'squall' specifically describing a lull rather than any increase in wind.",
      "a specific type of precipitation intensity, with 'squall' referring to a rainfall rate rather than to any wind-speed phenomenon at all.",
    ],
    answer: 0,
    explain:
      "A squall, as a specifically reported METAR/SPECI weather phenomenon, is a sudden and marked increase in wind speed to at least a defined threshold, sustained for at least a specified minimum duration, and followed by a relatively rapid decrease back toward the prior wind speed -- a genuinely sudden, gust-like event rather than a gradual multi-hour windbuild, a wind lull, or a precipitation-rate measurement (distinct from, though sometimes associated with, a squall line, the broader line-of-thunderstorms structure covered elsewhere).",
    reference: "TP 690 Section 8 - Meteorology",
  },
];
