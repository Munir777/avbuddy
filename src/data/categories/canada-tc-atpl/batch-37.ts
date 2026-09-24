import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 37 -- Section 3: Instruments,
// fourth pass. Original questions written from standard aircraft
// instrument systems principles and the TP 690 syllabus (topic
// headings only, no sample questions). Covers altimeter setting
// mechanics, vacuum-driven gyro instruments, engine and fuel
// instrumentation, stall warning systems, and gear/flap position
// indication not yet addressed in batches 3, 16, or 27. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_37_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A pressure altimeter's Kollsman window, in which the pilot sets the current altimeter setting, functions by",
    options: [
      "physically changing the altitude of the aircraft itself, with the Kollsman window setting having a direct effect on true altitude rather than on the instrument's displayed reading, a claim inconsistent with the altimeter's actual reference-shifting mechanism.",
      "adjusting the airspeed indicator's calibration simultaneously, since the Kollsman window setting is mechanically linked to both instruments at once.",
      "mechanically adjusting the reference point against which the aneroid capsule's expansion or contraction is measured, so the displayed altitude reflects height above the selected pressure datum.",
      "having no functional effect on the altimeter's displayed reading at all, serving purely as a reference display with no mechanical connection to the instrument.",
    ],
    answer: 2,
    explain:
      "Setting the Kollsman window to a given pressure value (QNH, QFE, or the standard setting) mechanically shifts the altimeter's internal reference point, changing what the aneroid capsule's current expansion or contraction is measured against -- so the same actual atmospheric pressure produces a different displayed altitude depending on the datum selected, which is exactly why setting the correct altimeter setting is critical; it's a reference-shifting mechanism affecting the displayed reading only, with no effect on the aircraft's actual altitude or on any other instrument such as the ASI.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Indicated airspeed (IAS) is corrected for instrument and position error to obtain calibrated airspeed (CAS) primarily because",
    options: [
      "CAS is a value used only for engine performance calculations, with no relevance to airspeed indication or aircraft handling at all, a claim inconsistent with CAS's actual role as a corrected airspeed value used directly in airspeed indication and handling.",
      "IAS and CAS are, in practice, always numerically identical, making any correction between them a purely theoretical exercise with no real operational significance.",
      "position error correction accounts exclusively for changes in outside air temperature, with airframe installation effects playing no role in the IAS-to-CAS correction at all.",
      "the pitot-static system's actual installation on the airframe introduces small errors (varying with airspeed and configuration) that differ from the theoretically ideal pitot-static measurement.",
    ],
    answer: 3,
    explain:
      "Position error (also called installation error) arises because the pitot and static ports, mounted on the actual airframe, don't sample perfectly undisturbed air the way an idealized pitot-static system would -- local airflow effects around the fuselage (which vary with airspeed, angle of attack, and configuration such as flap setting) introduce small, generally predictable errors that a correction (often via a chart or table) removes to yield CAS, a real and operationally meaningful correction (used, among other things, as the basis for further TAS conversion), not a temperature-only or purely theoretical one.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "In an aircraft with a vacuum-driven attitude indicator, providing a separate, electrically powered standby attitude indicator is primarily intended to",
    options: [
      "preserve essential attitude information for the pilot even if the vacuum system fails, since a purely vacuum-powered instrument would otherwise be lost entirely along with that failure.",
      "eliminate the need for the aircraft to carry any vacuum system at all, since the presence of a standby instrument is considered a full substitute for vacuum-driven instrumentation.",
      "provide heading information exclusively, with pitch and bank attitude display considered outside the standby instrument's intended function.",
      "improve the accuracy of the primary vacuum-driven attitude indicator during normal operation, rather than to provide any redundancy in the event of a failure.",
    ],
    answer: 0,
    explain:
      "Using a different power source for the standby attitude indicator (commonly electrical, sometimes battery-backed) than for the primary, vacuum-driven instrument is a deliberate redundancy strategy: a vacuum system failure that takes out the primary attitude indicator (and often the heading indicator too, on a vacuum-driven system) won't also take out an independently powered standby -- it's about failure-mode redundancy, not improving the primary instrument's everyday accuracy, and it doesn't eliminate the aircraft's need for a vacuum system where other vacuum-driven instruments remain installed; the standby specifically displays pitch and bank attitude, not heading.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A vacuum system, used to spin certain gyroscopic instruments on many piston aircraft, typically relies on an engine-driven vacuum pump (or, on some aircraft, a venturi) along with a suction gauge that",
    options: [
      "indicates the aircraft's true airspeed, with 'suction gauge' simply being an alternate historical name for the airspeed indicator.",
      "indicates the vacuum system's suction pressure, letting the pilot verify the system is operating within its proper range to reliably drive the connected gyro instruments.",
      "has no diagnostic function at all, serving as a purely decorative gauge with no meaningful reading for the pilot to monitor, a description inconsistent with the suction gauge's actual role in confirming vacuum system health.",
      "measures engine oil pressure, an engine health parameter unrelated to the vacuum system driving the gyroscopic instruments at all.",
    ],
    answer: 1,
    explain:
      "The suction gauge is the vacuum system's own health indicator: it shows the actual suction (vacuum) being generated, and a pilot cross-checks it against the specified normal operating range to confirm the vacuum-driven gyro instruments (typically the attitude indicator and heading indicator on many piston aircraft) are being spun reliably -- an out-of-range reading is a warning sign that those instruments' accuracy may be degrading, distinct from an airspeed or oil pressure indication, and it's a genuinely functional diagnostic instrument, not a decorative one.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A G-meter (accelerometer), when installed, indicates",
    options: [
      "the aircraft's current groundspeed, expressed in nautical miles per hour rather than in units of gravitational acceleration.",
      "the aircraft's current outside air temperature, a thermodynamic rather than an acceleration-related quantity, a description inconsistent with the load-factor reading a G-meter actually displays.",
      "the load factor currently being experienced by the aircraft, expressed in multiples of standard gravitational acceleration (g).",
      "the rate of fuel consumption, an engine performance parameter unrelated to any acceleration or load factor measurement.",
    ],
    answer: 2,
    explain:
      "A G-meter directly measures and displays the load factor the aircraft's structure is currently experiencing, in multiples of standard gravity (1g being straight-and-level unaccelerated flight) -- useful for monitoring structural load during manoeuvring flight (and, after an unusually hard landing or an inadvertent overstress event, for assessing whether an inspection may be warranted), and it's unrelated to groundspeed, fuel consumption, or temperature, each of which is measured by its own dedicated instrument.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a piston engine, Exhaust Gas Temperature (EGT) and Cylinder Head Temperature (CHT) gauges are commonly used by a pilot primarily to",
    options: [
      "replace the need for a tachometer entirely, since EGT and CHT are considered equivalent substitutes for monitoring engine RPM.",
      "measure the aircraft's outside air temperature at cruising altitude, a purely meteorological rather than an engine-management function, a description inconsistent with EGT and CHT's actual role in mixture leaning and cylinder temperature monitoring.",
      "indicate the temperature of the aircraft's hydraulic fluid, an unrelated system with no connection to piston engine mixture or cylinder condition.",
      "help set and monitor mixture (leaning) and engine operating temperature, guarding against operating conditions that could cause detonation or other engine damage.",
    ],
    answer: 3,
    explain:
      "EGT and CHT give the pilot practical, real-time feedback for mixture leaning (EGT typically referenced against a peak/rich-of-peak or lean-of-peak leaning technique) and for monitoring that cylinder head temperature stays within a safe operating range, helping avoid conditions like detonation or excessive thermal stress that could damage the engine -- a piston-engine analog to the turbine ITT/TIT temperature monitoring covered elsewhere, but for a different engine type and mechanism, and unrelated to outside air temperature, hydraulic fluid temperature, or engine RPM (which a tachometer measures separately).",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A fuel flow indicator (and, where fitted, a fuel totalizer that integrates that flow over time) provides information distinct from a fuel quantity gauge in that fuel flow/totalizer instrumentation",
    options: [
      "shows the current rate of fuel consumption, rather than directly measuring the physical quantity of fuel actually present in each tank.",
      "measures oil quantity rather than fuel, with 'fuel flow indicator' being a misleading name for what is actually an oil system instrument, a description inconsistent with how fuel flow instrumentation is actually installed and used in flight.",
      "directly measures the physical amount of fuel remaining in each tank, making it functionally identical to, rather than distinct from, a fuel quantity gauge.",
      "is used exclusively on the ground during refuelling, with no function or display available to the pilot at any point during flight.",
    ],
    answer: 0,
    explain:
      "Fuel flow instrumentation measures the rate at which fuel is currently being consumed, and a totalizer builds on that by integrating flow over time to calculate fuel used (and, combined with a starting quantity, fuel remaining) -- a computed, rate-based figure that's a genuinely useful cross-check against, but is distinct from and can drift out of agreement with, the fuel quantity gauges that directly sense the physical fuel level in each tank; it's an in-flight instrument (not ground-refuelling-only) and has nothing to do with oil quantity.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A stall warning system, using an angle-of-attack-sensing vane or a lift-detecting sensor to trigger an audible horn or a stick shaker, is distinguished from an angle of attack (AoA) indicator in that the stall warning system",
    options: [
      "operates only when the aircraft's flaps are fully retracted, with the stall warning system considered entirely inoperative in any flap-extended configuration.",
      "provides a discrete alert (audible and/or tactile) at or near a specific angle of attack approaching the stall, rather than continuously displaying the aircraft's current angle of attack across its full range.",
      "measures airspeed directly rather than angle of attack, making the term 'stall warning' unrelated to angle of attack in any way.",
      "continuously displays the exact numerical angle of attack throughout the entire flight, making it functionally identical to a dedicated AoA indicator.",
    ],
    answer: 1,
    explain:
      "A stall warning system is built around a threshold alert -- an audible horn, a stick shaker, or both -- triggered as the aircraft approaches a specific angle of attack near the stall, giving a discrete, unmistakable cue at the critical moment, whereas a dedicated AoA indicator (covered elsewhere) continuously displays angle of attack across a range, giving the pilot ongoing, graduated information rather than a single threshold alert; a stall warning system functions across the flap range it's designed for (not flaps-up only), and it is fundamentally an angle-of-attack (or lift)-based warning, not an airspeed-based one, even though many aircraft rely on a stall warning system without also carrying a separate AoA indicator.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A basic autopilot's pitch and roll axis control functions generally by",
    options: [
      "operating only during the cruise phase of flight, with autopilot pitch and roll control considered unavailable at any other phase of flight.",
      "permanently disconnecting the pilot's own flight controls from the control surfaces, requiring the autopilot to be physically reconnected before manual flight is possible again.",
      "continuously comparing the aircraft's current attitude/flight path against a selected reference and driving the flight controls to reduce the difference between them.",
      "controlling engine thrust exclusively, with pitch and roll axis (flight control surface) management considered outside the scope of any autopilot function, a scope inconsistent with how basic autopilots actually drive control surfaces via attitude feedback.",
    ],
    answer: 2,
    explain:
      "At its core, an autopilot's pitch and roll (attitude/flight path) control works as a feedback system: it continuously compares the aircraft's actual attitude or flight path against whatever reference has been selected (an altitude to hold, a heading to fly, a vertical speed to maintain, and so on) and moves the flight control surfaces (via servos) to drive that difference toward zero -- distinct from autothrottle/autothrust (which manages engine thrust separately, as covered elsewhere), and modern autopilots remain readily disconnectable by the pilot rather than requiring any special reconnection process, and are commonly used in multiple phases of flight, not cruise alone.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On an older three-pointer (three-needle) pressure altimeter -- with separate needles indicating hundreds, thousands, and ten-thousands of feet -- a well-documented hazard is that a pilot",
    options: [
      "cannot determine the aircraft's altitude at all using a three-pointer altimeter, since the instrument is fundamentally incapable of displaying altitude in feet.",
      "will always read an altitude that is too low, in every case and regardless of the needles' actual positions, a fixed and entirely predictable error.",
      "must apply a mental correction for magnetic variation before the three-pointer altimeter's reading can be considered valid, a correction unrelated to any needle-misreading risk, and inconsistent with how altimeter settings are actually referenced to pressure rather than magnetic variation.",
      "can misread the displayed altitude by a factor of 1,000 or 10,000 feet if misread, a risk that more modern drum-pointer or digital altimeter displays are specifically designed to reduce.",
    ],
    answer: 3,
    explain:
      "The classic hazard of a three-pointer altimeter is a genuine misreading risk: with three separate needles moving at different rates (analogous to a clock's hour, minute, and second hands), a momentary or careless glance can lead a pilot to misjudge which thousand- or ten-thousand-foot band the aircraft is actually in, sometimes by a very significant and dangerous margin -- a risk that later altimeter designs (drum-pointer combinations, and ultimately digital/tape displays) were specifically developed to reduce; it's a misreading risk, not an inability to display altitude at all, not a fixed low-reading bias, and unrelated to magnetic variation.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Baro-VNAV (barometric vertical navigation) approach provides vertical guidance to the pilot by",
    options: [
      "computing a descent path electronically from barometric altitude information referenced to a specified vertical angle, rather than by receiving a transmitted ILS glideslope or SBAS-derived vertical signal.",
      "receiving the same transmitted ground-based glideslope signal used for an ILS approach, making Baro-VNAV functionally identical to an ILS in terms of its vertical guidance source.",
      "providing lateral guidance only, with 'vertical navigation' in its name being a misnomer that has no bearing on the approach's actual function, a description inconsistent with Baro-VNAV's actual role in computing a vertical descent path from barometric altitude.",
      "relying entirely on GNSS-derived satellite altitude information, with barometric altitude information playing no role in Baro-VNAV vertical guidance despite the name.",
    ],
    answer: 0,
    explain:
      "Baro-VNAV computes its vertical guidance internally, using the aircraft's own barometric altitude (with a temperature correction applied, since uncompensated barometric altitude can be significantly in error in very cold conditions) referenced against a published vertical path angle, rather than receiving an externally transmitted vertical guidance signal the way an ILS glideslope or an SBAS-augmented GNSS approach does -- it's specifically a vertical guidance method (not lateral-only, despite the acronym's focus), and it's barometric-, not purely satellite-altitude-, based, which is exactly why temperature limitations can restrict its use in very cold conditions.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A float-type fuel quantity sender, an older mechanical alternative to a capacitance-type fuel probe, measures fuel quantity by",
    options: [
      "requiring no moving parts of any kind, in contrast to a capacitance-type probe, which the float-type design is specifically intended to avoid.",
      "using a float that rises and falls with the fuel level, mechanically (or via a linked variable resistor) translating that physical float position into a fuel quantity reading.",
      "measuring the electrical capacitance between two probes immersed in the fuel, making a float-type sender simply an alternate name for a capacitance-type probe, a description inconsistent with the float-type sender's distinct mechanical sensing principle.",
      "measuring the rate of fuel flow leaving the tank, making a float-type sender functionally identical to a fuel flow indicator rather than a quantity-measuring device.",
    ],
    answer: 1,
    explain:
      "A float-type sender is a genuinely mechanical device: a float physically rides on top of the fuel, and its vertical position (linked, commonly, to a variable resistor or a mechanical linkage) is translated into the fuel quantity reading the pilot sees -- a fundamentally different sensing principle from a capacitance-type probe (which senses the dielectric property of the fuel/air mixture between fixed probes electronically, with no moving float), and it measures quantity (level), not flow rate, and does involve a moving part (the float itself), unlike many capacitance-type designs.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "In a pressurized aircraft, a cabin altitude indicator (or cabin altimeter), as distinct from the cabin differential pressure gauge, displays",
    options: [
      "the aircraft's actual flight altitude above mean sea level, making the cabin altitude indicator redundant with the aircraft's primary altimeter.",
      "the exact same value as the differential pressure gauge, with the two instruments being simply alternate display formats for an identical underlying reading.",
      "the equivalent pressure altitude currently being maintained inside the cabin, expressed in feet, rather than the pressure difference between the cabin and the outside atmosphere.",
      "the rate at which the cabin is climbing or descending, a rate-based rather than an absolute-altitude-based reading.",
    ],
    answer: 2,
    explain:
      "The cabin altitude indicator shows the equivalent pressure altitude the cabin interior is currently pressurized to (in feet), letting the crew directly monitor whether the cabin environment stays within its intended comfortable/safe range -- a distinct reading from the differential pressure gauge (which shows the pressure difference between cabin and outside ambient air, a related but separate quantity), from the aircraft's actual flight altitude (shown by the primary altimeter, which is not redundant with the cabin altitude indicator), and from a cabin rate-of-climb/descent indicator, which is again a separate instrument measuring a rate rather than an absolute value.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A landing gear position indicating system, typically using a set of illuminated indicators in the cockpit, is generally designed so that",
    options: [
      "green and red indications are used interchangeably, with colour carrying no standardized meaning regarding gear position or configuration.",
      "the indicator system displays gear position only while the aircraft is on the ground, providing no gear position information to the crew at all once the aircraft becomes airborne.",
      "a single indicator light represents the status of all landing gear legs collectively, with no ability to distinguish an individual gear leg's specific position from the others.",
      "a green indication confirms each gear leg is down and locked, while a red (or amber) indication warns of gear in transit or an unsafe/unlocked configuration relative to the current gear selector position.",
    ],
    answer: 3,
    explain:
      "The standard convention uses green to confirm each gear leg is down and mechanically locked, and red (or, on some designs, amber) to flag a gear that's in transit or not properly locked relative to the current gear selector position -- letting the crew quickly cross-check actual gear configuration against what's selected, in flight as well as on the ground, and the color coding is a deliberate, standardized convention (not interchangeable), with most systems able to display each gear leg's status individually rather than only a single combined indication.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A flap position indicator, showing the current deployment of the trailing edge flaps, is particularly useful because it",
    options: [
      "confirms the actual, physically achieved flap position, which is useful for cross-checking against the flap selector/handle position, given possible asymmetric deployment or mechanical fault.",
      "measures airspeed rather than flap position, with 'flap position indicator' being a misleading name for what is functionally an airspeed indicator.",
      "is mechanically incapable of displaying an intermediate flap setting, only ever showing either the fully retracted or the fully extended position.",
      "is required only on aircraft with fixed (non-retractable) flaps, with retractable flap systems specifically exempted from any flap position indication requirement, a scope inconsistent with how flap position indication is actually applied to retractable flap systems.",
    ],
    answer: 0,
    explain:
      "The flap position indicator confirms the flaps' actual, physically achieved deployment, distinct from simply knowing where the selector/handle has been moved to -- a meaningful distinction given that flap systems can experience a mechanical fault, an asymmetric deployment between the two wings, or a failure to fully reach the selected position, all of which the indicator (and associated asymmetry warning systems, where fitted) is intended to help the crew detect; it displays flap deflection, not airspeed, applies to aircraft with retractable/variable flap settings (where intermediate positions matter most), and is generally capable of showing intermediate settings, not just the two extremes.",
    reference: "TP 690 Section 3 - Instruments",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On an airspeed indicator with colour-coded radial arcs, the white arc generally represents",
    options: [
      "a range with no defined operational meaning at all, included purely as a decorative element of the instrument's dial face.",
      "the flap operating range, spanning from the stalling speed with flaps and landing gear extended up to the maximum flap-extended speed.",
      "the never-exceed speed range, marking speeds that would risk structural damage if exceeded under any circumstances.",
      "the normal (green arc) operating range for flight with flaps retracted, making the white arc simply a duplicate of the green arc's meaning.",
    ],
    answer: 1,
    explain:
      "On a typical airspeed indicator, the white arc specifically marks the flap operating range -- from the stalling speed in the landing configuration (flaps and gear extended) up to the maximum speed at which flaps may be extended -- distinct from the green arc (the normal operating range with flaps up), the yellow/caution arc, and the red radial line marking the never-exceed speed (VNE); it's a genuinely meaningful, standardized marking, not a decorative or redundant one.",
    reference: "TP 690 Section 3 - Instruments",
  },
];
