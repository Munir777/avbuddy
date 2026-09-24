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
      "being reserved exclusively for military IFR training flights, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "being defined solely as the airspace directly overlying a certified airport's runway, a description not supported by the applicable CARs provision or Transport Canada guidance",
      "being uncontrolled airspace in which ATC does not provide separation service, though VFR and IFR traffic may both operate, each following the see-and-avoid principle and applicable regulations",
      "requiring every aircraft entering it to hold an ATC clearance before entry, which overlooks the regulatory or procedural considerations that actually govern this requirement",
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
      "routine, long-term aeronautical information already adequately covered by scheduled AIP or chart amendments, which overlooks the regulatory or procedural considerations that actually govern this requirement, as normally required under the regulations",
      "information intended solely for use by air traffic controllers, not pilots, which overlooks the regulatory or procedural considerations that actually govern this requirement, an oversimplification that ignores the specific regulatory conditions this depends on",
      "weather forecasts exclusively, with all other operational information handled through the AIP, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "time-critical information concerning the establishment, condition, or change of an aeronautical facility, service, procedure, or hazard, where timely and widespread distribution by other means is not possible",
    ],
    answer: 3,
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
      "GEN (general information), ENR (en route information), and AD (aerodrome information)",
      "sections organized exclusively by aircraft manufacturer, as normally required under the regulations",
      "a single unified section with no further subdivision, as normally required under the regulations",
      "only aerodrome charts, with all other information published exclusively in the Canada Flight Supplement",
    ],
    answer: 0,
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
      "aircraft type-specific performance data supplied by manufacturers, which overlooks the regulatory or procedural considerations that actually govern this requirement, as normally required under the regulations",
      "detailed aerodrome, communication, and airspace information for individual Canadian aerodromes, such as runway data, lighting, fuel availability, and frequencies",
      "precision instrument approach procedure charts exclusively, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "real-time air traffic control instructions, which overlooks the regulatory or procedural considerations that actually govern this requirement, which does not reflect how this requirement is actually applied in practice",
    ],
    answer: 1,
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
      "the same scale and content as a VNC, differing only in the paper size printed, a description not supported by the applicable CARs provision or Transport Canada guidance",
      "less detail overall, intended only for high-altitude en route VFR flight, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "greater detail at a larger scale for VFR flight in and around a busy terminal area with complex airspace",
      "instrument approach procedures exclusively, replacing the need for a CAP, which overlooks the regulatory or procedural considerations that actually govern this requirement",
    ],
    answer: 2,
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
      "applies exclusively to military aviation operations, as normally required under the regulations, under the applicable CARs",
      "is urgent, time-critical, and must be distributed immediately as a NOTAM, as normally required under the regulations",
      "supersedes the CARs on the specific subject it addresses, as normally required under the regulations",
      "is of a general, often explanatory or administrative nature, and does not meet the criteria for a NOTAM or a regular AIP amendment",
    ],
    answer: 3,
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
      "fly the published procedure as issued unless otherwise instructed or cleared by ATC",
      "disregard the procedure entirely and navigate direct to the destination, as normally required under the regulations",
      "fly the procedure only if visual meteorological conditions exist throughout, as normally required under the regulations",
      "request a new procedure to be created before every flight, as normally required under the regulations",
    ],
    answer: 0,
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
      "the highest altitude to which the aircraft is authorized to climb under that clearance, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "the fix, point, or aerodrome to which an ATC clearance is issued, beyond which further clearance is required before the flight may proceed",
      "the maximum true airspeed an aircraft is permitted to fly under that clearance, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "the maximum number of aircraft that may be cleared on the same route within a given time period, which overlooks the regulatory or procedural considerations that actually govern this requirement",
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
      "only be considered if the destination forecast indicates VFR conditions, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "exceed the minima applicable to the intended destination aerodrome, without reference to any separate alternate minima, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "meet or exceed the specific alternate weather minima applicable to that aerodrome and approach, which are generally higher than the minima used for an approach at the destination",
      "be disregarded entirely, since an alternate is selected based only on runway length, which overlooks the regulatory or procedural considerations that actually govern this requirement",
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
      "no additional Canadian authorization, provided the aircraft is validly registered in its home state, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "a Canadian pilot licence for every crew member operating the flight, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "a standard Canadian Air Operator Certificate identical to that required of a Canadian operator, with no distinction made for foreign operators, which does not reflect how this requirement is actually applied in practice",
      "a Foreign Air Operator Certificate (or equivalent authorization) issued or recognized by Transport Canada, in addition to any authorization from its own state",
    ],
    answer: 3,
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
      "the number of passenger seats installed or the approved passenger seating configuration of the aircraft",
      "the total flight time of the sector, regardless of aircraft size, under the applicable CARs",
      "whether the flight is conducted by day or by night, as normally required under the regulations",
      "the number of pilots assigned to the flight, as normally required under the regulations",
    ],
    answer: 0,
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
      "dump fuel only over water, regardless of ATC coordination, which overlooks the regulatory or procedural considerations that actually govern this requirement, a description not supported by the applicable CARs provision or Transport Canada guidance",
      "obtain ATC authorization and coordination beforehand where practicable, so the dumping can be conducted in a location and manner that minimizes hazard to persons, property, and other aircraft",
      "notify only the aircraft's operating company, with no requirement to involve ATC, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "dump fuel only after landing, since airborne fuel dumping is prohibited under all circumstances, which overlooks the regulatory or procedural considerations that actually govern this requirement, as normally required under the regulations",
    ],
    answer: 1,
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
      "issuing pilot licences to crews operating into that aerodrome, which overlooks the regulatory or procedural considerations that actually govern this requirement, which does not reflect how this requirement is actually applied in practice",
      "setting the airspace classification applicable around the aerodrome, which overlooks the regulatory or procedural considerations that actually govern this requirement, as normally required under the regulations",
      "maintaining the aerodrome and promptly reporting hazardous conditions (such as a disabled aircraft, unserviceable lighting, or a runway surface hazard) so that a NOTAM can be issued if warranted",
      "providing air traffic control separation services to all aircraft using the aerodrome, which overlooks the regulatory or procedural considerations that actually govern this requirement, as normally required under the regulations",
    ],
    answer: 2,
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
      "aircraft operated exclusively under VFR, since IFR aircraft rely on ATC terrain separation instead, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "only aircraft that do not carry a functioning altimeter, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "every aircraft registered in Canada, regardless of size, engine type, or intended operation, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "certain turbine-powered aircraft configured with a specified minimum number of passenger seats, as one of several equipment requirements tied to aircraft category and operation type",
    ],
    answer: 3,
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
      "preserved and protected from erasure or tampering, so that it remains available to support the ensuing investigation",
      "retained only if the pilot-in-command specifically requests that it be kept, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "released to the media before the Transportation Safety Board can review it, which overlooks the regulatory or procedural considerations that actually govern this requirement",
      "immediately erased by the operator to protect crew privacy before any investigation begins, a description not supported by the applicable CARs provision or Transport Canada guidance",
    ],
    answer: 0,
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
      "a system exclusively focused on financial risk management, with safety addressed informally, as normally required under the regulations",
      "a Safety Management System (SMS), providing a documented, proactive process for identifying hazards and managing safety risk within the organization",
      "a voluntary safety program that the operator may discontinue at any time without notifying Transport Canada, under the applicable CARs",
      "a system that applies only after an accident has already occurred, as normally required under the regulations, under the applicable CARs",
    ],
    answer: 1,
    explain:
      "Certain operators, including those certificated under CARs Subpart 705, are generally required to establish and maintain a Safety Management System -- a documented, proactive organizational process for identifying hazards and managing safety risk -- rather than relying on an informal or purely reactive approach.",
    reference: "TP 690 -- Air Law and Procedures: Safety Management System requirement",
  },
];
