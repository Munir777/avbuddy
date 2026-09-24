import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 68 -- Section 5: Flight
// Operations, seventh pass. Original questions written from the
// TP 690 syllabus (topic headings only, no sample questions), the
// CARs, and the TC AIM 2026-1. Covers the improved climb takeoff
// technique, wind component computation, one-step vs two-step
// de-icing/anti-icing, grooved runway pavement, under-rotation's
// effect on takeoff distance, takeoff alternate selection based on
// single-engine flying time, the backside of the power curve, the
// requirement to follow the published missed approach procedure,
// the wet vs standing-water-contaminated runway threshold, the
// reduced flap takeoff technique, reduced crosswind limits on a
// contaminated runway, engine stabilization before brake release,
// the flap load relief system, the pre-takeoff runway alignment
// check, deliberate autothrottle disconnection in gusty conditions,
// and the tailwind component's effect on landing distance -- topics
// not yet addressed in batches 5, 20, 28, 38, 48, or 58. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_68_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An 'improved climb' takeoff technique, used when a takeoff is limited by obstacle clearance rather than by runway length, generally involves",
    options: [
      "delaying rotation well beyond VR in every case, regardless of whether excess runway length is actually available, since the improved climb technique is defined as depending solely on a later rotation point deliberately chosen by the crew, rather than on any increase in the V1, VR, or V2 speed margin achieved through extra runway.",
      "reducing takeoff thrust below the certified minimum in order to shorten the takeoff roll, the opposite of the technique's actual purpose.",
      "using the extra runway length available (beyond the minimum required) to accelerate to a higher V1/VR/V2 speed than the runway-limited minimum, which improves the resulting climb gradient and obstacle clearance margin, at the cost of using more of the available runway.",
      "applying full flap deflection in every case, regardless of the aircraft type's normal takeoff flap setting or the specific obstacle environment.",
    ],
    answer: 2,
    explain:
      "When a takeoff is limited by obstacle clearance requirements rather than by available runway length, an improved climb technique uses the extra runway length available beyond the runway-limited minimum to accelerate to a higher V1/VR/V2 speed; because climb gradient generally improves with additional speed margin above stall (within limits), this can improve the resulting climb performance and obstacle clearance margin, at the cost of using more of the available runway during the takeoff roll.",
    reference: "TP 690 -- Flight Operations: Takeoff Performance",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Given a reported wind direction and speed, and a specific runway heading, the headwind and crosswind components can generally be determined by",
    options: [
      "using the reported wind speed directly as the headwind component in every case, regardless of the angular difference between wind direction and runway heading.",
      "ignoring the angular difference between wind direction and runway heading entirely, since headwind and crosswind components are considered independent of that angle.",
      "using the reported wind speed directly as the crosswind component in every case, regardless of the angular difference between wind direction and runway heading.",
      "resolving the reported wind into two components relative to the runway heading -- one aligned along the runway (the headwind or tailwind component) and one perpendicular to it (the crosswind component) -- using the angular difference between wind direction and runway heading.",
    ],
    answer: 3,
    explain:
      "The reported wind can be resolved into two components relative to the runway heading -- a headwind (or tailwind) component acting along the runway's direction, and a crosswind component acting perpendicular to it -- with the split between the two determined by the angular difference between the wind direction and the runway heading (using trigonometric relationships, a wind component chart, or an approximation such as the 'clock code' method), rather than the full reported wind speed applying entirely to just one component.",
    reference: "TP 690 -- Flight Operations: Takeoff and Landing Performance",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A 'two-step' ground de-icing/anti-icing procedure, as distinguished from a 'one-step' procedure, generally involves",
    options: [
      "first applying a heated de-icing fluid (often Type I) to remove existing frost, ice, or snow contamination, followed by a separate application of a colder, unheated anti-icing fluid (such as Type II or IV) to provide ongoing protection until takeoff, whereas a one-step procedure uses a single fluid application to accomplish both functions.",
      "a procedure used exclusively when no contamination is present on the aircraft at all, with de-icing fluid never actually applied in either step.",
      "applying the identical fluid twice in immediate succession with no change in fluid type between the two applications, and no distinction in purpose between them, since a two-step procedure is defined under this scheme as simply repeating the same de-icing fluid application a second time for additional assurance, with holdover time then calculated from the moment the second, identical application is completed rather than the first.",
      "applying anti-icing fluid first, followed by de-icing fluid second, the reverse of the actual sequence used in a two-step procedure.",
    ],
    answer: 0,
    explain:
      "A two-step de-icing/anti-icing procedure first applies a heated de-icing fluid (commonly Type I) to remove existing frost, ice, or snow already on the aircraft, then applies a separate, generally unheated anti-icing fluid (such as Type II or IV) to provide ongoing protection against further contamination until takeoff, with each fluid's holdover time tracked accordingly; a one-step procedure instead uses a single fluid application intended to accomplish both removal and ongoing protection at once, typically used when contamination is light or absent.",
    reference: "TC AIM RAC -- Aircraft Ground Icing Operations",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Grooved runway pavement, cut into the surface at many aerodromes, is intended primarily to",
    options: [
      "increase the runway's total usable length available for takeoff and landing, a function unrelated to pavement grooving.",
      "provide channels for water to drain away from beneath the tire's contact patch, reducing the risk of dynamic hydroplaning and improving braking friction on a wet runway compared to an equivalent ungrooved surface.",
      "reduce the runway's load-bearing capacity, intentionally limiting the maximum aircraft weight permitted to use that runway.",
      "eliminate the need for any runway friction or contamination reporting, since a grooved runway is defined as immune to any reduction in braking effectiveness.",
    ],
    answer: 1,
    explain:
      "Grooves cut into runway pavement provide channels for water to drain away from beneath a tire's contact patch as it rolls or slides across the surface, which helps maintain tire-to-pavement contact and reduces the risk of dynamic hydroplaning, generally giving a grooved runway better wet-weather braking friction than an equivalent ungrooved surface -- though a grooved runway still requires friction and contamination reporting, since grooving reduces but does not eliminate the risk of reduced braking effectiveness in sufficiently poor conditions.",
    reference: "TP 690 -- Flight Operations: Runway Surface Conditions",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Delaying rotation well beyond the scheduled VR during a takeoff roll, as the counterpart risk to over-rotation, generally results in",
    options: [
      "an increased risk of a tail strike, a risk that is actually associated with over-rotation (rotating too aggressively) rather than under-rotation.",
      "an automatic reduction in the aircraft's takeoff weight, compensating for the delayed rotation, since the flight management computer is defined as recalculating and reducing the certified takeoff weight in real time whenever rotation is delayed beyond the scheduled VR.",
      "the aircraft accelerating further along the runway before becoming airborne, unnecessarily consuming additional runway length and, if carried far enough, potentially eroding the margin remaining to a runway-limited stop point or obstacle clearance requirement.",
      "no effect whatsoever on the distance required to become airborne, since rotation timing is considered unrelated to takeoff distance.",
    ],
    answer: 2,
    explain:
      "Delaying rotation beyond the scheduled VR causes the aircraft to continue accelerating along the runway before becoming airborne, using more runway length than planned; carried far enough, this erodes the margin to a runway-limited stop point (in the event of a subsequent problem) or to the required obstacle clearance climb path, which is why under-rotation is treated as a distinct hazard from over-rotation (which instead raises tail strike risk from an excessive pitch rate or angle during rotation).",
    reference: "TP 690 -- Flight Operations: Takeoff Technique",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For a twin-engine aircraft, a takeoff alternate aerodrome is generally required to be selected such that it can be reached",
    options: [
      "only when the takeoff alternate is located in a different country from the departure aerodrome, since the one-engine-inoperative flying-time requirement is defined as applying exclusively to international diversions rather than to any domestic takeoff alternate.",
      "within a specified flying time based on the aircraft's normal, all-engines-operating cruise performance, with no relationship to one-engine-inoperative performance.",
      "at any distance whatsoever, since no performance-based limit applies to takeoff alternate selection under any circumstances.",
      "within a specified flying time (or distance) from the departure aerodrome based on the aircraft's one-engine-inoperative cruise performance, reflecting the scenario of an engine failure shortly after takeoff that requires a prompt return or diversion.",
    ],
    answer: 3,
    explain:
      "Because a takeoff alternate exists primarily to cover the scenario of an engine failure or other significant problem shortly after departure -- when the destination itself may not be a suitable or reachable option, and diverting back or onward is needed promptly -- it is generally required to be selected such that it can be reached within a specified flying time based on the aircraft's one-engine-inoperative cruise performance, rather than its normal all-engines-operating performance.",
    reference: "TP 690 -- Flight Operations: Flight Planning and Alternates",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Operating on the 'backside of the power curve' (the region of reversed command), where airspeed is below the speed for minimum power required, means that",
    options: [
      "maintaining level flight at a slower airspeed requires MORE thrust or power, rather than less, so a pilot flying at a low, constant airspeed in this region must add power to arrest a developing sink rate, rather than simply raising the nose.",
      "airspeed and required power are entirely unrelated in this flight regime, with power requirements remaining constant regardless of airspeed.",
      "the term applies exclusively to jet aircraft, with no relevance to propeller-driven aircraft flying at a similarly low airspeed.",
      "maintaining level flight at a slower airspeed requires LESS thrust or power than at a higher airspeed, the same relationship that applies on the 'front side' of the power curve.",
    ],
    answer: 0,
    explain:
      "On the 'backside of the power curve,' below the speed for minimum power required, the normal relationship reverses: maintaining level flight at a slower airspeed requires more power, not less, because induced drag is rising faster than the reduction from parasite drag as speed decreases; a pilot flying slowly in this region who allows a sink rate to develop must add power (rather than simply raising the nose, which would only slow the aircraft further and worsen the sink rate) to correct it, a key consideration during a slow, high-drag final approach.",
    reference: "TP 690 -- Flight Operations: Approach and Landing",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Once a missed approach is initiated, standard guidance generally directs the crew to",
    options: [
      "climb straight ahead indefinitely on runway heading in every case, regardless of what the published missed approach procedure actually specifies.",
      "follow the published missed approach procedure's lateral and vertical path (course, altitudes, and turns) precisely, unless ATC issues a specific alternate instruction, since the procedure is designed to ensure terrain and obstacle clearance along that specific path.",
      "descend back toward the missed approach point in every case, rather than climbing away from it, since the published missed approach procedure is defined as always requiring a descent back toward the runway threshold rather than a climb to a safe altitude and obstacle clearance surface.",
      "select any convenient heading and altitude at the crew's discretion, since the published missed approach procedure is considered purely advisory rather than a path to be flown.",
    ],
    answer: 1,
    explain:
      "Because a published missed approach procedure is specifically designed to provide terrain and obstacle clearance along its defined lateral and vertical path, standard guidance directs the crew to fly that published procedure precisely -- the specified course, altitudes, and turns -- once a missed approach is initiated, unless ATC issues a specific alternate instruction (such as a radar vector) superseding it.",
    reference: "TC AIM RAC -- Missed Approach Procedures",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A runway is generally considered 'wet' (rather than contaminated by standing water) for performance purposes when",
    options: [
      "any amount of precipitation whatsoever has fallen in the preceding 24 hours, regardless of how much water, if any, remains on the surface at the time of the takeoff or landing.",
      "the runway surface temperature is below freezing, regardless of whether any liquid water is actually present on the surface, since a wet runway classification is defined by surface temperature alone rather than by the presence or depth of any actual moisture.",
      "the surface is covered by visible moisture or a depth of water up to a specified small threshold (commonly around 3 mm), beyond which the runway is instead considered contaminated by standing water and subject to more conservative performance data.",
      "the runway has been recently cleared of snow, regardless of whether any residual moisture remains on the surface.",
    ],
    answer: 2,
    explain:
      "A runway is generally classified as 'wet' when covered by visible moisture or a water depth up to a specified small threshold (commonly cited as around 3 mm); beyond that threshold, standing water is deep enough that the runway is instead classified as contaminated by standing water, a more severe category generally requiring more conservative performance data due to the significantly increased hydroplaning risk that deeper standing water presents.",
    reference: "TC AIM RAC -- Runway Surface Condition Reporting",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A reduced flap takeoff technique, as distinguished from a reduced (flex/assumed-temperature) thrust takeoff, generally involves",
    options: [
      "reducing engine thrust below the certified takeoff thrust setting, a description that actually applies to a reduced/flex thrust takeoff rather than a reduced flap takeoff.",
      "increasing flap deflection beyond the normal takeoff setting in every case, the opposite of what a reduced flap setting actually means.",
      "eliminating the use of flaps entirely on every takeoff, regardless of aircraft type, runway length, or obstacle environment, since a reduced flap takeoff is defined as using no flap deflection at all rather than a smaller deflection than the normal takeoff setting, and is therefore expected to always shorten rather than lengthen the resulting takeoff roll.",
      "selecting a smaller flap deflection than the normally used takeoff setting (where performance permits), which can improve climb gradient (useful where obstacles are a limiting factor) or reduce airframe noise, at the cost of requiring a longer takeoff roll than the standard flap setting would.",
    ],
    answer: 3,
    explain:
      "A reduced flap takeoff selects a smaller flap deflection than the normally used takeoff setting, where performance data permits it, generally trading a longer required takeoff roll for an improved climb gradient (useful when obstacle clearance rather than runway length is the limiting factor) or reduced airframe noise -- a distinct technique and trade-off from a reduced/flex thrust takeoff, which instead reduces engine thrust while using the normal flap setting.",
    reference: "TP 690 -- Flight Operations: Takeoff Performance",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An aircraft's demonstrated (maximum) crosswind component, as published in the AFM for takeoff and landing, is generally",
    options: [
      "reduced from its dry-runway value when the runway is wet or contaminated, reflecting the reduced directional control margin available with degraded braking and cornering friction under those conditions.",
      "a value that applies only to landing, with no equivalent crosswind limitation applicable to takeoff.",
      "increased from its dry-runway value when the runway is wet or contaminated, the opposite of the actual relationship.",
      "entirely unaffected by runway surface condition, applying identically whether the runway is dry, wet, or contaminated, since the demonstrated crosswind component is defined as a fixed aerodynamic limit rather than one tied in any way to available tire friction.",
    ],
    answer: 0,
    explain:
      "Because directional control during the takeoff or landing roll depends partly on tire friction against the runway surface, an aircraft's maximum permitted crosswind component is generally reduced from its dry-runway demonstrated value when the runway is wet or contaminated, reflecting the reduced friction (and correspondingly reduced directional control margin) available under those conditions -- operators commonly publish separate, more conservative crosswind limits for wet and contaminated runway conditions.",
    reference: "TP 690 -- Flight Operations: Takeoff and Landing Performance",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Before releasing brakes for takeoff, allowing engines to stabilize at takeoff thrust (rather than advancing thrust levers and releasing brakes simultaneously) is generally recommended, particularly on a slippery or contaminated runway, primarily because",
    options: [
      "it has no operational benefit whatsoever and is recommended purely as an arbitrary company preference with no safety rationale.",
      "it allows the crew to confirm engine parameters are normal and symmetric before the takeoff roll begins, and avoids the aircraft surging forward asymmetrically or unpredictably while thrust is still increasing and directional control authority may be more limited.",
      "it is required specifically to reduce engine wear, with no relationship to directional control or engine parameter verification.",
      "it eliminates the need for the crew to monitor engine instruments at any point during the subsequent takeoff roll, since a stabilized start is defined as a full substitute for continued engine parameter monitoring for the remainder of the takeoff roll and initial climb once brakes have been released.",
    ],
    answer: 1,
    explain:
      "Stabilizing engines at takeoff thrust before releasing brakes allows the crew to confirm that engine parameters are normal and reasonably symmetric before committing to the takeoff roll, and helps avoid the aircraft surging forward asymmetrically or unpredictably while thrust is still increasing -- a particular concern on a slippery or contaminated runway, where directional control authority (from rudder and nosewheel steering, aided by forward speed) is more limited early in the roll and any asymmetric thrust response is harder to counter.",
    reference: "TP 690 -- Flight Operations: Takeoff Technique",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A flap (or slat) load relief system, fitted to some aircraft, is designed to",
    options: [
      "automatically extend the flaps fully whenever airspeed drops below the aircraft's stalling speed, regardless of the flap lever's selected position.",
      "control landing gear retraction based on flap position, a function unrelated to flap structural load protection, since a load relief system is defined as being wired into the landing gear retraction logic rather than into the flap or slat drive system itself.",
      "automatically and partially retract the flaps (or slats) if airspeed increases beyond a specified limit with flaps extended, protecting the flap structure from aerodynamic loads that could otherwise exceed its design limits.",
      "lock the flaps in a fixed position immediately after takeoff, preventing any further flap movement for the remainder of the flight.",
    ],
    answer: 2,
    explain:
      "A flap (or slat) load relief system automatically and partially retracts the flaps or slats if airspeed increases beyond a specified limit while they are extended (which could occur, for example, during an inadvertent overspeed with flaps out), protecting the flap structure from aerodynamic loads that could otherwise exceed its design limits, and generally re-extends the flaps automatically once airspeed returns to within the normal range.",
    reference: "TP 690 -- Flight Operations: Flight Control Protections",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "As part of the pre-takeoff sequence, cross-checking the aircraft's heading indication (or compass) against the runway's published magnetic heading before commencing the takeoff roll is intended primarily to",
    options: [
      "confirm that ATC has issued a takeoff clearance, a function unrelated to heading or runway verification, since the heading cross-check is defined as an electronic clearance confirmation step performed independently of any comparison against the runway's published heading.",
      "calculate the aircraft's takeoff weight, a function unrelated to heading or runway alignment.",
      "verify the aircraft's current fuel quantity, a function unrelated to heading or runway alignment.",
      "help detect and prevent a takeoff being commenced from the wrong runway, or from the correct runway but with a significant heading indicator error, either of which could otherwise go unnoticed until well into the takeoff roll or after becoming airborne.",
    ],
    answer: 3,
    explain:
      "Cross-checking the aircraft's heading indication (or standby compass) against the runway's published magnetic heading before beginning the takeoff roll helps the crew catch either a wrong-runway takeoff (lining up on a runway other than the one intended or cleared) or a significant heading indicator error, both of which have been significant contributing factors in past accidents and incidents and might otherwise go unnoticed until well into the takeoff roll or after becoming airborne.",
    reference: "TP 690 -- Flight Operations: Takeoff Technique",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Some operators recommend deliberately disconnecting the autothrottle/autothrust system and flying the approach with manual thrust control in gusty wind conditions primarily because",
    options: [
      "a pilot manually anticipating and responding to gusts can sometimes provide smoother, more proactive thrust adjustments than an autothrottle system reacting to airspeed changes only after they have already occurred.",
      "the autothrottle system is defined as incapable of functioning at all in any wind condition other than a calm, steady wind.",
      "regulations universally prohibit autothrottle use in any wind condition exceeding a specified gust factor, leaving operators no discretion in the matter.",
      "disconnecting the autothrottle in gusty conditions has no effect whatsoever on approach speed control, making the choice purely a matter of personal preference with no operational basis.",
    ],
    answer: 0,
    explain:
      "In gusty conditions, some operators train and recommend manually flying thrust rather than relying on the autothrottle, on the reasoning that an experienced pilot can sometimes anticipate a developing gust and adjust thrust proactively, whereas an autothrottle system generally reacts to airspeed deviations only after they have already begun to develop, which some crews and operators consider can result in less smooth or less timely thrust response during rapidly gusting conditions on approach.",
    reference: "TP 690 -- Flight Operations: Approach and Landing Technique",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A tailwind component during landing generally has a disproportionately large effect on landing distance required, compared to the distance reduction gained from an equivalent headwind component, primarily because",
    options: [
      "a tailwind and a headwind of equal magnitude always have precisely equal and opposite effects on landing distance, with no disproportionate relationship between the two.",
      "landing distance is strongly related to the square of the aircraft's groundspeed at touchdown, so a given tailwind component (which increases groundspeed relative to a no-wind case) increases the required distance by a larger margin than the same headwind component (which decreases groundspeed) reduces it.",
      "landing distance depends solely on indicated airspeed at touchdown, making groundspeed, and therefore wind component, entirely irrelevant to the required distance.",
      "landing distance actually decreases with a tailwind component and increases with a headwind component, the reverse of the true relationship, since groundspeed at touchdown is defined in this context as varying inversely with the wind component rather than directly with it in the way kinetic energy considerations would actually predict.",
    ],
    answer: 1,
    explain:
      "Because landing distance is strongly related to the square of groundspeed at touchdown (the kinetic energy that must be dissipated during the landing roll), a tailwind component -- which increases groundspeed relative to a still-air case for the same approach airspeed -- increases required landing distance by a disproportionately larger margin than an equivalent headwind component (which decreases groundspeed) reduces it, which is why tailwind limitations for landing are generally treated conservatively rather than as a simple mirror image of headwind benefit.",
    reference: "TP 690 -- Flight Operations: Landing Performance",
  },
];
