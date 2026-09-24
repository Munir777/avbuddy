import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 30 -- Section 9: Flight
// Planning, fourth pass. Original questions written from standard
// flight planning principles, the actual Canadian Aviation
// Regulations, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers RVSM, cruise altitude selection rules,
// weight and balance, VFR flight plan/itinerary distinctions, SAR
// alerting timing, ICAO fuel terminology, EDTO, and step climbs not
// yet addressed in batches 9, 12, or 21. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_30_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Reduced Vertical Separation Minima (RVSM) airspace requires that an operating aircraft",
    options: [
      "hold specific altimetry system performance certification and equipment approval, since RVSM relies on tighter vertical separation than standard airspace and therefore demands greater height-keeping accuracy.",
      "carry no altimeter at all, since RVSM airspace relies exclusively on GNSS-derived altitude rather than barometric altimetry.",
      "be limited to VFR operations only, since RVSM applies solely to visual flight rules traffic and has no application to IFR flights.",
      "maintain wider vertical separation than standard airspace, which is the opposite of what RVSM is actually designed to achieve.",
    ],
    answer: 0,
    explain:
      "RVSM reduces the standard vertical separation between certain flight levels (commonly from 2,000 ft to 1,000 ft within the RVSM band) specifically because the aircraft operating there are required to meet demonstrated altimetry system accuracy and equipment standards -- without that tighter height-keeping performance, the reduced separation itself wouldn't be safe, which is why RVSM approval is a specific aircraft/operator certification requirement rather than something every aircraft is automatically eligible for.",
    reference: "TP 690 Section 9 - Flight Planning, Airspace",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The semicircular (hemispheric) cruising altitude rule, used to assign cruising altitudes based on magnetic track, exists primarily to",
    options: [
      "reduce the likelihood of head-on or converging traffic conflicts between aircraft travelling in roughly opposite directions along the same route, by separating them into different altitude bands by direction of flight.",
      "ensure every aircraft flies at exactly the same altitude regardless of direction of flight, simplifying air traffic control to a single universal cruising level.",
      "apply solely to aircraft operating under VFR, with IFR traffic specifically exempted from any direction-based cruising altitude assignment.",
      "assign cruising altitude based on aircraft type rather than direction of flight, with magnetic track playing no role in the rule at all.",
    ],
    answer: 0,
    explain:
      "By assigning one set of cruising altitudes to routes flown on roughly one range of magnetic tracks and a different, vertically offset set to the reciprocal range of tracks, the semicircular rule keeps aircraft travelling in generally opposite directions at different altitudes -- reducing the chance of a head-on or converging conflict at a shared altitude -- and versions of the rule (adapted for IFR vs VFR, with differing altitude offsets) apply broadly rather than to VFR alone.",
    reference: "TP 690 Section 9 - Flight Planning, Airspace",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's centre of gravity (CG), typically expressed as a percentage of mean aerodynamic chord (%MAC) for weight and balance purposes, must be kept within its certified limits primarily because",
    options: [
      "CG position significantly affects the aircraft's longitudinal stability, control authority, and stall/trim characteristics, with an out-of-limits CG potentially compromising controllability.",
      "CG position affects only the aircraft's maximum permissible fuel capacity, with no effect on stability or controllability at all.",
      "CG position is purely a structural loading consideration for the landing gear, with no aerodynamic or handling consequence whatsoever.",
      "CG limits exist only to standardize passenger seating charts, with no genuine safety-of-flight rationale behind them.",
    ],
    answer: 0,
    explain:
      "Where the CG sits relative to the wing's mean aerodynamic chord governs how much elevator/stabilizer authority is available, how the aircraft trims, its stall characteristics, and its longitudinal (pitch) stability -- a CG too far forward can exhaust available nose-up trim/control authority (particularly critical during landing flare), while one too far aft can reduce or eliminate positive static stability, which is why %MAC limits are a genuine flight-safety constraint, not a fuel-capacity, structural-only, or purely administrative one.",
    reference: "TP 690 Section 9 - Flight Planning, Weight and Balance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A VFR flight itinerary, as distinct from a VFR flight plan, is generally",
    options: [
      "filed with a responsible person (such as an operator's flight following office) rather than with an air traffic services unit, though it serves a broadly similar search-and-rescue alerting purpose.",
      "identical in every respect to a VFR flight plan, with the two terms being purely interchangeable names for the same document filed with the same recipient.",
      "usable only for IFR flights, with VFR operations specifically prohibited from using a flight itinerary under any circumstances.",
      "a document that, once filed, removes any requirement to notify anyone of the flight's completion or cancellation.",
    ],
    answer: 0,
    explain:
      "A flight itinerary serves the same underlying purpose as a flight plan -- giving someone a basis to raise an alert if the flight becomes overdue -- but instead of being filed with an air traffic services unit (such as a flight information centre), it's left with a responsible person able to notify search and rescue authorities if the flight fails to arrive or report as expected, and, like a flight plan, still needs to be closed once the flight is safely completed.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Once a filed flight plan or flight itinerary is not closed and the flight is overdue, the resulting search-and-rescue alerting process is generally structured to",
    options: [
      "escalate in stages, moving from an initial uncertainty phase through an alert phase to a distress phase as the situation develops and the aircraft's continued absence becomes more concerning.",
      "immediately launch a full-scale search operation the instant the flight plan's estimated time of arrival passes, with no intervening stages of any kind.",
      "apply only to IFR flights, with an overdue VFR flight plan or itinerary triggering no search-and-rescue response of any kind.",
      "rely entirely on the aircraft's ELT signal alone, with the overdue flight plan itself playing no role in initiating any alerting action.",
    ],
    answer: 0,
    explain:
      "The search-and-rescue alerting framework is staged rather than all-or-nothing: an uncertainty phase begins when doubt exists about a flight's safety, progressing to an alert phase if that apprehension increases, and ultimately a distress phase if there's reasonable certainty the aircraft is in grave danger -- a filed and unclosed flight plan or itinerary is precisely what gives responsible authorities the information needed to recognize a flight is overdue and begin that escalation, for VFR and IFR flights alike.",
    reference: "TP 690 Section 9 - Flight Planning, Flight Plans",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In ICAO fuel planning terminology, 'contingency fuel' is best described as",
    options: [
      "an amount carried to cover unforeseen factors that could affect fuel consumption to the destination, such as deviations from forecast wind or minor routing changes, distinct from the fixed final reserve fuel carried for use only in a genuine emergency.",
      "fuel that is functionally identical to final reserve fuel, with the two terms simply describing the same fuel quantity under different names.",
      "fuel carried exclusively to cover the taxi and engine start phase, with no relevance to the en route or arrival phase of flight.",
      "an amount that may be planned as zero on every flight regardless of route, weather, or operating conditions, since it is entirely discretionary and never operationally significant.",
    ],
    answer: 0,
    explain:
      "Contingency fuel addresses the ordinary variability of a specific flight -- winds different from forecast, minor rerouting, and similar factors -- and is generally planned as a percentage of trip fuel or an equivalent time-based figure, whereas final reserve fuel is a fixed, minimum quantity intended strictly for use if an actual in-flight emergency or fuel-critical situation develops, so the two exist for genuinely different purposes and aren't interchangeable, and contingency fuel is a planning concept that applies broadly rather than being purely discretionary or safely omitted regardless of conditions.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Final reserve fuel, as an ICAO fuel-planning concept, is intended specifically to",
    options: [
      "provide a fixed minimum quantity of fuel remaining on landing at the destination or alternate, reserved for a genuine in-flight fuel emergency rather than for routine operational use.",
      "cover the entire fuel burn from departure to destination, functioning as a synonym for trip fuel rather than as a reserve.",
      "be used routinely to cover minor headwind variability on every flight, in the same way contingency fuel is used.",
      "apply only to piston-engine aircraft, with turbine-powered aircraft exempt from any final reserve fuel requirement.",
    ],
    answer: 0,
    explain:
      "Final reserve fuel (commonly a fixed period, such as 30 minutes for a piston aircraft or 45 minutes for a turbine/jet aircraft, at a specified holding speed and altitude) is meant to remain untouched under normal operations, reserved as the last-resort margin against a genuine fuel emergency -- distinct from contingency fuel's routine, expected-variability role, from trip fuel (the burn for the flight itself), and it applies as a fuel-planning concept across aircraft types rather than being limited to piston aircraft.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Holding fuel, as a distinct component within a detailed flight plan's fuel breakdown, provides for",
    options: [
      "the fuel burned while holding for a planned or anticipated period at a fix or over the destination, calculated separately from trip fuel, contingency fuel, and alternate/diversion fuel.",
      "the same fuel already accounted for in the final reserve fuel figure, making a separate holding fuel entry entirely redundant.",
      "fuel used exclusively during ground taxi and engine start, unrelated to any airborne holding pattern.",
      "fuel intended to power ground-based auxiliary equipment after landing, unrelated to any part of the flight itself.",
    ],
    answer: 0,
    explain:
      "Where a flight plan anticipates holding -- whether due to known traffic congestion, a specific procedure, or other planning factors -- the fuel expected to be burned during that holding is calculated and carried as its own line item, separate from trip fuel (destination burn), contingency fuel (routine variability margin), alternate/diversion fuel, and final reserve fuel (the untouched emergency minimum), since each of those components addresses a different planning purpose.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "When calculating the fuel required to divert to an alternate aerodrome, that figure is generally based on the fuel needed from",
    options: [
      "the missed approach point at the destination (or an equivalent specified point) to the alternate aerodrome, rather than from the destination's parking gate or from the flight's original departure point.",
      "the aircraft's original departure aerodrome directly to the alternate aerodrome, ignoring the destination entirely.",
      "the alternate aerodrome back to the destination aerodrome, effectively reversing the actual direction the diversion fuel is meant to cover.",
      "the point at which the aircraft reaches its cruising altitude, regardless of how far that point is from the destination or missed approach point.",
    ],
    answer: 0,
    explain:
      "Alternate/diversion fuel is calculated for the specific scenario it's meant to cover: arriving at the destination, executing (or being unable to complete) the approach, going missed, and then flying from that missed approach point (or another specified reference point) to the alternate aerodrome and executing an approach there -- not from the original departure point, and not in the reverse direction, since the diversion itself only becomes necessary after the destination approach has already been attempted.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Extended Diversion Time Operations (EDTO), a concept historically associated with twin-engine ETOPS rules, generally requires operators to demonstrate that",
    options: [
      "the aircraft can safely continue to a suitable diversion aerodrome within an approved maximum diversion time following an engine failure or other qualifying in-flight event at the most critical point of the route.",
      "the aircraft is prohibited from operating more than 60 minutes from any suitable diversion aerodrome under any circumstances, with no possibility of an extended-time approval.",
      "twin-engine aircraft flying any overwater or remote route must always carry a third engine as a structural requirement for EDTO approval.",
      "EDTO approval applies only to single-engine aircraft, with twin- and multi-engine aircraft specifically excluded from any EDTO consideration.",
    ],
    answer: 0,
    explain:
      "EDTO (the broader term that has effectively superseded the twin-engine-specific 'ETOPS' terminology to also cover certain other configurations and events) is fundamentally about demonstrating that, if a qualifying failure or event occurs at the route's most time-critical point, the aircraft can still reach a suitable diversion aerodrome within an approved threshold time -- it's what specifically permits routes farther from a diversion aerodrome than the older, unqualified single-engine-inoperative diversion time standard would otherwise allow, rather than imposing an absolute prohibition or requiring a third engine.",
    reference: "TP 690 Section 9 - Flight Planning, Route Planning",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A step climb procedure, used during the cruise phase of many long-range flights, involves",
    options: [
      "periodically climbing to a higher cruising altitude as the aircraft burns off fuel and its optimum altitude increases, rather than remaining at a single fixed cruise altitude for the entire flight.",
      "a single, continuous climb from top of climb directly to the flight's final cruising altitude, with no intermediate level-offs of any kind.",
      "descending in stages throughout the cruise phase, rather than climbing, as the flight progresses toward its destination.",
      "a procedure used only during the descent phase of flight, with no application to the cruise phase at all.",
    ],
    answer: 0,
    explain:
      "As a flight burns fuel, its weight decreases and its optimum (most fuel-efficient) cruising altitude generally rises -- a step climb takes advantage of that by climbing to a new, higher cruising level at intervals during the flight (rather than accepting the fuel penalty of remaining at an altitude that becomes progressively less than optimal, or attempting a single continuous climb that traffic and altitude-assignment constraints wouldn't normally permit), improving overall fuel efficiency on longer flights.",
    reference: "TP 690 Section 9 - Flight Planning, Cruise Planning",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A TAF's (Terminal Aerodrome Forecast) published validity period is significant to flight planning because",
    options: [
      "the forecast's stated conditions and confidence are only intended to apply within that specific issued time window, so a flight arriving outside it should not rely on that TAF without checking for a more current one.",
      "a TAF has no defined validity period at all, remaining valid indefinitely from the moment it is issued until it is manually withdrawn.",
      "a TAF's validity period determines the destination's minimum fuel requirement directly, replacing any other fuel-planning calculation entirely.",
      "a TAF's validity period applies only to the alternate aerodrome forecast, with the destination TAF considered valid indefinitely.",
    ],
    answer: 0,
    explain:
      "A TAF is issued to cover a specific, bounded period (commonly 24 or 30 hours, depending on the aerodrome and issuing office), and its forecast conditions -- along with the confidence behind them -- are meant to be read as applying within that window; a flight planning to arrive near or after the stated validity period's end should check for an amended or more current forecast rather than relying on an aging TAF, and this validity-period consideration applies to both destination and alternate forecasts alike, not to fuel calculations directly.",
    reference: "TP 690 Section 9 - Flight Planning, Weather Information",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Fuel tankering -- carrying more fuel than operationally required from a departure point where fuel is comparatively inexpensive, to reduce or avoid purchasing more expensive fuel at the destination -- involves a trade-off because",
    options: [
      "the extra fuel weight increases the aircraft's burn on the outbound sector, so the potential cost savings must be weighed against that additional fuel consumption (and, potentially, against payload or performance limitations).",
      "carrying additional fuel has no effect whatsoever on the aircraft's fuel consumption on any sector of the flight.",
      "fuel tankering is prohibited under all circumstances by international regulation, making the practice purely theoretical with no real operational trade-off to consider.",
      "the extra fuel weight improves fuel efficiency on the outbound sector, meaning tankering carries no downside at all.",
    ],
    answer: 0,
    explain:
      "Carrying tankered fuel means carrying extra weight, and extra weight increases fuel burn (a heavier aircraft requires more thrust/fuel to fly the same sector) -- so the decision to tanker fuel is an economic trade-off between the money saved by not buying more expensive fuel at the destination and the cost of the additional fuel burned carrying that extra weight there, along with any payload, performance, or structural weight-limit implications, rather than being either a fuel-consumption-neutral or an outright prohibited practice.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Requirements",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A last-minute change to an aircraft's load (such as a late cargo addition or a passenger reseating) after the load sheet has already been finalized requires",
    options: [
      "recalculating the aircraft's weight and centre of gravity to confirm both remain within certified limits, since the original load sheet no longer accurately reflects the aircraft's actual loading.",
      "no further action at all, since a load sheet, once finalized, is considered valid regardless of any subsequent change to the aircraft's actual loading.",
      "recalculating fuel burn for the flight only, with weight and CG considered unaffected by any load change occurring after the load sheet is finalized.",
      "grounding the aircraft automatically and indefinitely, since Canadian regulations treat any load sheet amendment as an automatic, permanent operational prohibition.",
    ],
    answer: 0,
    explain:
      "A load sheet reflects the aircraft's weight and balance at a specific point in the loading process -- a genuine last-minute change (extra cargo, a shifted passenger load, and so on) can move actual weight and/or CG away from what the original figures showed, so it needs to be assessed and, if it affects the results meaningfully, the load sheet recalculated and reissued to confirm the aircraft is still within its certified weight and CG limits before departure, rather than being ignored, treated as a fuel-only issue, or automatically grounding the flight.",
    reference: "TP 690 Section 9 - Flight Planning, Weight and Balance",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Performance-Based Navigation (PBN) routes, as opposed to conventional ground-based-NAVAID routes, define required navigation performance primarily in terms of",
    options: [
      "the accuracy, integrity, and functional capability an aircraft's navigation system must demonstrate and monitor, rather than in terms of which specific ground-based NAVAID equipment must be carried or overflown.",
      "the specific brand and model of ground-based NAVAID equipment that must physically exist along the route, with aircraft equipment playing no role in the requirement.",
      "the aircraft's maximum certified altitude alone, with navigation accuracy considered entirely unrelated to PBN route eligibility.",
      "the number of passengers carried, with PBN requirements varying by passenger count rather than by navigation system performance.",
    ],
    answer: 0,
    explain:
      "PBN shifts the basis of route and airspace design away from 'you must be able to receive this specific ground station' toward a performance specification -- a required navigation accuracy, along with, for RNP specifications, on-board monitoring and alerting if that performance isn't being met -- that an aircraft's navigation system and equipage must be able to satisfy, which is what allows PBN routes to be flown by any suitably equipped and approved aircraft regardless of the particular ground infrastructure (or lack of it) beneath the route.",
    reference: "TP 690 Section 9 - Flight Planning, Route Planning",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Domestic high-level and low-level airway structures are generally distinguished from one another primarily by",
    options: [
      "the range of altitudes (vertical airspace) each structure serves, with the high-level structure serving upper cruising altitudes and the low-level structure serving lower altitudes beneath it.",
      "the fact that only the low-level airway structure permits IFR flight, with the high-level structure restricted exclusively to VFR traffic.",
      "having no meaningful distinction at all, since 'high-level' and 'low-level' are purely alternate names for the identical airspace and altitude range.",
      "geographic region alone, with altitude playing no role whatsoever in distinguishing the two airway structures.",
    ],
    answer: 0,
    explain:
      "The fundamental distinction between the high-level and low-level airway structures is vertical: each is defined to serve a particular band of altitudes, with the high-level structure generally serving the upper cruising levels used by faster, higher-flying traffic and the low-level structure serving the altitudes beneath it -- both structures support IFR (and, depending on class, VFR) operations within their respective altitude bands, so the distinction is about altitude range, not about excluding IFR from one structure or being geographically rather than vertically defined.",
    reference: "TP 690 Section 9 - Flight Planning, Airspace",
  },
];
