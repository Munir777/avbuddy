import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 21 -- Section 9: Flight
// Planning, third pass. Original questions written from the CARs, the
// TC AIM, and the TP 690 syllabus (topic headings only, no sample
// questions). Covers diversion planning concepts, overwater/emergency
// equipment carriage, ATC flow management, and route/fuel planning
// topics not yet addressed in batches 9 or 12. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_21_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The furthest point along a route from which an aircraft, flying at a single planned cruise speed, could still turn back and land at the departure aerodrome (or another suitable aerodrome behind it) with the required fuel reserves intact, is known as the",
    options: [
      "point of no return, distinct from the critical point (equal time point), which instead compares continuing to the destination against returning, generally using different continue/divert speeds.",
      "critical point, which is calculated purely from fuel remaining and has no relationship to comparing a continue-versus-return decision.",
      "top of descent, a point defined entirely by planned rate of descent and has no connection to fuel or diversion planning at all.",
      "preferred route, a term describing a NAV CANADA-published route rather than any fuel- or time-based calculated point.",
    ],
    answer: 0,
    explain:
      "The point of no return is a purely fuel-based limit: beyond it, the aircraft simply doesn't have enough fuel remaining to return to a suitable aerodrome behind it and still land with the required reserve. It's calculated differently from, and answers a different question than, the critical point (equal time point/ETP), which instead finds where continuing to the destination and returning to the departure point take the same amount of time, often incorporating different speeds for the continue and divert cases (such as an engine-out scenario).",
    reference: "TP 690 Section 9 - Flight Planning, Point of No Return",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A cost index, used by a flight management system to compute an economical cruise speed, represents",
    options: [
      "the relative cost of time (crew, maintenance, and other time-related operating costs) compared to the cost of fuel, letting the FMS balance flying faster (burning more fuel) against flying slower (saving fuel but taking longer).",
      "a fixed cruise Mach number published for each aircraft type, unrelated to fuel price or the cost of time.",
      "the total certified maximum operating cost per flight hour for the aircraft type, used only for company accounting purposes.",
      "a safety-related index describing the aircraft's fuel reserve margin, unrelated to speed or cost optimization.",
    ],
    answer: 0,
    explain:
      "A cost index is entered as a value representing the balance an operator wants to strike between the cost of time (a low cost index favours minimizing fuel burn, accepting a longer flight time) and the cost of fuel (a high cost index favours a faster cruise speed, accepting higher fuel burn to save time) -- letting the FMS compute an economy cruise speed tailored to that specific operator's or route's cost priorities, rather than defaulting to either pure maximum-range or pure maximum-speed cruise.",
    reference: "TP 690 Section 9 - Flight Planning, Cruise Performance",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Minimum Equipment List (MEL) item that is deferred (an inoperative component permitted to remain unserviceable under specified conditions) may, for flight planning purposes,",
    options: [
      "require an associated performance penalty or operational limitation to be applied, since the MEL may specify a fuel, weight, or performance adjustment to compensate for the inoperative item.",
      "never have any effect on flight planning at all, since a legally deferred MEL item is treated as fully functional for every planning purpose.",
      "always ground the aircraft until the item is repaired, since MEL deferral only applies to non-flight-related cabin amenities.",
      "only affect maintenance scheduling, with no possible effect on fuel planning, weight and balance, or performance calculations.",
    ],
    answer: 0,
    explain:
      "A properly deferred MEL item is legally permitted to remain inoperative for a defined period under defined conditions, but that doesn't mean it has zero operational consequence -- the MEL (or an associated Configuration Deviation List entry, for a missing panel or fairing) can specify a required performance correction, fuel penalty, or operational limitation that must be factored into that flight's planning, precisely because the missing or inoperative item can genuinely affect drag, weight, systems redundancy, or another planning input.",
    reference: "TP 690 Section 9 - Flight Planning, MEL/CDL",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under the CARs, life jackets suitable for each person on board are generally required to be carried",
    options: [
      "on any aircraft taking off from or landing on water, and on any single-engine aircraft flown over water beyond gliding distance from shore.",
      "only on multi-engine aircraft; single-engine aircraft are exempt from any life jacket carriage requirement regardless of the flight conducted.",
      "only on flights that remain within gliding distance of shore at all times, since flights beyond gliding distance are assumed to instead rely solely on life rafts.",
      "only when the flight is conducted under IFR; VFR flights over water carry no life jacket requirement under the CARs.",
    ],
    answer: 0,
    explain:
      "The life jacket requirement is triggered two ways: by the nature of the operation itself (taking off from or landing on water, regardless of aircraft type) and, separately, by a single-engine aircraft being flown over water beyond gliding distance from shore -- reflecting the heightened risk of an engine failure over water with no glide-to-shore option, a risk multi-engine aircraft are assumed (within CARs 602.62 and 602.63's fuller requirements) to manage somewhat differently.",
    reference: "CARs 602.62; TC AIM AIR 2.11.3",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A large multi-engine turbojet aeroplane engaged in an air transport service, carrying passengers, and required by CAR 602.63 to carry a life raft, is correspondingly required to carry",
    options: [
      "two ELTs (of type W or S, or one of each), rather than the single ELT required for most other CARs-regulated aircraft.",
      "no ELT at all, since life raft carriage under CAR 602.63 is treated as a full substitute for ELT carriage.",
      "exactly the same single ELT requirement as any other aircraft not required to carry a life raft, with no additional ELT beyond that.",
      "three ELTs, one more than any other category of aircraft regulated under the CARs.",
    ],
    answer: 0,
    explain:
      "The ELT carriage table scales up specifically for this category: a large multi-engine turbojet aeroplane in air transport service, carrying passengers, and already required to carry a life raft under CAR 602.63, is required to carry two ELTs (of the water-capable W or S type, or one of each) rather than the single ELT that applies to most other CARs-regulated aircraft -- reflecting the added redundancy value of a second distress beacon for a larger passenger-carrying aircraft operating in an overwater environment.",
    reference: "TC AIM AIR 4.11 (ELT Carriage Requirements)",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Pilots are advised to continuously monitor 121.5 MHz when operating a Canadian aircraft",
    options: [
      "over water more than 50 NM from shore, or within sparsely settled areas, unless cockpit duties or equipment limitations prevent it.",
      "only while operating within controlled airspace near a major aerodrome, with no recommendation to monitor it elsewhere.",
      "only during the initial climb and final descent phases of flight, with no recommendation to monitor it during cruise.",
      "at all times during every flight without exception, regardless of cockpit workload or available VHF radio equipment.",
    ],
    answer: 0,
    explain:
      "The recommendation to keep 121.5 MHz monitored (as a second VHF frequency, workload permitting) is specifically tied to situations where a pilot in distress might otherwise have no other way to be heard -- over water beyond 50 NM from shore, or over sparsely settled land areas -- rather than being a blanket requirement for every phase and location of flight.",
    reference: "TC AIM COM 1.4.2",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A load manifest (or load sheet), prepared before departure, is best described as",
    options: [
      "a document recording the actual weight, distribution, and centre of gravity of the loaded aircraft, confirming it is within its certified weight and balance limits for that flight.",
      "a document recording only the number of passengers on board, with no reference to weight, cargo, or centre of gravity at all.",
      "a purely historical maintenance record with no bearing on the specific flight about to be conducted.",
      "a document required only for cargo-only flights, with no equivalent requirement for passenger-carrying flights.",
    ],
    answer: 0,
    explain:
      "The load manifest ties the flight planning process to what's actually been loaded: it documents the aircraft's actual weight and its distribution (and the resulting centre of gravity) as loaded for that specific flight, confirming those figures stay within the aircraft's certified structural and centre-of-gravity limits -- a live, flight-specific check, not a general maintenance record, and one that applies whether the flight is carrying passengers, cargo, or both.",
    reference: "TP 690 Section 9 - Flight Planning, Weight and Balance",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Beyond the fuel required by regulation and company policy, a pilot-in-command generally retains discretion to",
    options: [
      "request additional fuel above the flight-planned minimum, based on their own judgment of conditions such as forecast weather, anticipated delays, or runway conditions.",
      "carry less fuel than the calculated regulatory minimum whenever they personally judge the flight to be low-risk.",
      "override the aircraft's structural maximum landing weight by carrying extra fuel, provided the extra fuel is for a genuine operational reason.",
      "delegate the fuel-carriage decision entirely to the dispatcher or flight planner, with no residual pilot-in-command discretion at all.",
    ],
    answer: 0,
    explain:
      "While the regulatory and company-calculated fuel figures set the required minimum, the pilot-in-command retains the discretion to add fuel above that minimum when their own judgment -- of forecast conditions, likely delays, runway state, or other factors not fully captured by the standard calculation -- suggests it's prudent; that discretion runs in the direction of adding margin, not reducing below the calculated regulatory minimum, and it never permits exceeding a structural weight limit.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Policy",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Calculated Take-Off Time (CTOT), assigned to a flight as part of air traffic flow management, represents",
    options: [
      "a specific runway departure time slot assigned to help manage traffic demand, which the flight crew is expected to meet as closely as practical.",
      "the theoretical takeoff time used only for fuel-planning calculations, with no operational significance to actual departure timing.",
      "a time calculated solely by the flight crew, based on their own preferred departure sequencing, with no ATC input at all.",
      "a mandatory minimum time interval that must elapse between the completion of push-back and the start of the takeoff roll.",
    ],
    answer: 0,
    explain:
      "A CTOT is an air traffic flow management tool: when demand at a destination, a piece of airspace, or elsewhere in the system exceeds available capacity, a specific departure time slot is assigned to a flight to help smooth that demand, and the flight crew works with ATC and ground operations (through steps such as start-up approval and taxi sequencing) to actually meet that assigned time as closely as practical, rather than departing purely on their own preferred schedule.",
    reference: "TC AIM RAC 10.5",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "When planning a route that passes near a published restricted or advisory airspace area, a pilot should generally",
    options: [
      "check the area's status (active/inactive) and any published times or conditions, and plan the route or altitude to avoid it if it will be active, or obtain any required clearance if it will not.",
      "disregard restricted and advisory areas entirely during flight planning, since they only become relevant if actually entered without clearance in flight.",
      "assume every restricted area is permanently active at all times, with no need to check published activation times or NOTAMs.",
      "treat restricted and advisory areas identically to controlled airspace requiring an ATC clearance, since the two categories carry the same legal requirement.",
    ],
    answer: 0,
    explain:
      "Special use airspace such as restricted and advisory areas is published with specific activation conditions (times, altitudes, or NOTAM-driven activation), and proper flight planning means checking that status ahead of time -- routing around or above/below an area expected to be active, or confirming whether a clearance or coordination is needed -- rather than either ignoring the area's existence or assuming worst-case activation without checking the actual published information.",
    reference: "TP 690 Section 9 - Flight Planning, Airspace",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A NOTAM (Notice to Air Missions) is used to promulgate",
    options: [
      "essential, often time-critical information about a temporary change or hazard (such as a closed runway, an unserviceable NAVAID, or new obstacle) that isn't yet incorporated into published charts and other aeronautical publications.",
      "only routine, permanent changes to published aeronautical charts, with temporary or urgent information excluded from the NOTAM system entirely.",
      "weather forecast information exclusively, functioning as an alternate name for a TAF or GFA.",
      "company-internal scheduling and crew rostering information, unrelated to any aeronautical operational hazard or change.",
    ],
    answer: 0,
    explain:
      "NOTAMs exist specifically to fill the gap between an aeronautical publication's normal revision cycle and something that needs to be known right away -- a closed runway, an out-of-service NAVAID, a new obstacle, or another temporary hazard or change -- rather than duplicating weather products (which have their own dedicated formats) or carrying purely permanent, already-charted, or company-internal information.",
    reference: "TP 690 Section 9 - Flight Planning, NOTAMs",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Beyond taxi fuel, trip fuel, contingency fuel, and the required VFR/IFR reserve, a flight plan's fuel load may also include 'additional' (or route reserve) fuel, which is intended to",
    options: [
      "provide a further margin against operational factors the standard reserve calculations don't fully capture, such as a specific route's known unreliability, forecast uncertainty, or company policy for a particular operation.",
      "replace the requirement to carry a final reserve or alternate fuel figure at all, since additional fuel is considered a full substitute for those requirements.",
      "be used only for ground taxiing purposes after landing, functioning as a second, separate taxi fuel allowance.",
      "count toward the aircraft's payload capacity rather than its fuel load, since it is treated as cargo rather than fuel for weight purposes.",
    ],
    answer: 0,
    explain:
      "Additional (or route reserve) fuel sits on top of the standard fuel stack -- it's a further, often operator- or route-specific margin added where experience, forecast uncertainty, or company policy suggests the standard contingency and reserve figures alone might not be enough for that particular route or situation, rather than replacing any of the mandatory fuel components it supplements.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Policy",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A company operational flight plan generally documents, at minimum,",
    options: [
      "the planned route, altitudes, fuel calculation, and aircraft weight and balance for that specific flight, forming the operational basis on which the flight is dispatched.",
      "only the passenger and crew names for that flight, with no operational or performance data included at all.",
      "only the destination aerodrome's identifier, with route, fuel, and weight and balance data considered separate, unrelated documents.",
      "the aircraft's full maintenance history since its last major inspection, unrelated to the specific flight being planned.",
    ],
    answer: 0,
    explain:
      "The operational flight plan pulls the operational picture for a specific flight together in one document -- planned route and altitudes, the fuel calculation (with its various components), and the weight and balance figures for that flight -- giving the crew and dispatcher a shared, documented basis for the decision to dispatch that flight, rather than being a passenger manifest, a bare destination reference, or a maintenance record.",
    reference: "TP 690 Section 9 - Flight Planning, Operational Flight Plan",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Building up a complete fuel load from its individual components, the typical order (from the aircraft's parking position through to the final planning figure) generally runs:",
    options: [
      "taxi fuel, trip fuel to destination, contingency fuel, fuel to the alternate (if required), and final reserve fuel.",
      "final reserve fuel, then contingency fuel, then trip fuel, then taxi fuel, with alternate fuel omitted entirely from the sequence.",
      "trip fuel only, with taxi fuel, contingency fuel, alternate fuel, and final reserve fuel all considered optional additions rather than a standard component stack.",
      "alternate fuel, then taxi fuel, then final reserve fuel, then trip fuel, then contingency fuel, in that specific order.",
    ],
    answer: 0,
    explain:
      "The standard fuel-planning stack builds logically from the ground up: taxi fuel covers pre-takeoff ground operations, trip fuel covers the planned route to destination, contingency fuel covers routine in-flight uncertainty, fuel to the alternate covers a diversion if the destination can't be used, and final reserve fuel sits on top as the last-resort holding margin -- each component addressing a distinct, sequential part of the flight's fuel need.",
    reference: "TP 690 Section 9 - Flight Planning, Fuel Policy",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under CAR Subpart 705 (airline operations), the requirement for a flight to be conducted only after being released by a person exercising operational control (such as a flight dispatcher, under a company's approved system) is generally intended to",
    options: [
      "ensure a documented, systematic review of the flight's operational and regulatory readiness (weather, fuel, weight and balance, NOTAMs, and similar factors) occurs before the flight is authorized to depart.",
      "transfer legal responsibility for the safe conduct of the flight entirely away from the pilot-in-command and onto the dispatcher alone.",
      "apply only to cargo flights conducted under Subpart 705, with passenger-carrying Subpart 705 flights exempt from any dispatch release requirement.",
      "replace the pilot-in-command's own pre-flight decision-making entirely, requiring no independent assessment by the crew once dispatch release has been given.",
    ],
    answer: 0,
    explain:
      "A Subpart 705 operational control system builds in a documented, systematic second layer of review -- weather, fuel, weight and balance, NOTAMs, and other operational factors -- before a flight is authorized to depart, complementing rather than replacing the pilot-in-command's own independent judgment and ultimate authority and responsibility for the safe conduct of the flight, and applying to both passenger and cargo operations conducted under that subpart.",
    reference: "CARs Subpart 705; TP 690 Section 9 - Flight Planning, Operational Control",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Comparing the critical point (equal time point) with the point of no return, the critical point is",
    options: [
      "the point where continuing to the destination and returning to a suitable aerodrome take an equal amount of time, potentially using different speeds for each case (such as engine-out continue versus return speeds); the point of no return is instead the furthest point from which a return is still fuel-feasible at all.",
      "always located at exactly the same position along the route as the point of no return for any given flight.",
      "calculated using fuel remaining only, with time never entering into the critical point calculation at all.",
      "relevant only to flights with no alternate aerodrome specified, and has no application when an alternate is available.",
    ],
    answer: 0,
    explain:
      "The two points answer genuinely different questions and are generally located at different points along the route: the critical point balances time (continuing versus returning, often at different speeds appropriate to each scenario -- such as normal cruise for one direction and an engine-out speed for the other), while the point of no return is a hard fuel limit -- the furthest point at which turning back and reaching a suitable aerodrome with required reserves remains fuel-feasible at all, regardless of how that compares in time to continuing onward.",
    reference: "TP 690 Section 9 - Flight Planning, Critical Point and Point of No Return",
  },
];
