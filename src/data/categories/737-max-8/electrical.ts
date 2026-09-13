import type { Question } from "../../../types";

// 737 MAX 8 - Electrical system. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_ELECTRICAL_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Electrical",
    q: "In the normal electrical configuration, what are the primary sources of AC electrical power?",
    options: [
      "Two engine-driven generators, one per engine, each capable of powering the entire aircraft electrical system alone",
      "A single generator on one engine only, with the other engine acting purely as a mechanical backup",
      "Ground power alone, with no onboard generation capability once airborne",
      "A ram air turbine that supplies all AC power throughout the flight",
    ],
    answer: 0,
    explain:
      "Each engine drives its own integrated generator, and either one is sized to supply the entire aircraft's electrical loads on its own if the other is lost, giving full redundancy without needing both simultaneously.",
    reference: "Electrical - General/Description",
  },
  {
    id: 2,
    system: "Electrical",
    q: "Besides ground operations, what electrical role can the APU generator generally serve in flight?",
    options: [
      "It can be started and used as a backup AC power source if an engine-driven generator is lost, typically up to a defined maximum altitude",
      "It can only ever be used while the aircraft is parked on the ground",
      "It permanently replaces one engine generator for the entire flight, with no altitude restriction",
      "It provides hydraulic power only, never electrical power",
    ],
    answer: 0,
    explain:
      "The APU generator isn't limited to ground use - it can be started in flight and picked up as a backup AC source if an engine generator fails, though its availability as an inflight electrical source is capped at a defined maximum altitude in the approved limitations.",
    reference: "Electrical - APU Generator",
  },
  {
    id: 3,
    system: "Electrical",
    q: "If both engine-driven generators and the APU generator are all lost, how does the standby electrical system generally keep essential AC-powered instruments alive?",
    options: [
      "The battery, through a static inverter, supplies limited AC power to a standby bus feeding essential flight instruments",
      "AC power is completely lost with no possible recovery until an engine restarts",
      "A wind-driven generator automatically deploys into the airstream to restore full AC power",
      "The standby system can only supply DC power, never any AC power",
    ],
    answer: 0,
    explain:
      "In this fully degraded condition, the battery still supplies a static inverter, which converts that DC into limited AC power for a standby bus - keeping a minimal set of essential flight instruments and radios alive even with every generator lost.",
    reference: "Electrical - Standby Power System",
  },
  {
    id: 4,
    system: "Electrical",
    q: "What is the general purpose of a 'hot battery bus' in the electrical system?",
    options: [
      "It remains connected directly to the battery at all times, even with the battery switch off, to power a small set of essential functions such as fire detection",
      "It only becomes active once both engine generators are online",
      "It is another name for the main AC bus fed by the generators",
      "It is disconnected from the battery whenever the aircraft is on external power",
    ],
    answer: 0,
    explain:
      "A hot battery bus is wired directly to the battery ahead of the battery switch, so it stays powered continuously - including with the battery switch off and no other electrical source connected - to keep essential items like fire detection and certain standby functions available at all times.",
    reference: "Electrical - Battery & Standby Buses",
  },
  {
    id: 5,
    system: "Electrical",
    q: "If one engine-driven generator fails in flight, what generally happens to the electrical bus that generator normally supplies?",
    options: [
      "A bus tie automatically reconfigures so the remaining generator (or another available source) picks up that bus, keeping it powered without crew action",
      "That bus and everything on it is simply lost for the rest of the flight",
      "The APU must be manually started before any power can be restored to that bus",
      "Only the battery can ever supply that bus following a generator loss",
    ],
    answer: 0,
    explain:
      "The electrical system is designed with automatic bus-tie logic so that losing one generator doesn't strand its bus - the system automatically reconfigures to feed it from the remaining generator or another available source, minimizing what the crew has to do manually.",
    reference: "Electrical - Bus Tie & Load Distribution",
  },
  {
    id: 6,
    system: "Electrical",
    q: "What is the general purpose of an external (ground) power receptacle?",
    options: [
      "It lets the aircraft's electrical systems run from a ground power unit before the engines or APU are started, without draining the battery",
      "It can only ever be used after both engines are already running",
      "It exists solely to charge the battery, with no other electrical function",
      "It is used only to power the cabin lighting during flight",
    ],
    answer: 0,
    explain:
      "An external power receptacle lets ground crews plug in a ground power unit to run aircraft systems - lighting, avionics, air conditioning - during servicing and before engine or APU start, avoiding unnecessary battery drain for routine ground operations.",
    reference: "Electrical - External Power",
  },
  {
    id: 7,
    system: "Electrical",
    q: "Why is a generator commonly driven through a constant-speed drive unit rather than being connected directly to the engine's own variable rotational speed?",
    options: [
      "Because the generator needs to be driven at a constant speed to produce a stable AC frequency, even though engine rotational speed varies with power setting",
      "Because a constant-speed drive increases engine thrust output",
      "Because generators cannot produce any power unless driven at a variable speed",
      "Because it eliminates the need for a generator altogether",
    ],
    answer: 0,
    explain:
      "AC electrical equipment generally needs a stable frequency to function correctly, but engine rotational speed changes continuously with power setting; a constant-speed drive sits between the engine and the generator specifically to keep the generator itself spinning at a constant speed, producing stable-frequency AC power regardless of how engine speed varies.",
    reference: "Electrical - Constant-Speed Drive",
  },
  {
    id: 8,
    system: "Electrical",
    q: "What is the general function of a transformer-rectifier unit (TRU) in the electrical system?",
    options: [
      "It converts AC power into DC power for the DC buses and battery charging",
      "It converts DC power into AC power for the main AC buses",
      "It generates electrical power independently of the generators",
      "It has no electrical function and is purely a structural mounting bracket",
    ],
    answer: 0,
    explain:
      "A transformer-rectifier unit steps down and converts available AC power into DC power, supplying the aircraft's DC buses and supporting battery charging - the reverse conversion direction from a static inverter, which instead turns DC into limited AC.",
    reference: "Electrical - Transformer-Rectifier Units",
  },
  {
    id: 9,
    system: "Electrical",
    q: "What is the general purpose of a battery charger in the electrical system?",
    options: [
      "It keeps the battery charged and topped up whenever AC power is available, so it's ready to supply its full capacity if it's ever needed as a power source",
      "It permanently disconnects the battery from the aircraft once installed",
      "It discharges the battery intentionally during normal operation",
      "It only operates while the aircraft is airborne, never on the ground",
    ],
    answer: 0,
    explain:
      "Whenever normal AC power is available, the battery charger keeps the battery topped up to its full charge, so that if the battery is later called on - for an engine/APU start, or as a standby power source - it can deliver its rated capacity rather than being found partially depleted.",
    reference: "Electrical - Battery Charger",
  },
  {
    id: 10,
    system: "Electrical",
    q: "What is the general purpose of automatic electrical 'load shedding' when the aircraft is operating on a reduced set of power sources?",
    options: [
      "Non-essential electrical loads are automatically disconnected so the remaining, more limited power source isn't overloaded and essential items stay powered",
      "It permanently disables the flight instruments to save power",
      "It only ever affects cabin lighting, never any other system",
      "It has no real function and exists purely as a cockpit indication",
    ],
    answer: 0,
    explain:
      "When the aircraft is reduced to a limited power source - such as the battery or a single generator - automatic load shedding disconnects non-essential loads so the available power isn't overwhelmed, preserving capacity for the flight-essential items that actually need to stay powered.",
    reference: "Electrical - Load Shedding",
  },
];
