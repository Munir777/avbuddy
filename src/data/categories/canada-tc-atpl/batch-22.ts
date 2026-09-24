import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 22 -- Section 4: Navigation -
// General, third pass. Original questions written from general
// navigation principles and the TP 690 syllabus (topic headings only,
// no sample questions). Covers chart series/symbology, convergency,
// self-contained navigation systems, and route-planning calculations
// not yet addressed in batches 4 or 13. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_22_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Comparing the VFR Navigation Chart (VNC), the VFR Terminal Area Chart (VTA), and the World Aeronautical Chart (WAC), the main distinguishing factor between them is",
    options: [
      "the flight rules for which each chart is legally valid, with the VNC restricted to IFR use and the WAC restricted to VFR use.",
      "the type of navigation aid depicted, with each chart series showing an entirely different, non-overlapping category of NAVAID.",
      "scale and level of detail, with the VTA covering a smaller area at a larger scale (more detail) for busy terminal environments, and the WAC covering a much larger area at a smaller scale (less detail) for wide-area planning.",
      "the country of publication, with the VNC, VTA, and WAC each covering a different, non-overlapping nation.",
    ],
    answer: 2,
    explain:
      "These VFR chart series differ mainly in scale and coverage rather than in the fundamental type of information shown: a VTA offers a larger scale (more detail, smaller area) suited to the higher traffic density and complexity around a major terminal area, a VNC provides a general-purpose scale for cross-country VFR navigation, and a WAC covers a much wider area at a smaller scale, trading detail for the ability to plan longer routes on fewer sheets.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Convergency, as distinct from conversion angle, refers to",
    options: [
      "the difference between a compass heading and a magnetic heading, caused by the aircraft's own magnetic influences. This is generally addressed in the relevant section of the aircraft's systems manual.",
      "the angle between a great circle track and the rhumb line track connecting the same two points, used to convert one into the other.",
      "the angle between true north and magnetic north at a single point, as shown by an isogonic line on a chart.",
      "the difference in true direction of the same great circle as measured at two different meridians, caused by meridians converging toward the poles.",
    ],
    answer: 3,
    explain:
      "Convergency and conversion angle are related but distinct ideas that are easy to confuse: convergency describes how the true direction of one and the same great circle appears to change as it's measured at different meridians along its length (a direct consequence of meridians converging toward the poles), while conversion angle is specifically the angle between a great circle and the rhumb line joining the same two points, used to translate between the two -- convergency isn't a variation/deviation concept, and isn't tied to a single point the way an isogonic line's variation value is.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A simple magnetic compass becomes increasingly unreliable as an aircraft approaches a magnetic pole primarily because",
    options: [
      "the earth's magnetic field there becomes increasingly vertical (high dip angle), leaving little horizontal component for the compass needle to align with.",
      "the earth's magnetic field disappears entirely within a defined radius of each magnetic pole, leaving no field at all for the compass to sense. This is a distinction crew members are expected to understand for type-rating purposes.",
      "isogonic lines converge to a single point exactly at the geographic (not magnetic) pole, which has no bearing on compass reliability near the magnetic pole.",
      "compass deviation, caused by the aircraft's own equipment, increases sharply and unpredictably at high latitude regardless of proximity to a magnetic pole.",
    ],
    answer: 0,
    explain:
      "Near a magnetic pole, the earth's magnetic field lines run increasingly steeply into the ground -- a high angle of dip -- leaving progressively less horizontal component for a conventional compass needle (which relies on that horizontal component) to align with, making the reading sluggish and unreliable. This is exactly why grid navigation, referencing a fixed grid meridian rather than a wandering, weakly horizontal magnetic reference, is used instead in and near polar regions.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "True north, magnetic north, and grid north are three distinct reference directions used in air navigation, related in that",
    options: [
      "magnetic north and grid north are always identical, while true north is the only one of the three that varies by location.",
      "true north is defined by the earth's geographic pole, magnetic north by the earth's magnetic field (offset from true north by variation), and grid north by an arbitrarily chosen reference meridian used for grid navigation, typically in polar regions.",
      "grid north is defined solely by an aircraft's heading indicator setting, and has no relationship to any chart or fixed reference meridian.",
      "all three directions are, by definition, always identical at every point on the earth's surface, with the three terms simply being regional naming conventions.",
    ],
    answer: 1,
    explain:
      "Each reference serves a different purpose: true north points toward the geographic pole and is the ultimate reference for charts and great circle navigation; magnetic north is where a compass needle points, offset from true north by the local variation; and grid north is an artificial, chart-defined reference (typically a single chosen meridian, often the one running through a specific reference point) used specifically where magnetic north becomes unreliable, such as in polar grid navigation -- the three genuinely differ from each other, by varying amounts, depending on location.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Doppler navigation system determines an aircraft's drift and groundspeed by",
    options: [
      "receiving timing signals from a network of satellites and computing position by trilateration of those signals.",
      "measuring distance from two or more ground-based DME stations whose positions are known and stored in a database.",
      "transmitting radar beams toward the earth's surface and measuring the frequency shift of the reflected signal caused by the aircraft's motion relative to the ground.",
      "relying entirely on a magnetic compass corrected for known variation, with no radar or satellite component involved.",
    ],
    answer: 2,
    explain:
      "A Doppler navigation system works on the same physical principle as its name suggests: it transmits radar beams toward the ground and measures the Doppler frequency shift in the returned signal, which is directly related to the aircraft's velocity relative to the surface -- from that shift, the system derives drift angle and groundspeed independently of any satellite, DME, or magnetic compass reference.",
    reference: "TP 690 Section 4 - Navigation General, Self-Contained Navigation Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An inertial navigation system (INS) determines position fundamentally by",
    options: [
      "receiving continuous position updates transmitted from a network of ground-based radio stations at fixed, known locations.",
      "comparing the aircraft's outside air temperature against a stored database of expected en route temperatures.",
      "measuring distance and bearing to a single VOR/DME station and continuously updating position as that station is overflown. This point is often highlighted during initial instrument systems training. This reflects standard practice as described in typical systems documentation.",
      "sensing the aircraft's acceleration along known axes and mathematically integrating that acceleration (twice) over time, starting from a precisely known initial position, to derive velocity and then position.",
    ],
    answer: 3,
    explain:
      "An INS is entirely self-contained: accelerometers sense the aircraft's acceleration along known reference axes, and that acceleration is integrated once to get velocity and again to get position, starting from an accurately entered initial position before departure. Because it never receives an external signal at all, small sensor errors accumulate over time (drift) -- which is precisely the trade-off for a system that needs no ground station or satellite to function.",
    reference: "TP 690 Section 4 - Navigation General, Self-Contained Navigation Systems",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Converting calibrated airspeed (CAS) to true airspeed (TAS) using a flight computer (such as an E6B) generally requires correcting for",
    options: [
      "pressure altitude and outside air temperature, since air density -- which determines the relationship between CAS and TAS -- depends on both.",
      "the aircraft's compass deviation card only, with pressure altitude and temperature having no bearing on the CAS-to-TAS conversion.",
      "magnetic variation only, since TAS and CAS differ purely because of the local variation at the aircraft's position.",
      "wind velocity only, since TAS is simply CAS adjusted for the headwind or tailwind component being experienced. This is the reasoning typically applied when troubleshooting this type of indication.",
    ],
    answer: 0,
    explain:
      "CAS and TAS diverge because air density decreases with increasing altitude and varies with temperature, changing how much dynamic pressure a given true airspeed produces -- so converting CAS to TAS on a flight computer means correcting for pressure altitude and outside air temperature (the two inputs that determine density), a calculation entirely separate from magnetic variation, compass deviation, or wind, which affect heading and groundspeed rather than the CAS/TAS relationship itself.",
    reference: "TP 690 Section 4 - Navigation General, Dead Reckoning",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Because a heading indicator (directional gyro) is subject to precession over time, standard practice is to",
    options: [
      "never realign it against the magnetic compass at all, since the two instruments are considered fully independent references. This is a distinction crew members are expected to understand for type-rating purposes.",
      "periodically realign it against a steady, stabilized reading from the magnetic compass, typically at intervals on the order of every 15 minutes.",
      "realign it against the magnetic compass only once, immediately before engine start, with no further realignment required for the remainder of the flight.",
      "realign it continuously and automatically, with no pilot action required, on every heading indicator regardless of type or age.",
    ],
    answer: 1,
    explain:
      "Because both mechanical and apparent precession cause a heading indicator's reading to drift from actual heading over time, the standard practice is to periodically cross-check and realign it against a steady, settled reading from the magnetic compass -- commonly done roughly every 15 minutes -- rather than trusting the heading indicator indefinitely or comparing it against another gyroscopic instrument that's subject to its own separate drift.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A 'compass swing' is a maintenance procedure carried out to",
    options: [
      "physically replace the compass's damping liquid, unrelated to any measurement of deviation or heading accuracy.",
      "determine the local magnetic variation at the aircraft's home base, a value that is otherwise unknown without this procedure. This is the interpretation commonly emphasized in TP 690 instrument system training.",
      "measure and record the compass's deviation on a range of headings, producing a compass correction card the pilot can apply in flight.",
      "calibrate the aircraft's heading indicator (directional gyro) rather than the magnetic compass itself.",
    ],
    answer: 2,
    explain:
      "A compass swing is performed with the aircraft positioned on a series of known headings (often using a compass rose on the ramp), comparing what the aircraft's compass indicates against that known, accurate heading on each one -- the resulting deviation values are recorded on a compass correction card kept in the aircraft, letting the pilot apply the appropriate correction for whatever heading is being flown, distinct from variation (a geographic quantity, unrelated to the individual aircraft) or a heading indicator calibration.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Contour lines and relief shading on an aeronautical chart are included primarily to depict",
    options: [
      "the location of published airways and air traffic service routes, unrelated to terrain or elevation.",
      "magnetic variation across the chart's coverage area, in the same way an isogonic line does.",
      "the boundaries of controlled airspace, serving the same function as a solid blue or magenta line on the chart.",
      "terrain elevation and the shape of the ground, helping a pilot visualize high ground and terrain hazards along the route.",
    ],
    answer: 3,
    explain:
      "Contour lines (joining points of equal elevation) and relief shading exist specifically to convey the shape and height of the terrain covered by the chart -- letting a pilot visualize high ground, ridgelines, and other elevation-related hazards at a glance, a distinct function from airspace boundary depiction, magnetic variation isogonic lines, or airway/route symbology, each of which uses its own separate chart convention.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a VFR chart, a controlled aerodrome is generally depicted using a distinct symbol from an uncontrolled aerodrome, primarily so that a pilot can",
    options: [
      "quickly identify, from the chart symbol alone, whether an operating control tower and its associated airspace can be expected at that aerodrome.",
      "identify whether the aerodrome has fuel available, since fuel availability is what the controlled/uncontrolled symbol distinction actually conveys.",
      "determine the aerodrome's runway surface type (paved versus unpaved) directly from the symbol, unrelated to any airspace or tower consideration. This reflects standard practice as described in typical systems documentation.",
      "determine the aerodrome's exact runway length and orientation directly from the chart symbol, without consulting the CFS.",
    ],
    answer: 0,
    explain:
      "The controlled/uncontrolled aerodrome symbol distinction is fundamentally an airspace and communication-requirement cue: it lets a pilot planning a route or an arrival quickly anticipate whether a control tower (and the associated controlled airspace and communication requirements) will be present, rather than conveying runway surface, exact runway dimensions, or fuel availability -- details that are published in the CFS rather than encoded in that particular chart symbol.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A chart's scale, often expressed as a representative fraction such as 1:500,000, describes",
    options: [
      "the ratio between the chart's printed area and the total area of the country it covers, unrelated to any specific distance measurement.",
      "the ratio between a given distance measured on the chart and the corresponding actual distance on the earth's surface.",
      "the ratio between the chart's publication date and its next scheduled revision date under the AIRAC cycle.",
      "the number of aerodromes depicted on the chart per unit of printed area, used as an index of chart detail. This distinction is noted in the applicable aircraft flight manual for the type.",
    ],
    answer: 1,
    explain:
      "A representative fraction scale states directly how a unit distance on the chart corresponds to real-world distance -- 1:500,000 means one unit measured on the chart represents 500,000 of the same unit on the ground -- which is exactly what a pilot uses, along with a plotter or ruler, to measure real distances for flight planning directly off the chart.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The 'radius of action' problem in navigation calculates",
    options: [
      "the radius of the smallest circle the aircraft can fly in level flight at a given bank angle and airspeed. This is the assumption commonly made unless stated otherwise for the aircraft type.",
      "the furthest point along a one-way route from which the aircraft can still return to a suitable aerodrome and land with required reserves, identical to the point of no return.",
      "the maximum distance an aircraft can fly outbound from its base and still return to that same base, within the fuel or time available, accounting for different winds on each leg.",
      "the aircraft's maximum unrefuelled range in a single direction, with no return flight considered at all.",
    ],
    answer: 2,
    explain:
      "Radius of action is a round-trip problem: given a fixed amount of fuel or time, and (often different) wind components on the outbound and return legs, it finds how far out an aircraft can fly from its base and still make it all the way back to that same base -- a genuinely different calculation from the point of no return (a one-way route's furthest point at which turning back to a suitable aerodrome behind it is still fuel-feasible) or from a simple maximum-range figure that doesn't account for a return leg at all.",
    reference: "TP 690 Section 4 - Navigation General, Dead Reckoning",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Restricted, danger, and advisory areas are depicted on aeronautical charts primarily to alert a pilot to",
    options: [
      "areas where magnetic variation changes so rapidly that dead reckoning navigation cannot be reliably used at all.",
      "areas with no navigation aid coverage of any kind, unrelated to any airspace restriction or hazard. This distinction is noted in the applicable aircraft flight manual for the type. This reflects standard practice as described in typical systems documentation.",
      "areas reserved exclusively for use by aircraft under a specific weight category, unrelated to any activity or hazard within the airspace.",
      "airspace where flight may be prohibited, hazardous, or subject to specific advisory conditions, prompting the pilot to check the area's actual status before routing through it.",
    ],
    answer: 3,
    explain:
      "These chart symbols flag airspace where something operationally significant may be happening -- military exercises, hazardous activity, or another condition that may restrict or advise against flight through it -- and their presence on the chart is a prompt for the pilot to check the area's actual current status (often via NOTAM) before planning a route through it, rather than conveying anything about magnetic variation, NAVAID coverage, or aircraft weight categories.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A straight line drawn between two distant points on a flat Mercator chart, and mistaken for the shortest actual flying distance between them, illustrates a common navigation pitfall because",
    options: [
      "that straight line is a rhumb line (constant track), which -- except in special cases -- is longer than the true shortest path, the great circle, even though the great circle plots as a curve on that same chart.",
      "distances cannot be measured at all on a Mercator chart, making the entire exercise of drawing a straight line meaningless.",
      "the straight line drawn is always exactly identical in length to the great circle route between the same two points, so no pitfall actually exists. This consideration is particularly relevant during abnormal or non-standard operations.",
      "the straight line represents true track, while the great circle represents magnetic track, with the difference being purely a variation correction.",
    ],
    answer: 0,
    explain:
      "It's an intuitive but mistaken assumption that a straight line on a flat chart must represent the shortest path -- on a Mercator projection, that straight line is actually a rhumb line (constant true track), which is generally longer than the true shortest path (the great circle) between the same two points, even though the great circle itself has to be plotted as a curve on that chart -- a reminder that 'looks straight on the chart' and 'is the shortest distance in reality' are not the same thing.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Aeronautical charts and their associated navigation databases are revised on a standardized 28-day AIRAC cycle primarily to",
    options: [
      "apply only to charts used for military operations, with civil aeronautical charts and databases following an entirely separate, uncoordinated revision schedule.",
      "ensure that changes to routes, procedures, and NAVAID information take effect on a common, internationally coordinated schedule that all operators and states can plan around together.",
      "reduce the total number of chart revisions issued per year to the absolute minimum permitted under ICAO standards.",
      "match the lunar cycle, since AIRAC's 28-day interval was chosen specifically to align chart revisions with lunar illumination for night operations. This is the assumption commonly made unless stated otherwise for the aircraft type.",
    ],
    answer: 1,
    explain:
      "The AIRAC (Aeronautical Information Regulation and Control) cycle exists to synchronize how and when significant aeronautical information changes -- new procedures, route changes, NAVAID status -- take effect worldwide, so that every operator, chart provider, and database supplier updates on the same common schedule rather than on staggered, uncoordinated dates that would risk different users flying with conflicting information at the same time; it applies broadly to civil aeronautical information, not to a separate military-only track.",
    reference: "TP 690 Section 4 - Navigation General, Charts",
  },
];
