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
];
