import type { Question } from "../../../types";

// Canada TC ATPL - Section 2: Meteorology
// Batch 86 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_86_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A 'special air-report' (SPECIAL AIREP), as distinguished from a routine or voluntary PIREP, is generally required to be transmitted by a flight crew when they observe conditions such as",
    options: [
      "any cloud cover at all, however minor, encountered during cruise flight",
      "a routine, uneventful flight with no notable weather, submitted purely for record-keeping purposes",
      "severe turbulence, severe icing, volcanic ash, or other specifically designated hazardous phenomena, for which reporting is considered mandatory rather than optional",
      "only surface wind conditions observed during taxi",
    ],
    answer: 2,
    explain:
      "A special air-report is generally required, rather than merely encouraged, when specific hazardous phenomena are encountered -- such as severe turbulence, severe icing, or volcanic ash -- because timely reporting of these conditions is important to the safety of other flights.",
    reference: "TP 690 -- Meteorology: Special air-report (SPECIAL AIREP)",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "On a Graphic Area Forecast (GFA) cloud and weather chart, embedded cumulonimbus coverage is generally described using terms such as 'ISOL' (isolated), 'OCNL' (occasional), and 'FRQ' (frequent), which indicate",
    options: [
      "the specific hour at which thunderstorms will begin and end",
      "whether the thunderstorms will produce hail, with no relation to their coverage",
      "the exact number of individual thunderstorm cells expected, counted precisely",
      "the expected coverage or areal extent of thunderstorm cells within the forecast area, rather than their individual intensity",
    ],
    answer: 3,
    explain:
      "Terms such as ISOL, OCNL, and FRQ describe the expected areal coverage of embedded cumulonimbus activity within the forecast area -- roughly how much of the area is affected -- rather than the intensity of any individual cell or a precise cell count.",
    reference: "TP 690 -- Meteorology: GFA thunderstorm coverage terminology",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a METAR, a group such as '180V240' following the reported wind direction and speed indicates that",
    options: [
      "the wind direction has been varying between 180 and 240 degrees during the observation period",
      "the wind speed is expected to vary between 180 and 240 knots",
      "the station's elevation is between 180 and 240 feet above sea level",
      "visibility is expected to vary between 180 and 240 statute miles",
    ],
    answer: 0,
    explain:
      "A group such as '180V240' reports that the wind direction has been observed varying between 180 and 240 degrees during the observation period, indicating a shifting or unsteady wind rather than a single, constant direction.",
    reference: "TP 690 -- Meteorology: METAR variable wind direction group",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "In a TAF, the code group 'NSW' (No Significant Weather), used within a BECMG or FM change group, indicates that",
    options: [
      "visibility will improve to unlimited (CAVOK) conditions specifically",
      "the forecast precipitation or other significant weather previously forecast is expected to end",
      "no wind information will be provided for that period",
      "the aerodrome will remain closed until further notice",
    ],
    answer: 1,
    explain:
      "NSW is used within a change group to indicate that significant weather (such as precipitation) previously forecast is expected to end at that point, without necessarily implying CAVOK conditions or specifying any change to wind.",
    reference: "TP 690 -- Meteorology: TAF NSW code",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The presence of towering cumulus (TCU) -- cumulus clouds that have developed significant vertical extent, though not yet reaching the anvil stage of a mature cumulonimbus -- is significant to a pilot primarily as an indicator that",
    options: [
      "the atmosphere is stable and no further vertical cloud development is likely",
      "precipitation has already ended in the area",
      "the atmosphere is sufficiently unstable that further growth into a thunderstorm may be imminent, warranting caution",
      "icing is impossible within or near the cloud",
    ],
    answer: 2,
    explain:
      "Towering cumulus indicates that the atmosphere is unstable enough to support strong vertical development, and such clouds can continue growing into a mature cumulonimbus; their presence is a warning sign of possible imminent thunderstorm development.",
    reference: "TP 690 -- Meteorology: Towering cumulus as a thunderstorm precursor",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Immediately above the tropopause, within the lower stratosphere, temperature generally",
    options: [
      "increases sharply and immediately at the same rate air temperature decreased in the troposphere",
      "becomes impossible to measure using standard aircraft temperature probes",
      "continues to decrease at the same rate observed throughout the troposphere",
      "becomes roughly isothermal (nearly constant) over a considerable altitude range, rather than continuing to decrease steadily",
    ],
    answer: 3,
    explain:
      "Above the tropopause, within the lower stratosphere, temperature generally levels off and remains roughly constant (isothermal) over a considerable altitude range, rather than continuing the steady decrease with height that characterizes the troposphere.",
    reference: "TP 690 -- Meteorology: Lower stratosphere temperature behaviour",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A TAF issued as a 'correction' (TAF COR) is distinguished from a TAF issued as an 'amendment' (TAF AMD) in that a correction",
    options: [
      "is issued to fix an error in the previously issued forecast text itself, rather than to reflect a genuine change in expected weather conditions",
      "always extends the forecast's validity period by an additional 24 hours",
      "replaces the need for the routine scheduled TAF that would otherwise follow",
      "can only be issued by the destination aerodrome's air traffic control tower, never by the forecast office",
    ],
    answer: 0,
    explain:
      "A TAF correction (COR) is issued to fix an error in the text of a previously issued forecast, such as a coding mistake, rather than to reflect an actual, genuine change in the expected weather, which is instead handled by an amendment (AMD).",
    reference: "TP 690 -- Meteorology: TAF correction versus amendment",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Graphic Area Forecasts (GFAs) covering Canadian domestic airspace are generally issued",
    options: [
      "only during the summer thunderstorm season, with no GFA issued in winter",
      "on a routine schedule several times per day, each covering specific forecast validity periods",
      "only once per week, given the stability of Canadian weather patterns",
      "exclusively on request from an individual pilot before each flight",
    ],
    answer: 1,
    explain:
      "GFAs are issued on a routine schedule several times per day, year-round, with each issuance covering specific forecast validity periods, rather than being produced only on individual request or only during a particular season.",
    reference: "TP 690 -- Meteorology: GFA issuance schedule",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The Convective Condensation Level (CCL) is distinguished from the Lifting Condensation Level (LCL) in that the CCL specifically represents",
    options: [
      "an altitude that can only be reached by a supercell thunderstorm",
      "the altitude at which cloud forms as a parcel is lifted mechanically, such as by a frontal surface or terrain, rather than by surface heating",
      "the altitude at which cloud base forms as a result of surface heating driving thermal (convective) lifting of a rising air parcel, once sufficient heating has occurred",
      "the altitude of the tropopause on a particularly warm day",
    ],
    answer: 2,
    explain:
      "The CCL specifically represents the altitude at which cloud base forms once surface heating has warmed a parcel enough for it to rise on its own (thermal, convective lifting), distinguishing it from the more general LCL, which applies to a parcel lifted by any mechanism, including mechanical lifting.",
    reference: "TP 690 -- Meteorology: Convective Condensation Level",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A 'dry' microburst is distinguished from a more commonly recognized 'wet' microburst primarily in that a dry microburst",
    options: [
      "is associated exclusively with winter frontal systems rather than convective activity",
      "never produces hazardous wind shear, unlike a wet microburst",
      "can only occur over open water, never over land",
      "produces a strong surface outflow despite little or no precipitation reaching the ground, as the falling precipitation evaporates (as virga) within a dry sub-cloud layer, cooling and accelerating the resulting downdraft",
    ],
    answer: 3,
    explain:
      "A dry microburst produces a strong, hazardous surface outflow even though little or no precipitation reaches the ground, because the falling precipitation evaporates within a dry sub-cloud layer (visible as virga), and this evaporative cooling accelerates the descending air.",
    reference: "TP 690 -- Meteorology: Dry versus wet microburst",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A maritime air mass generally exhibits a smaller diurnal (day-to-night) temperature range than a continental air mass primarily because",
    options: [
      "water's high heat capacity causes it to warm and cool more slowly than land, moderating the temperature of the air mass above it",
      "maritime air masses never experience any solar heating during the day",
      "continental air masses are always found at higher latitudes than maritime air masses",
      "maritime air always contains ice crystals that reflect all incoming solar radiation",
    ],
    answer: 0,
    explain:
      "Water has a much higher heat capacity than land and warms and cools far more slowly; an air mass sitting over open water is moderated by this slow temperature change, producing a smaller day-to-night temperature range than a continental air mass over land.",
    reference: "TP 690 -- Meteorology: Maritime versus continental diurnal temperature range",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A stability index, such as the Lifted Index, used by forecasters to assess thunderstorm potential, generally works by",
    options: [
      "directly counting the number of cumulonimbus clouds currently visible on satellite imagery",
      "comparing the temperature a lifted air parcel would have at a reference level to the actual environmental temperature at that same level, with a more negative result indicating greater instability",
      "measuring only the current surface wind speed, with no reference to temperature at all",
      "applying only to winter weather situations, since summer convection cannot be assessed this way",
    ],
    answer: 1,
    explain:
      "A stability index such as the Lifted Index compares the temperature a parcel would have if lifted to a reference level with the actual environmental temperature at that level; a more negative value indicates the parcel is warmer (and therefore more buoyant) than its surroundings, reflecting greater atmospheric instability.",
    reference: "TP 690 -- Meteorology: Stability index (Lifted Index)",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Freezing fog is distinguished from ice fog in that freezing fog consists of",
    options: [
      "precipitation falling from a cloud base rather than a suspended visibility-reducing phenomenon",
      "a phenomenon that occurs only over open water, never over land",
      "supercooled liquid water droplets that can freeze on contact with exposed surfaces, whereas ice fog consists of tiny ice crystals suspended directly in the air",
      "ice crystals only, identical in composition to ice fog but occurring at a higher temperature",
    ],
    answer: 2,
    explain:
      "Freezing fog is composed of supercooled liquid water droplets that remain unfrozen in the air but can freeze on contact with an exposed surface, whereas ice fog is composed of tiny ice crystals already suspended directly in the air, typically forming only in very cold conditions.",
    reference: "TP 690 -- Meteorology: Freezing fog versus ice fog",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "As a general rule of thumb used in aviation weather, a wider surface temperature/dew point spread is associated with",
    options: [
      "a lower expected cumulus cloud base, since less lifting is needed for saturation to occur",
      "certain thunderstorm development, regardless of any other atmospheric factor",
      "no relationship at all to the height of the cumulus cloud base",
      "a higher expected cumulus cloud base, since air must be lifted further before reaching saturation and the LCL",
    ],
    answer: 3,
    explain:
      "A wider temperature/dew point spread means the air must be lifted higher before it cools enough to reach saturation (the LCL); as a result, a wider spread is generally associated with a higher expected cumulus cloud base, and a narrower spread with a lower one.",
    reference: "TP 690 -- Meteorology: Cloud base estimation from temperature/dew point spread",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "On a surface or upper air chart's station model, wind speed is generally depicted using barbs and pennants attached to the wind direction shaft, in which",
    options: [
      "each full barb generally represents 10 knots, each half barb represents 5 knots, and a pennant (triangular flag) represents 50 knots, combined as needed to indicate total wind speed",
      "barbs and pennants indicate wind direction only, with speed shown separately as a printed number beside the station circle exclusively",
      "a pennant always represents exactly 5 knots, identical to a half barb",
      "the number of barbs indicates cloud cover rather than wind speed",
    ],
    answer: 0,
    explain:
      "On a station model, wind speed is built up from a combination of symbols on the wind shaft: each full barb generally represents 10 knots, each half barb represents 5 knots, and a pennant (a small triangular flag) represents 50 knots, combined as needed to depict the total reported wind speed.",
    reference: "TP 690 -- Meteorology: Station model wind barbs",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The geostrophic wind, representing a theoretical balance between the pressure gradient force and the Coriolis force, is distinguished from the gradient wind in that the gradient wind additionally accounts for",
    options: [
      "temperature differences between adjacent air masses, which the geostrophic wind ignores entirely",
      "the centripetal acceleration associated with flow around curved (rather than perfectly straight) isobars",
      "the effect of precipitation falling through the wind field",
      "the effect of surface friction, which the geostrophic wind also fully accounts for",
    ],
    answer: 1,
    explain:
      "The geostrophic wind is a theoretical balance between the pressure gradient force and the Coriolis force assuming straight, parallel isobars. The gradient wind refines this by also accounting for the centripetal acceleration needed to keep air flowing along curved isobars, such as around a low or high pressure centre.",
    reference: "TP 690 -- Meteorology: Geostrophic versus gradient wind",
  },
];
