import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 51 -- Section 3: Navigation -
// General, sixth pass. Original questions written from the TC AIM
// 2026-1 and the TP 690 syllabus (topic headings only, no sample
// questions). Covers RHO-THETA vs RHO-RHO RNAV positioning, SBAS
// augmentation, cross-track error, fly-by vs fly-over waypoints,
// holding pattern entries, DME arcs, RF legs, time-to-station
// estimation, magnetic dip/isoclinic lines, RNP AR approaches,
// VOR/DME co-location standards, NDB compass locators, track vs
// heading vs course terminology, GNSS approach types, secular
// variation, and great circle routes approximated by RNAV waypoint
// legs -- topics not yet addressed in batches 4, 13, 22, 31, or 41.
// Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_51_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A RHO-THETA area navigation system, using a single VOR/DME (or co-located VORTAC) station, determines aircraft position by combining",
    options: [
      "a bearing (theta) from the VOR component with a distance (rho) from the DME component, together defining a single position relative to that one station.",
      "two separate distance measurements from two different DME stations, with no bearing information used at all, making it functionally identical to a RHO-RHO system.",
      "two separate bearings from two different VOR stations, with no distance information used at all, making it functionally identical to a simple cross-radial fix.",
      "satellite ranging signals exclusively, since RHO-THETA is, despite its name, understood to refer only to a GNSS-based positioning method.",
    ],
    answer: 0,
    explain:
      "A RHO-THETA RNAV system determines position using a single VOR/DME station, combining the VOR's bearing (theta) with the DME's distance (rho) to that one station -- distinct from a RHO-RHO (DME-DME) system, which uses distance measurements from two separate DME stations with no bearing information, and distinct from a simple two-VOR cross-radial fix, which uses two bearings with no distance measurement.",
    reference: "TC AIM RAC - Area Navigation Systems",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Satellite-Based Augmentation System (SBAS), which enhances the accuracy, integrity, and availability of a basic GNSS signal, works by",
    options: [
      "using a network of ground reference stations to compute correction and integrity data, which is then broadcast to aircraft via geostationary satellites to improve position accuracy beyond that of GNSS alone.",
      "replacing the GNSS satellite constellation entirely, since SBAS is understood to be a standalone positioning system requiring no underlying GNSS signal whatsoever.",
      "physically boosting the power of the GNSS satellites' own signal transmissions, a function SBAS ground stations are not designed to perform.",
      "providing no improvement to GNSS accuracy or integrity at all, functioning purely as a redundant, unused backup broadcast with no operational effect.",
    ],
    answer: 0,
    explain:
      "SBAS uses a network of precisely surveyed ground reference stations to compute correction and integrity data for GNSS signals, which is then broadcast to suitably equipped aircraft via geostationary satellites, improving position accuracy and providing integrity monitoring beyond what basic GNSS alone provides -- it augments rather than replaces the underlying GNSS constellation, and it does not work by boosting satellite transmission power.",
    reference: "TC AIM RAC - GNSS Augmentation Systems",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Cross-track error (XTK), as displayed by an RNAV/FMS system, represents",
    options: [
      "the lateral distance between the aircraft's actual position and the intended (defined) track between two waypoints, helping the pilot assess and correct for any lateral deviation.",
      "the difference between the aircraft's planned and actual arrival time at the next waypoint, a purely temporal rather than lateral-distance measurement.",
      "the vertical distance between the aircraft's actual altitude and its planned vertical profile, unrelated to any lateral or horizontal navigation consideration.",
      "the difference between true and magnetic track, a heading-reference correction unrelated to the aircraft's actual position relative to its intended route.",
    ],
    answer: 0,
    explain:
      "Cross-track error represents the lateral distance between the aircraft's actual position and the intended, defined track between two waypoints, helping the pilot assess and correct any lateral deviation from the planned route -- it is not a measure of arrival time difference, vertical deviation, or the difference between true and magnetic track.",
    reference: "TC AIM RAC - RNAV Systems",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A 'fly-by' waypoint, used in RNAV route and procedure design, is distinguished from a 'fly-over' waypoint in that a fly-by waypoint",
    options: [
      "allows the aircraft to begin a turn before reaching the waypoint, anticipating the turn onto the next leg so as to smoothly intercept the subsequent course, whereas a fly-over waypoint requires the aircraft to fly directly over it before turning.",
      "requires the aircraft to fly directly over the waypoint before any turn is initiated, the reverse of the actual fly-by/fly-over distinction.",
      "is used exclusively for straight, non-turning route segments, since fly-by waypoints are understood to never be followed by a course change of any kind.",
      "has no functional difference from a fly-over waypoint, with the two terms used interchangeably in RNAV procedure design regardless of turn anticipation.",
    ],
    answer: 0,
    explain:
      "A fly-by waypoint allows the aircraft's RNAV system to anticipate the upcoming turn and begin turning before actually reaching the waypoint, smoothly intercepting the next leg's course, whereas a fly-over waypoint requires the aircraft to fly directly over the waypoint before any turn is initiated -- the two are deliberately distinct concepts used in procedure design, not interchangeable terms, and fly-by waypoints are commonly followed by a course change.",
    reference: "TC AIM RAC - RNAV Waypoint Types",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Standard holding pattern entry procedures are generally categorized into three types based on the aircraft's inbound heading relative to the holding course, commonly known as",
    options: [
      "direct entry, teardrop entry, and parallel entry, each defining a specific initial maneuver to establish the aircraft correctly within the holding pattern.",
      "a single universal entry procedure applicable regardless of the aircraft's inbound heading, since holding entries are understood not to vary by approach direction.",
      "left entry and right entry only, a distinction based solely on the direction of turns within the pattern rather than on inbound heading.",
      "high-altitude entry and low-altitude entry, a classification based on the aircraft's altitude rather than its heading relative to the holding course.",
    ],
    answer: 0,
    explain:
      "Standard holding pattern entries are generally categorized into direct, teardrop, and parallel entries, with the appropriate entry determined by the aircraft's inbound heading relative to the holding course -- this is not a single universal procedure, it is not simply a left/right turn direction distinction, and it is based on heading geometry rather than altitude.",
    reference: "TC AIM RAC - Holding Pattern Entry",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A DME arc procedure, sometimes used as part of a transition to an instrument approach, involves the aircraft",
    options: [
      "flying a curved path at a constant DME distance from a reference station, maintaining that distance while progressing around the arc toward the final approach course.",
      "flying a straight-line path directly toward the DME station at a constantly decreasing distance, the opposite of maintaining a constant arc distance.",
      "flying at a constantly changing DME distance with no defined pattern at all, since a DME arc is, despite its name, understood to have no relationship to distance from the station.",
      "using DME distance information only after landing, with no application to any airborne segment of an instrument approach transition.",
    ],
    answer: 0,
    explain:
      "A DME arc procedure has the aircraft fly a curved path at a constant DME distance from a reference station, maintaining that distance while progressing around the arc until intercepting the final approach course -- this is distinct from flying a straight-line path with continuously decreasing distance, and DME arcs are specifically an airborne navigation technique, not something applied only after landing.",
    reference: "TC AIM RAC - DME Arc Procedures",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Radius to Fix (RF) leg, used in some RNP procedures, defines a flight path segment that",
    options: [
      "follows a constant-radius curved path between two defined fixes, providing precise, repeatable lateral guidance through a turn rather than a simple straight-line leg.",
      "follows a straight line between two fixes exclusively, making 'radius to fix' a misleading name for what is, in practice, an ordinary direct-to-fix leg.",
      "has no defined lateral path at all, leaving the specific route flown between the two fixes entirely to the pilot's own discretion.",
      "is used only for straight-in final approach segments, with no application to any turning portion of an RNP procedure.",
    ],
    answer: 0,
    explain:
      "A Radius to Fix (RF) leg defines a flight path segment following a constant-radius curved path between two fixes, providing precise and repeatable lateral guidance through a turn -- distinct from a simple straight-line leg between fixes, and specifically used where a defined curved turn (rather than pilot discretion or a straight segment) is required by the procedure design.",
    reference: "TC AIM RAC - RNP Path Terminators",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Time to station can be roughly estimated during dead reckoning by observing the rate of change of relative bearing to a station, using the principle that",
    options: [
      "a slowly changing relative bearing generally indicates a longer time remaining to reach the station's abeam position, while a rapidly changing relative bearing indicates less time remaining.",
      "the rate of change of relative bearing has no relationship whatsoever to time remaining, since bearing rate is understood to depend only on aircraft altitude.",
      "a rapidly changing relative bearing always indicates the aircraft is flying directly away from the station, rather than approaching or passing near it.",
      "relative bearing rate can only be used to determine aircraft heading, with no application to estimating time or distance to the station.",
    ],
    answer: 0,
    explain:
      "As an aircraft approaches a station, the rate at which relative bearing changes generally reflects proximity and geometry: a slowly changing bearing suggests more time remains before reaching the station's abeam position, while a rapidly changing bearing suggests less time remains -- bearing rate is related to geometry and proximity, not altitude alone, and a rapidly changing bearing is generally associated with closer proximity rather than flying directly away from the station.",
    reference: "TC AIM RAC - Dead Reckoning Techniques",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Magnetic dip (inclination), the angle at which the Earth's magnetic field lines intersect the horizontal at a given location, is significant to navigation because",
    options: [
      "it varies with latitude -- from roughly horizontal near the magnetic equator to nearly vertical near the magnetic poles -- and is a root cause of magnetic compass errors that become more pronounced at higher latitudes.",
      "it remains exactly constant at every latitude on Earth, making dip angle irrelevant to any variation in magnetic compass behaviour by location.",
      "it applies only to GNSS-based navigation systems, with no bearing whatsoever on the accuracy or reliability of a simple magnetic compass.",
      "it is unrelated to the Earth's magnetic field, instead referring to a purely mechanical property of the compass instrument's internal construction.",
    ],
    answer: 0,
    explain:
      "Magnetic dip varies with latitude, from roughly horizontal near the magnetic equator to nearly vertical near the magnetic poles, and this variation is a root cause of magnetic compass errors (such as turning and acceleration errors) that become more pronounced at higher latitudes -- dip is a real geomagnetic property, not a constant, and it directly affects magnetic compass behaviour rather than being relevant only to GNSS or purely mechanical compass construction.",
    reference: "TC AIM RAC - Magnetic Dip",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An RNP AR (Authorization Required) approach procedure, as distinguished from a standard RNP approach, generally requires",
    options: [
      "specific aircraft equipment, crew training, and operator authorization beyond what is needed for a standard RNP approach, reflecting its typically tighter performance requirements and, often, curved path segments.",
      "no additional authorization or equipment whatsoever beyond that needed for any other RNP approach, making the 'Authorization Required' name effectively meaningless.",
      "the complete removal of any RNP performance requirement, since RNP AR procedures are, despite their name, understood to have no defined navigation performance standard.",
      "the use of ground-based NAVAIDs exclusively, since RNP AR procedures are understood to prohibit satellite-based navigation entirely.",
    ],
    answer: 0,
    explain:
      "An RNP AR approach requires specific aircraft equipment, crew training, and operator authorization beyond that needed for a standard RNP approach, reflecting its typically tighter navigation performance requirements and, often, curved (RF) path segments -- the 'Authorization Required' designation is meaningful, RNP AR procedures do have defined (and often more stringent) performance standards, and they are generally based on satellite navigation rather than prohibiting it.",
    reference: "TC AIM RAC - RNP AR Approaches",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For a co-located VOR and DME (or VORTAC) station used together for RNAV or approach purposes, the standard permits a limited physical separation between the VOR and DME antennas primarily because",
    options: [
      "some separation is often practically unavoidable, and a defined maximum limit keeps the resulting position error small enough to remain within acceptable navigation accuracy.",
      "the VOR and DME antennas are always mounted at exactly the same physical point with zero separation permitted under any circumstance.",
      "antenna separation has no effect whatsoever on the accuracy of a combined VOR/DME position fix, making any separation limit an arbitrary, unnecessary restriction.",
      "the DME antenna is always located at a different aerodrome entirely from the VOR antenna, rather than being co-located at or near the same site.",
    ],
    answer: 0,
    explain:
      "Because VOR and DME antennas at a co-located facility are not always mounted at exactly the same point, a defined maximum separation limit is used to keep the resulting position error small enough to stay within acceptable navigation accuracy for RNAV and approach use -- some separation is practically tolerated rather than always being zero, it does have a real effect on accuracy, and co-located facilities are, by definition, at or near the same site rather than a different aerodrome.",
    reference: "TC AIM RAC - VOR/DME Co-location Standards",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An NDB compass locator, such as a Locator Outer Marker (LOM) or Locator Middle Marker (LMM), is best described as",
    options: [
      "a low-power NDB installed at or near an ILS outer or middle marker position, providing an additional navigation reference to help pilots establish and track the approach course.",
      "a high-power NDB used exclusively for long-range en route navigation, with no association to any specific ILS approach or marker position.",
      "a purely visual ground marking with no radio transmission capability at all, despite the term 'locator' suggesting a radio navigation function.",
      "a GNSS-based waypoint rather than an NDB, making the term 'NDB compass locator' a misnomer for what is actually a satellite navigation fix.",
    ],
    answer: 0,
    explain:
      "An NDB compass locator, such as a Locator Outer Marker or Locator Middle Marker, is a low-power NDB installed at or near the corresponding ILS marker position, providing pilots with an additional navigation reference to help establish and track the approach course -- it is not a high-power en route NDB, it is a genuine radio transmitter rather than a purely visual marking, and it is an NDB, not a GNSS-based waypoint.",
    reference: "TC AIM RAC - NDB Compass Locators",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "In navigation terminology, 'track,' 'heading,' and 'course' are distinguished in that",
    options: [
      "track is the actual path of the aircraft over the ground, heading is the direction the aircraft's nose is pointed, and course generally refers to the intended or planned direction of travel.",
      "the three terms are fully interchangeable in every context, with no meaningful distinction drawn between them in aeronautical navigation.",
      "heading refers exclusively to the aircraft's path over the ground, while track refers exclusively to the direction the nose is pointed, the reverse of their actual definitions.",
      "course refers only to a vertical flight path, while track and heading refer only to lateral (horizontal) direction, making course a fundamentally different type of measurement.",
    ],
    answer: 0,
    explain:
      "Track is the actual path of the aircraft over the ground (which can differ from heading due to wind drift), heading is the direction the aircraft's nose is actually pointed, and course generally refers to the intended or planned direction of travel along a route -- these are related but distinct concepts, not interchangeable terms, and none of them refers to a vertical flight path.",
    reference: "TC AIM RAC - Navigation Terminology",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Among the GNSS approach service levels used in Performance-Based Navigation, LNAV, LNAV/VNAV, and LPV are distinguished primarily by",
    options: [
      "the type and precision of vertical guidance provided (none, barometric VNAV-based, or SBAS-based, respectively), with each offering progressively lower minima where the supporting equipment and infrastructure are available.",
      "the type of lateral guidance provided exclusively, since none of the three service levels is understood to involve any vertical guidance component whatsoever.",
      "the specific ground-based NAVAID used to generate the approach, since all three are understood to rely on VOR or NDB signals rather than satellite-based guidance.",
      "the aircraft's cruising altitude during the en route portion of the flight, a parameter unrelated to the design of the actual approach procedure being flown.",
    ],
    answer: 0,
    explain:
      "LNAV, LNAV/VNAV, and LPV are distinguished primarily by the type and precision of vertical guidance they provide: LNAV offers lateral guidance only, LNAV/VNAV adds barometric VNAV-based vertical guidance, and LPV adds SBAS-based vertical guidance approaching precision-approach-like accuracy, with progressively lower minima available as supporting aircraft equipment and infrastructure allow -- all three are GNSS-based, not reliant on VOR or NDB signals, and the distinction concerns the approach procedure itself, not en route cruising altitude.",
    reference: "TC AIM RAC - GNSS Approach Service Levels",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Secular variation, as it applies to magnetic variation values published on aeronautical charts, refers to the fact that",
    options: [
      "magnetic variation at a given location gradually changes over time, which is why charts periodically require updated variation values to remain accurate.",
      "magnetic variation at a given location is permanently fixed for all time, meaning charted variation values never require any future revision whatsoever.",
      "magnetic variation changes only over the course of a single day, with no longer-term trend affecting charted values over years.",
      "magnetic variation is identical at every location on Earth, making 'secular variation' a term describing a universal constant rather than a location-specific value.",
    ],
    answer: 0,
    explain:
      "Secular variation refers to the gradual, long-term change in magnetic variation at a given location over time, driven by slow movement of the Earth's magnetic field, which is why charted variation values are periodically revised to remain accurate -- variation is not permanently fixed, the relevant change occurs over years rather than within a single day, and variation is location-specific, not a universal constant.",
    reference: "TC AIM RAC - Magnetic Variation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For a very long-distance flight, an RNAV system commonly approximates the theoretically shortest great circle route by",
    options: [
      "defining a series of waypoints along (or close to) the great circle track, connecting them with a sequence of shorter straight (effectively rhumb line) legs that collectively closely approximate the great circle path.",
      "flying a single continuous rhumb line for the entire route, since RNAV systems are understood to be incapable of approximating a great circle track in any way.",
      "requiring the pilot to continuously and manually adjust heading every few seconds throughout the flight, since RNAV systems provide no waypoint-based guidance for long routes.",
      "ignoring the great circle concept entirely, since RNAV route planning is understood to have no relationship to great circle versus rhumb line track differences.",
    ],
    answer: 0,
    explain:
      "An RNAV system commonly approximates the shortest, curving great circle route by defining a series of waypoints along or close to the great circle track and connecting them with a sequence of shorter, essentially straight (rhumb line) legs, which collectively track closely with the true great circle path without requiring genuinely curved flight -- this avoids both flying a single long rhumb line (which would deviate significantly from the great circle on a long route) and requiring constant manual heading adjustment.",
    reference: "TC AIM RAC - Long-Range Route Planning",
  },
];
