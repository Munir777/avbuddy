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
      "show a decreasing indicated airspeed as the aircraft climbs.",
      "continue to read accurately, since the drain hole compensates for the pitot blockage.",
      "immediately drop to zero and remain there for the rest of the flight.",
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
      "eliminating the need for any connection to the static system at all.",
      "deriving its reading exclusively from GPS altitude rate, independent of pressure.",
      "using an accelerometer-driven pump to reduce the lag that a conventional VSI exhibits at the start of a climb or descent.",
      "displaying vertical speed as a digital Mach number rather than feet per minute.",
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
      "measures the aircraft's rate of climb or descent, not its height.",
      "measures altitude above mean sea level directly, with no need for an altimeter setting.",
      "is only usable above 18,000 ft, within the Standard Pressure Region.",
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
      "TAT is unaffected by airspeed and equals static air temperature at all times.",
      "TAT is measured only on the ground, before ram effects begin.",
      "TAT is always lower than static air temperature at any airspeed.",
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
      "vertically mounted and senses pitch rate rather than yaw rate.",
      "not a gyroscopic instrument at all, but a purely pendulous device.",
      "canted, so it senses both roll rate and yaw rate, giving an earlier indication of a turn being entered.",
      "mounted flat, sensing yaw rate only, identical to the turn-and-bank indicator.",
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
      "errors only when the aircraft is stationary on the ground, never in flight.",
      "no drift of any kind, since a gyroscope is a perfectly stable reference once aligned.",
      "acceleration and turning errors identical to those of a magnetic compass, since it is slaved directly to the compass.",
      "apparent and real precession, which cause it to drift from the correct heading over time and require periodic realignment with the magnetic compass.",
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
      "the gyroscopic rigidity of a gyro spinning about a vertical axis, which tends to remain fixed in space as the aircraft pitches and rolls around it.",
      "direct sensing of the true horizon by an optical sensor.",
      "static pressure changes sensed through the pitot-static system.",
      "GPS-derived vertical speed and track data exclusively.",
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
      "moves the flight controls directly to follow the selected mode, exactly as an autopilot does.",
      "computes and displays pitch/roll command guidance (command bars) for the pilot to follow manually, without itself moving the flight controls.",
      "can only be used once the autopilot has been engaged, and never independently of it.",
      "provides lateral guidance only, with no pitch guidance capability.",
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
      "displaying only vertical navigation information, with no lateral course information at all.",
      "replacing the attitude indicator entirely, since it also shows bank angle.",
      "eliminating the need for the aircraft to have a magnetic compass installed.",
      "integrating heading, selected course, course deviation, and (for an ILS) glideslope deviation into a single combined display, improving situational awareness.",
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
      "replaces the need for a paper or electronic flight plan to be filed with ATS.",
      "monitors engine parameters exclusively and alerts the crew to exceedances.",
      "manages route/navigation data, performance calculations, and guidance, typically coupled to the autopilot and autothrottle to fly the planned route and profile.",
      "provides only weather radar data to the flight deck displays.",
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
      "monitor only cabin pressurization, with engine parameters shown elsewhere.",
      "are alternate names for the same weather radar display technology.",
      "provide lateral and vertical navigation guidance to the autopilot.",
      "centralize engine and aircraft system monitoring and alerting onto electronic displays, replacing a large number of individual gauges and annunciator lights.",
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
      "the rotational speed of the low-pressure spool (fan/LP compressor) and the high-pressure spool (HP compressor/core), each expressed as a percentage of a rated maximum.",
      "fuel flow and oil pressure, respectively, unrelated to rotational speed.",
      "the aircraft's indicated airspeed and true airspeed, respectively.",
      "the speed of the left engine and the speed of the right engine, respectively.",
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
      "turboprop engines have no tachometer, so torque is the only rotational parameter available.",
      "with a constant-speed propeller holding RPM essentially constant across a wide range of power settings, RPM alone does not indicate how much power the engine is actually delivering -- torque does.",
      "torquemeters are required only during engine start, and are disregarded thereafter.",
      "torque directly measures fuel flow, making a separate fuel flow gauge unnecessary.",
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
      "measure the temperature of the fuel entering the combustion chamber.",
      "indicate cabin temperature, since ITT probes are also used for pressurization control.",
      "protect the turbine section from thermal damage by keeping gas temperature within the engine's certified limits.",
      "indicate the outside air temperature at the engine's operating altitude.",
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
      "the difference between true north and magnetic north at the aircraft's present position.",
      "acceleration errors that occur only while the aircraft is turning through north or south.",
      "the aircraft's true airspeed, which affects how the compass card is read.",
      "local magnetic interference from the aircraft's own structure, wiring, and equipment, which is compensated for as far as practical during a compass swing.",
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
      "accelerating causes the compass to indicate a turn toward south, and decelerating causes it to indicate a turn toward north.",
      "the error only occurs on north or south headings, never on east or west.",
      "acceleration and deceleration produce no compass error at all on east or west headings.",
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
