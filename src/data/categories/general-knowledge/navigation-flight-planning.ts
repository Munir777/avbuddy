import type { Question } from "../../../types";

// General aviation knowledge - Navigation & Flight Planning.
// Original questions written from general, widely-published aviation
// navigation and flight-planning knowledge, not copied from any single
// source document. No company, brand, or publisher names appear anywhere
// below.
export const NAVIGATION_FLIGHT_PLANNING_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "An aircraft is flying directly over a DME ground station at FL360. What will the DME display read?",
    options: [
      "Approximately 6 nm, reflecting slant range rather than ground distance",
      "Zero, since DME always reads ground distance",
      "36 nm, matching the flight level number",
      "A blank or invalid reading, since DME cannot function directly overhead a station"
    ],
    answer: 0,
    explain:
      "DME measures slant range - the direct line-of-sight distance to the station - not ground distance. Directly overhead a station at FL360 (roughly 36,000 ft, or about 6 nm of altitude), the DME will read approximately 6 nm rather than zero, since altitude itself contributes to that slant-range distance.",
    reference: "Navigation - Radio Navigation Aids (DME)",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the minimum number of satellites a GPS receiver generally needs in view to compute a full three-dimensional position fix (latitude, longitude, and altitude)?",
    options: ["4", "2", "6", "1"],
    answer: 0,
    explain:
      "A GPS receiver needs signals from at least four satellites to solve for a three-dimensional position (latitude, longitude, altitude) plus the receiver's own clock error. With only three satellites in view, the receiver can typically only produce a two-dimensional fix.",
    reference: "Navigation - Satellite Navigation Fundamentals",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a rule of thumb, what descent rate is needed to maintain a standard 3° glideslope at a given groundspeed?",
    options: [
      "Groundspeed multiplied by 5",
      "Groundspeed multiplied by 3",
      "Groundspeed divided by 2",
      "Groundspeed multiplied by 10"
    ],
    answer: 0,
    explain:
      "A widely used rule of thumb for a 3° glidepath is: required descent rate in feet per minute is approximately groundspeed (in knots) multiplied by 5. For example, at 140 knots groundspeed, roughly 700 ft/min maintains a 3° path.",
    reference: "Navigation - Descent Planning & Approach Geometry",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "A secondary surveillance radar (SSR) transponder reporting Mode C altitude bases that reading on which pressure setting?",
    options: [
      "The standard pressure setting of 1013.25 hPa",
      "The current local QNH",
      "Whatever altimeter setting the crew has selected",
      "Sea-level pressure at the departure aerodrome"
    ],
    answer: 0,
    explain:
      "Mode C (and Mode S altitude reporting) transmits pressure altitude, referenced to the standard setting of 1013.25 hPa, regardless of what the crew has set on their own altimeters. Ground systems then apply the necessary correction to display an altitude relative to QNH when required.",
    reference: "Navigation - Surveillance & Transponder Systems",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In a METAR, surface wind direction is reported relative to which reference?",
    options: ["True north", "Magnetic north", "The active runway heading", "Grid north"],
    answer: 0,
    explain:
      "METAR surface wind directions are reported relative to true north. This differs from the wind information passed by air traffic control for takeoff and landing, which is normally given relative to magnetic north to match runway headings - a distinction worth keeping straight when planning.",
    reference: "Navigation - Meteorological Reports for Flight Planning",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In a TAF, what does a 'PROB30' group generally indicate?",
    options: [
      "A 30% probability of the stated condition occurring during the specified period",
      "A guaranteed condition lasting exactly 30 minutes",
      "A 30-knot wind gust forecast for the period",
      "A forecast confidence level of 30%, applied to the entire TAF"
    ],
    answer: 0,
    explain:
      "PROB30 (or PROB40) indicates a stated probability - here 30% - that the described weather condition will occur during the specified time period, used by forecasters to flag possible but not certain conditions such as thunderstorms or reduced visibility.",
    reference: "Navigation - Meteorological Reports for Flight Planning",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Of what use, if any, is a military TACAN station to a civil aircraft equipped with a standard VOR/DME receiver?",
    options: [
      "It can provide a DME distance, but not a usable bearing",
      "It can provide a magnetic bearing, but not distance",
      "It provides both a full bearing and distance, identical to a civil VOR/DME",
      "It is of no use to civil aircraft at all",
    ],
    answer: 0,
    explain:
      "A military TACAN station transmits a DME-compatible distance-measuring signal that a civil VOR/DME receiver can use, but its bearing information uses a different format that a standard civil VOR receiver cannot decode - so a civil aircraft typically gets distance only from it, not bearing.",
    reference: "Navigation - Radio Navigation Aids (TACAN)",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Using airborne weather radar in its normal 'weather' mode, which cloud type is most readily detected?",
    options: ["Cumulus (and cumulonimbus)", "Cirrostratus", "Stratus", "Altostratus"],
    answer: 0,
    explain:
      "Airborne weather radar detects precipitation-sized water droplets, so it most readily picks up convective clouds like cumulus and cumulonimbus, which contain larger droplets and heavier precipitation, rather than non-convective clouds like stratus or cirrostratus.",
    reference: "Navigation - Airborne Weather Radar",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the maximum number of usable codes available on a standard (non-Mode S) SSR transponder?",
    options: ["4,096", "1,000", "3,600", "760"],
    answer: 0,
    explain:
      "A conventional SSR transponder code is a four-digit octal number (each digit 0-7), giving 8^4 = 4,096 possible codes in total.",
    reference: "Navigation - Surveillance & Transponder Systems",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "A VOR and a co-located DME share the same station identification, transmitted in Morse code. How can a pilot tell the two idents apart when listening?",
    options: [
      "The DME ident is higher-pitched and broadcast only once per identification cycle, while the VOR ident repeats at a lower pitch",
      "The two idents are always transmitted at the exact same pitch and cannot be distinguished by ear",
      "The DME never transmits an audible identification at all",
      "The VOR ident is higher-pitched and broadcast more often than the DME ident",
    ],
    answer: 0,
    explain:
      "Where a VOR and DME are co-located and share a callsign, the DME's ident tone is distinctly higher-pitched and is transmitted only once per identification sequence, while the VOR's ident is lower-pitched and repeats more frequently - letting a listening pilot tell which facility just identified.",
    reference: "Navigation - Radio Navigation Aids (VOR/DME)",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "On an ATC flight plan, what maximum certificated take-off mass generally applies to the 'L' (light) wake turbulence category?",
    options: ["7,000 kg or less", "50,000 kg or less", "136,000 kg or less", "2,700 kg or less"],
    answer: 0,
    explain:
      "The light (L) wake turbulence category applies to aircraft with a maximum certificated take-off mass of 7,000 kg or less; medium (M) covers the range above that up to 136,000 kg, and heavy (H) applies at 136,000 kg and above.",
    reference: "Navigation - Wake Turbulence Categories on Flight Plans",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Where would a pilot expect to find the dates and times during which a temporary danger area is active?",
    options: [
      "NOTAMs and the AIP (Aeronautical Information Publication)",
      "SIGMETs only",
      "Radio navigation (RAD/NAV) charts only",
      "METARs for the nearest aerodrome",
    ],
    answer: 0,
    explain:
      "Temporary danger area activation details are published through NOTAMs and the AIP, which are the standard channels for aeronautical information about airspace status - not SIGMETs (which cover hazardous weather) or routine weather reports.",
    reference: "Navigation - Flight Planning Information Sources",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "On an instrument approach chart, unless a different radius is specifically stated, a minimum sector altitude (MSA) is generally valid within what distance of the associated navigation facility?",
    options: ["25 nm", "10 nm", "15 nm", "20 nm"],
    answer: 0,
    explain:
      "Absent a stated alternative, a minimum sector altitude is generally published to guarantee obstacle clearance within a 25 nm radius of the reference navigation facility, giving a simple emergency safe-altitude reference for that sector.",
    reference: "Navigation - Instrument Approach Chart Conventions",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the key functional difference between Mode C and Mode S secondary surveillance radar transponders?",
    options: [
      "Mode S adds a two-way data-link capability and improved individual aircraft surveillance beyond Mode C's altitude-only reporting",
      "Mode C provides a data link while Mode S only reports altitude",
      "The two modes are functionally identical, differing only in name",
      "Mode S eliminates the need for ground-based radar entirely",
    ],
    answer: 0,
    explain:
      "Mode S was introduced to add data-link communication (air-to-ground and ground-to-air) and more precise, individually addressed aircraft surveillance, going well beyond the altitude-only reporting that Mode C provides.",
    reference: "Navigation - Surveillance & Transponder Systems",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "An NDB (non-directional beacon) bearing is displayed to the pilot using which type of aircraft instrument?",
    options: [
      "An ADF indicator, such as a relative bearing indicator (RBI) or radio magnetic indicator (RMI)",
      "A course deviation indicator (CDI) referenced to a VOR radial",
      "A glideslope indicator",
      "A distance-measuring equipment (DME) readout only",
    ],
    answer: 0,
    explain:
      "Automatic direction finder (ADF) equipment tuned to an NDB drives a needle on a relative bearing indicator or radio magnetic indicator, showing the bearing to the station relative to the aircraft's heading (RBI) or relative to magnetic north (RMI) - VOR bearing information, by contrast, is displayed via a course deviation indicator.",
    reference: "Navigation - Radio Navigation Aids (NDB/ADF)",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a VOR 'radial'?",
    options: [
      "A magnetic bearing line running outward from the VOR station",
      "A magnetic bearing line running toward the VOR station only",
      "The distance from the VOR station in nautical miles",
      "A fixed compass heading that never changes regardless of which VOR is tuned",
    ],
    answer: 0,
    explain:
      "A VOR radial is defined as a magnetic bearing line extending outward from the station - so 'the 090 radial' means the line running due east (magnetic) from the VOR, and an aircraft flying inbound on that radial is actually tracking a magnetic bearing of 270 toward the station.",
    reference: "Navigation - Radio Navigation Aids (VOR)",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Which three elements together make up a standard instrument landing system (ILS)?",
    options: [
      "Localizer, glideslope, and marker beacons (or equivalent distance references)",
      "VOR, DME, and NDB",
      "Primary radar, secondary radar, and ADS-B",
      "TACAN, VOR, and GPS",
    ],
    answer: 0,
    explain:
      "A conventional ILS provides lateral guidance via the localizer, vertical guidance via the glideslope, and distance/position cues along the approach via marker beacons (or, on many modern installations, DME co-located with the localizer serving the same purpose).",
    reference: "Navigation - Instrument Landing System (ILS)",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the nominal glideslope angle used by a standard ILS installation?",
    options: ["Approximately 3°", "Approximately 6°", "Approximately 1°", "Approximately 10°"],
    answer: 0,
    explain:
      "Most ILS installations are designed around a nominal 3° glideslope angle, though the exact figure can vary slightly at individual aerodromes to account for terrain or obstacles - a 3° path is also the basis for the common groundspeed-times-5 descent-rate rule of thumb.",
    reference: "Navigation - Instrument Landing System (ILS)",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "On an ILS approach, which marker beacon is generally identified by a low-pitched tone and, where fitted with a light, a blue light?",
    options: ["The outer marker", "The middle marker", "The inner marker", "None of them use a blue light"],
    answer: 0,
    explain:
      "The outer marker is conventionally associated with a low-pitched tone and blue marker light, the middle marker with a medium-pitched tone and amber light, and the inner marker (where installed) with a high-pitched tone and white light - though many modern approaches rely on DME distance instead of physical marker beacons.",
    reference: "Navigation - Instrument Landing System (ILS)",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the key difference between a great circle track and a rhumb line track between two points?",
    options: [
      "A great circle is the shortest distance between the points but crosses meridians at a constantly changing angle; a rhumb line crosses every meridian at the same angle but is generally longer",
      "A rhumb line is always shorter than a great circle between the same two points",
      "A great circle and a rhumb line are always identical on a Mercator chart",
      "A great circle track is only definable between points on the equator",
    ],
    answer: 0,
    explain:
      "A great circle track represents the shortest possible path over the surface of a sphere between two points, but its true course changes continuously; a rhumb line instead holds a single constant true course throughout, which is more convenient to fly but covers a longer distance except on special cases like along a meridian or the equator.",
    reference: "Navigation - Great Circle & Rhumb Line Tracks",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is generally meant by the 'point of no return' (or 'point of safe return') on a long overwater or remote sector?",
    options: [
      "The furthest point along the route from which the aircraft can still return to the departure aerodrome within its fuel and other operating limits",
      "The point exactly halfway between departure and destination by distance",
      "The point at which the aircraft must declare an emergency",
      "The point at which cruise altitude is first reached",
    ],
    answer: 0,
    explain:
      "The point of safe return (or point of no return) marks the furthest point along a route from which a return to the departure aerodrome (or another suitable alternate behind the aircraft) remains possible within fuel and other operational limits - beyond it, continuing to the destination (or an aerodrome ahead) becomes the only viable option.",
    reference: "Navigation - Critical Points & Long-Range Flight Planning",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the 'critical point' (equal time point) between two aerodromes along a route?",
    options: [
      "The point along the route from which it would take the same flying time to continue to one aerodrome as to turn back to the other",
      "The point of maximum groundspeed along the route",
      "The midpoint of the route measured strictly by distance, ignoring wind",
      "The point at which fuel dumping would be required in an emergency",
    ],
    answer: 0,
    explain:
      "The critical (equal time) point is defined by time, not distance - it is the point from which continuing on to one aerodrome would take exactly as long as turning back toward another, and its position shifts with wind, since a strong headwind on the outbound leg (a tailwind on the return) moves it further from the destination than the geographic midpoint.",
    reference: "Navigation - Critical Points & Long-Range Flight Planning",
  },
  {
    id: 23,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In standard fuel-planning terminology, 'final reserve fuel' is generally intended to cover:",
    options: [
      "A minimum amount of holding fuel at low altitude over the destination (or alternate) to be used only in genuine emergency circumstances",
      "The fuel used taxiing from the gate to the runway before takeoff",
      "Fuel to cover an additional planned enroute diversion",
      "Fuel added purely at the captain's discretion with no defined minimum",
    ],
    answer: 0,
    explain:
      "Final reserve fuel is a minimum protected quantity - commonly expressed as a period of holding at a low altitude over the destination or alternate - that is not meant to be used in normal operations, distinct from contingency fuel (covering enroute uncertainties) and alternate fuel (covering the flight to a designated alternate).",
    reference: "Navigation - Fuel Planning & Reserves",
  },
  {
    id: 24,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a NOTAM?",
    options: [
      "A notice giving timely information about the establishment, condition, or change of any aeronautical facility, service, procedure, or hazard",
      "A routine scheduled weather report issued every hour",
      "A formal amendment to a country's aeronautical information publication, issued only once a year",
      "A type of flight plan used only for military operations",
    ],
    answer: 0,
    explain:
      "A NOTAM (Notice to Airmen) distributes timely information essential to personnel concerned with flight operations - such as runway closures, navigation aid outages, temporary hazards, or airspace restrictions - which would not be known far enough in advance to be included in a routine periodic publication.",
    reference: "Navigation - Flight Planning Information Sources",
  },
  {
    id: 25,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "A pilot without onboard navigation equipment requests a bearing or heading from air traffic control using very high frequency direction finding (VDF). What is this service generally called?",
    options: [
      "A QDM/QDR/QTE service, providing a heading or bearing derived from ground-based direction-finding equipment",
      "A precision approach radar (PAR) service",
      "An area navigation (RNAV) service",
      "A distance-measuring equipment (DME) arc service",
    ],
    answer: 0,
    explain:
      "VDF direction-finding lets a ground station determine an aircraft's bearing from its radio transmissions and pass the pilot a heading to steer (QDM), a bearing from the station (QDR), or a true bearing (QTE) - a fallback navigation aid useful when onboard equipment is limited or has failed.",
    reference: "Navigation - VHF Direction Finding",
  },
  {
    id: 26,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "'Contingency fuel', in standard flight-planning terminology, is primarily intended to cover:",
    options: [
      "Unforeseen factors during the flight, such as deviations from forecast wind or routing",
      "The fuel required to fly from the destination to the filed alternate aerodrome",
      "A fixed minimum holding fuel reserved strictly for emergency use only",
      "Fuel consumed exclusively during ground taxi operations",
    ],
    answer: 0,
    explain:
      "Contingency fuel is planned to absorb unpredictable factors along the route - such as winds differing from forecast, altitude or routing changes, or minor delays - and is distinct from alternate fuel (covering a diversion to the alternate) and final reserve fuel (the protected minimum holding fuel kept for genuine emergencies).",
    reference: "Navigation - Fuel Planning & Reserves",
  },
  {
    id: 27,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What does 'RNAV' (area navigation) generally allow an aircraft to do?",
    options: [
      "Fly a desired flight path within the required accuracy without needing to overfly ground-based navigation aids directly",
      "Navigate using only visual reference to the ground",
      "Fly only along published airways defined by VOR radials",
      "Replace the need for any onboard position-sensing equipment at all",
    ],
    answer: 0,
    explain:
      "RNAV lets an aircraft fly a desired track between defined waypoints, computed from one or more available navigation sources, without needing to track directly to or from a ground-based station the way conventional VOR/NDB navigation requires - opening up more direct or flexible routing.",
    reference: "Navigation - Area Navigation (RNAV) Concepts",
  },
  {
    id: 28,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "How does 'RNP' (Required Navigation Performance) generally differ from basic RNAV?",
    options: [
      "RNP adds an onboard performance monitoring and alerting capability, so the system can warn the crew if the required navigation accuracy is not being met",
      "RNP is simply an older term for the same capability as RNAV, with no functional difference",
      "RNP removes the need for any navigation accuracy requirement at all",
      "RNP applies only to oceanic routes, never to terminal area procedures",
    ],
    answer: 0,
    explain:
      "RNP builds on RNAV by adding onboard monitoring and alerting: the system continuously checks whether the required navigation accuracy for that phase of flight or procedure is being achieved, and alerts the crew if it is not - a capability plain RNAV does not include.",
    reference: "Navigation - Required Navigation Performance (RNP)",
  },
  {
    id: 29,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "The three standard types of holding pattern entry (direct, teardrop/offset, and parallel) are generally determined by:",
    options: [
      "The aircraft's inbound heading relative to the holding course",
      "The aircraft's altitude relative to the holding pattern's published altitude",
      "Whether the hold is being flown by day or by night",
      "The type of navigation aid used to define the holding fix",
    ],
    answer: 0,
    explain:
      "Which of the three entry procedures is appropriate depends on the sector (typically split into three roughly 70/110/180-degree divisions) that the aircraft's inbound heading falls into relative to the holding course, so as to join the pattern promptly while staying within its protected airspace.",
    reference: "Navigation - Holding Pattern Entry Procedures",
  },
  {
    id: 30,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a DME arc procedure generally used for?",
    options: [
      "Flying a constant-distance curved path around a DME station, often to transition onto a final approach course",
      "Measuring the exact moment an aircraft passes directly overhead a station",
      "Determining an aircraft's groundspeed without any other equipment",
      "Providing vertical (glidepath) guidance during an approach",
    ],
    answer: 0,
    explain:
      "A DME arc has the aircraft fly a curved track that maintains a constant distance from a DME station, commonly used to position the aircraft to intercept a final approach course from a convenient direction when a straight-in transition isn't otherwise available.",
    reference: "Navigation - DME Arc Procedures",
  },
  {
    id: 31,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the purpose of a VOR test facility (VOT)?",
    options: [
      "To let a pilot check the accuracy of the aircraft's VOR receiver on the ground without needing to fly",
      "To provide an additional distance-measuring signal alongside a standard VOR",
      "To boost the range of a standard VOR station",
      "To recalibrate a VOR ground station remotely from the aircraft",
    ],
    answer: 0,
    explain:
      "A VOR test facility transmits a signal that should give a predictable, known indication on a correctly functioning VOR receiver (for example, a specific radial reading), letting a pilot check receiver accuracy against a known reference while still on the ground, rather than needing to fly a check against a live enroute VOR.",
    reference: "Navigation - Radio Navigation Aids (VOR)",
  },
  {
    id: 32,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the key difference between magnetic variation and compass deviation?",
    options: [
      "Variation is the angular difference between true and magnetic north at a given location; deviation is the additional error caused by the aircraft's own magnetic materials and equipment, which varies with heading",
      "Variation and deviation are simply two different names for the same error",
      "Deviation depends only on geographic location, while variation depends only on aircraft heading",
      "Variation applies only to compasses, while deviation applies only to gyroscopic instruments",
    ],
    answer: 0,
    explain:
      "Magnetic variation is a geographic quantity - the angle between true north and magnetic north at a particular location, shown on charts - while compass deviation is caused by local magnetic influences within the aircraft itself (wiring, equipment, structure), and typically changes depending on the aircraft's heading, which is why a compass correction card is produced for each aircraft.",
    reference: "Navigation - Magnetic Variation & Compass Deviation",
  },
  {
    id: 33,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Starting from true heading, what is the correct sequence of corrections to arrive at compass heading?",
    options: [
      "Apply magnetic variation to get magnetic heading, then apply compass deviation to get compass heading",
      "Apply compass deviation first, then magnetic variation",
      "Apply both variation and deviation simultaneously as a single combined correction with no defined order",
      "No correction is needed; true, magnetic, and compass heading are always identical",
    ],
    answer: 0,
    explain:
      "The standard sequence is: true heading, corrected for magnetic variation (a property of location), gives magnetic heading; magnetic heading, further corrected for compass deviation (a property of that specific aircraft and heading), gives the compass heading the pilot actually reads and flies.",
    reference: "Navigation - Magnetic Variation & Compass Deviation",
  },
  {
    id: 34,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the 'cone of confusion' associated with a VOR station?",
    options: [
      "An area more or less directly above the station where bearing indications become erratic and unreliable due to the signal geometry there",
      "A permanently unusable sector of the VOR's service volume at low altitude",
      "An area where the VOR signal is jammed by nearby DME stations",
      "A region found only around NDB stations, never VOR stations",
    ],
    answer: 0,
    explain:
      "Almost directly overhead a VOR station, the geometry of the transmitted signal breaks down, and bearing indications can become erratic or unreliable for a short period - a well-known and expected effect (the 'cone of confusion') rather than a fault, and it passes quickly once clear of the immediate overhead area.",
    reference: "Navigation - Radio Navigation Aids (VOR)",
  },
  {
    id: 35,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "NDB (ADF) bearing accuracy is generally most degraded around sunrise and sunset due to which effect?",
    options: [
      "Signal reflection/refraction off the ionosphere ('night effect'), which can cause erratic bearing indications",
      "Reduced battery output at the ground station during those hours",
      "Interference exclusively from nearby VOR stations",
      "A scheduled maintenance shutdown that occurs daily at twilight",
    ],
    answer: 0,
    explain:
      "Around sunrise and sunset, changes in the ionosphere can cause NDB signals to reach the aircraft by more than one path (direct ground wave plus a reflected sky wave), a phenomenon commonly called 'night effect' - the interference between these paths can make ADF bearings temporarily erratic or unreliable.",
    reference: "Navigation - Radio Navigation Aids (NDB/ADF)",
  },
  {
    id: 36,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a quick mental dead-reckoning aid, the '1-in-60 rule' approximates that:",
    options: [
      "1 degree of angular track error corresponds to roughly 1 nautical mile of track displacement for every 60 nautical miles travelled",
      "1 nautical mile of track error corresponds to 60 degrees of heading change needed to correct it",
      "It relates fuel burn to distance travelled, independent of any angle",
      "It applies only to vertical navigation, not lateral track-keeping",
    ],
    answer: 0,
    explain:
      "The 1-in-60 rule is a simple, approximate relationship used for quick in-flight mental calculations: for small angles, being 1 degree off track produces about 1 nautical mile of lateral displacement for every 60 nautical miles flown, letting a pilot rapidly estimate track error or the correction needed without detailed trigonometry.",
    reference: "Navigation - Dead Reckoning & Track Corrections",
  },
];
