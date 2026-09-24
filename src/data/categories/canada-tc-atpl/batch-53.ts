import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 53 -- Section 7: Human
// Factors, sixth pass. Original questions written from the TC AIM
// 2026-1 and the TP 690 syllabus (topic headings only, no sample
// questions). Covers the break-off phenomenon, vection illusion,
// dental barotrauma, rapid decompression hazards, eustress vs
// distress, the human information processing model, the
// aviate-navigate-communicate priority mnemonic, shared mental
// models, overconfidence bias, expectation bias, cabin crew CRM
// coordination, Fatigue Risk Management Systems, sleep debt
// accumulation, cold stress/hypothermia, the recognition-primed
// decision model, and the vestibular/visual conflict underlying
// spatial disorientation -- topics not yet addressed in batches 7,
// 15, 24, 33, or 43. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_53_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'break-off phenomenon,' occasionally reported by pilots flying alone at high altitude in clear conditions, describes",
    options: [
      "a hearing loss condition caused by cabin noise exposure, unrelated to isolation, altitude, or any perceptual or psychological experience.",
      "a navigational error in which the pilot loses track of the aircraft's position, a purely procedural rather than psychological phenomenon.",
      "a feeling of detachment or isolation from the earth and normal surroundings, sometimes accompanied by a dreamlike or unreal quality to the experience.",
      "a physical structural failure of the aircraft's airframe occurring specifically at high altitude, unrelated to any psychological or perceptual experience.",
    ],
    answer: 2,
    explain:
      "The break-off phenomenon describes a feeling of detachment or isolation from the earth and normal surroundings that some pilots report when flying alone at high altitude in clear conditions, sometimes with a dreamlike or unreal quality -- it is a psychological/perceptual experience, not a structural airframe failure, a hearing loss condition, or a navigational error.",
    reference: "TC AIM AIR - Break-off Phenomenon",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The vection illusion is a false sensation in which",
    options: [
      "the illusion applies exclusively to hearing-related spatial disorientation, with no connection whatsoever to vision or the sensation of motion.",
      "a genuinely moving aircraft is perceived by the pilot as being completely stationary, the reverse of the actual vection phenomenon.",
      "a pilot experiences a false sensation of sound rather than any false sensation of motion, despite what the term 'vection' would otherwise suggest.",
      "a stationary observer perceives self-motion (or a different rate/direction of motion) due to visual cues, such as watching a nearby large object or vehicle move.",
    ],
    answer: 3,
    explain:
      "The vection illusion is a false sensation of self-motion (or altered motion) experienced by a stationary or steadily moving observer due to visual cues -- for example, perceiving one's own aircraft to be moving when it is actually a nearby vehicle or aircraft that is moving -- rather than a genuinely moving aircraft being perceived as stationary, a purely auditory illusion, or something unrelated to vision.",
    reference: "TC AIM AIR - Visual Illusions",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Dental barotrauma ('tooth squeeze'), a form of trapped-gas discomfort distinct from ear or sinus block, can occur when",
    options: [
      "a small pocket of gas becomes trapped beneath a filling, crown, or within a cavity in a tooth, expanding or contracting with changing cabin altitude and causing pain.",
      "a tooth is physically damaged by direct contact with cabin equipment, a mechanical injury unrelated to any gas expansion or altitude change.",
      "it occurs only at ground level with the cabin unpressurized, and never during an actual change in cabin altitude in flight.",
      "dental barotrauma is purely a myth with no physiological basis, since teeth are understood to contain no gas-trapping spaces of any kind.",
    ],
    answer: 0,
    explain:
      "Dental barotrauma occurs when a small pocket of gas becomes trapped beneath a filling, crown, or within a dental cavity, and that trapped gas expands or contracts as cabin altitude changes, causing pain -- it is a genuine, if less commonly discussed, form of trapped-gas discomfort distinct from ear or sinus block, not a mechanical injury, a myth, or something limited to ground-level conditions.",
    reference: "TC AIM AIR - Trapped Gas Disorders",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A rapid (explosive) decompression, compared to a slow, gradual loss of cabin pressure, presents a distinct hazard partly because",
    options: [
      "it always occurs only on the ground, since rapid decompression is understood to be impossible once an aircraft has become airborne.",
      "it can produce a sudden temperature drop, fogging, flying debris, and a sudden onset of significantly reduced time of useful consciousness, leaving little time to don oxygen before impairment sets in.",
      "it has no meaningful physiological effect on occupants at all, since only a slow, gradual pressure loss is understood to pose any risk to time of useful consciousness.",
      "it primarily affects the aircraft's electrical systems rather than the occupants, with no bearing on cabin pressure, oxygen availability, or crew alertness.",
    ],
    answer: 1,
    explain:
      "A rapid (explosive) decompression can produce a sudden temperature drop, fogging as moisture condenses, flying debris from the pressure differential, and an abrupt loss of effective cabin pressure that leaves significantly less time of useful consciousness than a slow, gradual pressure loss would -- this urgency is precisely why rapid decompression is treated as a distinct and especially time-critical hazard, not something limited to ground operations or unrelated to occupant physiology.",
    reference: "TC AIM AIR - Rapid Decompression",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Eustress, as distinguished from distress, refers to",
    options: [
      "a purely physical (rather than psychological) form of stress, with distress understood to refer exclusively to psychological stress and eustress exclusively to physical stress.",
      "an outdated concept no longer considered relevant to modern human factors training, replaced entirely by the Yerkes-Dodson arousal-performance relationship.",
      "a form of stress that can be experienced as positive or motivating, potentially enhancing focus and performance up to a point, unlike distress, which is experienced negatively and tends to degrade performance.",
      "the complete absence of any stress response whatsoever, making eustress simply another term for a fully relaxed physiological state.",
    ],
    answer: 2,
    explain:
      "Eustress refers to a form of stress that can be experienced as positive or motivating, potentially enhancing focus and performance up to a point, in contrast to distress, which is experienced negatively and tends to degrade performance -- eustress is not simply an absence of any stress response, the eustress/distress distinction is not a physical-versus-psychological split, and the concept complements, rather than being replaced by, the Yerkes-Dodson relationship between arousal and performance.",
    reference: "TC AIM AIR - Stress and Performance",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The human information processing model, describing how a pilot responds to an event, generally involves the sequential stages of",
    options: [
      "a single, unified stage with no meaningful distinction between sensing a stimulus, interpreting it, deciding how to respond, and acting.",
      "acting first, then sensing, then deciding, then perceiving, reversing the sequence in which these stages actually occur.",
      "stages that apply only to visual stimuli, with auditory or other sensory stimuli understood to bypass this processing model entirely.",
      "sensing (receiving a stimulus), perceiving/interpreting that stimulus, deciding on a response, and then acting on that decision.",
    ],
    answer: 3,
    explain:
      "The human information processing model generally describes a sequence of sensing (receiving a stimulus through the senses), perceiving/interpreting that stimulus, deciding on an appropriate response, and then acting on that decision -- delays or errors can occur at any stage, and the model is not limited to visual stimuli alone but applies broadly across sensory inputs, and the stages occur in that order rather than in reverse.",
    reference: "TC AIM AIR - Human Information Processing",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'aviate, navigate, communicate' priority mnemonic is used to help a pilot",
    options: [
      "manage workload during a high-demand or emergency situation by establishing a clear priority order: first maintain safe control of the aircraft, then ensure correct navigation, and only then attend to communication.",
      "reverse the normal priority so that communication with ATC always takes precedence over maintaining safe control of the aircraft, regardless of the situation.",
      "determine the correct order to complete a normal pre-flight checklist, a routine procedural application unrelated to workload management during an in-flight abnormal situation.",
      "decide which radio frequency to select first when multiple frequencies are available, a purely communications-equipment-related application unrelated to broader task prioritization.",
    ],
    answer: 0,
    explain:
      "'Aviate, navigate, communicate' is a workload management mnemonic that establishes a clear priority order during a high-demand or emergency situation: first and foremost maintain safe control of the aircraft (aviate), then ensure correct navigation, and only then attend to communication -- it is a general task-prioritization principle for abnormal situations, not a pre-flight checklist sequence, a frequency-selection rule, or an instruction to prioritize communication above flying the aircraft.",
    reference: "TC AIM AIR - Workload Management",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A shared mental model among crew members, as a component of team situational awareness, refers to",
    options: [
      "a single crew member's individual situational awareness considered in isolation, making 'shared' a misleading term for what is actually an individual-level concept.",
      "a common, mutually understood picture of the current situation, plan, and expected next steps held by all crew members, reducing the risk of miscommunication or uncoordinated action.",
      "a requirement that all crew members have received identical training histories, since a shared mental model is understood to refer to training background rather than a shared, current understanding of the situation.",
      "a fixed briefing document reviewed only once before departure, with no ongoing update or refinement expected as the flight progresses.",
    ],
    answer: 1,
    explain:
      "A shared mental model refers to a common, mutually understood picture of the current situation, plan, and expected next steps held by all crew members, reducing the risk of miscommunication or uncoordinated action -- it is a team-level concept built through ongoing communication (such as briefings and callouts), not identical training backgrounds, an individual's isolated awareness, or a static document reviewed only once and never updated.",
    reference: "TC AIM AIR - Team Situational Awareness",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Overconfidence bias, as it can affect pilot decision-making, describes a tendency to",
    options: [
      "have no measurable effect on decision-making at all, since confidence level is understood to be entirely unrelated to the quality of decisions actually made.",
      "systematically underestimate one's own abilities in every situation, the opposite of what overconfidence bias actually describes.",
      "overestimate one's own knowledge, skill, or the accuracy of one's judgment, potentially leading to inadequate margin or preparation for a given situation.",
      "apply only to newly licensed, low-experience pilots, with experienced pilots understood to be entirely immune to any form of overconfidence.",
    ],
    answer: 2,
    explain:
      "Overconfidence bias describes a tendency to overestimate one's own knowledge, skill, or the accuracy of one's judgment, which can lead to inadequate margin or preparation for a given situation -- it is the opposite of systematically underestimating one's abilities, it does have a measurable effect on decision quality, and it is not limited to low-experience pilots; experienced pilots can be susceptible to it as well, sometimes precisely because of their experience.",
    reference: "TC AIM AIR - Cognitive Biases in Decision-Making",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Expectation bias, relevant to radio communication errors, describes a tendency for a pilot to",
    options: [
      "apply only to visual, rather than auditory, information, making 'expectation bias' in a communications context a misapplication of the underlying concept.",
      "ignore all radio transmissions entirely once a certain workload threshold is reached, rather than selectively mishearing content based on what was expected.",
      "always request a full readback of every transmission regardless of content, a behaviour that is the opposite of what expectation bias actually predisposes a pilot toward.",
      "hear or perceive a transmission as matching what was expected (such as a routinely assigned runway or altitude) rather than what was actually said, particularly under high workload.",
    ],
    answer: 3,
    explain:
      "Expectation bias describes a tendency for a pilot to hear or perceive a transmission as matching what was expected -- such as a routinely assigned runway or altitude -- rather than what was actually said, particularly under high workload, which is a recognized contributor to readback-hearback errors; it does not describe a tendency to request more readbacks, to ignore transmissions outright, or a concept limited to visual rather than auditory information.",
    reference: "TC AIM AIR - Communication Errors",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Effective CRM on a multi-crew aircraft generally extends beyond the flight deck to include coordination with cabin crew, primarily because",
    options: [
      "cabin crew can observe conditions and gather information (such as a cabin safety concern or a passenger medical issue) that flight deck crew may not otherwise be aware of, making cross-cockpit-cabin communication an important part of overall crew coordination.",
      "cabin crew are responsible for making all final operational decisions during flight, with flight deck crew limited to simply carrying out those decisions.",
      "cross-cockpit-cabin communication is relevant only during an emergency evacuation, with no application to normal flight operations or non-emergency situations.",
      "cabin crew have no role in CRM whatsoever, since CRM is understood to apply exclusively to communication and coordination between the pilots on the flight deck.",
    ],
    answer: 0,
    explain:
      "Effective CRM extends to coordination with cabin crew because they can observe conditions and gather information -- such as a cabin safety concern or a passenger medical issue -- that flight deck crew may not otherwise be aware of, making cross-cockpit-cabin communication a meaningful part of overall crew coordination; CRM is not limited to pilot-only communication, cabin crew do not make final operational decisions in place of the flight deck, and this coordination is relevant during normal operations, not only during an emergency evacuation.",
    reference: "TC AIM AIR - Crew Resource Management",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A Fatigue Risk Management System (FRMS), as an alternative or complement to purely prescriptive flight and duty time limits, is generally intended to",
    options: [
      "focus solely on post-incident investigation, providing no proactive or ongoing fatigue risk management function during normal, day-to-day operations.",
      "manage fatigue risk using a data-informed, ongoing process that can account for factors such as actual sleep obtained and workload, rather than relying solely on fixed hour limits applied uniformly to every situation.",
      "eliminate the need for any flight and duty time limitations whatsoever, since an FRMS is understood to fully replace all prescriptive limits with no minimum standard remaining.",
      "apply exclusively to cabin crew, with flight crew fatigue understood to be managed only through prescriptive flight and duty time limits and never through an FRMS.",
    ],
    answer: 1,
    explain:
      "A Fatigue Risk Management System manages fatigue risk using a data-informed, ongoing process that can account for factors such as actual sleep obtained and workload, complementing (rather than necessarily eliminating) prescriptive flight and duty time limits -- it is not limited to cabin crew, and it is intended to function proactively and on an ongoing basis, not solely as a post-incident investigative tool.",
    reference: "TC AIM AIR - Fatigue Risk Management",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Sleep debt, accumulating over a series of consecutive duty days with insufficient recovery sleep, is significant because",
    options: [
      "it has no cumulative effect at all, since any single night of adequate sleep is understood to fully reset all prior sleep debt regardless of how many preceding nights were short.",
      "it applies only to a single night's sleep loss, with no meaningful concept of debt accumulating across multiple consecutive days.",
      "its effects on alertness and performance can accumulate progressively across the series of days, even if each individual night's sleep loss seems relatively minor on its own.",
      "it improves alertness over time, since accumulating sleep debt is, counterintuitively, understood to enhance rather than degrade performance.",
    ],
    answer: 2,
    explain:
      "Sleep debt can accumulate progressively across a series of consecutive duty days with insufficient recovery sleep, so that its effects on alertness and performance build up even when each individual night's shortfall seems relatively minor on its own -- a single night of adequate sleep does not necessarily fully reset an accumulated debt, the concept explicitly concerns effects across multiple days (not just one night), and accumulating sleep debt degrades, rather than improves, performance.",
    reference: "TC AIM AIR - Fatigue and Sleep Debt",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Cold stress (and, in a survival situation, hypothermia risk) is a particularly relevant human factors consideration for flight operations in remote or northern regions because",
    options: [
      "hypothermia risk is relevant only after a person has already been rescued, with no relevance to the period during which a person is still awaiting rescue.",
      "cold temperatures are understood to have no physiological effect on human performance or survival, making cold stress an irrelevant consideration for any flight operation.",
      "cold stress applies only to passengers, with flight crew understood to be entirely unaffected by cold exposure in any survival scenario.",
      "a forced landing or extended delay in a cold environment can rapidly become a survival situation, making cold-weather preparedness and appropriate survival equipment an important part of operational planning.",
    ],
    answer: 3,
    explain:
      "Cold stress is a relevant human factors consideration for remote or northern operations because a forced landing or extended delay in a cold environment can rapidly become a survival situation, making cold-weather preparedness and appropriate survival equipment an important part of operational planning -- cold exposure has genuine physiological effects on both crew and passengers, and hypothermia risk is most acute during the period a person is exposed to the cold while awaiting rescue, not only afterward.",
    reference: "TC AIM AIR - Survival and Cold Weather Preparedness",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The recognition-primed decision (RPD) model, as an alternative to a fully structured, analytical decision-making process, describes how an experienced decision-maker often",
    options: [
      "rapidly recognizes a situation as similar to past experience and selects a workable course of action based on that recognition, rather than systematically comparing multiple options at length.",
      "always follows a fixed, step-by-step analytical checklist for every decision, making RPD functionally identical to a fully structured decision-making model such as DECIDE.",
      "applies only to inexperienced decision-makers, since experienced decision-makers are understood to rely exclusively on fully structured analytical models rather than rapid recognition.",
      "makes decisions entirely at random, with no reliance whatsoever on past experience or pattern recognition of any kind.",
    ],
    answer: 0,
    explain:
      "The recognition-primed decision model describes how an experienced decision-maker often rapidly recognizes a situation as similar to past experience and selects a workable course of action based on that recognition, rather than systematically comparing multiple options through a lengthy, fully structured analytical process -- it is a genuinely distinct approach from a fixed, step-by-step model like DECIDE, it is not random or experience-independent, and it is particularly associated with experienced, rather than inexperienced, decision-makers.",
    reference: "TC AIM AIR - Decision-Making Models",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Most spatial disorientation illusions (such as the leans, the graveyard spiral, or the somatogravic illusion) share a common underlying mechanism in that they generally arise from",
    options: [
      "a physical malfunction of the aircraft's flight instruments, since spatial disorientation illusions are, in every case, understood to originate from an instrument system failure rather than any human sensory process.",
      "a conflict or mismatch between the information provided by the vestibular (inner ear) system and other sensory inputs, particularly vision, especially when visual reference to a true horizon is degraded or absent.",
      "a single, universal cause entirely unrelated to the vestibular system, since spatial disorientation illusions are understood to result exclusively from vision with no vestibular contribution at all.",
      "hearing impairment, since the illusions are understood to primarily involve the auditory sense rather than the vestibular or visual senses.",
    ],
    answer: 1,
    explain:
      "Most spatial disorientation illusions share a common underlying mechanism: a conflict or mismatch between the vestibular (inner ear) system's sense of motion and orientation and other sensory inputs, particularly vision, which becomes especially hazardous when visual reference to a true horizon is degraded or absent (such as at night or in cloud) -- these illusions are not purely visual with no vestibular contribution, they do not originate from an instrument malfunction, and they are not primarily hearing-related.",
    reference: "TC AIM AIR - Spatial Disorientation",
  },
];
