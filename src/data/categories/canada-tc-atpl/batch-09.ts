import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 9 -- Section 9: Flight Planning
// (flight planning and forms, computerized flight plans, and air
// navigation/traffic systems). Original questions written from general
// flight planning knowledge, the CARs, and the TP 690 syllabus (topic
// headings only, no sample questions). Not transcribed or adapted from
// any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_09_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under CAR 602.88, the minimum fuel required for an IFR flight is generally sufficient to fly to the destination aerodrome, then to the alternate aerodrome (if one is required), then to fly for a further",
    options: [
      "30 minutes at maximum endurance speed.",
      "15 minutes at normal cruising speed.",
      "45 minutes at normal cruising speed.",
      "2 hours at normal cruising speed.",
    ],
    answer: 2,
    explain:
      "The baseline CAR 602.88 IFR fuel requirement is built around reaching the destination, then the alternate if one is required, plus a further 45 minutes at normal cruising speed as a final reserve -- distinct from the more detailed contingency fuel provisions that apply to specific types of commercial air operations.",
    reference: "CARs 602.88 - Fuel Requirements",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's Zero Fuel Weight (ZFW) is best described as",
    options: [
      "the same value as maximum take-off weight, simply calculated without any usable fuel included in either case at all.",
      "the aircraft's weight immediately after landing with all fuel reserves fully burned down to zero indicated quantity on the fuel gauges.",
      "a performance-limited weight that varies with pressure altitude, temperature, and runway length, unrelated to any structural limits.",
      "the maximum weight of the aircraft, its payload, and all its equipment, excluding usable fuel -- a structural limit distinct from maximum take-off weight.",
    ],
    answer: 3,
    explain:
      "ZFW is a structural limit: it caps the weight of everything except usable fuel, because fuel carried in the wings provides a bending-moment relief effect on the wing spar. Loading the aircraft to a fuselage/cabin weight beyond ZFW -- even if total weight (including fuel) is still under maximum take-off weight -- can overstress the wing structure, which is why ZFW is checked independently from MTOW during loading.",
    reference: "TP 690 Section 9 - Flight Planning and Forms, Fuel Load, Zero Fuel Weight",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Critical Point (CP), or Equal Time Point (ETP), along a route is the point at which",
    options: [
      "the time required to continue to the destination equals the time required to turn back to a suitable aerodrome behind, based on the relevant groundspeeds.",
      "the aircraft reaches its planned top of descent point, regardless of any consideration of a possible diversion or turn-back option.",
      "fuel remaining on board first drops below the planned final reserve fuel quantity required for the flight.",
      "the aircraft is exactly halfway along the route by track distance only, regardless of the wind encountered aloft or the actual groundspeed achieved en route.",
    ],
    answer: 0,
    explain:
      "The CP/ETP isn't simply the geographic midpoint -- it's found using the groundspeed toward the destination/onward aerodrome versus the groundspeed back toward the departure/behind aerodrome (which differ because of wind), and it's the point where continuing on and turning back would take the same amount of time. This is central to overwater/remote-area contingency planning, where a critical point is calculated separately for all-engines and engine-out scenarios because they cruise at different speeds.",
    reference: "TP 690 Section 9 - Flight Planning and Forms, Critical Point/Equal Time Point (CP/ETP)",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a two-engine aircraft used in overwater or remote-area operational planning, the engine-out critical point differs from the all-engines-operating critical point because",
    options: [
      "the two critical points are always exactly identical, since engine status is said to have absolutely no effect on the calculation at all.",
      "the aircraft's cruise speed differs with an engine inoperative, shifting the point where continuing on and turning back take equal time.",
      "the engine-out critical point applies only to single-engine aircraft, and is said to have no meaning at all for two-engine aircraft.",
      "the engine-out critical point is always located exactly at the aircraft's departure aerodrome, regardless of the route flown.",
    ],
    answer: 1,
    explain:
      "Because true airspeed (and therefore groundspeed in each direction) is lower with an engine failed, the time-balance calculation between continuing and turning back shifts compared to the all-engines-operating case -- so a route's engine-out CP will generally sit at a different position than its all-engines CP, and operational planning for extended overwater/remote segments typically calculates both.",
    reference: "TP 690 Section 9 - Flight Planning and Forms, Critical Point/Equal Time Point (CP/ETP)",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "NOTAMs (Notices to Airmen) are used to distribute information that",
    options: [
      "applies only to military aerodromes and airspace, and never to civilian airports of any kind.",
      "is permanent in nature and is said to never later be incorporated into a published chart or the Canada Flight Supplement.",
      "is time-critical and would not be adequately conveyed through the normal aeronautical publication cycle before it becomes relevant.",
      "concerns only routine, non-safety-related administrative matters of no operational significance whatsoever to a flight crew.",
    ],
    answer: 2,
    explain:
      "NOTAMs exist specifically because some information -- a navaid outage, a temporary runway closure, an obstacle newly erected -- is too time-sensitive to wait for the next scheduled publication cycle of charts or the Canada Flight Supplement, and needs immediate, direct distribution to pilots before a flight.",
    reference: "TP 690 Section 9 - Flight Planning and Forms, NOTAMs",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The Canada Flight Supplement (CFS) is best described as",
    options: [
      "a graphical chart product used mainly for plotting a great-circle route across a chart projection.",
      "a publication containing only IFR approach procedures, with no VFR-relevant content at all included.",
      "a real-time, in-flight weather reporting service functionally equivalent to ATIS at every towered aerodrome across the country.",
      "a directory-style publication listing detailed aerodrome, communication, and navigation aid information for Canadian aerodromes.",
    ],
    answer: 3,
    explain:
      "The CFS is a text-based directory of Canadian aerodromes and their facilities -- runway data, lighting, communications frequencies, navaid details, and operational remarks -- used alongside charts, rather than being a chart itself, a weather service, or an IFR-only procedures publication.",
    reference: "TP 690 Section 9 - Flight Planning and Forms, Aeronautical Information Sources",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In a computerized flight plan, the abbreviation 'ZFW' in a fuel summary table refers to",
    options: [
      "Zero Fuel Weight, the same structural weight figure used in aircraft loading, cross-referenced here for fuel planning purposes.",
      "an abbreviation entirely unrelated to weight, standing instead for the informal term 'zone flight weather.'",
      "the fuel remaining on board once the aircraft actually reaches its filed alternate aerodrome, after landing.",
      "the total zone fuel burned on the flight's very final leg only, excluding all previous legs of the journey entirely from the total.",
    ],
    answer: 0,
    explain:
      "A computerized flight plan's fuel and weight summary typically reproduces the same Zero Fuel Weight figure used for aircraft loading, alongside trip fuel, reserve fuel, and take-off/landing weight figures -- it's the same underlying quantity as the aircraft loading ZFW, not a distinct flight-plan-specific term.",
    reference: "TP 690 Section 9 - Computerized Flight Plans, Decode",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "When analyzing a computerized flight plan, interpolating between two published data points (for example, between two listed cruise altitudes' fuel flow figures) is appropriate when",
    options: [
      "the flight plan already provides an exact value for every possible condition, making interpolation unnecessary in all cases.",
      "the actual planned condition falls between two values given in the source data, and a reasonably accurate intermediate value is needed.",
      "only whole-number altitudes are ever used in flight planning, entirely eliminating any need to interpolate at all.",
      "interpolation is never an acceptable technique in flight planning at all, regardless of the data available from the operator or manufacturer.",
    ],
    answer: 1,
    explain:
      "Published performance and fuel data is often given at fixed reference points (specific weights, altitudes, or temperatures); when the aircraft's actual planned condition falls between two of those reference points, interpolating between the given values is a standard and appropriate technique to arrive at a reasonably accurate estimate for the actual condition.",
    reference: "TP 690 Section 9 - Computerized Flight Plans, Analysis and Interpolation",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The use of preferred routes within the Canadian domestic route structure is intended primarily to",
    options: [
      "apply only to VFR flights operating below controlled airspace, with IFR flights entirely unaffected by any preferred routing considerations at all times.",
      "prohibit any pilot-requested routing that differs from the preferred route, with absolutely no exceptions permitted at all.",
      "help manage traffic flow efficiently between high-density city pairs, by publishing routings ATC expects to be used absent a specific reason to deviate.",
      "replace the need for a flight plan to be filed at all, for any flight using a published preferred route.",
    ],
    answer: 2,
    explain:
      "Preferred routes are published routings between busy city pairs that help ATC manage traffic flow predictably; while pilots can request an alternate routing, using the preferred route (absent a good operational reason not to) reduces coordination workload and tends to result in a more efficient clearance -- it isn't an absolute mandate with no exceptions, and it applies to IFR route planning, not VFR flight-following.",
    reference: "TP 690 Section 9 - Air Navigation/Traffic Systems, Use of Preferred Routes",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The North Atlantic (NAT) Organized Track System publishes a set of tracks that",
    options: [
      "apply only to eastbound flights across the ocean, with westbound flights instead using an entirely unpublished, ad hoc routing system.",
      "are used exclusively by military aircraft on training missions, with all civilian traffic following a completely separate, unrelated system.",
      "are permanently fixed tracks that never change from day to day at all, regardless of the prevailing wind conditions found aloft on any given day of any calendar year.",
      "are determined daily from the forecast winds aloft, giving aircraft crossing the North Atlantic an efficient routing while ATC maintains required separation.",
    ],
    answer: 3,
    explain:
      "Because the jet stream and prevailing winds across the North Atlantic vary significantly day to day, the NAT organized tracks are recalculated and republished daily to take advantage of favourable winds (or avoid unfavourable ones) while giving ATC a structured, separable system for the high volume of both eastbound and westbound oceanic traffic that crosses that airspace with limited radar coverage.",
    reference: "TP 690 Section 9 - Air Navigation/Traffic Systems, Regional Procedures (North Atlantic, Northern Pacific, Polar)",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Operating in oceanic or polar airspace with little or no radar or ADS-B surveillance coverage generally requires",
    options: [
      "stricter adherence to navigation performance standards and contingency procedures, since ATC has less ability to directly monitor the aircraft's position.",
      "no special procedures at all, since oceanic airspace is treated in this view as being identical to a radar-served domestic en route sector in every respect.",
      "relying exclusively on VHF communication, since HF and satellite communication are said to never be used in oceanic airspace.",
      "abandoning IFR separation standards entirely in favour of completely unrestricted, fully uncontrolled flight operations at any altitude.",
    ],
    answer: 0,
    explain:
      "Where ATC can't directly observe an aircraft's position continuously (as in much oceanic and polar airspace), safe separation depends more heavily on the aircraft actually flying the cleared track/level accurately (navigation performance standards like MNPS/CMNPS) and on well-defined contingency procedures (such as offset procedures for a navigation error) to reduce the risk of a conflict that ATC might not otherwise catch quickly -- and HF or satellite communication is specifically used in these areas precisely because VHF range is limited far from ground stations.",
    reference: "TP 690 Section 9 - Air Navigation/Traffic Systems, Regional Procedures (North Atlantic, Northern Pacific, Polar)",
  },
];
