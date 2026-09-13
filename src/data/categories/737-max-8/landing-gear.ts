import type { Question } from "../../../types";

// 737 MAX 8 - Landing Gear. Original, independently-written questions based
// on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_LANDING_GEAR_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Landing Gear",
    q: "What does a green gear position light generally indicate for each landing gear leg?",
    options: [
      "That gear leg is down and locked",
      "That gear leg is in transit (neither fully up nor fully down)",
      "That gear leg has failed and is unusable",
      "That gear leg is retracted and locked up",
    ],
    answer: 0,
    explain:
      "A green gear indicator light for a given leg confirms that leg is down and mechanically locked in position, which is the specific condition the crew needs confirmed before landing - an unlit or differently-colored indication instead flags an in-transit or unsafe condition.",
    reference: "Landing Gear - Position Indication",
  },
  {
    id: 2,
    system: "Landing Gear",
    q: "What is the general purpose of nosewheel steering being automatically centered/disengaged as the gear retracts?",
    options: [
      "So the nose gear and its wheels fit properly within the confined space of the wheel well without being deflected to one side",
      "To prevent the nose gear from ever being steered again for the rest of the flight",
      "Because steering is only needed while the gear is retracted, never on the ground",
      "It has no functional purpose and is purely a cockpit indication",
    ],
    answer: 0,
    explain:
      "Centering (and disengaging) nosewheel steering as the gear retracts ensures the nose wheels sit straight, allowing the gear leg to fit within the limited clearance of the wheel well - a steering input left applied during retraction could otherwise interfere with proper stowage.",
    reference: "Landing Gear - Nosewheel Steering",
  },
  {
    id: 3,
    system: "Landing Gear",
    q: "Nosewheel steering is typically powered by which system, using which cockpit control(s)?",
    options: [
      "Hydraulic power, commanded through a tiller (for tight ground maneuvering) and, over a smaller range, through the rudder pedals",
      "Purely by manual, unassisted pilot force on the nosewheel with no hydraulic input at all",
      "By the same electric motor that also drives the flaps",
      "By bleed air pressure alone",
    ],
    answer: 0,
    explain:
      "Nosewheel steering is normally hydraulically powered, giving the pilot a wide steering range through a dedicated tiller for slow-speed ground maneuvering (such as taxiing into a tight gate), while a smaller steering range is also available through the rudder pedals for use during takeoff and landing rolls.",
    reference: "Landing Gear - Nosewheel Steering Controls",
  },
  {
    id: 4,
    system: "Landing Gear",
    q: "Automatic ground spoiler deployment on landing typically requires which two conditions to be sensed together?",
    options: [
      "Main gear wheel spin-up (indicating groundspeed) and weight-on-wheels (strut compression)",
      "Flap position alone, regardless of any speed or weight sensing",
      "Cabin door status alone",
      "Engine N1 falling to idle alone, with no gear-related sensing at all",
    ],
    answer: 0,
    explain:
      "Requiring both wheel spin-up and weight-on-wheels together (rather than either alone) helps ensure ground spoilers deploy only once the aircraft is genuinely on the ground and rolling, protecting against premature deployment from a single faulty sensor while still guaranteeing they deploy promptly for landing or a rejected takeoff.",
    reference: "Landing Gear - Automatic Ground Spoiler Logic",
  },
  {
    id: 5,
    system: "Landing Gear",
    q: "What is the general purpose of landing gear position doors that open only briefly during retraction and extension?",
    options: [
      "To fair over the wheel well opening and reduce drag while the gear is fully retracted, since the doors aren't needed once the gear is stowed and locked",
      "To provide extra lift during cruise flight",
      "To remain open at all times, including with the gear fully retracted",
      "To serve as an emergency exit for the flight crew",
    ],
    answer: 0,
    explain:
      "Gear doors are generally sequenced to open only for the brief period the gear is actually moving through the wheel well, then close again once the gear is fully retracted (or, on extension, once the gear is down) - keeping the fuselage/wing aerodynamically faired over the wheel well rather than leaving an open cavity for the rest of the flight.",
    reference: "Landing Gear - Gear Doors",
  },
];
