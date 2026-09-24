import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 15 -- Section 7: Human Factors,
// second pass. Original questions written from aviation human-factors
// principles and the TP 690 syllabus (topic headings only, no sample
// questions). Covers decision-making biases, visual and vestibular
// illusions, and SMS/communication topics not yet addressed in
// batch 7. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_15_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The Threat and Error Management (TEM) model organizes operational safety around three core components:",
    options: [
      "captain authority, first officer support, and cabin crew communication, with no role for external operational factors.",
      "threats (external to the flight crew), errors (made by the flight crew), and undesired aircraft states resulting from mismanaged threats or errors.",
      "checklist discipline, radio phraseology, and fuel planning, treated in this simplified model as the three pillars of crew performance, regardless of any external operational threat that might also be present.",
      "weather, mechanical failure, and pilot fatigue, treated as the only three recognized categories of operational threat.",
    ],
    answer: 1,
    explain:
      "TEM frames operational safety as managing a continuous flow: threats arise from outside the cockpit (weather, terrain, ATC, aircraft malfunctions), errors are actions or inactions by the crew, and an undesired aircraft state is what results if a threat or error isn't caught and managed in time -- with the goal of catching and containing each stage before it progresses to the next.",
    reference: "TP 690 Section 7 - Human Factors, Threat and Error Management",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "'Normalization of deviance' describes the process by which",
    options: [
      "a newly hired pilot gradually adjusts to a company's standard operating procedures over the course of initial training.",
      "an aircraft's automation is reprogrammed to reflect a revised operating procedure following a safety recommendation.",
      "a practice that deviates from an established standard or procedure, repeated without apparent negative consequence, comes to be seen as normal and acceptable.",
      "a regulator formally amends a published standard, such as a CAR, following a structured public consultation process, to reflect evolving best practice across the industry.",
    ],
    answer: 2,
    explain:
      "Normalization of deviance is a gradual, often unnoticed erosion of standards: each small departure from procedure that doesn't produce an obvious bad outcome makes the next, similar departure feel a little more acceptable, until practices that were originally recognized as deviations become treated as routine -- a well-documented contributing factor in a number of major accident investigations.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Plan continuation bias (sometimes called 'get-there-itis') refers to the tendency to",
    options: [
      "delegate all decision-making authority to air traffic control rather than exercising independent pilot-in-command judgment.",
      "abandon an original plan prematurely at the first sign of any minor complication, favouring caution over completion.",
      "revise a flight plan repeatedly in response to every small change in forecast weather, rather than committing to one plan.",
      "continue pursuing an original plan or destination even as new evidence increasingly suggests that plan should be changed or abandoned.",
    ],
    answer: 3,
    explain:
      "Plan continuation bias is the pull toward sticking with the original plan -- continuing an approach, pressing on toward a destination -- even as accumulating cues (deteriorating weather, fuel state, aircraft condition) point toward diverting or going around; it's a well-recognized decision-making trap precisely because the original plan feels like the default, lower-effort choice.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Confirmation bias, as it affects pilot decision-making, is the tendency to",
    options: [
      "seek out, notice, and give more weight to information that supports a belief or decision already made, while discounting information that contradicts it.",
      "confirm every instrument indication with a second, independent source before accepting it as valid.",
      "require confirmation from air traffic control before executing any change to a filed flight plan.",
      "double-check a checklist item a second time, in strict accordance with standard operating procedure and company policy, before moving on to the next item on the checklist.",
    ],
    answer: 0,
    explain:
      "Confirmation bias skews how new information is processed once a belief or decision is already in place: cues that support the existing view get noticed and accepted readily, while contradicting cues get minimized, explained away, or simply missed -- a pattern that can quietly undermine otherwise-sound decision-making, independent of a pilot's intentions or diligence.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'startle effect' following a sudden, unexpected event in flight is significant to human factors because it can",
    options: [
      "only affect newly certified pilots; experienced pilots are considered immune to any startle response by definition.",
      "briefly impair a crew member's ability to process information and respond effectively, even when they are otherwise well trained for the specific malfunction encountered.",
      "have no measurable effect on performance, since modern simulator-based training specifically and permanently eliminates any startle response in a fully certified crew member.",
      "improve immediate decision-making by sharply increasing focus and narrowing distraction to the relevant problem.",
    ],
    answer: 1,
    explain:
      "An unexpected, sudden event can trigger a physiological and cognitive startle response that briefly disrupts information processing, working memory, and motor coordination -- even for a well-trained, experienced pilot facing a malfunction they've drilled many times in the simulator, which is why startle-and-surprise management has become a specific focus of modern upset-recovery and CRM training.",
    reference: "TP 690 Section 7 - Human Factors, Decision-Making",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'black hole' approach illusion, most pronounced on a clear night with few ground lights other than the runway itself, tends to cause a pilot to",
    options: [
      "have no altered perception at all; the black hole illusion affects only azimuth (heading) perception, not glidepath perception.",
      "fly a higher-than-normal approach, perceiving the aircraft as lower than it actually is due to the abundance of surrounding visual references.",
      "fly a lower-than-normal approach, perceiving the aircraft as higher than it actually is due to the lack of surrounding visual references.",
      "perceive the runway as closer than it actually is, leading to a shallower approach than intended.",
    ],
    answer: 2,
    explain:
      "With no surrounding terrain or ground lighting to provide depth and altitude cues, an isolated runway seen against a dark background can make a pilot feel higher on the approach than they actually are -- a misperception that has historically led pilots to fly a lower, shallower-than-intended approach path, sometimes into terrain short of the runway.",
    reference: "TP 690 Section 7 - Human Factors, Vision and Visual Illusions",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A runway that is narrower than a pilot is accustomed to tends to create the illusion that the aircraft is",
    options: [
      "closer to the runway threshold than it actually is, with no effect on perceived altitude.",
      "drifting laterally off the extended centreline, with no effect on perceived altitude.",
      "lower than it actually is, which can lead to flying a higher-than-normal approach.",
      "higher than it actually is, which can lead to flying a lower-than-normal approach.",
    ],
    answer: 3,
    explain:
      "Runway width is one of the visual cues pilots unconsciously use to judge height on approach; a narrower-than-expected runway makes the aircraft appear higher than it really is, tending to induce a lower approach path -- the reverse of the effect produced by an unusually wide runway, which tends to make the aircraft appear lower than it actually is and can induce a higher approach or a tendency to float during the flare.",
    reference: "TP 690 Section 7 - Human Factors, Vision and Visual Illusions",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A false horizon illusion can occur when a pilot mistakes a visual reference other than the true horizon -- such as a sloping cloud deck or a line of terrain -- for level flight attitude. This illusion is hazardous primarily because it can",
    options: [
      "induce the pilot to align the aircraft with the misleading reference rather than the true horizon, resulting in an unrecognized bank or pitch error.",
      "be entirely eliminated by cross-checking a single flight instrument such as the attitude indicator, making it a negligible and rarely discussed operational risk in modern cockpits.",
      "affect airspeed perception exclusively, with no effect on the pilot's perceived pitch or bank attitude.",
      "only occur in daylight visual meteorological conditions, and therefore poses no risk during night or instrument flight.",
    ],
    answer: 0,
    explain:
      "The danger of a false horizon is that the misleading reference (a sloped cloud layer, a line of lights along a coast or hillside) can be visually compelling enough that a pilot levels the aircraft against it rather than the true horizon, introducing an unrecognized bank or pitch error -- underscoring why cross-checking flight instruments, not just outside visual references, remains essential.",
    reference: "TP 690 Section 7 - Human Factors, Vision and Visual Illusions",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Autokinesis is a visual illusion in which",
    options: [
      "a moving light source, such as another aircraft's rotating beacon or strobe light, appears completely stationary against a uniformly dark night sky.",
      "a single, stationary point of light viewed in an otherwise dark environment appears to move on its own after being stared at for some time.",
      "a rapidly flashing light appears to be stationary due to the eye's inability to track fast strobe rates.",
      "peripheral vision temporarily fails entirely after prolonged exposure to a single fixed point of light.",
    ],
    answer: 1,
    explain:
      "Autokinesis is a well-documented effect of the eye's own small, involuntary movements combined with the lack of a stable visual reference frame: a genuinely stationary light, stared at against a featureless dark background (such as another aircraft's light at night, or a ground light), can appear to drift or move -- a known contributor to spatial disorientation and to reports of misidentified traffic.",
    reference: "TP 690 Section 7 - Human Factors, Vision and Visual Illusions",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The semicircular canals of the vestibular system detect angular acceleration, not a constant rate of rotation. A practical consequence of this is that",
    options: [
      "the vestibular system has no role at all in spatial disorientation; disorientation arises solely from visual illusions.",
      "angular acceleration sensed by the semicircular canals is always more reliable than the attitude indicator during a sustained turn.",
      "a pilot flying a prolonged, constant-rate turn without outside visual reference may come to feel level, even though the aircraft is still turning.",
      "a pilot can always accurately sense the aircraft's bank angle at any point during sustained instrument flight, regardless of visual reference.",
    ],
    answer: 2,
    explain:
      "Because the semicircular canals respond to changes in rotation rate rather than rotation itself, a fluid within them that was displaced at the start of a turn gradually returns to a neutral position if the turn rate stays constant -- so the sensation of turning can fade even while the aircraft keeps turning, which is exactly why relying on the attitude indicator (not bodily sensation) is essential in instrument conditions.",
    reference: "TP 690 Section 7 - Human Factors, Spatial Disorientation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "The 'elevator illusion,' produced by the otolith organs in response to a sudden vertical acceleration (such as encountering an updraft or a downdraft), can cause a pilot to sense a",
    options: [
      "change in indicated airspeed, with no accompanying sensation related to pitch or vertical motion at all.",
      "change in magnetic heading, unrelated to any vertical acceleration experienced by the aircraft.",
      "loss of hearing acuity, since the otolith organs are considered by some older texts to be part of the auditory rather than the vestibular system.",
      "change in pitch attitude that has not actually occurred, potentially leading to an inappropriate control input in response.",
    ],
    answer: 3,
    explain:
      "The otolith organs sense linear acceleration, including the vertical kind produced by an updraft, downdraft, or turbulence -- and the brain can misinterpret that sudden vertical acceleration as a change in pitch attitude rather than what it actually is, potentially prompting an unnecessary or even counterproductive pitch correction if the pilot reacts to the sensation instead of the instruments.",
    reference: "TP 690 Section 7 - Human Factors, Spatial Disorientation",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Full dark adaptation of the eyes, allowing best use of night (scotopic) vision, generally takes on the order of",
    options: [
      "30 minutes, which is part of why cockpit lighting is often kept dim and red-tinted before and during night flight.",
      "several hours, making meaningful dark adaptation impractical to achieve before any night flight.",
      "no measurable time at all; human night vision is available immediately regardless of prior light exposure.",
      "2 to 3 minutes, essentially the same time it takes for eyes to adjust when walking from daylight into a dim room.",
    ],
    answer: 0,
    explain:
      "Reaching full dark adaptation -- the eye's rod cells becoming maximally sensitive for night vision -- takes roughly 30 minutes, and that adaptation can be lost again quickly if the eyes are exposed to bright white light. This is why cockpit lighting for night operations is typically kept dim and shifted toward red or other long wavelengths that disturb dark adaptation less than white light.",
    reference: "TP 690 Section 7 - Human Factors, Vision and Visual Illusions",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Time of Useful Consciousness (TUC) -- the period during which a person can still perform effectively after being deprived of adequate oxygen -- generally",
    options: [
      "remains essentially constant across all altitudes, since it is determined by individual physiology rather than ambient pressure.",
      "decreases sharply as altitude increases, becoming very short at high cabin altitudes following a rapid decompression.",
      "applies only to passengers, since flight crew wearing headsets are considered exempt from any TUC limitation.",
      "increases as altitude increases, since thinner air is breathed more easily and requires less respiratory effort.",
    ],
    answer: 1,
    explain:
      "TUC shrinks dramatically with altitude: at a comparatively low cabin altitude it may be many minutes, but following a rapid decompression at high cruising altitude it can fall to well under a minute -- which is exactly why immediate donning of oxygen and an emergency descent are the standard, time-critical response to a decompression at altitude, for crew and passengers alike.",
    reference: "TP 690 Section 7 - Human Factors, Hypoxia",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A Safety Management System (SMS), as implemented by an air operator, is generally described as resting on four core components:",
    options: [
      "aircraft maintenance, avionics upgrades, engine overhaul, and structural inspection.",
      "recurrent training, line checks, simulator evaluation, and medical certification.",
      "safety policy, safety risk management, safety assurance, and safety promotion.",
      "fuel planning, weight and balance, dispatch release, and crew scheduling.",
    ],
    answer: 2,
    explain:
      "An SMS is generally organized around four pillars: safety policy (the organization's commitment and objectives), safety risk management (identifying hazards and managing the resulting risk), safety assurance (monitoring performance and verifying that risk controls are working), and safety promotion (training and communication that builds a positive safety culture) -- a framework distinct from, though supported by, routine training and maintenance activities.",
    reference: "TP 690 Section 7 - Human Factors, Safety Management Systems",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A 'just culture,' as it applies to safety reporting within an SMS, refers to an environment in which",
    options: [
      "no individual is ever held accountable for any action, regardless of how reckless or deliberate that action was.",
      "safety reports are only accepted anonymously, with no distinction drawn between different types of conduct at all.",
      "every reported error, regardless of intent or severity, automatically results in formal disciplinary action, in order to strongly deter future reporting of even minor issues.",
      "honest errors and good-faith reports are treated supportively rather than punitively, while reserving accountability for reckless or deliberately unsafe conduct.",
    ],
    answer: 3,
    explain:
      "A just culture draws a deliberate line: honest mistakes and good-faith safety reports are treated as valuable information and handled without punishment, which encourages people to keep reporting -- but that same culture still holds individuals accountable for genuinely reckless, deliberate, or grossly negligent conduct, rather than extending blanket immunity to every action regardless of intent.",
    reference: "TP 690 Section 7 - Human Factors, Safety Management Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "A 'readback-hearback' error occurs when",
    options: [
      "a pilot reads back an ATC instruction incorrectly, and the controller fails to catch the discrepancy, allowing the error to go uncorrected.",
      "two aircraft on the same frequency both attempt to read back a clearance simultaneously, causing radio interference.",
      "a pilot correctly reads back an ATC instruction, but the controller subsequently changes the instruction without informing the pilot.",
      "a controller reads back a pilot's position report incorrectly, with no readback requirement applying to controllers at all.",
    ],
    answer: 0,
    explain:
      "A readback-hearback error is specifically the failure of the safety-net built into standard phraseology: the pilot reads back the clearance or instruction, but incorrectly -- and the controller, who should be listening critically to that readback (the 'hearback' half of the exchange), fails to notice and correct the discrepancy, letting a misunderstanding carry through uncorrected into the flight.",
    reference: "TP 690 Section 7 - Human Factors, Communication",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Human Factors",
    q: "Chronic fatigue is generally distinguished from acute fatigue in that chronic fatigue",
    options: [
      "can only be caused by circadian disruption, such as extended time-zone travel across several zones, and never by workload or sleep restriction acting alone.",
      "results from an accumulated sleep debt or ongoing physical/mental demand over an extended period, and is not fully resolved by a single, ordinary night's sleep.",
      "is fully resolved after a single night of adequate sleep, exactly like acute fatigue, with no meaningful practical distinction between the two.",
      "affects only physical performance, leaving cognitive performance (decision-making, vigilance) entirely unaffected.",
    ],
    answer: 1,
    explain:
      "Acute fatigue is the everyday tiredness that a normal night's sleep resolves. Chronic fatigue builds up over days or weeks of insufficient recovery -- an accumulated sleep debt or sustained high workload -- and isn't fixed by one good night's sleep; it typically needs a sustained period of adequate rest to resolve, and it degrades both physical and cognitive performance, including vigilance and decision-making, which is why fatigue risk management looks at patterns over time, not just the most recent night.",
    reference: "TP 690 Section 7 - Human Factors, Fatigue",
  },
];
