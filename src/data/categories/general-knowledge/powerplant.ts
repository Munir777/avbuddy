import type { Question } from "../../../types";

// ATPL General Knowledge - Powerplant. Original questions written from
// general, widely-published gas turbine and piston engine knowledge, not
// copied verbatim from any single source. No company, brand, or publisher
// names appear anywhere below.
export const POWERPLANT_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Within an axial-flow compressor, a single 'stage' is best described as:",
    options: [
      "A ring of rotor blades followed by a ring of stator blades",
      "A ring of stator blades followed by a ring of rotor blades",
      "A single row of stator blades only, with no rotating element",
      "A combustion can paired with a single turbine disc",
    ],
    answer: 0,
    explain:
      "Each axial-compressor stage consists of a rotating rotor blade row followed by a fixed stator blade row; the rotor accelerates the air and imparts kinetic energy, and the following stator row diffuses that flow, converting velocity into a rise in static pressure. Each stage typically produces only a modest pressure ratio, which is why many stages are needed in series to reach a useful overall compression ratio.",
    reference: "Powerplant - Axial Compressors",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Which section of a gas turbine engine is generally the limiting factor on the engine's maximum permitted operating temperature?",
    options: [
      "The turbine section, since turbine blade and vane material limits set the maximum allowable gas temperature",
      "The compressor, since compressor discharge temperature is always the hottest point in the engine",
      "The exhaust nozzle, since exhaust gas temperature is the highest point in the gas path",
      "The combustion chamber liner alone, independent of turbine considerations",
    ],
    answer: 0,
    explain:
      "Gas temperature is actually highest inside the combustion chamber itself, but it is the turbine section immediately downstream that constrains the engine's maximum permitted temperature, since turbine blades and vanes must survive continuous exposure to hot gas under high rotational stress. This is why turbine inlet temperature is the parameter engine limitations are built around.",
    reference: "Powerplant - Gas Turbine Temperature Limits",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "In a typical turbine engine fuel system, the high-pressure (HP) fuel shut-off valve is normally commanded closed:",
    options: [
      "By the engine master/fuel control switch when the crew selects the engine off for a normal shutdown",
      "Automatically whenever flight idle power is selected",
      "Only when the engine fuel booster pump fails",
      "Automatically whenever the aircraft touches down on landing",
    ],
    answer: 0,
    explain:
      "The HP fuel shut-off valve, at the engine fuel inlet, is normally closed by the flight-deck fuel control/master switch when the crew selects the engine off for a normal shutdown, stopping fuel flow into the engine's fuel manifold. A separate low-pressure shut-off valve further upstream is typically closed instead by the fire handle for an emergency shutdown.",
    reference: "Powerplant - Fuel System Shutoff Valves",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "In a jet engine, thrust output is primarily controlled by:",
    options: [
      "Varying the fuel flow into the combustion chamber, which changes turbine speed and hence thrust",
      "Varying the air-to-fuel mixture ratio, as in a piston engine carburettor",
      "Varying the inlet airflow directly through a throttle valve in the intake",
      "Varying the position of the engine's bleed air valves exclusively",
    ],
    answer: 0,
    explain:
      "Unlike a piston engine, a jet engine's power lever controls fuel flow into the combustion chamber rather than an air/fuel mixture ratio. Increasing fuel flow raises gas temperature and the energy available to the turbine, increasing rotational speed and therefore thrust, while the compressor supplies whatever air the engine's speed and design allow.",
    reference: "Powerplant - Thrust Control",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Engine Pressure Ratio (EPR), used on many turbofan engines as a thrust-setting reference, is defined as the ratio of:",
    options: [
      "Turbine (jet pipe/exhaust) discharge total pressure to engine inlet total pressure",
      "Compressor inlet pressure to turbine discharge pressure",
      "High-pressure compressor inlet pressure to low-pressure compressor outlet pressure",
      "Combustion chamber inlet pressure to turbine inlet pressure",
    ],
    answer: 0,
    explain:
      "EPR compares the total pressure at the turbine (exhaust/jet pipe) discharge to the total pressure at the engine's inlet - a higher ratio corresponds to higher thrust - giving crews a single gauge reading used on many turbofan installations as a primary thrust-setting reference alongside, or instead of, N1.",
    reference: "Powerplant - Engine Pressure Ratio",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "On a piston engine with a manual mixture control, as altitude increases the mixture is normally leaned in order to:",
    options: [
      "Reduce fuel flow, compensating for the reduced air density entering the engine",
      "Increase fuel flow, compensating for the reduced air density entering the engine",
      "Increase fuel flow, compensating for increased air density at altitude",
      "Have no real effect, since mixture setting only matters at sea level",
    ],
    answer: 0,
    explain:
      "As altitude increases, air density falls, so a fixed fuel flow would produce an increasingly fuel-rich mixture. Leaning the mixture reduces fuel flow to restore an appropriate fuel-to-air ratio for the thinner air, keeping combustion efficient and avoiding an overly rich, rough-running, fuel-fouling mixture.",
    reference: "Powerplant - Piston Engine Mixture Control",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Compared with a centrifugal compressor of similar frontal area, an axial-flow compressor generally:",
    options: [
      "Passes a greater mass airflow, but its many rows of comparatively thin blades are more vulnerable to foreign object damage",
      "Passes a greater mass airflow, and is inherently more robust against foreign object damage",
      "Passes a lesser mass airflow, and is more vulnerable to foreign object damage",
      "Passes a lesser mass airflow, but is inherently more robust against foreign object damage",
    ],
    answer: 0,
    explain:
      "An axial compressor's smaller frontal area for a given airflow, and its ability to be built with many stages in series, lets it pass a greater mass airflow than an equivalent centrifugal design of similar diameter - but its many rows of comparatively thin, closely-spaced blades are more susceptible to damage from ingested debris than a centrifugal compressor's single, more robust impeller.",
    reference: "Powerplant - Axial vs Centrifugal Compressors",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "On a piston engine, the Exhaust Gas Temperature (EGT) gauge is primarily used by the pilot to:",
    options: [
      "Assist in setting the fuel/air mixture accurately, referencing the temperature peak",
      "Directly indicate cylinder head temperature",
      "Indicate engine oil temperature",
      "Automatically control the cowl flap/cooling shutter position",
    ],
    answer: 0,
    explain:
      "EGT rises to a peak at the chemically correct mixture and falls off on either side of it, so pilots use the EGT gauge - typically referencing peak, or a specified offset from peak - to lean or enrich the mixture accurately for the desired power and efficiency setting, rather than as a direct measure of cylinder or oil temperature.",
    reference: "Powerplant - Exhaust Gas Temperature",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "The 'octane rating' of aviation gasoline (AVGAS) is a measure of:",
    options: [
      "The fuel's resistance to detonation (knocking) under compression",
      "The fuel's ability to absorb and disperse water contamination",
      "The fuel's freezing or waxing point at altitude",
      "The fuel's volatility, or tendency to vaporise",
    ],
    answer: 0,
    explain:
      "Octane rating measures a fuel's resistance to premature, uncontrolled combustion (detonation, or 'knock') under the heat and pressure of compression. A higher-octane fuel tolerates a higher compression ratio or manifold pressure before knocking becomes a risk, which is why higher-performance piston engines require higher-octane AVGAS grades.",
    reference: "Powerplant - AVGAS Octane Rating",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "An axial-flow compressor operating well below its design rotational speed has a particular tendency to stall in:",
    options: [
      "The front (early) stages, as the rear stages' fixed geometry makes airflow effectively too great relative to the reduced pressure rise, raising the angle of attack on the front rotor blades",
      "The rear (later) stages only",
      "The centre stages only, regardless of speed",
      "No particular stage; low-speed operation removes stall risk entirely",
    ],
    answer: 0,
    explain:
      "At low rotational speed, the compressor's fixed blade geometry causes the front stages to see airflow that is effectively too great relative to the reduced pressure rise being generated, raising the front rotor blades' angle of attack toward stall. This is part of why variable inlet guide vanes, variable stators, or bleed valves are used to manage compressor behaviour away from design speed, such as during starting.",
    reference: "Powerplant - Compressor Stall Characteristics",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "The purpose of an impulse coupling fitted to a piston engine magneto is to:",
    options: [
      "Generate a stronger spark while automatically retarding its timing during starting, when the engine is turning too slowly for a normal spark",
      "Generate a stronger spark while advancing its timing during starting",
      "Reduce spark energy during normal cruise operation only",
      "Disconnect the magneto entirely during engine start",
    ],
    answer: 0,
    explain:
      "At the low speeds of engine starting, a magneto would normally produce too weak a spark, fired too early relative to piston position. An impulse coupling briefly holds the magneto rotor back and then releases it with a snap, both boosting spark energy and retarding ignition timing to a safe point for cranking speeds, before normal timing resumes once the engine is running.",
    reference: "Powerplant - Magneto Impulse Coupling",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "On a typical turbofan/turbojet engine, Exhaust Gas Temperature (EGT) is measured at the:",
    options: [
      "High-pressure turbine discharge, just ahead of any lower-pressure turbine stages",
      "Combustion chamber inlet",
      "High-pressure compressor outlet",
      "Very tip of the final exhaust nozzle",
    ],
    answer: 0,
    explain:
      "EGT probes are positioned at the high-pressure turbine's discharge - upstream of any low-pressure turbine stages and the final exhaust nozzle - a location hot enough to give a meaningful, closely-monitored limit reference without being exposed to the full combustion chamber temperature further upstream.",
    reference: "Powerplant - EGT Measurement Location",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "In a turbofan engine, the 'bypass ratio' is defined as:",
    options: [
      "The mass airflow bypassing the core (fan duct airflow) divided by the mass airflow passing through the engine core",
      "The mass airflow through the engine core divided by the bypass airflow",
      "The fuel flow divided by the total airflow through the engine",
      "The bypass airflow divided by the fuel flow",
    ],
    answer: 0,
    explain:
      "Bypass ratio compares the airflow that bypasses the engine core, driven by the fan and ducted around the combustion/turbine section, to the airflow that passes through the core itself. A high-bypass turbofan has a bypass ratio well above 1, meaning most of the thrust-producing air never enters the combustor, a major contributor to high-bypass engines' fuel efficiency.",
    reference: "Powerplant - Turbofan Bypass Ratio",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Specific Fuel Consumption (SFC), as applied to a jet engine, is generally expressed as:",
    options: [
      "The mass of fuel burned per hour, divided by the thrust produced",
      "The mass of fuel burned per mile, divided by the thrust produced",
      "The mass of fuel burned per hour, divided by airspeed",
      "The mass of fuel burned per mile, divided by airspeed",
    ],
    answer: 0,
    explain:
      "Thrust-specific fuel consumption is fuel consumed per unit time, typically per hour, divided by the thrust being produced - a measure of how efficiently the engine converts fuel into thrust. A lower SFC means less fuel is needed to produce a given amount of thrust.",
    reference: "Powerplant - Specific Fuel Consumption",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "In a centrifugal compressor, the airflow path through the impeller is generally:",
    options: [
      "Air enters axially at the impeller eye (centre) and leaves radially/tangentially at the periphery (tip)",
      "Air enters tangentially at the periphery and leaves axially at the eye",
      "Air enters radially at the eye and leaves axially at the periphery",
      "Air flows straight through axially with no change of direction",
    ],
    answer: 0,
    explain:
      "A centrifugal compressor's impeller draws air in axially at its centre (the eye); centrifugal force then accelerates and turns the flow outward through the impeller vanes, so it leaves the impeller tip travelling radially/tangentially at high velocity. A diffuser downstream converts that velocity into a pressure rise.",
    reference: "Powerplant - Centrifugal Compressor Airflow",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "As gas flows through the stator (fixed vane) row of an axial compressor stage, its:",
    options: [
      "Pressure increases while its velocity decreases",
      "Pressure decreases while its velocity decreases",
      "Pressure increases while its velocity increases",
      "Pressure decreases while its velocity increases",
    ],
    answer: 0,
    explain:
      "The preceding rotor row accelerates the airflow, adding kinetic energy. The following stator row is a diverging passage that diffuses this flow, slowing it down and converting that kinetic energy into a rise in static pressure - the reverse of what happens through a turbine nozzle, where pressure drops as flow is accelerated.",
    reference: "Powerplant - Compressor Stage Aerodynamics",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "The purpose of a Fuel-Cooled Oil Cooler (FCOC) on a turbine engine is to:",
    options: [
      "Use the relatively cool fuel as a heat sink to cool the engine oil, incidentally warming the fuel slightly in the process",
      "Use hot oil to warm the fuel, cooling the oil only incidentally",
      "Cool the fuel using ambient ram air, with no effect on oil temperature",
      "Bypass oil around the cooler whenever oil pressure is low",
    ],
    answer: 0,
    explain:
      "An FCOC is a heat exchanger that uses the engine's fuel supply, normally cooler than the oil, as the cooling medium for the oil system. Heat transfers from the hot oil into the fuel, cooling the oil while conveniently warming the fuel slightly - which also helps guard against fuel icing - before it reaches the filter and injectors.",
    reference: "Powerplant - Fuel-Cooled Oil Cooler",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "On a single-spool gas turbine engine, the compressor rotates:",
    options: [
      "At exactly the same rotational speed as the turbine, since both are mounted on one common shaft",
      "Faster than the turbine, via a reduction gearbox",
      "Slower than the turbine, via a step-up gearbox",
      "Independently of the turbine, coupled only aerodynamically",
    ],
    answer: 0,
    explain:
      "A single-spool design has one shaft connecting a single compressor section directly to a single turbine section, so both necessarily rotate at exactly the same speed. A multi-spool engine instead has separate, mechanically independent shafts (such as N1 and N2), each running its own compressor-turbine pair at its own speed.",
    reference: "Powerplant - Single-Spool Engine Architecture",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "In the diffuser section immediately downstream of a centrifugal compressor's impeller, as airflow passes through, its:",
    options: [
      "Velocity decreases while its pressure and temperature increase",
      "Velocity increases while its pressure and temperature decrease",
      "Velocity, pressure, and temperature all increase together",
      "Velocity, pressure, and temperature all decrease together",
    ],
    answer: 0,
    explain:
      "Air leaves the impeller tip travelling at very high velocity. The diverging passages of the diffuser slow this flow, and that drop in velocity is accompanied by a rise in both static pressure and static temperature as kinetic energy converts into pressure energy.",
    reference: "Powerplant - Centrifugal Compressor Diffuser",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "Compressor and turbine blades that are deliberately fitted with some looseness at rest become effectively rigid once the engine is running, primarily due to:",
    options: [
      "The combined effect of centrifugal force and aerodynamic loading, which seat the blades firmly against their fittings",
      "Thermal expansion of the disc alone",
      "A locking mechanism that engages automatically above idle speed",
      "Oil pressure forcing the blades outward",
    ],
    answer: 0,
    explain:
      "Some blade roots are deliberately fitted with a slightly loose fit at rest, to allow for thermal expansion and ease of assembly. Once running, centrifugal force pulling the blade outward, combined with aerodynamic loading from the gas flow, seats the blade firmly and consistently against its root fitting, effectively removing the looseness.",
    reference: "Powerplant - Rotor Blade Retention",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "A pilot notices slightly higher-than-normal engine oil pressure immediately after starting in very cold weather. This is generally considered:",
    options: [
      "Acceptable, provided the indication returns to a normal value as the oil warms during the start/warm-up sequence",
      "A sign the oil filter is blocked and must be changed before flight",
      "Abnormal, but not serious enough to require shutting the engine down",
      "A definite sign an oil change is required before the next flight",
    ],
    answer: 0,
    explain:
      "Cold oil is significantly more viscous than warm oil, commonly producing a higher-than-usual pressure indication right after a cold start. This is generally acceptable as long as the pressure decreases into the normal range as the oil warms during the start and warm-up period, rather than remaining abnormally high or continuing to rise.",
    reference: "Powerplant - Cold Weather Starting",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Powerplant",
    q: "The purpose of Inlet Guide Vanes (IGVs) positioned ahead of a compressor's first rotor stage is to:",
    options: [
      "Direct the incoming airflow onto the first rotor stage at the optimum angle, particularly important across varying rotational speeds",
      "Increase the velocity of air entering the diffuser at the compressor's rear",
      "Reduce the velocity of air entering the combustion section",
      "Act purely as a structural support, with no aerodynamic function",
    ],
    answer: 0,
    explain:
      "Inlet guide vanes are fixed (or sometimes variable) vanes positioned ahead of the compressor's first rotor stage, angling the incoming airflow so it strikes the rotor blades at the correct angle across the engine's operating speed range. Variable IGVs in particular help avoid compressor stall or surge at low rotational speeds, such as during starting.",
    reference: "Powerplant - Inlet Guide Vanes",
  },
];
