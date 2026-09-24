import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 67 -- Section 5: Instruments,
// seventh pass. Original questions written from the TP 690 syllabus
// (topic headings only, no sample questions) and general avionics
// knowledge. Covers total pitot blockage (drain hole also
// blocked), Equivalent Airspeed (EAS) as distinct from CAS and TAS,
// a vacuum-driven attitude indicator "tumbling" at its gimbal
// limits, periodic heading indicator alignment against the magnetic
// compass, the ECAM/EICAS Memo page vs the STATUS page, TCAS
// display symbology, the autopilot's altitude capture (ALT CAP)
// mode, the pitch trim position indicator, the speedbrake/spoiler
// position indicator, low fuel quantity caution, N1 vs EPR as a
// thrust-setting reference, the fuel temperature indicator, the
// cabin rate of climb/descent indicator, weather radar gain
// control, electrical load (ammeter/voltmeter) gauges, and
// hydraulic system pressure/quantity gauges -- topics not yet
// addressed in batches 3, 16, 27, 37, 47, or 57. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_67_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "If an aircraft's pitot tube becomes completely blocked AND its drain hole also becomes blocked, trapping a fixed quantity of air in the pitot line, the airspeed indicator will subsequently tend to behave, during a climb, like",
    options: [
      "an indicator that immediately and permanently reads zero the instant both the pitot tube and its drain hole become blocked.",
      "a vertical speed indicator, displaying the aircraft's rate of climb rather than any airspeed-like value.",
      "an altimeter, with the indication generally increasing with altitude as the outside static pressure surrounding the trapped, now-fixed pitot pressure continues to fall.",
      "an accurate airspeed indicator throughout the climb, since a blocked drain hole is defined as having no additional effect beyond the pitot blockage alone.",
    ],
    answer: 2,
    explain:
      "With both the pitot tube and its drain hole blocked, the pressure trapped in the pitot line becomes fixed at whatever it was at the moment of blockage, while the static pressure side continues to respond normally to changing altitude; because the ASI reads based on the difference between pitot and static pressure, a climb (falling static pressure) causes the indicated airspeed to rise even though true airspeed may not have changed, making the instrument behave much like an altimeter for the remainder of the flight -- a different (and in some ways more insidious) failure mode than a blocked pitot tube with its drain hole still clear.",
    reference: "TP 690 -- Instruments: Pitot-Static System",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Equivalent airspeed (EAS), as an intermediate airspeed value between calibrated airspeed (CAS) and true airspeed (TAS), accounts for",
    options: [
      "magnetic variation, a correction that has no relevance to airspeed and instead applies only to compass headings.",
      "instrument and position error only, making EAS simply another name for calibrated airspeed with no additional correction applied.",
      "the difference between indicated altitude and true altitude, a correction that applies to altimetry rather than to airspeed.",
      "compressibility error (the effect of air compressing ahead of the pitot tube at higher speeds and altitudes), with true airspeed then obtained from EAS by further correcting for the actual air density at the aircraft's altitude.",
    ],
    answer: 3,
    explain:
      "Starting from calibrated airspeed (CAS, which has already been corrected for instrument and position error), equivalent airspeed (EAS) applies a further correction for compressibility error -- the effect of air compressing ahead of the pitot tube, which becomes significant at higher speeds and altitudes; true airspeed (TAS) is then obtained from EAS by correcting for the actual air density at the aircraft's altitude, making EAS a distinct intermediate step in the progression from CAS through to TAS.",
    reference: "TP 690 -- Instruments: Airspeed",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A vacuum-driven attitude indicator can 'tumble' (lose its correct attitude reference) when the aircraft is manoeuvred beyond the instrument's designed pitch or bank limits, because",
    options: [
      "the gimbal system supporting the gyro reaches a mechanical limit at extreme attitudes, causing the gyro to be forced out of its normal orientation rather than continuing to indicate the aircraft's actual attitude.",
      "the gyro simply spins faster at extreme attitudes, which has no effect whatsoever on the accuracy or reliability of the displayed attitude.",
      "the instrument is specifically designed to tumble deliberately at high bank angles as a built-in warning feature, rather than as an undesired failure mode.",
      "tumbling occurs only when the vacuum pump has failed completely, with no relationship to the aircraft's actual pitch or bank angle.",
    ],
    answer: 0,
    explain:
      "A vacuum-driven attitude indicator's gyro is supported by a gimbal system with a limited range of motion; if the aircraft is manoeuvred beyond the pitch or bank angle that gimbal system can accommodate (such as in an unusual attitude or aerobatic manoeuvre), the gimbals can reach their mechanical limits and force the gyro out of its normal orientation, causing the instrument to 'tumble' and display an incorrect attitude until it can be reset (on many older designs, via a caging knob) or until it settles back to a correct indication on its own over time.",
    reference: "TP 690 -- Instruments: Gyroscopic Instruments",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A pilot is generally advised to periodically cross-check and, where necessary, realign a gyroscopic heading indicator (directional gyro) against the magnetic compass primarily because",
    options: [
      "the magnetic compass itself requires no realignment or cross-checking of any kind, having been established as perfectly accurate at all times.",
      "the heading indicator is subject to precession (both mechanical and apparent) over time and will gradually drift from an accurate heading reference unless periodically reset against the magnetic compass, which, while subject to its own errors, remains the primary heading reference.",
      "realigning the heading indicator against the compass is required only once, at the start of the aircraft's service life, with no need for any further cross-check afterward.",
      "the heading indicator is defined as immune to any form of drift, making periodic realignment an unnecessary precaution with no operational basis.",
    ],
    answer: 1,
    explain:
      "Because a heading indicator is subject to gradual drift from precession (both mechanical, caused by bearing friction, and apparent, caused by the earth's rotation relative to the gyro's fixed orientation in space), it will progressively diverge from an accurate heading reference over time if left unchecked; periodically cross-checking it against the magnetic compass (which, despite its own turning and acceleration errors in a turn, remains steady and reliable in straight and level unaccelerated flight) and resetting it as needed keeps the heading indicator's reading accurate for ongoing navigation.",
    reference: "TP 690 -- Instruments: Gyroscopic Instruments",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An ECAM or EICAS 'Memo' page, as distinguished from the system's STATUS page, is generally used to",
    options: [
      "record a permanent, unerasable history of every fault that has occurred since the aircraft was manufactured.",
      "replace the primary warning/caution display entirely, with no distinct function of its own beyond duplicating that display.",
      "remind the crew of the current configuration or armed state of certain systems during normal operation (such as seatbelt signs on, or an armed autobrake setting), rather than summarizing the operational status of systems following a fault.",
      "display only fault messages generated after an abnormal event, a function that actually describes the STATUS page rather than the Memo page.",
    ],
    answer: 2,
    explain:
      "A Memo page generally reminds the crew of relevant system configuration items or armed states during normal operation -- such as the seatbelt sign setting, an armed autobrake mode, or similar reminders -- rather than summarizing the operational status of aircraft systems following a fault, which is the STATUS page's role (typically listing operative and inoperative systems, and any resulting operational limitations, after a fault has been addressed).",
    reference: "TP 690 -- Instruments: Electronic Flight Instrument Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a TCAS traffic display, intruder aircraft are generally distinguished from each other, and from the aircraft's own symbol, using shape and colour coding such that",
    options: [
      "colour coding is applied only to the own aircraft's symbol, with every intruder displayed exclusively in monochrome regardless of threat level.",
      "shape and colour on the TCAS display indicate only the intruder's altitude, with no relationship whatsoever to its collision threat level.",
      "every intruder aircraft, regardless of threat level, is displayed using an identical shape and colour, with no visual distinction of any kind between an RA, a TA, and other traffic.",
      "a resolution advisory (RA) intruder is typically shown as a solid red square, a traffic advisory (TA) intruder as a solid amber/yellow circle, and other traffic as a hollow (or white/cyan) diamond, with the own aircraft generally shown using a distinct symbol such as an aircraft outline.",
    ],
    answer: 3,
    explain:
      "TCAS traffic displays generally use a standardized shape and colour scheme to convey threat level at a glance: an RA intruder is typically shown as a solid red square, a TA intruder as a solid amber or yellow circle, and other, non-threatening traffic as a hollow diamond (often white or cyan), while the own aircraft is shown with its own distinct symbol -- allowing the crew to quickly assess the relative threat level of each nearby aircraft without reading detailed data for every target.",
    reference: "TP 690 -- Instruments: TCAS/ACAS",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An autopilot's altitude capture (ALT CAP or ALT*) mode is generally armed and engaged so that, as the aircraft approaches a preselected target altitude during a climb or descent,",
    options: [
      "the autopilot automatically transitions from the climb or descent mode into a levelling manoeuvre, smoothly reducing the rate of climb or descent to arrive at and capture the target altitude without significant overshoot, before transitioning into altitude hold.",
      "the aircraft continues climbing or descending at its prior rate straight through the target altitude with no change in behaviour, ignoring the preselected value entirely.",
      "the autopilot immediately disconnects the moment the target altitude is reached, requiring the pilot to manually level the aircraft at that point.",
      "the autopilot abruptly pitches to a fixed attitude regardless of the aircraft's actual rate of climb or descent as it nears the target altitude.",
    ],
    answer: 0,
    explain:
      "As the aircraft approaches a preselected target altitude during an autopilot-flown climb or descent, the altitude capture mode automatically arms and then engages, smoothly reducing the rate of climb or descent so the aircraft levels off at (rather than overshoots) the target altitude, after which the autopilot transitions into altitude hold to maintain that altitude -- a coordinated transition rather than an abrupt disconnect or an unmanaged continuation through the target.",
    reference: "TP 690 -- Instruments: Automatic Flight Control Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A pitch trim position indicator, showing the current setting of the aircraft's trimmable horizontal stabilizer or elevator trim tab, is useful to the crew primarily because it",
    options: [
      "indicates the aircraft's current airspeed, a function unrelated to trim position and instead performed by the airspeed indicator.",
      "allows the crew to verify that the trim setting is appropriate for the current phase of flight (such as confirming a takeoff trim setting within the approved range before departure), and helps them recognize an unexpected or runaway trim condition.",
      "displays the aircraft's current centre of gravity position directly, replacing the need for any separate weight and balance calculation.",
      "is used exclusively during cruise flight, with no relevance to the takeoff or landing phases.",
    ],
    answer: 1,
    explain:
      "A pitch trim position indicator lets the crew verify that the trim is set appropriately for the current phase of flight -- notably confirming, before takeoff, that the trim falls within an approved range for the aircraft's loaded condition -- and helps them notice promptly if the trim moves unexpectedly (such as during a trim runaway), which is a significant safety cue distinct from, and complementary to, a separate weight and balance calculation.",
    reference: "TP 690 -- Instruments: Flight Control Indications",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A speedbrake (or spoiler) position indicator, showing the current deployment of the speedbrake/spoiler panels, is particularly useful to the crew because it",
    options: [
      "indicates the current landing gear position, a function unrelated to speedbrake or spoiler deployment.",
      "is relevant only during the cruise phase of flight, with no application to landing or a rejected takeoff.",
      "allows the crew to confirm that the speedbrakes have actually deployed as commanded (for example, after landing or during a rejected takeoff), and helps them notice if the panels have been left extended or have failed to fully retract when they should be stowed.",
      "displays the current flap setting, a function that is actually performed by a separate flap position indicator rather than the speedbrake/spoiler indicator.",
    ],
    answer: 2,
    explain:
      "A speedbrake/spoiler position indicator allows the crew to confirm that the panels have actually deployed as commanded (for example, ground spoilers extending automatically after touchdown or during a rejected takeoff, contributing to deceleration and reduced lift), and helps the crew notice promptly if the panels have failed to deploy when expected, or have been inadvertently left extended (which would otherwise degrade climb performance) when they should be fully stowed.",
    reference: "TP 690 -- Instruments: Flight Control Indications",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A low fuel quantity caution indication, distinct from the general fuel imbalance caution covered separately, alerts the crew when",
    options: [
      "the fuel remaining in the left and right tanks differs by more than a specified amount, a description that actually applies to the fuel imbalance caution rather than a low fuel quantity caution.",
      "the aircraft's fuel flow rate has exceeded its normal cruise value, a description unrelated to remaining fuel quantity.",
      "the fuel temperature has fallen below its approved minimum operating temperature, a description that applies to a fuel temperature caution rather than a low fuel quantity caution.",
      "the total remaining fuel quantity (or the quantity in a specific tank) has fallen to or below a predetermined low threshold, prompting the crew to review remaining endurance and range and consider their fuel planning options.",
    ],
    answer: 3,
    explain:
      "A low fuel quantity caution alerts the crew when the total remaining fuel (or the quantity in a specific tank) has fallen to or below a predetermined low threshold, prompting a review of remaining range and endurance and of the crew's fuel planning options, which is a distinct alert from a fuel imbalance caution (comparing the quantity between tanks) or a fuel temperature caution (monitoring fuel temperature rather than quantity).",
    reference: "TP 690 -- Instruments: Fuel Indications",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Some turbine engines use N1 (fan/low-pressure spool speed) as their primary thrust-setting reference, while others use Engine Pressure Ratio (EPR), a choice that generally reflects",
    options: [
      "which parameter that particular engine's manufacturer has determined correlates most reliably with actual thrust output across the engine's operating range, since both N1 and EPR are used, on their respective engine types, as indirect indications of thrust rather than a direct thrust measurement.",
      "the fact that N1 measures fuel flow directly, while EPR measures rotational speed directly, the reverse of what each parameter actually represents.",
      "a purely arbitrary manufacturer preference with no relationship to how reliably either parameter reflects actual thrust output on that engine.",
      "a regulatory requirement mandating one specific parameter (N1 or EPR) uniformly across all turbine engine types, leaving no room for manufacturer choice.",
    ],
    answer: 0,
    explain:
      "Neither N1 nor EPR directly measures thrust; each is an indirect indication that a given engine manufacturer has determined correlates reliably with actual thrust output across that particular engine's operating range and design, which is why different engine types (or different engines from different manufacturers) may use one parameter or the other as their primary thrust-setting reference for the crew, rather than there being a single universally mandated parameter.",
    reference: "TP 690 -- Instruments: Engine Indications",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A fuel temperature indicator, where fitted, is monitored by the crew primarily because",
    options: [
      "fuel that becomes too warm poses the only monitored risk, with cold fuel temperature considered operationally irrelevant on any flight.",
      "fuel that becomes too cold (particularly at high altitude and low outside air temperature on long flights) risks approaching its freezing point, potentially forming wax crystals that can restrict fuel flow, so the crew may need to take action such as descending to a warmer altitude or adjusting speed.",
      "the fuel temperature indicator functions identically to, and simply duplicates, the engine oil temperature gauge.",
      "fuel temperature is used exclusively to calculate the aircraft's centre of gravity, with no relationship to fuel flow or freezing risk.",
    ],
    answer: 1,
    explain:
      "On long flights at high altitude, fuel can become very cold, and if its temperature approaches its freezing point, wax crystals can begin to form and restrict fuel flow through filters and lines; monitoring fuel temperature allows the crew to recognize an approaching cold-fuel condition and take corrective action, such as descending to a warmer altitude or adjusting speed (which affects fuel temperature through changes in Mach-related heating and time exposed to cold air), before the fuel actually reaches its freezing point.",
    reference: "TP 690 -- Instruments: Fuel Indications",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A cabin rate of climb/descent indicator, in a pressurized aircraft, is distinguished from both the cabin altitude indicator and the cabin differential pressure gauge in that the rate indicator shows",
    options: [
      "the outside (ambient) rate of climb of the aircraft itself, rather than any parameter related to the cabin.",
      "the same information as the cabin altitude indicator, the two instruments being functionally identical and interchangeable.",
      "how quickly the cabin altitude is currently changing (its rate of climb or descent), rather than the cabin's current altitude value itself (shown by the cabin altitude indicator) or the pressure difference between the cabin and the outside atmosphere (shown by the differential pressure gauge).",
      "the pressure differential between the cabin and the outside atmosphere, a function that actually belongs to the differential pressure gauge rather than the rate indicator.",
    ],
    answer: 2,
    explain:
      "The cabin rate of climb/descent indicator specifically shows how quickly the cabin altitude is currently changing, which is a comfort- and safety-relevant parameter distinct from the cabin altitude indicator (showing the cabin's current equivalent altitude) and the differential pressure gauge (showing the pressure difference between the cabin and the outside atmosphere) -- together, these three related but distinct instruments give the crew a complete picture of the pressurization system's current state and trend.",
    reference: "TP 690 -- Instruments: Pressurization Indications",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An airborne weather radar's gain control, when switched from automatic to manual and reduced below the normal calibrated setting, generally",
    options: [
      "automatically adjusts the antenna's tilt angle, a function that is actually controlled by the tilt control rather than the gain control.",
      "increases the radar's maximum detection range, a function that is actually controlled by the range selector rather than the gain control.",
      "has no effect whatsoever on the displayed radar picture, regardless of how far the gain is adjusted.",
      "reduces the displayed intensity of returns, which can help a pilot distinguish the most intense, most hazardous portions of a storm cell from its surrounding lighter precipitation, but should generally be returned to the calibrated (automatic) setting for routine weather avoidance decisions.",
    ],
    answer: 3,
    explain:
      "Reducing weather radar gain below the calibrated (automatic) setting reduces the displayed intensity of returns, which can help a pilot pick out the most intense, most hazardous cores within a broader area of precipitation by suppressing the weaker returns; however, because gain adjustments change how the picture is displayed rather than the actual weather, the calibrated automatic gain setting is generally recommended as the primary reference for routine weather avoidance decisions, with manual gain reduction used as a supplementary technique.",
    reference: "TP 690 -- Instruments: Weather Radar Indications",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An ammeter and a voltmeter, as electrical system gauges on the flight deck, together allow the crew to",
    options: [
      "monitor the electrical load being drawn from (or supplied by) a generator or battery, and the voltage that source is producing, helping the crew recognize an overload, an undercharging condition, or a failing generator or battery before it leads to an electrical system problem.",
      "monitor hydraulic system pressure and fluid quantity, a function that is actually performed by separate hydraulic gauges rather than an ammeter or voltmeter.",
      "display engine oil pressure and temperature, a function that is actually performed by dedicated oil gauges rather than an ammeter or voltmeter.",
      "monitor cabin pressurization, a function that is actually performed by the cabin altitude indicator and differential pressure gauge rather than electrical gauges.",
    ],
    answer: 0,
    explain:
      "An ammeter indicates the electrical current (load) being drawn from or supplied by a given source, such as a generator or battery, while a voltmeter indicates the voltage that source is producing; together, these gauges let the crew monitor for an electrical overload, an undercharging condition, or early signs of a failing generator or battery, supporting proactive management of the aircraft's electrical system before a more significant problem develops.",
    reference: "TP 690 -- Instruments: Electrical System Indications",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Hydraulic system pressure and quantity gauges on the flight deck allow the crew to",
    options: [
      "display the aircraft's current airspeed and altitude, functions that are actually performed by the airspeed indicator and altimeter rather than hydraulic gauges.",
      "confirm that each hydraulic system is operating within its normal pressure range and has adequate fluid remaining, helping them detect a developing leak, a failing pump, or a system that has lost pressure before it affects flight controls, landing gear, or brakes that depend on that system.",
      "monitor cabin pressurization exclusively, with no relationship to flight controls, landing gear, or brakes.",
      "monitor engine thrust output directly, a function that is actually performed by N1, N2, or EPR gauges rather than hydraulic gauges.",
    ],
    answer: 1,
    explain:
      "Hydraulic system pressure and quantity gauges let the crew confirm that each independent hydraulic system is producing normal pressure and retains adequate fluid quantity, which helps them detect a developing problem -- such as a leak, a failing pump, or a system that has lost pressure -- before it affects the flight controls, landing gear, brakes, or other hydraulically actuated systems that depend on that particular system remaining functional.",
    reference: "TP 690 -- Instruments: Hydraulic System Indications",
  },
];
