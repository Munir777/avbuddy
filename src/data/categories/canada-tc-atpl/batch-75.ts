import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 75 -- Section 1: Air Law and
// Procedures, seventh pass. Original questions written from the TP
// 690 syllabus (topic headings only, no sample questions) and the
// actual Canadian Aviation Regulations (CARs). Covers the IFR
// alternate aerodrome requirement, IFR takeoff minima, personal
// locator beacons vs ELTs, Type Certificates vs Supplemental Type
// Certificates, Airworthiness Limitations vs Airworthiness
// Directives, a pilot licence's non-expiry vs privileges requiring
// medical/recency, RVR for takeoff/landing minima, EDTO/ETOPS
// operational approval, Prohibited/Restricted/Danger airspace
// areas, owner-performed elementary work, the CARs definition of
// night, night VFR navigation light requirements, VFR/IFR minimum
// fuel reserve requirements, a pilot's pre-flight airworthiness
// responsibility, when a flight plan or itinerary is mandatory, and
// the pilot-in-command's emergency authority to deviate from the
// regulations -- topics not yet addressed in batches 1, 11, 35, 45,
// 55, or 65. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_75_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, an IFR flight is generally required to designate an alternate aerodrome in the flight plan when",
    options: [
      "the flight's planned cruising altitude is above the transition altitude, regardless of destination weather.",
      "the destination aerodrome has a published instrument approach procedure, regardless of forecast weather conditions, which conflates having an approach procedure available with the actual alternate-requirement trigger, since an alternate is required based on forecast ceiling and visibility rather than merely on the existence of a published approach.",
      "the forecast weather for the destination, for the expected time of arrival, does not meet the specified ceiling and visibility criteria that would allow the destination to be used without an alternate.",
      "the flight is conducted entirely within controlled airspace, regardless of the destination's forecast weather.",
    ],
    answer: 2,
    explain:
      "An IFR flight plan must generally designate an alternate aerodrome unless the forecast weather for the destination, at the estimated time of arrival, meets specified ceiling and visibility criteria with sufficient margin -- if the destination forecast does not meet these criteria, an alternate meeting its own weather requirements must be designated, ensuring the flight has a viable option if the destination cannot be used on arrival.",
    reference: "TP 690 -- Air Law and Procedures: IFR Flight Planning Requirements",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "IFR takeoff minima, where published or applied by an operator, primarily exist to ensure that",
    options: [
      "wake turbulence separation from a preceding departure has been satisfied.",
      "the destination aerodrome's weather, rather than the departure aerodrome's, meets the applicable landing minima before departure is permitted, a requirement that does not reflect how takeoff minima actually work, since the relevant visibility standard concerns the departure aerodrome itself and the crew's ability to see well enough to reject the takeoff safely.",
      "the aircraft's weight and balance remain within approved limits for the runway in use.",
      "sufficient visibility (or RVR) exists for the crew to maintain control of the aircraft and, if necessary, safely reject the takeoff or return for landing in the event of an emergency shortly after departure.",
    ],
    answer: 3,
    explain:
      "IFR takeoff minima specify the minimum visibility (or RVR) required for a departure, primarily so that the crew has adequate visual reference to maintain control of the aircraft and to see and avoid obstacles or safely manage a rejected takeoff or an immediate return, should an emergency such as an engine failure occur shortly after becoming airborne -- these are distinct from, and applied independently of, the destination's landing weather minima.",
    reference: "TP 690 -- Air Law and Procedures: Takeoff and Landing Minima",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Personal Locator Beacon (PLB), as distinguished from an aircraft's installed Emergency Locator Transmitter (ELT), is generally",
    options: [
      "a smaller, individually carried distress beacon that a crew member or passenger can activate manually and take with them if they leave the aircraft, whereas an ELT is fixed to the airframe and, in many designs, activates automatically on impact.",
      "identical in every respect to an ELT, differing only in the manufacturer's brand name.",
      "prohibited from being carried on board any Canadian-registered aircraft under the CARs.",
      "required to be permanently wired into the aircraft's electrical system in the same manner as an ELT, which describes an ELT's fixed installation rather than a personal locator beacon's design, since a PLB is specifically built to be carried and activated independently of the aircraft's own systems.",
    ],
    answer: 0,
    explain:
      "A PLB is a small, individually carried distress beacon that a person can keep on their body and manually activate, remaining useful even if they become separated from the aircraft -- this differs from an installed ELT, which is fixed to the airframe, is generally designed to activate automatically upon a sufficient impact (via a G-switch), and stays with the aircraft rather than moving with any individual occupant.",
    reference: "TP 690 -- Air Law and Procedures: Emergency Equipment",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Supplemental Type Certificate (STC), as distinguished from the aircraft's original Type Certificate, is issued to approve",
    options: [
      "the aircraft's initial airworthiness for entry into service, replacing the need for a Type Certificate entirely, which confuses the two documents, since a Type Certificate establishes the original approved design and a Supplemental Type Certificate instead approves a later change to that already-established design.",
      "a significant modification or addition to an aircraft's original type design -- such as an avionics upgrade or a winglet installation -- that alters the aircraft from its originally certified configuration.",
      "the aircraft's registration mark and nationality, in place of a Certificate of Registration.",
      "an individual pilot's authorization to operate that specific aircraft type, functioning as a type rating.",
    ],
    answer: 1,
    explain:
      "A Type Certificate establishes the original approved design of an aircraft type; a Supplemental Type Certificate approves a significant modification to that original type design -- such as installing new avionics, winglets, or other equipment not part of the original certification -- allowing the modification to be applied to individual aircraft of that type while keeping the aircraft's airworthiness properly documented and traceable to an approved design change.",
    reference: "TP 690 -- Air Law and Procedures: Airworthiness",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Airworthiness Limitations section of an aircraft's approved maintenance data, listing mandatory life-limited component replacement intervals and certain mandatory inspections, differs from an Airworthiness Directive in that Airworthiness Limitations",
    options: [
      "apply only to engines, whereas Airworthiness Directives apply only to airframes.",
      "are established solely by the operator, with no connection to the aircraft manufacturer's approved data or any regulatory authority, a description that overstates operator discretion, since maintenance schedule requirements actually originate from the manufacturer's approved data and the type design approval, not from the operator acting independently of that data.",
      "are an integral part of the aircraft's original type design approval from entry into service, whereas an Airworthiness Directive is issued later, in response to an identified unsafe condition discovered after the aircraft type has already entered service.",
      "are entirely optional recommendations that an operator may choose to disregard, unlike an Airworthiness Directive, which is always mandatory.",
    ],
    answer: 2,
    explain:
      "Airworthiness Limitations are mandatory life limits and inspection requirements built into the aircraft's approved type design from the outset, covering components such as certain structural elements or engine life-limited parts, whereas an Airworthiness Directive is a mandatory corrective action issued by the regulator after the aircraft type has entered service, in response to an unsafe condition identified through in-service experience, investigation, or another type's related finding -- both are mandatory, but they originate at different points and for different reasons.",
    reference: "TP 690 -- Air Law and Procedures: Airworthiness",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Canadian pilot licence itself, once issued, generally",
    options: [
      "remains valid to exercise all of its privileges indefinitely, with no need for a medical certificate or recency requirements of any kind.",
      "is automatically suspended the moment the holder's medical certificate lapses, requiring the licence itself to be physically returned to the regulator.",
      "expires automatically after a fixed number of years and must be entirely reissued through a new application process.",
      "does not expire on its own, but the privileges it confers can only be exercised when the holder also meets separate, ongoing requirements such as a valid medical certificate and applicable recency experience.",
    ],
    answer: 3,
    explain:
      "A Canadian pilot licence does not carry its own expiry date and remains a licence the holder continues to possess; however, the ability to actually exercise its privileges -- to act as pilot-in-command or in another required crew position -- depends on separately meeting ongoing requirements such as holding a valid medical certificate and satisfying applicable recency experience, so a lapsed medical certificate suspends the ability to exercise privileges without invalidating the licence document itself.",
    reference: "TP 690 -- Air Law and Procedures: Personnel Licensing",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Runway Visual Range (RVR), where reported, is generally used in place of prevailing visibility to establish takeoff and landing minima because RVR",
    options: [
      "provides a more precise, instrument-derived measurement of the distance a pilot can expect to see down the runway itself, which can differ meaningfully from a more general visibility observation taken elsewhere on the aerodrome.",
      "is calculated using only the aircraft's own onboard sensors, with no ground-based equipment involved, which reverses the actual arrangement, since RVR is derived from ground-based transmissometer or forward-scatter equipment installed alongside the runway rather than from sensors carried on board the aircraft.",
      "measures wind speed and direction along the runway rather than any visibility-related parameter.",
      "replaces the need for any ceiling (cloud base) information when determining landing minima.",
    ],
    answer: 0,
    explain:
      "RVR is derived from instrumentation (such as transmissometers or forward-scatter sensors) sited along the runway itself, giving a more precise and representative measurement of the distance a pilot can expect to see down that specific runway than a general aerodrome visibility observation -- this precision is particularly valuable for lower-visibility operations, including Category II and III precision approaches, where RVR is used specifically rather than general visibility to determine whether an approach or takeoff may proceed.",
    reference: "TP 690 -- Air Law and Procedures: Takeoff and Landing Minima",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An operator conducting Extended Diversion Time Operations (EDTO), flying routes that take a twin-engine aircraft beyond a specified diversion time from an adequate aerodrome, is generally required to",
    options: [
      "operate only aircraft with four or more engines, since EDTO approval does not apply to twin-engine aircraft under any circumstances, which is backwards, since EDTO approval exists specifically to extend how far twin-engine aircraft may operate from a suitable diversion aerodrome, and does not restrict itself to aircraft with four or more engines.",
      "hold specific regulatory approval for EDTO, demonstrating that the aircraft, its systems, maintenance program, and crew procedures meet the additional requirements associated with extended single-engine (or other critical system) diversion capability.",
      "file a separate flight plan for every EDTO sector, distinct in form from a standard ICAO flight plan.",
      "obtain no special approval beyond the standard Air Operator Certificate already required for any commercial operation.",
    ],
    answer: 1,
    explain:
      "EDTO (the successor terminology to the more familiar ETOPS) requires specific regulatory approval beyond a standard Air Operator Certificate, since operating a route that takes the aircraft beyond a specified diversion time from an adequate aerodrome demands demonstrated reliability of the aircraft's systems, an approved maintenance program addressing EDTO-critical systems, appropriate crew training, and route-specific planning -- without this approval, an operator may not plan a route that exceeds the applicable non-EDTO diversion time limit.",
    reference: "TP 690 -- Air Law and Procedures: Operational Approvals",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Prohibited, Restricted, and Danger airspace areas, as designated special use airspace in Canada, are distinguished from the general airspace classification system (Class A through G) in that these areas",
    options: [
      "simply replace the Class A through G classification system entirely, meaning an area cannot be both, for example, Class E and Restricted airspace at the same time.",
      "apply only to military aircraft, with no restriction or effect on civilian aircraft of any kind.",
      "identify airspace where flight is either entirely forbidden (Prohibited), subject to specific restriction requiring authorization to enter (Restricted), or containing an identified hazard to uninvolved aircraft (Danger), regardless of which airspace class otherwise applies at that location.",
      "are established solely for noise abatement purposes around aerodromes, with no connection to safety, security, or hazard considerations.",
    ],
    answer: 2,
    explain:
      "Prohibited, Restricted, and Danger areas are special use airspace designations layered on top of the underlying Class A through G airspace classification -- a Prohibited area forbids flight entirely, a Restricted area requires specific authorization to enter due to an activity such as military exercises, and a Danger area identifies airspace containing an activity hazardous to aircraft not participating in it -- so a given piece of airspace can simultaneously carry both its regular class and one of these special use designations.",
    reference: "TP 690 -- Air Law and Procedures: Airspace Classification",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Elementary work, as a category of aircraft maintenance the CARs permit to be performed by the aircraft's owner or pilot without requiring certification by a licensed Aircraft Maintenance Engineer (AME), generally consists of",
    options: [
      "any maintenance task at all, provided the owner documents it afterward in the aircraft's journey log.",
      "maintenance performed only on aircraft operating under a commercial Air Operator Certificate, with no application to privately owned aircraft, a restriction that does not match the regulation, which instead lists specific low-risk tasks an owner may perform regardless of whether the aircraft is operated privately or under a commercial certificate.",
      "major structural repairs and engine overhauls, provided they are performed under the direct supervision of an AME.",
      "simple, low-risk tasks explicitly listed in the applicable regulation -- such as replacing a landing light bulb or servicing a tire -- rather than any maintenance task the owner personally feels competent to perform.",
    ],
    answer: 3,
    explain:
      "Elementary work is a defined, limited category of simple, low-risk maintenance tasks -- such as replacing a landing light bulb, servicing a tire, or similar straightforward items -- that are specifically and explicitly listed as permissible for an owner or pilot to perform and record without requiring certification by a licensed AME, rather than being defined by the owner's own subjective sense of competence, and it does not extend to major repairs, overhauls, or other work still requiring proper AME certification.",
    reference: "TP 690 -- Air Law and Procedures: Maintenance Requirements",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "For the purposes of the CARs (such as determining when navigation lights or night currency requirements apply), 'night' is generally defined as",
    options: [
      "the period starting one-half hour after sunset and ending one-half hour before sunrise, both times determined for the specific location and date in question, rather than a fixed clock time.",
      "the period from local civil midnight to local sunrise only, excluding the evening hours after sunset.",
      "a fixed period, the same clock hours everywhere in Canada regardless of location, date, or season.",
      "any time a pilot subjectively judges visibility to be too poor to see clearly, regardless of the actual time of day, a subjective standard that does not match the regulatory definition, which instead fixes night as beginning and ending at defined intervals relative to sunset and sunrise for the specific location and date.",
    ],
    answer: 0,
    explain:
      "The CARs define night as the period from one-half hour after sunset to one-half hour before sunrise, with sunset and sunrise times determined for the specific location and date rather than being a single fixed clock time applicable everywhere -- this regulatory definition is what triggers requirements such as operable navigation lights, currency for carrying passengers at night, and other night-specific provisions, regardless of how dark or light it may subjectively appear at a given moment.",
    reference: "TP 690 -- Air Law and Procedures: Definitions",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, an aircraft operated between the times defining night is generally required to display",
    options: [
      "position lights only while on the ground, with no lighting requirement once airborne.",
      "an operating anti-collision light system together with position (navigation) lights showing the appropriate colours (red to port, green to starboard, white to the rear) so that the aircraft's presence, and approximate heading, can be recognized by other aircraft and by observers on the ground.",
      "only a single white light mounted on the aircraft's nose, with no requirement for any other external lighting, which describes only a small fraction of the actual lighting requirement, since a properly lit aircraft must also display coloured position lights and an operating anti-collision light system recognizable to other aircraft and observers.",
      "no external lighting at all, provided the aircraft remains in radio contact with ATC throughout the flight.",
    ],
    answer: 1,
    explain:
      "An aircraft operated at night is generally required to display an operating anti-collision light system along with position lights in the standard colour pattern -- red on the left (port) wingtip, green on the right (starboard) wingtip, and white to the rear -- so that other aircraft and observers can recognize the aircraft's presence at night and infer its approximate heading and direction of travel from the relative position of the coloured lights.",
    reference: "TP 690 -- Air Law and Procedures: Aircraft Lighting Requirements",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Minimum fuel reserve requirements under the CARs generally differ between VFR and IFR flight in that",
    options: [
      "fuel reserve requirements are identical for VFR and IFR flight in every respect, with no distinction based on flight rules.",
      "VFR flight requires a larger fuel reserve than IFR flight under every circumstance.",
      "VFR flight requires enough fuel to reach the destination and then fly for a specified additional period (commonly a longer period at night than by day), while IFR flight requires enough fuel to reach the destination, proceed to the filed alternate (where required), and then fly for a specified additional reserve period beyond that.",
      "IFR flight requires no fuel reserve at all beyond the fuel needed to reach the destination directly.",
    ],
    answer: 2,
    explain:
      "VFR fuel reserve requirements generally call for enough fuel to reach the destination and then continue flying for a specified additional period (typically longer at night than during the day), while IFR fuel reserve requirements are generally more involved, requiring enough fuel to reach the destination, proceed from there to the filed alternate where one is required, and then still have a specified reserve remaining -- reflecting the greater uncertainty and lower en-route visual reference typically associated with IFR operations.",
    reference: "TP 690 -- Air Law and Procedures: Fuel Requirements",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Before conducting a flight, the pilot-in-command generally bears responsibility, under the CARs, for",
    options: [
      "confirming airworthiness only once per calendar year, rather than before each individual flight.",
      "relying exclusively on the most recent maintenance release, with no independent responsibility to assess the aircraft's condition before flight, a description that understates the pilot's own duty, since determining airworthiness before flight remains the pilot-in-command's personal responsibility and is not satisfied merely by the existence of a maintenance release.",
      "airworthiness determination only for aircraft operated privately, with commercial pilots bearing no such responsibility since it rests entirely with the operator's maintenance department.",
      "personally determining that the aircraft is airworthy and fit for the intended flight, which is a distinct responsibility from -- and does not depend solely on -- the AME's maintenance release certifying that scheduled maintenance has been properly performed.",
    ],
    answer: 3,
    explain:
      "While a maintenance release certifies that required maintenance has been properly performed and signed off by a qualified person, the pilot-in-command retains an independent, ongoing responsibility to personally determine, before each flight, that the aircraft is airworthy and fit for the flight being undertaken -- including matters a pre-flight inspection would reveal that fall outside what the maintenance release itself addresses -- and this responsibility applies to both private and commercial pilots-in-command.",
    reference: "TP 690 -- Air Law and Procedures: Pilot-in-Command Responsibilities",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, a flight plan or flight itinerary is generally required to be filed before departure when",
    options: [
      "the flight will operate under IFR, will cross international borders, or will otherwise fall outside limited exemptions (such as certain VFR flights remaining close to the departure aerodrome), reflecting a general expectation that some record of the intended flight exists for search and rescue purposes.",
      "the flight is conducted entirely under VFR in day conditions, in which case no flight plan or itinerary of any kind is ever required, which overstates the day VFR exemption, since even a local day VFR flight departing from and remaining near the departure aerodrome is only one narrow example of the limited exemptions that actually exist, and most day VFR cross-country flights still require a flight plan or itinerary.",
      "the flight will be conducted below 1,000 ft AGL, regardless of flight rules or route.",
      "the aircraft is a single-engine aircraft, with multi-engine aircraft exempted from any flight plan or itinerary requirement.",
    ],
    answer: 0,
    explain:
      "A flight plan or flight itinerary is generally required before most flights -- including all IFR flights and flights crossing international borders -- with limited exemptions for certain VFR flights that remain close to the departure aerodrome; the underlying purpose is to ensure that, at minimum, a flight itinerary or flight plan exists that can trigger search and rescue action if the aircraft fails to arrive or report as expected, which is why even VFR flights beyond the limited exemption generally must file one or the other.",
    reference: "TP 690 -- Air Law and Procedures: Flight Plans and Itineraries",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, a pilot-in-command who deviates from a regulation, an ATC clearance, or a procedure during an in-flight emergency generally",
    options: [
      "commits an offence with no possible justification, regardless of the nature or severity of the emergency encountered.",
      "may do so to the extent necessary to address the emergency, and is expected to report the deviation to the appropriate authority as soon as practicable afterward.",
      "must first obtain explicit ATC authorization before any deviation, even when the emergency leaves no time to do so.",
      "may deviate only from ATC clearances, with no corresponding authority to deviate from any other regulation during an emergency.",
    ],
    answer: 1,
    explain:
      "The CARs recognize the pilot-in-command's authority, during an in-flight emergency, to deviate from a regulation, an ATC clearance, or a published procedure to the extent necessary to address that emergency -- since real-time authorization is not always possible or practical during a genuine emergency -- with the expectation that the deviation and the reasons for it are reported to the appropriate authority as soon as practicable afterward, allowing the circumstances to be reviewed after the fact.",
    reference: "TP 690 -- Air Law and Procedures: Emergency Authority",
  },
];
