import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 43 -- Section 7: Human
// Factors, fifth pass. Original questions written from standard
// aviation human factors and physiology principles and the TP 690
// syllabus (topic headings only, no sample questions). Covers
// additional spatial disorientation illusions, aeronautical
// decision-making frameworks, CRM concepts, and physiological
// topics not yet addressed in batches 7, 15, 24, or 33. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_43_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The inversion illusion, a vestibular spatial disorientation illusion, can occur when a pilot",
    options: [
      "abruptly levels off from a sustained climb, and the resulting deceleration of angular motion is misinterpreted by the vestibular system as a tumbling, backward (inverted) sensation.",
      "experiences a sustained, unchanging altitude with no change in pitch attitude at any point, a static rather than a transitional flight condition.",
      "stares at a single stationary light source in an otherwise dark sky for a prolonged period, causing that light to appear to move erratically.",
      "banks steeply while simultaneously moving their head out of the plane of the turn to look down at a chart or display.",
    ],
    answer: 0,
    explain:
      "The inversion illusion specifically arises from an abrupt transition out of a sustained climb -- as the aircraft levels off, the resulting change in the semicircular canals' stimulation can be misread by the vestibular system as a tumbling backward (inverted) sensation, even though the aircraft is actually now flying straight and level; it's tied to that specific climb-to-level transition, not to a static, unchanging flight condition, and it's a distinct mechanism from autokinesis (a stationary light appearing to move) or the Coriolis illusion (head movement out of the plane of an ongoing turn).",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "G-induced Loss Of Consciousness (G-LOC), an extreme physiological response to sustained positive G, results when",
    options: [
      "blood is pooled away from the brain for long enough (and to a great enough degree) that cerebral blood flow becomes critically insufficient, leading to a sudden and complete loss of consciousness.",
      "the aircraft itself loses electrical power, with 'G-LOC' describing an aircraft systems failure rather than a physiological event affecting the pilot.",
      "cabin pressure suddenly and completely fails, making G-LOC simply an alternate name for the effects of a rapid decompression.",
      "a pilot voluntarily and safely reduces G loading in anticipation of greyout symptoms, a deliberate protective action rather than an involuntary physiological event.",
    ],
    answer: 0,
    explain:
      "G-LOC represents the far end of the spectrum of positive-G physiological effects: as sustained G loading progressively reduces blood flow to the brain (passing through greyout and blackout stages of visual impairment before consciousness itself is lost), a sufficiently severe and sustained exposure can produce a sudden, complete loss of consciousness -- a genuinely involuntary physiological event distinct from any aircraft electrical failure, a cabin decompression event, or a deliberate, voluntary G-reduction taken to avoid it.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A strategic (planned) nap, taken as a deliberate fatigue countermeasure before or during a duty period, is generally most effective when",
    options: [
      "timed and structured (including sufficient recovery time afterward before resuming duties) to gain alertness benefit while managing the sleep inertia that follows waking.",
      "taken at a completely random, unplanned time with no consideration given to its length or to any recovery period afterward.",
      "extended for as long as possible, since a longer nap is assumed to always produce a greater alertness benefit with no corresponding downside.",
      "avoided entirely, since any napping during a duty period is considered universally counterproductive to alertness and performance.",
    ],
    answer: 0,
    explain:
      "A well-planned strategic nap, timed thoughtfully (for example, ahead of an anticipated low point in alertness) and given appropriate length and a subsequent recovery period, can provide a genuine, evidence-supported alertness benefit as a fatigue countermeasure -- but napping isn't consequence-free: waking from it brings a period of sleep inertia (covered elsewhere) that needs to be managed with adequate recovery time before resuming full duties, and an unplanned, poorly timed, or excessively long nap can reduce rather than enhance the practice's effectiveness, though a properly managed nap is far from universally counterproductive.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The five 'hazardous attitudes' commonly referenced in aeronautical decision-making training -- anti-authority, impulsivity, invulnerability, machismo, and resignation -- are significant because",
    options: [
      "each attitude, left unrecognized, can bias a pilot's judgment toward an unsafe course of action, and pilots are trained to recognize and consciously counter each with an appropriate corrective thought.",
      "they describe five entirely harmless personality traits with no meaningful connection to aviation safety or decision-making at all.",
      "only one of the five (invulnerability) is considered relevant to actual pilot decision-making, with the other four having no genuine safety implication.",
      "they apply exclusively to student pilots, with the five hazardous attitudes considered no longer relevant once a pilot has gained significant flight experience.",
    ],
    answer: 0,
    explain:
      "Each of the five hazardous attitudes represents a recognizable pattern of thinking that can push a pilot toward an unsafe decision -- disregarding rules (anti-authority), acting without adequately thinking things through (impulsivity), believing 'it won't happen to me' (invulnerability), taking unnecessary risks to prove oneself (machismo), or giving up effective control of the situation (resignation) -- and ADM training specifically teaches pilots to recognize these patterns in their own thinking and consciously apply a corrective counter-thought, a safety-relevant concept applicable across experience levels, not confined to student pilots or to only one of the five attitudes.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A risk assessment matrix, plotting the likelihood of a hazard occurring against the severity of its potential consequences, is used in aviation risk management primarily to",
    options: [
      "provide a structured, consistent way to prioritize which identified risks most urgently require mitigation, rather than relying purely on unstructured intuition.",
      "eliminate all risk from an operation entirely, since a properly used risk assessment matrix is assumed capable of reducing risk to zero.",
      "assess likelihood only, with the severity of potential consequences considered irrelevant to how a risk assessment matrix is actually structured.",
      "apply exclusively to the maintenance and engineering side of an operation, with flight operations risk considered outside the matrix's intended scope.",
    ],
    answer: 0,
    explain:
      "A risk assessment matrix gives a structured, visual, and more consistent way of weighing two distinct dimensions of a hazard -- how likely it is to occur, and how severe the consequences would be if it did -- helping prioritize mitigation effort toward the risks that matter most, rather than relying purely on unstructured gut feeling; it's a risk-management tool used broadly across an operation (flight operations very much included, not maintenance/engineering alone), and no risk assessment tool, however well used, eliminates risk entirely.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Line-Oriented Flight Training (LOFT), as a CRM-focused training method, is distinguished by",
    options: [
      "presenting a realistic, full-mission flight scenario (often in a simulator) that crews work through much as they would an actual line flight, emphasizing crew coordination and decision-making over rote procedural drilling.",
      "focusing exclusively on individual pilot technical handling skills in isolation, with no crew coordination or CRM element involved at all.",
      "being conducted only in the actual aircraft during revenue passenger flights, with simulator-based LOFT considered a contradiction in terms.",
      "testing a single, narrowly defined emergency procedure in complete isolation from any broader flight scenario or crew interaction.",
    ],
    answer: 0,
    explain:
      "LOFT presents a realistic, connected flight scenario -- often a full simulated mission, from before departure through to arrival -- that a crew works through together much as they would an actual line flight, deliberately emphasizing CRM elements like communication, workload management, and decision-making across a realistic sequence of events, rather than isolated technical-skill drilling, a single emergency procedure tested in isolation, or something confined to actual revenue flights rather than a simulator.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A structured post-flight debrief, reviewing what went well and what could be improved, contributes to safety primarily by",
    options: [
      "giving the crew (and, more broadly, the operator) an opportunity to identify lessons and areas for improvement while the details are still fresh, supporting ongoing learning rather than repeating the same avoidable issues.",
      "assigning individual blame for any error identified during the flight, a punitive rather than a learning-oriented purpose.",
      "having no genuine safety benefit at all, functioning purely as an administrative formality with no real bearing on future performance.",
      "applying only after an actual incident or accident, with a debrief following an otherwise uneventful, routine flight considered to serve no useful purpose.",
    ],
    answer: 0,
    explain:
      "A well-run debrief -- reviewing what went well, what didn't, and why, while memories are still fresh -- is a deliberate learning opportunity, supporting continuous improvement at both the individual crew and broader operator level, and it's most effective when framed as a non-punitive, learning-focused conversation rather than an exercise in assigning individual blame; debriefing an entirely routine, uneventful flight is still valuable (reinforcing good practice and catching smaller, non-incident-level issues before they compound), not something reserved only for actual incidents or accidents.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A steep authority gradient on a flight deck -- where a subordinate crew member is reluctant to question or challenge a more senior or experienced pilot -- is a recognized CRM concern because it can",
    options: [
      "suppress important safety-relevant observations or concerns from being voiced, allowing an error or a developing hazardous situation to go unaddressed.",
      "improve overall crew decision-making quality, since a steep authority gradient is generally understood to enhance, rather than suppress, open communication.",
      "have no meaningful effect on crew communication or safety outcomes, making authority gradient an aviation human factors concept without any genuine practical significance.",
      "apply only to student pilots operating with an instructor, with authority gradient considered irrelevant to a crew of fully qualified, experienced pilots.",
    ],
    answer: 0,
    explain:
      "A steep authority gradient -- whether from a large difference in seniority, experience, or a strongly hierarchical culture -- can make a junior or less senior crew member hesitant to speak up about a concern, a mistaken instruction, or a developing problem, letting an issue go unaddressed that a flatter, more open gradient would likely have caught; CRM training specifically works to flatten that gradient (without eliminating appropriate command authority) precisely because it's a real, well-documented contributor to accidents, applicable to fully qualified crews, not just a student-instructor pairing.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The Pilot Flying (PF) and Pilot Monitoring (PM) role division, used on a multi-crew flight deck, is intended primarily to",
    options: [
      "clearly define each pilot's responsibilities (one actively controlling the aircraft, the other cross-checking, monitoring systems, and managing communication), improving overall crew coordination and error detection.",
      "assign both pilots to identical, undifferentiated responsibilities at all times, with 'PF' and 'PM' being purely honorary titles carrying no actual functional distinction.",
      "apply only during the cruise phase of flight, with no PF/PM role distinction considered relevant during takeoff, approach, or landing.",
      "eliminate the need for any communication between the two pilots, since each role is understood to operate entirely independently of the other.",
    ],
    answer: 0,
    explain:
      "The PF/PM division gives each pilot a clearly defined primary focus -- the PF actively controls the aircraft's flight path, while the PM monitors systems, cross-checks the PF's actions, manages communication, and watches for anything the PF might miss -- a structured division that improves coordination and, importantly, error detection (since the PM is specifically tasked with catching what the PF might not), rather than being a purely honorary or undifferentiated distinction, one confined to cruise flight alone, or one that removes the need for active communication between the two roles.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The primacy and recency effects, as they relate to memory and information retention, generally describe a tendency to",
    options: [
      "recall the first and last items presented in a sequence (such as a briefing or checklist) more readily than items presented in the middle of that sequence.",
      "recall only the middle items of a presented sequence, with the first and last items considered the least likely to be retained.",
      "recall every item in a sequence with exactly equal reliability, regardless of its position within that sequence.",
      "apply exclusively to written information, with the primacy and recency effects considered entirely absent for spoken or verbally delivered information.",
    ],
    answer: 0,
    explain:
      "Primacy and recency together describe a well-documented memory pattern: items presented first (primacy) and items presented last (recency) in a sequence tend to be recalled more reliably than items presented in the middle -- a genuinely practical consideration for how briefings, checklists, and verbal instructions are structured and delivered, since important items buried in the middle of a long list are comparatively more vulnerable to being forgotten, and the effect applies to spoken information (such as a verbal briefing) as well as written material, not to written information exclusively.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Motion sickness, experienced by some pilots or passengers particularly during turbulent or unusual-attitude flight, is generally understood to result from",
    options: [
      "a conflict or mismatch between the motion sensed by the vestibular system and the visual and other sensory cues the body is simultaneously receiving.",
      "a bacterial or viral infection specifically triggered by exposure to turbulent flight conditions, an infectious rather than a sensory-conflict-based mechanism.",
      "hypoxia alone, making motion sickness simply an alternate name for the effects of insufficient oxygen at altitude.",
      "a condition that occurs only when the eyes are completely closed throughout the flight, with motion sickness considered impossible with the eyes open.",
    ],
    answer: 0,
    explain:
      "Motion sickness is generally attributed to a sensory conflict -- when the motion the vestibular system senses doesn't match what the visual system (and other sensory input) is simultaneously indicating, such as when looking down at a chart while the aircraft is moving in ways the inner ear senses but the eyes, fixed on a stationary object, don't corroborate -- a mismatch-driven mechanism distinct from an infectious process, from hypoxia (a separate physiological concern with its own distinct effects), and it can occur with the eyes open or closed, not exclusively with them closed.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Night (scotopic) vision is affected by hypoxia at a comparatively lower degree of oxygen deprivation than many other hypoxia symptoms, meaning that",
    options: [
      "a pilot's ability to see well at night can measurably degrade at a cabin altitude below the point at which more obvious hypoxia symptoms (such as impaired judgment) become apparent.",
      "night vision is entirely unaffected by hypoxia at any altitude, making it the one visual function considered fully immune to reduced oxygen availability.",
      "night vision degrades only once severe, advanced-stage hypoxia symptoms are already present, making it one of the last functions affected rather than one of the earliest.",
      "hypoxia's effect on night vision applies only above the altitude at which supplemental oxygen is regulatorily required, with no measurable effect below that altitude.",
    ],
    answer: 0,
    explain:
      "Because the retina's night (rod-based, scotopic) vision is particularly sensitive to oxygen availability, measurable degradation in night vision can occur at a comparatively modest cabin altitude, before more overtly noticeable hypoxia symptoms (like impaired judgment or coordination) become apparent -- which is a genuine practical concern for night flight planning and is why crew oxygen use guidance for night operations can be more conservative than the strict regulatory minimum altitude threshold, rather than night vision being immune to hypoxia, affected only at advanced hypoxia stages, or unaffected below the specific regulatory oxygen-requirement altitude.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Prolonged occupational exposure to cockpit and cabin noise is a recognized hazard primarily because it can",
    options: [
      "contribute to gradual, cumulative hearing loss over time, which hearing protection and noise exposure management are intended to help prevent.",
      "have no lasting physiological effect whatsoever, making cockpit noise exposure a purely comfort-related rather than a genuine occupational health concern.",
      "cause immediate, complete, and permanent hearing loss after even a single, brief flight, regardless of noise level or exposure duration.",
      "affect only ground crew working near running engines, with flight crew inside the cockpit considered entirely unaffected by any noise-related hearing risk.",
    ],
    answer: 0,
    explain:
      "Noise exposure in aviation is a genuine, well-recognized occupational hearing-health concern: cumulative exposure to cockpit and cabin noise over a career can contribute to gradual, progressive hearing loss, which is exactly why hearing protection and mindful noise exposure management are emphasized -- it isn't a comfort-only issue with no real physiological consequence, it isn't a mechanism that causes immediate, complete hearing loss from a single flight, and flight crew inside the cockpit are meaningfully exposed too, not just ground crew working near engines.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Beyond the Valsalva maneuver, other techniques commonly used to help equalize pressure in the middle ear during descent include",
    options: [
      "swallowing, yawning, and the Toynbee maneuver (swallowing while pinching the nose closed), each working through a somewhat different mechanism to open the Eustachian tube.",
      "holding one's breath for the entire duration of the descent, a technique with no actual connection to Eustachian tube function or ear pressure equalization.",
      "no technique other than the Valsalva maneuver exists or is commonly used for middle-ear pressure equalization during descent.",
      "deliberately increasing cabin altitude during descent, which would actually work against, rather than assist, middle-ear pressure equalization.",
    ],
    answer: 0,
    explain:
      "The Valsalva maneuver isn't the only recognized technique for helping open the Eustachian tube and equalize middle-ear pressure during descent -- simple swallowing and yawning both naturally engage muscles that help open the tube, and the Toynbee maneuver (swallowing while pinching the nostrils closed) is another commonly taught variant -- giving a pilot or passenger more than one option, particularly useful since some individuals find one technique more effective or more comfortable than another, and none of these techniques involves simply holding one's breath or deliberately raising cabin altitude, which would not help and, in the latter case, works against the goal.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'error chain' concept in accident causation describes how",
    options: [
      "an accident often results from a sequence of smaller errors or events, any one of which, if broken, could have prevented the accident from occurring.",
      "an accident results from exactly one single, isolated cause, with no meaningful sequence or chain of contributing events ever actually involved.",
      "an accident is entirely unpredictable and unrelated to any identifiable prior error, making the term 'error chain' a misleading description of how accidents actually occur.",
      "only the very first error in any sequence has genuine significance, with every subsequent error in the chain considered irrelevant to the eventual outcome.",
    ],
    answer: 0,
    explain:
      "The error chain concept frames an accident not as the product of a single catastrophic failure but as the end result of a sequence of smaller errors, oversights, or events -- each link in the chain -- where breaking any single link along the way (catching an error, correcting a deviation, making a different decision) could have prevented the accident altogether; this is a genuinely useful, practical way of thinking about accident prevention (interrupt the chain early, and often), rather than treating accidents as attributable to one isolated cause, as unpredictable and unrelated to any identifiable prior event, or as a sequence where only the first link actually matters.",
    reference: "TP 690 Section 7 - Human Factors",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Over-the-counter (non-prescription) medications, even those not requiring a prescription, are a relevant IMSAFE consideration for a pilot primarily because",
    options: [
      "many can cause side effects (such as drowsiness or impaired reaction time) that could affect flight safety, even though the medication itself is legally available without a prescription.",
      "over-the-counter medications are, by definition, entirely free of any side effect capable of affecting flight safety, making them a non-issue under IMSAFE.",
      "IMSAFE's 'Medication' consideration applies only to prescription drugs, with any over-the-counter medication specifically and entirely excluded from that IMSAFE category.",
      "over-the-counter medications improve pilot performance and alertness in every case, making their use something IMSAFE would actively encourage before a flight.",
    ],
    answer: 0,
    explain:
      "Being available without a prescription doesn't mean a medication is free of side effects relevant to flight safety -- many common over-the-counter drugs (certain allergy or cold medications, for example) can cause drowsiness, impaired reaction time, or other effects that matter for safely operating an aircraft, which is exactly why IMSAFE's 'Medication' consideration is meant to prompt a pilot to think about any medication, prescription or not, rather than being limited to prescription drugs alone or assuming over-the-counter medications are inherently safe (or performance-enhancing) in every case.",
    reference: "TP 690 Section 7 - Human Factors",
  },
];
