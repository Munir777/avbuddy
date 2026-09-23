import type { Question } from "../../../types";

// FAA ATP written-test question bank, batch 12.
// Source: Prepware "Study Session Results" printout, source questions 836-911
// (PDF pages 167-181 of 258).
// This page range continues the IFR/ATC-procedures and airspace-regulations
// theme, still heavily mixed with approach-plate, SID/STAR, and holding-
// pattern-entry-diagram questions that depend on charts not included in the
// source PDF. Skipped original source numbers: 837, 838, 839, 841, 845, 846,
// 847, 849, 854, 856, 861, 862, 863, 864, 867, 868, 869, 870, 873, 874, 875,
// 878, 880, 883, 887, 891, 892, 896, 897, 898, 903, 904, 906, 907, 909, 911.
export const FAA_ATP_BATCH_12_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the maximum holding speed for a civil turbojet holding at a civil airport at 15,000 feet MSL, unless a higher speed is required due to turbulence or icing and ATC is notified?",
    options: ["265 knots.", "230 knots.", "250 knots."],
    answer: 0,
    explain:
      "For all aircraft between MHA (minimum holding altitude) and 6,000 feet MSL, holding speed is 200 KIAS. For all aircraft between 6,001 and 14,000 feet MSL, holding speed is 230 KIAS. For all aircraft 14,000 feet MSL and above, holding speed is 265 KIAS. Exceptions to these speeds will be indicated by an icon.",
    reference: "AIM 5-3-8 - Holding",
  },
  {
    id: 2,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Who is responsible for collision avoidance in an MOA?",
    options: ["Military controllers.", "ATC controllers.", "Each pilot."],
    answer: 2,
    explain:
      "Pilots operating under VFR should exercise extreme caution while flying within an MOA when military activity is being conducted.",
    reference: "AIM 3-4-5 - Military Operations Areas",
  },
  {
    id: 3,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "An airport may not be qualified for alternate use if",
    options: [
      "the airport has AWOS-3 weather reporting.",
      "the airport is located next to a restricted or prohibited area.",
      "the NAVAIDs used for the final approach are unmonitored.",
    ],
    answer: 2,
    explain:
      "Not all airports can be used as an alternate. An airport may not be qualified for alternate use if the airport NAVAID is unmonitored, is GPS-based, or if it does not have weather reporting capability. Answer (A) is incorrect because an airport can qualify for alternate use if it has any weather reporting capability. Answer (B) is incorrect because an airport can qualify for alternate use even if it is located in a restricted or prohibited area.",
    reference: "14 CFR 121.625",
  },
  {
    id: 4,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "A pilot is operating in Class G airspace. If existing weather conditions are below those for VFR flight, an IFR flight plan must be filed and an ATC clearance received prior to",
    options: [
      "takeoff if weather conditions are below IFR minimums.",
      "entering controlled airspace.",
      "entering IFR weather conditions.",
    ],
    answer: 1,
    explain:
      "No person may operate an aircraft in Class A, B, C, D or E airspace under IFR unless an IFR flight plan has been filed and an appropriate ATC clearance has been received. Answer (A) is incorrect because an IFR flight plan and an ATC clearance are not required to fly in IMC (instrument meteorological conditions) in Class G airspace. Answer (C) is incorrect because an IFR flight plan and an ATC clearance are not required to fly in IMC (instrument meteorological conditions) in Class G airspace.",
    reference: "14 CFR 91.173",
  },
  {
    id: 5,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "What action is expected of an aircraft upon landing at a controlled airport?",
    options: [
      "Continue taxiing in the landing direction until advised by the tower to switch to ground control frequency.",
      "Exit the runway at the nearest suitable taxiway and remain on tower frequency until instructed otherwise.",
      "Exit the runway at the nearest suitable taxiway and switch to ground control upon crossing the taxiway holding lines.",
    ],
    answer: 1,
    explain:
      "After landing, unless otherwise instructed by the control tower, continue to taxi in the landing direction, proceed to the nearest suitable taxiway and exit the runway without delay. Do not turn on another runway or make a 180° turn to taxi back on an active runway or change to ground control frequency while on the active runway without authorization from the tower. A pilot who has just landed should not change from the tower frequency to the ground control frequency until he is directed to do so by the controller. Answer (A) is incorrect because upon landing, the pilot should exit the runway at the nearest suitable taxiway to clear the runway for other traffic. Answer (C) is incorrect because while the crossing of the taxiway hold lines indicates clearing of the active runway, a pilot should not switch to ground control until directed to do so by the controller. Switching without permission may be confusing to ATC.",
    reference: "AIM 4-3-20 - Exiting the Runway After Landing",
  },
  {
    id: 6,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Pilots are responsible for knowing",
    options: [
      "if they can conduct an RNP approach with an arc at a designated airspeed.",
      "if the RNP missed approach is normal or reduced.",
      "if the RNP registration is complete.",
    ],
    answer: 0,
    explain:
      "Some RNP approaches have a curved path, also called a radius-to-a-fix (RF) leg. Since not all aircraft have the capability to fly these arcs, pilots are responsible for knowing whether or not they can conduct an RNP approach with an arc.",
    reference: "AIM 5-4-18 - RNP AR Instrument Approach Procedures",
  },
  {
    id: 7,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "While being vectored to the final approach course of an IFR approach, when may the pilot descend to published altitudes?",
    options: [
      "Anytime the flight is on a published leg of an approach chart.",
      "When the flight is within the 10-mile ring of a published approach.",
      "Only when approach control clears the flight for the approach.",
    ],
    answer: 2,
    explain:
      "When operating on an unpublished route or while being radar vectored, the pilot, when approach clearance is received, in addition to complying with the minimum altitudes for IFR operations, shall maintain the last assigned altitude unless a different altitude is assigned by ATC, or until the aircraft is established on a segment of published route or IAP. This implies that even if a radar vector should happen to put a flight on a published route, the pilot may not descend until cleared for the approach. Answer (A) is incorrect because you may only descend if cleared. Answer (B) is incorrect because the 10-mile ring has nothing to do with descent clearance.",
    reference: "AIM 5-4-6 - Approach Clearance",
  },
  {
    id: 8,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "When the forecast weather conditions for a destination and alternate airport are considered marginal for a domestic air carrier's operation, what specific action should the dispatcher or pilot in command take?",
    options: [
      "List an airport where the forecast weather is not marginal as the alternate.",
      "Add 1 additional hour of fuel based on cruise power settings for the airplane in use.",
      "List at least one additional alternate airport.",
    ],
    answer: 2,
    explain:
      "When weather conditions forecast for the destination and first alternate airport are marginal, at least one additional alternate must be designated.",
    reference: "14 CFR 121.625",
  },
  {
    id: 9,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What action should a pilot take if asked by ARTCC to 'VERIFY 9,000' and the flight is actually maintaining 8,000?",
    options: ["Immediately climb to 9,000.", "Report climbing to 9,000.", "Report maintaining 8,000."],
    answer: 2,
    explain:
      "At times controllers will ask pilots to verify that they are at a particular altitude. Pilots should confirm that they are at the altitude stated. If this is not the case, they should inform the controller of the actual altitude being maintained. Pilots should not take action to change their actual altitude to the altitude stated in the controller's verification request unless the controller specifically authorizes a change. Answer (A) is incorrect because pilots should not take action to change their actual altitude to the altitude stated in the controller's verification request unless the controller specifically authorizes a change. Answer (B) is incorrect because pilots should not take action to change their actual altitude to the altitude stated in the controller's verification request unless the controller specifically authorizes a change.",
    reference: "AIM 4-4-8 - Altitude Verification",
  },
  {
    id: 10,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What is the maximum distance that a departure alternate airport may be from the departure airport for a two-engine airplanes?",
    options: [
      "1 hour at normal cruise speed in still air with both engines operating.",
      "1 hour at normal cruise speed in still air with one engine operating.",
      "2 hours at normal cruise speed in still air with one engine operating.",
    ],
    answer: 1,
    explain:
      "If the weather conditions at the airport of takeoff are below the landing minimums in the certificate holder's operations specifications for that airport, no person may dispatch or release an aircraft from that airport unless the dispatch or flight release specifies an alternate airport located within the following distances from the airport of takeoff. 1. Aircraft having two engines: Not more than 1 hour from the departure airport at normal cruising speed in still air with one engine inoperative. 2. Aircraft having three or more engines: Not more than 2 hours from the departure airport at normal cruising speed in still air with one engine inoperative. Answer (A) is incorrect because the maximum distance is determined with one engine operating. Answer (C) is incorrect because 2 hours is the limit for airplanes with three or more engines with one engine inoperative.",
    reference: "14 CFR 121.621",
  },
  {
    id: 11,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "The visibility criteria for a particular instrument approach procedure is RVR 40. What minimum ground visibility may be substituted for the RVR value?",
    options: ["5/8 SM.", "3/4 SM.", "7/8 SM."],
    answer: 1,
    explain: "RVR minimum may be converted to ground visibility using FAA Legend 7.",
    reference: "FAA Legend 7 - RVR/Visibility Conversion",
  },
  {
    id: 12,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What service is provided for aircraft operating within the outer area of Class C airspace?",
    options: [
      "The same as within Class C airspace when communications and radar contact is established.",
      "Radar vectors to and from secondary airports within the outer area.",
      "Basic radar service only when communications and radar contact is established.",
    ],
    answer: 0,
    explain:
      "The same services are provided for aircraft operating within the outer area, as within the Class C airspace, when two-way communication and radar contact are established. Answer (B) is incorrect because providing radar vectors to and from secondary airports within the outer circle is not a mandated service of ATC. Answer (C) is incorrect because the same services are provided in the outer area as within Class C airspace, once two-way communications and radar contact are established.",
    reference: "AIM 3-2-4 - Class C Airspace",
  },
  {
    id: 13,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "The GPS Approach Overlay Program permits pilots to use GPS avionics when IFR for flying existing instrument approach procedures, except",
    options: ["LOC, LDA and ADF.", "LDA, TAC and SDF.", "SDF, LOC and LDA."],
    answer: 2,
    explain:
      "The GPS Approach Overlay Program permits pilots to use GPS avionics under IFR for flying existing instrument approach procedures, except localizer (LOC), localizer directional aid (LDA), and simplified directional facility (SDF) procedures.",
    reference: "AIM 1-1-19 - Global Positioning System (GPS)",
  },
  {
    id: 14,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When holding at an NDB, at what point should the timing begin for the second leg outbound?",
    options: [
      "Abeam the holding fix or when the wings are level after completing the turn to the outbound heading, whichever occurs first.",
      "At the end of a 1-minute standard rate turn after station passage.",
      "When abeam the holding fix.",
    ],
    answer: 2,
    explain:
      "Outbound leg timing begins over or abeam the holding fix, whichever occurs later. If the abeam position cannot be determined, start timing when the turn to outbound is complete. Answer (A) is incorrect because the pilot should start the timing when the turn is complete, only when a position abeam the fix cannot be determined. Answer (B) is incorrect because abeam the fix is preferable and should be used rather than at the completion of a standard rate turn, especially if turn completion occurs before coming abeam the fix.",
    reference: "AIM 5-3-8 - Holding",
  },
  {
    id: 15,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Aircraft navigating by GPS are considered, on the flight plan, to be",
    options: ["RNAV equipped.", "Astrotracker equipped.", "FMS/EFIS equipped."],
    answer: 0,
    explain: "Aircraft navigating by GPS are considered to be RNAV aircraft. Therefore, the appropriate equipment suffix must be included in the ATC flight plan.",
    reference: "AIM 5-1-8 - Equipment Suffixes",
  },
  {
    id: 16,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When cleared for an IFR approach to an uncontrolled airport with no FSS, what precaution should the pilot take after being advised to change to advisory frequency?",
    options: [
      "Monitor ATC for traffic advisories as well as UNICOM.",
      "Broadcast position and intentions on the Common Traffic Advisory Frequency and monitor the frequency.",
      "Wait until visual contact is made with the airport and then broadcast position and intentions to land on UNICOM.",
    ],
    answer: 1,
    explain:
      "When making an IFR approach to an airport not served by a tower or FSS, after the ATC controller advises, 'CHANGE TO ADVISORY FREQUENCY APPROVED' you should broadcast your intentions, including the type of approach being executed, your position, and when you are over the outer marker or final approach fix. Continue to monitor the appropriate frequency (UNICOM, etc.) for reports from other pilots. Answer (A) is incorrect because after ATC advises the pilot to change to advisory frequency, ATC will no longer be able to provide traffic advisories. Answer (C) is incorrect because a pilot should always broadcast intentions and continually update position reports on UNICOM, not wait until visual contact is made with airport.",
    reference: "AIM 4-1-9 - Traffic Advisory Practices at Airports Without Operating Control Towers",
  },
  {
    id: 17,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "When a departure alternate is required for a three-engine air carrier flight, it must be located at a distance not greater than",
    options: [
      "2 hours from the departure airport at normal cruising speed in still air with one engine not functioning.",
      "1 hour from the departure airport at normal cruising speed in still air with one engine inoperative.",
      "2 hours from the departure airport at normal cruising speed in still air.",
    ],
    answer: 0,
    explain:
      "If the weather conditions at the airport of takeoff are below the landing minimums in the certificate holder's operations specifications for that airport, no person may dispatch or release an aircraft from that airport unless the dispatch or flight release specifies an alternate airport located within the following distances from the airport of takeoff. 1. Aircraft having two engines: Not more than 1 hour from the departure airport at normal cruising speed in still air with one engine inoperative. 2. Aircraft having three or more engines: Not more than 2 hours from the departure airport at normal cruising speed in still air with one engine inoperative. Answer (B) is incorrect because 1 hour is correct for a two-engine airplane. Answer (C) is incorrect because it does not contain the words 'with one engine inoperative'.",
    reference: "14 CFR 121.621",
  },
  {
    id: 18,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What cloud clearance must be complied with when authorized to maintain 'VFR on Top'?",
    options: [
      "May maintain VFR clearance above, below, or between layers.",
      "Must maintain VFR clearance above or below.",
      "May maintain VFR clearance above or below, but not between layers.",
    ],
    answer: 0,
    explain:
      "ATC authorization to 'maintain VFR-On-Top' is not intended to restrict pilots so that they must operate only above an obscuring meteorological formation. Instead, it permits operations above, below, between or in areas where there is no meteorological obstruction.",
    reference: "AIM 4-4-8 - VFR-On-Top",
  },
  {
    id: 19,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "An airport is not listed in a domestic Air Carrier's Operations Specifications and does not have the prescribed takeoff weather minimums. What are the minimum weather conditions required for takeoff?",
    options: ["800-2.", "900-1.", "1000-1/2."],
    answer: 0,
    explain:
      "When departing from an alternate airport within the United States which is not listed in the operations specifications, an air carrier must use the 14 CFR Part 97 takeoff minimums. When no takeoff minimums are specified, the air carrier must use a ceiling and visibility of 800-2, 900-1-1/2, or 1,000-1. Answer (B) is incorrect because a 900-foot ceiling requires 1.5 miles visibility. Answer (C) is incorrect because a 1,000-foot ceiling requires 1 mile visibility.",
    reference: "14 CFR 97; 14 CFR 121.591",
  },
  {
    id: 20,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What separation or service by ATC is afforded pilots authorized 'VFR on Top'?",
    options: ["The same afforded all IFR flights.", "3 miles horizontally instead of 5.", "Traffic advisories only."],
    answer: 2,
    explain:
      "Pilots operating VFR-On-Top may receive traffic information from ATC on other pertinent IFR or VFR aircraft. Answer (A) is incorrect because separation will be provided for all IFR flights except those operating with a VFR-On-Top clearance. Answer (B) is incorrect because, when radar is employed for separation of aircraft at the same altitude, a minimum of 3 miles separation is provided between airplanes operating within 40 miles of the radar antenna site, and 5 miles between aircraft operating beyond 40 miles from the antenna site.",
    reference: "AIM 4-4-8 - VFR-On-Top",
  },
  {
    id: 21,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Which dispatch requirement applies to a flag air carrier that is scheduled for a 7-hour IFR flight?",
    options: [
      "No alternate airport is required if the forecast weather at the ETA at the destination airport is at least 1,500 feet and 3 miles.",
      "An alternate airport is not required if the ceiling will be at least 1,500 feet above the lowest circling MDA.",
      "An alternate airport is required.",
    ],
    answer: 2,
    explain:
      "All flag air carrier flights over 6 hours require an alternate airport. Answer (A) is incorrect because whenever the scheduled flight exceeds 6 hours, a flag air carrier must list an alternate regardless of the weather. Answer (B) is incorrect because whenever the scheduled flight exceeds 6 hours, a flag air carrier must list an alternate regardless of the weather.",
    reference: "14 CFR 121.621",
  },
  {
    id: 22,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the purpose of the term 'hold for release' when included in an IFR clearance?",
    options: [
      "A procedure for delaying departure for traffic volume, weather, or need to issue further instructions.",
      "When an IFR clearance is received by telephone, the pilot will have time to prepare for takeoff prior to being released.",
      "Gate hold procedures are in effect and the pilot receives an estimate of the time the flight will be released.",
    ],
    answer: 0,
    explain:
      "ATC may issue 'hold for release' instructions in a clearance to delay an aircraft's departure for traffic management reasons (i.e., weather, traffic volume, etc.). Answer (B) is incorrect because, when a pilot receives an IFR clearance via telephone, it is normally because he/she is departing from an uncontrolled airport. In this case, ATC would issue a clearance void time, not a hold for release. Answer (C) is incorrect because gate hold procedures are in effect whenever departure delays exceed (or are expected to exceed) 15 minutes. This procedure is not a way for ATC to delay an airplane's departure.",
    reference: "AIM Pilot/Controller Glossary - Hold for Release",
  },
  {
    id: 23,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "When the approach procedure involves a procedure turn the maximum speed that should be observed from first overheading the course reversal IAF through the procedure turn is",
    options: ["180 knots IAS.", "200 knots TAS.", "200 knots IAS."],
    answer: 2,
    explain:
      "When the approach procedure involves a procedure turn, a maximum speed of not greater than 200 knots (IAS) should be observed from first overheading the course reversal IAF through the procedure turn maneuver, to ensure containment within the obstruction clearance area.",
    reference: "AIM 5-4-9 - Procedure Turn",
  },
  {
    id: 24,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Which reports are always required when on an IFR approach not in radar contact?",
    options: [
      "Leaving FAF inbound or outer marker inbound and missed approach.",
      "Leaving FAF inbound, leaving outer marker inbound or outbound, and missed approach.",
      "Leaving FAF inbound, leaving outer marker inbound or outbound, procedure turn outbound and inbound, and visual contact with the runway.",
    ],
    answer: 0,
    explain:
      "The following reports should be made when not in radar contact: 1. When over designated compulsory reporting points 2. When leaving the final approach fix inbound 3. When it becomes apparent that an ETA is in error by more than 3 minutes. Answer (B) is incorrect because a pilot is required to report leaving the outer marker inbound on final approach. Answer (C) is incorrect because a pilot is not required to report leaving the outer marker outbound, the execution of a procedure turn, and/or visual contact with the runway.",
    reference: "AIM 5-3-3 - Additional Reports",
  },
  {
    id: 25,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When is radar service terminated while vectored for an IFR approach at an uncontrolled airport?",
    options: [
      "Only upon landing or advised to change to advisory frequency.",
      "When aligned on the final approach course.",
      "When cleared for the approach.",
    ],
    answer: 0,
    explain:
      "Whether aircraft are vectored to the appropriate final approach course or provide their own navigation on published routes to it, radar service is automatically terminated when the landing is completed or when instructed to change to advisory frequency at uncontrolled airports, whichever occurs first. Answer (B) is incorrect because when established on the final approach course, radar separation will be maintained and the pilot is expected to complete the approach utilizing the approach aid designated in the clearance (ILS, VOR, etc.). Answer (C) is incorrect because when cleared for the approach, approach control will continue to maintain radar separation and the pilot is expected to complete the approach utilizing the approach aid designated in the clearance (ILS, VOR, etc.).",
    reference: "AIM 5-4-4 - Radar Approaches",
  },
  {
    id: 26,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What is the maximum acceptable tolerance for penetrating a domestic ADIZ over land?",
    options: ["Plus or minus 10 miles; plus or minus 10 minutes.", "Plus or minus 20 miles; plus or minus 5 minutes.", "Plus or minus 10 miles; plus or minus 5 minutes."],
    answer: 2,
    explain:
      "The aircraft position tolerances over land in a domestic ADIZ is within ±5 minutes from the estimated time over a reporting point or point of penetration and within 10 NM from the centerline of an intended track over an estimated reporting point or penetration point. Answer (A) is incorrect because penetration of an ADIZ within 10 minutes is not an acceptable tolerance for either over water or land. Answer (B) is incorrect because the maximum acceptable tolerance for penetrating over water (a coastal ADIZ) is within 20 NM of the intended track and within 5 minutes of the estimated penetration time.",
    reference: "14 CFR 99 - Domestic ADIZ",
  },
  {
    id: 27,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When a speed adjustment is necessary to maintain separation, what minimum speed may ATC request of a turbine-powered aircraft operating below 10,000 feet?",
    options: ["200 knots.", "210 knots.", "250 knots."],
    answer: 1,
    explain:
      "When a speed adjustment is necessary to maintain separation, the minimum airspeed for a turbine-powered aircraft operated below 10,000 feet is 210 knots. Answer (A) is incorrect because 200 knots is the maximum airspeed of any airplane operating within Class C or D airspace, a VFR-designated corridor through Class B airspace, or in airspace underlying Class B airspace. Answer (C) is incorrect because 250 knots is the maximum airspeed of any airplane operating below 10,000 feet MSL.",
    reference: "AIM 4-4-12 - Speed Adjustments",
  },
  {
    id: 28,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What pilot certification and aircraft equipment are required for operating in Class C airspace?",
    options: [
      "No specific certification but a two-way radio.",
      "At least a Private Pilot Certificate and two-way radio.",
      "At least a Private Pilot Certificate, two-way radio, and a TSO-C74b transponder.",
    ],
    answer: 0,
    explain:
      "No specific pilot certification is required for operation within Class C airspace. The aircraft must be equipped with a two-way radio for operations within Class C airspace. Answer (B) is incorrect because there is no specific pilot certificate required, although two-way radio and transponder are required. Answer (C) is incorrect because there is no specific pilot certificate required, although two-way radio and transponder are required.",
    reference: "14 CFR 91.130, 91.215",
  },
  {
    id: 29,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What action should the pilot take when 'gate hold' procedures are in effect?",
    options: [
      "Contact ground control prior to starting engines for sequencing.",
      "Taxi into position and hold prior to requesting clearance.",
      "Start engines, perform pretakeoff check, and request clearance prior to leaving the parking area.",
    ],
    answer: 0,
    explain:
      "When gate hold procedures are in effect, pilots should contact ground control or clearance delivery prior to starting engines, because departure delays are expected to exceed 15 minutes. Answer (B) is incorrect because taxi into position means that the pilot is on the active runway and ready for takeoff. This is not a position where ATC would issue an IFR clearance. Answer (C) is incorrect because pilots should contact ground control for sequencing before starting engines.",
    reference: "AIM 4-3-13 - Gate Holding Due to Departure Delays",
  },
  {
    id: 30,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What services are provided for aircraft operating within Class C airspace?",
    options: [
      "Sequencing of arriving aircraft, separation of aircraft (except between VFR aircraft), and traffic advisories.",
      "Sequencing of arriving aircraft (except VFR aircraft), separation between all aircraft, and traffic advisories.",
      "Sequencing of all arriving aircraft, separation between all aircraft, and traffic advisories.",
    ],
    answer: 0,
    explain:
      "ATC services within a Class C airspace include: 1. Sequencing of all arriving aircraft to the primary Class C airport, 2. Standard IFR separation between IFR aircraft, 3. Between IFR and VFR aircraft - traffic advisories and conflict resolution so that radar targets do not touch, or 500 feet vertical separation, and 4. Between VFR aircraft - traffic advisories and as appropriate, safety alerts. Answer (B) is incorrect because the services in the Class C airspace provide sequencing of all aircraft to the primary/Class C airspace airport. Answer (C) is incorrect because the services in the Class C airspace do not provide separation between VFR aircraft, only traffic advisories and safety alerts.",
    reference: "AIM 3-2-4 - Class C Airspace",
  },
  {
    id: 31,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "A landing weight increase of 10% will result in a landing distance increase of approximately",
    options: ["7%.", "10%.", "15%."],
    answer: 1,
    explain:
      "The minimum landing distance will vary directly as the gross weight varies. For example, a 10% increase in gross weight at landing would cause a 5% increase in landing velocity and a 10% increase in landing distance.",
    reference: "FAA Airplane Flying Handbook - Landing Performance",
  },
  {
    id: 32,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What special consideration is given for turbine-powered aircraft when 'gate hold' procedures are in effect?",
    options: [
      "They are given preference for departure over other aircraft.",
      "They are expected to be ready for takeoff when they reach the runway or warmup block.",
      "They are expected to be ready for takeoff prior to taxi and will receive takeoff clearance prior to taxi.",
    ],
    answer: 1,
    explain:
      "Even with gate holds in effect, the tower controller will consider that pilots of turbine-powered aircraft are ready for takeoff when they reach the runway or warm up block unless advised otherwise. Answer (A) is incorrect because, when gate hold procedures are in effect, sequencing of all airplanes is based on the initial call-up to ground control or clearance delivery. Answer (C) is incorrect because a pilot of any airplane should be ready to taxi prior to requesting taxi, and takeoff clearance is received prior to takeoff.",
    reference: "AIM 4-3-13 - Gate Holding Due to Departure Delays",
  },
  {
    id: 33,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "If visual reference is lost while circling to land from an instrument approach, what action(s) should the pilot take?",
    options: [
      "Make a climbing turn toward the landing runway until established on the missed approach course.",
      "Turn toward the landing runway maintaining MDA, and if visual reference is not regained, perform missed approach.",
      "Make a climbing turn toward the VOR/NDB, and request further instructions.",
    ],
    answer: 0,
    explain:
      "If visual reference is lost while circling to land from an instrument approach, the missed approach specified for that particular procedure must be followed. To become established on the prescribed missed approach course, the pilot should make an initial climbing turn toward the landing runway and continue the turn until he is established on the missed approach course. Answer (B) is incorrect because while turning toward the runway, a climbing turn should be established. Answer (C) is incorrect because a pilot should make a climbing turn toward the runway to ensure obstacle clearance while becoming established on the missed approach course.",
    reference: "AIM 5-4-20 - Missed Approach",
  },
  {
    id: 34,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When should an aircraft depart if issued an EDCT?",
    options: [
      "No earlier than 5 minutes before and no later than 5 minutes after the EDCT.",
      "No later than 5 minutes before and no earlier than 5 minutes after the EDCT.",
      "No earlier than 15 minutes before and no later than 15 minutes after the EDCT.",
    ],
    answer: 0,
    explain:
      "The EDCT is the runway release time assigned to an aircraft included in traffic management programs. Aircraft are expected to depart no earlier than 5 minutes before, and no later than 5 minutes after the EDCT.",
    reference: "AIM Pilot/Controller Glossary - EDCT",
  },
  {
    id: 35,
    subject: "FAA ATP",
    system: "Airport & Approach Operations",
    q: "Precision runway monitoring requires",
    options: [
      "pilot responsibility to monitor 2 simultaneous radios.",
      "pilot responsibility to monitor 2 ILS receivers.",
      "detailed performance during the 'decision region': 1/3 dot localizer and 1/2 dot glideslope.",
    ],
    answer: 0,
    explain: "The aircraft flying the ILS/PRM or LDA/PRM approach must have the capability of enabling the pilots to listen to two communications frequencies simultaneously.",
    reference: "AIM 5-4-15 - Simultaneous Close Parallel Approaches (PRM)",
  },
  {
    id: 36,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "At what maximum indicated airspeed may a reciprocating-engine-powered airplane be operated within Class D airspace?",
    options: ["156 knots.", "180 knots.", "200 knots."],
    answer: 2,
    explain:
      "Unless otherwise authorized or required by ATC, no person may operate an aircraft within Class D airspace at an indicated airspeed of more than 200 knots. Answer (A) is incorrect because 156 knots was the old maximum authorized airspeed for reciprocating aircraft in Class D airspace (it is now 200 knots). Answer (B) is incorrect because 180 knots was the old maximum authorized airspeed for turbine-powered aircraft in Class D airspace (it is now 200 knots).",
    reference: "14 CFR 91.117",
  },
  {
    id: 37,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "The minimum weather conditions that must exist for a domestic air carrier flight to take off from an airport that is not listed in the Air Carrier's Operations Specifications (takeoff minimums are not prescribed for that airport) is",
    options: ["800-2, 1,100-1, or 900-1-1/2.", "1,000-1, 900-1/4, or 800-2.", "1,000-1, 900-1-1/2, or 800-2."],
    answer: 2,
    explain:
      "When departing from an alternate airport within the United States which is not listed in the operations specifications, an air carrier must use the 14 CFR Part 97 takeoff minimums. When no takeoff minimums are specified, the air carrier must use a ceiling and visibility of 800-2, 900-1-1/2, or 1,000-1.",
    reference: "14 CFR 97; 14 CFR 121.591",
  },
  {
    id: 38,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What is the maximum indicated airspeed a turbine-powered aircraft may be operated below 10,000 feet MSL?",
    options: ["288 knots.", "250 knots.", "230 knots."],
    answer: 1,
    explain: "Unless otherwise authorized by the Administrator, no person may operate an aircraft below 10,000 feet MSL at an indicated airspeed of more than 250 knots (288 MPH).",
    reference: "14 CFR 91.117",
  },
  {
    id: 39,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "When planning to use RNAV equipment with GPS input for an instrument approach at a destination airport, any required alternate airport must have an available instrument approach procedure that does not",
    options: [
      "require the use of GPS except when the RNAV system has a WAAS input.",
      "require the use of GPS except when the RNAV system has an IRU input.",
      "require the use of GPS except when dual, independent GPS receivers are installed.",
    ],
    answer: 0,
    explain:
      "Aircraft using GPS navigation equipment under IFR for domestic en route, terminal operations, and certain IAPs must be equipped with an approved and operational alternate means of navigation appropriate to the flight. However, a required alternate airport may be selected if it uses an RNAV system with WAAS equipment.",
    reference: "AIM 1-1-19 - Global Positioning System (GPS)",
  },
  {
    id: 40,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Under what condition may a pilot file an IFR flight plan containing a special or privately owned IAP?",
    options: ["Upon approval of ATC.", "Upon approval of the owner.", "Upon signing a waiver of responsibility."],
    answer: 1,
    explain:
      "Pilots planning flights to locations served by special IAPs should obtain advance approval from the owner of the procedure. Approval by the owner is necessary because special procedures are for the exclusive use of the single interest unless otherwise authorized by the owner. Controllers assume a pilot has obtained approval and is aware of any details of the procedure if he/she files an IFR flight plan to that airport. Answer (A) is incorrect because ATC is not required to question pilots to determine whether they have the owner's permission to use the procedure. Answer (C) is incorrect because a pilot is responsible for the safe operation of the airplane. To sign a waiver of responsibility is contrary to a pilot's duty.",
    reference: "AIM 5-4-5 - Instrument Approach Procedure Charts",
  },
];
