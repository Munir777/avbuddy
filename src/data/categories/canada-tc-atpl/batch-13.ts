import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 13 -- Section 4: Navigation -
// General, second pass. Original questions written from general
// navigation principles, the CARs, and the TC AIM (COM 5-6, PBN/RNP),
// plus the TP 690 syllabus (topic headings only, no sample questions).
// Covers variation/deviation, chart projections, distance/departure
// calculations, and RNAV/RNP concepts not yet addressed in batch 4.
// Not transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_13_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "True heading is corrected for variation to obtain magnetic heading, and magnetic heading is then corrected for deviation to obtain compass heading. Variation and deviation are best distinguished as",
    options: [
      "variation and deviation both refer to the same angle, and the two terms are simply used interchangeably depending on the chart in use.",
      "variation is the angle between true and magnetic north, caused by the earth's magnetic field; deviation is the angle between magnetic and compass indications, caused by the aircraft's own magnetic influences.",
      "variation applies only to compass headings, and deviation applies only to true headings; neither is used to correct the other.",
      "variation is caused by the aircraft's own instruments, while deviation is caused by the earth's magnetic field and varies by geographic location.",
    ],
    answer: 1,
    explain:
      "Variation is a geographic quantity -- the angle between true north and magnetic north at a given location, driven by the earth's magnetic field and charted accordingly. Deviation is aircraft-specific -- the further error introduced by the magnetic influence of the aircraft's own structure and equipment on its compass, which is why it's recorded on a compass correction card unique to that airframe rather than on a chart.",
    reference: "TP 690 Section 4 - Navigation General, Variation and Deviation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On an aeronautical chart, lines joining points of equal magnetic variation are called isogonic lines. The isogonic line along which variation is zero -- where true and magnetic north coincide -- is called the",
    options: [
      "rhumb line.",
      "meridian of convergence.",
      "agonic line.",
      "isoclinic line.",
    ],
    answer: 2,
    explain:
      "Isogonic lines connect points of equal variation; the special case where variation is exactly zero (true and magnetic north align) is specifically named the agonic line -- distinguishing it from an isoclinic line (equal magnetic dip, a different property entirely) or a rhumb line (a line of constant track, unrelated to variation).",
    reference: "TP 690 Section 4 - Navigation General, Variation and Deviation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "One minute of latitude is used as the standard basis for measuring distance (one nautical mile) on a chart, rather than one minute of longitude, because",
    options: [
      "it is purely a historical naming convention with no geometric basis; either scale would work equally well.",
      "longitude cannot be measured on a chart at all; only latitude scales are printed on aeronautical charts.",
      "one minute of longitude is always exactly twice the length of one minute of latitude, making latitude the more convenient round number.",
      "meridians of longitude converge toward the poles, so the distance represented by one minute of longitude shrinks with increasing latitude, while meridians of latitude remain a constant distance apart everywhere.",
    ],
    answer: 3,
    explain:
      "Meridians (lines of longitude) converge at the poles, so the ground distance spanned by one minute of longitude shrinks as latitude increases -- it is not a constant unit. Parallels of latitude, by contrast, are (approximately) equally spaced from equator to pole, so one minute of latitude reliably represents one nautical mile anywhere on the chart, making it the practical, constant distance reference.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The departure -- the distance in nautical miles corresponding to a given change of longitude -- between two points at the same latitude is calculated as",
    options: [
      "the change of longitude, expressed in minutes of arc, multiplied by the cosine of the latitude.",
      "the change of longitude, expressed in minutes of arc, with no adjustment for latitude at all.",
      "the change of longitude, expressed in degrees, multiplied directly by 60 with no trigonometric adjustment.",
      "the change of longitude, expressed in minutes of arc, divided by the cosine of the latitude.",
    ],
    answer: 0,
    explain:
      "Because meridians converge toward the poles, the ground distance spanned by a given change of longitude shrinks with increasing latitude -- captured by multiplying the change of longitude (in minutes) by the cosine of the latitude. At the equator (cos 0 degree = 1) departure equals the raw change of longitude in minutes; toward the poles, cosine shrinks toward zero and so does the departure for the same change of longitude.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Drift angle, as distinct from wind correction angle, is best defined as",
    options: [
      "the angular difference between true north and magnetic north at the aircraft's present position.",
      "the angular difference between the aircraft's heading and its actual track over the ground, resulting from the wind's effect.",
      "the difference between indicated airspeed and true airspeed at the aircraft's cruising altitude.",
      "the angle between the aircraft's heading and the runway centreline during a crosswind takeoff roll.",
    ],
    answer: 1,
    explain:
      "Drift angle is measured after the fact, between the heading actually flown and the track the aircraft actually makes good over the ground -- it's the observed consequence of wind. Wind correction angle, by contrast, is the angle applied to the heading before the fact, in an attempt to counteract forecast wind and achieve a desired track.",
    reference: "TP 690 Section 4 - Navigation General, Wind Velocity",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The 1-in-60 rule is a rule of thumb used in air navigation to",
    options: [
      "convert a magnetic heading to a compass heading whenever deviation exceeds 1 degree for every 60 nautical miles flown.",
      "determine the minimum fuel reserve required for a flight of a given duration, expressed as a fraction of total trip fuel.",
      "relate track error in nautical miles, distance travelled, and the angular correction needed to regain the intended track, using the approximation that 1 degree of angular error corresponds to roughly 1 NM of displacement per 60 NM travelled.",
      "calculate true airspeed from indicated airspeed by adding 1% for every 60 ft of altitude above sea level.",
    ],
    answer: 2,
    explain:
      "The 1-in-60 rule is a small-angle approximation: over a distance of 60 NM, 1 NM of lateral displacement corresponds to roughly a 1-degree angular error. It lets a pilot quickly estimate, from an observed track error and the distance flown so far, both the angular correction needed to regain track and the further correction needed to also converge on the original destination -- all without formal trigonometry.",
    reference: "TP 690 Section 4 - Navigation General, Dead Reckoning",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a Mercator projection, a rhumb line (a line of constant true track) is represented as",
    options: [
      "a curved line that bends toward the nearer pole, the same as it would on a Lambert Conformal projection.",
      "not representable at all; Mercator charts can only be used to plot great circle tracks.",
      "a straight line only near the equator, becoming increasingly curved as latitude increases toward either pole.",
      "a straight line, which is precisely why the projection was historically favoured for plotting a constant-heading course.",
    ],
    answer: 3,
    explain:
      "The Mercator projection's defining, historically valuable property is that any line of constant true track (a rhumb line) plots as a perfectly straight line on the chart -- which is exactly why it was long favoured for maritime and early aeronautical navigation, even though it distorts area and scale increasingly toward the poles as a trade-off.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a Lambert Conformal Conic chart constructed with two standard parallels, a great circle track between two points",
    options: [
      "appears very close to a straight line, with only slight curvature, which is a major reason the projection is favoured for en route navigation charts.",
      "appears as a pronounced curve bulging strongly toward the equator, making it impractical to plot directly on the chart.",
      "cannot be plotted on a Lambert Conformal chart at all; only rhumb lines can be represented.",
      "appears identical in every respect to how it would be plotted on a Mercator projection.",
    ],
    answer: 0,
    explain:
      "The Lambert Conformal Conic projection, built around two standard parallels, keeps scale distortion low across the mid-latitude band it's designed for and renders a great circle track as very nearly a straight line -- close enough that pilots and navigators can plot and fly a great circle route on it directly, without the growing distortion a Mercator chart would introduce at the same latitudes.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For navigation charts covering polar regions, a polar stereographic projection is generally preferred over a Lambert Conformal or Mercator projection because",
    options: [
      "polar stereographic charts eliminate the need for grid navigation, which is otherwise required near the magnetic poles.",
      "meridians converge sharply and rapidly near the poles, which the Lambert Conformal and Mercator projections handle poorly (Mercator becomes unusable at the pole itself), while polar stereographic charts remain workable and reasonably accurate there.",
      "polar stereographic charts are the only projection on which a rhumb line can be plotted as a straight line, anywhere on earth.",
      "magnetic variation does not exist in polar regions, removing the need for any specialized polar projection.",
    ],
    answer: 1,
    explain:
      "Mercator projections break down entirely at the poles (scale distortion becomes infinite), and Lambert Conformal charts built for mid-latitude standard parallels distort badly well before reaching a pole. A polar stereographic projection, centred on the pole itself, handles the rapid convergence of meridians there gracefully -- which is why it's the standard choice for polar charts, and why grid navigation (a separate technique, still needed because of how rapidly true north changes direction near the poles) is typically used together with it.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Comparing the great circle track and the rhumb line track between the same two points (excluding points on the equator or on the same meridian, where the two coincide), the great circle distance is",
    options: [
      "unpredictably longer or shorter depending on which hemisphere the flight is conducted in.",
      "identical to the rhumb line distance in all cases; only the plotted shape on the chart differs, not the distance flown.",
      "always the shorter (or, in the excluded cases, equal) of the two, since a great circle is by definition the shortest path between two points on a sphere.",
      "always the longer of the two, since a great circle constantly changes track and therefore covers more ground.",
    ],
    answer: 2,
    explain:
      "A great circle is, by definition, the shortest path between two points on a sphere's surface -- so except in the special cases where the great circle and rhumb line coincide exactly (along the equator or along a single meridian), the great circle distance is always the shorter of the two, even though the constant-track rhumb line is often simpler to fly.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The conversion angle at a given point along a route is the angle between the great circle track and the rhumb line track connecting the same two points, and is used to",
    options: [
      "convert a VOR radial into the equivalent NDB relative bearing for cross-checking purposes.",
      "convert indicated airspeed into true airspeed for high-altitude cruise segments.",
      "convert true track into magnetic track, serving the same function as magnetic variation.",
      "convert a great circle initial track (as measured off a chart or computed) into the equivalent constant rhumb line track that can be flown, or vice versa.",
    ],
    answer: 3,
    explain:
      "Because a great circle track continuously changes as an aircraft travels along it, while a rhumb line holds a single constant track, the conversion angle exists specifically to bridge the two: applying it to a great circle's initial track gives the equivalent constant rhumb line track (roughly practical to fly), and it has nothing to do with magnetic variation, airspeed corrections, or radio-navigation bearings.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A DME-DME (RHO-RHO) area navigation system determines aircraft position by",
    options: [
      "measuring distance from two or more DME ground stations whose locations are held in the system's database, and computing a positional fix from the intersection of those distance measurements.",
      "receiving timing signals from GNSS satellites and computing position by trilateration of those signals alone.",
      "measuring the bearing to a single VOR station and combining it with a separately measured distance from the same station.",
      "relying entirely on gyroscopic dead reckoning from a known starting position, with no external radio signal used at all.",
    ],
    answer: 0,
    explain:
      "As its RHO-RHO name suggests (rho denoting distance/range), a DME-DME system works purely on distances: it measures slant range from two or more DME facilities whose positions it already knows, and the intersection of those distance arcs fixes the aircraft's position -- no bearing measurement, satellite signal, or dead reckoning is involved in the fix itself.",
    reference: "TC AIM COM 5.13",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A VOR radial, as displayed to and used by a pilot, is defined as",
    options: [
      "a magnetic bearing measured from the aircraft's present position TO the VOR station.",
      "a magnetic bearing measured outward FROM the VOR station, regardless of the aircraft's position relative to that bearing line.",
      "whichever of the two reciprocal bearings the pilot has most recently selected on the OBS, with no fixed convention either way.",
      "a true (not magnetic) bearing measured outward from the VOR station.",
    ],
    answer: 1,
    explain:
      "A radial is always referenced outward from the station itself, on a magnetic bearing -- so 'inbound on the 270 radial' still means the aircraft is positioned along the line running magnetic 270 degrees FROM the VOR, even though the aircraft is flying toward the station on that leg (a heading closer to 090 degrees).",
    reference: "TP 690 Section 4 - Navigation General, Radio Navigation Aids",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Before relying on a ground-based NAVAID such as a VOR or NDB for navigation, a pilot should",
    options: [
      "confirm its identification only if flying IFR; VFR flights are exempt from any NAVAID identification requirement.",
      "cross-check its published frequency against the current METAR for the nearest aerodrome, since NAVAID frequencies can change with weather conditions.",
      "monitor its Morse code identification to confirm the correct station is tuned and that it is not flagged out of service or under maintenance.",
      "wait for an ATC clearance explicitly authorizing use of that specific NAVAID before tuning it.",
    ],
    answer: 2,
    explain:
      "Monitoring a NAVAID's Morse code identifier is the basic safeguard against navigating on the wrong station (interference, incorrect frequency) or on a station that has been taken out of service or flagged unreliable (often signalled by the identifier being removed or replaced with a maintenance code) -- a check that applies regardless of whether the flight is being conducted VFR or IFR.",
    reference: "TP 690 Section 4 - Navigation General, Radio Navigation Aids",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Under the performance-based navigation (PBN) concept, the key functional difference between a basic RNAV system and an RNP (required navigation performance) system is that",
    options: [
      "RNP is a purely lateral guidance specification, while RNAV additionally provides vertical guidance that RNP cannot.",
      "RNP systems use only satellite-based positioning, while RNAV systems use only ground-based NAVAIDs, with no overlap between the two.",
      "there is no functional difference; RNP and RNAV are two names for exactly the same avionics capability.",
      "an RNP system adds on-board monitoring and alerting of its own achieved navigation performance, so the flight crew is warned if the required accuracy cannot be met; basic RNAV has no such self-monitoring function.",
    ],
    answer: 3,
    explain:
      "Both RNAV and RNP allow flight on a desired path using available navigation aids, but RNP adds a specific extra requirement: the on-board system must monitor, in real time, its own actual navigation performance against what's required for the operation, and alert the crew if that performance can't be met -- giving the crew a chance to intervene, a functional capability that plain RNAV does not include.",
    reference: "TC AIM COM 6.1",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "During a dead-reckoning leg, the actual groundspeed achieved (from a fix) turns out to be noticeably different from the flight-planned groundspeed. The appropriate response is to",
    options: [
      "revise the estimated time of arrival and remaining fuel calculations for the rest of the flight using the newly observed actual groundspeed, rather than continuing to rely on the original flight-planned figure.",
      "continue using the original flight-planned groundspeed for the rest of the flight, since a single fix is not considered reliable enough to justify a revision.",
      "ignore the discrepancy entirely provided the aircraft remains on its planned track, since groundspeed has no bearing on fuel or time calculations.",
      "reduce power to force the aircraft back to the flight-planned groundspeed, regardless of what that does to the planned fuel flow.",
    ],
    answer: 0,
    explain:
      "A flight-planned groundspeed is only an estimate, built on forecast wind; an actual fix gives real, measured performance. Once that measured groundspeed is available, it -- not the original forecast-based figure -- is what should drive updated ETA and fuel-remaining calculations for the rest of the flight, since continuing to plan around a superseded estimate risks an inaccurate picture of fuel and timing.",
    reference: "TP 690 Section 4 - Navigation General, Dead Reckoning",
  },
];
