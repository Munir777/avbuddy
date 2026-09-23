import type { Question } from "../../../types";

// FAA ATP written-test question bank, batch 11.
// Source: Prepware "Study Session Results" printout, source questions 756-835
// (PDF pages 152-166 of 258).
// This page range shifts heavily into IFR/ATC procedures and airspace
// regulations, alongside many approach-plate questions (ILS RWY 25L LAX,
// LOC BC RWY 26L Phoenix, VOR/DME RWY 32R IAH, JFK approaches, various SIDs/
// STARs, holding-pattern-entry diagrams, etc.) that depend on charts not
// included in the source PDF. Skipped original source numbers: 758, 760,
// 762, 765, 769, 770, 771, 773, 776, 778, 780, 783, 786, 787, 788, 789, 791,
// 795, 798, 799, 800, 803, 805, 806, 807, 810, 811, 813, 814, 820, 821, 824,
// 825, 829, 830, 831, 834, and 835.
export const FAA_ATP_BATCH_11_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "An alternate airport is not required to dispatch a flag air carrier airplane for a flight of less than 6 hours when the visibility for at least 1 hour before and 1 hour after the ETA at the destination airport is forecast to be",
    options: ["2 miles or greater.", "at least 3 miles, or 2 miles more than the lowest applicable minimum.", "3 miles."],
    answer: 1,
    explain:
      "An alternate airport need not be listed if the destination weather, from an hour before to an hour after the ETA, is forecast to have the required ceiling criteria and the visibility is forecast to be at least 3 miles, or 2 miles more than the lowest visibility minimums, whichever is greater, for the instrument approach procedures to be used at the destination airport.",
    reference: "14 CFR 121.623",
  },
  {
    id: 2,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Maximum holding speed for a civil turbojet aircraft at a joint use airport (civil/Navy) between 7,000 and 14,000 feet is",
    options: ["265 knots.", "230 knots.", "200 knots."],
    answer: 1,
    explain:
      "The following are exceptions to the maximum holding airspeeds: Holding patterns at Navy fields only 230 KIAS maximum, unless otherwise depicted.",
    reference: "AIM 5-3-8 - Holding",
  },
  {
    id: 3,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is one limitation when filing a random RNAV route on an IFR flight plan?",
    options: [
      "The waypoints must be located within 200 NM of each other.",
      "The entire route must be within radar environment.",
      "The waypoints may only be defined by degree-distance fixes based on appropriate navigational aids.",
    ],
    answer: 1,
    explain:
      "Random RNAV routes can only be approved in a radar environment. Aircraft operating at or above FL390 may file waypoints based on latitude/longitude fixes, under some circumstances. Answer (A) is incorrect because VOR/VORTAC facilities must be within 200 NM of each other when operating above FL450 to define a direct route. Answer (C) is incorrect because random RNAV waypoints may be defined by degree-distance fixes based on appropriate navigational aids, of latitude/longitude coordinate navigation, independent of VOR/TACAN references, operating at and above FL390 in the conterminous U.S.",
    reference: "AIM 5-1-8 - Random RNAV Routes",
  },
  {
    id: 4,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Pilots should state their position on the airport when calling the tower for takeoff",
    options: [
      "from a runway intersection.",
      "from a runway intersection, only at night.",
      "from a runway intersection, only during instrument conditions.",
    ],
    answer: 0,
    explain:
      "Pilots should state their position on the airport when calling the tower for takeoff from a runway intersection. Answer (B) is incorrect because this rule applies to all operations. Answer (C) is incorrect because this rule applies to all operations.",
    reference: "AIM 4-3-10 - Intersection Takeoffs",
  },
  {
    id: 5,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Which IFR fix(es) should be entered on a composite flight plan?",
    options: [
      "All compulsory reporting points en route.",
      "The VORs that define the IFR portion of the flight.",
      "The fix where the IFR portion is to be terminated.",
    ],
    answer: 2,
    explain:
      "The IFR clearance limit should be listed on a composite flight plan. Answer (A) is incorrect because compulsory reporting points are not listed on an IFR flight plan unless they define a point of transition, direct route segments or the clearance limit fix. Also, there are no compulsory reporting points for a VFR flight. Answer (B) is incorrect because IFR fixes can be defined as intersections, waypoints, and DME distance, along with VORs.",
    reference: "AIM 5-1-9 - Composite Flight Plan (VFR/IFR Flights)",
  },
  {
    id: 6,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: 'While holding short for an intersection takeoff runway 36 at taxiway C, tower clears you to "line up and wait runway 36." You should',
    options: [
      "line up and wait for takeoff on taxiway C.",
      "line up and wait on runway 36 at intersection C for departure.",
      "hold short and advise tower that you are at intersection C short of runway 36.",
    ],
    answer: 1,
    explain:
      '"Line up and wait" is an ATC phrase used to instruct pilots to taxi onto the departure runway, line up, and wait for imminent departure.',
    reference: "AIM 4-3-18 - Line Up and Wait (LUAW)",
  },
  {
    id: 7,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What is the difference between a visual and a contact approach?",
    options: [
      "A visual approach is an IFR authorization while a contact approach is a VFR authorization.",
      "A visual approach is initiated by ATC while a contact approach is initiated by the pilot.",
      "Both are the same but classified according to the party initiating the approach.",
    ],
    answer: 1,
    explain:
      "Visual approaches are initiated by ATC to reduce pilot/controller workload and expedite traffic. Pilots operating on IFR flight plans may request a contact approach if the appropriate weather conditions exist. Answer (A) is incorrect because both a visual and contact approach are initiated from an IFR flight plan. Answer (C) is incorrect because a visual approach is one in which the pilot has a preceding aircraft or the airport in sight and can maintain basic VFR weather minimums. A contact approach is used by a pilot in lieu of conducting a standard or special instrument approach to an airport.",
    reference: "AIM 5-4-23 - Visual Approach; 5-4-24 - Contact Approach",
  },
  {
    id: 8,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "How are random RNAV routes below FL390 defined on the IFR flight plan?",
    options: [
      "Define route waypoints using degree-distance fixes based on appropriate navigational aids for the route and altitude.",
      "List the initial and final fix with at least one waypoint each 200 NM.",
      "Begin and end over appropriate arrival and departure transition fixes or navigation aids, define the random route waypoints by using degree-distance fixes based on navigation aids appropriate for the altitude being flown.",
    ],
    answer: 2,
    explain:
      "Pilots of aircraft equipped with operational area navigation equipment may file for random RNAV routes throughout the national airspace system, where radar monitoring by ATC is available, in accordance with the following: 1. File airport-to-airport flight plans prior to departure. 2. File the appropriate RNAV capability suffix in the flight plan. 3. Plan the random route portion of the flight plan to begin and end over appropriate arrival and departure fixes. 4. Define the random route by waypoints. File route description waypoints by using degree/distance fixes based on navigation aids which are appropriate to the altitude. 5. File a minimum of one route description waypoint for each ARTCC through whose area the random route will be flown. These waypoints must be located within 200 NM of the preceding center's boundary. Answer (A) is incorrect because RNAV routes defined on an IFR flight plan must also begin and end over an established radio fix. Answer (B) is incorrect because RNAV waypoints have no established distance requirement. A minimum of one waypoint must be filed for each ARTCC through which the route is planned, and this must be located within 200 NM of the preceding center's boundary.",
    reference: "AIM 5-1-8 - Random RNAV Routes",
  },
  {
    id: 9,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the maximum acceptable position tolerance for penetrating a domestic ADIZ over water?",
    options: [
      "Plus or minus 10 miles; plus or minus 10 minutes.",
      "Plus or minus 10 miles; plus or minus 5 minutes.",
      "Plus or minus 20 miles; plus or minus 5 minutes.",
    ],
    answer: 2,
    explain:
      "The aircraft position tolerances over water in a domestic ADIZ is plus or minus five minutes from the estimated time over a reporting point or point of penetration and within 20 NM from the centerline of the intended track over an estimated reporting point or point of penetration.",
    reference: "14 CFR 99 - Domestic ADIZ",
  },
  {
    id: 10,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When entering a holding pattern above 14,000 feet, the initial outbound leg should not exceed",
    options: ["1 minute.", "1-1/2 minutes.", "1-1/2 minutes or 10 NM, whichever is less."],
    answer: 1,
    explain:
      "Inbound leg time should not exceed 1 minute when holding at or below 14,000 feet, or 1-1/2 minutes when holding above 14,000 feet. The outbound leg should be flown for 1 minute or 1-1/2 minutes as appropriate on the first leg and then adjusted on subsequent legs to get the correct time on the inbound leg. Answer (A) is incorrect because an initial outbound leg of 1 minute should be used only when below 14,000 feet. Answer (C) is incorrect because a DME distance is issued only by the specified controller for aircraft equipped with DME capability. A DME distance is not required unless specified by the controller.",
    reference: "AIM 5-3-8 - Holding",
  },
  {
    id: 11,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "With regard to flight crewmember duties, which of the following operations are considered to be in the 'critical phase of flight'?",
    options: [
      "Taxi, takeoff, landing, and all other operations conducted below 10,000 feet MSL, including cruise flight.",
      "Descent, approach, landing, and taxi operations, irrespective of altitudes MSL.",
      "Taxi, takeoff, landing, and all other operations conducted below 10,000 feet, excluding cruise flight.",
    ],
    answer: 2,
    explain:
      "No certificate holder shall require, nor may any flight crewmember perform, any duties during a critical phase of flight except those duties required for the safe operation of the aircraft. For purposes of this section, critical phases of flight include all ground operations involving taxi, takeoff and landing, and all other flight operations conducted below 10,000 feet, except cruise flight. Answer (A) is incorrect because critical phase of flight includes all operations (except cruise flight) below 10,000 feet. Answer (B) is incorrect because 14,500 feet is the base of Class E airspace (if not set lower).",
    reference: "14 CFR 121.542 - Flight Crewmember Duties",
  },
  {
    id: 12,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Pilots should notify controllers on initial contact that they have received the ATIS broadcast by",
    options: ["stating 'Have Numbers'.", "stating 'Have Weather'.", "repeating the alphabetical code word appended to the broadcast."],
    answer: 2,
    explain:
      "Pilots should notify controllers on initial contact that they have received the ATIS broadcast by repeating the alphabetical code word appended to the broadcast. For example, 'Information Sierra received.'",
    reference: "AIM 4-1-13 - ATIS",
  },
  {
    id: 13,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What minimum ground visibility may be used instead of a prescribed visibility criteria of RVR 16 when that RVR value is not reported?",
    options: ["1/4 SM.", "3/4 SM.", "3/8 SM."],
    answer: 0,
    explain: "RVR minimum may be converted to ground visibility using FAA Legend 7.",
    reference: "FAA Legend 7 - RVR/Visibility Conversion",
  },
  {
    id: 14,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "When executing a stabilized approach, you should use",
    options: [
      "no more than 1000 FPM rate of descent for a non-precision or precision approach from 1,000 feet above the airport or TDZE.",
      "no more than 1000 FPM for a precision approach or 1200 FPM for a non-precision approach.",
      "no more than 800 FPM for a nonprecision approach or 1000 FPM for a precision approach.",
    ],
    answer: 0,
    explain:
      "For all straight-in instrument approaches in IFR weather conditions, the approach must be stabilized (descent rate of less than 1000 FPM) before descending below 1,000 feet above the airport or TDZE.",
    reference: "FAA Airplane Flying Handbook - Stabilized Approach",
  },
  {
    id: 15,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What minimum aircraft equipment is required for operation within Class C airspace?",
    options: ["Two-way communications.", "Two-way communications and transponder.", "Transponder and DME."],
    answer: 1,
    explain:
      "An encoding transponder and two-way radio is required in order to operate within Class C airspace. Answer (A) is incorrect because a Mode C transponder is also required. Answer (C) is incorrect because two-way communications are also required and DME is not required.",
    reference: "14 CFR 91.130, 91.215",
  },
  {
    id: 16,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "How should an off-airway direct flight be defined on an IFR flight plan?",
    options: [
      "The initial fix, the true course, and the final fix.",
      "All radio fixes over which the flight will pass.",
      "The initial fix, all radio fixes which the pilot wishes to be compulsory reporting points, and the final fix.",
    ],
    answer: 1,
    explain:
      "Any portions of the route which will not be flown on the radials or courses of established airways or routes, such as direct route flights, must be clearly defined by indicating the radio fixes over which the flight will pass. Answer (A) is incorrect because true course is not an item that is reported on an IFR flight plan. The initial fix and the final fix are listed as radio fixes that define the start and finish points of a flight. Answer (C) is incorrect because initial and final fixes are required to define random RNAV (not direct flight) routes. All radio fixes that define the route of a direct flight automatically become compulsory reporting points, not just the pilot's choice.",
    reference: "AIM 5-1-8 - Direct Flights",
  },
  {
    id: 17,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Precision Runway Monitoring (PRM) is",
    options: [
      "an airborne RADAR system for monitoring approaches to two runways.",
      "a RADAR system for monitoring approaches to closely spaced parallel runways.",
      "a high update rate RADAR system for monitoring multiple aircraft ILS approaches to a single runway.",
    ],
    answer: 1,
    explain:
      "Precision Runway Monitoring (PRM) is a high update-rate radar surveillance system, certified to provide simultaneous independent approaches to closely spaced parallel runways. Answer (A) is incorrect because PRM is not an airborne radar system; it is ground based. Answer (C) is incorrect because PRM monitors simultaneous approaches to two closely spaced parallel runways.",
    reference: "AIM 5-4-15 - Simultaneous Close Parallel Approaches (PRM)",
  },
  {
    id: 18,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What is the maximum indicated airspeed a reciprocating-engine-powered airplane may be operated within Class B airspace?",
    options: ["180 knots.", "230 knots.", "250 knots."],
    answer: 2,
    explain:
      "Unless otherwise authorized by the Administrator, no person may operate an aircraft below 10,000 feet MSL at an indicated airspeed of more than 250 knots (288 MPH). There is no specific speed restriction which applies to operation within Class B airspace. Answer (A) is incorrect because 180 knots is the old maximum airspeed for turbine-powered aircraft while operating within Class D airspace (it is now 200 knots). Answer (B) is incorrect because 230 knots is the maximum authorized holding speed for all civil turbojet aircraft while operating from the minimum holding altitude to 14,000 feet. It is not an airspeed limitation in Class B airspace.",
    reference: "14 CFR 91.117",
  },
  {
    id: 19,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "The maximum indicated airspeed that an aircraft may be flown in Class B airspace, after departing the primary airport, while at 1,700 feet AGL and 3.5 nautical miles from the airport is",
    options: ["200 knots.", "230 knots.", "250 knots."],
    answer: 2,
    explain:
      "Unless otherwise authorized by the Administrator, no person may operate an aircraft below 10,000 feet MSL at an indicated airspeed of more than 250 knots (288 MPH).",
    reference: "14 CFR 91.117",
  },
  {
    id: 20,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the normal procedure for IFR departures at locations with pretaxi clearance programs?",
    options: [
      "Pilots request IFR clearance when ready to taxi. The pilot will receive taxi instruction with clearance.",
      "Pilots request IFR clearance when ready to taxi. Pilots will receive taxi clearance, then receive IFR clearance while taxiing or on runup.",
      "Pilots request IFR clearance 10 minutes or less prior to taxi, then request taxi clearance from ground control.",
    ],
    answer: 2,
    explain:
      "When operating at airports with pre-taxi clearance delivery, participating pilots should call clearance delivery or ground control not more than 10 minutes before taxi. When the IFR clearance is received on clearance delivery frequency, pilots should call ground control when ready to taxi. Answer (A) is incorrect because the pilot will first be given the IFR clearance, then the taxi instruction or clearance. Answer (B) is incorrect because the pilot will first be given the IFR clearance, then the taxi instruction or clearance.",
    reference: "AIM 4-3-2 - Pre-Taxi Clearance Procedures",
  },
  {
    id: 21,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When a composite flight plan indicates VFR for the first portion of the flight, what is the procedure for the transition?",
    options: [
      "The VFR portion is automatically canceled and the IFR portion is automatically activated when the pilot reports IFR conditions.",
      "The pilot should advise ATC to cancel VFR and activate the IFR portion of the flight.",
      "The pilot should close the VFR portion with the nearest FSS and request the IFR clearance at least 5 minutes prior to IFR.",
    ],
    answer: 2,
    explain:
      "If VFR flight is conducted for the first portion of a composite flight plan, the pilot should report the departure time to the FSS with which he/she filed. He/she should close the VFR portion and request ATC clearance from the FSS nearest to the point at which the change from VFR to IFR is proposed. Answer (A) is incorrect because VFR flight plans are never automatically closed; it is the pilot's responsibility to close a VFR flight plan. An IFR clearance must be requested and received before entering IFR conditions in controlled airspace. It is not automatically activated when the pilot reports IFR conditions. Answer (B) is incorrect because the pilot should cancel a VFR flight plan with the nearest FSS, not ATC.",
    reference: "AIM 5-1-9 - Composite Flight Plan (VFR/IFR Flights)",
  },
  {
    id: 22,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What are FDC NOTAMs?",
    options: [
      "Conditions of facilities en route that may cause delays.",
      "Time critical aeronautical information of a temporary nature from distant centers.",
      "Regulatory amendments to published IAPs and charts not yet available in normally published charts.",
    ],
    answer: 2,
    explain:
      "FDC NOTAMs contain such things as amendments to published IAPs and other current aeronautical charts and other information which is considered regulatory in nature. Answer (A) is incorrect because NOTAM (D) contains information on navigational facilities en route that may cause delays. Answer (B) is incorrect because time critical aeronautical information of a temporary nature from distant centers will be included in a NOTAM (D) ('distant').",
    reference: "AIM 5-1-3 - Notice to Air Missions (NOTAM) System",
  },
  {
    id: 23,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "At what minimum altitude is a turbine-engine-powered, or large airplane, required to enter Class D airspace?",
    options: ["1,500 feet AGL.", "2,000 feet AGL.", "2,500 feet AGL."],
    answer: 0,
    explain:
      "When operating to an airport with an operating control tower, each pilot of a turbine-powered airplane or a large airplane shall, unless otherwise required by the applicable distance from cloud criteria, enter Class D airspace at an altitude of at least 1,500 feet above the surface of the airport.",
    reference: "14 CFR 91.129",
  },
  {
    id: 24,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Why are certain areas that start 3 nautical miles from the coastline of the U.S. and extend outward, classified as Warning Areas?",
    options: [
      "To inform pilots of participating aircraft to maintain extreme vigilance while conducting flight within the area.",
      "To warn all aircraft pilots that flying within the area may be extremely hazardous to aircraft and occupants.",
      "To warn pilots of nonparticipating aircraft of a potential danger within the area.",
    ],
    answer: 2,
    explain:
      "A Warning Area is airspace of defined dimensions, extending from three nautical miles outward from the coast of the United States, that contains activity that may be hazardous to nonparticipating aircraft. The purpose of such warning areas is to warn nonparticipating pilots of the potential danger. A warning area may be located over domestic or international waters or both.",
    reference: "AIM 3-4-7 - Warning Area",
  },
  {
    id: 25,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "At what maximum indicated airspeed can a B-727 operate within Class B airspace without special ATC authorization?",
    options: ["230 knots.", "250 knots.", "275 knots."],
    answer: 1,
    explain:
      "Unless otherwise authorized by the Administrator, no person may operate an aircraft below 10,000 feet MSL at an indicated airspeed of more than 250 knots (288 MPH). There is no specific speed restriction which applies to operation within Class B airspace. Answer (A) is incorrect because 230 knots is not an airspeed limitation in Class B airspace. Answer (C) is incorrect because 275 knots is not an established maximum speed for any type of operation.",
    reference: "14 CFR 91.117",
  },
  {
    id: 26,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the pilot's responsibility for clearance or instruction readback?",
    options: [
      "Except for SIDs, acknowledge altitude assignments, altitude restrictions, and vectors.",
      "If the clearance or instruction is understood, an acknowledgement is sufficient.",
      "Read back the entire clearance or instruction to confirm the message is understood.",
    ],
    answer: 0,
    explain:
      "Pilots of airborne aircraft should read back those parts of ATC clearances and instructions containing altitude assignments or vectors. Altitudes contained in charted procedures such as DPs, instrument approaches, etc., should not be read back unless they are specifically stated by the controller. Answer (B) is incorrect because the best way to know that the clearance or instruction is understood is to read back the 'numbers' as a double-check between the pilot and ATC. This reduces the kinds of communication errors that occur when a number is either misheard or is incorrect. Answer (C) is incorrect because the pilot's responsibility is to read back the clearances and instructions containing altitude assignments, altitude restrictions, and vectors, not the entire clearance or instruction.",
    reference: "AIM 4-4-7 - Readback of Clearances",
  },
  {
    id: 27,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "To conduct a localizer performance with vertical guidance (LPV) RNAV (GPS) approach, the aircraft must be furnished with",
    options: [
      "a GPS/WAAS receiver approved for an LPV approach by the AFM supplement.",
      "a GPS (TSO-129) receiver certified for IFR operations.",
      "an IFR approach-certified system with required navigation performance (RNP) of 0.5.",
    ],
    answer: 0,
    explain:
      "'LPV' is the acronym for localizer performance with vertical guidance. LPV identifies the APV minimums with electronic lateral and vertical guidance. The lateral guidance is equivalent to localizer, and the protected area is considerably smaller than the protected area for the present LNAV and LNAV/VNAV lateral protection. Aircraft can fly this minima line with a statement in the Aircraft Flight Manual that the installed equipment supports LPV approaches. This includes Class 3 and 4 TSO-C146 WAAS equipment, and future LAAS equipment.",
    reference: "AIM 5-4-5 - Area Navigation (RNAV) and RNAV Global Positioning System (GPS) Approaches",
  },
  {
    id: 28,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Under what conditions may an air carrier pilot continue an instrument approach to the DH, after receiving a weather report indicating that less than minimum published landing conditions exist at the airport?",
    options: [
      "If the instrument approach is conducted in a radar environment.",
      "When the weather report is received as the pilot passes the FAF.",
      "When the weather report is received after the pilot has begun the final approach segment of the instrument approach.",
    ],
    answer: 2,
    explain:
      "If a pilot has begun the final approach segment of an instrument approach procedure with the reported weather at or above landing minimums and later receives a report indicating below minimum landing conditions exist at the airport, he/she may continue the approach to DH or MDA. The pilot may land from that approach if he discovers that the visibility is at least that required by the approach, he/she has the required visual references in sight, and a normal descent and landing can be made.",
    reference: "14 CFR 121.651 - Continuing Flight in IFR Conditions",
  },
  {
    id: 29,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "An ATC 'instruction'",
    options: [
      "is the same as an ATC 'clearance.'",
      "is a directive issued by ATC for the purpose of requiring a pilot to take a specific action.",
      "must be 'read back' in full to the controller and confirmed before becoming effective.",
    ],
    answer: 1,
    explain:
      "Instructions are directives issued by air traffic control for the purpose of requiring a pilot to take specific actions; e.g., 'Turn left heading two five zero,' 'Go around,' 'Clear the runway.' Answer (A) is incorrect because an ATC clearance is not the same as an ATC instruction Answer (C) is incorrect because an ATC instruction does not have to be read back in full to the controller and confirmed before becoming effective.",
    reference: "AIM Pilot/Controller Glossary - Instructions",
  },
  {
    id: 30,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "When simultaneous approaches are in progress, how does each pilot receive radar advisories?",
    options: [
      "On tower frequency.",
      "On approach control frequency.",
      "One pilot on tower frequency and the other on approach control frequency.",
    ],
    answer: 0,
    explain:
      "Whenever simultaneous approaches are in progress, radar advisories will be provided on the tower frequency. Answer (B) is incorrect because pilots will be advised to monitor the tower (not approach control) frequency to receive radar advisories and instructions. Answer (C) is incorrect because both pilots would receive radar advisories on the tower frequency.",
    reference: "AIM 5-4-14 - Simultaneous Independent Approaches",
  },
  {
    id: 31,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When a speed adjustment is necessary to maintain separation, what minimum speed may ATC request of a turbine-powered aircraft departing an airport?",
    options: ["188 knots.", "210 knots.", "230 knots."],
    answer: 2,
    explain:
      "When a speed adjustment is necessary to maintain separation, the minimum airspeed for a turbine-powered aircraft on departure is 230 knots. Answer (A) is incorrect because 188 knots is not an applicable airspeed for any ATC operation. All airspeeds used by ATC/regulations are expressed in 10-knot increments. Answer (B) is incorrect because it is the minimum airspeed that ATC can request of a turbine-powered airplane operating below 10,000 feet, excluding departing airplanes.",
    reference: "AIM 4-4-12 - Speed Adjustments",
  },
  {
    id: 32,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "In what airspace will ATC not authorize 'VFR on Top'?",
    options: ["Class C airspace.", "Class B airspace.", "Class A airspace."],
    answer: 2,
    explain: "ATC will not authorize VFR or VFR-On-Top operations in Class A airspace.",
    reference: "14 CFR 91.135, 91.181",
  },
  {
    id: 33,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "You are rolling on takeoff in a 14 CFR Part 25 certified jet and you see an engine oil pressure caution light as you pass V1. You should",
    options: [
      "continue the takeoff as briefed and handle the illumination as an inflight emergency.",
      "promptly abort the takeoff and plan on only having asymmetrical reverse thrust.",
      "abort the takeoff and plan for a maximum reverse thrust for deceleration.",
    ],
    answer: 0,
    explain:
      "V1 is the critical engine failure speed or decision speed. Engine failure below this speed shall result in an aborted takeoff; above this speed the takeoff run should be continued.",
    reference: "FAA Airplane Flying Handbook - Rejected Takeoff",
  },
  {
    id: 34,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Before requesting RVSM clearance, each person",
    options: [
      "shall correctly annotate the flight plan.",
      "must file an ICAO RVSM flight plan.",
      "should file for odd altitudes only.",
    ],
    answer: 0,
    explain:
      "Each person requesting a clearance to operate within reduced vertical separate minimum (RVSM) airspace shall correctly annotate the flight plan filed with air traffic control with regard to RVSM approval.",
    reference: "14 CFR 91.180 - RVSM",
  },
  {
    id: 35,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "A landing weight increase of 10% will result in",
    options: ["7% increase in kinetic energy.", "21% increase in kinetic energy.", "33% increase in kinetic energy."],
    answer: 1,
    explain:
      "As an example of measuring the effectiveness of aircraft brakes, a 30,000-pound aircraft landing at 175 knots has a kinetic energy of 41,000,000 ft-lbs at the instant of touchdown. While a 10% increase in landing weight causes a 5% higher landing speed, and a 10% greater landing distance, it also produces a 21% increase in the kinetic energy of the airplane to be dissipated during the landing roll.",
    reference: "FAA Airplane Flying Handbook - Landing Performance",
  },
  {
    id: 36,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Which in-flight conditions are required by a supplemental air carrier to conduct a day, over-the-top flight below the specified IFR minimum en route altitude?",
    options: [
      "The flight must remain clear of clouds by at least 1,000 feet vertically and 1,000 feet horizontally and have at least 3 miles flight visibility.",
      "The flight must be conducted at least 1,000 feet above an overcast or broken cloud layer, any higher broken/overcast cloud cover is a minimum of 1,000 feet above the IFR MEA, and have at least 5 miles flight visibility.",
      "The height of any higher overcast or broken layer must be at least 500 feet above the IFR MEA.",
    ],
    answer: 1,
    explain:
      "A person may conduct day Over-the-Top operations in an airplane at flight altitudes lower than the minimum enroute IFR altitudes if - 1. The operation is conducted at least 1,000 feet above the top of lower broken or overcast cloud cover; 2. The top of the lower cloud cover is generally uniform and level; 3. Flight visibility is at least 5 miles; and 4. The base of any higher broken or overcast cloud cover is generally uniform and level, and is at least 1,000 feet above the minimum enroute IFR altitude for that route segment. Answer (A) is incorrect because the flight must remain at least 1,000 feet above the cloud layer with a flight visibility of at least 5 miles. Answer (C) is incorrect because the height of any higher ceiling must be at least 1,000 feet above the IFR MEA.",
    reference: "14 CFR 135.181 - Over-the-Top Operations",
  },
  {
    id: 37,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "In what altitude structure is a transponder required when operating in controlled airspace?",
    options: [
      "Above 12,500 feet MSL, excluding the airspace at and below 2,500 feet AGL.",
      "Above 10,000 feet MSL, excluding the airspace at and below 2,500 feet AGL.",
      "Above 14,500 feet MSL, excluding the airspace at and below 2,500 feet AGL.",
    ],
    answer: 1,
    explain:
      "A transponder is required at and above 10,000 feet MSL and below the floor of Class A airspace, excluding the airspace at and below 2,500 feet AGL. Answer (A) is incorrect because 12,500 feet MSL was the old altitude above which a transponder was needed; it is now 10,000 feet MSL. Answer (C) is incorrect because 14,500 feet MSL is the base of Class E airspace when it is not set lower.",
    reference: "14 CFR 91.215",
  },
  {
    id: 38,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "At what maximum indicated airspeed can a reciprocating-engine airplane operate in the airspace underlying Class B airspace?",
    options: ["180 knots.", "200 knots.", "230 knots."],
    answer: 1,
    explain:
      "No person may operate an aircraft in the airspace underlying Class B airspace at an indicated airspeed of more than 200 knots (230 MPH). Answer (A) is incorrect because 180 knots was the old published maximum airspeed for turbine-powered aircraft in Class D airspace (it is now 200 knots). Answer (C) is incorrect because the limitation is 200 knots or 230 MPH, not 230 knots.",
    reference: "14 CFR 91.117",
  },
  {
    id: 39,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "How should the route of flight be defined on an IFR flight plan?",
    options: [
      "A simplified route via airways or jet routes with transitions.",
      "A route via airways or jet routes with VORs and fixes used.",
      "A route via airways or jet routes with only the compulsory reporting points.",
    ],
    answer: 0,
    explain:
      "Pilots are requested to file via airways or jet routes established for use at the altitude or flight level planned. If the flight is to be conducted via designated airways or jet routes, describe the route by indicating the type and number designators of the airway(s) or jet route(s) requested. If more than one airway or jet route is to be used, clearly indicate points of transition. Answer (B) is incorrect because, to simplify the route, all VORs and fixes are not used to define a route on an IFR flight plan. Answer (C) is incorrect because compulsory reporting points might not define the transitions between airways or jet routes.",
    reference: "AIM 5-1-8 - Route Definition",
  },
  {
    id: 40,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What type information is disseminated by NOTAM (D)s?",
    options: [
      "Status of navigation aids, ILSs, radar service available, and other information essential to planning.",
      "Airport or primary runway closings, runway and taxiway conditions, and airport lighting aids outages.",
      "Temporary flight restrictions, changes in status in navigational aids, and updates on equipment such as VASI.",
    ],
    answer: 0,
    explain:
      "NOTAM (D) information is disseminated for all navigational facilities that are part of the national airspace system, all IFR airports with approved instrument approaches, and those VFR airports annotated with the NOTAM service symbol () in the Chart Supplement U.S. (previously A/FD). NOTAM (D) information could affect a pilot's decision to make a flight. It includes such information as airport or primary runway closures, changes in the status of navigational aids, ILS's, radar service availability, and other information essential to planned en route, terminal or landing operations.",
    reference: "AIM 5-1-3 - Notice to Air Missions (NOTAM) System",
  },
  {
    id: 41,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "The minimum weather conditions that must exist for an airport to be listed as an alternate in the dispatch release for a domestic air carrier flight are",
    options: [
      "those listed in the NOAA IAP charts for the alternate airport, at the time the flight is expected to arrive.",
      "those specified in the certificate holder's Operations Specifications for that airport, when the flight arrives.",
      "those listed in the NOAA IAP charts for the alternate airport, from 1 hour before or after the ETA for that flight.",
    ],
    answer: 1,
    explain:
      "No person may list an airport as an alternate airport in the dispatch release or flight release unless the appropriate weather reports or forecasts, or any combination thereof, indicate that the weather conditions will be at or above the alternate weather minimums specified in the certificate holder's operations specifications for that airport when the flight arrives. Answer (A) is incorrect because, although the alternate minimums in IAP charts may coincide with the air carrier's operation specifications, it is the operations specifications that determine alternate weather minimums. Answer (C) is incorrect because, although the alternate minimums in IAP charts may coincide with the air carrier's operation specifications, it is the operations specifications that determine alternate weather minimums.",
    reference: "14 CFR 121.625",
  },
  {
    id: 42,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When using a flight director system, what rate of turn or bank angle should a pilot observe during turns in a holding pattern?",
    options: ["3° per second or 25° bank, whichever is less.", "3° per second or 30° bank, whichever is less.", "1-1/2° per second or 25° bank, whichever is less."],
    answer: 0,
    explain:
      "When making turns in the holding pattern, use whichever of the following requires the least angle of bank: 1. 3° per second; 2. 30° bank angle; or 3. 25° bank provided a flight director system is used.",
    reference: "AIM 5-3-8 - Holding",
  },
];
