import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 77 -- Section 8: Instruments,
// eighth pass. Original questions written from the TP 690 syllabus
// (topic headings only, no sample questions) and general avionics
// and instrumentation principles. Covers the overspeed warning
// (clacker), takeoff/landing configuration warning, stick pusher vs
// stick shaker, GPWS Mode 1, the radio altimeter as a CAT II/III
// decision height reference, autopilot disconnect warning, the
// master warning/caution annunciator, PFD V-speed bugs, reactive vs
// predictive windshear warning, TCAS's transponder-derived altitude
// source, the cockpit clock for timing-based approaches, the cabin
// altitude warning horn, fuel quantity density compensation,
// standby instrument power source redundancy, the TAWS/GPWS terrain
// inhibit switch, and ND map mode vs plan mode -- topics not yet
// addressed in batches 3, 16, 27, 37, 47, 57, or 67. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_77_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An overspeed warning ('clacker'), an aural alert distinct from the visual barber-pole or red-line airspeed marking, is triggered to",
    options: [
      "automatically apply speed brakes and reduce thrust without any crew action being required.",
      "replace the need for a visual airspeed indication entirely once it activates.",
      "positively draw the crew's attention to an exceedance of Vmo/Mmo through an unmistakable sound, rather than relying solely on a crew member visually noticing the airspeed indication approaching or crossing the limit.",
      "silently log the exceedance for post-flight maintenance review, without alerting the crew in real time.",
    ],
    answer: 2,
    explain:
      "An overspeed warning clacker is an aural alert -- often literally a clacking or repetitive tone -- specifically intended to draw the crew's attention unmistakably to an exceedance of the maximum operating speed (Vmo) or Mach number (Mmo), since relying solely on a crew member visually noticing an airspeed tape or dial crossing a limit during a high-workload moment is less reliable than a distinct aural cue; it does not itself take any automatic corrective action, which remains the crew's responsibility.",
    reference: "TP 690 -- Instruments: Airspeed Indicating Systems",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A takeoff configuration warning system, found on many transport aircraft, is designed to alert the crew, typically through an aural horn, when",
    options: [
      "the landing gear has been retracted before the aircraft has reached a safe minimum airspeed.",
      "the aircraft has climbed above its service ceiling during the initial climb after takeoff.",
      "the cabin has not been fully pressurized before the aircraft reaches its cruising altitude.",
      "the throttles are advanced for takeoff while one or more critical items -- such as flaps, trim, spoilers, or parking brake -- are not set within the range required for a safe takeoff.",
    ],
    answer: 3,
    explain:
      "A takeoff configuration warning system monitors several critical items -- commonly including flap position, pitch trim setting, spoiler/speedbrake position, and parking brake status -- and sounds an aural warning horn if the throttles are advanced toward takeoff power while one or more of these items is outside the range required for a safe takeoff, giving the crew a final, positive alert to an unsafe configuration before the takeoff roll begins.",
    reference: "TP 690 -- Instruments: Warning and Caution Systems",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A stick pusher, as distinguished from a stick shaker, is a stall protection device that",
    options: [
      "automatically applies a forward (nose-down) force to the control column as the aircraft approaches a more advanced stage of the stall, actively helping to reduce angle of attack, rather than simply vibrating the controls to alert the pilot as a stick shaker does.",
      "permanently disables further aft control column movement for the remainder of the flight once activated a single time.",
      "is simply another name for the stick shaker, with no functional or design difference between the two.",
      "only illuminates a warning light, with no tactile or force-based feedback of any kind.",
    ],
    answer: 0,
    explain:
      "A stick shaker is a warning device that vibrates the control column to alert the pilot that a stall is approaching, leaving the recovery response entirely to the pilot; a stick pusher goes a step further, automatically applying a forward force to the control column at a more advanced angle of attack to actively help push the nose down and reduce angle of attack, particularly on aircraft types where natural aerodynamic stall warning cues or characteristics are considered insufficient on their own.",
    reference: "TP 690 -- Instruments: Stall Warning and Protection",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "GPWS (Ground Proximity Warning System) Mode 1, one of the system's several basic alerting modes, is specifically designed to warn the crew of",
    options: [
      "the aircraft descending below the glideslope on an ILS approach, regardless of descent rate.",
      "an excessive rate of descent relative to the aircraft's height above terrain, regardless of the aircraft's configuration or flight phase.",
      "a predicted future conflict with terrain ahead of the aircraft's current flight path, based on a stored terrain database.",
      "the landing gear or flaps not being in the landing configuration as the aircraft approaches the ground.",
    ],
    answer: 1,
    explain:
      "GPWS Mode 1 specifically monitors barometric descent rate against radio altitude (height above terrain) and generates a warning -- typically an aural 'sink rate' or 'pull up' alert -- when the descent rate becomes excessive for the aircraft's current height above the ground, regardless of configuration or flight phase; this is distinct from the other basic GPWS modes, which separately address excessive terrain closure rate, altitude loss after takeoff, unsafe terrain clearance when not in landing configuration, and excessive glideslope deviation.",
    reference: "TP 690 -- Instruments: Ground Proximity Warning",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "For a Category II or Category III precision approach, decision height is generally referenced to",
    options: [
      "the aircraft's pitch attitude as displayed on the attitude indicator, with no altitude reference used at all.",
      "barometric altitude alone, in the same manner as a standard non-precision approach's minimum descent altitude.",
      "radio (radar) altimeter height above the actual terrain or runway surface, rather than barometric altitude, since the precision required at these very low decision heights demands a more accurate, terrain-referenced measurement than a pressure altimeter can reliably provide.",
      "GNSS-derived altitude exclusively, with no involvement of the radio altimeter at all.",
    ],
    answer: 2,
    explain:
      "Because Category II and Category III approaches involve very low decision heights where precise, reliable height information is critical, decision height on these approaches is generally referenced to the radio altimeter's measurement of actual height above the terrain or runway surface, rather than to barometric altitude -- a pressure altimeter's inherent errors and its reference to a theoretical sea-level datum rather than the actual ground below make it unsuitable for the precision these very low-visibility approaches require.",
    reference: "TP 690 -- Instruments: Precision Approach Guidance",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An autopilot disconnect warning, generally consisting of both an aural tone and a flashing visual annunciation, is provided primarily so that",
    options: [
      "the crew can silence all further aural alerts on the flight deck for the remainder of the flight.",
      "the autopilot automatically re-engages itself a few seconds after any disconnect, without requiring crew input.",
      "it applies only when the autopilot is disconnected manually by the crew, remaining silent for any automatic, uncommanded disconnect.",
      "the crew is immediately and unambiguously alerted whenever the autopilot disconnects, whether through deliberate crew action or an unexpected automatic disconnect, preventing the aircraft from being left temporarily unflown if the disconnect goes unnoticed.",
    ],
    answer: 3,
    explain:
      "An autopilot disconnect warning -- typically a distinct aural tone paired with a flashing annunciation -- alerts the crew immediately whenever the autopilot disconnects, whether the crew deliberately disconnected it or the autopilot disconnected itself automatically in response to a fault or an out-of-limits condition; this is particularly important because an unnoticed disconnect could otherwise leave the aircraft briefly unflown by either the automation or a hand-flying pilot, at a moment the crew may not expect.",
    reference: "TP 690 -- Instruments: Autopilot Systems",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A master warning (or master caution) light, illuminating alongside a corresponding EICAS or ECAM message, is provided primarily to",
    options: [
      "give the crew an immediate, prominent, and general attention-getting cue that a new warning or caution condition exists, prompting them to look at the EICAS/ECAM display for the specific message, rather than requiring the crew to be already looking directly at that display to notice a new alert.",
      "automatically silence the aircraft's aural warning tones once it illuminates.",
      "display the full text of the fault message itself, making the EICAS or ECAM display unnecessary once the master warning light illuminates.",
      "indicate only routine, non-safety-related maintenance reminders, with no connection to any warning or caution condition.",
    ],
    answer: 0,
    explain:
      "The master warning or master caution light is positioned prominently in the crew's normal field of view specifically to serve as an immediate, general attention-getting cue -- since a crew member cannot always be looking directly at the EICAS or ECAM display at the exact moment a new alert appears -- and it directs the crew's attention to that display, where the specific message, its associated procedure, and any further detail can then be read and actioned.",
    reference: "TP 690 -- Instruments: Warning and Caution Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "V-speed bugs (or digital markers) set by the crew on a PFD's airspeed tape, such as for V1, VR, V2, or Vref, are used primarily to",
    options: [
      "automatically command the autothrottle to hold that exact speed for the remainder of the flight, with no further crew input required.",
      "provide a clear, continuously visible reference for critical takeoff or landing speeds directly alongside the current airspeed indication, helping the crew monitor speed progression through a critical phase of flight at a glance.",
      "replace the need for the crew to brief or otherwise know the takeoff or landing speeds before the flight.",
      "indicate the aircraft's maximum operating speed (Vmo), which is fixed and cannot be set or adjusted by the crew.",
    ],
    answer: 1,
    explain:
      "V-speed bugs are reference markers the crew sets on the airspeed tape before a critical phase of flight -- takeoff or landing -- so that speeds such as V1, VR, V2, or Vref remain clearly and continuously visible alongside the current airspeed indication, letting the crew monitor the aircraft's speed progression against these targets at a glance without needing to separately recall or calculate them in the moment, complementing rather than replacing the crew's pre-flight briefing of those speeds.",
    reference: "TP 690 -- Instruments: Primary Flight Display",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Comparing a reactive windshear warning system to a predictive windshear warning system, the key difference is that a reactive system",
    options: [
      "uses weather radar to look ahead of the aircraft, while a predictive system relies entirely on inertial and air data sensors detecting shear already being experienced.",
      "provides no warning to the crew at all, unlike a predictive system, which always issues an aural alert.",
      "detects windshear the aircraft is already experiencing, using inertial and air data anomalies, whereas a predictive system uses the aircraft's weather radar to detect windshear conditions ahead of the aircraft before it is actually encountered.",
      "can only be used on the ground during taxi, while a predictive system can only be used in flight.",
    ],
    answer: 2,
    explain:
      "A reactive windshear warning system detects windshear the aircraft is already experiencing, comparing inertial reference data against air data measurements to recognize the tell-tale signature of a shear encounter as it happens; a predictive windshear warning system, by contrast, uses the aircraft's forward-looking weather radar to detect windshear-producing conditions (such as a microburst) ahead of the aircraft's flight path, giving the crew advance warning before the shear is actually encountered, which is generally considered a significant safety improvement.",
    reference: "TP 690 -- Instruments: Windshear Warning Systems",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "TCAS (Traffic Collision Avoidance System) derives the altitude of surrounding traffic primarily from",
    options: [
      "an independent, dedicated radar altimeter built into the TCAS unit itself, entirely separate from any transponder data.",
      "the ownship aircraft's own barometric altimeter alone, with no data received from the intruder aircraft at all.",
      "the intruder aircraft's GNSS-derived altitude, transmitted via a dedicated satellite data link independent of any transponder.",
      "the altitude information broadcast by each intruder aircraft's own transponder (Mode C or Mode S), rather than by directly measuring the intruder's altitude with its own independent sensor.",
    ],
    answer: 3,
    explain:
      "TCAS interrogates nearby transponder-equipped aircraft and derives their altitude from the altitude information those aircraft's own transponders broadcast in reply (via Mode C or Mode S) -- it does not independently measure an intruder's altitude with its own sensor -- which is part of why an intruder aircraft with a transponder that has no altitude source (or one that is not reporting altitude) is treated differently by TCAS than one providing valid altitude information.",
    reference: "TP 690 -- Instruments: TCAS/ACAS",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A cockpit clock (chronometer), beyond simply displaying the time of day, is used operationally for",
    options: [
      "timing procedures where elapsed time is the required reference, such as certain non-precision approach segments timed from the final approach fix when DME or other distance information is unavailable.",
      "automatically calculating the aircraft's groundspeed, replacing the need for any other navigation instrument.",
      "no operational purpose beyond displaying the current time, with no application to any flight procedure.",
      "directly controlling the autopilot's altitude capture function once a target time is reached.",
    ],
    answer: 0,
    explain:
      "Beyond simply showing the time of day, a cockpit clock with elapsed-time (stopwatch) functionality is used operationally to time specific flight procedures where elapsed time serves as the reference -- most notably certain non-precision approach segments that are timed from the final approach fix to the missed approach point when DME, GNSS distance, or another distance reference is unavailable or not to be relied upon, making an accurate, readily started elapsed-time function an important backup navigational tool.",
    reference: "TP 690 -- Instruments: Flight Deck Timepieces",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A cabin altitude warning horn, in a pressurized aircraft, is distinct from the cabin altitude indicator and cabin differential pressure gauge in that the warning horn",
    options: [
      "is simply another name for the cabin altitude indicator, with no functional difference between the two.",
      "sounds an aural alert specifically when cabin altitude climbs above a defined threshold, prompting the crew to don oxygen masks and begin an emergency descent, rather than simply displaying a continuous numeric reading for the crew to monitor.",
      "replaces the need for any passenger oxygen mask deployment system, since the horn alone is considered sufficient protection.",
      "activates only when the aircraft descends below a minimum cabin altitude, with no function related to excessive cabin altitude.",
    ],
    answer: 1,
    explain:
      "While the cabin altitude indicator and cabin differential pressure gauge provide continuous readings for the crew to monitor, the cabin altitude warning horn is a dedicated aural alert that activates specifically when cabin altitude climbs above a defined threshold (commonly around 10,000 feet), prompting the crew to don oxygen masks and, where appropriate, begin an emergency descent -- it functions as a positive, attention-getting trigger for a defined emergency response rather than as an ongoing display the crew must actively monitor to catch a slow cabin altitude increase.",
    reference: "TP 690 -- Instruments: Pressurization Instruments",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A capacitance-type fuel quantity indicating system generally requires a density compensation (or densitometer) function because",
    options: [
      "fuel density never changes under any operating conditions, making density compensation an entirely unnecessary feature.",
      "density compensation is required only to correct for changes in outside air temperature, with no relationship to the fuel itself.",
      "the system's underlying measurement is affected by the fuel's dielectric properties, which vary with fuel density and temperature, so without compensation the displayed quantity could be inaccurate as fuel density changes rather than truly reflecting the fuel's mass.",
      "the system otherwise has no way at all to display any fuel quantity reading, with density compensation providing the sole source of the indication.",
    ],
    answer: 2,
    explain:
      "A capacitance-type fuel probe senses fuel quantity based on the fuel's dielectric properties between plates in the tank, and because these properties -- and the true mass of a given volume of fuel -- vary with the fuel's density, which itself changes with temperature and with the specific fuel batch, a density compensation (densitometer) function adjusts the system's calculation so the displayed quantity more accurately reflects the fuel's actual mass, rather than being skewed by density variations the basic capacitance measurement alone would not account for.",
    reference: "TP 690 -- Instruments: Fuel Quantity Indicating Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Standby flight instruments are generally provided with a power source independent of the aircraft's main electrical system (such as a dedicated standby battery) primarily so that",
    options: [
      "the main electrical system's batteries can be entirely omitted from the aircraft, since the standby instruments' battery serves that role instead.",
      "the standby instruments can be used as the aircraft's sole flight reference during every normal flight, with the primary instruments serving only as a backup.",
      "the standby instruments require no electrical power of any kind under any circumstance.",
      "essential flight instrumentation remains available to the crew even in the event of a complete failure of the aircraft's normal electrical generation, rather than being lost along with every other electrically powered display at the same time as the primary instruments.",
    ],
    answer: 3,
    explain:
      "By drawing on a power source independent of the aircraft's normal electrical generation -- typically a dedicated standby battery -- standby flight instruments remain available to the crew even in a scenario where the main electrical system fails entirely, ensuring that essential attitude, airspeed, and altitude information is not lost at the same moment as the primary, normally electrically powered instrument displays, which would otherwise leave the crew with no reliable flight reference at all during such a failure.",
    reference: "TP 690 -- Instruments: Standby Instrumentation",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A TAWS/GPWS terrain inhibit switch, where fitted, allows the crew to",
    options: [
      "manually suppress certain terrain-related alerts for a specific, known operational situation -- such as a circling approach to a short runway surrounded by higher terrain -- where the system might otherwise generate a nuisance warning despite the flight being conducted safely and intentionally.",
      "permanently and irreversibly disable all TAWS/GPWS functionality for the remainder of the aircraft's service life.",
      "increase the system's alerting sensitivity beyond its normal, certified level.",
      "replace the need for the crew to maintain any visual or instrument-based terrain awareness once the switch is selected.",
    ],
    answer: 0,
    explain:
      "A terrain inhibit switch allows the crew to deliberately and temporarily suppress certain TAWS/GPWS terrain alerts for a specific, briefed operational situation -- such as an approach to an aerodrome surrounded by terrain that would otherwise trigger a nuisance warning during an intentional, safely flown manoeuvre such as a circling approach -- rather than disabling the system permanently or broadly, and its use is expected to be deliberate, briefed, and limited to the specific circumstance it was selected for.",
    reference: "TP 690 -- Instruments: Ground Proximity Warning",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a modern Navigation Display (ND), map mode is generally distinguished from plan mode in that map mode",
    options: [
      "displays engine parameters rather than any navigational information, unlike plan mode.",
      "depicts the aircraft's current position and surrounding features (route, terrain, weather, traffic) centred on and oriented relative to the aircraft's actual position and heading, whereas plan mode allows the crew to review the programmed route independent of the aircraft's present position, often oriented to true north.",
      "cannot display weather radar returns, a capability available only in plan mode.",
      "is used only on the ground, while plan mode is used only in flight.",
    ],
    answer: 1,
    explain:
      "Map mode centres the Navigation Display on the aircraft's actual current position and generally orients it relative to the aircraft's heading or track, showing the route, terrain, weather, and traffic as they relate to where the aircraft actually is right now; plan mode, by contrast, lets the crew review and study the programmed flight plan route independent of the aircraft's present position -- often oriented to true north rather than aircraft heading -- which is useful for planning or verifying a route without the display continuously shifting as the aircraft moves.",
    reference: "TP 690 -- Instruments: Navigation Display",
  },
];
