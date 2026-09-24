import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 47 -- Section 9: Instruments,
// fifth pass. Original questions written from the TC AIM 2026-1 and
// the TP 690 syllabus (topic headings only, no sample questions).
// Covers the barber pole (Vmo/Mmo) indication, TCAS traffic display
// symbology, ILS glideslope deviation on the ADI, marker beacon
// lights, DME slant range, engine vibration monitoring, oil
// pressure/temperature gauges, brake temperature indication, GPS
// altitude vs barometric altitude, PFD low-speed awareness, the
// altitude alerter, true airspeed derivation, EFIS reversionary
// mode, FMS-computed wind display, compass swing calibration, and
// fuel imbalance caution indication -- topics not yet addressed in
// batches 3, 16, 27, or 37. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_47_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The 'barber pole' -- a moving, diagonally striped marker displayed on a combined airspeed/Mach indicator or on a PFD speed tape -- indicates",
    options: [
      "the current Vmo/Mmo (maximum operating speed) limit, which moves with changing altitude and Mach number and must not be exceeded.",
      "the aircraft's current stall speed, a fixed reference that does not change with altitude, weight, or configuration.",
      "the minimum safe airspeed for the current phase of flight, functioning as a low-speed floor rather than a high-speed limit.",
      "the aircraft's best glide speed, a reference used only in the event of an engine failure or total power loss.",
    ],
    answer: 0,
    explain:
      "The barber pole marks the current Vmo/Mmo limit -- the maximum operating speed, which is often altitude- and Mach-dependent and therefore moves on the display as conditions change -- and must not be exceeded, distinguishing it from a stall speed indication (a low-speed limit that also varies with weight and configuration) or a best glide speed reference.",
    reference: "TC AIM AIR - Airspeed Indication",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a TCAS (Traffic Collision Avoidance System) display, a Traffic Advisory (TA) is typically distinguished from a Resolution Advisory (RA) by",
    options: [
      "symbol colour and shape, with a TA generally shown as a solid amber circle and an RA as a solid red square, reflecting the RA's greater urgency and its associated vertical guidance.",
      "identical symbology for both, since TCAS displays are not designed to visually differentiate between an advisory and a resolution-level alert.",
      "a TA appearing only in text form with no graphical symbol, while an RA is the only alert type shown as a symbol on the traffic display.",
      "colour alone, with both TA and RA traffic depicted using the same shape and differing only in a barely perceptible shade of the same colour.",
    ],
    answer: 0,
    explain:
      "TCAS traffic symbology typically differentiates a Traffic Advisory, commonly shown as a solid amber circle indicating traffic that warrants increased vigilance, from a Resolution Advisory, commonly shown as a solid red square indicating traffic requiring an immediate vertical avoidance maneuver -- the two are deliberately distinguished by both colour and shape, not left visually identical or limited to text-only alerting.",
    reference: "TC AIM AIR - TCAS/ACAS Display",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On an attitude director indicator (ADI) during an ILS approach, glideslope deviation is typically displayed as",
    options: [
      "a vertically moving pointer or diamond alongside the attitude display, indicating the aircraft's position above or below the desired glidepath.",
      "a horizontally moving pointer only, since glideslope deviation is conventionally displayed exclusively on the horizontal situation indicator rather than the ADI.",
      "a simple flag that appears only once the aircraft has descended below the decision altitude, providing no indication before that point.",
      "an audible tone exclusively, since glideslope deviation has traditionally never been depicted with any visual symbol on the ADI.",
    ],
    answer: 0,
    explain:
      "Glideslope deviation on an ADI is typically shown as a vertically moving pointer or diamond positioned alongside the attitude display, indicating whether the aircraft is above or below the desired glidepath -- this is a continuous visual indication available throughout the approach, not a horizontal-only display, an audible-only cue, or something that appears only near decision altitude.",
    reference: "TC AIM AIR - ILS Instrument Presentation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Marker beacon indicator lights in the cockpit, historically used during an ILS approach, illuminate to indicate passage over",
    options: [
      "the outer marker, middle marker, or (where installed) inner marker, each triggering a distinctly coloured light along with a corresponding audio tone.",
      "any point along the final approach course, since marker beacon lights illuminate continuously and provide no positional distinction whatsoever.",
      "the runway threshold only, since marker beacons are installed solely at the threshold and nowhere else along the approach.",
      "the missed approach point exclusively, with no indication provided at any earlier point during the approach.",
    ],
    answer: 0,
    explain:
      "Marker beacon lights illuminate as the aircraft passes over ground-based marker beacon transmitters positioned along the ILS approach course -- typically the outer marker and middle marker, and an inner marker where installed -- with each triggering a distinctly coloured light (and corresponding audio tone) rather than a single continuous or threshold-only indication.",
    reference: "TC AIM AIR - Marker Beacons",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "DME (Distance Measuring Equipment) provides the pilot with slant range distance to the station, which means that",
    options: [
      "at close range and high altitude, the DME reading can noticeably exceed the actual horizontal (ground) distance to the station, since slant range includes the aircraft's altitude component.",
      "DME always reads exactly the horizontal ground distance to the station, with altitude having no effect on the displayed value under any circumstance.",
      "DME distance is entirely independent of the aircraft's position relative to the station, since the equipment measures elapsed time rather than any form of distance.",
      "slant range and ground distance differ only when the aircraft is flying away from the station, never when directly overhead or approaching it.",
    ],
    answer: 0,
    explain:
      "DME measures the direct line-of-sight (slant range) distance between the aircraft and the ground station, which includes a vertical (altitude) component -- so at close range and high altitude, the displayed distance can noticeably exceed the actual horizontal ground distance, an effect that is most pronounced near the station and diminishes as ground distance increases relative to altitude.",
    reference: "TC AIM AIR - DME",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An engine vibration monitoring gauge, found on many turbine-powered aircraft, is used primarily to",
    options: [
      "alert the crew to abnormal mechanical vibration levels that may indicate developing engine or component damage, such as a bird strike, fan blade damage, or bearing wear.",
      "measure engine oil pressure, a function otherwise performed exclusively by a completely unrelated oil pressure gauge with no vibration-sensing capability.",
      "display outside air temperature at altitude, a parameter unrelated to engine mechanical condition or vibration levels.",
      "indicate fuel flow rate to each engine, a parameter that vibration monitoring equipment is not designed to measure.",
    ],
    answer: 0,
    explain:
      "An engine vibration monitoring gauge alerts the crew to abnormal mechanical vibration levels, which can indicate developing engine or component damage such as fan blade damage from a bird strike or bearing wear -- it is a distinct instrument from oil pressure, outside air temperature, or fuel flow indication, each of which measures an entirely different engine or environmental parameter.",
    reference: "TC AIM AIR - Engine Instrumentation",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Oil pressure and oil temperature gauges on a piston or turbine engine are monitored by the pilot primarily to",
    options: [
      "confirm that the engine's lubrication system is functioning within normal limits, since abnormal readings can indicate developing mechanical problems such as pump failure, oil leaks, or blockages.",
      "determine the aircraft's current fuel quantity, since oil pressure and fuel quantity are measured using the same sensing system on most aircraft.",
      "indicate the position of the landing gear, a function performed by an entirely separate indicating system unrelated to engine lubrication.",
      "measure cabin pressurization status, a parameter unrelated to the engine's internal lubrication system.",
    ],
    answer: 0,
    explain:
      "Oil pressure and oil temperature gauges allow the pilot to confirm the engine's lubrication system is operating within normal limits, since abnormal readings -- low pressure, high temperature, or erratic indications -- can signal developing mechanical problems such as oil pump failure, leaks, or blockages, long before a more serious failure occurs; they are unrelated to fuel quantity, landing gear position, or cabin pressurization, each of which is monitored by its own dedicated system.",
    reference: "TC AIM AIR - Engine Instrumentation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A brake temperature indicating system, found on many transport aircraft, is primarily intended to help the crew",
    options: [
      "avoid excessively hot brakes before a subsequent takeoff (or in the event a rejected takeoff or heavy landing has generated significant brake heat), reducing the risk of brake fire or fuse plug tire deflation.",
      "monitor engine exhaust gas temperature, a parameter unrelated to the wheel brakes and instead displayed on a separate dedicated gauge.",
      "determine outside air temperature at the current cruising altitude, a function entirely unrelated to the aircraft's wheel brakes.",
      "measure cabin temperature for passenger comfort, a parameter unrelated to brake system heat generated during ground operations.",
    ],
    answer: 0,
    explain:
      "A brake temperature indicating system helps the crew avoid dispatching with excessively hot brakes -- particularly relevant after a rejected takeoff, a heavy landing, or extensive ground braking -- since overheated brakes can pose a fire risk or cause fuse plugs to deflate tires; it is unrelated to engine EGT, outside air temperature, or cabin temperature, each monitored by separate systems.",
    reference: "TC AIM AIR - Brake Temperature Indication",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "GPS (GNSS)-derived altitude, as distinguished from barometric altitude displayed on the primary altimeter, is generally",
    options: [
      "not used for terrain and obstacle vertical separation, since GPS altitude is referenced to an ellipsoid or geoid model rather than the local barometric pressure datum that separation standards are built around.",
      "identical in every respect to barometric altitude, making the two values fully interchangeable for all separation and terrain clearance purposes.",
      "always more accurate than barometric altitude for terrain clearance, which is why regulatory separation standards are based entirely on GPS altitude rather than barometric altitude.",
      "unavailable on any aircraft equipped with a GNSS receiver, since altitude information cannot be derived from satellite navigation signals under any circumstance.",
    ],
    answer: 0,
    explain:
      "GPS (GNSS)-derived altitude is referenced to a geodetic model (an ellipsoid or geoid) rather than the local barometric pressure datum that vertical separation and terrain clearance standards are built around, so it is generally not used directly for terrain and obstacle vertical separation despite being available from the GNSS receiver -- the two altitude sources are not simply interchangeable, and barometric altitude, not GPS altitude, remains the primary reference for separation purposes.",
    reference: "TC AIM AIR - GNSS Altitude",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a modern PFD, a low-speed awareness indication (such as a red or amber band appearing at the bottom of the airspeed tape) is intended to",
    options: [
      "give the pilot a continuous visual cue of proximity to a low-speed limit (such as stall speed or minimum maneuvering speed) well before an aural stall warning would activate.",
      "replace the need for any aural stall warning system entirely, since the visual band alone is considered sufficient without any accompanying audible alert.",
      "indicate an overspeed condition, functioning identically to the barber pole marking the high-speed Vmo/Mmo limit.",
      "display the aircraft's current groundspeed rather than any speed limit or margin, a value unrelated to stall or low-speed awareness.",
    ],
    answer: 0,
    explain:
      "A low-speed awareness band on the PFD speed tape gives the pilot a continuous visual cue of proximity to a low-speed limit, complementing (rather than replacing) an aural stall warning system that typically activates closer to the actual stall -- it is a low-speed indication distinct from the high-speed barber pole, and it displays a speed margin or limit rather than groundspeed.",
    reference: "TC AIM AIR - PFD Speed Awareness",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An altitude alerter (altitude preselect system) provides the flight crew with",
    options: [
      "an aural and/or visual alert as the aircraft approaches a preselected target altitude, and again if the aircraft subsequently deviates from that altitude by a specified margin.",
      "no alerting capability whatsoever, since altitude alerters are purely mechanical selector knobs with no associated aural or visual warning function.",
      "a warning that activates only during takeoff and landing, with no function once the aircraft has reached its assigned cruising altitude.",
      "guidance restricted to lateral navigation, since altitude alerters are, despite their name, unrelated to vertical flight path monitoring.",
    ],
    answer: 0,
    explain:
      "An altitude alerter provides an aural and/or visual alert as the aircraft approaches a preselected target altitude, and typically alerts again if the aircraft subsequently deviates from that altitude by a specified margin, helping the crew catch level-off errors or unintended altitude deviations -- it is not merely a passive selector knob, its function is not restricted to takeoff and landing, and it directly concerns vertical, not lateral, flight path monitoring.",
    reference: "TC AIM AIR - Altitude Alerting System",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "True airspeed (TAS) is derived from calibrated airspeed (CAS) by applying a correction for",
    options: [
      "air density, which is determined from pressure altitude and outside air temperature, since CAS reads increasingly low relative to true airspeed as air density decreases with altitude.",
      "magnetic variation, since TAS is fundamentally a heading-related correction rather than a speed correction based on air density.",
      "compass deviation, a correction that applies to heading indication rather than to the relationship between airspeed values.",
      "runway slope, a factor relevant to takeoff and landing performance calculations rather than to the derivation of true airspeed in flight.",
    ],
    answer: 0,
    explain:
      "True airspeed is obtained by correcting calibrated airspeed for air density, which is determined from pressure altitude and outside air temperature -- as air density decreases with increasing altitude, CAS reads increasingly low relative to TAS, requiring this correction (commonly a function performed automatically by an air data computer or Machmeter/TAS gauge); magnetic variation, compass deviation, and runway slope are unrelated corrections used for entirely different purposes.",
    reference: "TC AIM AIR - Airspeed Definitions",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a multi-screen EFIS suite, a reversionary (or composite) display mode is designed so that, following the failure of one display unit,",
    options: [
      "critical flight information from the failed display can be reconfigured onto a remaining, still-functioning screen, preserving the crew's access to essential flight data.",
      "all remaining displays go blank as well, since EFIS systems are designed to fail as a single unit rather than degrade individually.",
      "the aircraft's autopilot is automatically and permanently disconnected, with no possibility of re-engagement for the remainder of the flight.",
      "only engine instrument data remains available, with all primary flight information such as attitude and airspeed becoming permanently unavailable.",
    ],
    answer: 0,
    explain:
      "A reversionary (composite) EFIS display mode allows critical flight information normally shown on a failed display unit to be reconfigured onto a remaining functional screen, preserving the crew's access to essential data such as attitude, airspeed, and altitude -- it does not cause a cascading failure of all displays, force a permanent autopilot disconnect, or leave the crew with only engine data and no primary flight information.",
    reference: "TC AIM AIR - EFIS Reversionary Mode",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A wind vector display on a modern Navigation Display (ND), computed by the aircraft's FMS or air data/inertial systems, provides the pilot with",
    options: [
      "the current wind direction and speed relative to the aircraft's position, derived from the difference between the aircraft's true airspeed/heading and its actual groundspeed/track.",
      "a forecast of wind conditions at the destination airport only, with no indication of the wind actually being experienced by the aircraft at its current position.",
      "cabin airflow information for the environmental control system, a parameter unrelated to outside wind conditions.",
      "engine bleed air flow direction, a parameter measured and displayed by an entirely different system unrelated to navigation.",
    ],
    answer: 0,
    explain:
      "A wind vector display on the ND is computed from the difference between the aircraft's true airspeed and heading (its motion through the air mass) and its actual groundspeed and track (its motion over the ground), giving the pilot the current wind direction and speed being experienced -- it reflects present conditions at the aircraft's position, not a destination forecast, and is unrelated to cabin airflow or engine bleed air systems.",
    reference: "TC AIM AIR - FMS Wind Display",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A periodic 'compass swing,' performed to check and adjust the compass correction card of a magnetic compass, is necessary primarily because",
    options: [
      "local magnetic influences from the aircraft's own structure, electrical systems, and equipment change over time, so deviation values must be periodically re-verified and the correction card updated accordingly.",
      "the Earth's magnetic field is considered to change too rapidly for any correction card to remain useful for more than a single flight.",
      "compass deviation is entirely random and unpredictable, making periodic swings pointless since no consistent correction can ever be derived.",
      "a compass swing is required only once, at the time of aircraft manufacture, with no need for any subsequent re-verification throughout the aircraft's service life.",
    ],
    answer: 0,
    explain:
      "A compass swing is performed periodically because local magnetic influences from the aircraft's own structure, wiring, and installed equipment can change over time (for example after equipment changes or airframe repairs), so the deviation values recorded on the compass correction card must be re-verified and updated -- deviation is a systematic, not purely random, effect, and a single swing at manufacture is not considered adequate for the aircraft's entire service life.",
    reference: "TC AIM AIR - Compass Swing",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A fuel imbalance caution indication, found on aircraft with independently monitored left and right fuel tank quantities, alerts the crew when",
    options: [
      "the quantity difference between corresponding tanks (such as left and right main tanks) exceeds a specified threshold, since a significant imbalance can affect controllability and may require crossfeed or other corrective action.",
      "the total fuel quantity on board falls below the amount required to reach the destination, a distinct alert unrelated to any left/right quantity comparison.",
      "the fuel temperature approaches the freezing point of the fuel being carried, a thermal condition unrelated to any quantity comparison between tanks.",
      "an engine fails, since fuel imbalance indications are triggered exclusively by engine failure rather than by any actual difference in tank quantities.",
    ],
    answer: 0,
    explain:
      "A fuel imbalance caution alerts the crew when the quantity difference between corresponding fuel tanks (such as left and right main tanks) exceeds a specified threshold, since a significant imbalance can affect lateral controllability and may call for crossfeed or other corrective action -- this is distinct from a low total fuel quantity warning, a fuel temperature alert, or an engine failure indication, each triggered by an entirely different condition.",
    reference: "TC AIM AIR - Fuel Quantity Indicating System",
  },
];
