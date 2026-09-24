import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 39 -- Section 9: Flight
// Planning, fifth pass. Original questions written from standard
// flight planning principles, the actual Canadian Aviation
// Regulations, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers flight plan filing/reporting
// requirements, oceanic equipage and clearance, taxi and isolated-
// aerodrome fuel planning, MEL/CDL distinctions, and emergency
// deviation authority not yet addressed in batches 9, 12, 21, or
// 30. Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_39_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A flight plan is generally required to be filed with an air traffic services unit",
    options: [
      "with no minimum lead time whatsoever, since a flight plan filed at the exact moment of departure is treated as fully equivalent to one filed well in advance.",
      "only for flights departing from a controlled aerodrome, with flights departing from an uncontrolled aerodrome specifically exempted from any flight plan filing lead-time consideration.",
      "a minimum period before the proposed departure time, allowing the information to be distributed to the relevant ATC and other units before the flight actually departs.",
      "only after the aircraft has already become airborne, since flight plans are, by design, filed exclusively in flight rather than before departure.",
    ],
    answer: 2,
    explain:
      "Filing a flight plan (or flight itinerary) sufficiently ahead of the proposed departure time is what allows that information to actually reach and be distributed to the relevant air traffic services and other units in time to be useful -- a flight plan filed at the very last moment, or after departure, undermines that distribution and coordination purpose, which is why a minimum filing lead time is expected, applicable regardless of whether departure is from a controlled or uncontrolled aerodrome.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Estimated Elapsed Time (EET) to significant points along a route, included in a filed flight plan, is used by ATC primarily to",
    options: [
      "determine the aircraft's assigned squawk code, a surveillance-identification function unrelated to elapsed time estimates along the route.",
      "calculate the aircraft's expected fuel burn precisely, a fuel-planning function considered entirely separate from ATC's own use of EET.",
      "apply only to flights remaining within a single ATC unit's area of responsibility, with EET considered irrelevant to any flight crossing between units.",
      "anticipate when the flight is expected to reach specific points, supporting coordination between ATC units and, if the flight becomes overdue relative to those estimates, search-and-rescue alerting.",
    ],
    answer: 3,
    explain:
      "EET figures given for significant points along the route let ATC anticipate the flight's progress, supporting handoff coordination between successive ATC units along the route and, if the flight subsequently falls significantly behind those estimates without explanation, contributing to the recognition that the flight may be overdue -- a coordination and alerting function distinct from (though informed by) the crew's own separate fuel planning, unrelated to squawk code assignment, and specifically relevant to flights crossing between ATC units, not confined to flights remaining within just one.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "North Atlantic High Level Airspace (NAT-HLA), historically associated with Minimum Navigation Performance Specifications (MNPS) requirements, mandates that an operating aircraft",
    options: [
      "carry navigation equipment meeting a specified lateral navigation accuracy standard, reflecting the reduced lateral separation used in that airspace given the lack of direct radar surveillance over much of the ocean.",
      "apply only to aircraft remaining below the airspace's defined vertical limits, with any aircraft above those limits automatically exempt from any navigation performance requirement.",
      "carry no long-range navigation equipment at all, since NAT-HLA specifically prohibits the use of any dedicated oceanic navigation system.",
      "operate exclusively under VFR, with IFR flight considered categorically unauthorized anywhere within North Atlantic High Level Airspace.",
    ],
    answer: 0,
    explain:
      "NAT-HLA equipage requirements exist because the ocean-crossing routes it covers lack the radar surveillance available over most land areas, so reduced lateral separation between aircraft depends instead on demonstrated, consistent navigation accuracy -- aircraft must carry navigation systems (historically dual long-range navigation systems meeting the MNPS standard, now generally addressed through broader performance-based navigation requirements) capable of reliably meeting that accuracy standard, rather than being prohibited from carrying oceanic navigation equipment, restricted to VFR only, or automatically exempted above some altitude.",
    reference: "TP 690 Section 9 - Flight Planning, Route Planning",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A weight-and-balance index (or 'balance index') system, used by some operators as an alternative to expressing centre of gravity directly as a percentage of mean aerodynamic chord (%MAC), works by",
    options: [
      "eliminating the need for any centre of gravity limit at all, since an index-based system is considered to remove any possibility of an out-of-limits loading condition.",
      "assigning simplified index numbers to represent the moment effect of standard weight items (such as fuel, cargo, or passenger loading), which are then combined to arrive at a load-and-trim result without requiring a separate moment-arm calculation for each item.",
      "applying only to aircraft too small to have a defined centre of gravity envelope, with larger transport aircraft specifically excluded from ever using an index-based system.",
      "measuring centre of gravity using an entirely different physical quantity from %MAC, one that has no mathematical relationship to the aircraft's actual moment or balance condition at all.",
    ],
    answer: 1,
    explain:
      "An index-based weight and balance system is fundamentally a practical simplification: standard loading items are assigned pre-calculated index values (reflecting their moment effect) so that load planners can add and combine those simplified numbers rather than performing a full moment-arm calculation for every individual item -- the resulting index still corresponds directly to an actual CG/%MAC position and remains subject to the same certified CG envelope limits, so it doesn't remove the possibility of an out-of-limits condition, doesn't use an unrelated physical quantity, and can be used across various aircraft sizes, not smaller aircraft exclusively.",
    reference: "TP 690 Section 9 - Flight Planning, Weight and Balance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Taxi fuel, as a distinct component of a detailed flight plan's fuel calculation, accounts for",
    options: [
      "the same fuel already included within trip fuel, making a separate taxi fuel line item redundant with the trip fuel figure.",
      "the fuel expected to be consumed after landing while taxiing to the gate, with pre-departure ground fuel considered outside the scope of taxi fuel entirely.",
      "the fuel expected to be consumed during ground operations before takeoff (engine start, taxi to the runway, and any anticipated ground delay), calculated separately from trip fuel.",
      "fuel reserved exclusively for use by ground support equipment, unrelated to the aircraft's own engine fuel consumption during any ground phase.",
    ],
    answer: 2,
    explain:
      "Taxi fuel specifically covers the fuel burned during pre-departure ground operations -- engine start, taxiing out to the departure runway, and any anticipated ground delay -- and it's calculated as its own line item separate from trip fuel (which covers the airborne portion of the flight from takeoff to landing), giving a more complete and accurate total fuel figure rather than folding ground fuel burn into the trip fuel calculation, being redundant with it, or referring to post-landing taxi or ground-equipment fuel.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Declaring 'minimum fuel' to ATC, as distinguished from declaring a fuel emergency (MAYDAY FUEL), generally indicates that",
    options: [
      "the flight already has less fuel remaining than final reserve fuel, making 'minimum fuel' and a declared fuel emergency functionally identical notifications.",
      "no actual change in fuel state has occurred, with 'minimum fuel' functioning purely as a routine, informational-only phrase carrying no operational significance to ATC.",
      "the flight has more fuel remaining than originally planned, an excess-fuel notification rather than a reduced-fuel-margin one.",
      "the flight's remaining fuel does not yet require a declared emergency, but any additional delay could result in landing with less than final reserve fuel remaining, alerting ATC to the reduced margin.",
    ],
    answer: 3,
    explain:
      "'Minimum fuel' is a specific, standardized advisory to ATC: fuel remaining is not yet critical enough to declare an emergency, but the margin has narrowed to the point that any additional, unplanned delay (vectoring, holding, and so on) could result in landing with less than final reserve fuel -- it's a heads-up intended to prompt ATC to avoid imposing further delay where possible, a materially different (and less urgent) notification than declaring an actual fuel emergency (which indicates fuel is already at or below the point requiring priority handling), and it isn't an excess-fuel, purely informational, or airspeed-related declaration.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Redispatch (or a 'decision point') procedure, used by some operators on certain long-haul routes, allows a flight to be dispatched",
    options: [
      "to an intermediate redispatch point using one set of alternate/fuel requirements, and then, upon meeting specified conditions at that point, redispatched onward to the final destination under a separate flight plan, potentially reducing overall required fuel and alternate carriage.",
      "with no flight plan or dispatch release of any kind for the first portion of the flight, an entirely undocumented segment until the redispatch point is reached.",
      "only when the aircraft is carrying no passengers at all, with redispatch procedures specifically prohibited on any flight carrying revenue passengers.",
      "using a single, unchanging flight plan for the entire route, with 'redispatch' referring only to renaming that same unmodified flight plan partway through the flight.",
    ],
    answer: 0,
    explain:
      "Redispatch splits a long flight into two dispatch legs: the aircraft is initially dispatched to an intermediate redispatch (decision) point under one set of requirements, and then, provided specified conditions (such as weather and aircraft status) are met at that point, a second dispatch release takes the flight onward to its final destination -- a technique that can, under approved conditions, reduce the fuel and alternate requirements that would otherwise apply if the entire route were dispatched as a single leg, rather than being an undocumented, passenger-restricted, or effectively unchanged single flight plan.",
    reference: "TP 690 Section 9 - Flight Planning, Route Planning",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Before entering North Atlantic (or other designated) oceanic airspace along an organized track, a flight is generally required to",
    options: [
      "request clearance directly from an adjacent oceanic flight's crew, rather than from any ground-based ATC authority.",
      "obtain an oceanic clearance from the responsible ATC authority, confirming the specific track, flight level, and Mach number the flight is authorized to use across the oceanic segment.",
      "obtain clearance only if the flight intends to deviate from the published organized track system, with a flight following the published tracks exactly requiring no oceanic clearance at all.",
      "proceed without any additional clearance beyond the original domestic departure clearance, since oceanic airspace entry requires no separate authorization of any kind.",
    ],
    answer: 1,
    explain:
      "Entering oceanic airspace along an organized track requires obtaining a specific oceanic clearance from the responsible ATC authority, confirming the assigned track, flight level, and Mach number for that oceanic crossing -- a distinct authorization from the original domestic departure clearance, required whether the flight is following a published organized track or a random/other route, and obtained from the appropriate ground-based ATC authority rather than from another aircraft's crew.",
    reference: "TP 690 Section 9 - Flight Planning, Route Planning",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a flight planned to an 'isolated aerodrome' -- a destination with no other aerodrome reasonably available to serve as a suitable alternate -- fuel planning generally requires",
    options: [
      "no additional fuel consideration at all, since an isolated aerodrome is treated identically to any destination with a conveniently available alternate.",
      "carrying less fuel than would otherwise be required, since the absence of a suitable alternate reduces the overall fuel planning requirement rather than increasing it.",
      "carrying additional fuel (in place of designating an alternate) sufficient to allow for extended holding or an extended period of additional flight time beyond the normal destination fuel requirement.",
      "diverting to the nearest alternate regardless of suitability, overriding the very definition of 'isolated aerodrome' as a destination lacking any reasonably available alternate.",
    ],
    answer: 2,
    explain:
      "Where no aerodrome within a reasonable distance and time can reasonably serve as an alternate, the regulatory response isn't to simply skip the alternate-fuel consideration -- it's to require additional fuel (calculated to cover extended holding or additional flight time) in place of the alternate fuel that would otherwise be carried, giving the crew a workable margin for a destination-only, no-alternate scenario, rather than reducing the fuel requirement, ignoring it, or requiring a diversion to an alternate that, by the very definition of 'isolated aerodrome,' doesn't reasonably exist.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Minimum Equipment List (MEL) and a Configuration Deviation List (CDL) are both dispatch-relief documents, but they are distinguished in that",
    options: [
      "the CDL addresses installed avionics and systems equipment exclusively, while the MEL addresses only external airframe components, the reverse of their actual respective scopes.",
      "the MEL and CDL cover exactly the same scope of items, with the two documents simply being duplicate versions of an identical list.",
      "neither document has any connection to aircraft performance, with both the MEL and CDL addressing only cosmetic or non-functional aspects of the aircraft's configuration.",
      "the MEL addresses installed equipment/systems permitted to be inoperative, while the CDL addresses certain external, generally minor airframe/structural components (such as small access panels or fairings) permitted to be missing.",
    ],
    answer: 3,
    explain:
      "The MEL and CDL serve related but genuinely distinct purposes: the MEL lists installed systems and equipment that may be dispatched inoperative under specified conditions, while the CDL specifically addresses certain external airframe or structural items (such as particular access panels, fairings, or similar minor components) that may be missing at dispatch, generally with an associated performance penalty accounted for -- the reverse of their scopes as the incorrect option states, and both can carry genuine, quantifiable performance implications rather than being purely cosmetic.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The additional fuel required under the CARs for a Canadian IFR flight (beyond destination and alternate fuel) is conceptually similar to, but not necessarily numerically identical to, the ICAO concept of",
    options: [
      "contingency fuel, since both are intended to cover unforeseen factors affecting fuel consumption, though the specific calculation method and terminology can differ between the CARs and ICAO frameworks.",
      "taxi fuel, since both address only the ground fuel burn before takeoff, with no relevance to any airborne portion of the flight.",
      "final reserve fuel, since both are intended strictly as a fixed emergency-only quantity never to be used under normal operating conditions.",
      "holding fuel, since both are calculated exclusively based on a specific, pre-planned holding pattern the flight intends to fly.",
    ],
    answer: 0,
    explain:
      "Different regulatory frameworks use somewhat different terminology and calculation methods to address a broadly similar planning concern -- covering the ordinary, foreseeable variability in fuel consumption a flight might experience -- so the CARs' 'additional fuel' concept and the ICAO 'contingency fuel' concept serve a conceptually similar role even though the specific figures and calculation approach aren't necessarily identical between the two frameworks; it isn't equivalent to final reserve fuel (a fixed emergency-only quantity), taxi fuel (a ground-only component), or holding fuel (tied to a specific planned hold).",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The 'Other Information' field on an ICAO flight plan form, which can include standardized indicators such as STS (special handling), RMK (remarks), and similar codes, is used to",
    options: [
      "replace the requirement to specify a route or a destination aerodrome, functioning as a substitute for those two mandatory flight plan fields.",
      "convey additional information relevant to ATC handling of the flight that isn't captured by the flight plan's other standard, structured fields.",
      "duplicate information already fully captured elsewhere on the flight plan form, making the 'Other Information' field entirely redundant with the form's other fields.",
      "apply only to military flight plans, with civil flight plans specifically prohibited from including any 'Other Information' field content.",
    ],
    answer: 1,
    explain:
      "The 'Other Information' field exists precisely because the flight plan's other structured fields (route, destination, aircraft type, and so on) can't capture every piece of information relevant to how ATC should handle the flight -- standardized indicators like STS (flagging special handling, such as a medical flight or a state aircraft) or RMK (free-text remarks) let the filer convey that additional context in a recognized format, rather than duplicating other fields, substituting for mandatory fields like route or destination, or being restricted to military use only.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A composite flight plan, combining both IFR and VFR segments within a single flight plan, is used when a pilot",
    options: [
      "intends to operate the entire flight under IFR only, with 'composite' in this context referring exclusively to a flight plan filed entirely under one set of flight rules.",
      "is prohibited from filing any single flight plan covering more than one set of flight rules, making a composite flight plan a concept with no actual regulatory basis.",
      "intends to operate part of the flight under IFR and part under VFR, filing a single flight plan that reflects both portions rather than filing two entirely separate flight plans.",
      "intends to fly two entirely separate and unrelated routes on the same day, with 'composite' referring to combining unrelated flights rather than combining flight rules within one flight.",
    ],
    answer: 2,
    explain:
      "A composite flight plan is specifically for a flight that will operate under a mix of IFR and VFR over the course of a single flight -- letting the pilot file one flight plan reflecting both the IFR and VFR portions and the point(s) at which the flight rules change, rather than needing to file (and separately activate/close) two entirely distinct flight plans for what is, in practice, one continuous flight; it isn't a term for an all-IFR flight plan, a prohibited concept, or a way to combine two unrelated flights.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot wishing to deviate from a filed IFR flight plan or an ATC clearance while airborne (for reasons other than a declared emergency) generally must",
    options: [
      "cancel the entire IFR flight plan outright before making any deviation whatsoever, even a comparatively minor route or altitude adjustment.",
      "simply proceed with the desired deviation immediately, since any deviation from a filed flight plan is treated as entirely within the pilot's own discretion at all times.",
      "land at the nearest suitable aerodrome before any deviation from the original clearance can be legally requested or made.",
      "obtain an amended clearance from ATC before making the deviation, except in circumstances specifically permitting deviation without prior clearance.",
    ],
    answer: 3,
    explain:
      "Outside of a genuine emergency (where the pilot-in-command has broader authority to deviate as necessary), a pilot operating under an ATC clearance generally needs to obtain an amended clearance before deviating from the filed route, altitude, or other cleared parameters -- ATC's picture of separation and traffic depends on the aircraft doing what it's been cleared to do, so an unrequested deviation isn't simply a matter of pilot discretion, doesn't require cancelling the entire flight plan for a routine adjustment, and doesn't require landing before requesting a change.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An IFR flight may generally be planned and dispatched without designating an alternate aerodrome when",
    options: [
      "specified weather conditions and forecasts for the destination meet defined, sufficiently favourable criteria at the estimated time of arrival, as set out in the applicable regulations.",
      "the pilot simply elects not to designate one, since an alternate is entirely discretionary and never a regulatory requirement for any IFR flight.",
      "the flight is being operated by a single-engine aircraft, since alternate aerodrome requirements are specifically waived for single-engine IFR operations.",
      "the destination aerodrome has no published instrument approach procedure of any kind, since the complete absence of an approach automatically removes the alternate requirement.",
    ],
    answer: 0,
    explain:
      "The general rule requiring an IFR alternate has a defined exception: when specified weather conditions and forecast criteria for the destination (reflecting a sufficiently reliable, favourable expectation of being able to land there) are met at the estimated time of arrival, an alternate need not be designated -- a conditions-based exception, not something triggered by the destination lacking an approach procedure (which would actually make an alternate more, not less, important), by the aircraft being single-engine, or by simple pilot discretion, since the underlying requirement (absent that specific exception) is a genuine regulatory one.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In a genuine in-flight emergency, the pilot-in-command's authority to deviate from a filed flight plan, an ATC clearance, or an applicable rule is generally understood to",
    options: [
      "require prior ATC authorization before any deviation may occur, even where the emergency itself makes obtaining that authorization impractical beforehand.",
      "extend to the extent necessary to meet that emergency, with the expectation that ATC and other authorities be notified of the deviation and the reason for it as soon as practicable.",
      "not exist at all, since a pilot is expected to continue complying strictly with the original flight plan and clearance even during a genuine emergency.",
      "apply only to a mechanical or structural emergency, with a medical emergency onboard specifically excluded from any pilot deviation authority.",
    ],
    answer: 1,
    explain:
      "A pilot-in-command facing a genuine emergency is generally recognized as having the authority to deviate from a flight plan, clearance, or applicable rule to the extent required to meet that emergency -- precisely because rigid adherence to the original plan could itself become unsafe -- with the expectation that ATC and other relevant authorities be informed of the deviation and its reason as soon as practicable rather than necessarily beforehand, and this deviation authority applies to emergencies broadly, including a medical emergency onboard, not to mechanical/structural emergencies alone.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
];
