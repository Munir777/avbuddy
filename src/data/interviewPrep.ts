// Interview Preparation — behavioral / competency-based interview practice.
//
// A broad set of general, widely-used airline pilot competency-interview
// question types across common competency areas (decision-making, safety
// culture, CRM, communication, leadership, initiative, organisational
// ability, adaptability, customer service, commercial awareness,
// cross-cultural understanding). Written in original wording - no company
// name, logo, or branding included anywhere, even where a question was
// inspired by real competency-based interview material. The "howToAnswer"
// field is guidance on HOW to structure and deliver an answer (the STAR
// framework, what interviewers are listening for, things to avoid), not a
// pre-written script — the actual content of your answer should always come
// from a real, specific example from your own flying.
//
// Add more real questions you collect as new entries below, following the
// same shape.

export interface InterviewQuestion {
  id: number;
  category: string;
  question: string;
  teaser: string; // one-line hint shown when the card is collapsed
  howToAnswer: string;
}

export const INTERVIEW_CATEGORIES = [
  "Decision-Making Under Pressure",
  "Safety Culture",
  "Teamwork & CRM",
  "Conflict & Communication",
  "Leadership",
  "Handling Mistakes",
  "Motivation & Fit",
  "Initiative & Achievement",
  "Organisational Ability",
  "Adaptability",
  "Customer Service",
  "Commercial Awareness",
  "Cross-Cultural Understanding",
] as const;

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 1,
    category: "Decision-Making Under Pressure",
    question:
      "Tell me about a time you had to make an important decision quickly, with incomplete information.",
    teaser: "Tests structured reasoning under time pressure, not just the outcome.",
    howToAnswer:
      "Use STAR (Situation, Task, Action, Result) and pick a genuinely specific event, not a generic description of 'a time this happens.' Set the scene briefly (Situation/Task) — what was actually at stake and why the information was incomplete — then spend most of your answer on your Action: what options you weighed, what you prioritised (usually safety margins over schedule/convenience), and why you chose what you chose. Close with the Result and, ideally, a one-line reflection on what you'd take forward from it. Interviewers are listening for a structured thought process under time pressure, not a lucky guess — so make your reasoning visible, not just the outcome. Bush flying experience is a strong well to draw from here: marginal weather, limited weather reporting, or a go/no-go call with real consequences.",
  },
  {
    id: 2,
    category: "Safety Culture",
    question:
      "Describe a situation where you had to prioritise safety over a schedule or commercial pressure.",
    teaser: "Checks whether 'safety first' holds up against real commercial pressure.",
    howToAnswer:
      "This question is really testing whether 'safety first' is something you can back up with a real decision, not just a slogan. Pick a moment where there was genuine pressure the other way (a paying customer waiting, a tight connection, a supervisor's expectation) and be explicit about the trade-off you faced — vague answers that don't name a real cost read as rehearsed. Explain the specific factor that tipped your decision (a limit, a personal minimum, a red flag you weren't willing to explain away) and how you communicated the decision to whoever was affected. A strong close addresses how you framed it to others, since handling the social/commercial fallout well is often what separates a good answer from a great one.",
  },
  {
    id: 3,
    category: "Safety Culture",
    question:
      "Tell me about a time you noticed something unsafe that others had missed or dismissed, and what you did about it.",
    teaser: "Tests whether you'll speak up even when it's socially uncomfortable.",
    howToAnswer:
      "This is a speaking-up / assertiveness question — airlines want to know you'll raise a concern even when it's socially uncomfortable (a more senior colleague, a captain, a maintenance sign-off). Be specific about what you noticed and why it mattered, then walk through exactly how you raised it — the actual words or process you used, not just 'I told them.' If there was initial pushback, say so and how you handled it; a slightly imperfect but honest account of navigating that friction is more convincing than a frictionless one. End with the outcome and, if relevant, what changed afterward (a habit, a checklist item, a conversation that stuck).",
  },
  {
    id: 4,
    category: "Teamwork & CRM",
    question:
      "Describe a time you disagreed with a captain, first officer, or colleague about an operational decision.",
    teaser: "Checks you can disagree on substance without damaging the working relationship.",
    howToAnswer:
      "Interviewers are checking two things at once here: that you're willing to voice a disagreement, and that you can do it without damaging the working relationship or undermining crew coordination. Structure your answer around the specific disagreement (what exactly you each thought and why), how you raised it (calmly, with your reasoning, ideally referencing a shared standard like a checklist or limit rather than just your gut), and how it was resolved — including if the resolution wasn't your preferred outcome. Avoid any answer that makes the other person sound careless or incompetent; a mature answer shows you can disagree on substance while still respecting the working relationship.",
  },
  {
    id: 5,
    category: "Teamwork & CRM",
    question: "Tell me about a time you had to rely heavily on a colleague you didn't know well.",
    teaser: "Probes how quickly you build trust with someone you've just met.",
    howToAnswer:
      "This probes adaptability and trust-building in ad hoc crews — very relevant to airline flying, where you're often paired with someone new every trip. Focus on what you actively did to build a working rapport quickly (a thorough briefing, explicitly stating your expectations, asking about theirs) rather than just saying it 'worked out fine.' If something went slightly sideways because of the unfamiliarity, that's a good, honest detail to include, followed by how you adapted. The takeaway the interviewer wants is that you have a repeatable approach to establishing trust and clear communication with strangers, not that you got lucky with a good crew pairing.",
  },
  {
    id: 6,
    category: "Conflict & Communication",
    question: "Describe a time you had to deliver difficult or unwelcome news to a passenger, colleague, or supervisor.",
    teaser: "Tests clarity and empathy when the message itself is unwelcome.",
    howToAnswer:
      "Good answers here show empathy plus clarity — you can't soften the message so much that it's misunderstood, but you also shouldn't be needlessly blunt. Briefly set up why the news was difficult, then focus on how you delivered it: what you said, how you anticipated their reaction, and how you handled any pushback or emotion. If you offered next steps or an alternative, mention that — it shows you didn't just deliver bad news and walk away. Keep the story concrete (a specific delay, a specific decision) rather than a general philosophy of 'I try to be honest and clear.'",
  },
  {
    id: 7,
    category: "Leadership",
    question: "Tell me about a time you had to take charge in a stressful or ambiguous situation.",
    teaser: "Looks for calm, organised leadership even without formal authority.",
    howToAnswer:
      "This doesn't require formal rank or title — interviewers want evidence that you can organise people and structure a chaotic moment even without being explicitly put in charge. Pick a moment where the situation genuinely lacked clear direction, explain the specific actions you took to bring order (assigning tasks, setting priorities, communicating a plan), and be honest about what was hard about it. A strong answer shows calm, clear communication under stress rather than just 'staying calm' as an abstract claim — give the actual words or actions that demonstrated it.",
  },
  {
    id: 8,
    category: "Handling Mistakes",
    question: "Tell me about a mistake you made and how you handled it afterward.",
    teaser: "Tests ownership of failure and what changed afterward, not the mistake itself.",
    howToAnswer:
      "Pick a real mistake with real (but not catastrophic) consequences — refusing to admit to any meaningful mistake, or picking something so trivial it doesn't say anything, both read poorly. Own the error plainly and early in your answer rather than burying it in caveats or blaming circumstances. Spend most of the answer on what you did immediately afterward (containing the consequence, informing the right people) and, importantly, what changed in how you operate as a result — a specific habit, check, or mindset shift. Interviewers are far more interested in your response to failure than in the failure itself.",
  },
  {
    id: 9,
    category: "Motivation & Fit",
    question: "Why do you want to fly for this airline specifically?",
    teaser: "Generic answers here are instantly forgettable — do the specific homework.",
    howToAnswer:
      "Generic answers ('great reputation', 'modern fleet', 'growth opportunities') are instantly forgettable because every candidate says them. Do the specific homework: something about the airline's route network, fleet, base location, career progression path, or operating culture that genuinely connects to your own background and goals, and say why that specific thing matters to you. Tying it back to a concrete detail from your own flying history (the type of flying you've done, what you're looking to develop next) makes the answer sound like it's actually about you and this airline, not a template swapped between applications.",
  },
  {
    id: 10,
    category: "Motivation & Fit",
    question: "Where do you see yourself in five years, and how does this role fit into that?",
    teaser: "Checks for realistic ambition, not vague drift or overreach.",
    howToAnswer:
      "Airlines are checking for realistic ambition and retention risk in roughly equal measure — an answer that's either too vague ('just flying safely, I guess') or too aggressively upward ('captain within two years, then management') can both raise flags. Aim for a grounded answer: a plausible progression path at that airline specifically (upgrade timelines, fleet moves, or areas of the operation you'd like to grow into), tied to something concrete about your own development goals. It's fine to mention long-term ambitions as long as you frame the near-term role as a genuine, valued step rather than a stepping stone you're eager to leave.",
  },
  {
    id: 11,
    category: "Initiative & Achievement",
    question: "Tell me about a time you suggested an improvement to how something was being done, and what came of it.",
    teaser: "Checks you notice inefficiencies and act on them constructively.",
    howToAnswer:
      "This tests whether you notice inefficiencies and act on them constructively rather than just complaining about them. Be specific about the process or procedure you flagged, who you raised it with, and how you framed the suggestion (ideally backed by a concrete reason, not just a preference). If it was adopted, say what changed as a result; if it wasn't, that's a perfectly good answer too — describe how you responded to being turned down, since handling 'no' gracefully is part of what's being assessed.",
  },
  {
    id: 12,
    category: "Initiative & Achievement",
    question: "Walk me through how you got started in your flying career.",
    teaser: "A get-to-know-you question — still worth structuring, not rambling.",
    howToAnswer:
      "This is a get-to-know-you question, but it's still worth structuring rather than rambling. Give a brief, honest arc — what drew you to flying, the path you took to get your licences and build hours, and one or two deliberate choices along the way that show intent rather than just drifting into it. Tie the ending of the story to why it leads naturally to wanting this particular role now, so the answer doesn't just trail off in the past.",
  },
  {
    id: 13,
    category: "Initiative & Achievement",
    question: "What's an achievement in your flying career that you're genuinely proud of?",
    teaser: "Pick something personally meaningful, not just the most 'impressive' credential.",
    howToAnswer:
      "Pick something specific and personally meaningful rather than the most 'impressive-sounding' credential — interviewers can tell the difference. Briefly explain what made it hard or notable, what you actually did to get there, and why it still matters to you now. A short, sincere answer beats a long list of accomplishments; one well-told story lands better than three name-dropped ones.",
  },
  {
    id: 14,
    category: "Initiative & Achievement",
    question: "Describe a particularly demanding flight you've operated.",
    teaser: "Set the scene briefly, then focus on how you actually managed it.",
    howToAnswer:
      "Set the scene efficiently — what made it demanding (weather, terrain, technical, workload) — then spend most of the answer on what you actually did to manage it: decisions made, priorities set, how you used your resources (crew, ATC, company support if relevant). Close with the outcome and a brief, genuine reflection on what you took from it. This is a strong place to draw on bush flying experience if you have a flight that fits — marginal weather or limited-support decision-making translates well.",
  },
  {
    id: 15,
    category: "Initiative & Achievement",
    question: "Tell me about a time you spotted a problem and took corrective action yourself, without being asked.",
    teaser: "The key word is 'without being asked' — proactive ownership, not just competence.",
    howToAnswer:
      "The key word here is 'without being asked' — the interviewer wants evidence of proactive ownership, not just competent problem-solving after being told to fix something. Be clear about how you noticed the issue, why you decided it was worth acting on right away rather than waiting or escalating, and what you actually did. If there's a moment where you checked your authority to act (rather than overstepping), mention it — that shows judgement alongside initiative.",
  },
  {
    id: 16,
    category: "Initiative & Achievement",
    question: "Describe a situation that was unusual enough that your normal approach or training didn't quite fit.",
    teaser: "Tests judgement when the checklist runs out, not just improvisation.",
    howToAnswer:
      "This is about judgement under novelty — showing you can reason from first principles when the checklist runs out, rather than freezing or forcing a standard solution onto a non-standard problem. Explain clearly why the usual approach didn't apply, what you did instead, and how you validated that your improvised approach was still safe and sound before committing to it. Avoid making it sound like you simply ignored procedure — the strongest answers show you understood the procedure well enough to know when and how to depart from it responsibly.",
  },
  {
    id: 17,
    category: "Initiative & Achievement",
    question: "Tell me about a goal that took real persistence to achieve.",
    teaser: "Needs a real setback in the middle — persistence only shows against resistance.",
    howToAnswer:
      "Choose a goal with a genuine setback or plateau in the middle, not a smooth, uneventful climb — persistence only shows up against resistance. Describe what made it hard, what specifically you did to keep going (not just 'I didn't give up', but the concrete actions), and what finally got you there. A brief note on what you'd do differently if you were starting over adds useful self-awareness without undercutting the achievement.",
  },
  {
    id: 18,
    category: "Initiative & Achievement",
    question: "Tell me about a time you noticed a problem but decided it wasn't actually worth the effort to fix.",
    teaser: "Checks your initiative comes with judgement, not a reflex to fix everything.",
    howToAnswer:
      "This 'contra-behavioral' style question checks that your initiative comes with judgement, not just a reflex to fix everything. Explain the problem, then focus on your reasoning for standing down — the cost, risk, or priority trade-off that made inaction the right call, not laziness. A good answer shows you can tell the difference between a real issue worth escalating and a minor imperfection that isn't worth the disruption of fixing.",
  },
  {
    id: 19,
    category: "Decision-Making Under Pressure",
    question: "Tell me about your most difficult day on the flight deck.",
    teaser: "Pick the day that was actually hardest, not the most dramatic-sounding one.",
    howToAnswer:
      "This is deliberately open-ended, so pick the event that actually was hardest for you, not the one that sounds most dramatic. Walk through what made it difficult (workload, ambiguity, consequences, or a combination), then focus the bulk of your answer on how you and your crew worked through it — your reasoning, your priorities, how you communicated. End with the outcome and, briefly, what you'd carry forward from it. Resist the urge to over-polish this one; a candid account of a genuinely hard day, told clearly, is more convincing than a flawless-sounding one.",
  },
  {
    id: 20,
    category: "Decision-Making Under Pressure",
    question: "Describe a difficult decision you had to make that was about a person rather than a technical problem.",
    teaser: "People-decisions are harder to make 'by the book' than technical ones.",
    howToAnswer:
      "People-decisions are harder to make 'by the book', so the interviewer wants to see how you weigh competing human factors (fairness, morale, safety, relationships) against each other. Be specific about the tension in the decision — what made it genuinely hard, not just uncomfortable — and how you arrived at your call. If the decision affected your relationship with that person afterward, briefly say how you managed that, since follow-through matters as much as the decision itself.",
  },
  {
    id: 21,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a challenging technical situation you had to work through.",
    teaser: "Keep the jargon light; the diagnostic process is what's being assessed.",
    howToAnswer:
      "Keep the technical description concise enough that a non-specialist interviewer follows it, then spend most of your time on your diagnostic process and decision logic — what you checked, what you ruled out, how you decided on a course of action, and how you used available resources (checklists, other crew, company support) rather than working it out alone in your head. The goal is to demonstrate structured technical reasoning under pressure, not just recount the fault.",
  },
  {
    id: 22,
    category: "Decision-Making Under Pressure",
    question: "Describe a situation where you had many possible options and had to work out how to choose between them.",
    teaser: "Tests your decision framework, not just which option you picked.",
    howToAnswer:
      "This tests your decision framework more than the decision itself — explain what factors you weighed (safety margin, reversibility, information available, time pressure) and how you narrowed the options down, rather than just announcing which one you picked. A strong answer makes the decision-making process feel repeatable — as if you'd make an equally good call in a different situation with different specifics, because the underlying approach is sound.",
  },
  {
    id: 23,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a time you solved a problem with a genuinely creative or unconventional approach.",
    teaser: "'Creative' should read as resourceful within safe limits, not procedure-dodging.",
    howToAnswer:
      "Be careful with this one in an aviation context — 'creative' should read as resourceful within safe limits, not as improvising around procedure for its own sake. Explain why the conventional approach wasn't available or wasn't going to work, what alternative you came up with, and how you satisfied yourself it was still sound and safe before using it. Framing matters: show judgement and safety awareness alongside the cleverness.",
  },
  {
    id: 24,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a time the evidence pointed one way, but your instinct told you something different.",
    teaser: "Neither 'always trust data' nor 'always trust gut' is the strong answer.",
    howToAnswer:
      "This probes how you reconcile analytical and intuitive judgement — neither 'I always trust my gut' nor 'I always trust the data alone' is the strong answer; the good answer shows you use instinct as a prompt to dig deeper into the data, not as a substitute for it. Explain what your gut was picking up on, what you did to investigate or test that feeling against the evidence, and what you ultimately decided and why. Being honest about a time your gut was wrong (and you caught it through cross-checking) can be just as compelling as a time it was right.",
  },
  {
    id: 25,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a time you had to take control of a deteriorating situation.",
    teaser: "As much about communication and command presence as the technical fix.",
    howToAnswer:
      "Focus on the moment you recognised things were sliding and the deliberate choice to step in and impose structure — what you actually said or did to take charge, and how you re-established a clear plan for yourself and anyone else involved. This is as much about communication and command presence as about the technical fix, so don't skip over how you conveyed the new plan to others.",
  },
  {
    id: 26,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a decision you made without having all the facts you'd have liked.",
    teaser: "Own the information gap honestly — it's the normal condition to manage.",
    howToAnswer:
      "Own the gap in information honestly rather than retroactively justifying the decision as if it were fully informed — the interviewer already knows real decisions are rarely made with complete information. Explain what you did know, what you didn't, how you weighed that uncertainty, and what safety margin or fallback you built in to cover the unknowns. A mature answer treats incomplete information as the normal condition to manage, not an excuse for a poor outcome.",
  },
  {
    id: 27,
    category: "Decision-Making Under Pressure",
    question: "Describe a time you made an assumption that turned out to be incorrect.",
    teaser: "The valuable part is how fast you caught it and corrected course.",
    howToAnswer:
      "State the assumption plainly, why it seemed reasonable at the time, and how and when you discovered it was wrong. The most valuable part of this answer is what you did the moment you realised the error — how quickly you caught it, how you corrected course, and what safeguard (a habit, a cross-check) you built in afterward so a similar assumption doesn't go unchecked again.",
  },
  {
    id: 28,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a decision where, looking back, you should have taken more time.",
    teaser: "A genuine self-critique — resist softening it into a non-mistake.",
    howToAnswer:
      "This is a genuine self-critique question, so resist softening it into a non-mistake. Explain what pressure pushed you to decide quickly, what you missed or under-weighted as a result, and what the actual consequence was — even if it was minor. Close with the specific change in your process since then (a rule you now apply, a pause you now build in) so the answer demonstrates growth, not just regret.",
  },
  {
    id: 29,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a time you took a risk.",
    teaser: "Show a calculated risk, not recklessness — make the reasoning visible.",
    howToAnswer:
      "Choose a calculated risk, not recklessness — the difference is whether you can clearly articulate what you weighed beforehand (the potential downside, your mitigations, why the upside justified it) rather than just describing a gamble that happened to pay off. Be equally prepared to discuss the outcome honestly if it didn't go perfectly; a well-reasoned risk that didn't fully pay off still demonstrates sound judgement.",
  },
  {
    id: 30,
    category: "Decision-Making Under Pressure",
    question: "Tell me about a time you felt, in hindsight, that you made the wrong decision.",
    teaser: "A rehearsed 'I've never been wrong' answer reads as low self-awareness.",
    howToAnswer:
      "Pick a real one — a rehearsed non-answer here (claiming you can't think of any wrong decisions) reads as a lack of self-awareness rather than a strong track record. Explain the decision, why it seemed right at the time, what made it wrong in hindsight, and — most importantly — what you changed in how you decide things as a result. The goal is to show that you learn from outcomes, not that you never err.",
  },
  {
    id: 31,
    category: "Teamwork & CRM",
    question: "Tell me about a time you helped rebuild a crew's morale or team spirit when it had dropped.",
    teaser: "Small, deliberate actions beat a vague 'I stayed positive.'",
    howToAnswer:
      "Identify what caused the dip in morale (fatigue, a difficult trip, friction between people) and then focus on the specific, concrete things you did to shift it — not a vague 'I stayed positive.' Small, deliberate actions (acknowledging the difficulty openly, redistributing a task load, a well-timed break or check-in) usually make for a more credible story than a single grand gesture. Note the change you observed afterward as your evidence it worked.",
  },
  {
    id: 32,
    category: "Teamwork & CRM",
    question: "Describe a time you contributed meaningfully to a crew's effectiveness without being the one formally in charge.",
    teaser: "Tests leading 'from the middle' through CRM, not formal authority.",
    howToAnswer:
      "This checks whether you can lead 'from the middle' — influencing outcomes through good CRM rather than authority. Give a specific example of speaking up, offering support, or catching something that helped the whole crew perform better, and be clear that you did this while still respecting the actual chain of command and decision-making authority in the flight deck. The balance between contributing and overstepping is exactly what's being assessed.",
  },
  {
    id: 33,
    category: "Teamwork & CRM",
    question: "Tell me about a disagreement you had with a crew member over an operational matter.",
    teaser: "Show you can hold a position on substance while keeping the relationship intact.",
    howToAnswer:
      "Describe the substance of the disagreement honestly (what you each thought, and why), how you raised your view (calmly, ideally anchored to a shared standard like a procedure or limit rather than personal opinion), and how it was resolved — including if the resolution wasn't in your favour. Avoid any framing that makes the other person sound careless; a mature answer shows you can hold a position on substance while preserving the working relationship.",
  },
  {
    id: 34,
    category: "Teamwork & CRM",
    question: "Tell me about a time you had to work extra hard to build rapport with a colleague you didn't click with easily.",
    teaser: "Wants a repeatable method for building rapport, not just luck.",
    howToAnswer:
      "Interviewers want to see a repeatable method here, not luck. Describe specifically what you did to build the connection — asking about their preferences and experience, adjusting your own style, finding shared ground on the task at hand — and be honest if it took a while or didn't fully resolve, since a partial but professional improvement is a believable and still positive outcome.",
  },
  {
    id: 35,
    category: "Teamwork & CRM",
    question: "Tell me about a time you had to help two people, or two viewpoints, reach a compromise.",
    teaser: "Focus on your process as facilitator, not just the final compromise.",
    howToAnswer:
      "Focus on your process as a facilitator: how you got both sides to state their actual concerns (not just their positions), where you found overlap, and how you framed the eventual compromise so both people could accept it. If you were one of the two parties rather than a mediator, that's fine too — just be clear about how you moved from your position toward common ground without abandoning something that genuinely mattered.",
  },
  {
    id: 36,
    category: "Teamwork & CRM",
    question: "Describe a time you gave constructive feedback to someone more senior than you, such as a captain.",
    teaser: "An assertiveness question wrapped in a hierarchy problem.",
    howToAnswer:
      "This is an assertiveness question wrapped in a hierarchy problem — airlines want confirmation you'll speak up even across rank. Be specific about what you fed back, how you chose the moment and tone (privately, respectfully, focused on the behaviour or decision rather than the person), and how it was received. If there was initial resistance, mention it and how you navigated it; a slightly imperfect but honest account of that friction is more convincing than a frictionless one.",
  },
  {
    id: 37,
    category: "Teamwork & CRM",
    question: "Tell me about a time you felt unsupported at work, and how you handled it.",
    teaser: "Really a resilience-and-self-advocacy question, not a grievance session.",
    howToAnswer:
      "Be honest about the situation without turning it into a complaint session about a specific person or organisation — the focus should be on your response. Explain what support you needed and didn't get, what you did instead to get the task done or get the support elsewhere, and how you eventually raised the gap (if you did) in a constructive way. This is really a resilience-and-self-advocacy question more than a grievance question.",
  },
  {
    id: 38,
    category: "Teamwork & CRM",
    question: "Tell me about a time you actively asked a colleague for their input on a problem you were stuck on.",
    teaser: "Checks humility — recognising the limits of your own perspective.",
    howToAnswer:
      "This checks humility and the practical use of CRM — recognising the limits of your own perspective and pulling in another's. Describe what you were stuck on, why you specifically sought that person's input, and what changed in your approach because of what they offered. A good answer makes clear that asking for help was a deliberate, confident choice, not a last resort after struggling alone for too long.",
  },
  {
    id: 39,
    category: "Teamwork & CRM",
    question: "Tell me about a time you weren't as effective a team member as you could have been.",
    teaser: "Own a real shortfall, not a technicality, and show what changed.",
    howToAnswer:
      "Own a real shortfall — distraction, poor communication, taking on too much alone instead of delegating — rather than a technicality. Explain what you now understand you should have done differently, and, ideally, a concrete change you've made since (a habit, a check you now do) so the story ends on growth rather than just admission.",
  },
  {
    id: 40,
    category: "Teamwork & CRM",
    question: "Tell me about leading, or being part of, a team that included one or more difficult or negative people.",
    teaser: "Name the specific behaviour, not just a personality label.",
    howToAnswer:
      "Describe the specific behaviour that was difficult (not just a personality label) and what you did about it — a direct conversation, adjusting how you assigned tasks, setting clearer expectations. Be fair to the other person in how you tell the story; the strongest answers show you tried to understand what was driving their behaviour rather than simply managing around it, even if the outcome wasn't a full turnaround.",
  },
  {
    id: 41,
    category: "Conflict & Communication",
    question: "Tell me about a time your active listening genuinely changed the outcome of a conversation.",
    teaser: "The specificity of 'what changed' separates this from a generic claim.",
    howToAnswer:
      "Give a specific moment where truly listening — not just waiting for your turn to talk — surfaced something you'd have missed otherwise (an underlying concern, a fact that changed your view). Describe what you did to listen well (asking a clarifying question, reflecting back what you heard) and how that directly shaped what happened next. The specificity of the 'what changed' is what separates this from a generic 'I'm a good listener' claim.",
  },
  {
    id: 42,
    category: "Conflict & Communication",
    question: "Tell me about a time someone changed your mind, or you changed someone else's.",
    teaser: "Either direction works — be honest about which one actually happened.",
    howToAnswer:
      "Either direction works, but be honest about which one actually happened and why the shift occurred — what specific argument, evidence, or framing did the persuading. If you were the one persuaded, showing that you can update your view when given good reason is a strength, not a weakness; don't be afraid to frame it that way.",
  },
  {
    id: 43,
    category: "Conflict & Communication",
    question: "Tell me about a time you had to deliver a difficult message clearly.",
    teaser: "Show the discomfort of the message didn't compromise its clarity.",
    howToAnswer:
      "Briefly set up why the message was difficult, then focus on exactly how you delivered it — the structure you used, how direct versus how gentle you were, and how you handled the other person's reaction. A strong answer shows you didn't let the discomfort of the message compromise its clarity; vague, hedged bad news is often worse than a clear, respectfully delivered one.",
  },
  {
    id: 44,
    category: "Conflict & Communication",
    question: "Tell me about a time you had to persuade colleagues to get behind an idea they weren't initially keen on.",
    teaser: "A believable answer usually shows the idea itself evolving through persuasion.",
    howToAnswer:
      "Explain what the initial resistance was actually about (not just 'they didn't like change'), and what you specifically did to bring people around — addressing their real concern, providing evidence, adjusting the proposal based on their feedback. A believable answer usually involves the idea evolving somewhat through the persuasion process, not you simply repeating your pitch until people gave in.",
  },
  {
    id: 45,
    category: "Conflict & Communication",
    question: "Describe a situation where you had to adjust your communication style for different people or perspectives.",
    teaser: "Wants conscious style-shifting across audiences, not one fixed approach.",
    howToAnswer:
      "Pick a scenario with at least two genuinely different audiences or personalities, and be specific about how you adapted (more detail versus more brevity, more formal versus more casual, data-driven versus story-driven) for each. The point is to show conscious, deliberate style-shifting rather than a single one-size-fits-all communication approach.",
  },
  {
    id: 46,
    category: "Conflict & Communication",
    question: "Tell me about a time you needed to be assertive to make sure an important point was heard.",
    teaser: "A speak-up question — the discomfort of pushing a point matters.",
    howToAnswer:
      "This is a speak-up question — describe the specific moment you sensed something important wasn't landing, and what you did to make sure it did (restating more directly, using a standard phrase or escalation step, following up afterward). Being candid about the discomfort of pushing a point, especially with someone senior, and doing it anyway, is the substance of a strong answer here.",
  },
  {
    id: 47,
    category: "Conflict & Communication",
    question: "Tell me about a time you had to write up a formal report on something you'd observed or been involved in.",
    teaser: "Focus on objectivity in the write-up, not the drama of the event.",
    howToAnswer:
      "Focus on how you approached the write-up: making sure it was factual, objective, and complete, without either downplaying or dramatizing what happened. If the report led to any follow-up action or change, mention it briefly — that shows the value of accurate reporting rather than treating it as a box-ticking exercise.",
  },
  {
    id: 48,
    category: "Conflict & Communication",
    question: "Tell me about a time you misinterpreted or misunderstood something someone told you.",
    teaser: "Own the gap plainly, then show the habit that prevents it recurring.",
    howToAnswer:
      "Own the misunderstanding plainly — what you thought was said, what was actually meant, and how the gap came to light. The valuable part of the answer is what you now do differently to avoid it recurring (closed-loop confirmation, reading back key information), since that shows the lesson stuck rather than being a one-off apology.",
  },
  {
    id: 49,
    category: "Conflict & Communication",
    question: "Tell me about a time you lost patience while listening to someone.",
    teaser: "A self-awareness question — did you catch it and recover, not 'do you ever get frustrated.'",
    howToAnswer:
      "Be honest that it happened rather than claiming perfect composure at all times. Briefly explain what triggered the frustration, how it showed (or nearly showed), and — most importantly — how you caught yourself and either recovered the conversation in the moment or repaired it afterward. This is a self-awareness and de-escalation question more than a test of whether you ever get frustrated.",
  },
  {
    id: 50,
    category: "Organisational Ability",
    question: "Tell me about a time you felt overwhelmed by everything happening at once on the flight deck.",
    teaser: "Name the specific factors that stacked up, not a vague 'it was a lot.'",
    howToAnswer:
      "Name the specific factors that stacked up (multiple tasks, time pressure, competing demands) rather than a vague 'it was a lot.' Then walk through how you regained control — prioritising, delegating, temporarily shedding lower-priority tasks, using your crew — since the real substance of this answer is your method for getting back ahead of the workload, not just surviving the moment.",
  },
  {
    id: 51,
    category: "Organisational Ability",
    question: "Tell me about handling an unplanned diversion or major change of plan.",
    teaser: "Your method for staying organised matters more than the task list.",
    howToAnswer:
      "Describe the trigger for the diversion briefly, then focus on the sequence of things you had to organise (fuel, weather, alternate planning, passenger/crew communication, coordination with relevant parties) and how you kept it all straight under time pressure. A strong answer shows a clear mental checklist or process you worked through, not just a list of tasks completed in no particular order.",
  },
  {
    id: 52,
    category: "Organisational Ability",
    question: "Have you ever dealt with a medical situation onboard? What was your role?",
    teaser: "Be precise about your actual role — don't overstate clinical involvement.",
    howToAnswer:
      "Be precise about what your actual role was (communicating with cabin crew, coordinating with ground medical support, managing the flight-deck side of the decision like a possible diversion) rather than overstating clinical involvement you didn't have. Focus on the coordination and decision-making aspects — how you balanced the medical urgency against operational considerations — since that's the competency being assessed, not medical knowledge itself.",
  },
  {
    id: 53,
    category: "Organisational Ability",
    question: "Tell me about a time your plan changed despite thorough preparation.",
    teaser: "Shows preparation and adapting aren't contradictory — frame it that way.",
    howToAnswer:
      "Show that good preparation and having to adapt aren't contradictory — briefly acknowledge the preparation you'd done, then focus on how quickly and cleanly you pivoted when circumstances changed. The best version of this answer treats the change as expected-but-unpredictable (something preparation reduces the impact of, rather than something that should never happen) rather than framing the change as a failure of your planning.",
  },
  {
    id: 54,
    category: "Organisational Ability",
    question: "Tell me about a time attention to detail really mattered.",
    teaser: "Needs a real gap between how easy the detail was to miss and its impact.",
    howToAnswer:
      "Pick a moment where a small detail, if missed, would have had a real consequence — and be specific about what the detail was and how you caught or handled it. Avoid a story where the detail is trivial; the strength of this answer comes from the gap between how easy the detail was to miss and how much it mattered.",
  },
  {
    id: 55,
    category: "Organisational Ability",
    question: "Tell me about a time you had to juggle conflicting priorities.",
    teaser: "Make your prioritisation logic visible, not just that you were busy.",
    howToAnswer:
      "Name the specific competing demands and why they genuinely conflicted (not just that you were busy), then explain the logic you used to sequence or balance them — what you deferred, what you did in parallel, and why. This is really a prioritisation-framework question, so make your reasoning visible rather than just describing the busy period.",
  },
  {
    id: 56,
    category: "Organisational Ability",
    question: "Tell me about a time you missed an important detail.",
    teaser: "State it plainly, then focus on the concrete change since then.",
    howToAnswer:
      "State plainly what you missed and how it came to light, without over-explaining it away. Spend most of the answer on the consequence (however minor) and the specific change you made afterward — a new personal check, a habit, a way of cross-verifying — so the story demonstrates a genuine correction rather than just an apology.",
  },
  {
    id: 57,
    category: "Organisational Ability",
    question: "Describe a situation where your prioritisation could have been better.",
    teaser: "Self-awareness about the misjudgement matters more than its severity.",
    howToAnswer:
      "Pick a real instance where, in hindsight, you spent effort on the wrong thing first. Explain what you now understand you should have prioritised instead and why, and describe the concrete change to how you now decide what comes first when priorities compete. Self-awareness about the misjudgement matters more here than the severity of the consequence.",
  },
  {
    id: 58,
    category: "Adaptability",
    question: "Tell me about a day when your tightly planned schedule got completely interrupted.",
    teaser: "Shows disruption as normal to operating, not something that throws you off.",
    howToAnswer:
      "Briefly describe the interruption, then focus on how you re-planned on the fly — what you dropped, reordered, or compressed, and how you communicated the new plan to anyone affected. A strong answer shows you treated the disruption as a normal part of operating rather than something that threw you off entirely.",
  },
  {
    id: 59,
    category: "Adaptability",
    question: "Tell me about a time you had to modify your plan or actions to accommodate another crew member's needs.",
    teaser: "Checks flexibility balanced with still meeting the requirement.",
    howToAnswer:
      "Explain what the other person's need or constraint was, and how you adjusted your own approach to accommodate it without compromising the task itself. This checks flexibility balanced with standards — a good answer shows you can bend your process for people while still meeting the requirement at hand.",
  },
  {
    id: 60,
    category: "Adaptability",
    question: "Describe a situation you had to adjust to that was entirely outside your control.",
    teaser: "The speed and constructiveness of your pivot is what's being assessed.",
    howToAnswer:
      "Name the uncontrollable factor plainly (weather, a schedule change, a decision made elsewhere) and focus your answer on your reaction to it — how quickly you accepted the new reality and moved to adapting, rather than dwelling on it. The speed and constructiveness of that pivot is what's being assessed.",
  },
  {
    id: 61,
    category: "Adaptability",
    question: "Tell me about a time you had to think on your feet to get yourself out of a difficult situation.",
    teaser: "Be honest if the fix wasn't perfect, just good enough for the constraints.",
    howToAnswer:
      "Set the situation up quickly, then spend most of the answer on the specific improvised solution you came up with in the moment and why it worked. Be honest if the solution wasn't perfect but was good enough given the constraints — that's often more believable than a flawless improvisation.",
  },
  {
    id: 62,
    category: "Adaptability",
    question: "Tell me about a time you had to adjust to a colleague's very different way of working.",
    teaser: "Show you can flex your style without losing your own standards.",
    howToAnswer:
      "Describe the specific difference in style (pace, communication preference, level of formality) and what you concretely changed about your own approach to work well with them. The goal is to show you can flex your own working style without losing your own standards, rather than expecting the other person to be the one to adapt.",
  },
  {
    id: 63,
    category: "Adaptability",
    question: "Tell me about a time you had to take action outside of a written procedure.",
    teaser: "Needs a clear-eyed account of the gap, not casual disregard for procedure.",
    howToAnswer:
      "Be precise about why the written procedure didn't cover the situation (not that you simply chose to ignore it), what you did instead, and how you made sure your improvised action stayed within safe limits and was properly reported or documented afterward if required. This answer needs to show respect for procedure generally, with a clear-eyed account of the specific gap that required departing from it.",
  },
  {
    id: 64,
    category: "Adaptability",
    question: "Tell me about the most demanding manager or supervisor you've worked for, and how you adapted.",
    teaser: "Describe the style factually, and end on what you took from it.",
    howToAnswer:
      "Describe what made them demanding factually (high standards, close attention to detail, direct feedback style) rather than framing it negatively. Focus on what you specifically did to adapt and work well under that style, and — ideally — what you took away from working with them that you still use, since ending on a constructive note lands better than ending on relief that it's over.",
  },
  {
    id: 65,
    category: "Adaptability",
    question: "Tell me about a time you disagreed with a new policy or procedure, and how you actually responded.",
    teaser: "Tests whether disagreement becomes pushback or quiet non-compliance.",
    howToAnswer:
      "Separate your private opinion from your professional response — it's fine to say you disagreed, but the answer needs to show you complied and operated within the new policy while raising your concern through the appropriate channel, rather than working around it. This is testing whether disagreement translates into constructive pushback or into quiet non-compliance.",
  },
  {
    id: 66,
    category: "Adaptability",
    question: "Tell me about a time you struggled to adjust to a change in policy or procedure.",
    teaser: "A credible adjustment period beats an instant, unbelievable embrace of change.",
    howToAnswer:
      "Own the struggle honestly — what specifically made the change hard to adapt to (a habit, a belief the old way was better, the pace of the change) — and then describe what eventually got you comfortable with it. A credible account of a real adjustment period, rather than an instant embrace of change, tends to land better with an experienced interviewer.",
  },
  {
    id: 67,
    category: "Leadership",
    question: "Describe the most unpopular position or stand you've taken at work.",
    teaser: "Make sure the stand was grounded in something defensible, not stubbornness.",
    howToAnswer:
      "Be specific about what the position was and why it was unpopular — who disagreed and why. Focus on how you held that position responsibly: making sure it was grounded in something defensible (safety, a standard, a genuine concern) rather than just stubbornness, and how you handled the social cost of holding it.",
  },
  {
    id: 68,
    category: "Leadership",
    question: "Tell me about a time you built support for an idea that was initially strongly opposed.",
    teaser: "Credibility comes from showing the idea evolved through the persuasion process.",
    howToAnswer:
      "Describe the initial opposition honestly, then walk through the specific steps you took to bring people around — addressing objections one at a time, adjusting the idea based on feedback, finding an early ally. The credibility of this answer comes from showing the idea (or your approach to selling it) actually evolved through that process.",
  },
  {
    id: 69,
    category: "Leadership",
    question: "Describe a crew that wasn't working well together, and what you did to improve the situation.",
    teaser: "Name the specific dysfunction, then the concrete steps you took.",
    howToAnswer:
      "Name the specific dysfunction (poor communication, unclear roles, friction between two people) rather than a vague 'bad vibe', and then detail the concrete steps you took to address it. Be clear about the scope of your role in fixing it — whether you were formally in charge or influencing informally — since that shapes what 'improving the situation' reasonably looked like for you.",
  },
  {
    id: 70,
    category: "Leadership",
    question: "Tell me about a time you had to say something tactfully but firmly that others didn't want to hear.",
    teaser: "Balance tact with firmness — show neither was sacrificed for the other.",
    howToAnswer:
      "Describe the message and why it needed saying, then focus on how you balanced tact with firmness — the specific wording or approach you used to be clear without being harsh. A strong answer shows you didn't dilute the message to the point of being ineffective, nor deliver it so bluntly that it damaged the relationship.",
  },
  {
    id: 71,
    category: "Leadership",
    question: "Tell me about a time you had to communicate a decision from management that you personally disagreed with.",
    teaser: "Show you represented the decision fairly without pretending you agreed.",
    howToAnswer:
      "Show professional integrity: you don't need to pretend you agreed, but you do need to show you represented the decision fairly and didn't undermine it in front of others. Explain how you handled the gap between your own view and your role in communicating the decision, and how you raised your disagreement through the right channel separately from delivering the message.",
  },
  {
    id: 72,
    category: "Leadership",
    question: "Tell me about a time you had to deliver bad news to your crew or to passengers.",
    teaser: "Clarity and composure in delivery matter more than the news itself.",
    howToAnswer:
      "Focus on clarity and composure — how you structured the message so it was understood the first time, and how you managed the emotional reaction (yours and theirs) without letting it derail the delivery. If you offered next steps or reassurance alongside the bad news, mention that, since it shows you thought beyond just the delivery itself.",
  },
  {
    id: 73,
    category: "Leadership",
    question: "Tell me how you typically set the tone for a flight or shift during your pre-departure briefing.",
    teaser: "A concrete example of a briefing that mattered beats a generic description.",
    howToAnswer:
      "Describe your actual habits, not an idealised version — what you specifically cover, how you invite input from others, and what you're trying to establish (open communication, clear roles, a shared understanding of anything unusual about that trip). A concrete example of a briefing where the tone you set genuinely mattered later in the flight makes this answer much stronger than a generic description.",
  },
  {
    id: 74,
    category: "Leadership",
    question: "Tell me about a flight where you failed to set clear direction for your team.",
    teaser: "Own it honestly — the real value is what you changed afterward.",
    howToAnswer:
      "Own this honestly — describe what was ambiguous or unspoken that should have been made clear, and what confusion or inefficiency resulted. The value of this answer is entirely in what you changed afterward about how you brief and direct people, so make sure that part is concrete and specific.",
  },
  {
    id: 75,
    category: "Leadership",
    question: "Tell me about a time you did a poor job delegating a task, or should have delegated but didn't.",
    teaser: "Be honest about the instinct behind holding onto the task yourself.",
    howToAnswer:
      "Be honest about the instinct that led you to hold onto the task yourself (not trusting someone else, wanting control, not thinking of it in the moment), and what the cost of that was — usually your own overload or someone else's under-use. Close with what you now do differently when deciding whether to delegate.",
  },
  {
    id: 76,
    category: "Customer Service",
    question: "Describe a situation with a particularly difficult or challenging passenger.",
    teaser: "Staying professional in the retelling reflects how you'd behave for real.",
    howToAnswer:
      "Describe what made the passenger difficult specifically, then focus on how you (or your crew, if it wasn't directly you) de-escalated or managed the situation — the tone you took, what you offered or explained, and how it was resolved. Staying professional and calm in the retelling, even about a genuinely frustrating passenger, reflects well on how you'd behave in the real situation.",
  },
  {
    id: 77,
    category: "Customer Service",
    question: "Tell me about a time you went beyond what was expected to make sure a passenger was taken care of.",
    teaser: "Keep it proportionate — a small, thoughtful gesture beats an exaggerated one.",
    howToAnswer:
      "Pick a specific, genuine example rather than a routine act of politeness — something where you clearly went further than the minimum required. Explain what you noticed that prompted you to act, what you actually did, and why it mattered to that particular passenger. Keep the story proportionate; a small but thoughtful gesture, well told, works better than an exaggerated one.",
  },
  {
    id: 78,
    category: "Customer Service",
    question: "Tell me about a time you had to deal with an unreasonable request from a passenger.",
    teaser: "'Unreasonable' needs real justification, not just personal preference.",
    howToAnswer:
      "Be fair in how you describe the request — 'unreasonable' should be clearly justified by the actual circumstances (a safety rule, a policy, practicality), not just your personal preference. Explain how you communicated the 'no' respectfully, what you offered instead if anything, and how the passenger reacted.",
  },
  {
    id: 79,
    category: "Customer Service",
    question: "What's your general approach to dealing with difficult people? Can you give an example?",
    teaser: "Wants your actual repeatable method, grounded by one real example.",
    howToAnswer:
      "Give your actual, repeatable approach (staying calm, listening first, separating the person's frustration from the specific ask, offering what you can) and then ground it with one concrete example that shows the approach in action. Interviewers are listening for a consistent method here, not a one-off anecdote with no underlying principle.",
  },
  {
    id: 80,
    category: "Customer Service",
    question: "Tell me about a time, despite your best efforts, you weren't able to fully satisfy a passenger's needs.",
    teaser: "A legitimate outcome to admit to — not everything resolves cleanly.",
    howToAnswer:
      "This is a legitimate outcome to admit to — not every situation resolves cleanly. Explain what you tried, why it fell short (a genuine constraint, not a lack of effort), and how you left the interaction as professionally as possible given the limits you were working within. Showing you can accept an imperfect outcome without over-apologising or over-promising is the real point here.",
  },
  {
    id: 81,
    category: "Commercial Awareness",
    question: "Describe a situation where you put the operation's needs ahead of your own personal preference.",
    teaser: "Show you made the call without lingering resentment about it.",
    howToAnswer:
      "Be specific about the trade-off — what you personally would have preferred, and what the operational need actually was. A credible answer shows you made the call without resentment, understanding why the operational priority made sense, rather than framing it as a sacrifice you're still bitter about.",
  },
  {
    id: 82,
    category: "Commercial Awareness",
    question: "Tell me about a time your actions led to greater operational efficiency.",
    teaser: "Quantify the improvement if you reasonably can, and name what you changed.",
    howToAnswer:
      "Quantify the improvement if you reasonably can (time saved, a smoother process, fewer downstream problems), and be clear about what you specifically changed to bring it about. This is a good place to show you think beyond your own immediate task to the efficiency of the wider operation.",
  },
  {
    id: 83,
    category: "Commercial Awareness",
    question: "Tell me about a recommendation you made that ended up improving the passenger experience.",
    teaser: "The emphasis is on noticing the improvement, whether or not it was adopted.",
    howToAnswer:
      "Describe what you noticed that prompted the suggestion, how you raised it, and what changed as a result. If it wasn't adopted, that's a fine story too — the emphasis should be on your ability to notice and articulate an improvement from the passenger's point of view, not solely on whether it was implemented.",
  },
  {
    id: 84,
    category: "Commercial Awareness",
    question: "Describe a risk you identified to safety or reputation, and how you responded to it.",
    teaser: "Rewards connecting an operational detail to its broader consequences.",
    howToAnswer:
      "Be clear about how you spotted the risk, why it mattered (both the safety dimension and the reputational one, if relevant), and the specific plan you put together to address it. This question rewards structured thinking — showing you can connect an operational detail to its broader consequences for the organisation, not just flag a problem and stop there.",
  },
  {
    id: 85,
    category: "Commercial Awareness",
    question: "Tell me about a time you saved time or resources without compromising safety or service quality.",
    teaser: "The safety/quality reassurance is the part doing the real work here.",
    howToAnswer:
      "Give a concrete example of the saving (time, fuel, unnecessary steps) and be explicit about how you made sure safety and service weren't compromised in the process — that reassurance is the part of the answer doing the real work, since efficiency gains that quietly cut corners are exactly what this question is trying to screen out.",
  },
  {
    id: 86,
    category: "Commercial Awareness",
    question: "Tell me about a time you didn't fully consider the cost or efficiency implications of a decision you made.",
    teaser: "Shows you now factor in cost/efficiency as a matter of habit.",
    howToAnswer:
      "Own the oversight honestly — describe the decision, what cost or inefficiency resulted that you hadn't accounted for, and what you now factor in that you didn't before. The value of the answer is in showing you now think about the operational/commercial angle as a matter of habit, not that the original decision was catastrophic.",
  },
  {
    id: 87,
    category: "Cross-Cultural Understanding",
    question: "Tell me about your experience working with people from different cultural or national backgrounds.",
    teaser: "Ground it in one real, specific colleague or crew, not a general statement.",
    howToAnswer:
      "Ground this in specific, real experience rather than a general statement about valuing diversity. Describe a particular colleague or crew and what you learned about working well together across a cultural or communication difference — a misunderstanding you navigated, an adjustment you made, or something you learned from their approach that you still use.",
  },
  {
    id: 88,
    category: "Cross-Cultural Understanding",
    question: "How do you think working in a highly multicultural crew environment affects crew coordination?",
    teaser: "A balanced answer connects back to concrete CRM practice, not just platitudes.",
    howToAnswer:
      "Give a balanced, thoughtful answer: multicultural crews bring a wider range of experience and perspective, but can also carry differences in communication norms, hierarchy expectations, or assertiveness that need to be actively managed rather than assumed away. The strongest answers connect this back to good CRM practice — explicit communication, checking understanding rather than assuming it, and not relying on unstated cultural norms.",
  },
  {
    id: 89,
    category: "Cross-Cultural Understanding",
    question: "What are the advantages and challenges of working in a highly multicultural environment?",
    teaser: "Give a genuinely two-sided answer, backed by at least one real example.",
    howToAnswer:
      "Give a genuinely two-sided answer rather than only listing positives — advantages might include a broader range of problem-solving approaches and perspective; challenges might include communication style differences or assumptions that don't transfer across cultures. Back at least one side with a real example from your own experience so the answer doesn't stay purely theoretical.",
  },
];
