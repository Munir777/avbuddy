import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 50 -- Section 8: Airframes,
// Power Plants, Propellers and Aircraft Systems, fifth pass.
// Original questions written from the TC AIM 2026-1 and the TP 690
// syllabus (topic headings only, no sample questions). Covers ice
// detection systems, electric-motor-driven backup hydraulic pumps,
// cargo compartment fire detection/suppression, pressurization
// relief valves, heated windshields, fuel tank inerting systems,
// bird strike/FOD ingestion tolerance, composite lightning strike
// protection, external ground power interlocks, evacuation slide
// inflation, thrust reverser in-flight interlocks, fuel tank surge
// tanks, permanent magnet generators, autopilot servo clutches,
// balance vs anti-balance tabs, and fuel boost pumps -- topics not
// yet addressed in batches 2, 19, 29, or 40. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_50_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An ice detection system, using a sensor probe exposed to the airstream, is designed to",
    options: [
      "measure engine oil temperature, a parameter entirely unrelated to airframe icing detection.",
      "physically remove ice from the wing leading edge once detected, performing the same function as a pneumatic de-ice boot rather than merely sensing ice presence.",
      "automatically sense the onset of ice accretion and alert the crew (or, on some aircraft, automatically activate anti-ice systems), rather than relying solely on visual observation of ice on the airframe.",
      "operate only on the ground, since ice detection systems are understood to be disabled automatically once the aircraft becomes airborne.",
    ],
    answer: 2,
    explain:
      "An ice detection system uses a sensor probe to automatically sense the onset of ice accretion in the airstream, alerting the crew or, on some aircraft, automatically activating anti-ice systems -- reducing reliance on visual observation of ice forming on the airframe; it does not itself remove ice (that is the function of a separate de-ice system), it is unrelated to oil temperature, and it remains active and relevant in flight, not only on the ground.",
    reference: "TC AIM AIR - Ice Detection Systems",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An electric motor-driven hydraulic pump, fitted as a backup to the primary engine-driven hydraulic pumps on many aircraft, allows",
    options: [
      "no meaningful backup capability at all, since an electric motor-driven pump is understood to be incapable of producing usable hydraulic pressure under any circumstance.",
      "the complete elimination of engine-driven hydraulic pumps from the aircraft's design, since electric pumps are understood to replace them entirely on modern aircraft.",
      "hydraulic fluid to be converted directly into electrical power, reversing the usual relationship between the electrical and hydraulic systems on essentially every transport-category aircraft design.",
      "hydraulic pressure to be generated using electrical power alone, providing continued hydraulic system function in situations where the associated engine-driven pump is unavailable.",
    ],
    answer: 3,
    explain:
      "An electric motor-driven hydraulic pump generates hydraulic pressure using electrical power, providing continued hydraulic system function as a backup when the corresponding engine-driven pump is unavailable (for example following an engine shutdown) -- it is a genuine backup source of pressure, it does not eliminate the need for engine-driven pumps as the primary source, and it does not convert hydraulic fluid into electrical power.",
    reference: "TC AIM AIR - Hydraulic System Backup Power",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Class C cargo compartment fire detection and suppression system is generally designed to",
    options: [
      "automatically detect smoke or fire in the compartment and allow the crew to discharge a fire-suppressing agent into it, without requiring direct crew access to the compartment in flight.",
      "operate identically to the engine fire extinguishing system, using the exact same bottles and discharge plumbing shared between the two entirely separate fire zones.",
      "detect fire only, with no means provided to discharge any fire-suppressing agent into the compartment once a fire is detected.",
      "require a crew member to physically enter the cargo compartment in flight to manually extinguish any fire, since automatic detection and suppression are understood to be unavailable for cargo compartments.",
    ],
    answer: 0,
    explain:
      "A Class C cargo compartment is equipped with a fire detection system that automatically alerts the crew to smoke or fire, and a separate fire-suppressing agent that the crew can discharge into the compartment from the flight deck, without requiring direct crew access to the compartment in flight -- this is distinct from requiring manual entry, from a detection-only system with no suppression capability, and from sharing bottles and plumbing with the engine fire extinguishing system, which serves an entirely separate fire zone.",
    reference: "TC AIM AIR - Cargo Compartment Fire Protection",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A pressurized aircraft's positive and negative pressure relief valves, fitted in addition to the primary outflow valve, exist primarily to",
    options: [
      "operate only while the aircraft is on the ground, since relief valves are understood to be mechanically disabled once the aircraft becomes airborne.",
      "protect the fuselage structure from over-pressurization (positive relief) or a damaging external-greater-than-internal pressure differential (negative relief) if normal pressurization control fails.",
      "serve as the aircraft's sole means of controlling cabin altitude during normal flight, entirely replacing the function of the primary outflow valve.",
      "regulate engine bleed air temperature, a function unrelated to cabin pressurization safety and instead performed by an entirely separate, dedicated temperature control system regardless of cabin altitude.",
    ],
    answer: 1,
    explain:
      "Positive and negative pressure relief valves act as safety devices protecting the fuselage structure -- the positive relief valve limits excessive cabin pressure (too high a pressure differential) and the negative relief valve prevents a damaging reverse differential (outside pressure exceeding cabin pressure) -- if the normal pressurization control system, centred on the primary outflow valve, fails to regulate pressure correctly; they are not the primary means of controlling cabin altitude in normal operation, are unrelated to bleed air temperature control, and remain functional in flight.",
    reference: "TC AIM AIR - Pressurization Relief Valves",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An electrically heated windshield, fitted to many transport-category aircraft, serves to",
    options: [
      "provide no anti-icing or anti-fog benefit whatsoever, since windshield heating is understood to serve only a cosmetic, non-functional purpose.",
      "cool the windshield surface during high-speed flight, reversing the actual heating function that electrically heated windshields are designed to perform on the great majority of aircraft types.",
      "prevent ice and fog formation on the windshield and, on some designs, add a degree of impact resistance, by warming the glass or acrylic panel using embedded electrical heating elements.",
      "replace the need for windshield wipers entirely, since a heated windshield is understood to eliminate the need for any mechanical rain removal system.",
    ],
    answer: 2,
    explain:
      "An electrically heated windshield uses embedded heating elements to warm the glass or acrylic panel, preventing ice and fog formation and, on some designs, contributing additional impact resistance -- it serves a genuine functional purpose rather than a cosmetic one, it does not eliminate the need for windshield wipers to clear rain, and it heats rather than cools the windshield surface.",
    reference: "TC AIM AIR - Windshield Heating",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel tank inerting system (nitrogen generation system), fitted to some modern transport aircraft, is designed to",
    options: [
      "serve exclusively as a fuel quantity measurement device, with no relationship whatsoever to fuel tank flammability, ullage composition, oxygen concentration, or explosion risk of any kind.",
      "increase fuel tank oxygen concentration deliberately, since inerting systems are understood to add oxygen rather than remove it from the tank ullage.",
      "physically remove fuel vapour from the tank entirely, leaving the ullage completely empty of any gas whatsoever.",
      "reduce the flammability of the fuel tank ullage (vapour space) by introducing nitrogen-enriched air, displacing oxygen and lowering the risk of a fuel tank explosion.",
    ],
    answer: 3,
    explain:
      "A fuel tank inerting (nitrogen generation) system reduces the flammability of the fuel tank ullage by introducing nitrogen-enriched air, which displaces oxygen and lowers the risk of a fuel tank explosion -- it reduces, rather than increases, oxygen concentration in the ullage, it does not evacuate the ullage of all gas, and it is unrelated to fuel quantity measurement.",
    reference: "TC AIM AIR - Fuel Tank Inerting System",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Turbine engines are certified to demonstrate a defined level of tolerance to bird strike and other foreign object ingestion primarily because",
    options: [
      "bird and foreign object ingestion is a realistic in-service hazard, and demonstrating the engine can safely ingest certain sizes and quantities of objects without an uncontained failure supports overall flight safety.",
      "modern turbine engines are considered immune to any form of foreign object damage, making ingestion certification an outdated and now-unnecessary requirement.",
      "bird strikes are understood to occur exclusively during cruise flight at high altitude, making low-altitude ingestion certification testing unnecessary.",
      "ingestion certification testing is purely a marketing exercise with no bearing on the actual airworthiness approval process for a turbine engine type.",
    ],
    answer: 0,
    explain:
      "Bird strike and foreign object ingestion certification testing exists because such ingestion is a realistic in-service hazard, particularly during takeoff, climb, and approach at lower altitudes, and demonstrating that an engine can safely ingest certain sizes and quantities of objects without an uncontained failure is a genuine part of the airworthiness approval process, not a marketing exercise or an assumption of engine immunity to foreign object damage.",
    reference: "TC AIM AIR - Engine Ingestion Certification",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Lightning strike protection in a composite (carbon-fibre-reinforced polymer) airframe structure is commonly provided by",
    options: [
      "a thick layer of non-conductive paint applied to the exterior surface, since insulating the structure, rather than conducting current across it, is the protection strategy used.",
      "an embedded conductive layer, such as a metallic mesh or foil, bonded into or applied over the composite skin to safely conduct lightning current across the structure.",
      "the carbon fibre material itself, which is understood to be inherently as electrically conductive as aluminum and therefore requires no additional conductive protection.",
      "eliminating any lightning protection requirement entirely, since composite aircraft are understood to be certified as immune to lightning strikes by their nature.",
    ],
    answer: 1,
    explain:
      "Composite airframe structures commonly incorporate an embedded conductive layer, such as a metallic mesh or foil, bonded into or applied over the composite skin to safely conduct lightning current across the structure and away from vulnerable areas -- carbon fibre alone is significantly less conductive than aluminum and cannot be relied upon without this added protection, composite aircraft are not exempt from lightning protection requirements, and the strategy relies on conducting current, not simply insulating against it.",
    reference: "TC AIM AIR - Composite Structure Lightning Protection",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An external ground power interlock, incorporated into an aircraft's electrical system, is designed to",
    options: [
      "permanently disable the aircraft's own onboard generators whenever external ground power is connected, with no ability for the crew to select between sources.",
      "prevent the aircraft from ever using its own engine-driven generators, making external ground power the sole permitted electrical source for the aircraft's entire service life.",
      "prevent an external ground power unit from being connected to the aircraft's electrical bus in a way that could cause a fault, such as connecting with mismatched voltage, phase, or frequency, or while other incompatible power sources are already supplying the bus.",
      "serve no protective function at all, since ground power connections are understood to be inherently fault-free and requiring no interlock protection of any kind.",
    ],
    answer: 2,
    explain:
      "A ground power interlock helps prevent an external ground power unit from being connected to the aircraft's electrical bus in a way that could cause a fault -- such as mismatched voltage, phase, or frequency, or connection while an incompatible source is already powering the bus -- protecting aircraft electrical equipment; it does not permanently disable the aircraft's own generators or lock the aircraft into using only ground power, and it exists precisely because ground power connections are not inherently fault-free.",
    reference: "TC AIM AIR - Ground Power Interlock",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An evacuation slide (or combined slide/raft) fitted at a transport aircraft's emergency exits is generally designed to",
    options: [
      "require manual inflation using a hand pump at every deployment, since automatic inflation is understood to be unavailable on any certified evacuation slide design.",
      "serve no function during an emergency evacuation at all, since evacuation slides are understood to be installed purely as a certification formality.",
      "remain deflated and unusable unless a ground crew member first manually attaches an external air supply before the slide can be deployed.",
      "automatically inflate within seconds of deployment when the exit is armed and opened, providing a rapid means of egress without waiting for manual inflation.",
    ],
    answer: 3,
    explain:
      "An evacuation slide (or combined slide/raft) is designed to automatically inflate within seconds of deployment once the associated exit is armed and opened, providing a rapid means of egress without requiring manual inflation by hand pump or a ground crew member attaching an external air supply -- it is a functional, actively used piece of emergency equipment, not a mere certification formality.",
    reference: "TC AIM AIR - Emergency Evacuation Equipment",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Thrust reverser systems on turbofan-powered aircraft typically include an interlock that",
    options: [
      "prevents reverser deployment while the aircraft is airborne, generally permitting deployment only once the aircraft has weight on wheels (or an equivalent ground-sensed condition) after landing.",
      "has no relationship to whether the aircraft is airborne or on the ground, since reverser deployment is understood to be permitted at any time regardless of flight phase or weight-on-wheels status.",
      "prevents reverser deployment at any time, including after landing, making the interlock a permanent lockout rather than a conditional one.",
      "actively commands reverser deployment automatically during cruise flight, rather than restricting when deployment is permitted.",
    ],
    answer: 0,
    explain:
      "A thrust reverser deployment interlock generally prevents the reversers from deploying while the aircraft is airborne, permitting deployment only once weight-on-wheels (or an equivalent ground-sensed condition) confirms the aircraft has landed -- deploying reversers in flight would be hazardous, so this is a conditional lockout tied to ground/air status rather than a permanent lockout or a system unrelated to flight phase.",
    reference: "TC AIM AIR - Thrust Reverser Interlock",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A surge tank, found within some aircraft fuel tank designs (often near the wingtip), serves primarily to",
    options: [
      "generate additional lift, functioning as a purely aerodynamic structure with no relationship whatsoever to the fuel system.",
      "provide expansion and overflow space for fuel that moves within the tank during maneuvering, temperature changes, or refuelling, helping prevent fuel loss through the tank venting system.",
      "measure fuel temperature exclusively, serving the same role as a dedicated fuel temperature probe rather than performing any fuel-containment, expansion, or overflow function whatsoever during maneuvering.",
      "store an entirely separate reserve fuel supply that is never used to feed the engines under any circumstance.",
    ],
    answer: 1,
    explain:
      "A surge tank provides expansion and overflow space for fuel that shifts within the tank during maneuvering, temperature changes, or refuelling, helping prevent fuel from being forced out through the venting system -- it is not a separate reserve fuel supply held back from engine feed, not primarily an aerodynamic lift-generating structure, and not a fuel temperature measurement device.",
    reference: "TC AIM AIR - Fuel Tank Design",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A permanent magnet generator (PMG), sometimes included in an aircraft's electrical generating system, is significant because it",
    options: [
      "generates hydraulic, rather than electrical, power, despite what its name would otherwise suggest about its actual function.",
      "requires external electrical excitation current to function at all, making it functionally identical to, rather than meaningfully independent of, the main generator's own regulation and excitation circuitry in every respect.",
      "can continue to provide a source of electrical power independent of the main generator's normal excitation circuit, supporting essential functions even if the main generator's regulation or excitation fails.",
      "operates only while the aircraft is on the ground connected to external power, providing no function once the aircraft's engines are running.",
    ],
    answer: 2,
    explain:
      "A permanent magnet generator uses permanent magnets rather than external excitation current to produce power, allowing it to continue providing a source of electrical power independent of the main generator's normal excitation circuit -- this can support essential functions even if the main generator's regulation or excitation system fails, unlike a generator that depends entirely on external excitation; a PMG produces electrical, not hydraulic, power, and it is relevant with engines running, not only when connected to ground power.",
    reference: "TC AIM AIR - Permanent Magnet Generator",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An autopilot's servo clutch mechanism, connecting the autopilot's servo motor to the flight control system, is generally designed so that",
    options: [
      "the clutch mechanism has no relationship to control force at all, since it is understood to be a purely electrical connection with no mechanical slip capability.",
      "the autopilot is completely and irreversibly disconnected the moment any manual control force is detected, with no ability for the pilot to apply a deliberate override force and then resume normal autopilot function afterward.",
      "the pilot is permanently prevented from overriding the autopilot by manual force under any circumstance, regardless of how much force is applied to the controls.",
      "a pilot applying sufficient manual force to the controls can override the autopilot's servo input, allowing the clutch to slip rather than fighting the pilot's control input indefinitely.",
    ],
    answer: 3,
    explain:
      "An autopilot servo clutch is generally designed so that a pilot applying sufficient manual force to the controls can override the autopilot's servo input, with the clutch slipping rather than fighting that control input indefinitely -- this provides a manual override capability rather than permanently preventing pilot input, it is a genuine mechanical (not purely electrical) connection with slip capability, and depending on the system, an override force does not necessarily cause a full irreversible autopilot disconnect.",
    reference: "TC AIM AIR - Autopilot Servo System",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A balance tab, fitted to a primary flight control surface, is distinguished from an anti-balance tab in that",
    options: [
      "a balance tab moves opposite to the primary control surface to reduce the pilot's control force, while an anti-balance tab moves the same direction, increasing control force.",
      "the two terms describe an identical mechanism, with 'balance tab' and 'anti-balance tab' used interchangeably regardless of the direction in which the tab actually moves.",
      "a balance tab increases control force required, while an anti-balance tab decreases it, the exact reverse of their actual respective aerodynamic functions.",
      "a balance tab is used exclusively on the rudder, while an anti-balance tab is used exclusively on the elevator, making the distinction one of installation location rather than function.",
    ],
    answer: 0,
    explain:
      "A balance tab moves in the opposite direction to the primary control surface's deflection, aerodynamically assisting the pilot and reducing control force, while an anti-balance tab moves in the same direction as the primary surface, increasing control force -- often deliberately, to add appropriate control feel at higher speeds -- so the two are functionally distinct (and, in some cases, opposite) rather than interchangeable terms, and the distinction is one of function, not a fixed rule tying each type exclusively to a particular control surface.",
    reference: "TC AIM AIR - Control Surface Tabs",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel boost pump, located within a fuel tank and typically operated during takeoff, landing, and certain other phases of flight, serves primarily to",
    options: [
      "measure fuel quantity within the tank, performing the same function as a fuel quantity probe rather than moving fuel toward the engine.",
      "provide positive fuel pressure to the engine-driven fuel pump's inlet, helping prevent fuel vapour formation (vapour lock) and ensuring an adequate fuel supply under demanding flight conditions.",
      "replace the engine-driven fuel pump entirely, making the engine-driven pump an unnecessary and unused component whenever a boost pump is installed.",
      "cool the fuel before it reaches the engine, a thermal function unrelated to the boost pump's actual role in providing positive fuel pressure.",
    ],
    answer: 1,
    explain:
      "A fuel boost pump provides positive fuel pressure at the engine-driven fuel pump's inlet, helping prevent fuel vapour formation (vapour lock) and ensuring an adequate fuel supply during demanding flight conditions such as takeoff and landing -- it supplements rather than replaces the engine-driven fuel pump, it is not a fuel quantity measurement device, and its function is pressure-related rather than a fuel cooling function.",
    reference: "TC AIM AIR - Fuel Boost Pumps",
  },
];
