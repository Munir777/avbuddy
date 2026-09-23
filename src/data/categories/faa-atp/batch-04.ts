import type { Question } from "../../../types";

// FAA ATP written-test question bank, batch 4.
// Source: Prepware "Study Session Results" printout, source questions 239-317
// (PDF pages 46-60 of 258).
// Figure/legend-dependent questions skipped: original source numbers 240,
// 241, 244, 245, 246, 251, 260, 266, 271, 277, 279, 285, 286, 287, 289, 293,
// 298, 304, 305, and 316.
export const FAA_ATP_BATCH_04_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What action should be taken if one of the two VHF radios fail while IFR in controlled airspace?",
    options: ["Notify ATC immediately.", "Squawk 7600.", "Monitor the VOR receiver."],
    answer: 0,
    explain:
      "The pilot-in-command of an aircraft operating IFR in controlled airspace shall report to ATC as soon as practical any malfunction of navigational, approach or communication equipment that occurs in flight. Answer (B) is incorrect because, although you have experienced a communications failure, it is only a partial one. You still have one operational VHF radio and all other radios are working normally, so a squawk of 7600 is not needed. Answer (C) is incorrect because you still have an operable VHF radio for communication, so monitoring of a NAVAID is not needed. The only pilot action required is notification to ATC of the problem.",
    reference: "14 CFR Part 91 - IFR Operations: Equipment Malfunction Reports",
  },
  {
    id: 2,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "If Receiver Autonomous Integrity Monitoring (RAIM) is not available when setting up for a GPS approach, the pilot should",
    options: [
      "continue to the MAP and hold until the satellites are recaptured.",
      "proceed as cleared to the IAF and hold until satellite reception is satisfactory.",
      "select another type of approach using another type of navigation aid.",
    ],
    answer: 2,
    explain:
      "If RAIM is not available, another type of navigation and approach system must be used, another destination selected, or the trip delayed until RAIM is predicted to be available on arrival.",
    reference: "AIM 1-1 - GPS Approach Requirements",
  },
  {
    id: 3,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "While flying IFR in controlled airspace, if one of the two VOR receivers fails, which course of action should the pilot-in-command follow?",
    options: [
      "No call is required if one of the two VOR receivers is operating properly.",
      "Advise ATC immediately.",
      "Notify the dispatcher via company frequency.",
    ],
    answer: 1,
    explain:
      "The pilot-in-command of an aircraft operating IFR in controlled airspace shall report to ATC as soon as practical any malfunction of navigational, approach or communication equipment that occurs in flight. Answer (A) is incorrect because any malfunction of a navigational radio should be reported, no matter how slightly it may affect the conduct of the flight. Answer (C) is incorrect because, although this may be a common practice among the air carriers, the regulations require notification to ATC of the malfunction.",
    reference: "14 CFR Part 91 - IFR Operations: Equipment Malfunction Reports",
  },
  {
    id: 4,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Missed approach routing in which the first track is via a course rather than direct to the next waypoint requires",
    options: [
      "that the GPS receiver be sequenced to the missed approach portion of the procedure.",
      "manual intervention by the pilot, but will not be required, if RAIM is available.",
      "additional action by the operator to set the course.",
    ],
    answer: 2,
    explain:
      "Missed approach routings in which the first track is via a course rather than direct to the next waypoint require additional action by the pilot to set the course. Being familiar with all of the inputs required is especially critical during this phase of flight. Answer (A) is incorrect because a GPS missed approach requires pilot action to sequence the receiver, and routing in which the first track is via a course requires additional action by the operator. Answer (B) is incorrect because manual intervention for GPS missed approach routing is not dependent upon RAIM availability.",
    reference: "AIM 1-2 - GPS Missed Approach Procedures",
  },
  {
    id: 5,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "In the United States, there is an average of",
    options: ["2 runway incursions every week.", "3 runway incursions every day.", "4 runway incursions every month."],
    answer: 1,
    explain:
      "Runway safety is a significant challenge and a top priority for everyone in aviation. In the United States, an average of three runway incursions occur daily.",
    reference: "AIM 4-3 - Runway Safety",
  },
  {
    id: 6,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What would be the identification when a VORTAC is undergoing routine maintenance and is considered unreliable?",
    options: [
      "A test signal, 'TESTING,' is sent every 30 seconds.",
      "Identifier is preceded by 'M' and an intermittent 'OFF' flag would appear.",
      "The identifier would be removed.",
    ],
    answer: 2,
    explain:
      "During periods of routine or emergency maintenance, coded identification (or code and voice, where applicable) is removed from certain FAA NAVAIDs. During periods of maintenance, VHF ranges may radiate a T-E-S-T code. Answer (A) is incorrect because a facility may send a T-E-S-T code (not 'TESTING') during periods of maintenance. Answer (B) is incorrect because an identifier preceded by 'M' designates an identification group for the Microwave Landing System (MLS), a system no longer in operation.",
    reference: "AIM 1-1 - NAVAID Service Volumes and Identification",
  },
  {
    id: 7,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "A flight navigator or a specialized means of navigation is required aboard an air carrier airplane operated outside the 48 contiguous United States and District of Columbia when",
    options: [
      "operations are conducted IFR or VFR on Top.",
      "operations are conducted over water more than 50 miles from shore.",
      "the airplane's position cannot be reliably fixed for a period of more than 1 hour.",
    ],
    answer: 2,
    explain:
      "No certificate holder may operate an airplane outside the 48 contiguous states and the District of Columbia, when its position cannot be reliably fixed for a period of more than one hour, without a flight crewmember who holds a current flight navigator certificate, or unless the aircraft is equipped with an approved specialized means of navigation. Answer (A) is incorrect because whether IFR or VFR-On-Top, the requirement applies if the airplane's position cannot be reliably fixed for more than 1 hour. Answer (B) is incorrect because the requirement applies over water or land if the airplane's position cannot be reliably fixed for more than 1 hour.",
    reference: "14 CFR Part 121 - Flight Navigator Equipment Requirements",
  },
  {
    id: 8,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "In conducting Land and Hold Short Operations (LAHSO), the pilot should have readily available:",
    options: [
      "the published Available Landing Distance (ALD), landing performance of the aircraft, and slope of all LAHSO combinations at the destination airport.",
      "the published runway length and slope for all LAHSO combinations at the airport of intended landing.",
      "the landing performance of the aircraft, published Available Landing Distance (ALD) for all LAHSO combinations at the airport of intended landing, plus the forecast winds.",
    ],
    answer: 0,
    explain:
      "To conduct LAHSO, pilots should become familiar with all available information concerning LAHSO at their destination airport. Pilots should have, readily available, the published Available Landing Distance (ALD) and runway slope information for all LAHSO runway combinations at each airport of intended landing. Additionally, knowledge about landing performance data permits the pilot to readily determine that the ALD for the assigned runway is sufficient for safe operations.",
    reference: "AIM 4-3 - Land and Hold Short Operations (LAHSO)",
  },
  {
    id: 9,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Identify runway remaining lighting on centerline lighting systems.",
    options: [
      "Amber lights from 3,000 feet to 1,000 feet, then alternate red and white lights to the end.",
      "Alternate red and white lights from 3,000 feet to 1,000 feet, then red lights to the end.",
      "Alternate red and white lights from 3,000 feet to the end of the runway.",
    ],
    answer: 1,
    explain:
      "Centerline lighting systems consist of alternating red and white lights from 3,000 feet remaining to the 1,000-foot point, and all red lights for the last 1,000 feet of the runway. Answer (A) is incorrect because alternate red and white lights are from 3,000 feet to 1,000 feet, then red lights to the end. Answer (C) is incorrect because runway remaining lighting alternates red and white lights from 3,000 feet to 1,000 feet, and red lights from 1,000 feet to the end of the runway.",
    reference: "AIM 2-1 - Runway Lighting Systems",
  },
  {
    id: 10,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What action is necessary when a partial loss of ILS receiver capability occurs while operating in controlled airspace under IFR?",
    options: [
      "Continue as cleared and file a written report to the Administrator if requested.",
      "If the aircraft is equipped with other radios suitable for executing an instrument approach, no further action is necessary.",
      "Report the malfunction immediately to ATC.",
    ],
    answer: 2,
    explain:
      "The pilot-in-command of an aircraft operating IFR in controlled airspace shall report to ATC as soon as practical any malfunction of navigational, approach or communication equipment that occurs in flight. Answer (A) is incorrect because any malfunction of approach equipment must be reported in flight, not by a written report. Answer (B) is incorrect because, although another type of instrument approach may be executed if permission is granted by ATC, any malfunction of approach equipment should be reported.",
    reference: "14 CFR Part 91 - IFR Operations: Equipment Malfunction Reports",
  },
  {
    id: 11,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "If a visual descent point (VDP) is published on a GPS approach, it",
    options: [
      "will be coded in the waypoint sequence and identified using ATD.",
      "will not be included in the sequence of waypoints.",
      "must be included in the normal waypoints.",
    ],
    answer: 1,
    explain:
      "If a visual descent point (VDP) is published, it will not be included in the sequence of waypoints. Pilots are expected to use normal piloting techniques for beginning the visual descent.",
    reference: "AIM 1-2 - Visual Descent Points",
  },
  {
    id: 12,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What does the Precision Approach Path Indicator (PAPI) consist of?",
    options: [
      "Row of four lights parallel to the runway; red, white, and green.",
      "Row of four lights perpendicular to the runway; red and white.",
      "One light projector with two colors; red and white.",
    ],
    answer: 1,
    explain:
      "The Precision Approach Path Indicator (PAPI) uses light units similar to the VASI but are installed in a single row of either two- or four-light units. Answer (A) is incorrect because PAPI has a row of four lights perpendicular to the runway, and projects red and white light. Answer (C) is incorrect because PAPI consists of a row of four light projectors emitting red or white light.",
    reference: "AIM 2-1 - Precision Approach Path Indicator (PAPI)",
  },
  {
    id: 13,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "For the purpose of testing the flight recorder system,",
    options: [
      "a minimum of 1 hour of the oldest recorded data must be erased to get a valid test.",
      "a total of 1 hour of the oldest recorded data accumulated at the time of testing may be erased.",
      "a total of no more than 1 hour of recorded data may be erased.",
    ],
    answer: 1,
    explain:
      "A total of 1 hour of recorded data may be erased for the purpose of testing a flight recorder or flight recorder system. Any erasure must be of the oldest recorded data accumulated at the time of testing. Answer (A) is incorrect because a maximum of 1 hour of data may be erased for testing. Answer (C) is incorrect because a total of no more than 1 hour of flight recorder data may be erased, but it must be 1 hour of the oldest data.",
    reference: "14 CFR Part 121 - Flight Data Recorders",
  },
  {
    id: 14,
    subject: "FAA ATP",
    system: "Weather",
    q: "When are severe weather watch bulletins (WW) issued?",
    options: ["Every 12 hours as required.", "Every 24 hours as required.", "Unscheduled and issued as required."],
    answer: 2,
    explain:
      "A severe weather watch bulletin (WW) defines areas of possible severe thunderstorms or tornado activity. They are unscheduled and are issued as required.",
    reference: "AIM 7-1 - Severe Weather Watch Bulletins",
  },
  {
    id: 15,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Overriding an automatically selected sensitivity during a GPS approach will",
    options: [
      "cancel the approach mode annunciation.",
      "require flying point-to-point on the approach to comply with the published approach procedure.",
      "have no affect if the approach is flown manually.",
    ],
    answer: 0,
    explain:
      "Overriding an automatically selected sensitivity during an approach will cancel the approach mode annunciation. The RAIM and CDI sensitivity will not ramp down, and the pilot should not descend to MDA, but fly to the MAWP and execute a missed approach.",
    reference: "AIM 1-2 - GPS Approach Sensitivity",
  },
  {
    id: 16,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Which checks and inspections of flight instruments or instrument systems must be accomplished before an aircraft can be flown under IFR?",
    options: [
      "VOR within 30 days and altimeter systems and transponder within 24 calendar months.",
      "ELT test within 30 days, altimeter systems within 12 calendar months, and transponder within 24 calendar months.",
      "Airspeed indicator within 24 calendar months, altimeter system within 24 calendar months, and transponder within 12 calendar months.",
    ],
    answer: 0,
    explain:
      "No person may operate an aircraft under IFR using the VOR system of radio navigation unless the VOR equipment of that aircraft has been operationally checked within the preceding 30 days. No person may operate an airplane in controlled airspace under IFR unless, within the preceding 24 calendar months, each static pressure system, each altimeter instrument, and each automatic pressure altitude reporting system has been tested and inspected. No person may use an ATC transponder required by regulations unless, within the preceding 24 calendar months, it has been tested and inspected. Answer (B) is incorrect because ELTs do not have to be tested every 30 days, and the altimeter must be checked along with transponder within 24 calendar months (not 12 months). Answer (C) is incorrect because the airspeed indicator is part of the pitot-static system which must be inspected every 24 calendar months and the transponder which must be inspected every 24 calendar months.",
    reference: "14 CFR Part 91 - Instrument and Equipment Inspections",
  },
  {
    id: 17,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "How may an aircraft operate in North Atlantic (NAT) Minimum Navigation Performance Specifications Airspace with less than the minimum navigation capability required by 14 CFR Part 91 Appendix C?",
    options: [
      "By operating under VFR conditions only.",
      "By requesting a deviation from the Administrator.",
      "By operating only between 2400Z and 0600Z.",
    ],
    answer: 1,
    explain:
      "Appendix C of 14 CFR Part 91 establishes performance standards for navigation in the North Atlantic (NAT) airspace. The Administrator authorizes deviations from the requirements of Appendix C. Answer (A) is incorrect because NAT flights, with or without MNPS, may be conducted in IFR weather conditions as well as VFR. Answer (C) is incorrect because NAT flights, with or without MNPS, do not have time restrictions.",
    reference: "14 CFR Part 91 Appendix C - North Atlantic MNPS Airspace",
  },
  {
    id: 18,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "If the ambient temperature is colder than standard at FL310, what is the relationship between true altitude and pressure altitude?",
    options: ["They are both the same, 31,000 feet.", "True altitude is lower than 31,000 feet.", "Pressure altitude is lower than true altitude."],
    answer: 1,
    explain:
      "True altitude is indicated altitude corrected for the fact that nonstandard temperatures will result in nonstandard pressure lapse rates. In warm air, you fly at a true altitude higher than indicated. In cold air, you fly at a true altitude lower than indicated. Pressure altitude is the altitude indicated when the altimeter is set to the standard sea level pressure (29.92\" Hg). In the United States, altimeters are always set to 29.92\" Hg at and above 18,000 feet. This question assumes the difference between the pressure altitude and the indicated altitude (local altimeter setting) is not significant enough to reverse the effects of the temperature. Answer (A) is incorrect because both true and pressure altitude would be the same at FL310 if the ambient air temperature was standard. Answer (C) is incorrect because pressure altitude would be lower than true altitude in warmer than standard air temperature.",
    reference: "AIM 7-2 - Altimetry and Temperature Effects",
  },
  {
    id: 19,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Identify taxi leadoff lights associated with the centerline lighting system.",
    options: [
      "Alternate green and yellow lights curving from the centerline of the runway to the centerline of the taxiway.",
      "Alternate green and yellow lights curving from the centerline of the runway to the edge of the taxiway.",
      "Alternate green and yellow lights curving from the centerline of the runway to a point on the exit.",
    ],
    answer: 2,
    explain:
      "Taxiway leadoff lights extend from the runway centerline to a point on an exit taxiway to expedite movement of aircraft from the runway. These lights alternate green and yellow from the runway centerline to the runway holding position or the ILS critical area, as appropriate.",
    reference: "AIM 2-1 - Taxiway Lead-Off Lights",
  },
  {
    id: 20,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Identify the runway distance remaining markers.",
    options: [
      "Signs with increments of 1,000 feet distance remaining.",
      "Red markers laterally placed across the runway at 3,000 feet from the end.",
      "Yellow marker laterally placed across the runway with signs on the side denoting distance to end.",
    ],
    answer: 0,
    explain:
      "Runway distance remaining markers are signs located along the sides of a runway to indicate the remaining runway distance in increments of 1,000 feet. Answer (B) is incorrect because distance remaining markers are along the side of the runway and are black and white. Answer (C) is incorrect because distance remaining markers are along the side of the runway and are black and white.",
    reference: "AIM 2-1 - Runway Distance Remaining Signs",
  },
  {
    id: 21,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Information obtained from flight data and cockpit voice recorders shall be used only for determining",
    options: [
      "who was responsible for any accident or incident.",
      "evidence for use in civil penalty or certificate action.",
      "possible causes of accidents or incidents.",
    ],
    answer: 2,
    explain:
      "Information obtained from flight data and cockpit voice recorders is used to assist in determining the cause of accidents or occurrences in connection with investigation under NTSB Part 830. The Administrator does not use the cockpit voice recorder record in any civil penalty or certificate action. Answer (A) is incorrect because flight data or cockpit voice recorders are only used to determine possible causes of accidents or incidents. Answer (B) is incorrect because flight data or cockpit voice recorders may not be used for any civil penalty or certificate action.",
    reference: "14 CFR Part 121 - Cockpit Voice and Flight Data Recorders",
  },
  {
    id: 22,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "A pilot of a high-performance airplane should be aware that flying a steeper-than-normal VASI glide slope angle may result in",
    options: ["a hard landing.", "increased landing rollout.", "landing short of the runway threshold."],
    answer: 1,
    explain:
      "Although normal VASI glidepath angle are 3°, angles at some locations may be as high as 4.5° to give proper obstacle clearance. Pilots of high performance aircraft are cautioned that use of VASI angles in excess of 3.5° may cause an increase in runway length required for landing and rollout. Answer (A) is incorrect because flying a steeper-than-normal VASI may result in an increased landing rollout in a high-performance airplane. Answer (C) is incorrect because a landing short of the runway threshold would be a result of flying a lower-than-normal VASI glide slope angle.",
    reference: "AIM 2-1 - Visual Approach Slope Indicator (VASI)",
  },
  {
    id: 23,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Information recorded during normal operation of a cockpit voice recorder in a large pressurized airplane with four reciprocating engines",
    options: [
      "may all be erased or otherwise obliterated except for the last 30 minutes.",
      "may be erased or otherwise obliterated except for the last 30 minutes prior to landing.",
      "may all be erased, as the voice recorder is not required on an aircraft with reciprocating engines.",
    ],
    answer: 0,
    explain:
      "When a cockpit voice recorder is required on an airplane, it must be operated continuously from the start of the use of the checklist (before starting engines for the purpose of flight), to completion of the final checklist at the termination of flight. Information recorded more than 30 minutes earlier may be erased or otherwise obliterated. Answer (B) is incorrect because there is no requirement for information to be retained for 30 minutes after landing. However, under some circumstances involving an accident or occurrence, the certificate holder may be required to retain the information up to 60 days. Answer (C) is incorrect because a cockpit voice recorder is required in large pressurized airplanes with four reciprocating engines.",
    reference: "14 CFR Part 121 - Cockpit Voice Recorders",
  },
  {
    id: 24,
    subject: "FAA ATP",
    system: "Weather",
    q: "The Federal Aviation Administration's Flight Information Service Data Link (FISDL) provides the following products:",
    options: [
      "METARS, SIGMETS, PIREP'S, and AIRMETS.",
      "SPECIS, SIGMETS, NOTAM'S, and AIRMETS.",
      "Convective SIGMETS, PIREPS, AWW's, and NOTAMs.",
    ],
    answer: 0,
    explain:
      "FAA FISDL provides, free of charge, the following basic products: METARs, SPECIs, TAFs and their amendments, SIGMETs, Convective SIGMETs, AIRMETs, PIREPs and, AWWs issued by the FAA or NWS.",
    reference: "AIM 7-1 - Flight Information Service Data Link (FISDL)",
  },
  {
    id: 25,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Which ground components are required to be operative for a Category II approach in addition to LOC, glide slope, marker beacons, and approach lights?",
    options: [
      "Radar, VOR, ADF, taxiway lead-off lights and RVR.",
      "RCLS and REIL.",
      "All of the required ground components.",
    ],
    answer: 2,
    explain:
      "No person may operate a civil aircraft in a Category II or Category III operation unless each ground component required for that operation and the related airborne equipment is installed and operating. Answer (A) is incorrect because radar is not a required Category II ILS ground component. Answer (B) is incorrect because runway end identifier lights (REIL) are used to provide rapid identification of the approach component for Category II ILS.",
    reference: "AIM 1-1 - Category II ILS Ground Components",
  },
  {
    id: 26,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "For what purpose may cockpit voice recorders and flight data recorders NOT be used?",
    options: [
      "Determining causes of accidents and occurrences under investigation by the NTSB.",
      "Determining any certificate action, or civil penalty, arising out of an accident or occurrence.",
      "Identifying procedures that may have been conducive to any accident, or occurrence resulting in investigation under NTSB Part 830.",
    ],
    answer: 1,
    explain:
      "Information obtained from flight data and cockpit voice recorders is used to assist in determining the cause of accidents or occurrences in connection with investigation under NTSB Part 830. The Administrator does not use the cockpit voice recorder record in any civil penalty or certificate action. Answer (A) is incorrect because cockpit voice recorders and flight data recorders are used to determine causes of accidents or occurrences. Answer (C) is incorrect because flight data recorders and cockpit voice recorders are used to identify any procedures, malfunction, or failure that may have contributed to an accident or occurrence.",
    reference: "14 CFR Part 121 - Cockpit Voice and Flight Data Recorders",
  },
  {
    id: 27,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "The lowest ILS Category II minimums are",
    options: ["DH 50 feet and RVR 1,200 feet.", "DH 100 feet and RVR 1,000 feet.", "DH 150 feet and RVR 1,500 feet."],
    answer: 1,
    explain:
      "The lowest authorized ILS minimums with all required ground and airborne systems components operative, are: Category I - Decision Height (DH) 200 feet and Runway Visual Range (RVR) 2,400 feet (with touchdown zone and runway centerline lighting, RVR 1,800 Category A, B, C; RVR 2,000 Category D), Category II - DH 100 feet and RVR 1,000 feet, and Category IIIA - RVR 700 feet. Answer (A) is incorrect because a DH of 50 feet is for Category III operations. Answer (C) is incorrect because a DH of 150 feet is for a pilot's initial Category II authorization (for the initial 6-month period) only and is not the lowest DH for Category II operations.",
    reference: "AIM 1-1 - ILS Categories and Minimums",
  },
  {
    id: 28,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "All runway hold markings consist of",
    options: ["2 dashed and 1 solid yellow line.", "2 dashed and 2 solid yellow lines.", "1 dashed and 1 solid yellow line."],
    answer: 1,
    explain:
      "Holding position markings for taxiway/runway intersections consist of four yellow lines - two solid and two dashed. The solid lines are always on the same side where the aircraft is to hold.",
    reference: "AIM 2-3 - Holding Position Markings",
  },
  {
    id: 29,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What DME indications should a pilot observe when directly over a VORTAC site at 12,000 feet?",
    options: ["0 DME miles.", "2 DME miles.", "2.3 DME miles."],
    answer: 1,
    explain:
      "Distance information displayed on DME equipment is slant range from the station in nautical miles. 12,000 feet directly over a VORTAC is almost exactly 2 NM. Answer (A) is incorrect because the DME would indicate 0 DME miles if the DME were sitting on top of the VORTAC site. Answer (C) is incorrect because 2.3 DME miles would be indicated if the airplane were at 13,800 feet (6,000 x 2.3) above the VORTAC site.",
    reference: "AIM 1-1 - DME Slant Range",
  },
  {
    id: 30,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Which publication includes information on operations in the North Atlantic High Level Airspace (NAT HLA)?",
    options: ["14 CFR Part 121.", "ICAO Annex 1 Chapter 2.", "14 CFR Part 91."],
    answer: 2,
    explain:
      "Appendix C of 14 CFR Part 91 establishes performance standards for navigation in the North Atlantic (NAT) airspace. Answer (A) is incorrect because 14 CFR Part 121 provides rules in the United States regarding certification and operations: domestic, flag, and supplemental air carriers and commercial operators of large aircraft. Answer (B) is incorrect because ICAO Annex 1 Chapter 2 concerns licenses and ratings for pilots.",
    reference: "14 CFR Part 91 Appendix C - North Atlantic High Level Airspace",
  },
  {
    id: 31,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When the temperature is -20C at 15,000 feet indicated, you know that",
    options: [
      "altimeters automatically compensate for temperature variations.",
      "the altimeter is indicating higher than true altitude.",
      "the altimeter is indicating lower than true altitude.",
    ],
    answer: 1,
    explain: "The ISA for 15,000 feet is -15C. When the temperature is colder than standard the altimeter will indicate higher than true altitude.",
    reference: "AIM 7-2 - Altimetry and Temperature Effects",
  },
  {
    id: 32,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What are the indications of the pulsating VASI?",
    options: [
      "High - pulsing white, on glidepath - green, low - pulsing red.",
      "High - pulsing white, on glidepath - steady white, slightly below glide slope steady red, low - pulsing red.",
      "High - pulsing white, on course and on glidepath - steady white, off course but on glidepath - pulsing white and red; low - pulsing red.",
    ],
    answer: 1,
    explain:
      "Pulsating visual approach slope indicators normally consist of a single light unit projecting a two-color visual approach path into the final approach area of the runway upon which the indicator is installed. The below glidepath indication is normally pulsating red, and the above glidepath indication is normally pulsating white. The on glidepath indication for one type of system is a steady white light, while for another type system the on glidepath indication consists of an alternating red and white. Answer (A) is incorrect because the on glidepath indication of a pulsating VASI is either a pulsing red and white or steady white, not green. Answer (C) is incorrect because the pulsating VASI only provides glidepath indications, not lateral, or course, indications. Above glidepath is pulsing white, on glidepath is pulsing red and white or steady white, and below glidepath is pulsing red.",
    reference: "AIM 2-1 - Pulsating Visual Approach Slope Indicator",
  },
  {
    id: 33,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "TCAS I provides",
    options: ["traffic and resolution advisories.", "proximity warning.", "recommended maneuvers to avoid conflicting traffic."],
    answer: 1,
    explain:
      "TCAS I provides proximity warning only, to assist the pilot in the visual acquisition of intruder aircraft. No recommended avoidance maneuvers are provided nor authorized as a result of a TCAS I warning. Answer (A) is incorrect because traffic and resolution advisories are provided by TCAS II. Answer (C) is incorrect because no recommended maneuvers are provided nor authorized as a result of a TCAS I warning.",
    reference: "AIM 1-1 - Traffic Alert and Collision Avoidance System (TCAS)",
  },
  {
    id: 34,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "To use a substitute means of guidance on departure procedures, pilots of aircraft with RNAV systems using DME/DME/IRU without GPS input must",
    options: [
      "ensure their aircraft navigation system position is confirmed within 1,000 feet at the start point of takeoff roll.",
      "ensure their aircraft navigation system position is confirmed within 2,000 feet of the initialization point.",
      "ensure their aircraft navigation system position is confirmed within 1,000 feet of pushback.",
    ],
    answer: 0,
    explain:
      "For RNAV 1 DPs and STARs, pilots of aircraft without GPS, usig DME/DME/IRU, must ensure the aircraft navigation system position is confirmed, within 1,000 feet, at the start point of take-off roll.",
    reference: "AIM 1-2 - RNAV Departure Procedures",
  },
  {
    id: 35,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Identify REIL.",
    options: [
      "Amber lights for the first 2,000 feet of runway.",
      "Green lights at the threshold and red lights at far end of runway.",
      "Synchronized flashing lights laterally at each side of the runway threshold.",
    ],
    answer: 2,
    explain:
      "The REIL system consists of a pair of synchronized flashing lights located laterally on each side of the runway threshold. Answer (A) is incorrect because amber lights are used on the last 2,000 feet of runway edge lights to form a caution zone on instrument runways. Answer (B) is incorrect because green lights at the threshold mark the runway edge for landing aircraft and red lights at the far end mark the runway edge to a departing or landing aircraft.",
    reference: "AIM 2-1 - Runway End Identifier Lights (REIL)",
  },
  {
    id: 36,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Without Receiver Autonomous Integrity Monitoring (RAIM) capability, the accuracy of the GPS derived",
    options: [
      "altitude information should not be relied upon to determine aircraft altitude.",
      "position is not affected.",
      "velocity information should be relied upon to determine aircraft groundspeed.",
    ],
    answer: 0,
    explain:
      "The GPS receiver verifies the integrity (usability) of the signals received from the GPS constellation through RAIM, to determine if a satellite is providing corrupted information. Without RAIM capability, the pilot has no assurance of the accuracy of the GPS position.",
    reference: "AIM 1-1 - RAIM and GPS Accuracy",
  },
  {
    id: 37,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Taxiway Centerline Lead-Off Lights are color coded to warn pilots that",
    options: [
      "they are within the runway environment or run-up danger critical area.",
      "they are within the runway environment or ILS critical area.",
      "they are within the taxiway end environment or ILS critical area.",
    ],
    answer: 1,
    explain:
      "Taxiway centerline lead-off lights provide visual guidance to persons exiting the runway. They are color-coded to warn pilots and vehicle drivers that they are within the runway environment or ILS critical area, whichever is more restrictive. Alternate green and yellow lights are installed, beginning with green, from the runway centerline to one centerline light position beyond the runway holding position or ILS critical area holding position.",
    reference: "AIM 2-1 - Taxiway Centerline Lead-Off Lights",
  },
  {
    id: 38,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "En route at FL270, the altimeter is set correctly. On descent, a pilot fails to set the local altimeter setting of 30.57. If the field elevation is 650 feet, and the altimeter is functioning properly, what will it indicate upon landing?",
    options: ["585 feet.", "1,300 feet.", "Sea level."],
    answer: 2,
    explain:
      "One inch of Hg pressure is equal to about 1,000 feet of altitude. In the United States, altimeters are always set to 29.92\" Hg at and above 18,000 feet. If the altimeter is not reset when descending into an area with a local altimeter setting of 30.57\" Hg, an error of 650 feet will result (30.57 - 29.92 = .65 = 650 feet). If the altimeter is set lower than the actual setting, it will read lower than the actual altitude. Answer (A) is incorrect because 585 feet is the result of subtracting 65 feet rather than subtracting 650 feet. Answer (B) is incorrect because 1,300 feet is the result of adding 650 feet rather than subtracting 650 feet.",
    reference: "AIM 7-2 - Altimeter Setting Procedures",
  },
  {
    id: 39,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What are the indications of Precision Approach Path Indicator (PAPI)?",
    options: [
      "High - white, on glidepath - red and white; low - red.",
      "High - white, on glidepath - green; low - red.",
      "High - white and green, on glidepath - green; low - red.",
    ],
    answer: 0,
    explain:
      "The Precision Approach Path Indicator (PAPI) uses light units similar to the VASI but are installed in a single row of either two or four light units: High: 4 white lights. Slightly high: 1 red, 3 white lights. On glide path: 2 red, 2 white lights. Slightly low: 1 white, 3 red lights. Low: 4 red lights. Answer (B) is incorrect because the on glidepath indication of PAPI is both red and white lights. Answer (C) is incorrect because above the glidepath indication of PAPI is all white, on glidepath is two red and two white, and below glidepath is all red.",
    reference: "AIM 2-1 - Precision Approach Path Indicator (PAPI)",
  },
  {
    id: 40,
    subject: "FAA ATP",
    system: "Weather",
    q: "If an air carrier airplane's airborne radar is inoperative and thunderstorms are forecast along the proposed route of flight, an airplane may be dispatched",
    options: [
      "when able to climb and descend VFR and maintain VFR/OT en route.",
      "in VFR conditions.",
      "in day VFR conditions.",
    ],
    answer: 2,
    explain:
      "No person may dispatch an airplane under IFR or night VFR conditions when current weather reports indicate that thunderstorms, or other potentially hazardous weather conditions that can be detected with airborne weather radar, may reasonably be expected along the route to be flown, unless the weather radar is in satisfactory operating condition.",
    reference: "14 CFR Part 121 - Airborne Weather Radar Requirements",
  },
  {
    id: 41,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "If flying a published GPS departure,",
    options: [
      "the data base will contain all of the transition or departures from all runways.",
      "and if RAIM is available, manual intervention by the pilot should not be required.",
      "the GPS receiver must be set to terminal course deviation indicator sensitivity.",
    ],
    answer: 2,
    explain:
      "The GPS receiver must be set to terminal (±1 NM) course deviation indicator (CDI) sensitivity and the navigation routes contained in the data base in order to fly published IFR charted departures and DPs. Terminal RAIM should be automatically provided by the receiver. Terminal RAIM for departure may not be available unless the waypoints are part of the active flight plan rather than proceeding direct to the first destination. Answer (A) is incorrect because the data base may not contain all of the transitions or departures from all runways and some GPS receivers do not contain DPs in the data base. Answer (B) is incorrect because certain segments of a DP may require some manual intervention by the pilot, especially when radar vectored to a course or required to intercept a specific course to a waypoint.",
    reference: "AIM 1-2 - GPS Departure Procedures",
  },
  {
    id: 42,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "The most important markings on an airport are",
    options: ["ILS critical area.", "hold markings.", "taxiway identification markings."],
    answer: 1,
    explain: "The hold markings depict where the aircraft is supposed to stop and are a critical component to safe airport operations.",
    reference: "AIM 2-3 - Airport Marking Aids",
  },
  {
    id: 43,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What aural and visual indications should be observed over an ILS middle marker?",
    options: [
      "Continuous dots at the rate of six per second identified as a high-pitched tone.",
      "Continuous dashes at the rate of two per second identified as a low-pitched tone.",
      "Alternate dots and dashes identified as an intermediate tone.",
    ],
    answer: 2,
    explain:
      "The code and light identifications of marker beacons are as follows: Marker Code Light: OM dash dash dash BLUE, MM dot dash dot dash AMBER, IM dot dot dot dot WHITE, BC dot dot dot dot WHITE. Answer (A) is incorrect because continuous dots at the rate of six per second indicate an ILS inner marker. Answer (B) is incorrect because continuous dashes at the rate of two per second indicate an ILS outer marker.",
    reference: "AIM 1-1 - ILS Marker Beacons",
  },
  {
    id: 44,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "While flying in controlled airspace under IFR, the ADF fails. What action is required?",
    options: ["Descend below Class A airspace.", "Advise dispatch via company frequency.", "Notify ATC immediately."],
    answer: 2,
    explain:
      "The pilot-in-command of an aircraft operating IFR in controlled airspace shall report to ATC as soon as practical any malfunction of navigational or communication equipment that occurs in flight. Answer (A) is incorrect because controlled airspace exists far below positive control airspace (base of 18,000 feet MSL), and any loss of a navigational aid should be reported to ATC. Answer (B) is incorrect because, although this may be a common practice among the air carriers, the regulations require notification to ATC of the malfunction.",
    reference: "14 CFR Part 91 - IFR Operations: Equipment Malfunction Reports",
  },
  {
    id: 45,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Which rule applies to the use of the cockpit voice recorder erasure feature?",
    options: [
      "All recorded information may be erased, except for the last 30 minutes prior to landing.",
      "Any information more than 30 minutes old may be erased.",
      "All recorded information may be erased, unless the NTSB needs to be notified of an occurrence.",
    ],
    answer: 1,
    explain:
      "When a cockpit voice recorder is required on an airplane, it must be operated continuously from the start of the use of the checklist (before starting engines for the purpose of flight), to completion of the final checklist at the termination of flight. Information recorded more than 30 minutes earlier may be erased or otherwise obliterated. Answer (A) is incorrect because the requirement is that any information more than 30 minutes old may be erased. Answer (C) is incorrect because the requirement is to retain any information that was recorded within the last 30 minutes.",
    reference: "14 CFR Part 121 - Cockpit Voice Recorders",
  },
  {
    id: 46,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "When approaching a holding position sign for a runway approach area you must",
    options: [
      "obtain ATC clearance prior to crossing.",
      "hold only when specifically instructed by ATC.",
      "hold only when the weather is below 800 feet and 2-miles visibility.",
    ],
    answer: 0,
    explain:
      "At some airports, it is necessary to hold an aircraft on a taxiway located in the approach or departure area for a runway so that the aircraft does not interfere with operations on that runway. In these situations, a sign with the designation of the approach end of the runway followed by a 'dash' ( - ) and letters 'APCH' will be located at the holding position on the taxiway.",
    reference: "AIM 2-3 - Holding Position Signs",
  },
  {
    id: 47,
    subject: "FAA ATP",
    system: "Weather",
    q: "An air carrier airplane's airborne radar must be in satisfactory operating condition prior to dispatch, if the flight will be",
    options: [
      "conducted under VFR conditions at night with scattered thunderstorms reported en route.",
      "carrying passengers, but not if it is 'all cargo.'",
      "conducted IFR, and ATC is able to radar vector the flight around areas of weather.",
    ],
    answer: 0,
    explain:
      "No person may dispatch an airplane under IFR or night VFR conditions when current weather reports indicate that thunderstorms, or other potentially hazardous weather conditions that can be detected with airborne weather radar, may reasonably be expected along the route to be flown, unless the weather radar is in satisfactory operating condition. Answer (B) is incorrect because there is no difference between 'all cargo' and 'passenger' air carrier operations. The airborne radar must be operational prior to dispatch into an area of expected thunderstorms. Answer (C) is incorrect because airborne radar needs to be in operating condition for IFR or night VFR conditions, regardless of ATC's ability to vector the flight around the areas of weather.",
    reference: "14 CFR Part 121 - Airborne Weather Radar Requirements",
  },
  {
    id: 48,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Authorization to conduct any GPS operation under IFR requires that",
    options: [
      "the pilot review appropriate weather, aircraft flight manual (AFM), and operation of the particular GPS receiver.",
      "air carrier and commercial operators must meet the appropriate provisions of their approved operations specifications.",
      "the equipment be approved in accordance with TSO C-115a.",
    ],
    answer: 1,
    explain:
      "Properly certified GPS equipment may be used as a supplemental means of IFR navigation for domestic enroute, terminal operations, and certain instrument approach procedures (IAPs). This approval permits the use of GPS in a manner that is consistent with current navigation requirements as well as approved air carrier operations specifications. Answer (A) is incorrect because while the pilot is responsible for reviewing the weather before any flight, this requirement is not specific to GPS operation. Answer (C) is incorrect because the equipment must be approved in accordance with TSO C-129, not TSO C-115a.",
    reference: "AIM 1-1 - GPS Operations Authorization",
  },
  {
    id: 49,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "You have just landed at JFK and the tower tells you to call ground control when clear of the runway. You are considered clear of the runway when",
    options: [
      "the aft end of the aircraft is even with the taxiway location sign.",
      "the flight deck area of the aircraft is even with the hold line.",
      "all parts of the aircraft have crossed the hold line.",
    ],
    answer: 2,
    explain: "An aircraft is not 'clear of the runway' until all parts have crossed the applicable holding position marking.",
    reference: "AIM 4-3 - Clear of the Runway",
  },
  {
    id: 50,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What is the advantage of a three-bar VASI?",
    options: [
      "Pilots have a choice of glide angles.",
      "A normal glide angle is afforded both high and low cockpit aircraft.",
      "The three-bar VASI is much more visible and can be used at a greater height.",
    ],
    answer: 1,
    explain:
      "Three-bar VASI installations provide two visual glidepaths. The lower glidepath is provided by the near and middle bars and is normally set at 3° while the upper glidepath, provided by the middle and far bars is normally 1/4° higher. This higher glidepath is intended for use only by high cockpit aircraft to provide a sufficient threshold crossing height. Answer (A) is incorrect because the three-bar VASI provides a glide slope for high cockpit aircraft, not a choice of glide angles for pilots. Answer (C) is incorrect because both the two- and three-bar VASI are visible from 3-5 miles during the day and up to 20 miles or more at night, and the three-bar does not provide use at a greater height.",
    reference: "AIM 2-1 - Three-Bar VASI",
  },
  {
    id: 51,
    subject: "FAA ATP",
    system: "Human Factors",
    q: "Automation in aircraft has proven",
    options: ["to present new hazards in its limitations.", "that automation is basically flawless.", "effective in preventing accidents."],
    answer: 0,
    explain:
      "Advanced avionics were designed to increase safety as well as the utility of the aircraft. However, the systems are not infallible. While automation does help prevent many existing types of errors, it has also created new kinds of errors.",
    reference: "AC 120-71 - Flight Crew Procedures and Automation",
  },
  {
    id: 52,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "If a required instrument on a multiengine airplane becomes inoperative, which document dictates whether the flight may continue en route?",
    options: ["A Master Minimum Equipment List for the airplane.", "Original dispatch release.", "Certificate holder's manual."],
    answer: 2,
    explain:
      "Each certificate holder's manual must contain enroute flight, navigation, and communication procedures for the dispatch, release or continuance of flight if any item of equipment required for the particular type of operation becomes inoperative or unserviceable en route.",
    reference: "14 CFR Part 121 - Certificate Holder's Manual Requirements",
  },
  {
    id: 53,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "If the ambient temperature is warmer than standard at FL350, what is the density altitude compared to pressure altitude?",
    options: [
      "Lower than pressure altitude.",
      "Higher than pressure altitude.",
      "Impossible to determine without information on possible inversion layers at lower altitudes.",
    ],
    answer: 1,
    explain:
      "Pressure altitude is the altitude indicated when the altimeter is set to the standard sea level pressure (29.92\" Hg). Density altitude is pressure altitude corrected for nonstandard temperature. A warmer than standard temperature will result in a density altitude higher than the pressure altitude. Answer (A) is incorrect because density altitude is higher when air temperature is warmer than standard. Answer (C) is incorrect because density altitude is pressure altitude corrected for nonstandard temperatures. Pressure altitude is based on a standard pressure atmosphere at a particular altitude, and inversion layers at lower levels have no effect on pressure altitude.",
    reference: "AIM 7-2 - Density Altitude",
  },
  {
    id: 54,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Routes that require a flight navigator are listed in the",
    options: ["Airplane Flight Manual.", "International Aeronautical Information Manual.", "Air Carrier's holder's Operations Specifications."],
    answer: 2,
    explain:
      "Operations where a flight navigator, special navigation equipment, or both are required, are specified in the operations specifications of the air carrier or commercial operator.",
    reference: "14 CFR Part 121 - Flight Navigator Requirements",
  },
  {
    id: 55,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Takeoff hold lights (THL) are a part of",
    options: [
      "automatic runway status light system.",
      "tower operated runway stop light system.",
      "ground controller operated ramp status holding light system.",
    ],
    answer: 0,
    explain:
      "Runway Status Light (RWSL) System is a fully automated system that provides runway status information to pilots and surface vehicle operators to clearly indicate when it is unsafe to enter, cross, takeoff from, or land on a runway. The RWSL system processes information from surveillance systems and activates Runway Entrance Lights (REL), Takeoff Hold Lights (THL), Runway Intersection Lights (RIL), and Final Approach Runway Occupancy Signal (FAROS) in accordance with the position and velocity of the detected surface traffic and approach traffic. REL, THL, and RIL are in-pavement light fixtures that are directly visible to pilots and surface vehicle operators.",
    reference: "AIM 2-1 - Runway Status Light System (RWSL)",
  },
  {
    id: 56,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What record shall be made by the pilot performing a VOR operational check?",
    options: [
      "The date, frequency of VOR or VOT, number of hours flown since last check, and signature in the aircraft log.",
      "The date, place, bearing error, and signature in the aircraft log or other record.",
      "The date, approval or disapproval, tach reading, and signature in the aircraft log or other permanent record.",
    ],
    answer: 1,
    explain:
      "Each person making the VOR operational check required by regulations shall enter the date, place, bearing error and sign the aircraft log or other record. Answer (A) is incorrect because neither the frequency nor number of hours flown since the last check need to be entered in the log or record. Answer (C) is incorrect because neither the tach reading nor approval or disapproval need to be entered in the record of a VOR operational check.",
    reference: "14 CFR Part 91 - VOR Equipment Check",
  },
  {
    id: 57,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What is the purpose of REIL?",
    options: [
      "Identification of a runway surrounded by a preponderance of other lighting.",
      "Identification of the touchdown zone to prevent landing short.",
      "Establish visual descent guidance information during an approach.",
    ],
    answer: 0,
    explain:
      "Runway End Identifier Lights (REIL) are effective for: 1. Identification of a runway surrounded by numerous other lighting systems, 2. Identification of a runway which lacks contrast with surrounding terrain, or 3. Identification of a runway during reduced visibility. Answer (B) is incorrect because the touchdown zone is identified by in-runway lighting of two rows of transverse light bars on either side of the runway centerline from 100 feet to 3,000 feet from the landing threshold. Answer (C) is incorrect because a VASI (not REIL) assists in providing visual descent guidance information during an approach.",
    reference: "AIM 2-1 - Runway End Identifier Lights (REIL)",
  },
  {
    id: 58,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "In addition to the localizer, glide slope, marker beacons, approach lighting, and HIRL, which ground components are required to be operative for a Category II instrument approach to a DH below 150 feet AGL?",
    options: ["RCLS and REIL.", "Radar, VOR, ADF, runway exit lights, and RVR.", "Each required ground component."],
    answer: 2,
    explain:
      "In addition to localizer, glide slope, marker beacons, and approach light system a Category II ILS must have high-intensity runway lights (HIRL), runway centerline lights (RCLS), touchdown zone lights (TDZL), and runway visual range (RVR). Answer (A) is incorrect because runway end identifier lights (REIL) are used to provide rapid identification of the approach end of a runway. Answer (B) is incorrect because radar is not a required ground component for Category II ILS operations.",
    reference: "AIM 1-1 - Category II ILS Ground Components",
  },
  {
    id: 59,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "An air carrier operates a flight in VFR over-the-top conditions where pilotage is not used. What radio navigation equipment is required?",
    options: ["single VOR and DME installed.", "dual approved independent navigation systems.", "dual VOR, ILSs, and DME."],
    answer: 1,
    explain:
      "Air carrier airplanes operating in VFR over-the-top conditions where pilotage is not used must be equipped with dual approved independent navigation systems appropriate to the route to be flown.",
    reference: "14 CFR Part 121 - Navigation Equipment Requirements",
  },
];
