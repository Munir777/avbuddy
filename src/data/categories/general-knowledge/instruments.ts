import type { Question } from "../../../types";

// General aviation knowledge - Instruments.
// Original questions written from general, widely-published aviation
// instruments knowledge, not copied from any single source document.
// No company, brand, or publisher names appear anywhere below.
export const INSTRUMENTS_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Approximately what is the speed of sound at sea level in the International Standard Atmosphere?",
    options: ["661 kt", "343 kt", "1,000 kt", "500 kt"],
    answer: 0,
    explain:
      "In the ISA at sea level, the local speed of sound is approximately 661 knots (about 340 m/s). Since the speed of sound depends on air temperature, this value decreases as temperature falls with altitude, up to the tropopause.",
    reference: "Instruments - Speed of Sound & Mach Number",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "An aircraft's altimeter reads pressure altitude with an error that varies depending on airspeed and configuration. What is this error generally called?",
    options: [
      "Position error (also called pressure error)",
      "Instrument error",
      "Density error",
      "Mach error",
    ],
    answer: 0,
    explain:
      "Position (or pressure) error results from the local airflow around the static source being disturbed by airspeed, angle of attack, and configuration, causing the sensed static pressure to differ slightly from true ambient pressure. It is distinct from simple instrument (mechanical) error.",
    reference: "Instruments - Altimeter & Airspeed Errors",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Over what approximate height range does a typical ground proximity warning system (GPWS) operate?",
    options: [
      "From the ground up to roughly 2,500 ft radio altitude",
      "Only above FL200",
      "From the ground up to 50,000 ft",
      "Only during cruise flight",
    ],
    answer: 0,
    explain:
      "A GPWS is designed to alert the crew to dangerous proximity to terrain during low-level phases of flight, generally operating from the ground up to around 2,500 ft radio altitude - well above that, terrain closure alerts are not relevant.",
    reference: "Instruments - Ground Proximity Warning Systems",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "If an aircraft's static source becomes blocked at a constant altitude and the aircraft then descends, what will the altimeter show?",
    options: [
      "It will continue to show the altitude at which the blockage occurred, regardless of the actual descent",
      "It will show the correct altitude throughout the descent",
      "It will show a rapid, uncontrolled increase in altitude",
      "It will immediately read zero",
    ],
    answer: 0,
    explain:
      "With the static source blocked, the trapped pressure in the system stays fixed at the pressure that existed at the moment of blockage, so the altimeter freezes and continues to display that same altitude even as the aircraft actually climbs or descends.",
    reference: "Instruments - Pitot-Static System Malfunctions",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A traffic-alert and collision avoidance system (TCAS) primarily determines the position of nearby traffic by:",
    options: [
      "Interrogating and receiving replies from other aircraft's transponders",
      "Using its own dedicated onboard search radar",
      "Receiving position reports relayed from ground-based air traffic control radar",
      "Passive detection of engine heat signatures",
    ],
    answer: 0,
    explain:
      "TCAS works by interrogating nearby aircraft's transponders and analysing their replies to determine range, bearing, and (from Mode C/S altitude reporting) relative altitude - it does not use a dedicated search radar of its own, nor does it depend on ground radar data being relayed to it.",
    reference: "Instruments - Traffic Alert & Collision Avoidance Systems",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "On a precision approach, is the decision height (DH) generally referenced to barometric altitude or radio altitude?",
    options: [
      "Radio (radar) altitude",
      "Barometric altitude only",
      "Pressure altitude corrected to 1013.25 hPa",
      "It is not referenced to any altitude source",
    ],
    answer: 0,
    explain:
      "Decision height on a precision approach is generally referenced to radio altitude (true height above the terrain directly below), since it needs to reflect actual height above the runway environment rather than height above a pressure datum, which barometric altitude provides.",
    reference: "Instruments - Radio Altimeter Applications",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Modern stall-warning systems on transport aircraft primarily base their warning on:",
    options: [
      "Angle of attack",
      "Indicated airspeed alone",
      "Vertical speed",
      "Engine thrust setting",
    ],
    answer: 0,
    explain:
      "Because the stalling angle of attack is essentially constant regardless of weight, load factor, or configuration, stall-warning systems are primarily driven by angle-of-attack sensors rather than airspeed alone, which varies with those factors.",
    reference: "Instruments - Stall Warning Systems",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "On a typical flight-deck caution and warning system, what do amber and red annunciations generally indicate respectively?",
    options: [
      "Amber: a caution requiring awareness but not immediate action; red: a warning requiring immediate action",
      "Amber: immediate action required; red: informational only",
      "Both colors indicate the same urgency, differing only by system",
      "Amber and red are used interchangeably depending on manufacturer",
    ],
    answer: 0,
    explain:
      "The generally used color convention is that amber (or yellow) indicates a caution - a condition needing crew awareness and monitoring but not immediate action - while red indicates a warning that does require immediate crew action.",
    reference: "Instruments - Caution & Warning Annunciation",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "When must a flight data recorder (FDR) generally begin recording?",
    options: [
      "Automatically, before the aircraft is capable of moving under its own power",
      "Only after the crew manually activates it prior to take-off",
      "Only once airborne",
      "Only when a fault is first detected",
    ],
    answer: 0,
    explain:
      "An FDR is designed to start recording automatically before the aircraft becomes capable of moving under its own power (essentially when engines are started or systems configured for taxi), rather than relying on the crew to switch it on, so that no relevant data is missed.",
    reference: "Instruments - Flight Data Recorders",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "In flight, how does total air temperature (TAT) generally compare to static air temperature (SAT)?",
    options: [
      "TAT is always equal to or greater than SAT",
      "TAT is always equal to or less than SAT",
      "TAT and SAT are always exactly equal in flight",
      "There is no fixed relationship between TAT and SAT",
    ],
    answer: 0,
    explain:
      "TAT includes the kinetic heating caused by bringing the airflow to rest at the probe, so it is always equal to or greater than the surrounding static air temperature (SAT) - the difference (ram rise) grows with true airspeed.",
    reference: "Instruments - Air Temperature Measurement",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "At sea level in the International Standard Atmosphere, how does calibrated airspeed (CAS) compare to true airspeed (TAS)?",
    options: [
      "CAS equals TAS",
      "CAS is always greater than TAS",
      "CAS is always less than TAS",
      "There is no relationship between them at sea level",
    ],
    answer: 0,
    explain:
      "At sea level under ISA conditions (standard temperature and pressure, and therefore standard density), calibrated airspeed and true airspeed are equal. As altitude increases and air density decreases, TAS becomes progressively greater than CAS for a given dynamic pressure.",
    reference: "Instruments - Airspeed Definitions",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What does a radio (radar) altimeter directly measure?",
    options: [
      "True height above the terrain directly beneath the aircraft",
      "True altitude above mean sea level",
      "Pressure altitude referenced to 1013.25 hPa",
      "Height above the destination aerodrome only",
    ],
    answer: 0,
    explain:
      "A radio altimeter measures true height above whatever terrain or obstacles lie directly below the aircraft, by timing a radio signal reflected off the surface - unlike a barometric altimeter, it is unaffected by pressure or temperature errors but varies with terrain contour.",
    reference: "Instruments - Radio Altimeter Principles",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the purpose of 'swinging' a magnetic compass?",
    options: [
      "To determine the compass deviation on a range of headings and produce a correction card",
      "To calibrate the compass's internal lighting",
      "To reset the compass to true north",
      "To synchronize the compass with the aircraft's inertial reference system",
    ],
    answer: 0,
    explain:
      "Compass swinging involves positioning the aircraft on a series of known headings and comparing the compass reading to the known heading, to determine deviation (caused by local magnetic influences) at each heading and record it on a correction card for the crew to apply.",
    reference: "Instruments - Magnetic Compass Calibration",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What does VNE (or VNO, depending on aircraft category) generally represent on an airspeed indicator?",
    options: [
      "A structural speed limit that should never be deliberately exceeded",
      "The minimum speed required to maintain controlled flight",
      "The recommended speed for best fuel economy",
      "The speed at which the stall warning first activates",
    ],
    answer: 0,
    explain:
      "VNE (never-exceed speed) marks a structural/aerodynamic limit that should never be deliberately exceeded, since doing so risks flutter, structural damage, or loss of control - it is marked on the airspeed indicator, typically as the start of a red radial line.",
    reference: "Instruments - Airspeed Indicator Markings",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "An aircraft climbs at a constant Mach number below the tropopause. What happens to its calibrated airspeed (CAS) during the climb?",
    options: [
      "CAS decreases as altitude increases",
      "CAS increases as altitude increases",
      "CAS remains exactly constant throughout the climb",
      "CAS becomes unpredictable and cannot be determined",
    ],
    answer: 0,
    explain:
      "Below the tropopause, temperature (and therefore the local speed of sound) decreases with altitude, so holding a constant Mach number as altitude increases means true airspeed falls, and with falling air density as well, calibrated airspeed decreases through the climb.",
    reference: "Instruments - Speed Relationships in Climb & Descent",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "If an aircraft's pitot tube becomes blocked while the static source remains clear, how will the airspeed indicator generally behave during a climb and during a descent?",
    options: [
      "It will tend to under-read in a climb and over-read in a descent",
      "It will tend to over-read in a climb and under-read in a descent",
      "It will read correctly in both climb and descent",
      "It will freeze at zero regardless of flight path",
    ],
    answer: 0,
    explain:
      "With the pitot pressure trapped at the blockage altitude while the static pressure keeps changing normally, the airspeed indicator effectively behaves like an altimeter referenced to the pitot pressure: it under-reads as the aircraft climbs (static pressure falling below the trapped pitot pressure) and over-reads as it descends.",
    reference: "Instruments - Pitot-Static System Malfunctions",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Why are static ports and pitot tubes generally fitted with electrical heating?",
    options: [
      "To prevent ice from forming and blocking the sensing ports, which would cause erroneous instrument readings",
      "To improve the accuracy of the temperature probe located nearby",
      "To reduce aerodynamic drag at cruise speed",
      "To prevent lightning strikes from damaging the airframe",
    ],
    answer: 0,
    explain:
      "Pitot and static ports are heated specifically to prevent ice accumulation from blocking them - a blockage in either can cause airspeed and altitude indications to become unreliable or frozen, which is why pitot-static heat failures are treated as a significant caution.",
    reference: "Instruments - Pitot-Static System Icing Protection",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "How does a vertical speed indicator (VSI) generally derive its indication?",
    options: [
      "By measuring the rate of change of static pressure through a calibrated restriction (metering leak)",
      "By directly measuring the aircraft's radio altitude over time",
      "By integrating GPS altitude data alone",
      "By sensing changes in engine thrust setting",
    ],
    answer: 0,
    explain:
      "A conventional VSI compares static pressure inside a sealed diaphragm (which changes instantly) against static pressure that reaches a second chamber only through a calibrated restriction (which changes more slowly) - the resulting pressure differential drives the needle, indicating rate of altitude change rather than altitude itself.",
    reference: "Instruments - Vertical Speed Indicator Principle",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A turn coordinator (or turn-and-slip indicator) is fundamentally built around which type of gyroscopic instrument?",
    options: [
      "A rate gyro, sensitive to the rate of turn about the aircraft's vertical (yaw) axis",
      "A free (space-stabilised) gyro with two full degrees of freedom",
      "A laser ring gyro used only in inertial navigation systems",
      "A simple pendulum with no gyroscopic component at all",
    ],
    answer: 0,
    explain:
      "A turn coordinator/turn-and-slip indicator uses a rate gyro - one restrained by a spring so that its precession is proportional to the rate of turn - unlike an attitude or heading indicator, which uses a free gyro that resists any change in the orientation of its spin axis.",
    reference: "Instruments - Gyroscopic Instrument Principles",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What gyroscopic property allows an attitude indicator to keep displaying a stable pitch and bank reference as the aircraft maneuvers around it?",
    options: [
      "Rigidity in space - the tendency of a spinning gyro to resist any change in the direction of its spin axis",
      "Precession alone, with no rigidity involved",
      "A continuous electrical signal from the autopilot computer",
      "Magnetic alignment with the earth's magnetic field",
    ],
    answer: 0,
    explain:
      "A free gyro's rigidity in space - its tendency to keep its spin axis pointed in a fixed direction regardless of how the surrounding aircraft structure moves - is what lets an attitude indicator's gyro stay aligned with true vertical while the instrument case (and the rest of the aircraft) pitches and rolls around it.",
    reference: "Instruments - Gyroscopic Instrument Principles",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A traditional gyroscopic heading indicator (directional gyro) is subject to a slow drift error over time, generally caused by:",
    options: [
      "Real-world imperfections (friction and the earth's rotation) causing gradual precession, requiring periodic realignment against the magnetic compass",
      "A deliberate design feature intended to correct for magnetic variation automatically",
      "Direct interference from nearby VOR ground stations",
      "Rapid changes in outside air temperature alone",
    ],
    answer: 0,
    explain:
      "A basic directional gyro isn't slaved to the magnetic compass and gradually drifts due to small real-world imperfections such as gyro friction and apparent drift caused by the earth's own rotation, so it needs to be periodically checked and realigned against the magnetic compass to stay accurate.",
    reference: "Instruments - Heading Indicator Errors & Realignment",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "An inertial reference system (IRS) determines aircraft position fundamentally by:",
    options: [
      "Integrating measured accelerations over time from a known starting position, without needing external radio signals",
      "Continuously receiving and triangulating ground-based radio beacon signals",
      "Directly measuring distance to satellites in the same way as GPS",
      "Comparing successive weather radar returns",
    ],
    answer: 0,
    explain:
      "An inertial reference system uses accelerometers and gyros to sense the aircraft's accelerations and rotations, then mathematically integrates that data over time starting from a precisely entered initial position - a self-contained method that needs no external radio signals, but that accumulates small position errors (drift) the longer it runs without an update.",
    reference: "Instruments - Inertial Reference Systems",
  },
  {
    id: 23,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the general function of a flight director, as distinct from the autopilot itself?",
    options: [
      "It displays command guidance cues (pitch/roll bars) for the pilot to follow manually, using the same computed guidance the autopilot would use",
      "It physically moves the flight controls in place of the pilot",
      "It only provides guidance during an autoland approach",
      "It replaces the need for an attitude indicator entirely",
    ],
    answer: 0,
    explain:
      "A flight director computes the same guidance commands that would normally drive the autopilot, but displays them as steering cues (typically pitch and roll command bars) on the primary flight display for the pilot to hand-fly to - it does not itself move the flight controls, unlike the autopilot.",
    reference: "Instruments - Flight Director Function",
  },
  {
    id: 24,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the general purpose of monitoring exhaust gas temperature (EGT) on a gas turbine engine?",
    options: [
      "To help protect the engine's hot-section components from exceeding safe operating temperature limits",
      "To measure outside air temperature for navigation computations",
      "To indicate fuel quantity remaining in the wing tanks",
      "To indicate cabin temperature for passenger comfort",
    ],
    answer: 0,
    explain:
      "EGT is monitored primarily to protect the engine's turbine section from thermal damage - exceeding published EGT limits, especially during starts or high-power settings, risks shortening component life or causing damage, so it's a key parameter crews cross-check against limits.",
    reference: "Instruments - Engine Temperature Indications",
  },
  {
    id: 25,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "On a twin-spool turbofan engine, what do the N1 and N2 indications generally represent?",
    options: [
      "N1 is the rotational speed (as a percentage of a reference value) of the low-pressure spool (fan), and N2 is that of the high-pressure spool",
      "N1 and N2 both indicate the same spool, shown on two separate redundant gauges",
      "N1 is fuel flow and N2 is oil pressure",
      "N1 is cabin altitude and N2 is cabin rate of change",
    ],
    answer: 0,
    explain:
      "N1 represents the rotational speed of the low-pressure spool (which drives the large fan at the front of a turbofan), and N2 represents the high-pressure spool (driving the core compressor) - both are shown as a percentage of a defined 100% reference speed rather than as a raw RPM figure.",
    reference: "Instruments - Engine Rotational Speed Indications",
  },
  {
    id: 26,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What does an angle of attack (AoA) indicator directly display?",
    options: [
      "The angle between the wing's chord line and the relative airflow",
      "The aircraft's pitch angle relative to the horizon",
      "The angle of bank currently being held",
      "The angle between true north and the aircraft's heading",
    ],
    answer: 0,
    explain:
      "An angle of attack indicator shows the angle between the wing's chord line and the oncoming relative airflow - a more direct measure of proximity to the stall than airspeed alone, since the stalling angle of attack stays essentially constant regardless of weight, bank angle, or load factor.",
    reference: "Instruments - Angle of Attack Indication",
  },
  {
    id: 27,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A Mach meter generally derives Mach number from which measurement?",
    options: [
      "The ratio of dynamic (pitot/impact) pressure to static pressure, which is a function of Mach number independent of outside air temperature",
      "Outside air temperature alone, with no pressure input needed",
      "The difference between radio altitude and pressure altitude",
      "Fuel flow relative to engine N1",
    ],
    answer: 0,
    explain:
      "Unlike an airspeed indicator, a Mach meter works from the ratio of dynamic (pitot) pressure to static pressure - a relationship that depends only on Mach number, not directly on temperature - which is why Mach number stays consistent as a measure of compressibility effects regardless of the actual air temperature at a given flight level.",
    reference: "Instruments - Mach Number Indication",
  },
  {
    id: 28,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Which pressure unit is the international standard for altimeter subscale settings, though some regions instead commonly use inches of mercury?",
    options: ["Hectopascals (hPa), also expressed as millibars", "Pounds per square inch (PSI)", "Newtons per square metre only", "Bar, with no other unit ever used"],
    answer: 0,
    explain:
      "Hectopascals (numerically the same as millibars) are the internationally standard unit for altimeter subscale settings, though some regions - notably North America - conventionally use inches of mercury instead, making it important for crews to be comfortable converting or cross-checking between the two.",
    reference: "Instruments - Altimeter Subscale Units",
  },
  {
    id: 29,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "Flying from an area of warm air into significantly colder air, without any correction, an uncompensated barometric altimeter will tend to:",
    options: [
      "Read higher than the aircraft's true altitude, meaning the aircraft is actually lower than indicated",
      "Read lower than the aircraft's true altitude, meaning the aircraft is actually higher than indicated",
      "Continue reading exactly true altitude regardless of temperature",
      "Freeze at its last reading until the temperature returns to standard",
    ],
    answer: 0,
    explain:
      "Colder-than-standard air is denser, so a given pressure level is physically lower than it would be in standard conditions - this means true altitude is lower than the altimeter indicates in cold air, summarised by the memory aid 'high to low, look out below', which is why cold-temperature altitude corrections matter for terrain and obstacle clearance.",
    reference: "Instruments - Temperature Effects on Altimetry",
  },
  {
    id: 30,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A standby instrument set, kept independent of the main flight instrument architecture, would typically include at least which of the following?",
    options: [
      "An attitude indicator, an airspeed indicator, and an altimeter",
      "A weather radar display and a fuel flow indicator only",
      "A flight director and autothrottle system",
      "A cabin pressure controller and oxygen system indicator",
    ],
    answer: 0,
    explain:
      "A standby instrument set is generally built around at least an attitude indicator, airspeed indicator, and altimeter - the minimum needed to keep the aircraft under control and correctly positioned - independent of the aircraft's main electrical/systems architecture, so that a major failure there still leaves the crew with basic flight references.",
    reference: "Instruments - Standby Instrumentation",
  },
  {
    id: 31,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the general purpose of the tilt control on an airborne weather radar display?",
    options: [
      "To angle the radar beam up or down, letting the crew scan different altitudes of weather ahead and avoid excessive ground returns",
      "To adjust the color scheme used to depict precipitation intensity",
      "To switch between weather mode and ground-mapping mode only",
      "To change the radar's transmission frequency",
    ],
    answer: 0,
    explain:
      "Tilt control lets the crew steer the radar beam's vertical angle, so they can scan the altitudes where significant weather is likely to be found ahead of the aircraft, while avoiding tilting the beam so low that ground returns clutter the display or so high that the radar overshoots the tops of nearby storms.",
    reference: "Instruments - Airborne Weather Radar Operation",
  },
  {
    id: 32,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What does an autothrottle (or autothrust) system generally do?",
    options: [
      "Automatically adjusts engine thrust to maintain a selected speed or thrust target, reducing pilot workload",
      "Automatically adjusts the aircraft's pitch attitude, independent of thrust",
      "Automatically selects the active navigation source on the flight management system",
      "Automatically manages cabin pressurization",
    ],
    answer: 0,
    explain:
      "An autothrottle/autothrust system automatically moves the thrust levers (or commands thrust electronically) to hold a selected airspeed, Mach number, or thrust setting, working alongside the autopilot/flight director to manage the overall flight path with reduced manual pilot workload.",
    reference: "Instruments - Autothrottle/Autothrust Function",
  },
  {
    id: 33,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the general purpose of a fuel flow indicator?",
    options: [
      "To show the rate at which fuel is being consumed by each engine, supporting monitoring and range/endurance calculations",
      "To show the total quantity of fuel remaining in each tank",
      "To indicate the temperature of the fuel in the tanks",
      "To indicate whether the fuel is contaminated with water",
    ],
    answer: 0,
    explain:
      "A fuel flow indicator shows the current rate of fuel consumption (per engine), which crews use to monitor engine performance and to support inflight range and endurance calculations - distinct from a fuel quantity indicator, which shows how much fuel remains rather than how fast it is being used.",
    reference: "Instruments - Fuel Flow Indication",
  },
  {
    id: 34,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What are the primary flight display (PFD) and navigation display (ND) of a typical electronic flight instrument system (EFIS) each generally used for?",
    options: [
      "The PFD shows primary flight parameters (attitude, airspeed, altitude, heading); the ND shows lateral track and navigation/map information",
      "The PFD shows only engine parameters; the ND shows only attitude information",
      "Both displays show identical information as a redundancy measure, with no functional difference",
      "The PFD is used only on the ground; the ND is used only in flight",
    ],
    answer: 0,
    explain:
      "The primary flight display consolidates the core flight parameters a pilot needs moment-to-moment - attitude, airspeed, altitude, vertical speed, and heading - while the navigation display presents the lateral picture: track, route, weather radar overlay, and traffic, supporting the broader navigation picture rather than immediate flight-path control.",
    reference: "Instruments - Electronic Flight Instrument System (EFIS)",
  },
  {
    id: 35,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "What is the general purpose of monitoring engine vibration levels in flight?",
    options: [
      "To help detect developing mechanical faults, such as imbalance, before they progress to a more serious failure",
      "To measure outside air temperature indirectly",
      "To calculate the aircraft's current fuel burn rate",
      "To determine cabin pressure differential",
    ],
    answer: 0,
    explain:
      "Vibration monitoring provides an early indication of developing mechanical problems - such as imbalance in rotating engine components - that might not yet be apparent from other engine parameters, letting issues be caught and addressed before they progress to a more serious in-flight failure.",
    reference: "Instruments - Engine Vibration Monitoring",
  },
  {
    id: 36,
    subject: "ATPL General Knowledge",
    system: "Instruments",
    q: "A cockpit voice recorder (CVR) is generally designed to:",
    options: [
      "Continuously record on a loop, retaining at least the most recent portion of the flight and overwriting older recordings",
      "Record only when a crew member manually activates it",
      "Store the entire flight's audio permanently with nothing ever overwritten",
      "Record only engine sounds, not crew conversation",
    ],
    answer: 0,
    explain:
      "A CVR runs continuously and automatically once powered, recording on a loop so that at least the most recent portion of the flight is preserved, with older audio progressively overwritten - ensuring the most operationally relevant period is captured without requiring the crew to remember to start or stop it.",
    reference: "Instruments - Cockpit Voice Recorders",
  },
];
