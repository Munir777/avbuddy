import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 3 -- Section 3: Instruments
// (flight instruments, flight management instruments, engine instruments,
// and aircraft compass systems). Original questions written from general
// instrumentation/avionics knowledge and the TP 690 syllabus (topic
// headings only, no sample questions). Not transcribed or adapted from
// any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_03_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "If an aircraft's pitot tube becomes completely blocked by ice while the drain hole remains clear, and the aircraft then climbs, the airspeed indicator will",
    options: [
      "behave like an altimeter, showing an increasing indicated airspeed as the aircraft climbs, unrelated to the aircraft's actual speed.",
      "show a decreasing indicated airspeed as the aircraft climbs, the reverse of the actual pitot-blockage effect described above.",
      "continue to read accurately throughout the climb, since the open drain hole is assumed to fully compensate for the blocked pitot line.",
      "immediately drop to zero and remain there for the rest of the flight, since no pitot pressure at all can reach the diaphragm.",
    ],
    answer: 0,
    explain:
      "With the pitot line sealed but the static line and the drain hole still open to ambient pressure, the trapped pitot pressure stays fixed at the value it had when the blockage occurred, while the static pressure in the case continues to fall as the aircraft climbs. Since airspeed is derived from the difference between those two pressures, a falling static pressure against a fixed trapped pitot pressure makes the instrument read an increasing speed -- it starts behaving like an altimeter rather than an airspeed indicator.",
    reference: "TP 690 Section 3 - Pitot Static System",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "If the static port becomes blocked while the pitot tube remains clear, and the aircraft then descends, the airspeed indicator will tend to read",
    options: [
      "exactly the actual airspeed, since only the static side is affected.",
      "higher than the actual airspeed.",
      "zero, since airspeed indication requires an accurate static reference at all times.",
      "lower than the actual airspeed.",
    ],
    answer: 1,
    explain:
      "With static pressure trapped at the blockage altitude while the aircraft descends into higher actual ambient pressure, the trapped (now relatively low) static pressure exaggerates the pressure differential against ram (pitot) pressure, causing the ASI to over-read during the descent. The reverse happens during a climb with a blocked static source: the ASI tends to under-read.",
    reference: "TP 690 Section 3 - Pitot Static System",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A pressure altimeter set to a local altimeter setting, flying from an area of high pressure into an area of significantly lower pressure without updating the setting, will",
    options: [
      "indicate correctly provided the aircraft remains below 18,000 ft.",
      "continue to indicate true altitude accurately, since the Kollsman window setting only affects ground-level accuracy.",
      "indicate an altitude higher than the aircraft's true altitude.",
      "indicate an altitude lower than the aircraft's true altitude.",
    ],
    answer: 2,
    explain:
      "This is the basis for the 'high to low, look out below' rule: as actual pressure decreases while the altimeter is still referenced to the old, higher setting, the instrument reads higher than the aircraft's true altitude -- meaning the aircraft is actually lower than indicated, a genuine terrain-clearance hazard if the setting isn't updated.",
    reference: "TP 690 Section 3 - Altimeter and Encoding Altimeter",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Flying in air significantly colder than the ICAO Standard Atmosphere, with the altimeter correctly set to the current altimeter setting, causes the altimeter to",
    options: [
      "read accurately, since altimeter setting alone fully compensates for temperature.",
      "under-read, so the aircraft's true altitude is higher than indicated.",
      "read accurately only above the transition altitude.",
      "over-read, so the aircraft's true altitude is lower than indicated.",
    ],
    answer: 3,
    explain:
      "Cold air is denser than standard, so a given pressure level actually sits at a lower true altitude than the altimeter (calibrated to the standard atmosphere) assumes -- the instrument over-reads, and true altitude is lower than indicated. This is the same 'from hot to cold, look out below' hazard as the pressure case, but driven by temperature instead.",
    reference: "TP 690 Section 3 - Altimeter and Encoding Altimeter",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Machmeter indicates",
    options: [
      "the ratio of the aircraft's true airspeed to the local speed of sound.",
      "the aircraft's true airspeed directly, in knots, corrected for compressibility.",
      "the aircraft's ground speed relative to the local speed of sound.",
      "the ratio of indicated airspeed to calibrated airspeed.",
    ],
    answer: 0,
    explain:
      "Mach number is TAS divided by the local speed of sound, which itself depends on the outside air temperature -- so the same indicated Mach number can correspond to different true airspeeds depending on temperature, which is why high-altitude cruise is normally flown and controlled by Mach number rather than airspeed.",
    reference: "TP 690 Section 3 - Machmeter",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The Vertical Speed Indicator (VSI) derives its indication from",
    options: [
      "the rate of change of pitot (dynamic) pressure only.",
      "the rate of change of static pressure, sensed through a calibrated leak between the instrument case and a diaphragm connected to the static system.",
      "direct input from the aircraft's inertial reference system, with no pneumatic connection at all.",
      "GPS-derived altitude changes, cross-checked against the pressure altimeter.",
    ],
    answer: 1,
    explain:
      "A conventional VSI compares static pressure inside a diaphragm (which changes quickly with altitude) to static pressure in the sealed instrument case (which changes slowly, through a calibrated restrictor/leak) -- the pressure difference between the two, caused by that lag, drives the rate-of-climb indication.",
    reference: "TP 690 Section 3 - Vertical Speed Indicator (VSI)",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An Instantaneous Vertical Speed Indicator (IVSI) improves on a conventional VSI primarily by",
    options: [
      "eliminating the need for any connection to the static system at all, relying instead entirely on an independent inertial sensor package.",
      "deriving its reading exclusively from GPS altitude rate, independent of any pneumatic pressure source or connection.",
      "using an accelerometer-driven pump to reduce the lag that a conventional VSI exhibits at the start of a climb or descent.",
      "displaying vertical speed as a digital Mach number rather than feet per minute, regardless of actual climb rate.",
    ],
    answer: 2,
    explain:
      "A conventional VSI lags briefly at the start of a pitch change because it relies on the calibrated leak to build up a pressure differential. An IVSI adds an accelerometer-driven pump that responds instantly to the initial vertical acceleration, giving a much faster, near-instantaneous indication before the pneumatic lag portion takes over.",
    reference: "TP 690 Section 3 - Vertical Speed Indicator (VSI)",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A radio (radar) altimeter differs from a pressure altimeter in that it",
    options: [
      "measures the aircraft's rate of climb or descent only, not its height above terrain or anything else.",
      "measures altitude above mean sea level directly, requiring no pilot-set altimeter setting at any time.",
      "is only usable above 18,000 feet, within what is formally defined as the Standard Pressure Region for altimetry purposes.",
      "measures actual height above the terrain directly beneath the aircraft, rather than altitude above a pressure datum.",
    ],
    answer: 3,
    explain:
      "A radio/radar altimeter transmits a signal toward the ground and times its reflection to compute actual height above whatever terrain or obstacles are directly below the aircraft -- fundamentally different from a pressure altimeter, which reads altitude relative to a pressure datum and knows nothing about the terrain underneath.",
    reference: "TP 690 Section 3 - Radio/Radar Altimeter",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Total Air Temperature (TAT), as sensed by a probe on a fast-moving aircraft, differs from the actual (static) outside air temperature because",
    options: [
      "TAT includes the ram rise caused by compressing and decelerating the air at the probe, which increases with airspeed.",
      "TAT is unaffected by airspeed and equals the static air temperature at all times, regardless of speed.",
      "TAT is measured only while the aircraft is on the ground, before any ram-air heating effects begin.",
      "TAT is always lower than the static air temperature, at any airspeed, due to the cooling effect of airflow across the probe.",
    ],
    answer: 0,
    explain:
      "As air is brought to a near-stop at the temperature probe, its kinetic energy converts to heat (ram rise), so TAT reads higher than the true static air temperature, with the difference growing as airspeed (and especially Mach number) increases -- this is why the air data computer must correct TAT back to static air temperature for performance and Mach calculations.",
    reference: "TP 690 Section 3 - Outside Air Temperature",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An Air Data Computer (ADC) takes pitot, static, and temperature inputs and computes outputs that typically include",
    options: [
      "magnetic heading and track, derived entirely from pitot-static data.",
      "pressure altitude, calibrated and true airspeed, Mach number, and vertical speed, distributed to multiple aircraft systems.",
      "aircraft weight and centre of gravity only.",
      "engine N1/N2 and EGT/ITT values.",
    ],
    answer: 1,
    explain:
      "The ADC centralizes the computation of pressure-derived parameters -- altitude, airspeed (CAS/TAS), Mach, vertical speed -- from raw pitot, static, and temperature sensor inputs, and distributes those computed values digitally to displays, the autopilot/autothrottle, and other consuming systems, rather than each instrument computing its own value from a direct pneumatic connection.",
    reference: "TP 690 Section 3 - Air Data Computer",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A turn coordinator differs from a simple turn-and-bank (turn needle) indicator in that the turn coordinator's gyro is",
    options: [
      "vertically mounted, so it senses pitch rate rather than yaw rate, like an attitude indicator's gyro.",
      "not a gyroscopic instrument at all, but a purely pendulous device responding only to gravity and inertia.",
      "canted, so it senses both roll rate and yaw rate, giving an earlier indication of a turn being entered.",
      "mounted flat, sensing yaw rate only, identical in principle to the simple turn-and-bank indicator's gyro.",
    ],
    answer: 2,
    explain:
      "The turn-and-bank indicator's gyro is mounted to sense yaw rate only. The turn coordinator's gyro is canted (tilted) so it responds to roll rate as well as yaw rate, which makes it show a turn being initiated (via the roll) sooner than a simple turn needle would.",
    reference: "TP 690 Section 3 - Turn-and-Bank Indicator / Turn Co-ordinator",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A gyroscopic heading indicator (directional gyro) is subject to",
    options: [
      "errors only when the aircraft is stationary on the ground, and never at any time while the aircraft is actually airborne.",
      "no drift of any kind whatsoever, since a properly aligned gyroscope is treated as a permanently stable spatial reference.",
      "acceleration and turning errors identical to those of a magnetic compass, since the heading indicator is mechanically slaved directly to the compass card.",
      "apparent and real precession, which cause it to drift from the correct heading over time and need periodic realignment with the compass.",
    ],
    answer: 3,
    explain:
      "A free (unslaved) directional gyro drifts due to real precession (friction and mechanical imperfections) and apparent precession (a consequence of the Earth's rotation relative to the gyro's fixed plane in space), so it must be periodically checked and realigned against the magnetic compass -- unlike a magnetic compass, it isn't subject to acceleration or turning errors, but it isn't drift-free either.",
    reference: "TP 690 Section 3 - Heading Indicator",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An attitude indicator (artificial horizon) displays pitch and bank based on",
    options: [
      "the gyroscopic rigidity of a gyro spinning about a vertical axis, staying fixed in space as the aircraft pitches and rolls around it.",
      "direct sensing of the true horizon by an optical sensor mounted externally on the fuselage or wingtip.",
      "static pressure changes sensed through the very same pitot-static plumbing already used by the altimeter and airspeed indicator instruments.",
      "GPS-derived vertical speed and track data exclusively, with no gyroscopic component driving the display.",
    ],
    answer: 0,
    explain:
      "The attitude indicator relies on a gyro's rigidity in space: as the aircraft pitches and rolls around the gyro, the instrument's display (referenced to the gyro's fixed spin axis) shows the aircraft's attitude relative to that stable reference, rather than sensing the horizon directly or using pitot-static pressures.",
    reference: "TP 690 Section 3 - Attitude Indicator (AI)",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A flight director differs from an autopilot in that the flight director",
    options: [
      "moves the flight controls directly to follow the selected mode, exactly as a fully coupled autopilot does, requiring no manual pilot input at all.",
      "computes and displays pitch/roll command guidance (command bars) for the pilot to follow manually, without moving the controls itself.",
      "can only be used once the autopilot has actually been engaged, and is never available independently of it.",
      "provides lateral guidance only, offering no pitch guidance capability at any point during the flight.",
    ],
    answer: 1,
    explain:
      "The flight director computes the same guidance the autopilot would use to fly a selected mode (heading, altitude, approach, etc.) and displays it as command bars for the pilot to hand-fly, whereas the autopilot takes that same computed command and drives the control surfaces itself. A flight director can be used with the autopilot off.",
    reference: "TP 690 Section 3 - Flight Director",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Radio Magnetic Indicator (RMI) combines",
    options: [
      "a Machmeter and an altimeter, sharing a single needle.",
      "an HSI-style course deviation bar with a glideslope pointer, and nothing else.",
      "a slaved compass card showing magnetic heading with one or more bearing pointers indicating the magnetic bearing to a selected ADF and/or VOR station.",
      "engine parameters with heading information, on a single combined gauge.",
    ],
    answer: 2,
    explain:
      "The RMI's rotating compass card shows the aircraft's magnetic heading, while its bearing pointer(s) -- referenced to that same card -- show the magnetic bearing to whichever ADF or VOR station is tuned, letting the pilot read the aircraft's relationship to the station at a glance.",
    reference: "TP 690 Section 3 - Radio Magnetic Indicator (RMI)",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An HSI (Horizontal Situation Indicator) improves on a separate heading indicator and course deviation indicator by",
    options: [
      "displaying only vertical navigation information on its face, with no lateral course information presented.",
      "replacing the attitude indicator entirely, since the HSI display is sometimes assumed to also show the aircraft's current bank angle.",
      "eliminating the need for the aircraft to have any magnetic compass installed as standard equipment.",
      "integrating heading, selected course, course deviation, and (for an ILS) glideslope deviation into one combined display.",
    ],
    answer: 3,
    explain:
      "The HSI's value is integration: rather than scanning a separate heading indicator and a separate CDI/glideslope instrument, the pilot sees heading, selected course, lateral deviation from that course, and (on an ILS approach) glideslope deviation all referenced to one map-like display, reducing scan workload.",
    reference: "TP 690 Section 3 - Horizontal Situation Indicator (HSI)",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An angle of attack (AoA) indicator is operationally useful because",
    options: [
      "the aircraft's critical (stalling) angle of attack is essentially constant regardless of weight, configuration, or load factor, unlike stall speed, which varies with those factors.",
      "it is required only for aerobatic-category aircraft, and has no transport-category application.",
      "it measures the angle between true heading and magnetic heading.",
      "it replaces the need for an airspeed indicator entirely, at any phase of flight.",
    ],
    answer: 0,
    explain:
      "Stall speed changes with weight, load factor, and configuration, so a single airspeed number isn't a reliable stall-margin indicator across all conditions. The critical angle of attack at which the wing stalls, however, stays essentially the same aerodynamic value regardless of those factors, which is why a direct AoA readout gives a more consistent picture of stall margin.",
    reference: "TP 690 Section 3 - Angle of Attack Indicator",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An Electronic Flight Instrument System (EFIS) primarily replaces",
    options: [
      "the engine instruments only, leaving flight instruments unchanged.",
      "individual electromechanical flight instruments with integrated electronic displays (a Primary Flight Display and Navigation Display), reducing panel clutter and improving the pilot's instrument scan.",
      "the need for any backup or standby instrumentation on the flight deck.",
      "the aircraft's entire hydraulic flight control system with fly-by-wire.",
    ],
    answer: 1,
    explain:
      "EFIS consolidates what used to be a set of separate mechanical gauges (attitude, airspeed, altitude, heading, navigation) onto a small number of electronic displays, typically a Primary Flight Display and a Navigation Display, which reduces the number of items the pilot has to scan and allows more flexible presentation of the same data.",
    reference: "TP 690 Section 3 - Electronic Flight Instrument System (EFIS)",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Flight Management System (FMS) is best described as a system that",
    options: [
      "replaces the need for a paper or electronic flight plan to ever be filed with air traffic services before any scheduled departure.",
      "monitors engine parameters exclusively, alerting the crew only to engine-related exceedances.",
      "manages route/navigation data, performance calculations, and guidance, typically coupled to the autopilot and autothrottle.",
      "provides only weather radar data to the flight deck displays, with no navigation function at all.",
    ],
    answer: 2,
    explain:
      "The FMS is fundamentally a navigation and performance management system: it holds the route in its database, computes performance predictions (fuel, ETA, optimum altitude, etc.), and provides lateral and vertical guidance that the autopilot/autothrottle can follow -- it doesn't replace the crew's obligation to file a flight plan with ATS, and it isn't an engine-monitoring system.",
    reference: "TP 690 Section 3 - Flight Management System (FMS)",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "ECAM and EICAS are both examples of systems that",
    options: [
      "monitor only cabin pressurization parameters, with engine parameters instead shown on an entirely separate dedicated panel.",
      "are simply alternate manufacturer names for the same underlying weather radar display technology.",
      "provide lateral and vertical navigation guidance directly to the autopilot, in place of the FMS.",
      "centralize engine and aircraft system monitoring and alerting onto electronic displays, replacing many individual gauges.",
    ],
    answer: 3,
    explain:
      "Electronic Centralized Aircraft Monitoring (ECAM, used by Airbus) and the Engine Indicating and Crew Alerting System (EICAS, used by Boeing) are each manufacturer-specific implementations of the same underlying idea: consolidating engine parameters and system status/warnings onto shared electronic displays rather than a panel full of individual gauges and lights.",
    reference: "TP 690 Section 3 - Electronic Centralized Aircraft Monitoring (ECAM/EICAS)",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a twin-spool turbofan engine, N1 and N2 tachometer readings represent",
    options: [
      "the speed of the low-pressure spool and the high-pressure spool, each as a percent of rated maximum.",
      "fuel flow and oil pressure, respectively, two parameters unrelated to any rotating spool's actual speed.",
      "the aircraft's indicated airspeed and true airspeed, respectively, as computed by the air data computer.",
      "the rotational speed of the left engine and the right engine, respectively, regardless of spool count.",
    ],
    answer: 0,
    explain:
      "N1 is the rotational speed of the fan and low-pressure compressor/turbine assembly; N2 is the speed of the high-pressure compressor/turbine (core) assembly. Both are shown as a percentage of a defined maximum rated speed for that engine, not as raw RPM, and neither refers to which engine (left/right) is being displayed.",
    reference: "TP 690 Section 3 - Tachometer (N1, N2, NH, NL)",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A torquemeter is used mainly on turboprop engines because",
    options: [
      "turboprop engines have no tachometer at all installed, so torque is the only rotational parameter ever made available.",
      "since a constant-speed propeller holds RPM near-constant, RPM alone does not indicate the power being delivered.",
      "torquemeters are required only during engine start, and are disregarded for the remainder of the flight.",
      "torque directly measures fuel flow, making a separate dedicated fuel flow gauge entirely unnecessary.",
    ],
    answer: 1,
    explain:
      "Because a constant-speed propeller keeps RPM close to a fixed value across a broad power range, RPM stops being a useful indicator of power output on a turboprop. Torque -- the twisting force actually delivered to the propeller shaft -- is what varies with power, which is why turboprops rely on a torquemeter (often expressed as a percentage or in foot-pounds) as their primary power-setting parameter, alongside the tachometer.",
    reference: "TP 690 Section 3 - Torquemeter",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Turbine temperature (ITT or TIT) is monitored primarily to",
    options: [
      "measure the temperature of the fuel entering the combustion chamber prior to ignition.",
      "indicate cabin temperature, since ITT probes are also sometimes thought to be used for cabin pressurization control.",
      "protect the turbine section from thermal damage by keeping gas temperature within the engine's certified limits.",
      "indicate the outside air temperature at the engine's current operating altitude only.",
    ],
    answer: 2,
    explain:
      "Interstage (or inter-turbine) temperature and turbine inlet temperature are critical limiting parameters because the turbine section operates closest to its thermal design limits of any part of the engine -- exceeding the limit risks damaging turbine blades and other hot-section components, which is why ITT/TIT is closely monitored and limited, especially during starts and high-power settings.",
    reference: "TP 690 Section 3 - Turbine Temperature (ITT/TIT)",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Compass deviation, as recorded on an aircraft's compass correction card, results from",
    options: [
      "the difference between true north and magnetic north at the aircraft's present geographic position on the chart in use.",
      "acceleration errors that occur only while the aircraft is turning through north or south headings.",
      "the aircraft's true airspeed, which affects how the compass card itself is read by the pilot.",
      "local magnetic interference from the aircraft's structure and equipment, compensated for during a compass swing.",
    ],
    answer: 3,
    explain:
      "Deviation is aircraft-specific magnetic interference (from wiring, avionics, structure, etc.) that varies by heading and is recorded on a correction card after a compass swing so the pilot can apply the correction for the heading being flown. Variation, by contrast, is the difference between true and magnetic north at a given location -- a separate error from deviation.",
    reference: "TP 690 Section 3 - Aircraft Compass Systems, Limitations and Faults",
  },
  {
    id: 25,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "In the northern hemisphere, a simple magnetic compass exhibits an acceleration error such that, on an east or west heading,",
    options: [
      "accelerating causes the compass to indicate a turn toward north, and decelerating causes it to indicate a turn toward south.",
      "accelerating causes the compass to indicate a turn toward south, and decelerating causes it to indicate a turn toward north, the reverse of the true effect.",
      "the error only occurs on north or south headings, and is never observed on east or west headings at all.",
      "acceleration and deceleration produce no compass error whatsoever on east or west headings, in any circumstance.",
    ],
    answer: 0,
    explain:
      "This is the basis for the northern-hemisphere mnemonic 'ANDS' (Accelerate North, Decelerate South): on east/west headings, the compass's pendulous mounting reacts to the horizontal component of magnetic dip during acceleration/deceleration, producing an apparent (but false) turn indication toward north on acceleration and toward south on deceleration -- the error is most pronounced on east/west headings, not north/south, which is the opposite of the turning error case.",
    reference: "TP 690 Section 3 - Aircraft Compass Systems, Limitations and Faults",
  },
  {
    id: 26,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A gyromagnetic remote indicating compass (a magnetic compass slaved to a gyro-stabilized heading system) is preferred over a simple magnetic compass mainly because it",
    options: [
      "no longer requires any periodic compass swing or deviation correction of any kind.",
      "senses magnetic heading via a remotely mounted flux valve, away from cockpit magnetic interference, and displays it through a gyro-stabilized system that is not subject to the turning and acceleration errors of a simple compass.",
      "is used only as a backup instrument and provides no benefit over the simple magnetic compass in normal operation.",
      "measures true heading directly, eliminating the need to apply magnetic variation.",
    ],
    answer: 1,
    explain:
      "The remote flux valve is mounted away from the cockpit's magnetic interference (often in a wingtip or tail), and its signal is used to slave a gyro-stabilized display -- combining the flux valve's freedom from turning/acceleration errors with the gyro's smooth, stable presentation, giving a much more usable heading reference than reading a simple magnetic compass directly in the cockpit. Deviation correction is still required, since local interference at the flux valve's location can still exist.",
    reference: "TP 690 Section 3 - Aircraft Compass Systems, Gyromagnetic Remote Indicating Compass",
  },
];
