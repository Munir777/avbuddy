import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 54 -- Section 10: Radio
// Communications and Aids to Navigation, sixth pass. Original
// questions written from the TC AIM 2026-1 and the TP 690 syllabus
// (topic headings only, no sample questions). Covers Terminal VOR
// (TVOR), NDB electrical storm interference, NDB quadrantal error,
// ground marshalling hand signals, VHF antenna diversity, GNSS-
// derived UTC synchronization, the VHF guard/dual-watch function,
// the ATIS identification letter, Mode S Enhanced Surveillance,
// Mode S Flight ID correlation, the stuck-mic hazard, ADS-B 1090ES
// vs UAT data links, weather radar tilt control, DME hold/memory
// mode, company operational frequencies, and ELT G-switch
// activation -- topics not yet addressed in batches 10, 17, 25, 34,
// or 44. Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_54_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Terminal VOR (TVOR), compared to a standard (higher-power) en route VOR, is generally",
    options: [
      "a lower-power facility intended to provide reliable service within a more limited range and altitude, typically supporting terminal-area navigation and approach procedures rather than long-range en route use.",
      "a higher-power facility offering substantially greater range than a standard en route VOR, the reverse of the actual relationship between the two facility types.",
      "identical in every respect to a standard en route VOR, with 'terminal' referring only to its physical location and no difference in power or service volume.",
      "a facility used exclusively for VHF voice communication, with no VOR navigation signal transmitted at all despite the name suggesting otherwise.",
    ],
    answer: 0,
    explain:
      "A Terminal VOR is generally a lower-power facility providing reliable service within a more limited range and altitude than a standard en route VOR, making it well-suited to supporting terminal-area navigation and approach procedures rather than long-range en route navigation -- it is not a higher-power, longer-range facility, its reduced service volume is a real functional difference (not merely a naming convention), and it is a genuine VOR navigation facility, not a communication-only station.",
    reference: "TC AIM COM - VOR Facility Types",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "NDB/ADF bearing accuracy can be significantly degraded by nearby electrical storm activity primarily because",
    options: [
      "lightning discharges generate strong radio-frequency energy across a broad range of frequencies, which can cause the ADF needle to swing toward or be attracted by the electrical disturbance rather than the intended station.",
      "electrical storms have no effect whatsoever on ADF bearing accuracy, since lightning-generated radio energy is understood to occur at frequencies entirely unrelated to the NDB frequency band.",
      "electrical storms only affect VOR reception, with ADF/NDB reception understood to be completely immune to any form of electrical or precipitation-related interference.",
      "electrical storm interference affects ADF accuracy only when the aircraft is on the ground, with no effect once the aircraft is airborne.",
    ],
    answer: 0,
    explain:
      "Nearby electrical storm activity can significantly degrade NDB/ADF bearing accuracy because lightning discharges generate strong radio-frequency energy across a broad range of frequencies, including the NDB frequency band, which can cause the ADF needle to swing toward or be attracted by the electrical disturbance rather than pointing reliably at the intended station -- this is a real and well-recognized ADF limitation, not something unrelated to the NDB band, exclusive to VOR, or limited to ground operations.",
    reference: "TC AIM COM - ADF/NDB Limitations",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Quadrantal error, an NDB/ADF bearing error distinct from mountain effect or coastal refraction, is caused primarily by",
    options: [
      "re-radiation and distortion of the incoming NDB signal by the aircraft's own metal structure, producing an error that varies depending on the relative bearing of the station.",
      "the NDB station's own transmitter malfunctioning, an error originating entirely at the ground station rather than from any effect related to the receiving aircraft.",
      "atmospheric pressure changes at altitude, a purely meteorological cause unrelated to any interaction between the signal and the aircraft's structure.",
      "the time of day at which the bearing is taken, making quadrantal error functionally identical to the already-distinct 'night effect' phenomenon.",
    ],
    answer: 0,
    explain:
      "Quadrantal error results from re-radiation and distortion of the incoming NDB signal by the aircraft's own metal structure, producing a bearing error that characteristically varies depending on the relative bearing of the station to the aircraft -- it originates at the receiving aircraft, not the ground transmitter, it has an electromagnetic rather than a purely atmospheric-pressure cause, and it is a distinct phenomenon from night effect, which instead relates to sky wave interference varying with time of day.",
    reference: "TC AIM COM - ADF/NDB Bearing Errors",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Standardized ground marshalling hand signals, used by a marshaller to direct an aircraft during taxi, parking, or pushback, serve as a backup means of communication primarily because",
    options: [
      "they allow essential guidance to continue even when radio communication is impractical or unavailable, such as during engine start or in a noisy ramp environment.",
      "they are used exclusively as the primary means of communication at every aerodrome, with radio communication considered entirely unnecessary during any ground movement.",
      "they apply only to military aerodromes, with civil aerodromes understood to rely exclusively on radio communication for all ground movement guidance.",
      "they have been fully replaced by radio communication industry-wide, making marshalling hand signals an obsolete practice no longer taught or used.",
    ],
    answer: 0,
    explain:
      "Standardized ground marshalling hand signals serve as a backup means of communication that allows essential guidance to continue even when radio communication is impractical or unavailable -- such as during engine start, in a noisy ramp environment, or in the event of a radio malfunction -- rather than being the sole primary method, being limited to military aerodromes, or having become an obsolete practice; they remain a recognized and actively used part of ground operations at civil aerodromes.",
    reference: "TC AIM AGA - Marshalling Signals",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Many transport aircraft are fitted with VHF communication antennas mounted at both the top and bottom of the fuselage primarily to",
    options: [
      "provide reliable signal reception and transmission regardless of the aircraft's attitude or bank angle, since a single antenna position could otherwise be shielded from a ground station by the aircraft's own structure.",
      "allow the crew to select a completely different, unrelated set of frequencies depending on which antenna (top or bottom) is currently selected.",
      "serve no functional purpose beyond aesthetic or structural symmetry, since a single antenna is understood to be fully sufficient for reliable VHF communication in every flight attitude.",
      "measure outside air temperature, a function unrelated to VHF communication and instead performed by an entirely separate temperature probe.",
    ],
    answer: 0,
    explain:
      "Top- and bottom-mounted VHF antennas help provide reliable signal reception and transmission regardless of the aircraft's attitude or bank angle, since the airframe itself could otherwise shield a single antenna from a ground station during certain maneuvers -- this antenna diversity is a functional redundancy measure, not simply for aesthetic symmetry, a means of accessing different frequency sets, or a temperature-sensing function.",
    reference: "TC AIM COM - VHF Antenna Installation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "GNSS receivers provide a highly accurate time reference derived from the satellite constellation's own precise atomic clocks, which many aircraft systems use primarily to",
    options: [
      "synchronize onboard clocks and time-stamped data (such as flight data recorder entries or CPDLC message logs) to a common, highly accurate UTC reference.",
      "determine the aircraft's fuel quantity, a parameter entirely unrelated to any timing signal provided by the GNSS constellation.",
      "replace the need for any altimeter or airspeed indicator, since GNSS timing signals are understood to substitute directly for pressure-based flight instruments.",
      "control cabin lighting exclusively, a function unrelated to timing synchronization and instead governed by a separate, dedicated lighting control system.",
    ],
    answer: 0,
    explain:
      "GNSS-derived timing, based on the satellite constellation's precise atomic clocks, is used by many aircraft systems to synchronize onboard clocks and time-stamped data -- such as flight data recorder entries or CPDLC message logs -- to a common, highly accurate UTC reference, rather than for determining fuel quantity, substituting for pressure-based flight instruments, or controlling cabin lighting.",
    reference: "TC AIM COM - GNSS Timing Applications",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VHF communication radio's 'guard' (dual-watch) function, where available, allows the crew to",
    options: [
      "continue monitoring the emergency frequency (121.5 MHz) in the background while the radio remains tuned to and actively used on a separate, active working frequency.",
      "transmit simultaneously on two entirely different working frequencies at once, rather than monitoring 121.5 MHz in the background of an active frequency.",
      "disable reception on the active working frequency entirely whenever the guard function is selected, leaving only 121.5 MHz available for use.",
      "receive weather radar imagery over the VHF frequency, a function entirely unrelated to the actual purpose of a guard/dual-watch capability.",
    ],
    answer: 0,
    explain:
      "A VHF radio's guard (dual-watch) function allows the crew to continue monitoring the emergency frequency, 121.5 MHz, in the background while the radio remains tuned to and actively used on a separate working frequency -- it does not enable simultaneous transmission on two working frequencies, disable the active working frequency, or serve as a means of receiving weather radar imagery.",
    reference: "TC AIM COM - VHF Radio Guard Function",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The single-letter phonetic identifier included at the start of an ATIS broadcast (for example, 'Information Alpha') is used primarily so that",
    options: [
      "a pilot can quickly confirm, when reporting to ATC, that they have received the current version of the ATIS information, since the identifier changes each time the broadcast is updated.",
      "the identifier serves purely as a decorative naming convention with no operational significance to the pilot or to ATC.",
      "it indicates the current runway in use, with the phonetic letter itself directly encoding which runway is active rather than confirming which ATIS version was received.",
      "it replaces the need to state the actual weather information, since stating the identifier alone is considered sufficient to satisfy the requirement to obtain current aerodrome information.",
    ],
    answer: 0,
    explain:
      "The phonetic identifier at the start of an ATIS broadcast lets a pilot quickly confirm to ATC that they have received the current version of the information, since the identifier changes each time the broadcast is updated -- it is not merely decorative, it does not itself encode the active runway, and stating the identifier does not substitute for actually reviewing the ATIS content it identifies.",
    reference: "TC AIM COM - ATIS Identification Letter",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Mode S Enhanced Surveillance (EHS), an extension of basic Mode S transponder capability, allows ATC systems to",
    options: [
      "automatically downlink additional aircraft-derived parameters, such as selected altitude, heading, and airspeed, providing controllers with more detailed situational information than basic Mode S alone.",
      "provide no additional information whatsoever beyond basic Mode S capability, making the 'Enhanced' designation effectively meaningless in practice.",
      "replace the need for any voice communication with ATC entirely, since Mode S Enhanced Surveillance is understood to eliminate all further requirement for radio contact.",
      "downlink cabin temperature and passenger count exclusively, information unrelated to the flight parameters actually provided by Mode S Enhanced Surveillance.",
    ],
    answer: 0,
    explain:
      "Mode S Enhanced Surveillance allows ATC systems to automatically downlink additional aircraft-derived parameters, such as selected altitude, heading, and airspeed, providing controllers with more detailed situational information than basic Mode S transponder capability alone -- it genuinely adds functionality, it does not eliminate the need for voice communication with ATC, and the additional parameters relate to flight data rather than cabin temperature or passenger count.",
    reference: "TC AIM COM - Mode S Enhanced Surveillance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Mode S transponder's Flight ID (callsign) setting, which the crew typically configures to match the flight's filed flight plan callsign, is significant because it",
    options: [
      "allows ATC systems to correlate the radar target with the correct flight plan and callsign, supporting accurate identification and communication throughout the flight.",
      "has no operational significance at all, since ATC is understood to identify every aircraft exclusively by its registration mark rather than any transponder-configured callsign.",
      "automatically changes the aircraft's assigned ATC communication frequency, a function unrelated to the actual purpose of the Flight ID setting.",
      "is fixed permanently at the time of aircraft manufacture, with no ability for the flight crew to configure or update it for a specific flight.",
    ],
    answer: 0,
    explain:
      "A Mode S transponder's Flight ID setting, configured by the crew to match the flight's filed flight plan callsign, allows ATC systems to correlate the radar target with the correct flight plan and callsign, supporting accurate identification and communication throughout the flight -- it is a meaningful, crew-configurable setting for each specific flight, not a fixed manufacturing setting, an ATC frequency assignment mechanism, or something irrelevant to how ATC identifies aircraft.",
    reference: "TC AIM COM - Mode S Flight ID",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A 'stuck microphone' (a transmitter that becomes inadvertently keyed and remains transmitting continuously) is a significant hazard because it",
    options: [
      "blocks the affected frequency for other users, since a continuously transmitting aircraft prevents other stations from being heard or from transmitting on that same frequency.",
      "has no meaningful effect on other aircraft or ATC's ability to use the frequency, since a stuck microphone is understood to be a purely cosmetic display issue.",
      "automatically and immediately disables the affected aircraft's entire electrical system, a consequence unrelated to how a stuck microphone actually affects frequency usability.",
      "only affects the aircraft with the stuck microphone, with all other aircraft and ATC on that frequency remaining completely unaffected.",
    ],
    answer: 0,
    explain:
      "A stuck microphone blocks the affected frequency for other users, since a continuously transmitting aircraft prevents ATC and other stations from being heard or from transmitting on that same frequency -- this can seriously disrupt communication for everyone using that frequency, not just the affected aircraft, and it is a real operational hazard rather than a purely cosmetic display issue or something that disables the aircraft's electrical system.",
    reference: "TC AIM COM - Stuck Microphone Hazard",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "ADS-B data can be transmitted using either the 1090ES (1090 MHz Extended Squitter) link or the UAT (Universal Access Transceiver, 978 MHz) link, which differ in that",
    options: [
      "1090ES is generally used by transport-category and higher-performance aircraft (often shared with Mode S transponder hardware), while UAT is more commonly associated with general aviation aircraft in applicable airspace.",
      "the two data links carry entirely unrelated types of information, with 1090ES used solely for weather data and UAT used solely for traffic data, rather than both supporting similar ADS-B position and traffic information.",
      "UAT is the only ADS-B data link ever used by transport-category aircraft, with 1090ES understood to be reserved exclusively for general aviation use.",
      "the choice between 1090ES and UAT has no relationship to aircraft type or performance category, with the two links used entirely interchangeably and without pattern across all aircraft types.",
    ],
    answer: 0,
    explain:
      "1090ES is generally used by transport-category and higher-performance aircraft, often leveraging the same 1090 MHz Mode S transponder hardware, while UAT (978 MHz) is more commonly associated with general aviation aircraft operating in applicable airspace -- both links can support similar ADS-B position and traffic-related information rather than being split strictly along weather-versus-traffic lines, and the association with aircraft type/performance category is a genuine (if not absolute) pattern rather than a fully interchangeable, patternless choice.",
    reference: "TC AIM COM - ADS-B Data Links",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Adjusting the tilt angle of an airborne weather radar antenna during flight is done primarily to",
    options: [
      "optimize the radar beam's angle relative to weather cells and the ground, helping distinguish significant precipitation returns from ground clutter or from weather at an altitude irrelevant to the aircraft's flight path.",
      "change the radar's operating frequency, a function entirely unrelated to antenna tilt and instead controlled by a separate frequency selection control.",
      "have no effect on the radar's displayed returns at all, since antenna tilt is understood to be a purely cosmetic control with no bearing on detected weather.",
      "control the aircraft's autopilot pitch mode directly, a flight control function unrelated to the weather radar's own antenna positioning.",
    ],
    answer: 0,
    explain:
      "Adjusting weather radar antenna tilt helps optimize the radar beam's angle relative to weather cells and the ground, allowing the crew to distinguish significant precipitation returns from ground clutter or from weather at an altitude not relevant to the aircraft's current flight path -- it does not change the radar's operating frequency, it has a genuine and meaningful effect on displayed returns, and it has no connection to autopilot pitch control.",
    reference: "TC AIM COM - Weather Radar Operation",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A DME receiver's 'hold' (or memory) function, where available, allows the display to",
    options: [
      "continue showing a computed distance value for a brief period based on the aircraft's last known groundspeed, bridging a short interruption in DME signal reception.",
      "permanently freeze the last received distance value indefinitely, with no further updates ever provided even once reliable signal reception resumes.",
      "immediately display a distance of zero the moment any signal interruption occurs, rather than bridging the gap with a computed estimate.",
      "have no function related to DME distance display at all, since 'hold' is understood to refer to an unrelated audio identification feature rather than distance continuity.",
    ],
    answer: 0,
    explain:
      "A DME hold (memory) function allows the display to continue showing a computed distance value for a brief period, based on the aircraft's last known groundspeed, bridging a short interruption in DME signal reception rather than immediately displaying an unhelpful zero or blank indication -- it is a temporary bridging function, not a permanent freeze that persists even after reliable signal reception resumes, and it relates to distance display continuity, not audio station identification.",
    reference: "TC AIM COM - DME Hold Function",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A company operational (non-ATC) VHF frequency, used by some operators for communication between a flight and their own dispatch or operations personnel, is intended primarily for",
    options: [
      "operational matters such as gate assignment, maintenance coordination, or company-specific information, distinct from communication with air traffic control.",
      "issuing ATC clearances directly, since a company frequency is understood to fully substitute for ATC communication rather than supplementing it.",
      "declaring emergencies exclusively, with all routine operational communication between a flight and its operator required to occur only on 121.5 MHz.",
      "broadcasting weather information to the general public, a function unrelated to the operational purpose of a company frequency.",
    ],
    answer: 0,
    explain:
      "A company operational frequency is used for operational matters such as gate assignment, maintenance coordination, or other company-specific information exchanged between a flight and its own dispatch or operations personnel, distinct from and supplementary to communication with air traffic control -- it does not substitute for ATC clearances, it is not reserved exclusively for emergency declarations, and it is not a public weather broadcast service.",
    reference: "TC AIM COM - Company Frequencies",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Many Emergency Locator Transmitters (ELTs) are designed to activate automatically upon impact using a G-switch (inertia switch) mechanism, which",
    options: [
      "detects a sudden deceleration or impact force exceeding a preset threshold and triggers the ELT to begin transmitting without requiring manual crew activation.",
      "requires a crew member to manually flip a physical switch immediately after any impact, since automatic G-switch activation is not, despite common description, how these systems actually function.",
      "activates the ELT continuously during normal flight regardless of any impact or deceleration, transmitting at all times rather than only after a triggering event.",
      "has no relationship to deceleration or impact forces at all, instead being triggered exclusively by a scheduled activation timer unrelated to any physical event.",
    ],
    answer: 0,
    explain:
      "A G-switch (inertia switch) mechanism detects a sudden deceleration or impact force exceeding a preset threshold and triggers the ELT to begin transmitting automatically, without requiring manual crew activation -- this genuinely automatic function is a key safety feature (particularly if the crew is incapacitated), distinguishing it from a purely manual switch, and it is not a continuous always-on transmission or a scheduled timer unrelated to actual impact detection.",
    reference: "TC AIM COM - ELT Activation Mechanism",
  },
];
