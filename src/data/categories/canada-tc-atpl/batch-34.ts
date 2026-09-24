import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 34 -- Section 10: Radio
// Communications and Aids to Navigation, fourth pass. Original
// questions written from standard radio communication and
// navigation aid principles and the TP 690 syllabus (topic
// headings only, no sample questions). Covers ELT technology,
// datalink communication and surveillance, VOR/DME pairing, basic
// radio equipment concepts, and ground communication networks not
// yet addressed in batches 10, 17, or 25. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_34_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A 406 MHz Emergency Locator Transmitter (ELT), compared to an older 121.5 MHz analog-only ELT, offers the operational advantage of",
    options: [
      "operating only when the aircraft is on the ground, with no capability to transmit an emergency signal while the aircraft is actually in flight, a limitation inconsistent with the unit's design for activation during in-flight impact events.",
      "requiring no battery or power source of its own, drawing power exclusively and continuously from the aircraft's main electrical system.",
      "transmitting a digitally encoded signal, including a unique aircraft identification, to the COSPAS-SARSAT satellite system, along with generally more precise location capability than 121.5 MHz alone provides.",
      "being incapable of transmitting on 121.5 MHz at all, meaning a 406 MHz ELT provides no signal that a nearby aircraft's ADF or a search aircraft could home in on locally.",
    ],
    answer: 2,
    explain:
      "A 406 MHz ELT transmits a digitally coded burst containing identification information (helping COSPAS-SARSAT identify which aircraft is in distress) and generally supports more accurate satellite-based location determination than the older 121.5 MHz-only analog signal did -- and most 406 MHz ELTs also continue to transmit a lower-power 121.5 MHz homing signal alongside the digital 406 MHz burst, so local homing capability isn't lost; the unit has its own independent battery and functions on activation regardless of aircraft electrical power or whether the aircraft is airborne or on the ground.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "At many VOR facilities collocated with DME, the DME channel is automatically paired to the VOR frequency, meaning",
    options: [
      "the VOR and DME components operate on entirely unrelated frequency bands with no automatic tuning relationship, requiring two fully independent frequency selections for every use.",
      "only the DME distance information is available at such a facility, with no VOR bearing information provided at all.",
      "the pairing exists solely for military TACAN use, with civil VOR/DME operations specifically excluded from any frequency pairing arrangement.",
      "selecting the VOR frequency on the navigation receiver also automatically tunes the associated DME channel, without the pilot needing to separately select a DME channel.",
    ],
    answer: 3,
    explain:
      "VOR and DME frequencies (or VOR and TACAN channels at a VORTAC) are standardized so that a specific VOR frequency corresponds to one specific DME channel -- letting a pilot's navigation receiver automatically tune the paired DME simply by selecting the VOR frequency, rather than requiring the two to be separately tuned, a convenience that applies to civil VOR/DME operation generally, not to a military-only arrangement, and both bearing and distance information remain available together at such a facility.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Controller-Pilot Data Link Communications (CPDLC) allows certain routine ATC messages (such as an altitude or route clearance) to be",
    options: [
      "exchanged as text-based data messages between the aircraft and ATC, supplementing (rather than entirely replacing) voice communication.",
      "transmitted exclusively as voice communication, with 'data link' in the name referring only to how the voice signal itself is technically encoded.",
      "used solely for weather information, with clearances, instructions, and other routine ATC messages excluded from CPDLC use entirely.",
      "sent only from the aircraft to ATC, with ATC entirely unable to send any message to the aircraft through the same system.",
    ],
    answer: 0,
    explain:
      "CPDLC is genuinely a text/data-based communication method, letting certain routine clearances, instructions, and requests be exchanged between controller and flight crew without a voice transmission -- reducing frequency congestion and, on long over-water or remote routes, working around some of the limitations of HF voice -- but it's normally used alongside, not as a wholesale replacement for, voice communication (which remains necessary for many situations), and it supports two-way exchange between ATC and the aircraft, not a one-way aircraft-to-ATC channel or a weather-only application.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Automatic Dependent Surveillance-Contract (ADS-C), used particularly in oceanic and remote airspace with little or no radar coverage, provides ATC with",
    options: [
      "continuous radar-equivalent surveillance identical in method and update rate to secondary surveillance radar, using ground-based radar antennas.",
      "periodic aircraft position (and other flight data) reports, automatically transmitted via a data link at agreed intervals or events, without requiring a separate voice position report.",
      "no position information at all, providing only aircraft identification with no positional data included in any ADS-C report, an omission that would defeat the surveillance purpose ADS-C is specifically contracted to provide.",
      "a broadcast-only service, in which the aircraft transmits position data to all aircraft and ground stations in range without any specific data 'contract' agreement involved.",
    ],
    answer: 1,
    explain:
      "ADS-C works on a 'contract' basis -- the aircraft's system automatically sends position and other flight data reports to ATC via a data link according to agreed parameters (periodic, event-driven, or on request), which is particularly valuable in oceanic and remote regions lacking radar coverage, letting ATC maintain effective surveillance without needing a separate voice position report each time; it's a targeted, contracted exchange (distinguishing it from ADS-B's broadcast-to-all approach) rather than radar-based, identification-only, or broadcast-only surveillance.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Satellite communication (SATCOM) voice, available on some aircraft for oceanic and remote-area operations, offers an advantage over HF voice communication in that SATCOM",
    options: [
      "is usable only over land areas, making it entirely unsuitable for the oceanic and remote-area communication role that HF traditionally serves.",
      "relies on the same ionospheric skywave propagation mechanism as HF, making it equally susceptible to the same atmospheric and solar disturbances, a claim at odds with SATCOM's actual reliance on satellite relay rather than skywave propagation.",
      "generally provides clearer voice quality less affected by atmospheric and solar activity, since it relies on satellite relay rather than ionospheric skywave propagation.",
      "requires no aircraft equipment of any kind, with the ground station alone responsible for establishing and maintaining the entire communication link, a claim inconsistent with the dedicated antenna and avionics a SATCOM-equipped aircraft actually carries.",
    ],
    answer: 2,
    explain:
      "HF communication depends on skywave propagation through the ionosphere, which is inherently sensitive to atmospheric conditions and solar activity, sometimes degrading intelligibility -- SATCOM instead relays voice (and data) via satellite, generally providing more consistent voice quality less affected by those atmospheric factors, which is exactly why it's increasingly used to complement or supplement HF for oceanic and remote-area communication rather than sharing HF's same propagation vulnerabilities, being land-only, or requiring no aircraft equipment at all (a SATCOM-equipped aircraft carries its own antenna and avionics).",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VOR receiver's TO/FROM indicator resolves an ambiguity by showing the pilot",
    options: [
      "whether the VOR station itself is transmitting a valid, usable signal, functioning as a station reliability flag rather than a directional indication.",
      "whether the aircraft is currently flying toward or away from its programmed destination waypoint, regardless of the VOR station's own position.",
      "the aircraft's current groundspeed relative to the selected VOR radial, a speed rather than a directional indication.",
      "whether, given the currently selected course on the OBS, flying that course would take the aircraft toward or away from the VOR station.",
    ],
    answer: 3,
    explain:
      "Because a given radial line through a VOR station has two directions along it (toward the station or away from it), the same OBS-selected course could, without further information, be ambiguous -- the TO/FROM indicator resolves that by showing whether flying the selected course would take the aircraft toward or away from the station, a directional interpretation aid distinct from a destination-tracking indication, a signal-validity flag (that's a separate NAV flag function), or any groundspeed information.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VHF radio's squelch function is used to",
    options: [
      "suppress background noise (static) heard on the speaker when no signal is being received, muting the receiver's audio output until a signal strong enough to open the squelch is present.",
      "record incoming radio transmissions for later playback, functioning as a cockpit voice recorder for radio communications specifically.",
      "automatically select the correct communication frequency for the aircraft's current position, removing the need for manual frequency selection.",
      "increase the radio's transmission power output, allowing communication over a longer range than would otherwise be possible.",
    ],
    answer: 0,
    explain:
      "Squelch is a noise-management function: it keeps the receiver's audio muted during the background static present when no actual transmission is being received, and opens (allows audio through) once a signal of sufficient strength is detected -- a receiver-side noise-suppression feature, not something that boosts transmit power, automates frequency selection, or records transmissions.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Standard aviation VHF voice communication generally operates as a simplex (rather than duplex) system, meaning",
    options: [
      "the aircraft transmits on one frequency while continuously receiving on an entirely different, independent frequency at the same time, by definition.",
      "only one party (either the pilot or the controller) can transmit on a given frequency at a time, with simultaneous transmissions from both sides resulting in a garbled or blocked signal.",
      "the terms 'simplex' and 'duplex' describe signal encoding methods only, with no bearing on whether simultaneous two-way transmission is possible, a characterization inconsistent with how the terms are actually used to describe channel capability.",
      "both the pilot and the controller can transmit and receive simultaneously on the same frequency without any risk of one transmission blocking or interfering with the other.",
    ],
    answer: 1,
    explain:
      "A simplex system shares a single frequency for both directions of communication, meaning only one party can be transmitting (and being clearly heard) at a time -- if both the pilot and the controller key their microphones simultaneously, the resulting transmissions can block or garble each other, which is exactly why standard radio discipline (listening before transmitting, brief and clear exchanges) matters; this is distinct from a duplex system (which uses separate frequencies for each direction, allowing simultaneous two-way conversation) and isn't merely an encoding-method distinction.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VHF Direction Finding (VDF) service, where available from an ATC or flight service facility, allows the ground station to",
    options: [
      "determine the aircraft's altitude precisely, functioning as a ground-based altitude verification service rather than a bearing-finding one.",
      "remotely control the aircraft's own VHF radio frequency selection from the ground, without any pilot action required.",
      "determine the aircraft's bearing from the ground station based on the aircraft's own VHF transmission, and relay that bearing (or a suggested heading) back to help a pilot who may be lost or disoriented.",
      "operate only during a declared emergency, with no application to routine navigational assistance for an uncertain-position pilot, a restriction narrower than how VDF assistance is actually made available to a pilot who becomes uncertain of position.",
    ],
    answer: 2,
    explain:
      "A VDF service uses ground-based direction-finding equipment to determine the bearing of an aircraft's own VHF transmission relative to the ground station, letting the station relay that bearing (or a heading to steer) back to the pilot -- a practical aid for a pilot who has become uncertain of position, whether or not a full emergency has been declared, and it's a bearing-finding, not an altitude-measuring or remote-frequency-control, function.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The ICAO phonetic alphabet (Alpha, Bravo, Charlie, and so on) is used in aviation radio communication primarily to",
    options: [
      "apply only to military aviation communication, with civil aviation using an entirely different, non-standardized set of letter substitutions.",
      "replace numbers entirely in radio communication, with numeric digits no longer spoken or transmitted at all once the phonetic alphabet is used.",
      "encode messages so that only trained aviation personnel can understand their content, functioning as a form of communication security rather than clarity.",
      "reduce the chance that individual letters (such as when spelling an aircraft registration or a waypoint identifier) are misheard or confused with similar-sounding letters over a radio transmission.",
    ],
    answer: 3,
    explain:
      "The phonetic alphabet exists specifically to improve clarity: letters like 'B,' 'D,' 'T,' and 'V' can sound very similar over a radio transmission, especially with static or a poor connection, and assigning each letter a distinct, standardized word (Bravo, Delta, Tango, Victor) sharply reduces that ambiguity -- it's a single standard used across civil (and largely aligned with military) aviation worldwide, it coexists with (not replaces) spoken numbers, and its purpose is clarity, not deliberate security-through-obscurity.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Standardized ATC phraseology, as opposed to informal or conversational radio communication, is emphasized primarily because it",
    options: [
      "reduces ambiguity and the chance of misunderstanding by using a consistent, well-defined set of terms and formats that both pilots and controllers are trained to expect.",
      "is required only in a pilot's native language, with any use of English phraseology exempt from any standardization requirement, a distinction not reflected in how standardized phraseology is actually applied across languages.",
      "applies only to emergency communication, with routine, non-emergency ATC exchanges free to use any wording the pilot or controller prefers.",
      "is intended primarily to sound more professional, with reducing ambiguity or miscommunication being an incidental rather than a primary purpose.",
    ],
    answer: 0,
    explain:
      "Standard phraseology exists because a shared, predictable set of terms and phrase structures -- for clearances, readbacks, position reports, and so on -- is far less prone to being misheard, misinterpreted, or ambiguous than free-form conversational language, particularly across accents, languages, and imperfect radio conditions; the professionalism benefit is real but secondary to that core safety purpose, and standardized phraseology applies to routine communication generally, in whatever language is being used, not to emergencies alone.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Traffic Information Service-Broadcast (TIS-B) is a ground-based service intended to",
    options: [
      "transmit information only to ATC ground facilities, with no data broadcast to, or usable by, an aircraft in flight.",
      "supplement ADS-B In by rebroadcasting traffic information for nearby aircraft that are not themselves transmitting ADS-B Out, giving an ADS-B In-equipped aircraft a more complete traffic picture.",
      "provide weather information exclusively, with no traffic-related data included in a TIS-B broadcast at all, a scope that would leave the service unable to fill any radar-derived traffic coverage gap for ADS-B In users.",
      "replace ADS-B entirely, making both ADS-B Out and ADS-B In equipment unnecessary once TIS-B coverage is available.",
    ],
    answer: 1,
    explain:
      "TIS-B fills a specific gap: within areas of radar (or other surveillance) coverage, it takes traffic detected by ground-based systems -- including aircraft that aren't themselves equipped with, or transmitting, ADS-B Out -- and rebroadcasts that traffic information for reception by ADS-B In-equipped aircraft, giving those aircraft visibility of traffic they might otherwise miss; it supplements rather than replaces ADS-B, is traffic- (not weather-) focused, and is broadcast for aircraft use, not restricted to ground facilities.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "121.5 MHz is widely referred to as a 'guard' frequency in aviation because",
    options: [
      "it is reserved exclusively for ground vehicle communication at towered aerodromes, with no aircraft-related use of the frequency at all.",
      "it physically blocks or 'guards against' any other frequency being used nearby, functioning as an interference-prevention mechanism rather than a monitored channel.",
      "many aircraft and ATC facilities monitor it in the background alongside their primary working frequency, specifically to catch a distress or urgency call that might otherwise go unheard.",
      "it is the sole frequency used for all routine, non-emergency air traffic control communication worldwide, replacing every other assigned working frequency.",
    ],
    answer: 2,
    explain:
      "121.5 MHz earns the 'guard' name from the practice of monitoring it passively, in the background, in addition to whatever working frequency is actively being used for routine communication -- so that a distress or urgency transmission on 121.5 has a good chance of being heard even by a station not specifically listening for it -- rather than serving as the frequency for all routine ATC traffic, a ground-vehicle-only channel, or a literal interference-blocking mechanism.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Digital ATIS (D-ATIS), compared to a conventional voice-broadcast ATIS, delivers current aerodrome information to the crew",
    options: [
      "exclusively to ATC facilities, with no version of D-ATIS information available to, or intended for, the flight crew at all.",
      "using an identical repeating voice broadcast, with 'digital' in the name referring only to the internal method used to generate that voice, with no text component at all.",
      "only after landing, with D-ATIS specifically unavailable for a crew to review during any pre-arrival planning while still in flight.",
      "as a text-based data message, which can be received and displayed in the cockpit via data link, in addition to or instead of listening to a repeating voice broadcast.",
    ],
    answer: 3,
    explain:
      "D-ATIS delivers the same kind of current aerodrome information (weather, active runway, relevant NOTAMs, and so on) as a conventional ATIS, but as a text-based data-link message that can be requested and displayed in the cockpit -- convenient during a busy phase of flight or in areas of poor voice reception -- rather than requiring the crew to tune in and listen to a continuously repeating voice loop, and it's available for planning purposes before arrival, not just after landing, and applies to departure information as well as destination arrival information.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The Aeronautical Fixed Telecommunication Network (AFTN) is best described as",
    options: [
      "a ground-based message-switching network used to distribute aeronautical fixed-service messages, such as flight plans and NOTAMs, between aviation authorities, ATC units, and other authorized addressees.",
      "an air-to-ground voice communication frequency reserved exclusively for use during a declared in-flight emergency.",
      "a radar surveillance network used by ATC to detect and track aircraft position, unrelated to any message distribution function.",
      "a satellite-based aircraft tracking system, functionally equivalent to ADS-C, intended specifically for oceanic surveillance, a description that overlooks AFTN's actual role as a ground-to-ground message-switching network rather than a surveillance system.",
    ],
    answer: 0,
    explain:
      "AFTN is fundamentally a ground-to-ground message network -- a standardized system for distributing aeronautical fixed-service traffic such as filed flight plans, NOTAMs, and other operational messages among ATC units, aviation authorities, and other authorized recipients -- rather than a voice communication frequency, a surveillance/tracking system like ADS-C, or a radar network; it's the ground-side messaging backbone behind information that's ultimately relayed on to pilots and operators through other means.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A given VHF communication frequency can generally be reassigned and reused at a different, sufficiently distant location within the same broader airspace system primarily because",
    options: [
      "VHF signals travel effectively unlimited distances via reliable skywave propagation, making frequency reuse dependent on time-of-day scheduling rather than geographic separation.",
      "VHF propagation is essentially limited to line-of-sight range, so two stations far enough apart (or separated by terrain) are unlikely to cause co-channel interference with one another.",
      "VHF radios automatically detect and filter out any interference from a distant station using the same frequency, removing the need for any geographic separation planning at all.",
      "every VHF frequency is, by regulation, unique and permanently assigned to a single physical location worldwide, making frequency reuse of any kind impossible.",
    ],
    answer: 1,
    explain:
      "Because VHF propagation is essentially line-of-sight and doesn't reliably bend around the Earth's curvature or reflect off the ionosphere the way HF skywave does, two ground stations using the same VHF frequency but separated by enough distance (or by terrain blocking line-of-sight) generally won't interfere with each other -- which is exactly what allows frequency planners to reuse the limited VHF spectrum across different, sufficiently separated locations, rather than needing a permanently unique frequency for every station or relying on automatic interference filtering or time-of-day scheduling.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
];
