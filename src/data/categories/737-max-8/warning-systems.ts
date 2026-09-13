import type { Question } from "../../../types";

// 737 MAX 8 - Warning Systems. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_WARNING_SYSTEMS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Warning Systems",
    q: "In a typical master warning/caution hierarchy, what is the general distinction between a 'warning' and a 'caution'?",
    options: [
      "A warning represents a more time-critical condition (often paired with a distinct aural alert) requiring immediate action, while a caution is a less urgent condition the crew needs to be aware of but that generally allows more time to respond",
      "Warnings and cautions are simply two different names for exactly the same urgency of condition",
      "A caution is always more urgent than a warning",
      "Warnings only ever occur on the ground, never in flight",
    ],
    answer: 0,
    explain:
      "A tiered annunciation scheme like this exists so the crew can prioritize: warnings flag conditions serious and time-critical enough to demand immediate attention (often reinforced with a distinct aural tone), while cautions flag conditions the crew should be aware of and address, but which don't require the same immediate, drop-everything response.",
    reference: "Warning Systems - Master Warning/Caution Hierarchy",
  },
  {
    id: 2,
    system: "Warning Systems",
    q: "What is the general purpose of a takeoff configuration warning?",
    options: [
      "To alert the crew with a distinct warning (commonly a horn) if the throttles are advanced for takeoff while flaps, trim, spoilers, or other relevant items are not in a valid takeoff configuration",
      "To warn the crew only after the aircraft is already airborne",
      "To indicate that the landing gear has failed to retract",
      "To confirm that the cabin doors are correctly closed",
    ],
    answer: 0,
    explain:
      "A takeoff configuration warning is specifically designed to catch an unsafe configuration before the takeoff roll even begins - triggering (typically as a horn) if the crew advances the thrust levers for takeoff while one or more relevant items, such as flap position, stabilizer trim setting, or spoiler position, are outside the valid range for takeoff.",
    reference: "Warning Systems - Takeoff Configuration Warning",
  },
  {
    id: 3,
    system: "Warning Systems",
    q: "What does an overspeed warning (often a distinctive repetitive 'clacker' tone) generally indicate?",
    options: [
      "That the aircraft has exceeded its maximum operating speed limit (VMO or MMO, whichever applies)",
      "That the aircraft has descended below its minimum safe altitude",
      "That a door or hatch has become unlatched",
      "That the cabin has lost pressurization",
    ],
    answer: 0,
    explain:
      "An overspeed warning is triggered specifically by exceeding the maximum operating speed limit - VMO (an indicated airspeed limit) or MMO (a Mach number limit), whichever is currently binding - alerting the crew clearly and distinctly (commonly with a repetitive 'clacker' tone) so they can reduce speed without needing to notice it purely from the airspeed indication.",
    reference: "Warning Systems - Overspeed Warning",
  },
  {
    id: 4,
    system: "Warning Systems",
    q: "What is the general function of a stick shaker as a stall warning device?",
    options: [
      "It vibrates the control column to give the pilot a strong tactile warning that the aircraft is approaching a stall, based on the sensed angle of attack",
      "It automatically pushes the control column forward with no pilot input required",
      "It is purely a visual warning light with no tactile component at all",
      "It only activates after the aircraft has already fully stalled",
    ],
    answer: 0,
    explain:
      "A stick shaker gives the pilot a distinctly tactile, hard-to-miss warning - vigorously vibrating the control column - as the sensed angle of attack approaches the stalling angle, prompting a stall recovery response before the aircraft actually reaches a full aerodynamic stall.",
    reference: "Warning Systems - Stick Shaker Stall Warning",
  },
  {
    id: 5,
    system: "Warning Systems",
    q: "What is the general purpose of a master caution 'recall' function?",
    options: [
      "It lets the crew re-display previously cancelled caution indications, in case one needs to be reviewed again after being cleared",
      "It permanently deletes all caution history so it can never be reviewed again",
      "It silences every future caution for the remainder of the flight",
      "It only works for warnings, never for cautions",
    ],
    answer: 0,
    explain:
      "Once a caution light has been individually cancelled, a recall function lets the crew bring back the full set of active-but-cancelled caution indications for review, which is useful if the crew wants to double-check what's still active after having cleared the master caution light earlier.",
    reference: "Warning Systems - Master Caution Recall",
  },
  {
    id: 6,
    system: "Warning Systems",
    q: "What does a landing gear warning horn generally alert the crew to?",
    options: [
      "That the aircraft is in a landing-type configuration (such as low power and flaps extended) with the landing gear not down and locked",
      "That the landing gear has just been successfully retracted after takeoff",
      "That the parking brake has been set",
      "That the cabin has become depressurized",
    ],
    answer: 0,
    explain:
      "A landing gear warning horn is triggered when the aircraft's configuration (typically low thrust setting combined with flaps at or beyond a defined position) matches what would be expected on approach to land, but the landing gear isn't down and locked - giving the crew a clear, hard-to-miss alert before an attempted gear-up landing.",
    reference: "Warning Systems - Landing Gear Warning Horn",
  },
  {
    id: 7,
    system: "Warning Systems",
    q: "What does a cabin altitude warning generally alert the crew to?",
    options: [
      "That cabin altitude has climbed above a safe threshold, indicating a pressurization problem that may require an emergency descent and oxygen use",
      "That the cabin has become too cold",
      "That the aircraft's actual (not cabin) altitude has exceeded its maximum operating altitude",
      "That a passenger has manually opened an emergency exit",
    ],
    answer: 0,
    explain:
      "A cabin altitude warning is specifically tied to the cabin's own pressurization state, alerting the crew if cabin altitude climbs above a defined safe threshold - a sign of a pressurization system problem that generally calls for donning oxygen and beginning an emergency descent, rather than simply continuing the flight unchanged.",
    reference: "Warning Systems - Cabin Altitude Warning",
  },
  {
    id: 8,
    system: "Warning Systems",
    q: "What is the general purpose of a distinct aural/visual alert specifically for an autopilot disconnect?",
    options: [
      "It clearly flags the moment control has reverted back to the pilot - whether the disconnect was deliberate or automatic - so the crew doesn't fly on unaware that the autopilot is no longer engaged",
      "It only ever occurs when the autopilot is first engaged, not when it disconnects",
      "It has no purpose beyond decoration on the flight deck",
      "It permanently disables the autopilot from being re-engaged for the rest of the flight",
    ],
    answer: 0,
    explain:
      "Because the aircraft needs active pilot control the instant the autopilot disconnects - whether the crew disconnected it deliberately or it dropped out on its own due to a fault - a distinct aural tone and visual indication makes that transition unmistakable, rather than leaving the crew to notice only by chance that the aircraft is no longer being flown automatically.",
    reference: "Warning Systems - Autopilot Disconnect Alert",
  },
  {
    id: 9,
    system: "Warning Systems",
    q: "How does a confirmed fire warning (bell and/or dedicated light) generally differ from an ordinary caution indication?",
    options: [
      "It represents one of the most time-critical, immediate-action conditions on the aircraft, so it uses its own distinct, highly attention-getting alert rather than blending in with routine caution messages",
      "A fire warning is treated as less urgent than a routine caution",
      "Fire warnings and cautions use exactly the same alert with no distinguishing features",
      "Fire warnings are silent, with no aural component at all",
    ],
    answer: 0,
    explain:
      "A confirmed fire is about as time-critical as an inflight condition gets, so it's deliberately given its own highly distinct alert (often a dedicated bell and/or guarded light) rather than being folded into the general caution/warning tone hierarchy - ensuring it can never be mistaken for a lower-priority condition.",
    reference: "Warning Systems - Fire Warning",
  },
  {
    id: 10,
    system: "Warning Systems",
    q: "Why do ground proximity-type warning systems typically include a mode specifically for excessive descent rate, separate from a mode for terrain closure?",
    options: [
      "An unusually high descent rate can be hazardous even over benign, non-rising terrain, so it needs its own dedicated detection logic rather than only being caught by a mode that's watching for terrain getting closer than expected",
      "Descent rate and terrain closure are always the exact same thing, so a separate mode is redundant",
      "The excessive descent rate mode exists only to save fuel",
      "This mode is used only while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "An excessive rate of descent can be dangerous purely on its own terms - even with flat, non-threatening terrain below - so ground proximity-type systems include a dedicated mode watching descent rate directly, complementing (rather than duplicating) a separate mode that's specifically watching for the aircraft closing in on rising or nearby terrain.",
    reference: "Warning Systems - Excessive Descent Rate Mode",
  },
  {
    id: 11,
    system: "Warning Systems",
    q: "What is the general purpose of a windshear warning system, including its associated escape guidance?",
    options: [
      "It detects the hazardous airspeed/performance changes characteristic of windshear and alerts the crew, while also providing pitch guidance for an escape maneuver prioritizing climb performance over normal flight path",
      "It only detects windshear after the aircraft has already stalled",
      "It is used only to detect turbulence unrelated to any airspeed or performance change",
      "It has no associated guidance and only sounds a generic caution tone",
    ],
    answer: 0,
    explain:
      "A windshear warning system is designed to detect the kind of sudden airspeed and performance-robbing conditions windshear produces, alerting the crew distinctly and then providing dedicated escape guidance - typically commanding maximum available climb performance rather than following a normal flight path - since escaping severe windshear takes priority over anything else in that moment.",
    reference: "Warning Systems - Windshear Warning & Escape Guidance",
  },
  {
    id: 12,
    system: "Warning Systems",
    q: "How does a traffic collision avoidance system's resolution advisory (RA) aural command generally differ from its traffic advisory (TA) aural alert?",
    options: [
      "A TA is an alert to help the crew visually acquire nearby traffic, while an RA gives a specific aural maneuvering command (such as to climb or descend) intended to be followed to avoid a collision",
      "TAs and RAs are simply two different names for the exact same alert with no functional difference",
      "An RA is always less urgent than a TA",
      "Neither alert type has any distinct aural component; both are silent visual-only indications",
    ],
    answer: 0,
    explain:
      "A traffic advisory alerts the crew to nearby traffic worth being aware of, generally without a specific maneuvering instruction, while a resolution advisory is a step up in urgency - it gives a specific vertical maneuvering command (climb, descend, or a rate adjustment) that the crew is expected to promptly follow to resolve an actual collision risk.",
    reference: "Warning Systems - TCAS RA vs TA Aural Commands",
  },
  {
    id: 13,
    system: "Warning Systems",
    q: "What is the general purpose of a master warning/caution cancel (silence) button?",
    options: [
      "It lets the crew silence the aural tone and extinguish the master light for an already-acknowledged warning/caution, without erasing the underlying system message itself",
      "It permanently deletes the underlying fault from the aircraft's systems",
      "It silences every future warning for the remainder of the flight",
      "It has no function and is a purely decorative cockpit button",
    ],
    answer: 0,
    explain:
      "Once the crew has acknowledged an alert, the cancel/silence function lets them stop the (potentially distracting) aural tone and turn off the flashing master light, while the underlying system message describing the actual condition typically remains displayed until it's resolved - the button addresses the alerting, not the fault itself.",
    reference: "Warning Systems - Master Warning/Caution Cancel",
  },
  {
    id: 14,
    system: "Warning Systems",
    q: "What is the general purpose of automated radio-altimeter-based altitude callouts during approach and landing?",
    options: [
      "They give the crew standardized, hands-free aural cues of height above the actual terrain/runway as it decreases, supporting a consistent approach to decision heights and the landing flare",
      "They are used only during cruise flight at high altitude",
      "They replace the need for any barometric altitude indication",
      "They only occur after the aircraft has already touched down",
    ],
    answer: 0,
    explain:
      "Automated callouts based on radio altitude give the crew a consistent, hands-free aural cue of decreasing height above the actual terrain or runway during approach - supporting standardized calls at key decision points and helping judge the flare - which is a distinct and more precise measure close to the ground than a barometric altitude reading referenced to sea-level pressure.",
    reference: "Warning Systems - Radio Altimeter Callouts",
  },
  {
    id: 15,
    system: "Warning Systems",
    q: "What is the general purpose of color-coded low-speed awareness indications (such as a colored band) on the airspeed display?",
    options: [
      "They give the pilot an immediate visual sense of how close current airspeed is to a low-speed protection boundary, without needing to interpret a specific numeric value under time pressure",
      "They indicate outside air temperature rather than airspeed",
      "They only appear once the aircraft has already stalled",
      "They have no relationship to speed and indicate engine parameters instead",
    ],
    answer: 0,
    explain:
      "A color-coded band or marking on the airspeed display lets the pilot judge proximity to a low-speed boundary at a glance - through color and position rather than having to read and mentally compare a specific number - which is especially valuable for maintaining quick situational awareness of a shrinking speed margin during a busy or high-workload phase of flight.",
    reference: "Warning Systems - Low-Speed Awareness Indication",
  },
];
