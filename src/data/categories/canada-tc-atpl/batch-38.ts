import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 38 -- Section 5: Flight
// Operations, fourth pass. Original questions written from standard
// aircraft performance and operating principles and the TP 690
// syllabus (topic headings only, no sample questions). Covers
// accelerate-go distance, second segment climb, contaminated
// runway performance, autoland categories, braking/deceleration
// devices, and rejected takeoff decision-making not yet addressed
// in batches 5, 20, or 28. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_38_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Accelerate-go distance, one of the performance distances underlying balanced field length calculations, is the distance required for an aircraft to",
    options: [
      "accelerate from a standing start to its normal, all-engines-operating rotation speed, with no engine failure or continued-takeoff scenario involved at all.",
      "land and come to a complete stop, a landing-distance rather than a takeoff-distance concept despite the word 'accelerate' in its name.",
      "experience an engine failure at V1, continue the takeoff on the remaining engine(s), and reach a specified height (such as 35 ft) above the runway.",
      "accelerate to V1, reject the takeoff, and come to a complete stop, making accelerate-go distance simply another name for accelerate-stop distance.",
    ],
    answer: 2,
    explain:
      "Accelerate-go distance specifically models the continue-takeoff scenario: an engine failure occurring right at V1, followed by continuing the takeoff on the remaining engine(s) and climbing to a specified height above the runway -- the counterpart to accelerate-stop distance (which models rejecting the takeoff at V1 and stopping), and balanced field length is the runway length at which these two distances are made equal by the choice of V1, rather than accelerate-go being simply another name for accelerate-stop, an all-engines-operating-only concept, or a landing distance.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The second segment climb requirement, applied to a multi-engine transport aircraft with one engine inoperative after takeoff, specifies a minimum climb gradient that must be achieved",
    options: [
      "with all engines operating normally, a requirement that becomes irrelevant in any scenario involving an actual engine failure.",
      "only once the aircraft has reached its final, clean cruise configuration, making the second segment the final rather than an early stage of the departure profile.",
      "with the landing gear still extended throughout the entire segment, since gear retraction is specifically deferred until well beyond the second segment.",
      "with the landing gear retracted, from the point flaps/slats remain in the takeoff configuration up to a specified height (such as 400 ft AGL), before flap retraction begins.",
    ],
    answer: 3,
    explain:
      "The second segment climb is a specifically defined, gear-up phase of the one-engine-inoperative takeoff/climb profile -- beginning once the gear is retracted (following the initial, gear-still-extending first segment) and continuing with flaps/slats still in the takeoff configuration up to a specified height, commonly 400 ft AGL, before flap retraction (which begins the subsequent segment) -- and it carries a minimum required climb gradient precisely because it's the OEI (one-engine-inoperative) case that's performance-limiting, not the all-engines-operating case.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Takeoff performance calculated for a runway contaminated with standing water or slush, compared to a dry runway, generally results in",
    options: [
      "a longer required takeoff distance and, at sufficient contaminant depth, a possible speed penalty (such as a reduced V1) due to both reduced tire friction and the retarding/displacement drag of the contaminant itself.",
      "a performance penalty that applies only to landing distance calculations, with takeoff distance considered entirely unaffected by any runway contamination, a description inconsistent with the takeoff distance and V1 penalties contamination actually produces.",
      "no meaningful change in required takeoff distance at all, since contaminant type and depth are not considered relevant factors in takeoff performance calculations.",
      "a shorter required takeoff distance, since standing water or slush is generally assumed to improve tire friction compared to a dry runway surface.",
    ],
    answer: 0,
    explain:
      "Standing water, slush, or similar contamination degrades takeoff performance through two combined effects: reduced tire-to-runway friction (affecting acceleration and any rejected-takeoff stopping distance) and the direct retarding/displacement drag the contaminant itself exerts on the tires and airframe as the aircraft accelerates through it -- together lengthening the required takeoff distance and, particularly at greater contaminant depth, potentially requiring a reduced (more conservative) V1 or other performance adjustment, a real and significant penalty rather than an improvement, a non-factor, or something confined only to landing performance.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Comparing 'fail-passive' and 'fail-operational' autoland system designs, a fail-operational system is distinguished in that it",
    options: [
      "is identical in every functional respect to a fail-passive system, with the two terms simply describing alternate names for the same underlying design.",
      "retains sufficient redundancy to complete an automatic landing even after a single system failure, whereas a fail-passive system, upon a failure, simply disconnects (reverting to manual control) without an unsafe or uncommanded manoeuvre.",
      "is, by definition, incapable of performing any automatic landing at all, making 'fail-operational' a term describing a system permanently disabled after any failure.",
      "requires the pilot to manually complete the landing following any autoland engagement, with 'fail-operational' having no meaningful connection to redundancy or automatic landing capability, a description inconsistent with fail-operational systems' actual redundancy-based ability to complete an automatic landing after a single failure.",
    ],
    answer: 1,
    explain:
      "This distinction is central to CAT III autoland capability: a fail-passive system, upon experiencing a single failure, is designed to disconnect cleanly and safely (without producing a hazardous or uncommanded deviation), leaving the pilot to complete the landing manually -- while a fail-operational system carries enough redundancy (commonly triplicated critical systems) that it can continue and complete the automatic landing itself even after a single failure, which is why fail-operational capability underpins the lowest-minima (such as CAT IIIB/IIIC) autoland operations, rather than the two design philosophies being identical or 'fail-operational' meaning a system that's disabled after any failure.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A bounced landing, where the aircraft touches down and then unintentionally becomes airborne again briefly, is generally best handled by",
    options: [
      "applying maximum braking and reverse thrust while still airborne during the bounce, before the aircraft has actually returned to the runway surface.",
      "continuing to hold the same pitch attitude and control inputs used just before the bounce occurred, without any further correction or reassessment.",
      "recognizing the bounce promptly and, depending on its severity, either smoothly completing the landing with appropriate pitch control or executing a go-around rather than forcing the aircraft back onto the runway.",
      "immediately applying full nose-down control input to force the aircraft back onto the runway as quickly as possible, regardless of the bounce's severity, a reaction inconsistent with the judgment-based, severity-dependent response an actual bounced landing calls for.",
    ],
    answer: 2,
    explain:
      "A bounced landing calls for a prompt, judgment-based response rather than a single fixed reaction: a small, minor bounce may be smoothly absorbed and the landing completed with appropriate (generally cautious, not aggressive) pitch control, but a more significant bounce is often best handled with a go-around rather than attempting to force the aircraft back onto the runway, which risks a hard, potentially damaging secondary touchdown, a tail strike, or a porpoising sequence; forcing the nose down, holding a fixed pre-bounce input regardless of what's happening, or applying braking/reverse while still airborne are all recognized as hazardous mishandling of the situation rather than sound technique.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An aircraft that lands at a weight exceeding its maximum certified landing weight (for example, due to a return to land shortly after a heavy-fuel departure) generally requires",
    options: [
      "an immediate replacement of the landing gear assembly as a mandatory, blanket requirement following any and every overweight landing, regardless of severity.",
      "no special consideration at all, since maximum landing weight is treated as an advisory rather than a structurally meaningful limitation, a characterization inconsistent with the structural inspection an overweight landing actually requires.",
      "the aircraft to be permanently withdrawn from service, since any overweight landing is treated as an unrecoverable, career-ending event for the airframe.",
      "an overweight landing inspection, in accordance with the manufacturer's guidance, to check for any structural effects before the aircraft is returned to service.",
    ],
    answer: 3,
    explain:
      "Maximum landing weight is a genuine structural limitation (reflecting the loads the airframe and landing gear are certified to absorb at touchdown), so an overweight landing -- sometimes necessary in an emergency requiring an immediate return to land without time or ability to reduce weight first -- generally triggers a manufacturer-specified overweight landing inspection to check for any resulting structural effects before the aircraft returns to normal service, rather than being treated as advisory-only, automatically career-ending for the airframe, a mandatory full gear replacement in every case, or something that can simply wait until the next routine check.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Noise Abatement Departure Procedures (NADP), where published for an aerodrome, are designed primarily to",
    options: [
      "reduce noise exposure for communities near the aerodrome by specifying a particular climb/thrust-reduction profile for the initial departure, while still meeting required obstacle clearance and safety margins.",
      "apply exclusively to arriving aircraft, with NADP having no application whatsoever to the departure phase of flight despite the name.",
      "increase the aircraft's takeoff distance required, an operational cost that NADPs accept with no corresponding noise-reduction benefit at all, a description inconsistent with NADP profiles being designed to meet standard obstacle clearance requirements without any added distance penalty.",
      "replace the need for any obstacle clearance calculation during departure, since NADP profiles are assumed to guarantee terrain clearance without a separate check.",
    ],
    answer: 0,
    explain:
      "NADPs specify a defined departure profile -- typically involving a particular initial climb technique and a specified point or altitude for a thrust reduction and/or flap retraction -- crafted to reduce noise exposure for communities near the aerodrome, while still being designed to meet the applicable obstacle clearance and overall safety requirements for that departure, rather than trading away safety margin for noise reduction, applying only to arrivals, or eliminating the separate need for an obstacle clearance calculation.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Pilot-reported (or ATC-relayed) runway braking action, using terms such as good, good-to-medium, medium, medium-to-poor, poor, or nil, provides",
    options: [
      "information relevant only to aircraft takeoff performance, with braking action terminology considered inapplicable to the landing phase of flight.",
      "a qualitative assessment of actual braking effectiveness experienced on the runway, useful alongside (but distinct from) any numerical friction measurement such as a CRFI report.",
      "a purely numerical, precisely calibrated friction coefficient, making braking action reports functionally identical in form to a CRFI report rather than a qualitative descriptor.",
      "a standardized measure of ambient outside air temperature, with 'braking action' being an unrelated, misleading name for what is actually a temperature report.",
    ],
    answer: 1,
    explain:
      "Braking action reports are qualitative, experience-based assessments (from a preceding aircraft's crew, or from airport/ATC sources) of how the runway surface actually felt for braking -- good, medium, poor, nil, and the intermediate terms -- giving pilots practical, real-world information that complements (rather than duplicates) a more objective, numerical friction measurement like a CRFI report; the terminology is specifically about braking/deceleration effectiveness on landing (and applicable to a rejected takeoff too), not about air temperature, and it isn't itself a precise numerical coefficient.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The Global Reporting Format (GRF) for runway surface condition, using a Runway Condition Code (RwyCC) on a defined 0-6 scale, was introduced primarily to",
    options: [
      "apply exclusively to dry, uncontaminated runways, with the Runway Condition Code system specifically excluding any application to wet or contaminated surfaces, a scope inconsistent with the RwyCC's actual design to cover the full range of runway surface conditions.",
      "replace braking action reports entirely, with pilot-reported braking action terminology no longer used anywhere the Global Reporting Format has been adopted.",
      "provide a more standardized, consistent method of assessing and reporting runway surface contamination across different airports and jurisdictions, reducing variability between differing older reporting methods.",
      "eliminate the need for any pilot performance calculation using contaminated runway data, since the RwyCC value alone is treated as a complete substitute for a landing distance calculation.",
    ],
    answer: 2,
    explain:
      "The GRF and its associated Runway Condition Code were developed internationally to bring more consistency and objectivity to runway surface condition assessment and reporting -- reducing the variability that existed between different airports' and countries' older, less standardized methods -- and the RwyCC is an input to, not a replacement for, the pilot's own landing distance/performance calculation, it applies to the full range of runway surface conditions (dry through heavily contaminated), and it's generally used alongside, not as a full replacement for, pilot-reported braking action information.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The missed approach point (MAP) for a given instrument approach is generally defined as",
    options: [
      "a single, universal point identical for every instrument approach at every aerodrome worldwide, regardless of the specific approach procedure being flown.",
      "the point at which the aircraft physically touches down on the runway, making 'missed approach point' simply another name for the runway touchdown zone.",
      "the point along the approach at which the landing gear must first be extended, an aircraft-configuration rather than a procedural decision point, a description inconsistent with the MAP's actual definition as a procedural go-around decision point.",
      "the specific point along the approach (defined by a fix, timing, or DA/DH) beyond which the approach must not be continued without the required visual reference.",
    ],
    answer: 3,
    explain:
      "The MAP is procedure-specific: it's defined by whatever method that particular approach uses (a fix, a timed distance from the final approach fix, a DME distance, or, for a precision/APV approach, simply reaching the DA/DH) to mark the latest point at which the approach may be continued toward landing without the required visual reference -- beyond that point (or upon reaching DA/DH without adequate visual reference), the missed approach must be executed; it's neither a single universal point across all approaches, a gear-extension cue, nor the same thing as the runway touchdown zone itself.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A visual approach, as distinguished from a contact approach, generally requires",
    options: [
      "the pilot to have the destination aerodrome (or the preceding aircraft, if applicable) in sight and to proceed visually, but subject to standard visibility and cloud clearance requirements that a contact approach can relax.",
      "the aircraft to remain on an instrument approach procedure throughout, with 'visual' in the name specifically prohibiting any deviation from the published instrument procedure track, a restriction inconsistent with how a visual approach actually departs from strict adherence to that published track.",
      "ATC to retain no role at all in either a visual approach or a contact approach, with both procedures conducted entirely outside any ATC clearance or involvement.",
      "the exact same weather minima and requirements as a contact approach, making the two terms functionally interchangeable with no meaningful distinction.",
    ],
    answer: 0,
    explain:
      "A visual approach is an ATC-authorized procedure in which the pilot, having the aerodrome (or preceding traffic to follow) in sight, proceeds visually rather than flying a full instrument approach, but it's still generally subject to specified visibility and cloud clearance requirements -- a contact approach, by contrast, is a pilot-requested (not ATC-initiated) procedure that can be authorized in some cases with visibility below what a visual approach would otherwise require, provided the pilot can remain clear of cloud and navigate to the airport by visual reference; both procedures do involve ATC authorization/clearance, and a visual approach specifically departs from strict adherence to a published instrument procedure track, rather than requiring it.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An autobrake system, where fitted, allows the crew to",
    options: [
      "disable wheel braking entirely for the duration of the landing roll, relying exclusively on aerodynamic drag and reverse thrust to bring the aircraft to a stop, a description inconsistent with autobrake's actual function as a pre-selected wheel-braking deceleration system.",
      "select a pre-determined deceleration rate to be applied automatically after touchdown (or during a rejected takeoff), rather than relying solely on manual brake pedal application for that deceleration.",
      "apply braking only while the aircraft is still airborne, with the system specifically prohibited from functioning at any point after touchdown.",
      "control the aircraft's engine thrust setting during the landing roll, an engine-management rather than a braking-related function despite the name.",
    ],
    answer: 1,
    explain:
      "Autobrake systems let the crew pre-select a target deceleration rate (often from a menu such as low/medium/high, or a specific RTO setting) that the system then applies automatically once triggered (typically at touchdown, or immediately upon a rejected takeoff), reducing crew workload and providing consistent, repeatable deceleration compared to manual braking alone -- it doesn't disable wheel braking (autobrake is itself a wheel-braking function), doesn't control engine thrust, and functions specifically during the ground roll after touchdown (or during an RTO), not while airborne.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Reverse thrust's effectiveness as a stopping force during the landing roll",
    options: [
      "is entirely unaffected by runway surface condition, providing an identical stopping contribution on a dry, wet, or contaminated runway alike.",
      "remains completely constant regardless of groundspeed, from the moment of touchdown until the aircraft comes to a full stop.",
      "decreases as groundspeed decreases, since reverse thrust's stopping effect depends on airflow through the engine, making it comparatively less effective at low speed than wheel braking.",
      "increases as groundspeed decreases, making reverse thrust progressively more effective the slower the aircraft is moving during the landing roll.",
    ],
    answer: 2,
    explain:
      "Because reverse thrust's stopping contribution depends on airflow through the engine (redirected forward to oppose the aircraft's motion), that contribution diminishes as the aircraft slows down, which is why reverse thrust is comparatively most valuable at higher speed early in the landing roll and why wheel braking becomes the dominant stopping force as speed decreases -- the opposite of reverse thrust becoming more effective at low speed, and it isn't a constant, speed-independent effect; reverse thrust also retains a real stopping-force benefit on a wet or contaminated runway, where wheel braking effectiveness itself may be reduced, so its relative contribution is not unaffected by runway condition either.",
    reference: "TP 690 Section 5 - Flight Operations, Landing Performance",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In-flight speed brakes (spoilers), as distinguished from ground spoilers deployed after touchdown, are used primarily to",
    options: [
      "function only once the aircraft is on the ground, making 'in-flight speed brakes' a misleading name for a device with no genuine airborne application at all.",
      "control the aircraft's yaw axis exclusively, a rudder-like function unrelated to drag, lift, descent, or deceleration.",
      "increase lift while airborne, a function opposite to their actual purpose, which is fundamentally about increasing drag rather than lift.",
      "increase drag (and, depending on design, reduce lift) while airborne, helping the aircraft descend more steeply or decelerate without a large change in pitch attitude or engine thrust.",
    ],
    answer: 3,
    explain:
      "Deployed in flight, speed brakes/spoilers increase drag (and, by disrupting airflow over the affected wing area, typically reduce lift somewhat as well), giving the crew a way to increase rate of descent or decelerate the aircraft without needing a large pitch change or relying solely on reducing engine thrust -- a genuinely airborne-use device, distinct from (though often the same physical panels as) the ground spoilers deployed at touchdown to dump lift and improve braking; they aren't a lift-increasing device, aren't ground-only despite sharing hardware with the ground spoiler function, and have nothing to do with yaw control.",
    reference: "TP 690 Section 5 - Flight Operations, Approach and Landing",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Derated takeoff thrust, as distinguished from a reduced (flex, assumed-temperature) thrust takeoff, involves",
    options: [
      "selecting a lower permanently certified thrust rating for that takeoff, rather than using a temperature-based method applied to the engine's full rated thrust.",
      "a technique usable only when actual conditions are colder than standard, with derated thrust considered unusable in any other ambient temperature condition.",
      "using exactly the same assumed-temperature method as a flex thrust takeoff, making 'derate' simply an alternate name for flex thrust with no meaningful distinction, a claim inconsistent with derate's use of a separately certified thrust rating rather than an assumed-temperature calculation.",
      "increasing available thrust beyond the engine's normal full-rated takeoff thrust, the opposite of what a derated thrust selection actually accomplishes.",
    ],
    answer: 0,
    explain:
      "Derate and flex/assumed-temperature thrust are related but distinct reduced-thrust techniques: a derated takeoff selects a genuinely lower, separately certified thrust rating for the engine (which can also carry its own associated limits), while a flex/assumed-temperature takeoff instead uses the engine's full rated thrust but computes a reduced thrust setting by entering an assumed temperature higher than the actual one into the thrust-setting calculation -- two different mechanisms for achieving a similar operational goal (reduced engine wear/lower thrust when full-rated thrust isn't needed for the conditions and weight involved), rather than the same technique under two names, an increase in available thrust, or something usable only in cold conditions.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Below V1, a crew's decision to reject a takeoff is generally guided by a broader range of considerations than after V1 is reached, because",
    options: [
      "the specific reasons that can justify stopping the aircraft are identical before and after V1, with V1 itself carrying no practical bearing on the decision-making threshold at all.",
      "below V1 there is adequate runway remaining to safely stop for a wider range of malfunctions or abnormal indications, whereas beyond V1 the takeoff is generally continued except for a narrower set of very serious situations.",
      "below V1 a rejected takeoff is prohibited entirely, with any abnormal indication before V1 requiring the takeoff to be continued regardless of its nature or severity, a restriction inconsistent with below-V1 being the more permissive regime for rejecting a takeoff, not a prohibited one.",
      "after V1 is reached, rejecting the takeoff becomes the standard, preferred response to any abnormal indication, the reverse of the actual established practice.",
    ],
    answer: 1,
    explain:
      "V1's core significance is precisely this shift in decision-making: below V1, there's generally enough runway remaining to safely reject for a wider range of triggers (various warnings, unusual indications, and so on), but as speed approaches and passes V1, continuing the takeoff becomes the standard, safer course of action for all but a narrow set of very serious situations (fire, indication the aircraft is unsafe or unable to fly, and similar) -- because runway remaining to stop safely diminishes while runway/speed needed to safely continue and fly away is essentially becoming, or has become, available; rejecting below V1 isn't prohibited (it's actually the more permissive regime), the decision criteria genuinely do shift around V1 rather than staying identical, and continuing (not rejecting) is the standard post-V1 response.",
    reference: "TP 690 Section 5 - Flight Operations, Takeoff Performance",
  },
];
