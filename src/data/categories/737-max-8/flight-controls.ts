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
];
