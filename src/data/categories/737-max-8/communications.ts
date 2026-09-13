import type { Question } from "../../../types";

// 737 MAX 8 - Communications. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_COMMUNICATIONS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Communications",
    q: "Why do transport aircraft typically carry more than one independent VHF communication radio?",
    options: [
      "So the crew retains a working radio for ATC communication even if one VHF set fails, and can monitor a second frequency (such as a company or backup frequency) at the same time",
      "Because a single VHF radio is physically incapable of transmitting on more than one frequency ever",
      "Extra VHF radios exist solely to control cabin announcements",
      "Multiple VHF radios are fitted only for aesthetic/panel-symmetry reasons",
    ],
    answer: 0,
    explain:
      "Carrying multiple independent VHF radios gives redundancy - a lost or malfunctioning radio doesn't leave the crew without a means of talking to ATC - while also letting the crew simultaneously monitor more than one frequency, such as keeping one radio on the current ATC frequency while another listens to a company or secondary frequency.",
    reference: "Communications - VHF Radios",
  },
  {
    id: 2,
    system: "Communications",
    q: "What is the general purpose of an audio control panel (ACP) at each pilot's station?",
    options: [
      "It lets each pilot independently select which radios and navigation aid audio sources they want to transmit on and listen to",
      "It controls cabin lighting brightness",
      "It is used only to adjust engine parameters",
      "It has no selectable function and is a fixed, non-adjustable panel",
    ],
    answer: 0,
    explain:
      "Each pilot's audio control panel lets them individually choose which radio to transmit on, and which combination of radios and navigation aid audio identifiers to listen to, so the two pilots can each be set up differently (for example, one monitoring ATC while the other monitors a company frequency) rather than being forced to share one fixed audio setup.",
    reference: "Communications - Audio Control Panel",
  },
  {
    id: 3,
    system: "Communications",
    q: "What is the general purpose of a SELCAL (selective calling) system?",
    options: [
      "It lets a ground station alert the crew with a distinctive chime/light when they're specifically being called, without requiring the crew to continuously monitor the radio themselves",
      "It automatically pilots the aircraft toward the calling ground station",
      "It replaces the need for any radio equipment at all",
      "It only works while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "SELCAL assigns the aircraft a unique code that a ground station can transmit to trigger a distinctive cockpit chime and light, meaning the crew doesn't have to continuously listen to a frequency (which is especially useful on long-range flights using less reliable long-distance radio) - they'll be alerted specifically when they're the one being called.",
    reference: "Communications - SELCAL",
  },
  {
    id: 4,
    system: "Communications",
    q: "In general terms, what does an ACARS-type data link system allow the aircraft to do?",
    options: [
      "Automatically or manually exchange short digital messages with ground-based company/ATC systems, such as position reports, weather requests, or maintenance data, without a voice radio call",
      "Only ever transmit voice communications, with no digital data capability",
      "Replace the transponder entirely",
      "Function only while parked at the gate with external power connected",
    ],
    answer: 0,
    explain:
      "A data link system of this kind lets the aircraft exchange short digital messages with ground systems - things like automatic position/progress reports, requested weather information, or maintenance/engine data - without needing a voice radio call for each exchange, reducing radio frequency congestion and giving a written record of what was sent.",
    reference: "Communications - Data Link (ACARS-Type System)",
  },
  {
    id: 5,
    system: "Communications",
    q: "Why is 121.5 MHz generally significant in aviation communications?",
    options: [
      "It's the internationally recognized emergency/guard frequency, commonly monitored to help reach an aircraft in distress or relay an emergency call",
      "It is the frequency used exclusively for routine company communications",
      "It is a frequency reserved only for ground vehicle communications at an airport",
      "It has no special significance and is treated like any other VHF frequency",
    ],
    answer: 0,
    explain:
      "121.5 MHz is internationally designated as the VHF emergency (guard) frequency, widely monitored by ATC facilities and many aircraft, which is why it's used to help establish contact with an aircraft in distress or to relay urgent information when normal working frequencies aren't getting through.",
    reference: "Communications - Emergency/Guard Frequency",
  },
  {
    id: 6,
    system: "Communications",
    q: "Why might an aircraft still carry HF radio for long-range operations, despite VHF generally offering clearer audio quality?",
    options: [
      "HF radio waves can refract off the ionosphere and travel far beyond the line-of-sight range that limits VHF, making HF useful over oceanic or remote areas lacking other coverage",
      "HF is used only for entertainment audio, never for actual communication",
      "HF has exactly the same propagation characteristics and range as VHF",
      "HF is required only for ground communications, never in flight",
    ],
    answer: 0,
    explain:
      "VHF propagation is essentially line-of-sight, limiting its range at typical cruise altitudes to a few hundred miles; HF, by contrast, can refract off the ionosphere and travel much further, which is why it's retained for long-range communication over oceanic or remote areas where VHF coverage and satellite communication may not be available.",
    reference: "Communications - HF Radio for Long Range",
  },
  {
    id: 7,
    system: "Communications",
    q: "What is the general advantage of a satellite communication (SATCOM) system over VHF/HF radio?",
    options: [
      "It can provide reliable voice and/or data communication over a very wide coverage area, including regions where VHF and HF may be unreliable or unavailable",
      "It only functions while the aircraft is on the ground",
      "It has a shorter effective range than VHF radio",
      "It cannot be used for any data communication, only voice",
    ],
    answer: 0,
    explain:
      "A satellite communication system routes voice and/or data through orbiting satellites rather than depending on line-of-sight VHF range or ionospheric HF propagation, giving much broader and more consistent coverage - particularly valuable over oceanic, polar, or remote regions where VHF and HF can be unreliable.",
    reference: "Communications - Satellite Communication (SATCOM)",
  },
  {
    id: 8,
    system: "Communications",
    q: "What is the general purpose of the cabin public address (PA) system?",
    options: [
      "It lets flight and cabin crew make announcements audible throughout the passenger cabin, such as safety briefings or operational updates",
      "It is used only for private crew-to-crew conversations, never heard by passengers",
      "It functions only while the aircraft is on the ground",
      "It replaces the need for any cabin crew communication equipment at all",
    ],
    answer: 0,
    explain:
      "The PA system is specifically intended to broadcast announcements - from the flight deck or cabin crew - so they're audible to passengers throughout the cabin, covering things like safety briefings, seatbelt sign reminders, and operational updates that need to reach everyone on board.",
    reference: "Communications - Public Address System",
  },
  {
    id: 9,
    system: "Communications",
    q: "How does the cabin interphone system generally differ in purpose from the public address system?",
    options: [
      "The interphone provides private point-to-point voice communication between crew stations (flight deck and cabin crew positions), while the PA broadcasts announcements to all passengers",
      "They are simply two different names for exactly the same system",
      "The interphone is used only to talk to ground crew, never other flight or cabin crew",
      "The PA is used for crew-to-crew calls, while the interphone broadcasts to passengers",
    ],
    answer: 0,
    explain:
      "The interphone system is built for private, point-to-point communication between specific crew stations - such as a flight deck call to a particular cabin crew position - which is a distinct function from the public address system's job of broadcasting a single announcement out to the entire passenger cabin at once.",
    reference: "Communications - Cabin Interphone System",
  },
  {
    id: 10,
    system: "Communications",
    q: "Why does an aircraft transponder automatically report pressure altitude to air traffic control radar (Mode C/S), rather than only reporting horizontal position?",
    options: [
      "Reporting altitude lets ATC (and other aircraft's collision avoidance systems) determine vertical separation, not just lateral position, which is essential for safely separating traffic at different flight levels",
      "Altitude reporting exists purely as a historical feature with no operational use today",
      "It is used only to help the crew navigate, with no benefit to ATC",
      "Transponders are physically incapable of transmitting anything besides altitude",
    ],
    answer: 0,
    explain:
      "Knowing an aircraft's lateral position alone isn't enough to safely separate traffic that may be at different altitudes along similar tracks; automatically reporting pressure altitude alongside identification lets ATC (and systems like traffic-alert and collision avoidance equipment on other aircraft) assess vertical separation as well as lateral position.",
    reference: "Communications - Transponder Altitude Reporting",
  },
  {
    id: 11,
    system: "Communications",
    q: "What is the general purpose of a dedicated 'company' radio frequency, separate from the frequency used to talk to air traffic control?",
    options: [
      "It lets the crew communicate operational information with their own operations/dispatch staff without tying up or cluttering the ATC frequency",
      "It is used only by air traffic control, never by the operating crew",
      "It replaces the need for any ATC communication entirely",
      "It functions only while the aircraft is parked at the gate",
    ],
    answer: 0,
    explain:
      "A company frequency gives the crew a channel for operational communication with their own operations or dispatch function - things like arrival timing, maintenance status, or gate information - separate from the ATC frequency, which keeps that discussion off the channel ATC needs kept clear for controlling traffic.",
    reference: "Communications - Company Frequency",
  },
  {
    id: 12,
    system: "Communications",
    q: "Why does an emergency locator transmitter (ELT) generally transmit on both 121.5 MHz and 406 MHz?",
    options: [
      "406 MHz supports precise, satellite-relayed identification and location of a distress signal, while 121.5 MHz remains useful for closer-range homing by search aircraft or rescue teams",
      "Both frequencies serve exactly the same purpose with no distinction",
      "121.5 MHz is used only for routine communications, unrelated to distress",
      "406 MHz is used only during normal flight, never during an actual emergency",
    ],
    answer: 0,
    explain:
      "406 MHz ELT transmissions are relayed via satellite and carry an identifying code that helps rescue authorities quickly narrow down which aircraft is in distress and roughly where, while the aircraft's continued transmission on 121.5 MHz supports more localized homing once search and rescue assets are in the vicinity - the two frequencies serve complementary roles in the overall search-and-rescue process.",
    reference: "Communications - ELT Frequencies",
  },
  {
    id: 13,
    system: "Communications",
    q: "Why might an interphone call using a distinct emergency/priority signal be treated differently from a routine interphone call between crew stations?",
    options: [
      "A priority signal lets the calling station cut through and get immediate attention at the receiving end, appropriate for an urgent situation rather than a routine coordination call",
      "Priority calls are always ignored in favor of routine calls",
      "There is no difference in how the two types of calls are handled",
      "Priority signaling is used only for non-urgent administrative messages",
    ],
    answer: 0,
    explain:
      "Interphone systems commonly support a distinct priority or emergency call signal precisely so an urgent call - reporting a fire, an emergency, or another time-critical situation - stands out and demands immediate attention from the receiving crew station, rather than blending in the same way a routine coordination call would.",
    reference: "Communications - Emergency vs Routine Interphone Priority",
  },
  {
    id: 14,
    system: "Communications",
    q: "Why does a VHF data link system typically use a separate radio/channel from the VHF voice communication radios?",
    options: [
      "Keeping data link traffic on its own dedicated channel avoids interfering with (or being interfered with by) ongoing voice communications on the working ATC frequency",
      "Data link messages are always sent over the exact same channel as voice communications, with no separation",
      "It is done purely to reduce the aircraft's overall weight",
      "Separate channels exist only to allow different color-coding on the radio panel",
    ],
    answer: 0,
    explain:
      "Using a dedicated channel for data link communication keeps that digital traffic from competing with or disrupting ongoing voice communication on the working ATC frequency, letting both types of communication happen independently rather than one blocking the other.",
    reference: "Communications - VHF Data Link Channel Separation",
  },
  {
    id: 15,
    system: "Communications",
    q: "Why does air traffic control typically assign an aircraft a discrete transponder code for a given flight, rather than every aircraft using the same code?",
    options: [
      "A unique discrete code lets ATC systems and other equipped aircraft distinguish and track that specific aircraft individually, rather than confusing it with other traffic",
      "Discrete codes are assigned only to aircraft that have lost radio communication",
      "All aircraft are actually required to use the exact same universal code at all times",
      "Discrete codes are used only for aircraft operating outside controlled airspace",
    ],
    answer: 0,
    explain:
      "Assigning each aircraft its own discrete transponder code lets ATC systems (and equipment on other aircraft, such as traffic-alert and collision avoidance systems) correctly associate a specific radar/data return with that particular flight, avoiding the confusion that would result if multiple aircraft shared an identical code.",
    reference: "Communications - Transponder Discrete Code Assignment",
  },
];
