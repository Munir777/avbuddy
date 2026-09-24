import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 66 -- Section 2: Meteorology,
// seventh pass. Original questions written from the TP 690 syllabus
// (topic headings only, no sample questions) and the TC AIM 2026-1.
// Covers the ISA standard pressure lapse rate, altocumulus
// castellanus and mammatus clouds as instability/severe-storm
// indicators, wind chill, the TAF FM group, the CAVOK code,
// standard METAR precipitation type codes, the METAR pressure
// tendency remark group, upper-level ridges and troughs, the
// subsidence inversion associated with high-pressure ridges (as
// distinct from a surface radiation inversion), ISA deviation for
// performance planning, relative humidity vs dew point depression,
// TAF issuance frequency and validity, atmospheric influence on
// wake vortex behaviour, precipitation static (P-static), and cold
// air advection's destabilizing effect -- topics not yet addressed
// in batches 8, 18, 26, 36, 46, or 56. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_66_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In addition to its standard temperature lapse rate, the International Standard Atmosphere (ISA) also defines a standard pressure lapse rate, which is generally approximated in the lower atmosphere as",
    options: [
      "a rate identical in numerical value to the ISA temperature lapse rate, with pressure and temperature decreasing by the same amount for each 1,000 feet of altitude.",
      "an increase, rather than a decrease, in pressure with increasing altitude, the reverse of the actual relationship.",
      "a decrease of roughly one inch of mercury (or approximately 34 hectopascals) for every 1,000 feet of altitude gained, a relationship commonly used as a rule of thumb near sea level.",
      "a fixed, unchanging pressure value at every altitude, meaning pressure does not vary with altitude under the ISA model.",
    ],
    answer: 2,
    explain:
      "Alongside its standard temperature lapse rate, the ISA model also defines an approximate standard pressure decrease with altitude -- roughly one inch of mercury (about 34 hectopascals) per 1,000 feet near sea level, a relationship that becomes less linear at higher altitudes but is commonly used as a rough rule of thumb for altimetry and performance estimation at lower levels.",
    reference: "TP 690 -- Meteorology: The Atmosphere",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Altocumulus castellanus clouds, distinguished by their turreted, castle-like tops on an otherwise flat cloud layer at middle altitudes, are significant to pilots primarily because they",
    options: [
      "indicate a stable, stratified atmosphere with no convective potential, the opposite of their actual significance.",
      "form only in association with a fully mature, ongoing thunderstorm, rather than serving as an earlier warning sign of developing instability.",
      "are relevant exclusively to marine forecasting, with no significance to aviation weather interpretation.",
      "indicate instability aloft and are often regarded as a precursor sign that thunderstorm development may occur later in the day as surface heating continues.",
    ],
    answer: 3,
    explain:
      "The turreted, castle-like tops of altocumulus castellanus clouds reflect localized vertical (convective) development within an otherwise flatter mid-level cloud layer, indicating instability aloft; their presence, particularly earlier in the day, is often regarded by forecasters and pilots as a useful precursor sign that thunderstorm development may follow later as surface heating continues to build instability through the depth of the atmosphere.",
    reference: "TP 690 -- Meteorology: Clouds",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Mammatus clouds, appearing as pouch-like or bulging formations hanging from the underside of a cloud (most notably a cumulonimbus anvil), are significant to pilots because they",
    options: [
      "are often associated with severe thunderstorm activity and significant turbulence, and their presence is generally treated as a further warning sign rather than an indication of dissipating or benign conditions.",
      "form only in perfectly clear, stable air with no relationship whatsoever to thunderstorm or convective activity.",
      "indicate that a thunderstorm has fully dissipated and no further hazard, including turbulence, remains in the area.",
      "are visually distinctive but carry no operational significance to flight safety or turbulence risk, since mammatus formations are defined as a purely cosmetic feature of a dissipating cloud with no established association with turbulence, wind shear, or storm severity of any kind.",
    ],
    answer: 0,
    explain:
      "Mammatus clouds, the pouch-like or bulging formations sometimes seen hanging beneath a cumulonimbus anvil or other convective cloud, are often observed in association with severe thunderstorm activity and are generally regarded as a further indicator of significant turbulence and instability, rather than a sign that hazardous conditions have passed.",
    reference: "TP 690 -- Meteorology: Clouds",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Wind chill, a value commonly included in Canadian weather forecasts and observations during colder months, is intended to express",
    options: [
      "a formal aviation altimetry correction applied to the altimeter setting during cold weather operations, since wind chill is defined by Environment and Climate Change Canada as a correction factor pilots apply directly to their altimeter reading rather than as any measure of perceived temperature affecting personnel.",
      "the increased rate of heat loss (and resulting perceived cold) that wind causes to exposed skin, which is relevant to ground personnel, passengers, and survival planning even though it does not itself change the actual air temperature.",
      "the actual air temperature after accounting for humidity, a description that more accurately applies to a heat index rather than wind chill.",
      "a value used exclusively to forecast the likelihood of aircraft structural icing, unrelated to any effect on personnel.",
    ],
    answer: 1,
    explain:
      "Wind chill expresses the increased rate at which exposed skin loses heat, and the resulting perceived cold, due to the combined effect of air temperature and wind speed; it does not represent an actual change in the air temperature itself, but is a relevant consideration for ground personnel, passengers, and survival equipment planning in cold-weather and remote operations, distinct from cold-weather altimetry corrections (which address a different hazard).",
    reference: "TC AIM MET -- Weather Elements",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a TAF, the FM (from) group, followed by a specific date and time, is used to indicate",
    options: [
      "the overall validity period of the entire TAF, replacing the need for a separate validity period statement.",
      "a gradual change expected to occur over a range of time, a description that more accurately applies to the BECMG group rather than FM, since the FM group itself is defined as spreading its stated change smoothly across the following several hours rather than marking a single specific point in time.",
      "a rapid and significant change in conditions expected at that specific time, after which a new, distinct set of forecast conditions applies until the next change group or the end of the forecast period.",
      "a temporary, intermittent condition expected to come and go repeatedly, a description that more accurately applies to the TEMPO group rather than FM.",
    ],
    answer: 2,
    explain:
      "The FM group marks a specific point in time at which conditions are expected to change rapidly and significantly; from that time onward, the new forecast conditions stated after the FM group become the prevailing forecast (superseding the conditions given before it) until the next change group or the end of the TAF's validity period, distinguishing it from BECMG (a gradual change) and TEMPO (a temporary, intermittent condition).",
    reference: "TC AIM MET -- Aerodrome Forecasts (TAF)",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The ICAO code CAVOK, where used in a METAR or TAF, indicates that",
    options: [
      "the observation is missing or could not be taken, rather than describing any actual observed or forecast condition, since CAVOK is defined as a placeholder code inserted whenever a station's automated equipment fails to record visibility, cloud, or weather data for that reporting period.",
      "the term applies exclusively to wind information, replacing the need to report wind direction and speed.",
      "conditions are below the minima required for VFR flight, the opposite of its actual meaning.",
      "visibility, cloud, and present weather conditions all meet or exceed specified favourable thresholds simultaneously (such as visibility of 10 km or more, no cloud below a specified height and no cumulonimbus, and no significant weather), allowing those elements to be reported with this single combined term rather than individually.",
    ],
    answer: 3,
    explain:
      "CAVOK ('ceiling and visibility OK') is used in a METAR or TAF when visibility, cloud, and weather all simultaneously meet or exceed specified favourable thresholds (a defined minimum visibility, no cloud below a specified height and no cumulonimbus or towering cumulus, and no significant weather phenomena), allowing those several elements to be reported concisely with a single combined code rather than listing each one out individually.",
    reference: "TC AIM MET -- Aviation Weather Reports",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Among standard METAR precipitation type codes, RA, SN, DZ, and GR represent, respectively,",
    options: [
      "rain, snow, drizzle, and hail.",
      "rain, hail, snow, and drizzle -- the reverse pairing of codes to precipitation types.",
      "four different intensity levels of the same precipitation type, rather than four different types of precipitation.",
      "codes used exclusively for non-precipitation obscuration phenomena, such as fog or haze, rather than precipitation.",
    ],
    answer: 0,
    explain:
      "Among the standard METAR precipitation type codes, RA denotes rain, SN denotes snow, DZ denotes drizzle, and GR denotes hail; these codes for precipitation type are commonly combined with intensity qualifiers (such as a plus or minus sign for heavy or light) and, where relevant, descriptor codes to fully characterize the precipitation being reported.",
    reference: "TC AIM MET -- Aviation Weather Reports",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A METAR's pressure tendency remark (a coded group reporting how station pressure has changed over the preceding three hours) is significant to a forecaster primarily because",
    options: [
      "it replaces the need to report the station's current altimeter setting.",
      "a rapid pressure change can be an early indicator of significant weather developing or approaching, complementing the single-point pressure value with information about its recent trend.",
      "it reports the pressure expected 24 hours into the future, functioning as a short-range numerical forecast in itself.",
      "it applies only to pressure changes caused by aircraft-induced turbulence near the reporting station, with no relevance to broader synoptic weather, since the remark is defined as measuring only very short-term, localized pressure fluctuations rather than any trend connected to an approaching weather system.",
    ],
    answer: 1,
    explain:
      "The pressure tendency remark reports how station pressure has changed over the preceding three hours (whether rising, falling, or steady, and by how much), which gives a forecaster useful trend information beyond a single-point pressure reading -- a rapidly falling pressure, for example, can be an early indicator that a significant weather system is approaching, complementing (rather than replacing) the station's current altimeter setting.",
    reference: "TC AIM MET -- Aviation Weather Reports",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Upper-level ridges and troughs, depicted on upper air charts as respectively poleward and equatorward bulges in the flow pattern, are significant to flight planning primarily because",
    options: [
      "a ridge and a trough are simply two different names for an identical feature, with no distinction in associated wind pattern or weather significance, since both terms are defined as describing the same bulge shape and are therefore treated as fully interchangeable on any upper air chart regardless of direction.",
      "they apply only to surface weather charts, with no equivalent feature appearing on upper-level charts.",
      "they are generally associated with characteristic wind patterns (such as more favourable tailwinds on one side of a feature and less favourable headwinds on the other) that can meaningfully affect route and altitude selection for wind optimization.",
      "they have no relationship whatsoever to wind direction or speed at cruising altitudes.",
    ],
    answer: 2,
    explain:
      "An upper-level ridge (a poleward bulge in the flow) and trough (an equatorward bulge) are associated with characteristic wind patterns around them -- generally more favourable tailwind components on one side of the feature and less favourable headwind components on the other, along with associated weather tendencies -- which is why identifying ridges and troughs on upper air charts is useful for wind-optimized route and cruise altitude selection during flight planning.",
    reference: "TP 690 -- Meteorology: Upper Air Analysis",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A subsidence inversion, commonly found aloft within a high-pressure ridge, differs from a surface radiation inversion in that a subsidence inversion",
    options: [
      "occurs exclusively in low-pressure systems, with no association with high-pressure ridges at all.",
      "is functionally and structurally identical to a surface radiation inversion, with no distinction in either formation mechanism or typical altitude.",
      "always forms at ground level overnight under clear, calm conditions, an origin that actually describes a surface radiation inversion rather than a subsidence inversion, since both inversion types are defined as sharing an identical ground-level, radiative formation mechanism regardless of the pressure pattern aloft.",
      "forms as descending air within the high-pressure system is compressed and warmed adiabatically, creating a warm layer aloft above cooler air beneath it, rather than forming from the ground's own radiative cooling overnight as a surface inversion does.",
    ],
    answer: 3,
    explain:
      "A subsidence inversion forms when air descending within a high-pressure system is compressed and adiabatically warmed as it sinks, creating a layer of relatively warm air aloft sitting above cooler air beneath it; this differs in origin from a surface radiation inversion, which forms at ground level from the earth's own radiative heat loss on a clear, calm night, even though both types of inversion can trap moisture, pollutants, or restrict vertical mixing in broadly similar ways.",
    reference: "TP 690 -- Meteorology: Temperature and Stability",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An 'ISA deviation' value (such as ISA+10 or ISA-15), used in aircraft performance planning, expresses",
    options: [
      "how much the actual outside air temperature at a given altitude differs from the standard International Standard Atmosphere temperature predicted for that same altitude, which is relevant because aircraft performance figures are often published relative to ISA conditions and adjusted for the actual deviation.",
      "a fixed constant that never varies with altitude, location, season, or actual observed conditions.",
      "the difference between true airspeed and indicated airspeed, unrelated to temperature or the standard atmosphere.",
      "the difference between the current altimeter setting and the standard pressure setting of 29.92 inHg (1013.2 hPa), a description that actually applies to a pressure altitude correction rather than an ISA deviation, since the two figures are defined as measuring an identical pressure-based quantity rather than any temperature-based one.",
    ],
    answer: 0,
    explain:
      "An ISA deviation value expresses how far the actual outside air temperature at a given altitude departs from the temperature the International Standard Atmosphere model predicts for that same altitude (for example, ISA+10 meaning 10 degrees Celsius warmer than standard); because many published aircraft performance figures (such as takeoff distance or climb performance) are based on ISA conditions, pilots apply the actual ISA deviation to adjust those figures for the real conditions of the day.",
    reference: "TP 690 -- Meteorology: The Atmosphere",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Relative humidity, expressed as a percentage, and the temperature/dew point spread (temperature minus dew point) are related in that",
    options: [
      "the two values are entirely unrelated, with relative humidity depending solely on wind speed and having no relationship to temperature or dew point at all.",
      "a smaller spread between temperature and dew point corresponds to a higher relative humidity, with the two values becoming equal (a zero spread) when relative humidity reaches 100 percent and the air is saturated.",
      "relative humidity can only be determined from a barometric pressure reading, with no relationship to either temperature or dew point.",
      "a smaller spread between temperature and dew point corresponds to a lower relative humidity, the reverse of the actual relationship.",
    ],
    answer: 1,
    explain:
      "Relative humidity expresses how close the air is to saturation as a percentage, while the temperature/dew point spread expresses the same underlying concept in degrees; as air approaches saturation, the dew point rises toward the actual air temperature, narrowing the spread, until at 100 percent relative humidity (saturation) the temperature and dew point are equal and the spread is zero -- a narrower spread therefore corresponds to a higher relative humidity, and vice versa.",
    reference: "TP 690 -- Meteorology: Moisture and Humidity",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "TAFs (Terminal Aerodrome Forecasts) for major Canadian aerodromes are generally issued and updated on a routine cycle, with a validity period that",
    options: [
      "extends indefinitely with no defined validity period or expiry at all.",
      "is fixed at exactly one hour, requiring an entirely new TAF to be issued every hour regardless of how conditions are actually changing, since TAF issuance intervals are defined under the CARs as a uniform sixty-minute cycle applied identically at every Canadian aerodrome regardless of traffic volume or weather activity.",
      "is generally in the range of roughly 24 to 30 hours from issuance, with the forecast routinely reissued several times a day and amended between routine issuances if actual or expected conditions change significantly from what was forecast.",
      "never requires any amendment between scheduled issuances, regardless of how significantly actual conditions may diverge from the original forecast.",
    ],
    answer: 2,
    explain:
      "A TAF for a major Canadian aerodrome is generally valid for roughly 24 to 30 hours from the time of issuance and is routinely reissued several times per day on a regular schedule; if actual or expected conditions diverge significantly from what was forecast before the next routine issuance is due, the TAF can also be amended (TAF AMD) outside that routine schedule to keep the forecast current.",
    reference: "TC AIM MET -- Aerodrome Forecasts (TAF)",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The behaviour and persistence of wake turbulence vortices generated by a preceding aircraft can be significantly influenced by atmospheric conditions, in that",
    options: [
      "a strong crosswind always eliminates wake turbulence hazard entirely, by rapidly and completely destroying both vortices before a following aircraft can encounter them.",
      "wake vortices dissipate instantly upon generation in every wind condition, meaning atmospheric influence on vortex persistence is not a meaningful operational concern.",
      "wake vortex behaviour is entirely unaffected by wind, temperature, or any other atmospheric condition, and instead depends solely on the generating aircraft's weight, since crosswind, headwind, and calm-air scenarios are defined as producing an identical vortex drift, sink rate, and persistence in every case regardless of ambient conditions.",
      "a light, steady crosswind can cause the upwind vortex to drift more slowly (or even remain) near the runway or flight path for longer, while a calm wind can allow both vortices to persist and sink with relatively little lateral movement, affecting the hazard a following aircraft may encounter.",
    ],
    answer: 3,
    explain:
      "While wake vortex strength is primarily a function of the generating aircraft's weight, wingspan, and speed, atmospheric conditions significantly influence how the vortices then behave: a light, steady crosswind can slow the drift of (or even hold) the upwind vortex over the runway or flight path for longer than it might otherwise persist, while calm conditions can allow both vortices to sink and linger with comparatively little lateral movement -- both scenarios are relevant to the hazard a following aircraft may encounter and are part of why wind conditions are considered alongside standard wake turbulence separation minima.",
    reference: "TC AIM RAC -- Wake Turbulence",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Precipitation static (P-static), a form of radio interference that can occur when an aircraft flies through precipitation, dust, or ice crystals, results from",
    options: [
      "the aircraft's surface accumulating a static electrical charge through friction with the precipitation or particles it is flying through, which can then discharge in ways that interfere with radio reception, particularly on lower-frequency systems such as ADF.",
      "a malfunction internal to the radio receiver itself, unrelated to any external atmospheric or precipitation effect, since P-static is defined as originating entirely from internal receiver circuitry rather than from any static charge accumulated on the aircraft's exterior surfaces during flight through precipitation or particles.",
      "engine vibration alone, entirely unrelated to any precipitation, dust, or electrical charge accumulation.",
      "an actual lightning strike directly contacting the aircraft, a distinct and separate electrical hazard from P-static.",
    ],
    answer: 0,
    explain:
      "Precipitation static arises when an aircraft's surface accumulates a static electrical charge through friction with precipitation, dust, ice crystals, or other particles it is flying through; as that charge builds and discharges (including via small corona discharges, sometimes visible as St. Elmo's fire), it can interfere with radio reception, with lower-frequency systems such as ADF generally more susceptible to this interference than higher-frequency VHF systems -- a distinct phenomenon from an actual lightning strike.",
    reference: "TP 690 -- Meteorology: Aviation Weather Hazards",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Cold air advection -- relatively cold air moving into a region, replacing warmer air beneath it or aloft -- generally has a destabilizing effect on the atmosphere primarily because",
    options: [
      "it affects only surface wind direction, with no relationship whatsoever to atmospheric stability or lapse rate.",
      "it increases the temperature difference between the (relatively colder) air arriving and the ground or lower layers, steepening the environmental lapse rate and promoting instability, the counterpart effect to warm air advection's generally stabilizing influence.",
      "it always eliminates all cloud and precipitation from the affected region, regardless of the underlying stability change.",
      "it has an identical stabilizing effect to warm air advection, with no meaningful distinction between the two in terms of atmospheric stability, since both processes are defined as reducing the environmental lapse rate by an equal amount regardless of whether the advected air is warmer or colder than what it replaces.",
    ],
    answer: 1,
    explain:
      "Cold air advection generally has a destabilizing effect because, as relatively cold air moves in aloft or the surface remains comparatively warm beneath it, the resulting temperature contrast steepens the environmental lapse rate, promoting instability and often increased convective activity or turbulence -- the counterpart to warm air advection, which was covered previously as generally having a stabilizing effect by reducing that temperature contrast.",
    reference: "TP 690 -- Meteorology: Temperature and Stability",
  },
];
