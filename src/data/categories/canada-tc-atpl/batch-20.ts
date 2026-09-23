import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 20 -- Section 5: Flight
// Operations, second pass. Original questions written from standard
// aircraft performance and operating principles and the TP 690
// syllabus (topic headings only, no sample questions). Covers
// V-speeds, takeoff/landing performance factors, and approach/landing
// technique topics not yet addressed in batch 5. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_20_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During a normal transport-category takeoff, the sequence of V-speeds is generally",
    options: [
      "V1 (decision speed), followed by VR (rotation speed), followed by V2 (takeoff safety speed).",
      "VR, followed by V1, followed by V2, with rotation always occurring before the decision speed is reached.",
      "V2, followed by V1, followed by VR, with the takeoff safety speed always being the first one reached.",
      "V1 and VR always occur at exactly the same speed, with V2 reached sometime before either of them.",
    ],
    answer: 0,
    explain:
      "The takeoff roll builds through V1 first -- the last point at which a rejected takeoff can be initiated and safely stopped within the available distance -- then VR, the speed at which rotation is initiated, and finally V2, the minimum safety speed to be achieved by 35 ft above the runway that ensures adequate climb performance (including with an engine failure) for the initial climb segment.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "VMCA and VMCG, both minimum control speeds relevant to a multi-engine aircraft with an engine failure, are distinguished in that",
    options: [
      "VMCA is the minimum control speed in the air (airborne, using aerodynamic controls including bank), while VMCG is the minimum control speed on the ground during the takeoff roll (using rudder and, where applicable, nosewheel steering).",
      "VMCA applies only on the ground, while VMCG applies only after the aircraft becomes airborne, the reverse of the usual convention.",
      "VMCA and VMCG are identical values for any given aircraft type, with the two designations simply reflecting different regulatory jurisdictions.",
      "VMCA applies only to twin-engine aircraft, while VMCG applies only to aircraft with three or more engines.",
    ],
    answer: 0,
    explain:
      "Both speeds describe the minimum speed at which directional control can be maintained following a critical engine failure, but in different regimes: VMCA (airborne) accounts for the aircraft's use of a limited bank angle toward the operating engine(s) along with rudder to maintain control in the air, while VMCG (ground) is specific to the takeoff roll, before rotation, relying on rudder and nosewheel steering (with no bank available) to keep the aircraft on the runway centreline.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Balanced field length, as a takeoff performance concept, refers to a runway length at which",
    options: [
      "the accelerate-stop distance (to reject the takeoff and stop) and the accelerate-go distance (to continue the takeoff on the remaining engine(s) after a failure at V1) are equal.",
      "the takeoff distance and the landing distance for the same aircraft, at the same weight, happen to be numerically identical.",
      "the runway is of equal width along its entire length, with no taper or variation from threshold to threshold.",
      "crosswind and headwind components are perfectly balanced, cancelling each other out for takeoff performance purposes.",
    ],
    answer: 0,
    explain:
      "V1 is chosen, for a balanced-field takeoff, specifically so that the distance needed to reject the takeoff and stop (accelerate-stop distance) equals the distance needed to continue the takeoff on the remaining engine(s) following a failure right at V1 (accelerate-go distance) -- giving the same runway length margin whichever choice the crew has to make at that critical, split-second decision point.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An engine failure recognized after V1 has been reached generally requires the crew to",
    options: [
      "continue the takeoff, since accelerate-stop distance performance data is calculated only up to V1, and stopping safely beyond it is no longer assured.",
      "always reject the takeoff regardless of speed, since V1 marks the point after which rejecting becomes mandatory rather than merely unsafe.",
      "immediately shut down the remaining operating engine(s) as well, to keep the aircraft symmetric during the ground roll.",
      "have no defined procedure at all; the decision is left entirely to individual pilot preference with no performance basis.",
    ],
    answer: 0,
    explain:
      "V1 is calculated as the latest point at which the takeoff can still be safely rejected within the available accelerate-stop distance; the aircraft's takeoff performance data simply doesn't guarantee a safe stop for a rejection initiated after V1, which is exactly why the standard guidance is to continue the takeoff once past it, barring some other overriding consideration (such as clear evidence the aircraft is unable to fly) specifically addressed in company procedures.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Ground effect, encountered when an aircraft is very close to the runway surface, tends to produce an operational effect during landing of",
    options: [
      "a tendency to float, as induced drag is reduced and the aircraft requires less power (or more distance) to decelerate to touchdown speed than it would out of ground effect.",
      "a sudden, sharp increase in stall speed just before touchdown, requiring an increase in approach speed to compensate.",
      "no measurable effect at all on landing distance or handling, regardless of the aircraft's height above the runway.",
      "a strong nose-down pitching moment severe enough to require full aft control input to prevent a hard nosewheel-first touchdown.",
    ],
    answer: 0,
    explain:
      "Very close to the ground, induced drag is reduced as the ground surface interferes with the formation of wingtip vortices -- which is felt operationally as a tendency to 'float,' extending the flare and touchdown point if the pilot doesn't manage the reduction in drag and the resulting excess energy, a well-known effect pilots are specifically trained to anticipate and correct for.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A 'stabilized approach,' as a standard operating concept, generally requires that by a defined point (such as 1 000 ft AGL in instrument conditions), the aircraft be established at approximately the correct approach speed, in the landing configuration, on the correct flight path, with",
    options: [
      "power set appropriately for the approach, and the crew committed to a go-around if these conditions are not met and maintained by that point.",
      "the autopilot disengaged, since a stabilized approach is defined specifically as one flown entirely by hand from that point onward.",
      "flaps and landing gear retracted, to be extended only once visual contact with the runway is established.",
      "no defined power setting requirement at all, since power management is considered irrelevant to approach stability.",
    ],
    answer: 0,
    explain:
      "A stabilized approach bundles several criteria together -- speed, configuration, flight path, and power all appropriately set for landing -- specifically so the remainder of the approach and landing is predictable and low-workload; the concept's real operational teeth come from the commitment that goes with it: if those criteria aren't met (or aren't maintained) by the defined gate, the standard response is to go around rather than attempt to salvage an unstabilized approach.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A go-around, once initiated, is generally considered a committed manoeuvre, meaning that",
    options: [
      "once the decision to go around is made and the manoeuvre begun, it should be flown through to completion rather than reversed partway back toward landing.",
      "a go-around can be safely reversed back into a landing at any point up until the aircraft has climbed above 1 000 ft AGL.",
      "a go-around, once started, legally requires the crew to divert to an alternate aerodrome rather than attempting a subsequent approach.",
      "'committed' refers only to a financial or scheduling consequence, with no operational or safety significance to the term.",
    ],
    answer: 0,
    explain:
      "Reversing a go-around partway through -- trying to salvage the original landing after already committing to the missed approach -- introduces exactly the kind of configuration and energy-state confusion that stabilized-approach and go-around discipline is meant to avoid; the standard guidance is that once the go-around is initiated, it should be flown through (climb, clean up, follow the missed approach or a safe visual go-around path) rather than reversed, with a subsequent approach attempted only as a fresh, separate approach.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Two common techniques for a crosswind landing are the crab (wings-level, nose offset into the wind) and the sideslip (wing-low, opposite rudder) methods. A common combined technique is to",
    options: [
      "fly the approach crabbed into the wind, then transition to a sideslip (wing-low, de-crabbing with rudder) just before touchdown to align the fuselage with the runway.",
      "fly the entire approach and landing in a sideslip, from initial approach through touchdown, without ever using a crab at any point.",
      "fly the entire approach and landing crabbed, touching down with the fuselage still angled across the runway rather than aligned with it.",
      "alternate rapidly between crab and sideslip throughout the approach, changing technique every few seconds regardless of altitude.",
    ],
    answer: 0,
    explain:
      "The combined technique gets the benefit of both methods: crabbing through most of the approach keeps the aircraft comfortably coordinated and on the extended centreline with less sustained control deflection, while transitioning to a sideslip (lowering the into-wind wing and applying opposite rudder to align the fuselage with the runway) in the final moments before touchdown avoids landing with side loads on the gear that a crabbed, non-aligned touchdown would otherwise produce.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "To reduce the risk of encountering wake turbulence from a preceding heavier aircraft, a following aircraft should generally",
    options: [
      "fly at or above the preceding aircraft's flight path, and land beyond its touchdown point, since wake vortices tend to sink and drift below the generating aircraft's flight path.",
      "fly well below the preceding aircraft's flight path, since wake vortices are known to rise steadily above the generating aircraft's path over time.",
      "fly directly along the preceding aircraft's exact flight path and touchdown point, since staying precisely in trail eliminates wake turbulence risk entirely.",
      "disregard flight path positioning entirely, since wake turbulence separation is managed solely through time and distance spacing with no positional technique involved.",
    ],
    answer: 0,
    explain:
      "Wingtip vortices from a preceding aircraft tend to sink below its flight path and can drift with the wind, so staying at or above that aircraft's flight path -- and, on approach, planning to land beyond (not before) its touchdown point -- is a standard technique for reducing wake encounter risk, complementing (not replacing) the formal time/distance separation standards ATC applies.",
    reference: "TP 690 Section 5 - Flight Operations, Wake Turbulence",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An upslope runway (rising in the direction of takeoff) generally has the effect, compared to a level runway, of",
    options: [
      "increasing the takeoff distance required, since climbing the slope while accelerating adds to the energy (and therefore distance) needed to reach takeoff speed.",
      "decreasing the takeoff distance required, since the slope effectively assists acceleration along the takeoff roll.",
      "having no effect on takeoff distance at all, since runway slope is not a factor considered in takeoff performance calculations.",
      "affecting only landing distance, with takeoff distance entirely unaffected by runway slope in any direction.",
    ],
    answer: 0,
    explain:
      "Accelerating uphill takes more energy (and therefore more distance) to reach a given speed than accelerating on level ground, so an upslope runway lengthens the required takeoff distance -- the opposite effect of a downslope runway, which tends to shorten it -- which is why runway slope is one of the standard correction factors applied in takeoff (and landing) performance calculations.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The distinction between the 'gross' and 'net' takeoff flight path, used in obstacle clearance calculations, is that the net flight path",
    options: [
      "is the gross (actual demonstrated) flight path reduced by a specified performance margin, providing a conservative buffer against day-to-day performance variation for obstacle clearance purposes.",
      "is identical to the gross flight path in every respect; 'net' and 'gross' are simply two different names for the same calculated climb profile.",
      "represents a more optimistic climb profile than the gross flight path, adding a performance margin rather than subtracting one.",
      "applies only to single-engine aircraft, with the gross/net distinction having no application to multi-engine transport-category aircraft.",
    ],
    answer: 0,
    explain:
      "The gross flight path is based on the actual climb performance demonstrated during certification testing; the net flight path deliberately reduces that gross performance by a specified margin (accounting for the natural variability between individual aircraft, crews, and conditions) before it's used to assess obstacle clearance, building in a conservative buffer rather than relying on best-case demonstrated performance for a safety-critical calculation.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A reduced (flex, or assumed temperature) thrust takeoff is a technique in which the crew",
    options: [
      "sets takeoff thrust below the engine's full-rated value, when performance margins allow, to reduce engine wear while still meeting all required takeoff performance margins for the actual conditions.",
      "increases takeoff thrust above the engine's full-rated value whenever performance margins are unusually generous, to shorten the takeoff roll further.",
      "reduces thrust only after V1 has been reached, applying full thrust throughout the portion of the takeoff roll before V1.",
      "is prohibited from using any takeoff thrust setting other than the engine's absolute full-rated maximum, regardless of runway length or obstacle margins.",
    ],
    answer: 0,
    explain:
      "Where the runway, weight, and obstacle environment provide more performance margin than is strictly required, a reduced thrust setting (calculated using an assumed temperature higher than actual, or a flex-thrust computation) can still meet all required takeoff performance margins while reducing engine wear and extending time-on-wing -- it isn't used, or available, when actual conditions leave no such margin to spare.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For a multi-engine aircraft, the single-engine (one-engine-inoperative) service ceiling represents",
    options: [
      "the altitude above which the aircraft, operating on its remaining engine(s) following a failure, can no longer sustain a specified minimum rate of climb.",
      "the maximum certified operating altitude of the aircraft with all engines functioning normally, unrelated to any engine-failure scenario.",
      "the altitude at which a single-engine aircraft (as opposed to a multi-engine type) reaches its absolute ceiling, unrelated to multi-engine performance.",
      "an altitude that is always identical to the all-engine service ceiling, since removing one engine is assumed to have no effect on maximum altitude.",
    ],
    answer: 0,
    explain:
      "The single-engine service ceiling is specifically a degraded-performance figure: it marks the altitude beyond which the aircraft, flying on its remaining engine(s) after a failure, can no longer maintain the minimum specified rate of climb -- a meaningfully lower altitude than the all-engine service ceiling, and an important planning consideration for route and terrain clearance in the event of an engine failure at altitude.",
    reference: "TP 690 Section 5 - Flight Operations, Climb Performance",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Compared to a dry runway, landing distance required on a wet runway is generally",
    options: [
      "greater, reflecting the reduced tire-to-runway friction available for braking, and is typically accounted for using a specified wet-runway factor applied to the dry landing distance.",
      "smaller, since a wet surface is assumed to improve tire grip compared to a dry surface under all conditions.",
      "identical to a dry runway, since certified landing distance data does not distinguish between the two surface conditions.",
      "only relevant for turbojet aircraft; propeller-driven aircraft landing distance calculations are assumed unaffected by runway wetness.",
    ],
    answer: 0,
    explain:
      "A wet runway surface reduces the friction available between the tires and the runway, lengthening the distance needed to decelerate to a stop compared to a dry runway -- which is why certified performance data typically applies a specified factor to lengthen the required landing distance for a wet runway, a correction that applies to turbojet and propeller-driven aircraft alike, not to jets exclusively.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Deploying ground spoilers (lift dumpers) immediately after touchdown improves braking effectiveness primarily because they",
    options: [
      "destroy lift generated by the wing, transferring more of the aircraft's weight onto the wheels and increasing the normal force (and therefore available friction) for wheel braking.",
      "generate additional aerodynamic drag that alone accounts for most of the aircraft's deceleration, with wheel braking playing only a minor supporting role.",
      "reduce the aircraft's weight directly, in the same way that fuel jettison or fuel burn reduces weight during flight.",
      "have no effect on braking at all, serving only to provide a visual cue to the crew that the aircraft has landed.",
    ],
    answer: 0,
    explain:
      "Ground spoilers work by 'dumping' the wing's lift right after touchdown -- rather than continuing to hold up much of the aircraft's weight aerodynamically, that weight is transferred onto the landing gear, increasing the normal force pressing the tires onto the runway and, with it, the maximum friction (and therefore braking effectiveness) the wheel brakes and anti-skid system can actually use, which is a distinct mechanism from the modest aerodynamic drag the spoilers also add.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Short/soft-field takeoff technique, as taught for operations from a limited or soft runway surface, generally emphasizes",
    options: [
      "using the maximum available runway length, applying full power before releasing brakes where practical, and minimizing the time spent at low speed on a soft surface to reduce rolling resistance and drag.",
      "beginning the takeoff roll well before the runway threshold, on any adjacent taxiway or apron surface available, to gain extra distance.",
      "delaying full power application until well after brake release, to conserve engine wear on an unimproved surface.",
      "rotating at the highest achievable airspeed, well above the aircraft's normal rotation speed, to ensure a firm, positive liftoff from a soft surface.",
    ],
    answer: 0,
    explain:
      "On a short or soft field, the goal is to use every available foot of runway and to get the aircraft's weight off the soft, high-rolling-resistance surface as early and cleanly as practical -- applying full power before releasing brakes (where the aircraft and surface allow it) to avoid wasting distance building up power during the roll, and generally lifting off and using ground effect to accelerate in cleaner air rather than the reverse (delaying power, or seeking an artificially high rotation speed), both of which would work against minimizing the distance and time spent on a compromised surface.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
];
