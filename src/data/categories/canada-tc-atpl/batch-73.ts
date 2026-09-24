import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 73 -- Section 6: Human
// Factors, eighth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// aviation human factors principles. Covers the OODA loop, the
// giant hand illusion, sunk cost fallacy, the halo effect, working
// memory capacity, the automation workload paradox ("clumsy
// automation"), task-switching cost, flight deck leadership styles,
// systematic visual scanning for collision avoidance, cosmic
// radiation exposure, normalcy bias during evacuation, the purpose
// of the brace position, cockpit smoke/fume effects on cognition,
// skill decay for infrequently practiced procedures, checklist
// interruption error risk, and the runway slope illusion -- topics
// not yet addressed in batches 7, 15, 24, 33, 43, 53, or 63. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_73_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The OODA loop (Observe, Orient, Decide, Act), originally developed to describe rapid decision-making under pressure, is useful to pilots because it emphasizes that",
    options: [
      "a pilot should always act first and observe the results afterward, since action is more important than analysis in an emergency.",
      "orientation refers only to the aircraft's magnetic heading and has no connection to a pilot's mental model of the situation.",
      "decision-making is a continuous, cyclical process in which new information must keep being observed and used to re-orient understanding, rather than a single decision made once and then left unrevisited as the situation evolves.",
      "the four steps must always be completed in strict sequence over a period of several minutes, making the model unsuitable for time-critical decisions.",
    ],
    answer: 2,
    explain:
      "The OODA loop frames decision-making as a continuous cycle -- observing the current situation, orienting (interpreting it against experience and mental models), deciding on a course of action, and acting -- with the loop then repeating as new information arrives; the key insight for pilots is that a decision is not a one-time event but must be continuously revisited as the situation, including the effects of one's own prior actions, keeps changing.",
    reference: "TP 690 -- Human Factors: Aeronautical Decision-Making",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'giant hand' illusion is a disorientation phenomenon in which a pilot",
    options: [
      "loses feeling in the hands due to cold exposure at high altitude, impairing fine control inputs.",
      "sees a hand-shaped shadow cast on the clouds by the aircraft, which can be mistaken for another aircraft, a visual illusion related to shadow and lighting geometry rather than to the vestibular and proprioceptive confusion that actually produces the sensation of being physically restrained during instrument flight.",
      "experiences a strong urge to grip the controls more tightly during turbulence, improving precision.",
      "perceives the aircraft as being held in a fixed attitude or position, as though gripped by an unseen giant hand, and may apply excessive control input in an attempt to overcome the perceived resistance.",
    ],
    answer: 3,
    explain:
      "In the giant hand illusion, a pilot experiencing certain combinations of sustained acceleration and reduced external visual reference can perceive the aircraft as being held fixed by an unseen force, as though gripped by a giant hand -- the danger is that the pilot may respond by applying larger and larger control inputs to try to overcome this perceived resistance, risking an abrupt or excessive attitude change once the aircraft actually does respond.",
    reference: "TP 690 -- Human Factors: Spatial Disorientation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The sunk cost fallacy, as it can affect a pilot's in-flight decision-making, describes the tendency to",
    options: [
      "continue with a course of action -- such as pressing on toward a destination -- because of the time, fuel, or effort already invested in it, rather than basing the decision solely on the current situation and what remains ahead.",
      "abandon a plan immediately whenever any new information becomes available, without weighing its significance.",
      "recalculate fuel requirements more conservatively after any unexpected delay.",
      "always choose the safest possible option available, regardless of any resources already committed, which describes prudent risk management in general terms but does not capture the specific bias toward continuing a course of action purely because of time, fuel, or effort already spent on it.",
    ],
    answer: 0,
    explain:
      "The sunk cost fallacy leads a decision-maker to factor in resources -- time, fuel, effort -- already spent on a course of action, even though those resources are gone regardless of what is decided next; in aviation this can contribute to plan continuation bias, as a pilot presses on toward a destination partly because of how much has already been invested in getting that far, rather than weighing only the current situation and what remains.",
    reference: "TP 690 -- Human Factors: Cognitive Biases",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The halo effect, as a cognitive bias relevant to crew interactions, describes the tendency to",
    options: [
      "become more cautious in decision-making after witnessing a colleague make a serious error.",
      "assume that a person who appears highly competent or confident in one area (such as stick-and-rudder skill) is also reliable and correct in unrelated areas (such as navigation or systems knowledge), leading others to defer to their judgment without independent verification.",
      "trust automated systems more than human judgment purely because the automation is electronic rather than human, a bias toward machines rather than toward a confident-seeming colleague, and therefore a different phenomenon from the halo effect's tendency to generalize a person's competence from one skill area to another.",
      "assign blame to whichever crew member has the least seniority whenever an error occurs.",
    ],
    answer: 1,
    explain:
      "The halo effect leads people to generalize a favourable impression from one trait or area of demonstrated competence to other, unrelated areas -- on a flight deck, this can mean a crew member defers to a colleague's judgment on an unrelated matter simply because that colleague seems highly skilled or confident elsewhere, rather than independently verifying the specific decision at hand.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Working memory -- the mental workspace used to hold and manipulate information actively, such as a clearance being read back or a series of checklist items -- is significant to pilot performance primarily because it",
    options: [
      "is unaffected by fatigue, stress, or interruption, unlike long-term memory.",
      "stores information permanently once an item has been placed into it, functioning identically to long-term memory.",
      "has a limited capacity, generally cited as being able to hold only a small number of discrete items at once, so it is easily overloaded by lengthy instructions, interruptions, or high workload.",
      "has essentially unlimited capacity and duration, meaning information held there is never lost regardless of workload or interruption.",
    ],
    answer: 2,
    explain:
      "Working memory has a well-documented, limited capacity -- often characterized as being able to actively hold only a small number of discrete items at a time -- and information held there decays quickly or is easily displaced by interruption, high workload, or stress; this is why lengthy ATC instructions, multi-step clearances, or checklist items are vulnerable to being partially forgotten, and why techniques like reading back clearances or using written notes help offload the burden on working memory.",
    reference: "TP 690 -- Human Factors: Information Processing",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The phrase 'clumsy automation' describes a recognized design problem in which cockpit automation tends to",
    options: [
      "function identically regardless of flight phase, providing a constant, unvarying level of assistance throughout every flight, an assumption that overlooks how programming, monitoring, and mode-awareness demands actually vary a great deal between low-workload cruise segments and high-workload approach and departure phases.",
      "increase pilot workload only during cruise flight, with no effect on workload during approach or departure.",
      "reduce workload equally and proportionally during every phase of flight, from taxi through landing.",
      "reduce pilot workload during already low-workload phases of flight, such as cruise, while adding programming and monitoring workload during already high-workload phases, such as approach and departure, when attention is most needed elsewhere.",
    ],
    answer: 3,
    explain:
      "'Clumsy automation' refers to the observation that automated systems often provide the most assistance -- and reduce workload the most -- during phases of flight that are already low-workload, such as stable cruise, while demanding significant programming, reconfiguration, and monitoring attention during high-workload phases such as approach, missed approach, or departure, precisely when spare mental capacity is scarcest.",
    reference: "TP 690 -- Human Factors: Automation",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Task-switching cost refers to the finding that, contrary to a common belief in 'multitasking,'",
    options: [
      "human attention generally shifts rapidly between tasks rather than being applied to two tasks simultaneously, and each switch carries a measurable cost in time and accuracy compared to completing one task before starting the next.",
      "the human brain can genuinely process two complex tasks in full parallel with no measurable performance cost.",
      "task-switching cost applies only to physical (motor) tasks and has no effect on purely cognitive tasks such as mental math or memory recall -- a distinction the research on divided attention does not actually support, since switching costs in time and accuracy appear across cognitive as well as motor task pairings alike.",
      "switching between tasks always improves overall performance compared to completing tasks one at a time.",
    ],
    answer: 0,
    explain:
      "What is often called 'multitasking' is, for most complex cognitive tasks, actually rapid switching of attention between tasks rather than true simultaneous processing -- each switch carries a real cost in time and in error rate as the mind re-establishes context for the task being resumed, which is why interruptions during a critical, sequential task such as a checklist or an approach briefing are a recognized source of error.",
    reference: "TP 690 -- Human Factors: Attention and Workload",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Comparing an authoritarian flight deck leadership style to a participative (democratic) style, CRM training generally favours a more participative approach because it",
    options: [
      "eliminates the need for a designated pilot-in-command, since all crew members share equal final decision-making authority at all times.",
      "encourages other crew members to contribute information, ask questions, and raise concerns, which improves shared situational awareness and error trapping, while an overly authoritarian style can suppress input and increase the risk that a subordinate crew member hesitates to speak up.",
      "is required by regulation to be used at all times, with an authoritarian style considered unsafe in every circumstance, including genuine emergencies requiring immediate unilateral action, overstating what CRM training actually requires, since a more directive style remains appropriate when time is critical and immediate unilateral action is genuinely necessary for safety.",
      "removes the captain's authority to make a final decision once other crew members have offered their input.",
    ],
    answer: 1,
    explain:
      "A participative leadership style -- one that actively invites input, questions, and concerns from other crew members -- tends to improve shared situational awareness and increases the chance that an error or a missed consideration is caught before it becomes consequential, whereas an overly authoritarian style can discourage subordinates from speaking up; this does not eliminate the captain's ultimate authority and responsibility for the final decision, particularly when time-critical unilateral action is required.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "For effective visual scanning to detect other traffic during daylight VFR flight, pilots are generally taught to use a systematic technique of",
    options: [
      "focusing exclusively on the centre of the windscreen directly ahead, since peripheral vision provides no useful information for traffic detection, which understates the genuine, if limited, role peripheral vision plays in initially detecting motion and contrast before a target is brought into central vision for identification.",
      "scanning only the area immediately surrounding the intended flight path, since traffic outside that specific corridor poses no collision risk.",
      "scanning the sky in a series of short, overlapping segments, pausing briefly on each segment, rather than sweeping the eyes continuously across the horizon, since the eye only detects detail effectively when it is momentarily stationary.",
      "continuously sweeping the eyes in a smooth, unbroken motion across the entire horizon, since any pause reduces the total area scanned.",
    ],
    answer: 2,
    explain:
      "Because the eye can only bring an area into sharp focus when it is momentarily still, effective visual scanning uses a series of short, overlapping segments with a brief pause on each -- a continuous smooth sweep of the eyes, while covering more area, gives the eye no opportunity to actually resolve detail and is markedly less effective at detecting other aircraft, particularly ones that are small, distant, or on a collision course and therefore showing little relative motion.",
    reference: "TP 690 -- Human Factors: Vision",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Cosmic radiation exposure is a recognized occupational hazard for flight crew primarily because",
    options: [
      "cosmic radiation exposure is highest at low altitude near the equator and decreases steadily with both altitude and latitude.",
      "cosmic radiation exposure is unrelated to altitude or route and depends only on the total number of hours flown, regardless of where those hours are flown, which ignores the substantial variation in dose rate that actually occurs between low-altitude equatorial routes and high-altitude polar routes for the same number of flight hours.",
      "cosmic radiation is entirely blocked by the aircraft's pressurized fuselage, making it a concern only for crews flying unpressurized aircraft.",
      "radiation intensity from cosmic sources increases with altitude and with proximity to the poles, so crew flying long routes at high altitude, particularly over polar regions, accumulate meaningfully more exposure than crew flying lower or at lower latitudes.",
    ],
    answer: 3,
    explain:
      "Cosmic radiation reaching the atmosphere from space increases with altitude, since there is progressively less atmosphere overhead to absorb it, and is further concentrated near the geomagnetic poles because the Earth's magnetic field deflects charged particles toward polar regions; as a result, crew flying long-haul routes at high cruising altitudes -- especially polar routes -- accumulate meaningfully more occupational radiation exposure than crew flying shorter, lower-altitude, or lower-latitude routes.",
    reference: "TP 690 -- Human Factors: Occupational Hazards",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Normalcy bias, as it can affect passengers (and occasionally crew) during the onset of an emergency such as a cabin evacuation, describes the tendency to",
    options: [
      "underestimate the severity of the situation and delay taking protective action, often continuing routine behaviour for longer than the circumstances warrant, in the mistaken belief that things will return to normal.",
      "overreact to minor, non-threatening situations by treating them as full emergencies.",
      "immediately and accurately assess the full severity of any emergency the moment it begins, without any delay in response.",
      "act only on the instructions of the most senior-looking person present, regardless of what that person actually says.",
    ],
    answer: 0,
    explain:
      "Normalcy bias is the tendency to underestimate the seriousness of an unfolding emergency and to delay taking protective action, often because people default to assuming that a situation will resolve itself back to normal -- this is a recognized factor in slow passenger response during cabin evacuations, which is part of why clear, forceful, and repeated crew commands are used to overcome hesitation and prompt immediate action.",
    reference: "TP 690 -- Human Factors: Emergency and Survival",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The brace position, adopted by occupants immediately before an anticipated survivable impact, serves primarily to",
    options: [
      "increase the occupant's overall body height to improve visibility of emergency exits, a description that has no basis in accepted brace position guidance, which is instead concerned with reducing the distance and force involved in secondary impact rather than with sightlines to an exit.",
      "reduce the risk of injury from secondary impact -- the body's own uncontrolled movement striking nearby structure -- by pre-positioning the body against a fixed surface and reducing the distance and force available for that secondary impact to develop.",
      "improve the occupant's ability to see and assess the cabin environment during the impact sequence.",
      "eliminate the need for a properly fastened seatbelt during the impact.",
    ],
    answer: 1,
    explain:
      "During a survivable impact, an unrestrained or poorly positioned body segment (particularly the head and upper torso) can strike nearby structure with significant force -- this secondary impact, not the initial deceleration itself, is a major source of injury; the brace position reduces the distance and therefore the force available for this secondary impact by pre-positioning the body firmly against a fixed surface such as the seat back ahead, while a properly fastened seatbelt remains essential and is not replaced by the brace position.",
    reference: "TP 690 -- Human Factors: Emergency and Survival",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Smoke or toxic fumes in the cockpit, beyond their direct physical hazard, are a significant human factors concern because they can",
    options: [
      "have no effect on cognitive performance as long as the crew are using supplemental oxygen.",
      "affect only long-term health outcomes, with no measurable effect on in-the-moment decision-making during the event itself, a distinction that does not hold up in practice, since toxic gases and the stress of an in-progress emergency both degrade judgment and reaction time well before any long-term health consequences become relevant.",
      "impair cognitive performance and decision-making both directly (through toxic effects on the brain) and indirectly (through the stress, reduced visibility, and urgency of the situation), while also potentially forcing reliance on limited-duration oxygen or smoke protection equipment.",
      "improve crew alertness and focus by triggering a heightened state of arousal.",
    ],
    answer: 2,
    explain:
      "Smoke and toxic fumes in the cockpit degrade pilot performance through multiple pathways at once -- direct toxic and irritant effects on cognition and the airway, reduced visibility of instruments and controls, and the acute stress of an urgent, poorly understood situation -- while also introducing the added task load of donning and managing smoke protection or oxygen equipment, which is why such events are treated as high-priority emergencies requiring an immediate, well-rehearsed response.",
    reference: "TP 690 -- Human Factors: Emergency and Survival",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Skill decay -- the gradual loss of proficiency in a procedure that is rarely performed, such as a specific non-normal or emergency checklist item practised only occasionally in a simulator -- is significant to pilot training primarily because it means that",
    options: [
      "once a procedure has been learned to proficiency during initial training, it will remain fully reliable indefinitely with no further practice required, an assumption recurrent training programs are specifically designed to counter, since skill decay affects infrequently used procedures regardless of how well they were originally learned.",
      "simulator training has no value in maintaining proficiency for procedures that are rarely encountered in actual line flying.",
      "skill decay affects only physical (motor) skills such as manual flying, with no effect on procedural or knowledge-based skills.",
      "infrequently practised skills require deliberate, recurring practice to remain reliable, which is part of the rationale for periodic recurrent training on non-normal and emergency procedures rather than relying on initial training alone.",
    ],
    answer: 3,
    explain:
      "Skills and knowledge that are not regularly used tend to decay over time, and this effect is particularly relevant to non-normal and emergency procedures that a pilot may rarely or never perform in actual line operations -- this is a core rationale for structured recurrent training programs, which deliberately revisit these lower-frequency skills at intervals to counteract decay rather than relying solely on what was learned during initial type training.",
    reference: "TP 690 -- Human Factors: Training and Proficiency",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "An interruption during the performance of a checklist -- such as a radio call or a question from another crew member -- is a recognized source of error primarily because it can cause a crew member to",
    options: [
      "lose their place in the sequence and resume at the wrong point, either skipping an item or repeating one, particularly if no deliberate technique (such as a placeholder or a verbal confirmation of where the checklist was paused) is used to mark the interruption.",
      "automatically restart the entire checklist from the beginning with no risk of error, since interruptions have no measurable effect on checklist accuracy, an overly optimistic assumption that ignores the well-documented tendency for interrupted checklists to resume at the wrong item unless a deliberate placeholder or verbal confirmation technique is used.",
      "transfer responsibility for that checklist item to whichever crew member caused the interruption.",
      "become permanently unable to complete the checklist for the remainder of the flight.",
    ],
    answer: 0,
    explain:
      "Because working memory holding one's place in a sequential procedure is limited and easily displaced, an interruption during checklist performance creates a real risk that the crew member resumes at the wrong point -- skipping an item or unnecessarily repeating one -- unless a deliberate technique is used to mark exactly where the checklist was paused, such as a physical placeholder or a verbal statement of the last completed item before addressing the interruption.",
    reference: "TP 690 -- Human Factors: Procedures",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The runway slope illusion, encountered on approach to a runway with a noticeable upslope, tends to make a pilot perceive that the aircraft is",
    options: [
      "at exactly the correct approach path regardless of runway slope, since visual slope perception is unaffected by runway grade.",
      "higher than it actually is on the approach path, which can lead the pilot to fly a lower-than-normal approach, increasing the risk of landing short.",
      "lower than it actually is on the approach path, which can lead the pilot to fly a higher-than-normal approach, increasing the risk of landing long.",
      "drifting laterally off the runway centreline, with no effect on the perceived vertical approach path.",
    ],
    answer: 1,
    explain:
      "An upsloping runway tends to create the visual illusion that the aircraft is higher on the approach path than it actually is, because the rising runway surface fills more of the pilot's visual field sooner than a level runway would at the same true height -- a pilot reacting to this illusion may fly a lower-than-normal approach path to compensate, increasing the risk of landing short, which is why visual and instrument glide path references remain important even on a clear-weather visual approach.",
    reference: "TP 690 -- Human Factors: Visual Illusions",
  },
];
