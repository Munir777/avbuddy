import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 59 -- Section 4: Flight
// Planning, seventh pass. Original questions written from CARs, the
// TC AIM 2026-1, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers Long-Range Cruise vs Maximum Range
// Cruise vs high-speed cruise trade-offs, cruise climb vs step
// climb, air distance vs ground distance, ICAO flight plan message
// types (FPL/CHG/DLA/CNL), Estimated Off-Block Time, the ETOPS/EDTO
// critical fuel scenario, helicopter IFR alternate minima, cargo
// loading sequence, ramp weight vs takeoff weight, the SAR circle
// of uncertainty, methods of closing a flight plan, domestic vs
// ICAO international flight plan content, Maximum Zero Fuel Weight,
// periodic aircraft reweighing, trip fuel, and block fuel -- topics
// not yet addressed in batches 9, 12, 21, 30, 39, or 49. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_59_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Choosing a Long-Range Cruise (LRC) speed schedule rather than Maximum Range Cruise (MRC) for a given flight generally trades",
    options: [
      "a small increase in fuel burn (typically on the order of one percent above true MRC) for a somewhat higher cruise speed and shorter flight time, since MRC sits at the very peak of the specific-range curve where speed is highly sensitive to small errors.",
      "a large increase in fuel burn for no change in cruise speed at all, since LRC and MRC always correspond to the identical Mach number for a given weight and altitude.",
      "a reduction in fuel burn below true MRC for a slower cruise speed, since LRC is defined as the speed that burns the least possible fuel regardless of trip time.",
      "no difference whatsoever from MRC, since the two terms describe the same cruise schedule under different names.",
    ],
    answer: 0,
    explain:
      "LRC is typically defined as the speed giving a small, deliberate percentage (often about one percent) less specific range than true MRC, in exchange for flying somewhat faster and reducing trip time and schedule risk -- because true MRC sits at the peak of the specific-range curve, where speed becomes very sensitive to small deviations, making it an impractical target for routine operations.",
    reference: "TP 690 -- Flight Planning: Cruise Control",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A cruise climb procedure, as distinguished from a discrete step climb, involves",
    options: [
      "a slow, continuous climb throughout the cruise phase as the aircraft's weight decreases with fuel burn, rather than levelling at a series of fixed intermediate altitudes.",
      "climbing at maximum climb power directly to the final cruise altitude and then holding that single altitude for the remainder of the flight with no further climbing at all.",
      "a descent profile flown in place of a climb, timed to arrive at the destination at a lower altitude than departure.",
      "a climb flown only during the initial departure phase, entirely unrelated to any subsequent cruise-phase altitude change.",
    ],
    answer: 0,
    explain:
      "A cruise climb allows the aircraft to climb slowly and continuously through the cruise phase as fuel burn reduces weight (keeping it near its optimum altitude at all times), rather than remaining level at a series of discrete intermediate altitudes and then stepping up periodically, which is the step climb approach.",
    reference: "TP 690 -- Flight Planning: Cruise Control",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In flight-plan distance and time calculations, 'air distance' (the distance flown relative to the air mass) differs from 'ground distance' (the distance flown relative to the ground) because",
    options: [
      "wind causes the two to diverge: a tailwind makes ground distance covered, for a given air distance flown, greater than the air distance, while a headwind makes it less, since ground distance reflects the effect of wind on the aircraft's progress over the earth's surface.",
      "the two terms are simply different names for the identical quantity and never diverge under any wind condition.",
      "air distance is always greater than ground distance regardless of wind direction or strength.",
      "ground distance is calculated only for VFR flights, while air distance applies only to IFR flights, making the two inapplicable to the same flight.",
    ],
    answer: 0,
    explain:
      "Air distance reflects the aircraft's progress through the air mass itself (a function of true airspeed and time), while ground distance reflects actual progress over the earth's surface, which wind affects: a tailwind causes more ground distance to be covered than air distance flown in the same time, and a headwind causes less, so the two coincide only in still-air conditions.",
    reference: "TP 690 -- Flight Planning: Navigation Computations",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Among standard ICAO flight plan messages, a CHG message, a DLA message, and a CNL message serve, respectively, to",
    options: [
      "amend details of a flight plan already filed (CHG), notify a delay in the estimated off-block time beyond a specified margin (DLA), and cancel a filed flight plan entirely (CNL).",
      "originate a brand-new flight plan (CHG), close a flight plan on arrival (DLA), and request a special VFR clearance (CNL).",
      "report current position (CHG), request weather information (DLA), and declare an in-flight emergency (CNL).",
      "all perform the identical function of filing a new flight plan, differing only in which ATS unit receives them.",
    ],
    answer: 0,
    explain:
      "Standard ICAO flight plan message types include FPL (the original filed flight plan), CHG (a change to specified fields of an already-filed flight plan), DLA (notifying ATS of a delay beyond a specified margin in the estimated off-block time), and CNL (cancelling a filed flight plan that is no longer going to be flown as filed).",
    reference: "TC AIM RAC -- Flight Plan Messages",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Estimated Off-Block Time (EOBT), a field entered on a filed flight plan, refers to",
    options: [
      "the time at which the aircraft is estimated to begin moving under its own power for the purpose of departure (commencing taxi from its parking position), which ATS uses in flight plan processing and, if significantly exceeded without an update, may treat as a trigger to query or cancel the plan.",
      "the estimated time the aircraft will land at the destination aerodrome.",
      "the estimated time the flight plan is filed with the flight service station.",
      "the estimated time fuel loading will be completed prior to passenger boarding.",
    ],
    answer: 0,
    explain:
      "EOBT is the estimated time at which the aircraft is expected to begin moving from its parking position for departure (start of taxi); ATS uses it to process and sequence flight plans, and a flight that has not departed within a specified period after its EOBT without an updated estimate may have its flight plan queried or cancelled.",
    reference: "TC AIM RAC -- Flight Plan Filing",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For an Extended Diversion Time Operation (EDTO/ETOPS), the 'critical fuel scenario' used in fuel planning generally assumes",
    options: [
      "a combined failure case at the most critical point along the route -- typically an engine failure together with a cabin depressurization -- requiring a diversion to the nearest suitable alternate at the resulting reduced altitude and speed, with the required fuel reserves intact on arrival.",
      "only a single, isolated system failure with no combination of simultaneous failures considered at any point.",
      "a failure occurring only at the departure aerodrome, since en route failures are not part of EDTO fuel planning.",
      "no failure at all -- EDTO critical fuel is calculated purely from normal all-engines-operating cruise fuel flow.",
    ],
    answer: 0,
    explain:
      "EDTO/ETOPS critical fuel planning generally uses the most adverse combination reasonably expected at the most critical point along the route -- commonly an engine failure combined with a cabin depressurization -- requiring a descent to a lower diversion altitude and diversion to the nearest suitable alternate, with the specified fuel reserves still intact on arrival there.",
    reference: "TC AIM RAC -- Extended Diversion Time Operations",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Compared to the IFR alternate aerodrome weather minima table generally applicable to aeroplanes, IFR alternate minima published or authorized specifically for helicopter operations",
    options: [
      "may reflect lower achievable ceiling and visibility values, consistent with the lower approach minima and different obstacle/approach-procedure design criteria that can apply to helicopter-specific instrument procedures.",
      "are always numerically identical to the aeroplane table, since no separate helicopter-specific minima exist under the CARs.",
      "apply only to VFR helicopter operations and have no bearing on IFR flight planning at all.",
      "are always higher (more restrictive) than the aeroplane table in every case, with no exceptions.",
    ],
    answer: 0,
    explain:
      "Because helicopter instrument approach procedures can be designed to different obstacle clearance and approach criteria than fixed-wing procedures, published or authorized helicopter IFR alternate minima can reflect lower ceiling and visibility values than the general aeroplane alternate minima table, rather than being identical or uniformly more restrictive.",
    reference: "TC AIM RAC -- Alternate Aerodrome Weather Minima",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A cargo loading sequence (or loading schedule), prepared as part of weight and balance planning for a cargo flight, is used primarily to",
    options: [
      "specify the order and compartment placement in which cargo items are loaded and secured so that the aircraft's centre of gravity remains within limits throughout the loading process and for the resulting final load, not only once loading is complete.",
      "record only the total cargo weight carried, with no reference to compartment location or loading order.",
      "replace the load manifest entirely, since a loading sequence and a load manifest serve the identical regulatory purpose.",
      "apply exclusively to passenger baggage, with no application to freighter or belly cargo operations.",
    ],
    answer: 0,
    explain:
      "A cargo loading sequence specifies where and in what order individual items are loaded and secured, which matters because centre of gravity must be kept within limits not just for the final loaded configuration but at intermediate stages of loading, particularly for aircraft with a narrow CG envelope or unconventional cargo distribution.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's ramp weight (or start/taxi weight), as distinguished from its takeoff weight, is",
    options: [
      "the aircraft's total weight at engine start or pushback, before taxi fuel is burned, and is therefore slightly greater than takeoff weight by the amount of fuel consumed during taxi and ground run-up.",
      "identical to takeoff weight in all cases, since taxi fuel burn is regulatory negligible and never accounted for separately.",
      "always less than takeoff weight, since additional fuel is added after taxi but before the takeoff roll begins.",
      "unrelated to fuel weight and reflects only the aircraft's structural weight with no fuel on board.",
    ],
    answer: 0,
    explain:
      "Ramp weight (or start/taxi weight) is the aircraft's weight at engine start or pushback, including taxi fuel; because that taxi fuel is burned off before the takeoff roll, ramp weight is slightly greater than the resulting takeoff weight by the amount of fuel consumed while taxiing and during any ground run-up.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In search-and-rescue planning for an overdue aircraft, the 'circle of uncertainty' drawn around a computed datum point generally reflects",
    options: [
      "the possible navigational error and drift accumulated over the elapsed time since the aircraft's last known position or reported estimate, used to size the initial search area around the most probable location.",
      "a fixed, unchanging radius applied identically regardless of elapsed time or aircraft type.",
      "the range of the aircraft's onboard weather radar, used to identify areas of poor visibility for the search.",
      "the distance between the departure and destination aerodromes, unrelated to the aircraft's actual reported position.",
    ],
    answer: 0,
    explain:
      "The circle of uncertainty is sized around a computed datum point (typically based on the aircraft's last known position or reported estimate, its planned track and speed, and elapsed time) to reflect the possible accumulated navigational error and drift, giving search planners an initial probable search area rather than a single precise point.",
    reference: "TC AIM SAR -- Search and Rescue Planning",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot may close a filed flight plan or flight itinerary through several available channels, including",
    options: [
      "radio contact with a flight service station or ATC unit, a telephone call to the appropriate FSS or NAV CANADA facility, or another method specifically arranged in advance, such as a company reporting procedure.",
      "only in person at the originating flight service station counter, with no other method recognized under any circumstances.",
      "only by filing a brand-new flight plan for the return leg, since a flight plan cannot otherwise be formally closed.",
      "automatically, with no pilot action required, once the aircraft's transponder stops transmitting on landing.",
    ],
    answer: 0,
    explain:
      "A flight plan or itinerary can generally be closed through more than one available channel -- by radio to an FSS or ATC unit, by telephone to the appropriate facility, or by another method arranged in advance such as a company procedure -- rather than requiring any single specific method, provided the closure actually reaches the appropriate authority before the overdue time.",
    reference: "TC AIM RAC -- Closing a Flight Plan or Itinerary",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Compared to a domestic Canadian flight plan, an ICAO-format international flight plan generally",
    options: [
      "requires additional standardized fields and coding (such as equipment and capability indicators, and specific item numbering) to ensure the plan is intelligible and usable by air traffic services units in other countries along or at the destination of the route.",
      "requires strictly less information than a domestic flight plan, since international flights are assumed to carry all necessary equipment by default.",
      "is identical in every field and format to a domestic Canadian flight plan, with no additional requirements at all.",
      "is only ever filed verbally by radio, never in written or electronic form.",
    ],
    answer: 0,
    explain:
      "Because an ICAO-format flight plan may be read and processed by air traffic services units in multiple countries along a route, it uses standardized international fields and coding conventions -- such as detailed equipment and capability indicators -- beyond what a purely domestic flight plan requires, so that the information remains intelligible regardless of which country's ATS unit is handling it.",
    reference: "TC AIM RAC -- ICAO Flight Plan Form",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's Maximum Zero Fuel Weight (MZFW), as a certificated structural limit, represents",
    options: [
      "the greatest weight the aircraft's structure is approved to carry excluding usable fuel, set to limit the bending loads on the wing that would otherwise result from a heavy fuselage payload with insufficient fuel weight in the wings to relieve them.",
      "the maximum weight at which the aircraft may land, regardless of how much fuel remains on board.",
      "the maximum weight at which the aircraft may take off, including all fuel loaded for the flight.",
      "a purely advisory figure with no certificated structural basis, left entirely to each operator's discretion.",
    ],
    answer: 0,
    explain:
      "MZFW is a certificated structural limit on the aircraft's weight excluding usable fuel; it exists because fuel carried in the wings helps relieve wing bending loads caused by fuselage payload, so a heavily loaded fuselage with little wing fuel can overstress the wing root even at a weight below MTOW, making MZFW a separate limit from both MTOW and MLW.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Periodic reweighing of an aircraft (or an equivalent method of updating its recorded empty weight and centre of gravity data) is required primarily because",
    options: [
      "an aircraft's actual empty weight and CG can drift over time from accumulated repairs, modifications, paint, cleaning, and general wear, and load calculations based on stale figures could otherwise understate the true weight or misplace the true CG.",
      "aircraft weight never changes after original certification, making reweighing a purely optional administrative exercise.",
      "reweighing is required only after every single flight, regardless of any modification or repair history.",
      "the fuel quantity indicating system requires reweighing to remain calibrated.",
    ],
    answer: 0,
    explain:
      "An aircraft's actual empty weight and CG position can gradually drift from the figures on record due to accumulated repairs, modifications, repainting, cleaning, and general wear over its service life, so periodic reweighing (or another approved method of updating those figures) helps ensure load calculations continue to be based on accurate current data rather than stale, and potentially unsafe, figures.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Within a detailed flight plan's fuel breakdown, 'trip fuel' is best described as",
    options: [
      "the fuel required from brake release for takeoff to landing at the destination aerodrome, excluding taxi fuel burned before the takeoff roll and excluding any reserve or alternate fuel carried beyond that.",
      "the total fuel loaded onto the aircraft at engine start, including taxi, reserve, and alternate fuel components combined.",
      "only the fuel burned during the descent and approach phase at the destination.",
      "a fixed regulatory figure that does not vary with route, weight, or wind conditions.",
    ],
    answer: 0,
    explain:
      "Trip fuel is the fuel required from brake release for takeoff through to landing at the destination aerodrome -- it excludes the taxi fuel burned before the takeoff roll begins, and it excludes reserve, alternate, and any other fuel components carried beyond simply reaching the destination, distinguishing it from those other components of the total fuel load.",
    reference: "TP 690 -- Flight Planning: Fuel Planning",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "'Block fuel,' as a total figure appearing in a flight plan's fuel summary, refers to",
    options: [
      "the total quantity of fuel on board at engine start or pushback, representing the sum of all individual fuel components (taxi, trip, contingency, alternate, final reserve, and any additional or discretionary fuel).",
      "only the fuel remaining on board at engine shutdown after landing.",
      "a single component of the fuel load distinct from and carried in addition to taxi, trip, and reserve fuel.",
      "a term used exclusively for VFR flights, with no equivalent concept for IFR flight planning.",
    ],
    answer: 0,
    explain:
      "Block fuel is the total quantity of fuel on board at engine start or pushback ('off-blocks'), representing the sum of every individual fuel component built into the plan -- taxi fuel, trip fuel, contingency fuel, any required alternate or final reserve fuel, and any additional or discretionary fuel -- rather than being a separate component itself.",
    reference: "TP 690 -- Flight Planning: Fuel Planning",
  },
];
