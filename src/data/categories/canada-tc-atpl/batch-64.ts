import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 64 -- Section 6: Radio
// Communications and Aids to Navigation, seventh pass. Original
// questions written from the TP 690 syllabus (topic headings only,
// no sample questions), the CARs, and the TC AIM 2026-1. Covers the
// VOR phase-comparison principle, GBAS/GLS as distinct from SBAS,
// transponder code 7700, the VHF "party line" effect, weather radar
// antenna stabilization, airborne vs datalink-uplinked ground-based
// weather radar, Doppler VOR vs conventional VOR, the Mode A squawk
// code's purpose, continued 121.5 MHz use for close-range homing,
// distress traffic priority and imposed silence, abbreviated
// aircraft callsigns, VHF antenna polarization, ADS-B ground
// station network dependency, TCAS RA reversal, standard ATC
// pro-words, and the COSPAS-SARSAT MEOSAR constellation -- topics
// not yet addressed in batches 10, 17, 25, 34, 44, or 54. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_64_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A conventional VOR ground station encodes the radial information a receiver uses by transmitting",
    options: [
      "a reference phase signal (omnidirectional, the same in every direction) and a variable phase signal (rotating, so its phase varies with azimuth), with the aircraft's receiver comparing the phase difference between the two to determine its bearing from the station.",
      "a single, unchanging signal identical in every direction, with the aircraft determining its bearing purely from the station's Morse code identifier.",
      "two separate signals on two entirely different frequencies, one used for distance and one used for bearing.",
      "a signal whose amplitude, rather than phase, varies with azimuth, with no phase comparison involved at all.",
    ],
    answer: 0,
    explain:
      "A VOR station transmits a reference phase signal that is the same in every direction, together with a variable phase signal whose phase (rather than amplitude) changes as the antenna pattern effectively rotates through 360 degrees; the aircraft's VOR receiver compares the phase difference between the two received signals to determine its magnetic bearing from the station, which is the fundamental principle behind VOR radial information.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: VOR",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Ground-Based Augmentation System (GBAS), providing a GNSS Landing System (GLS) precision approach service at some aerodromes, differs from a Satellite-Based Augmentation System (SBAS) in that GBAS",
    options: [
      "uses correction and integrity data broadcast from a local ground station covering a single aerodrome (or a small area around it), rather than correction data broadcast from a geostationary satellite covering a wide region.",
      "provides no vertical guidance whatsoever, unlike SBAS, which is defined as providing vertical guidance exclusively.",
      "is simply another name for SBAS, with the two terms describing an identical architecture and coverage area.",
      "relies entirely on ground-based radar rather than any satellite signal, making it unrelated to GNSS altogether.",
    ],
    answer: 0,
    explain:
      "GBAS provides GNSS correction and integrity data from a ground station local to a specific aerodrome (covering that aerodrome and its immediate approach area), supporting a GLS precision approach there, whereas SBAS (such as a wide-area system broadcasting corrections via geostationary satellite) covers a much larger region and supports GNSS approaches more broadly across that coverage area -- both augment basic GNSS, but at very different scales and via different delivery mechanisms.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: GNSS",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Selecting transponder code 7700 is specifically used to indicate",
    options: [
      "a general emergency, alerting ATC and any radar-equipped aircraft in range that the aircraft is in a state of distress or urgency not otherwise covered by a more specific code.",
      "a routine, non-emergency request to change altitude, unrelated to any emergency condition.",
      "a total loss of two-way radio communication with no other abnormal condition present, a situation for which 7600 is used instead.",
      "an unlawful interference (hijack) situation specifically, a situation for which 7500 is used instead.",
    ],
    answer: 0,
    explain:
      "Squawking 7700 alerts ATC (and any radar-equipped aircraft in range) that the aircraft is experiencing a general emergency, prompting priority handling and assistance; it is distinguished from 7600 (radio communication failure) and 7500 (unlawful interference), each of which signals a more specific situation.",
    reference: "TC AIM RAC -- Transponder Operation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Conventional VHF voice communication with ATC, where every aircraft on frequency can hear instructions given to other aircraft (sometimes called the 'party line' effect), provides a situational awareness benefit that is",
    options: [
      "substantially reduced when routine clearances are instead delivered via Controller-Pilot Data Link Communications (CPDLC), since a data link message is generally only visible to the aircraft it was sent to, not broadcast for other aircraft on frequency to overhear.",
      "entirely unaffected by whether clearances are delivered by voice or by CPDLC, since both methods are defined as providing identical shared awareness to other aircraft.",
      "irrelevant to flight safety, since pilots are not expected to attend to radio traffic directed at other aircraft under any circumstances.",
      "increased, rather than reduced, when CPDLC is used instead of voice, since data link messages are broadcast to every aircraft on the relevant frequency.",
    ],
    answer: 0,
    explain:
      "The 'party line' effect of shared VHF voice frequencies lets pilots build situational awareness from hearing clearances, traffic information, and other instructions given to nearby aircraft, even when not directly addressed to them; because a CPDLC message is generally delivered point-to-point to the addressed aircraft's own data link system rather than broadcast over a shared frequency, increased use of CPDLC for routine clearances can reduce this incidental shared awareness among aircraft in the same area.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Data Link",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Airborne weather radar antennas are generally gyro-stabilized primarily so that",
    options: [
      "the radar beam remains oriented relative to the horizon (rather than to the aircraft's own pitch and roll axes), preventing normal aircraft manoeuvring from causing the beam to scan the ground or sky rather than the weather ahead.",
      "the antenna can physically rotate to track a single storm cell automatically without any pilot tilt adjustment ever being required.",
      "stabilization eliminates the need for any beam tilt control, since a stabilized antenna is defined as having a fixed tilt angle at all times.",
      "the radar's transmitted power output is increased, which is otherwise unrelated to antenna stabilization.",
    ],
    answer: 0,
    explain:
      "Without stabilization, the radar beam would tilt with the aircraft's own pitch and roll, potentially aiming into the ground during a turn or a nose-up/nose-down manoeuvre rather than staying pointed at the weather ahead; gyro-stabilizing the antenna keeps the beam oriented relative to the horizon regardless of the aircraft's attitude, so the displayed weather picture remains meaningful through normal manoeuvring, while the pilot separately controls tilt angle to select which altitude band ahead is being scanned.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Weather Radar",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Compared to an aircraft's own airborne weather radar, a datalink-uplinked ground-based weather radar mosaic (such as a composite national radar picture sent to the cockpit) generally offers",
    options: [
      "a much broader-area strategic picture useful for overall route and diversion planning, but with the picture typically time-delayed by several minutes and therefore less suitable than the aircraft's own real-time airborne radar for immediate, close-in tactical avoidance of individual cells.",
      "an identical, real-time picture in every respect, making the two systems fully interchangeable for both strategic and tactical weather avoidance.",
      "no meaningful weather information at all, since ground-based radar mosaics are defined as covering only oceanic areas with no coverage over land.",
      "greater accuracy for immediate, close-in cell avoidance than the aircraft's own airborne radar, in every operational situation.",
    ],
    answer: 0,
    explain:
      "A datalink-uplinked ground-based radar mosaic combines data from a network of ground radar sites into a broad-area picture useful for strategic route and diversion planning, but it is typically time-delayed by several minutes by the time it is compiled and transmitted, making it less suitable than the aircraft's own real-time airborne weather radar for immediate, close-in tactical decisions about avoiding a specific developing cell.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Weather Radar",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Doppler VOR (DVOR), as distinguished from a conventional (standard, or CVOR) VOR, was developed primarily to",
    options: [
      "reduce the bearing errors (site error) that reflections from nearby terrain or structures can cause at a conventional VOR, by using a Doppler-shift technique to generate the variable phase signal rather than the simpler amplitude-based technique used by a conventional VOR.",
      "eliminate the need for any phase comparison at all, since a DVOR is defined as determining bearing purely from signal amplitude.",
      "provide distance information in addition to bearing, a capability that a conventional VOR is defined as lacking entirely.",
      "operate on an entirely different frequency band from a conventional VOR, making the two systems incompatible with the same aircraft receiver.",
    ],
    answer: 0,
    explain:
      "A DVOR generates its variable phase signal using a Doppler-shift technique (effectively simulating a rapidly rotating antenna electronically), which makes it considerably more resistant to the bearing errors (site error, sometimes observed as VOR 'scalloping') that reflections from nearby terrain, buildings, or other obstructions can cause at a conventional VOR using the simpler amplitude-modulation technique -- both still use the same underlying phase-comparison principle and are receivable by an ordinary aircraft VOR receiver with no distinction required.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: VOR",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Mode A transponder reply, providing a four-digit octal identity ('squawk') code as assigned by ATC, is used primarily to",
    options: [
      "allow ATC's radar display to associate a specific radar return with a particular aircraft and its filed flight plan, distinguishing that aircraft's track from others on the same display.",
      "provide ATC with the aircraft's current pressure altitude, a function performed by Mode C rather than Mode A.",
      "transmit the aircraft's registered Flight ID (callsign) automatically, a function specifically associated with Mode S rather than basic Mode A.",
      "broadcast the aircraft's GNSS-derived position, a function unrelated to a basic Mode A/C transponder reply.",
    ],
    answer: 0,
    explain:
      "A Mode A reply provides ATC's radar system with a four-digit octal identity code assigned to that specific flight, allowing the controller's display to associate a given radar return with the correct aircraft and its filed flight plan, distinguishing it from other aircraft's returns on the same display -- altitude reporting is a separate Mode C function, and automatic callsign correlation via Flight ID is a separate Mode S capability.",
    reference: "TC AIM RAC -- Transponder Operation",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Even though satellite-based distress alerting has largely shifted to 406 MHz Emergency Locator Transmitters, many ELTs continue to also broadcast on 121.5 MHz primarily because",
    options: [
      "121.5 MHz remains useful for close-range homing, allowing search aircraft and rescue personnel equipped with a simple ADF or direction-finding receiver to pinpoint the exact location of a downed aircraft once the general search area has already been identified via the 406 MHz satellite alert.",
      "406 MHz signals cannot be received by any satellite whatsoever, making 121.5 MHz the sole means of satellite-based distress alerting.",
      "121.5 MHz provides a more accurate initial satellite-based position fix than 406 MHz in every case.",
      "regulations prohibit any ELT from transmitting exclusively on 406 MHz, without regard to homing capability at all.",
    ],
    answer: 0,
    explain:
      "406 MHz provides the primary satellite-based distress alert (including, on many units, an encoded position), but 121.5 MHz remains valuable for close-range homing -- search aircraft and ground rescue teams equipped with simple direction-finding equipment can use the 121.5 MHz signal to pinpoint the exact crash site once the satellite alert has already identified the general search area, which is why many ELTs continue to transmit on both frequencies.",
    reference: "TC AIM RAC -- Emergency Locator Transmitters",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "When a MAYDAY distress message is transmitted on a frequency, standard radiotelephony practice generally expects that",
    options: [
      "the distress traffic is given absolute priority, with other stations imposing radio silence on that frequency (except when necessary to assist the aircraft in distress) until the emergency is resolved or silence is lifted by the appropriate authority.",
      "other stations on the frequency continue routine, unrelated transmissions without any change in priority or behaviour.",
      "the distress call must be repeated continuously without pause until acknowledged, with no other stations permitted to transmit on any frequency anywhere in the world.",
      "distress traffic is treated with lower priority than routine ATC instructions already in progress at the time the distress call is made.",
    ],
    answer: 0,
    explain:
      "A MAYDAY distress call is given absolute priority over all other communication on that frequency; other stations are expected to impose radio silence (refraining from unrelated transmissions) except when necessary to assist the aircraft in distress or to relay its message, and that silence generally continues until the emergency is resolved or silence is explicitly lifted by the controlling authority.",
    reference: "TC AIM RAC -- Distress and Urgency Communications",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An abbreviated aircraft callsign (for example, using only the last three characters of a registration, or a shortened company flight number reference) may generally be used in radiotelephony communication",
    options: [
      "once two-way communication has already been satisfactorily established using the full callsign, and only when there is no risk of confusion with another aircraft or station operating on the same frequency.",
      "at any time, including on initial contact with a new ATC unit, regardless of whether communication has previously been established or whether any risk of confusion with another callsign exists.",
      "only by an air traffic controller, and never by the pilot of the aircraft concerned, under any circumstances.",
      "only for aircraft operating entirely outside controlled airspace, with no application to any flight operating on an IFR flight plan.",
    ],
    answer: 0,
    explain:
      "An abbreviated callsign may generally be used only after two-way communication has already been satisfactorily established with a station using the full callsign, and only where doing so creates no risk of confusion with another aircraft or station on the same frequency -- initial contact with a new station generally still requires the full callsign to avoid any ambiguity about which aircraft is transmitting.",
    reference: "TC AIM RAC -- Radiotelephony Procedures",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Standard aviation VHF communication antennas are generally vertically polarized, whereas an ILS localizer antenna array transmits a horizontally polarized signal, a distinction that matters because",
    options: [
      "a receiving antenna generally provides its best reception when its own polarization is matched (or reasonably close) to the polarization of the transmitted signal, so aircraft communication and localizer antennas are designed and oriented accordingly for their respective signals.",
      "polarization has no effect whatsoever on signal reception, making the distinction between vertical and horizontal polarization purely academic with no practical consequence.",
      "a horizontally polarized signal cannot be transmitted or received by any aircraft antenna under any circumstances, making the ILS localizer incompatible with all aircraft receivers.",
      "vertical and horizontal polarization refer only to the direction of aircraft flight relative to the signal source, unrelated to the physical orientation of the transmitting or receiving antenna.",
    ],
    answer: 0,
    explain:
      "A radio signal's polarization refers to the orientation of its electric field, and a receiving antenna generally achieves its best signal strength when its own polarization is matched, or reasonably close, to that of the transmitted signal; this is why VHF communication antennas (vertically polarized) and the ILS localizer's horizontally polarized signal are each paired with correspondingly oriented aircraft antennas designed for reliable reception of that particular type of signal.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Radio Wave Propagation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "ADS-B Out, as generally implemented using the 1090ES or UAT ground-based network, differs from a purely satellite-relayed surveillance system in that",
    options: [
      "ADS-B Out broadcasts depend on being received by a suitably positioned ground station (or another appropriately equipped aircraft) within range, meaning surveillance coverage in a given area depends on ground station infrastructure rather than on universal satellite coverage.",
      "ADS-B Out is entirely independent of any ground infrastructure and provides full worldwide coverage identical to a dedicated satellite relay network in every location.",
      "ADS-B Out transmissions cannot be received by any ground station under any circumstances, and are instead relayed exclusively between aircraft.",
      "ADS-B Out and satellite-relayed surveillance are simply two different names describing an identical system architecture with no distinction between them.",
    ],
    answer: 0,
    explain:
      "ADS-B Out broadcasts an aircraft's position and other data, but that broadcast must actually be received by a suitably positioned ground station (or an appropriately equipped nearby aircraft) to be usable for ATC surveillance; because of this, ADS-B ground-based coverage in a given area depends on the density and placement of ground station infrastructure, which is why some remote or oceanic areas have historically relied on separate satellite-based surveillance solutions (such as space-based ADS-B receivers) rather than the ground-based network alone.",
    reference: "TC AIM RAC -- ADS-B",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A TCAS/ACAS Resolution Advisory (RA) 'reversal,' an uncommon event, occurs when",
    options: [
      "TCAS changes the sense of an already-issued RA (for example, from a climb instruction to a descend instruction, or vice versa) because the intruder aircraft's own behaviour has changed in a way that makes the original sense no longer adequate to maintain safe separation.",
      "the pilot manually cancels an RA at will, with TCAS having no independent ability to change or reissue its own guidance.",
      "an RA reversal refers exclusively to a Traffic Advisory being downgraded to no advisory at all, with no relationship to a vertical sense change.",
      "TCAS permanently disables itself for the remainder of the flight once a single RA has been reversed.",
    ],
    answer: 0,
    explain:
      "An RA reversal occurs when TCAS, having already issued a Resolution Advisory in one vertical sense, determines that the intruder aircraft's own trajectory has changed in a way that makes continuing in that sense inadequate to maintain safe separation, and so reverses the RA to the opposite sense (climb to descend, or descend to climb); this is an uncommon but trained-for event, and the flight crew is expected to comply promptly with the reversed guidance just as with the original RA.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: TCAS/ACAS",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Among standard ATC radiotelephony pro-words, 'AFFIRM,' 'NEGATIVE,' 'ROGER,' and 'WILCO' are distinguished in that",
    options: [
      "AFFIRM and NEGATIVE mean 'yes' and 'no' respectively; ROGER means only that a transmission has been received and understood, without confirming that the instruction will be complied with; and WILCO means the message has been received, understood, and will be complied with.",
      "all four pro-words are fully interchangeable, each meaning simply 'yes' with no distinction in usage between them.",
      "ROGER specifically means the same as WILCO, confirming that the instruction will be complied with, while AFFIRM and NEGATIVE are reserved exclusively for weather-related questions.",
      "WILCO means only that a transmission was received, without any implication of understanding or intent to comply, the reverse of its actual meaning.",
    ],
    answer: 0,
    explain:
      "AFFIRM and NEGATIVE are used to answer a yes/no question; ROGER acknowledges that a message has been received and understood, but does not by itself confirm that the recipient will comply with any instruction it contained; WILCO ('will comply') goes further, confirming both that the message was understood and that the instructed action will be carried out -- using ROGER when WILCO is meant (or vice versa) can create ambiguity about whether an instruction will actually be followed.",
    reference: "TC AIM RAC -- Radiotelephony Procedures",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The COSPAS-SARSAT system's newer medium-earth-orbit (MEOSAR) satellite constellation, compared to the older low-earth-orbit (LEOSAR) and geostationary (GEOSAR) satellites it supplements, generally provides",
    options: [
      "substantially faster distress alert detection and location, since multiple MEOSAR satellites can typically detect a 406 MHz ELT distress signal almost immediately, rather than requiring a satellite to pass overhead as with the older LEOSAR system.",
      "no improvement whatsoever in alert detection speed or location accuracy compared to the older LEOSAR and GEOSAR satellites.",
      "coverage limited exclusively to polar regions, with no capability to detect a distress signal at any other latitude.",
      "detection capability for 121.5 MHz analog signals only, with no ability to detect a 406 MHz digital ELT signal at all.",
    ],
    answer: 0,
    explain:
      "The MEOSAR constellation uses a larger number of satellites in medium earth orbit, meaning several are typically in view of a given distress beacon at any time, allowing near-immediate detection and a much faster, more accurate location determination compared to the older LEOSAR system (which required a single low-orbiting satellite to pass overhead before detecting and processing a signal) -- MEOSAR supplements rather than replaces the older LEOSAR and GEOSAR satellites within the overall COSPAS-SARSAT system.",
    reference: "TC AIM RAC -- Emergency Locator Transmitters",
  },
];
