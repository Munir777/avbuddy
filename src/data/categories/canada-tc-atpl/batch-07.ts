import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 7 -- Section 7: Human Factors
// (aviation physiology, the pilot and the operating environment, aviation
// psychology, pilot-equipment relationship, interpersonal relations, CRM,
// and CFIT/TEM). Original questions written from general aviation human
// factors knowledge and the TP 690 syllabus (topic headings only, no
// sample questions). Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_07_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Hypoxic hypoxia, the type most relevant to unpressurized flight at altitude, results from",
    options: [
      "poor circulation preventing oxygen-rich blood from reaching the tissues.",
      "the body's cells being unable to use available oxygen, despite adequate delivery.",
      "a reduced ability of the blood to carry oxygen, caused by carbon monoxide or another contaminant.",
      "a reduced partial pressure of oxygen in the inspired air, reducing the oxygen available to the blood.",
    ],
    answer: 3,
    explain:
      "Hypoxic hypoxia is specifically the altitude-related type: as ambient pressure falls with altitude, the partial pressure of oxygen in the air (and therefore in the lungs and blood) falls too, even though the percentage of oxygen in the atmosphere stays the same. The other options describe different hypoxia types -- hypemic (reduced carrying capacity, e.g. CO poisoning), stagnant (poor circulation), and histotoxic (cells can't use available oxygen, e.g. certain poisons or alcohol).",
    reference: "TP 690 Section 7 - Aviation Physiology, Hypoxia/Hyperventilation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Hyperventilation and hypoxia can be difficult to distinguish because",
    options: [
      "they produce very similar symptoms (dizziness, tingling, visual disturbance), but hyperventilation is caused by excessive breathing rate rather than insufficient oxygen.",
      "hyperventilation is resolved only by supplemental oxygen, in exactly the same way as hypoxia.",
      "they are actually the same physiological condition, just given two different names.",
      "hyperventilation only occurs above 25,000 ft, exactly the same altitude hypoxia symptoms begin.",
    ],
    answer: 0,
    explain:
      "Hyperventilation -- breathing faster or deeper than the body needs, often triggered by anxiety or stress -- lowers blood carbon dioxide levels and produces symptoms that overlap substantially with early hypoxia symptoms, which is exactly why the two are easy to confuse. The underlying cause is different: hypoxia is a lack of oxygen (helped by supplemental oxygen), while hyperventilation is excess CO2 removal (helped by consciously slowing and controlling the breathing rate) -- so treating one as if it were the other can delay the correct response.",
    reference: "TP 690 Section 7 - Aviation Physiology, Hypoxia/Hyperventilation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Gas trapped within body cavities (such as the middle ear, sinuses, or gastrointestinal tract) expands during a climb to altitude because of",
    options: [
      "the decrease in temperature with altitude, consistent with Charles's Law, unrelated to pressure.",
      "the decrease in ambient pressure with altitude, consistent with Boyle's Law.",
      "increased humidity at altitude causing the gas to expand.",
      "an increase in the body's own gas production at altitude.",
    ],
    answer: 1,
    explain:
      "Boyle's Law describes how a fixed quantity of gas expands as the pressure around it decreases (at constant temperature) -- exactly what happens to trapped gas in body cavities as cabin altitude increases, which is why a blocked eustachian tube or sinus, or gas in the digestive tract, can cause pain during a climb if the trapped gas can't equalize with the falling ambient pressure.",
    reference: "TP 690 Section 7 - Aviation Physiology, Gas Expansion Effects",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A pilot who has been scuba diving is generally advised to wait a period of time before flying, primarily because",
    options: [
      "diving has no physiological interaction with subsequent flight, and the advisory exists purely as a general precaution with no underlying mechanism.",
      "diving increases blood oxygen levels to an unsafe degree for several days.",
      "dissolved nitrogen remaining in body tissues from the dive can come out of solution as bubbles at reduced ambient pressure, causing decompression sickness.",
      "diving temporarily reduces lung capacity, unrelated to any effect of altitude.",
    ],
    answer: 2,
    explain:
      "Diving exposes the body to elevated ambient pressure, driving extra nitrogen into solution in body tissues; if that nitrogen hasn't had enough time to outgas naturally before flying at reduced cabin pressure, it can come out of solution as bubbles -- the same underlying mechanism as decompression sickness ('the bends') experienced by divers who ascend too quickly, but here triggered by flying rather than surfacing.",
    reference: "TP 690 Section 7 - Aviation Physiology, Decompression (Including SCUBA Diving)",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "For detecting a faint light or object at night, pilots are generally advised to use an off-centre viewing technique because",
    options: [
      "the cone cells responsible for colour vision work better at night than rod cells do.",
      "off-centre viewing is useful only for detecting motion, never for detecting a stationary faint light.",
      "looking directly at an object always provides the sharpest possible night vision, and off-centre viewing offers no benefit.",
      "the rod cells responsible for low-light vision are concentrated away from the centre of the retina, making peripheral vision more sensitive to dim light than direct, central vision.",
    ],
    answer: 3,
    explain:
      "Rod cells, which dominate low-light (scotopic) vision, are concentrated away from the fovea (the retina's centre, dominated by cone cells used for colour and daytime acuity). Looking slightly off to the side of a faint light at night lets its image fall on the more rod-rich peripheral retina, making it easier to detect than looking directly at it.",
    reference: "TP 690 Section 7 - Aviation Physiology, Vision/Visual Scanning Techniques",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The somatogravic illusion can occur when a strong forward linear acceleration (such as during take-off) is misinterpreted by the vestibular system as",
    options: [
      "a nose-up pitch attitude, potentially leading a disoriented pilot to push the nose down inappropriately.",
      "an accurate sensation with no illusory component, regardless of visual reference.",
      "a roll to one side, with no pitch component perceived at all.",
      "a nose-down pitch attitude, potentially leading a disoriented pilot to pull the nose up inappropriately.",
    ],
    answer: 0,
    explain:
      "The inner ear's otolith organs can't distinguish linear acceleration from a change in pitch attitude particularly well, so a strong forward acceleration (like an aggressive take-off, especially at night or in poor visual conditions) can feel like the nose pitching up -- an illusion that has led disoriented pilots to push the nose down in response to a false sensation, sometimes with fatal results, which is why trusting the flight instruments over this sensation is so heavily emphasized.",
    reference: "TP 690 Section 7 - Aviation Physiology, Orientation/Disorientation (Including Visual and Vestibular Illusions)",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'leans' is a spatial disorientation illusion in which a pilot",
    options: [
      "experiences the illusion only while flying straight and level in smooth air, never during a turn.",
      "fails to sense a slow, gradual roll into a bank (below the vestibular system's detection threshold), then experiences a false sensation of banking when the aircraft is subsequently rolled back to wings-level.",
      "perceives a change in altitude that has not actually occurred, unrelated to bank angle.",
      "always correctly senses the aircraft's exact bank angle, with no possibility of illusion in roll.",
    ],
    answer: 1,
    explain:
      "Because a sufficiently slow roll rate can fall below the vestibular system's threshold for detecting motion, a pilot can enter a bank without sensing it, perceiving the aircraft (incorrectly) as still wings-level. When the pilot then rolls back to actual wings-level flight (as shown on the instruments), that correction feels like an incorrect bank in the opposite direction -- hence 'the leans,' since the pilot may physically lean in the cockpit to compensate for the false sensation.",
    reference: "TP 690 Section 7 - Aviation Physiology, Orientation/Disorientation (Including Visual and Vestibular Illusions)",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Sustained positive G (acceleration toward the pilot's feet, as in a tight turn or pull-up) primarily causes physiological problems by",
    options: [
      "forcing excess blood toward the head, potentially causing a 'red-out.'",
      "affecting only the inner ear, with no effect on vision or consciousness.",
      "pooling blood toward the lower body, reducing blood flow to the brain and eyes, potentially leading to grey-out, blackout, or G-induced loss of consciousness at higher levels.",
      "having no physiological effect distinct from ordinary 1g flight, regardless of magnitude or duration.",
    ],
    answer: 2,
    explain:
      "Positive G pulls blood away from the head toward the lower body and extremities, progressively reducing blood flow (and therefore oxygen delivery) to the eyes and brain -- producing a sequence from grey-out (dimming/greying vision), to blackout (vision lost but consciousness retained), to G-induced loss of consciousness (G-LOC) at higher, sustained levels. Negative G produces the opposite blood shift and the corresponding 'red-out' effect, not positive G.",
    reference: "TP 690 Section 7 - Aviation Physiology, Positive and Negative 'G'",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Adjusting to a new time zone after a long flight is generally more difficult",
    options: [
      "only when crossing the International Date Line, and is otherwise unaffected by direction of travel.",
      "in exactly the same way regardless of direction, since only the number of time zones crossed matters.",
      "flying westward than flying eastward, for the same underlying reason.",
      "flying eastward than flying westward, since the body's natural circadian rhythm runs slightly longer than 24 hours and adapts more easily to a lengthened day than a shortened one.",
    ],
    answer: 3,
    explain:
      "The human circadian rhythm's natural (free-running) period is slightly longer than 24 hours, so it's generally easier for the body to adapt to a day that's effectively lengthened (as happens flying westward, chasing the sun) than to a day that's effectively shortened (as happens flying eastward, against the sun) -- which is why eastward travel tends to produce more pronounced jet lag for a similar number of time zones crossed.",
    reference: "TP 690 Section 7 - Aviation Physiology, Circadian Rhythms/Jet Lag",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Fatigue's effect on pilot performance is often compared to alcohol impairment because",
    options: [
      "extended wakefulness has been shown to degrade judgment, reaction time, and decision-making in ways comparable to measurable blood alcohol levels.",
      "fatigue and alcohol impairment are caused by an identical biochemical mechanism in the body.",
      "fatigue affects only physical reaction time, with no measurable effect on judgment or decision-making.",
      "the comparison is not supported by evidence, and fatigue is now understood to have no meaningful effect on performance.",
    ],
    answer: 0,
    explain:
      "Well-established research has found that performance degradation after extended periods without sleep can be comparable, on standardized tests, to the impairment produced by legally significant blood alcohol levels -- and unlike alcohol, fatigue often builds gradually and can be harder for the affected person to recognize in themselves, which is part of why flight and duty time limitations exist as a regulatory safeguard.",
    reference: "TP 690 Section 7 - Aviation Physiology, Sleep/Fatigue",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Combining alcohol consumption with exposure to altitude tends to",
    options: [
      "only matter above 25,000 ft cabin altitude, and is negligible at lower altitudes.",
      "worsen the effective impairment from a given amount of alcohol, beyond what that same amount would cause at sea level.",
      "have no combined effect; alcohol's impairment is identical regardless of cabin altitude.",
      "reduce the effective impairment from alcohol, since altitude speeds alcohol elimination from the body.",
    ],
    answer: 1,
    explain:
      "Alcohol and altitude-related hypoxia both impair judgment and coordination through different mechanisms, and their combined effect tends to be worse than either alone at an equivalent level -- part of why regulatory guidance on alcohol before flying goes beyond a simple minimum-hours rule and also emphasizes ensuring no measurable impairing effect remains, since a hangover with no measurable blood alcohol can still meaningfully degrade performance.",
    reference: "TP 690 Section 7 - The Pilot and the Operating Environment, Substance Abuse (Alcohol and Drugs)",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Carbon monoxide is a particular hazard in piston-engine aircraft with a cabin heating system that draws warm air from around the exhaust because",
    options: [
      "carbon monoxide has a strong, easily detectable odour that gives ample warning before any physiological effect occurs.",
      "carbon monoxide primarily affects vision only, with no effect on judgment or coordination.",
      "carbon monoxide binds to hemoglobin far more readily than oxygen does, producing hypoxia even though the pilot may show no obvious signs of distress until impairment is already significant.",
      "carbon monoxide is heavier than air and therefore cannot reach the cockpit through a heating system.",
    ],
    answer: 2,
    explain:
      "Carbon monoxide binds to hemoglobin roughly 200 times more readily than oxygen, displacing oxygen from the blood's carrying capacity (a form of hypemic hypoxia) -- and because CO is colourless and odourless, a leak into a cabin heat exchanger can cause progressive impairment with no obvious warning sign until symptoms like headache, confusion, and drowsiness are already well underway.",
    reference: "TP 690 Section 7 - The Pilot and the Operating Environment, Toxic Hazards (Including Carbon Monoxide)",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A pilot experiencing a routine emergency should generally follow a structured decision-making process because",
    options: [
      "structured decision-making replaces the need for the pilot to actually understand the situation before acting.",
      "structured decision-making models guarantee an objectively correct outcome in every situation, regardless of the information available.",
      "structured decision-making is required only for non-emergency, routine flight planning, and adds no value under time pressure.",
      "a structured approach helps ensure relevant information is gathered and options are properly considered, rather than reacting on the first impulse under stress.",
    ],
    answer: 3,
    explain:
      "Structured decision-making frameworks (such as detect-estimate-choose-identify-do-evaluate style models) exist because stress and time pressure tend to narrow attention and push toward the first available option rather than the best one -- a deliberate process helps counter that tendency, even though it doesn't guarantee a perfect outcome every time.",
    reference: "TP 690 Section 7 - Aviation Psychology, The Decision-Making Process",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Situational awareness is generally described as having distinct levels: perceiving relevant elements in the environment, comprehending what they mean, and",
    options: [
      "projecting their likely future status, so the pilot can anticipate how the situation will develop.",
      "communicating them to ATC, which is treated as the final and only remaining step.",
      "ignoring elements that seem irrelevant at the current moment, permanently.",
      "recording them for post-flight reporting purposes only, with no forward-looking component.",
    ],
    answer: 0,
    explain:
      "The commonly used model of situational awareness has three levels: perceiving the relevant elements (what's happening), comprehending their significance (what it means), and projecting their future state (what will happen next if nothing changes) -- a breakdown at any one of those levels, not just a failure to notice something, can lead to a loss of situational awareness.",
    reference: "TP 690 Section 7 - Aviation Psychology, Situational Awareness",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Excessive automation reliance leading to reduced manual flying proficiency and reduced vigilance in monitoring the aircraft is generally described as",
    options: [
      "the somatogravic illusion.",
      "automation complacency.",
      "threat and error management.",
      "crew resource management.",
    ],
    answer: 1,
    explain:
      "Automation complacency describes the tendency to over-trust automated systems, reducing both manual flying skill through disuse and the active monitoring needed to catch an automation failure or an unexpected mode -- a recognized human factors risk distinct from the other listed concepts, which describe an illusion, a proactive safety framework, and crew coordination, respectively.",
    reference: "TP 690 Section 7 - Pilot-Equipment/Materials Relationship, Automation and Complacency",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Standard Operating Procedures (SOPs) improve flight safety primarily by",
    options: [
      "eliminating the need for crew communication, since each pilot's actions are pre-determined.",
      "applying only to normal operations, with no relevance to abnormal or emergency situations.",
      "standardizing crew actions and expectations, making behaviour more predictable and easier to cross-check between crew members.",
      "replacing the aircraft's checklists entirely, making printed or electronic checklists unnecessary.",
    ],
    answer: 2,
    explain:
      "SOPs create a shared, predictable pattern of behaviour that both crew members expect and can cross-check against -- if one pilot's action deviates from the expected SOP flow, the other is more likely to notice, which is a core safety benefit distinct from simply reducing communication (SOPs actually support effective communication by giving it a shared structure).",
    reference: "TP 690 Section 7 - Pilot-Equipment/Materials Relationship, Standard Operating Procedures (SOPs)",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A pilot's eye reference position in the cockpit (often established relative to a marked design eye reference point) matters because",
    options: [
      "eye reference position affects only comfort, with no effect on visual perception of outside references.",
      "eye reference position is relevant only for aircraft equipped with a head-up display, and not otherwise.",
      "eye reference position has no established relationship to seat adjustment in transport aircraft.",
      "an incorrect seat/eye position can distort the pilot's perception of the visual approach path, runway markings, and outside references, as well as instrument parallax.",
    ],
    answer: 3,
    explain:
      "The design eye position defines where the pilot's eyes should be for correct sightlines over the glare-shield, an accurate visual perception of the approach/runway picture, and correct viewing angles on the flight instruments (avoiding parallax error) -- an incorrectly adjusted seat can subtly distort all of these, which is why seat position is treated as a real safety item, not just a comfort preference.",
    reference: "TP 690 Section 7 - Pilot-Equipment/Materials Relationship, Cockpit Visibility/Eye Reference Position/Seat Position",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "In a modern 'glass cockpit,' a key human factors consideration around information selection is that",
    options: [
      "the crew must actively choose which of many available data pages/formats to display, and an inappropriate selection can leave critical information out of view when needed.",
      "glass cockpit displays present only one possible layout, removing any need for the crew to select what information is shown.",
      "glass cockpit displays eliminate the need for the crew to cross-check information between different sources.",
      "information selection errors are impossible once a display is certified, regardless of how the crew configures it.",
    ],
    answer: 0,
    explain:
      "Unlike a fixed analog gauge that's always visible, an electronic display often requires the crew to actively select which page, mode, or range is shown -- which means a poor selection (the wrong map range, a hidden system page) can leave the crew without needed information on the screen even though the underlying data exists, a distinct kind of error from simply misreading a gauge.",
    reference: "TP 690 Section 7 - Pilot-Equipment/Materials Relationship, Controls and Displays",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Effective Crew Resource Management (CRM) is best described as",
    options: [
      "a system used only during declared emergencies, with no application during normal operations.",
      "the effective use of all available resources -- crew, aircraft systems, ATC, documentation, and time -- to achieve safe and efficient flight operations.",
      "a formal hierarchy in which the captain makes every decision without input from other crew members.",
      "a set of memorized phrases used exclusively for radio communication with ATC.",
    ],
    answer: 1,
    explain:
      "CRM is fundamentally about making full use of every resource available -- not just the other pilot, but cabin crew, ATC, company dispatch, checklists and manuals, and time itself -- rather than one crew member working in isolation. Effective CRM applies throughout normal operations, not only during emergencies, and it explicitly does not mean a rigid, input-free hierarchy.",
    reference: "TP 690 Section 7 - Crew Resource Management (CRM), Crew Problem Solving and Decision Making",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Controlled Flight Into Terrain (CFIT) is defined as an accident or incident in which",
    options: [
      "an aircraft is deliberately flown into terrain as an act of sabotage.",
      "an aircraft strikes terrain or an obstacle after the crew has already lost control of the aircraft.",
      "an aircraft under the full control of the crew is flown into terrain, water, or an obstacle, with the crew generally unaware of the impending danger.",
      "an aircraft is damaged by terrain-related debris (such as a rockslide) while parked on the ground.",
    ],
    answer: 2,
    explain:
      "The defining feature of CFIT is that the aircraft is fully controllable and being flown normally by the crew right up until impact -- the accident results from a loss of situational awareness about the aircraft's position relative to terrain, not from a loss of control of the aircraft itself, which distinguishes CFIT from a loss-of-control accident.",
    reference: "TP 690 Section 7 - CFIT Threat and Error Management (TEM), Sources, Contributors",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "In the Threat and Error Management (TEM) framework, an 'undesired aircraft state' refers to",
    options: [
      "a state that, once reached, always results in an accident with no possibility of recovery.",
      "any mechanical malfunction of the aircraft, regardless of how the crew responds to it.",
      "a term used only in post-accident investigation, with no application to normal operations or training.",
      "a safety-reducing condition (such as an unstabilized approach or an unintended deviation from an assigned altitude) that results from unmanaged threats or errors, and needs to be recognized and recovered from.",
    ],
    answer: 3,
    explain:
      "TEM models safety as a chain: external threats and crew errors, if not effectively managed, can lead to an undesired aircraft state -- a reduced safety margin condition like being unstabilized on approach or off the cleared flight path -- which the crew still has the opportunity to recognize and recover from before it develops into an actual incident or accident. It's a proactive training and analysis concept, not just a retrospective accident label.",
    reference: "TP 690 Section 7 - CFIT Threat and Error Management (TEM), Undesired Aircraft State",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A pilot's role within an operator's Safety Management System (SMS) generally includes",
    options: [
      "reporting hazards and safety concerns observed during operations, contributing to the organization's ongoing hazard identification and risk management process.",
      "reporting hazards only after an accident has already occurred, never proactively.",
      "being responsible only for their own individual currency and licensing requirements, unrelated to organizational safety processes.",
      "having no active role, since SMS is described as being managed entirely by the safety department with no pilot input.",
    ],
    answer: 0,
    explain:
      "SMS relies heavily on frontline personnel -- pilots very much included -- proactively reporting hazards and safety concerns they observe in normal operations, feeding the organization's hazard identification and risk assessment processes before those hazards contribute to an actual occurrence, not just after the fact.",
    reference: "TP 690 Section 7 - CFIT Threat and Error Management (TEM), Pilot's Role in Safety Management System",
  },
];
