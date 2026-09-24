import type { Question } from "../../../types";

// Canada TC ATPL (SARON/SAMRA) question bank -- original questions written
// from the Canadian Aviation Regulations (CARs), the Transport Canada
// Aeronautical Information Manual (TC AIM 2026-1), and Transport Canada's
// "Study and Reference Guide for written examinations for the Airline
// Transport Pilot Licence -- Aeroplane" (TP 690), which defines the exam
// syllabus by CAR section number but contains no sample questions itself.
// Not transcribed or adapted from any commercial test-prep publisher.
// Batch 1 covers Section 1: Air Law and Procedures.
export const CANADA_TC_ATPL_BATCH_01_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The holder of an Airline Transport Pilot Licence – Aeroplane, exercising the privileges of that licence, may act as",
    options: [
      "pilot-in-command or second-in-command of any aeroplane, subject to holding the applicable type rating and meeting any other applicable requirements.",
      "second-in-command only, since command privileges require a separate command endorsement beyond the ATPL itself.",
      "pilot-in-command of any aeroplane, but never in an operation that requires two pilots.",
      "pilot-in-command only of aeroplanes operated under CARs Subpart 703 (air taxi operations).",
    ],
    answer: 0,
    explain:
      "CAR 401.34 gives an ATPL(A) holder the privileges of a commercial pilot licence plus the privilege of acting as pilot-in-command or second-in-command of any aeroplane, provided the holder has passed the appropriate type rating and meets any other applicable requirements (instrument rating, recency, etc.). The licence itself is not restricted to a particular subpart of commercial air service, and it does not bar the holder from multi-crew operations.",
    reference: "CARs 401.34 - ATPL (Aeroplane) Privileges",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "To act as pilot-in-command of an aeroplane while carrying passengers, CAR 401.05 requires that, within the preceding",
    options: [
      "90 days, the pilot has completed at least 3 take-offs and 3 landings in an aeroplane of the same category and class.",
      "6 months, the pilot has completed at least 5 take-offs and 5 landings in an aeroplane of the same category and class, or of the same type if a type rating is required for that type.",
      "12 months, the pilot has completed at least 5 take-offs and 5 landings in any aeroplane.",
      "6 months, the pilot has completed at least 3 take-offs and 3 landings in any category of aircraft.",
    ],
    answer: 1,
    explain:
      "The recency requirement in CAR 401.05 is 6 preceding months with at least 5 take-offs and 5 landings in an aeroplane of the same category and class, or the same type when a type rating is required. Getting either the interval (12 months, 90 days) or the count/specificity wrong (3 take-offs/landings, or \"any aeroplane\" instead of the same category/class or type) produces a plausible but incorrect answer.",
    reference: "CARs 401.05 - Recency Requirements",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Category 1 medical certificate issued to a pilot under 40 years of age, for the purposes of exercising ATPL privileges, is valid for",
    options: [
      "6 months.",
      "36 months.",
      "12 months.",
      "24 months.",
    ],
    answer: 2,
    explain:
      "Under CAR 404.04, a Category 1 medical certificate issued to a pilot under 40 years of age is valid for 12 months. The validity period is shortened once the pilot reaches 40.",
    reference: "CARs 404.04 - Medical Certificate Validity",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Once a pilot exercising Category 1 medical privileges reaches 40 years of age, the validity period of subsequent medical certificates",
    options: [
      "remains at 12 months provided the pilot flies multi-crew.",
      "becomes indefinite, subject only to an annual self-declaration.",
      "is extended to 24 months if no medical conditions are noted.",
      "is reduced to 6 months.",
    ],
    answer: 3,
    explain:
      "CAR 404.04's validity schedule reduces the Category 1 renewal interval to 6 months once the holder reaches 40 years of age, regardless of whether the operation is single-pilot or multi-crew.",
    reference: "CARs 404.04 - Medical Certificate Validity",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "In the Canadian Domestic Airspace, Class A airspace is characterized by",
    options: [
      "IFR flight only, with ATC separation provided between all aircraft.",
      "both IFR and VFR flight permitted, with ATC separation provided between IFR aircraft only.",
      "VFR flight only, above 18,000 ft ASL.",
      "IFR and VFR flight permitted, with no ATC clearance required for either.",
    ],
    answer: 0,
    explain:
      "Class A airspace is IFR-only, with full ATC separation provided between all aircraft in it. This differs from Class B, C, and D, where VFR flight is also permitted and the separation service provided to VFR traffic varies by class.",
    reference: "CARs Part VI, Subpart 1 - Airspace Structure, Classification and Use",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Class F airspace in Canada is airspace",
    options: [
      "reserved exclusively for military IFR training and closed to all civilian traffic.",
      "within which activities must be confined because of their nature, or where limitations may be imposed on aircraft not participating in those activities, designated as either advisory or restricted.",
      "surrounding a control zone within which Special VFR is prohibited outright.",
      "that is uncontrolled with no altitude restrictions, used mainly for aerobatic practice areas.",
    ],
    answer: 1,
    explain:
      "Class F airspace is defined by the nature of the activity conducted within it (e.g. military exercises, forest-fire operations) rather than by traffic separation service. It is sub-classified as Class F Advisory (non-participating aircraft advised of the activity) or Class F Restricted (entry by non-participating aircraft restricted or prohibited).",
    reference: "CARs Part VI, Subpart 1 - Airspace Structure, Classification and Use",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a VFR flight above 3,000 ft AGL on a magnetic track between 000° and 179°, the appropriate cruising altitude is",
    options: [
      "an odd thousand-foot altitude with no additional 500 ft offset.",
      "an even thousand-foot altitude plus 500 ft (e.g. 6,500 ft ASL).",
      "an odd thousand-foot altitude plus 500 ft (e.g. 5,500 ft ASL).",
      "any altitude at the pilot's discretion, since the hemispheric rule applies only to IFR flight.",
    ],
    answer: 2,
    explain:
      "The hemispheric cruising altitude rule assigns odd thousand-foot levels to magnetic tracks 000–179° and even thousand-foot levels to 180–359°. VFR flights add 500 ft to the appropriate level; IFR flights use the odd/even level without the 500 ft addition.",
    reference: "CARs 602.34-602.37 - VFR Cruising Altitudes and Cruising Flight Levels",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The key difference between VFR and IFR cruising altitude assignment under the hemispheric (odd/even) rule is that",
    options: [
      "the hemispheric rule reverses direction (000-179° vs 180-359°) between VFR and IFR flight.",
      "IFR altitudes add 500 ft to the appropriate level, while VFR altitudes do not.",
      "IFR flights are exempt from the hemispheric rule below 18,000 ft ASL.",
      "VFR cruising altitudes add 500 ft to the appropriate odd/even thousand-foot level, while IFR cruising altitudes and flight levels do not.",
    ],
    answer: 3,
    explain:
      "Both VFR and IFR use the same 000-179°/180-359° track split to assign odd or even thousand-foot levels. The distinguishing feature is the 500 ft addition, which applies only to VFR cruising altitudes, not to IFR cruising altitudes or flight levels.",
    reference: "CARs 602.34-602.37 - VFR/IFR Cruising Altitudes and Flight Levels",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Within designated RVSM airspace, the reduced vertical separation minimum applied between RVSM-approved aircraft is",
    options: [
      "1,000 ft.",
      "1,500 ft.",
      "2,000 ft.",
      "500 ft.",
    ],
    answer: 0,
    explain:
      "RVSM airspace reduces the normal 2,000 ft vertical separation minimum used above FL290 down to 1,000 ft between aircraft that hold RVSM approval, roughly doubling the number of usable flight levels in that band.",
    reference: "TC AIM RAC 11.7 - Reduced Vertical Separation Minimum (RVSM)",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft that does not meet RVSM certification requirements may operate within designated RVSM airspace only if",
    options: [
      "it operates the flight under VFR instead of IFR.",
      "it has received specific ATC authorization to operate as a non-RVSM aircraft, in which case standard (non-reduced) vertical separation is applied around it.",
      "it remains below FL290 at all times while transiting the airspace, regardless of ATC coordination.",
      "it is accompanied in formation by an RVSM-approved aircraft for the duration of the transit.",
    ],
    answer: 1,
    explain:
      "Non-RVSM aircraft (state aircraft, aircraft with an approved exemption, or aircraft experiencing an in-flight RVSM equipment failure) may still be accommodated in RVSM airspace with specific ATC authorization, but the controller must apply standard, non-reduced vertical separation around that aircraft.",
    reference: "TC AIM RAC 11.7 - RVSM Operation of Non-RVSM Aircraft",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the ATS surveillance wake turbulence separation minima in the TC AIM, an aircraft in the LIGHT category being vectored directly behind and below a HEAVY aircraft must be separated by at least",
    options: [
      "5 NM.",
      "8 NM.",
      "6 NM.",
      "4 NM.",
    ],
    answer: 2,
    explain:
      "TC AIM Table 4.1 specifies Light behind Heavy as 6 NM. The nearby values in the same table are easy to confuse: Light behind Super Heavy is 8 NM, Light behind Medium is 4 NM, and Medium behind Heavy is 5 NM -- an applicant has to know the actual table, not just the general idea that heavier aircraft require more separation.",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Table 4.1",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the same wake turbulence table, a MEDIUM category aircraft vectored directly behind and below a HEAVY aircraft must be separated by at least",
    options: [
      "4 NM.",
      "7 NM.",
      "6 NM.",
      "5 NM.",
    ],
    answer: 3,
    explain:
      "TC AIM Table 4.1 specifies Medium behind Heavy as 5 NM, distinct from Light behind Medium (4 NM), Heavy behind Heavy (4 NM), and Medium behind Super Heavy (7 NM).",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Table 4.1",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The wake turbulence separation applied to a HEAVY category aircraft vectored directly behind a SUPER HEAVY aircraft (e.g. an Airbus A380) is",
    options: [
      "6 NM.",
      "5 NM.",
      "8 NM.",
      "4 NM.",
    ],
    answer: 0,
    explain:
      "TC AIM Table 4.1 specifies Heavy behind Super Heavy as 6 NM, while Heavy behind Heavy is only 4 NM -- the Super Heavy category (currently applied only to the A380) carries its own, larger separation values throughout the table.",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Table 4.1",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a non-surveillance departure, ATC applies a minimum two-minute separation interval to an aircraft taking off behind a known heavy aircraft when the following aircraft departs",
    options: [
      "from a runway that intersects the heavy aircraft's departure runway, regardless of the distance to the intersection.",
      "from the threshold of the same runway used by the preceding heavy aircraft, or from a parallel runway threshold located less than 2,500 ft away.",
      "from any runway at the same aerodrome, regardless of the separation distance between runways.",
      "from the threshold of the same runway only, with no provision made for parallel runways.",
    ],
    answer: 1,
    explain:
      "The two-minute non-surveillance interval applies when the following aircraft departs the same runway threshold as the preceding heavy aircraft, or a parallel runway threshold within 2,500 ft of it -- both situations where the wake can realistically drift into the following aircraft's flight path.",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Non-Surveillance Departures",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When a pilot elects to waive wake turbulence separation requirements for a VFR departure, the tower controller",
    options: [
      "is relieved of any further responsibility for wake turbulence separation on that departure.",
      "may not issue a take-off clearance under any circumstances.",
      "will still issue a wake turbulence cautionary along with the take-off clearance.",
      "must obtain a signed, written waiver from the pilot before departure.",
    ],
    answer: 2,
    explain:
      "A pilot-initiated waiver shifts responsibility for wake turbulence separation to the pilot, but the controller still issues a wake turbulence cautionary with the take-off clearance -- the waiver does not remove the controller's obligation to advise of the hazard. Controllers remain responsible for ensuring wake turbulence minima are met on IFR departures regardless of any VFR waiver.",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Pilot Waivers",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A pilot-initiated waiver of wake turbulence separation will NOT be accepted by ATC when",
    options: [
      "the following aircraft is departing from the same threshold used by the preceding heavy aircraft.",
      "the preceding heavy aircraft has already been airborne for more than three minutes.",
      "the wind is calm and there is no crosswind component at the time of departure.",
      "a light or medium aircraft is taking off behind a heavy aircraft, starting its take-off roll from an intersection or a point further along the runway than the heavy aircraft used.",
    ],
    answer: 3,
    explain:
      "Controllers will accept a pilot's own-initiative waiver of wake turbulence requirements except in specific higher-risk scenarios -- including a light or medium aircraft departing from an intersection or a point further along the runway than the preceding heavy used, where the reduced runway remaining and wake behaviour make the waiver unacceptable.",
    reference: "TC AIM RAC 4.1.1 - Wake Turbulence, Pilot Waivers (exceptions)",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "CAR 602.105 and CAR 602.106 deal, respectively, with",
    options: [
      "noise operating criteria, and noise-restricted runways.",
      "wake turbulence categories, and ATC separation minima.",
      "ELT requirements, and ELT testing procedures.",
      "altimeter setting regions, and transponder operation.",
    ],
    answer: 0,
    explain:
      "CAR 602.105 (Noise Operating Criteria) and CAR 602.106 (Noise-Restricted Runways) are the two regulations governing aircraft noise abatement compliance; applicable local procedures are then published in the Canada Air Pilot (CAP) and Canada Flight Supplement (CFS).",
    reference: "CARs 602.105-602.106 - Noise Operating Criteria / Noise-Restricted Runways",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The key operational difference between a flight plan and a flight itinerary is that",
    options: [
      "a flight itinerary must be filed electronically with NAV CANADA and cannot be held privately by an individual.",
      "a flight plan is filed with an ATS unit, which will automatically initiate search-and-rescue action if the flight becomes overdue, while a flight itinerary is left with a responsible person who must initiate the alert themselves.",
      "a flight itinerary may only be used for IFR flights, while a flight plan may only be used for VFR flights.",
      "a flight plan cannot be used for a flight that remains entirely within Canada, only for flights crossing an international boundary.",
    ],
    answer: 1,
    explain:
      "Both a flight plan and a flight itinerary record intended flight details for alerting purposes, but a flight plan is held by an ATS unit, which will initiate SAR action if the flight is overdue and not closed. A flight itinerary is instead left with a responsible person, who bears the responsibility of alerting an ATS unit if the flight fails to arrive or report as planned.",
    reference: "CARs 602.73 - Flight Plan and Flight Itinerary",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Except where specifically exempted, CAR 605.38 requires that most Canadian-registered power-driven aircraft carry",
    options: [
      "a portable locator beacon carried individually by each passenger on board.",
      "a functioning ELT only when operating more than 100 NM from the nearest aerodrome.",
      "a functioning emergency locator transmitter (ELT) capable of transmitting on the required emergency frequencies.",
      "a functioning ELT only when the flight is conducted under IFR.",
    ],
    answer: 2,
    explain:
      "CAR 605.38 sets a general ELT carriage requirement for Canadian-registered aircraft, subject to a specific list of exemptions (e.g. aircraft engaged in aerobatic competition within sight of an aerodrome, or manufacturer flight testing). The requirement does not turn on distance from an aerodrome or on whether the flight is conducted IFR or VFR.",
    reference: "CARs 605.38 - Emergency Locator Transmitter",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An installed ELT must be functionally tested",
    options: [
      "only after a hard landing, with no routine periodic test otherwise required.",
      "every 90 days regardless of the type of installation.",
      "only by the aircraft manufacturer, at 5-year intervals.",
      "within the preceding 12 months, with the results recorded in the aircraft's technical records.",
    ],
    answer: 3,
    explain:
      "ELTs are subject to a routine functional test within the preceding 12 months (in addition to post-incident checks after any activation or hard landing that could have damaged the unit), with the test results entered in the aircraft's technical records.",
    reference: "CARs Standard 571 / TC AIM SAR 3.9 - ELT Schedule of Requirements",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "If a pilot suspects their aircraft has inadvertently activated an ELT signal (for example, during a hard landing or maintenance work), the appropriate action is to",
    options: [
      "contact the nearest ATS unit or Joint Rescue Co-ordination Centre (JRCC) immediately to report and help cancel the false alert.",
      "ignore it, since ELT signals below 406 MHz are no longer monitored by satellite in Canada.",
      "wait 24 hours to see whether search and rescue responds before making any report.",
      "disable the aircraft's transponder, which will also suppress the ELT signal.",
    ],
    answer: 0,
    explain:
      "Accidental ELT activations are common and generate unnecessary SAR responses if not reported promptly. A pilot who suspects an inadvertent activation should notify an ATS unit or the JRCC immediately so the false alert can be traced and cancelled, rather than waiting or assuming it will resolve itself.",
    reference: "TC AIM SAR - Emergency Locator Transmitter, Accidental Transmission",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft operating within Class A, B, or C airspace, or within a designated transponder (Mode C) airspace around a major aerodrome, must be equipped with",
    options: [
      "ADS-B receive equipment only, with the transponder itself being optional.",
      "an operating transponder with automatic pressure-altitude reporting equipment.",
      "HF radio equipment in addition to the required VHF equipment.",
      "a transponder capable of Mode A only, with code 1200 selected at all times.",
    ],
    answer: 1,
    explain:
      "Transponder airspace requires an operating transponder with automatic pressure-altitude reporting (Mode C or Mode S) so that ATC surveillance systems and other aircraft's ACAS/TCAS equipment can determine the aircraft's altitude, not just its position.",
    reference: "CARs 605.35 - Transponder and Automatic Pressure-Altitude Reporting Equipment",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When a Resolution Advisory (RA) is issued by TCAS/ACAS and it conflicts with a simultaneous ATC instruction, the flight crew should",
    options: [
      "disregard both and maintain the last assigned altitude until visual separation with the conflicting traffic is established.",
      "attempt to split the difference between the RA and the ATC instruction.",
      "follow the RA, and notify ATC as soon as practicable that the aircraft is deviating from its clearance to comply with the RA.",
      "follow the ATC instruction, since an ATC clearance takes priority over automated onboard equipment.",
    ],
    answer: 2,
    explain:
      "An RA takes priority over a conflicting ATC instruction because it is based on the immediate geometry between the two aircraft, which ATC's own separation picture may not yet reflect. The crew complies with the RA and advises ATC of the deviation as soon as practicable, rather than trying to reconcile the two in the moment.",
    reference: "TC AIM RAC - Transponders, ACAS/TCAS",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A pilot who deviates from an ATC clearance solely to comply with a TCAS/ACAS Resolution Advisory is",
    options: [
      "subject to the same enforcement consequences as any other unauthorized deviation from clearance.",
      "required to obtain retroactive ATC approval within 10 minutes of the deviation to avoid enforcement.",
      "protected from enforcement only if the flight is operating under Part VII (commercial air service) rules.",
      "generally immune from enforcement action for that deviation, provided ATC is notified of it as soon as practicable.",
    ],
    answer: 3,
    explain:
      "Pilot immunity for RA-driven deviations exists precisely so that crews comply with the RA without hesitating over the ATC clearance -- the protection isn't conditional on the type of operation, only on the deviation being genuinely in response to the RA and reported to ATC promptly.",
    reference: "TC AIM RAC - Pilot Immunity from Enforcement Action",
  },
  {
    id: 25,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The purpose of the maximum holding speed limitations published for a holding pattern is primarily to",
    options: [
      "keep the aircraft within the protected (charted) holding airspace during the turns.",
      "prevent wake turbulence encounters between successive aircraft in the same hold.",
      "reduce fuel consumption during an extended hold.",
      "comply with noise abatement requirements near the holding fix.",
    ],
    answer: 0,
    explain:
      "Holding pattern airspace is sized and protected based on an assumed maximum true airspeed for the category of aircraft using it. Exceeding the published holding speed can carry the aircraft outside that protected area during the turns -- the limitation exists for airspace containment, not primarily for fuel or noise reasons, even though slower holding also happens to save fuel.",
    reference: "TP 690 Section 1 - Holding Speed Limitations",
  },
  {
    id: 26,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Within Canada's Altimeter Setting Region, pilots set their altimeters using",
    options: [
      "the destination aerodrome's altimeter setting for the entire route, however far away it is.",
      "the current altimeter setting of a station along their route, updated periodically as they progress.",
      "true altitude readings rather than pressure altitude, corrected manually en route.",
      "the standard pressure setting of 29.92 in. Hg at all times, regardless of altitude.",
    ],
    answer: 1,
    explain:
      "In the Altimeter Setting Region, altimeters are set to the current reported setting of a station along the route of flight (rather than the fixed standard setting used in the Standard Pressure Region above the transition altitude), and pilots update that setting as they pass stations with more current information.",
    reference: "TC AIM RAC 2.10 - Altimeter Setting Region",
  },
  {
    id: 27,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Above the transition altitude, in the Standard Pressure Region portion of Canadian domestic airspace, pilots set their altimeters to",
    options: [
      "QFE for the departure aerodrome, maintained for the entire flight.",
      "the current altimeter setting reported by the nearest reporting station.",
      "29.92 in. Hg (1013.2 hPa), and thereafter read altitude as a flight level rather than an altitude in feet.",
      "the sea-level standard pressure recorded at the departure aerodrome.",
    ],
    answer: 2,
    explain:
      "Above the transition altitude, pilots set 29.92 in. Hg and fly flight levels rather than altitudes referenced to a local station setting -- this standardizes vertical reference among all aircraft operating at high level, regardless of the actual sea-level pressure below them.",
    reference: "TC AIM RAC / GEN - Standard Pressure Region",
  },
  {
    id: 28,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Remote Altimeter Setting Source (RASS) is used to provide altimeter setting information to pilots",
    options: [
      "exclusively at major international airports, as a backup to the primary ATIS broadcast.",
      "only when operating above FL180 within the Standard Pressure Region.",
      "as a substitute for pilot weather reports (PIREPs), removing the need for pilots to report weather.",
      "operating in remote areas where no local reporting station, FSS, or AWOS coverage is otherwise available.",
    ],
    answer: 3,
    explain:
      "RASS exists to fill altimeter-setting coverage gaps in remote parts of the Canadian Domestic Airspace, where no conventional reporting station is nearby -- it's a coverage-gap tool, not a backup for busy terminal areas that already have reporting stations.",
    reference: "TC AIM RAC 9.17.2 - Remote Altimeter Setting",
  },
  {
    id: 29,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When barometric pressure exceeds the maximum value that can be set on an aircraft's altimeter (an abnormally high altimeter setting situation), pilots should",
    options: [
      "follow the special procedures published for the affected region, which may include setting the altimeter to its maximum value and applying a stated correction.",
      "set the altimeter to the standard pressure setting regardless of the actual reported pressure.",
      "descend below the affected pressure system until normal altimeter readings resume.",
      "disregard the altimeter entirely and rely solely on GPS-derived altitude.",
    ],
    answer: 0,
    explain:
      "Abnormally high pressure situations (historically seen with intense Arctic highs) can exceed the Kollsman window's calibrated range. When this happens, published special procedures -- set out by NOTAM and referenced in the TC AIM -- tell pilots how to set the altimeter and apply a correction so indicated altitude remains usable.",
    reference: "TC AIM AIR 1.5.9 - Abnormally High Altimeter Settings",
  },
  {
    id: 30,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Emergency Security Control of Air Traffic (ESCAT) Plan sets out procedures for",
    options: [
      "issuing medical certificate waivers during a declared public health emergency.",
      "the emergency control of civil air traffic in Canada during a defence emergency or national security threat.",
      "coordinating wake turbulence separation during periods of peak traffic.",
      "routine noise abatement procedures at controlled aerodromes.",
    ],
    answer: 1,
    explain:
      "ESCAT is a contingency plan, developed jointly with defence authorities, for controlling civil air traffic in the event of a national security or defence emergency -- it has nothing to do with routine operational matters like noise abatement or wake turbulence.",
    reference: "TP 690 Section 1 - ESCAT Plan",
  },
  {
    id: 31,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Performance-Based Navigation (PBN) specifies aircraft navigation requirements in terms of",
    options: [
      "the pilot's total flight hours logged in that aircraft type, rather than the aircraft's equipment.",
      "fixed, ground-based navaid infrastructure requirements only, to the exclusion of satellite navigation.",
      "the accuracy, integrity, availability, continuity, and functionality needed for the proposed operation, rather than mandating a specific type of navigation equipment.",
      "the specific brand and model of FMS or GPS receiver approved for a given route.",
    ],
    answer: 2,
    explain:
      "PBN moves away from prescribing a particular piece of avionics (like a specific ADF or VOR receiver) and instead defines the performance an aircraft's navigation system must deliver for a given route or procedure -- any equipment combination that meets that performance standard qualifies.",
    reference: "TC AIM RAC 6.0-6.2 - Performance-Based Navigation (PBN)",
  },
  {
    id: 32,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Canadian Minimum Navigation Performance Specifications (CMNPS) Airspace is designated primarily to",
    options: [
      "eliminate the requirement for a designated alternate aerodrome on any IFR flight within it.",
      "mandate visual navigation procedures for flights in remote northern regions.",
      "restrict all VFR operations above FL180 across Canada.",
      "permit reduced lateral separation between aircraft in designated high-level airspace, based on demonstrated navigation performance.",
    ],
    answer: 3,
    explain:
      "CMNPS airspace lets ATC apply reduced lateral separation between aircraft that have demonstrated (through certified equipment and procedures) the navigation performance required for that airspace -- an aircraft without CMNPS approval can still be accommodated, but without the benefit of the reduced separation.",
    reference: "TP 690 Section 1 - PBN, RNP, and CMNPS Airspace",
  },
  {
    id: 33,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "In high-level domestic airspace, a pilot who needs to change Mach number or true airspeed significantly while cruising should",
    options: [
      "advise ATC of the intended change, since ATC separation may depend on the aircraft's reported speed.",
      "request an entirely new IFR clearance, since any speed change constitutes a route amendment.",
      "make the change without notifying ATC, since speed changes are never separation-relevant at high level.",
      "only be permitted to make the change during a scheduled position report.",
    ],
    answer: 0,
    explain:
      "Where ATC is using speed-based procedures (e.g. Mach number technique) to maintain separation between aircraft at high level, an unannounced speed change can erode that separation. Pilots are expected to advise ATC before making a significant change, not simply proceed and mention it later.",
    reference: "TP 690 Section 1 - Mach Number/TAS Changes",
  },
  {
    id: 34,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When an IFR flight leaves controlled airspace and enters uncontrolled airspace, the pilot should",
    options: [
      "automatically cancel the IFR flight plan, since IFR flight is not permitted in uncontrolled airspace.",
      "report leaving controlled airspace to the appropriate ATS unit, since ATC separation and control service end at that point.",
      "contact the nearest FSS to request a retroactive Class A clearance.",
      "continue exactly as before, since ATC responsibility continues throughout Canadian airspace regardless of classification.",
    ],
    answer: 1,
    explain:
      "IFR flight is permitted in uncontrolled airspace, but ATC separation service ends where controlled airspace ends. Reporting the transition lets the ATS unit know the aircraft is now responsible for its own separation from other traffic in that segment.",
    reference: "TP 690 Section 1 - Leaving or Entering Uncontrolled Airspace",
  },
  {
    id: 35,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Strategic Lateral Offset Procedures (SLOP) allow a suitably equipped aircraft to fly an offset of",
    options: [
      "up to 2 NM left or right of centreline, at the pilot's discretion, with no published increment.",
      "exactly 5 NM right of centreline at all times when operating in oceanic airspace.",
      "up to 2 NM right of the centreline of its cleared route, in specified increments, to reduce collision risk from lateral navigation errors.",
      "an offset that requires individual ATC clearance for each specific instance.",
    ],
    answer: 2,
    explain:
      "SLOP permits small, standardized right-of-centreline offsets (typically centreline, 1 NM right, or 2 NM right) in designated airspace, without needing an individual ATC clearance for each offset, precisely so that small lateral navigation errors between two aircraft on the same route don't converge into the same track.",
    reference: "TC AIM RAC - Strategic Lateral Offset Procedures (SLOP)",
  },
  {
    id: 36,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "If an aircraft operating in RVSM airspace experiences an equipment failure that degrades its RVSM capability below the required standard, the pilot should",
    options: [
      "descend below FL290 without ATC clearance, on the pilot's own authority, to exit RVSM airspace.",
      "immediately squawk 7700, regardless of whether an actual emergency exists.",
      "continue as cleared without notifying ATC, since RVSM equipment failures are not a reportable event.",
      "notify ATC as soon as possible, since standard (non-reduced) vertical separation will need to be applied around the aircraft.",
    ],
    answer: 3,
    explain:
      "An RVSM capability loss is an in-flight contingency that ATC needs to know about immediately so standard vertical separation can be re-established around the aircraft -- it is not, by itself, an emergency requiring 7700, and the pilot cannot unilaterally leave a cleared flight level without ATC coordination.",
    reference: "TC AIM RAC 11.7 - RVSM In-Flight Contingencies",
  },
  {
    id: 37,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An 'approach ban' under CARs Part VII prohibits a commercial IFR flight from continuing an approach past a specified point when",
    options: [
      "the reported visibility or RVR at the aerodrome is below the minimum specified for the approach being flown.",
      "the flight has exceeded its planned fuel reserve by any margin, however small.",
      "the destination aerodrome has no operating control tower at the time of arrival.",
      "the crosswind component exceeds the aircraft's demonstrated crosswind limit.",
    ],
    answer: 0,
    explain:
      "The approach ban is specifically tied to reported visibility/RVR against the published minimum for the approach -- it prevents a commercial flight from continuing an approach it already knows, from the current weather report, it cannot legally complete. Crosswind limits and fuel reserves are governed by other provisions.",
    reference: "CARs Part VII, Subpart 0, Division II - Approach Bans",
  },
  {
    id: 38,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Flight time and flight duty time limitations under CARs Part VII are intended primarily to",
    options: [
      "restrict the maximum number of passengers a flight crew may carry on a given flight.",
      "mitigate the risk of pilot fatigue, by limiting maximum flight and duty periods and mandating minimum rest periods.",
      "limit the number of take-offs and landings a pilot may log in a calendar year.",
      "standardize crew pay calculations across all Canadian air operators.",
    ],
    answer: 1,
    explain:
      "Flight time/duty time rules exist to manage fatigue risk, capping how long a crew member may be on duty or flying and requiring minimum rest before the next duty period -- pay, landing currency, and passenger capacity are governed by entirely separate provisions.",
    reference: "CARs Part VII, Subpart 0, Division III - Flight Time and Flight Duty Time Limitations and Rest Periods",
  },
];
