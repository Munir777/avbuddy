import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 35 -- Section 1: Air Law and
// Procedures, third pass. Original questions written from the
// actual Canadian Aviation Regulations and the TP 690 syllabus
// (topic headings only, no sample questions). Covers IFR recency,
// alcohol/drug limitations, VFR weather minima, right-of-way
// rules, minimum altitudes, aerobatic restrictions, and airspace
// class requirements not yet addressed in batches 1 or 11. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_35_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "To act as pilot-in-command of an aircraft operated under IFR, CAR 401.05 generally requires that the pilot have completed, within the preceding six months,",
    options: [
      "exactly one instrument approach, a substantially lower threshold than the actual six-approach IFR recency standard.",
      "no specific instrument-related recency activity at all, since a valid instrument rating alone is sufficient regardless of how recently it was exercised.",
      "at least six instrument approaches, along with other specified IFR flight activity, to maintain instrument flight recency.",
      "a full instrument rating flight test renewal, repeated every six months without exception, rather than a lesser recency activity requirement.",
    ],
    answer: 2,
    explain:
      "Beyond simply holding a valid instrument rating, CAR 401.05 sets out a specific IFR recency requirement -- generally including a minimum number of instrument approaches (commonly cited as six) and other IFR flight activity within the preceding six months -- before a pilot may act as pilot-in-command under IFR, distinct from the underlying rating itself and from a full flight test renewal, which is not required on that same six-month cycle.",
    reference: "CARs 401.05 - Recency Requirements",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.03, a crew member is generally prohibited from acting as a crew member of an aircraft",
    options: [
      "at any time whatsoever, since CAR 602.03 imposes a lifetime prohibition on alcohol consumption for any licensed crew member.",
      "only while the aircraft is airborne, with no restriction at all applying to alcohol consumption before a flight that has not yet departed.",
      "only if they have consumed alcohol within the preceding 24 hours, with any lesser interval considered fully unrestricted under CAR 602.03.",
      "within a specified minimum period (commonly referred to as the '8 hours bottle to throttle' rule) after consuming alcohol, or while any alcohol or drug could impair their performance.",
    ],
    answer: 3,
    explain:
      "CAR 602.03 prohibits acting as a crew member within a specified minimum time after consuming alcohol (commonly summarized as an 8-hour rule) or while under the influence of alcohol or a drug, or while any drug could impair the crew member's faculties to the extent that safety could be affected -- a time-and-impairment-based restriction, not a lifetime prohibition, a flat 24-hour-only threshold, or one that applies only once airborne.",
    reference: "CARs 602.03 - Alcohol or Drugs",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, an 'aerodrome' is generally distinguished from a 'certified airport' in that",
    options: [
      "every certified airport is an aerodrome, but not every aerodrome meets the additional standards and holds the certificate required to be a certified airport.",
      "an aerodrome may only be used by military aircraft, while a certified airport may only be used by civil aircraft, a use-based rather than a standards-based distinction.",
      "a certified airport is a broader category encompassing all aerodromes, with 'aerodrome' being the narrower, more restrictive term of the two.",
      "the two terms are simply interchangeable, with no regulatory or operational distinction between an aerodrome and a certified airport.",
    ],
    answer: 0,
    explain:
      "'Aerodrome' is the broad term for any area of land or water (including any buildings, installations, and equipment) used for aircraft arrival, departure, and surface movement -- a certified airport is a specific subset of aerodromes that has met defined physical, operational, and safety standards and holds a certificate to that effect, meaning every certified airport is an aerodrome, but plenty of aerodromes (many private or unlicensed strips) are not certified airports, rather than the two terms being interchangeable, reversed in scope, or divided along military/civil lines.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Aerodromes and Airports",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "NOTAMs are generally classified using suffixes indicating whether a given NOTAM is",
    options: [
      "classified solely by the aerodrome they concern, with no classification at all based on whether the NOTAM is new, a replacement, or a cancellation.",
      "a new NOTAM (NOTAMN), a replacement for a previously issued NOTAM (NOTAMR), or a cancellation of a previously issued NOTAM (NOTAMC).",
      "always and exclusively a brand-new item of information, since NOTAMs, once issued, can never be replaced or cancelled by a later NOTAM.",
      "restricted to weather-related information only, with any non-weather-related notice excluded from the NOTAM system's classification scheme entirely.",
    ],
    answer: 1,
    explain:
      "The NOTAM system uses a simple classification to keep the active NOTAM list accurate and current: NOTAMN designates a genuinely new NOTAM, NOTAMR designates one that replaces (updates) a previously issued NOTAM on the same subject, and NOTAMC designates one that cancels a previously issued NOTAM -- letting users and systems track which notices remain current rather than treating every NOTAM as a standalone, permanent, never-superseded item, and the NOTAM system covers a wide range of aeronautical information, not weather alone.",
    reference: "TP 690 Section 1 - Air Law and Procedures, NOTAM System",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Canadian-registered aircraft are generally required to undergo a periodic inspection (commonly an annual inspection, or an equivalent progressive/other approved inspection program) primarily to",
    options: [
      "replace the need for maintenance release entries following any individual maintenance task performed between inspections.",
      "apply only to aircraft used for flight training, with all other categories of aircraft use specifically exempted from any periodic inspection requirement.",
      "verify on a recurring basis that the aircraft continues to meet its applicable airworthiness standards, rather than relying solely on the original certificate of airworthiness issuance.",
      "satisfy an entirely optional maintenance practice, with no regulatory requirement for any periodic inspection to occur at all.",
    ],
    answer: 2,
    explain:
      "A certificate of airworthiness reflects the aircraft's condition at a point in time -- ongoing airworthiness is maintained through required periodic inspections (an annual inspection being the most familiar baseline, with alternative approved inspection programs available for some operators) that recurrently verify the aircraft still meets applicable standards, a genuine regulatory requirement rather than an optional practice, one that doesn't replace the need for maintenance release documentation after individual tasks, and one that applies broadly rather than to training aircraft alone.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Aircraft Maintenance Requirements",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Minimum Equipment List (MEL), once approved for an operator's aircraft, allows a flight to be dispatched",
    options: [
      "with any item of equipment inoperative without restriction, since an approved MEL removes all equipment-related dispatch conditions entirely.",
      "only if every item of installed equipment is fully operative, since an approved MEL does not itself permit any equipment to be inoperative.",
      "exclusively for cargo-only flights, with an approved MEL considered inapplicable to any flight carrying passengers.",
      "with certain specified items of equipment inoperative, provided the conditions and limitations set out in the approved MEL for that item are met.",
    ],
    answer: 3,
    explain:
      "An approved MEL is precisely what gives an operator regulatory authority to dispatch with certain listed items inoperative, but only under the specific conditions, limitations, and (often) operational or maintenance procedures the MEL itself specifies for that item -- it's a controlled, conditional relief mechanism, not a blanket removal of all equipment requirements, not something that forbids all inoperative equipment (that would make the MEL pointless), and it applies to both passenger and cargo operations where approved, not cargo flights exclusively.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Minimum Equipment List",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "ADS-B Out equipment carriage is mandated in certain designated portions of Canadian airspace primarily to",
    options: [
      "provide ATC with a reliable, satellite-based surveillance source for aircraft operating in that airspace, particularly valuable where radar coverage is limited or absent.",
      "provide a two-way voice communication capability, functioning as a voice radio replacement rather than a surveillance technology.",
      "apply exclusively to aircraft operating under VFR, with IFR aircraft specifically exempted from any ADS-B Out carriage mandate.",
      "replace the requirement to carry a transponder entirely, with transponder carriage no longer required anywhere ADS-B Out is mandated.",
    ],
    answer: 0,
    explain:
      "Mandating ADS-B Out in designated airspace gives ATC a dependable, satellite-derived surveillance picture of equipped aircraft, which is especially valuable in areas where ground-based radar coverage is limited, patchy, or entirely absent -- it's a surveillance mandate that generally works alongside (and, on many aircraft, integrates with) transponder equipment rather than eliminating the transponder requirement, and it applies based on the airspace and equipage rules involved rather than being VFR-only or IFR-exempt, and it provides positional data, not a voice communication function.",
    reference: "TP 690 Section 1 - Air Law and Procedures, ADS-B Equipage Requirements",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "VFR flight is permitted only when the aircraft can be operated in accordance with the applicable visual meteorological conditions (VMC), which generally specify minimum",
    options: [
      "engine performance criteria only, with visibility and cloud clearance playing no role in defining VMC at all.",
      "flight visibility and distance-from-cloud criteria, which vary depending on the airspace classification and altitude at which the flight is conducted.",
      "fuel reserve requirements only, with VMC being fundamentally a fuel-planning rather than a weather-related concept.",
      "a single, universal visibility and cloud clearance standard that applies identically in every class of airspace and at every altitude without exception.",
    ],
    answer: 1,
    explain:
      "VMC minima are built around flight visibility and distance-from-cloud criteria, and those specific minimum values vary by airspace classification (controlled vs. uncontrolled) and by altitude (for example, different standards above and below 1,000 ft AGL, and in the various classes of controlled airspace) rather than being a single universal figure -- and VMC is fundamentally a weather/visibility concept, unrelated to engine performance or fuel reserve planning, which are governed by entirely separate regulatory provisions.",
    reference: "CARs 602.114-602.115 - VFR Weather Minima",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Special VFR (SVFR) clearance, issued by ATC within a control zone, allows a flight to",
    options: [
      "operate under conditions that always exceed, rather than fall below, standard VFR weather minima, making an SVFR clearance strictly more restrictive.",
      "bypass all ATC clearance and communication requirements entirely, functioning as a way to avoid contact with the controlling authority.",
      "operate within that control zone under conditions less than the standard VFR weather minima otherwise required there, subject to specific ATC-authorized conditions.",
      "operate outside the control zone under reduced weather minima, with SVFR having no application to flight within the control zone itself.",
    ],
    answer: 2,
    explain:
      "Special VFR exists precisely to let a flight operate within a control zone when weather is below the standard VFR minima otherwise required there, but only with ATC authorization and subject to specific conditions (such as remaining clear of cloud and maintaining a minimum flight visibility, along with traffic separation considerations) -- it's a controlled relaxation applicable specifically within the control zone (not outside it), one that still requires ATC clearance and communication rather than bypassing it, and one that permits operation below, not above, the standard minima.",
    reference: "CARs 602.117 - Special VFR Flight in Control Zones",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the general right-of-way rules, when two aircraft of the same category are converging at approximately the same altitude (and neither is landing),",
    options: [
      "neither aircraft is required to take any avoiding action, since right-of-way rules apply only to aircraft that are already on a direct collision course.",
      "the faster aircraft always has the right of way regardless of relative direction, since speed alone determines right-of-way in a converging situation.",
      "the aircraft at the higher altitude always has the right of way over the lower aircraft, since altitude alone determines right-of-way when converging.",
      "the aircraft that has the other on its right generally has the right of way, and the aircraft without the right of way must generally give way, avoiding passing over, under, or in front of the other aircraft.",
    ],
    answer: 3,
    explain:
      "The standard converging right-of-way rule gives way based on relative bearing: generally, an aircraft with another aircraft approaching from its right must give way, and the aircraft giving way should avoid passing over, under, or immediately in front of the other -- specific right-of-way hierarchies also apply between different categories of aircraft (such as balloons, gliders, and powered aircraft) and in overtaking or head-on situations, but for the general converging case among aircraft of the same category, it isn't determined by speed or altitude alone, and both aircraft share responsibility for maintaining vigilance and avoiding a collision, not just those already on a direct collision course.",
    reference: "CARs 602.19 - Right-of-Way",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Minimum altitude and distance rules for flight over built-up areas and open-air assemblies of persons exist primarily to",
    options: [
      "provide an adequate safety margin for people and property on the surface in the event of an emergency requiring a forced landing or descent.",
      "apply exclusively to aircraft operating under IFR, with VFR flight specifically exempted from any minimum-altitude-over-populated-areas requirement.",
      "regulate fuel efficiency during the cruise phase of flight, an economic rather than a safety-focused purpose for these altitude minimums.",
      "reduce noise exposure for people on the ground, with ground-safety considerations playing no role in setting these minimum altitude rules.",
    ],
    answer: 0,
    explain:
      "Minimum altitude and lateral distance requirements over built-up areas and open-air assemblies are fundamentally a ground-safety measure, aimed at giving an aircraft enough altitude (and, correspondingly, enough time and options) to glide clear or otherwise manage an emergency without unnecessarily endangering people and property below -- noise considerations can factor into separate noise abatement procedures, but that's not the core rationale here, the requirement applies broadly rather than to IFR flight alone, and it has nothing to do with cruise fuel efficiency.",
    reference: "CARs 602.14-602.15 - Minimum Altitudes and Distances",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, deliberate aerobatic manoeuvres are generally prohibited",
    options: [
      "only during hours of darkness, with daytime aerobatic flight considered entirely unrestricted regardless of location or altitude.",
      "over a built-up area or open-air assembly of persons, and below specified minimum altitudes, unless specifically authorized under a permit or other approved arrangement.",
      "only when carrying passengers, with aerobatic flight by a single pilot with no passengers aboard considered entirely unrestricted by any location or altitude rule.",
      "under all circumstances whatsoever, with no permit, authorization, or exception of any kind available for aerobatic flight anywhere in Canadian airspace.",
    ],
    answer: 1,
    explain:
      "Aerobatic manoeuvres are restricted, not banned outright: they're generally prohibited over built-up areas or open-air assemblies and below specified minimum altitudes, precisely for ground-safety and traffic-safety reasons, but they remain permitted (subject to those location/altitude restrictions, and any applicable permit requirements such as for an airshow) elsewhere -- the restriction isn't a blanket, exception-free prohibition, isn't limited to night flight, and applies regardless of whether passengers are carried.",
    reference: "CARs 602.27 - Aerobatic Manoeuvres",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under CAR 602.08, the use of a portable electronic device on board an aircraft is generally restricted primarily to prevent",
    options: [
      "any possibility of passenger distraction, with electromagnetic interference playing no role in the regulation's underlying rationale at all.",
      "unauthorized recording of cockpit conversations, a privacy rather than an electromagnetic-interference-focused regulatory purpose.",
      "interference with the aircraft's electronic navigation or communication equipment, unless the operator or pilot-in-command has determined the specific device will not cause such interference.",
      "excess electrical load on the aircraft's own electrical system, since portable electronic devices are assumed to draw power directly from aircraft systems.",
    ],
    answer: 2,
    explain:
      "CAR 602.08's core concern is electromagnetic interference with aircraft navigation and communication equipment -- portable electronic device use is restricted unless the operator or pilot-in-command has determined a particular device won't interfere with the aircraft's systems, which is why many devices are permitted once that determination has been made (a now-common practice), rather than the rule being about passenger distraction, cockpit-conversation privacy, or the (generally false) assumption that a battery-powered portable device draws power from the aircraft's own electrical system.",
    reference: "CARs 602.08 - Portable Electronic Devices",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Special Flight Operations Certificate (SFOC), issued under CARs Subpart 603, is generally required for",
    options: [
      "every single flight conducted anywhere in Canadian airspace, functioning as a universal flight authorization required in addition to a standard flight plan.",
      "recreational flying exclusively, with any commercial flight activity specifically excluded from ever requiring an SFOC.",
      "flights conducted entirely within a single province, with any flight crossing a provincial boundary specifically exempted from any SFOC requirement.",
      "certain specialized or non-standard flight activities not otherwise adequately addressed by the standard CARs provisions applicable to routine operations.",
    ],
    answer: 3,
    explain:
      "An SFOC exists as an authorization mechanism for flight activities that fall outside the scope of the standard regulatory provisions governing routine operations -- certain specialized, unusual, or higher-risk activities that need a tailored set of conditions and safety measures approved specifically for that operation, rather than being a universal requirement layered onto every ordinary flight, a provincial-boundary-based requirement, or one confined to recreational flying with commercial activity excluded.",
    reference: "CARs Part VI, Subpart 3 - Special Flight Operations",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Canadian-registered aircraft's nationality and registration marks (such as 'C-GABC') are generally required to be",
    options: [
      "displayed on the exterior of the aircraft in a specified location, size, and format, so the aircraft can be readily identified.",
      "recorded only in the aircraft's internal maintenance and technical logs, with no requirement for any exterior display on the aircraft itself.",
      "changed automatically every time the aircraft is sold to a new owner, even where the new owner elects to keep the aircraft registered in Canada.",
      "applicable only to aircraft used for commercial purposes, with privately owned, non-commercial aircraft specifically exempted from any registration marking requirement.",
    ],
    answer: 0,
    explain:
      "Registration marks serve an identification function and are required to be displayed externally on the aircraft in accordance with specified requirements for location, size, and format -- letting the aircraft be readily identified visually -- a requirement that applies to Canadian-registered aircraft generally, commercial and private alike, and one that doesn't automatically change simply because ownership changes hands while the aircraft remains registered in Canada under the same mark.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Aircraft Registration and Marking",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Before entering Class C or Class D airspace, a pilot is generally required to",
    options: [
      "have no communication requirement at all, since two-way radio contact is required only for Class A and Class B airspace, not for Class C or Class D.",
      "establish two-way radio communication with the appropriate ATC unit (and, for Class D, generally receive acknowledgment) before entering that airspace.",
      "carry an instrument rating, since both Class C and Class D airspace are, by definition, restricted to IFR-rated pilots only.",
      "obtain a specific, individually issued ATC clearance identical in form to the clearance required to enter Class A airspace, since Class C and D carry the same entry requirement as Class A.",
    ],
    answer: 1,
    explain:
      "Class C and Class D airspace both require establishing two-way radio communication with the controlling ATC unit before entry (with Class D generally requiring that communication be established, and Class C requiring both communication and, in effect, clearance to enter, given ATC's greater separation role there) -- a real, though graduated, communication/clearance requirement across these classes, distinct from Class A's individual clearance regime, from Class B/E's differing requirements, and it doesn't restrict either class to IFR-only traffic, since VFR flight is permitted in both subject to the applicable requirements.",
    reference: "TP 690 Section 1 - Air Law and Procedures, Canadian Domestic Airspace Classification",
  },
];
