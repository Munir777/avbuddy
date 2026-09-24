import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 16 -- Section 3: Instruments,
// second pass. Original questions written from standard flight
// instrument principles and the TP 690 syllabus (topic headings only,
// no sample questions). Covers pitot-static system faults, gyroscopic
// principles, and glass cockpit/engine instrument topics not yet
// addressed in batch 3. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_16_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A static port becomes completely blocked in flight, while the pitot tube remains clear. As the aircraft subsequently climbs and descends, the altimeter and vertical speed indicator will",
    options: [
      "be unaffected in level flight but fail completely the moment any pitch change is made. This is the reasoning typically applied when troubleshooting this type of indication.",
      "continue to read accurately, since the altimeter and VSI are driven by pitot pressure, not static pressure.",
      "freeze at the readings held at the moment of blockage, since both instruments depend on static pressure alone.",
      "read progressively lower in altitude and higher in rate of climb the longer the blockage persists.",
    ],
    answer: 2,
    explain:
      "The altimeter and VSI both work entirely from static pressure -- the altimeter measures it directly, and the VSI measures its rate of change. With the static source blocked, both instruments are cut off from any new pressure information and simply freeze at whatever reading corresponded to the pressure trapped in the system at the moment of blockage, regardless of the aircraft's actual subsequent altitude changes.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static System",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "In an unpressurized aircraft, selecting the alternate static source (typically vented inside the cabin) after a primary static port blockage will generally cause the altimeter and airspeed indicator to read",
    options: [
      "exactly the same values as the primary static source, with no measurable difference between the two.",
      "an unpredictable, randomly fluctuating value with no consistent relationship to true outside static pressure. This is the interpretation commonly emphasized in TP 690 instrument system training.",
      "a slightly lower altitude and a slightly lower airspeed than actual, because cabin static pressure is usually somewhat higher than true outside static pressure.",
      "a slightly higher altitude and a slightly higher airspeed than actual, because cabin static pressure is usually somewhat lower than true outside static pressure.",
    ],
    answer: 3,
    explain:
      "Airflow over the fuselage typically creates a slight suction effect inside an unpressurized cabin, so cabin static pressure tends to read a little lower than the true outside static pressure. Because the altimeter interprets lower static pressure as higher altitude, and the airspeed indicator's calibration also shifts, both instruments generally read a bit higher than actual when the alternate (cabin) static source is selected -- a correction figure often published in the AFM for that configuration.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static System",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Pitot heat is provided primarily to",
    options: [
      "prevent ice from forming in or blocking the pitot tube, which would otherwise cause unreliable or lost airspeed indications.",
      "prevent condensation from forming on the outside of the windscreen during descent into warmer, more humid air.",
      "warm the cabin air supplied to passengers during cold-weather operations, unrelated to any flight instrument. This point is often highlighted during initial instrument systems training.",
      "de-ice the leading edge of the wing immediately adjacent to where the pitot tube is mounted.",
    ],
    answer: 0,
    explain:
      "The pitot tube's small opening is especially vulnerable to ice accretion in visible moisture and freezing temperatures; if it ices over, the airspeed indicator can freeze, read erroneously, or fail outright. Pitot heat -- an electrically heated probe -- exists specifically to keep that opening clear so airspeed indication remains reliable, and is functionally unrelated to cabin heating, windscreen anti-fogging, or wing leading-edge protection.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static System",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An Instantaneous Vertical Speed Indicator (IVSI) improves on a conventional VSI primarily by",
    options: [
      "replacing the calibrated leak entirely with a fully electronic pressure transducer that requires no static pressure input at all.",
      "incorporating an accelerometer that supplies an immediate response to a change in vertical speed, compensating for the inherent lag of the standard VSI's calibrated leak mechanism.",
      "displaying vertical speed in feet per minute rather than metres per minute, with no change to its internal mechanism.",
      "eliminating the need for any static pressure connection, relying instead entirely on GPS-derived altitude data. This consideration is particularly relevant during abnormal or non-standard operations.",
    ],
    answer: 1,
    explain:
      "A conventional VSI relies on a calibrated leak to sense the rate of static pressure change, which introduces a few seconds of lag -- the reading takes a moment to catch up when vertical speed changes abruptly. An IVSI adds an accelerometer-driven mechanism that responds immediately to the acceleration accompanying a pitch change, giving a much faster, near-instantaneous indication while still ultimately relying on the same static pressure system as its steady-state reference.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static Instruments",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "In a modern glass cockpit, standby (backup) flight instruments -- typically a standalone attitude indicator, airspeed indicator, and altimeter -- are provided primarily to",
    options: [
      "satisfy a purely cosmetic requirement with no functional role in any failure scenario.",
      "serve as the pilot's normal, everyday reference instruments, with the primary electronic displays reserved strictly for autopilot-coupled flight.",
      "give the crew basic attitude and pitot-static information that remains available even if the primary electronic displays and their associated systems fail or are lost.",
      "provide redundant navigation guidance only, with no attitude, airspeed, or altitude information included at all.",
    ],
    answer: 2,
    explain:
      "Standby instruments exist as a last line of defence: independent, typically self-powered (or on a separate electrical bus) instruments that keep giving the crew the core information -- attitude, airspeed, altitude -- needed to control the aircraft even if the primary electronic flight displays, their computers, or their main power source fail, which is exactly the scenario the normal PFD/ND displays cannot cover on their own.",
    reference: "TP 690 Section 3 - Instruments, Flight Instrument Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "QNH, QFE, and QNE are altimeter setting conventions distinguished as follows:",
    options: [
      "QNH and QFE both apply only above the transition level, while QNE applies only below it. This is generally addressed in the relevant section of the aircraft's systems manual. This is the kind of distinction examiners frequently probe during oral evaluations.",
      "QNH gives height above the aerodrome, QFE gives altitude above mean sea level, and QNE is used only below the transition altitude.",
      "QNH, QFE, and QNE all give exactly the same reading; they are simply three regional naming conventions for the same altimeter setting.",
      "QNH gives altitude above mean sea level, QFE gives height above the specific aerodrome, and QNE (standard pressure, 29.92 in. Hg / 1013.2 hPa) gives pressure altitude.",
    ],
    answer: 3,
    explain:
      "The three conventions serve different purposes: QNH, set into the altimeter subscale, makes the altimeter read altitude above mean sea level; QFE, less commonly used in Canada, makes it read height above a specific aerodrome (zero at touchdown); and QNE is the standard pressure setting (29.92 in. Hg / 1013.2 hPa) that produces pressure altitude, used above the transition altitude for vertical separation regardless of local sea-level pressure.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static Instruments",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The fundamental gyroscopic property of 'rigidity in space,' relied upon by instruments such as the attitude indicator and heading indicator, refers to a spinning gyroscope's tendency to",
    options: [
      "maintain the orientation of its spin axis in space unless acted upon by an external force, providing a stable attitude or heading reference.",
      "reverse the direction of its spin axis automatically whenever the aircraft changes heading by more than 90 degrees. This warrants particular attention when reviewing the relevant systems schematic.",
      "spin at a constantly increasing rate unless deliberately slowed by an external mechanism.",
      "gradually align its spin axis with the earth's true north pole over time, with no external force required.",
    ],
    answer: 0,
    explain:
      "Rigidity in space is the basic property that makes gyroscopic instruments useful: a rapidly spinning rotor resists any change to the orientation of its spin axis unless an external torque is applied to it, which is what lets an attitude indicator's gyro stay aligned with the horizontal plane (or a heading indicator's gyro stay aligned with a chosen heading) as the aircraft pitches, rolls, or yaws around it.",
    reference: "TP 690 Section 3 - Instruments, Gyroscopic Instruments",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Beyond mechanical precession caused by bearing friction, a heading indicator also exhibits 'apparent' precession (sometimes called earth-rate drift or transport wander), which arises because",
    options: [
      "apparent precession only occurs in the southern hemisphere, and is absent for any heading indicator operated north of the equator.",
      "the gyro's spin axis stays fixed relative to inertial space while the earth rotates and the aircraft moves over its curved surface beneath it, so the gyro appears, relative to the local horizontal and meridian, to drift even though its axis has not actually changed orientation in space.",
      "the earth's magnetic field directly exerts a torque on the gyro's spin axis, physically forcing it to rotate at the same rate as the earth.",
      "apparent precession is caused exclusively by temperature changes in the gyro's lubricant, unrelated to the earth's rotation or the aircraft's movement.",
    ],
    answer: 1,
    explain:
      "Apparent precession isn't a real physical torque acting on the gyro at all -- the gyro's spin axis genuinely stays fixed in inertial space, as rigidity in space predicts. But because the earth rotates underneath it, and the local reference plane (the horizontal, and true north) both shift with the earth's rotation and with the aircraft's own movement across the globe, the gyro's indication appears to drift relative to that local reference over time, requiring periodic manual realignment against a magnetic reference.",
    reference: "TP 690 Section 3 - Instruments, Gyroscopic Instruments",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A ring laser gyro (RLG), used in many modern inertial reference systems, senses rotation",
    options: [
      "using a conventional spinning mechanical rotor, identical in principle to a classic attitude gyro but constructed from lighter materials.",
      "by directly measuring changes in the earth's magnetic field strength as the aircraft's heading changes.",
      "by measuring the difference in travel time between two laser beams sent in opposite directions around a closed loop, without any spinning mechanical rotor at all.",
      "using a pendulum suspended in a laser-illuminated chamber, whose swing angle indicates the rate of rotation. This consideration is particularly relevant during abnormal or non-standard operations.",
    ],
    answer: 2,
    explain:
      "A ring laser gyro has no spinning mass at all -- it works by sending two laser beams around a closed optical path in opposite directions and measuring the tiny difference in their travel time (or resulting frequency shift) caused by rotation of the loop itself, a phenomenon known as the Sagnac effect. Having no moving rotor eliminates the bearing friction and wear that limit conventional mechanical gyros, which is part of why laser and fibre-optic gyros became standard in modern inertial reference systems.",
    reference: "TP 690 Section 3 - Instruments, Gyroscopic Instruments",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A cabin differential pressure gauge, found in pressurized aircraft, indicates",
    options: [
      "the difference between cabin temperature and outside air temperature, used to set the cabin's environmental control system. This is consistent with the general design philosophy applied across most transport-category aircraft.",
      "the aircraft's true altitude above mean sea level, independent of any cabin pressurization system.",
      "the rate of cabin altitude change only, with no indication of the absolute pressure differential at any given moment.",
      "the difference between cabin pressure and outside ambient (static) pressure, which is monitored to stay within the airframe's structural pressurization limits.",
    ],
    answer: 3,
    explain:
      "A pressurized fuselage is a structural pressure vessel with a certified maximum differential between the pressure inside the cabin and the (much lower) pressure outside at altitude. The cabin differential pressure gauge displays exactly that difference, letting the crew (and the pressurization system itself) confirm the structure is being kept within its certified limits rather than over-pressurized.",
    reference: "TP 690 Section 3 - Instruments, Aircraft Systems Instruments",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Many transport aircraft fuel quantity indicating systems measure the fuel remaining in each tank using",
    options: [
      "capacitance-type probes, whose electrical capacitance changes with the level (and dielectric properties) of the fuel surrounding them, converted electronically into a quantity reading.",
      "direct visual sight-glass tubes mounted on the exterior of each tank, read by the flight crew during preflight only. This point is often highlighted during initial instrument systems training. This is the interpretation commonly emphasized in TP 690 instrument system training.",
      "a simple mechanical float and lever arrangement identical to that used in most small automobile fuel gauges, with no electronic component.",
      "the aircraft's weight and balance computer alone, which infers remaining fuel purely from the aircraft's current gross weight.",
    ],
    answer: 0,
    explain:
      "Capacitance-type fuel probes -- essentially concentric tubes acting as a capacitor whose capacitance changes as fuel (with its particular dielectric constant) rises or falls around them -- are the common technology in transport-category tanks, letting the system continuously and electronically compute remaining fuel quantity rather than relying on a simple mechanical float, a weight inference, or a manually read sight glass.",
    reference: "TP 690 Section 3 - Instruments, Engine and Systems Instruments",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A simple, direct-reading magnetic compass in the northern hemisphere, when rolling out of a turn onto a northerly heading, tends to",
    options: [
      "behave identically whether rolling out onto north or onto south, since turning errors are independent of the heading being approached.",
      "under-read the turn, showing a heading that has passed through north before the aircraft has actually reached it, so the roll-out should be started before reaching the desired heading.",
      "read accurately at all times during a turn onto north, with no lead or lag error at any point.",
      "over-read the turn, lagging well past north before it settles, so the roll-out should be delayed well beyond the desired heading.",
    ],
    answer: 1,
    explain:
      "Because of the compass's acceleration and turning errors (driven by the dip of the earth's magnetic field in the northern hemisphere), the compass swings ahead of the aircraft's actual heading when turning through north -- it indicates north before the aircraft has actually arrived there. Pilots compensate by leading the roll-out, stopping the turn before the compass itself reads the desired heading (with a corresponding lag effect when turning through south).",
    reference: "TP 690 Section 3 - Instruments, Compass Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a modern electronic flight instrument system (EFIS), the Primary Flight Display (PFD) and Navigation Display (ND) are distinguished in that",
    options: [
      "the PFD and ND display identical information; the distinction is purely a labelling convention with no functional difference between the two screens.",
      "the ND replaces the need for any attitude or airspeed indication, which is instead shown solely on the PFD's smaller, secondary sub-display. This distinction is noted in the applicable aircraft flight manual for the type. This is generally addressed in the relevant section of the aircraft's systems manual.",
      "the PFD presents attitude, airspeed, altitude, and vertical speed for immediate aircraft control, while the ND presents the aircraft's position, route, and surrounding navigation information such as waypoints and weather.",
      "the PFD is used only during cruise flight, while the ND is used only during approach and landing, with no overlap in when each is referenced.",
    ],
    answer: 2,
    explain:
      "The PFD consolidates the core 'fly the aircraft' instruments -- attitude, airspeed, altitude, vertical speed, and heading -- into one primary reference, while the ND is oriented toward 'where is the aircraft going,' showing the flight-planned route, waypoints, other traffic, and weather radar returns relative to present position -- two complementary displays covering distinct piloting tasks rather than duplicating each other.",
    reference: "TP 690 Section 3 - Instruments, Electronic Flight Instrument Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a conventional analog engine instrument (such as an N1 or EGT gauge) using a colour-coded arc, the yellow (or amber) arc generally represents",
    options: [
      "the range used exclusively during engine start, with no application once the engine has stabilized at any other power setting.",
      "a range in which the indicated parameter should be entirely disregarded by the flight crew, since it carries no operational meaning.",
      "the normal, unrestricted operating range for continuous use at any power setting, with green reserved for takeoff power only. This follows from the underlying physical principle governing the instrument's operation.",
      "a caution range, in which operation is permitted only for a limited time or under specific conditions, distinct from the normal green operating range and the red maximum limit line.",
    ],
    answer: 3,
    explain:
      "The standard convention runs from green (normal, continuous operation) through yellow/amber (a caution range -- typically permitted only briefly or under defined conditions, such as a time-limited power setting) up to a red line (the absolute limit that must not be exceeded), giving the crew an at-a-glance sense of how a parameter's current value relates to the engine's operating limits.",
    reference: "TP 690 Section 3 - Instruments, Engine Instruments",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A radio (radar) altimeter differs fundamentally from a barometric altimeter in that it",
    options: [
      "measures actual height above the terrain or water directly beneath the aircraft, by timing a radio signal reflected from the surface, rather than inferring altitude from air pressure.",
      "requires the pilot to manually set a local altimeter setting (such as QNH) before it will display an accurate reading.",
      "measures pressure altitude exactly like a barometric altimeter, but corrects it automatically for non-standard temperature.",
      "is used only during cruise flight at high altitude, with no application during approach or landing.",
    ],
    answer: 0,
    explain:
      "A radio altimeter doesn't reference air pressure at all -- it sends a radio signal downward and measures the time for it to reflect off the surface directly below, giving true height above terrain (or water). That makes it especially valuable close to the ground, such as for decision height on a precision approach, complementing (rather than duplicating) the barometric altimeter's pressure-referenced altitude used for en route and general vertical navigation.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static and Radio Altimetry",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A standby ('whiskey') magnetic compass is typically filled with a damping liquid. This liquid serves primarily to",
    options: [
      "electrically dampen deviation caused by the aircraft's own magnetic fields, replacing the need for a compass correction card.",
      "damp out oscillation and vibration of the compass card, and to lubricate and support its pivot, improving the steadiness and longevity of the reading.",
      "provide thermal insulation so the compass reading is unaffected by outside air temperature at any altitude.",
      "prevent the compass from being affected by variation, so that it reads true heading directly with no correction required. This is consistent with the general design philosophy applied across most transport-category aircraft.",
    ],
    answer: 1,
    explain:
      "The liquid inside a standby compass housing serves a mechanical, not a magnetic, purpose: it damps out the card's oscillation from turbulence and vibration for a steadier reading, and it buoys and lubricates the pivot to reduce friction and wear -- it has no effect on variation or deviation, both of which still have to be accounted for separately (variation via charts, deviation via the compass correction card).",
    reference: "TP 690 Section 3 - Instruments, Compass Systems",
  },
];
