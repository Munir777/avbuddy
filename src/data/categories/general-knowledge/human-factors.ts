import type { Question } from "../../../types";

// General aviation knowledge - Human Factors.
// Original questions written from general, widely-published aviation
// human-factors/physiology knowledge, not copied from any single source
// document. No company, brand, or publisher names appear anywhere below.
// Figures involving individual physiological tolerance (e.g. time of useful
// consciousness) are hedged as approximate/variable rather than stated as
// fixed values, consistent with how that topic is normally taught.
export const HUMAN_FACTORS_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "Which of the following is a commonly cited early symptom of hypoxia?",
    options: [
      "A false sense of well-being (euphoria) with impaired judgement",
      "Immediate loss of consciousness with no warning signs",
      "A sharp, localised pain in the chest",
      "Sudden and complete loss of colour vision only"
    ],
    answer: 0,
    explain:
      "Early hypoxia often produces a false sense of well-being and overconfidence alongside impaired judgement and slowed reaction time - which is part of what makes it dangerous, since the affected person may not recognise anything is wrong. Other commonly cited early signs include mild euphoria, poor coordination, and bluish discoloration of lips or nail beds as the condition progresses.",
    reference: "Human Factors - Hypoxia",
  },
  {
    id: 2,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "What is generally meant by 'time of useful consciousness' in the context of altitude physiology?",
    options: [
      "The approximate time available, after loss of oxygen supply at a given altitude, during which a person can still take effective action before impairment sets in",
      "A fixed, universal time limit that is identical for everyone at every altitude",
      "The total flight time an aircraft can remain above FL350",
      "The time it takes cabin pressure to fully equalise with outside pressure"
    ],
    answer: 0,
    explain:
      "Time of useful consciousness is an approximate window, not a fixed number - it varies by individual, altitude, and activity level, and shortens significantly at higher altitudes and with physical exertion. It is generally taught as an estimate rather than a precise guarantee, which is why crews are trained to act immediately on any indication of decompression rather than counting on a specific number of seconds.",
    reference: "Human Factors - Altitude Physiology",
  },
  {
    id: 3,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "Hyperventilation in flight is most often triggered by which of the following?",
    options: [
      "Stress or anxiety leading to excessive, rapid breathing that lowers carbon dioxide levels",
      "Breathing too slowly during a long cruise segment",
      "An increase in cabin humidity",
      "Sitting still for extended periods without moving"
    ],
    answer: 0,
    explain:
      "Hyperventilation is commonly brought on by anxiety, stress, or fear, causing over-breathing that excessively lowers blood carbon dioxide levels. This can produce symptoms such as light-headedness, tingling in the extremities, and visual disturbance - symptoms that can be mistaken for hypoxia, which is why the distinction matters operationally.",
    reference: "Human Factors - Breathing & Respiratory Physiology",
  },
  {
    id: 4,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "As a general precaution, why is a waiting period commonly recommended between scuba diving and flying?",
    options: [
      "To reduce the risk of decompression sickness from dissolved gas coming out of solution as cabin altitude increases",
      "Because diving affects an aircraft's weight and balance calculations",
      "To allow enough time for wetsuit equipment to fully dry",
      "Because diving has no bearing on flight physiology and no waiting period is ever suggested"
    ],
    answer: 0,
    explain:
      "During a dive, the body absorbs extra dissolved gas under pressure; ascending too soon afterwards - including flying, since cabin altitude effectively lowers ambient pressure further - can allow that gas to come out of solution and form bubbles, a mechanism associated with decompression sickness. Recommended waiting periods vary by diving profile and are set out in dive-training and aeromedical guidance rather than a single universal figure.",
    reference: "Human Factors - Aviation Physiology & Diving",
  },
  {
    id: 5,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "Which part of the inner ear is primarily responsible for the sense of balance and spatial orientation?",
    options: ["The semicircular canals", "The cochlea", "The eardrum (tympanic membrane)", "The Eustachian tube"],
    answer: 0,
    explain:
      "The semicircular canals of the inner ear detect rotational movement and, together with other vestibular structures, contribute to balance and spatial orientation. The cochlea, by contrast, is primarily responsible for hearing rather than balance - which is part of why disorientation can occur when visual and vestibular cues conflict, as in certain flight conditions.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 6,
    subject: "General Knowledge",
    system: "Human Factors",
    q: "Within the bloodstream, oxygen is primarily transported by which mechanism?",
    options: [
      "Binding to hemoglobin in red blood cells",
      "Dissolving directly and entirely in blood plasma",
      "Attaching to white blood cells",
      "Being carried exclusively as a gas within the lungs"
    ],
    answer: 0,
    explain:
      "The great majority of oxygen carried in the blood is bound to hemoglobin within red blood cells, with only a small fraction dissolved directly in plasma. Anything that reduces hemoglobin's oxygen-carrying capacity or its ability to bind oxygen (such as reduced ambient pressure at altitude) reduces the oxygen actually delivered to tissues, even if breathing itself feels normal.",
    reference: "Human Factors - Oxygen Transport & Respiration",
  },
];
