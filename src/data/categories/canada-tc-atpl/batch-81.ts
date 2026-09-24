import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 81 -- Section 3:
// Navigation - General, ninth pass. Original questions written
// from the TP 690 syllabus (topic headings only, no sample
// questions) and general air navigation principles. Covers
// irregular time zone boundaries, the rhumb line's polar spiral,
// Minimum Reception Altitude, HDOP/VDOP/PDOP, Canadian special use
// airspace designators, the minimum GNSS satellite count for a 3D
// fix, isogriv lines, the gnomonic projection, GPS time vs UTC,
// chart layer tinting, the VOR ground/airborne checkpoint, RNAV
// waypoint naming, the ellipsoid vs geoid, the fixed-card vs
// rotatable-card RBI, the practical currency of printed variation
// values, and the GEOREF grid system -- topics not yet addressed in
// batches 4, 13, 22, 31, 41, 51, 61, or 71. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_81_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Although standard time zones are conceptually based on 15-degree-wide bands of longitude, actual time zone boundaries in use around the world generally",
    options: [
      "are defined entirely by latitude rather than longitude, making the 15-degree longitude relationship irrelevant to real-world time zone boundaries.",
      "always follow the theoretical 15-degree meridian lines exactly, with no jurisdiction ever deviating from this strict geometric boundary.",
      "deviate from strict 15-degree meridian lines, following political, provincial, or geographic boundaries instead, so a time zone's actual edge often does not sit exactly on the theoretical meridian that would otherwise define it.",
      "change on a daily basis depending on the season, rather than being fixed boundaries adjusted only occasionally by legislation.",
    ],
    answer: 2,
    explain:
      "While the underlying concept of standard time zones divides the globe into 15-degree-wide bands of longitude (since the Earth rotates 15 degrees per hour), the actual boundaries adopted by countries and jurisdictions frequently deviate from these strict meridian lines, instead following political borders, provincial or state boundaries, or other practical considerations -- which is why a time zone's real-world edge on a map often does not align exactly with the theoretical meridian that would otherwise mark it.",
    reference: "TP 690 -- Navigation - General: Time",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A rhumb line drawn toward one of the Earth's poles, maintaining a constant true track other than exactly 000 degrees or 180 degrees, mathematically",
    options: [
      "reaches the pole directly after completing a single, finite, straight segment, in exactly the same manner as a great circle track toward the pole.",
      "cannot be plotted or defined at all once it crosses 60 degrees of latitude, regardless of the track being flown.",
      "becomes identical to a great circle track once it passes a certain latitude, with no distinction between the two beyond that point.",
      "spirals continuously toward the pole without ever mathematically reaching it, since maintaining a constant, non-meridional track means it must complete an ever-tightening series of loops as it approaches.",
    ],
    answer: 3,
    explain:
      "Because a rhumb line maintains a single, constant true track throughout its length, and the meridians converge as they approach a pole, a rhumb line held at any track other than due north or due south must cross an ever-increasing number of meridians per unit of distance as it nears the pole -- geometrically, this means the rhumb line spirals around the pole an infinite number of times, mathematically approaching but never actually reaching it, which is one of several reasons rhumb line navigation becomes impractical at high latitudes.",
    reference: "TP 690 -- Navigation - General: Rhumb Lines and Great Circles",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Minimum Reception Altitude (MRA), published for a fix defined by the intersection of signals from ground-based NAVAIDs, represents",
    options: [
      "the lowest altitude at which the required NAVAID signals used to define that fix can be reliably received, distinguishing it from altitudes such as the MEA or MOCA, which are defined primarily by obstacle clearance considerations.",
      "the lowest altitude that guarantees obstacle clearance along the entire airway segment, making it functionally identical to the MEA.",
      "the highest altitude at which the fix may be used, above which the NAVAID signals defining it are considered unreliable.",
      "an altitude relevant only to VFR flight, with no application to any IFR fix or airway segment.",
    ],
    answer: 0,
    explain:
      "While altitudes such as the MEA and MOCA are established primarily to ensure obstacle clearance, an MRA is published specifically because the fix in question depends on receiving signals (such as intersecting NAVAID radials) that may not be reliably received at every altitude along the route -- MRA identifies the lowest altitude at which those specific signals can be depended upon to define the fix accurately, addressing a signal-reception concern distinct from the terrain-clearance basis of MEA or MOCA.",
    reference: "TP 690 -- Navigation - General: Published Altitudes",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "GNSS Dilution of Precision is often broken down into more specific components, such as HDOP (horizontal), VDOP (vertical), and PDOP (position), which together",
    options: [
      "apply only to horizontal position accuracy, with no equivalent measure available for vertical accuracy.",
      "describe how much the current satellite geometry degrades accuracy in a specific dimension, allowing a receiver or an approach procedure to assess whether the geometry available is adequate for the accuracy actually required in that dimension.",
      "measure the physical distance between the receiver and each individual satellite, rather than describing any effect of satellite geometry.",
      "are entirely unrelated to satellite geometry, instead measuring atmospheric conditions such as ionospheric activity.",
    ],
    answer: 1,
    explain:
      "Geometric Dilution of Precision as a broad concept describes how the relative geometry of the satellites being used amplifies or reduces the effect of ranging errors on the computed position; breaking this down into HDOP, VDOP, and PDOP allows a receiver (or a vertically guided approach procedure specifically) to assess how much that geometry is degrading accuracy in a particular dimension -- horizontal, vertical, or overall three-dimensional position -- which matters because a satellite geometry adequate for horizontal accuracy is not automatically adequate for the vertical accuracy an approach with vertical guidance requires.",
    reference: "TP 690 -- Navigation - General: GNSS Accuracy",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a Canadian aeronautical chart, special use airspace designators beginning with the prefix CYA, CYR, and CYD respectively indicate",
    options: [
      "three interchangeable designators for the exact same type of airspace, with no functional difference between them.",
      "airspace reserved exclusively for the three different classes of Canadian civil airport (major, regional, and local).",
      "an Advisory Area, a Restricted Area, and a Danger Area, each carrying a different level of restriction or hazard for a pilot considering flight through that airspace.",
      "designators used only for temporary flight restrictions, with no application to any permanently established special use airspace.",
    ],
    answer: 2,
    explain:
      "Canadian special use airspace is identified with standardized prefixes: CYA denotes an Advisory Area (where a pilot is advised of an activity that may be hazardous but flight is not restricted), CYR denotes a Restricted Area (where entry generally requires specific authorization), and CYD denotes a Danger Area (identifying an activity hazardous to aircraft not participating in it) -- recognizing these prefixes lets a pilot quickly assess the nature and level of restriction associated with a charted special use airspace area.",
    reference: "TP 690 -- Navigation - General: Chart Symbology",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A GNSS receiver generally requires signals from a minimum of four satellites simultaneously to compute a three-dimensional position fix primarily because",
    options: [
      "four is simply an arbitrary regulatory minimum with no underlying mathematical basis related to the receiver's clock or the position calculation.",
      "three satellites are always sufficient for a full three-dimensional fix, with the fourth satellite used solely to check integrity through RAIM.",
      "each satellite can only provide information about one of the three position dimensions, requiring three satellites for position alone, plus a fourth for redundancy only.",
      "in addition to solving for the receiver's three-dimensional position (latitude, longitude, and altitude), the receiver's own clock has an unknown bias relative to the satellites' precise atomic clocks that must also be solved for, requiring a fourth independent measurement.",
    ],
    answer: 3,
    explain:
      "Solving for a three-dimensional position (three unknowns: latitude, longitude, and altitude) would require only three satellite range measurements if the receiver's clock were perfectly synchronized with the satellites' atomic clocks -- but an inexpensive receiver clock has its own unknown timing bias relative to those clocks, introducing a fourth unknown that must also be solved for, which is why a minimum of four satellites is needed simultaneously to compute a full three-dimensional position fix along with the receiver's clock correction.",
    reference: "TP 690 -- Navigation - General: GNSS Fundamentals",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Isogriv lines, plotted on charts used for grid navigation in polar and high-latitude regions, connect points of",
    options: [
      "equal grid variation -- the angular difference between grid north and magnetic north at a given location -- allowing a pilot using a fixed grid reference direction to convert between grid and magnetic headings at that location.",
      "equal magnetic variation between true north and magnetic north, making isogrivs simply another name for isogonic lines.",
      "equal barometric pressure, serving the same charting function as an isobar on a weather chart.",
      "equal magnetic dip (inclination), making isogrivs simply another name for isoclinic lines.",
    ],
    answer: 0,
    explain:
      "Isogriv lines connect points of equal grid variation -- the angular difference between grid north (a fixed reference direction, typically aligned with a chosen meridian, used because true and magnetic north references become impractical near the poles) and magnetic north at that location -- giving a pilot using grid navigation the information needed to convert between a grid heading and a magnetic heading at any point along the route, distinct from isogonic lines (true/magnetic variation) or isoclinic lines (magnetic dip).",
    reference: "TP 690 -- Navigation - General: Grid Navigation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A gnomonic map projection, less commonly used for general aeronautical charting than the Lambert Conformal Conic or Mercator projections, is particularly valued for one specific purpose:",
    options: [
      "it is the only projection capable of accurately depicting a rhumb line as a straight line, a property no other projection shares.",
      "any great circle on the Earth's surface is represented as a straight line on a gnomonic projection, making it useful for plotting the shortest-distance route between two distant points before transferring that route to a more conventional navigation chart.",
      "it preserves both true shape and true area simultaneously across the entire chart, a combination no other projection can achieve.",
      "it is used exclusively for depicting airport diagrams and ground taxi charts, with no application to en route navigation.",
    ],
    answer: 1,
    explain:
      "The defining property of a gnomonic projection is that any great circle on the Earth's surface -- including the shortest-distance route between two points -- is represented as a straight line on the chart, which makes it a useful tool for plotting a great circle route by simply drawing a straight line between the departure and destination points; because the projection significantly distorts shape, area, and scale away from its centre, the resulting great circle track is typically then transferred, often broken into a series of rhumb line legs, onto a more conventional chart such as a Mercator or Lambert Conformal for actual navigation.",
    reference: "TP 690 -- Navigation - General: Map Projections",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "GPS system time, as maintained internally by the GPS satellite constellation, differs from Coordinated Universal Time (UTC) in that GPS time",
    options: [
      "has no defined relationship to UTC at all, making any conversion between the two impossible.",
      "runs slower than UTC by a continuously increasing amount, rather than differing by a fixed, known number of whole seconds.",
      "does not have leap seconds applied to it and has therefore drifted a number of whole seconds ahead of UTC since the system began operating, a fixed offset that receivers apply a correction for when computing and displaying UTC-referenced time.",
      "is adjusted for leap seconds in exactly the same way as UTC, meaning the two time scales remain perfectly identical at all times.",
    ],
    answer: 2,
    explain:
      "GPS system time is a continuous time scale that, unlike UTC, does not have periodic leap seconds inserted to keep it aligned with the Earth's slightly irregular rotation; as a result, GPS time has drifted a number of whole seconds ahead of UTC since the system's reference epoch, a fixed and known offset that receivers apply as a correction internally when computing and displaying time referenced to UTC, so the difference between the two remains a specific, quantifiable value rather than an unknown or continuously drifting quantity.",
    reference: "TP 690 -- Navigation - General: GNSS Fundamentals",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Layer tinting, a colour-shading technique used on many aeronautical and topographic charts, is applied primarily to",
    options: [
      "show variations in magnetic variation across the chart, serving the same function as isogonic lines.",
      "indicate different classes of controlled airspace, replacing the need for any separate airspace boundary symbology.",
      "distinguish controlled aerodromes from uncontrolled aerodromes through colour alone, with no other symbol required.",
      "give a pilot a quick, at-a-glance visual impression of terrain elevation bands across a chart, using progressively different colours (commonly ranging from green at low elevations to brown or grey at higher ones) rather than requiring the pilot to read individual contour line values.",
    ],
    answer: 3,
    explain:
      "Layer tinting shades bands of terrain elevation with progressively different colours -- commonly greens at lower elevations transitioning through yellows, browns, or greys at higher ones -- giving a pilot a quick, at-a-glance visual sense of the general terrain elevation across a chart without needing to individually trace and read contour line values, complementing rather than replacing the more precise elevation information contour lines and spot elevations provide.",
    reference: "TP 690 -- Navigation - General: Chart Symbology",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "As an alternative to a VOR Test Facility (VOT), a pilot can also check VOR receiver accuracy using a designated ground or airborne VOR checkpoint, which generally consists of",
    options: [
      "a specific location (a marked spot on the airport surface, or an airborne point over a charted landmark) with a published radial and, for a ground checkpoint, distance from a specific VOR station, against which the receiver's indication can be compared.",
      "a checkpoint usable only during specific hours of the day, unlike a VOT, which operates continuously.",
      "a facility that broadcasts a dedicated test signal in the same manner as a VOT, differing from a VOT only in its physical location.",
      "a second, independent VOR receiver installed solely for the purpose of cross-checking the primary receiver, with no reference to any external ground point.",
    ],
    answer: 0,
    explain:
      "A designated VOR checkpoint -- whether a marked spot on an airport surface or a specified airborne point over a recognizable landmark -- has a published radial (and, for a ground checkpoint, distance) from a specific VOR station already precisely surveyed, so a pilot can compare the aircraft's actual VOR indication against that known, published value to assess receiver accuracy, providing an alternative to a VOT at locations where no VOT signal is available.",
    reference: "TP 690 -- Navigation - General: VOR",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "RNAV system waypoints are generally identified using a standardized five-letter, pronounceable code, a convention that exists primarily to",
    options: [
      "encode the waypoint's exact latitude and longitude directly within the letters themselves, allowing position to be derived purely by reading the identifier.",
      "provide each waypoint with a unique identifier that can be clearly and unambiguously spoken over the radio and entered into a navigation database, reducing the risk of confusion between similarly named points.",
      "indicate the waypoint's required minimum altitude, with each letter corresponding to a specific altitude value.",
      "replace the need for any navigation database to store waypoint coordinates, since the identifier alone is sufficient for RNAV guidance.",
    ],
    answer: 1,
    explain:
      "The standardized five-letter, pronounceable naming convention used for RNAV waypoints exists to give each one a unique, clearly speakable identifier that can be communicated unambiguously between pilots and controllers and entered reliably into a navigation database, reducing the risk of confusion between similarly sounding or similarly spelled points -- the identifier itself does not encode the waypoint's coordinates, altitude, or any other navigational data, which is instead stored separately within the navigation database.",
    reference: "TP 690 -- Navigation - General: RNAV Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "WGS84, the geodetic datum used by GNSS and most modern aeronautical charts, models the Earth's shape as a mathematically defined ellipsoid rather than using the more complex, irregular 'geoid' shape (the Earth's actual mean sea level surface) directly, because",
    options: [
      "the geoid and the ellipsoid are simply two different names describing the exact same, perfectly smooth shape, with no distinction between them.",
      "the ellipsoid model is used only for oceanic navigation, with the geoid used exclusively for all overland aeronautical navigation instead.",
      "an ellipsoid provides a smooth, mathematically simple approximation that is close enough to the Earth's actual shape for practical positioning purposes, while still allowing straightforward, consistent calculation, whereas the true geoid's irregular undulations are far more complex to compute with directly.",
      "WGS84 uses the geoid exclusively and makes no use of any ellipsoid approximation at all.",
    ],
    answer: 2,
    explain:
      "The geoid represents the Earth's actual, irregular equipotential surface (closely approximating mean sea level, and affected by local variations in gravity and mass distribution), which is far too complex to use directly for straightforward mathematical positioning calculations; WGS84 instead models the Earth as a smooth, mathematically defined ellipsoid that closely approximates the geoid's overall shape, providing a practical balance between accuracy and computational simplicity for GNSS positioning and modern charting.",
    reference: "TP 690 -- Navigation - General: Geodesy",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Comparing a fixed-card relative bearing indicator (RBI) to a rotatable-card RBI used with an ADF, the key difference is that a fixed-card RBI",
    options: [
      "requires no reference to the aircraft's heading at all to determine magnetic bearing to the station, unlike a rotatable-card version.",
      "automatically displays magnetic bearing to the station directly, with no calculation required by the pilot, in exactly the same manner as a rotatable-card version.",
      "can only be used with an NDB station, while a rotatable-card version can only be used with a VOR station.",
      "always displays relative bearing to the station with 0 (or 360) fixed at the top of the instrument regardless of the aircraft's heading, requiring the pilot to manually add the current heading to obtain magnetic bearing, whereas a rotatable-card version can be manually set to the current heading so the needle then reads magnetic bearing directly.",
    ],
    answer: 3,
    explain:
      "A fixed-card RBI always shows relative bearing to the station -- the angle measured clockwise from the nose of the aircraft, with the '0/360' index fixed at the top of the instrument regardless of heading -- so the pilot must manually add the aircraft's current magnetic heading to that relative bearing (subtracting 360 if the result exceeds it) to determine magnetic bearing to the station; a rotatable-card RBI, by contrast, allows the pilot to manually rotate the card to align with the current heading, after which the needle indicates magnetic bearing to the station directly, without requiring a separate mental calculation.",
    reference: "TP 690 -- Navigation - General: ADF",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Because magnetic variation at a given location changes slowly over time (secular variation), a pilot relying on the magnetic variation value printed on an older aeronautical chart should generally recognize that",
    options: [
      "the printed value may no longer be fully accurate for current navigation, particularly in areas of Canada experiencing more rapid magnetic change, making it important to use current variation data rather than assuming an older chart's printed figure remains precisely correct.",
      "an outdated variation value has no operational consequence, since GNSS systems have made magnetic variation entirely irrelevant to modern navigation.",
      "variation values are only ever printed on charts for locations outside Canada, since Canadian charts do not depict magnetic variation at all.",
      "printed variation values never change over time at any location, meaning a chart's printed value remains accurate indefinitely regardless of its publication date.",
    ],
    answer: 0,
    explain:
      "Secular variation means the magnetic variation at a given location gradually changes over years and decades as the Earth's magnetic field shifts, and this change can be comparatively rapid in parts of Canada given the country's proximity to the wandering magnetic north pole -- as a result, a pilot working from an older chart should recognize that its printed variation value may have become somewhat outdated, and should use current variation data (such as from an up-to-date chart or database) rather than assuming an older printed figure remains precisely accurate for present-day navigation.",
    reference: "TP 690 -- Navigation - General: Magnetic Variation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The World Geographic Reference System (GEOREF), sometimes referenced in search-and-rescue and military navigation contexts, is best described as",
    options: [
      "another name for the WGS84 geodetic datum, with no distinction between the two.",
      "an alphanumeric grid reference system that divides the Earth's surface into a series of progressively smaller lettered and numbered quadrangles, allowing a position to be expressed as a short grid reference rather than as latitude and longitude coordinates.",
      "a system used exclusively to express altitude, with no application to horizontal position.",
      "a chart projection type, functionally equivalent to the Lambert Conformal Conic projection.",
    ],
    answer: 1,
    explain:
      "GEOREF is an alphanumeric grid reference system that overlays the Earth's surface with a series of progressively smaller lettered and numbered quadrangles, allowing a specific position to be expressed as a relatively short, standardized grid reference code rather than as a full latitude and longitude coordinate pair -- a format that has historically found use in military and search-and-rescue contexts where a compact, unambiguous way of communicating a position or search area is valuable.",
    reference: "TP 690 -- Navigation - General: Position Reference Systems",
  },
];
