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
    subject: "ATPL General Knowledge",
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
    subject: "ATPL General Knowledge",
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
    subject: "ATPL General Knowledge",
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
    subject: "ATPL General Knowledge",
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
    subject: "ATPL General Knowledge",
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
    subject: "ATPL General Knowledge",
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
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The rate and depth of a person's breathing is primarily regulated by the body's sensitivity to the concentration of which substance?",
    options: ["Carbon dioxide in the blood", "Oxygen in the cells", "Nitrogen in the air", "Water vapour in the alveoli"],
    answer: 0,
    explain:
      "Under normal conditions, breathing rate and depth are driven mainly by chemoreceptors sensing blood carbon dioxide levels, not by oxygen levels directly - which is part of why hyperventilation (excess CO2 elimination) and hypoxia (inadequate oxygen) are physiologically distinct problems with different underlying triggers.",
    reference: "Human Factors - Breathing & Respiratory Physiology",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Which of these is a commonly recommended way for a pilot to help manage the onset of hyperventilation?",
    options: [
      "Deliberately talking through the relevant procedure aloud, which tends to slow and regularise breathing",
      "Breathing as rapidly and deeply as possible until symptoms resolve",
      "Immediately donning a pure-oxygen mask regardless of cause",
      "Holding the breath for as long as possible",
    ],
    answer: 0,
    explain:
      "Because hyperventilation is caused by over-breathing rather than a lack of oxygen, consciously slowing and controlling the breathing rate - for instance by talking through a checklist or procedure aloud - tends to help restore normal blood carbon dioxide levels and resolve the symptoms.",
    reference: "Human Factors - Breathing & Respiratory Physiology",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Following a rapid decompression or a dive-related decompression sickness event, pain localised in the joints is generally referred to as:",
    options: ["The bends", "The chokes", "The creeps", "Barotitis"],
    answer: 0,
    explain:
      "'The bends' is the common term for joint pain caused by nitrogen bubbles forming in and around joints after a pressure drop. Respiratory symptoms from bubbles affecting the lungs are called 'the chokes', while a crawling sensation from bubbles under the skin is sometimes called 'the creeps'.",
    reference: "Human Factors - Decompression Sickness",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "What are commonly cited effects of significant sleep loss on a pilot's performance?",
    options: [
      "Increased fatigue, reduced concentration and attention, and greater susceptibility to sensory illusions and mood changes",
      "No measurable effect unless the sleep loss exceeds 48 hours",
      "Improved reaction time due to heightened alertness",
      "Effects limited strictly to muscular cramping",
    ],
    answer: 0,
    explain:
      "Sleep loss is well recognised as degrading performance in a graded way (not just after some very long threshold), including reduced concentration, slower reaction time, greater fatigue, mood disturbance, and an increased risk of sensory illusions and lapses in attention.",
    reference: "Human Factors - Fatigue & Performance",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "A standby (emergency) attitude indicator is typically designed so that it:",
    options: [
      "Contains its own self-contained gyro and power source, keeping it available through a main electrical failure",
      "Only functions once the main electrical system has completely failed",
      "Relies entirely on the primary attitude system's gyro",
      "Requires the autopilot to remain engaged in order to operate",
    ],
    answer: 0,
    explain:
      "A standby attitude indicator commonly carries its own independent gyro and power supply (such as a small internal battery), specifically so it keeps working if the aircraft's main electrical system or primary attitude reference fails.",
    reference: "Human Factors - Backup Instrumentation & Redundancy",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Which statement about communication between crew members is generally supported by accident and incident analysis?",
    options: [
      "Problems in the personal relationship or communication between crew members are a recognised contributing factor in incidents and accidents",
      "Communication quality between crew members has no measurable link to flight safety",
      "Only communication with air traffic control matters for safety, not communication within the crew",
      "Inconsistent crew communication tends to improve overall flight safety by encouraging independent checks",
    ],
    answer: 0,
    explain:
      "Breakdowns in communication and interpersonal dynamics between crew members are a well-documented contributing factor across many incident and accident investigations, which is a large part of why crew resource management training exists.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "What tends to make the early stages of hypoxia particularly dangerous for a pilot to recognise in themselves?",
    options: [
      "It can produce a false sense of well-being alongside reduced concentration, rather than an obviously alarming symptom",
      "It always causes sudden, unmistakable loss of consciousness with no preceding symptoms",
      "It only affects vision and leaves judgement and mood completely unaffected",
      "It is always accompanied by sharp, severe pain that immediately draws attention",
    ],
    answer: 0,
    explain:
      "Because early hypoxia can bring on mild euphoria and a false sense of well-being rather than obvious distress, the affected person's own judgement about whether something is wrong becomes unreliable right when it matters most - which is why supplemental oxygen procedures rely on fixed cabin-altitude triggers rather than waiting for a pilot to notice symptoms.",
    reference: "Human Factors - Hypoxia",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Fundamentally, hyperventilation is best described as:",
    options: [
      "Excessive elimination of carbon dioxide from the blood due to over-breathing",
      "An inadequate supply of oxygen reaching the blood",
      "A buildup of carbon monoxide in the bloodstream",
      "A normal breathing pattern that simply feels uncomfortable",
    ],
    answer: 0,
    explain:
      "Hyperventilation results from breathing more than the body needs, which washes out carbon dioxide faster than it's produced - a fundamentally different mechanism from hypoxia, which is a shortage of oxygen rather than an excess loss of CO2.",
    reference: "Human Factors - Breathing & Respiratory Physiology",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Flying with a severe head cold that has blocked the sinuses or eustachian tubes raises the particular risk of:",
    options: [
      "Pain in the ears or sinuses (barotrauma) as cabin pressure changes during climb and descent",
      "Immediate hypoxia regardless of cabin altitude",
      "Decompression sickness identical to that from scuba diving",
      "No additional risk beyond ordinary cold symptoms",
    ],
    answer: 0,
    explain:
      "When sinus passages or the eustachian tube are blocked, trapped air can't equalise pressure normally as the surrounding cabin pressure changes during climb and descent, which can cause significant ear or sinus pain (barotrauma) - a specific reason pilots are generally advised not to fly with a bad head cold.",
    reference: "Human Factors - Barotrauma & Pressure Changes",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Why does flying shortly after scuba diving carry a particular risk of decompression sickness, beyond the risk from the dive alone?",
    options: [
      "Cabin altitude further reduces ambient pressure on top of the nitrogen already absorbed during the dive, encouraging bubble formation",
      "Aircraft cabin air contains a higher concentration of nitrogen than normal atmospheric air",
      "It has no additional effect beyond the dive itself, provided the diver showered before the flight",
      "It only matters if the dive lasted longer than eight hours",
    ],
    answer: 0,
    explain:
      "During a dive, the body absorbs extra dissolved nitrogen under the higher ambient pressure. Even a pressurised cabin sits at a lower pressure than sea level, so flying too soon afterward compounds the pressure drop the body experiences, increasing the chance that dissolved gas comes out of solution as bubbles - hence the recommended waiting periods before flying after diving.",
    reference: "Human Factors - Aviation Physiology & Diving",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Crossing multiple time zones on a long flight commonly disrupts which internal body mechanism, producing what is popularly known as jet lag?",
    options: [
      "The circadian rhythm",
      "The vestibular (balance) system",
      "The digestive system exclusively",
      "The immune system exclusively",
    ],
    answer: 0,
    explain:
      "Jet lag results from the body's circadian rhythm - its internal roughly 24-hour clock governing sleep, alertness, and various physiological functions - becoming out of step with the new local time after crossing several time zones, producing fatigue, disrupted sleep, and reduced performance until it re-adjusts.",
    reference: "Human Factors - Circadian Rhythm & Jet Lag",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Motion sickness is generally believed to result from:",
    options: [
      "A conflict between the motion sensed by the vestibular (inner ear) system and the motion perceived visually",
      "A simple lack of oxygen reaching the inner ear",
      "Excessive cabin humidity affecting the inner ear directly",
      "A fixed personality trait unrelated to sensory input",
    ],
    answer: 0,
    explain:
      "Motion sickness is generally attributed to a mismatch between the motion the vestibular system senses and the motion the eyes perceive (for example, sensing turbulence-induced movement while the eyes are fixed on a stationary cockpit instrument), rather than any single sense being wrong on its own.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The 'somatogravic illusion' most typically causes a pilot to sense which false impression?",
    options: [
      "A false sensation of pitching up during a strong forward acceleration, such as after take-off",
      "A false sensation of turning while flying straight and level in smooth air",
      "A false sensation of climbing while actually descending at a constant rate",
      "A false sensation of being upside down while in level flight",
    ],
    answer: 0,
    explain:
      "The somatogravic illusion occurs because the inner ear cannot distinguish linear acceleration from a change in pitch attitude - so a strong forward acceleration (as during a powerful take-off climb) can feel like an excessive nose-up pitch, tempting a pilot to push the nose down inappropriately if flying without reference to instruments.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The 'Coriolis illusion' in flight is typically triggered by which action?",
    options: [
      "Moving the head out of the plane of an ongoing turn, disturbing the semicircular canals",
      "Staring at a single bright light for an extended period",
      "A rapid change in cabin pressure alone",
      "Holding the head perfectly still during straight and level flight",
    ],
    answer: 0,
    explain:
      "The Coriolis illusion arises when a pilot moves their head out of the plane of a turn that is already underway (for example, tilting the head down to check a chart during a sustained turn), disturbing more than one semicircular canal at once and producing a strong, disorienting sensation of tumbling or rotating in an entirely different axis.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "In flight, carbon monoxide entering the cabin (for example through a cabin heating system fault) is dangerous mainly because it:",
    options: [
      "Binds to hemoglobin far more readily than oxygen does, reducing the blood's ability to carry oxygen",
      "Directly damages the lungs through its acidity",
      "Displaces nitrogen in the bloodstream",
      "Only affects vision, leaving other functions unimpaired",
    ],
    answer: 0,
    explain:
      "Carbon monoxide binds to hemoglobin far more strongly than oxygen does, effectively blocking oxygen transport even though breathing itself feels normal - producing a form of hypoxia at the cellular level, with early symptoms such as headache and dizziness that can otherwise be mistaken for simple fatigue.",
    reference: "Human Factors - Carbon Monoxide & Hypoxia",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Fatigue that builds up gradually over repeated duty periods without adequate recovery rest, as distinct from tiredness after a single long day, is generally referred to as:",
    options: ["Chronic fatigue", "Acute fatigue", "Circadian fatigue only", "Situational fatigue only"],
    answer: 0,
    explain:
      "Chronic fatigue accumulates over successive periods of inadequate rest or recovery, and is not fully resolved by a single night's sleep - distinct from acute fatigue, which follows a single tiring event or duty period and is generally relieved by normal rest.",
    reference: "Human Factors - Fatigue & Performance",
  },
  {
    id: 23,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Prolonged exposure to high levels of noise and vibration in a cockpit tends to:",
    options: [
      "Contribute to fatigue and reduced concentration over time",
      "Have no measurable effect on pilot performance",
      "Improve alertness by keeping the pilot stimulated",
      "Only affect hearing, with no broader performance impact",
    ],
    answer: 0,
    explain:
      "Sustained noise and vibration are recognised physiological stressors that add to overall workload and contribute to fatigue and reduced concentration over a duty period, on top of any direct effect on hearing from prolonged exposure.",
    reference: "Human Factors - Fatigue & Performance",
  },
  {
    id: 24,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "What is Crew Resource Management (CRM) primarily concerned with?",
    options: [
      "The effective use of all available resources - crew, equipment, and information - to achieve safe and efficient flight operations",
      "The technical procedure for managing a single specific system failure",
      "Scheduling and rostering of flight crew duty hours",
      "The mechanical maintenance of crew life-support equipment",
    ],
    answer: 0,
    explain:
      "CRM training focuses on the non-technical skills - communication, decision-making, workload management, and effective use of all crew members, automation, and available information - that support safe operations, rather than any single technical procedure.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 25,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "In human factors terms, 'threat and error management' primarily concerns:",
    options: [
      "Anticipating external threats and managing crew errors before they lead to an undesired aircraft state",
      "Only the technical maintenance of aircraft systems",
      "Legal liability following an incident",
      "Passenger management during ground delays",
    ],
    answer: 0,
    explain:
      "Threat and error management is a framework for recognising external threats (weather, terrain, traffic, system malfunctions) and managing the errors that crews may make in response, aiming to catch and correct them before they combine into an undesired aircraft state.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 26,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "As a general aeromedical precaution, why is a minimum period between consuming alcohol and acting as a flight crew member commonly required?",
    options: [
      "Because alcohol's impairing effects on judgement and reaction time can persist even after any feeling of intoxication has faded",
      "Because alcohol has no effect on flying performance below the legal driving limit",
      "Because it only affects long-haul flights, not short domestic sectors",
      "Because it is a purely administrative rule with no physiological basis",
    ],
    answer: 0,
    explain:
      "Alcohol continues to impair judgement, reaction time, and decision-making for a period well beyond when any subjective feeling of intoxication has worn off, which is why a minimum abstinence period before flight duty is a standard precaution rather than relying on how a crew member feels.",
    reference: "Human Factors - Alcohol & Performance",
  },
  {
    id: 27,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Which retinal receptors are primarily responsible for night vision, and how do they differ from the receptors used for color/daylight vision?",
    options: [
      "Rods, which are more light-sensitive but do not distinguish color, unlike the cones used for daylight color vision",
      "Cones, which are more light-sensitive and also provide color vision at night",
      "Rods and cones function identically, with no difference between day and night vision",
      "Neither rods nor cones play any role in night vision",
    ],
    answer: 0,
    explain:
      "Rods are far more sensitive to low light levels than cones but cannot distinguish color, which is why night vision appears in shades of grey - cones, which provide color vision, need much more light to function well and are concentrated in the central fovea, an area comparatively poor in rods.",
    reference: "Human Factors - Vision & Night Vision",
  },
  {
    id: 28,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "At night, why is 'off-center viewing' (looking slightly to the side of a faint object rather than directly at it) generally recommended for spotting dim lights or traffic?",
    options: [
      "Because the central fovea has relatively few rods, so directly fixating a faint light can make it harder to see than viewing it slightly off-center",
      "Because looking directly at an object always causes temporary blindness",
      "Because peripheral vision provides better color discrimination than central vision",
      "Because it reduces the risk of autokinesis entirely",
    ],
    answer: 0,
    explain:
      "Because rod cells (responsible for low-light vision) are concentrated away from the central fovea, a faint light viewed straight-on can actually be harder to detect than one viewed slightly off-center, where more rods are available - this is the basis for the off-center viewing technique taught for night lookout.",
    reference: "Human Factors - Vision & Night Vision",
  },
  {
    id: 29,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Empty field myopia' describes the tendency of the eyes to:",
    options: [
      "Default to focusing at a short distance when there is no distinct object in view, such as a featureless sky or haze",
      "Focus perfectly at infinity whenever no object is present",
      "Lose the ability to focus at any distance after prolonged flight",
      "Only occur in bright, high-contrast daylight conditions",
    ],
    answer: 0,
    explain:
      "With nothing specific to focus on - a blank sky, haze, or featureless cloud - the eyes tend to relax to a short, default focal distance rather than infinity, which can reduce the chance of detecting distant traffic or terrain until it is relatively close, making a deliberate, systematic visual scan important.",
    reference: "Human Factors - Vision & Night Vision",
  },
  {
    id: 30,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Autokinesis' refers to the illusion in which:",
    options: [
      "A single stationary light, stared at in darkness for a period, appears to move erratically",
      "A stationary aircraft appears to be moving due to nearby cloud motion",
      "A pilot briefly loses all depth perception in bright daylight",
      "The horizon appears to tilt due to banked flight",
    ],
    answer: 0,
    explain:
      "Autokinesis occurs when a single fixed point of light is stared at against a dark, featureless background for an extended period - with no surrounding reference points, the eyes' small natural movements can make the light appear to drift or move on its own, which is why continuous fixation on a single light at night is discouraged.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 31,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "A 'false horizon' illusion can occur when a pilot mistakenly aligns the aircraft with which kind of misleading visual cue?",
    options: [
      "A sloping cloud deck, a line of ground lights, or a similar feature mistaken for the true horizon",
      "A correctly functioning attitude indicator",
      "A brightly lit runway directly ahead during a clear daytime approach",
      "A GPS-derived track line displayed on the navigation display",
    ],
    answer: 0,
    explain:
      "A false horizon illusion arises when a pilot flying with reference to outside cues aligns the aircraft with a misleading feature - such as a sloping cloud layer, a line of shore lights, or a sloping terrain feature - mistaking it for the actual horizon, which is one reason instrument references are trusted over visual impressions in ambiguous conditions.",
    reference: "Human Factors - Vestibular System & Spatial Disorientation",
  },
  {
    id: 32,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "According to the general relationship between stress (arousal) and performance, how does performance typically behave as stress increases from very low to very high?",
    options: [
      "It rises to a peak at a moderate stress level, then declines again as stress becomes excessive",
      "It steadily improves the more stress increases, with no upper limit",
      "It steadily declines from the very lowest level of stress onward",
      "It remains completely unaffected by stress level at any point",
    ],
    answer: 0,
    explain:
      "This relationship (often depicted as an inverted-U) shows performance improving as arousal rises from very low levels (where under-stimulation and boredom hurt performance) up to a moderate, optimal level, and then declining again as stress becomes excessive and starts to overwhelm attention and decision-making.",
    reference: "Human Factors - Stress & Performance",
  },
  {
    id: 33,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Which of the following is a commonly recommended fatigue countermeasure during long-duration flights where in-seat rest facilities or scheduling allow for it?",
    options: [
      "A short, planned rest period (controlled napping)",
      "Consuming large amounts of caffeine continuously throughout the entire flight",
      "Deliberately skipping meals to stay more alert",
      "Avoiding all physical movement for the duration of the flight",
    ],
    answer: 0,
    explain:
      "A short, planned rest period - sometimes called controlled or strategic napping - is a widely recognised, evidence-based way to reduce the effects of fatigue during long flights, where it can be scheduled within an operator's crew rest arrangements, distinct from simply relying on stimulants.",
    reference: "Human Factors - Fatigue Countermeasures",
  },
  {
    id: 34,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Why are pilots generally advised to be cautious about flying after taking common over-the-counter cold or allergy medication?",
    options: [
      "Because many such medications can cause drowsiness or other side effects that impair performance, even though they are legal and freely available",
      "Because these medications are always more dangerous to flying than prescription medications",
      "Because it is illegal to take any medication within 24 hours of a flight in every jurisdiction",
      "Because such medications have no effect on alertness or reaction time",
    ],
    answer: 0,
    explain:
      "Many common over-the-counter cold and allergy remedies (particularly older antihistamines) cause drowsiness and slowed reaction time as a side effect - being legal and easily available does not mean a medication is free of performance-impairing side effects, which is why caution and, where in doubt, professional advice is generally recommended before flying.",
    reference: "Human Factors - Medication & Performance",
  },
  {
    id: 35,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Sustained positive acceleration (G-force), such as in a rapid pull-up, can progressively cause which sequence of visual effects as blood is drawn away from the eyes and brain?",
    options: [
      "A greying of vision ('greyout'), potentially progressing to complete loss of vision ('blackout') before consciousness itself is lost",
      "An instant, total loss of consciousness with no preceding visual symptoms",
      "A brightening or whiteout of vision, unrelated to blood flow",
      "No visual effect at all, only a sensation of increased hearing sensitivity",
    ],
    answer: 0,
    explain:
      "As sustained positive G draws blood away from the head, the eyes - being particularly sensitive to reduced blood flow - are generally affected first, producing a graying and narrowing of vision ('greyout') that can progress to complete vision loss ('blackout') while the person may still remain conscious, with actual loss of consciousness (G-LOC) occurring only if the exposure continues or intensifies further.",
    reference: "Human Factors - G-Force Physiology",
  },
  {
    id: 36,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Long-term, cumulative exposure to high noise levels in an aviation environment is particularly associated with:",
    options: [
      "Permanent hearing loss, especially affecting higher frequencies",
      "Temporary loss of night vision only",
      "No lasting physiological effect if exposure is limited to work hours",
      "A general improvement in long-term concentration ability",
    ],
    answer: 0,
    explain:
      "Cumulative exposure to high noise levels over a career is a recognised occupational hazard associated with permanent, typically high-frequency-biased hearing loss - which is why hearing protection and noise exposure limits are a standard part of aviation occupational health practice.",
    reference: "Human Factors - Noise & Hearing",
  },
  {
    id: 37,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The SHEL(L) model is a commonly used human factors framework describing the interaction between which elements?",
    options: [
      "Software, Hardware, Environment, and Liveware (people) - including the interactions between them",
      "Speed, Height, Endurance, and Load, as applied to aircraft performance",
      "Safety, Health, Efficiency, and Logistics, as applied to airline management",
      "Single-engine, Heavy, Extended-range, and Light aircraft categories",
    ],
    answer: 0,
    explain:
      "The SHEL(L) model frames human factors around Software (procedures, rules), Hardware (equipment, the machine itself), Environment (physical and organisational context), and Liveware (people - both the individual and interactions with other people), highlighting that most safety issues arise from mismatches at the interfaces between these elements, not from any one element alone.",
    reference: "Human Factors - Human Factors Models",
  },
  {
    id: 38,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Automation complacency' generally describes the risk that:",
    options: [
      "Over-reliance on automated systems can reduce a pilot's active monitoring and manual proficiency over time",
      "Automation always improves every aspect of flight safety with no associated risk",
      "Automated systems are legally required to be disabled during approach and landing",
      "Complacency only affects pilots who have very little flying experience",
    ],
    answer: 0,
    explain:
      "Automation complacency refers to the tendency for high confidence in reliable automated systems to reduce active monitoring, vigilance, and hand-flying proficiency over time - a well-recognised risk that training and procedures (such as periodic manual flying practice) are specifically designed to counter.",
    reference: "Human Factors - Automation & Complacency",
  },
  {
    id: 39,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Confirmation bias', as a decision-making pitfall, describes the tendency to:",
    options: [
      "Favour information that supports an existing belief or expectation while discounting evidence that contradicts it",
      "Always seek out the most negative interpretation of new information",
      "Make decisions purely at random, with no regard for available evidence",
      "Only occur in individuals with no aviation training",
    ],
    answer: 0,
    explain:
      "Confirmation bias is the tendency to notice, favour, and recall information consistent with what a person already expects or believes, while discounting or overlooking contradicting evidence - in a flight deck context, this can mean continuing to interpret ambiguous information consistent with an initial (but wrong) diagnosis of a problem.",
    reference: "Human Factors - Decision-Making Biases",
  },
  {
    id: 40,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The 'startle effect' describes:",
    options: [
      "A brief, involuntary physiological and cognitive reaction to an unexpected event, which can delay an effective response",
      "A prolonged state of fear lasting the remainder of a flight",
      "A deliberate technique used in simulator training to relax trainees",
      "An effect that only occurs in visual meteorological conditions",
    ],
    answer: 0,
    explain:
      "The startle effect is a brief, involuntary reaction - both physiological (elevated heart rate, muscle tension) and cognitive (a momentary freeze or narrowed attention) - triggered by a sudden, unexpected event, which can delay a pilot's effective diagnosis and response even when their underlying knowledge and training are sound.",
    reference: "Human Factors - Startle & Surprise Response",
  },
  {
    id: 41,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Channelized attention' (sometimes called attentional tunneling) describes the risk of:",
    options: [
      "Becoming excessively focused on one task or instrument, at the expense of overall situational awareness",
      "Being unable to focus on any single task for more than a few seconds",
      "A physical narrowing of the visual field caused only by cabin altitude",
      "Only occurring during periods of very low workload",
    ],
    answer: 0,
    explain:
      "Channelized attention describes becoming so absorbed in one task, instrument, or problem that other important cues and overall situational awareness are neglected - a well-documented factor in incidents where crews became fixated on a minor issue while missing a more significant one developing elsewhere.",
    reference: "Human Factors - Attention & Workload Management",
  },
  {
    id: 42,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Groupthink', in a crew decision-making context, describes the tendency for:",
    options: [
      "A group to converge on a consensus decision in a way that suppresses dissenting views or critical evaluation of alternatives",
      "Every group decision to automatically be safer than an individual decision",
      "A crew to disagree constantly, with no decision ever being reached",
      "Only cabin crew, never flight crew, to be affected by shared decision pressures",
    ],
    answer: 0,
    explain:
      "Groupthink describes a group's tendency to prioritise harmony and consensus over rigorously evaluating alternatives, which can suppress dissenting opinions or valid concerns from being raised or taken seriously - a risk CRM training addresses by encouraging structured, explicit questioning and input from all crew members.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 43,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "A 'steep authority gradient' between crew members describes a situation where:",
    options: [
      "A large perceived difference in status or seniority discourages more junior crew members from voicing concerns or questioning decisions",
      "All crew members are treated as having exactly equal authority regardless of role",
      "The captain is legally forbidden from making any final decision",
      "It refers only to differences in altitude, not interpersonal dynamics",
    ],
    answer: 0,
    explain:
      "A steep authority gradient exists where a large perceived power or seniority difference between crew members makes more junior members reluctant to speak up, question, or challenge a more senior member's decision - a factor implicated in various incidents and a key reason CRM training emphasises assertiveness and a more balanced ('flatter') authority gradient.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 44,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "How does dehydration generally affect pilot performance during a long flight?",
    options: [
      "It tends to contribute to fatigue and reduced concentration",
      "It has no measurable effect on performance",
      "It only affects physical strength, not cognitive performance",
      "It improves alertness by increasing heart rate",
    ],
    answer: 0,
    explain:
      "Dehydration is a recognised contributor to fatigue and reduced concentration, particularly on long flights in a low-humidity cabin environment, making adequate fluid intake a straightforward but meaningful part of managing performance over a long duty period.",
    reference: "Human Factors - Fatigue & Performance",
  },
  {
    id: 45,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Presbyopia' refers to:",
    options: [
      "A normal, age-related reduction in the eye's ability to focus on near objects",
      "A sudden loss of color vision caused by hypoxia",
      "An inner-ear balance disorder unrelated to vision",
      "A vision defect that only affects distance vision, never near vision",
    ],
    answer: 0,
    explain:
      "Presbyopia is the normal, gradual age-related stiffening of the eye's lens that reduces its ability to focus on nearby objects (such as instrument panels or charts), which is why reading correction is commonly needed later in life even for people who previously had excellent uncorrected vision.",
    reference: "Human Factors - Vision & Night Vision",
  },
  {
    id: 46,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Task saturation' describes the state in which:",
    options: [
      "The demands of current tasks exceed a person's capacity to manage them effectively, degrading overall performance",
      "A pilot has too little to do and becomes bored",
      "A single task is being performed with excessive precision",
      "It applies only to automated systems, never to a human crew member",
    ],
    answer: 0,
    explain:
      "Task saturation occurs when the combined demands of current tasks exceed what a person can effectively manage, leading to some tasks being neglected, delayed, or done poorly - effective workload management (prioritising, delegating, and shedding lower-priority tasks) is the standard countermeasure taught to prevent it.",
    reference: "Human Factors - Attention & Workload Management",
  },
  {
    id: 47,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The 'DECIDE' model is generally used in aviation as:",
    options: [
      "A structured decision-making framework to work through an in-flight problem systematically",
      "A checklist used only for pre-flight aircraft inspection",
      "A method for calculating fuel reserves",
      "A radio phraseology standard for emergency calls",
    ],
    answer: 0,
    explain:
      "The DECIDE model (Detect, Estimate, Choose a course of action, Identify options, Do - act on the decision, Evaluate the outcome) offers a structured way for a pilot to work through an unfamiliar or developing problem in flight, rather than relying purely on instinct or reacting without a clear process.",
    reference: "Human Factors - Decision-Making Models",
  },
  {
    id: 48,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "A person's 'circadian low point' generally falls during which part of the day, and what does it mean for performance?",
    options: [
      "Typically in the early hours of the morning (roughly 0300-0500 body clock time), associated with reduced alertness and performance",
      "Typically in the middle of the afternoon, associated with peak alertness",
      "It is identical for every individual regardless of their normal sleep schedule",
      "It has no measurable effect on performance at any time of day",
    ],
    answer: 0,
    explain:
      "The circadian low point typically occurs in the early hours of the morning on a person's normal body clock (commonly cited as roughly 0300-0500), when alertness and performance are at their lowest - a factor fatigue risk management systems specifically account for when scheduling duty periods, especially on overnight flights.",
    reference: "Human Factors - Circadian Rhythm & Jet Lag",
  },
  {
    id: 49,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "A 'micro-sleep' is best described as:",
    options: [
      "A brief, unintended episode of sleep lasting only seconds, particularly likely during long, monotonous, low-workload periods",
      "A planned, short rest period taken deliberately during a long flight",
      "A prolonged sleep episode lasting several hours",
      "A term describing daydreaming with no actual loss of wakefulness",
    ],
    answer: 0,
    explain:
      "A micro-sleep is a brief, involuntary lapse into sleep - often just a few seconds - that a fatigued person may not even be aware of afterward, and is particularly likely to occur during long, monotonous, low-workload phases of flight, distinct from a deliberate, planned rest period.",
    reference: "Human Factors - Fatigue Countermeasures",
  },
  {
    id: 50,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The classic 'five hazardous attitudes' framework used in aeronautical decision-making training includes which of the following?",
    options: [
      "Anti-authority, impulsivity, invulnerability, macho, and resignation",
      "Confidence, patience, caution, humility, and diligence",
      "Curiosity, discipline, teamwork, honesty, and punctuality",
      "Fatigue, hunger, stress, illness, and dehydration",
    ],
    answer: 0,
    explain:
      "The five hazardous attitudes commonly taught in aeronautical decision-making training are anti-authority ('don't tell me'), impulsivity ('do something now'), invulnerability ('it won't happen to me'), macho ('I can do it'), and resignation ('what's the use') - each recognised as a pattern of thinking that can degrade sound judgement if left unchecked.",
    reference: "Human Factors - Aeronautical Decision-Making",
  },
  {
    id: 51,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "In human factors terms, 'situational awareness' is generally described as involving which combination of elements?",
    options: [
      "Perceiving relevant elements in the environment, understanding what they mean, and projecting how the situation will develop",
      "Only remembering checklist items accurately",
      "Only the ability to fly the aircraft's flight controls smoothly",
      "Only knowledge of the aircraft's current fuel state",
    ],
    answer: 0,
    explain:
      "Situational awareness is generally described as a three-part process: perceiving the relevant elements around you, comprehending what they mean in context, and projecting how the situation is likely to develop - a breakdown at any of these stages can leave a crew member technically 'aware' of raw information but not of its actual significance.",
    reference: "Human Factors - Situational Awareness",
  },
  {
    id: 52,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "'Vigilance decrement' describes the tendency for:",
    options: [
      "Sustained attention and performance on a monotonous task to decline over time",
      "Attention to improve continuously the longer a monotonous task continues",
      "Only physical (not mental) performance to be affected during long flights",
      "Vigilance to remain perfectly constant regardless of task duration",
    ],
    answer: 0,
    explain:
      "Vigilance decrement refers to the well-documented decline in sustained attention and detection performance that occurs over time on a monotonous, low-stimulation task - such as long-duration cruise monitoring - which is part of why deliberate scanning techniques and workload management matter even when nothing appears to be happening.",
    reference: "Human Factors - Attention & Workload Management",
  },
  {
    id: 53,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "The 'error chain' concept in accident causation generally holds that:",
    options: [
      "Most accidents result from a series of contributing events or errors, rather than any single isolated cause, and breaking any link can prevent the outcome",
      "Every accident has exactly one single root cause with no contributing factors",
      "Errors only ever occur in isolation and never combine with other factors",
      "The concept applies only to mechanical failures, not human error",
    ],
    answer: 0,
    explain:
      "The error chain concept reflects that accidents typically result from a sequence of several contributing events or errors occurring together, rather than one single cause - which also means that recognising and breaking any single link in that chain can be enough to prevent the eventual undesired outcome.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 54,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Within CRM training, 'assertiveness' generally refers to a crew member's trained ability to:",
    options: [
      "Clearly voice a safety concern or observation, even to a more senior crew member, rather than staying silent",
      "Take control of the aircraft from another crew member without any communication",
      "Refuse to follow any instruction they personally disagree with",
      "Avoid ever raising a concern, to prevent conflict on the flight deck",
    ],
    answer: 0,
    explain:
      "Assertiveness in a CRM context means being able to clearly and appropriately voice a safety-relevant observation or concern - even to someone more senior - rather than staying silent out of deference, which directly counters the risks associated with a steep authority gradient.",
    reference: "Human Factors - Crew Communication & CRM",
  },
  {
    id: 55,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Prolonged exposure to the low humidity typical of an aircraft cabin commonly causes which of the following discomforts?",
    options: [
      "Dryness of the eyes, skin, and mucous membranes (nose and throat)",
      "Excessive sweating and elevated body temperature",
      "A permanent reduction in visual acuity",
      "Increased risk of motion sickness specifically",
    ],
    answer: 0,
    explain:
      "The low relative humidity typical of a pressurised cabin commonly causes dryness of the eyes, skin, and mucous membranes over a longer flight - a straightforward comfort effect distinct from (though it can compound) the separate issue of dehydration's effect on fatigue and concentration.",
    reference: "Human Factors - Cabin Environment & Comfort",
  },
  {
    id: 56,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "Why are commercial aircraft cabins pressurised during flight at high altitude?",
    options: [
      "To maintain a physiologically tolerable cabin altitude for occupants, avoiding the need for supplemental oxygen throughout the flight",
      "Solely to improve aerodynamic efficiency at altitude",
      "Solely to reduce structural loads on the airframe",
      "Because unpressurised flight above 5,000 ft is not physically possible for any aircraft",
    ],
    answer: 0,
    explain:
      "Pressurisation keeps the cabin at an effective altitude (commonly maintained at or below roughly 8,000 ft even while the aircraft cruises far higher) that is physiologically tolerable without occupants needing to wear supplemental oxygen for the whole flight - directly addressing the hypoxia risk that would otherwise exist at true cruise altitude.",
    reference: "Human Factors - Cabin Pressurization & Physiology",
  },
  {
    id: 57,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "From a human factors perspective, what is a key benefit of standard operating procedures (SOPs)?",
    options: [
      "They reduce reliance on individual memory and judgement under workload, creating predictable, shared expectations across the crew",
      "They eliminate the need for any crew communication at all",
      "They remove the pilot-in-command's authority to deviate when genuinely necessary",
      "They are useful only for very inexperienced crew members",
    ],
    answer: 0,
    explain:
      "SOPs create a shared, predictable baseline of how tasks are normally performed, reducing the burden on individual memory and judgement - particularly valuable under high workload - while still leaving room for the pilot-in-command to deviate when a specific situation genuinely calls for it.",
    reference: "Human Factors - Standard Operating Procedures",
  },
  {
    id: 58,
    subject: "ATPL General Knowledge",
    system: "Human Factors",
    q: "What is meant by a 'just culture' in the context of safety reporting?",
    options: [
      "An organisational approach that distinguishes honest mistakes from reckless or wilful violations, encouraging open reporting rather than blanket punishment",
      "A policy of never disciplining any employee under any circumstances",
      "A legal requirement that applies only to accident investigations, not routine reporting",
      "A system where reports are only accepted anonymously and never reviewed",
    ],
    answer: 0,
    explain:
      "A just culture draws a line between honest, unintentional mistakes (which are treated as valuable safety information and generally not punished) and genuinely reckless or wilful violations (which may still warrant disciplinary action) - the aim being to encourage open, honest reporting of errors and hazards rather than driving them underground through fear of blanket punishment.",
    reference: "Human Factors - Safety Reporting Culture",
  },
];
