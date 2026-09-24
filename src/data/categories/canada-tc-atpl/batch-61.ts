import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 61 -- Section 3: Navigation -
// General, seventh pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions), the TC AIM
// 2026-1, and general air navigation theory. Covers nautical and
// astronomical twilight, the QDR/QTE/QUJ Q-codes, the ADF loop/
// sense antenna combination, compass turning error (UNOS) and
// acceleration error (ANDS), the deviation correction card, Local
// Mean Time vs Zone Time, DMS vs decimal-degree coordinate
// notation, VOR/DME slant range error, GNSS Fault Detection and
// Exclusion (FDE) vs RAIM, Military Operating Areas, the VOR TO/
// FROM flag, the great circle vertex, the Maximum Elevation Figure
// (MEF), RNP containment values, and the three-bearing "cocked hat"
// fix -- topics not yet addressed in batches 4, 13, 22, 31, 41, or
// 51. Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_61_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Nautical twilight and astronomical twilight, as distinguished from civil twilight, refer to progressively later (in the evening) or earlier (in the morning) periods defined by the sun being",
    options: [
      "irrelevant to any angular position of the sun, and instead defined purely by a fixed clock time regardless of date or location.",
      "further above the horizon than civil twilight, making both nautical and astronomical twilight brighter periods than civil twilight.",
      "further below the horizon than the 6-degree threshold used for civil twilight -- nautical twilight extending to 12 degrees below the horizon, and astronomical twilight to 18 degrees -- with each successive stage generally darker than the one before it.",
      "at exactly the same angular position below the horizon in all three cases, with the three terms simply being regional naming variants for an identical period.",
    ],
    answer: 2,
    explain:
      "Civil, nautical, and astronomical twilight are successive periods defined by the sun's angular depression below the horizon: civil twilight ends when the sun is 6 degrees below the horizon, nautical twilight extends to 12 degrees below, and astronomical twilight extends to 18 degrees below, with sky illumination progressively decreasing through each successive stage.",
    reference: "TC AIM RAC/GEN -- Definitions",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Among the ADF/NDB Q-codes, QDR, QTE, and QUJ are used to express, respectively,",
    options: [
      "codes used exclusively for VOR navigation, with no application to ADF/NDB bearings at all.",
      "the magnetic bearing TO the station (QDR), the aircraft's current altitude (QTE), and the aircraft's current groundspeed (QUJ).",
      "three interchangeable ways of expressing the identical bearing TO the station, with no distinction in direction or reference (true vs magnetic) between them.",
      "the magnetic bearing FROM the station to the aircraft (QDR), the true bearing FROM the station to the aircraft (QTE), and the true bearing TO the station from the aircraft (QUJ).",
    ],
    answer: 3,
    explain:
      "QDR denotes the magnetic bearing of the aircraft from the station (i.e., FROM the station), QTE denotes the true bearing of the aircraft from the station, and QUJ denotes the true bearing TO the station from the aircraft -- complementing the more commonly used QDM (magnetic bearing TO the station), each code specifying a different combination of direction (to/from) and reference (true/magnetic).",
    reference: "TC AIM RAC -- Radio Navigation Q-Codes",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A traditional ADF receiver determines relative bearing to an NDB station by combining the signals from a loop antenna and a sense antenna, because",
    options: [
      "the loop antenna alone produces a figure-eight pattern ambiguous between two opposite bearings 180 degrees apart, and combining it with the sense antenna's signal produces a single cardioid pattern resolving which bearing is correct.",
      "the sense antenna alone is sufficient to determine a precise bearing, with the loop antenna serving no functional purpose other than as a mechanical mount.",
      "combining the two antennas is done purely to boost signal strength, with no effect whatsoever on bearing accuracy or ambiguity, a claim that overlooks the cardioid pattern's specific role in resolving the loop antenna's 180-degree ambiguity.",
      "the loop and sense antennas each independently receive signals from two entirely different NDB stations simultaneously, and their combination averages the two bearings.",
    ],
    answer: 0,
    explain:
      "A loop antenna alone produces a figure-eight reception pattern that gives the same signal strength for two bearings 180 degrees apart (an ambiguous result); combining the loop's output with the omnidirectional sense antenna's signal produces a single cardioid pattern with one clear null, resolving which of the two possible bearings is the correct one.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A simple direct-reading magnetic compass exhibits turning error (commonly summarized by the mnemonic UNOS -- Undershoot North, Overshoot South, in the northern hemisphere) primarily because",
    options: [
      "turning error occurs identically on headings through east and west, with no effect at all when turning through north or south, a description that has the affected headings backwards, since UNOS error is specifically tied to turns through north and south.",
      "as the aircraft banks during a turn, the compass card is displaced by the vertical component of the Earth's magnetic field acting on the tilted assembly, causing the indication to lag through north and lead through south.",
      "turning error results entirely from airspeed changes during the turn, with no relationship to magnetic dip or bank angle.",
      "the compass card physically stops moving altogether during any banked turn, regardless of turn direction or magnetic heading.",
    ],
    answer: 1,
    explain:
      "When the aircraft banks in a turn, the compass card assembly tilts with it, and the vertical component of the Earth's magnetic field (dip) then acts on the tilted card, displacing the indication; in the northern hemisphere this makes the compass lag (under-read the turn) when turning through a heading of north and lead (over-read the turn) when turning through south, hence Undershoot North, Overshoot South.",
    reference: "TP 690 -- Navigation - General: The Magnetic Compass",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A simple direct-reading magnetic compass also exhibits acceleration/deceleration error on headings near east or west (commonly summarized by the mnemonic ANDS -- Accelerate North, Decelerate South, in the northern hemisphere), which means that, in level flight,",
    options: [
      "the compass indicates a false turn toward south when accelerating and toward north when decelerating, the reverse of the ANDS mnemonic.",
      "acceleration and deceleration have no effect at all on compass indications at any heading, including east and west.",
      "accelerating on an easterly or westerly heading causes the compass to indicate a turn toward north, and decelerating causes it to indicate a turn toward south, even though the heading is unchanged.",
      "acceleration error occurs only while turning, never during straight and level flight on a constant heading, a description that has it backwards, since ANDS error is specifically a straight-and-level phenomenon near east and west.",
    ],
    answer: 2,
    explain:
      "Because of the same dip-related pendulous mounting effect, an acceleration on an easterly or westerly heading causes a simple compass to falsely indicate a turn toward north, while a deceleration causes it to falsely indicate a turn toward south -- even though the aircraft's actual heading is unchanged -- which is summarized by the ANDS mnemonic (Accelerate North, Decelerate South) in the northern hemisphere.",
    reference: "TP 690 -- Navigation - General: The Magnetic Compass",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A compass deviation correction card, mounted near a magnetic compass and generated by a compass swing, is used by a pilot to",
    options: [
      "convert true heading directly to compass heading in a single step, skipping the magnetic heading stage entirely, a shortcut inconsistent with the separate variation and deviation steps the correction sequence actually requires.",
      "determine the aircraft's current variation at its present location, replacing the need for chart-published isogonic lines.",
      "record only the compass manufacturer's serial number and inspection date, with no heading-related information at all.",
      "look up the deviation correction applicable for a given magnetic heading, often listed in 30-degree increments, then apply it to convert that magnetic heading into the compass heading actually flown.",
    ],
    answer: 3,
    explain:
      "A deviation correction card lists the deviation applicable to the aircraft's compass at a series of magnetic headings (commonly every 30 degrees), as determined during a compass swing; a pilot uses it to find and apply the correction for the magnetic heading being flown, converting that magnetic heading into the compass heading actually flown, which is the final step after variation has already been applied to true heading.",
    reference: "TP 690 -- Navigation - General: The Magnetic Compass",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Local Mean Time (LMT) at a given meridian, as distinguished from the Standard (zone) Time kept at a location, differs because",
    options: [
      "LMT is based on the mean sun's position over that specific meridian, changing continuously with longitude, while Standard Time is a fixed offset from UTC applied uniformly across an entire zone.",
      "LMT applies only to locations south of the equator, while Standard Time applies only to locations north of the equator.",
      "LMT and Standard Time are simply two different names for an identical time value at every location on Earth, with no distinction between them.",
      "Standard Time changes continuously with exact longitude, while LMT is fixed uniformly across an entire time zone, a reversal of the actual relationship, since it is LMT that varies continuously with longitude while Standard Time is the fixed, zone-wide value.",
    ],
    answer: 0,
    explain:
      "Local Mean Time is based strictly on the mean sun's position relative to a specific meridian and therefore varies continuously with exact longitude, whereas Standard (zone) Time assigns a single fixed offset from UTC to an entire time zone -- generally a band spanning about 15 degrees of longitude -- so that everyone within that zone shares the same clock time regardless of small differences in their exact longitude.",
    reference: "TP 690 -- Navigation - General: Time",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Aeronautical coordinates can be expressed either in degrees-minutes-seconds (DMS) format or in decimal-degree format, and pilots and navigation databases must generally",
    options: [
      "use decimal-degree format exclusively for VFR charts and DMS format exclusively for IFR charts, with no other distinction between the two systems.",
      "be careful to use a consistent format and convert correctly between the two, since a value such as 45 degrees 30 minutes is not the same number as 45.30 decimal degrees, and entering the wrong format into an FMS or GPS can produce a significantly incorrect position.",
      "never convert between the two formats, since DMS and decimal-degree formats are mathematically identical numbers requiring no conversion whatsoever.",
      "disregard format entirely, since flight management systems are universally designed to automatically detect and correct any coordinate format error without pilot input.",
    ],
    answer: 1,
    explain:
      "DMS format (degrees, minutes, and seconds of arc) and decimal-degree format express the same underlying angular position differently -- for example 45 degrees 30 minutes equals 45.5 decimal degrees, not 45.30 -- so care is needed to use the correct format expected by a given chart, database, or receiver and to convert correctly between them, since a format mismatch entered into an FMS or GPS can produce a meaningfully wrong position.",
    reference: "TP 690 -- Navigation - General: Charts",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Slant range error, inherent in a DME (or DME-based RNAV) distance measurement, refers to the fact that",
    options: [
      "slant range error increases the farther the aircraft is from the station, with no effect at all when close to or overhead the station.",
      "slant range error applies only to VOR bearing measurements, with no relevance whatsoever to DME distance readings, a mischaracterization since slant range error is specifically a distance-measurement effect inherent to DME, not a bearing error at all.",
      "DME measures the direct, slant-line distance to the station rather than the horizontal distance, so the indicated distance is slightly greater than true horizontal distance, an effect most significant close to or over the station at altitude.",
      "DME measures only horizontal ground distance and is entirely immune to any error related to aircraft altitude.",
    ],
    answer: 2,
    explain:
      "DME measures the direct line-of-sight (slant) distance between the aircraft and the ground station, which is slightly greater than the true horizontal distance whenever the aircraft is above the station's elevation; this discrepancy is generally negligible at typical en route distances but becomes proportionally more significant -- and can meaningfully affect RNAV position accuracy -- when the aircraft is close to or nearly overhead the station at altitude.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Fault Detection and Exclusion (FDE), a capability of some GNSS receivers, differs from basic Receiver Autonomous Integrity Monitoring (RAIM) in that FDE",
    options: [
      "applies exclusively to ground-based NAVAIDs such as VOR and DME, with no application whatsoever to satellite-based navigation.",
      "performs exactly the same function as RAIM, with FDE simply being an older, now-obsolete term for the identical detection-only capability.",
      "can detect a satellite fault but, unlike RAIM, has no ability to alert the pilot to the fault's presence at all, a description that gets the comparison backwards, since alerting is a baseline RAIM function that FDE retains and builds upon.",
      "not only detects a likely faulty satellite, as RAIM does, but also identifies and excludes that specific satellite from the position solution, letting navigation continue on the remaining healthy satellites.",
    ],
    answer: 3,
    explain:
      "Basic RAIM can detect that the position solution is likely being degraded by a faulty satellite and alert the pilot, but cannot necessarily identify which specific satellite is at fault; FDE goes a step further by both detecting and identifying (excluding) the specific faulty satellite from the position calculation, allowing the receiver to continue providing a reliable position using the remaining healthy satellites without simply flagging an integrity alert.",
    reference: "TP 690 -- Navigation - General: GNSS",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Military Operating Area (MOA), depicted on aeronautical charts as a defined block of airspace used for military training activities, is significant to a civilian pilot primarily because",
    options: [
      "IFR traffic is generally separated from MOA activity by ATC, while VFR pilots may fly through an active MOA but should watch for high-speed or unusual military manoeuvring traffic, since VFR flight is not itself prohibited there.",
      "a MOA functions identically to Class A controlled airspace, requiring an IFR clearance for any aircraft, civilian or military, to enter it.",
      "flight through a MOA is prohibited for all aircraft, civilian and military alike, at all times without exception, a blanket prohibition inconsistent with a MOA's actual purpose, since it is military training airspace that VFR traffic may still transit.",
      "a MOA imposes no operational significance at all and requires no special awareness from a VFR or IFR pilot under any circumstances.",
    ],
    answer: 0,
    explain:
      "A Military Operating Area is airspace established for military training activity; ATC generally separates IFR traffic from MOA activity or routes it around an active MOA, while VFR flight through an active MOA is not itself prohibited, but VFR pilots should exercise increased vigilance for high-speed, unusual, or otherwise hazardous military manoeuvring traffic that may be occurring there.",
    reference: "TC AIM RAC -- Special Use Airspace",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A VOR receiver's TO/FROM indicator (flag) shows whether the selected course, if flown, would take the aircraft",
    options: [
      "into or out of controlled airspace, based on the current course selection.",
      "toward or away from the station, based on the aircraft's actual position relative to the selected course line, regardless of the aircraft's current heading.",
      "above or below the VOR station's published minimum reception altitude.",
      "toward or away from the destination aerodrome, regardless of which VOR station or course is currently selected, a description that conflates the flag's station-relative indication with a destination-tracking function it does not perform.",
    ],
    answer: 1,
    explain:
      "The TO/FROM indicator shows whether flying the selected course (the Omni-Bearing Selector setting) would take the aircraft toward or away from the station, based on the aircraft's actual position relative to that selected course line -- it reflects geometric position relative to the course, not the aircraft's current heading or direction of flight, which is why a course can still show TO even if the aircraft is briefly heading away from the station while intercepting.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The vertex of a great circle route (excluding a route along the equator or a meridian) is",
    options: [
      "a term applying only to rhumb line tracks, with no equivalent concept for a great circle track, a reversal of the actual case, since the vertex is specifically a great circle concept with no rhumb line equivalent.",
      "the midpoint of the route measured strictly by distance along the track, unrelated to latitude.",
      "the point along the track at which it reaches its highest, or on the opposite side of the Earth its lowest, latitude, where the track is momentarily oriented due east-west.",
      "the point where the great circle track crosses the equator, which occurs only once along any such route.",
    ],
    answer: 2,
    explain:
      "The vertex of a great circle (other than the equator or a meridian, which have no distinct vertex) is the point at which that great circle reaches its highest latitude on one side of the Earth (and correspondingly its lowest, mirror-image latitude on the opposite side); at the vertex the great circle track is momentarily running due east-west, which is why great circle routes at high latitudes can curve noticeably poleward of a straight rhumb line between the same two points.",
    reference: "TP 690 -- Navigation - General: Great Circle Navigation",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The Maximum Elevation Figure (MEF), published within each quadrangle on a VFR sectional or navigation chart, represents",
    options: [
      "the highest altitude at which the aircraft is legally permitted to fly within that quadrangle under VFR.",
      "a measure of the maximum cloud base height forecast for that quadrangle, unrelated to terrain or obstacles.",
      "the elevation of the single highest-elevation aerodrome located within that quadrangle, a figure unrelated to terrain or obstacle clearance, which is what the MEF is actually meant to provide at a quick glance.",
      "the height of the highest known terrain or obstacle in that quadrangle, rounded up with a vertical buffer, giving a quick reference for a safe altitude to clear known hazards there.",
    ],
    answer: 3,
    explain:
      "The Maximum Elevation Figure is published within each quadrangle (grid area) of a VFR chart and represents the height of the highest known terrain feature or obstacle in that quadrangle, rounded up and including a safety buffer, giving a pilot a quick way to identify a safe minimum altitude to clear all known hazards within that specific area, rather than a legal ceiling or an aerodrome elevation.",
    reference: "TC AIM RAC -- VFR Charts",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Required Navigation Performance (RNP) value, such as RNP 1 or RNP 0.3, associated with a given route or procedure, specifies that",
    options: [
      "the aircraft's navigation system must keep the aircraft within that stated number of nautical miles of the centreline for a defined high percentage of flight time, with onboard monitoring and alerting if containment cannot be assured.",
      "the value applies exclusively to vertical (altitude) accuracy, with no lateral containment component whatsoever, a mischaracterization since an RNP value is fundamentally a lateral containment specification tied to distance from centreline, not a vertical one.",
      "the aircraft must remain within that many degrees of its planned heading at all times, with no lateral distance component involved at all.",
      "the value specifies only the required minimum groundspeed for the procedure, unrelated to lateral navigation accuracy.",
    ],
    answer: 0,
    explain:
      "An RNP value states the required lateral navigation accuracy as a distance (in nautical miles) from the route or procedure centreline that the aircraft's navigation system must be capable of maintaining for a defined high percentage of the time, and RNP systems specifically include onboard performance monitoring and alerting so the crew is notified if that containment cannot be assured -- distinguishing RNP from a basic RNAV specification, which lacks that onboard monitoring and alerting requirement.",
    reference: "TC AIM RAC -- Performance-Based Navigation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "When three simultaneous bearings (for example from three separate VOR or NDB stations) are plotted to fix an aircraft's position, the three resulting bearing lines commonly fail to intersect at a single, exact point, instead forming a small triangle known as a",
    options: [
      "'conversion angle,' a term describing the angular difference between a great circle and rhumb line track, unrelated to bearing fixes.",
      "'cocked hat,' whose size gives the pilot a rough visual indication of the fix's accuracy, with the aircraft's most probable position generally taken as a point within or near that triangle.",
      "'radius of action,' a calculation unrelated to bearing-based position fixing.",
      "'running fix,' a term reserved exclusively for a position derived from two sequential bearings from a single moving station.",
    ],
    answer: 1,
    explain:
      "Small errors in each individually plotted bearing generally mean that three simultaneous bearing lines do not intersect at one exact point but instead form a small triangle called a 'cocked hat'; the size of that triangle gives a rough visual sense of how much error may be present in the fix, and the aircraft's most probable position is generally taken as a point within or near the triangle rather than at any single one of its three bearing lines.",
    reference: "TP 690 -- Navigation - General: Position Fixing",
  },
];
