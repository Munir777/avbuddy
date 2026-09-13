import type { Question } from "../../../types";

// 737 MAX 8 - Flight Controls. Original, independently-written questions
// based on general/public 737-family systems knowledge (not sourced from any
// operator-specific or manufacturer-proprietary document) - no company,
// airline, publisher, or person names.
export const B737_FLIGHT_CONTROLS_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Flight Controls",
    q: "In general terms, how are the primary flight controls (ailerons, elevator, rudder) actuated on this type?",
    options: [
      "Through a cable-and-pulley system linked to hydraulically powered control units, retaining the ability to fly using aerodynamic (manual reversion) control if hydraulic power to those surfaces is lost",
      "Entirely by fly-by-wire, with no mechanical cable linkage to the control surfaces at all",
      "By direct pilot muscle force alone, with no hydraulic assistance under any condition",
      "Only the rudder is cable-actuated, while the ailerons and elevator are fully fly-by-wire",
    ],
    answer: 0,
    explain:
      "This type retains a mechanical cable-and-pulley control system linking the flight deck controls to hydraulically powered control units at the surfaces, and it's designed so that - if hydraulic power to those surfaces is lost - the crew can still move the control surfaces using aerodynamic (manual reversion) force alone, as a last-resort backup.",
    reference: "Flight Controls - Primary Control Actuation",
  },
  {
    id: 2,
    system: "Flight Controls",
    q: "What is the general purpose of the manual trim wheels located on the center console?",
    options: [
      "They are mechanically connected to the horizontal stabilizer trim mechanism, letting the crew trim the aircraft by hand even without electrical power",
      "They are a purely cosmetic, non-functional cockpit feature",
      "They control rudder trim only, never pitch trim",
      "They can only be used while the autopilot is engaged",
    ],
    answer: 0,
    explain:
      "The trim wheels are mechanically linked directly to the horizontal stabilizer trim mechanism, so the crew can adjust pitch trim by hand-cranking them even if electric trim power is unavailable - a direct, purely mechanical backup trim method.",
    reference: "Flight Controls - Manual Trim Wheels",
  },
  {
    id: 3,
    system: "Flight Controls",
    q: "In general terms, what does a 'speed trim system' generally do during manual (autopilot-off) flight?",
    options: [
      "It automatically commands small stabilizer trim inputs in certain low-speed, low-flap flight conditions to help maintain adequate pitch stability",
      "It automatically flies a complete instrument approach without pilot input",
      "It exists only to trim the rudder for asymmetric thrust",
      "It only operates when the autopilot is engaged, never during manual flight",
    ],
    answer: 0,
    explain:
      "A speed trim system is designed to give small, automatic stabilizer trim inputs during manual flight in specific conditions - typically at lower airspeeds and certain flap settings - to help maintain the pitch stability characteristics the aircraft is certified to, supplementing (not replacing) the pilot's own trim inputs.",
    reference: "Flight Controls - Speed Trim System",
  },
  {
    id: 4,
    system: "Flight Controls",
    q: "What is the general distinction between 'flight spoilers' and 'ground spoilers' on this type?",
    options: [
      "Flight spoilers can deploy in the air (assisting roll control and acting as a speed brake), while ground spoilers are intended to deploy automatically only after touchdown or during a rejected takeoff",
      "There is no distinction; both terms describe exactly the same panels used only on the ground",
      "Ground spoilers are used only in flight, never during the landing roll",
      "Flight spoilers can only be armed, never manually deployed by the crew",
    ],
    answer: 0,
    explain:
      "Flight spoilers are usable in the air - helping with roll control and serving as an airborne speed brake - while ground spoilers are specifically intended to deploy automatically once weight is on the wheels (or during a rejected takeoff), to dump lift and increase drag for braking, and are not intended for airborne use.",
    reference: "Flight Controls - Flight & Ground Spoilers",
  },
  {
    id: 5,
    system: "Flight Controls",
    q: "What generally happens if a pilot applies a sufficiently large manual force to the control column while the autopilot is engaged?",
    options: [
      "The autopilot automatically disengages, handing control back to the pilot",
      "The control column is mechanically locked and cannot be moved at all while the autopilot is engaged",
      "The applied force is simply ignored with no effect on the autopilot",
      "The aircraft immediately enters an uncommanded full-authority manoeuvre",
    ],
    answer: 0,
    explain:
      "As a safety feature, applying a large enough manual force to the control column while the autopilot is engaged triggers an automatic autopilot disconnect, so the pilot can always physically override and immediately regain manual control rather than having to fight the autopilot or hunt for a disconnect switch.",
    reference: "Flight Controls - Autopilot Force Disconnect",
  },
  {
    id: 6,
    system: "Flight Controls",
    q: "Why do hydraulically-boosted flight controls typically include an artificial 'feel' system, rather than leaving the pilot to feel only what the hydraulic actuators themselves transmit?",
    options: [
      "Hydraulic boost largely masks the real aerodynamic forces on the control surfaces, so an artificial feel system generates a synthetic resistance (varying with airspeed/configuration) to give the pilot meaningful tactile feedback",
      "Artificial feel exists purely for passenger comfort, with no connection to the pilot's controls",
      "Feel systems are used only on aircraft with no hydraulic boost at all",
      "It has no real purpose and is included only for symmetry between the two control columns",
    ],
    answer: 0,
    explain:
      "Because hydraulic boost does most of the actual work of moving the control surfaces, the pilot would otherwise feel very little of the real aerodynamic load; an artificial feel system generates a synthetic resistance on the controls - typically increasing with airspeed - so the pilot still gets meaningful, speed-appropriate tactile feedback rather than an unnaturally light or constant feel.",
    reference: "Flight Controls - Artificial Feel System",
  },
  {
    id: 7,
    system: "Flight Controls",
    q: "What is the general purpose of a rudder travel limiter?",
    options: [
      "It restricts the maximum available rudder deflection at higher airspeeds, protecting the vertical stabilizer from excessive structural loads while still allowing full rudder travel at low speed",
      "It prevents the rudder from moving at all above a certain speed",
      "It only functions while the aircraft is on the ground",
      "It increases available rudder travel as airspeed increases",
    ],
    answer: 0,
    explain:
      "A rudder travel limiter reduces the maximum rudder deflection available as airspeed increases, since a large rudder deflection at high speed can generate side loads on the vertical stabilizer well beyond what's needed (or structurally desirable) - while still permitting full rudder authority at the lower speeds where it may genuinely be needed, such as for crosswind control.",
    reference: "Flight Controls - Rudder Travel Limiter",
  },
  {
    id: 8,
    system: "Flight Controls",
    q: "Leading edge slats and Krueger-type flaps are typically actuated by which general power source?",
    options: [
      "Hydraulic (or, as a backup on some systems, pneumatic) power, driven through a common drive shaft/gearbox arrangement across the wing",
      "Purely by aerodynamic forces alone, with no powered actuation at all",
      "By a separate battery-powered electric motor for each individual panel with no shared drive",
      "By manual pilot force transmitted directly with no mechanical assistance",
    ],
    answer: 0,
    explain:
      "Leading edge devices are typically driven hydraulically (with a pneumatic backup drive on some designs) through a shared drive shaft and gearbox arrangement running along the wing, so all the leading edge panels extend and retract together in a coordinated way rather than each needing its own independent actuator.",
    reference: "Flight Controls - Leading Edge Device Actuation",
  },
  {
    id: 9,
    system: "Flight Controls",
    q: "What is the general purpose of a flap/slat asymmetry protection system?",
    options: [
      "It detects if the leading or trailing edge devices extend unevenly between the left and right wing, and stops further movement to prevent an uncontrollable roll tendency",
      "It intentionally creates an asymmetric flap condition to help with crosswind landings",
      "It only functions while the aircraft is fully retracted on the ground",
      "It has no protective function and is a purely cosmetic indication",
    ],
    answer: 0,
    explain:
      "If the flap or slat system were to extend unevenly between the wings, the resulting lift asymmetry could produce a significant, potentially uncontrollable rolling tendency; an asymmetry protection system is designed to detect that condition and stop further movement, limiting how far the mismatch can develop before the crew can respond.",
    reference: "Flight Controls - Flap/Slat Asymmetry Protection",
  },
  {
    id: 10,
    system: "Flight Controls",
    q: "What is the general purpose of a yaw damper?",
    options: [
      "It automatically commands small rudder inputs to damp out Dutch roll oscillations, improving ride comfort and handling without requiring constant pilot correction",
      "It permanently locks the rudder in a fixed position",
      "It only operates when the landing gear is down",
      "It increases, rather than reduces, any yaw oscillation",
    ],
    answer: 0,
    explain:
      "A yaw damper senses the onset of a Dutch roll-type oscillation and automatically applies small, timely rudder inputs to counteract it, damping the oscillation out - sparing the pilot from having to continuously make manual rudder corrections to keep the ride smooth and coordinated.",
    reference: "Flight Controls - Yaw Damper",
  },
];
