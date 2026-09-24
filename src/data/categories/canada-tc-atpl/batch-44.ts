import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 44 -- Section 10: Radio
// Communications and Aids to Navigation, fifth pass. Original
// questions written from standard radio communication and
// navigation aid principles and the TP 690 syllabus (topic
// headings only, no sample questions). Covers data link broadcast
// services, station identification, distress/urgency call format,
// backup communication methods, and radio equipment redundancy not
// yet addressed in batches 10, 17, 25, or 34. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_44_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Flight Information Service-Broadcast (FIS-B), a ground-based data link service, is intended to provide equipped aircraft with",
    options: [
      "precision approach vertical guidance, a navigation rather than an information-broadcast function.",
      "two-way voice communication with ATC, a voice-based rather than a data-broadcast function despite the 'information service' name.",
      "weather and aeronautical information (such as NOTAMs and graphical weather products) broadcast for cockpit display, distinct from TIS-B's focus on traffic information.",
      "traffic information exclusively, making FIS-B and TIS-B functionally identical services under two different names.",
    ],
    answer: 2,
    explain:
      "FIS-B is specifically a weather- and aeronautical-information-focused broadcast service, delivering products such as NOTAMs and graphical weather information for cockpit display -- a distinct purpose from TIS-B (which focuses on traffic information), and it's a one-way data broadcast rather than a two-way voice communication channel, and it has no role in providing approach vertical guidance, which comes from an entirely separate source (an ILS glideslope, SBAS, or Baro-VNAV, covered elsewhere).",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Mode S transponder's 'squitter' -- a periodic, unsolicited broadcast transmission -- is significant because it",
    options: [
      "occurs only in direct response to a ground radar interrogation, making 'squitter' simply an alternate name for a standard interrogation reply.",
      "is used exclusively for altitude reporting, with no other data (such as identification or position) included in a Mode S squitter transmission.",
      "has no connection to ADS-B at all, an unrelated Mode S function despite frequently being described in that context by pilots, controllers, avionics manufacturers, and training materials alike.",
      "forms the technical basis for ADS-B Out, automatically broadcasting the aircraft's position and other data without requiring a ground station to first interrogate the transponder.",
    ],
    answer: 3,
    explain:
      "A squitter is transmitted automatically and periodically, without first being triggered by a ground station's interrogation -- it's this unsolicited, self-initiated broadcast capability that underlies ADS-B Out, letting the transponder continuously broadcast position and other data for reception by ground stations, other aircraft, and services like TIS-B, rather than depending on being interrogated first the way a conventional transponder reply does; it carries more than altitude alone (including identification and, for ADS-B, position data), and it is very much the technical foundation ADS-B Out relies on.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VOLMET broadcast service provides pilots with",
    options: [
      "a continuous, repeating voice broadcast of routine weather reports for a list of designated aerodromes, useful particularly on longer flights and in areas with limited other means of obtaining current weather.",
      "a continuous broadcast of NOTAMs only, with no weather-related information of any kind, including current METARs, TAFs, or forecasts of any sort, included in a VOLMET transmission at all, regardless of region or aerodrome.",
      "two-way voice communication specifically for filing or amending a flight plan, a flight-planning-transaction rather than a weather-information function.",
      "traffic information for nearby aircraft, making VOLMET functionally equivalent to a TIS-B service delivered by voice rather than by data link.",
    ],
    answer: 0,
    explain:
      "VOLMET is a scheduled, repeating voice broadcast of routine weather reports (METARs and similar) for a defined list of aerodromes along a region or route -- valuable for a flight crew wanting current weather for destination, alternate, or en route aerodromes without needing to establish two-way contact with each individual station, particularly useful over oceanic or remote areas; it's weather-focused (not a NOTAM-only service), it's a one-way listen-only broadcast (not a two-way flight-plan-filing channel), and it has nothing to do with traffic information.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "HF Data Link (HFDL), used by some aircraft for data communication (such as CPDLC messages) on long oceanic or remote routes, works by",
    options: [
      "operating only within VHF line-of-sight range, an inherently short-range service despite being intended for long oceanic routes.",
      "transmitting digital data over HF radio frequencies, offering a data communication alternative in areas that may lack SATCOM or VHF data link coverage.",
      "carrying voice communication only, with no data-message capability whatsoever despite the word 'Data' appearing directly in the service's own official name.",
      "transmitting data exclusively over a satellite relay, making 'HF' in HFDL's name a misnomer unrelated to how the system actually operates.",
    ],
    answer: 1,
    explain:
      "HFDL uses the same long-range HF radio frequencies traditionally associated with voice communication, but to carry digital data instead -- giving aircraft a data communication path in oceanic or remote regions that may have limited or no SATCOM or VHF data link coverage, complementing those other data link methods rather than requiring a satellite relay (a separate technology) or being limited to short VHF line-of-sight range, and it's genuinely a data (not voice) service, consistent with its name.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "VHF Data Link Mode 2 (VDL Mode 2), a common data link technology supporting services such as CPDLC, operates by",
    options: [
      "providing unlimited range regardless of the aircraft's altitude or distance from a ground station, free of any VHF line-of-sight constraint.",
      "carrying only voice, not data, communication of any sort, despite the phrase 'Data Link' appearing directly and prominently within the technology's own official designation, documentation, and marketing.",
      "transmitting digital data over VHF frequencies, offering higher data throughput than earlier VHF data link modes, but subject to the same general line-of-sight range limitation as VHF voice.",
      "transmitting data over HF frequencies exclusively, making 'VHF Data Link' a misleading name unrelated to the actual frequency band used.",
    ],
    answer: 2,
    explain:
      "VDL Mode 2 is a VHF-band digital data link technology, offering improved data throughput over earlier VHF data link modes, and it's genuinely used to support data services including CPDLC -- but because it operates in the VHF band, it remains subject to the same fundamentally line-of-sight range limitation that constrains VHF voice communication, rather than offering unlimited range, and it's a data (not voice) service consistent with its name, using the VHF band it's named for.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "243.0 MHz, the military UHF emergency/guard frequency, is related to 121.5 MHz (the civil VHF guard frequency) in that",
    options: [
      "243.0 MHz is used exclusively for routine, non-emergency air traffic control communication, unrelated to any distress or guard-frequency function.",
      "243.0 MHz replaces 121.5 MHz entirely in Canadian airspace, with 121.5 MHz no longer monitored or used for any purpose.",
      "243.0 MHz and 121.5 MHz are simply two entirely unrelated frequencies with no harmonic relationship or common monitoring practice connecting them.",
      "243.0 MHz is the exact harmonic of 121.5 MHz, and many search-and-rescue and interception resources monitor both frequencies together to ensure a distress signal is heard regardless of whether it's transmitted in the VHF or UHF band.",
    ],
    answer: 3,
    explain:
      "243.0 MHz is exactly double 121.5 MHz (its second harmonic), and this deliberate relationship is why military and search-and-rescue resources -- often UHF-equipped -- commonly monitor 243.0 MHz alongside (or as their equivalent of) the civil 121.5 MHz VHF guard frequency, helping ensure a distress transmission has a good chance of being heard whether it originates on VHF or UHF equipment; the two frequencies are deliberately related, not unrelated, 243.0 MHz is an emergency/guard frequency itself (not a routine ATC channel), and 121.5 MHz continues to be actively monitored, not replaced.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A designated air-to-air (aircraft-to-aircraft) communication frequency allows pilots to",
    options: [
      "communicate directly with other nearby aircraft, useful for coordinating traffic awareness or exchanging information without involving ATC, particularly in areas with limited ATC coverage.",
      "transmit data exclusively, with no voice communication capability whatsoever available on any designated air-to-air frequency regardless of aircraft type, equipment fit, or region of operation.",
      "communicate directly with ATC exclusively, making 'air-to-air' a misleading name for what is actually just another ATC working frequency.",
      "control another aircraft's transponder or navigation equipment remotely, a control rather than a communication function.",
    ],
    answer: 0,
    explain:
      "A designated air-to-air frequency gives pilots a direct means of voice communication with other nearby aircraft -- useful for coordinating mutual traffic awareness, relaying information, or simply talking to another aircraft without routing that communication through ATC, and particularly valuable in remote or uncontrolled areas with limited or no ATC coverage -- it's specifically aircraft-to-aircraft (not an ATC working frequency under another name), it carries voice communication (not data-only), and it has no remote-control function over another aircraft's equipment.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "VOR and NDB stations both broadcast a Morse code station identifier for the pilot to verify, but the two differ in that",
    options: [
      "only NDB stations broadcast any Morse code identifier at all, with VOR stations providing no identification signal of any kind for a pilot to verify against a current chart before relying on the indicated bearing.",
      "a VOR's identifier is typically three letters, while an NDB's identifier is typically two letters (or, for some, three), a difference reflecting each navaid's own identification convention.",
      "only VOR stations broadcast any Morse code identifier at all, with NDB stations providing no identification signal of any kind.",
      "both VOR and NDB stations use an identical, universal single-letter identifier, with no meaningful difference between the two navaid types' identification conventions.",
    ],
    answer: 1,
    explain:
      "Both navaid types broadcast a Morse code identifier specifically so a pilot can positively confirm they're tuned to the correct, functioning station rather than assuming the receiver display alone is sufficient -- but the identifier length convention differs: a VOR typically uses a three-letter identifier, while an NDB commonly uses a two-letter identifier (though some use three), a genuine, if not universally rigid, convention distinguishing the two navaid types rather than either type lacking an identifier altogether or the two sharing an identical single-letter scheme.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A transponder's Standby, ON, and ALT (Altitude) mode selections are distinguished in that",
    options: [
      "ON and ALT are simply two different names for an identical mode, with Standby being the only mode selection that changes the transponder's actual behaviour.",
      "Standby causes the transponder to reply with altitude information, while ALT disables any reply at all, the reverse of the modes' actual functions.",
      "Standby keeps the transponder powered but not replying to interrogations, ON replies with identification (Mode A) but not altitude, and ALT additionally replies with altitude information (Mode C).",
      "all three selections produce an identical transponder reply in every respect, with the mode selector serving no actual functional purpose regardless of which specific position is selected by the crew at the time.",
    ],
    answer: 2,
    explain:
      "The mode selector provides a genuine, escalating set of functions: Standby keeps the unit powered up and ready but not actively replying to ground or TCAS interrogations (useful, for example, on the ground before or after flight); ON causes the transponder to reply to interrogations with identification/code information (Mode A) but without altitude; and ALT adds altitude reporting (Mode C) to that reply -- a real functional distinction between the three settings, not an identical reply regardless of selection, and Standby specifically suppresses replies rather than adding altitude information to them.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A multi-mode receiver (MMR), integrating VOR, ILS, and GNSS navigation functions into a single avionics unit, offers the practical benefit of",
    options: [
      "eliminating the need for any antenna at all, since a multi-mode receiver is assumed capable of receiving all its signal types without any external antenna.",
      "providing engine performance data exclusively, an engine-monitoring rather than a navigation-related function despite the 'multi-mode' description.",
      "restricting the aircraft to using only one of its integrated navigation functions at any given time, with simultaneous use of more than one function considered impossible.",
      "reduced avionics weight, space, and complexity compared to carrying entirely separate, dedicated receivers for each individual navigation function.",
    ],
    answer: 3,
    explain:
      "Combining VOR, ILS, and GNSS receiver functions into a single integrated unit reduces the overall weight, physical space, wiring complexity, and maintenance burden compared to carrying entirely separate dedicated receivers for each function -- a practical avionics integration benefit, not an elimination of the need for external antennas (which are still required for each signal type the unit receives), and a well-designed MMR is generally capable of supporting more than one of its integrated functions as needed for the phase of flight, rather than being limited to just one function at a time; it has no engine-monitoring role.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The standard radiotelephony distress call ('MAYDAY,' repeated three times) is distinguished from the urgency call ('PAN PAN,' repeated three times) in that a distress call indicates",
    options: [
      "that the aircraft or its occupants are threatened by grave and imminent danger requiring immediate assistance, whereas an urgency call indicates a safety concern that does not yet rise to that same immediate level of danger.",
      "exactly the same severity of situation as an urgency call, with 'MAYDAY' and 'PAN PAN' being interchangeable terms carrying an identical meaning.",
      "a purely administrative flight plan change, with no actual safety-of-flight concern involved in a MAYDAY call at all.",
      "a situation less serious than an urgency call, the reverse of the actual relative severity the two terms are intended to convey.",
    ],
    answer: 0,
    explain:
      "MAYDAY (repeated three times) signals grave and imminent danger requiring immediate assistance, while PAN PAN (also repeated three times) signals an urgent safety concern that, while still needing priority attention, doesn't rise to that same immediate level of danger -- a genuine, standardized distinction in relative severity (distress being more serious than urgency), not an interchangeable pair of terms, not an administrative-only call, and certainly not the reverse severity ordering.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A standard position report, given by voice in a non-radar (procedural) environment, generally includes",
    options: [
      "the aircraft's fuel state exclusively, with position, altitude, and time information considered unrelated to what a position report is meant to convey.",
      "the aircraft's identification, current position, time over that position, altitude, and the next position/estimated time, along with any other information specifically requested.",
      "the aircraft's identification only, with no position, time, altitude, or next-position/estimate information of any kind included in a standard position report at all, regardless of the airspace being flown.",
      "weather conditions exclusively, with the aircraft's own position, altitude, and time information considered outside the scope of a position report.",
    ],
    answer: 1,
    explain:
      "In airspace without radar surveillance, a standard position report is how ATC maintains an accurate picture of where each aircraft actually is -- it typically includes the aircraft's identification, its current position, the time it was over that position, its altitude, and its next position with an estimated time, giving the controlling authority the information needed for procedural separation, rather than being limited to identification alone, weather information, or fuel state, though additional information can be requested as needed.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "When an aircraft is unable to establish direct radio contact with ATC or a flight service station, a common technique is to",
    options: [
      "wait silently with no further action, since no method exists for restoring or working around a lost direct communication link.",
      "abandon the flight and return to the departure aerodrome immediately, with no alternative communication option ever considered appropriate.",
      "request that another aircraft, able to communicate with both parties, relay messages between the aircraft and the ground station.",
      "immediately declare an emergency regardless of the actual severity of the communication difficulty, treating any radio contact failure as automatically requiring a distress call.",
    ],
    answer: 2,
    explain:
      "A relay through another aircraft -- one able to hear both the aircraft experiencing the communication difficulty and the ground station -- is a well-established, practical technique for getting a message through when direct contact isn't possible, letting the flight continue to communicate effectively without necessarily declaring an emergency (which is reserved for situations that actually meet the distress or urgency threshold) or abandoning the flight outright; it's a genuine, usable workaround rather than a situation with no available response.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Light gun signals from a control tower, used as a backup means of communication with an aircraft experiencing a radio failure, convey instructions through",
    options: [
      "a light signal used exclusively to communicate with ground vehicles, with no application to communicating with an aircraft in flight or on the runway/taxiway.",
      "a coded sequence of Morse code light flashes, requiring the pilot to decode a full Morse message rather than recognizing a simple colour/pattern combination.",
      "a single, universal light signal with only one possible meaning, regardless of its colour, intensity, or whether the light itself is being held steady or flashed at the aircraft on the ground or in flight.",
      "a specific colour and light pattern (steady or flashing red, green, or white) directed at the aircraft, with each combination carrying a standardized meaning such as 'cleared to land' or 'hold position.'",
    ],
    answer: 3,
    explain:
      "Light gun signals give the tower a standardized backup way to communicate essential instructions to an aircraft that has lost radio communication -- specific colour and steady/flashing combinations (such as a steady green for 'cleared to land/takeoff,' a steady red for 'give way/stop,' or a flashing red for 'runway unsafe, do not land') each carry a defined, memorized meaning, rather than a single universal signal, a ground-vehicle-only application, or a full Morse code message requiring decoding.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A flight deck intercom system, as distinguished from the aircraft's VHF/HF communication radios, is used for",
    options: [
      "communication between crew members themselves (flight deck to flight deck, or flight deck to cabin crew), rather than for communicating with an external station such as ATC.",
      "communicating exclusively with external ATC and other ground stations, making the intercom functionally identical in purpose to the VHF communication radios.",
      "transmitting navigation data exclusively, a data rather than a voice-communication function despite being described as an intercom system.",
      "broadcasting cabin passenger announcements exclusively, with no crew-to-crew communication function available through the intercom system under any circumstance at all, regardless of aircraft type.",
    ],
    answer: 0,
    explain:
      "The intercom is specifically an internal communication system, letting crew members talk to each other (between flight deck seats, or between the flight deck and cabin crew) without transmitting externally -- a genuinely distinct function from the VHF/HF communication radios, which are used to communicate with ATC and other external stations; while a passenger address (PA) function is often integrated into the same panel, the intercom's core purpose is internal crew communication, not external ATC contact, navigation data transmission, or passenger-announcement-only use.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Many transport aircraft carry two (or more) independent VHF communication radios primarily to",
    options: [
      "comply with a requirement that applies only to VFR-only aircraft, with IFR-capable aircraft specifically exempted from carrying more than one VHF communication radio.",
      "provide redundancy against a single radio failure and allow the crew to simultaneously monitor more than one frequency (such as the current ATC frequency and a company or guard frequency).",
      "provide a single combined transmission with twice the effective range, since multiple VHF radios are assumed to be used together to boost overall transmission distance.",
      "eliminate the need for any single radio to be tuned to the currently assigned ATC working frequency, since additional radios are assumed to handle that function exclusively.",
    ],
    answer: 1,
    explain:
      "Carrying multiple independent VHF communication radios provides genuine redundancy (a second radio remains available if the first fails) and lets the crew monitor more than one frequency at once -- for example, the current ATC working frequency on one radio while monitoring 121.5 MHz guard, a company frequency, or another relevant channel on a second radio -- a practical operational and safety benefit, not a range-boosting combination of radios, not a setup where the active ATC frequency is handled only by an 'extra' radio, and the practice applies broadly, including to IFR-capable transport aircraft, rather than being a VFR-only requirement.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation",
  },
];
