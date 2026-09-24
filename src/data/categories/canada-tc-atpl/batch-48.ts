import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 48 -- Section 5: Flight
// Operations, fifth pass. Original questions written from CARs, the
// TC AIM 2026-1, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers CAT II/III approach minima and autoland
// requirements, reactive vs predictive windshear systems, tail
// strike risk on rotation, gust additive to approach speed, landing
// flare technique, crosswind takeoff technique, Low Visibility
// Takeoff RVR requirements, fuel jettison, intersection departures,
// gear-up landing considerations, balked landings, engine-out
// go-arounds, runway excursion terminology, unstabilized approach
// go-around criteria, the unreliable airspeed procedure, and
// high-speed rejected takeoff technique -- topics not yet addressed
// in batches 5, 20, 28, or 38. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_48_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Category II or Category III precision approach, compared to a Category I approach, generally requires",
    options: [
      "no additional aircraft equipment or crew qualification beyond that used for a Category I approach, since the categories differ only in ground lighting configuration.",
      "a higher decision height than Category I, since increasing the category number is understood to correspond to progressively more conservative (higher) minima, a pattern that does not reflect how CAT II and CAT III minima are actually structured.",
      "a lower decision height (or, for CAT III, no decision height at all) along with correspondingly enhanced aircraft equipment, crew qualification, and ground facility standards.",
      "the use of a non-precision approach procedure exclusively, since Category II/III minima apply only to approaches flown without any electronic vertical guidance.",
    ],
    answer: 2,
    explain:
      "Category II and Category III precision approaches use progressively lower decision heights (with Category III potentially having no decision height at all) than Category I, and this reduction is supported by enhanced aircraft equipment (such as autoland or HUD systems), specific crew qualification and training, and more demanding ground facility standards -- the category numbering corresponds to progressively lower, not higher, minima, and CAT II/III remain precision approaches with electronic vertical guidance rather than non-precision procedures.",
    reference: "TC AIM RAC - Approach Categories",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A predictive windshear system, as distinguished from a reactive windshear detection system, is designed to",
    options: [
      "detect windshear only after the aircraft has already flown into it, based on sudden changes in airspeed, groundspeed, or vertical speed -- making it functionally identical to a reactive system.",
      "provide no advance warning whatsoever, since predictive systems are, despite their name, incapable of anticipating windshear before it is physically encountered.",
      "operate exclusively during cruise flight at high altitude, since predictive windshear detection is not applicable during the takeoff or approach phases where windshear is most hazardous.",
      "detect windshear hazards ahead of the aircraft's flight path (typically using forward-looking radar) before they are actually encountered, allowing the crew to avoid or prepare for the hazard proactively.",
    ],
    answer: 3,
    explain:
      "A predictive windshear system, typically using forward-looking radar, detects windshear hazards ahead of the aircraft's flight path before they are encountered, allowing proactive avoidance or preparation -- unlike a reactive system, which alerts only after the aircraft has already flown into shear based on measured changes in airspeed, groundspeed, or vertical speed; predictive systems are specifically valuable during the takeoff and approach phases, where windshear is most hazardous.",
    reference: "TC AIM RAC - Windshear Detection Systems",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Tail strike risk during the takeoff rotation is primarily increased by",
    options: [
      "over-rotation -- raising the nose too quickly or to too high a pitch attitude relative to the aircraft's geometry-limited pitch attitude for the given speed and configuration.",
      "excessive airspeed at the moment of liftoff, since higher speed is associated with reduced pitch attitude rather than an increased tail strike risk.",
      "landing gear extension during the takeoff roll, a configuration change that is never performed and has no bearing on tail strike risk during rotation.",
      "rotating too slowly, since a tail strike is understood to result exclusively from an insufficient rotation rate rather than an excessive one, a claim not supported by how tail strikes are actually documented in service events.",
    ],
    answer: 0,
    explain:
      "Tail strike risk during rotation is primarily increased by over-rotation -- raising the nose too quickly or to too high a pitch attitude relative to the aircraft's geometry-limited attitude for the current speed and configuration -- rather than by rotating too slowly, by a gear extension that does not occur during the takeoff roll, or by higher liftoff airspeed, which is generally associated with a lower, not higher, tail strike risk.",
    reference: "TC AIM RAC - Takeoff Rotation Technique",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A gust additive applied to the target approach speed (commonly expressed as 'Vref plus' a specified number of knots) is used primarily to",
    options: [
      "eliminate the need for any go-around consideration in gusty conditions, since the additive is understood to guarantee a stabilized approach regardless of gust magnitude.",
      "maintain an adequate margin above stall speed and improve controllability in gusty wind conditions, at the cost of a somewhat longer landing distance.",
      "reduce the landing distance required, since flying faster than Vref in gusty conditions is understood to shorten, rather than lengthen, the landing roll.",
      "compensate for a tailwind component only, since a gust additive is applied exclusively when the wind has a tailwind component and never for a headwind gust.",
    ],
    answer: 1,
    explain:
      "A gust additive to the approach speed maintains an adequate stall margin and improves controllability when gusty winds could otherwise cause airspeed to fluctuate close to a normal Vref target, but flying faster than Vref generally increases, rather than decreases, the landing distance required -- the additive is applied based on gust magnitude generally, not exclusively for a tailwind component, and it does not eliminate the need to assess whether a go-around is warranted.",
    reference: "TC AIM RAC - Approach Speed Corrections",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The landing flare (round-out), performed just before touchdown, is intended primarily to",
    options: [
      "increase the aircraft's descent rate sharply just before touchdown, since a higher rate of descent at touchdown is treated here as the specific goal of a correctly executed flare regardless of aircraft type or runway surface condition.",
      "initiate a climb back to pattern altitude, since the flare is understood to be functionally identical to the initial phase of a go-around.",
      "reduce the aircraft's rate of descent from the approach descent rate to a much lower rate suitable for a smooth touchdown, by gradually increasing pitch attitude as the aircraft nears the runway.",
      "retract the landing gear momentarily, a configuration change that is never performed during the flare and has no bearing on its purpose.",
    ],
    answer: 2,
    explain:
      "The landing flare reduces the aircraft's rate of descent from the approach descent rate to a much lower rate suitable for a smooth touchdown, accomplished by gradually increasing pitch attitude as the aircraft nears the runway surface -- it is not intended to increase the descent rate, it is not the same maneuver as the initial phase of a go-around, and it does not involve retracting the landing gear.",
    reference: "TC AIM RAC - Landing Technique",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During a crosswind takeoff, applying aileron control into the wind during the takeoff roll is intended primarily to",
    options: [
      "deliberately bank the aircraft into the wind before rotation, since a banked takeoff attitude is the specific goal of applying aileron into the wind.",
      "increase the aircraft's takeoff distance, since aileron deflection into the wind is understood to add drag specifically to shorten the usable runway.",
      "reduce rudder authority during the takeoff roll, since aileron input into the wind is intended to work against, rather than complement, directional control.",
      "counteract the crosswind's tendency to lift the upwind wing, helping keep the wings level and the aircraft tracking straight down the runway.",
    ],
    answer: 3,
    explain:
      "Applying aileron into the wind during a crosswind takeoff roll counteracts the crosswind's tendency to lift the upwind wing, helping keep the wings level and the aircraft tracking straight down the runway centreline -- it is not intended to produce a banked attitude before rotation, and while it does add some drag, its purpose is directional/lateral control rather than deliberately increasing takeoff distance or working against rudder-based directional control.",
    reference: "TC AIM RAC - Crosswind Takeoff Technique",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Low Visibility Takeoff (LVTO), conducted when reported visibility or RVR is below a specified threshold, generally requires",
    options: [
      "specific aircraft equipment, crew qualification, and a minimum RVR value along the takeoff runway, since takeoff in very low visibility carries risks distinct from those addressed by approach category minima.",
      "no additional requirements beyond those applicable to a normal takeoff in good visibility, since takeoff visibility minima are understood to be identical regardless of prevailing conditions.",
      "the aircraft to be flown by autopilot for the entire takeoff roll, since autoland-equivalent automation is mandatory for any takeoff below standard visibility minima.",
      "the same decision height concept used for a precision approach, since LVTO minima are defined using decision height rather than any measure of runway visibility.",
    ],
    answer: 0,
    explain:
      "A Low Visibility Takeoff generally requires specific aircraft equipment, crew qualification, and a minimum RVR value for the takeoff runway, since departing in very low visibility carries hazards (such as maintaining directional control and rejecting a takeoff safely) distinct from those addressed by approach category minima -- it is not identical to a normal-visibility takeoff, it is not defined using a decision height concept, and it does not require the takeoff roll itself to be flown by autopilot.",
    reference: "TC AIM RAC - Low Visibility Operations",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Fuel jettison (dumping), where the aircraft is equipped for it, is generally used to",
    options: [
      "increase aircraft weight temporarily for landing, since fuel jettison is understood to add, rather than remove, fuel from the aircraft's tanks.",
      "reduce aircraft weight to at or below the maximum landing weight before an earlier-than-planned landing, when time or distance does not otherwise allow enough fuel to be burned off first.",
      "replace the need for an overweight landing inspection entirely, since any aircraft that has jettisoned fuel is automatically exempted from post-landing inspection requirements.",
      "extinguish an engine fire by dumping fuel directly onto the affected engine, a firefighting technique unrelated to the actual purpose of a fuel jettison system.",
    ],
    answer: 1,
    explain:
      "Fuel jettison allows an aircraft equipped for it to reduce weight down to at or below its maximum landing weight before an earlier-than-planned landing, when there is not enough time or distance to burn off the excess fuel through normal engine operation -- it removes rather than adds fuel, an overweight landing inspection may still be required depending on the specific circumstances of the landing, and it is not a firefighting technique.",
    reference: "TC AIM RAC - Fuel Jettison",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An intersection departure -- taking off from a runway entrance partway down its length rather than from the full runway threshold -- generally results in",
    options: [
      "an increased TORA compared to a full-length departure, since starting the takeoff roll partway down the runway is understood to add usable runway length.",
      "the automatic loss of any published clearway or stopway associated with that runway, regardless of which end of the runway those distances apply to.",
      "a reduced Takeoff Run Available (TORA) compared to a full-length departure, which must be accounted for in the takeoff performance calculation.",
      "no change whatsoever to TORA, since declared distances are fixed values independent of the specific point along the runway from which the takeoff roll begins.",
    ],
    answer: 2,
    explain:
      "An intersection departure reduces the Takeoff Run Available compared to a full-length departure, since the usable runway begins partway down its total length -- this reduced TORA (along with any corresponding effect on TODA and ASDA) must be accounted for in the takeoff performance calculation, rather than being ignored, increased, or treated as unrelated to any published clearway or stopway at the departure end.",
    reference: "TC AIM RAC - Intersection Departures",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In the event of a landing with the landing gear (or a portion of it) unable to be extended, standard guidance generally emphasizes",
    options: [
      "avoiding any fuel reduction before landing, since maximum fuel load is considered beneficial rather than hazardous during a gear-up landing.",
      "landing at the highest safe airspeed available, since a faster touchdown speed is considered advantageous specifically for a gear-up landing.",
      "immediately shutting down all aircraft electrical systems before landing, since electrical power is understood to have no bearing on a gear-up landing outcome regardless of which specific systems remain needed for the approach and landing.",
      "burning off or jettisoning fuel to reduce weight and fire risk, briefing the cabin for a possible evacuation, and landing using the technique appropriate to the specific gear configuration.",
    ],
    answer: 3,
    explain:
      "Guidance for a landing gear extension malfunction generally emphasizes reducing weight and fire risk where practical (by burning off or jettisoning fuel), briefing the cabin and preparing for a possible evacuation, and using the landing technique appropriate to the specific gear configuration involved -- it does not call for shutting down all electrical systems, landing at unusually high speed, or retaining maximum fuel load, each of which would work against the safety goals of the situation.",
    reference: "TC AIM RAC - Landing Gear Malfunction",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A balked landing (a go-around initiated after touchdown or very close to the runway surface) presents particular challenges compared to a go-around initiated earlier in the approach because",
    options: [
      "the aircraft is in a low-energy state very close to the ground, requiring prompt and coordinated application of power, pitch, and configuration changes to establish a positive climb.",
      "the aircraft is generally at a higher airspeed and altitude than during an earlier go-around, making the maneuver considerably easier to execute safely.",
      "engine thrust response time becomes entirely irrelevant that close to the ground, since altitude, rather than thrust, is understood to be the only limiting factor.",
      "no configuration change (such as retracting spoilers or adjusting flaps) is ever required during a balked landing, unlike an earlier go-around.",
    ],
    answer: 0,
    explain:
      "A balked landing occurs from a low-energy state very close to the ground -- low altitude, and often reduced airspeed and a landing configuration -- requiring prompt, coordinated application of power, pitch, and configuration changes to establish a positive climb before ground contact becomes a hazard, unlike a go-around initiated earlier in the approach with more altitude and energy available; configuration changes (such as retracting spoilers, if deployed, and adjusting flaps) remain relevant, and engine thrust response time is very much a limiting consideration that close to the ground.",
    reference: "TC AIM RAC - Balked Landing",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A go-around conducted with one engine inoperative on a multi-engine aircraft generally requires particular attention to",
    options: [
      "no special handling considerations at all, since a go-around with one engine inoperative is understood to be handled identically to a normal all-engines go-around.",
      "the asymmetric thrust produced as power is applied on the remaining engine(s), which generates a yawing tendency that must be countered with rudder while establishing the climb.",
      "disregarding the aircraft's single-engine climb performance entirely, since climb performance calculations are understood to apply only to the takeoff phase and not to a go-around.",
      "reducing power on the operating engine to match the inoperative engine, since matching thrust output on both sides is considered the priority during an engine-out go-around.",
    ],
    answer: 1,
    explain:
      "A go-around with one engine inoperative requires particular attention to the asymmetric thrust produced as power is applied on the remaining engine(s), which generates a yawing tendency toward the inoperative engine that must be countered with rudder while establishing the climb -- it is not handled identically to an all-engines go-around, reducing power to match the failed engine would defeat the purpose of the go-around, and single-engine climb performance remains directly relevant to whether the maneuver can be completed safely.",
    reference: "TC AIM RAC - Engine-Out Go-Around",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A runway excursion is generally classified as a 'veer-off' or an 'overrun' depending on whether the aircraft departs the runway",
    options: [
      "on a dry runway (veer-off) or a contaminated runway (overrun), since runway surface condition, rather than direction, is understood to define the distinction.",
      "during the takeoff roll (veer-off) or during the landing roll (overrun), a distinction based entirely on the phase of flight rather than the direction of departure from the runway.",
      "to the side of the runway surface (veer-off) or beyond one of its ends (overrun), a distinction commonly used in safety analysis of runway excursion events.",
      "in daylight (veer-off) or at night (overrun), since the classification is understood to depend on the time of day rather than the direction of the excursion.",
    ],
    answer: 2,
    explain:
      "A runway excursion is generally classified as a veer-off when the aircraft departs to the side of the runway surface, or as an overrun when it departs beyond one of the runway ends -- this distinction is based on the direction of departure from the runway, not on the phase of flight (takeoff vs landing), time of day, or surface condition, any of which could apply to either type of excursion.",
    reference: "TC AIM RAC - Runway Excursions",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "If an approach becomes unstabilized (departing significantly from the defined stabilized approach criteria) beyond the point by which stabilization is required, standard operating guidance generally calls for",
    options: [
      "waiting until reaching the runway threshold before making any decision, since stabilized approach criteria are understood to apply only from the threshold onward.",
      "simply reducing the approach speed further, since speed adjustment alone is considered sufficient to resolve any form of approach instability.",
      "continuing the approach to landing regardless, since a go-around is understood to introduce more risk than continuing an unstabilized approach in virtually all circumstances.",
      "an immediate go-around, since continuing an unstabilized approach to landing is associated with a substantially elevated risk of an unsafe outcome.",
    ],
    answer: 3,
    explain:
      "Standard operating guidance generally calls for an immediate go-around if an approach remains unstabilized beyond the point by which the defined stabilization criteria are required to be met, since continuing an unstabilized approach to landing is strongly associated with an elevated risk of runway excursions and other unsafe outcomes -- simply reducing speed further does not address the broader range of stabilization criteria, and the decision point is well before the runway threshold, not at or after it.",
    reference: "TC AIM RAC - Stabilized Approach Criteria",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The unreliable airspeed procedure, applied when airspeed indications become erratic or clearly incorrect in flight, generally directs the crew to",
    options: [
      "disregard the suspect airspeed indication and instead fly a known, published pitch attitude and thrust/power setting appropriate to the aircraft's weight and phase of flight.",
      "disconnect all electrical power to the affected air data system, a step that is not part of standard unreliable airspeed procedures and would remove other needed information as well.",
      "immediately reduce power to idle regardless of altitude or phase of flight, since idle power is considered the universal correct response to any airspeed indication anomaly.",
      "increase airspeed to the maximum operating limit as quickly as possible, since a higher airspeed is understood to resolve any unreliable airspeed indication.",
    ],
    answer: 0,
    explain:
      "The unreliable airspeed procedure generally directs the crew to disregard the suspect airspeed indication and instead fly a known, published pitch attitude and thrust/power setting appropriate to the aircraft's weight and current phase of flight, using pitch-and-power technique to maintain safe flight until the indication can be diagnosed or resolved -- it does not call for reducing to idle power or accelerating to maximum speed regardless of circumstances, nor for disconnecting electrical power to the air data system.",
    reference: "TC AIM RAC - Unreliable Airspeed Procedure",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During a high-speed rejected takeoff, maximum deceleration is generally achieved by",
    options: [
      "selecting reverse thrust only after the aircraft has slowed to taxi speed, since reverse thrust is understood to be ineffective at any speed above that.",
      "promptly and simultaneously applying maximum wheel braking, deploying ground spoilers, and selecting maximum reverse thrust, rather than applying these deceleration means sequentially.",
      "waiting several seconds after the takeoff is rejected before applying any braking, since an immediate braking response is considered counterproductive to stopping performance under any runway or weight condition.",
      "applying only wheel braking, since ground spoilers and reverse thrust are understood to provide no meaningful additional deceleration during a high-speed rejected takeoff.",
    ],
    answer: 1,
    explain:
      "Maximum deceleration during a high-speed rejected takeoff is achieved by promptly and essentially simultaneously applying maximum wheel braking, deploying ground spoilers (which increase drag and, by dumping lift, increase the weight on the wheels for more effective braking), and selecting maximum reverse thrust -- these deceleration means are applied together and immediately, not sequentially or after a delay, and reverse thrust is generally most effective at higher speeds rather than only near taxi speed.",
    reference: "TC AIM RAC - Rejected Takeoff Technique",
  },
];
