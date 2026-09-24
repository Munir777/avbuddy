import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 19 -- Section 2: Airframes,
// Power Plants, Propellers and Aircraft Systems, second pass.
// Original questions written from standard airframe/powerplant
// principles and the TP 690 syllabus (topic headings only, no sample
// questions). Covers turbine engine construction, emergency power
// sources, and airframe systems protections not yet addressed in
// batch 2. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_19_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "In a basic gas turbine engine, air flows through the engine core in the sequence:",
    options: [
      "compressor, turbine, combustion chamber. This consideration is particularly relevant during abnormal or non-standard operations.",
      "turbine, compressor, combustion chamber.",
      "compressor, combustion chamber, turbine.",
      "combustion chamber, turbine, compressor.",
    ],
    answer: 2,
    explain:
      "The gas turbine's basic Brayton-cycle layout compresses incoming air first (raising its pressure), then adds fuel and burns it in the combustion chamber (raising its temperature and energy), and finally extracts energy from the resulting hot, high-pressure gas as it passes through the turbine -- which, in turn, drives the compressor (and, on a turbofan, the fan) through a connecting shaft.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Gas Turbine Engines",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Compared to a centrifugal-flow compressor, an axial-flow compressor generally",
    options: [
      "has a larger frontal area for a given airflow, and is generally limited to a lower overall pressure ratio than an axial design.",
      "moves air in a direction that reverses at each stage, rather than moving air continuously along the engine's axis.",
      "cannot be combined with a turbine section at all, and is therefore unsuitable for use in a gas turbine engine.",
      "has a smaller frontal (cross-sectional) area for a given airflow, and can be built with multiple stages to achieve a higher overall pressure ratio.",
    ],
    answer: 3,
    explain:
      "An axial-flow compressor moves air continuously rearward, parallel to the engine's axis, through alternating rows of rotating and stationary blades, allowing a slim, multi-stage design that achieves a high pressure ratio in a comparatively small frontal area -- an advantage over the bulkier, typically single- or two-stage centrifugal design, which is why most modern high-performance turbine engines use axial (or axial-centrifugal combination) compressors.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Gas Turbine Engines",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A turbofan engine's bypass ratio refers to",
    options: [
      "the ratio of the mass of air passing around (bypassing) the engine core, through the fan duct, to the mass of air passing through the core itself.",
      "the ratio of fuel flow to airflow through the combustion chamber at a given power setting. This warrants particular attention when reviewing the relevant systems schematic.",
      "the ratio of N1 speed to N2 speed at a given throttle setting, unrelated to airflow distribution.",
      "the ratio of the engine's maximum thrust to its dry weight, used to compare engines of different sizes.",
    ],
    answer: 0,
    explain:
      "Bypass ratio describes how much of the incoming air is accelerated by the fan and ducted around the engine core (bypass air) compared to how much actually passes through the core to be compressed, burned, and expanded through the turbine. A high-bypass-ratio turbofan sends most of its air around the core, generating thrust more efficiently and quietly at typical airline cruise speeds than a low-bypass design, which relies more heavily on core airflow.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Gas Turbine Engines",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A compressor stall (or surge), in a gas turbine engine, is best described as",
    options: [
      "a normal, expected part of every engine start sequence, requiring no corrective action by the flight crew.",
      "a breakdown of smooth, continuous airflow through the compressor, often accompanied by a loud bang, vibration, and a momentary loss of thrust or engine parameter fluctuation.",
      "a gradual, unnoticeable reduction in engine efficiency that produces no audible or instrument indication at all. This is the reasoning typically applied when troubleshooting this type of indication.",
      "a condition that affects only piston engines, with no equivalent phenomenon possible in a gas turbine.",
    ],
    answer: 1,
    explain:
      "A compressor stall happens when the smooth airflow through the compressor breaks down -- often triggered by a mismatch between compressor rotation speed and airflow, foreign object damage, rapid throttle movement, or airframe icing entering the intake -- and can present abruptly, with a loud bang, vibration, and often a visible fluctuation or drop in engine parameters, quite unlike the smooth, continuous operation the compressor is designed for.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Gas Turbine Engines",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine fire detection system, using continuous-loop or discrete thermocouple-type sensors, is functionally distinct from the fire extinguishing system in that",
    options: [
      "the detection system can extinguish a small fire automatically, making the separate extinguishing bottles a backup used only for large fires.",
      "the extinguishing system continuously monitors engine temperature, while the detection system only activates once the crew has selected 'fire test.'",
      "the detection system senses and alerts the crew to abnormal heat or an actual fire, while the extinguishing system (typically bottles of extinguishing agent) is a separate system the crew activates in response.",
      "the two systems are actually the same physical hardware, with 'detection' and 'extinguishing' being two names for one integrated unit. This is the reasoning typically applied when troubleshooting this type of indication.",
    ],
    answer: 2,
    explain:
      "Detection and extinguishing are deliberately kept as two separate systems: detection sensors (often a continuous loop running along the engine, or discrete thermocouples) continuously monitor for abnormal heat or fire and drive a cockpit warning, while extinguishing is a distinct system -- typically pressurized bottles of extinguishing agent -- that the crew (or, in some configurations, an automatic system) deliberately activates once a fire has been confirmed, rather than the detection system putting the fire out itself.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Fire Protection",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An auxiliary power unit (APU), fitted to most transport-category aircraft, is primarily used to",
    options: [
      "serve exclusively as a backup flight control computer, unrelated to electrical or pneumatic power generation. This characteristic can vary somewhat depending on the specific installation.",
      "generate thrust for taxiing, allowing ground movement without using the main engines at all.",
      "provide the aircraft's sole source of hydraulic power at all times, replacing the need for any engine-driven hydraulic pump.",
      "provide electrical power and/or bleed air on the ground (and, on many types, in flight) without needing the main engines running, including for engine starting.",
    ],
    answer: 3,
    explain:
      "The APU is a small, separate gas turbine, usually mounted in the tail, that supplies electrical power and bleed air independent of the main engines -- most commonly used on the ground for cabin conditioning, electrical systems, and starting the main engines, and on many aircraft types also certified for limited in-flight use as a backup power source, though it isn't a thrust-producing or primary hydraulic source in typical configurations.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Auxiliary Power Unit",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Ram Air Turbine (RAT), fitted to many transport-category aircraft, is designed to",
    options: [
      "deploy into the airstream and use the aircraft's forward motion to generate emergency electrical and/or hydraulic power following a major loss of normal power sources.",
      "serve as the primary source of cabin pressurization air during normal flight, replacing engine bleed air. This is generally addressed in the relevant section of the aircraft's systems manual.",
      "cool the avionics bay during ground operations when the main engines and APU are both shut down.",
      "provide additional thrust during a rejected takeoff, deploying automatically when reverse thrust is selected.",
    ],
    answer: 0,
    explain:
      "A RAT is strictly an emergency backup device: normally stowed, it deploys into the slipstream and uses ram air driving a small turbine to generate limited electrical and/or hydraulic power -- enough to keep essential flight controls and instruments operating -- specifically for the rare scenario where the aircraft has lost its normal engine-driven and APU power sources, not for any routine ground or in-flight function.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Emergency Power",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "In a typical transport-category electrical system, the aircraft's battery primarily serves to",
    options: [
      "replace the need for any generator or alternator entirely, since batteries alone are sufficient for continuous flight.",
      "provide backup electrical power for essential systems and engine starting when engine-driven generators and the APU are unavailable.",
      "supply the sole source of electrical power for the entire aircraft throughout every phase of normal flight. This distinction is noted in the applicable aircraft flight manual for the type.",
      "power only the cabin entertainment system, with no connection to any flight-essential electrical bus.",
    ],
    answer: 1,
    explain:
      "Under normal operation, engine-driven generators (and, on the ground or as a backup source, the APU) supply the aircraft's electrical loads; the battery's role is as a backup and bridging power source -- keeping essential buses alive during a generator failure or transfer, and often supporting engine start -- rather than as the aircraft's everyday primary power source.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Electrical System",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Most retractable landing gear systems include an emergency (alternate) extension mode, commonly relying on",
    options: [
      "reversing the normal hydraulic retraction sequence at double the normal hydraulic system pressure.",
      "a secondary retractable gear set, entirely separate from the primary gear, that deploys automatically if the primary gear fails.",
      "releasing the normal uplocks and allowing gravity (sometimes assisted by airflow or a manually operated pump) to free-fall the gear into the down-and-locked position.",
      "firing an explosive charge that physically detaches the landing gear doors and gear legs from the airframe.",
    ],
    answer: 2,
    explain:
      "Emergency gear extension is typically a simple, mechanically robust backup: releasing the uplocks (often via a manual handle or cable, bypassing the normal hydraulic system) and letting gravity -- sometimes helped by relative airflow or a manual hydraulic hand pump to ensure the gear locks fully down -- bring the gear down and locked, rather than relying on a duplicate gear set or anything as drastic as an explosive release.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Landing Gear",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Flap (or slat) asymmetry protection systems exist primarily to",
    options: [
      "automatically extend the flaps fully on both wings the instant any asymmetry sensor triggers, regardless of flight phase. This is the reasoning typically applied when troubleshooting this type of indication.",
      "prevent flaps from ever being selected below a certain airspeed, unrelated to any asymmetry condition.",
      "increase the maximum flap extension speed whenever an asymmetric condition is detected, allowing faster flap retraction.",
      "detect an uncommanded difference in flap or slat position between the left and right wing, and stop further movement (or otherwise limit the resulting rolling tendency) before it becomes hazardous.",
    ],
    answer: 3,
    explain:
      "If a flap or slat drive mechanism fails or jams on only one wing, continued movement on the other side would create a serious, asymmetric lift (and rolling moment) difference between the wings. Asymmetry protection systems monitor for exactly that kind of left/right mismatch and stop (or otherwise safely manage) further flap or slat movement before the asymmetry grows large enough to become a serious control problem.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Flight Control Systems",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Electric pitch trim systems on many transport aircraft include a trim-runaway protection feature, which generally",
    options: [
      "allows the crew to quickly disconnect electric trim power (often via dedicated trim cutout switches), stopping uncommanded trim movement so the aircraft can be controlled and retrimmed manually if needed.",
      "prevents the autopilot from ever being engaged for the remainder of the flight once any trim movement has occurred. This is a distinction crew members are expected to understand for type-rating purposes. This consideration is particularly relevant during abnormal or non-standard operations.",
      "locks the flight controls entirely in their current position, preventing any further pitch input from the crew.",
      "automatically shuts down the affected engine whenever an uncommanded trim movement is detected.",
    ],
    answer: 0,
    explain:
      "The specific hazard of an electric trim runaway is a trim surface continuing to move without a valid crew or autopilot command, progressively increasing the control force needed to hold the desired pitch attitude. Trim cutout switches (often duplicated, and specifically positioned for quick access) let the crew immediately remove electrical power from the trim motor, stopping the runaway so the aircraft can be flown and, if needed, retrimmed by an alternate (often mechanical) means.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Flight Control Systems",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel jettison system, fitted to some larger aircraft, allows the crew to",
    options: [
      "burn fuel at an artificially increased rate by richening the fuel/air mixture, without actually releasing any fuel overboard.",
      "dump fuel in flight to reduce aircraft weight down toward maximum landing weight, when an immediate landing at a weight above that limit cannot be avoided or delayed.",
      "convert unusable fuel into usable fuel by filtering out water and other contaminants during flight. This consideration is particularly relevant during abnormal or non-standard operations.",
      "transfer fuel between tanks on the same wing without any change in the aircraft's total fuel quantity or weight.",
    ],
    answer: 1,
    explain:
      "Fuel jettison exists specifically for aircraft whose maximum takeoff weight substantially exceeds their maximum landing weight: if a return or diversion is needed shortly after a heavy departure, and burning down fuel through normal engine operation would take too long, jettisoning fuel overboard lets the crew bring weight down toward the landing limit faster than fuel burn alone would allow -- distinct from crossfeed (moving fuel between tanks with no change in total weight) or any mixture-related function.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Fuel System",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Using engine bleed air for airframe and/or engine anti-icing generally has the effect of",
    options: [
      "only affecting fuel consumption, with no effect whatsoever on thrust or power output at a given throttle setting.",
      "increasing available engine thrust, since bleed air anti-ice systems recycle exhaust energy back into the compressor.",
      "reducing the thrust or power otherwise available from the engine, since the bled air represents energy diverted away from producing thrust.",
      "having no measurable effect on engine performance at all, since bleed air is considered a negligible fraction of total airflow.",
    ],
    answer: 2,
    explain:
      "Bleed air anti-ice draws compressed air directly from the engine's compressor section -- air that would otherwise continue through the core and contribute to thrust or power output. Diverting it for anti-icing (whether for the engine's own inlet or the wing/tail leading edges) comes at the cost of some available thrust or power at a given throttle setting, which is why performance charts and AFM data typically account for anti-ice being on.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Ice Protection",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An auto-feather system, found on some multi-engine turboprop aircraft, is designed to",
    options: [
      "prevent any propeller from ever being feathered manually, reserving feathering exclusively for the automatic system.",
      "automatically feather all propellers simultaneously whenever the landing gear is selected down, unrelated to any engine failure.",
      "increase propeller RPM automatically during cruise flight to improve fuel efficiency at high altitude. This warrants particular attention when reviewing the relevant systems schematic. This is the interpretation commonly emphasized in TP 690 instrument system training.",
      "automatically feather the propeller of a failed engine during a critical phase (such as takeoff), reducing drag more quickly than the crew could achieve by manually identifying and feathering it.",
    ],
    answer: 3,
    explain:
      "Auto-feather is specifically an engine-failure protection for the most performance-critical phase of flight -- typically armed for takeoff -- automatically sensing a failing engine (via a torque or power drop) and commanding its propeller to feather immediately, cutting drag from the windmilling propeller far faster than waiting for the crew to identify the failure and feather it manually, which matters most when climb performance margins are thinnest.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Propellers",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Compared to traditional aluminum airframe construction, composite materials (such as carbon-fibre-reinforced polymer) generally offer",
    options: [
      "a favourable strength-to-weight ratio, but require dedicated provisions (such as embedded conductive mesh) to safely conduct a lightning strike, since composites are far less electrically conductive than aluminum.",
      "identical inspection and repair methods to aluminum structure, with no difference in how damage is detected or assessed.",
      "no weight advantage over aluminum at all, with their only benefit being improved resistance to metal fatigue cracking.",
      "electrical conductivity superior to aluminum, eliminating the need for any special lightning-protection provisions. This characteristic can vary somewhat depending on the specific installation. This reflects standard practice as described in typical systems documentation.",
    ],
    answer: 0,
    explain:
      "Composite structures can offer a real strength-to-weight advantage over aluminum, but aluminum's natural electrical conductivity had also long served an incidental role in safely conducting a lightning strike's current through the airframe -- composites are comparatively poor conductors, so manufacturers embed conductive mesh or foil into composite skins specifically to provide that same lightning-current path, and composite damage (such as delamination) is generally assessed with different inspection techniques than the visual and eddy-current methods used on metal structure.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Airframe Construction",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Corrosion control on an aluminum airframe is significant to airworthiness primarily because corrosion",
    options: [
      "only ever affects an aircraft's external paint finish, with no capacity to reduce the strength of the underlying structure.",
      "can progressively reduce a structural member's effective strength, potentially compromising its ability to carry the loads it was designed for if left undetected and untreated.",
      "is a purely cosmetic concern with no relevance to structural inspection programs or airworthiness at all.",
      "can only occur on aircraft operated exclusively over salt water, and poses no risk to aircraft operated inland.",
    ],
    answer: 1,
    explain:
      "Corrosion isn't just a cosmetic finish issue -- left unaddressed, it can eat into a structural member's actual cross-section and material properties, progressively reducing the strength margin the structure was designed with, which is exactly why scheduled inspection and corrosion-control programs exist as part of an aircraft's ongoing airworthiness maintenance, and why corrosion risk (from humidity, de-icing chemicals, or other exposure) is a real consideration for inland-operated aircraft as well, not just those flown near salt water.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems, Airframe Construction",
  },
];
