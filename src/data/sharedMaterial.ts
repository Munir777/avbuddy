// Shared Material — interview experiences and notes organised by airline.
//
// The entries below are curated directly (pasted in, rewritten, de-branded,
// and committed here). There's a second source now too: signed-in users can
// submit their own experience from the Shared Material tab, which lands in
// the `shared_submissions` table as `pending` and only reaches the public
// site once it's been reviewed and rewritten in the admin panel (/admin) --
// see api/submissions/*.ts, api/shared-material.ts, and
// src/lib/submissions.ts. Those approved submissions are merged in
// client-side by SharedMaterialView; they never live in this file.
//
// An entry is either:
//   - a simple Q&A-style card: just `body` (plain text, paragraphs separated
//     by blank lines), used for the Riyadh Air technical question pool, or
//   - a structured, blog-style post: `sections` (a sequence of headed
//     sections), used for a full interview-day writeup like the Etihad one.
// Both are collapsed by default behind `title` + `summary` in the UI.

export interface SharedSection {
  heading: string;
  body: string;
}

export interface SharedEntry {
  id: number;
  title: string;
  summary?: string; // one-line teaser shown when collapsed
  body?: string; // simple Q&A-style content
  sections?: SharedSection[]; // structured blog-style content
  note?: string; // e.g. how/when this was gathered
}

export const AIRLINES = ["Emirates", "Qatar Airways", "Etihad", "Riyadh Air", "FlyDubai"] as const;

export type Airline = (typeof AIRLINES)[number];

