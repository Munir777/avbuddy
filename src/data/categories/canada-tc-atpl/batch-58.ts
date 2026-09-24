import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 58 -- Section 5: Flight
// Operations, sixth pass. Original questions written from CARs, the
// TC AIM 2026-1, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers accelerate-stop distance, turbulence
// penetration technique, engine-failure drift-down, emergency rapid
// descent, non-normal checklist philosophy, differential braking,
// low-speed vs high-speed RTO, ditching considerations, autoland
// rollout, takeoff briefings, early missed approach, autothrottle
// disconnect, non-precision step-down fixes, runway selection
// criteria, LAHSO, and pavement classification -- topics not yet
// addressed in batches 5, 20, 28, 38, or 48. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_58_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Accelerate-stop distance, one of the performance distances underlying balanced field length calculations, is the distance required for an aircraft to",
    options: [
      "accelerate to V1, experience a rejected takeoff decision at that point, and come to a complete stop using maximum braking and other available deceleration means.",
      "accelerate from a standing start to its normal takeoff (rotation) speed and lift off, with no stopping distance included in the calculation at all.",
      "decelerate from its normal cruise speed to a complete stop after landing, a distance unrelated to any takeoff-phase performance calculation.",
      "accelerate to V1 and then continue the takeoff to a safe screen height, the same distance already represented by accelerate-go distance.",
    ],
    answer: 0,
    explain:
      "Accelerate-stop distance is the distance required for an aircraft to accelerate to V1, experience a rejected takeoff decision at that point, and come to a complete stop using maximum braking and other available deceleration means -- it is distinct from accelerate-go distance (which covers continuing the takeoff after an engine failure at V1) and from a landing-phase stopping distance, and it explicitly includes both the acceleration and the stopping portions of the maneuver.",
    reference: "TC AIM RAC - Balanced Field Length",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In severe turbulence, standard guidance generally recommends that a pilot",
    options: [
      "prioritize maintaining a roughly constant pitch attitude over precisely holding altitude or airspeed, accepting some variation in both to avoid over-stressing the airframe with abrupt control inputs.",
      "aggressively chase and correct every altitude and airspeed deviation immediately, since precise altitude and airspeed control is considered the top priority regardless of turbulence severity.",
      "increase airspeed to the maximum operating limit, since flying faster is understood to reduce, rather than increase, structural loading in severe turbulence.",
      "disconnect the autopilot and hand-fly using large, rapid control inputs to counter every gust individually as it is felt.",
    ],
    answer: 0,
    explain:
      "In severe turbulence, standard guidance generally recommends prioritizing a roughly constant pitch attitude over precisely holding altitude or airspeed, accepting some variation in both rather than making abrupt, large control inputs to chase every deviation, which could itself add structural loading -- flying at an appropriate turbulence penetration speed (not the maximum operating limit) and avoiding large, rapid control inputs are both part of this approach.",
    reference: "TC AIM RAC - Turbulence Penetration Technique",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A drift-down procedure, applied following an engine failure on a multi-engine aircraft at cruise altitude, involves",
    options: [
      "a controlled descent, at an appropriate speed, to a lower altitude that the aircraft can sustain on its remaining engine(s), taking into account terrain and obstacle clearance along the route.",
      "an immediate, uncontrolled descent at maximum rate with no consideration given to terrain or obstacle clearance along the way.",
      "maintaining the original cruise altitude indefinitely, since drift-down procedures are understood to apply only during the takeoff and initial climb phases, not at cruise altitude.",
      "shutting down all remaining operative engines as well, since a drift-down procedure is understood to apply only when the aircraft has no operative engines remaining at all.",
    ],
    answer: 0,
    explain:
      "A drift-down procedure involves a controlled descent, at an appropriate speed, to a lower altitude the aircraft can sustain on its remaining operative engine(s) following an engine failure at cruise altitude, with terrain and obstacle clearance along the route taken into account -- it is not an uncontrolled maximum-rate descent disregarding terrain, it specifically applies at cruise altitude (not only during takeoff/climb), and it is planned around the aircraft's remaining operative engines, not a scenario with no engines left running.",
    reference: "TC AIM RAC - Drift-Down Procedure",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Following a rapid decompression, an emergency (rapid) descent is generally initiated primarily to",
    options: [
      "reach a lower altitude with adequate ambient oxygen and cabin pressure as quickly as is safely practical, reducing the physiological risk to occupants from continued exposure to a low cabin pressure.",
      "reach the aircraft's maximum operating altitude as quickly as possible, the opposite of the actual objective following a rapid decompression.",
      "conserve fuel by minimizing engine power during the descent, with occupant physiological safety understood to be a secondary consideration to fuel economy.",
      "allow the crew to complete a normal approach and landing without any urgency, since a rapid decompression is understood to require no expedited descent at all.",
    ],
    answer: 0,
    explain:
      "An emergency (rapid) descent following a rapid decompression is initiated primarily to reach a lower altitude with adequate ambient oxygen and cabin pressure as quickly as is safely practical, reducing the physiological risk to occupants from continued exposure to low cabin pressure -- the objective is a lower, not higher, altitude, occupant safety takes priority over fuel conservation in this situation, and the urgency of the descent is a defining feature of the emergency response, not something to be treated casually.",
    reference: "TC AIM RAC - Emergency Descent",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Non-normal (abnormal/emergency) checklists commonly distinguish between memory items (recalled and actioned immediately, without reference to the printed checklist) and read-and-do items, primarily because",
    options: [
      "memory items address the most time-critical initial actions, where immediate response is important enough that recalling and acting from memory, rather than first locating the checklist, is considered appropriate.",
      "there is no meaningful distinction between the two categories, with all non-normal checklist items treated identically regardless of urgency.",
      "read-and-do items are always more time-critical than memory items, the reverse of the actual rationale for distinguishing between the two categories.",
      "memory items are used exclusively during normal, routine flight phases, with no application to any non-normal or emergency situation.",
    ],
    answer: 0,
    explain:
      "Memory items address the most time-critical initial actions in a non-normal situation, where immediate response is important enough that recalling and acting from memory (rather than first locating and reading the checklist) is considered appropriate, while read-and-do items are worked through methodically using the printed or displayed checklist -- this is a meaningful, deliberate distinction based on urgency, not an arbitrary or reversed one, and memory items specifically apply to non-normal situations rather than routine flight phases.",
    reference: "TC AIM RAC - Non-Normal Checklist Philosophy",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Differential braking, applying more braking force to one main gear than the other, is a technique used primarily to",
    options: [
      "assist directional control on the ground, such as during a crosswind landing rollout or when other directional control means (like nose wheel steering or rudder) are insufficient.",
      "increase the aircraft's overall stopping distance, since differential braking is understood to reduce, rather than assist, the aircraft's ability to decelerate.",
      "replace the need for nose wheel steering entirely on every aircraft type, making nose wheel steering an unnecessary system wherever differential braking is available.",
      "control the aircraft's pitch attitude during the landing flare, a function unrelated to directional (yaw) control on the ground.",
    ],
    answer: 0,
    explain:
      "Differential braking -- applying more braking force to one main gear than the other -- is used primarily to assist directional control on the ground, such as during a crosswind landing rollout or when other directional control means like nose wheel steering or rudder are insufficient -- it is a directional (yaw) control technique, not primarily intended to increase stopping distance, and it complements rather than universally replaces nose wheel steering.",
    reference: "TC AIM RAC - Differential Braking",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Compared to a low-speed rejected takeoff, a high-speed rejected takeoff generally presents",
    options: [
      "greater risk, since less runway remains available to stop and the aircraft's kinetic energy is significantly higher, demanding a more immediate and decisive response.",
      "lower risk, since a high-speed rejected takeoff is understood to leave more runway remaining and less kinetic energy to dissipate than a low-speed rejected takeoff.",
      "identical risk to a low-speed rejected takeoff in every respect, since speed at the point of rejection is understood to have no bearing on the risk involved.",
      "no risk at all, since any rejected takeoff above a certain minimum speed is understood to be entirely free of overrun or directional control risk.",
    ],
    answer: 0,
    explain:
      "A high-speed rejected takeoff generally presents greater risk than a low-speed rejected takeoff, since less runway remains available to stop and the aircraft's kinetic energy at the higher speed is significantly greater, demanding a more immediate and decisive crew response -- this is precisely why the decision to reject is treated with particular seriousness as the aircraft accelerates toward V1, rather than risk being unrelated to speed or effectively absent above some threshold.",
    reference: "TC AIM RAC - Rejected Takeoff Risk",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Ditching, a planned or forced landing on water, generally requires consideration of factors including",
    options: [
      "sea state and swell direction, wind direction, and aircraft configuration and technique appropriate to landing on water rather than a runway surface.",
      "no special consideration at all, since ditching is understood to be handled using exactly the same technique and considerations as a normal runway landing.",
      "runway surface condition exclusively, a factor that, by definition, does not apply to a landing conducted on open water rather than a paved runway.",
      "only the aircraft's fuel quantity, with sea state, swell, and wind direction all understood to be irrelevant to a ditching's outcome.",
    ],
    answer: 0,
    explain:
      "Ditching requires consideration of factors including sea state and swell direction, wind direction, and an aircraft configuration and technique appropriate to landing on water rather than a runway surface -- it is not handled identically to a normal runway landing, runway surface condition is inapplicable by definition to a water landing, and sea state, swell, and wind direction are all genuinely significant to how a ditching is conducted and its likely outcome.",
    reference: "TC AIM RAC - Ditching",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An autoland system's rollout mode, active after touchdown, is designed to",
    options: [
      "provide automatic directional guidance to keep the aircraft tracking the runway centreline during the landing roll, particularly valuable in low-visibility conditions.",
      "automatically apply maximum reverse thrust and braking immediately at touchdown, a function that rollout mode is not designed to perform.",
      "have no function after touchdown at all, since autoland is understood to disengage completely and instantaneously the moment the aircraft touches down.",
      "control the aircraft's pitch attitude during the landing flare, a function that occurs before, rather than after, touchdown and rollout mode's active period.",
    ],
    answer: 0,
    explain:
      "An autoland rollout mode, active after touchdown, provides automatic directional guidance to help keep the aircraft tracking the runway centreline during the landing roll, which is particularly valuable in low-visibility conditions where visual cues are limited -- it is a genuine post-touchdown function (autoland does not simply disengage instantaneously at touchdown), it is a directional guidance function rather than a braking/reverse-thrust command, and flare pitch control occurs before, not during, the rollout phase.",
    reference: "TC AIM RAC - Autoland Rollout Mode",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A pre-takeoff briefing conducted by the flight crew, covering items such as the planned rejected takeoff criteria and the intended action following an engine failure, is intended primarily to",
    options: [
      "establish a shared understanding between crew members of how key decisions and actions will be handled, supporting a faster and more coordinated response if an abnormal situation actually occurs.",
      "satisfy a purely administrative record-keeping requirement, with no genuine operational value in the event an abnormal situation actually develops during the takeoff.",
      "replace the need for any non-normal checklist, since a verbal pre-takeoff briefing is understood to be a full substitute for the printed or displayed checklist.",
      "apply only when weather conditions are poor, with no value or expectation of a briefing being conducted on a takeoff in good weather.",
    ],
    answer: 0,
    explain:
      "A pre-takeoff briefing establishes a shared understanding between crew members of how key decisions and actions -- such as rejected takeoff criteria and the response to an engine failure -- will be handled, supporting a faster and more coordinated response if an abnormal situation actually occurs, which is genuine operational value rather than a purely administrative formality; it does not replace the non-normal checklist, and it is standard practice regardless of whether the weather happens to be good or poor.",
    reference: "TC AIM RAC - Takeoff Briefing",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "If a decision to go around is made well before reaching the missed approach point (for example, due to an unstabilized approach recognized early), the crew generally should",
    options: [
      "execute the go-around promptly rather than waiting to reach the missed approach point, since there is no requirement to continue an approach that has already been judged unsafe to continue.",
      "continue the approach all the way to the missed approach point regardless of the earlier decision, since a go-around is understood to be permitted only once that specific point has been reached.",
      "land regardless of the earlier decision, since once an approach has been commenced, a go-around is understood to no longer be an available option at any point.",
      "wait for ATC's explicit permission before initiating any go-around, since a go-around is understood to require prior ATC authorization in every case before it can be initiated.",
    ],
    answer: 0,
    explain:
      "If a go-around decision is made well before reaching the missed approach point -- for example, due to an unstabilized approach recognized early -- the crew should generally execute the go-around promptly rather than waiting to reach that specific point, since there is no requirement to continue an approach already judged unsafe; a go-around remains a genuinely available option throughout the approach, and while ATC is normally informed, prior explicit ATC permission is not a precondition for initiating a go-around when safety requires it.",
    reference: "TC AIM RAC - Early Missed Approach",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "If the autothrottle/autothrust system is disconnected or malfunctions, the crew is generally expected to",
    options: [
      "manually control thrust to maintain the desired airspeed and flight path, monitoring engine parameters directly rather than relying on automated thrust adjustment.",
      "accept whatever thrust setting was last commanded with no further adjustment, since manual thrust control is understood to be unavailable once autothrottle is disconnected.",
      "shut down the affected engine(s) entirely, since an autothrottle malfunction is understood to always require an engine shutdown regardless of the actual nature of the malfunction.",
      "immediately declare an emergency in every case, since any autothrottle disconnection is understood to constitute an emergency condition regardless of the circumstances.",
    ],
    answer: 0,
    explain:
      "If the autothrottle/autothrust system is disconnected or malfunctions, the crew is generally expected to manually control thrust to maintain the desired airspeed and flight path, monitoring engine parameters directly rather than relying on automated adjustment -- manual thrust control remains available and is the expected response, an autothrottle issue does not automatically require shutting down an engine, and it does not automatically constitute a declared emergency in every case.",
    reference: "TC AIM RAC - Autothrottle Disconnect",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "On a traditional (non-CDFA) non-precision approach, a step-down fix procedure allows the aircraft to",
    options: [
      "descend to a specified minimum altitude at a defined point along the approach, then level off and continue at that altitude until a subsequent fix or the missed approach point, if visual reference has not been established.",
      "continuously descend along a single, constant angle from the final approach fix all the way to the runway, with no level-off segment at any point.",
      "climb, rather than descend, at each successive fix along the approach, the reverse of the descent progression actually associated with a step-down fix procedure.",
      "bypass the missed approach point entirely, since a step-down fix procedure is understood to have no defined missed approach point of its own.",
    ],
    answer: 0,
    explain:
      "A step-down fix procedure on a traditional non-precision approach allows the aircraft to descend to a specified minimum altitude at a defined point, then level off and continue at that altitude until reaching a subsequent fix or the missed approach point, if visual reference has not yet been established -- this is distinct from the continuous, constant-angle descent used in a CDFA technique, it involves descent (not climb) at each fix, and it still has a defined missed approach point like other non-precision approaches.",
    reference: "TC AIM RAC - Step-Down Fix Procedure",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "When more than one runway is available at an aerodrome, runway selection for takeoff or landing generally takes into account factors including",
    options: [
      "wind direction and speed relative to each runway, runway length and surface condition, and the type of approach available, among other operational considerations.",
      "only the runway's compass heading number, with wind, length, surface condition, and available approach type understood to be irrelevant to runway selection.",
      "a strict, unvarying preference for the lowest-numbered runway at every aerodrome, regardless of wind or any other operational factor.",
      "the time of day exclusively, with runway length, surface condition, and wind understood to have no bearing on which runway is actually selected.",
    ],
    answer: 0,
    explain:
      "Runway selection, when more than one is available, generally takes into account wind direction and speed relative to each runway, runway length and surface condition, and the type of approach available, among other operational considerations -- it is not reduced to the runway's numbering alone, there is no fixed preference for the lowest-numbered runway regardless of conditions, and time of day alone does not determine runway selection independent of these other factors.",
    reference: "TC AIM RAC - Runway Selection",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Land and Hold Short Operations (LAHSO), where authorized, require a landing aircraft to",
    options: [
      "stop before reaching a specified hold-short point on the runway (such as an intersecting runway or taxiway), rather than using the full runway length, to allow simultaneous use of the intersecting surface by another aircraft.",
      "always use the full available runway length for landing, since LAHSO is understood to have no effect whatsoever on how much of the runway a landing aircraft actually uses.",
      "hold short of the runway threshold entirely, landing on a taxiway instead of the assigned runway, which is not what LAHSO actually involves.",
      "apply only to departing aircraft, with LAHSO understood to have no application to a landing aircraft at all despite its name referencing landing operations.",
    ],
    answer: 0,
    explain:
      "Land and Hold Short Operations require a landing aircraft to stop before reaching a specified hold-short point on the runway -- such as an intersecting runway or taxiway -- rather than using the full runway length, allowing simultaneous use of the intersecting surface by another aircraft or vehicle; the aircraft still lands on the assigned runway (not a taxiway), and LAHSO is specifically about how a landing (not departing) aircraft's use of the runway is limited.",
    reference: "TC AIM RAC - Land and Hold Short Operations",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Pavement Classification Number (PCN), published for a runway or taxiway, is compared against an aircraft's Aircraft Classification Number (ACN) primarily to",
    options: [
      "assess whether a given aircraft can safely and repeatedly use that pavement without causing excessive structural damage or accelerated deterioration.",
      "determine the runway's compass heading and physical length, parameters unrelated to pavement strength and instead published separately from PCN/ACN data.",
      "assess the runway's surface friction characteristics exclusively, a braking-related parameter unrelated to the pavement's structural load-bearing capacity.",
      "calculate the aircraft's maximum permissible takeoff weight for performance purposes, a calculation unrelated to pavement strength and instead based on runway length and other performance factors.",
    ],
    answer: 0,
    explain:
      "Comparing an aircraft's ACN against a pavement's published PCN helps assess whether that aircraft can safely and repeatedly use the pavement without causing excessive structural damage or accelerated deterioration -- this is a pavement load-bearing strength comparison, distinct from runway heading/length data, from surface friction/braking action assessment, and from the takeoff performance weight calculations based on runway length and other performance factors.",
    reference: "TC AIM AGA - Pavement Classification Number",
  },
];
