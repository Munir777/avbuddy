import type { Question } from "../../../types";

// Canada TC ATPL - Section 1: Air Law and Procedures
// Batch 85 - Eighth depth pass
export const CANADA_TC_ATPL_BATCH_85_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Class G airspace, within the Canadian Domestic Airspace classification system, is generally characterized by",
    options: [
      "requiring every aircraft entering it to hold an ATC clearance before entry",
      "being reserved exclusively for military IFR training flights",
      "being uncontrolled airspace in which ATC does not provide separation service, though VFR and IFR traffic may both operate, each following the see-and-avoid principle and applicable regulations",
      "being defined solely as the airspace directly overlying a certified airport's runway",
    ],
    answer: 2,
    explain:
      "Class G airspace is uncontrolled airspace: ATC does not provide separation service to traffic operating within it, and both VFR and IFR flights may operate, relying on the see-and-avoid principle and compliance with the applicable regulations rather than an ATC clearance.",
    reference: "TP 690 -- Air Law and Procedures: Class G airspace",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Canadian NOTAM (Notice to Air Missions) system exists primarily to disseminate",
    options: [
      "information intended solely for use by air traffic controllers, not pilots",
      "time-critical information concerning the establishment, condition, or change of an aeronautical facility, service, procedure, or hazard, where timely and widespread distribution by other means is not possible",
      "weather forecasts exclusively, with all other operational information handled through the AIP",
      "routine, long-term aeronautical information already adequately covered by scheduled AIP or chart amendments",
    ],
    answer: 1,
    explain:
      "A NOTAM is used to distribute time-critical information -- such as the establishment, condition, or change of an aeronautical facility, service, procedure, or hazard -- when timely and widespread distribution through the normal scheduled AIP or chart amendment process is not possible.",
    reference: "TP 690 -- Air Law and Procedures: Purpose of the NOTAM system",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Aeronautical Information Publication (AIP) Canada is generally organized into sections that include",
    options: [
      "a single unified section with no further subdivision",
      "sections organized exclusively by aircraft manufacturer",
      "only aerodrome charts, with all other information published exclusively in the Canada Flight Supplement",
      "GEN (general information), ENR (en route information), and AD (aerodrome information)",
    ],
    answer: 3,
    explain:
      "AIP Canada follows the standard ICAO structure of GEN (general provisions and administrative information), ENR (en route information such as airspace structure and navigation aids), and AD (aerodrome information).",
    reference: "TP 690 -- Air Law and Procedures: AIP Canada structure",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Canada Flight Supplement (CFS), a companion publication to the AIP and CAP, primarily provides pilots with",
    options: [
      "precision instrument approach procedure charts exclusively",
      "aircraft type-specific performance data supplied by manufacturers",
      "detailed aerodrome, communication, and airspace information for individual Canadian aerodromes, such as runway data, lighting, fuel availability, and frequencies",
      "real-time air traffic control instructions",
    ],
    answer: 2,
    explain:
      "The CFS is a directory-style publication providing detailed aerodrome-specific information -- including runway data, lighting, fuel availability, communication frequencies, and airspace details -- for individual Canadian aerodromes, distinct from the instrument approach charts published in the CAP.",
    reference: "TP 690 -- Air Law and Procedures: Canada Flight Supplement",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Compared to a VFR Navigation Chart (VNC), a VFR Terminal Area Chart (VTA) generally provides",
    options: [
      "instrument approach procedures exclusively, replacing the need for a CAP",
      "the same scale and content as a VNC, differing only in the paper size printed",
      "less detail overall, intended only for high-altitude en route VFR flight",
      "greater detail at a larger scale for VFR flight in and around a busy terminal area with complex airspace",
    ],
    answer: 3,
    explain:
      "A VTA is published at a larger scale than a VNC, showing greater detail appropriate for VFR flight in and around busy terminal areas with more complex airspace structures, where the coarser detail of an en route VNC would be less useful.",
    reference: "TP 690 -- Air Law and Procedures: VNC versus VTA charts",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An Aeronautical Information Circular (AIC) is generally used to convey information that",
    options: [
      "applies exclusively to military aviation operations",
      "is urgent, time-critical, and must be distributed immediately as a NOTAM",
      "is of a general, often explanatory or administrative nature, and does not meet the criteria for a NOTAM or a regular AIP amendment",
      "supersedes the CARs on the specific subject it addresses",
    ],
    answer: 2,
    explain:
      "An AIC conveys information that is useful and often explanatory or administrative in nature -- such as background on a new procedure or policy -- but that is not urgent enough to warrant a NOTAM and does not fit within a regular scheduled AIP amendment.",
    reference: "TP 690 -- Air Law and Procedures: Aeronautical Information Circular",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When a Standard Instrument Departure (SID) or Standard Arrival Route (STAR) procedure is included as part of an IFR clearance, the pilot is generally required to",
    options: [
      "request a new procedure to be created before every flight",
      "fly the published procedure as issued unless otherwise instructed or cleared by ATC",
      "fly the procedure only if visual meteorological conditions exist throughout",
      "disregard the procedure entirely and navigate direct to the destination",
    ],
    answer: 1,
    explain:
      "Once a SID or STAR is included in an IFR clearance, the pilot is required to fly the published procedure as issued, complying with its routing and any altitude or speed restrictions, unless ATC issues an amended instruction or clearance.",
    reference: "TP 690 -- Air Law and Procedures: SID/STAR compliance",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An IFR clearance's 'clearance limit' refers to",
    options: [
      "the maximum true airspeed an aircraft is permitted to fly under that clearance",
      "the fix, point, or aerodrome to which an ATC clearance is issued, beyond which further clearance is required before the flight may proceed",
      "the highest altitude to which the aircraft is authorized to climb under that clearance",
      "the maximum number of aircraft that may be cleared on the same route within a given time period",
    ],
    answer: 1,
    explain:
      "The clearance limit is the fix, point, or aerodrome to which an ATC clearance extends; if further clearance beyond that limit has not been received in time, the pilot must be prepared to hold or otherwise act in accordance with published procedures.",
    reference: "TP 690 -- Air Law and Procedures: ATC clearance limit",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "When determining whether a proposed alternate aerodrome meets weather requirements for flight planning purposes, the forecast weather for that aerodrome at the aircraft's estimated time of arrival generally must",
    options: [
      "be disregarded entirely, since an alternate is selected based only on runway length",
      "exceed the minima applicable to the intended destination aerodrome, without reference to any separate alternate minima",
      "meet or exceed the specific alternate weather minima applicable to that aerodrome and approach, which are generally higher than the minima used for an approach at the destination",
      "only be considered if the destination forecast indicates VFR conditions",
    ],
    answer: 2,
    explain:
      "An alternate aerodrome's forecast weather at the estimated time of arrival must meet or exceed the specific alternate weather minima published for that aerodrome and approach; these alternate minima are generally set higher than the minima used for the approach itself, providing an added margin given the uncertainty inherent in a forecast.",
    reference: "TP 690 -- Air Law and Procedures: Alternate aerodrome weather minima",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A foreign air operator wishing to conduct a commercial air service into or within Canada is generally required to hold",
    options: [
      "no additional Canadian authorization, provided the aircraft is validly registered in its home state",
      "a Foreign Air Operator Certificate (or equivalent authorization) issued or recognized by Transport Canada, in addition to any authorization from its own state",
      "a standard Canadian Air Operator Certificate identical to that required of a Canadian operator, with no distinction made for foreign operators",
      "a Canadian pilot licence for every crew member operating the flight",
    ],
    answer: 1,
    explain:
      "A foreign air operator generally must hold a Foreign Air Operator Certificate or equivalent authorization recognized by Transport Canada, in addition to the authorization already held from its own state of registry or operator, before conducting a commercial air service into or within Canada.",
    reference: "TP 690 -- Air Law and Procedures: Foreign Air Operator Certificate",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The minimum number of flight attendants required to be carried on a commercial flight under the CARs is generally determined primarily by",
    options: [
      "the total flight time of the sector, regardless of aircraft size",
      "the number of passenger seats installed or the approved passenger seating configuration of the aircraft",
      "whether the flight is conducted by day or by night",
      "the number of pilots assigned to the flight",
    ],
    answer: 1,
    explain:
      "The minimum required flight attendant complement is generally tied to the number of passenger seats installed or the approved passenger seating configuration of the aircraft, reflecting the need for adequate cabin crew to manage passenger safety and evacuation for that configuration.",
    reference: "TP 690 -- Air Law and Procedures: Cabin crew complement",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft equipped with fuel jettison (dumping) capability that needs to dump fuel in flight to reduce weight for landing is generally required to",
    options: [
      "dump fuel only after landing, since airborne fuel dumping is prohibited under all circumstances",
      "dump fuel only over water, regardless of ATC coordination",
      "obtain ATC authorization and coordination beforehand where practicable, so the dumping can be conducted in a location and manner that minimizes hazard to persons, property, and other aircraft",
      "notify only the aircraft's operating company, with no requirement to involve ATC",
    ],
    answer: 2,
    explain:
      "Where practicable, a crew intending to jettison fuel is generally required to obtain ATC authorization and coordination beforehand, so the fuel dumping can be conducted at an appropriate location and altitude that minimizes hazard to persons, property, and other aircraft.",
    reference: "TP 690 -- Air Law and Procedures: Fuel jettison authorization",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The operator of a Canadian aerodrome generally bears responsibility for",
    options: [
      "setting the airspace classification applicable around the aerodrome",
      "maintaining the aerodrome and promptly reporting hazardous conditions (such as a disabled aircraft, unserviceable lighting, or a runway surface hazard) so that a NOTAM can be issued if warranted",
      "providing air traffic control separation services to all aircraft using the aerodrome",
      "issuing pilot licences to crews operating into that aerodrome",
    ],
    answer: 1,
    explain:
      "An aerodrome operator is generally responsible for maintaining the aerodrome and promptly reporting hazardous conditions -- such as a disabled aircraft, unserviceable lighting, or a runway surface hazard -- so that a NOTAM can be issued to warn pilots when warranted.",
    reference: "TP 690 -- Air Law and Procedures: Aerodrome operator responsibilities",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, a Terrain Awareness and Warning System (TAWS) is generally required to be installed on",
    options: [
      "every aircraft registered in Canada, regardless of size, engine type, or intended operation",
      "certain turbine-powered aircraft configured with a specified minimum number of passenger seats, as one of several equipment requirements tied to aircraft category and operation type",
      "only aircraft that do not carry a functioning altimeter",
      "aircraft operated exclusively under VFR, since IFR aircraft rely on ATC terrain separation instead",
    ],
    answer: 1,
    explain:
      "TAWS carriage requirements under the CARs are generally tied to aircraft category, engine type, and configuration, applying particularly to certain turbine-powered aircraft configured with a specified minimum number of passenger seats, rather than to every registered aircraft.",
    reference: "TP 690 -- Air Law and Procedures: TAWS carriage requirement",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Following an accident or a reportable incident, an aircraft's cockpit voice recorder (CVR) recording is generally required to be",
    options: [
      "immediately erased by the operator to protect crew privacy before any investigation begins",
      "preserved and protected from erasure or tampering, so that it remains available to support the ensuing investigation",
      "released to the media before the Transportation Safety Board can review it",
      "retained only if the pilot-in-command specifically requests that it be kept",
    ],
    answer: 1,
    explain:
      "Following an accident or reportable incident, the CVR recording is generally required to be preserved and protected from erasure or tampering, ensuring it remains available to support the investigation, rather than being erased, released prematurely, or retained only at the pilot's discretion.",
    reference: "TP 690 -- Air Law and Procedures: CVR preservation after an occurrence",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Certain Canadian commercial air operators, such as those certificated under CARs Subpart 705, are generally required by the CARs to establish and maintain",
    options: [
      "a system exclusively focused on financial risk management, with safety addressed informally",
      "a voluntary safety program that the operator may discontinue at any time without notifying Transport Canada",
      "a Safety Management System (SMS), providing a documented, proactive process for identifying hazards and managing safety risk within the organization",
      "a system that applies only after an accident has already occurred",
    ],
    answer: 2,
    explain:
      "Certain operators, including those certificated under CARs Subpart 705, are generally required to establish and maintain a Safety Management System -- a documented, proactive organizational process for identifying hazards and managing safety risk -- rather than relying on an informal or purely reactive approach.",
    reference: "TP 690 -- Air Law and Procedures: Safety Management System requirement",
  },
];
