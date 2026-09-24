import type { Question } from "../../../types";

// Canada TC ATPL - Section 3: Navigation - General
// Batch 91 - Tenth depth pass
export const CANADA_TC_ATPL_BATCH_91_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The magnitude of a simple direct-reading magnetic compass's turning and acceleration/deceleration errors generally",
    options: [
      "only occurs south of the equator, never in the northern hemisphere",
      "remains completely constant regardless of the aircraft's geographic latitude",
      "increases as latitude increases (becoming most pronounced at high latitudes near the magnetic poles) and diminishes toward the magnetic equator, because the errors depend on the vertical component of the Earth's magnetic field",
      "is entirely unrelated to the Earth's magnetic field and depends only on aircraft speed",
    ],
    answer: 2,
    explain:
      "Compass turning and acceleration errors depend on the vertical component of the Earth's magnetic field (dip), which increases with latitude; the errors are therefore most pronounced at high latitudes near the magnetic poles and diminish toward the magnetic equator, where dip approaches zero.",
    reference: "TP 690 -- Navigation - General: Compass error magnitude versus latitude",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Convergency between two meridians, expressing the difference in true direction they would indicate at two points along the same great circle, can be approximated as",
    options: [
      "the change of latitude between the two points, since convergency is treated in this approximation as purely a north-south quantity independent of longitude",
      "zero at all latitudes except exactly at the poles, where meridians are considered to converge to a single point on the Earth's surface",
      "always exactly 90 degrees, regardless of latitude or longitude difference, since meridians are treated as mutually perpendicular great circles",
      "the change of longitude between the two meridians, multiplied by the sine of the mean latitude between the two points",
    ],
    answer: 3,
    explain:
      "Convergency can be approximated as the change of longitude between two meridians multiplied by the sine of the mean latitude between the two points, reflecting how meridians converge toward the poles and how that convergence increases with latitude.",
    reference: "TP 690 -- Navigation - General: Convergency formula",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A GNSS receiver's 'mask angle' (or elevation mask) refers to",
    options: [
      "a minimum satellite elevation angle above the horizon, below which the receiver excludes that satellite from its position solution",
      "a fixed value that is identical for every GNSS receiver regardless of manufacturer, since the mask angle is dictated solely by international standards rather than receiver design",
      "the angle at which the receiver automatically shuts down its tracking channels to conserve battery power during prolonged operation",
      "the maximum bank angle the aircraft can achieve while still maintaining reliable reception of GNSS satellite signals",
    ],
    answer: 0,
    explain:
      "A mask angle is a minimum satellite elevation above the horizon below which a receiver excludes that satellite from its position solution, since signals from very low elevation satellites are more prone to multipath and atmospheric error, degrading rather than improving the position solution.",
    reference: "TP 690 -- Navigation - General: GNSS satellite mask angle",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "GNSS ephemeris data is distinguished from almanac data in that ephemeris data provides",
    options: [
      "the receiver's own internal clock correction value exclusively, with no bearing on satellite orbital positions at all",
      "precise orbital information for the specific satellites currently being tracked, used directly in the position calculation, whereas almanac data provides only coarse constellation-wide data",
      "information that is identical in content and precision to almanac data in every respect, with only the terminology differing between receiver manufacturers, standards bodies, and regulatory authorities",
      "weather information relevant to the receiver's current location, such as barometric pressure and temperature",
    ],
    answer: 1,
    explain:
      "Ephemeris data provides precise orbital information for the specific satellites currently being tracked, used directly in the position calculation, while almanac data provides coarser orbital information for the entire constellation, mainly useful for helping the receiver plan which satellites to search for and acquire.",
    reference: "TP 690 -- Navigation - General: Ephemeris versus almanac data",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An Air Defence Identification Zone (ADIZ), depicted on aeronautical charts, generally requires an aircraft intending to operate within it to",
    options: [
      "fly only at night, never during daylight hours, since ADIZ procedures are understood to apply exclusively to hours of darkness",
      "avoid the area entirely under all circumstances, since it is treated as functionally and legally identical to permanently prohibited airspace where transit is never authorized under any condition",
      "comply with specific identification, position reporting, or flight plan requirements before or upon entry, to allow the aircraft to be positively identified for national security purposes",
      "obtain no special authorization, identification, or flight plan clearance of any kind before entering",
    ],
    answer: 2,
    explain:
      "An ADIZ generally requires an aircraft to comply with specific identification, position reporting, or flight plan requirements before or upon entry, allowing the aircraft to be positively identified for national security purposes, rather than prohibiting entry outright or requiring no special procedure at all.",
    reference: "TP 690 -- Navigation - General: Air Defence Identification Zone",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a long route spanning a significant range of longitude, magnetic variation generally changes from one end of the route to the other, meaning that a pilot navigating by magnetic heading",
    options: [
      "should switch entirely to grid navigation for any route exceeding 100 nautical miles",
      "will find that variation never changes over any distance within the same country",
      "can safely use a single variation value for the entire route with no meaningful loss of accuracy, regardless of route length",
      "should generally account for the changing variation along the route, updating the magnetic heading reference at appropriate points rather than relying on a single value throughout",
    ],
    answer: 3,
    explain:
      "Because magnetic variation changes with location, a pilot navigating a long route by magnetic heading should generally account for that change along the route, updating the magnetic heading reference at appropriate points rather than relying on a single value derived from only one end of the route.",
    reference: "TP 690 -- Navigation - General: Magnetic variation change along a route",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Satellite-Based Augmentation System (SBAS), relying on geostationary satellites to broadcast correction signals, can experience reduced availability or reliability at very high latitudes primarily because",
    options: [
      "geostationary satellites appear at a very low elevation angle above the horizon (or may be below it entirely) at high latitudes, weakening reception of the correction signal",
      "high latitudes experience no ionospheric delay whatsoever, eliminating the need for SBAS corrections entirely, since ionospheric activity is understood to be absent poleward of 60 degrees latitude",
      "SBAS relies exclusively on ground-based transmitters broadcasting on VHF, which are never installed anywhere in polar regions",
      "GNSS satellites themselves cannot be tracked or acquired at high latitudes under any circumstance whatsoever",
    ],
    answer: 0,
    explain:
      "Because geostationary satellites orbit above the equator, they appear at a progressively lower elevation angle above the horizon as latitude increases, and may be below the horizon entirely at very high latitudes, weakening or blocking reliable reception of the SBAS correction broadcast.",
    reference: "TP 690 -- Navigation - General: SBAS availability at high latitudes",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Unlike a conventional fix defined by reference to a ground-based NAVAID (such as a VOR radial/DME intersection), many RNAV waypoints are",
    options: [
      "unable to be named or displayed on any navigation chart, since RNAV waypoints are considered purely internal computer references",
      "purely computer-defined points specified by latitude and longitude coordinates, with no requirement to correspond to any physical ground-based facility",
      "always required to be co-located with an existing ground-based NAVAID facility, since RNAV computations are considered incapable of operating independently of a ground-based transmitter",
      "usable only by aircraft equipped with an ADF receiver capable of tuning the associated non-directional beacon frequency",
    ],
    answer: 1,
    explain:
      "Many RNAV waypoints are purely computer-defined points specified by latitude and longitude coordinates, with no requirement to correspond to any physical ground-based facility, distinguishing them from a conventional fix defined by reference to a NAVAID such as a VOR.",
    reference: "TP 690 -- Navigation - General: RNAV waypoint types",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A GNSS receiver's 'cold start,' in which no recent almanac or ephemeris data is stored, generally results in",
    options: [
      "a fix that is more accurate than one obtained from a warm start, since any previously stored almanac or ephemeris data is understood to introduce additional position error into the solution",
      "a permanent inability to ever acquire a position fix again under any subsequent operating condition",
      "a longer time to acquire a first position fix compared to a 'warm start,' since the receiver must search more broadly for satellites before it can compute a position",
      "an immediate position fix with no delay whatsoever, identical in acquisition time to a warm start or even a hot start",
    ],
    answer: 2,
    explain:
      "A cold start generally results in a longer time to first fix compared to a warm start, since the receiver has no recent stored data to guide its satellite search and must search more broadly and download fresh orbital data before it can compute a position.",
    reference: "TP 690 -- Navigation - General: GNSS cold start versus warm start",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A compass rose printed on an aeronautical chart around a VOR station symbol, oriented to magnetic north, allows a pilot to",
    options: [
      "replace the need for the VOR receiver's course deviation indicator entirely",
      "determine the aerodrome's runway lighting configuration",
      "determine the station's exact DME frequency",
      "visually read or verify approximate radials from the station directly off the chart, without needing to calculate them separately",
    ],
    answer: 3,
    explain:
      "A compass rose printed around a VOR station symbol, oriented to magnetic north, lets a pilot visually read or verify approximate radials from the station directly off the chart, providing a quick reference without needing to calculate the radial separately.",
    reference: "TP 690 -- Navigation - General: VOR compass rose chart symbol",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For a basic, unaugmented GNSS position fix, vertical position accuracy is generally poorer than horizontal position accuracy primarily because",
    options: [
      "all usable satellites are located above the receiver's horizon, limiting vertical geometric diversity compared to the fuller spread available horizontally",
      "vertical accuracy depends entirely on barometric pressure rather than satellite signals, making GNSS satellite geometry irrelevant to the vertical solution entirely",
      "GNSS satellites are exclusively used for horizontal positioning and are understood to provide no vertical information whatsoever under any geometry",
      "vertical accuracy is always identical to horizontal accuracy for any GNSS receiver regardless of satellite geometry",
    ],
    answer: 0,
    explain:
      "Because all usable GNSS satellites are located above the receiver's horizon, their geometric spread is inherently more limited vertically than horizontally (where satellites can surround the receiver in all directions), resulting in generally poorer vertical accuracy for a basic, unaugmented fix.",
    reference: "TP 690 -- Navigation - General: GNSS vertical versus horizontal accuracy",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A position fix obtained by plotting two simultaneous ADF relative bearings to two separate NDB stations (an NDB cross-bearing fix), compared to a VOR cross-radial fix, is generally considered",
    options: [
      "impossible to obtain, since only one NDB bearing can ever be tracked or plotted by the receiver at any given time",
      "subject to greater potential error, since ADF bearing accuracy is generally lower than VOR radial accuracy and can be further degraded by terrain or coastal refraction",
      "identical in achievable accuracy to a VOR cross-radial fix under all conditions and at any range from the stations",
      "inherently more accurate, since NDB signals are considered never to be affected by any form of propagation error whatsoever, including terrain effect or coastal refraction",
    ],
    answer: 1,
    explain:
      "An NDB cross-bearing fix is generally subject to greater potential error than a VOR cross-radial fix, since ADF bearing accuracy is inherently lower than VOR radial accuracy and can be further degraded by factors such as terrain (mountain effect), coastal refraction, or atmospheric conditions.",
    reference: "TP 690 -- Navigation - General: NDB cross-bearing fix accuracy",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Among all the parallels of latitude, the equator is unique in that it",
    options: [
      "has no defined length at all, since it is treated purely as the theoretical basis for the entire latitude coordinate system",
      "is the only parallel of latitude with a constant magnetic variation of zero everywhere along its length, a property attributed to its unique alignment with the geomagnetic equator",
      "is the only parallel of latitude that is itself a great circle, since every other parallel is a smaller circle whose plane does not pass through the Earth's centre",
      "is the only parallel of latitude along which a rhumb line and a meridian are considered geometrically identical in every case",
    ],
    answer: 2,
    explain:
      "The equator is the only parallel of latitude that is itself a great circle, since its plane passes through the Earth's centre; every other parallel of latitude is a smaller circle whose plane does not pass through the centre.",
    reference: "TP 690 -- Navigation - General: The equator as a great circle",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On an aeronautical chart, Class F airspace, which may be further designated as advisory or restricted, is generally distinguished such that",
    options: [
      "both advisory and restricted Class F airspace are functionally identical in every respect, including entry requirements and hazard level",
      "Class F restricted airspace applies only to military aircraft, and is understood to never affect civilian traffic in any way, regardless of the activity being conducted within its published boundaries or altitude limits",
      "Class F advisory airspace always prohibits entry entirely, making it functionally identical to permanently prohibited airspace",
      "Class F restricted airspace involves activity hazardous to non-participating aircraft, while advisory airspace involves activity requiring increased pilot vigilance without necessarily restricting entry",
    ],
    answer: 3,
    explain:
      "Class F restricted airspace involves activity considered hazardous to non-participating aircraft, generally restricting entry, while Class F advisory airspace involves activity that warrants increased pilot vigilance without necessarily restricting entry to the area.",
    reference: "TP 690 -- Navigation - General: Class F advisory versus restricted airspace",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A declination (variation) diagram, printed on many aeronautical charts, typically shows",
    options: [
      "the relationship between true north, magnetic north, and (where applicable) grid north for that chart, including the local magnetic variation value and isogonic lines",
      "only the chart's publication date, with no navigational information",
      "the location of every VOR station depicted on the chart",
      "the maximum elevation figure for each quadrangle on the chart",
    ],
    answer: 0,
    explain:
      "A declination (variation) diagram shows the relationship between true north, magnetic north, and, where applicable, grid north for the chart, including the local magnetic variation value and relevant isogonic lines, giving the pilot a quick visual reference for converting between the different north references.",
    reference: "TP 690 -- Navigation - General: Declination (variation) diagram",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "When resolving a wind into its components relative to a planned track, the along-track (headwind or tailwind) component primarily affects",
    options: [
      "chart scale interpretation, since wind components are considered relevant only to how a chart's distances are measured",
      "groundspeed and therefore ETE, while the across-track component primarily affects the wind correction angle needed to maintain the planned track",
      "the wind correction angle required, and is considered to have no effect whatsoever on groundspeed, time en route, or fuel planning calculations for the flight",
      "magnetic variation along the route, since wind components are treated as a function of compass error rather than airspeed",
    ],
    answer: 1,
    explain:
      "The along-track (headwind or tailwind) component of the wind primarily affects groundspeed, and therefore ETE, while the across-track (crosswind) component primarily affects the wind correction angle needed to maintain the planned track over the ground.",
    reference: "TP 690 -- Navigation - General: Headwind/tailwind versus crosswind component effects",
  },
];
