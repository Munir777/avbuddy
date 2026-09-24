import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 46 -- Section 2: Meteorology,
// fifth pass. Original questions written from the actual TC AIM
// 2026-1 and the TP 690 syllabus (topic headings only, no sample
// questions). Covers density altitude, frontal weather sequences,
// stationary fronts, the Trowal, Arctic vs polar fronts, synoptic
// vs mesoscale systems, weather radar intensity, volcanic ash
// hazards, carburetor icing conditions, vertical visibility, QFE
// vs QNH, whiteout, blowing snow, METAR/TAF trend groups, and
// high-level significant weather charts -- topics not yet
// addressed in batches 8, 18, 26, or 36. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_46_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Density altitude is best described as",
    options: [
      "pressure altitude corrected for non-standard temperature, representing the altitude in the standard atmosphere at which the air's actual density would be found.",
      "the altitude read directly off the altimeter when it is set to the current station QNH, with no further correction applied.",
      "the true height of the aircraft above mean sea level, as measured by a radio altimeter rather than a barometric instrument.",
      "a value used only in meteorological forecasting that has no direct effect on aircraft takeoff or climb performance.",
    ],
    answer: 0,
    explain:
      "Density altitude is pressure altitude corrected for non-standard temperature -- it represents the altitude in the standard atmosphere at which the actual air density would be found, and because air density directly affects engine power, propeller efficiency, and lift, density altitude has a significant effect on takeoff distance and climb performance, unlike a simple QNH-corrected altimeter reading or a radio altimeter height above terrain.",
    reference: "TC AIM MET - Density Altitude",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "As a warm front approaches, the cloud sequence typically observed at the surface progresses, over many hours, from",
    options: [
      "high cirrus, through cirrostratus and altostratus, to low nimbostratus with steady precipitation as the front nears.",
      "towering cumulonimbus directly to clear skies, since warm fronts produce an abrupt transition with no intervening cloud layers.",
      "low stratus and fog immediately, with no higher cloud forms appearing until well after frontal passage.",
      "scattered cumulus only, since warm fronts are not typically associated with any organized layered cloud sequence.",
    ],
    answer: 0,
    explain:
      "A classic approaching warm front produces a gradually lowering and thickening cloud sequence -- beginning with high cirrus far ahead of the surface front, progressing through cirrostratus and altostratus, and culminating in low nimbostratus with steady precipitation as the front itself nears -- rather than an abrupt transition or an unstructured scattering of cumulus.",
    reference: "TC AIM MET - Frontal Weather",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The passage of a typical cold front is generally marked by",
    options: [
      "a relatively abrupt wind shift, a drop in temperature, a rise in pressure, and often gusty or turbulent conditions with showery precipitation.",
      "a gradual, barely noticeable wind shift with no accompanying change in temperature or pressure at the surface.",
      "a steady rise in temperature over many hours, the opposite of the temperature change actually associated with cold frontal passage.",
      "a sustained drop in pressure that continues well after the front has passed, rather than the pressure rise actually observed.",
    ],
    answer: 0,
    explain:
      "Cold frontal passage is generally characterized by a relatively abrupt wind shift, a drop in temperature, a rise in pressure behind the front, and often gusty, turbulent conditions with showery or convective precipitation -- distinctly different from the gradual changes and extended pressure fall associated with an approaching warm front.",
    reference: "TC AIM MET - Frontal Weather",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A stationary front is a boundary between two air masses in which",
    options: [
      "neither air mass is significantly displacing the other, so the front remains in approximately the same location while weather along it can persist for an extended period.",
      "the cold air mass is always advancing rapidly, making the term 'stationary' a reference only to the associated cloud tops rather than the front itself.",
      "the warm air mass has completely overtaken and eliminated the cold air mass, ending the frontal boundary entirely.",
      "surface winds are calm everywhere along the front, since a stationary front is defined by an absence of any wind rather than an absence of net movement.",
    ],
    answer: 0,
    explain:
      "A stationary front exists where neither the warm nor the cold air mass is significantly displacing the other, so the frontal boundary remains in roughly the same location for an extended period, and the associated weather can persist accordingly -- it is defined by a lack of net frontal movement, not by calm winds or by one air mass having eliminated the other.",
    reference: "TC AIM MET - Frontal Weather",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A Trowal (trough of warm air aloft), a feature commonly referenced in Canadian meteorological analysis, is generally associated with",
    options: [
      "an occluded frontal system, marking the axis of warm air that has been lifted aloft above the surface occlusion as the cold and cool air masses have merged beneath it.",
      "a purely tropical phenomenon that does not occur in Canadian latitudes, making the term inapplicable to domestic forecasting.",
      "a region of clear, cloudless skies with no associated precipitation, distinguishing it from all frontal weather features.",
      "the boundary of the jet stream at high altitude, unrelated to surface frontal analysis or occlusion processes.",
    ],
    answer: 0,
    explain:
      "The Trowal (trough of warm air aloft) is a feature of Canadian synoptic analysis associated with occluded frontal systems -- it marks the axis of warm air that has been lifted aloft above the surface as the cold and cool air masses of an occlusion merge beneath it, and it is typically associated with continued cloud and precipitation rather than clear skies, and is a surface/lower-atmosphere frontal feature rather than a jet stream boundary.",
    reference: "TC AIM MET - Frontal Analysis",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An Arctic front, as distinguished from the more familiar polar front, generally separates",
    options: [
      "very cold Arctic air from the somewhat less cold polar (or modified polar) air mass to its south, often producing a sharply defined boundary in northern and western Canada.",
      "tropical maritime air from tropical continental air, a distinction that has no relevance to Arctic frontal analysis.",
      "identical air masses on both sides, making the Arctic front meteorologically indistinguishable from a stationary front.",
      "surface air from upper-atmosphere air, a vertical rather than horizontal distinction unrelated to how fronts are normally defined.",
    ],
    answer: 0,
    explain:
      "An Arctic front separates very cold Arctic air from the comparatively less cold polar (or modified polar) air mass to its south, and is often sharply defined, particularly across northern and western Canada -- it is a distinct feature from the classic mid-latitude polar front, not a distinction between tropical air masses, and it is a horizontal (surface) frontal boundary, not a vertical one.",
    reference: "TC AIM MET - Air Masses and Fronts",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Compared to a large synoptic-scale weather system (such as a mid-latitude low-pressure system spanning hundreds of kilometres), a mesoscale weather system, such as an individual thunderstorm complex,",
    options: [
      "covers a substantially smaller horizontal area and typically evolves over a much shorter timeframe, from roughly tens of kilometres and a few hours down to even smaller and shorter scales.",
      "is defined as covering an identical horizontal scale to synoptic systems, with the only difference being the type of precipitation produced.",
      "always persists longer than a synoptic-scale system, since mesoscale features are defined by their unusually long duration rather than their smaller size.",
      "occurs exclusively over open ocean, since mesoscale meteorological classification does not apply to systems developing over land.",
    ],
    answer: 0,
    explain:
      "A mesoscale weather system covers a substantially smaller horizontal area than a synoptic-scale system and typically evolves over a much shorter timeframe -- roughly tens of kilometres and a few hours or less, compared to the hundreds of kilometres and multi-day timescales typical of synoptic systems -- rather than sharing an identical scale, persisting longer, or being restricted to oceanic development.",
    reference: "TC AIM MET - Scales of Weather Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Weather radar reflectivity, commonly displayed to pilots as colour-coded precipitation intensity levels, is used primarily to",
    options: [
      "indicate the intensity of precipitation (and, indirectly, the associated convective activity) within a storm, helping pilots identify areas of heavier weather to avoid.",
      "measure cloud-top temperature directly, a parameter that radar reflectivity cannot detect regardless of precipitation intensity.",
      "detect clear-air turbulence in cloud-free regions, since reflectivity readings are unrelated to the presence of precipitation.",
      "determine the exact wind speed within a storm cell, a measurement reflectivity data cannot provide without additional Doppler processing.",
    ],
    answer: 0,
    explain:
      "Weather radar reflectivity indicates the intensity of precipitation within a storm -- generally correlating with the intensity of associated convective activity -- helping pilots identify and avoid areas of heavier weather; it does not directly measure cloud-top temperature or clear-air turbulence, and while Doppler-capable radar can add wind information, basic reflectivity alone does not provide exact wind speed.",
    reference: "TC AIM MET - Weather Radar",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A Volcanic Ash Advisory, issued in response to a volcanic eruption that may affect aviation, is significant to pilots primarily because volcanic ash",
    options: [
      "can cause severe engine damage (including flameout) and abrade windscreens and airframe surfaces, making avoidance of ash-contaminated airspace essential.",
      "poses no hazard to turbine engines, since modern jet engines are specifically designed to operate normally when ingesting volcanic ash.",
      "is a hazard limited entirely to ground operations, with no effect whatsoever on an aircraft once it is airborne and clear of the eruption site.",
      "is detected and avoided using the same onboard weather radar systems used for detecting precipitation, since ash produces an equivalent radar return.",
    ],
    answer: 0,
    explain:
      "Volcanic ash is a serious aviation hazard because it can cause severe turbine engine damage, including flameout, as well as abrasion of windscreens and airframe surfaces, so avoidance of ash-contaminated airspace identified in a Volcanic Ash Advisory is essential -- ash is not benign to engines, its hazard is not limited to the ground, and it generally does not produce a reliable weather radar return the way precipitation does.",
    reference: "TC AIM MET - Volcanic Ash",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Carburetor icing in a piston engine can occur",
    options: [
      "even in relatively warm ambient air with sufficiently high humidity, since the sharp temperature drop caused by fuel vaporization and pressure reduction in the carburetor throat can bring the local temperature below freezing.",
      "only when the outside air temperature is already at or below freezing, since carburetor icing cannot occur at any ambient temperature above 0 degrees Celsius.",
      "only during descent with the throttle fully open, since carburetor icing is understood to be impossible at any other power setting or flight phase.",
      "exclusively on the ground during engine start, with no possibility of carburetor ice forming once the aircraft is established in cruise flight.",
    ],
    answer: 0,
    explain:
      "Carburetor icing can occur even in relatively warm ambient air with sufficiently high humidity, because fuel vaporization and the pressure drop across the carburetor venturi cause a sharp local temperature drop that can bring the carburetor throat below freezing even when outside air temperature is well above 0 degrees Celsius -- it is not limited to freezing ambient temperatures, a particular throttle setting, or the ground start phase alone.",
    reference: "TC AIM MET - Carburetor Icing",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Vertical visibility (VV), as reported in a METAR when the sky is obscured, differs from a reported ceiling in that vertical visibility",
    options: [
      "represents the distance an observer can see straight up into an indefinite obscuration (such as fog or heavy precipitation) rather than the height of a discrete, definable cloud layer base.",
      "is simply another name for ceiling, with the two terms used interchangeably and no meaningful distinction between them in METAR reporting.",
      "is measured horizontally rather than vertically, making its name a misnomer relative to what it actually reports.",
      "applies only when the sky is completely clear, since vertical visibility cannot be reported under any degree of obscuration.",
    ],
    answer: 0,
    explain:
      "Vertical visibility is reported when the sky is obscured (for example by fog or heavy precipitation) and represents how far up an observer can see into that indefinite obscuration, whereas a ceiling refers to the height of the base of the lowest broken or overcast layer of a discrete, definable cloud layer -- the two are distinct concepts, VV is a vertical (not horizontal) measurement, and it specifically applies under obscured, not clear, sky conditions.",
    reference: "TC AIM MET - METAR Reporting",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "QFE, as an altimeter setting concept, differs from QNH in that QFE",
    options: [
      "causes the altimeter to read zero (or a value referenced to the aerodrome elevation) when the aircraft is on the ground at that aerodrome, rather than reading the aerodrome's elevation above mean sea level as QNH does.",
      "is the standard altimeter setting used throughout Canadian domestic airspace, replacing QNH entirely for both VFR and IFR operations.",
      "represents the same numerical value as QNH at every aerodrome, making the distinction between the two settings purely terminological.",
      "is set using the current sea-level pressure at a distant reporting station rather than any pressure value local to the aerodrome itself.",
    ],
    answer: 0,
    explain:
      "QFE is an altimeter setting referenced to aerodrome (or a specific point's) elevation, causing the altimeter to read zero, or a value referenced to that elevation, when the aircraft is on the ground there -- unlike QNH, which is referenced to mean sea level and causes the altimeter to read the aerodrome's elevation above sea level when on the ground; QFE is not the standard Canadian domestic setting, the two values are generally not numerically identical, and QFE is based on local aerodrome pressure, not a distant station's sea-level value.",
    reference: "TC AIM MET - Altimeter Setting Terminology",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Whiteout, a visual phenomenon particularly hazardous in snow-covered polar and Arctic regions, occurs when",
    options: [
      "diffuse light from an overcast sky combines with a uniform, unbroken snow surface to eliminate visible shadows, horizon, and surface definition, severely impairing depth perception and orientation.",
      "direct sunlight reflecting off snow becomes so intense that pilots experience temporary total blindness, a condition unrelated to sky or surface uniformity.",
      "falling snow reduces visibility to zero in the same way as dense fog, making whiteout simply another name for a snow-induced visibility restriction.",
      "the aircraft's windows become completely frosted over from internal condensation, an equipment-related rather than a meteorological/visual phenomenon.",
    ],
    answer: 0,
    explain:
      "Whiteout occurs when diffuse light from an overcast sky combines with a uniform, unbroken snow-covered surface to eliminate shadows, the horizon, and surface texture cues, severely impairing depth perception and orientation even though visibility in the ordinary sense may remain good -- it is distinct from simple blinding glare, from a snow-reduced visibility event like fog, and from window frosting, which is an equipment issue rather than an atmospheric visual phenomenon.",
    reference: "TC AIM MET - Whiteout",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Blowing snow, as a surface weather phenomenon reported in Canadian aviation weather observations, can significantly reduce visibility primarily because",
    options: [
      "wind lifts loose snow from the surface into the air, and depending on wind speed, this suspended snow can reduce horizontal visibility much like blowing dust or sand.",
      "it always occurs only during active snowfall, since blowing snow cannot form from snow that has already accumulated on the ground.",
      "it has no meaningful effect on visibility at all, since blowing snow is classified as a surface phenomenon distinct from any visibility-restricting weather.",
      "it is limited strictly to altitudes above 10,000 ft, making it irrelevant to takeoff and landing visibility assessments.",
    ],
    answer: 0,
    explain:
      "Blowing snow occurs when wind lifts loose, previously fallen or falling snow from the surface into the air, and depending on wind speed this suspended snow can significantly reduce horizontal visibility, much like blowing dust or sand -- it does not require active snowfall to occur, it does meaningfully affect visibility (including for takeoff and landing), and it is fundamentally a low-level, surface-driven phenomenon rather than something confined to high altitude.",
    reference: "TC AIM MET - Blowing Snow",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a TAF, the trend indicators BECMG and TEMPO are used, respectively, to forecast",
    options: [
      "a permanent or long-lasting change expected to occur gradually over a specified period (BECMG), versus a temporary fluctuation expected to last less than an hour at a time and less than half the forecast period overall (TEMPO).",
      "identical types of change, with BECMG and TEMPO used interchangeably depending only on which forecaster happens to be preparing the TAF.",
      "a change that has already occurred by the time of observation (BECMG) versus a change expected only after the TAF's entire validity period has ended (TEMPO).",
      "wind-only changes (BECMG) versus cloud-only changes (TEMPO), with each group restricted to a single weather element category.",
    ],
    answer: 0,
    explain:
      "BECMG forecasts a permanent or long-lasting change expected to occur gradually within a specified period, while TEMPO forecasts temporary fluctuations expected to last less than an hour at a time and, in total, less than half of the indicated forecast period -- the two are not interchangeable, neither refers to changes outside the TAF's own validity period, and neither is restricted to a single weather element such as wind or cloud alone.",
    reference: "TC AIM MET - TAF Trend Groups",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A high-level significant weather (SWH) chart, as distinguished from a Graphic Area Forecast (GFA), is intended primarily to depict",
    options: [
      "significant weather phenomena (such as turbulence, icing, and thunderstorms) relevant to flight in the upper airspace typically used by jet traffic, rather than the lower-altitude weather depicted by a GFA.",
      "exactly the same information as a GFA, covering the same altitude range and intended for the same low-level general aviation user base.",
      "surface-only observations with no forecast component at all, unlike a GFA, which is understood to be a purely forecast product.",
      "airport-specific terminal weather exclusively, with no depiction of en route hazards at any altitude.",
    ],
    answer: 0,
    explain:
      "A high-level significant weather chart is intended to depict significant weather phenomena such as turbulence, icing, and thunderstorms relevant to flight in the upper airspace typically used by jet traffic, complementing the lower-altitude coverage of a GFA rather than duplicating it -- it is a forecast product covering higher altitudes than a GFA, not a surface-observation-only product, and it depicts en route hazards rather than being limited to terminal-area weather.",
    reference: "TC AIM MET - Significant Weather Charts",
  },
];
