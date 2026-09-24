import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 28 -- Section 5: Flight
// Operations, third pass. Original questions written from standard
// aircraft performance and operating principles and the TP 690
// syllabus (topic headings only, no sample questions). Covers runway
// declared distances, hydroplaning types, approach minima concepts,
// and landing-distance margin requirements not yet addressed in
// batches 5 or 20. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_28_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Runway declared distances TORA, TODA, and ASDA are distinguished as follows:",
    options: [
      "TODA is always shorter than TORA, since TODA excludes any usable clearway beyond the physical runway.",
      "TORA is the distance available for landing only, while TODA and ASDA both apply exclusively to takeoff, the reverse of the usual relationship.",
      "TORA is takeoff run available (the physical runway length usable for the ground roll), TODA is takeoff distance available (TORA plus any clearway), and ASDA is accelerate-stop distance available (TORA plus any stopway).",
      "TORA, TODA, and ASDA are three different names for exactly the same declared distance, with no meaningful difference between them.",
    ],
    answer: 2,
    explain:
      "Each declared distance answers a different operational question: TORA is simply the usable physical runway length for the takeoff ground roll; TODA extends that by any usable clearway beyond the runway end (available for the initial climb, not the ground roll); and ASDA extends TORA by any usable stopway (available for stopping during a rejected takeoff, but not for continuing a takeoff) -- so TODA and ASDA are each equal to or greater than TORA, not shorter than it.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A clearway, extending beyond the end of the runway, may be used to",
    options: [
      "extend the physical runway surface itself, functioning identically to simply lengthening the paved runway.",
      "increase the accelerate-stop distance available (ASDA), since a clearway is specifically intended to be strong enough to support the weight of a stopping aircraft.",
      "reduce the required landing distance at the opposite end of the same runway, since a clearway at one end benefits landing performance at the other end.",
      "increase the takeoff distance available (TODA) beyond the takeoff run available (TORA), since the aircraft can be considered airborne and climbing over it rather than still on the ground.",
    ],
    answer: 3,
    explain:
      "A clearway is an area beyond the runway end, clear of obstacles, over which an aircraft may complete part of its initial climb after becoming airborne -- it isn't a paved surface meant to bear a stopping aircraft's weight (that's a stopway's role), so it extends TODA (usable for the continued climb-out) rather than ASDA (usable for stopping), and it has no bearing on landing performance at the far end of the runway.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A stopway, distinguished from a clearway, is",
    options: [
      "an area beyond the runway end capable of supporting the aircraft during a rejected takeoff, extending the accelerate-stop distance available (ASDA) but not usable for continuing a takeoff.",
      "an area usable for continuing a climb-out after becoming airborne, extending the takeoff distance available (TODA) rather than ASDA.",
      "an area used exclusively for aircraft taxiing, unrelated to either takeoff distance or accelerate-stop distance calculations.",
      "identical in function and structural requirements to a clearway, with the two terms simply being regional naming variants for the same feature.",
    ],
    answer: 0,
    explain:
      "A stopway is built to a standard capable of supporting the aircraft's weight during a rejected takeoff, extending ASDA (the distance available to accelerate and then stop) -- but it isn't credited toward a continued takeoff, since it may not meet the structural or obstacle-clearance standard needed to support an aircraft actually attempting to fly from it, which is exactly the functional split that distinguishes it from a clearway.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A 'hot and high' airport -- high elevation combined with high ambient temperature -- presents a compounded takeoff performance penalty primarily because",
    options: [
      "elevation has no effect on takeoff performance at all, so the entire 'hot and high' penalty is attributable to temperature alone.",
      "both factors independently increase density altitude, and their combined effect on reduced air density degrades engine/propeller performance and increases required takeoff distance more severely than either factor alone.",
      "temperature has no effect on takeoff performance at all, so the entire 'hot and high' penalty is attributable to elevation alone.",
      "high elevation and high temperature affect takeoff performance in opposite directions, so their combined effect tends to cancel out and produce close to a standard-day result.",
    ],
    answer: 1,
    explain:
      "Both high field elevation and high ambient temperature independently push density altitude higher -- and since it's density altitude (not just physical elevation or physical thermometer reading alone) that actually governs engine, propeller, and wing performance, a 'hot and high' combination compounds the penalty from both factors together, which is exactly why performance charts and pilots specifically call out this combination as demanding particular care in weight, runway length, and climb performance planning.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Dynamic hydroplaning, viscous hydroplaning, and reverted rubber hydroplaning are three distinct mechanisms by which standing water or a wet/contaminated runway can reduce braking effectiveness. Of these, reverted rubber hydroplaning specifically results from",
    options: [
      "a thin film of water combining with runway surface contamination to create a slippery, low-friction layer even at comparatively low groundspeed.",
      "reverted rubber hydroplaning being identical in mechanism to dynamic hydroplaning, differing only in the speed at which it occurs.",
      "frictional heat generated during a prolonged, locked-wheel skid converting the water beneath the tire to steam, which lifts the tire on a cushion of steam and heat-reverted rubber.",
      "the tire's speed exceeding a threshold related to tire pressure, causing it to ride up on a wedge of water ahead of the tire's contact patch, losing contact with the runway.",
    ],
    answer: 2,
    explain:
      "Reverted rubber hydroplaning is distinct from the other two mechanisms: it develops from a prolonged, locked-wheel skid (such as from a failed or improperly used anti-skid system) generating enough frictional heat to convert the water film beneath the tire into steam, which lifts and rides the tire on a combination of steam pressure and heat-softened, 'reverted' rubber -- a self-sustaining, speed-independent mechanism quite different from dynamic hydroplaning's speed/pressure-driven water wedge or viscous hydroplaning's thin, contamination-slicked film.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An anti-skid braking system generally allows a pilot to apply braking most effectively by",
    options: [
      "disabling the anti-skid system entirely before applying any braking, since anti-skid interferes with, rather than assists, effective braking.",
      "applying only light, intermittent brake pressure at all times, since anti-skid systems are unable to handle firm, sustained brake input.",
      "manually pumping the brakes rapidly, since anti-skid systems are designed to work only in conjunction with manual brake pumping technique.",
      "applying firm, steady maximum brake pressure and letting the system automatically modulate individual wheel braking to prevent skidding, rather than manually pumping or modulating the brakes.",
    ],
    answer: 3,
    explain:
      "An anti-skid system is specifically designed so the pilot doesn't need to modulate brake pressure manually -- applying firm, steady maximum pressure and letting the system's own sensors and valving release and reapply pressure to individual wheels as needed to prevent a skid typically achieves better, more consistent braking performance than manual pumping or light, hesitant braking, which is exactly the opposite of the older, pre-anti-skid technique some pilots might otherwise default to.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An aircraft's demonstrated crosswind component, published in the AFM, represents",
    options: [
      "the maximum crosswind component actually flown during certification testing, and is not necessarily an absolute, hard operating limit unless the AFM specifically designates it as one.",
      "a value that applies only to landing, with no equivalent consideration or published value for takeoff.",
      "the minimum crosswind component the aircraft is capable of handling, with any lesser crosswind considered unsafe to operate in.",
      "a hard, absolute operating limit that must never be exceeded under any circumstances, identical in legal status to a structural VNE limitation.",
    ],
    answer: 0,
    explain:
      "A demonstrated crosswind component reflects what was actually flown and shown to be controllable during certification flight testing -- it's evidence of capability, not automatically an absolute regulatory limit the way a structural speed limit is, though company policy or an operator's own limitations may well choose to treat it as one; and crosswind is a real consideration for both takeoff and landing, not landing alone.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Tailwind component limitations for takeoff and landing exist primarily because a tailwind",
    options: [
      "affects only the landing roll, with takeoff ground roll considered entirely unaffected by any tailwind component.",
      "increases groundspeed at a given airspeed, lengthening the ground roll for takeoff and the landing distance required, and can also reduce climb gradient relative to the ground.",
      "decreases groundspeed at a given airspeed, shortening the required takeoff and landing distance compared to a headwind of the same magnitude.",
      "has no effect on ground roll distance for either takeoff or landing, since ground roll is determined by airspeed alone, independent of wind.",
    ],
    answer: 1,
    explain:
      "Because takeoff and landing performance calculations are fundamentally built around airspeed, a tailwind means the aircraft needs a higher groundspeed to reach the same critical airspeeds -- lengthening the takeoff ground roll and the landing distance required compared to still air or a headwind, and also degrading the climb gradient measured relative to the ground during the initial climb-out, which is exactly why tailwind limits exist and why even a modest tailwind component can meaningfully erode available performance margins.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff and Landing Performance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A published minimum climb gradient (expressed as a percentage) for a departure procedure represents",
    options: [
      "a value entirely unrelated to obstacle clearance, describing only passenger comfort considerations during the initial climb.",
      "the maximum climb gradient the aircraft is structurally permitted to achieve, serving as an upper limit rather than a minimum requirement.",
      "the minimum rate of climb, relative to distance travelled, that the aircraft must achieve to maintain the required obstacle clearance margin along that specific departure path.",
      "a fixed value identical for every departure procedure at every aerodrome, regardless of surrounding terrain or obstacles.",
    ],
    answer: 2,
    explain:
      "A departure procedure's published climb gradient is a minimum obstacle-clearance requirement -- expressed as a percentage (height gained per unit of horizontal distance) rather than a simple feet-per-minute rate, since gradient properly accounts for groundspeed -- and it's specific to that procedure's actual surrounding terrain and obstacles, meaning different departures (even from the same aerodrome) can carry different required gradients depending on what needs to be cleared along each particular path.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A missed approach procedure's published climb gradient requirement exists to ensure",
    options: [
      "compliance with noise abatement procedures only, with obstacle clearance considered an unrelated, secondary consideration.",
      "the aircraft returns directly to its departure aerodrome rather than proceeding to any alternate, regardless of the reason for the missed approach.",
      "adequate fuel reserve remains for a subsequent approach attempt, a fuel-planning rather than an obstacle-clearance consideration.",
      "adequate obstacle clearance during the climb-out that follows a go-around from that specific approach, in the event the approach cannot be completed to a landing.",
    ],
    answer: 3,
    explain:
      "Just like a departure's climb gradient, a missed approach's published climb gradient is fundamentally about obstacle clearance -- ensuring that if the approach has to be abandoned and the aircraft goes around, its climb-out along the published missed approach path clears the surrounding terrain and obstacles by the required margin, a distinct consideration from fuel planning, routing to a particular aerodrome, or noise abatement.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A circling approach, compared to a straight-in approach to the same runway, generally involves",
    options: [
      "higher minima and a visual maneuvering segment to align with a different runway than the one the instrument approach was flown to, introducing additional obstacle clearance and visual workload considerations.",
      "no visual manoeuvring at all, since a circling approach is flown entirely on instruments from initial approach fix through to touchdown.",
      "lower minima than a straight-in approach, since circling is considered a more precise and less demanding manoeuvre.",
      "identical minima and procedure to a straight-in approach, with 'circling' being purely a naming distinction and no operational difference.",
    ],
    answer: 0,
    explain:
      "Circling is used when the instrument approach's final course doesn't align closely enough with the runway actually being used for landing (often due to wind), requiring the pilot to maneuver visually, within defined protected airspace, to align with that runway after reaching the circling minima -- a genuinely more demanding manoeuvre than a straight-in approach, reflected in higher published minima and requiring the pilot to maintain visual reference with the airport environment throughout the maneuvering segment.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Comparing a non-precision approach to a precision approach, a non-precision approach is flown to",
    options: [
      "no defined minimum altitude at all, since non-precision approaches by definition carry no published minima.",
      "a minimum descent altitude (MDA), a hard floor that must not be descended below without adequate visual reference, rather than a decision altitude/height (DA/DH), which permits a brief descent below it while a landing decision is made.",
      "a decision altitude/height (DA/DH), identical in concept and application to a precision approach's minima.",
      "an altitude that is always numerically lower than a precision approach's DA/DH for the same runway, since non-precision approaches are considered more permissive.",
    ],
    answer: 1,
    explain:
      "The MDA/DA distinction reflects a real procedural difference: an MDA (used for a non-precision approach, without vertical guidance) is a hard floor -- level off there and don't descend further without the required visual reference -- while a DA/DH (used for a precision or APV approach, with vertical guidance) is calculated to allow a brief continued descent below it while the landing decision is made, since the aircraft is already established on a stabilized vertical path when reaching it. Non-precision minima are also typically higher, not lower, than an equivalent precision approach's minima at the same runway, reflecting the reduced guidance available.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Continuous Descent Final Approach (CDFA) technique, applied to a non-precision approach, involves",
    options: [
      "eliminating the concept of an MDA entirely, converting every non-precision approach into a precision approach with a DA/DH.",
      "descending immediately to the MDA upon crossing the final approach fix, then levelling off and maintaining that altitude until either landing or reaching the missed approach point.",
      "flying a continuous, stabilized descent from the final approach fix down to a point near the MDA, rather than descending immediately to the MDA and levelling off to fly a segment at that altitude.",
      "climbing, rather than descending, from the final approach fix to the missed approach point, reversing the normal approach profile.",
    ],
    answer: 2,
    explain:
      "CDFA replaces the older 'dive and drive' technique (descending promptly to the MDA and then flying level at that altitude toward the missed approach point) with a single, continuous, stabilized descent profile, similar in shape to a precision approach's glidepath, down to a point at or near the MDA -- widely favoured because a stabilized continuous descent is considered safer and less workload-intensive than repeated level-off/descend segments, even though the approach itself remains a non-precision procedure with an MDA rather than a DA/DH.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For dispatch purposes, a turbojet aircraft's actual demonstrated landing distance is typically factored by a margin (such as 1.67 times the demonstrated distance) before being compared against landing distance available. This margin exists to",
    options: [
      "replace the need for any wet-runway landing distance factor, since the dispatch factor is considered to already include a wet-runway allowance.",
      "account solely for the aircraft's fuel weight at landing, with no other operational variability considered in the factor at all.",
      "apply only to landings conducted at night, with a factor of exactly 1.0 (no margin) used for all daytime landing distance calculations.",
      "build in a conservative buffer against the difference between an ideal, demonstrated test landing and the more variable performance of an everyday operational landing.",
    ],
    answer: 3,
    explain:
      "A demonstrated landing distance is achieved under ideal, tightly controlled test conditions -- a skilled test crew, an aircraft in top condition, and an approach flown to a precise technique -- which real-world operational landings won't consistently replicate. The dispatch factor builds in a substantial margin against that variability (and often against runway condition, among other things) before the resulting required distance is compared against what's actually available, and it's a separate consideration from, not a replacement for, factors specifically addressing wet or contaminated runway conditions.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In addition to the landing distance calculation performed at dispatch, some operators require a separate in-flight landing distance assessment shortly before arrival. This reassessment is intended to",
    options: [
      "verify that landing distance required, using the actual conditions expected at arrival (weight, wind, runway condition, and configuration), still fits within landing distance available, since those conditions can differ meaningfully from what was assumed at dispatch.",
      "assess only fuel remaining at landing, with runway condition, wind, and configuration excluded from the in-flight assessment.",
      "replace the dispatch landing distance calculation entirely, making the original dispatch figure irrelevant once the in-flight assessment is completed.",
      "apply only to VFR flights, with IFR flights considered exempt from any in-flight landing distance reassessment requirement.",
    ],
    answer: 0,
    explain:
      "Conditions at the actual time of arrival -- updated weight, current wind, reported or forecast runway surface condition, and the actual approach/landing configuration planned -- can differ from what was assumed hours earlier at dispatch, so an in-flight landing distance assessment re-checks that the landing is still within landing distance available under those more current, specific conditions, complementing rather than replacing the original dispatch calculation.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Runway End Safety Area (RESA), provided beyond the end of a runway strip at many aerodromes, is intended to",
    options: [
      "apply only to water aerodromes, with land aerodromes exempt from any RESA-equivalent safety area requirement.",
      "reduce the risk of damage to an aircraft that overruns the runway on landing, or undershoots on approach, by providing a graded, relatively obstacle-free area beyond the runway end.",
      "provide a designated holding area for aircraft awaiting takeoff clearance, unrelated to any overrun or undershoot consideration.",
      "serve as additional usable runway length for takeoff, functioning identically to an extension of TORA.",
    ],
    answer: 1,
    explain:
      "A RESA is a safety buffer, not usable runway: it's a graded, generally obstacle-free area extending beyond the runway strip specifically to reduce the severity of an accident if an aircraft overruns the runway on landing or landing roll, or undershoots slightly on approach -- it isn't credited as additional TORA/TODA/ASDA for takeoff planning, and the concept applies to land aerodromes generally, not exclusively to water aerodromes.",
    reference: "TP 690 Section 5 - Flight Operations, Aerodrome Standards",
  },
];
