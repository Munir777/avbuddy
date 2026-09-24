import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 31 -- Section 4: Navigation -
// General, fourth pass. Original questions written from standard
// air navigation principles and the TP 690 syllabus (topic headings
// only, no sample questions). Covers grid navigation, NDB Q-codes,
// VOR test facilities, GNSS integrity monitoring, geodetic datums,
// classic bearing/fix techniques, and time conventions not yet
// addressed in batches 4, 13, or 22. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_31_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Grid navigation, using a fixed grid reference direction rather than true or magnetic north, is primarily employed",
    options: [
      "in high-latitude or polar regions, where meridians converge sharply and magnetic direction becomes unreliable, so that a single, constant reference direction can still be used for steering across the route.",
      "exclusively in equatorial regions, where magnetic variation is most stable and predictable, making grid navigation entirely unnecessary anywhere else.",
      "only for VFR flights, with IFR operations specifically prohibited from using any grid navigation reference.",
      "as a complete replacement for true north on every chart worldwide, eliminating any further need for true or magnetic direction references.",
    ],
    answer: 0,
    explain:
      "Near the poles, meridians converge so sharply that true track changes rapidly along a route and magnetic direction becomes unreliable (due to both weak/erratic dip and rapid variation changes), making both true and magnetic references impractical for steering -- grid navigation instead overlays a fixed reference grid (often aligned to a chosen meridian) so the aircraft can steer a constant grid direction across the route, a technique specific to high-latitude and polar operations rather than equatorial flying, VFR-only use, or a wholesale replacement of true north elsewhere.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "In ADF/NDB terminology, the Q-code QDM refers to",
    options: [
      "the magnetic heading (course) to steer, with zero wind, to fly directly to the station.",
      "the magnetic bearing of the aircraft from the station, which is the reciprocal of QDM.",
      "the true bearing of the aircraft from the station, unrelated to magnetic heading at all.",
      "the relative bearing displayed on the ADF instrument itself, before any correction for aircraft heading.",
    ],
    answer: 0,
    explain:
      "QDM is specifically the magnetic heading to steer (zero wind) to fly direct to the station -- distinguished from QDR (the magnetic bearing FROM the station, QDM's reciprocal), QTE (the true bearing from the station), and the ADF's raw relative bearing indication (which must be combined with aircraft heading to derive a magnetic bearing at all), each of these Q-codes describing a specifically different piece of bearing information.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A VOR Test Facility (VOT), where available, allows a pilot to",
    options: [
      "check the accuracy of an aircraft's VOR receiver against a known, published test signal broadcasting a single, fixed radial in all directions from the facility.",
      "physically recalibrate the aircraft's VOR receiver hardware, replacing the need for any periodic maintenance check.",
      "receive DME distance information only, with no bearing or radial information broadcast by the facility at all.",
      "test ADF receiver accuracy exclusively, with VOT facilities having no application to VOR equipment.",
    ],
    answer: 0,
    explain:
      "A VOT broadcasts a test signal that, regardless of the aircraft's actual position around the facility, should be received as a single specified radial (commonly 360°/0° with a TO/FROM ambiguity, or a locally published value) -- letting a pilot compare the receiver's indicated radial against that known value as an operational accuracy check, not a hardware recalibration, and it's a VOR-specific facility with no DME or ADF testing function.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The 'cone of confusion' associated with a VOR or TACAN station is",
    options: [
      "a roughly cone-shaped volume of airspace directly above the station where reliable bearing indications become erratic or unusable as the aircraft passes overhead.",
      "a region of degraded signal reception found only at extreme range from the station, with the area directly overhead considered entirely unaffected.",
      "a permanent, published no-fly zone surrounding every VOR or TACAN station, unrelated to bearing signal reliability.",
      "a phenomenon specific to NDB stations, with VOR and TACAN stations considered entirely immune to any overhead signal effect.",
    ],
    answer: 0,
    explain:
      "Directly overhead a VOR or TACAN station, the geometry of the radiated signal means bearing information becomes unreliable and the indicator can swing or fluctuate erratically -- a recognized, expected effect confined to a roughly cone-shaped region near the station (not at extreme range, and not a regulatory no-fly zone), and while NDBs have their own separate overhead-station indications, the cone of confusion as a term specifically describes this VOR/TACAN phenomenon.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Receiver Autonomous Integrity Monitoring (RAIM), a function of many GNSS receivers, is designed to",
    options: [
      "cross-check redundant satellite ranging information to detect a faulty or degraded satellite signal and alert the pilot when the system's positional integrity can no longer be assured to the required standard.",
      "physically increase the number of satellites visible to the receiver, guaranteeing a minimum satellite count regardless of actual sky visibility.",
      "replace the need for any ground-based navigation aid entirely, making RAIM a form of augmentation rather than an integrity check.",
      "monitor aircraft fuel state rather than navigation signal quality, despite its name suggesting a navigation-related function.",
    ],
    answer: 0,
    explain:
      "RAIM works by using the receiver's available satellite geometry redundancy to cross-check whether the resulting position solution is internally consistent, flagging degraded integrity (such as from a faulty satellite) and alerting the pilot when the required level of positional confidence can't be assured for the phase of flight being flown -- it's an integrity monitoring function within the receiver itself, not a means of adding satellites, replacing other navaids, or monitoring anything unrelated to positioning.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "WGS84 (World Geodetic System 1984), referenced by GNSS and most modern aeronautical charts, is best described as",
    options: [
      "a standardized geodetic reference datum -- a mathematical model of the Earth's shape and a coordinate reference frame -- used so that latitude/longitude coordinates are consistently defined worldwide.",
      "a specific type of aeronautical chart projection, functionally equivalent to the Lambert Conformal Conic projection.",
      "a radio navigation aid broadcasting standard time signals, unrelated to positional coordinates or chart datums.",
      "an air traffic control communication protocol, with no relevance to charts, coordinates, or GNSS positioning.",
    ],
    answer: 0,
    explain:
      "WGS84 is a geodetic datum: a defined mathematical reference ellipsoid and coordinate system that gives latitude/longitude coordinates worldwide a common, consistent basis -- it's not a chart projection (like the Lambert Conformal Conic, which is a separate concept describing how the Earth's surface is mapped onto a flat chart), a time signal, or a communication protocol, and its universal adoption is precisely what allows GNSS-derived coordinates to match consistently against modern published charts and databases.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The 'doubling the angle off the bow' technique, a classic dead-reckoning method for estimating distance to a point ahead, involves",
    options: [
      "noting the relative bearing to the point, holding a steady heading until that relative bearing has doubled, and using the distance flown between those two observations as the approximate distance remaining to the point at that moment.",
      "flying directly at the point and doubling the aircraft's groundspeed to estimate distance, with no bearing observation involved at all.",
      "taking two simultaneous bearings from two different points to fix the aircraft's own position, unrelated to any single point's distance ahead.",
      "doubling the magnetic variation value at the point to estimate the true bearing to it, a purely directional rather than distance-estimating technique.",
    ],
    answer: 0,
    explain:
      "This technique relies on simple geometry: from an initial relative bearing off the aircraft's track ('off the bow'), if the aircraft holds a steady track until that relative bearing exactly doubles, the resulting triangle is isosceles, so the distance flown between the two observations equals the distance from the aircraft to the point at the moment the bearing doubled -- a distance-estimation technique using a single point's changing relative bearing, distinct from a running fix (which uses bearings to determine the aircraft's own position) or any variation-based calculation.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An ADF's relative bearing indication is converted into a magnetic bearing to the station by",
    options: [
      "adding the relative bearing to the aircraft's magnetic heading, and subtracting 360° from the result if it exceeds 360°.",
      "subtracting the aircraft's magnetic heading from the relative bearing, regardless of the resulting sign of the answer.",
      "the relative bearing already being a magnetic bearing with no correction or combination with aircraft heading required at all.",
      "multiplying the relative bearing by the aircraft's true airspeed, a speed-dependent rather than heading-dependent calculation.",
    ],
    answer: 0,
    explain:
      "The ADF needle shows relative bearing -- the angle between the aircraft's nose (heading) and the station, not a bearing referenced to magnetic north on its own -- so to get the actual magnetic bearing to the station, the relative bearing must be added to the aircraft's current magnetic heading, subtracting 360° if the sum exceeds a full circle; treating the raw relative bearing as already being a magnetic bearing, or basing the calculation on airspeed, would produce an incorrect result.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a Lambert Conformal Conic chart constructed using two standard parallels, chart scale is",
    options: [
      "most accurate along the two standard parallels themselves, with some scale distortion (contraction between them and expansion beyond them) present elsewhere on the chart.",
      "perfectly accurate and identical everywhere on the chart, with no scale variation anywhere regardless of location.",
      "accurate only at the chart's central meridian, with the standard parallels themselves being the location of greatest scale distortion.",
      "undefined at any point on a Lambert Conformal Conic chart, since the projection does not support a meaningful scale concept at all.",
    ],
    answer: 0,
    explain:
      "The two standard parallels are where the projection cone theoretically touches (or is secant to) the Earth's surface, so scale is most accurate there -- between the two standard parallels, scale is very slightly compressed, and beyond them (further from the cone's contact), it's very slightly expanded -- a small, generally negligible distortion for most practical en route navigation purposes, but a real one, meaning scale is not literally uniform everywhere on the chart despite the projection's overall conformal (shape-preserving) properties.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A 'fix' position, as distinct from a dead-reckoning (DR) position, is generally considered",
    options: [
      "more reliable, since it is derived from actual external position-determining information (such as NAVAID bearings, GNSS, or visual reference) rather than being calculated forward from a prior known position using heading, speed, and elapsed time alone.",
      "less reliable than a DR position, since DR positions are calculated using precise instrument readings while fixes rely on estimation alone.",
      "identical in method to a DR position, with 'fix' and 'DR position' simply being two names for the same navigational technique.",
      "obtainable only through celestial observation, with no other method (radio, visual, or satellite) capable of producing a genuine fix.",
    ],
    answer: 0,
    explain:
      "A DR position is a computed estimate, projected forward from a known starting point using heading, true airspeed/groundspeed, wind, and elapsed time -- it accumulates uncertainty the longer it's relied on without updating. A fix, by contrast, is derived from actual external position information at that moment (radio bearings, GNSS, visual landmarks, and so on), which is why a fix is generally treated as more reliable and is used to update (and effectively reset the accumulated error in) the ongoing DR process, rather than the two being equivalent or DR being considered the more reliable of the two.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Civil twilight, as it relates to VFR night flight definitions, is generally understood as the period",
    options: [
      "between sunset (or sunrise) and a defined point at which the sun is a specified number of degrees below the horizon, during which there is still enough natural light for most outdoor activity without artificial lighting.",
      "identical to the period of full darkness, with civil twilight beginning only once the sky has become completely black.",
      "unrelated to sunset or sunrise, defined instead purely by a fixed clock time that never varies by location or season.",
      "applicable only at the equator, with civil twilight considered undefined at higher latitudes regardless of season.",
    ],
    answer: 0,
    explain:
      "Civil twilight bridges daylight and full darkness -- beginning at sunset (or ending at sunrise) and continuing until the sun reaches a defined number of degrees below the horizon, a period with still-substantial natural light -- and this transitional window is precisely why regulations defining 'night' for currency, lighting, and operational purposes typically reference the end (or beginning) of civil twilight rather than sunset/sunrise alone; the exact duration of civil twilight varies meaningfully by latitude and season rather than being a fixed clock time or an equator-only concept.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Coordinated Universal Time (UTC), commonly referred to as 'Zulu' time in aviation, is used in flight planning and record-keeping primarily because",
    options: [
      "it provides a single, common time reference unaffected by local time zone or daylight-saving changes, avoiding confusion when a flight crosses multiple time zones or when coordinating with distant stations.",
      "it is identical to the local time at every aerodrome worldwide, making separate local time references entirely unnecessary.",
      "it applies exclusively to military aviation, with civil aviation required to use only local standard time for all planning and records.",
      "it changes value twice yearly at every location to follow daylight-saving time adjustments, precisely because that keeps it aligned with local clock time everywhere.",
    ],
    answer: 0,
    explain:
      "UTC is deliberately a single, unified time standard that doesn't shift with local time zones or daylight-saving changes, which is exactly what makes it practical for flight planning, weather reports, NOTAMs, and ATC coordination across a route (or between stations) that may span multiple local time zones -- using a common reference avoids the ambiguity and error-prone conversions that relying solely on varying local times would create, and it applies to both civil and military aviation rather than one or the other.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Among the potential error sources affecting GNSS position accuracy, multipath error specifically refers to",
    options: [
      "a satellite signal reaching the receiver's antenna both directly and after reflecting off a nearby surface (such as terrain, water, or the aircraft structure), causing the reflected signal to interfere with and degrade the direct signal.",
      "an error caused by the satellite's clock running at a different rate than the receiver's clock, unrelated to any signal reflection.",
      "an error arising from delayed signal propagation through the ionosphere, unrelated to any reflected or indirect signal path.",
      "an error caused by poor satellite geometry alone, with no involvement of the signal's actual propagation path.",
    ],
    answer: 0,
    explain:
      "Multipath is specifically a reflection-related error: some of the satellite signal energy reaches the receiver by a longer, indirect path (bounced off a nearby reflective surface) in addition to the direct path, and that reflected signal's interference with the direct signal can degrade the resulting position or timing solution -- a distinct error mechanism from ionospheric propagation delay, satellite/receiver clock error, or geometric dilution of precision from poor satellite geometry, even though all of these can affect overall GNSS accuracy.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Unlike a rhumb line, which maintains a single, constant true track throughout its length, a great circle track between two points (not on the equator or a common meridian)",
    options: [
      "continuously changes true track along its length, meaning the initial track at the departure point differs from the track at any later point along the same great circle route.",
      "also maintains a single, constant true track throughout its length, making it indistinguishable in that respect from a rhumb line.",
      "is undefined in terms of true track at any point along its length, since great circles are a distance concept only, with no directional properties.",
      "changes true track only at the midpoint of the route, remaining constant over the first and second halves individually.",
    ],
    answer: 0,
    explain:
      "A great circle's defining navigational trade-off is exactly this: it's the shortest distance between two points, but (except along the equator or a meridian) its true track continuously changes along its length, rather than staying constant the way a rhumb line's track does by definition -- which is why a great circle route is often flown as a series of rhumb-line legs (updated periodically) rather than as a single constant heading, and why the track keeps changing gradually rather than shifting only once at a midpoint.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A 'running fix,' a classic dead-reckoning position-fixing technique, is obtained by",
    options: [
      "taking a bearing from a single reference station, then, after a known time/distance interval, taking a second bearing from the same station and advancing (transferring) the first bearing line forward by the distance flown to intersect the second, giving an estimated position.",
      "taking two simultaneous bearings from two different stations at the same instant, with no time interval or bearing line advancement involved.",
      "relying exclusively on GNSS-derived coordinates, with no radio bearing, visual reference, or dead-reckoning calculation involved at all.",
      "taking a single bearing from a single station and treating that bearing line alone, without any second observation, as a complete position fix.",
    ],
    answer: 0,
    explain:
      "A running fix is useful precisely when only one usable reference station is available: an initial bearing line is plotted, and after a known interval the aircraft's DR-calculated distance flown is used to advance (shift) that first bearing line forward, where it's then crossed with a second bearing taken from the same station at the later time -- producing an estimated position from a single station over two observations, distinct from a simultaneous two-station cross-fix, a GNSS-only position, or an unconfirmed single bearing line (which alone gives only a line of position, not a fix).",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Along a single great circle route between two points not on the equator or a common meridian, the initial true track (at departure) and the final true track (on arrival) differ from one another because",
    options: [
      "of convergency between the two points' meridians, the same underlying effect that causes a great circle's true track to change continuously along its length rather than remaining constant.",
      "of magnetic variation alone, an effect entirely unrelated to convergency or to the great circle's own geometric properties.",
      "the initial and final tracks are always identical on a great circle route, making any described difference between them a navigational impossibility.",
      "of chart projection error alone, an artifact of how the route is drawn rather than a real geometric property of the great circle itself.",
    ],
    answer: 0,
    explain:
      "Convergency -- the difference in direction between the meridians at two different points, a consequence of meridians converging toward the poles -- is the same underlying geometric effect responsible for a great circle's continuously changing true track along its length, and it specifically explains why the initial track leaving the departure point and the final track arriving at the destination differ from each other along the same great circle route; this is a genuine geometric property of the Earth and the great circle itself, not a chart-drawing artifact, and it's a separate effect from magnetic variation (which concerns magnetic, not true, direction).",
    reference: "TP 690 Section 4 - Navigation - General",
  },
];
