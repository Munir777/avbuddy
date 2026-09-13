import type { Question } from "../../../types";

// 737 MAX 8 - Doors & Emergency Equipment. Original, independently-written
// questions based on general/public 737-family systems knowledge (not
// sourced from any operator-specific or manufacturer-proprietary document) -
// no company, airline, publisher, or person names.
export const B737_DOORS_EQUIPMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Doors & Equipment",
    q: "Many transport aircraft main passenger doors use a 'plug' design. What does this generally mean?",
    options: [
      "The door is slightly larger than its own frame opening, so cabin pressure helps hold it firmly closed and sealed against the frame in flight",
      "The door is smaller than its frame opening, so it can never form a pressure seal",
      "It refers only to the door's paint color, with no structural meaning",
      "It means the door can be opened at any time regardless of cabin pressure",
    ],
    answer: 0,
    explain:
      "A plug-type door is built slightly larger than the opening it fits into, so once closed and with the cabin pressurized, the pressure differential itself helps push the door firmly against its frame and seals - which is also why these doors are specifically designed to be moved inward (or along a guide track) before they can swing open, rather than being openable directly outward while pressurized.",
    reference: "Doors - Passenger Door Design",
  },
  {
    id: 2,
    system: "Doors & Equipment",
    q: "What is the general purpose of arming an evacuation slide at a passenger door before departure?",
    options: [
      "So that opening the door in an emergency automatically deploys the slide, without needing a separate manual deployment step",
      "So that the door cannot be opened at all until landing",
      "So that the slide inflates immediately even while the door remains closed",
      "Arming has no functional effect and is purely a symbolic checklist item",
    ],
    answer: 0,
    explain:
      "Arming the slide mechanism links door-opening directly to slide deployment, so that if the door needs to be opened in an emergency, the slide automatically extends and inflates without the crew needing to perform a separate deployment action under time pressure - disarming it before a normal, non-emergency door opening prevents an unwanted automatic deployment.",
    reference: "Doors - Evacuation Slide Arming",
  },
  {
    id: 3,
    system: "Doors & Equipment",
    q: "How is an evacuation slide typically inflated once deployed?",
    options: [
      "By a compressed gas bottle (commonly carbon dioxide or nitrogen) that rapidly inflates it within seconds",
      "By the cabin's own air conditioning system blowing air into it",
      "By the crew manually pumping it up by hand",
      "By ram air entering through a scoop as the aircraft moves forward",
    ],
    answer: 0,
    explain:
      "A dedicated compressed gas bottle - typically carbon dioxide or nitrogen - is triggered as the slide deploys, rapidly inflating it within just a few seconds so it's ready to use almost immediately, which is essential given how little time may be available during an emergency evacuation.",
    reference: "Doors - Evacuation Slide Inflation",
  },
  {
    id: 4,
    system: "Doors & Equipment",
    q: "What is the general purpose of floor-proximity emergency escape path lighting?",
    options: [
      "To visually mark a path along the cabin floor toward the exits, remaining usable even if the cabin fills with smoke that obscures overhead lighting",
      "To illuminate the overhead luggage bins only",
      "To function only as normal cabin reading light",
      "To operate only when the aircraft is parked at the gate",
    ],
    answer: 0,
    explain:
      "Floor-level lighting is positioned low specifically because smoke tends to fill a cabin from the top down, so a path marked near the floor stays visible and usable for guiding passengers toward the exits even when smoke has obscured visibility at head height or above.",
    reference: "Doors - Emergency Escape Path Lighting",
  },
  {
    id: 5,
    system: "Doors & Equipment",
    q: "What is the general purpose of a smoke detector fitted in a lavatory or cargo compartment?",
    options: [
      "To automatically alert the crew to a developing smoke/fire condition in a compartment that isn't under continuous direct crew observation",
      "To automatically extinguish any fire without any crew or system action",
      "To measure cabin altitude rather than smoke",
      "To function only while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "Lavatories and cargo compartments aren't under constant direct crew observation the way the cabin aisle is, so a dedicated smoke detector gives an automatic alert if smoke develops there, prompting the crew to respond (and, in a cargo compartment, often triggering or supporting an automatic fire suppression system) well before the condition might otherwise be noticed.",
    reference: "Doors & Equipment - Smoke Detection",
  },
  {
    id: 6,
    system: "Doors & Equipment",
    q: "What is the general purpose of a door pressure indicator or lock showing whether it's safe to open a passenger door?",
    options: [
      "It warns the crew/ground staff that a pressurized cabin door should not be opened until cabin pressure has been equalized with the outside, since opening it under differential pressure would be extremely dangerous",
      "It shows only whether the door has been painted the correct color",
      "It indicates fuel quantity rather than door status",
      "It has no safety function and is purely a maintenance record",
    ],
    answer: 0,
    explain:
      "Opening a door while the cabin is still pressurized relative to the outside would be extremely hazardous, so this kind of indicator (or an associated lock/warning) helps ensure the door is only opened once cabin pressure has equalized with ambient - protecting against a dangerous premature opening attempt.",
    reference: "Doors - Pressure Indication/Lock",
  },
  {
    id: 7,
    system: "Doors & Equipment",
    q: "How do simple overwing emergency exits typically differ from the powered main entry/service doors?",
    options: [
      "They are generally lighter, simpler hatch-type exits that the operator (crew or a passenger, if needed) manually removes or swings open, rather than a heavier door with dedicated actuation and slide mechanisms",
      "They are always larger than the main entry doors",
      "They can only be opened from outside the aircraft, never from inside",
      "They serve no emergency function and are purely a structural access panel",
    ],
    answer: 0,
    explain:
      "Overwing exits are typically simpler, lighter hatch-type panels - designed to be manually removed or swung open by whoever operates them in an emergency - in contrast to the heavier, more mechanically complex main entry/service doors, which usually integrate their own evacuation slide and arming mechanism.",
    reference: "Doors - Overwing Emergency Exits",
  },
  {
    id: 8,
    system: "Doors & Equipment",
    q: "What is the general purpose of carrying life vests (and, on some routes, life rafts) as emergency equipment?",
    options: [
      "To support passengers and crew in the event of a ditching or an evacuation into water, particularly relevant for flights operating over water",
      "They are used only for routine flotation during normal flight",
      "They replace the need for any other emergency equipment",
      "They are required only for flights that never cross any body of water",
    ],
    answer: 0,
    explain:
      "Life vests (and, depending on the specific route and regulatory requirements, life rafts) are carried to support occupants in the water following a ditching or a water-adjacent evacuation - equipment whose carriage requirement is generally tied to how much of the route is flown over water and how far from land.",
    reference: "Doors - Life Vests & Rafts",
  },
  {
    id: 9,
    system: "Doors & Equipment",
    q: "What is the general purpose of portable protective breathing equipment (PBE) carried for crew use?",
    options: [
      "It supplies the wearer with breathable air/oxygen and eye protection so a crew member can move through and fight a smoke-filled area without being incapacitated by the smoke themselves",
      "It is a passenger-only item, never intended for crew use",
      "It is used only to communicate with air traffic control",
      "It functions only when the cabin is fully depressurized",
    ],
    answer: 0,
    explain:
      "Protective breathing equipment gives a crew member their own supply of breathable air/oxygen along with eye protection, letting them move through smoke - for example, to investigate or fight a fire - without themselves being overcome by the smoke they're dealing with.",
    reference: "Doors - Protective Breathing Equipment",
  },
  {
    id: 10,
    system: "Doors & Equipment",
    q: "Why is emergency cabin lighting typically powered by its own independent battery source, rather than relying solely on the aircraft's main electrical system?",
    options: [
      "So the cabin retains usable lighting for an evacuation even if the aircraft's main electrical power has failed entirely",
      "Independent battery power is used purely to reduce the weight of cabin wiring",
      "Emergency lighting is never needed if the main electrical system is working",
      "It has no benefit over drawing power from the main system in every case",
    ],
    answer: 0,
    explain:
      "An emergency lighting system that depends on its own dedicated battery power stays available precisely in the scenario it matters most - a total loss of the aircraft's main electrical system - ensuring the cabin (and exit markings/path lighting) can still be illuminated to support a safe evacuation.",
    reference: "Doors - Emergency Lighting Power Source",
  },
];
