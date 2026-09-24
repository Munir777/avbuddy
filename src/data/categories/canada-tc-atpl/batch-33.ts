import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 33 -- Section 7: Human
// Factors, fourth pass. Original questions written from standard
// aviation human factors and physiology principles and the TP 690
// syllabus (topic headings only, no sample questions). Covers the
// sterile cockpit rule, structured fitness-for-duty and decision-
// making tools, circadian/sleep concepts, additional cognitive
// biases and illusions, and decompression sickness not yet
// addressed in batches 7, 15, or 24. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_33_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'sterile cockpit' concept, restricting non-essential conversation and activity during critical phases of flight, is intended primarily to",
    options: [
      "reduce distraction during the phases of flight (such as taxi, takeoff, climb, approach, and landing) when crew workload is highest and errors are most consequential.",
      "apply exclusively during cruise flight, when crew workload is generally at its lowest and most conversation therefore occurs.",
      "eliminate all crew communication for the entire duration of every flight, regardless of phase or workload.",
      "apply only to communication with air traffic control, with crew-to-crew conversation considered unaffected by the concept.",
    ],
    answer: 0,
    explain:
      "Sterile cockpit procedures specifically target the high-workload, safety-critical phases of flight -- below a defined altitude, or during taxi, takeoff, initial climb, approach, and landing -- restricting conversation and activity to only what's essential for safely operating the aircraft during those phases, precisely because that's when a distraction is most likely to lead to a missed callout, checklist item, or other consequential error; it isn't applied during lower-workload cruise flight, doesn't eliminate all communication everywhere, and covers crew-to-crew conversation, not just ATC communication.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The IMSAFE mnemonic, used by pilots for a personal self-assessment before flight, prompts a review of",
    options: [
      "Illness, Medication, Stress, Alcohol, Fatigue, and Eating, as personal factors that could affect fitness to fly.",
      "Instruments, Maps, Speed, Altitude, Fuel, and Engine, as a purely mechanical pre-flight aircraft checklist unrelated to the pilot's own condition.",
      "Ice, Moisture, Snow, Atmospheric pressure, Fog, and Electrical storms, as a purely weather-focused checklist unrelated to the pilot's own fitness.",
      "Insurance, Maintenance, Schedule, Airworthiness, Fuel cost, and Estimated time, as an administrative and financial rather than a personal fitness checklist.",
    ],
    answer: 0,
    explain:
      "IMSAFE is a self-assessment mnemonic aimed squarely at the pilot's own condition rather than the aircraft or the weather -- Illness, Medication, Stress, Alcohol, Fatigue, and Eating (nutrition/hydration) -- prompting a pilot to honestly consider whether any of these personal factors could compromise safe performance before accepting a flight, distinct from any purely mechanical, weather, or administrative checklist.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The DECIDE model, one of several structured aeronautical decision-making frameworks, generally guides a pilot through steps including",
    options: [
      "detecting a change, estimating the need to act, choosing a desirable outcome, identifying actions, doing the necessary action, and evaluating the effect of that action.",
      "a single step only -- deciding immediately -- with no further structured process of detection, evaluation, or follow-up built into the model.",
      "a purely mechanical aircraft systems checklist, with no cognitive or decision-making component involved at all.",
      "steps applicable only to emergencies involving engine failure, with no broader application to other in-flight decisions.",
    ],
    answer: 0,
    explain:
      "DECIDE is a structured cycle -- Detect a change, Estimate the need to respond, Choose a desired outcome, Identify actions to achieve it, Do the necessary action, and Evaluate the effect -- meant to give a pilot a repeatable process for working through a developing situation rather than reacting impulsively, and it's a general decision-making framework applicable to a wide range of in-flight situations, not a single-step reaction, a systems checklist, or an engine-failure-specific procedure.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'window of circadian low' -- the period, generally in the early morning hours, when the body's circadian rhythm drives alertness and performance to their lowest natural point -- is significant to fatigue risk management because",
    options: [
      "flights or duty periods scheduled during this window carry an elevated fatigue-related performance risk, independent of how much sleep a crew member has had beforehand.",
      "it only affects crew members who have crossed multiple time zones, with no relevance to a pilot flying entirely within their home time zone.",
      "it occurs at a different time of day for every individual, making it impossible to generally describe or plan around at all.",
      "it has no measurable effect on alertness or performance, functioning as a largely theoretical concept without practical fatigue risk management application.",
    ],
    answer: 0,
    explain:
      "The window of circadian low reflects the body's underlying biological rhythm, which continues to drive alertness down during its low period even for a crew member who slept adequately and never crossed a time zone -- which is exactly why fatigue risk management schemes give particular weight to duty periods that fall within this window, treating it as an elevated-risk period in its own right, separate from (though compounded by) sleep debt or jet lag.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Sleep inertia -- the grogginess, disorientation, and impaired performance that can follow waking from sleep -- is a particular concern for a pilot who",
    options: [
      "wakes from an in-flight rest period (such as a controlled rest or planned nap) and must quickly return to full alertness and performance for flight duties.",
      "has been continuously awake for the entire duty period, since sleep inertia specifically requires an extended period of prior wakefulness to occur.",
      "is affected by sleep inertia only after a full night's sleep, with a short nap producing no comparable effect at all.",
      "experiences sleep inertia as a purely psychological phenomenon with no measurable effect on actual cognitive or motor performance.",
    ],
    answer: 0,
    explain:
      "Sleep inertia is the transitional grogginess and reduced cognitive/motor performance that occurs in the period immediately after waking, and it can follow even a short nap -- which is precisely why a pilot returning from a controlled rest period or in-flight nap needs a planned recovery interval before resuming full duties, rather than being expected to perform at full capacity the instant they wake; it isn't limited to waking from a full night's sleep, doesn't require prior extended wakefulness to occur, and produces real, measurable performance effects rather than being purely subjective.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A microsleep is best described as",
    options: [
      "a brief, involuntary episode of sleep, typically lasting only seconds, that can occur even while a fatigued person appears to still be awake and active.",
      "a deliberately planned, brief rest period taken with the crew's knowledge and the aircraft's autopilot engaged, functionally identical to a controlled rest.",
      "a permanent, ongoing state of reduced alertness lasting an entire duty period, rather than a brief, discrete episode.",
      "a condition affecting only ground personnel, with no possibility of occurring to a pilot during flight.",
    ],
    answer: 0,
    explain:
      "A microsleep is an involuntary, typically very brief (seconds-long) lapse into actual sleep that can intrude on a fatigued person without their full awareness, sometimes with eyes still open -- a genuinely hazardous, unplanned event, in contrast to a deliberately planned and crew-coordinated controlled rest period, and it's a discrete, brief episode rather than a sustained state, capable of affecting anyone performing a monotonous, fatiguing task, pilots included.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The Yerkes-Dodson relationship between arousal (stress) level and task performance is generally described as",
    options: [
      "an inverted-U shape, in which performance improves as arousal rises from a low level, peaks at a moderate level, and then declines again as arousal becomes excessive.",
      "a straight-line relationship, in which performance continues to improve indefinitely as arousal or stress level increases without limit.",
      "entirely flat, indicating that arousal or stress level has no measurable effect on task performance whatsoever.",
      "a relationship in which performance is always best at the very lowest possible level of arousal, declining steadily as arousal increases from that point.",
    ],
    answer: 0,
    explain:
      "The Yerkes-Dodson relationship is classically described as an inverted U: too little arousal (boredom, under-stimulation) yields poor performance, a moderate level of arousal tends to produce the best performance, and excessive arousal (overwhelming stress) again degrades performance -- which is why aviation human factors training treats both very low workload/vigilance conditions and very high stress conditions as performance risks, rather than treating stress as something that helps performance without limit or as irrelevant to it.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Anchoring bias, as a specific cognitive bias relevant to pilot decision-making, describes the tendency to",
    options: [
      "rely too heavily on an initial piece of information or an early assessment of a situation, giving it disproportionate weight even as new, potentially contradicting information becomes available.",
      "actively seek out and prioritize information that contradicts one's existing beliefs or initial assessment, the opposite of the actual tendency described by anchoring bias.",
      "make decisions at random, with no reliance on any prior information, assessment, or belief whatsoever.",
      "avoid forming any initial assessment of a situation at all, remaining entirely undecided until all available information has been gathered.",
    ],
    answer: 0,
    explain:
      "Anchoring bias is about over-weighting a starting reference point -- an initial assessment, briefing, or figure -- so that it continues to disproportionately shape judgment even as the situation develops and new information comes in, which can make a pilot slow to revise an early read on a developing situation; it's distinct from confirmation bias's specific pattern of favouring belief-consistent information (though the two can interact), and it isn't a description of random or perpetually undecided decision-making.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Groupthink, a team decision-making failure mode, describes a tendency for",
    options: [
      "a cohesive group to prioritize consensus and harmony over critically evaluating alternatives, sometimes suppressing dissenting views or concerns in the process.",
      "a group to systematically evaluate every available alternative more thoroughly than any individual would on their own, improving rather than degrading decision quality.",
      "a group's decisions to be entirely unaffected by social dynamics, with each member's input weighted purely on its individual technical merit.",
      "a single dominant individual to make every decision unilaterally, with no group interaction or consensus-seeking involved at all.",
    ],
    answer: 0,
    explain:
      "Groupthink describes how a strongly cohesive group can, often unintentionally, prioritize maintaining harmony and apparent consensus over rigorously evaluating alternatives or voicing dissenting concerns -- a real risk on a flight deck or in any close-knit crew, which is part of why CRM training emphasizes assertiveness and a speaking-up culture as a countermeasure; it's the opposite of improved group evaluation, isn't free of social dynamics, and isn't the same as one person simply dominating the decision alone.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'Dirty Dozen,' a widely referenced list of common human factors precursors to error (originally developed in an aircraft maintenance context but broadly applicable), includes items such as",
    options: [
      "lack of communication, complacency, lack of knowledge, distraction, fatigue, and pressure, among other similarly named contributing factors.",
      "a list of twelve specific mechanical component failure modes, entirely unrelated to human behaviour or decision-making.",
      "a list restricted exclusively to weather-related hazards, with no human performance or behavioural factors included at all.",
      "a list of twelve specific regulatory violations, functioning as a purely legal or compliance-focused checklist.",
    ],
    answer: 0,
    explain:
      "The Dirty Dozen identifies twelve recurring human factors precursors to error -- items such as lack of communication, complacency, lack of knowledge, distraction, lack of teamwork, fatigue, lack of resources, pressure, lack of assertiveness, stress, lack of awareness, and norms -- as a practical, memorable checklist for recognizing conditions that increase error risk, distinct from a mechanical failure-mode list, a weather-only hazard list, or a regulatory compliance checklist.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The Coriolis illusion, a vestibular spatial disorientation illusion, is typically provoked when a pilot",
    options: [
      "moves their head out of the plane of an ongoing turn (such as tilting the head to look at something) while the semicircular canals are already stimulated by that turn, creating a strong, false sensation of rotation in an entirely different axis.",
      "experiences a sudden forward linear acceleration, such as during takeoff, misinterpreted as a nose-up pitching sensation.",
      "stares fixedly at a single dim light source in an otherwise dark sky, causing that stationary light to appear to move.",
      "descends through a cloud layer with a sloping upper surface, mistaking that sloped surface for the true horizon.",
    ],
    answer: 0,
    explain:
      "The Coriolis illusion arises specifically from cross-coupling between the semicircular canals: if a pilot moves their head out of the plane of a turn already in progress (looking down to change a chart, for example, during a prolonged turn), the resulting stimulation of a different canal than the one already sensing the turn can produce a sudden, intense, and disorienting sensation of rotation about a completely different axis -- a distinct mechanism from the somatogravic illusion (linear acceleration misread as pitch), autokinesis (a stationary light appearing to move), or the false horizon illusion (a sloped cloud mistaken for the horizon).",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A 'graveyard spiral,' a hazardous outcome of spatial disorientation, typically develops when a pilot",
    options: [
      "unknowingly enters a gradual, gently descending turn, has the vestibular sensation of that turn fade (since the semicircular canals sense angular acceleration rather than a sustained constant rate), and then, on perceiving a loss of altitude, pulls back on the controls while still turning -- tightening the descending spiral rather than correcting it.",
      "recognizes the descending turn immediately and correctly by vestibular sensation alone, without needing to cross-check the flight instruments at all.",
      "experiences the illusion exclusively in daylight visual meteorological conditions, with the graveyard spiral considered a non-issue in instrument or reduced-visibility conditions.",
      "deliberately and safely executes the maneuver as a standard recovery technique from an unusual attitude.",
    ],
    answer: 0,
    explain:
      "A graveyard spiral is a classic and dangerous consequence of relying on vestibular (rather than instrument) sensations during sustained, gentle turning flight without adequate outside visual reference: since the semicircular canals only reliably detect a change in rotation rate rather than a steady one, the sensation of turning fades, and a pilot who then senses the resulting altitude loss and pulls back on the controls (without also rolling wings-level) only tightens the turn and steepens the descent -- it's precisely the scenario instrument flight training and 'trust your instruments' discipline are meant to prevent, not a safe or deliberate recovery technique, and it's especially associated with reduced visual reference conditions rather than clear daylight VMC.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Empty field myopia is a visual phenomenon in which, in the absence of any distinct object to focus on (such as looking out into a featureless sky or a dark, empty visual field), the eyes tend to",
    options: [
      "relax to a resting, near-focus distance, reducing the pilot's effective ability to detect and resolve a distant object such as another aircraft that does appear in that field of view.",
      "automatically focus at optical infinity, maximizing the pilot's ability to detect a distant object appearing anywhere in that otherwise empty field of view.",
      "become entirely unable to focus at any distance at all, effectively producing complete, functional blindness until an object appears.",
      "compensate automatically by scanning more rapidly across the empty field, entirely eliminating any practical reduction in detection ability.",
    ],
    answer: 0,
    explain:
      "Without a specific object to focus on, the eyes' natural resting focus tends to default to a relatively near distance rather than to optical infinity -- meaning a pilot scanning an empty sky isn't necessarily focused far enough away to promptly detect and resolve a distant aircraft that then enters that field of view, which is part of why an active, deliberate visual scanning technique (rather than simply staring outward) is emphasized for effective traffic lookout, since the eyes won't automatically compensate on their own.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Decompression sickness ('the bends'), distinct from the trapped-gas discomfort felt in the ears or sinuses during a climb or descent, results from",
    options: [
      "nitrogen that was dissolved in body tissues and fluids coming out of solution and forming bubbles as ambient pressure decreases, particularly relevant to rapid or high-altitude ascents.",
      "the same trapped-gas expansion mechanism as ear or sinus discomfort, making decompression sickness simply a more severe version of that identical process.",
      "a bacterial or viral infection triggered specifically by exposure to reduced cabin pressure, an infectious rather than a pressure-related physiological process.",
      "excess oxygen accumulating in the bloodstream at altitude, the physiological opposite of the actual gas involved in decompression sickness.",
    ],
    answer: 0,
    explain:
      "Decompression sickness is a genuinely distinct mechanism from simple trapped-gas expansion: as ambient pressure drops, nitrogen that had been dissolved in the body's tissues and fluids at the higher pressure can come out of solution and form bubbles, which is why it's a particular concern after scuba diving (where additional nitrogen is absorbed under increased pressure) and during rapid ascent to altitude -- unlike ear or sinus discomfort (air already present in a cavity simply expanding), it's not an infectious process, and it involves dissolved nitrogen, not excess oxygen.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Task saturation occurs when a pilot's workload exceeds their capacity to manage it effectively; a recommended response generally involves",
    options: [
      "prioritizing tasks (using a framework such as aviate, navigate, communicate) and deliberately shedding or delaying lower-priority tasks to focus capacity on what matters most at that moment.",
      "attempting to complete every pending task simultaneously and at the same priority level, rather than establishing any order of priority among them.",
      "immediately disengaging from all tasks entirely, including basic aircraft control, until workload returns to a comfortable level on its own.",
      "requesting that air traffic control take over direct control of the aircraft, since ATC is not itself constrained by the same workload limitations as the pilot.",
    ],
    answer: 0,
    explain:
      "Effective task saturation management is about triage, not paralysis or indiscriminate multitasking: the aviate-navigate-communicate priority framework (and similar approaches) gives a pilot a way to consciously shed, delegate, or defer lower-priority tasks so that capacity stays focused on flying the aircraft safely first, rather than trying to do everything at once, abandoning basic aircraft control, or handing control authority to ATC, which has no ability to actually fly the aircraft.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Complacency, as a human factors concern distinct from excessive automation reliance leading to reduced manual flying skill, describes",
    options: [
      "a reduced state of vigilance or critical awareness that can develop from familiarity and repeated success with a task, leading to a false sense of security even in a manually flown or otherwise non-automated context.",
      "a condition that can only ever result from automation use, making it impossible for complacency to develop during entirely manual, non-automated flying.",
      "a deliberate and consciously chosen strategy for managing high workload, rather than an unintentional erosion of vigilance.",
      "a phenomenon confined exclusively to experienced pilots, with no possibility of a low-experience pilot becoming complacent.",
    ],
    answer: 0,
    explain:
      "Complacency is broader than the automation-specific skill and monitoring erosion covered elsewhere: it's a general reduction in vigilance or critical questioning that can develop from routine, repeated success at any task -- manually flown or automated alike -- creating a false sense that a rare hazard 'won't happen this time' and dulling the sharpness of attention that safe operations depend on; it isn't a deliberate workload strategy, isn't limited to automation-related contexts, and isn't restricted to highly experienced pilots, who can become just as complacent through routine as less experienced ones.",
    reference: "TP 690 Section 7 - Human Factors",
  },
];
