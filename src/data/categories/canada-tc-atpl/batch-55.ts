import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 55 -- Section 1: Air Law and
// Procedures, fifth pass. Original questions written from the
// actual Canadian Aviation Regulations and the TP 690 syllabus
// (topic headings only, no sample questions). Covers maintenance
// release authorization, the definition of "airworthy," the IFR
// clearance requirement before entering controlled airspace, the
// Restricted Operator Certificate - Aeronautical, the single-PIC
// requirement, passenger safety briefings, Emergency Response
// Plans, crew rest facilities, control zone definitions, VFR
// over-the-top, Special VFR at night, survival equipment for
// sparsely settled areas, portable fire extinguishers, icing
// equipment approval, the ATC instruction/clearance distinction,
// and the flight time/duty time definitional distinction -- topics
// not yet addressed in batches 1, 11, 35, or 45. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_55_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Before an aircraft is returned to service following maintenance, a maintenance release (or equivalent certification) is generally required to be signed by",
    options: [
      "an appropriately qualified and authorized person, such as an Aircraft Maintenance Engineer (AME) holding the applicable rating, certifying that the work was performed in accordance with applicable standards.",
      "any person present at the maintenance facility at the time, regardless of qualification, since maintenance release signoff is understood to carry no specific qualification requirement.",
      "the pilot-in-command exclusively, since maintenance personnel are understood to have no role whatsoever in certifying an aircraft's return to service.",
      "no one in particular, since a maintenance release is understood to be an entirely optional, non-mandatory document under the CARs.",
    ],
    answer: 0,
    explain:
      "A maintenance release generally must be signed by an appropriately qualified and authorized person, such as an AME holding the applicable rating, certifying that the maintenance work was performed in accordance with applicable standards -- it is not something any unqualified person present can sign, it is not typically the pilot-in-command's role to certify maintenance work performed by others, and it is a mandatory, not optional, requirement before returning an aircraft to service following applicable maintenance.",
    reference: "CARs 571 - Maintenance Release",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft is generally considered 'airworthy' when it",
    options: [
      "conforms to its approved type design (or an approved modification of it) and is in a condition for safe operation, both conditions being necessary together.",
      "merely holds a valid certificate of registration, since registration alone is understood to be sufficient to establish airworthiness regardless of the aircraft's actual condition.",
      "has flown at least once without incident, since a single successful flight is understood to conclusively establish an aircraft's ongoing airworthy status.",
      "conforms to its approved type design alone, with the aircraft's actual physical condition for safe operation understood to be irrelevant to airworthiness.",
    ],
    answer: 0,
    explain:
      "An aircraft is generally considered airworthy when it conforms to its approved type design (or an approved modification) and is in a condition for safe operation -- both elements are necessary together, so conformity to type design alone, without also being in a safe operating condition, is not sufficient, and neither is registration status or a single incident-free flight on its own.",
    reference: "CARs 101 - Airworthy: Definition",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.96 and related provisions, before entering controlled airspace under IFR, a pilot is generally required to",
    options: [
      "have obtained an ATC clearance applicable to that flight, since operating under IFR in controlled airspace without an appropriate clearance is not permitted.",
      "notify ATC only if weather conditions are below VFR minima, with no clearance requirement applying whenever weather happens to be at or above VFR minima.",
      "obtain a clearance only when carrying passengers, with an IFR flight operated with no passengers on board understood to be exempt from any ATC clearance requirement.",
      "rely solely on the filed IFR flight plan itself, since filing a flight plan is understood to automatically constitute a valid ATC clearance with no further requirement.",
    ],
    answer: 0,
    explain:
      "Before entering controlled airspace under IFR, a pilot is generally required to have obtained an applicable ATC clearance, since operating under IFR in controlled airspace without one is not permitted -- this requirement does not depend on whether weather happens to be at or above VFR minima, it applies whether or not passengers are on board, and simply filing an IFR flight plan does not by itself constitute the clearance needed to enter controlled airspace.",
    reference: "CARs 602.96 - IFR Clearance Requirement",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Restricted Operator Certificate - Aeronautical, generally required to operate an aircraft's radiotelephone equipment, confirms that the holder has",
    options: [
      "demonstrated the specific knowledge needed to operate aeronautical radiotelephone equipment correctly, including proper phraseology and operating procedures.",
      "been granted a full commercial pilot licence, since the two credentials are understood to be identical and issued through the same certification process.",
      "no need for any further pilot licence or rating, since holding this certificate alone is understood to be sufficient authorization to act as pilot-in-command.",
      "completed an unrelated medical examination, since the certificate's actual purpose concerns physical fitness rather than radiotelephone operating knowledge.",
    ],
    answer: 0,
    explain:
      "A Restricted Operator Certificate - Aeronautical confirms that the holder has demonstrated the specific knowledge needed to operate aeronautical radiotelephone equipment correctly, including proper phraseology and operating procedures -- it is a distinct credential from a pilot licence (not identical to or a substitute for one), and it addresses radiotelephone operating knowledge, not medical fitness.",
    reference: "CARs 425 - Radiotelephone Operator Certification",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, every flight is generally required to have",
    options: [
      "exactly one designated pilot-in-command, who bears overall responsibility for the safe conduct of that flight.",
      "no formally designated pilot-in-command at all, since responsibility for the flight's conduct is understood to be shared equally and informally among all crew members present.",
      "two or more pilots simultaneously designated as pilot-in-command with equal and overlapping authority for every decision made during the flight.",
      "a pilot-in-command designation that changes automatically and without any positive handover each time control of the aircraft passes between two qualified pilots.",
    ],
    answer: 0,
    explain:
      "Every flight is generally required to have exactly one designated pilot-in-command, who bears overall responsibility for the safe conduct of that flight -- responsibility is not simply shared informally and equally among all crew members with no designated individual, more than one simultaneous pilot-in-command with equal overlapping authority is not the standard arrangement, and any change in who holds that designation during a flight is expected to be a clear, positive handover rather than an automatic, unmarked shift.",
    reference: "CARs 101 - Pilot-in-Command",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Before takeoff, a passenger safety briefing (covering items such as seatbelt use, emergency exits, and other applicable safety information) is generally required to be provided",
    options: [
      "to passengers before the flight, with the specific content and format generally scaled to the type of operation and aircraft involved.",
      "only on flights longer than a specified minimum duration, with no briefing requirement applicable to any shorter flight regardless of aircraft type or operation.",
      "only if requested by a passenger, since providing a safety briefing is understood to be entirely optional and passenger-initiated rather than a standard requirement.",
      "only in writing, with any form of verbal or demonstrated safety briefing understood to be insufficient to satisfy the requirement under any circumstance.",
    ],
    answer: 0,
    explain:
      "A passenger safety briefing covering items such as seatbelt use, emergency exits, and other applicable safety information is generally required to be provided to passengers before the flight, with its specific content and format generally scaled to the type of operation and aircraft involved -- it is not limited to flights beyond some minimum duration, it is not merely optional or passenger-initiated, and a verbal or demonstrated briefing (not only a written one) can generally satisfy the requirement.",
    reference: "CARs 602/705 - Passenger Safety Briefings",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An air operator's Emergency Response Plan (ERP), required for certain operations, is generally intended to",
    options: [
      "provide an orderly and coordinated response by the operator's own organization to an accident, serious incident, or other emergency situation.",
      "replace the need for any coordination with external emergency services, since an ERP is understood to make outside agencies such as local fire or medical services entirely unnecessary.",
      "apply only to events that occur while the aircraft is airborne, with no application to an emergency occurring on the ground at the operator's own facility.",
      "serve no genuine operational purpose beyond satisfying a purely paperwork-based regulatory formality, with no expectation that it would actually be used.",
    ],
    answer: 0,
    explain:
      "An Emergency Response Plan is intended to provide an orderly and coordinated response by the operator's own organization to an accident, serious incident, or other emergency situation -- it complements rather than replaces coordination with external emergency services, it is not limited only to airborne events, and it is intended as a genuinely usable operational plan rather than a purely formal paperwork exercise.",
    reference: "CARs 705 - Emergency Response Plan",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For an augmented crew operating a long-haul flight with in-flight rest periods built into the schedule, the CARs and applicable operator requirements generally call for",
    options: [
      "a suitable rest facility (such as a designated rest seat or bunk) to be available for crew members taking their scheduled rest period, supporting effective fatigue management.",
      "no rest facility of any kind, since augmented crew members are understood to remain on the flight deck for the entire duration of the flight without any scheduled rest period.",
      "crew rest to occur only after landing, with no provision whatsoever for in-flight rest during a long-haul sector regardless of its duration.",
      "the same seat used for takeoff and landing to also serve as the designated rest facility, with no distinct or separate rest accommodation required.",
    ],
    answer: 0,
    explain:
      "For an augmented crew with scheduled in-flight rest periods, a suitable rest facility -- such as a designated rest seat or bunk -- is generally required to be available, supporting effective fatigue management on long-haul operations; this is a real, applicable requirement rather than an absence of any rest facility, rest is scheduled during the flight itself (not only after landing) precisely because of the augmented crew concept, and the rest facility is generally distinct from the operating crew seats used for takeoff and landing.",
    reference: "CARs 700 - Flight Crew Rest Facilities",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A control zone, a specific type of controlled airspace established around certain aerodromes, is generally established to",
    options: [
      "provide controlled airspace protection for aircraft arriving at, departing from, and operating in the vicinity of the associated aerodrome.",
      "cover the entire country's airspace uniformly, with no relationship whatsoever to any specific aerodrome's location or traffic pattern.",
      "apply exclusively to airspace above 60,000 ft ASL, with no application to the lower-altitude airspace actually surrounding an aerodrome.",
      "restrict all flight of any kind within its boundaries at all times, functioning identically to prohibited airspace rather than as ordinary controlled airspace.",
    ],
    answer: 0,
    explain:
      "A control zone is established around certain aerodromes to provide controlled airspace protection for aircraft arriving at, departing from, and operating in the vicinity of that aerodrome -- it is tied to a specific aerodrome's location and traffic pattern rather than covering the whole country uniformly, it applies at the lower altitudes surrounding the aerodrome rather than only far above it, and it is ordinary controlled airspace (permitting appropriately cleared or authorized flight) rather than functioning as an absolute, all-flight-prohibiting restriction.",
    reference: "CARs 101 - Control Zone",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "VFR flight conducted 'over-the-top' (above a layer of cloud, with the ground not continuously visible) is generally subject to conditions including",
    options: [
      "specific requirements regarding the ability to descend in VMC at the destination and other applicable weather and operational conditions set out in the CARs.",
      "no conditions whatsoever beyond those applicable to ordinary VFR flight below any cloud layer, since over-the-top VFR is understood to be entirely unrestricted.",
      "a complete prohibition under all circumstances, since VFR flight above a cloud layer is understood to never be permitted under the CARs.",
      "the same instrument rating requirement applicable to IFR flight, making over-the-top VFR functionally identical to an IFR flight in every respect.",
    ],
    answer: 0,
    explain:
      "VFR flight conducted over-the-top is generally subject to specific conditions, including requirements regarding the ability to descend in VMC at the destination and other applicable weather and operational conditions set out in the CARs -- it is not entirely unrestricted, it is not a blanket prohibition (it is permitted under the specified conditions), and it does not require the same instrument rating as IFR flight, remaining a VFR operation subject to its own specific over-the-top conditions.",
    reference: "CARs 602.116 - VFR Over-the-Top",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Special VFR clearance at night, as distinguished from a daytime Special VFR clearance, generally requires that",
    options: [
      "the pilot and aircraft be appropriately qualified and equipped for IFR flight, reflecting the additional risk of operating in reduced-visibility conditions after dark.",
      "no additional qualification or equipment be required beyond that needed for a daytime Special VFR clearance, since the two are understood to be identical in every respect.",
      "the flight be conducted exclusively over water, with Special VFR at night understood to be prohibited over any land area regardless of aircraft equipment or pilot qualification.",
      "ATC clearance never be required at night, the opposite of the actual requirement that a clearance be obtained for a Special VFR operation.",
    ],
    answer: 0,
    explain:
      "A Special VFR clearance at night generally requires that the pilot and aircraft be appropriately qualified and equipped for IFR flight, reflecting the additional risk of operating in reduced-visibility conditions after dark -- this is a meaningful additional requirement beyond a daytime Special VFR clearance, it is not restricted to flight over water only, and an ATC clearance remains required (not eliminated) for a Special VFR operation at night.",
    reference: "CARs 602.117 - Special VFR at Night",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a flight operated over sparsely settled areas of Canada, survival equipment requirements generally exist to",
    options: [
      "provide occupants with the means to survive on the ground until rescue, given the remoteness of many such areas and the potentially extended time before help could arrive.",
      "satisfy a purely symbolic regulatory requirement with no genuine relationship to occupant survival in the event of an unplanned landing in a remote area.",
      "apply only to flights operated at night, with no survival equipment requirement applicable to a daytime flight over the same sparsely settled area.",
      "replace the need for any search-and-rescue alerting system (such as a filed flight plan or itinerary), since carrying survival equipment is understood to make SAR alerting unnecessary.",
    ],
    answer: 0,
    explain:
      "Survival equipment requirements for flight over sparsely settled areas exist to provide occupants with the means to survive on the ground until rescue, given the remoteness of many such areas and the potentially extended time before help could arrive -- this is a genuine, practically motivated requirement rather than a purely symbolic one, it is not limited to night flights, and it complements rather than replaces the separate requirement to file a flight plan or itinerary for SAR alerting purposes.",
    reference: "CARs 602.61 - Survival Equipment",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Portable fire extinguishers required to be carried on board an aircraft are intended primarily to allow the crew to",
    options: [
      "respond to a fire that develops in the cabin or cockpit, such as one involving cargo, an electrical source, or a passenger's personal item, before it can spread further.",
      "extinguish an engine fire directly from inside the cabin, a function instead performed by a completely separate, dedicated engine fire extinguishing system.",
      "serve no genuine firefighting function at all, being carried purely to satisfy a symbolic regulatory checklist item with no expectation of actual use.",
      "replace the aircraft's smoke detection system entirely, since a portable fire extinguisher is understood to also perform smoke detection functions.",
    ],
    answer: 0,
    explain:
      "Portable fire extinguishers carried on board are intended to allow the crew to respond to a fire that develops in the cabin or cockpit -- such as one involving cargo, an electrical source, or a passenger's personal item -- before it can spread further; they are distinct from the aircraft's dedicated engine fire extinguishing system, they serve a genuine, actively intended firefighting function rather than a purely symbolic one, and they do not perform smoke detection.",
    reference: "CARs 605 - Portable Fire Extinguishers",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For a flight planned into forecast icing conditions, the aircraft is generally required to",
    options: [
      "be approved and appropriately equipped for flight into the icing conditions expected to be encountered, rather than relying on pilot judgment alone with an aircraft not certified for such conditions.",
      "carry no specific icing-related equipment at all, since any aircraft is understood to be automatically approved for flight into any icing conditions regardless of its actual equipment.",
      "avoid icing conditions entirely at all times, since flight into any forecast icing is understood to be absolutely prohibited under the CARs regardless of aircraft equipment.",
      "rely exclusively on the pilot's personal experience with icing, since aircraft equipment approval is understood to be irrelevant to whether flight into forecast icing is permitted.",
    ],
    answer: 0,
    explain:
      "A flight planned into forecast icing conditions generally requires the aircraft to be approved and appropriately equipped for the icing conditions expected to be encountered, rather than relying on pilot judgment alone in an aircraft not certified for such conditions -- this is a genuine aircraft equipment/approval requirement, not an automatic blanket approval regardless of equipment, an absolute prohibition on any icing encounter, or something left entirely to pilot experience without regard to certification.",
    reference: "CARs 605 - Aircraft Icing Certification",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An ATC instruction, as distinguished from an ATC clearance, is generally understood to be",
    options: [
      "a directive requiring immediate compliance (such as a heading, altitude, or speed instruction) issued for traffic or safety purposes, distinct from a clearance authorizing a flight to proceed under specified conditions.",
      "entirely optional and non-binding, with a pilot understood to be free to disregard any ATC instruction without any expectation of compliance.",
      "identical in every respect to a clearance, with the two terms used completely interchangeably and carrying no meaningful distinction.",
      "applicable only to IFR flights, with VFR flights understood to be entirely exempt from any obligation to comply with an ATC instruction.",
    ],
    answer: 0,
    explain:
      "An ATC instruction is generally understood as a directive requiring immediate compliance -- such as a heading, altitude, or speed instruction -- issued for traffic or safety purposes, distinct from a clearance, which authorizes a flight to proceed under specified conditions; an instruction is not merely optional or non-binding, the two terms are not fully interchangeable despite some overlap, and compliance obligations are not limited exclusively to IFR flights.",
    reference: "TC AIM RAC - ATC Instructions and Clearances",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "'Flight time' and 'duty time,' as distinct terms used in applying flight and duty time limitations, are generally distinguished in that",
    options: [
      "flight time refers specifically to time spent operating the aircraft (from the moment it first moves under its own power for flight until it comes to rest at the end of that flight), while duty time is a broader period that also includes other assigned work such as pre-flight preparation.",
      "the two terms are fully interchangeable, with 'flight time' and 'duty time' referring to precisely the same period with no meaningful distinction between them.",
      "duty time refers only to time spent asleep during a rest period, while flight time refers to all other waking hours, the reverse of their actual respective meanings.",
      "flight time is always longer than duty time for any given work period, since duty time is understood to always represent a subset contained entirely within flight time.",
    ],
    answer: 0,
    explain:
      "Flight time refers specifically to time spent operating the aircraft -- generally from the moment it first moves under its own power for the purpose of flight until it comes to rest at the end of that flight -- while duty time is a broader period that also includes other assigned work, such as pre-flight preparation, briefings, and other duties beyond time actually spent flying; the two terms are not interchangeable, and duty time (the broader period) is generally longer than or equal to flight time for a given work period, not the reverse.",
    reference: "CARs 700 - Flight Time and Duty Time Definitions",
  },
];
