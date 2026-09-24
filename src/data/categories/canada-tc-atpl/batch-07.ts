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
      "poor circulation preventing oxygen-rich blood from reaching the body's tissues effectively.",
      "the body's cells being unable to use the oxygen delivered to them, despite an adequate supply.",
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
      "hyperventilation is resolved only by administering supplemental oxygen, in exactly the same way that hypoxia is treated.",
      "they are actually the same underlying physiological condition, simply given two different clinical names for historical and regulatory reasons across different training curricula.",
      "hyperventilation only occurs above roughly 25,000 ft cabin altitude, exactly the same altitude at which hypoxia symptoms are said to begin.",
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
      "increased humidity at higher altitude causing trapped gas volume to expand more than pressure alone would explain.",
      "an increase in the body's own internal gas production, triggered by the drop in cabin pressure during the climb.",
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
      "diving has no physiological interaction whatsoever with subsequent flight, and the standard advisory exists purely as an overly cautious general precaution with no real underlying physiological mechanism.",
      "diving increases blood oxygen levels to an unsafe degree for several days afterward, requiring the same waiting period as a precaution against oxygen toxicity.",
      "dissolved nitrogen remaining in body tissues from the dive can come out of solution as bubbles at reduced ambient pressure, causing decompression sickness.",
      "diving temporarily reduces lung capacity for several days, an effect said to be unrelated to any effect of subsequent flight to altitude.",
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
      "the cone cells responsible for colour vision work substantially better than rod cells do in low-light, night-time conditions.",
      "off-centre viewing is useful only for detecting motion out of the corner of the eye, never for detecting a faint, stationary light source.",
      "looking directly at an object always provides the sharpest possible night vision, because the fovea contains the highest concentration of light-sensitive receptors, and off-centre viewing offers no additional benefit in darkness.",
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
      "an entirely accurate sensation with no illusory component whatsoever, regardless of the outside visual reference available to the pilot.",
      "a roll to one side, with no accompanying pitch component perceived by the pilot at all, unlike the sensation associated with forward acceleration.",
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
      "forcing excess blood toward the head and upper body, potentially causing a 'red-out' with reddening of the visual field.",
      "affecting only the inner ear's vestibular balance mechanism, with no effect at all on vision or on the level of consciousness.",
      "pooling blood toward the lower body, reducing blood flow to the brain and eyes, potentially leading to grey-out, blackout, or G-induced loss of consciousness at higher levels.",
      "having no physiological effect distinct from ordinary, straight-and-level 1g flight at all, regardless of the magnitude, direction, or duration of the acceleration experienced by the airframe and occupants.",
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
      "only when crossing the International Date Line itself, and is otherwise essentially unaffected by the direction of travel.",
      "in exactly the same way regardless of direction of travel, since only the total number of time zones crossed is said to matter.",
      "flying westward than flying eastward, for the same underlying reason that the body's circadian rhythm reportedly finds a shortened day harder to adapt to than a lengthened one, even though most pilots report no noticeable difference in practice.",
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
      "fatigue and alcohol impairment are caused by an identical underlying biochemical mechanism within the nervous system.",
      "fatigue affects only physical reaction time and coordination, with no measurable effect on judgment or decision-making.",
      "the comparison is not well supported by evidence, and fatigue is now generally understood to have little meaningful effect on performance.",
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
      "only matter meaningfully above roughly 25,000 ft cabin altitude, and is generally considered negligible at the lower cabin altitudes typical of most flights.",
      "worsen the effective impairment from a given amount of alcohol, beyond what that same amount would cause at sea level.",
      "have no combined effect at all; alcohol's impairment is essentially identical regardless of the cabin altitude reached during flight.",
      "reduce the effective impairment from a given amount of alcohol, since higher altitude is believed to speed alcohol's elimination from the body.",
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
      "carbon monoxide has a strong, easily detectable odour that gives ample, reliable warning to the crew well before any physiological effect can occur.",
      "carbon monoxide primarily affects visual acuity and colour perception only, with no measurable effect on judgment, cognition, or motor coordination at any concentration encountered in a cabin.",
      "carbon monoxide binds to hemoglobin far more readily than oxygen does, producing hypoxia even though the pilot may show no obvious signs of distress until impairment is already significant.",
      "carbon monoxide is heavier than air and therefore physically cannot reach the cockpit through a warm-air cabin heating system.",
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
      "structured decision-making entirely replaces the pilot's need to actually understand the situation before acting, no matter how complex the underlying situation is.",
      "structured decision-making models guarantee an objectively correct outcome in every situation, regardless of the information available.",
      "structured decision-making is required only during non-emergency, routine flight planning phases, and is said to add no real value once time pressure appears.",
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
      "communicating them to air traffic control immediately, which is treated as the final and only remaining step in the process.",
      "ignoring elements that seem irrelevant at the current moment, permanently discarding them from further consideration.",
      "recording them for post-flight reporting purposes only, with no forward-looking or predictive component at all.",
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
      "eliminating the need for crew communication altogether, since each pilot's actions are said to be entirely pre-determined in advance.",
      "applying only to normal, routine operations, with no relevance at all to abnormal or emergency situations.",
      "standardizing crew actions and expectations, making behaviour more predictable and easier to cross-check between crew members.",
      "replacing the aircraft's printed and electronic checklists entirely, making any separate checklist unnecessary during normal, abnormal, or emergency operations.",
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
      "eye reference position affects only pilot comfort during long flights, with no measurable effect on the visual perception of outside references at all.",
      "eye reference position is relevant only for aircraft that happen to be specifically equipped with a head-up display system, and not otherwise relevant.",
      "eye reference position has no established relationship at all to seat adjustment or seat rails in transport category aircraft cockpits.",
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
      "glass cockpit displays present only one single, fixed possible layout, entirely removing any need for the crew to select what information is shown.",
      "glass cockpit displays are said to eliminate the need for the crew to cross-check information between different sources entirely, since every installed display is simply assumed to always agree with the others.",
      "information selection errors are considered impossible once a display is certified, regardless of how the crew subsequently configures or navigates it.",
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
      "a system used only during declared in-flight emergencies, with no application or relevance at all during normal, day-to-day operations.",
      "the effective use of all available resources -- crew, aircraft systems, ATC, documentation, and time -- to achieve safe and efficient flight operations.",
      "a formal, rigid hierarchy in which the captain alone makes every operational decision, without soliciting input from any other crew member.",
      "a fixed set of memorized phrases used exclusively for routine radio communication with air traffic control, unrelated to broader crew coordination or decision-making.",
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
      "an aircraft is deliberately and intentionally flown into terrain as a premeditated act of sabotage by someone with access to the flight deck.",
      "an aircraft strikes terrain or an obstacle only after the crew has already lost control of the aircraft, such as following a stall or structural failure.",
      "an aircraft under the full control of the crew is flown into terrain, water, or an obstacle, with the crew generally unaware of the impending danger.",
      "an aircraft is damaged by terrain-related debris, such as a rockslide or falling object, while parked and stationary on the ground.",
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
      "a state that, once reached, always and inevitably results in an accident, with absolutely no possibility of recognition or recovery by the crew.",
      "any mechanical malfunction of the aircraft whatsoever, regardless of how promptly or effectively the crew subsequently responds to and manages it.",
      "a term used only retrospectively in post-accident investigation reports, with no application to normal line operations, training, or proactive safety management.",
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
      "reporting hazards and safety concerns only after an accident or serious incident has already occurred, and never doing so proactively beforehand.",
      "being responsible only for their own individual currency and licensing requirements, unrelated to organizational safety processes.",
      "having no active role at all in this view, since SMS is described as being managed entirely and exclusively by a dedicated safety department, with absolutely no pilot input whatsoever expected or required.",
    ],
    answer: 0,
    explain:
      "SMS relies heavily on frontline personnel -- pilots very much included -- proactively reporting hazards and safety concerns they observe in normal operations, feeding the organization's hazard identification and risk assessment processes before those hazards contribute to an actual occurrence, not just after the fact.",
    reference: "TP 690 Section 7 - CFIT Threat and Error Management (TEM), Pilot's Role in Safety Management System",
  },
];
