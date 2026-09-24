import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 8 -- Section 8: Meteorology
// (SAMRA). Original questions written from general aviation meteorology
// knowledge and the TP 690 syllabus (topic headings only, no sample
// questions). Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_08_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Station pressure differs from mean sea level (MSL) pressure in that station pressure is",
    options: [
      "measured only at coastal stations, since inland stations are said to be physically unable to report station pressure at all.",
      "the actual, unadjusted atmospheric pressure measured at the station's own elevation, while MSL pressure has been mathematically reduced to what the pressure would be at sea level.",
      "the same value as MSL pressure at every station, since pressure is not thought to vary meaningfully with elevation over short distances.",
      "always higher than MSL pressure at every station, regardless of the station's actual elevation above sea level.",
    ],
    answer: 1,
    explain:
      "Station pressure is simply what the barometer at that location actually reads, unadjusted. Because pressure decreases with elevation, comparing raw station pressures from stations at different elevations wouldn't reveal the actual horizontal pressure pattern -- so station pressure is mathematically reduced to an equivalent sea-level value (MSL pressure) for use on weather maps and in altimeter setting calculations.",
    reference: "TP 690 Section 8 - Atmospheric Pressure, Station Pressure / Mean Sea Level Pressure",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A temperature inversion is a layer of the atmosphere in which",
    options: [
      "pressure increases with height at every single level, entirely unrelated to any temperature behaviour occurring within that layer.",
      "temperature remains completely constant with height throughout the layer, neither increasing nor decreasing at any point.",
      "temperature increases with height, the opposite of the normal decrease expected in the troposphere.",
      "temperature decreases with height at a rate exactly matching the ICAO Standard Atmosphere lapse rate.",
    ],
    answer: 2,
    explain:
      "An inversion is specifically a reversal of the normal tropospheric pattern: temperature rises with increasing altitude through the inversion layer rather than falling. Inversions commonly form through radiational cooling of the surface overnight, and they matter operationally because they tend to trap moisture, smoke, and haze, and can be associated with low-level wind shear and turbulence at their boundaries.",
    reference: "TP 690 Section 8 - Temperature, Inversions",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The Dry Adiabatic Lapse Rate (DALR) applies to a parcel of rising air that is",
    options: [
      "saturated, cooling at a faster rate per 1,000 ft of ascent than an unsaturated parcel of the same air would.",
      "identical in cooling rate to a saturated parcel, since latent heat release has no effect on lapse rate.",
      "not actually cooling at all as it rises, since adiabatic processes involve no temperature change.",
      "unsaturated, cooling at a faster rate per 1,000 ft than a saturated parcel would.",
    ],
    answer: 3,
    explain:
      "An unsaturated (dry) rising parcel cools purely through expansion as it moves to lower pressure, at a rate of roughly 3°C per 1,000 ft (the DALR). Once the parcel becomes saturated and condensation begins, the latent heat released by condensation partially offsets the cooling, so the Saturated Adiabatic Lapse Rate (SALR) is a slower rate of cooling than the DALR -- not faster.",
    reference: "TP 690 Section 8 - Moisture, Saturated/Dry Adiabatic Lapse Rates",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The atmosphere is considered unstable when the environmental (actual) lapse rate is",
    options: [
      "steeper than the appropriate adiabatic lapse rate, so a displaced parcel of air continues to rise (or sink) on its own once disturbed.",
      "shallower than the appropriate adiabatic lapse rate, so a displaced parcel of air always returns fully to its original level.",
      "exactly equal to the adiabatic lapse rate at every single level, which is taken here as the definition of an unstable atmosphere.",
      "unrelated to atmospheric stability altogether, which in this view depends only on relative humidity at the surface, not on lapse rates.",
    ],
    answer: 0,
    explain:
      "Stability compares how fast the surrounding (environmental) air actually cools with height against how fast a displaced parcel would cool adiabatically. If the environment cools faster (a steeper environmental lapse rate) than the rising parcel does, the parcel stays warmer -- and therefore less dense -- than its surroundings at each level, so it keeps accelerating upward: an unstable atmosphere. A shallower environmental lapse rate produces a stable atmosphere, where a displaced parcel is pushed back toward its original level.",
    reference: "TP 690 Section 8 - Stability and Instability, Lapse Rate and Stability",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Compared to stable air, unstable air is generally associated with",
    options: [
      "stratiform cloud development, generally poor visibility, and typically smooth, if sometimes persistent, flying conditions.",
      "cumuliform cloud development, good visibility (away from any showers), and convective turbulence.",
      "fog formation as the dominant characteristic, rather than any form of vertical cloud development.",
      "no cloud development of any kind whatsoever, regardless of the amount of moisture content present in the air mass.",
    ],
    answer: 1,
    explain:
      "Instability promotes vertical air movement, which is exactly what builds cumuliform clouds (cumulus, towering cumulus, cumulonimbus) through convection -- typically accompanied by good visibility between cloud cells (since particulates get mixed upward rather than trapped near the surface) but bumpy, convective turbulence. Stable air instead favours flat, layered stratiform cloud, often with poorer visibility and smoother -- though sometimes persistently overcast -- conditions.",
    reference: "TP 690 Section 8 - Stability and Instability, Characteristics of Stable/Unstable Air",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Orographic turbulence is caused by",
    options: [
      "the release of latent heat within a rapidly growing, vigorous cumulonimbus cloud during active convection over a broad area.",
      "friction between two air masses of noticeably different temperature and density along a sharp frontal boundary.",
      "airflow being mechanically disturbed as it passes over or around terrain features such as hills, mountains, or ridges.",
      "solar heating of the ground surface, producing rising thermals that are unrelated to the shape of the terrain.",
    ],
    answer: 2,
    explain:
      "Orographic (terrain-induced) turbulence is a mechanical effect: airflow forced up, over, and around irregular terrain becomes disturbed, often producing significant turbulence and, downwind of mountain ranges in the right conditions, standing mountain waves -- distinct from convective (thermal) turbulence, which is driven by surface heating rather than terrain shape.",
    reference: "TP 690 Section 8 - Turbulence, Orographic",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Clear Air Turbulence (CAT) is turbulence that occurs",
    options: [
      "only within the active core of a mature thunderstorm cell, and never outside of visible cloud at any altitude.",
      "only at low altitude, confined strictly within the atmospheric boundary layer nearest the surface.",
      "exclusively over mountainous terrain, and is therefore considered entirely synonymous with orographic turbulence.",
      "in cloud-free air, often associated with the wind shear found near jet streams or strong frontal boundaries.",
    ],
    answer: 3,
    explain:
      "CAT is specifically turbulence encountered outside of cloud (no visual or convective warning cues), commonly linked to the strong wind shear found near jet stream cores and along upper-level frontal zones -- a hazard precisely because it typically gives no visible warning the way convective turbulence within a cumulonimbus does.",
    reference: "TP 690 Section 8 - Turbulence, Clear Air Turbulence",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The wind at the surface tends to blow at an angle across the isobars, toward lower pressure, primarily because of",
    options: [
      "surface friction, which reduces wind speed and disrupts the balance between the pressure gradient force and the Coriolis force that holds the geostrophic wind parallel to the isobars aloft.",
      "the Coriolis force acting entirely alone at the surface, with absolutely no influence whatsoever from surface friction or terrain roughness.",
      "the presence of low-level cloud and precipitation, which are said to physically block the wind from ever flowing parallel to the isobars.",
      "temperature differences alone, with the pressure gradient force said to have no role at all in determining surface wind direction.",
    ],
    answer: 0,
    explain:
      "Aloft, above the frictional influence of the surface, wind tends to blow parallel to the isobars (geostrophic wind) as the pressure gradient force and Coriolis force balance. Near the surface, friction slows the wind, which weakens the Coriolis deflection relative to the pressure gradient force, so the wind ends up blowing at an angle across the isobars, with a component toward lower pressure.",
    reference: "TP 690 Section 8 - Wind, Friction",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A land breeze and a sea breeze are both examples of local wind circulations driven by",
    options: [
      "orographic lifting over coastal terrain features, entirely unrelated to any land-water temperature contrast.",
      "differential heating and cooling rates between land and adjacent water, reversing the direction of the local pressure gradient between day and night.",
      "frontal passage exclusively, and are said to be entirely unrelated to any diurnal, day-to-night heating cycle at any coastal, lakeside, or inland location.",
      "the jet stream's position shifting seasonally between the summer and winter months each year.",
    ],
    answer: 1,
    explain:
      "Land heats and cools much faster than water. During the day, the land warms faster, creating lower pressure over land relative to the cooler water, drawing air onshore (a sea breeze); at night, the land cools faster than the water, reversing the pattern and producing an offshore flow (a land breeze) -- a diurnal, thermally driven circulation distinct from frontal or jet-stream-related winds.",
    reference: "TP 690 Section 8 - Wind, Land and Sea Breezes",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A jet stream is best described as",
    options: [
      "a permanent, entirely unchanging feature that does not shift in location, altitude, or strength with the seasons.",
      "a phenomenon entirely unrelated to temperature gradients, driven instead purely by surface friction alone.",
      "a relatively narrow band of very strong winds concentrated near the tropopause, typically associated with strong horizontal temperature gradients.",
      "a band of strong low-level winds found only within the first few thousand feet above the surface, confined entirely within the frictional boundary layer near the ground.",
    ],
    answer: 2,
    explain:
      "Jet streams are narrow, fast-moving ribbons of wind concentrated near the tropopause, forming where strong horizontal temperature contrasts (such as along the polar front) create a correspondingly strong pressure/height gradient aloft -- their position, strength, and even number shift seasonally as those temperature contrasts shift, so they are far from a fixed, unchanging feature.",
    reference: "TP 690 Section 8 - Jet Streams, Frontal Jet Streams",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An air mass is classified (for example, as continental polar or maritime tropical) primarily according to",
    options: [
      "the type of cloud currently observed forming within the air mass at the time of classification.",
      "the air mass's current altitude above the surface at the moment of observation.",
      "the current geographic location of the air mass, regardless of where it originally formed.",
      "the temperature and moisture characteristics of the source region over which it formed.",
    ],
    answer: 3,
    explain:
      "Air mass classification is based on the source region's characteristics: 'continental' vs 'maritime' describes the moisture characteristic (dry vs moist) imparted by a land or water source region, while 'polar,' 'tropical,' or 'arctic' describes the temperature characteristic. Once formed, an air mass retains much of that character for a time even as it moves, though it gradually modifies as it travels over different surfaces.",
    reference: "TP 690 Section 8 - Air Masses, Classification",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A cold front is characterized, compared to a warm front, by",
    options: [
      "a steeper frontal slope and typically more abrupt, intense weather concentrated in a narrower band along and just ahead of the surface front.",
      "a shallower frontal slope and typically more gradual, widespread weather spread over a broad area ahead of the surface front.",
      "the complete absence of any associated cloud, precipitation, or any other significant weather whatsoever along its entire length and passage through the region.",
      "identical frontal slope and identical weather characteristics in absolutely every respect and location.",
    ],
    answer: 0,
    explain:
      "A cold front's denser cold air undercuts the warmer air ahead of it more steeply than a warm front's gentler overriding slope, which tends to concentrate cold-front weather (often including more intense showers or thunderstorms) into a relatively narrow band near the surface position of the front, rather than the broad, gradually thickening cloud and precipitation shield typically found well ahead of a warm front.",
    reference: "TP 690 Section 8 - Fronts, Cross-sections",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An occluded front forms when",
    options: [
      "a stationary front begins moving for the first time, and is said to immediately become a fully occluded front.",
      "a faster-moving cold front catches up to and overtakes a slower-moving warm front, lifting the warm air mass between them off the surface.",
      "two air masses of identical temperature and moisture characteristics meet head-on directly, with neither one ever displacing the other at all.",
      "a warm front and a cold front move apart from each other entirely, steadily increasing the distance separating them.",
    ],
    answer: 1,
    explain:
      "As a cold front, moving faster than the warm front ahead of it, catches up and undercuts the warm sector, the warm air mass is progressively lifted off the surface between the two frontal boundaries, producing an occluded front -- a structurally distinct stage in the life cycle of a frontal (mid-latitude) low-pressure system, not simply a slow-moving or stationary front.",
    reference: "TP 690 Section 8 - Fronts, Frontal Waves and Occlusions",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Clear ice (as opposed to rime ice) tends to form on an airframe when the aircraft encounters",
    options: [
      "dry snow, which is generally understood to not adhere to the airframe under normal circumstances or temperatures.",
      "small supercooled droplets that freeze almost instantly on contact, trapping air and producing a rough, opaque, and brittle ice deposit.",
      "large supercooled water droplets that spread out and freeze relatively slowly, such as in freezing rain or cumuliform cloud, forming a smooth, dense, and strongly adhering layer.",
      "conditions with no liquid water present at all, since clear ice is said to require only a sub-zero temperature with no moisture.",
    ],
    answer: 2,
    explain:
      "Clear ice forms from larger supercooled droplets (as found in freezing rain/drizzle or the more vigorous updrafts of cumuliform cloud) that don't freeze instantly on impact -- they spread across the surface before freezing, producing a smooth, dense, strongly adhering (and harder-to-remove) layer. Rime ice, by contrast, forms from smaller supercooled droplets (typically in stratiform cloud) that freeze almost immediately, trapping air and producing a rough, opaque, more brittle deposit.",
    reference: "TP 690 Section 8 - Aircraft Icing, Type of Ice",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Freezing rain reaching the surface indicates that, somewhere above, the precipitation passed through",
    options: [
      "no cloud at all, since freezing rain is said in this view to form exclusively through a process of direct sublimation of ice crystals.",
      "an entirely dry atmospheric column throughout its depth, unrelated to any liquid precipitation process occurring at any level.",
      "a column of air that was below freezing at every level from cloud base all the way to the surface, with no warm layer involved anywhere in the profile.",
      "a warm layer aloft (above freezing) that melted the precipitation into rain, followed by a shallow sub-freezing layer near the surface that supercools the rain without refreezing it before impact.",
    ],
    answer: 3,
    explain:
      "Freezing rain's classic signature is a temperature profile with a warm layer aloft (melting snow/ice crystals into liquid rain) sitting above a shallow, sub-freezing layer near the surface -- the rain becomes supercooled in that cold layer but doesn't have time to refreeze into ice pellets before reaching the ground, so it freezes on contact with the surface (or an airframe) instead. That structure is exactly why freezing rain is associated with a very hazardous clear-ice icing threat.",
    reference: "TP 690 Section 8 - Aircraft Icing, Freezing Rain and Drizzle",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The three conditions generally required for thunderstorm development are",
    options: [
      "sufficient low-level moisture, an unstable (conditionally unstable) atmosphere, and a lifting mechanism to initiate the upward motion.",
      "high pressure, persistently dry air, and a stable atmosphere throughout the entire depth of the troposphere.",
      "cold surface temperatures, persistently low humidity, and strong large-scale atmospheric subsidence that suppresses any vertical development entirely.",
      "a jet stream positioned directly overhead, with no requirement at all for moisture or atmospheric instability.",
    ],
    answer: 0,
    explain:
      "All three ingredients need to be present together: enough moisture to fuel condensation and cloud growth, an atmosphere unstable enough (once lifted) to keep the rising air accelerating upward, and some triggering mechanism (frontal lifting, orographic lifting, surface heating, or convergence) to actually start the parcel rising in the first place -- removing any one of the three generally prevents significant thunderstorm development.",
    reference: "TP 690 Section 8 - Thunderstorms, Requirements for Development",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The three stages of a typical single-cell thunderstorm's life cycle, in order, are",
    options: [
      "a single, entirely undifferentiated stage with no distinct phases or transitions at all.",
      "the cumulus (developing) stage, the mature stage, and the dissipating stage.",
      "the dissipating stage, then the cumulus stage, and finally the mature stage, in that specific order.",
      "the mature stage, then the cumulus stage, and finally the dissipating stage, in that specific order.",
    ],
    answer: 1,
    explain:
      "A single-cell thunderstorm progresses through the cumulus stage (dominated by updrafts as the cloud builds), the mature stage (updrafts and downdrafts coexist, producing the storm's most intense weather -- heavy rain, hail, lightning, gust fronts), and the dissipating stage (downdrafts dominate as the updraft is cut off, and the storm weakens).",
    reference: "TP 690 Section 8 - Thunderstorms, Life Cycle",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A microburst associated with a thunderstorm is best described as",
    options: [
      "a small, weak updraft that dissipates well before ever reaching the surface, posing no operational hazard at all.",
      "a phenomenon that occurs only during the winter months, associated exclusively with snow rather than convective storms.",
      "a small-scale, intense downdraft that spreads out rapidly upon reaching the surface, producing severe and rapidly changing wind shear.",
      "a large-scale, gentle downdraft covering an area of many tens of miles, with only gradual wind changes over an extended period of time.",
    ],
    answer: 2,
    explain:
      "A microburst is a concentrated, intense downdraft (often just a mile or two across) that hits the surface and spreads outward in all directions, producing a severe and very rapid change from headwind to tailwind (or vice versa) as an aircraft flies through it -- exactly the kind of abrupt, small-scale wind shear that has caused serious accidents during take-off and landing.",
    reference: "TP 690 Section 8 - Thunderstorms, Hazards - Downbursts and Microbursts",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Radiation fog typically forms",
    options: [
      "on windy, overcast nights, as strong low-level winds actively mix moist air down toward the surface layer.",
      "only over open water at night, and is said to never form over land under any circumstances, season, or moisture condition.",
      "only during daylight hours, as the sun's heating raises moist air to its saturation point rapidly.",
      "on clear, calm nights, as the ground cools rapidly by radiating heat, cooling the air just above it to its dew point.",
    ],
    answer: 3,
    explain:
      "Radiation fog needs clear skies (so the ground can radiate heat away efficiently) and light winds (enough to gently mix a shallow layer, but not so much as to prevent the surface layer from cooling and stir the fog away) -- under those conditions, the surface and the air just above it cool overnight until the air reaches saturation, forming a shallow layer of fog, most commonly seen over low-lying, moist land.",
    reference: "TP 690 Section 8 - Surface Based Layers, Fog Formation",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A METAR's remarks section reporting 'SLP' refers to",
    options: [
      "sea-level pressure, reported to help distinguish it from the separately reported altimeter setting group.",
      "the station's runway surface condition report, detailing contamination type and depth for the active runway.",
      "the sunlight period remaining before sunset at that particular reporting station.",
      "a required remark used only when the reporting station is temporarily unstaffed or automated.",
    ],
    answer: 0,
    explain:
      "The SLP remark reports sea-level pressure (derived from actual station temperature/pressure data) as a separate figure from the altimeter setting group reported earlier in the METAR -- the two don't necessarily correspond exactly, since SLP is based on actual observed temperature while the altimeter setting is calculated for standard atmosphere purposes.",
    reference: "TP 690 Section 8 - Aviation Weather Reports, Aviation Routine Weather Report (METAR)",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A SPECI report is issued",
    options: [
      "at the same fixed, scheduled interval as a routine METAR report, and never issued outside that schedule.",
      "when a significant change in weather conditions occurs between scheduled METAR observations.",
      "only for forecast, rather than actually observed, current weather conditions.",
      "only once per day at a fixed scheduled time, regardless of how significantly conditions subsequently change.",
    ],
    answer: 1,
    explain:
      "A SPECI (special report) is issued outside the routine METAR schedule whenever weather changes significantly enough to meet specified criteria (a rapid change in visibility, ceiling, wind, or the onset/cessation of certain phenomena) -- it's an observed report, like a METAR, just triggered by the change rather than by the clock.",
    reference: "TP 690 Section 8 - Aviation Weather Reports, SPECI",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A PIREP (or AIREP), a pilot report of observed weather conditions, is particularly valuable because it",
    options: [
      "replaces the need for any ground-based weather observation entirely at the reporting station or nearby stations.",
      "can only report the absence of significant weather, and can never report the presence of an actual hazard.",
      "provides an actual, in-flight observation (such as turbulence, icing, or cloud tops) that ground-based sensors and forecasts may not otherwise capture.",
      "is used only for post-flight record-keeping purposes, with no distribution at all to other pilots, dispatchers, or forecasters at any other facility or agency.",
    ],
    answer: 2,
    explain:
      "A PIREP gives forecasters and other pilots real, in-situ information -- actual turbulence intensity and location, icing type and severity, cloud tops, and so on -- that ground-based instruments and models can't directly observe, which is why pilots are encouraged to file them, especially when conditions differ from the forecast (in either direction).",
    reference: "TP 690 Section 8 - Aviation Weather Reports, Pilot Reports (PIREP/AIREP)",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A Graphic Area Forecast (GFA) is intended to depict",
    options: [
      "historical weather that has already occurred in the past, rather than an actual forecast of future conditions.",
      "only upper-level wind and temperature data at typical cruise altitudes, with no cloud or surface weather information included at all.",
      "a single point-forecast for one specific aerodrome only, in the same text format as a routine TAF.",
      "expected cloud, weather, and icing/turbulence conditions over a region, as a series of graphical charts valid at specified times.",
    ],
    answer: 3,
    explain:
      "The GFA is a graphical, area-wide product -- showing expected clouds/weather and icing/turbulence/freezing level information across a region on a series of charts valid at specific times -- giving a broader spatial picture than a single-aerodrome text forecast like a TAF, which is exactly why it's useful for planning a route rather than just a single destination.",
    reference: "TP 690 Section 8 - Aviation Forecasts, Graphical Area Forecasts (GFA)/AIRMET",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A SIGMET (Significant Meteorological Information) message is issued to warn of",
    options: [
      "weather phenomena that are potentially hazardous to all aircraft, such as severe turbulence, severe icing, thunderstorms, or volcanic ash.",
      "conditions relevant only to aircraft operating under VFR at low altitude, with no application at all to IFR flights.",
      "scheduled runway closures and other purely administrative aerodrome information of no meteorological relevance.",
      "routine, non-hazardous changes in wind direction only, of the kind expected during any normal, everyday frontal passage or diurnal cycle.",
    ],
    answer: 0,
    explain:
      "SIGMETs are reserved for weather phenomena significant enough to be hazardous to aircraft in general (not just to a particular category of operation) -- severe turbulence, severe icing, severe mountain waves, thunderstorms meeting certain criteria, volcanic ash, and similar hazards -- distinct from the routine data found in an area forecast or a TAF.",
    reference: "TP 690 Section 8 - Aviation Forecasts, Significant In-flight Weather Warning Message (SIGMET)",
  },
  {
    id: 25,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An upper-level analysis (ANAL) chart differs from an upper-level prognostic (PROG) chart in that the ANAL chart shows",
    options: [
      "no meaningful difference at all; the two chart types are said to display entirely identical information.",
      "observed conditions at a specific past time, while the PROG chart shows forecast conditions for a specific future time.",
      "surface-level data only, while PROG charts are said to be used exclusively for upper-level data instead.",
      "forecast conditions for a future time, while the PROG chart shows only observed, historical data collected from surface and upper-air stations.",
    ],
    answer: 1,
    explain:
      "An ANAL (analysis) chart is built from actual observed data at a specific valid time -- it's a snapshot of what conditions were, or currently are. A PROG (prognostic) chart, by contrast, is a forecast product showing expected conditions at a specified future valid time -- the distinction between analysis and prognosis is exactly the past/observed versus future/forecast difference.",
    reference: "TP 690 Section 8 - Weather Maps and Prognostic Charts, Upper Level Charts - ANAL / PROG",
  },
];