export const SHARED_MATERIAL: Record<Airline, SharedEntry[]> = {
  Emirates: [],
  "Qatar Airways": [
  {
    id: 1,
    title: "Panel Interview: The Flight-Plan Briefing Exercise",
    summary:
      "Panel format (HR plus two captains or TREs), plus three real scenarios from the on-screen flight-plan briefing exercise — hot-weather performance, a low-visibility cold-weather diversion, and a thunderstorm departure with a pack fault in cruise.",
    sections: [
      {
        heading: "Format",
        body:
          "The panel was three people — an HR representative and two captains (one Boeing, one Airbus) — and the tone across both accounts was relaxed and professional rather than adversarial. HR opens by introducing themselves, then each captain introduces themselves, before asking the candidate to talk briefly about themselves and why they want to join. Both candidates found this a straightforward warm-up rather than a hurdle.",
      },
      {
        heading: "The Flight-Plan Briefing Exercise",
        body:
          "The core of the interview is the same for everyone, even though the scenario details vary: a flight plan appears on screen with the departure and arrival airports, an alternate, the weather for all three, and the operational extras that actually make it interesting — NOTAMs, MEL items, and the NOTOC. You get somewhere around 5 to 10 minutes to work through it before briefing the panel (one candidate specifically had to brief a captain who arrived to the room late, so be ready to just start the brief for whoever's in front of you). Both candidates could refer to their own company's iPad and manuals while preparing, so it isn't a closed-book memory test — it's testing whether you can pull the relevant considerations out of a realistic flight plan and communicate them clearly.\n\n" +
          "Expect the panel to interrupt with questions that follow directly from whatever you raise in the brief, rather than working through a fixed list — mention high elevation and temperature and be ready to talk performance; mention weather and be ready to talk the specific procedure for it.\n\n" +
          "This stage can also run online rather than in person, in which case the scenario is typically drawn from one of three broad weather categories depending on the route — cold-weather, hot-weather, or monsoon/tropical — each with its own METAR/TAF, NOTAMs and MEL items, and 10 to 15 minutes to prepare. The three worked examples below happen to be one from each of those categories. However it's delivered, structure the brief around the threat-and-error model rather than just reading the flight plan back: actively call out the threats the scenario is presenting, the errors they could lead to, and how you'd manage or trap each one.",
      },
      {
        heading: "Example Scenario: Hot-Weather Operations",
        body:
          "One candidate's scenario was built around hot-weather operations. Bringing up the high airport elevation and high outside air temperature was enough to prompt a follow-up on how that combination affects takeoff performance — worth having ready: both factors reduce air density, which cuts engine thrust and wing lift, lengthens the takeoff roll, and erodes the climb gradient, so depending on the aircraft's performance data for the day it can drive a weight restriction or a higher takeoff speed schedule. Mentioning windshear in the brief drew a follow-up on the windshear recovery manoeuvre itself, so it's worth being able to talk through your own aircraft's windshear escape technique on demand, not just gesture at following the flight director.",
      },
      {
        heading: "Example Scenario: Low-Visibility, Cold-Weather Operations",
        body:
          "The other candidate's scenario was a Milan Malpensa–Zurich sector with Basel as the alternate: Category III weather at Malpensa (the departure), reduced but still landable visibility at Zurich, and good weather at Basel. Layered on top of that: an MEL item for an inoperative autobrake system, NOTAMs for a couple of unserviceable navigation aids at both Malpensa and Zurich, and a NOTOC listing fresh vegetables in the forward hold (needing to stay within a stated temperature range) and four oxygen bottles.\n\n" +
          "After the prep time, the two questions that followed the brief were about fuel considerations for the flight, and whether a return to Malpensa was possible if something went wrong shortly after takeoff. The second one is really a takeoff-alternate question in disguise: with the departure airport sitting at Category III weather — at or below what's needed to land there — the crew can't count on getting back in if they need to shortly after departure, which is exactly why a takeoff alternate within the required diversion time is a planning requirement in the first place. On the fuel side, a complete answer reaches beyond basic trip fuel to cover contingency for the low-visibility approach at the destination, whatever's needed to reach the takeoff alternate if it's required, and the fact that an inoperative autobrake system can itself affect landing-distance and go-around planning at either end.",
      },
      {
        heading: "Example Scenario: Bangkok–Doha, Thunderstorm Departure",
        body:
          "A third candidate's panel was slightly different in composition — one HR representative and two Type Rating Examiners, one Boeing and one Airbus — but the exercise itself followed the same shape: introduce yourself, then work through a flight plan, this time for a Bangkok–Doha sector. This session also included a significant weather chart, with the panel asking about specific symbols on it, so it's worth being comfortable reading a SIGWX chart cold rather than just knowing the concepts in the abstract.\n\n" +
          "The MEL list carried two items: the reactive windshear system and the autobrake system, both unserviceable. On top of that, the departure airport had a large cumulonimbus sitting overhead, which the panel used to probe departure considerations — with no reactive windshear system to rely on, the honest answer leans more heavily on visual/radar avoidance of the cell, being ready for the manual windshear escape manoeuvre if it's encountered anyway, and being willing to hold or delay the departure if the cell is a genuine threat rather than pushing through it. That naturally led into the aircraft's windshear memory items themselves, which the candidate was expected to run through directly.\n\n" +
          "The other scenario thread was a pack fault in cruise: one air-conditioning pack failing, and what to do about it for the rest of the flight. The core of a good answer covers the immediate systems consequence — running on the remaining pack alone, watching the pressurisation and any duct-temperature limits that come with single-pack operation — and then the knock-on planning: whether the cruise altitude needs revisiting, the fuel effect of any level change, and whether continuing to the planned destination is still the right call or a diversion is worth considering, given the sector and what else is going on with the aircraft.\n\n" +
          "This candidate described the panel as friendly and low-pressure throughout, with the whole thing wrapped up in around 30 minutes.",
      },
    ],
    note: "Compiled from three candidates' accounts of the flight-plan briefing stage of the panel interview, reported around the same time. The exact scenario, weather, and follow-up questions vary by candidate and session — the examples above are what came up for these three, not a fixed script.",
  },
  {
    id: 2,
    title: "Online Psychometric Testing",
    summary:
      "A 200-question personality inventory and a 35-item abstract reasoning test, done online, with practice examples given before the scored section.",
    body:
      "The online psychometric stage runs in two parts. The first is a personality inventory of around 200 questions — candidates who've done it describe it as noticeably repetitive, with very similarly worded statements coming back around from different angles. The general advice is the same as for any personality inventory: answer as yourself rather than trying to guess a 'correct' profile, since consistency across the repeated items is part of what it's actually checking.\n\n" +
      "The second part is a 35-question abstract reasoning test — pattern and sequence reasoning rather than anything aviation-specific. Before the timed, scored section starts, candidates are given practice exercises to work through, so there's no need to walk in cold; use those to get comfortable with the question format and pacing first.",
    note: "Reported by a candidate who went through the online stage of the selection process.",
  },
  {
    id: 3,
    title: "Technical Multiple-Choice Exam (Airbus Type-Rated)",
    summary:
      "A partial recall of a 20-item multiple-choice technical exam for Airbus type-rated applicants — V1, engine tailpipe fires, tailwind effects on climb, and runway braking action.",
    body:
      "This is one candidate's partial recall of a 20-item multiple-choice technical exam for Airbus type-rated applicants — these ten are what they remembered clearly, not the full set.\n\n" +
      "What does V1 actually guarantee? It's a balanced speed, not a single guarantee in one direction: stopping within the accelerate-stop distance available is assured if the decision to stop is made at or before V1, and continuing is assured — reaching the required height above the runway by the end of the takeoff distance available, on the remaining engine after a failure — if the takeoff is continued from V1 onward. This exam's question leaned on the stopping half of that definition.\n\n" +
      "Why can't the engine fire extinguisher be used on an engine tailpipe fire? The fixed extinguishing bottles discharge into the engine core and nacelle area, not the tailpipe, so they physically can't reach a fire that's confined to the exhaust — this came up twice, worded slightly differently each time. A tailpipe fire during engine start is usually unburned fuel igniting in the exhaust rather than a genuine engine fire, and the standard response is to keep motoring the engine with the starter to blow the fire out the back, rather than reaching for the fire handle.\n\n" +
      "How does a tailwind affect the climb after takeoff? The reliable, testable mechanism is distance, not time: a tailwind doesn't change how quickly the aircraft gains height, but it does mean more ground is covered while doing it, so the horizontal distance needed to reach a required height increases — that's the number that actually drives obstacle-clearance and net takeoff flight path calculations. If the exam framed this as increasing 'climb time', treat that as pointing at the same distance effect rather than a literal change in climb rate.\n\n" +
      "What braking action does a measured runway friction coefficient of around 0.25 correspond to? Poor — reference tables used across Airbus and Boeing performance material commonly put a coefficient around that value or below into the Poor band, well short of Medium, which is the kind of number that should be driving a serious rethink of the day's takeoff or landing performance rather than a passing mental note. Exact thresholds vary a little between references, so treat 0.25 as a well-known reference point rather than a universal cutoff.\n\n" +
      "When should terrain be selected on the Navigation Display for takeoff and landing? As a general practice, both — terrain awareness matters most during these low-altitude phases, so displaying terrain on the ND for takeoff and landing (not just when a terrain-related airport is involved) is the safer default the exam was pointing at.\n\n" +
      "With brake temperatures around 500°C after a quick turnaround, is it safe to run the brake fan? No — the common guidance across types is not to run the brake fan while brake temperature is still that high. Let the brakes cool passively first, then use the fan once temperature is back within its normal range; running a fan on very hot brakes risks damaging the fan itself or fanning smouldering brake material.\n\n" +
      "What does a fuel over-read look like? If the indicated fuel on board plus the cumulative fuel used since departure adds up to more than the fuel on board at departure, the indicating system is showing more fuel than can actually be accounted for — a sign the gauges are over-reading rather than a genuine leak (which would show the opposite pattern).\n\n" +
      "When does a 'DON'T SINK' call happen? It's a GPWS/EGPWS caution for an unintended loss of altitude shortly after takeoff or during a missed approach/go-around — specifically when the aircraft is sinking when the flight path should be climbing.\n\n" +
      "Can an RNP/RNAV approach still be continued with only one autopilot? Often yes for a standard RNP approach, but this is exactly the kind of thing that depends on the specific RNP value and the operator's approved minima — tighter RNP AR procedures commonly demand a coupled (sometimes dual) autopilot, while a more standard RNP APCH may allow single-autopilot or even manual flight with flight-director guidance. Know your own operator's rule rather than assuming one answer covers every RNP approach.\n\n" +
      "What prompts the pilot monitoring's deviation call during an ILS approach? Many SOPs set the threshold at half a dot of localizer deviation — once it's exceeded, the PM calls it out so the pilot flying can correct back onto the centreline.",
    note: "One candidate's partial recall of a 20-item Airbus type-rated technical exam — treat this as a sample of the kind of question asked, not a complete question bank.",
  },
  {
    id: 4,
    title: "Simulator Assessment (Airbus Type-Rated)",
    summary:
      "Two profiles out of Doha (OTHH) runway 34R — an engine fire leading to an emergency evacuation, then a V1 engine failure through to a go-around, a localizer-only approach, and a stop on the runway.",
    sections: [
      {
        heading: "First Profile: Engine Fire and Evacuation",
        body:
          "The assessment starts already lined up on runway 34R at Doha, flying the Kupro 2E departure. After a normal takeoff, an engine fire is introduced at 9,000 feet, leading into an ILS approach back to 34R and, after landing, an emergency evacuation.",
      },
      {
        heading: "Second Profile: V1 Engine Failure Through to a Full Stop",
        body:
          "After repositioning back to runway 34R, the second profile opens with an engine failure timed right at V1 — the classic go/no-go decision point, where the takeoff is continued on the remaining engine. That's followed by an ILS approach, a go-around, then a second approach flown as a localizer-only approach (no glideslope) into 34R, ending with a stop on the runway rather than a full landing and taxi-in.",
      },
    ],
    note: "One candidate's account of the two profiles flown during the type-rated simulator assessment out of Doha — the specific failures and sequence are likely to vary between sessions.",
  },
  ],
  Etihad: [
  {
    id: 1,
    title: "Candidate From a Recent Interview",
    summary:
      "A320 First Officer (non-type-rated) assessment day, Abu Dhabi — written test, simulator, technical interview, documentation check, and group exercise.",
    sections: [
      {
        heading: "Arrival & Company Presentation",
        body:
          "Candidates arrived around 7:45 a.m. and the day opened with a company presentation. After that, everyone was split into groups — some went straight into the group exercise, others started with the written ATPL test.",
      },
      {
        heading: "The Written ATPL Test",
        body:
          "50 questions in 45 minutes. Almost all of the material lined up with the well-known LPJ-style ATPL question bank, but the answer choices on this test were noticeably closer together than in typical practice material, so reading each option carefully mattered more than usual. This candidate's advice: study broadly rather than just memorising a single compilation, since the discriminating factor here was precision, not raw coverage. From what they recalled, the passing mark was around 50%.",
      },
      {
        heading: "Simulator Assessment (Non-Type-Rated, A320)",
        body:
          "About an hour after the written test, this candidate went into the simulator for the non-type-rated assessment. The exercise starts on the runway with both engines already running — no briefing is required, though a short one to organise your own thoughts is fine and doesn't count against you.\n\n" +
          "Shortly after takeoff, a windshear encounter was introduced. The advice here: fly the windshear procedure exactly as you're trained on whatever aircraft you currently fly, but more importantly, show clear prioritisation — aviate, navigate, communicate, in that order. Worth mentioning out loud during the exercise: filing an Air Safety Report, informing the cabin crew, and giving a PA to passengers once clear of the sterile cockpit phase.\n\n" +
          "After that, the examiner began vectoring for a return. Partway through, the cabin crew called the flight deck to report a passenger suspected of having a stroke (this candidate was flying from the right seat, with a company captain in the left seat supporting the exercise). Same priority order applied — aviate, navigate, communicate — before assessing the situation and deciding to return.\n\n" +
          "On the way back, the candidate was vectored onto the ILS with roughly a 30-degree intercept angle, then asked to disconnect the autopilot and flight director and fly it manually — requesting Bird ON and hand-flying both the localiser and glideslope intercept. The first approach was stabilised and the landing was fine, but the examiner asked for it to be repeated anyway, this time set up on a straight-in final rather than an intercept. A second stabilised approach and normal landing closed out the simulator portion.",
      },
      {
        heading: "Technical Interview",
        body:
          "A mix of 'tell me about a time...' behavioral questions, general personal questions, and a solid block of technical questions. On the technical side: the meaning of an Approach Ban, what the METAR and TAF abbreviations stand for, and several questions around alternate airport planning.\n\n" +
          "One scenario given: flying from São Paulo/Guarulhos to Miami, and the destination airport closes before departure — would you still be able to depart? From there, the panel explored alternate requirements, flight planning considerations, and the decision-making behind it.\n\n" +
          "Toward the end, they asked if the candidate had any questions of their own, and also asked about the lowest point in their career.",
      },
      {
        heading: "Documentation Check",
        body: "Straightforward — this step was simply a verification that all the required documents were in order, nothing more involved than that.",
      },
      {
        heading: "Group Exercise",
        body:
          "The group was given a scenario requiring consensus on the order in which six people should be let go, with about 20 minutes to discuss it. The point wasn't to land on a 'correct' ranking — it was to demonstrate communication, teamwork, and the ability to actually reach a shared decision as a group. This candidate found it fairly straightforward.",
      },
      {
        heading: "Results & Overall Impressions",
        body:
          "Results were announced at the end of the day — out of roughly 16 candidates, around seven or eight were successful. Overall the atmosphere was friendly and relaxed, with drinks and snacks available throughout the day.\n\n" +
          "This candidate's main advice: prepare thoroughly for the technical interview, since the panel will dig deeper into any topic where they sense an opening to test your knowledge further. And above all — be honest, especially when you don't know the answer to something, rather than trying to bluff through it.",
      },
    ],
    note: "Shared by a candidate who went through this assessment day for an A320 First Officer (non-type-rated) role. Interview processes change over time, so treat this as a helpful reference rather than a guarantee of what you'll experience.",
  },
  {
    id: 2,
    title: "Another Candidate From a Recent Interview",
    summary:
      "A broader assessment process — simulator in both seats, technical and behavioural interview, group exercise, hotel-based psychometric testing, a medical day, and the video-interview stage reported separately.",
    sections: [
      {
        heading: "Written Test (Day 1)",
        body:
          "Day 1 opened with a written test built mostly around the well-known LPJ-style A320/ATPL question bank — consistent with what the previous candidate in this section reported. Beyond that core, several candidates flagged a distinct block of general technical and regulatory trivia that's worth a dedicated pass of revision, separate from the usual ATPL study materials.\n\n" +
          "Topics that came up: the taxiway holding-position marking that protects the ILS critical area, the transponder emergency codes (7500/7600/7700), the METAR present-weather abbreviations for haze, mist and fog, RNP4 as the standard supporting 30 nm lateral/longitudinal separation in oceanic and remote airspace, the practical differences between Class A, Class B and Class G airspace, the METAR code for dust/sand whirls, the altitude (commonly quoted as 400 ft above the runway, or above the departure end of runway) below which an aircraft shouldn't normally turn after takeoff unless a procedure requires it, the runway centreline lighting convention (red-only lighting begins at 1,000 ft of runway remaining), the ICAO charting symbol for an NDB, the four segments of a takeoff flight path, the meaning of the different tower light-gun signals, the ISA standard temperature lapse rate (roughly 2°C per 1,000 ft), the dangerous-goods placard for toxic substances, ICAO marshalling signals (including the one instructing the flight crew not to touch the controls), the extra equipment required for RVSM operations, the practical meaning of QNH (a sea-level-reduced pressure setting that, once set on the altimeter, reads altitude above mean sea level), right-of-way rules between aircraft, where smoke detectors are typically fitted on an Airbus, what happens to the displayed air data when an ADR is selected to the ATT (attitude) position, what a Generator Control Unit actually does, and a string of A320-specific limitations — the altitude limit for starting the APU, the maximum landing-gear retraction speed, structural G-load limits, the flap-retraction speed schedule, when the PFD's energy circle appears, the APU fire-bottle discharge disc, the green oxygen-system indicator checked on the walkaround, and the number of fire-detection loops per engine (two). None of it is exotic — it's standard type and general-knowledge material — but it's a different flavour of question from the usual ATPL bank, so it rewards a dedicated systems-and-regulations review rather than relying on ATPL practice questions alone.",
      },
      {
        heading: "Simulator Assessment — Two Seats, Two Scenarios",
        body:
          "This assessment placed candidates in both seats across separate profiles. As captain, the reported sequence was: a takeoff with a landing-gear not-down-locked indication, followed by the ECAM resetting itself, then a left-and-right aileron fault severe enough to trigger Alternate Law, weather requiring deviation, and a landing carried out in Direct Law without a flight director — hand-flown on raw data. As first officer, the sequence was different: a takeoff, a windshear encounter, a radial interception, an engine vibration indication, and again a raw-data landing without automation.\n\n" +
          "Other candidates in the same intake reported different combinations drawn from the same pool — pilot incapacitation, a hydraulic failure, loss of braking, windshear, and TCAS events all came up — which suggests the exercises are pulled from a bank of failure scenarios rather than one fixed script. The consistent thread across every account: finish the ECAM actions before moving on to the next task, fly a tight, standard scan, and keep the callouts and CRM visibly sharp. Several candidates specifically flagged that the assessors seem to be watching workload management and adherence to SOP as much as the raw handling.",
      },
      {
        heading: "Technical & Behavioural Interview",
        body:
          "The technical side covered noise abatement departure procedures, which hydraulic system is normally electrically powered (with the ram air turbine as its backup) — recalled by candidates as the aircraft's third, standby-style system — and how the power-transfer unit moves hydraulic power between the other two systems without transferring fluid between them, activating automatically off a pressure differential rather than needing to be selected. Alongside that: a candidate's own background, how many memory items they could recall, and how to handle an unreliable airspeed indication.\n\n" +
          "Recurring behavioural prompts included a story about handling a difficult situation with a first officer in the cockpit, working effectively across a multicultural crew, what to do if a captain did something the candidate disagreed with, why this airline specifically, a scenario question — as pilot monitoring on approach, the aircraft is fast and high, what would you do? — and whether the candidate had any interest in flying wide-body aircraft.",
      },
      {
        heading: "Group Exercise",
        body:
          "The group task matched what the previous candidate in this section described — reaching a group consensus on the order in which a list of employees should be made redundant, within a limited time. As before, the actual ranking mattered less than demonstrating clear communication and the ability to actually converge on a shared decision as a group.",
      },
      {
        heading: "Hotel-Based Psychometric Testing",
        body:
          "That evening, at the hotel, candidates worked through a battery of psychometric and aptitude tests: a compass/spatial-orientation test, a simple multitasking exercise, a short-term memory test (candidates were typically asked to hold two or three items in mind at once), a flight-director tracking task where the only requirement was to follow the bars accurately, and a personality questionnaire of around 225 questions.\n\n" +
          "Several candidates noted they were told, at the end of Day 1, that they'd been provisionally successful before this testing had even finished — though that timing may not be consistent for every intake.",
      },
      {
        heading: "Day 2 — Medical Examination",
        body:
          "Day 2 was a full aviation medical: eyesight, hearing, a urine drug screen, a general urine test, bloodwork, weight and height, an ECG, a lung-function (spirometry) test, and a final review with the doctor. Candidates also completed a second, longer personality questionnaire at the hotel — around 335 questions this time.",
      },
      {
        heading: "The Recurring Core-Competency Questions",
        body:
          "Across both this candidate's panel interview and a separate candidate's asynchronous video-interview stage (recorded remotely, with the ability to re-record an answer and some thinking time built in before each question), the same small set of core competency prompts kept reappearing: a time you pursued a new opportunity or challenge and what motivated you, a time you noticed someone not following an established procedure or safety protocol and how you handled it, how you'd talk through the recovery technique for an unexpected windshear encounter right after takeoff, a time you had to make a quick decision with limited information, and a time you built a genuinely strong working relationship with a colleague or team.\n\n" +
          "Because the same prompts turned up in both the live panel format and the remote video format, preparing one solid, specific story for each of these five covers most of what came up across both stages.",
      },
    ],
    note: "Compiled from several candidates' accounts of a broader assessment process than the one above — simulator work in both seats, a technical and behavioural interview, a group exercise, hotel-based psychometric testing, and a separate medical day, plus an asynchronous video-interview stage reported separately by another candidate. Processes vary between intakes and role types, so treat this as a helpful reference rather than a guarantee of what you'll experience.",
  },
  ],
  "Riyadh Air": [
  {
    id: 1,
    title: "Aerodynamics",
    summary: "Dutch roll, swept wings, CG effects, contaminated-wing stall, flaps, laminar flow.",
    body:
      "What causes Dutch roll on a swept-wing jet? A coupling between yaw and roll — swept wings produce a fairly strong dihedral (roll) effect relative to a comparatively weak directional (yaw) stability, so a yaw disturbance keeps re-triggering a roll response and vice versa; a yaw damper is what keeps it in check.\n\n" +
      "Why do jet aircraft use swept wings? Sweep delays the onset of the critical Mach number and reduces wave drag, which improves efficiency at high cruise speeds.\n\n" +
      "How does true airspeed change with altitude at a constant indicated airspeed? TAS increases with altitude — roughly 2% per 1,000 ft under ISA conditions — because air density falls.\n\n" +
      "How does a forward CG affect cruise performance? It requires more nose-up trim, which adds trim drag and increases fuel burn, shortening range.\n\n" +
      "How does an aft CG affect fuel efficiency? Less trim drag is needed, so efficiency and range both improve — within the certified CG envelope.\n\n" +
      "At what angle of attack does a contaminated wing stall? Earlier than a clean wing — contamination (ice, frost) trips the airflow and reduces the maximum usable angle of attack, so the wing stalls at a lower AoA and a higher indicated speed than normal.\n\n" +
      "What do flaps do? Increase both lift and drag by adding camber and/or wing area, allowing slower takeoff and landing speeds and a steeper approach path.\n\n" +
      "What is laminar flow? Smooth, orderly airflow with low skin-friction drag — and one that's easily disrupted by surface contamination or roughness, at which point it transitions to turbulent flow.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level aerodynamics questions from the technical portion of the interview.",
  },
  {
    id: 2,
    title: "Engines & Systems",
    summary: "Turbine function, thrust reversers, stick pusher, FBW flight control computer, bleed air, IRS drift.",
    body:
      "What does the turbine section of a jet engine actually do? It extracts energy from the hot expanding exhaust gas and uses that energy to drive the compressor (and, on a turbofan, the fan and accessories) — it's what keeps the engine running.\n\n" +
      "What's the main job of thrust reversers? They redirect engine thrust forward, helping decelerate the aircraft after landing or during a rejected takeoff.\n\n" +
      "What does a stick pusher do? It automatically pushes the nose down if the angle of attack approaches the stall, to prevent an actual stall from developing.\n\n" +
      "On a fly-by-wire aircraft, what does the flight control computer do? It takes the pilot's control inputs, applies the relevant control law and any flight envelope protections, and translates all of that into commands sent to the control surface actuators.\n\n" +
      "What's the bleed air system used for? Hot, high-pressure air tapped from the engines is used for cabin pressurisation, air conditioning, wing/engine anti-ice, engine starting, and various pneumatic systems.\n\n" +
      "What do stator vanes do inside a jet engine? In the compressor section they straighten and diffuse the airflow between rotor stages; in the turbine section they redirect and accelerate the gas flow onto the next set of turbine blades.\n\n" +
      "Why does an inertial reference system (IRS) develop position errors over time? Because it works by continuously integrating measured accelerations into velocity and position, small sensor errors accumulate the longer it runs, causing the position estimate to drift — which is why it's periodically corrected using GPS or DME updates.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level systems/engines questions from the technical portion of the interview.",
  },
  {
    id: 3,
    title: "Meteorology",
    summary: "Isobars, jet streams, sea breeze, inversions, microbursts, CAT, cold fronts, tropopause, altimeter errors.",
    body:
      "What are isobars? Lines on a weather chart joining points of equal atmospheric pressure.\n\n" +
      "How is a jet stream shown on a significant weather chart? As a core line with arrows showing direction, shaded bands (isotachs) showing speed, and labels for wind speed and the flight level(s) it's found at.\n\n" +
      "What causes a sea breeze? Land heats up faster than the adjacent sea during the day, creating slightly lower pressure over the land, which draws in a cooler onshore flow from the sea.\n\n" +
      "What typically causes a temperature inversion in the troposphere? Either radiational cooling of the surface (commonly overnight) or subsidence warming air aloft — either way, temperature increases with height instead of the usual decrease.\n\n" +
      "What is a microburst? A small but intense, highly localised downdraft that spreads out on hitting the ground, producing severe and hazardous wind shear close to the surface.\n\n" +
      "What are the hazards of clear air turbulence? It strikes with no visual warning, and can be strong enough to cause passenger/crew injury and significant structural loads — it's most often encountered near jet streams.\n\n" +
      "What characterises a cold front? A steep frontal slope, a relatively narrow band of showers or cumulonimbus, turbulence and gusty winds, a wind direction shift, falling temperature, and rising pressure once it has passed.\n\n" +
      "What is the tropopause? The boundary between the troposphere and the stratosphere, marked by the normal decrease of temperature with height levelling off to become roughly constant.\n\n" +
      "Roughly where does the troposphere end? It varies with latitude — roughly FL550 near the equator, FL350-400 in the mid-latitudes, and around FL250 near the poles.\n\n" +
      "What altimeter error occurs flying from a warmer air mass into a colder one? True altitude ends up lower than what the altimeter indicates — the classic memory aid is 'from hot to cold, don't be bold', since the aircraft is actually lower than it appears.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level meteorology questions from the technical portion of the interview.",
  },
  {
    id: 4,
    title: "Performance",
    summary: "Weight vs takeoff distance, contaminated runways, hydroplaning speed, pressure altitude, thrust settings, HOT.",
    body:
      "How does aircraft weight affect takeoff distance? A heavier aircraft needs a significantly longer takeoff roll — the relationship is roughly proportional to the square of the weight, since a heavier aircraft needs a higher speed to generate enough lift, and distance grows with the square of that speed.\n\n" +
      "How does a contaminated runway (standing water, slush, snow) affect landing distance? Landing distance increases, mainly due to reduced braking effectiveness and the risk of hydroplaning.\n\n" +
      "What's the standard formula for hydroplaning speed? Roughly 9 times the square root of the tyre pressure in psi, giving a speed in knots — for typical transport-category tyre pressures this generally works out to somewhere around 100-150 kt.\n\n" +
      "How does pressure altitude affect climb performance? Higher pressure altitude means lower air density, which reduces available engine thrust and degrades climb performance.\n\n" +
      "How does pressure altitude affect thrust available versus thrust required? Available thrust decreases with altitude, while the thrust required for a given indicated airspeed actually increases, since true airspeed for that same indicated speed is higher at altitude.\n\n" +
      "If outside air temperature rises, what happens to the required takeoff thrust setting? Higher OAT reduces the thrust an engine can produce for a given setting, so a higher thrust setting may be needed for takeoff (less derate, or full rated thrust).\n\n" +
      "What should be done if fuel temperature approaches its freezing limit? Descend or increase speed to raise the total air temperature, use fuel heaters if fitted, and keep monitoring the fuel temperature against its limits.\n\n" +
      "When does de-icing/anti-icing fluid holdover time end? At whichever comes first: the fluid no longer effectively prevents contamination building up, or the published holdover time for the current conditions has expired.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level performance questions from the technical portion of the interview.",
  },
  {
    id: 5,
    title: "Navigation & Instruments",
    summary: "Pressure-error mnemonics, Mach number, CDI indications, VOR tracking with wind, WAAS.",
    body:
      "What happens if you fly from a region of high pressure into one of low pressure without resetting the altimeter? The aircraft ends up lower than the altimeter indicates — the classic memory aid is 'from high to low, look out below'.\n\n" +
      "What does Mach number represent? The ratio of true airspeed to the local speed of sound.\n\n" +
      "What does a course deviation indicator (CDI) show? Lateral deviation from a selected VOR radial or localiser course — it's centred when the aircraft is exactly on that course.\n\n" +
      "Tracking to a VOR with a 20 kt tailwind, does that affect the standard bearing-change method for estimating time to the station? The method itself still works — it's based on the rate of bearing change, not groundspeed directly — although the actual groundspeed (and therefore the real time to the station) does change with the wind.\n\n" +
      "What is WAAS? A Wide Area Augmentation System — it improves GPS accuracy using a network of ground reference stations and geostationary satellites to broadcast correction signals (an example of a satellite-based augmentation system).",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level navigation/instruments questions from the technical portion of the interview.",
  },
  ],
  FlyDubai: [],
};
