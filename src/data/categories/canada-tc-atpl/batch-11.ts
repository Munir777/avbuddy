import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 11 -- Section 1: Air Law and
// Procedures, second pass. Original questions written from the CARs and
// the TP 690 syllabus (topic headings only, no sample questions),
// covering commercial operation subparts, licensing/type ratings, speed
// and airspace rules, and required equipment not yet covered in batch 1.
// Not transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_11_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.32, an aircraft operating below 10,000 ft ASL is generally limited to a maximum indicated airspeed of",
    options: ["250 knots.", "200 knots.", "300 knots.", "230 knots."],
    answer: 0,
    explain:
      "The general aircraft speed limitation below 10,000 ft ASL is 250 KIAS, intended to give pilots (particularly of slower aircraft, including VFR traffic) more reaction time in the busier, lower-altitude environment. This mirrors the equivalent speed restriction used in many other countries' airspace below the same altitude.",
    reference: "CARs 602.32 - Aircraft Speed Limitation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "CARs Subpart 703 (Air Taxi Operations) generally applies to commercial air operations conducted with",
    options: [
      "smaller aircraft, typically with fewer than 10 passenger seats, operated on a for-hire basis without a fixed schedule.",
      "large turbojet aircraft operated on a scheduled basis with more than 30 passenger seats.",
      "aircraft used exclusively for aerial application (crop spraying), with no passenger-carrying component.",
      "corporate aircraft carrying only the operator's own employees, never members of the public.",
    ],
    answer: 0,
    explain:
      "Subpart 703 covers smaller commercial (for-hire) operations, generally aircraft with fewer than 10 passenger seats and not conducted as a scheduled service -- distinct from the larger, more heavily regulated 704 (commuter) and 705 (airline) subparts, which apply as aircraft size and the nature of the operation (scheduled service, larger passenger capacity) scale up.",
    reference: "CARs Part VII, Subpart 3 - Air Taxi Operations",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Compared to Subpart 703 (Air Taxi), Subpart 704 (Commuter Operations) generally applies to",
    options: [
      "larger aircraft and/or a greater number of passenger seats, with correspondingly more extensive regulatory requirements for crew, manuals, and equipment.",
      "exactly the same aircraft size and operational scope as Subpart 703, differing only in name.",
      "operations that must always be conducted internationally, never domestically.",
      "aircraft used only for aerial work, with no commercial passenger-carrying component permitted.",
    ],
    answer: 0,
    explain:
      "As aircraft size/passenger capacity increases beyond what Subpart 703 covers, the applicable regulatory subpart steps up to 704, bringing with it more extensive requirements (crew composition, flight and duty time provisions, company manuals, equipment) appropriate to a larger-scale commercial operation -- and beyond 704's scope, 705 (Airline Operations) applies to the largest, generally jet-equipped operations.",
    reference: "CARs Part VII, Subpart 4 - Commuter Operations",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "CARs Subpart 705 (Airline Operations) -- the subpart most directly relevant to ATPL-level flying -- applies to commercial air operations conducted with",
    options: [
      "the largest aircraft in the commercial passenger/cargo fleet, generally including turbojet-powered and larger turbopropeller aircraft operated on a scheduled or extensive charter basis.",
      "only single-engine piston aircraft used for private, non-commercial flights.",
      "aircraft used exclusively for flight training, with no commercial passenger or cargo carriage.",
      "aerial work operations such as aerial photography and survey flights.",
    ],
    answer: 0,
    explain:
      "705 is the subpart governing the largest scale of commercial air operations -- the kind of turbojet and larger turbopropeller aircraft, and the associated crew, manual, training, and operational requirements, that an ATPL holder flying for an airline would typically be operating under -- distinct from the smaller-scale 703/704 operations or non-passenger-carrying 702 aerial work.",
    reference: "CARs Part VII, Subpart 5 - Airline Operations",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Private Operator Certificate, issued under CARs Subpart 604, authorizes",
    options: [
      "a company or individual to operate specified aircraft to transport their own employees, guests, or company business passengers, without operating as a commercial air service for hire to the general public.",
      "the general public to purchase tickets directly from the certificate holder, in the same way as a Subpart 705 airline.",
      "unrestricted commercial passenger carriage for hire, identical in scope to a Subpart 703 air taxi operation.",
      "flight training operations exclusively, with no passenger transportation component at all.",
    ],
    answer: 0,
    explain:
      "Subpart 604 exists for corporate/business aviation: it lets an operator carry its own personnel and guests using aircraft that may be quite large or sophisticated (comparable to some Subpart 704/705 aircraft), but without offering that transportation for hire to the general public the way a commercial air taxi, commuter, or airline operation does -- a meaningfully different regulatory category, even though the aircraft and even some procedures can look similar.",
    reference: "CARs Part VI, Subpart 4 - Private Operator Passenger Transportation Operations",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft type rating is generally required, in addition to the underlying pilot licence, when the pilot will act as pilot-in-command or second-in-command of an aircraft that is",
    options: [
      "type-certificated above a specified maximum weight, or is turbojet-powered, or is otherwise specified by the Minister as requiring one.",
      "any aircraft at all, regardless of weight or powerplant, including the smallest single-engine trainers.",
      "only required for aircraft operated under Subpart 703, and never for Subpart 705 aircraft.",
      "only required for aircraft with fixed landing gear, and never for retractable-gear aircraft.",
    ],
    answer: 0,
    explain:
      "Type ratings apply to specific aircraft that meet defined criteria -- generally a weight threshold, turbojet power, or specific Ministerial designation -- rather than to every aircraft a pilot might fly; smaller, simpler aircraft are instead covered by the broader class rating (e.g. single-engine land) attached to the underlying licence.",
    reference: "CARs 421 - Aircraft Type Ratings",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Certificate of Airworthiness remains valid for as long as",
    options: [
      "the aircraft continues to be maintained in accordance with its approved maintenance schedule and otherwise meets its type design and applicable airworthiness requirements.",
      "a fixed period of exactly 12 months from the date of issue, after which it must be entirely reissued regardless of maintenance status.",
      "the registered owner remains the same individual or company, with any change of ownership automatically invalidating it.",
      "the aircraft remains within Canadian domestic airspace, becoming invalid the moment it departs Canada.",
    ],
    answer: 0,
    explain:
      "Unlike a pilot medical certificate or some other time-limited documents, a Certificate of Airworthiness doesn't expire on a fixed calendar schedule -- it remains valid as long as the aircraft continues to be maintained in accordance with its approved maintenance schedule and continues to meet the airworthiness requirements applicable to it, which is why ongoing maintenance compliance (not a renewal date) is what actually keeps it valid.",
    reference: "CARs Part V - Airworthiness, Aircraft Airworthiness",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The general emergency frequency monitored for distress and urgency communications, and used in interception procedures, is",
    options: [
      "121.5 MHz (VHF), with 243.0 MHz (UHF) as the corresponding military frequency.",
      "121.5 MHz for both VHF and UHF use, with no separate UHF emergency frequency.",
      "123.45 MHz, reserved exclusively for air-to-air chat between civil aircraft.",
      "the last ATC frequency the aircraft was working, with no dedicated universal emergency frequency.",
    ],
    answer: 0,
    explain:
      "121.5 MHz is the internationally recognized VHF emergency/guard frequency, monitored by many ATS facilities and other aircraft; 243.0 MHz serves the equivalent purpose for military (UHF-equipped) aircraft. 406 MHz, by contrast, is the digital satellite-detected distress beacon frequency used by modern ELTs, a related but distinct system from the voice guard frequencies.",
    reference: "TP 690 Section 1 - Emergency Frequency and Intercept Signals",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "If an aircraft is intercepted by a military aircraft and radio communication cannot be established, the intercepted aircraft should",
    options: [
      "follow the visual signals given by the intercepting aircraft, which are internationally standardized (such as a rocking of the wings to instruct the intercepted aircraft to follow).",
      "immediately descend to the lowest safe altitude, regardless of any visual signal given by the intercepting aircraft.",
      "attempt to outrun or evade the intercepting aircraft to avoid being followed.",
      "ignore the intercepting aircraft entirely and continue on the originally filed flight plan unchanged.",
    ],
    answer: 0,
    explain:
      "Standardized visual intercept signals -- internationally recognized manoeuvres like a rocking of the wings meaning 'you have been intercepted, follow me' -- exist precisely for situations where radio contact can't be established, and intercepted aircraft are expected to comply with them rather than attempting to evade or simply continuing as originally planned.",
    reference: "TP 690 Section 1 - Emergency Frequency and Intercept Signals",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Canada Air Pilot (CAP) is the publication that contains",
    options: [
      "instrument approach and departure procedures (charts) for Canadian aerodromes.",
      "aerodrome directory information such as runway data, lighting, and communication frequencies.",
      "enroute low and high altitude charts for IFR navigation between aerodromes.",
      "the text of the Canadian Aviation Regulations themselves.",
    ],
    answer: 0,
    explain:
      "The CAP is specifically the source for instrument approach procedure charts (and related departure/arrival procedures) at Canadian aerodromes -- the aerodrome directory information (runways, lighting, frequencies) instead lives in the Canada Flight Supplement, and enroute navigation is covered by separate enroute chart products.",
    reference: "TP 690 Section 1 - Aeronautical Information Publications",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A designated mountainous region, as referenced in the CARs, primarily affects IFR operations by",
    options: [
      "requiring a higher minimum en route obstacle clearance altitude than would apply over less rugged terrain, reflecting the greater and less predictable terrain height involved.",
      "prohibiting IFR flight entirely within any designated mountainous region.",
      "removing the requirement for an alternate aerodrome on any flight routed through the region.",
      "having no operational effect at all; the designation is used only for aeronautical chart labelling purposes.",
    ],
    answer: 0,
    explain:
      "Designated mountainous regions carry increased minimum IFR altitude requirements (a larger obstacle clearance margin) than the CARs specify for less rugged terrain, reflecting the greater uncertainty and severity of terrain features in mountainous areas -- it's a real operational altitude requirement, not just a cartographic label, and it doesn't prohibit IFR flight or remove the alternate requirement.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Designated Mountainous Regions",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "'Major errors of a pressure altimeter,' as a syllabus topic, generally refers to the kind of gross error that would result from",
    options: [
      "the pilot failing to set the current altimeter setting, or the altimeter being set to the wrong units or reference (for example, confusing inches of mercury with hectopascals).",
      "the normal, expected difference between calibrated and indicated airspeed at high altitude.",
      "the routine and expected difference between true altitude and indicated altitude in the standard atmosphere.",
      "the aircraft flying above its maximum certified operating altitude.",
    ],
    answer: 0,
    explain:
      "Major altimeter errors of real operational concern are typically procedural -- failing to update the setting when required, or a units/reference mix-up (such as reading a hectopascal setting on an instrument calibrated in inches, or vice versa) -- rather than the small, expected discrepancies that exist even with a correctly set and correctly read instrument under standard atmospheric assumptions.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Major Errors of Pressure Altimeter",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Operational and emergency equipment requirements for a commercial flight (such as first aid kits, fire extinguishers, and survival equipment) are generally determined by",
    options: [
      "the type of operation being conducted (the applicable CARs Part VII subpart), the aircraft's passenger capacity, and the route or area being flown (for example, additional survival equipment for remote/sparsely settled areas).",
      "the pilot's personal preference alone, with no regulatory minimum specified.",
      "the aircraft's colour scheme and livery, which determines its required equipment category.",
      "a single, fixed equipment list that applies identically to every aircraft and every type of operation.",
    ],
    answer: 0,
    explain:
      "Required operational and emergency equipment scales with the nature of the operation (the applicable commercial subpart), the aircraft's size/passenger capacity, and the operating environment -- flights over remote or sparsely settled terrain, for instance, carry additional survival equipment requirements that a short flight over well-settled, populated areas would not need.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Operational and Emergency Equipment",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "CARs requirements for aircraft seats, safety belts, and shoulder harnesses generally require that",
    options: [
      "each occupant of a certain age or older have and use their own seat or berth with an approved safety belt, with a shoulder harness additionally required for required flight crew members during critical phases of flight.",
      "only the pilot-in-command is required to wear a safety belt; other occupants have no such requirement.",
      "a single safety belt may be shared between two adult occupants seated side by side.",
      "shoulder harnesses are never required on any Canadian-registered aircraft, regardless of seat position.",
    ],
    answer: 0,
    explain:
      "The general requirement is that each occupant above a specified age has their own seat/berth and safety belt (rather than sharing), and required flight crew members must additionally have, and use during critical phases of flight (take-off and landing), a shoulder harness -- a more demanding requirement than for passengers, reflecting the flight crew's exposure and role.",
    reference: "CARs 605.26 - Aircraft Seats, Berths, Safety Belts and Shoulder Harnesses",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The requirement to carry supplemental oxygen equipment (as distinct from the physiological need for oxygen) is set out in the CARs based primarily on",
    options: [
      "the cabin pressure altitude and the duration of flight at or above specified altitude thresholds.",
      "the aircraft's total seating capacity alone, regardless of the altitude flown.",
      "the pilot's personal medical history, rather than any altitude or duration criterion.",
      "the outside air temperature, rather than cabin pressure altitude.",
    ],
    answer: 0,
    explain:
      "The regulatory oxygen equipment carriage and use requirements are structured around cabin pressure altitude thresholds and how long the flight spends at or above them (for example, a shorter allowance at a moderate altitude versus a stricter requirement at a higher one) -- a regulatory trigger distinct from, though grounded in, the same underlying physiology (hypoxia risk) covered in the Human Factors section.",
    reference: "CARs 605.31-605.33 - Oxygen Equipment and Supply",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under Canadian Aviation Regulations, a Flight Data Recorder (FDR) or Cockpit Voice Recorder (CVR) carriage requirement generally applies based on",
    options: [
      "the type of commercial operation being conducted and characteristics of the aircraft, such as passenger seating configuration or maximum certificated take-off weight.",
      "the pilot's total flight time, with more experienced pilots exempted from the requirement.",
      "the colour of the aircraft's exterior paint scheme.",
      "whether the flight is conducted during the day or at night, with no requirement for night flights.",
    ],
    answer: 0,
    explain:
      "FDR/CVR carriage requirements are tied to the scale and nature of the operation -- generally driven by factors like the applicable commercial subpart, passenger seating configuration, and maximum certificated take-off weight -- rather than to the individual pilot's experience, the aircraft's paint scheme, or the time of day the flight is conducted.",
    reference: "CARs 605.33-605.38 - Flight Data Recorders, Cockpit Voice Recorders",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A commuter or airline operator's requirement to maintain company Operations and Training Manuals exists primarily to",
    options: [
      "document the operator's approved procedures, training program, and policies, giving both the operator's personnel and Transport Canada a consistent, auditable reference.",
      "satisfy a purely administrative filing requirement with no operational content or use.",
      "replace the need for individual pilots to hold a valid licence, rating, or medical certificate.",
      "apply only to maintenance personnel, with no content relevant to flight crew.",
    ],
    answer: 0,
    explain:
      "Company manuals translate the regulatory requirements into the operator's own specific, approved procedures and training program -- giving flight crew (and other personnel) a consistent reference for how the operator expects things to be done, and giving Transport Canada an auditable basis for oversight -- rather than being a paperwork formality or a substitute for individual licensing requirements.",
    reference: "CARs Part VII, Subpart 5, Division IX - Manuals",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 401.03 and related provisions, exercising the privileges of a pilot licence, permit, or rating generally requires that the holder",
    options: [
      "have the licence document (or another acceptable form of it) available for inspection while exercising those privileges.",
      "have memorized the exact text of every applicable CAR section, with no requirement to carry any documentation.",
      "be accompanied at all times by a second, currently rated pilot, regardless of the licence level held.",
      "re-write the original licensing examination annually, regardless of recency or medical status.",
    ],
    answer: 0,
    explain:
      "Pilots are generally required to have their licence (in an acceptable form, which can include some electronic formats depending on current provisions) available for inspection while exercising its privileges -- a straightforward documentary requirement, not a requirement to have memorized regulatory text, fly with a second pilot regardless of licence level, or re-write examinations on a recurring basis.",
    reference: "CARs 401.03 - Requirement to Hold and Produce a Licence",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Transportation Safety Board (TSB) reportable aviation occurrence generally includes events such as",
    options: [
      "an accident resulting in serious injury or significant aircraft damage, or specified serious incidents even without an actual accident occurring.",
      "only occurrences resulting in a fatality, with any lesser event exempt from any reporting requirement.",
      "routine, minor maintenance write-ups with no safety significance, which must all be reported individually to the TSB.",
      "only occurrences involving aircraft operated under Subpart 705, with smaller operations entirely exempt from TSB reporting.",
    ],
    answer: 0,
    explain:
      "TSB reporting requirements cover not just fatal or serious-injury accidents, but also a defined category of serious incidents that didn't result in an actual accident but indicate a safety risk worth investigating -- reporting isn't limited to fatalities, and it isn't limited to a particular subpart of commercial operation; smaller operators and private flights are within scope too.",
    reference: "TP 690 Section 1 - Other Law and Procedures, Transportation Safety Board and Aircraft Accidents",
  },
];
