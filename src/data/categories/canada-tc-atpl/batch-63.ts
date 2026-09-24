import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 63 -- Section 8: Human
// Factors, seventh pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// aviation human factors / CRM literature. Covers the availability
// heuristic, the framing effect, fixation error, multi-sensory
// alerting design, control-display compatibility (population
// stereotypes), alarm fatigue, hindsight bias in investigation,
// locus of control, automation mode confusion ("automation
// surprise"), subtle pilot incapacitation, underload/boredom risk,
// the two-challenge rule, the post-lunch circadian dip, the
// bystander effect in multi-crew error detection, the purpose of
// standardized callouts, and risk homeostasis (target risk theory)
// -- topics not yet addressed in batches 7, 15, 24, 33, 43, or 53.
// Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_63_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The availability heuristic, a cognitive bias relevant to pilot risk assessment, describes the tendency to",
    options: [
      "always underestimate risk regardless of how memorable or recent similar events have been.",
      "assess risk exclusively using formal statistical data, deliberately ignoring any personal experience or memory.",
      "judge how likely an event is based on how easily similar examples come to mind, so a pilot may overestimate the risk of a vivid, memorable hazard (such as a recent accident widely discussed) while underestimating a statistically more common but less memorable one.",
      "apply identically to every pilot regardless of recent experience, training, or exposure to relevant events.",
    ],
    answer: 2,
    explain:
      "The availability heuristic causes people to judge the probability of an event by how readily examples come to mind, rather than by its actual statistical frequency; a pilot may therefore overestimate the risk of a dramatic, memorable hazard (such as a widely publicized recent accident) while underestimating a more mundane but statistically more significant risk that is less vivid or less recently encountered.",
    reference: "TP 690 -- Human Factors: Decision-Making",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The framing effect, as it can influence a pilot's risk-related decision, describes how",
    options: [
      "a pilot's decision is influenced solely by objective probability data, with the manner of presentation having no effect at all.",
      "framing applies only to written checklists, with no relevance to verbally presented information or decisions.",
      "decisions are always made identically regardless of how the available options or information are presented or worded.",
      "the way a choice is presented (for example, emphasizing the chance of a safe outcome versus emphasizing the chance of a negative one) can shift a decision even when the underlying facts and probabilities are identical.",
    ],
    answer: 3,
    explain:
      "The framing effect describes how the way identical information or a choice is presented -- for instance, describing an option in terms of its chance of a successful outcome versus its chance of failure -- can influence the decision made, even though the underlying facts and probabilities have not changed, which is relevant to how risk information, briefings, or options are communicated on the flight deck.",
    reference: "TP 690 -- Human Factors: Decision-Making",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Fixation error, as a specific troubleshooting or diagnostic failure mode, describes a situation in which a pilot",
    options: [
      "becomes locked onto a single diagnosis or course of action for an abnormal situation and continues pursuing it despite mounting evidence that it is incorrect or incomplete, failing to reconsider or search for alternative explanations.",
      "describes a purely physical symptom unrelated to diagnostic reasoning or decision-making.",
      "considers every plausible explanation for an abnormal indication systematically and without bias before selecting a course of action.",
      "refers exclusively to a visual illusion involving staring at a single point in an otherwise empty sky.",
    ],
    answer: 0,
    explain:
      "Fixation error occurs when a pilot (or crew) becomes locked onto one particular diagnosis or course of action for an abnormal or emergency situation and continues pursuing it despite accumulating evidence suggesting it is wrong or incomplete, rather than stepping back to reconsider the situation -- a well-documented factor in a number of accident investigations involving crews who missed other, sometimes more obvious, problems while fixated on an initial one.",
    reference: "TP 690 -- Human Factors: Decision-Making",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Flight deck warning and alerting systems are generally designed to use multiple sensory channels (such as a visual annunciation combined with an aural tone or a synthesized voice) for critical alerts primarily because",
    options: [
      "multiple sensory channels are used purely for cosmetic variety, with no measurable effect on the speed or reliability of crew response.",
      "presenting the same critical information through more than one sense increases the likelihood the crew will notice and correctly interpret it promptly, particularly if visual attention is momentarily directed elsewhere at the time.",
      "regulations require every alert to use exactly one sensory channel only, making multi-sensory alerting a design practice that is actually prohibited.",
      "a visual-only alert is always noticed faster than any combination of visual and aural alerting, making multi-channel alerting unnecessary.",
    ],
    answer: 1,
    explain:
      "Because a pilot's visual attention may be directed elsewhere (outside, at another display, or at a checklist) at any given moment, critical alerts are commonly designed to engage more than one sensory channel -- for example a visual annunciation paired with an aural tone or synthesized voice -- which increases the likelihood that the alert will be noticed and correctly interpreted promptly, rather than relying on a single channel that might be missed.",
    reference: "TP 690 -- Human Factors: Flight Deck Design",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Control-display compatibility, sometimes discussed in terms of 'population stereotypes' in cockpit ergonomic design (such as moving a lever upward to increase something, or turning a knob clockwise to increase a value), is significant because",
    options: [
      "population stereotypes are purely a matter of aesthetic preference with no measurable effect on pilot performance or error rates.",
      "control-display compatibility applies only to analog, mechanical instruments and has no relevance to modern glass cockpit displays and controls.",
      "designs that match users' natural, widely shared expectations about how a control should relate to its effect reduce the likelihood of an incorrect or delayed control input, particularly under high workload or stress.",
      "every pilot has an entirely unique, unpredictable set of expectations about control-display relationships, making standardization across cockpit designs impossible.",
    ],
    answer: 2,
    explain:
      "Population stereotypes reflect widely shared, often culturally consistent expectations about how a control's movement should relate to its effect (an upward lever movement generally expected to increase something, a clockwise knob rotation generally expected to increase a value); designing controls to match these expectations reduces the likelihood of an incorrect or delayed response, an effect that becomes particularly important under high workload, stress, or time pressure when there is less capacity to consciously override a mismatched expectation.",
    reference: "TP 690 -- Human Factors: Flight Deck Design",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Alarm fatigue, a recognized human factors concern in complex, highly automated flight decks, describes the risk that",
    options: [
      "alarm fatigue applies exclusively to ground-based air traffic controllers, with no equivalent phenomenon relevant to flight crews.",
      "a crew's response to a warning becomes progressively faster and more accurate the more frequently that warning is triggered, with no downside to frequent alerting.",
      "aircraft warning systems generate a fixed, unchanging number of alerts regardless of the operational situation, making alarm fatigue a purely theoretical concern with no real-world basis.",
      "frequent, low-priority, or nuisance warnings can lead a crew to become desensitized and slower to respond appropriately, including to a genuinely critical alert, because attention and urgency have been eroded by repeated exposure to less significant alerts.",
    ],
    answer: 3,
    explain:
      "Alarm fatigue refers to the risk that repeated exposure to frequent, low-priority, or nuisance warnings can desensitize a crew, eroding their sense of urgency and slowing or degrading their response even to a genuinely critical alert -- a concern that has driven design efforts to prioritize, filter, and inhibit alerts appropriately so that crews are not overwhelmed with low-value warnings that dilute their attention to the ones that matter most.",
    reference: "TP 690 -- Human Factors: Flight Deck Design",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Hindsight bias, a recognized concern in accident and incident investigation, describes the tendency for an investigator, looking back after the fact, to",
    options: [
      "judge that the outcome of an event was more predictable and obvious beforehand than it actually was to the people involved at the time, given only the information they had available in the moment.",
      "always conclude that an accident was entirely unpredictable and unavoidable, regardless of the information available to those involved beforehand.",
      "disregard all information about the sequence of events, relying solely on interviews conducted years after the occurrence.",
      "apply only to mechanical or technical failures, with no relevance to the assessment of human decisions or actions.",
    ],
    answer: 0,
    explain:
      "Hindsight bias is the tendency, once the outcome of an event is already known, to judge that the outcome should have been more obvious or predictable beforehand than it genuinely was to the people involved at the time, given only the information, time pressure, and context they actually had -- a significant concern in accident investigation because it can lead to unfairly harsh judgments of a crew's decisions and can obscure the systemic factors that actually contributed to the outcome.",
    reference: "TP 690 -- Human Factors: Safety Investigation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Locus of control, a personality-related concept sometimes discussed in aviation human factors, describes the degree to which a person believes",
    options: [
      "the term refers exclusively to the physical location of flight controls within the cockpit, unrelated to personality or attitude.",
      "outcomes in their life are primarily the result of their own actions and decisions (an internal locus of control) versus primarily the result of external factors such as luck, fate, or other people (an external locus of control), which can influence attitudes toward risk and personal responsibility for safety.",
      "risk tolerance is fixed and identical for every pilot, regardless of any underlying personality trait.",
      "an aircraft's automated systems are more reliable than the pilot's own manual control inputs at all times.",
    ],
    answer: 1,
    explain:
      "Locus of control describes the degree to which a person attributes life outcomes to their own actions and decisions (internal locus of control) versus to external factors such as luck, fate, or other people (external locus of control); in an aviation context, this personality trait has been discussed in relation to attitudes toward personal responsibility for safety and risk-related decision-making, alongside other individual difference factors such as risk tolerance.",
    reference: "TP 690 -- Human Factors: Personality and Attitude",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Automation mode confusion (sometimes called an 'automation surprise'), a recognized hazard on highly automated flight decks, occurs when",
    options: [
      "the autoflight system physically disconnects itself without any indication whatsoever appearing on the flight deck.",
      "automation surprises occur only during manual (autopilot-off) flight, with no relevance to automated flight modes at all.",
      "the crew's understanding of which autoflight mode is currently active, or what that mode will do next, diverges from the aircraft's actual behaviour, leading to unexpected aircraft responses that the crew did not anticipate.",
      "mode confusion refers exclusively to a disagreement between two pilots about which one is designated Pilot Flying.",
    ],
    answer: 2,
    explain:
      "Automation mode confusion occurs when the crew's mental model of which autoflight mode is currently engaged, or of what that mode will command next, diverges from what the automation is actually doing -- for example, a mode transitioning unexpectedly due to an armed condition being met -- resulting in an 'automation surprise' where the aircraft behaves in a way the crew did not anticipate, which is why monitoring the flight mode annunciator and understanding mode logic is emphasized in automation training.",
    reference: "TP 690 -- Human Factors: Automation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Subtle pilot incapacitation, as distinguished from obvious (overt) incapacitation, is a particular CRM concern because",
    options: [
      "subtle incapacitation always presents identically to obvious incapacitation, making the distinction between the two meaningless in practice.",
      "subtle incapacitation is defined as affecting only ground personnel, with no relevance to a pilot at the controls.",
      "the affected pilot always immediately recognizes and reports their own incapacitation, removing any need for the other crew member to monitor for it.",
      "the affected pilot may remain conscious and appear outwardly normal while their performance, judgment, or awareness is significantly degraded, making the condition harder for the other crew member to recognize than a clearly obvious collapse or loss of consciousness.",
    ],
    answer: 3,
    explain:
      "Unlike obvious incapacitation, where a pilot clearly collapses or loses consciousness, subtle incapacitation involves the pilot remaining conscious and often outwardly appearing normal while some aspect of their performance, judgment, situational awareness, or physical capability is significantly degraded; because there is no dramatic, unmistakable sign, subtle incapacitation is harder for the other crew member to detect, which is why CRM training emphasizes cross-monitoring for unusual behaviour, unresponsiveness to callouts, or degraded performance as possible indicators.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Underload (or boredom), particularly during long periods of low-workload cruise flight with the aircraft on autopilot, is a recognized human factors risk because it can lead to",
    options: [
      "reduced vigilance and slower reaction to an unexpected event, in a manner conceptually related to (though distinct from) the vigilance decrement seen during monotonous monitoring tasks.",
      "a condition that affects only ground-based air traffic controllers, with no relevance to flight crew performance during cruise.",
      "an increase in physical fatigue only, with no measurable effect on cognitive alertness or reaction time.",
      "consistently improved reaction time and attentiveness, since a low-workload environment is defined as optimal for sustained human performance.",
    ],
    answer: 0,
    explain:
      "Just as excessive workload can degrade performance, sustained underload -- extended periods of low workload and minimal active task engagement, such as long cruise segments on autopilot -- can also reduce vigilance and slow reaction to an unexpected event, an effect conceptually related to the vigilance decrement documented in monotonous monitoring tasks, illustrating that both very high and very low workload can carry performance risks.",
    reference: "TP 690 -- Human Factors: Workload",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'two-challenge rule,' a specific assertiveness technique sometimes taught as part of CRM training, generally means that",
    options: [
      "a pilot must physically demonstrate a manoeuvre twice before a trainee is permitted to attempt it themselves.",
      "if a crew member raises a safety concern and does not receive an adequate response after stating it a second time, they are expected (or, on some aircraft, empowered) to take further action, such as taking control, to resolve the concern.",
      "a crew member is permitted to raise a safety concern only twice during an entire flight, after which further concerns may not be voiced.",
      "the rule applies exclusively to air traffic controllers issuing repeated clearances, with no application to interaction between flight deck crew members.",
    ],
    answer: 1,
    explain:
      "The two-challenge rule is an assertiveness technique in which a crew member who raises a safety concern and does not receive an adequate acknowledgment or response is expected to restate the concern; if that second challenge also fails to produce an adequate response, the crew member is generally expected (or, in some operator procedures, explicitly empowered) to take further action, up to and including taking control of the aircraft, to address the concern -- a structured tool intended to counter a steep authority gradient that might otherwise discourage speaking up.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "In addition to the well-known window of circadian low in the early morning hours, many people also experience a secondary, smaller dip in alertness known as the post-lunch (early afternoon) dip, which is significant to fatigue risk management because",
    options: [
      "it occurs only in people who have eaten a large meal, and is therefore purely a digestive effect entirely unrelated to the circadian rhythm.",
      "it is more severe than the window of circadian low and represents the single greatest fatigue risk period in a 24-hour cycle.",
      "it represents a second, though generally less severe, natural low point in the circadian alertness cycle, meaning fatigue risk is not confined solely to overnight or early-morning operations.",
      "it has no relationship whatsoever to the body's circadian rhythm and instead depends entirely on cumulative hours awake.",
    ],
    answer: 2,
    explain:
      "Beyond the well-documented window of circadian low (typically in the early morning hours), most people also experience a secondary, generally smaller dip in alertness in the early afternoon (the post-lunch dip), reflecting the natural circadian alertness cycle rather than being purely a digestive effect; recognizing this secondary dip is relevant to fatigue risk management because it means elevated fatigue risk is not confined solely to overnight or early-morning operations.",
    reference: "TP 690 -- Human Factors: Fatigue",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The bystander effect, as it can apply within a multi-crew flight deck, describes the risk that",
    options: [
      "additional crew members reliably increase, rather than potentially diffuse, each individual's sense of personal responsibility for catching an error.",
      "the bystander effect describes a purely individual, single-pilot phenomenon with no relevance to multi-crew operations at all.",
      "having more than one crew member aware of a problem always guarantees a faster and more effective response than a single crew member acting alone.",
      "when more than one crew member is aware of a developing problem, each may individually assume that someone else will notice, mention, or address it, resulting in a delayed or absent response overall compared to if only one person were aware.",
    ],
    answer: 3,
    explain:
      "The bystander effect (or diffusion of responsibility) describes how, when more than one person is aware of a developing problem, each individual may assume someone else will notice, mention, or take action on it, which can paradoxically result in a slower or absent response compared to a situation where only one person is aware and therefore feels solely responsible -- a risk relevant to multi-crew error detection that structured CRM practices (explicit callouts, defined monitoring roles) are partly designed to counter.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Standardized flight deck callouts (such as calling out specific altitudes, speeds, or configuration changes at defined points) serve a human factors purpose primarily by",
    options: [
      "reducing ambiguity in crew communication, supporting a shared mental model of the aircraft's state between both pilots, and creating natural opportunities for one crew member to catch and correct an error made by the other.",
      "applying only during the takeoff phase of flight, with no relevance to any other phase.",
      "existing purely as a formality with no measurable effect on crew coordination, error detection, or situational awareness.",
      "replacing the need for either pilot to actually monitor the relevant instrument or parameter themselves, since the callout alone is considered sufficient.",
    ],
    answer: 0,
    explain:
      "Standardized callouts reduce ambiguity by using consistent, predictable phrasing at defined points, which helps both pilots maintain a shared mental model of the aircraft's current state (altitude, speed, configuration, and so on); because each callout requires the other crew member to acknowledge or respond, it also creates a structured opportunity to catch and correct an error or a missed action before it develops further, rather than the callout substituting for the pilot's own monitoring of the relevant instrument.",
    reference: "TP 690 -- Human Factors: Crew Resource Management",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Risk homeostasis (or 'target risk' theory), as a concept sometimes discussed in aviation safety, proposes that",
    options: [
      "the total amount of risk in any activity is fixed and unchangeable by any safety improvement, equipment change, or procedural change whatsoever.",
      "individuals tend to adjust their behaviour to maintain a personal, relatively stable level of perceived risk, meaning that a safety improvement (such as new equipment or a new procedure) may be partly offset if it leads people to accept more risk elsewhere in their behaviour.",
      "risk homeostasis describes a purely mechanical, aircraft-systems phenomenon with no relevance to human behaviour or decision-making at all.",
      "individuals always reduce their risk-taking behaviour by an equal or greater amount than any safety improvement provides, so total risk consistently falls with every improvement.",
    ],
    answer: 1,
    explain:
      "Risk homeostasis theory proposes that individuals have an internal, relatively stable target level of perceived risk they are comfortable with, and that they adjust their behaviour to maintain that level; a practical implication discussed in aviation safety is that a safety improvement (new equipment, a new procedure, and so on) can be partly offset if it leads people to accept more risk elsewhere in their behaviour to compensate, which is a reason safety culture and procedural discipline remain important even as technology and equipment improve.",
    reference: "TP 690 -- Human Factors: Risk Management",
  },
];
