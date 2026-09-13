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
  {
    id: 6,
    system: "Landing Gear",
    q: "What is the general purpose of an antiskid (anti-lock) braking system on the main gear?",
    options: [
      "It automatically reduces or releases brake pressure on a wheel that's about to skid, preserving braking friction and protecting the tire from a flat spot",
      "It applies maximum brake pressure to every wheel simultaneously regardless of runway condition",
      "It is used only to keep the wheels spinning in flight for balance",
      "It disables braking entirely below a defined groundspeed",
    ],
    answer: 0,
    explain:
      "A skidding (locked) wheel loses much of its braking effectiveness and risks a badly worn flat spot on the tire; an antiskid system senses an impending skid on each wheel and automatically modulates that wheel's brake pressure to stay near the point of maximum braking friction, improving stopping performance while protecting the tires.",
    reference: "Landing Gear - Antiskid System",
  },
  {
    id: 7,
    system: "Landing Gear",
    q: "What is the general purpose of an autobrake system?",
    options: [
      "It automatically applies braking to a pre-selected deceleration level after touchdown (or a rejected takeoff), without the crew needing to manually modulate the brake pedals",
      "It prevents the brakes from ever being used automatically, requiring only manual pedal braking",
      "It is used only to set the parking brake",
      "It controls nosewheel steering rather than braking",
    ],
    answer: 0,
    explain:
      "An autobrake system lets the crew select a target deceleration level before landing (or arm it for a rejected takeoff), after which it automatically applies and modulates braking to achieve that deceleration once the relevant conditions are met - reducing crew workload at a busy phase of flight while still allowing manual override if needed.",
    reference: "Landing Gear - Autobrake System",
  },
  {
    id: 8,
    system: "Landing Gear",
    q: "Why is brake temperature monitored, particularly after a demanding stop such as a rejected takeoff?",
    options: [
      "Very hot brakes need time to cool before they can safely handle another demanding stop, and excessive heat can also raise the risk of a tire failure or brake fire",
      "Brake temperature has no bearing on brake or tire safety",
      "It is monitored only to control cabin temperature",
      "Brake temperature monitoring exists solely to satisfy a cosmetic cockpit indication requirement",
    ],
    answer: 0,
    explain:
      "A brake absorbing a large amount of kinetic energy (as in a high-speed rejected takeoff) can become extremely hot, and if it doesn't get adequate time to cool before another demanding stop is required, there's an increased risk of reduced braking performance, a brake-related tire failure, or even a brake fire - so brake temperature is monitored and factored into decisions like turnaround time or takeoff delay.",
    reference: "Landing Gear - Brake Temperature",
  },
  {
    id: 9,
    system: "Landing Gear",
    q: "What is the general function of the shock strut ('oleo') in each landing gear leg?",
    options: [
      "It absorbs and dampens the loads from landing impact and taxiing, typically using a combination of compressed oil and nitrogen gas",
      "It only provides steering input, with no shock absorption at all",
      "It generates hydraulic power for the rest of the aircraft",
      "It has no function other than holding the wheel axle in place",
    ],
    answer: 0,
    explain:
      "A shock strut absorbs the impact loads of landing and the ongoing loads of taxiing over an uneven surface, typically by compressing a combination of hydraulic oil and nitrogen gas within the strut - converting a sudden physical impact into a controlled, cushioned deceleration rather than transmitting the full shock directly into the airframe.",
    reference: "Landing Gear - Shock Strut",
  },
  {
    id: 10,
    system: "Landing Gear",
    q: "What is the general purpose of a 'chined' nose tire design, as used on some aircraft?",
    options: [
      "Its shaped sidewall deflects water and slush sideways and away from the area in front of the engine inlets, reducing the risk of ingestion during takeoff and landing on a wet or contaminated runway",
      "It is a purely decorative tread pattern with no functional purpose",
      "It reduces tire weight with no effect on water/slush handling",
      "It is used only on the main gear, never the nose gear",
    ],
    answer: 0,
    explain:
      "A chined tire has a specially shaped sidewall that deflects the spray of water or slush thrown up by the nose wheel outward and away from directly ahead of the aircraft, which helps reduce the amount that could otherwise be thrown up into a rear-mounted or low-slung engine inlet during ground operations on a wet or contaminated surface.",
    reference: "Landing Gear - Chined Nose Tires",
  },
];
