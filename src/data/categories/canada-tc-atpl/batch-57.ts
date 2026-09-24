import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 57 -- Section 9: Instruments,
// sixth pass. Original questions written from the TC AIM 2026-1 and
// the TP 690 syllabus (topic headings only, no sample questions).
// Covers the Vne red radial line, TAWS terrain display colour-
// coding, the ADI bank angle pointer, TCAS RA fly-to guidance cues,
// the Vmo/Mmo crossover altitude, standby compass card graduations,
// Kollsman window pressure units, the integrated standby instrument,
// the altitude trend vector, the EICAS/ECAM STATUS page, the VSI
// zero-adjustment knob, the engine fire warning light and guarded
// fire handle, TCAS traffic display filtering modes, standby
// airspeed indicator design, engine instrument red-line markings,
// and the Flight Mode Annunciator -- topics not yet addressed in
// batches 3, 16, 27, 37, or 47. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_57_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On an airspeed indicator, the red radial line marking Vne (never-exceed speed) differs from the moving barber pole marking Vmo/Mmo in that the red radial line",
    options: [
      "is found only on a Machmeter and never on any conventional airspeed indicator, despite airspeed indicators commonly displaying a red radial Vne marking.",
      "moves continuously with changing altitude and Mach number in exactly the same way as the barber pole, making the two markings functionally identical.",
      "is a fixed marking at a single airspeed value, whereas the barber pole moves to reflect a Vmo/Mmo limit that can vary with altitude and Mach number.",
      "represents a minimum, rather than a maximum, airspeed limit, the reverse of the actual limit represented by a red radial line.",
    ],
    answer: 2,
    explain:
      "The red radial line marking Vne is a fixed marking at a single airspeed value on many aircraft types, distinguishing it from the moving barber pole, which reflects a Vmo/Mmo limit that can vary with altitude and Mach number -- the red line represents a maximum, not minimum, speed limit, and it commonly appears on a conventional airspeed indicator, not solely on a Machmeter.",
    reference: "TC AIM AIR - Airspeed Indicator Markings",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a Terrain Awareness and Warning System (TAWS) display, terrain is typically colour-coded so that",
    options: [
      "red is used to indicate terrain that is safely below the aircraft, the reverse of the threat-level colour convention actually used on a TAWS display.",
      "all terrain is displayed in a single uniform colour regardless of its height relative to the aircraft, providing no way to visually distinguish threat level.",
      "colour-coding is applied only to water features on the display, with all terrain elevation data shown using text labels rather than any colour convention.",
      "terrain posing an immediate threat is shown in red, terrain posing a caution-level threat is shown in yellow, and terrain well below the aircraft's flight path is shown in green or left unshaded.",
    ],
    answer: 3,
    explain:
      "A TAWS display typically colour-codes terrain so that terrain posing an immediate threat is shown in red, terrain posing a caution-level threat is shown in yellow, and terrain well below the aircraft's flight path is shown in green or left unshaded -- this provides an at-a-glance visual threat assessment rather than a single uniform colour, and red indicates significant threat, not safe terrain.",
    reference: "TC AIM AIR - TAWS Display Presentation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The bank angle pointer (sometimes called a sky pointer) on an attitude indicator or ADI provides the pilot with",
    options: [
      "a direct visual reference to the aircraft's current bank angle, typically read against a graduated scale at commonly used bank angle values.",
      "an indication of airspeed trend, a function unrelated to bank angle and instead displayed on the airspeed tape or indicator.",
      "no useful information at all, since the bank angle pointer is understood to be a purely decorative element with no functional reference value.",
      "an indication of aircraft heading, a function already served by the heading indicator or HSI rather than by the bank angle pointer.",
    ],
    answer: 0,
    explain:
      "The bank angle pointer on an attitude indicator or ADI provides a direct visual reference to the aircraft's current bank angle, typically read against a graduated scale marked at commonly used bank angle values -- it is not a heading reference (that role belongs to the heading indicator or HSI), it is unrelated to airspeed trend, and it serves a genuine functional purpose rather than being purely decorative.",
    reference: "TC AIM AIR - Attitude Indicator Bank Pointer",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "During a TCAS Resolution Advisory, the vertical speed indicator (or an equivalent PFD vertical speed display) often presents a red and green 'fly-to' guidance display, which shows the pilot",
    options: [
      "no guidance information at all during an RA, since TCAS Resolution Advisories are understood to provide no vertical speed display cues of any kind.",
      "a target vertical speed range to fly toward (green) and a range to avoid (red), helping achieve the vertical separation commanded by the Resolution Advisory.",
      "the aircraft's current groundspeed rather than any vertical speed guidance, despite being displayed on a vertical speed indicator.",
      "a fixed, unchanging vertical speed target that never adjusts once initially displayed at the start of the Resolution Advisory.",
    ],
    answer: 1,
    explain:
      "During a TCAS Resolution Advisory, a red and green fly-to guidance display shows a target vertical speed range to fly toward (green) and a range to avoid (red), helping the crew achieve the vertical separation commanded by the RA -- it displays vertical speed guidance, not groundspeed, TCAS RAs do genuinely provide this display cue on equipped aircraft, and the guidance can update as the RA situation develops rather than remaining fixed throughout.",
    reference: "TC AIM AIR - TCAS RA Vertical Speed Guidance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The altitude at which an aircraft's Vmo (maximum operating indicated airspeed) and Mmo (maximum operating Mach number) limits intersect, sometimes called the crossover altitude, is significant because",
    options: [
      "below that altitude, Mmo is always the more restrictive limit, while above it, Vmo becomes more restrictive, the reverse of the actual relationship.",
      "above that altitude, both Vmo and Mmo cease to apply entirely, leaving the aircraft with no high-speed limit of any kind above the crossover altitude.",
      "above that altitude, Mmo becomes the more restrictive limit, while below it, Vmo is the more restrictive limit, affecting which value the barber pole displays.",
      "the crossover altitude has no relationship to which speed limit governs the barber pole display, serving no functional purpose in that regard.",
    ],
    answer: 2,
    explain:
      "At the crossover altitude, Vmo and Mmo represent the same true airspeed; above that altitude, Mmo becomes the more restrictive limit (since a given indicated airspeed corresponds to an increasingly higher Mach number as altitude increases), while below it, Vmo is the more restrictive limit -- this determines which value the barber pole actually reflects at a given altitude, and neither limit simply ceases to apply above the crossover altitude.",
    reference: "TC AIM AIR - Vmo/Mmo Crossover Altitude",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A standby magnetic compass card is typically graduated in increments (commonly every 30 degrees, with intermediate marks at smaller intervals) and viewed against a fixed lubber line primarily to",
    options: [
      "provide no functional reading capability at all, since the graduations are understood to be purely decorative rather than intended to be read in flight.",
      "indicate engine RPM, a function entirely unrelated to the compass card's actual role in providing a magnetic heading reference.",
      "display outside air temperature rather than heading, despite the compass card's graduations being commonly associated with a heading reference.",
      "allow the pilot to read the aircraft's approximate magnetic heading by aligning the lubber line with the appropriate graduation on the rotating card.",
    ],
    answer: 3,
    explain:
      "A standby magnetic compass card's graduations, viewed against the fixed lubber line, allow the pilot to read the aircraft's approximate magnetic heading by aligning the lubber line with the appropriate graduation on the rotating card -- the card is a genuine, actively read heading reference, not a temperature or RPM display, and its markings serve a real functional reading purpose rather than being decorative.",
    reference: "TC AIM AIR - Standby Magnetic Compass",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A pressure altimeter's Kollsman window can typically be set to display the altimeter setting in either inches of mercury (inHg) or hectopascals (hPa), which is significant because",
    options: [
      "different regions or authorities commonly use different pressure units for the altimeter setting, so the ability to select the correct unit helps the pilot set the altimeter correctly wherever the flight is conducted.",
      "inches of mercury are understood to be obsolete and no longer used by any aviation authority worldwide, making the inHg setting option unnecessary.",
      "the choice of unit has no effect on the altimeter's actual indicated altitude, making the ability to select a unit purely a cosmetic display preference.",
      "hectopascals are used exclusively for temperature reporting, meaning an altimeter set in hPa would be measuring temperature rather than pressure.",
    ],
    answer: 0,
    explain:
      "Different regions or authorities commonly express the altimeter setting in different pressure units -- inches of mercury (inHg) in some regions, hectopascals (hPa) in others -- so the ability to select the correct unit on the Kollsman window helps the pilot set the altimeter correctly wherever the flight is conducted; it does have a real effect on the correctly indicated altitude if set incorrectly, hectopascals are a pressure (not temperature) unit, and inHg remains in active use, not obsolete.",
    reference: "TC AIM AIR - Altimeter Setting Units",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An Integrated Standby Instrument (ISI), fitted to many modern glass cockpit aircraft in place of separate standby attitude, airspeed, and altitude instruments, is best described as",
    options: [
      "a display that shows only engine parameters, with no attitude, airspeed, or altitude information provided by the unit despite its name suggesting a broader function.",
      "a single self-contained unit combining attitude, airspeed, and altitude display in one compact instrument, serving as a backup if the primary displays are lost.",
      "a unit that replaces the aircraft's primary flight displays entirely during normal operation, rather than serving as a backup used only if the primary displays fail.",
      "a purely mechanical device with no electrical power requirement whatsoever, unlike any other standby instrument found on a modern aircraft.",
    ],
    answer: 1,
    explain:
      "An Integrated Standby Instrument combines attitude, airspeed, and altitude display into a single self-contained unit, serving as a backup source of essential flight information if the primary displays are lost -- it is not an engine parameter display, it does not replace the primary flight displays during normal operation, and while some designs minimize dependency on the aircraft's main power sources, this does not mean it has no electrical power requirement at all.",
    reference: "TC AIM AIR - Integrated Standby Instrument",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An altitude trend vector, displayed alongside the altitude tape on a modern PFD, indicates",
    options: [
      "the selected (target) altitude only, duplicating information already provided by the altitude alerter/preselect function with no distinct anticipatory value.",
      "a fixed, unchanging reference altitude that never varies regardless of the aircraft's actual current vertical speed.",
      "the altitude the aircraft will reach in a short, defined time interval if the current vertical speed is maintained, giving the pilot an anticipatory cue for vertical flight path management.",
      "the aircraft's current groundspeed, a parameter unrelated to vertical flight path and instead displayed elsewhere on the PFD or ND.",
    ],
    answer: 2,
    explain:
      "An altitude trend vector indicates the altitude the aircraft will reach in a short, defined time interval if the current vertical speed is maintained, giving the pilot an anticipatory cue for managing the vertical flight path -- it is not a groundspeed indication, it is not a fixed reference altitude, and it is distinct from (and complements) the selected altitude shown by the altitude alerter/preselect function.",
    reference: "TC AIM AIR - PFD Altitude Trend Vector",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An EICAS or ECAM STATUS page, as distinguished from the system's primary warning/caution display, is generally used to",
    options: [
      "replace the primary warning/caution display entirely during any abnormal situation, leaving the crew with no separate, dedicated warning/caution presentation.",
      "duplicate exactly the same information already shown on the primary warning/caution display, with no distinct content or purpose of its own.",
      "display only normal, fully operative systems, with no indication whatsoever of any inoperative or degraded equipment shown on the STATUS page.",
      "show ongoing aircraft status information relevant to dispatch or continued operation, such as an inoperative but not immediately warning-level item, rather than an active, time-critical alert.",
    ],
    answer: 3,
    explain:
      "An EICAS or ECAM STATUS page is generally used to show ongoing aircraft status information relevant to dispatch or continued operation, such as an inoperative but not immediately warning-level item, rather than duplicating the primary warning/caution display's active, time-critical alerts -- it has distinct content and purpose, it is specifically useful for showing degraded or inoperative equipment (not only normal systems), and it complements rather than replaces the primary warning/caution display during an abnormal situation.",
    reference: "TC AIM AIR - EICAS/ECAM STATUS Page",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A vertical speed indicator's mechanical zero-adjustment knob, where fitted, allows the pilot or maintenance personnel to",
    options: [
      "correct a small needle indication error observed while the aircraft is stationary on the ground (where the true vertical speed is known to be zero), improving the instrument's displayed accuracy.",
      "adjust the aircraft's actual rate of climb or descent directly, since the zero-adjustment knob is understood to control aircraft performance rather than instrument indication.",
      "change the units in which vertical speed is displayed, a function unrelated to correcting any needle position error.",
      "reset the altimeter to a new altimeter setting, a function performed by the Kollsman window rather than by any control on the vertical speed indicator.",
    ],
    answer: 0,
    explain:
      "A VSI's mechanical zero-adjustment knob allows correction of a small needle indication error observed while the aircraft is stationary on the ground, where the true vertical speed is known to be zero, improving the instrument's displayed accuracy -- it does not change display units, it has no effect on the aircraft's actual climb or descent performance, and it is unrelated to the altimeter's Kollsman window setting.",
    reference: "TC AIM AIR - VSI Zero Adjustment",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An engine fire warning light, paired with a guarded fire handle on the flight deck, is designed so that",
    options: [
      "the fire handle is used only to silence the fire warning light's audible alert, with no relationship to shutting off fuel or hydraulic supply to the affected engine.",
      "the light alerts the crew to a detected engine fire, and pulling the guarded handle (protected against inadvertent activation) initiates the associated engine fire response, such as shutting off fuel and hydraulic supply to that engine.",
      "the fire warning light illuminates continuously during normal engine operation, providing no distinct indication specific to an actual detected fire condition.",
      "the guard covering the handle is purely decorative, providing no actual protection against inadvertent activation of the fire handle.",
    ],
    answer: 1,
    explain:
      "An engine fire warning light alerts the crew to a detected engine fire, and the associated guarded fire handle -- protected against inadvertent activation -- is pulled to initiate the engine fire response, such as shutting off fuel and hydraulic supply to that engine (and often arming the fire extinguishing system) -- the guard serves a genuine protective function, the handle does more than silence an audible alert, and the light is a distinct indication of an actual detected fire condition, not something illuminated during normal operation.",
    reference: "TC AIM AIR - Engine Fire Warning and Handle",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A TCAS traffic display's range and altitude filtering modes (such as 'above,' 'below,' 'normal,' and 'unrestricted') allow the crew to",
    options: [
      "disable TCAS entirely, since selecting any filtering mode is understood to turn off the system's traffic detection and alerting function altogether.",
      "change the TCAS system's underlying collision-avoidance logic, altering which aircraft would actually trigger a Traffic Advisory or Resolution Advisory.",
      "adjust which nearby traffic is shown on the display based on relative altitude, helping reduce visual clutter by filtering out traffic that is not currently relevant.",
      "control only the display's brightness setting, with 'above' and 'below' understood to refer to screen brightness levels rather than traffic altitude filtering.",
    ],
    answer: 2,
    explain:
      "TCAS traffic display filtering modes let the crew adjust which nearby traffic is shown based on relative altitude, helping reduce visual clutter by filtering out traffic not currently relevant to the crew's immediate situational awareness -- these display filtering selections do not alter the underlying TA/RA collision-avoidance logic, they are not a brightness control, and selecting a filtering mode does not disable TCAS's actual detection and alerting function.",
    reference: "TC AIM AIR - TCAS Display Filtering",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A standby airspeed indicator is commonly designed as a simple, directly pneumatic (pitot-static driven) instrument rather than relying on the aircraft's primary air data computer, primarily because",
    options: [
      "there is no meaningful difference between a pneumatic standby airspeed indicator and one driven by the aircraft's air data computer, making the distinction irrelevant to backup redundancy.",
      "pneumatic standby instruments require continuous electrical power to function, making them no more independent of an electrical failure than the primary displays.",
      "a pneumatic design is understood to be inherently less accurate than an air-data-computer-driven display, making it a deliberately inferior, rather than independent, backup.",
      "this design provides continued airspeed indication even if the electronic air data computer or its associated electrical power fails, preserving a genuinely independent backup source.",
    ],
    answer: 3,
    explain:
      "A standby airspeed indicator is commonly designed as a simple, directly pneumatic instrument so that it continues to provide airspeed indication even if the electronic air data computer or its associated electrical power fails, preserving a genuinely independent backup source -- this design choice is about independence and redundancy, not deliberate inferiority, and a pneumatic instrument's key advantage is precisely that it does not depend on the same electrical power as the primary displays.",
    reference: "TC AIM AIR - Standby Airspeed Indicator Design",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Red-line markings on engine instruments (such as an N1, N2, EGT, or torque gauge) generally indicate",
    options: [
      "a maximum operating limit that must not be exceeded, beyond which engine damage or an unsafe condition could result.",
      "a minimum value below which the engine is considered to be malfunctioning, the reverse of the maximum-limit purpose a red line actually serves.",
      "a purely cosmetic marking with no operational significance, included on the gauge face without representing any actual engine limit.",
      "the normal, recommended cruise setting for that parameter, a value pilots are expected to target rather than avoid exceeding.",
    ],
    answer: 0,
    explain:
      "Red-line markings on engine instruments generally indicate a maximum operating limit that must not be exceeded, beyond which engine damage or an unsafe condition could result -- they are not a target cruise setting to aim for, they do not represent a minimum value below which the engine malfunctions, and they carry genuine operational significance rather than being purely cosmetic.",
    reference: "TC AIM AIR - Engine Instrument Limit Markings",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Flight Mode Annunciator (FMA), displayed at the top of a PFD, shows the crew",
    options: [
      "only the aircraft's current altitude, duplicating information already shown on the altitude tape with no distinct mode-related content.",
      "the current active, armed, and captured modes of the autopilot, flight director, and autothrottle/autothrust systems, helping the crew maintain awareness of what the automation is actually doing.",
      "no information related to automation at all, despite the term 'Flight Mode Annunciator' directly suggesting a display of active automation modes.",
      "the aircraft's current fuel quantity, a parameter unrelated to autopilot or flight director mode status and instead shown on a separate fuel quantity display.",
    ],
    answer: 1,
    explain:
      "A Flight Mode Annunciator displays the current active, armed, and captured modes of the autopilot, flight director, and autothrottle/autothrust systems, helping the crew maintain awareness of what the automation is actually doing -- a well-recognized human factors concern given the potential for mode confusion; it does not show fuel quantity, it is not simply a duplicate of the altitude tape, and it genuinely displays automation mode status as its core purpose.",
    reference: "TC AIM AIR - Flight Mode Annunciator",
  },
];
