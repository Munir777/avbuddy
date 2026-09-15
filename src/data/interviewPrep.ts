// Interview Preparation — behavioral / competency-based interview practice.
//
// This is a starter set of widely-known, general-purpose airline pilot
// interview question types (decision-making, safety culture, CRM, etc.) —
// not sourced from any specific airline's real question bank. The "howToAnswer"
// field is guidance on HOW to structure and deliver an answer (the STAR
// framework, what interviewers are listening for, things to avoid), not a
// pre-written script — the actual content of your answer should always come
// from a real, specific example from your own flying.
//
// Add real questions you've collected (from your own interviews, or ones you
// want to practice) as new entries below, following the same shape.

export interface InterviewQuestion {
  id: number;
  category: string;
  question: string;
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
] as const;

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 1,
    category: "Decision-Making Under Pressure",
    question:
      "Tell me about a time you had to make an important decision quickly, with incomplete information.",
    howToAnswer:
      "Use STAR (Situation, Task, Action, Result) and pick a genuinely specific event, not a generic description of 'a time this happens.' Set the scene briefly (Situation/Task) — what was actually at stake and why the information was incomplete — then spend most of your answer on your Action: what options you weighed, what you prioritised (usually safety margins over schedule/convenience), and why you chose what you chose. Close with the Result and, ideally, a one-line reflection on what you'd take forward from it. Interviewers are listening for a structured thought process under time pressure, not a lucky guess — so make your reasoning visible, not just the outcome. Bush flying experience is a strong well to draw from here: marginal weather, limited weather reporting, or a go/no-go call with real consequences.",
  },
  {
    id: 2,
    category: "Safety Culture",
    question:
      "Describe a situation where you had to prioritise safety over a schedule or commercial pressure.",
    howToAnswer:
      "This question is really testing whether 'safety first' is something you can back up with a real decision, not just a slogan. Pick a moment where there was genuine pressure the other way (a paying customer waiting, a tight connection, a supervisor's expectation) and be explicit about the trade-off you faced — vague answers that don't name a real cost read as rehearsed. Explain the specific factor that tipped your decision (a limit, a personal minimum, a red flag you weren't willing to explain away) and how you communicated the decision to whoever was affected. A strong close addresses how you framed it to others, since handling the social/commercial fallout well is often what separates a good answer from a great one.",
  },
  {
    id: 3,
    category: "Safety Culture",
    question:
      "Tell me about a time you noticed something unsafe that others had missed or dismissed, and what you did about it.",
    howToAnswer:
      "This is a speaking-up / assertiveness question — airlines want to know you'll raise a concern even when it's socially uncomfortable (a more senior colleague, a captain, a maintenance sign-off). Be specific about what you noticed and why it mattered, then walk through exactly how you raised it — the actual words or process you used, not just 'I told them.' If there was initial pushback, say so and how you handled it; a slightly imperfect but honest account of navigating that friction is more convincing than a frictionless one. End with the outcome and, if relevant, what changed afterward (a habit, a checklist item, a conversation that stuck).",
  },
  {
    id: 4,
    category: "Teamwork & CRM",
    question:
      "Describe a time you disagreed with a captain, first officer, or colleague about an operational decision.",
    howToAnswer:
      "Interviewers are checking two things at once here: that you're willing to voice a disagreement, and that you can do it without damaging the working relationship or undermining crew coordination. Structure your answer around the specific disagreement (what exactly you each thought and why), how you raised it (calmly, with your reasoning, ideally referencing a shared standard like a checklist or limit rather than just your gut), and how it was resolved — including if the resolution wasn't your preferred outcome. Avoid any answer that makes the other person sound careless or incompetent; a mature answer shows you can disagree on substance while still respecting the working relationship.",
  },
  {
    id: 5,
    category: "Teamwork & CRM",
    question: "Tell me about a time you had to rely heavily on a colleague you didn't know well.",
    howToAnswer:
      "This probes adaptability and trust-building in ad hoc crews — very relevant to airline flying, where you're often paired with someone new every trip. Focus on what you actively did to build a working rapport quickly (a thorough briefing, explicitly stating your expectations, asking about theirs) rather than just saying it 'worked out fine.' If something went slightly sideways because of the unfamiliarity, that's a good, honest detail to include, followed by how you adapted. The takeaway the interviewer wants is that you have a repeatable approach to establishing trust and clear communication with strangers, not that you got lucky with a good crew pairing.",
  },
  {
    id: 6,
    category: "Conflict & Communication",
    question: "Describe a time you had to deliver difficult or unwelcome news to a passenger, colleague, or supervisor.",
    howToAnswer:
      "Good answers here show empathy plus clarity — you can't soften the message so much that it's misunderstood, but you also shouldn't be needlessly blunt. Briefly set up why the news was difficult, then focus on how you delivered it: what you said, how you anticipated their reaction, and how you handled any pushback or emotion. If you offered next steps or an alternative, mention that — it shows you didn't just deliver bad news and walk away. Keep the story concrete (a specific delay, a specific decision) rather than a general philosophy of 'I try to be honest and clear.'",
  },
  {
    id: 7,
    category: "Leadership",
    question: "Tell me about a time you had to take charge in a stressful or ambiguous situation.",
    howToAnswer:
      "This doesn't require formal rank or title — interviewers want evidence that you can organise people and structure a chaotic moment even without being explicitly put in charge. Pick a moment where the situation genuinely lacked clear direction, explain the specific actions you took to bring order (assigning tasks, setting priorities, communicating a plan), and be honest about what was hard about it. A strong answer shows calm, clear communication under stress rather than just 'staying calm' as an abstract claim — give the actual words or actions that demonstrated it.",
  },
  {
    id: 8,
    category: "Handling Mistakes",
    question: "Tell me about a mistake you made and how you handled it afterward.",
    howToAnswer:
      "Pick a real mistake with real (but not catastrophic) consequences — refusing to admit to any meaningful mistake, or picking something so trivial it doesn't say anything, both read poorly. Own the error plainly and early in your answer rather than burying it in caveats or blaming circumstances. Spend most of the answer on what you did immediately afterward (containing the consequence, informing the right people) and, importantly, what changed in how you operate as a result — a specific habit, check, or mindset shift. Interviewers are far more interested in your response to failure than in the failure itself.",
  },
  {
    id: 9,
    category: "Motivation & Fit",
    question: "Why do you want to fly for this airline specifically?",
    howToAnswer:
      "Generic answers ('great reputation', 'modern fleet', 'growth opportunities') are instantly forgettable because every candidate says them. Do the specific homework: something about the airline's route network, fleet, base location, career progression path, or operating culture that genuinely connects to your own background and goals, and say why that specific thing matters to you. Tying it back to a concrete detail from your own flying history (the type of flying you've done, what you're looking to develop next) makes the answer sound like it's actually about you and this airline, not a template swapped between applications.",
  },
  {
    id: 10,
    category: "Motivation & Fit",
    question: "Where do you see yourself in five years, and how does this role fit into that?",
    howToAnswer:
      "Airlines are checking for realistic ambition and retention risk in roughly equal measure — an answer that's either too vague ('just flying safely, I guess') or too aggressively upward ('captain within two years, then management') can both raise flags. Aim for a grounded answer: a plausible progression path at that airline specifically (upgrade timelines, fleet moves, or areas of the operation you'd like to grow into), tied to something concrete about your own development goals. It's fine to mention long-term ambitions as long as you frame the near-term role as a genuine, valued step rather than a stepping stone you're eager to leave.",
  },
];
