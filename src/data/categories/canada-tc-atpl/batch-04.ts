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
      "a position fixed by radio navigation aids or GPS, independent of any dead reckoning calculation or wind assumption.",
      "the position at which the aircraft would land if all engines failed at that instant, assuming best glide speed and no wind drift.",
      "the position obtained by applying only heading and true airspeed from the last known position, with no allowance made for wind.",
      "the position obtained by applying heading, true airspeed, and forecast or estimated wind from the last known position.",
    ],
    answer: 2,
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
      "a track of constant true course maintained along its entire length.",
      "the shortest distance between the two points only when they happen to share the same latitude.",
      "a track that crosses every meridian it encounters at the same angle.",
      "the shortest distance between the two points, along the surface of the Earth.",
    ],
    answer: 3,
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
      "crosses every meridian at the same angle, giving a constant true course, but is a longer route than the great circle.",
      "crosses meridians at continuously changing angles throughout its entire length, exactly like a great circle track supposedly does.",
      "always represents the shortest distance between any two points on the Earth, unlike the great circle track.",
      "can only be flown at or very near the equator, and is considered undefined at all other latitudes.",
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
      "it is used exclusively for charts covering polar regions near the poles, where all other common map projections are said to fail entirely and become unusable.",
      "it is conformal (preserving shape and angle locally), and a great circle route approximates a straight line over the chart's usual range of use.",
      "it preserves distance exactly everywhere on the chart, with absolutely no scale variation at any latitude or longitude.",
      "it is the only map projection in which a rhumb line of constant true course appears as a perfectly straight line.",
    ],
    answer: 1,
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
      "not a cylindrical projection at all, but instead a conic projection that is tangent to a single chosen parallel of latitude rather than a meridian.",
      "tangent along the equator only, making it identical to a standard Mercator projection in every respect and every use.",
      "tangent along a chosen meridian rather than the equator, giving better scale accuracy near that meridian, even at higher latitudes.",
      "used only for charts depicting equatorial regions, and considered unusable at any higher latitude at all.",
    ],
    answer: 2,
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
      "identical in content to a low altitude chart in every respect, differing only in its printed colour scheme and cover page layout.",
      "used exclusively for VFR navigation above 18,000 feet, with no application to IFR flight planning at all.",
      "more detailed than a low altitude chart, showing every ground feature that would be visible from high altitude.",
      "less cluttered with ground detail, depicting jet routes and high-level airways for IFR use, at a different chart scale.",
    ],
    answer: 3,
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
      "continuously in real time over an onboard satellite data connection while the aircraft is in flight.",
      "only once, at the time of aircraft delivery, and are never revised or updated at any point afterward.",
      "only when the aircraft manufacturer chooses to issue a service bulletin, with no fixed schedule at all.",
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
      "a fifteen-minute difference in local mean time between one zone and the next.",
      "a one-hour difference in local mean time between one time zone and the next.",
      "no fixed relationship at all, since time zones follow political boundaries, not longitude.",
      "a four-hour difference in local mean time between adjacent time zones.",
    ],
    answer: 1,
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
      "after groundspeed has already been calculated and finalized, and has no effect on groundspeed itself once applied.",
      "away from the wind, offsetting the nose in the same direction that the wind happens to be blowing toward at the time.",
      "into the wind, offsetting the nose toward the direction the wind is coming from, so the ground track matches the intended course.",
      "only when the wind is a direct headwind or tailwind component, since crosswinds are commonly assumed to require no heading correction whatsoever.",
    ],
    answer: 2,
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
      "a fixed value that does not change at all, regardless of the wind actually encountered en route.",
      "the leg distance divided by true airspeed alone, regardless of any wind encountered en route.",
      "the leg distance multiplied directly by the groundspeed calculated for that particular leg.",
      "the leg distance divided by the groundspeed actually achieved for that particular leg.",
    ],
    answer: 3,
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
      "comparing the planned heading/TAS vector to the actual observed track and groundspeed, then solving for the wind vector accounting for the difference.",
      "reference to the altimeter setting alone, since pressure and wind are assumed to be directly and simply related at any single point.",
      "reading the outside air temperature and applying a fixed, published conversion table to derive an equivalent wind speed.",
      "measuring engine fuel flow rate in cruise, since fuel flow is assumed to vary directly and predictably with the headwind or tailwind component being encountered.",
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
      "using the difference in received signal strength between the two ground stations, rather than their radials, to compute an estimated position.",
      "plotting the radial from each of two VOR stations and taking the aircraft's position as their point of intersection.",
      "averaging the two stations' published geographic coordinates directly, without any reference to either station's radial.",
      "using only the DME distance from a single VOR station, with no radial information required from either station.",
    ],
    answer: 1,
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
      "altitude information only, providing no lateral or horizontal position information of any kind.",
      "a fix that is only considered valid while the aircraft is directly overhead the station itself.",
      "a direct two-dimensional position fix, since the radial defines a line and the DME distance pinpoints a point along it.",
      "only a rough position estimate at best, typically requiring at least three separate ground stations for a usable fix.",
    ],
    answer: 2,
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
      "must pass directly over a VOR, NDB, or other ground-based navaid at every waypoint, exactly like a conventional airway.",
      "cannot be entered into or displayed by a flight management system or GPS receiver at all, and must instead be flown by dead reckoning alone.",
      "is usable only within active radar coverage, and becomes entirely invalid the moment radar contact is lost.",
      "connects defined geographic points, which need not be located at, or overflown directly above, a ground-based navigation aid.",
    ],
    answer: 3,
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
      "relying exclusively on ADF bearings for heading guidance, since ADF accuracy is assumed to improve as magnetic dip increases.",
      "increasing reliance on the magnetic compass instead, since its errors are assumed to become smaller, not larger, near the magnetic poles.",
      "disregarding all heading references entirely and navigating only by dead reckoning distance, with no directional reference at all.",
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
      "compliance with a regulatory requirement that applies only to VFR flights, never to any IFR flight.",
      "ongoing situational awareness of position, fuel status, and progress against plan, plus a record useful for search and rescue if overdue.",
      "keeping a purely historical record with no operational use of any kind during the flight itself.",
      "the aircraft's weight and balance calculation, which must be recalculated at every single waypoint passed.",
    ],
    answer: 1,
    explain:
      "A flight log recording times, positions, headings, and fuel at each waypoint gives the crew a running check on whether the flight is proceeding as planned (fuel burn, groundspeed, ETA trends) and, if the flight fails to arrive or report, gives searchers a documented last-known progress to work from -- it's an active operational tool, not just a record kept for its own sake.",
    reference: "TP 690 Section 4 - En Route Navigation, Maintaining Flight Log",
  },
];
