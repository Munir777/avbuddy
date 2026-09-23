import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 4 -- Section 4: Navigation -
// General (navigation terms, maps and charts, time and longitude, en
// route navigation). Original questions written from general air
// navigation knowledge and the TP 690 syllabus (topic headings only, no
// sample questions). Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_04_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An aircraft's 'air position' at a given time is",
    options: [
      "the position obtained by applying only heading and true airspeed from the last known position, with no allowance made for wind.",
      "the position obtained by applying heading, true airspeed, and forecast or estimated wind from the last known position.",
      "a position fixed by radio navigation aids or GPS, independent of any dead reckoning calculation.",
      "the position at which the aircraft would land if all engines failed at that instant.",
    ],
    answer: 0,
    explain:
      "Air position advances the aircraft's plotted position using heading and TAS alone, as if there were no wind at all -- it's a building block used, together with a separately calculated wind effect, to arrive at a dead reckoning (DR) position, which does account for wind. Air position by itself deliberately ignores wind.",
    reference: "TP 690 Section 4 - Navigation Terms, Air Position",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A great circle route between two points on the Earth is significant in navigation because it represents",
    options: [
      "the shortest distance between the two points, along the surface of the Earth.",
      "a track that crosses every meridian at the same angle.",
      "a track of constant true course throughout its length.",
      "the shortest distance only when the two points share the same latitude.",
    ],
    answer: 0,
    explain:
      "A great circle -- the intersection of the Earth's surface with a plane passing through the Earth's centre -- gives the shortest surface distance between any two points, regardless of their latitude. A rhumb line, by contrast, is the track that crosses every meridian at the same angle (constant true course), but it is generally longer than the corresponding great circle route.",
    reference: "TP 690 Section 4 - Navigation Terms, Great Circle",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A rhumb line differs from a great circle in that a rhumb line",
    options: [
      "crosses every meridian at the same angle, giving a constant true course, but is generally a longer route than the corresponding great circle.",
      "always represents the shortest distance between two points, unlike the great circle.",
      "crosses meridians at continuously changing angles, exactly like a great circle does.",
      "can only be flown at or near the equator, and is undefined elsewhere.",
    ],
    answer: 0,
    explain:
      "A rhumb line's defining property is a constant true course -- easy to fly without continuous heading changes -- at the cost of being a longer path than the great circle between the same two points (except along the equator or along a meridian, where the two coincide).",
    reference: "TP 690 Section 4 - Navigation Terms, Rhumb Line",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The Lambert Conformal Conic projection is widely used for aeronautical en route charts primarily because",
    options: [
      "it is conformal (preserving shape and angle locally) and a great circle route approximates a straight line over the chart's normal range of use.",
      "it preserves distance exactly everywhere on the chart, with no scale variation at any latitude.",
      "it is the only projection in which a rhumb line appears as a straight line.",
      "it is used exclusively for charts covering polar regions, where other projections fail entirely.",
    ],
    answer: 0,
    explain:
      "The Lambert Conformal Conic's combination of conformality (local shapes/angles are preserved, so chart symbols and courses plot accurately) and a great circle appearing very close to a straight line across the chart's typical coverage makes it well suited to en route navigation, where pilots plot and measure great-circle-like tracks directly on the chart. A rhumb line appearing as a straight line is instead the defining property of a Mercator projection.",
    reference: "TP 690 Section 4 - Maps and Charts, Lambert Conformal",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Transverse Mercator projection differs from a standard (equatorial) Mercator projection in that the Transverse Mercator's projection cylinder is",
    options: [
      "tangent along a chosen meridian rather than along the equator, giving better scale accuracy near that meridian, including at higher latitudes.",
      "not a cylindrical projection at all, but a conic projection tangent to a chosen parallel.",
      "tangent along the equator, identical to a standard Mercator projection in every respect.",
      "used only for charts of equatorial regions, and is unusable at higher latitudes.",
    ],
    answer: 0,
    explain:
      "Rotating the projection cylinder 90 degrees so it's tangent along a meridian (rather than the equator) keeps distortion low near that meridian even at high latitudes, which is exactly where a standard Mercator projection becomes increasingly unusable as it approaches the poles -- this is why Transverse Mercator variants are used for charts and grid systems covering north-south oriented or higher-latitude areas.",
    reference: "TP 690 Section 4 - Maps and Charts, Transverse Mercator",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Compared to an en route low altitude chart, an en route high altitude chart is generally",
    options: [
      "less cluttered with ground detail and depicts jet routes/high-level airways for IFR operations in the higher-altitude structure, at a different chart scale.",
      "identical in content, differing only in its printed colour scheme.",
      "used exclusively for VFR navigation above 18,000 ft.",
      "more detailed than a low altitude chart, showing every ground feature visible from high altitude.",
    ],
    answer: 0,
    explain:
      "Low altitude en route charts depict the airway structure and ground detail relevant to operations below the high-level airspace, at a scale and level of clutter suited to that environment. High altitude charts cover the jet route structure used at higher flight levels, are generally less cluttered with ground-reference detail (since high-level IFR navigation relies less on visual ground reference), and typically use a different, often smaller, scale to cover a larger area per chart.",
    reference: "TP 690 Section 4 - Maps and Charts, En Route Low and High Altitude Charts",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Navigation databases loaded into an FMS or GPS, containing waypoints, airways, and procedures, are updated",
    options: [
      "on a fixed cycle (the AIRAC cycle, currently every 28 days) so the data used for navigation reflects current published information.",
      "only when the aircraft manufacturer issues a service bulletin, with no fixed schedule.",
      "continuously in real time over an internet connection while the aircraft is in flight.",
      "only once, at the time of aircraft delivery, and are never revised afterward.",
    ],
    answer: 0,
    explain:
      "Navigation databases are tied to the international AIRAC (Aeronautical Information Regulation and Control) cycle, which republishes aeronautical data on a fixed, internationally coordinated schedule so that changes to navaids, airways, and procedures take effect on the same date worldwide -- an out-of-date database can mean flying with stale waypoint coordinates or obsolete procedures.",
    reference: "TP 690 Section 4 - Maps and Charts, Navigation Databases",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Time zones are related to longitude such that, moving from one time zone to the next, each 15 degrees of longitude generally corresponds to",
    options: [
      "a one-hour difference in local mean time.",
      "a fifteen-minute difference in local mean time.",
      "a four-hour difference in local mean time.",
      "no fixed relationship at all, since time zones are set purely by political boundary rather than longitude.",
    ],
    answer: 0,
    explain:
      "Since the Earth rotates 360 degrees in 24 hours, that's 15 degrees of longitude per hour (360/24), which is the theoretical basis for standard time zones being roughly 15 degrees wide -- though actual zone boundaries are then adjusted for political and practical convenience.",
    reference: "TP 690 Section 4 - Time and Longitude, Time Zones and Relation to Longitude",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "When calculating true heading from a planned true course, the wind correction angle is applied",
    options: [
      "into the wind, offsetting the nose toward the direction the wind is coming from, so the resulting ground track matches the intended course.",
      "away from the wind, offsetting the nose in the same direction the wind is blowing toward.",
      "only when the wind is a direct headwind or tailwind component; crosswinds require no heading correction.",
      "after groundspeed has already been calculated, and has no effect on groundspeed itself.",
    ],
    answer: 0,
    explain:
      "To counteract the wind pushing the aircraft off the intended course, the heading is offset into the wind (toward the direction the wind is coming from) by the wind correction angle, so that the resulting track over the ground matches the planned true course -- and because that heading offset changes the aircraft's actual vector relative to the ground, it also affects the calculated groundspeed.",
    reference: "TP 690 Section 4 - En Route Navigation, Calculation of Heading, Groundspeed and ETE",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Estimated Time En route (ETE) for a given leg is calculated as",
    options: [
      "the leg distance divided by the groundspeed for that leg.",
      "the leg distance divided by true airspeed, regardless of wind.",
      "the leg distance multiplied by groundspeed.",
      "a fixed value that does not change regardless of the wind encountered.",
    ],
    answer: 0,
    explain:
      "ETE is simply distance over groundspeed -- using true airspeed instead of groundspeed would ignore the wind's effect on how quickly the aircraft actually covers the ground distance of the leg, giving an inaccurate time estimate whenever there's a significant headwind or tailwind component.",
    reference: "TP 690 Section 4 - En Route Navigation, Calculation of Heading, Groundspeed and ETE",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Wind velocity (direction and speed) can be determined in flight by",
    options: [
      "comparing the aircraft's planned heading and true airspeed vector against its actual observed track and groundspeed, and solving for the wind vector that accounts for the difference.",
      "reading the outside air temperature and applying a fixed conversion table to derive wind speed.",
      "reference to the altimeter setting alone, since pressure and wind are directly and simply related at any one point.",
      "measuring engine fuel flow, since fuel flow varies directly and predictably with headwind or tailwind component.",
    ],
    answer: 0,
    explain:
      "This is the classic 'triangle of velocities' approach: the aircraft's heading/TAS vector and its actual track/groundspeed vector are two sides of a triangle, and the wind vector is the third side that reconciles the difference between where the aircraft was aimed and where it actually went -- this can be done manually, via a flight computer, or automatically by systems like an INS/IRS or FMS that continuously solve the same triangle.",
    reference: "TP 690 Section 4 - En Route Navigation, Determination of Wind Velocity",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A position fix using two VOR radials (a 'VOR cross-radial fix') is obtained by",
    options: [
      "plotting the radial from each of two VOR stations and taking the aircraft's position as the point where the two radial lines intersect.",
      "using the DME distance from a single VOR station alone, with no radial information required.",
      "averaging the two stations' geographic coordinates directly, without reference to any radial.",
      "using the difference in signal strength between the two stations to compute a position.",
    ],
    answer: 0,
    explain:
      "Each VOR radial defines a line from the station outward along a particular magnetic bearing; plotting the radial received from two different stations and finding where those two lines cross gives a two-dimensional position fix, without needing distance information from either station.",
    reference: "TP 690 Section 4 - En Route Navigation, Use of Radio Aids to Determine Position",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A single VOR radial combined with a DME distance from the same (or a co-located) station gives",
    options: [
      "a direct two-dimensional position fix, since the radial defines a line and the DME distance defines a specific point along that line.",
      "only a rough position estimate, requiring at least three separate stations to produce a usable fix.",
      "altitude information only, with no lateral position information at all.",
      "a fix that is valid only while the aircraft is directly overhead the station.",
    ],
    answer: 0,
    explain:
      "A VOR radial alone only defines a line of position; adding a DME distance from a co-located (or the same) facility pinpoints exactly where along that radial the aircraft is, giving a complete position fix from a single VOR/DME facility rather than needing two separate stations as a cross-radial fix does.",
    reference: "TP 690 Section 4 - En Route Navigation, Use of Radio Aids to Determine Position",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "RNAV (area navigation) waypoints allow a route to be flown that",
    options: [
      "connects defined geographic points, which need not be located at, or overflown directly above, a ground-based navigation aid.",
      "must pass directly over a VOR, NDB, or other ground-based navaid at every waypoint, exactly like a conventional airway.",
      "cannot be entered into or displayed by an FMS, and must be flown by dead reckoning alone.",
      "is usable only within radar coverage, and becomes invalid the moment radar contact is lost.",
    ],
    answer: 0,
    explain:
      "RNAV's defining advantage over conventional (ground-navaid-based) routes is that its waypoints are defined by coordinates and can be placed wherever is operationally useful, without requiring a ground station to actually be located there -- which is what allows more direct routings than the old 'station to station' airway structure permitted.",
    reference: "TP 690 Section 4 - En Route Navigation, RNAV Waypoints and Position Plotting",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "In areas where a magnetic compass becomes unreliable due to weak or erratic magnetic dip (such as near the magnetic poles), pilots typically navigate instead by",
    options: [
      "using a free (unslaved) directional gyro referenced periodically to true or grid north, rather than relying on magnetic heading.",
      "disregarding all heading references entirely and navigating by dead reckoning distance alone.",
      "relying exclusively on ADF bearings, since ADF becomes more accurate as magnetic dip increases.",
      "increasing reliance on the magnetic compass, since its errors become smaller, not larger, near the magnetic poles.",
    ],
    answer: 0,
    explain:
      "Near the magnetic poles, the weak horizontal component of the Earth's magnetic field makes a magnetic compass sluggish and unreliable (large dip angle, small horizontal force to align the compass card). Grid navigation techniques instead use a free gyro, periodically checked against true or grid north (a fixed reference grid overlaid on polar charts), to provide a stable heading reference where the magnetic compass can't be trusted.",
    reference: "TP 690 Section 4 - En Route Navigation, Gyro Steering Techniques in Areas of Compass Unreliability",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Maintaining an accurate en route flight log during a flight primarily supports",
    options: [
      "ongoing situational awareness of position, fuel status, and progress against plan, and provides a record useful for search and rescue if the flight becomes overdue.",
      "compliance with a requirement that applies only to VFR flights, never to IFR flights.",
      "the aircraft's weight and balance calculation, which must be recalculated at every waypoint.",
      "a purely historical record with no operational use during the flight itself.",
    ],
    answer: 0,
    explain:
      "A flight log recording times, positions, headings, and fuel at each waypoint gives the crew a running check on whether the flight is proceeding as planned (fuel burn, groundspeed, ETA trends) and, if the flight fails to arrive or report, gives searchers a documented last-known progress to work from -- it's an active operational tool, not just a record kept for its own sake.",
    reference: "TP 690 Section 4 - En Route Navigation, Maintaining Flight Log",
  },
];
