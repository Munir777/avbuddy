import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 41 -- Section 4: Navigation -
// General, fifth pass. Original questions written from standard air
// navigation principles and the TP 690 syllabus (topic headings
// only, no sample questions). Covers distance units, GNSS
// constellations, turn geometry, IFR minimum altitude concepts,
// chart depiction, and airspace/date-line considerations not yet
// addressed in batches 4, 13, 22, or 31. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_41_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A nautical mile, the standard distance unit used in aeronautical navigation, is distinguished from a statute mile in that a nautical mile is",
    options: [
      "identical in length to a statute mile, making 'nautical mile' and 'statute mile' simply two different names for an equal distance.",
      "a unit of speed rather than of distance, unrelated to the length-based statute mile despite both containing the word 'mile.'",
      "somewhat longer than a statute mile (approximately 6,076 feet versus approximately 5,280 feet), and is specifically based on one minute of arc of latitude along a meridian.",
      "somewhat shorter than a statute mile, the reverse of the actual relationship between the two units.",
    ],
    answer: 2,
    explain:
      "A nautical mile (about 6,076 feet, compared to a statute mile's approximately 5,280 feet) is specifically defined based on one minute of arc of latitude measured along a meridian, which is exactly why latitude scales on a chart can be used directly to measure distance in nautical miles -- a genuinely different, longer unit than the statute mile used for many other everyday distance measurements, and it's a distance unit (paired with 'knots' as the corresponding speed unit), not a speed unit itself.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Modern GNSS receivers are often capable of using satellite signals from multiple separate satellite constellations (such as the United States' GPS, Russia's GLONASS, and the European Union's Galileo), which generally",
    options: [
      "is prohibited by international regulation, with any GNSS receiver combining signals from more than one satellite constellation considered unauthorized for aviation use.",
      "has no effect on position accuracy or availability whatsoever, since using an additional constellation is assumed to contribute nothing beyond what a single constellation already provides.",
      "applies only to ground-based receivers, with airborne GNSS receivers specifically restricted to using a single satellite constellation at all times.",
      "improves the number of usable satellites in view and the resulting position solution's accuracy and availability, compared to relying on a single constellation alone.",
    ],
    answer: 3,
    explain:
      "Combining signals from multiple independent satellite constellations generally increases the number of satellites available to the receiver at any given time and location, which can improve satellite geometry, position accuracy, and overall availability (including resilience if one constellation experiences degraded performance) compared to relying on a single constellation -- a genuine, recognized benefit of multi-constellation GNSS receivers, which are used in both ground-based and airborne applications, not something prohibited or restricted to ground use only.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A standard rate (Rate 1) turn is defined as a turn rate of",
    options: [
      "3 degrees per second, resulting in a complete 360-degree turn in 2 minutes.",
      "a rate that varies depending on the aircraft's airspeed, with 'standard rate' referring to a fixed radius rather than a fixed angular turn rate.",
      "1 degree per second, resulting in a complete 360-degree turn in 6 minutes.",
      "6 degrees per second, resulting in a complete 360-degree turn in exactly 1 minute.",
    ],
    answer: 0,
    explain:
      "A standard rate (Rate 1) turn is specifically defined as an angular turn rate of 3 degrees per second, which works out to a complete 360-degree turn in exactly 2 minutes -- a fixed angular rate (not a fixed radius or a fixed bank angle), and it's the reference rate a turn coordinator or turn-and-bank indicator is calibrated to display, requiring a progressively steeper bank angle as airspeed increases to maintain that same 3-degree-per-second rate.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For a given bank angle, an aircraft's turn radius",
    options: [
      "decreases as airspeed increases, meaning a faster aircraft holding the same bank angle as a slower aircraft will fly a tighter turn.",
      "increases as airspeed increases, meaning a faster aircraft holding the same bank angle as a slower aircraft will fly a wider turn.",
      "is entirely independent of airspeed, remaining identical regardless of how fast the aircraft is travelling through the turn.",
      "depends only on the aircraft's weight, with bank angle and airspeed both having no effect on the resulting turn radius.",
    ],
    answer: 1,
    explain:
      "For the same bank angle, turn radius increases with airspeed -- a faster aircraft needs a wider turn to generate the same rate of direction change, which is why holding a constant standard-rate turn requires progressively increasing bank angle as speed increases (rather than flying an ever-larger radius at a fixed bank), and turn radius is fundamentally a function of speed and bank angle together (via the load factor and turn geometry relationship), not of weight alone, and radius decreases (not increases) as bank angle steepens at a given speed.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "To intercept a desired track from an off-track position, a pilot commonly uses an interception (closing) angle, meaning the aircraft is flown",
    options: [
      "directly along the desired track from the very first moment, with no interception angle or converging heading ever actually flown.",
      "at a fixed altitude offset from the desired track, with 'interception angle' referring to a vertical rather than a lateral navigation concept.",
      "on a heading offset from the desired track by a chosen angle, converging toward that track until reaching it, at which point the aircraft turns onto the track itself.",
      "on a heading diverging away from the desired track, the opposite of what an interception angle is intended to achieve.",
    ],
    answer: 2,
    explain:
      "An interception (closing) angle is a deliberately chosen heading offset from the desired track, flown so the aircraft converges toward that track over time rather than attempting to fly directly along it from an off-track starting position -- once the aircraft reaches the track (or a chosen lead point just before it, to allow for the turn), it rolls out onto the track heading itself; the technique is specifically about converging, not diverging, and it's a lateral (horizontal) navigation concept, not a vertical/altitude one.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On an aeronautical chart, the boundary of a given class of controlled airspace is generally depicted using",
    options: [
      "the identical line style used for every other class of airspace, making it impossible to visually distinguish one airspace class's boundary from another on the chart.",
      "no distinguishing markings of any kind, requiring the pilot to determine airspace classification exclusively from a separate written source with no chart depiction at all.",
      "a marking that indicates only vertical (altitude) limits, with no depiction of the airspace's lateral (horizontal) boundary on the chart at all.",
      "a distinct, standardized line style and/or colour specific to that airspace class, so a pilot can visually identify the airspace's lateral extent and classification.",
    ],
    answer: 3,
    explain:
      "Aeronautical charts use standardized, class-specific line styles and/or colours to depict controlled airspace boundaries -- letting a pilot visually identify both where a particular class of airspace begins and ends laterally and, through accompanying altitude figures/notations, its vertical limits -- a deliberate, standardized charting convention, not an absence of markings, an undifferentiated identical depiction across all classes, or a lateral-boundary omission.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Obstacles depicted on an aeronautical chart (such as towers) are generally labelled with a height value that represents",
    options: [
      "the obstacle's height, commonly given both above ground level (AGL) and above mean sea level (MSL), letting a pilot assess actual vertical clearance regardless of local terrain elevation.",
      "the obstacle's height, but expressed only in metres, with feet considered inapplicable to any Canadian aeronautical chart obstacle labelling.",
      "the obstacle's distance from the nearest aerodrome, a lateral rather than a vertical measurement despite being labelled as a 'height.'",
      "the obstacle's height above ground level (AGL) only, with mean sea level (MSL) height never provided for any charted obstacle.",
    ],
    answer: 0,
    explain:
      "Charted obstacle heights are typically given both above ground level (the obstacle's actual physical height) and above mean sea level (letting the pilot directly compare the obstacle's top against the aircraft's own altitude, which is referenced to MSL) -- giving a complete picture for vertical clearance planning regardless of the underlying terrain elevation at that location, rather than providing only AGL height, describing a lateral distance, or being restricted to metric units on Canadian charts, which commonly use feet.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The Minimum En-route Altitude (MEA) published for an airway segment is the lowest altitude that generally ensures",
    options: [
      "the highest possible cruising efficiency for that segment, an efficiency-based rather than a safety-based altitude standard.",
      "both adequate obstacle clearance and reliable reception of the navigation signals needed to remain on the airway for that segment.",
      "adequate obstacle clearance only, with navigation signal reception considered entirely unrelated to how MEA is established.",
      "reliable navigation signal reception only, with obstacle clearance considered entirely unrelated to how MEA is established.",
    ],
    answer: 1,
    explain:
      "MEA is set considering both obstacle clearance and the need for reliable reception of the navigation aid(s) supporting that airway segment -- an altitude too low might provide adequate obstacle clearance but lose reliable navigation guidance (or vice versa), so MEA is specifically the lowest altitude satisfying both considerations together for the segment, rather than addressing just one of the two, and it's a safety-minimum standard, not a cruise-efficiency optimization.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The Minimum Obstruction Clearance Altitude (MOCA), where published for an airway segment, differs from the MEA for that same segment in that MOCA",
    options: [
      "guarantees full navigation signal coverage across the entire segment but provides no obstacle clearance guarantee at all, the reverse of the actual MOCA/MEA relationship.",
      "is always a higher altitude than the MEA for the same segment, the opposite of the generally understood relationship between the two.",
      "guarantees obstacle clearance but only a reduced (rather than the full) navigation signal coverage, typically only within a limited distance of the navigation aid(s), whereas MEA guarantees both obstacle clearance and full-segment navigation coverage.",
      "applies exclusively to VFR flight, with MOCA considered entirely inapplicable to any IFR operation along the segment.",
    ],
    answer: 2,
    explain:
      "MOCA still guarantees obstacle clearance across the segment, but its guarantee of reliable navigation signal reception is more limited -- typically assured only within a specified distance of the supporting navigation aid(s), rather than across the segment's full length the way MEA's navigation guarantee is -- meaning MOCA is generally equal to or lower than the corresponding MEA (not higher), and it's specifically an IFR altitude concept (tied to airway navigation signal coverage), not a VFR one.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Minimum Off-Route Altitude (MORA), published on some en route charts, provides",
    options: [
      "the single lowest altitude at which an aircraft may legally be flown anywhere in Canadian airspace, applicable universally rather than to a specific charted area.",
      "a guarantee of navigation signal reception only, with obstacle clearance considered entirely unrelated to how MORA values are established.",
      "an altitude value applicable exclusively to flight precisely along the centreline of a published airway, with any off-airway flight considered outside MORA's intended coverage.",
      "obstacle clearance for flight off the established airway structure within a defined grid or route-corridor area, without any guarantee of navigation signal reception at that altitude.",
    ],
    answer: 3,
    explain:
      "MORA is specifically provided for off-route (off-airway) flight -- given either as a grid MORA (covering a defined latitude/longitude grid area) or a route-corridor MORA (covering a corridor along and to either side of a charted route) -- and it addresses obstacle clearance within that area, without any accompanying guarantee about navigation signal reception at that altitude, since it's meant for flight that may not be tracking a specific navigation aid's signal along an established airway at all; it's not a universal minimum-legal-altitude figure applicable everywhere, and it's specifically for off-airway (not precisely on-airway) flight.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Minimum Sector Altitude (MSA), published on many instrument approach charts and centred on a specified NAVAID or fix, provides",
    options: [
      "obstacle clearance within a defined sector (or the full circle) around that point, typically usable within a limited radius, primarily intended to support emergency or situational-awareness use rather than routine approach navigation.",
      "obstacle clearance across the entire country, applicable at any distance from the specified NAVAID or fix regardless of how far the aircraft actually is from it.",
      "a guarantee of navigation signal reception only, with obstacle clearance considered entirely unrelated to how MSA values are established.",
      "an altitude that a pilot is required to fly at throughout the entire published instrument approach procedure, from the initial approach fix to the runway.",
    ],
    answer: 0,
    explain:
      "MSA gives obstacle clearance within a defined sector (or, if unsectored, the full circle) around a specified reference point, typically valid only within a limited radius (commonly 25 NM) of that point -- it's generally intended as an emergency or situational-awareness reference (a quick, chart-published minimum a pilot can climb to if needed, or use to build general awareness of surrounding terrain), rather than as a routine, mandatory altitude to be flown throughout the approach procedure itself, and its coverage is bounded by that limited radius, not the entire country.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Crossing the International Date Line during a long westbound or eastbound flight requires the crew to",
    options: [
      "make no calendar date adjustment of any kind, since crossing the International Date Line is understood to affect only time-of-day, not calendar date.",
      "adjust the calendar date by one full day (forward when crossing westbound, backward when crossing eastbound) at the point of crossing, in addition to any time zone adjustment otherwise being tracked.",
      "adjust the calendar date by exactly one week, rather than by one day, at the point of crossing the International Date Line.",
      "adjust the calendar date only when crossing eastbound, with a westbound crossing requiring no date adjustment at all.",
    ],
    answer: 1,
    explain:
      "The International Date Line exists specifically to reconcile the fact that, without it, continuously travelling around the Earth through successive time zones would otherwise create an ever-accumulating date discrepancy -- crossing it westbound advances the calendar date by one full day, and crossing it eastbound sets the date back by one full day, a genuine date adjustment made in addition to (and distinct from) whatever ordinary time zone adjustments are also being tracked along the route, applicable in both directions of crossing, and by a full day, not a week.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Prohibited airspace, as distinguished from restricted airspace on an aeronautical chart, generally means that flight within its boundaries is",
    options: [
      "permitted only for aircraft operating under VFR, with IFR flight specifically excluded from prohibited airspace while VFR flight remains generally authorized there.",
      "identical in every respect to restricted airspace, with 'prohibited' and 'restricted' being interchangeable terms describing the same charted airspace category.",
      "not permitted at all, in contrast to restricted airspace, where flight may be permitted under specified conditions or with appropriate authorization.",
      "permitted at any time without restriction, the opposite of what the term 'prohibited airspace' actually designates.",
    ],
    answer: 2,
    explain:
      "Prohibited airspace is a genuinely more absolute restriction than restricted airspace: flight within prohibited airspace is simply not permitted, generally for national security, safety, or similarly serious reasons, whereas restricted airspace allows flight under specified conditions or with appropriate authorization (for example, coordinated with the controlling or using agency, or outside the times the restriction is actually active) -- the two designations aren't interchangeable, prohibited airspace isn't open to unrestricted flight, and it isn't a VFR-permitted/IFR-excluded distinction.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A VOR's published 'standard service volume,' defining the range and altitude within which reliable signal reception can generally be expected, is significant because",
    options: [
      "a VOR's service volume increases as the aircraft descends to a lower altitude, the opposite of the actual relationship between altitude and VOR reception range.",
      "a VOR's service volume is identical and unlimited in every direction and at every altitude, making the concept of a 'standard service volume' essentially meaningless.",
      "service volume applies only to DME, not to VOR, despite VOR being the specific navigation aid the term is most commonly associated with.",
      "reliable VOR reception cannot be assumed indefinitely at any distance and altitude, so navigation planning should account for the facility's actual defined service volume rather than assuming unlimited range.",
    ],
    answer: 3,
    explain:
      "VOR facilities are categorized (terminal, low altitude, high altitude, and so on) with a defined standard service volume -- a specific combination of range and altitude within which reliable signal reception can reasonably be expected -- because VOR (a line-of-sight VHF signal) reception isn't unlimited; range and reliability generally improve with altitude (not decrease, the opposite of the incorrect option) due to line-of-sight geometry, and navigation planning that depends on a specific VOR needs to account for whether the aircraft will actually be within that facility's defined service volume, a concept genuinely applicable to VOR (DME service volume is a related but separate consideration).",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An NDB's usable signal range is generally influenced by factors including",
    options: [
      "the station's transmitter power, its operating frequency, and atmospheric/propagation conditions (including time of day), all of which can meaningfully affect how far and how reliably the signal can be received.",
      "the phase of the moon, an astronomical rather than a radio-propagation-based factor governing NDB signal range.",
      "the receiving aircraft's airspeed alone, with transmitter power, frequency, and atmospheric conditions having no meaningful effect on NDB range at all.",
      "the receiving aircraft's registration number, an identification-based rather than a signal-propagation-based factor.",
    ],
    answer: 0,
    explain:
      "Because NDB signals rely on ground-wave (and to some extent sky-wave) propagation at relatively low frequencies, their usable range is genuinely influenced by the station's transmitter power, its specific operating frequency, and atmospheric/ionospheric propagation conditions -- which is exactly why NDB reception often varies meaningfully between day and night (a factor covered elsewhere as 'night effect') and can be degraded by terrain or coastal refraction effects -- rather than being governed by the receiving aircraft's airspeed, its registration number, or any astronomical factor.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A rhumb line and a great circle drawn between the same two points coincide exactly (are the same line) only when those two points lie",
    options: [
      "at the North and South Poles specifically, with no other pair of points anywhere on Earth producing a coinciding rhumb line and great circle.",
      "on the equator, or share the same meridian (a due north-south track), the two specific cases where a constant-track rhumb line is also the shortest-distance great circle path.",
      "at any two points anywhere on the Earth's surface, since a rhumb line and a great circle are, in fact, always identical to one another regardless of location.",
      "on two different meridians at the same latitude, other than the equator, a case where the incorrect option claims the two lines still coincide.",
    ],
    answer: 1,
    explain:
      "A rhumb line and a great circle coincide only in two specific geometric cases: along the equator (where both a constant-track rhumb line and the shortest-distance great circle run along the same line), and along any meridian (a due north-south track, where again the constant-track rhumb line and the great circle are identical) -- everywhere else, the great circle (the shortest distance) and the rhumb line (the constant-track path) diverge from each other to varying degrees, so the two lines are not always identical, don't coincide for two arbitrary same-latitude points off the equator, and the poles themselves are single points, not a general case describing when the two path types coincide.",
    reference: "TP 690 Section 4 - Navigation - General",
  },
];
