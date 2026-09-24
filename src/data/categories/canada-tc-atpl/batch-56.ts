import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 56 -- Section 2: Meteorology,
// sixth pass. Original questions written from the TC AIM 2026-1 and
// the TP 690 syllabus (topic headings only, no sample questions).
// Covers mixed icing, jet-stream-associated clear air turbulence,
// the TAF PROB group, isallobars, cumulonimbus anvil formation,
// gust fronts, smoke/haze visibility reduction, dew point spread as
// a fog indicator, upper wind and temperature forecasts, hail
// formation, GFA panel structure, PIREP submission, mountain wave
// severity factors, isotherms, radiation fog dissipation, and the
// METAR peak wind remark -- topics not yet addressed in batches 8,
// 18, 26, 36, or 46. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_56_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Mixed icing, as distinguished from pure clear ice or pure rime ice, occurs when",
    options: [
      "an aircraft encounters no supercooled water at all, since mixed icing is understood to form exclusively from ice crystals with no liquid water content whatsoever.",
      "the icing occurs only on the ground, since mixed icing is understood to be a term describing ground frost formation rather than any in-flight icing encounter.",
      "an aircraft encounters a combination of cloud and precipitation conditions, such as a mix of ice crystals and supercooled water, that deposits both clear and rime ice characteristics during the same encounter.",
      "the aircraft is flying above the freezing level, since mixed icing is understood to require air temperatures above 0 degrees Celsius throughout the flight, a condition under which no supercooled water or ice crystals could plausibly persist in the surrounding cloud.",
    ],
    answer: 2,
    explain:
      "Mixed icing occurs when an aircraft encounters a combination of cloud and precipitation conditions -- such as varying droplet sizes or a mix of ice crystals and supercooled water -- that deposits characteristics of both clear ice and rime ice during the same icing encounter, rather than being a ground-only phenomenon, requiring the complete absence of supercooled water, or requiring above-freezing temperatures throughout.",
    reference: "TC AIM MET - Aircraft Icing Types",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Clear air turbulence (CAT) is frequently associated with the jet stream primarily because",
    options: [
      "the jet stream itself contains no wind shear whatsoever, making any association between CAT and the jet stream coincidental rather than causal.",
      "the jet stream is always accompanied by visible cumulonimbus cloud, making the turbulence associated with it fundamentally different from 'clear air' turbulence by definition.",
      "CAT only occurs well below the jet stream's altitude, with no meaningful relationship between the two at the jet stream's own flight levels.",
      "the strong wind shear found near the jet stream's core and its boundaries can generate significant turbulence even in the absence of any visible cloud.",
    ],
    answer: 3,
    explain:
      "CAT is frequently associated with the jet stream because the strong wind shear found near the jet core and its boundaries (both horizontally and vertically) can generate significant turbulence even in the complete absence of visible cloud -- this shear-driven mechanism is a genuine, well-established cause, not merely coincidental, and it occurs at or near the jet stream's own altitude, not predominantly well below it.",
    reference: "TC AIM MET - Clear Air Turbulence and the Jet Stream",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a TAF, the PROB (probability) group, generally followed by a percentage such as PROB30 or PROB40, is used to indicate",
    options: [
      "a forecast of specific conditions, such as thunderstorms, that have a stated probability of occurring during the indicated period, distinct from the main forecast.",
      "the probability that the entire TAF will later be amended, rather than the probability of any specific weather condition occurring during a given period.",
      "wind direction variability exclusively, with no application to any other forecast element such as visibility, cloud, or precipitation, a limitation inconsistent with how the PROB group is actually applied across a TAF.",
      "the exact time at which a forecast condition will occur, functioning as a precise timing indicator rather than a probability-based one, a framing that overlooks the percentage figure always attached to the group.",
    ],
    answer: 0,
    explain:
      "The PROB group in a TAF indicates a forecast of specific meteorological conditions -- such as thunderstorms -- that have a stated probability (commonly 30% or 40%) of occurring during the indicated period, distinct from the higher confidence implied by the main body of the forecast; it does not indicate the likelihood of a later TAF amendment, it is not a precise timing indicator, and it can apply to various forecast elements, not wind direction alone.",
    reference: "TC AIM MET - TAF PROB Group",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Isallobars, lines drawn on a chart connecting points of equal pressure change over a specified period, are useful to forecasters primarily because",
    options: [
      "they show the current, static pressure value at each point, an application already served by isobars, making isallobars a purely redundant and unnecessary duplicate concept.",
      "rapid pressure change (a tightly packed isallobaric pattern) can indicate significant developing or dissipating weather systems and help anticipate future pressure system movement.",
      "they are used exclusively for depicting wind direction, with no application whatsoever to any pressure-related forecasting purpose, despite isallobars being derived directly from sequential pressure observations.",
      "they apply only to temperature analysis, with no actual relationship to atmospheric pressure despite what the term would otherwise suggest, even though the term itself describes a rate of pressure change.",
    ],
    answer: 1,
    explain:
      "Isallobars connect points of equal pressure change over a specified period, and a tightly packed isallobaric pattern (indicating rapid pressure change) can help forecasters identify significant developing or dissipating weather systems and anticipate how pressure systems will move -- this is a distinct application from isobars, which show pressure value rather than the rate of pressure change, and isallobars are neither a temperature-only nor a wind-direction-only tool.",
    reference: "TC AIM MET - Isallobars",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The characteristic anvil shape often seen atop a mature cumulonimbus cloud forms when",
    options: [
      "the cloud is dissipating entirely, with the anvil shape understood to appear only during a thunderstorm's final, weakening dissipating stage rather than at cloud maturity.",
      "the cloud's rising air current accelerates without limit through the tropopause and into the stratosphere, with the anvil shape resulting from continued unrestricted vertical growth.",
      "the rising air current reaches the stable tropopause layer, where further vertical development is inhibited and the cloud top spreads out horizontally in the direction of the upper-level wind.",
      "surface friction slows the cloud's base, an effect confined to the lowest levels of the cloud with no relationship to the shape observed at the cloud top.",
    ],
    answer: 2,
    explain:
      "The anvil shape at the top of a mature cumulonimbus forms when the rising air current reaches the stable tropopause layer, where further vertical development is inhibited by the surrounding stable air, causing the cloud top to spread out horizontally in the direction of the upper-level wind -- rather than accelerating unimpeded into the stratosphere, this spreading is specifically associated with the mature stage (not only the dissipating stage), and it results from an upper-level effect, not surface friction on the cloud base.",
    reference: "TC AIM MET - Cumulonimbus Anvil",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A gust front, associated with a thunderstorm's downdraft and outflow, is best described as",
    options: [
      "a feature associated exclusively with a thunderstorm's updraft, with the downdraft and outflow contributing nothing to the formation of a gust front, a characterization that overlooks the outflow boundary's documented role in it.",
      "a slow, gradual pressure and wind change occurring over many hours, the opposite of the sudden onset actually associated with a gust front, a description more fitting of a slow-moving frontal passage.",
      "a purely upper-level phenomenon with no surface effect whatsoever, unrelated to any wind shift or gust experienced by aircraft or observers on the ground.",
      "the leading edge of relatively cool, gusty air spreading out along the surface ahead of or around a thunderstorm, which can produce a sudden and significant wind shift and gust.",
    ],
    answer: 3,
    explain:
      "A gust front is the leading edge of relatively cool, gusty air spreading out along the surface ahead of or around a thunderstorm as a result of its downdraft and outflow, and it can produce a sudden, significant wind shift and gust -- it is fundamentally a surface phenomenon driven by the downdraft (not the updraft), and it is characterized by a sudden, not gradual, onset.",
    reference: "TC AIM MET - Gust Fronts",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Smoke or haze, whether from wildfire activity or other sources, can significantly reduce visibility for aviation purposes primarily because",
    options: [
      "airborne particulate matter scatters and absorbs light, degrading horizontal visibility even when no cloud, fog, or precipitation is present.",
      "smoke and haze have no effect on visibility whatsoever, since visibility reduction is understood to result exclusively from cloud, fog, or precipitation.",
      "smoke particles are transparent to visible light, meaning they cannot physically degrade visibility regardless of their concentration in the atmosphere.",
      "smoke and haze affect only vertical visibility (as reported when the sky is obscured), with no effect on horizontal visibility at the surface.",
    ],
    answer: 0,
    explain:
      "Smoke or haze reduces visibility because airborne particulate matter scatters and absorbs light, degrading horizontal visibility even when no cloud, fog, or precipitation is present -- this is a real and often significant visibility hazard (particularly during wildfire season), not something limited to vertical visibility reporting or something with no visibility effect due to the particles being optically transparent.",
    reference: "TC AIM MET - Smoke and Haze",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A narrowing temperature/dew point spread, observed as evening approaches under clear, calm conditions, is a useful indicator to a forecaster because it",
    options: [
      "is relevant only to forecasting thunderstorm activity, with no application whatsoever to fog or low stratus cloud formation, despite the spread's well-established use as a radiation fog indicator.",
      "suggests an increasing likelihood of fog or low cloud forming overnight, since the air is approaching saturation as the temperature cools toward the dew point.",
      "indicates the air is moving further from saturation, the opposite of the actual relationship between a narrowing spread and approaching saturation.",
      "has no forecasting value at all, since temperature/dew point spread is understood to be unrelated to the likelihood of fog or low cloud formation.",
    ],
    answer: 1,
    explain:
      "A narrowing temperature/dew point spread under clear, calm evening conditions suggests an increasing likelihood of fog or low cloud forming overnight, since the air is approaching saturation as the temperature cools toward the dew point -- this is a standard forecasting indicator for radiation fog risk, and a narrowing spread means the air is moving closer to, not further from, saturation.",
    reference: "TC AIM MET - Fog Forecasting Indicators",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An upper wind and temperature forecast, providing forecast wind and temperature data at various flight levels, is used by pilots primarily to",
    options: [
      "replace the need for any surface weather observation or forecast, since upper wind and temperature data alone is understood to be sufficient for a complete preflight weather briefing.",
      "forecast surface wind exclusively, despite the product's name suggesting a broader application to conditions at various flight levels.",
      "support flight planning, including selecting a favourable cruising altitude, estimating fuel burn, and anticipating temperature-related effects such as icing risk or engine performance.",
      "provide information relevant only to ground operations, with no application to any in-flight planning consideration such as cruising altitude selection.",
    ],
    answer: 2,
    explain:
      "An upper wind and temperature forecast supports flight planning by providing forecast wind and temperature data at various flight levels, helping a pilot select a favourable cruising altitude, estimate fuel burn, and anticipate temperature-related effects such as icing risk -- it complements rather than replaces surface observations and forecasts, it is directly relevant to in-flight planning (not only ground operations), and it genuinely covers various flight levels rather than surface wind alone.",
    reference: "TC AIM MET - Upper Wind and Temperature Forecasts",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Hail forms within a thunderstorm when",
    options: [
      "hail forms only in stratiform (layered) cloud with no associated convective activity, rather than within the strong vertical currents of a thunderstorm, a claim at odds with hail's known association with strong convective updrafts.",
      "raindrops simply freeze once during a single pass through the freezing level, with no repeated cycling through the storm's updraft required to form hail, though the layered structure inside a hailstone points to multiple such passes.",
      "hail formation has no relationship to a thunderstorm's updraft strength at all, since hail size is understood to depend solely on surface temperature rather than any in-cloud process.",
      "ice particles are carried repeatedly through the storm's strong updraft, accumulating ice as they pass through supercooled water, until too heavy for the updraft to support and fall.",
    ],
    answer: 3,
    explain:
      "Hail forms when ice particles are carried repeatedly through a thunderstorm's strong updraft, accumulating additional layers of ice as they pass through regions of supercooled water, until they become too heavy for the updraft to support and fall to the ground -- this repeated cycling (rather than a single freezing pass) is central to hail growth, updraft strength is a major factor in the size hail can reach, and it is fundamentally a convective (thunderstorm), not stratiform, process.",
    reference: "TC AIM MET - Hail Formation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A Graphic Area Forecast (GFA) issue is generally structured as a pair of charts, commonly distinguishing",
    options: [
      "clouds and weather information from icing, turbulence, and freezing level information, with each type of information presented on its own dedicated chart within the issue.",
      "a single combined chart with no distinction at all between different categories of forecast information, contrary to the pairing generally used in an actual GFA issue.",
      "domestic Canadian airspace information from information covering United States airspace exclusively, with no distinction based on the type of weather information presented.",
      "morning-only forecast information from afternoon-only forecast information, with no distinction based on the category of weather element being depicted.",
    ],
    answer: 0,
    explain:
      "A GFA issue is generally structured as a pair of charts distinguishing clouds and weather information from icing, turbulence, and freezing level information, with each category presented on its own dedicated chart -- this is a distinction by type of weather information, not a single undifferentiated chart, a domestic-versus-US split, or a morning-versus-afternoon split.",
    reference: "TC AIM MET - GFA Chart Structure",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A pilot report (PIREP), submitted to relay observed en route weather conditions, is generally intended to be provided",
    options: [
      "exclusively by commercial air transport pilots, with private and other pilots understood to be prohibited from submitting a PIREP under any circumstance.",
      "to ATC or a flight information service, using a standardized format covering relevant items such as location, time, and the specific condition observed, so it can be relayed to other users.",
      "only after landing, with no provision for submitting a PIREP while the observation is actually being made in flight, even though most PIREPs are in practice relayed while the condition is still current.",
      "in an entirely unstructured, free-form manner, since PIREPs are understood to have no standardized format or expected content items, a characterization inconsistent with the standardized location, time, and condition items expected.",
    ],
    answer: 1,
    explain:
      "A PIREP is generally provided to ATC or a flight information service, using a standardized format covering relevant items such as location, time, and the specific condition observed, so that it can be effectively relayed to other users -- PIREPs are commonly submitted in flight while conditions are current, they follow a recognized standardized format rather than being entirely free-form, and any pilot, not only commercial air transport pilots, can and is encouraged to submit one.",
    reference: "TC AIM MET - Pilot Reports (PIREPs)",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The severity of mountain wave turbulence encountered downwind of a mountain range is generally influenced by factors including",
    options: [
      "wind direction parallel to the ridge line exclusively, since perpendicular wind component and air mass stability are understood to have no bearing on mountain wave severity.",
      "surface temperature exclusively, with wind speed, wind direction, and atmospheric stability all understood to be irrelevant to mountain wave turbulence severity.",
      "the strength of the wind blowing perpendicular to the ridge line and the stability of the air mass, with stronger perpendicular wind and greater stability generally associated with more pronounced wave activity.",
      "the time of day alone, with mountain wave severity understood to depend entirely on whether the encounter occurs during daylight or darkness, regardless of wind or stability.",
    ],
    answer: 2,
    explain:
      "Mountain wave turbulence severity is generally influenced by the strength of the wind blowing perpendicular to the ridge line and the stability of the air mass, with stronger perpendicular wind and greater atmospheric stability generally associated with more pronounced wave activity -- wind direction parallel to the ridge is not the primary driver, and neither time of day alone nor surface temperature alone is the determining factor, though wind and stability genuinely are.",
    reference: "TC AIM MET - Mountain Wave Turbulence",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Isotherms, lines drawn on a chart connecting points of equal temperature, are used on upper air charts primarily to",
    options: [
      "depict wind speed exclusively, with no actual relationship to air temperature despite what the term 'isotherm' would otherwise suggest.",
      "depict pressure value exclusively, making isotherms functionally identical to isobars despite the different physical quantity each term's name would suggest.",
      "apply only to surface charts, with no meaningful use of isotherms on any upper air chart depicting conditions above the surface.",
      "depict the horizontal temperature pattern at a given altitude, helping identify features such as temperature gradients, warm or cold air advection, and areas relevant to icing risk.",
    ],
    answer: 3,
    explain:
      "Isotherms connect points of equal temperature and, on upper air charts, help depict the horizontal temperature pattern at a given altitude, identifying features such as temperature gradients, warm or cold air advection, and areas relevant to icing risk -- they are distinct from isobars (which depict pressure), they are genuinely used on upper air charts (not surface charts alone), and they depict temperature, not wind speed.",
    reference: "TC AIM MET - Isotherms",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Radiation fog, having formed overnight under clear, calm conditions, generally dissipates the following morning primarily because",
    options: [
      "solar heating warms the surface and the air above it, increasing the temperature/dew point spread and evaporating the fog from the ground up.",
      "radiation fog is understood to never dissipate on its own, persisting indefinitely until a frontal passage physically displaces the air mass in which it formed.",
      "the fog is blown away entirely by strong surface winds, since wind, rather than solar heating, is understood to be the primary mechanism responsible for radiation fog dissipation.",
      "cloud cover increases overhead, blocking solar heating entirely, since blocked rather than increased solar heating is understood to be the actual mechanism of dissipation.",
    ],
    answer: 0,
    explain:
      "Radiation fog generally dissipates the following morning as solar heating warms the surface and the air above it, increasing the temperature/dew point spread and evaporating the fog from the ground up -- the conditions favourable for radiation fog formation (clear, calm) are generally light-wind conditions, so wind is not the primary dissipation mechanism, the fog does not persist indefinitely absent a frontal passage, and dissipation results from increased, not blocked, solar heating.",
    reference: "TC AIM MET - Radiation Fog Dissipation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A METAR remark reading 'PK WND 28045/1215' indicates",
    options: [
      "an average wind speed calculated over the preceding 24-hour period, rather than a specific peak wind value observed at a specific time.",
      "a peak wind of 280 degrees at 45 knots, observed at 1215 UTC, reported because it met the criteria for inclusion as a significant peak wind remark.",
      "a forecast (rather than observed) wind value expected at some future time, despite METAR remarks being understood to report only conditions already observed.",
      "the current, ongoing wind reported at the time the METAR was issued, duplicating information already given in the main body of the report with no additional value.",
    ],
    answer: 1,
    explain:
      "A METAR 'PK WND' remark reports a peak wind observed at a specific time -- in this example, 280 degrees at 45 knots, observed at 1215 UTC -- included because it met the criteria for a significant peak wind worth separately noting, distinct from the routine current wind already reported in the main body of the METAR; it reports an actual past observation, not a forecast value or a 24-hour average.",
    reference: "TC AIM MET - METAR Remarks",
  },
];
