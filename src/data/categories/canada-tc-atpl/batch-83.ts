import type { Question } from "../../../types";

// Canada TC ATPL - Section 4: Human Factors
// Batch 83 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_83_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Flicker vertigo is a disorientation and nausea-inducing phenomenon that can occur when a pilot is exposed to",
    options: [
      "rapid alternation between climbing and descending flight, which does not match typical crew experience, across most crew members",
      "continuous low-frequency engine vibration transmitted through the airframe, which does not match typical crew experience",
      "light flickering at certain frequencies, such as sunlight interrupted by a rotating propeller or an anti-collision strobe reflecting off cloud",
      "a steady, unchanging visual field with no reference points, which does not match typical crew experience, across most crew members",
    ],
    answer: 2,
    explain:
      "Flicker vertigo results from rhythmic light flickering, typically in a frequency range of roughly 4-20 Hz, such as sunlight strobing through a rotating propeller disc or a reflecting anti-collision light in cloud; it can produce nausea, disorientation, and, rarely, provoke seizure-like effects in susceptible individuals.",
    reference: "TP 690 -- Human Factors: Flicker vertigo",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The SHEL(L) model, used in aviation human factors to analyze the interfaces surrounding a person at the centre of a system, organizes those interfaces into the categories of",
    options: [
      "Situational awareness, Hazard identification, Error management, and Learning",
      "Skill, Habit, Experience, and Leadership, regardless of the individual involved",
      "Stress, Health, Endurance, and Lifestyle, regardless of the individual involved",
      "Software, Hardware, Environment, and Liveware",
    ],
    answer: 3,
    explain:
      "SHEL(L) places Liveware (the person) at the centre and examines its interfaces with Software (procedures, symbology), Hardware (equipment, controls), Environment (physical and organizational context), and other Liveware (other people).",
    reference: "TP 690 -- Human Factors: SHEL(L) model",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The oculogravic illusion is closely related to the somatogravic illusion in that both arise from otolith organ response to sustained linear acceleration; the oculogravic illusion is distinguished by involving",
    options: [
      "an illusory movement or tilt in what the pilot visually perceives, rather than only the non-visual sensation of pitch",
      "a purely auditory disturbance rather than any visual or postural component, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "a delayed onset that occurs only after the acceleration has already stopped, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "angular acceleration in the semicircular canals rather than linear acceleration, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 0,
    explain:
      "Both illusions stem from otolith organs misinterpreting sustained linear acceleration as a change in orientation relative to gravity. The somatogravic illusion is the felt (non-visual) sensation of pitching up or down; the oculogravic illusion adds a visual component, where a fixed object can appear to shift position or tilt.",
    reference: "TP 690 -- Human Factors: Oculogravic illusion",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Spatial disorientation is often classified into three types based on the pilot's awareness of the condition. Type I ('unrecognized') is generally considered the most hazardous because",
    options: [
      "it always results in loss of consciousness before any corrective action can be taken, which does not match typical crew experience",
      "the pilot is unaware that a disorientating illusion is occurring and takes no corrective action",
      "it exclusively affects the vestibular system and never the visual system, which does not match typical crew experience",
      "it only occurs during instrument meteorological conditions, never in visual conditions, which does not match typical crew experience",
    ],
    answer: 1,
    explain:
      "Type I (unrecognized) spatial disorientation is the most dangerous because the pilot has no awareness that the perceived orientation differs from actual attitude and does not intervene; Type II (recognized) is when the pilot senses the conflict and can act; Type III (incapacitating) involves disorientation so severe the pilot cannot function effectively even if aware.",
    reference: "TP 690 -- Human Factors: Spatial disorientation classification",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A key purpose of hypobaric (altitude) chamber training for pilots is to",
    options: [
      "permanently increase a pilot's physiological tolerance to hypoxia for future flights, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "certify a pilot's blood type for emergency transfusion purposes, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "allow each pilot to safely experience and learn to recognize their own personal early symptoms of hypoxia under controlled conditions",
      "test the structural pressurization limits of the specific aircraft type flown, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 2,
    explain:
      "Altitude chamber training exposes pilots to a controlled, monitored reduction in cabin pressure so each can learn to recognize their own individual, often subtle, early symptoms of hypoxia -- symptoms that vary between individuals -- so they can react promptly in an actual event.",
    reference: "TP 690 -- Human Factors: Altitude chamber training",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A pilot with a head cold or upper respiratory infection is generally advised against flying, particularly considering a descent, primarily because",
    options: [
      "cabin pressurization systems cannot function correctly when a crew member has a respiratory infection, which does not match typical crew experience",
      "the medication typically used to treat a cold always causes significant drowsiness regardless of the specific product used, which does not match typical crew experience",
      "a cold reduces the total lung capacity available for supplemental oxygen use at altitude, which does not reflect how crew members actually experience or respond to this condition",
      "nasal and sinus congestion can block the Eustachian tubes and sinus openings, preventing the pressure equalization that would otherwise occur automatically and increasing the risk of barotrauma",
    ],
    answer: 3,
    explain:
      "Congestion from a cold or infection can block the Eustachian tubes and sinus ostia, preventing the automatic equalization of pressure across the eardrum and sinuses during descent, which increases the risk of significant ear or sinus barotrauma.",
    reference: "TP 690 -- Human Factors: Barotrauma and respiratory infection",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "In James Reason's accident causation model, 'latent failures' (or latent conditions) are distinguished from 'active failures' in that latent failures",
    options: [
      "exist within the system well before an accident, such as flawed procedures or inadequate training, and may lie dormant until combined with an active failure",
      "refer exclusively to hardware defects and never to organizational or procedural weaknesses, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "can only be introduced by the flight crew operating the aircraft on the day of the accident, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "are always immediately obvious and are the type of failure most easily identified before an accident occurs, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 0,
    explain:
      "Latent failures are conditions built into the system in advance -- such as poor design, inadequate training, or flawed procedures -- that may remain dormant for a long time; active failures are the errors or violations committed by front-line operators (such as pilots) that, combined with latent conditions, can breach the system's defences.",
    reference: "TP 690 -- Human Factors: Latent and active failures",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Within human factors accident-causation frameworks, an 'error' is generally distinguished from a 'violation' in that a violation involves",
    options: [
      "an action that always results in an accident, whereas an error never does, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "a deliberate deviation from an established rule, procedure, or practice, whereas an error is an unintentional action that fails to achieve its intended outcome",
      "a mechanical or equipment failure rather than any human action, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "a mistake made only by an inexperienced or newly qualified pilot, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 1,
    explain:
      "An error is an unintentional deviation, where the action did not go as planned or the plan itself was inadequate; a violation is a deliberate departure from a rule or procedure, which may be well-intentioned (such as being seen as more efficient) but is nonetheless a knowing deviation.",
    reference: "TP 690 -- Human Factors: Errors versus violations",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "'Controlled rest on the flight deck,' as a fatigue countermeasure sometimes authorized for long-haul multi-crew operations, refers to",
    options: [
      "scheduled rest taken exclusively in a dedicated crew bunk located away from the flight deck, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "an unplanned period during which both pilots inadvertently fall asleep simultaneously, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "a brief, planned nap taken by one pilot in the flight deck seat during cruise, under specific conditions, while the other pilot remains at the controls and actively monitors",
      "a requirement that both pilots leave the flight deck simultaneously to rest in the cabin, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 2,
    explain:
      "Controlled rest on the flight deck is a planned, time-limited nap taken by one pilot in their seat during a low-workload cruise phase, under defined procedures, while the other pilot remains alert at the controls -- distinct from an unplanned or uncontrolled lapse into sleep by both crew members.",
    reference: "TP 690 -- Human Factors: Controlled rest on the flight deck",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Heat stress in an inadequately cooled cockpit or cabin, beyond simple discomfort, is a human factors concern primarily because it can",
    options: [
      "eliminate the risk of hypoxia by increasing the rate of respiration, which does not match typical crew experience",
      "improve reaction time by increasing overall physiological arousal, which does not match typical crew experience",
      "permanently damage the vestibular system's ability to detect angular acceleration, which does not match typical crew experience",
      "impair concentration, increase fatigue, and degrade decision-making and physical performance",
    ],
    answer: 3,
    explain:
      "Excessive heat exposure increases physiological strain and fatigue and can impair concentration, judgment, and physical performance, similarly to how cold stress degrades performance -- both represent thermal extremes that can adversely affect a pilot's decision-making and dexterity.",
    reference: "TP 690 -- Human Factors: Heat stress",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Dehydration, which can occur more readily during flight due to the low humidity typical of a pressurized cabin, is a relevant human factors concern because it can contribute to",
    options: [
      "fatigue, headache, and reduced concentration, compounding other performance-degrading factors already present in flight",
      "a permanent decrease in visual acuity that does not resolve with rehydration, across most crew members",
      "a reduction in the cabin's structural pressurization capability, which does not match typical crew experience",
      "an increased tolerance to the physiological effects of hypoxia, which does not match typical crew experience",
    ],
    answer: 0,
    explain:
      "The low relative humidity typical of a pressurized cabin promotes fluid loss, and resulting dehydration can contribute to fatigue, headache, and reduced concentration -- compounding other factors, such as fatigue or mild hypoxia, that already affect in-flight performance.",
    reference: "TP 690 -- Human Factors: Dehydration",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Skipping meals or going for extended periods without eating during a duty day can degrade pilot performance primarily because",
    options: [
      "it has no measurable effect on cognitive performance provided the pilot remains adequately hydrated, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "low blood glucose levels can impair concentration, reaction time, and mood, similar to other physiological stressors affecting cognitive performance",
      "it is only a concern for flights longer than twelve hours in duration, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "it permanently reduces the body's ability to metabolize oxygen at altitude, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 1,
    explain:
      "Extended periods without food can lower blood glucose levels, which can impair concentration, reaction time, and mood -- effects that, like fatigue, dehydration, or mild hypoxia, can degrade cognitive performance and are a reason pilots are generally advised to maintain regular, balanced meals during a duty day.",
    reference: "TP 690 -- Human Factors: Blood glucose and performance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Rod cells, which are far more numerous than cone cells in the peripheral regions of the retina, are particularly important for a pilot's ability to",
    options: [
      "judge distance using stereoscopic (binocular) depth cues at close range, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "perceive fine detail and colour when looking directly at an object in daylight, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "detect movement and faint light sources, such as another aircraft's position lights, in the peripheral field of vision at night",
      "read instrument displays and printed charts under bright cockpit lighting, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 2,
    explain:
      "Rods, concentrated outside the fovea, are highly sensitive to low light and motion but do not resolve fine detail or colour; this is why off-centre viewing and peripheral scanning are effective for detecting faint objects or motion, such as another aircraft, at night, while central, foveal (cone-based) vision is better suited to detailed, colour vision in good light.",
    reference: "TP 690 -- Human Factors: Retinal rod distribution and peripheral vision",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Crew Resource Management training was originally developed by the airline industry largely in response to the recognition that",
    options: [
      "pilots at the time lacked sufficient technical training in aircraft systems and handling, an assumption inconsistent with how this physiological or psychological effect actually manifests, which does not match typical crew experience",
      "air traffic control procedures were entirely responsible for the majority of accidents during that period, an assumption inconsistent with how this physiological or psychological effect actually manifests, which does not match typical crew experience",
      "aircraft manufacturers had not yet developed adequate automation to assist pilots, an assumption inconsistent with how this physiological or psychological effect actually manifests, which does not match typical crew experience",
      "a significant proportion of accidents involved technically proficient crews whose failures were rooted in poor communication, coordination, and decision-making rather than a lack of technical flying skill",
    ],
    answer: 3,
    explain:
      "CRM emerged from analysis of accidents and incidents showing that many involved crews with adequate technical skills but breakdowns in communication, leadership, workload management, and decision-making -- prompting training focused on these interpersonal and cognitive skills rather than purely technical proficiency.",
    reference: "TP 690 -- Human Factors: Origins of CRM",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "'Zeitgebers' (time cues), such as light exposure, meal timing, and social activity, are significant to a travelling pilot's fatigue management because they",
    options: [
      "are the external cues the body's circadian rhythm uses to synchronize (entrain) itself to a new time zone, and managing exposure to them can speed or slow adaptation",
      "permanently reset the circadian rhythm after a single exposure regardless of timing, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "have no measurable influence on the body's internal circadian rhythm, an assumption inconsistent with how this physiological or psychological effect actually manifests",
      "apply only to artificial lighting and have no relationship to natural sunlight, an assumption inconsistent with how this physiological or psychological effect actually manifests",
    ],
    answer: 0,
    explain:
      "Zeitgebers are external time cues -- light being the strongest -- that the body's internal circadian clock uses to synchronize with the local environment; deliberately managing exposure to light and other zeitgebers can help a pilot's circadian rhythm adapt more quickly after crossing time zones.",
    reference: "TP 690 -- Human Factors: Zeitgebers and circadian entrainment",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'CUS words' technique (typically standing for Concerned, Uncomfortable, and Safety/Stop), sometimes taught as part of CRM assertiveness training, provides crew members with",
    options: [
      "a mandatory checklist to be read aloud before every takeoff regardless of conditions, which does not match typical crew experience",
      "an escalating, standardized set of phrases to clearly signal a safety concern to another crew member when a more casual attempt to raise the issue has not been effective",
      "a set of codewords used only for communicating with air traffic control during an emergency, which does not match typical crew experience",
      "a classification system used exclusively by accident investigators after the fact, which does not match typical crew experience",
    ],
    answer: 1,
    explain:
      "CUS words give crew members an escalating, standardized script -- stating they are Concerned, then Uncomfortable, then that it is a Safety issue (or to Stop) -- to assertively flag a developing safety concern in a clear, recognizable way when a more indirect approach has not prompted a response.",
    reference: "TP 690 -- Human Factors: CUS words assertive communication",
  },
];
