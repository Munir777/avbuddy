import type { Question } from "../../../types";

// Canada TC ATPL - Section 9: Instruments
// Batch 87 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_87_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A 'declutter' function, available on many modern EFIS Navigation Displays, allows the crew to",
    options: [
      "switch the display from a moving map to a purely numeric text readout with no graphical elements, regardless of aircraft type or avionics suite",
      "increase the brightness of all displayed symbols simultaneously, which overlooks the technical considerations that actually govern how this indication is generated",
      "remove selected categories of map symbology (such as airways, waypoint labels, or terrain shading) from the display to reduce visual clutter and highlight only the most relevant information",
      "permanently delete waypoints from the FMS navigation database, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 2,
    explain:
      "A declutter function lets the crew selectively remove categories of map symbology -- such as airways, waypoint labels, or terrain shading -- from the Navigation Display, reducing visual clutter so the most operationally relevant information stands out, without affecting the underlying FMS data.",
    reference: "TP 690 -- Instruments: EFIS declutter function",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An autopilot's Control Wheel Steering (CWS) mode allows a pilot to",
    options: [
      "automatically execute a missed approach without any pilot action, which overlooks the technical considerations that actually govern how this indication is generated",
      "disconnect the autopilot completely, with no further autopilot function available until re-engaged, which overlooks the technical considerations that actually govern how this indication is generated",
      "program a complete lateral and vertical flight plan without any pilot control input, which overlooks the technical considerations that actually govern how this indication is generated",
      "manually maneuver the aircraft by hand while the autopilot servos provide pitch and roll trim/stability assistance, sensing the pilot's control inputs rather than overriding them",
    ],
    answer: 3,
    explain:
      "In Control Wheel Steering, the pilot manually flies the aircraft by hand, and the autopilot's servos sense the resulting control inputs and provide trim and stability assistance, remaining engaged in a limited role rather than disconnecting entirely or flying a pre-programmed path.",
    reference: "TP 690 -- Instruments: Autopilot Control Wheel Steering mode",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "During a CAT III autoland approach, the autopilot's 'flare' mode is engaged to",
    options: [
      "automatically reduce the aircraft's pitch attitude and rate of descent just before touchdown, smoothly transitioning from the approach glidepath to a controlled landing",
      "retract the landing gear automatically after touchdown, which overlooks the technical considerations that actually govern how this indication is generated",
      "disconnect all flight director guidance immediately upon reaching decision height, which overlooks the technical considerations that actually govern how this indication is generated",
      "increase engine thrust sharply to execute an automatic go-around, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 0,
    explain:
      "Flare mode automatically reduces the rate of descent and adjusts pitch attitude just before touchdown, transitioning the aircraft from the ILS glidepath to a smooth, controlled landing, as part of the sequence of automatic modes used during a CAT III autoland.",
    reference: "TP 690 -- Instruments: Autoland flare mode",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a standard direct-reading magnetic compass, the heading is read where the compass card aligns with a fixed lubber line; because the magnet-and-card assembly itself remains oriented toward magnetic north while the aircraft (and the case around the card) turns, a pilot must",
    options: [
      "manually rotate the card themselves before every heading change, which overlooks the technical considerations that actually govern how this indication is generated",
      "understand that the card appears to rotate opposite to the aircraft's turn, since it is the case, not the card, that turns with the aircraft",
      "read the compass exactly as they would a rotating heading bug, since the card moves in the same direction as the aircraft's turn, regardless of aircraft type or avionics suite",
      "disregard the compass entirely whenever the aircraft is turning, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 1,
    explain:
      "The compass card and magnet assembly remain oriented toward magnetic north while the case (fixed to the aircraft) turns around it; as a result, the card appears to rotate opposite to the aircraft's actual turn direction as seen against the fixed lubber line, which pilots must understand when interpreting the reading.",
    reference: "TP 690 -- Instruments: Magnetic compass card-reading mechanism",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An engine oil quantity gauge, as distinct from the oil pressure and oil temperature gauges, allows the crew to",
    options: [
      "monitor hydraulic fluid levels in the landing gear system, which overlooks the technical considerations that actually govern how this indication is generated",
      "directly measure the engine's internal combustion temperature, which overlooks the technical considerations that actually govern how this indication is generated, regardless of aircraft type or avionics suite",
      "monitor the volume of oil remaining in the engine's oil reservoir/tank, helping detect a developing leak or excessive consumption before it affects oil pressure",
      "determine the aircraft's remaining fuel endurance, which overlooks the technical considerations that actually govern how this indication is generated, regardless of aircraft type or avionics suite",
    ],
    answer: 2,
    explain:
      "An oil quantity gauge monitors the volume of oil remaining in the engine's reservoir, allowing the crew to notice a developing leak or excessive consumption at an early stage, potentially before the effect becomes severe enough to show up as an oil pressure abnormality.",
    reference: "TP 690 -- Instruments: Engine oil quantity gauge",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A duct (bleed air) temperature gauge, monitoring the temperature of conditioned air supplied to the cabin, is used by the crew primarily to",
    options: [
      "indicate the temperature of the engine's turbine section, which overlooks the technical considerations that actually govern how this indication is generated",
      "measure the outside static air temperature at cruise altitude, which overlooks the technical considerations that actually govern how this indication is generated",
      "replace the need for a cabin altitude indicator entirely, which overlooks the technical considerations that actually govern how this indication is generated",
      "verify that the air conditioning/pressurization system is supplying air within a safe temperature range, avoiding both an uncomfortably cold cabin and a risk of duct overheat",
    ],
    answer: 3,
    explain:
      "A duct temperature gauge lets the crew verify that conditioned air being supplied to the cabin remains within a safe operating range, avoiding an uncomfortably cold cabin on one hand and the risk of a duct overheat condition on the other.",
    reference: "TP 690 -- Instruments: Duct (bleed air) temperature gauge",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A crew- or computer-set 'bug' (target reference marker) on an N1 gauge, distinct from the gauge's fixed maximum (redline) marking, indicates",
    options: [
      "the specific N1 setting required to achieve the rated thrust appropriate for that day's conditions (such as temperature and pressure altitude) and the selected thrust mode",
      "a fixed value that never changes regardless of outside air temperature or selected thrust setting, which overlooks the technical considerations that actually govern how this indication is generated",
      "the maximum structural N1 limit that must never be exceeded under any circumstance, which overlooks the technical considerations that actually govern how this indication is generated",
      "the N1 value at which the engine will automatically shut down, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 0,
    explain:
      "Unlike the fixed redline representing an absolute structural limit, an N1 bug is a variable target reference, computed for the day's specific conditions (temperature, pressure altitude) and selected thrust mode, showing the crew the N1 setting needed to achieve the appropriate rated thrust.",
    reference: "TP 690 -- Instruments: N1 thrust reference bug",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An angle of attack (AoA) indexer, a simplified visual display sometimes using a lighted chevron or donut symbol rather than a numeric readout, is designed to",
    options: [
      "display engine thrust settings rather than any aerodynamic parameter, which overlooks the technical considerations that actually govern how this indication is generated",
      "give the pilot an immediate, intuitive visual cue of AoA relative to the optimum approach reference, without requiring interpretation of a numeric value",
      "replace the stall warning horn entirely, since it always activates before the horn does, which overlooks the technical considerations that actually govern how this indication is generated",
      "function only when the landing gear is retracted, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 1,
    explain:
      "An AoA indexer presents a simplified, intuitive visual symbol -- rather than a numeric value -- giving the pilot an immediate cue of angle of attack relative to a reference (such as the optimum approach AoA), making rapid interpretation easier than reading a numeric gauge.",
    reference: "TP 690 -- Instruments: Angle of attack indexer",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An engine anti-ice indication light, illuminating on the flight deck when engine inlet anti-ice is selected or operating, allows the crew to",
    options: [
      "determine the outside air temperature without reference to any other instrument, which overlooks the technical considerations that actually govern how this indication is generated",
      "monitor cabin pressurization status, which overlooks the technical considerations that actually govern how this indication is generated",
      "confirm the status of engine inlet ice protection, which is monitored and displayed separately from airframe (wing/tail) anti-ice indication",
      "confirm that the aircraft's windshield heat is functioning, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 2,
    explain:
      "An engine anti-ice indication light confirms the status of engine inlet ice protection specifically, which is monitored and annunciated separately from airframe (wing and tail) anti-ice indication, since the two systems protect different parts of the aircraft and may be selected independently.",
    reference: "TP 690 -- Instruments: Engine anti-ice indication",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On many EICAS/ECAM-equipped aircraft, the display architecture generally provides a primary engine/warning display that is continuously shown, along with",
    options: [
      "a page dedicated exclusively to displaying the aircraft's registration and flight number, which overlooks the technical considerations that actually govern how this indication is generated",
      "no other display capability, since only the primary engine parameters can ever be shown, which overlooks the technical considerations that actually govern how this indication is generated",
      "a display that shows only weather radar returns, with no other system information available, which overlooks the technical considerations that actually govern how this indication is generated",
      "a separate, selectable system or synoptic page display that the crew can call up to review a specific aircraft system (such as hydraulics, electrics, or fuel) in more detail",
    ],
    answer: 3,
    explain:
      "Alongside a continuously displayed primary engine/warning page, EICAS/ECAM architecture generally provides selectable system or synoptic pages that the crew can call up to review a specific aircraft system, such as hydraulics, electrics, or fuel, in greater detail.",
    reference: "TP 690 -- Instruments: EICAS/ECAM primary and system pages",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A groundspeed readout, typically displayed on the Navigation Display or Flight Management System, is distinguished from true airspeed (TAS) in that groundspeed",
    options: [
      "represents the aircraft's actual speed over the ground, incorporating the effect of wind, whereas TAS represents speed relative to the surrounding air mass alone",
      "is always identical to TAS, since both are computed from the same air data inputs, regardless of aircraft type or avionics suite",
      "can only be displayed when the aircraft is below 10,000 feet, a characterization that does not match how this instrument or system actually functions",
      "is derived exclusively from the pitot-static system, with no reference to navigation sensors, regardless of aircraft type or avionics suite",
    ],
    answer: 0,
    explain:
      "Groundspeed reflects the aircraft's actual speed over the ground, incorporating the effect of wind, and is generally derived from navigation sensors such as GNSS or an inertial system, whereas TAS reflects speed relative to the surrounding air mass alone, independent of wind.",
    reference: "TP 690 -- Instruments: Groundspeed versus true airspeed display",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A flight deck oxygen system quantity (pressure) gauge, monitoring the crew's supplemental/emergency oxygen supply, allows the crew to",
    options: [
      "determine the outside air temperature at the current cruising altitude, which overlooks the technical considerations that actually govern how this indication is generated",
      "verify sufficient oxygen quantity remains available for the flight, and to detect a leak or abnormally low quantity before it becomes a problem",
      "monitor the status of the passenger cabin's emergency lighting system, which overlooks the technical considerations that actually govern how this indication is generated",
      "measure the cabin's rate of pressurization change, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 1,
    explain:
      "An oxygen system quantity gauge lets the crew verify that sufficient supplemental or emergency oxygen remains available for the flight and helps detect a leak or abnormally low quantity before it develops into an operational problem.",
    reference: "TP 690 -- Instruments: Flight deck oxygen quantity gauge",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "GPWS (Ground Proximity Warning System) Mode 2, distinct from Mode 1, is specifically designed to warn the crew of",
    options: [
      "an excessive bank angle during a turn, which overlooks the technical considerations that actually govern how this indication is generated",
      "an unsafe landing gear configuration during approach, which overlooks the technical considerations that actually govern how this indication is generated",
      "an excessive rate of closure with terrain, such as during a rapid climb or descent, or when flying at high speed toward rising terrain",
      "a descent below the glideslope during an ILS approach, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 2,
    explain:
      "GPWS Mode 2 is specifically designed to warn of an excessive rate of closure with terrain -- for example, when flying at high speed toward rapidly rising terrain -- distinguishing it from Mode 1, which addresses excessive descent rate relative to terrain clearance.",
    reference: "TP 690 -- Instruments: GPWS Mode 2",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "For a Category II or Category III approach, a crew-set decision height (DH) bug or digital reference displayed alongside the radio altimeter readout on the PFD allows the crew to",
    options: [
      "display the destination aerodrome's field elevation exclusively, which overlooks the technical considerations that actually govern how this indication is generated",
      "replace the barometric altimeter entirely for all phases of flight, which overlooks the technical considerations that actually govern how this indication is generated",
      "automatically extend the landing gear at the set altitude, which overlooks the technical considerations that actually govern how this indication is generated",
      "monitor radio height against the briefed decision height, supporting a timely decision to continue or execute a missed approach at the appropriate point",
    ],
    answer: 3,
    explain:
      "A crew-set DH bug or digital reference displayed with the radio altimeter readout lets the crew directly compare current radio height against the briefed decision height, supporting a timely, well-informed decision to continue the approach or execute a missed approach.",
    reference: "TP 690 -- Instruments: Radio altimeter decision height reference",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A yaw damper, a system distinct from the autopilot's pitch and roll functions, is generally engaged to",
    options: [
      "damp out unwanted yaw oscillations (such as Dutch roll), with its engagement status typically shown by a dedicated cockpit annunciation or switch position",
      "control the aircraft's pitch attitude during an approach, which overlooks the technical considerations that actually govern how this indication is generated, regardless of aircraft type or avionics suite",
      "automatically extend spoilers upon touchdown, which overlooks the technical considerations that actually govern how this indication is generated, regardless of aircraft type or avionics suite",
      "replace the rudder pedals entirely during cruise flight, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 0,
    explain:
      "A yaw damper works to damp out unwanted yaw oscillations, such as Dutch roll, operating independently of the autopilot's pitch and roll axes; its engagement status is generally shown by a dedicated cockpit annunciation or switch position.",
    reference: "TP 690 -- Instruments: Yaw damper indication",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The slip/skid indicator (inclinometer 'ball'), found alongside the turn rate needle on a turn-and-bank indicator or turn coordinator, works on the principle of",
    options: [
      "gyroscopic precession, identical to the turn needle's own operating principle, a description not supported by the applicable equipment design standards or normal practice",
      "a weighted ball moving within a curved, fluid-filled tube under the influence of gravity and centripetal acceleration, indicating whether the turn is coordinated, slipping, or skidding",
      "a pressure differential sensed from the pitot-static system, which overlooks the technical considerations that actually govern how this indication is generated",
      "magnetic deviation induced by the aircraft's electrical systems, which overlooks the technical considerations that actually govern how this indication is generated",
    ],
    answer: 1,
    explain:
      "The slip/skid indicator is a simple, non-gyroscopic instrument: a weighted ball inside a curved, fluid-filled tube responds to gravity and centripetal acceleration, moving to indicate whether a turn is properly coordinated, slipping toward the inside of the turn, or skidding toward the outside.",
    reference: "TP 690 -- Instruments: Slip/skid indicator (inclinometer)",
  },
];
