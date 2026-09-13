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
  {
    id: 37,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "Under the standard semicircular cruising level rule for IFR flights, which flight levels are generally used for a magnetic track of 000 to 179 degrees?",
    options: [
      "Odd flight levels (or odd-plus-500 in some RVSM schemes)", "Even flight levels only", "Any flight level, chosen freely by the pilot", "Only flight levels that are multiples of 50"
    ],
    answer: 0,
    explain:
      "The semicircular rule assigns odd flight levels (such as FL310, FL350) to magnetic tracks of 000 to 179 degrees, and even flight levels (such as FL320, FL340) to tracks of 180 to 359 degrees - a simple, standardised way of vertically separating opposite-direction traffic without needing individual ATC coordination on every route.",
    reference: "Navigation - Cruising Level Rules",
  },
  {
    id: 38,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the general purpose of Receiver Autonomous Integrity Monitoring (RAIM) in a GPS receiver?",
    options: [
      "To let the receiver detect (and in some cases exclude) a faulty satellite signal using redundant satellite measurements, without relying on an external monitoring system",
      "To increase the number of satellites the receiver can track simultaneously",
      "To provide a backup bearing source if all satellites are lost",
      "To automatically correct for magnetic variation",
    ],
    answer: 0,
    explain:
      "RAIM works by cross-checking redundant satellite range measurements against each other within the receiver itself, letting it detect (and sometimes isolate) a faulty satellite signal and alert the pilot to reduced position integrity, without needing to wait for or rely on an external ground-based monitoring system.",
    reference: "Navigation - GNSS Integrity Monitoring",
  },
  {
    id: 39,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What does a satellite navigation 'augmentation' system generally provide, beyond a basic GNSS position fix?",
    options: [
      "Improved position accuracy and additional integrity monitoring",
      "A completely independent position source requiring no satellites at all",
      "A guarantee that the aircraft's inertial system will never drift",
      "Direct control of the aircraft's autopilot with no pilot input",
    ],
    answer: 0,
    explain:
      "An augmentation system supplements basic GNSS by providing correction data and additional integrity information, improving both the accuracy of the computed position and the confidence (and warning capability) around that position - supporting navigation and approach procedures with tighter accuracy requirements than basic GNSS alone can reliably guarantee.",
    reference: "Navigation - GNSS Augmentation Concepts",
  },
  {
    id: 40,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "On an ICAO flight plan, what does the abbreviation 'EET' generally represent?",
    options: [
      "Estimated elapsed time - the time expected from take-off to a specific significant point along the route",
      "Estimated engine temperature at cruise",
      "Expected entry time into controlled airspace",
      "Extended endurance time available with reserve fuel",
    ],
    answer: 0,
    explain:
      "EET (estimated elapsed time) on a flight plan represents the time expected to elapse from take-off to a specific significant point along the route (such as a flight information region boundary or the destination), used by air traffic services for planning and coordination purposes.",
    reference: "Navigation - Flight Plan Terminology",
  },
  {
    id: 41,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a 'five-letter name code' (5LNC), as used for significant points in navigation?",
    options: [
      "A pronounceable five-letter code assigned to an otherwise unnamed significant point, used in flight plans and ATC communication",
      "A code used only to identify runway thresholds",
      "A mandatory suffix added to every VOR frequency",
      "A code that replaces the need for latitude/longitude coordinates entirely",
    ],
    answer: 0,
    explain:
      "A five-letter name code gives an easily pronounceable identifier to a significant point (a waypoint not otherwise named after a navigation aid or place), making it easier for pilots and controllers to communicate about that point by voice than reciting coordinates.",
    reference: "Navigation - Significant Point Naming",
  },
  {
    id: 42,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a visual wake-turbulence avoidance technique, a pilot landing behind a larger aircraft on the same runway is generally advised to:",
    options: [
      "Stay at or above the preceding aircraft's approach flight path and plan to land beyond its touchdown point",
      "Land well before the preceding aircraft's touchdown point to stay clear of its wake",
      "Descend below the preceding aircraft's flight path as early as possible",
      "Maintain exactly the same approach speed as the preceding aircraft, regardless of touchdown point",
    ],
    answer: 0,
    explain:
      "Because wake vortices tend to sink and drift from a preceding aircraft's flight path, staying at or above that path and touching down beyond the point where the preceding aircraft's wheels contacted the runway is the standard way to avoid encountering the strongest part of its wake.",
    reference: "Navigation - Wake Turbulence Avoidance Technique",
  },
  {
    id: 43,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a visual wake-turbulence avoidance technique, a pilot departing behind a larger aircraft on the same runway is generally advised to:",
    options: [
      "Rotate before reaching the preceding aircraft's rotation point, and climb above its flight path",
      "Rotate well beyond the preceding aircraft's rotation point to build up extra speed first",
      "Remain below the preceding aircraft's flight path throughout the climb",
      "Delay rotation as long as possible to increase separation distance",
    ],
    answer: 0,
    explain:
      "Becoming airborne before the point where the preceding (larger) aircraft rotated, and then climbing to stay above its flight path, helps a departing aircraft avoid descending wake vortices left behind by the aircraft ahead.",
    reference: "Navigation - Wake Turbulence Avoidance Technique",
  },
  {
    id: 44,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a general order of magnitude, standard DME slant-range accuracy is commonly quoted as being within approximately:",
    options: [
      "0.5 nautical miles, or about 3% of the measured distance, whichever is greater",
      "10 nautical miles under all conditions",
      "0.001 nautical miles under all conditions",
      "DME provides no meaningful distance accuracy at all",
    ],
    answer: 0,
    explain:
      "DME distance accuracy is commonly quoted as being within roughly 0.5 nm or about 3% of the measured distance (whichever figure is larger) under typical conditions - a useful general benchmark, though the precise figure can vary somewhat by equipment and installation.",
    reference: "Navigation - DME Accuracy",
  },
  {
    id: 45,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "A pilot who has filed a flight plan is generally expected to do what upon safely arriving at the destination?",
    options: [
      "Close the flight plan, so that search and rescue action is not triggered unnecessarily",
      "Nothing further is required once the aircraft has landed",
      "Refile an identical flight plan for the return leg before leaving the aircraft",
      "Contact only the departure aerodrome, never the destination facility",
    ],
    answer: 0,
    explain:
      "Closing a filed flight plan on arrival (by radio, phone, or other approved means) confirms the flight completed safely - if a flight plan isn't closed within an expected window, search and rescue action can be triggered based on the assumption the flight may be overdue or missing.",
    reference: "Navigation - Flight Plan Closure",
  },
  {
    id: 46,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the general difference between 'estimated time of arrival' (ETA) and 'estimated off-block time' (EOBT)?",
    options: [
      "ETA is the expected time of arrival at the destination; EOBT is the expected time the aircraft will begin moving under its own power at departure",
      "The two terms are interchangeable and mean exactly the same thing",
      "ETA refers only to arrival at an alternate aerodrome, never the primary destination",
      "EOBT refers to the time an aircraft blocks in in a hangar after landing",
    ],
    answer: 0,
    explain:
      "ETA marks the expected arrival time at the destination, while EOBT marks the expected time the aircraft will start moving from its parking position under its own power at the start of the flight - two distinct flight-plan reference times used for different planning and coordination purposes.",
    reference: "Navigation - Flight Plan Terminology",
  },
  {
    id: 47,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the key difference between an aircraft's 'heading' and its 'track'?",
    options: [
      "Heading is the direction the aircraft's nose is pointing; track is the actual path the aircraft follows over the ground, which can differ from heading due to wind drift",
      "Heading and track always describe exactly the same direction",
      "Track refers only to vertical flight path, never to a horizontal direction",
      "Heading applies only when flying under IFR, and track only under VFR",
    ],
    answer: 0,
    explain:
      "Heading is simply the direction the aircraft's longitudinal axis (nose) is pointing, while track is the actual path traced over the ground - the two coincide only in still air; any crosswind component causes the aircraft to drift, so the track differs from the heading being flown by the wind correction angle.",
    reference: "Navigation - Heading & Track Definitions",
  },
  {
    id: 48,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a 'wind correction angle' (WCA)?",
    options: [
      "The angular adjustment applied to a heading to compensate for wind drift and maintain the desired track over the ground",
      "The angle between true north and magnetic north",
      "The angle at which an aircraft banks during a standard rate turn",
      "A correction applied only to altimeter readings, not to heading",
    ],
    answer: 0,
    explain:
      "A wind correction angle is the number of degrees a pilot adjusts the heading, into the wind, so that the aircraft's actual track over the ground matches the intended course despite the effect of wind drift - without it, a crosswind would carry the aircraft progressively off the desired track.",
    reference: "Navigation - Wind Correction Angle",
  },
  {
    id: 49,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "All else being equal, how does a tailwind component generally affect an aircraft's groundspeed compared with its true airspeed?",
    options: [
      "Groundspeed is greater than true airspeed",
      "Groundspeed is less than true airspeed",
      "Groundspeed always equals true airspeed regardless of wind",
      "A tailwind has no effect on groundspeed",
    ],
    answer: 0,
    explain:
      "A tailwind component adds to the aircraft's true airspeed to produce a higher groundspeed, while a headwind component subtracts from it to produce a lower groundspeed - a fundamental relationship underlying all wind-corrected navigation and flight-time calculations.",
    reference: "Navigation - Groundspeed & Wind Components",
  },
  {
    id: 50,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In standard fuel-planning terminology, 'trip fuel' generally refers to:",
    options: [
      "The fuel required from brake release at the departure aerodrome to touchdown at the destination",
      "The fuel required from engine start until brake release",
      "The fuel required to fly from the destination to the alternate aerodrome",
      "A fixed emergency reserve, unrelated to the specific route flown",
    ],
    answer: 0,
    explain:
      "Trip fuel covers the fuel burned during the actual flight itself, from the moment the aircraft begins moving under its own power for departure (brake release) through to touchdown at the destination - separate from taxi fuel (used before departure) and the various reserve and alternate fuel categories.",
    reference: "Navigation - Fuel Planning & Reserves",
  },
  {
    id: 51,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In standard fuel-planning terminology, 'taxi fuel' generally refers to:",
    options: [
      "The fuel expected to be used before take-off, such as during engine/APU start and taxi to the runway",
      "The fuel used exclusively during the landing roll and taxi to the gate",
      "A reserve fuel used only in a genuine emergency",
      "The fuel burned during an enroute diversion",
    ],
    answer: 0,
    explain:
      "Taxi fuel accounts for the fuel expected to be consumed before the take-off roll begins - covering things like APU or engine start and ground movement to the departure runway - and is planned separately from trip fuel, which covers the flight itself.",
    reference: "Navigation - Fuel Planning & Reserves",
  },
  {
    id: 52,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a 'circling approach'?",
    options: [
      "Visual manoeuvring, after completing an instrument approach, to position and land on a runway not suitably aligned for a straight-in approach",
      "An approach flown entirely by reference to a DME arc with no visual segment",
      "A missed approach procedure that returns the aircraft to the same runway automatically",
      "An approach flown only at night",
    ],
    answer: 0,
    explain:
      "A circling approach lets a crew complete an instrument approach to one runway (or a point providing suitable visual reference) and then manoeuvre visually to align with and land on a different runway that isn't served by a straight-in instrument approach - it carries its own specific minima given the extra visual manoeuvring involved at low altitude.",
    reference: "Navigation - Circling Approach Procedures",
  },
  {
    id: 53,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the general concept behind 'Performance-Based Navigation' (PBN)?",
    options: [
      "Navigation requirements are defined in terms of required accuracy, integrity, and availability performance, rather than mandating specific ground-based navigation aid equipage",
      "PBN requires every aircraft to carry a specific type of ground-based navigation receiver",
      "PBN applies only to oceanic routes, never to terminal or approach procedures",
      "PBN eliminates the need for any navigation performance monitoring at all",
    ],
    answer: 0,
    explain:
      "PBN shifts the basis for route and procedure design away from requiring specific ground-based navaid types toward specifying the navigation performance (accuracy, integrity, availability, and functionality) an aircraft's navigation system must achieve - letting different aircraft meet the requirement using whatever suitably certified equipment they carry.",
    reference: "Navigation - Performance-Based Navigation (PBN)",
  },
  {
    id: 54,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What do the abbreviations SID and STAR generally represent?",
    options: [
      "Standard Instrument Departure and Standard (Instrument) Arrival Route - published procedures linking the terminal area to the enroute structure",
      "Search Information Data and Standard Terminal Area Radar - surveillance-related terms",
      "Speed Indicator Display and Standard Takeoff Rate - performance-related terms",
      "Secondary Instrument Display and System Test Alert Readout - cockpit display terms",
    ],
    answer: 0,
    explain:
      "A SID (Standard Instrument Departure) and a STAR (Standard [Instrument] Arrival Route) are published procedures that connect an aerodrome's terminal area to the enroute airway structure, letting departures and arrivals be flown along a predictable, pre-coordinated path rather than requiring individual routing instructions for every flight.",
    reference: "Navigation - Standard Departure & Arrival Procedures",
  },
  {
    id: 55,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is a 'minimum enroute altitude' (MEA)?",
    options: [
      "The lowest published altitude between two fixes on an airway that ensures both adequate navigation signal reception and obstacle clearance",
      "The lowest altitude at which an aircraft may be dispatched, regardless of route",
      "The altitude at which cruise fuel flow is optimised",
      "An altitude used only for VFR flight, never IFR",
    ],
    answer: 0,
    explain:
      "MEA is published for each segment of an airway as the lowest altitude that both guarantees acceptable navigation signal reception along that segment and provides the required obstacle clearance - a segment-specific figure that can change from one part of an airway to the next.",
    reference: "Navigation - Enroute Altitude Definitions",
  },
  {
    id: 56,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the general purpose of a pre-flight 'RAIM prediction' for a GNSS-based flight or approach?",
    options: [
      "To check in advance whether satellite geometry is expected to provide sufficient integrity monitoring capability for the planned flight or approach",
      "To predict the aircraft's expected fuel burn for the flight",
      "To forecast weather conditions specific to the destination aerodrome",
      "To determine the expected wind correction angle for the route",
    ],
    answer: 0,
    explain:
      "A RAIM prediction is a planning check, done before the flight, to assess whether the expected satellite geometry at the relevant time and location will be sufficient to support the receiver's integrity-monitoring function for the intended operation - particularly relevant for a GNSS approach where a RAIM outage would mean the approach isn't available as planned.",
    reference: "Navigation - GNSS Integrity Monitoring",
  },
  {
    id: 57,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "How does an aircraft's 'approach category' (Category A through E) generally differ from an approach's precision category (such as Category I, II, or III)?",
    options: [
      "Aircraft approach category is based on the aircraft's reference approach speed and determines which published minima apply to it; the approach's precision category instead describes the ground/aircraft equipment level supporting that specific approach",
      "The two terms describe exactly the same classification system",
      "Aircraft approach category depends only on the operator, never on the aircraft's speed",
      "Approach precision category depends on the aircraft's weight, not its equipment",
    ],
    answer: 0,
    explain:
      "An aircraft's approach category (A-E) is based on its reference approach speed and determines which set of published minima on the chart apply to it, while an approach's precision category (I/II/III) instead reflects the level of ground and aircraft equipment/certification supporting that particular approach - two related but distinct classification systems used together when reading approach charts.",
    reference: "Navigation - Aircraft Approach Categories",
  },
  {
    id: 58,
    subject: "ATPL General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What generally distinguishes a 'non-precision approach' from a precision approach?",
    options: [
      "A non-precision approach provides lateral guidance only, without electronic vertical glidepath guidance, using a minimum descent altitude/height rather than a decision altitude/height",
      "A non-precision approach provides vertical guidance only, with no lateral guidance at all",
      "A non-precision approach can only be flown in visual conditions",
      "There is no meaningful difference between the two types of approach",
    ],
    answer: 0,
    explain:
      "A non-precision approach provides lateral course guidance (from a navaid or overlay) but no electronic vertical glidepath guidance, so the aircraft descends to and may level off at a minimum descent altitude/height while proceeding toward the missed approach point - unlike a precision approach, which provides both lateral and vertical guidance down to a decision altitude/height where a continuous go/no-go decision is made.",
    reference: "Navigation - Non-Precision vs Precision Approaches",
  },
];
