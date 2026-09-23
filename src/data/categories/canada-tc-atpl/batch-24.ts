import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 24 -- Section 7: Human Factors,
// third pass. Original questions written from aviation human-factors
// principles and the TP 690 syllabus (topic headings only, no sample
// questions). Covers hypoxia classification, ear/sinus barotrauma,
// attention/monitoring concepts, and safety-culture models not yet
// addressed in batches 7 or 15. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_24_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Hypoxic hypoxia symptoms are often described as progressing through stages, generally labelled (in order of increasing severity as altitude and exposure increase) as",
    options: [
      "indifferent, compensatory, disturbance, and critical.",
      "critical, disturbance, compensatory, and indifferent, the reverse of the usual progression.",
      "mild, moderate, severe, and fatal, terms used interchangeably with the standard four-stage classification.",
      "acute, subacute, chronic, and terminal, a classification borrowed directly from general medical terminology.",
    ],
    answer: 0,
    explain:
      "The standard staged description of hypoxic hypoxia runs from the indifferent stage (little to no noticeable effect, at comparatively low altitude), through a compensatory stage (the body begins compensating, with some performance decrement), into a disturbance stage (noticeable impairment of judgment, memory, and coordination), and finally a critical stage (severe impairment progressing toward unconsciousness) -- a useful framework for understanding why hypoxia's effects can be insidious well before they become obviously dangerous.",
    reference: "TP 690 Section 7 - Human Factors, Hypoxia",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Histotoxic hypoxia is distinguished from hypoxic hypoxia in that histotoxic hypoxia occurs when",
    options: [
      "the body's tissues are unable to properly use the oxygen actually delivered to them, even though oxygen delivery itself may be adequate -- as with alcohol or certain toxins impairing cellular oxygen utilization.",
      "the ambient partial pressure of oxygen in the air being breathed is reduced, as it is at higher altitude.",
      "the blood's oxygen-carrying capacity is reduced, as with carbon monoxide binding preferentially to hemoglobin.",
      "poor circulation reduces the delivery of oxygenated blood to the tissues, as can occur under sustained high-G loading.",
    ],
    answer: 0,
    explain:
      "Histotoxic hypoxia is a distinct category from hypoxic hypoxia (reduced ambient oxygen partial pressure), anemic hypoxia (reduced blood oxygen-carrying capacity), and stagnant hypoxia (impaired circulation): in histotoxic hypoxia, oxygen may be delivered to the tissue in adequate quantity, but the tissue's cells are unable to actually use it properly -- alcohol and certain other substances impair this cellular-level oxygen utilization, producing a functional oxygen deficit despite normal delivery.",
    reference: "TP 690 Section 7 - Human Factors, Hypoxia",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Stagnant hypoxia results from",
    options: [
      "poor or interrupted circulation of oxygenated blood to the tissues, which can occur under sustained high-G loading or in extreme cold, even when oxygen delivery to the lungs and its uptake into the blood are both adequate.",
      "a reduced ambient partial pressure of oxygen in the air being breathed, exactly as in ordinary hypoxic hypoxia.",
      "a reduced oxygen-carrying capacity of the blood itself, exactly as in anemic hypoxia caused by carbon monoxide exposure.",
      "the tissues being physically unable to use available oxygen, exactly as in histotoxic hypoxia.",
    ],
    answer: 0,
    explain:
      "Stagnant hypoxia is a circulatory problem, not a delivery or utilization one: even with normal oxygen uptake in the lungs and normal blood oxygen content, poor or interrupted blood flow -- such as pooling caused by sustained high-G loading, or peripheral circulation slowed by extreme cold -- can leave specific tissues (the eyes and brain being especially sensitive) without adequate oxygenated blood reaching them, distinguishing it from the altitude-driven, blood-content, or cellular-utilization mechanisms behind the other hypoxia types.",
    reference: "TP 690 Section 7 - Human Factors, Hypoxia",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Hyperventilation produces many symptoms that overlap with hypoxia (dizziness, tingling, impaired judgment) because it causes",
    options: [
      "an excessive elimination of carbon dioxide from the blood through overly rapid or deep breathing, producing a state of respiratory alkalosis.",
      "an excessive retention of carbon dioxide in the blood, the opposite imbalance from what actually occurs during hyperventilation.",
      "a direct reduction in the ambient partial pressure of oxygen being breathed, identical to the mechanism behind hypoxic hypoxia.",
      "an increase in blood oxygen saturation well above normal resting levels, which is what produces the overlapping symptoms.",
    ],
    answer: 0,
    explain:
      "Hyperventilation isn't primarily an oxygen problem -- it's a carbon dioxide problem: breathing more rapidly or deeply than metabolically necessary washes out CO2 from the blood faster than it's being produced, shifting blood pH toward alkalosis. The resulting symptoms (dizziness, tingling in the extremities, impaired judgment) closely resemble hypoxia's, which is precisely why the two are easy to confuse in flight and why distinguishing between them (and responding correctly) matters.",
    reference: "TP 690 Section 7 - Human Factors, Hyperventilation",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Trapped gas discomfort in the sinuses or middle ear, encountered particularly during descent, occurs because",
    options: [
      "as ambient pressure increases during descent, gas trapped in an enclosed cavity (behind a blocked sinus opening or eustachian tube) cannot expand to equalize, creating a relative vacuum and associated pain.",
      "as ambient pressure decreases during climb, gas trapped in an enclosed cavity expands faster than it can escape, creating painful overpressure.",
      "trapped gas problems occur only during climb, and are never encountered during descent under any circumstances.",
      "trapped gas problems are unrelated to Boyle's Law or to any change in ambient pressure, and instead result purely from cabin humidity changes.",
    ],
    answer: 0,
    explain:
      "During descent, ambient (and cabin) pressure rises, and a healthy sinus or middle ear equalizes by simply admitting more air through its normal opening -- but if that passage is blocked (by congestion, for instance), the trapped gas inside can't expand to match the rising outside pressure, effectively creating a relative vacuum inside the cavity that pulls on surrounding tissue and produces pain, the reverse mechanical problem from the more commonly discussed climb-phase gas expansion.",
    reference: "TP 690 Section 7 - Human Factors, Gas Laws and Trapped Gas",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The Valsalva maneuver, commonly used to help clear (equalize) the ears during descent, works by",
    options: [
      "gently increasing pressure in the throat and nasal passages (such as by pinching the nose and exhaling gently against it) to help force air up through the eustachian tube into the middle ear.",
      "rapidly and forcefully inhaling through the nose, which draws air out of the middle ear rather than pushing air into it.",
      "swallowing repeatedly with the mouth held wide open and the nose left completely unobstructed, with no pressure applied at all.",
      "holding the breath entirely, without any exhalation effort, for as long as possible during the descent.",
    ],
    answer: 0,
    explain:
      "The Valsalva maneuver -- pinching the nose closed and gently exhaling against the resulting resistance -- raises pressure in the nasal and throat passages enough to help push air up through the eustachian tube and into the middle ear, actively equalizing pressure there rather than relying solely on the passive swallowing or yawning that often suffices when the tube isn't partially blocked.",
    reference: "TP 690 Section 7 - Human Factors, Gas Laws and Trapped Gas",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Positional alcohol nystagmus -- involuntary eye movement induced by alcohol affecting the vestibular system -- is significant to a pilot because it",
    options: [
      "can persist for many hours after drinking, well after a person otherwise feels sober, and can contribute to spatial disorientation and impaired vision even after obvious cognitive impairment has faded.",
      "occurs only while a person is actively intoxicated, and disappears entirely and immediately as soon as blood alcohol level returns to zero.",
      "affects only a person's sense of hearing, with no relationship to vision, eye movement, or spatial orientation at all.",
      "is a beneficial adaptation that improves visual tracking ability, rather than a form of impairment.",
    ],
    answer: 0,
    explain:
      "Positional alcohol nystagmus results from alcohol altering the density of fluid in the vestibular system relative to the surrounding structures, and its effects on vestibular function and eye movement can linger well beyond the point where a person feels, or tests, cognitively sober -- part of why regulatory bottle-to-throttle rules build in a substantial margin beyond simply 'not feeling drunk,' since residual vestibular and visual effects can persist even after obvious impairment has passed.",
    reference: "TP 690 Section 7 - Human Factors, Alcohol and Drugs",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Vigilance decrement refers to the well-documented tendency for",
    options: [
      "performance on a sustained, monotonous monitoring task to decline the longer that task continues, even without any change in workload or fatigue level.",
      "performance on any task to improve steadily and indefinitely the longer a person continues performing it, with no decline at any point.",
      "an aircraft's automated systems to gradually lose monitoring accuracy over the course of a long flight, an equipment rather than a human factor.",
      "a pilot's visual acuity to permanently and irreversibly decline after a single long-duration flight, regardless of subsequent rest.",
    ],
    answer: 0,
    explain:
      "Vigilance decrement is a specific, well-studied attentional phenomenon: sustained monitoring of a low-event-rate, monotonous task (such as watching an autopilot fly a long cruise segment with nothing unusual happening) tends to produce a decline in detection performance the longer it continues, even in a rested, motivated observer with no increase in workload -- a real human performance limitation, not an equipment issue, that's part of why deliberate active monitoring techniques and workload management matter even during quiet phases of flight.",
    reference: "TP 690 Section 7 - Human Factors, Monitoring and Vigilance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Active monitoring, as distinct from passive monitoring, of automated flight systems generally involves",
    options: [
      "deliberately cross-checking what the automation is actually doing against what it's expected to be doing, rather than simply watching the displays without a specific expectation to verify against.",
      "disabling all automated systems and reverting to fully manual control, since active monitoring is defined as the opposite of using automation at all.",
      "watching the flight displays passively, without any specific expectation or comparison, since passive observation is what defines active monitoring.",
      "delegating the monitoring task entirely to the other pilot, freeing the monitoring pilot to focus exclusively on non-monitoring duties.",
    ],
    answer: 0,
    explain:
      "Active monitoring means forming an expectation -- what should the automation be doing right now, given the current phase of flight, clearance, and configuration -- and then deliberately checking the actual indications against that expectation, rather than simply letting one's eyes pass over the displays without a specific comparison in mind (which is closer to passive monitoring, and is exactly the pattern automation complacency and vigilance decrement can slip into over time).",
    reference: "TP 690 Section 7 - Human Factors, Monitoring and Vigilance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Effective followership, as a CRM concept complementing leadership, generally involves a crew member",
    options: [
      "actively contributing observations, questions, and concerns to support the flight's safe conduct, rather than simply and silently complying with the leader's instructions without engagement.",
      "deferring entirely and silently to the pilot-in-command's decisions at all times, without ever voicing an observation or a concern.",
      "assuming leadership responsibilities themselves whenever they personally disagree with a decision made by the pilot-in-command.",
      "applying only to cabin crew, with the concept having no relevance to a first officer's role in the flight deck.",
    ],
    answer: 0,
    explain:
      "Good followership isn't passive compliance -- it's an active role: a crew member who engages, offers relevant observations, asks clarifying questions, and raises concerns supports the flight's safety just as much as good leadership does, and the concept applies to flight deck crew (not just cabin crew) working under a designated pilot-in-command, without requiring the follower to simply take over leadership whenever they disagree.",
    reference: "TP 690 Section 7 - Human Factors, Crew Resource Management",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "An assertiveness (or 'speaking up') culture within a flight deck crew is intended primarily to",
    options: [
      "give every crew member confidence and a clear expectation that they should voice a safety concern, even to someone more senior, without fear of being dismissed or reprimanded for doing so.",
      "encourage crew members to challenge every routine decision made by the pilot-in-command, regardless of whether a genuine safety concern exists.",
      "apply exclusively to communication from the captain toward more junior crew members, with no expectation that the reverse should occur.",
      "replace the pilot-in-command's ultimate authority and decision-making responsibility with a democratic, majority-vote decision process.",
    ],
    answer: 0,
    explain:
      "An assertiveness culture specifically targets the failure mode where a more junior crew member notices something concerning but hesitates to speak up because of rank, hierarchy, or fear of a poor reception -- it aims to make voicing a genuine safety concern to anyone, including someone more senior, a normal, expected, and welcomed part of the crew's working relationship, without turning every routine decision into an open debate or displacing the pilot-in-command's ultimate authority.",
    reference: "TP 690 Section 7 - Human Factors, Crew Resource Management",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'Swiss cheese' model of accident causation illustrates the idea that",
    options: [
      "an accident typically results from a rare alignment of multiple, otherwise-independent layered defences each having a gap, rather than from a single isolated cause.",
      "accidents are always caused by a single, easily identifiable failure, with no meaningful role played by any other contributing factor.",
      "an organization's defences against an accident are entirely useless once even a single layer has any weakness at all.",
      "accidents occur completely randomly, with no underlying pattern or contributing organizational and human factors involved at all.",
    ],
    answer: 0,
    explain:
      "The Swiss cheese model pictures an organization's layered defences (design, regulation, training, procedures, individual performance) each as a slice with its own randomly positioned holes (weaknesses); most of the time those holes don't line up, and a single layer's gap is caught by another layer behind it. An accident happens on the rare occasion when the holes in several layers happen to align, letting a hazard pass straight through -- reinforcing that serious accidents are usually the product of multiple contributing factors across the system, not one isolated failure, and the model applies broadly across operations, maintenance, and ATC alike.",
    reference: "TP 690 Section 7 - Human Factors, Safety Management Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A 'reporting culture,' as one of several components often described as underpinning a strong overall safety culture, refers to an environment in which",
    options: [
      "people are willing and encouraged to report their own errors, near-misses, and safety concerns, because they trust the information will be used constructively rather than used against them.",
      "only formal accident investigators are permitted to submit safety reports, with front-line personnel excluded from the reporting process entirely.",
      "reports are collected but never acted upon, since a reporting culture is defined purely by the volume of reports generated.",
      "reporting is entirely optional and actively discouraged, since a strong safety culture is assumed to require no reporting activity at all.",
    ],
    answer: 0,
    explain:
      "A reporting culture is specifically about willingness: front-line personnel need to trust that reporting their own errors or observed hazards will lead to constructive learning rather than punishment, which is exactly why a reporting culture depends heavily on (and reinforces) a just culture existing alongside it -- without that trust, the reports simply stop coming in, regardless of how good the organization's formal reporting system looks on paper.",
    reference: "TP 690 Section 7 - Human Factors, Safety Management Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Individual differences in risk tolerance -- how much perceived risk a person is comfortable accepting before adjusting their behaviour -- are significant in aviation human factors because",
    options: [
      "a pilot with a higher personal risk tolerance may press on in marginal conditions that a more risk-averse pilot, given the exact same objective information, would choose to avoid or divert from.",
      "risk tolerance is identical for every certificated pilot, meaning objective conditions alone (rather than any individual difference) determine every pilot's go/no-go decision.",
      "risk tolerance has no bearing on real-world decision-making in aviation, and is considered relevant only to ground-based, non-flying occupations.",
      "a pilot's risk tolerance is fixed permanently at the point of initial licensing and cannot meaningfully change with experience, training, or personal circumstances afterward.",
    ],
    answer: 0,
    explain:
      "Given the exact same objective weather, aircraft state, and mission pressure, two pilots with different personal risk tolerances can reasonably reach different go/no-go decisions -- which is exactly why structured decision-making frameworks and standardized minima exist: to provide an external, consistent reference point that reduces the degree to which a purely individual, and variable, sense of acceptable risk drives a safety-critical decision.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Channelized attention (sometimes called cognitive tunnelling), often triggered by a high-workload or startling event, describes a state in which a pilot",
    options: [
      "becomes so intensely focused on one particular problem or task that they fail to notice or attend to other important information or cues.",
      "distributes attention evenly and effectively across every available source of information, improving overall situational awareness.",
      "loses all ability to focus on any single task, becoming unable to concentrate on anything for more than a moment at a time.",
      "experiences no change in attentional focus at all, regardless of workload level or the presence of a startling event.",
    ],
    answer: 0,
    explain:
      "Channelized attention is a narrowing, not a broadening or a collapse, of focus: under high workload or the startle of an unexpected event, a pilot can become so absorbed in one salient problem (chasing a particular instrument indication, for instance) that other important cues -- an altitude deviation, a competing warning, a radio call -- go unnoticed, which is exactly the opposite of the broad, balanced attention distribution that maintaining good situational awareness requires.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Anemic hypoxia results from",
    options: [
      "a reduced ability of the blood to carry oxygen, such as through carbon monoxide binding preferentially to hemoglobin in place of oxygen.",
      "a reduced ambient partial pressure of oxygen in the air being breathed, identical to the mechanism behind ordinary hypoxic hypoxia.",
      "the tissues being unable to properly use oxygen that has been adequately delivered to them, identical to the mechanism behind histotoxic hypoxia.",
      "poor circulation of oxygenated blood to the tissues, identical to the mechanism behind stagnant hypoxia.",
    ],
    answer: 0,
    explain:
      "Anemic hypoxia is specifically about the blood's carrying capacity: whether from carbon monoxide binding preferentially to hemoglobin (crowding out oxygen), a genuine reduction in red blood cell count, or another cause, the blood simply can't carry as much oxygen as normal even when lung function, circulation, and cellular utilization are all otherwise unaffected -- a distinct mechanism from the altitude-based, circulatory, and cellular-utilization categories covered by hypoxic, stagnant, and histotoxic hypoxia respectively.",
    reference: "TP 690 Section 7 - Human Factors, Hypoxia",
  },
];
