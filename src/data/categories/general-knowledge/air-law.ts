import type { Question } from "../../../types";

// General aviation knowledge - Air Law & Regulations.
// Original questions written from general, widely-published aviation
// knowledge (ICAO-style standards and common regulatory conventions), not
// copied from any single source document. No company, brand, or publisher
// names appear anywhere below.
export const AIR_LAW_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Which transponder code should a pilot select to indicate a general emergency?",
    options: ["7700", "7600", "7500", "2000"],
    answer: 0,
    explain:
      "7700 is the universal transponder code for a general emergency. 7600 signals a radio communication failure, 7500 signals unlawful interference (hijack), and 2000 is the general conspicuity code used when entering radar airspace from an area where no discrete code was assigned.",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "A pilot squawks 7500. What does this code indicate to air traffic control?",
    options: ["Radio failure", "Unlawful interference (hijack)", "General emergency", "Loss of cabin pressure"],
    answer: 1,
    explain:
      "7500 is reserved specifically to alert controllers to unlawful interference with the aircraft, such as a hijacking, and is treated with particular sensitivity by ATC once selected.",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "For a standard Category I precision approach, what are the typical minimum decision height and visibility/RVR requirements?",
    options: [
      "Decision height no lower than 200 ft, RVR no less than about 550 m",
      "Decision height no lower than 100 ft, RVR no less than about 200 m",
      "Decision height no lower than 500 ft, RVR no less than about 1500 m",
      "No decision height applies; only a minimum descent altitude is used",
    ],
    answer: 0,
    explain:
      "Category I approaches are generally flown to a decision height not lower than 200 ft with a required runway visual range of not less than roughly 550 m (or a reported visibility around 800 m where RVR isn't available). Lower minima belong to Category II/III approaches, which need additional aircraft and crew certification.",
    reference: "Air Law - Approach Categories & Minima",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Under standard wake turbulence categorisation, what generally defines a 'Heavy' aircraft?",
    options: [
      "A maximum certificated take-off mass of 136,000 kg or more",
      "A maximum certificated take-off mass of 50,000 kg or more",
      "Any aircraft with four or more engines, regardless of mass",
      "Any aircraft used for cargo operations",
    ],
    answer: 0,
    explain:
      "Wake turbulence categories are based on maximum certificated take-off mass: 'Heavy' applies at 136,000 kg or above, 'Medium' covers roughly 7,000 kg up to that threshold, and 'Light' applies below about 7,000 kg. Engine count and mission type aren't the deciding factor.",
    reference: "Air Law - Wake Turbulence Categories",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Reduced Vertical Separation Minimum (RVSM) airspace typically applies between which flight levels?",
    options: ["FL290 to FL410 inclusive", "FL180 to FL290 inclusive", "FL100 to FL180 inclusive", "FL410 to FL600 inclusive"],
    answer: 0,
    explain:
      "RVSM airspace generally spans FL290 through FL410 inclusive, where 1,000 ft vertical separation is used between suitably equipped and approved aircraft instead of the larger separation required above and below that band.",
    reference: "Air Law - Airspace & Separation Standards",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "A fire involving flammable liquids, such as fuel or oil, is generally classified under which fire class?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: 1,
    explain:
      "Class A fires involve ordinary combustibles like wood or paper, Class B involves flammable liquids (fuel, oil, solvents), Class C involves flammable gases, and Class D involves combustible metals - each calling for a different type of extinguishing agent.",
    reference: "Air Law - Fire Classification & Extinguishing Agents",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "A control tower directs a series of red flashes at an aircraft that is in flight within the aerodrome circuit. What does this signal mean?",
    options: [
      "The aerodrome is unsafe; do not land, regardless of any earlier instruction",
      "Give way to another aircraft and continue circling",
      "Return for landing; a landing clearance will follow shortly",
      "Land at this aerodrome and taxi clear of the landing area",
    ],
    answer: 0,
    explain:
      "In the standard set of aerodrome light signals, a flashing red light directed at an aircraft in flight means the aerodrome is unsafe and the aircraft must not land. A steady red light (not flashing) is the one that means give way and continue circling, while a flashing green light means return for landing.",
    reference: "Air Law - Aerodrome Light Signals",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Which transponder code specifically indicates a two-way radio communication failure?",
    options: ["7600", "7700", "7500", "2000"],
    answer: 0,
    explain:
      "7600 is the dedicated code for a radio communication failure, separate from 7700 (general emergency), 7500 (unlawful interference), and 2000 (conspicuity code on entering radar airspace without an assigned discrete code).",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "An aircraft flying IFR in visual meteorological conditions (VMC) suffers a total two-way radio communication failure. What is it generally expected to do?",
    options: [
      "Continue in VMC and land at the nearest suitable aerodrome, then report its arrival to air traffic services by the quickest means available",
      "Climb immediately to the highest published enroute altitude and hold indefinitely",
      "Continue to destination exactly as filed, ignoring the VMC conditions outside",
      "Descend immediately to an uncontrolled aerodrome regardless of suitability",
    ],
    answer: 0,
    explain:
      "The standard guidance for a communication failure encountered in VMC is to continue flying in VMC, land at the nearest suitable aerodrome, and notify air traffic services of the landing as soon as practicable. A failure encountered in instrument conditions instead calls for maintaining the last assigned level and route for a period before commencing an approach at the estimated arrival time.",
    reference: "Air Law - Radio Communication Failure Procedures",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "For a standard Category II precision approach, what are the typical minimum decision height and RVR requirements?",
    options: [
      "Decision height not lower than about 100 ft, RVR not less than about 300 m",
      "Decision height not lower than about 200 ft, RVR not less than about 550 m",
      "No decision height, RVR not less than about 75 m",
      "Decision height not lower than about 500 ft, RVR not less than about 1,500 m",
    ],
    answer: 0,
    explain:
      "Category II approaches allow lower minima than Category I, typically down to a decision height of about 100 ft with an RVR of about 300 m, provided the aircraft, crew, and ground facilities hold the appropriate approval. Category III approaches go lower still.",
    reference: "Air Law - Approach Categories & Minima",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Unless a different value has been specifically prescribed for the airspace concerned, what is the generally applied default minimum radar separation between aircraft?",
    options: ["5.0 nm", "10.0 nm", "1.0 nm", "20.0 nm"],
    answer: 0,
    explain:
      "5 nautical miles is the commonly cited default radar separation minimum applied by air traffic control unless a lower value (as low as 3 nm in some cases) has been specifically approved for that airspace based on radar and system performance.",
    reference: "Air Law - Radar Separation Standards",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What does the abbreviation 'DER', as used on instrument procedure charts, stand for?",
    options: ["Departure end of runway", "Distance end of route", "Departure end of route", "Distance end of runway"],
    answer: 0,
    explain:
      "DER stands for departure end of runway - the point used as a reference for obstacle clearance surfaces and departure procedure design, distinct from the runway threshold used for landing calculations.",
    reference: "Air Law - Procedure Chart Terminology",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What is a 'clearway', as the term is used in takeoff performance planning?",
    options: [
      "A defined rectangular area beyond the runway, free of obstacles above a specified plane, over which an aircraft may complete part of its initial climb",
      "An area beyond the runway able to support the aircraft's weight during a rejected takeoff",
      "The paved surface reserved exclusively for taxiing aircraft",
      "An area used only for de-icing operations",
    ],
    answer: 0,
    explain:
      "A clearway is a defined area beyond the end of the runway, under the control of the appropriate authority, that is free of obstructions above a specified plane - it can let an aircraft count part of its initial climb toward the takeoff distance, but it isn't built to bear the aircraft's weight the way a stopway is.",
    reference: "Air Law - Runway & Takeoff Area Definitions",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What is a 'stopway', as distinct from a clearway?",
    options: [
      "An area beyond the takeoff run available, able to support the aircraft during an abandoned takeoff, but not intended for normal operations",
      "An obstacle-free surface used to extend the climb path after a normal takeoff",
      "A taxiway connecting the runway to the apron",
      "The portion of the runway reserved for touchdown only",
    ],
    answer: 0,
    explain:
      "A stopway is built and strengthened to support the aircraft's weight so it can be stopped safely during an abandoned takeoff, whereas a clearway is only required to be free of obstacles and is not built to bear the aircraft's weight.",
    reference: "Air Law - Runway & Takeoff Area Definitions",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Within RVSM (Reduced Vertical Separation Minimum) airspace, what vertical separation is applied between aircraft at successive flight levels travelling the same direction?",
    options: ["1,000 ft", "2,000 ft", "500 ft", "4,000 ft"],
    answer: 0,
    explain:
      "Inside the RVSM band, 1,000 ft vertical separation is used between flight levels for suitably equipped and approved aircraft, rather than the 2,000 ft separation required in non-RVSM airspace at those altitudes.",
    reference: "Air Law - Airspace & Separation Standards",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Climbing through controlled airspace, at what point does a pilot change the altimeter setting from the local QNH to the standard pressure setting of 1013.25 hPa?",
    options: [
      "On passing the transition altitude",
      "On passing the transition level",
      "Only when instructed by ATC, with no fixed point",
      "At the aerodrome boundary, regardless of altitude",
    ],
    answer: 0,
    explain:
      "Climbing, the changeover from QNH to the standard 1013.25 hPa setting happens at the transition altitude; the reverse changeover, from standard back to QNH, happens when descending through the transition level. The two are not necessarily the same numerical value.",
    reference: "Air Law - Altimeter Setting Procedures",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "An aircraft loses two-way radio communication while flying in instrument meteorological conditions (IMC). What is it generally expected to do?",
    options: [
      "Maintain the last assigned level and route, then commence descent or approach at the estimated time of arrival",
      "Immediately descend to the minimum sector altitude and orbit",
      "Squawk 7700 and return to the departure aerodrome",
      "Continue at any convenient altitude of the pilot's choosing",
    ],
    answer: 0,
    explain:
      "In IMC, the standard expectation after a communication failure is to maintain the last assigned altitude/flight level and route (or the one notified as expected, if later and higher) for a specified period, then proceed to commence an approach at the flight-planned or notified estimated time of arrival - giving controllers a predictable, known flight path to protect around.",
    reference: "Air Law - Radio Communication Failure Procedures",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Among competing traffic, which of the following is generally treated as having priority to land?",
    options: [
      "An aircraft that has declared an in-flight emergency",
      "A scheduled airline flight running behind schedule",
      "A VIP flight with no declared emergency",
      "A military transport flight with no declared emergency",
    ],
    answer: 0,
    explain:
      "All else equal, an aircraft that has declared an emergency is generally given priority to land ahead of other traffic, since the safety justification for expediting it outweighs scheduling or status considerations for flights with no declared emergency.",
    reference: "Air Law - Landing Priority",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Two aircraft of the same category are converging at approximately the same altitude. Which one generally has the right of way?",
    options: [
      "The aircraft that has the other on its right",
      "The aircraft that has the other on its left",
      "Whichever aircraft is flying faster",
      "Whichever aircraft is higher, regardless of bearing",
    ],
    answer: 0,
    explain:
      "When two aircraft of the same category are converging at about the same altitude, the general right-of-way rule gives way to the aircraft that has the other on its right - the aircraft seeing the other on its right must give way, not the other way around.",
    reference: "Air Law - Right of Way Rules",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "An aircraft is overtaking another aircraft in flight. Under the general right-of-way rules, what is the overtaking aircraft required to do?",
    options: [
      "Alter course to the right, and keep well clear until well past and clear of the aircraft being overtaken",
      "Alter course to the left, since the aircraft being overtaken must give way",
      "Overtake only from directly above, regardless of direction",
      "Overtake on whichever side is more convenient, with no specific requirement",
    ],
    answer: 0,
    explain:
      "The overtaking aircraft is the one required to keep clear of the other aircraft's flight path, and does this by altering course to the right - the aircraft being overtaken has the right of way and is not required to alter course, even though it is being passed.",
    reference: "Air Law - Right of Way Rules",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Under the general right-of-way rules, an aircraft that is aware another aircraft is in distress should generally:",
    options: [
      "Give way to the aircraft in distress",
      "Continue on its own flight path unchanged, since distress does not affect right of way",
      "Overtake the distressed aircraft as quickly as possible",
      "Request the distressed aircraft to give way instead",
    ],
    answer: 0,
    explain:
      "An aircraft known to be in distress is generally given right of way over other air traffic, since the safety justification for giving it priority and a clear path outweighs the normal right-of-way sequence that applies among aircraft not in distress.",
    reference: "Air Law - Right of Way Rules",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Under the general right-of-way rules, how does a power-driven, heavier-than-air aircraft generally relate to airships, gliders, and balloons?",
    options: [
      "It gives way to airships, gliders, and balloons",
      "It has right of way over airships, gliders, and balloons in all cases",
      "Right of way depends solely on which aircraft is faster",
      "The rule applies only to balloons, not to airships or gliders",
    ],
    answer: 0,
    explain:
      "The general right-of-way hierarchy places power-driven, heavier-than-air aircraft below airships, gliders, and balloons - reflecting that these other categories generally have less capability to maneuver out of the way, so the powered aircraft is expected to give way to them.",
    reference: "Air Law - Right of Way Rules",
  },
  {
    id: 23,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What does a 'Special VFR' clearance generally permit?",
    options: [
      "VFR flight within a control zone when the weather is below the normal VMC minima, at the discretion of air traffic control",
      "Flight under IFR without a filed flight plan",
      "VFR flight above FL195 without restriction",
      "Flight without a functioning transponder in controlled airspace",
    ],
    answer: 0,
    explain:
      "A Special VFR clearance lets a flight operate within a control zone under conditions that don't quite meet the normal VMC criteria, issued by air traffic control at their discretion when traffic and conditions allow, generally subject to additional restrictions such as remaining clear of cloud and in sight of the surface.",
    reference: "Air Law - Special VFR",
  },
  {
    id: 24,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What frequency is internationally designated as the emergency locator transmitter (ELT) and general aeronautical emergency frequency for line-of-sight monitoring?",
    options: ["121.5 MHz", "118.0 MHz", "243.0 MHz only", "406.0 MHz only"],
    answer: 0,
    explain:
      "121.5 MHz is the internationally designated civil emergency frequency, monitored for distress transmissions and activated automatically by many ELTs. Modern ELTs also transmit on 406 MHz for satellite-based distress alerting, but 121.5 MHz remains the standard line-of-sight guard frequency.",
    reference: "Air Law - Emergency Frequencies",
  },
  {
    id: 25,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "On a precision approach path indicator (PAPI), what light combination indicates the aircraft is on the correct glide path?",
    options: [
      "Two red and two white lights",
      "Four red lights",
      "Four white lights",
      "Two amber and two white lights",
    ],
    answer: 0,
    explain:
      "A standard four-light PAPI shows two red and two white lights when the aircraft is on the correct approach slope. All four white indicates the aircraft is too high, and all four red indicates it is too low, with the ratio shifting gradually as the aircraft moves off the ideal path.",
    reference: "Air Law - Visual Approach Slope Indicators",
  },
  {
    id: 26,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What is the general purpose of an Automatic Terminal Information Service (ATIS) broadcast?",
    options: [
      "To provide routine, non-control aerodrome and weather information continuously, reducing repetitive radio calls to air traffic control",
      "To issue individual landing clearances to each aircraft in sequence",
      "To broadcast emergency instructions only during an aerodrome incident",
      "To replace the need for a control tower entirely",
    ],
    answer: 0,
    explain:
      "ATIS provides a continuously updated, recorded broadcast of routine information such as active runway, weather, and relevant NOTAM items, so pilots can obtain this information without a dedicated radio call - freeing controller frequency time for actual control instructions.",
    reference: "Air Law - Aerodrome Information Services",
  },
  {
    id: 27,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "How is 'aerodrome elevation' generally defined?",
    options: [
      "The elevation of the highest point of the landing area",
      "The average elevation of all runway thresholds",
      "The elevation of the control tower",
      "The lowest point on the aerodrome's boundary",
    ],
    answer: 0,
    explain:
      "Aerodrome elevation is defined as the elevation of the highest point of the landing area, used as the reference point for published approach and departure procedures at that aerodrome.",
    reference: "Air Law - Aerodrome Data Definitions",
  },
  {
    id: 28,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What do the abbreviations OCA and OCH generally represent on an instrument approach chart?",
    options: [
      "Obstacle clearance altitude and obstacle clearance height - the lowest altitude/height providing the required clearance from relevant obstacles",
      "Outer control area and outer control height, marking airspace boundaries",
      "Optimum climb altitude and optimum climb height for departure planning",
      "Overwater clearance area and overwater clearance height",
    ],
    answer: 0,
    explain:
      "OCA (obstacle clearance altitude, referenced to mean sea level) and OCH (obstacle clearance height, referenced to the relevant aerodrome or threshold elevation) together define the lowest altitude/height on a given approach that still provides the required obstacle clearance margin.",
    reference: "Air Law - Instrument Approach Chart Conventions",
  },
  {
    id: 29,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "A pilot enters radar-controlled airspace without having been assigned a discrete transponder code. Which conspicuity code is generally expected to be selected?",
    options: ["2000", "7000", "0000", "1200"],
    answer: 0,
    explain:
      "2000 is the general conspicuity code used when entering radar service or radar-controlled airspace without a discretely assigned code, distinct from the specific emergency codes 7700/7600/7500.",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 30,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Within Class A airspace, which type of flight is generally permitted?",
    options: [
      "IFR flights only; VFR flight is not permitted",
      "VFR flights only; IFR flight is not permitted",
      "Both VFR and IFR flights, without restriction",
      "Neither VFR nor IFR flights are permitted",
    ],
    answer: 0,
    explain:
      "Class A airspace is IFR-only airspace: all flights must operate under IFR and are subject to air traffic control clearance and separation, with VFR flight not permitted regardless of weather conditions.",
    reference: "Air Law - Airspace Classification",
  },
  {
    id: 31,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "In aviation regulatory terms, 'night' is generally defined as the period:",
    options: [
      "Between the end of evening civil twilight and the beginning of morning civil twilight",
      "Between sunset and sunrise only, with no reference to twilight",
      "Between 6pm and 6am local time, everywhere in the world",
      "Whenever the sun is more than 30 degrees below the horizon",
    ],
    answer: 0,
    explain:
      "Night is commonly defined using civil twilight boundaries - the period between the end of evening civil twilight and the start of morning civil twilight - rather than a simple sunset-to-sunrise definition or a fixed clock time, since twilight length varies with latitude and season.",
    reference: "Air Law - Definitions of Day & Night",
  },
  {
    id: 32,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Unless otherwise indicated (such as by a signal or published procedure), which direction are turns generally made in an aerodrome traffic circuit?",
    options: ["Left-hand turns", "Right-hand turns", "Either direction, at the pilot's discretion", "No turns; circuits are always flown as a straight-in approach"],
    answer: 0,
    explain:
      "The default convention for an aerodrome traffic circuit is left-hand turns, unless a right-hand circuit is specifically published or otherwise indicated for that runway - often to account for terrain, noise abatement, or other local considerations.",
    reference: "Air Law - Aerodrome Traffic Circuits",
  },
  {
    id: 33,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What is generally meant by an ATC clearance 'void time'?",
    options: [
      "The time by which the aircraft must be airborne, after which the clearance no longer applies and new instructions must be obtained",
      "The time at which the aircraft must land, after which the clearance is automatically extended",
      "A period during which the pilot may ignore all further ATC instructions",
      "The scheduled time the flight plan was originally filed",
    ],
    answer: 0,
    explain:
      "A clearance void time sets a deadline for becoming airborne - if the aircraft has not departed by that time, the clearance is void and the pilot must contact air traffic control for further instructions before attempting to depart, since the protected traffic separation the clearance assumed may no longer apply.",
    reference: "Air Law - ATC Clearances",
  },
  {
    id: 34,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "In the standard search-and-rescue phase terminology, what does 'DETRESFA' indicate?",
    options: [
      "The distress phase - reasonable certainty exists that an aircraft and its occupants are threatened by grave and imminent danger",
      "The uncertainty phase - doubt exists as to the safety of an aircraft and its occupants",
      "The alert phase - apprehension exists as to the safety of an aircraft and its occupants",
      "A phase used only after search operations have already concluded",
    ],
    answer: 0,
    explain:
      "The three standard search-and-rescue phases escalate from INCERFA (uncertainty phase), to ALERFA (alert phase), to DETRESFA (distress phase) - the last representing reasonable certainty that grave and imminent danger threatens the aircraft and requiring full search and rescue action.",
    reference: "Air Law - Search & Rescue Phases",
  },
  {
    id: 35,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "What is a 'missed approach point' (MAPt) on an instrument approach procedure?",
    options: [
      "The point at or before which the missed approach must be initiated if the required visual references have not been acquired",
      "The point where the aircraft touches down if the approach is successful",
      "The point where the aircraft first intercepts the final approach course",
      "A point used only on approaches with no published minima",
    ],
    answer: 0,
    explain:
      "The missed approach point marks the latest point in the approach at which the crew must begin the published missed approach procedure if they haven't acquired the required visual reference to continue to a landing, since continuing beyond it can no longer be guaranteed to provide the required obstacle clearance.",
    reference: "Air Law - Instrument Approach Procedure Design",
  },
  {
    id: 36,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "How is a runway's two-digit designator number generally derived?",
    options: [
      "From the runway's magnetic heading, rounded to the nearest 10 degrees and divided by 10",
      "From the runway's true heading, rounded to the nearest whole degree",
      "From the order in which the runway was constructed at that aerodrome",
      "From the runway's length in hundreds of metres",
    ],
    answer: 0,
    explain:
      "A runway's designator is derived from its approximate magnetic heading, rounded to the nearest 10 degrees and expressed as a single or double digit (dropping the final zero) - for example, a runway aligned with a magnetic heading of about 090 degrees is designated runway 09, and the reciprocal-direction threshold at the other end is 27.",
    reference: "Air Law - Runway Designators",
  },
  {
    id: 37,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "On a typical aerodrome, what color are taxiway edge lights generally shown as?",
    options: ["Blue", "Green", "Red", "White"],
    answer: 0,
    explain:
      "Taxiway edge lighting is conventionally blue, while taxiway centerline lighting (where fitted) is green - distinguishing taxiways from runway lighting, which conventionally uses white edge lights with colored threshold and end lighting.",
    reference: "Air Law - Aerodrome Lighting Conventions",
  },
  {
    id: 38,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "In a standard holding pattern, unless otherwise specified, which direction are the turns generally made?",
    options: ["Right-hand turns", "Left-hand turns", "Alternating left and right each circuit", "Whichever direction avoids the nearest high ground"],
    answer: 0,
    explain:
      "The default (standard) holding pattern uses right-hand turns unless the chart or ATC clearance specifically indicates left-hand ('non-standard') holding - a distinction that matters both for the pattern's protected airspace and for how a pilot should enter the hold.",
    reference: "Air Law - Holding Pattern Conventions",
  },
  {
    id: 39,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "Which of the following ATC instructions would generally require a verbatim readback from the flight crew?",
    options: [
      "An assigned altitude, heading, or a runway-in-use, and other safety-critical clearance information",
      "General traffic advisories describing other aircraft in the vicinity",
      "Routine ATIS broadcast information",
      "Company operational messages relayed informally by ATC",
    ],
    answer: 0,
    explain:
      "Readback requirements generally apply to safety-critical clearance and instruction elements - altitude/level assignments, headings, speed instructions, runway-in-use, clearance limits, and similar items - so that ATC can confirm the crew received and understood them correctly, unlike general advisories or informational broadcasts.",
    reference: "Air Law - Radiotelephony Readback Requirements",
  },
  {
    id: 40,
    subject: "ATPL General Knowledge",
    system: "Air Law",
    q: "For a Category IIIB precision approach, how does the operation generally compare with Category IIIA in terms of minima and requirements?",
    options: [
      "Category IIIB permits lower minima than IIIA (including operation with no decision height, or one below IIIA's), and requires additional aircraft/crew/ground certification",
      "Category IIIB and IIIA use identical minima and requirements in every respect",
      "Category IIIB has higher (less demanding) minima than IIIA",
      "Category IIIB applies only to non-precision approaches",
    ],
    answer: 0,
    explain:
      "Category IIIB approaches are flown to lower RVR minima than IIIA (potentially with no applicable decision height, or a very low one), reflecting a further step up in required certification for the aircraft, crew, and ground systems - it is not simply a relabeled version of IIIA, but a distinct, more demanding category.",
    reference: "Air Law - Approach Categories & Minima",
  },
];
