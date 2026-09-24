import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 76 -- Section 2: Meteorology,
// eighth pass. Original questions written from the TP 690 syllabus
// (topic headings only, no sample questions) and general
// meteorological principles. Covers ice pellets vs freezing rain,
// the nocturnal low-level jet, advection fog persistence, the
// nimbostratus cloud, sea breeze fronts triggering convection,
// pressure-altimetry true altitude error, temperature's effect on
// true altitude, the derecho, frost point vs dew point, lake-effect
// snow, Canadian blizzard criteria, gap winds, icing on unprotected
// surfaces, cloud streets, ice crystal clouds vs supercooled liquid
// water clouds, and the true-vs-magnetic convention for reported
// wind direction -- topics not yet addressed in batches 8, 18, 26,
// 36, 46, 56, or 66. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_76_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Ice pellets (sleet), as distinguished from freezing rain, form when a falling raindrop",
    options: [
      "passes through a sufficiently deep, sub-freezing layer of air near the surface and freezes completely into a small ice pellet before reaching the ground, whereas freezing rain remains a supercooled liquid droplet all the way to the surface, only freezing on impact.",
      "never passes through any freezing layer at all, forming instead purely from direct sublimation of water vapour into ice within the cloud.",
      "freezes completely while still inside the cloud itself, with freezing rain instead forming when a droplet never encounters below-freezing temperatures anywhere along its fall.",
      "is simply a larger version of a freezing rain droplet, with the two differing only in size rather than in phase at the moment of surface impact.",
    ],
    answer: 0,
    explain:
      "Both ice pellets and freezing rain typically begin as snow aloft that melts as it falls through a warm layer, but the key difference lies in what happens afterward: if the resulting liquid droplet then passes through a sufficiently deep sub-freezing layer near the surface, it freezes completely into a small, solid ice pellet before reaching the ground, whereas in freezing rain the sub-freezing layer near the surface is too shallow for the droplet to fully freeze in flight, so it remains a supercooled liquid until it strikes the ground (or an aircraft) and freezes on contact.",
    reference: "TP 690 -- Meteorology: Precipitation Types",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A nocturnal low-level jet -- a band of relatively strong wind forming a few hundred to a couple thousand feet above the surface on a clear, calm night -- develops primarily because",
    options: [
      "after sunset, surface cooling creates a stable layer that frictionally decouples the air just above it from the surface, allowing that layer to accelerate toward the pressure-gradient-driven wind speed it would have without surface friction, while the air right at the surface remains light and calm.",
      "daytime surface heating continues to intensify after sunset, accelerating surface winds to their maximum speed overnight.",
      "it forms only in association with an approaching cold front, with no connection to the diurnal heating and cooling cycle.",
      "it results from convective thunderstorm outflow and therefore only occurs on nights with active thunderstorm activity nearby.",
    ],
    answer: 0,
    explain:
      "After sunset, radiative cooling of the surface creates a stable layer that frictionally decouples the air just above it from the ground; freed from the surface friction that had been slowing it during the day, this layer can accelerate toward the stronger wind speed the pressure gradient alone would produce, forming a wind maximum -- the low-level jet -- while the calm, stable air right at the surface remains largely undisturbed, creating significant vertical wind shear between the two layers.",
    reference: "TP 690 -- Meteorology: Wind",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Advection fog, once formed, generally differs from radiation fog in its persistence in that advection fog",
    options: [
      "can persist through the day and does not reliably dissipate with daytime solar heating alone, since it depends on the characteristics of the moving air mass rather than the overnight radiational cooling cycle that radiation fog depends on.",
      "always dissipates within an hour of sunrise, in exactly the same manner as radiation fog.",
      "can only form and exist at night, disappearing automatically the moment the sun rises regardless of any change in the air mass.",
      "is entirely unaffected by wind, in contrast to radiation fog, which requires strong, gusty wind to form.",
    ],
    answer: 0,
    explain:
      "Because advection fog forms when relatively warm, moist air moves horizontally over a cooler surface, its persistence depends on the characteristics of that moving air mass rather than on the overnight radiational cooling cycle that governs radiation fog -- as a result, advection fog can persist well into or through the day, since daytime solar heating alone does not reliably disperse it the way it typically burns off a radiation fog, and a genuine change in the air mass or wind is often needed to clear it.",
    reference: "TP 690 -- Meteorology: Fog",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Nimbostratus, a thick, low-to-middle-level stratiform cloud, is significant to pilots primarily because it is generally associated with",
    options: [
      "widespread, continuous, often moderate-to-steady precipitation, extensive low ceilings, and, when temperatures are near or below freezing, a prolonged icing hazard as an aircraft climbs or descends through its considerable vertical extent.",
      "isolated, brief, heavy showers, with clear skies typically returning within a few minutes.",
      "severe turbulence and hail, in the same manner as a mature cumulonimbus cell.",
      "clear air with no precipitation at all, distinguishing it from every other cloud type in the stratiform family.",
    ],
    answer: 0,
    explain:
      "Nimbostratus is a thick, extensive stratiform cloud generally associated with widespread, continuous precipitation (rain or snow) rather than the brief, showery precipitation typical of cumuliform cloud, and its considerable vertical extent means an aircraft climbing or descending through it can spend a prolonged period in cloud -- if temperatures within the cloud are near or below freezing, this creates a sustained icing exposure that is a significant operational consideration, distinct from the more localized but often more intense hazards of a convective cloud.",
    reference: "TP 690 -- Meteorology: Clouds",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A sea breeze front, the boundary formed as cooler air moving inland from the sea breeze undercuts warmer air over land, can trigger convective activity primarily because",
    options: [
      "the front acts as a lifting mechanism, forcing the warmer inland air upward along the boundary, which can initiate or intensify cumulus and, given sufficient instability and moisture, thunderstorm development along or near the front.",
      "the sea breeze front always suppresses convection entirely, since the cooler marine air permanently stabilizes the atmosphere for the rest of the day.",
      "it has no lifting effect at all and is significant only as a source of surface wind direction change, unrelated to cloud or thunderstorm development.",
      "it forms exclusively at night, when no convective activity of any kind is possible regardless of instability.",
    ],
    answer: 0,
    explain:
      "Where the leading edge of the cooler, denser sea breeze air undercuts the warmer air over land, it acts as a localized lifting mechanism, forcing the warmer air upward along the boundary -- given sufficient atmospheric instability and available moisture, this lifting can initiate or intensify cumulus development and, in favourable conditions, thunderstorm activity along or near the sea breeze front, which is why coastal convective weather often shows a distinct spatial and temporal relationship to the sea breeze's inland progression.",
    reference: "TP 690 -- Meteorology: Local Winds",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "An aircraft flying at a constant indicated altitude, using an altimeter setting obtained before departure, that flies into a region of lower actual atmospheric pressure without updating the altimeter setting will",
    options: [
      "actually be flying at a true altitude lower than indicated, since the altimeter, still referenced to the higher pressure setting, will over-read compared to the aircraft's true height above mean sea level.",
      "actually be flying at a true altitude higher than indicated, with the altimeter under-reading the aircraft's true height.",
      "experience no discrepancy at all between indicated and true altitude, since pressure changes en route have no effect on a properly functioning altimeter.",
      "have the discrepancy automatically corrected by the aircraft's transponder, eliminating any risk to terrain clearance.",
    ],
    answer: 0,
    explain:
      "An altimeter is essentially an aneroid barometer calibrated to indicate altitude based on the pressure setting entered by the crew; if the actual atmospheric pressure along the route decreases below what the altimeter is still set to, the altimeter will over-read -- showing a higher altitude than the aircraft is actually flying at -- meaning true altitude is lower than indicated, which is the basis for the classic caution to obtain and set current altimeter settings, particularly when flying from a region of high pressure into a region of lower pressure where terrain clearance could otherwise be eroded without the crew realizing it.",
    reference: "TP 690 -- Meteorology: Atmospheric Pressure and Altimetry",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Beyond the effect of pressure alone, flying in air significantly colder than the International Standard Atmosphere predicts for that altitude (with the correct altimeter setting still entered) causes",
    options: [
      "true altitude to be lower than indicated altitude, because colder, denser air compresses the same pressure difference into a shorter vertical distance than the standard atmosphere assumes, an effect of particular concern for terrain and obstacle clearance in cold weather.",
      "true altitude to be higher than indicated altitude, since colder air always causes the altimeter to under-read regardless of density effects.",
      "no effect on true altitude at all, since temperature has no bearing on the relationship between pressure and altitude once the correct altimeter setting has been entered.",
      "the altimeter to become completely unreliable and unusable, rather than simply reading with a predictable cold-temperature error.",
    ],
    answer: 0,
    explain:
      "An altimeter is calibrated assuming the International Standard Atmosphere's temperature profile; in air significantly colder than standard, the atmosphere is denser than assumed, so a given pressure difference corresponds to a smaller actual change in height than the altimeter's calibration predicts -- the result is that true altitude ends up lower than indicated altitude, even with the correct pressure setting entered, which is why cold-temperature altitude corrections are applied, particularly for terrain and obstacle clearance during approaches at cold-temperature-restricted aerodromes.",
    reference: "TP 690 -- Meteorology: Atmospheric Pressure and Altimetry",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A derecho is best described as",
    options: [
      "a widespread, long-lived windstorm associated with a fast-moving band of severe thunderstorms, capable of producing damaging straight-line winds over a large area along its path.",
      "a single, small, short-lived tornado that dissipates within seconds of touching down.",
      "a stationary, slow-moving thunderstorm cell that produces heavy rainfall but little or no wind.",
      "a purely upper-level phenomenon with no associated surface wind or weather effects.",
    ],
    answer: 0,
    explain:
      "A derecho is a widespread, long-lived windstorm produced by a fast-moving band of severe thunderstorms, capable of generating damaging straight-line winds over a large swath of territory -- often hundreds of kilometres long -- as the convective line propagates, distinguishing it from an isolated thunderstorm's more localized gust front and posing a significant hazard to aviation across a broad path rather than at a single point.",
    reference: "TP 690 -- Meteorology: Thunderstorms",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "The frost point, as distinguished from the dew point, is defined as",
    options: [
      "the temperature to which air must be cooled, at constant pressure and moisture content, for water vapour to change directly into ice (deposition) rather than condensing into liquid water, applicable only when the air is already below freezing.",
      "simply another name for the dew point, with no meaningful distinction between the two terms.",
      "the temperature at which frost will form regardless of how much moisture is present in the air.",
      "a value used only in marine meteorology, with no application to aviation weather reporting.",
    ],
    answer: 0,
    explain:
      "While the dew point is the temperature to which air must be cooled for water vapour to condense into liquid water, the frost point is the corresponding temperature, applicable when that temperature is at or below freezing, at which water vapour instead deposits directly as ice -- this distinction matters for anticipating frost formation on surfaces such as a parked aircraft, since it depends on both the air's moisture content and its temperature being at or below the frost point rather than simply being below zero.",
    reference: "TP 690 -- Meteorology: Humidity",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Lake-effect snow, a phenomenon well known downwind of the Great Lakes and other large bodies of water in Canada during the colder months, develops when",
    options: [
      "cold, dry air moves across relatively warm open water, picking up heat and moisture from the lake surface, which destabilizes the air and, once it moves back over land, can produce locally heavy and persistent snow showers downwind of the lake.",
      "warm, moist air moves across a frozen lake surface, losing all of its moisture instantly and producing clear skies downwind.",
      "it occurs only in summer, when lake water temperatures are at their warmest relative to the surrounding land.",
      "it is unrelated to the temperature difference between the lake water and the air passing over it, depending instead entirely on the lake's size.",
    ],
    answer: 0,
    explain:
      "Lake-effect snow forms when cold, dry air moves across a comparatively warm, ice-free lake surface, absorbing heat and moisture from the water; this destabilizes the air mass, and as it reaches the downwind shore and encounters the rougher, cooler land surface, the added instability and moisture can produce locally heavy, sometimes very persistent snow showers concentrated in narrow bands downwind of the lake, a pattern most pronounced in late fall and early winter before the lake itself freezes over.",
    reference: "TP 690 -- Meteorology: Precipitation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A blizzard, as a specifically defined severe winter weather warning in Canadian meteorological terminology, generally requires the combination of",
    options: [
      "sustained strong winds (or frequent gusts) of at least a specified minimum speed, falling and/or blowing snow reducing visibility below a specified threshold, and these conditions persisting for a minimum duration, rather than simply any snowfall accompanied by some wind.",
      "any snowfall at all, regardless of wind speed, visibility, or how briefly the conditions last.",
      "extremely cold temperatures alone, with no requirement for wind or reduced visibility of any kind.",
      "heavy snowfall accumulation exceeding a specified total, with wind and visibility playing no role in the definition.",
    ],
    answer: 0,
    explain:
      "A blizzard warning in Canadian meteorological terminology is issued based on a specific combination of criteria -- sustained strong wind or frequent gusts at or above a defined minimum speed, snow (falling and/or blowing) reducing visibility below a defined threshold, and these conditions being expected to persist for at least a minimum duration -- rather than being triggered by heavy snowfall, extreme cold, or wind alone, which is why not every snowstorm meets the formal definition of a blizzard.",
    reference: "TP 690 -- Meteorology: Winter Weather Hazards",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "A gap wind, a local wind phenomenon particularly relevant to mountainous and coastal terrain, is best described as",
    options: [
      "wind that becomes channelled and significantly accelerated as it is forced through a narrow mountain pass, valley, or gap in a coastal range, producing locally much stronger wind than the surrounding, unconstrained terrain would experience.",
      "wind that forms only over large bodies of open water, with no connection to terrain or mountainous features.",
      "a purely vertical downslope wind, identical in mechanism to a katabatic wind, with no horizontal channelling effect.",
      "a wind phenomenon that occurs exclusively at high altitude, well above any mountain range, with no surface-level effect.",
    ],
    answer: 0,
    explain:
      "A gap wind develops when the general flow of air is forced to funnel through a constriction in the terrain -- a mountain pass, a narrow valley, or a gap in a coastal mountain range -- and, much like fluid flow through a narrowed channel, the wind accelerates significantly as it squeezes through the constriction, producing locally much stronger surface wind in and near the gap than would otherwise occur, a phenomenon well known to pilots operating in mountainous and coastal regions of Canada.",
    reference: "TP 690 -- Meteorology: Local Winds",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Icing on unprotected surfaces such as antennas, static ports, or other small, unheated protrusions, as distinct from icing on the wing and tail leading edges, is significant because it can",
    options: [
      "degrade or block a specific system's function -- for example, distorting an antenna's radiated pattern or blocking a static port and corrupting airspeed and altitude indications -- even in icing conditions too light to meaningfully affect the aircraft's overall aerodynamic performance.",
      "have no operational significance whatsoever, since only wing and tail icing affects aircraft performance.",
      "always accumulate at a slower rate than wing icing, meaning unprotected surfaces are never at risk before the wings are.",
      "affect only the aircraft's radio communication equipment, with no possible effect on any other system.",
    ],
    answer: 0,
    explain:
      "Small, unprotected surfaces such as antennas or static ports can accumulate a disproportionate amount of ice relative to their size, and even icing conditions too light to meaningfully degrade the wing's aerodynamic performance can be enough to distort an antenna's radiated or received signal or, more seriously, partially or fully block a static port -- corrupting airspeed, altitude, and vertical speed indications -- which is why heated pitot-static systems and careful attention to smaller protrusions remain important even in what might be assessed as a low overall icing risk.",
    reference: "TP 690 -- Meteorology: Aircraft Icing",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Cloud streets -- long, parallel rows of cumulus cloud aligned roughly with the wind direction in the boundary layer -- form when",
    options: [
      "convective thermals organize into parallel bands of rising and sinking air, aligned by the prevailing low-level wind, with cloud forming atop the rising bands and clear air persisting over the sinking bands in between.",
      "a single, isolated cumulus cell repeatedly splits into identical copies of itself as it drifts downwind.",
      "stratiform cloud is mechanically torn into narrow bands by strong upper-level wind shear, unrelated to any convective process.",
      "they form only directly beneath the jet stream core and cannot occur at lower altitudes or in weaker upper winds.",
    ],
    answer: 0,
    explain:
      "Cloud streets form when convective thermals in the boundary layer organize into parallel, counter-rotating bands of rising and sinking air, aligned with the prevailing low-level wind -- cumulus cloud forms atop the rising bands, where air cools to saturation, while the intervening sinking bands remain clear -- and their alignment can give a pilot a useful visual indication of the low-level wind direction, along with an indication of the boundary layer convective activity and associated light-to-moderate turbulence likely to be present.",
    reference: "TP 690 -- Meteorology: Clouds",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Structural airframe icing from supercooled liquid water generally does not occur when an aircraft is flying through a cloud composed primarily of ice crystals (such as high-altitude cirrus), because",
    options: [
      "the water within such a cloud has already frozen into solid ice crystals, which do not adhere to and accrete on an airframe surface in the same way that supercooled liquid droplets, which freeze only on impact, do.",
      "ice crystal clouds never contain any water at all, in either liquid or solid form.",
      "ice crystals are always warmer than supercooled liquid droplets, preventing any icing risk regardless of cloud composition.",
      "aircraft never fly at the altitudes where ice crystal clouds such as cirrus are found, making the distinction operationally irrelevant.",
    ],
    answer: 0,
    explain:
      "Classic structural airframe icing depends on supercooled liquid water droplets, which remain in a liquid state below the freezing point until they strike a surface and freeze on impact; in a cloud composed primarily of ice crystals, the water has already frozen into solid ice, which largely bounces or blows off an airframe surface rather than adhering and building up ice, which is why ice crystal clouds present comparatively little classic airframe icing risk -- though ice crystals can still pose a separate hazard to some engines through accretion inside the core, a distinct mechanism from airframe icing.",
    reference: "TP 690 -- Meteorology: Aircraft Icing",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Meteorology",
    q: "Wind direction reported in a METAR or TAF is referenced to true north, whereas wind information given verbally by ATC or ATIS (and runway designators themselves) is generally referenced to",
    options: [
      "magnetic north, meaning a pilot comparing a METAR's coded wind direction to an ATC-issued wind or a runway heading must account for this difference rather than assuming the two values use the same reference.",
      "true north as well, with no difference at all between the coded METAR/TAF convention and verbal ATC wind reports.",
      "the aircraft's own current heading at the moment the report is received, rather than any fixed geographic reference.",
      "grid north, a reference system used only in high-latitude polar navigation and unrelated to standard wind reporting.",
    ],
    answer: 0,
    explain:
      "METAR and TAF wind directions are coded relative to true north, following international convention, while wind information given verbally by ATC or broadcast on ATIS -- along with runway designators, which are based on magnetic heading -- is generally referenced to magnetic north; a pilot working with both a coded weather report and verbal ATC wind information needs to be aware of this difference in reference rather than assuming the two figures are directly comparable without adjustment.",
    reference: "TP 690 -- Meteorology: Weather Reporting Conventions",
  },
];
