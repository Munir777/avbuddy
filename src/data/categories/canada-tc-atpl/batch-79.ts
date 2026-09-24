import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 79 -- Section 4: Flight
// Planning, ninth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions), the CARs,
// and general dispatch and flight planning principles. Covers the
// NOTOC, SNOWTAM, lateral fuel imbalance and CG, NOTAM suffix
// classification, conservative company fuel policy, in-flight fuel
// burn sequencing and CG, Maximum Landing Weight vs MTOW, CG
// envelope narrowing at low weight, helicopter VFR fuel reserves,
// the METAR TREND group, shared operational control under Subpart
// 705, fuel loaded by volume vs weight, route/aerodrome
// qualification, ETE vs block time, dispatch release validity, and
// MEL category classification -- topics not yet addressed in
// batches 9, 12, 21, 30, 39, 49, 59, or 69. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_79_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Notification to Captain (NOTOC), prepared before departure on a flight carrying dangerous goods, is best described as a document that",
    options: [
      "replaces the need for any dangerous goods to be properly packaged, marked, or labelled, since the NOTOC alone satisfies all dangerous goods handling requirements, a claim that inverts the NOTOC's actual purpose, since proper packaging, marking, and labelling remain separate, mandatory requirements and the NOTOC instead exists to inform the crew of what dangerous goods are already on board and where.",
      "records only the total fuel load and is unrelated to any cargo carried on board.",
      "lists the dangerous goods loaded on board, including their location, quantity, and classification, so the pilot-in-command has the information needed to make informed decisions in the event of an in-flight emergency involving that cargo.",
      "is required only for passenger-carrying flights, with no application to all-cargo operations.",
    ],
    answer: 2,
    explain:
      "A NOTOC lists the dangerous goods actually loaded on a given flight -- including their identity, classification, quantity, and location within the aircraft -- and is provided to the pilot-in-command before departure so that, should an in-flight emergency involving that cargo occur, the crew has the specific information needed to respond appropriately, rather than needing to search cargo documentation or manifests during an actual emergency.",
    reference: "TP 690 -- Flight Planning: Dangerous Goods Documentation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A SNOWTAM, a specialized NOTAM format used to report runway surface conditions during winter operations, is used to communicate information such as",
    options: [
      "scheduled airspace closures for military exercises, unrelated to winter weather or runway condition, a subject that belongs to a different type of notice entirely, since runway surface condition reports instead describe contamination such as snow, ice, or slush together with a runway condition code for performance assessment.",
      "only the aerodrome's current fuel prices, with no connection to runway surface condition.",
      "the aerodrome's noise abatement procedures, with no application to runway surface condition.",
      "the type and depth of contamination (such as snow, ice, or slush) present on the runway, along with a runway condition code, allowing crews to assess takeoff and landing performance accordingly.",
    ],
    answer: 3,
    explain:
      "A SNOWTAM is issued specifically to report the runway surface condition at an aerodrome affected by snow, ice, slush, or standing water, generally including the type and depth of contamination present along each runway third and a runway condition code (or equivalent descriptive terms), giving crews the information needed to determine whether performance calculations must account for a contaminated runway before departure or arrival.",
    reference: "TP 690 -- Flight Planning: Winter Operations Information",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "On an aircraft with independently fillable left and right wing fuel tanks, a significant lateral fuel imbalance between the two sides can",
    options: [
      "produce a lateral (left/right) shift in the aircraft's overall centre of gravity, potentially requiring roll control input to maintain wings-level flight and, if excessive, exceeding a structural or handling limit specific to lateral imbalance.",
      "only affect engine performance, with no relationship to the aircraft's centre of gravity or handling characteristics.",
      "always be corrected automatically by the aircraft's fuel system, meaning no crew monitoring or crossfeed action is ever required.",
      "have no effect at all on the aircraft's handling or structural limits, since lateral balance is never a consideration distinct from longitudinal (fore-aft) centre of gravity, a claim that treats lateral balance as if it were identical to fore-aft balance, when in fact an excessive lateral fuel imbalance can require its own roll control input and can exceed a structural or handling limit specific to that lateral condition.",
    ],
    answer: 0,
    explain:
      "While most weight-and-balance discussion focuses on the fore-aft (longitudinal) position of the centre of gravity, a significant fuel imbalance between the left and right wing tanks shifts the aircraft's overall centre of gravity laterally as well, which can require sustained roll control input to keep the wings level and, if the imbalance becomes large enough, can exceed a defined lateral imbalance limit -- which is why fuel imbalance caution indications exist and why crews are trained to manage crossfeed or fuel usage to keep the tanks reasonably balanced.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "NOTAMs are generally distinguished by a suffix indicating whether a given NOTAM is",
    options: [
      "applicable only to military aircraft, applicable only to civil aircraft, or applicable to both, with no relationship to whether the notice is new, replaced, or cancelled.",
      "a new NOTAM, a replacement for a previously issued NOTAM on the same subject, or a cancellation of a previously issued NOTAM, allowing a pilot reviewing a NOTAM briefing to understand how it relates to earlier notices on the same topic.",
      "issued by Transport Canada, issued by NAV CANADA, or issued by an individual aerodrome operator, unrelated to the notice's content or currency.",
      "valid only during daylight hours, valid only at night, or valid at all times, unrelated to whether the notice supersedes an earlier one.",
    ],
    answer: 1,
    explain:
      "A NOTAM's suffix identifies its relationship to any earlier notice on the same subject -- commonly indicating that it is a new NOTAM, that it replaces a previously issued NOTAM (superseding and cancelling the earlier one), or that it cancels a previously issued NOTAM outright -- which helps a pilot reviewing a NOTAM briefing understand the current, up-to-date status of a given piece of information rather than potentially acting on an outdated or already-cancelled notice.",
    reference: "TP 690 -- Flight Planning: NOTAM Classification",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Some operators establish a company minimum fuel policy that is more conservative than the regulatory minimum set out in the CARs, meaning the operator's policy generally requires",
    options: [
      "carrying exactly the regulatory minimum fuel on every flight, since a company policy can never require more than the CARs specify.",
      "carrying less fuel than the regulatory minimum whenever operationally convenient, since company policy is permitted to override the CARs requirement downward.",
      "carrying more fuel than the bare regulatory minimum for at least some routes or conditions, reflecting the operator's own risk tolerance, operational experience, or route-specific factors, even though this exceeds what the CARs alone would require.",
      "no fuel planning process at all beyond what individual pilots personally decide to carry on each flight, a description that overlooks how fuel policy actually functions at most operators, where a structured company process, rather than individual pilot discretion alone, typically determines how much fuel beyond the bare regulatory minimum is carried.",
    ],
    answer: 2,
    explain:
      "While the CARs establish a regulatory floor for minimum fuel, nothing prevents an operator from adopting a more conservative company fuel policy that requires carrying more than that bare minimum on at least some routes or under certain conditions, reflecting the operator's own risk tolerance, historical operational experience (such as routes prone to holding or diversion), or other route-specific factors -- a company policy can add to the regulatory minimum but cannot authorize carrying less than what the CARs require.",
    reference: "TP 690 -- Flight Planning: Fuel Policy",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "On an aircraft with a trim tank or a fuel management system designed to transfer fuel during cruise, the planned sequence of fuel burn (or fuel transfer) is significant to flight planning primarily because",
    options: [
      "it must always burn fuel from the tank closest to the aircraft's centre of gravity first, regardless of any other consideration.",
      "it has no effect on centre of gravity at any point during the flight, since fuel burn sequence is relevant only to engine performance, a description that misses the actual design intent, since a fuel burn sequence is often deliberately chosen specifically to help keep the aircraft's centre of gravity within an efficient or required range as fuel is consumed, not merely to serve engine performance considerations.",
      "it is used solely to balance left and right wing tanks, with no role in managing the aircraft's fore-aft centre of gravity.",
      "it is deliberately designed to help keep the aircraft's centre of gravity within an efficient or required range as fuel is consumed over the course of the flight, rather than allowing the CG to drift outside acceptable limits as weight decreases.",
    ],
    answer: 3,
    explain:
      "On aircraft designed with a trim tank (often in the tail) or an automated fuel management system, the planned sequence in which fuel is burned or transferred between tanks is deliberately engineered to help keep the aircraft's centre of gravity within an efficient aerodynamic range -- often further aft for reduced trim drag -- as the aircraft's weight decreases over the course of the flight, rather than letting the CG simply drift as whichever tank happens to feed the engines empties first.",
    reference: "TP 690 -- Flight Planning: In-Flight Fuel Management",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's Maximum Landing Weight (MLW), as distinguished from its Maximum Takeoff Weight (MTOW), is significant to flight planning because",
    options: [
      "an aircraft that departs at a weight close to MTOW may need to burn enough trip fuel to be at or below MLW by the time it reaches the destination, and if it cannot, an early return or a fuel jettison/burn-off may be required before landing is possible.",
      "MLW is always numerically higher than MTOW, meaning it never constrains flight planning in any practical way.",
      "MLW applies only to the departure aerodrome and has no bearing on the aircraft's condition at the destination.",
      "MLW and MTOW are simply two different names for the exact same structural limit, with no distinction relevant to flight planning, a claim that overlooks why the two limits are tracked separately, since an aircraft departing near MTOW may still need to burn enough trip fuel to be at or below the separate, generally lower MLW limit by the time it reaches the destination.",
    ],
    answer: 0,
    explain:
      "Many transport aircraft have a Maximum Landing Weight lower than their Maximum Takeoff Weight, reflecting the greater structural loads a landing (with its associated sink rate and gear loads) imposes compared to a takeoff; a flight departing near MTOW must therefore plan to burn enough trip fuel en route to be at or below MLW by the time it reaches the destination, and if an early return to the departure aerodrome becomes necessary before enough fuel has been burned, the crew may need to hold, burn off fuel, or in some aircraft jettison fuel before an overweight landing limit is exceeded.",
    reference: "TP 690 -- Flight Planning: Weight Limits",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's centre of gravity envelope, plotted against weight, is generally shaped such that",
    options: [
      "the permitted range of CG positions widens without limit as weight decreases, meaning a very light aircraft has effectively no CG restriction at all.",
      "the permitted range of CG positions narrows at lower weights, meaning a lightly loaded aircraft can have less tolerance for CG variation than the same aircraft loaded close to its maximum weight.",
      "the permitted range of CG positions is identical and constant at every weight, from the aircraft's empty weight up to its maximum weight.",
      "the CG envelope applies only at maximum takeoff weight, with no defined limits at any other weight.",
    ],
    answer: 1,
    explain:
      "For many aircraft, the CG envelope narrows at lower weights -- the permitted forward and aft CG limits converge somewhat as weight decreases from the maximum -- meaning a lightly loaded aircraft can actually have less tolerance for CG variation than the same aircraft loaded close to its maximum weight, which is a reason weight and balance planning must check the actual computed CG against the limits applicable to the specific weight in question, rather than assuming the same wide envelope applies regardless of load.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Minimum VFR fuel reserve requirements for a helicopter, under the CARs, are generally",
    options: [
      "always numerically identical to the aeroplane VFR fuel reserve requirement, with the CARs making no distinction between the two aircraft categories, an assumption the regulation does not actually make, since the CARs instead specify a helicopter VFR fuel reserve requirement separately from the aeroplane figure, reflecting genuine operational differences between the two aircraft categories.",
      "based exclusively on the helicopter's maximum range capability, with no reference to a specified time reserve at all.",
      "specified separately from the fixed-wing (aeroplane) VFR fuel reserve requirement, reflecting operational differences between the two types of aircraft, rather than being automatically identical to the aeroplane figures.",
      "entirely unregulated, with helicopters exempt from any minimum VFR fuel reserve requirement under the CARs.",
    ],
    answer: 2,
    explain:
      "The CARs generally specify VFR minimum fuel reserve requirements separately for helicopters and for aeroplanes, reflecting differences in how the two types of aircraft are typically operated, rather than simply applying the aeroplane figures to helicopter operations by default -- a pilot planning a helicopter VFR flight needs to reference the specific helicopter fuel reserve provision rather than assuming the aeroplane reserve requirement applies.",
    reference: "TP 690 -- Flight Planning: Fuel Requirements",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A TREND forecast, appended to some METAR reports, provides",
    options: [
      "a forecast that applies only to conditions at a different, specified alternate aerodrome, rather than the aerodrome where the METAR was observed, a description that applies to a different aviation product entirely, since this type of short-term amendment instead concerns significant expected changes at the same aerodrome over the next couple of hours rather than conditions somewhere else.",
      "historical climatological data averaged over many years, rather than any forecast tied to the current observation.",
      "a forecast of conditions valid for the following 24 to 30 hours, making it a longer-range product than a standard TAF.",
      "a short-term forecast of significant expected changes in conditions at the aerodrome over the next couple of hours, useful for planning an imminent arrival without needing to separately consult a full TAF.",
    ],
    answer: 3,
    explain:
      "A TREND forecast appended to a METAR provides a short-term outlook -- typically covering the following couple of hours -- for significant expected changes at that same aerodrome, giving a crew planning an imminent arrival a quick sense of whether conditions are expected to improve, deteriorate, or remain steady without needing to separately pull and interpret a full TAF, though it does not replace the more detailed, longer-validity forecast a TAF provides for broader flight planning purposes.",
    reference: "TP 690 -- Flight Planning: Weather Products",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under CARs Subpart 705 (airline operations), operational control of a flight is generally understood to be a responsibility",
    options: [
      "shared between the pilot-in-command and a company flight dispatcher operating under an approved system, in contrast to smaller commercial operations where this responsibility rests solely with the pilot-in-command.",
      "resting solely and exclusively with the company dispatcher, removing any operational control responsibility from the pilot-in-command.",
      "resting entirely with air traffic control, with neither the pilot-in-command nor any company dispatcher holding operational control responsibility.",
      "resting solely and exclusively with the pilot-in-command, with no role for any company dispatcher under Subpart 705, a description that overstates the pilot-in-command's sole authority under a Subpart 705 operation, where operational control is instead shared with an approved company flight dispatcher rather than resting with the pilot-in-command alone.",
    ],
    answer: 0,
    explain:
      "Subpart 705 operations generally use a shared operational control system in which both the pilot-in-command and a qualified company flight dispatcher jointly hold responsibility for a flight's release and operational control, each bringing independent judgment to the decision -- this contrasts with smaller commercial operations under other subparts, where operational control responsibility typically rests solely with the pilot-in-command, without a comparable shared dispatch requirement.",
    reference: "TP 690 -- Flight Planning: Operational Control",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Because fuel is commonly uplifted and measured by volume rather than directly by weight, an accurate flight-planning fuel weight figure generally requires",
    options: [
      "converting weight to volume rather than volume to weight, since fuel is always measured and recorded directly by weight at the point of uplift.",
      "converting the uplifted volume to weight using the fuel's actual density, which varies with temperature, rather than assuming a single fixed weight-per-volume figure regardless of conditions.",
      "relying solely on the aircraft's fuel quantity gauges, with no need to reference the fuel's density at all.",
      "no conversion at all, since a litre (or gallon) of jet fuel always weighs exactly the same regardless of its temperature.",
    ],
    answer: 1,
    explain:
      "Because fuel is typically delivered and measured by volume (litres or gallons) at the point of uplift, but flight planning and weight-and-balance calculations require an accurate weight figure, the volume must be converted using the fuel's actual density -- which varies with temperature, since fuel expands and becomes less dense as it warms -- rather than assuming a single fixed weight-per-volume conversion factor regardless of the fuel's actual condition at the time of uplift.",
    reference: "TP 690 -- Flight Planning: Fuel Weight and Density",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Before a flight can be planned to a particular aerodrome requiring special qualification (such as one surrounded by challenging terrain or with an unusually demanding approach), an operator generally requires that",
    options: [
      "special aerodrome qualification applies only to VFR operations, with no application to IFR flights into a similarly demanding aerodrome.",
      "no special qualification of any kind is ever required, since any crew holding a valid type rating for the aircraft is automatically qualified for every aerodrome that type can operate into.",
      "the specific crew members assigned to that flight hold the required route or aerodrome qualification, typically established through specific training, briefing materials, or a minimum number of supervised visits, before the aerodrome may be used.",
      "only the aircraft itself, rather than the crew, requires any special qualification or certification for such an aerodrome, a description that misplaces the requirement, since it is specifically the individual crew members assigned to the flight, through training, briefing, or a minimum number of supervised visits, who must hold the qualification rather than the aircraft alone.",
    ],
    answer: 2,
    explain:
      "Some aerodromes, because of challenging surrounding terrain, an unusually demanding approach procedure, or other operational complexities, are designated by an operator as requiring special qualification -- meaning the specific crew members assigned to that flight must have completed particular training, reviewed specific briefing materials, or accumulated a minimum number of supervised visits before being permitted to operate there, a requirement that applies to the crew's qualification rather than simply to the aircraft's general capability.",
    reference: "TP 690 -- Flight Planning: Route and Aerodrome Qualification",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Estimated Time En Route (ETE), as used in flight planning, differs from total block time in that ETE",
    options: [
      "refers only to time spent in cruise flight, excluding the climb and descent portions of the flight that block time does include.",
      "is simply another name for block time, with the two terms used interchangeably and no distinction between them.",
      "includes taxi-out and taxi-in time, while block time covers only the airborne portion of the flight, a description that reverses the actual definitions, since it is block time that includes taxi-out and taxi-in, while the airborne-only measurement instead covers just the portion of the flight from takeoff to landing.",
      "covers only the airborne portion of the flight, from takeoff to landing, whereas block time also includes the taxi-out time before takeoff and the taxi-in time after landing.",
    ],
    answer: 3,
    explain:
      "Estimated Time En Route covers only the airborne portion of a flight -- generally measured from takeoff to landing (or wheels-up to wheels-down) -- while block time is the broader figure that also includes taxi-out time from the parking position to the runway and taxi-in time from the runway back to the arrival parking position, which is why block time is always somewhat longer than ETE and is the figure typically used for scheduling and crew duty time purposes.",
    reference: "TP 690 -- Flight Planning: Time Estimates",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If, after a flight has already been released and dispatched, conditions change significantly enough (such as a major destination weather deterioration or a substantial delay), the operator's dispatch procedures generally require that",
    options: [
      "the flight release be reviewed and, if the changed conditions fall outside what the original release accounted for, a new or amended release be issued before the flight may proceed, rather than allowing the original release to remain valid indefinitely regardless of how conditions have changed.",
      "the pilot-in-command alone, without any involvement from dispatch, decides whether the original release remains adequate.",
      "the original dispatch release remains valid and unchanged for the flight no matter how significantly conditions have since changed.",
      "a new release is required only if the destination aerodrome itself changes, with no other type of significant change ever requiring one, an overly narrow trigger that leaves out other significant changes -- such as weather, aircraft status, or routing -- that can equally require the flight release to be reviewed and, if necessary, reissued before the flight may proceed.",
    ],
    answer: 0,
    explain:
      "A dispatch release (or flight plan) is based on the conditions and information known at the time it was issued, so if conditions change significantly enough afterward -- a major deterioration in destination weather, a substantial delay, or another material change -- that the original release's underlying assumptions no longer hold, the operator's procedures generally require the release to be reviewed and, if necessary, reissued or amended before the flight proceeds, ensuring the flight is not conducted against a plan that no longer reflects the actual situation.",
    reference: "TP 690 -- Flight Planning: Dispatch Release Validity",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A Minimum Equipment List (MEL) item's category classification (commonly labelled A, B, C, or D) generally determines",
    options: [
      "whether the item affects fuel consumption, with no relationship to how long it may remain deferred.",
      "the maximum period of time the aircraft may continue to be dispatched with that item inoperative before it must be repaired, with lower categories generally allowing less time than higher ones.",
      "the item's physical location on the aircraft, rather than any time-based deferral limit.",
      "which specific crew member is authorized to defer the item, with no bearing on how long the deferral may remain in effect.",
    ],
    answer: 1,
    explain:
      "Each MEL item is assigned a category that establishes the maximum period the aircraft may continue to be dispatched with that item inoperative before it must be repaired -- Category A items typically have the most restrictive (often condition-specific rather than a simple fixed period) or shortest allowance, while Category B, C, and D items are generally permitted progressively longer periods (commonly measured in a few days, a couple of weeks, or longer) -- ensuring that deferred items are eventually rectified within a timeframe appropriate to their operational significance.",
    reference: "TP 690 -- Flight Planning: Minimum Equipment List",
  },
];
