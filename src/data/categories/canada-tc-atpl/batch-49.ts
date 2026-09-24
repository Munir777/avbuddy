import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 49 -- Section 4: Flight
// Planning, sixth pass. Original questions written from CARs, the
// TC AIM 2026-1, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers wind-optimized flight level selection,
// BEW/OEW vs ZFW, the MZFW/MTOW/MLW payload-range interaction, ATC
// estimate revision requirements, company vs regulatory minimums,
// the NOTAM PIB, the takeoff alternate requirement, the general
// preflight information requirement, standard passenger/baggage
// weights, en route fuel monitoring, ground flight plan amendment,
// the CG envelope varying with weight, SELCAL checks, delay-related
// fuel planning, PIC load sheet responsibility, and the en route
// alternate concept -- topics not yet addressed in batches 9, 12,
// 21, 30, or 39. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_49_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "When multiple cruising altitudes are available for a given route (and other operational factors permit a choice), flight planning generally favours the altitude that",
    options: [
      "provides the most favourable wind component (the strongest tailwind or the weakest headwind), since this can meaningfully reduce trip fuel burn and flight time.",
      "always corresponds to the highest available altitude regardless of wind data, since altitude alone, independent of wind, is considered the only relevant factor in altitude selection.",
      "always corresponds to the lowest available altitude regardless of wind data, since lower altitudes are considered universally more fuel-efficient irrespective of wind conditions.",
      "is selected entirely at random among the available options, since wind data at different altitudes is not considered a meaningful input to cruise altitude selection.",
    ],
    answer: 0,
    explain:
      "When a choice of cruising altitudes is operationally available, flight planning generally favours the altitude offering the most favourable wind component -- the strongest tailwind or weakest headwind -- since this can meaningfully reduce trip fuel burn and flight time, rather than defaulting purely to the highest or lowest available altitude or ignoring wind data altogether.",
    reference: "TC AIM RAC - Cruise Altitude Selection",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's Basic Empty Weight (BEW) or Operating Empty Weight (OEW), as distinguished from its Zero Fuel Weight (ZFW), represents",
    options: [
      "the aircraft's own structural and equipment weight (plus, for OEW, standard operating items such as crew and catering) before any payload or fuel is added, whereas ZFW adds payload to that base weight.",
      "the same value as ZFW, with the two terms used interchangeably to describe the aircraft fully loaded with payload but no fuel.",
      "the maximum weight at which the aircraft is permitted to land, a limit entirely unrelated to either BEW/OEW or ZFW.",
      "the total weight of fuel carried on board, a figure unrelated to the aircraft's own structural weight or its payload.",
    ],
    answer: 0,
    explain:
      "Basic Empty Weight (or Operating Empty Weight, which additionally includes standard operating items such as crew and catering) represents the aircraft's own weight before any payload or fuel is added, while Zero Fuel Weight adds the payload (passengers, baggage, cargo) to that base weight but still excludes fuel -- BEW/OEW and ZFW are therefore distinct values, and neither corresponds to a maximum landing weight limit or to the weight of fuel carried.",
    reference: "TC AIM RAC - Weight Definitions",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a given flight, the maximum payload that can actually be carried is generally constrained by the most limiting of several weight limits, including",
    options: [
      "Maximum Zero Fuel Weight (MZFW), Maximum Takeoff Weight (MTOW) once planned fuel is added, and Maximum Landing Weight (MLW) once fuel burned off en route is subtracted -- whichever produces the lowest available payload.",
      "Maximum Zero Fuel Weight alone, since MTOW and MLW are understood to have no bearing whatsoever on the maximum payload that can be carried.",
      "Maximum Takeoff Weight alone, since MZFW and MLW are understood to be irrelevant to payload once the aircraft has been fuelled for departure.",
      "a single fixed payload figure that never varies with route length or fuel load, since payload capacity is considered independent of trip distance.",
    ],
    answer: 0,
    explain:
      "Maximum payload is constrained by whichever of several weight limits is most restrictive for the specific flight: MZFW limits payload directly, MTOW limits payload once the required fuel load is added, and MLW limits payload once fuel burned off en route is subtracted back out -- on a longer sector requiring more fuel, MTOW or MLW can become the limiting factor even when MZFW would allow more payload, so no single one of these limits can be considered in isolation, and payload capacity is not a fixed figure independent of trip length.",
    reference: "TC AIM RAC - Payload-Range Limits",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If an aircraft's actual progress causes its estimated time over a subsequent reporting point to differ from the estimate in the filed flight plan by more than a specified margin (commonly around three minutes), the pilot is generally required to",
    options: [
      "provide ATC with a revised estimate for that point, so that separation and traffic planning based on the original estimate remain accurate.",
      "take no further action, since once a flight plan has been filed and accepted, ATC is understood to disregard any subsequent estimate revisions entirely.",
      "cancel the flight plan entirely and refile a completely new one, since a minor timing discrepancy is treated identically to a full flight plan cancellation.",
      "declare an emergency, since any deviation from the filed estimate beyond the specified margin is treated as an urgent or distress condition.",
    ],
    answer: 0,
    explain:
      "When the actual estimated time over a reporting point differs from the flight plan's filed estimate by more than a specified margin, the pilot is generally required to provide ATC with a revised estimate, since ATC's traffic and separation planning relies on estimates remaining reasonably accurate -- this does not require cancelling and refiling the entire flight plan, and a routine estimate discrepancy is not itself treated as an emergency.",
    reference: "CARs 602 - Position Reporting",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An air operator's company-imposed operating minimums, as distinguished from the minimum regulatory standards set out in the CARs, may generally",
    options: [
      "be more restrictive than the regulatory minimums (for example, requiring a higher ceiling or greater visibility than the CARs alone would require), reflecting the operator's own risk management decisions.",
      "never differ from the regulatory minimums in any respect, since an operator is prohibited from imposing any standard beyond what the CARs specify.",
      "be less restrictive than the regulatory minimums, allowing operations in conditions below what the CARs would otherwise permit.",
      "apply only to cargo operations, since passenger-carrying flights are understood to be exempt from any operator-specific minimums beyond the regulatory baseline.",
    ],
    answer: 0,
    explain:
      "An air operator's company minimums may be more restrictive than the regulatory minimums set out in the CARs -- for example, requiring a higher ceiling or greater visibility than regulation alone requires -- reflecting the operator's own risk management and operational judgment; an operator cannot lawfully adopt minimums less restrictive than the regulatory floor, and company minimums are not limited to cargo operations alone.",
    reference: "TC AIM RAC - Operator Minimums",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A NOTAM Pre-flight Information Bulletin (PIB), obtained as part of preflight planning, is best described as",
    options: [
      "a compiled summary of relevant NOTAMs for a specified route and time period, gathered together to support the pilot's preflight review rather than requiring each NOTAM to be checked individually.",
      "a single NOTAM covering only the departure aerodrome, with all other route and destination NOTAMs requiring a completely separate, unrelated lookup process.",
      "a weather-only product containing no NOTAM information whatsoever, despite what its name would suggest.",
      "a document required only for international flights, with no equivalent product available or relevant for a purely domestic Canadian flight.",
    ],
    answer: 0,
    explain:
      "A NOTAM Pre-flight Information Bulletin compiles the relevant NOTAMs for a specified route, aerodromes, and time period into a single summary, supporting efficient preflight review rather than requiring the pilot to look up each relevant NOTAM individually -- it is not limited to the departure aerodrome alone, it specifically contains NOTAM (not weather-only) information, and an equivalent product is relevant for domestic as well as international flights.",
    reference: "TC AIM GEN - NOTAM System",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A takeoff alternate aerodrome, as distinguished from a destination alternate, may be required when",
    options: [
      "weather conditions at the departure aerodrome are below the landing minima applicable to the aircraft type, so a suitable aerodrome must be identified within a specified distance in case of an immediate return shortly after takeoff.",
      "the destination aerodrome's own weather is forecast to be below applicable minima, a situation addressed exclusively by the destination alternate requirement rather than by any takeoff alternate provision.",
      "the aircraft is departing with a full passenger load, since takeoff alternate requirements are triggered by passenger count rather than by departure weather conditions.",
      "no fuel reserve of any kind is planned for the flight, since a takeoff alternate is understood to substitute entirely for the standard fuel reserve requirement.",
    ],
    answer: 0,
    explain:
      "A takeoff alternate may be required when weather conditions at the departure aerodrome itself are below the landing minima applicable to the aircraft, so that a suitable aerodrome is identified within a specified distance in case the aircraft needs to return shortly after takeoff (for example, following an engine failure) and cannot land back at the departure point -- this is a distinct requirement from the destination alternate, is not triggered by passenger count, and does not substitute for the standard fuel reserve requirement.",
    reference: "TC AIM RAC - Takeoff Alternate",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under CAR 602.72, before commencing a flight, the pilot-in-command is generally required to",
    options: [
      "become familiar with all reasonably available information appropriate to the intended flight, including weather, NOTAMs, and other relevant operational information.",
      "review only the weather forecast for the departure aerodrome, since all other categories of preflight information are understood to be entirely optional under CAR 602.72.",
      "delegate the entire preflight information review to the dispatcher or flight following service, with no independent responsibility retained by the pilot-in-command.",
      "review preflight information only for flights conducted under IFR, since VFR flights are understood to be entirely exempt from any preflight information requirement.",
    ],
    answer: 0,
    explain:
      "CAR 602.72 generally requires the pilot-in-command to become familiar with all reasonably available information appropriate to the intended flight -- including weather, NOTAMs, and other relevant operational information -- before commencing that flight; this is a broader requirement than reviewing departure weather alone, it is not fully delegable away from the pilot-in-command even where a dispatcher is involved, and it applies to VFR as well as IFR flights.",
    reference: "CARs 602.72 - Preflight Information",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Standard (average) passenger and baggage weights, used by some operators in place of actual weighed values for weight and balance calculations, are generally",
    options: [
      "established values intended to provide a reasonably accurate and administratively practical estimate of the actual load, subject to conditions and limitations on when their use is appropriate.",
      "prohibited outright under all circumstances, since every passenger and item of baggage must always be individually weighed before every flight regardless of operator or aircraft type.",
      "applied without any restriction or oversight, since standard weights are understood to be usable in any situation with no regard for passenger demographics or load characteristics.",
      "relevant only to cargo operations, since passenger and baggage weight standards are understood to have no application to a flight carrying passengers.",
    ],
    answer: 0,
    explain:
      "Standard (average) passenger and baggage weights are established values intended to provide a reasonably accurate, administratively practical estimate of the actual load in place of individually weighing every passenger and bag, but their use is subject to conditions and limitations (such as applicability to the specific passenger population and load characteristics) rather than being either outright prohibited or usable without any restriction -- and they are directly relevant to passenger operations, not only to cargo.",
    reference: "TC AIM RAC - Standard Weights",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Monitoring actual fuel burn against the flight plan at defined en route checkpoints is a practice intended primarily to",
    options: [
      "detect, as early as possible, a meaningful deviation from planned fuel consumption (for example due to stronger-than-forecast headwinds), so corrective action such as a diversion decision can be made with adequate margin.",
      "satisfy a purely administrative record-keeping requirement with no operational safety purpose, since fuel burn is understood to always match the flight plan exactly in practice.",
      "replace the need for any fuel reserve at all, since ongoing fuel monitoring is considered a full substitute for carrying contingency or final reserve fuel.",
      "apply only after the aircraft has passed its destination, since en route fuel checks are understood to be irrelevant before that point in the flight.",
    ],
    answer: 0,
    explain:
      "Comparing actual fuel burn against the flight plan at defined en route checkpoints allows the crew to detect a meaningful deviation from planned consumption -- for example due to stronger-than-forecast headwinds -- as early as possible, so that a diversion or other corrective decision can be made with adequate margin, rather than discovering a fuel shortfall too late; it does not replace the need for planned fuel reserves, and its value is precisely during the en route phase, not only after reaching the destination.",
    reference: "TC AIM RAC - En Route Fuel Monitoring",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If a filed flight plan needs to be amended before departure (for example, due to a change in routing or destination) while the aircraft is still on the ground, the pilot generally must",
    options: [
      "notify the appropriate air traffic services unit of the amendment before departure, so that the flight plan on file accurately reflects the intended flight.",
      "simply depart as planned and address any discrepancy only if directly questioned by ATC after becoming airborne, since ground amendments are understood to be unnecessary.",
      "cancel the flight entirely and reschedule for a later date, since a flight plan is understood to be unamendable once initially filed and accepted.",
      "amend only the destination field, since all other flight plan fields are understood to be permanently fixed once the flight plan has been filed.",
    ],
    answer: 0,
    explain:
      "A flight plan amendment needed before departure -- such as a routing or destination change -- generally requires the pilot to notify the appropriate air traffic services unit before departure, so that the flight plan on file accurately reflects the flight actually being conducted; a flight plan is not fixed and unamendable once filed, and a pilot should not simply depart on an inaccurate flight plan and address it only if questioned in flight.",
    reference: "TC AIM RAC - Flight Plan Amendment",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's centre of gravity (CG) envelope -- the range of permitted CG positions -- is generally",
    options: [
      "not a single fixed range across all weights, but rather a range that can narrow or shift somewhat as gross weight changes, reflecting structural and handling considerations at different weights.",
      "identical at every gross weight, meaning the same forward and aft CG limits apply without exception regardless of how heavy or light the aircraft currently is.",
      "relevant only to the aircraft's maximum takeoff weight, with no defined CG limits applicable at any lower operating weight.",
      "determined solely by fuel quantity, with payload distribution having no bearing whatsoever on where the CG envelope's limits fall.",
    ],
    answer: 0,
    explain:
      "An aircraft's certified CG envelope is generally not a single fixed range across all weights -- the permitted forward and aft CG limits can narrow or shift somewhat as gross weight changes, reflecting structural loading and handling qualities that vary with weight -- rather than remaining identical at every weight, applying only at maximum takeoff weight, or being determined by fuel quantity alone independent of payload distribution.",
    reference: "TC AIM RAC - Weight and Balance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "SELCAL (Selective Calling) checks, performed before entering airspace with limited direct VHF ATC coverage (such as remote oceanic airspace), confirm that",
    options: [
      "the aircraft's SELCAL-equipped radio will correctly alert the crew to an incoming call from ATC or a communications relay facility, allowing the crew to reduce continuous listening watch on that frequency.",
      "the aircraft's transponder is correctly reporting altitude information, a function entirely unrelated to SELCAL, which concerns voice communication alerting rather than altitude reporting.",
      "the aircraft's GNSS position fixing is accurate, a navigation function unrelated to the voice-communication purpose of a SELCAL check.",
      "the flight plan on file matches the aircraft's actual routing, a flight-planning verification unrelated to the communications-alerting purpose of SELCAL.",
    ],
    answer: 0,
    explain:
      "A SELCAL check confirms that the aircraft's SELCAL-equipped radio correctly responds to its assigned code, so that the crew will be reliably alerted to an incoming call from ATC or a communications relay facility even without maintaining continuous listening watch on that frequency -- a particularly useful capability in remote or oceanic airspace with limited direct VHF coverage; it is unrelated to transponder altitude reporting, GNSS accuracy, or flight plan verification.",
    reference: "TC AIM COM - SELCAL",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Anticipated ATC or airport ground delays (such as an expected extended taxi time or ground stop) are generally accounted for in flight planning by",
    options: [
      "including additional fuel in the planning figures to cover the expected delay, beyond the fuel that would otherwise be planned for a normal, undelayed departure and taxi sequence.",
      "disregarding any anticipated delay entirely, since ground delays are understood to have no bearing on the fuel actually required for a flight.",
      "reducing the planned trip fuel to compensate, since anticipated ground delays are understood to reduce, rather than increase, the fuel required overall.",
      "cancelling the flight automatically whenever any ground delay is anticipated, since flight planning is understood to have no mechanism for accommodating an expected delay.",
    ],
    answer: 0,
    explain:
      "When ATC or airport ground delays are anticipated -- such as an expected extended taxi time or ground stop -- flight planning generally accounts for this by including additional fuel beyond what a normal, undelayed departure and taxi sequence would require, so the aircraft is not left short of its planned reserves; delays are not simply disregarded, they do not reduce the fuel required, and an anticipated delay does not automatically require cancelling the flight.",
    reference: "TC AIM RAC - Delay Fuel Planning",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Before departure, the pilot-in-command's review and acceptance of the load manifest (load sheet) is intended to confirm that",
    options: [
      "the aircraft's actual loaded weight and balance fall within the approved limits for the flight, since the pilot-in-command retains responsibility for this confirmation even where the load sheet is prepared by other personnel.",
      "the load sheet is entirely the responsibility of ground handling staff, with the pilot-in-command having no role in reviewing or accepting it before departure.",
      "cabin crew staffing levels meet the minimum requirement, a matter unrelated to the load sheet's actual purpose of confirming weight and balance.",
      "the aircraft's fuel quantity has been correctly uplifted, a distinct check unrelated to the load sheet's confirmation of weight and balance within limits.",
    ],
    answer: 0,
    explain:
      "Although a load sheet may be prepared by ground handling or dispatch personnel, the pilot-in-command's review and acceptance of it confirms that the aircraft's actual loaded weight and balance fall within the approved limits for the flight, and that responsibility remains with the pilot-in-command rather than being fully delegated away -- it is not a cabin crew staffing check, and while fuel quantity is separately verified, the load sheet's core purpose is confirming weight and balance compliance.",
    reference: "TC AIM RAC - Load Sheet Responsibility",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An en route alternate aerodrome, planned for on certain long-range or remote-area flights in addition to the destination alternate, is intended to provide",
    options: [
      "a suitable diversion aerodrome available partway along the route, in case a diversion becomes necessary before reaching the vicinity of the destination or a planned critical point.",
      "no operational benefit beyond what the destination alternate already provides, making the entire concept of an en route alternate redundant by definition.",
      "a substitute for the takeoff alternate requirement, eliminating any need to separately consider departure aerodrome weather conditions.",
      "a location used exclusively for scheduled maintenance stops, with no relevance to diversion planning or in-flight contingencies.",
    ],
    answer: 0,
    explain:
      "An en route alternate provides a suitable diversion aerodrome available partway along a long-range or remote-area route, addressing the possibility that a diversion becomes necessary well before reaching the vicinity of the destination or a planned critical point -- it serves a distinct planning purpose from the destination alternate (which covers arrival-area contingencies) and from the takeoff alternate (which covers a return shortly after departure), and it is not primarily a scheduled maintenance stop.",
    reference: "TC AIM RAC - En Route Alternate",
  },
];
