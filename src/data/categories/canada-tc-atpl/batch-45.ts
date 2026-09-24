import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 45 -- Section 1: Air Law and
// Procedures, fourth pass. Original questions written from the
// actual Canadian Aviation Regulations and the TP 690 syllabus
// (topic headings only, no sample questions). Covers required
// onboard documents, airworthiness directive compliance, dangerous
// goods, VFR/night recency, ground icing, overwater survival
// equipment, the Air Operator Certificate requirement, transponder
// equipment, pilot logbooks, foreign aircraft permits, operational
// control, time-in-service, equipment certification standards,
// weight and balance documentation, and the overtaking right-of-way
// rule -- topics not yet addressed in batches 1, 11, or 35. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_45_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, the documents generally required to be carried on board a Canadian-registered aircraft during flight include",
    options: [
      "no specific documents at all, since Canadian air law relies entirely on ground-based recordkeeping rather than onboard document carriage.",
      "only the pilot's personal licence and medical certificate, since aircraft-specific certificates are held on file at the operator's base and need not be carried.",
      "the certificate of registration, the certificate of airworthiness (or flight permit), and, where applicable, the journey log and radio station licence.",
      "a single combined document issued by Transport Canada that consolidates registration, airworthiness, and radio licensing into one certificate.",
    ],
    answer: 2,
    explain:
      "Canadian air law requires certain aircraft documents to be carried on board during flight, including the certificate of registration and the certificate of airworthiness (or an applicable flight permit), with the journey log and radio station licence also required in the applicable circumstances -- these are separate documents rather than a single consolidated certificate, and carriage is a legal requirement rather than something satisfied solely by base recordkeeping.",
    reference: "CARs 605 - Aircraft Requirements",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An Airworthiness Directive (AD) issued against a particular aircraft type or component",
    options: [
      "becomes mandatory only after the operator's next scheduled periodic inspection, regardless of the compliance time actually specified in the directive.",
      "is a purely advisory recommendation that operators may choose to disregard entirely without affecting the aircraft's certificate of airworthiness or its continued eligibility to fly.",
      "applies only to aircraft manufactured after the AD is issued, since retroactive application to aircraft already in service is not permitted.",
      "identifies an unsafe condition and imposes a mandatory compliance requirement, which the operator must address within the AD's specified timeframe to keep the aircraft airworthy.",
    ],
    answer: 3,
    explain:
      "An Airworthiness Directive identifies an unsafe condition in an aircraft type, engine, propeller, or component and imposes a mandatory compliance requirement -- it is not merely advisory, it can apply to aircraft already in service, and compliance is governed by the timeframe specified in the AD itself rather than being deferred to the next routine inspection.",
    reference: "CARs 605 - Airworthiness Directives",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The transport of dangerous goods by air in Canada is governed primarily by",
    options: [
      "the Transportation of Dangerous Goods framework as applied to aviation, supplemented by CARs provisions restricting or prohibiting their carriage except as authorized and properly classified, packaged, and documented.",
      "the same VFR weather minima rules that apply to ordinary flight, since dangerous goods carriage is treated as a weather-related restriction rather than a cargo-handling one.",
      "airport-specific bylaws that vary independently from one aerodrome to another, with no overarching national standard.",
      "no formal regulatory framework, since dangerous goods are addressed solely through individual operator policy rather than federal regulation.",
    ],
    answer: 0,
    explain:
      "Dangerous goods carried by air in Canada are regulated under the dangerous goods framework as it applies to aviation, with the CARs restricting or prohibiting their carriage except where properly classified, packaged, labelled, and documented in accordance with that framework -- this is a national regulatory scheme, not merely individual operator policy or varying local bylaws, and it is unrelated to weather minima.",
    reference: "CARs 602.09 - Dangerous Goods",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "To carry passengers on a day VFR flight, CAR 401.05 generally requires that the pilot have completed, within the preceding six months,",
    options: [
      "a full licence flight test renewal repeated every six months, rather than a lesser takeoff-and-landing recency threshold.",
      "at least five takeoffs and five landings, as the basic recency requirement distinct from the separate six-month IFR approach recency standard.",
      "no recency requirement whatsoever, since a valid pilot licence alone is sufficient regardless of how recently it was exercised.",
      "the same six-instrument-approach requirement that applies to IFR flight, since day VFR and IFR recency are governed by an identical standard.",
    ],
    answer: 1,
    explain:
      "CAR 401.05 sets out a basic recency requirement for carrying passengers that is distinct from the six-month IFR approach standard -- generally a minimum number of takeoffs and landings (commonly cited as five) within the preceding six months -- rather than requiring the IFR-specific standard, no recency activity at all, or a full flight test renewal on that cycle.",
    reference: "CARs 401.05 - Recency Requirements",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.11, an aircraft with frost, ice, or snow adhering to its critical surfaces",
    options: [
      "must simply reduce takeoff weight to compensate, since weight reduction alone is deemed to offset any aerodynamic effect of surface contamination.",
      "is permitted to depart provided the accumulation is limited to the wing upper surface only, since in this view only fuselage icing is treated as a regulated critical surface.",
      "is generally prohibited from taking off unless that contamination has been removed or the aircraft has otherwise been demonstrated to be safe for flight.",
      "may take off without restriction, since ground icing contamination affects only ground handling and has no bearing on takeoff safety.",
    ],
    answer: 2,
    explain:
      "CAR 602.11 generally prohibits takeoff with frost, ice, or snow adhering to critical aircraft surfaces unless that contamination has been removed (typically by de-icing or anti-icing) or the aircraft is otherwise shown to be safe for flight, reflecting the significant aerodynamic penalty even light surface contamination can impose -- weight reduction alone does not satisfy this requirement, and the prohibition is not limited to the fuselage.",
    reference: "CARs 602.11 - Icing Conditions",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a flight conducted over water beyond gliding distance from shore, CAR 602.63 generally requires that the aircraft carry",
    options: [
      "survival equipment only if the flight is conducted under IFR, since VFR overwater flights are exempt from these requirements.",
      "a single shared life raft regardless of the number of persons on board, since capacity scaling with occupant count is not required.",
      "no additional survival equipment beyond what is already required for overland flight, since overwater and overland requirements are identical.",
      "life preservers or individual flotation devices for each person on board and, depending on distance and passenger capacity, life rafts of sufficient capacity.",
    ],
    answer: 3,
    explain:
      "CAR 602.63 imposes additional survival equipment requirements for extended overwater flight beyond gliding distance from shore, generally including life preservers or equivalent flotation devices for each occupant and, depending on the specific distance and passenger capacity involved, life rafts sized to the number of persons carried -- these requirements go beyond standard overland equipment and are not limited to IFR operations.",
    reference: "CARs 602.63 - Overwater Operations",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An Air Operator Certificate (AOC), required under CARs Subpart 700, authorizes its holder to",
    options: [
      "operate a commercial air service, subject to the conditions specified on the certificate, after Transport Canada has verified the operator's ability to conduct such operations safely.",
      "manufacture and certify new aircraft types, a function that is otherwise handled entirely by individual aircraft type certificates.",
      "issue pilot licences directly to its own employees, bypassing the normal Transport Canada licensing and examination process entirely for those individuals regardless of experience level.",
      "operate any aircraft for any purpose whatsoever, including private, non-commercial flying, without any further regulatory distinction.",
    ],
    answer: 0,
    explain:
      "An Air Operator Certificate is required to operate a commercial air service and is issued once Transport Canada has verified the operator's organization, personnel, and procedures are adequate to conduct such operations safely, subject to the specific conditions on the certificate -- it does not extend to private non-commercial flying generically, aircraft type certification, or pilot licence issuance, which are governed by separate regulatory processes.",
    reference: "CARs 700.02 - Air Operator Certificates",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The requirement for an aircraft to be equipped with a transponder capable of Mode C (altitude-encoding) operation applies primarily to",
    options: [
      "aircraft with more than 19 passenger seats only, since smaller privately operated aircraft are treated as exempt from any transponder requirement in all classes of airspace across the country.",
      "flight within designated transponder airspace, such as certain controlled airspace and around major aerodromes, as specified in the CARs regardless of whether the flight is VFR or IFR.",
      "IFR flights only, since VFR flights are categorically exempt from any transponder equipment requirement regardless of the airspace entered.",
      "aircraft operating above 60,000 ft ASL exclusively, since transponder carriage below that altitude is entirely at the pilot's discretion.",
    ],
    answer: 1,
    explain:
      "Transponder (including Mode C altitude-encoding) equipment requirements in the CARs are tied to designated transponder airspace -- such as certain classes of controlled airspace and the airspace around major aerodromes -- and apply regardless of whether the flight is conducted VFR or IFR, rather than being limited to IFR flights, a specific altitude band, or aircraft above a particular seating capacity.",
    reference: "CARs 605.35 - Transponder and Automatic Altitude-Reporting Equipment",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 401.08, a pilot is generally required to maintain a personal logbook that records",
    options: [
      "solely the maintenance status of each aircraft flown, duplicating information already recorded in the aircraft's own journey log.",
      "nothing beyond the pilot's licence number, since flight time itself is tracked exclusively by the operator rather than the individual pilot.",
      "flight time and other prescribed flight experience information, used to demonstrate compliance with licensing, rating, and recency requirements.",
      "only the pilot's total salary and employment history, since logbooks under CAR 401.08 serve an administrative payroll function rather than a flight-experience one.",
    ],
    answer: 2,
    explain:
      "CAR 401.08 requires a pilot to maintain a personal logbook recording flight time and other prescribed experience information, which serves to demonstrate compliance with licensing, rating, and recency requirements -- it is not a payroll record, a duplicate of the aircraft's journey log, or something the pilot can forgo simply because an operator also tracks flight time.",
    reference: "CARs 401.08 - Personal Logbooks",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A foreign-registered aircraft operating within Canadian airspace generally does so",
    options: [
      "under the exclusive authority of the aircraft's country of registration, with Canadian aviation regulations having no application to it while within Canadian airspace.",
      "without any need for authorization whatsoever, since ICAO membership alone is deemed entirely sufficient for any foreign aircraft to operate anywhere within Canadian airspace at will.",
      "only if it is first re-registered on the Canadian civil aircraft register, since dual or foreign registration is never recognized for operations in Canada.",
      "under the terms of applicable bilateral agreements or a specific permit or authorization, since foreign registration alone does not grant unrestricted access to Canadian airspace.",
    ],
    answer: 3,
    explain:
      "A foreign-registered aircraft operating in Canadian airspace generally does so under applicable bilateral agreements or a specific Canadian permit or authorization -- foreign registration and ICAO membership alone do not grant unrestricted access, re-registration in Canada is not required merely to operate there, and the aircraft remains subject to applicable Canadian aviation regulations while within Canadian airspace.",
    reference: "CARs 602.35 - Foreign Aircraft",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "To act as pilot-in-command of an aircraft carrying passengers at night under VFR, a pilot generally requires",
    options: [
      "a night rating (or equivalent qualification recorded on the licence), in addition to satisfying the applicable recency requirements for night flight.",
      "a full instrument rating, since night VFR flight is treated as legally equivalent to IFR flight regardless of actual weather conditions.",
      "only a valid medical certificate, since night flying privileges are governed exclusively by medical category rather than any specific rating or endorsement.",
      "no additional qualification beyond the basic day VFR licence, since night and day VFR privileges are identical under Canadian air law.",
    ],
    answer: 0,
    explain:
      "Canadian air law generally requires a night rating (or an equivalent qualification recorded on the pilot's licence) to act as pilot-in-command carrying passengers at night under VFR, along with satisfying applicable recency requirements -- day VFR privileges alone do not automatically extend to night flight, a full instrument rating is a separate qualification not required merely for night VFR, and medical certification alone does not confer night flying privileges.",
    reference: "CARs 401.05 - Recency and Ratings",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The concept of 'operational control' of a flight refers to",
    options: [
      "the physical manipulation of the aircraft's flight controls, a function that belongs exclusively to whichever pilot is designated as pilot flying at a given moment.",
      "the authority and responsibility for initiating, conducting, and terminating a flight, which under CARs Part VII is generally exercised jointly, in defined ways, by the air operator and the pilot-in-command.",
      "the maintenance organization's authority over whether an aircraft is released for a particular flight, a decision made independently of both the operator and the pilot-in-command.",
      "air traffic control's authority to issue clearances, a function entirely separate from and unrelated to both the air operator's own responsibilities and the pilot-in-command's role in conducting the flight itself.",
    ],
    answer: 1,
    explain:
      "Operational control refers to the authority and responsibility for initiating, conducting, and terminating a flight, which under CARs Part VII is generally exercised, in defined ways, jointly by the air operator (through its operational control system) and the pilot-in-command -- it is distinct from the mechanical act of flying the aircraft, from ATC's clearance authority, and from maintenance release decisions considered in isolation.",
    reference: "CARs 700 - Operational Control",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft's 'time in service,' as used in maintenance scheduling under the CARs, generally refers to",
    options: [
      "the total time the engine has run on the ground for maintenance runs and ground testing, excluding all revenue or training flights.",
      "the calendar time since the aircraft's last periodic inspection, regardless of how much or how little the aircraft has actually operated in that period.",
      "the elapsed time from the moment the aircraft first moves under its own power for the purpose of flight until it comes to rest at the end of that flight.",
      "only the time the aircraft spends airborne, excluding taxi time entirely, since ground movement is not considered part of time in service.",
    ],
    answer: 2,
    explain:
      "'Time in service' is generally defined as the elapsed time from when an aircraft first moves under its own power for the purpose of flight until it comes to rest at the end of that flight -- it therefore includes taxi time rather than only airborne time, and it is a measured operational quantity rather than simple calendar time since the last inspection or ground-run time alone.",
    reference: "CARs 101 - Definitions",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Equipment installed in an aircraft for use in flight must generally be",
    options: [
      "identical across all aircraft of the same type, since individual operators are not permitted to install any equipment beyond the original factory configuration.",
      "selected entirely at the operator's discretion, since the CARs impose no certification or approval requirement on installed equipment.",
      "approved only if it is used during IFR flight, since equipment used solely for VFR operations is exempt from any certification standard.",
      "of a type approved or otherwise accepted under the applicable airworthiness standards, and installed in accordance with an approved design or modification.",
    ],
    answer: 3,
    explain:
      "Equipment installed for use in flight is generally required to be of an approved or otherwise accepted type under applicable airworthiness standards and installed in accordance with an approved design or modification -- this requirement is not limited to IFR-specific equipment, is not left entirely to operator discretion, and does not prohibit later-installed equipment provided it is properly approved.",
    reference: "CARs 605.06 - Aircraft Equipment Standards",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a commercial flight conducted under CARs Part VII, weight and balance documentation showing the aircraft is loaded within approved limits is generally",
    options: [
      "required to be prepared and available before the flight, confirming the loaded aircraft remains within its approved weight and centre of gravity limits.",
      "the sole responsibility of the aircraft manufacturer, with no requirement whatsoever for the operator or flight crew to verify compliance before each individual flight.",
      "optional, since weight and balance compliance can instead be verified informally by the pilot's visual assessment of the cabin and cargo compartment.",
      "required only for flights exceeding a fixed stage length, since shorter sectors are exempt from any weight and balance documentation requirement.",
    ],
    answer: 0,
    explain:
      "Commercial operations under CARs Part VII generally require weight and balance documentation to be prepared and available before flight, confirming the loaded aircraft remains within its approved weight and centre of gravity limits -- this is not satisfied by informal visual assessment alone, is not limited to flights beyond some fixed stage length, and remains an operator and crew responsibility for each individual flight rather than something resolved once by the manufacturer.",
    reference: "CARs 703/704/705 - Weight and Balance",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.19, when one aircraft is overtaking another,",
    options: [
      "right-of-way is determined solely by which aircraft happens to be larger or heavier in gross weight, regardless of which one is actually doing the overtaking or the circumstances of the encounter.",
      "the aircraft being overtaken has the right-of-way, and the overtaking aircraft must alter course (typically to the right) to keep clear until well past and clear of the other aircraft.",
      "both aircraft are equally obligated to alter course simultaneously toward each other's original heading, splitting the separation burden evenly.",
      "the overtaking aircraft has the right-of-way, since the slower aircraft ahead is expected to yield by descending or altering its own course.",
    ],
    answer: 1,
    explain:
      "Under CAR 602.19, an aircraft being overtaken has the right-of-way, and the overtaking aircraft is required to alter its own course -- typically to the right -- to keep clear until it is well past and clear of the aircraft being overtaken, rather than the overtaken aircraft being expected to yield, both aircraft altering course toward each other, or right-of-way being decided by relative aircraft size.",
    reference: "CARs 602.19 - Right-of-Way",
  },
];
