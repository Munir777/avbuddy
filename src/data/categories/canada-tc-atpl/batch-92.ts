import type { Question } from "../../../types";

// Canada TC ATPL - Section 9 (Theory of Flight)
// Batch 92 - Tenth depth pass
export const CANADA_TC_ATPL_BATCH_92_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Dutch roll, a combined yawing and rolling oscillation, tends to be more pronounced on swept-wing aircraft, particularly at high altitude, primarily because",
    options: [
      "Dutch roll only occurs on unswept, low-altitude aircraft, and swept wings actually eliminate the tendency entirely regardless of altitude, airspeed, weight, or aircraft configuration flown at any time",
      "high altitude has no relationship whatsoever to any dynamic stability mode, including Dutch roll, spiral, or phugoid oscillations",
      "wing sweep contributes additional dihedral effect (a strong roll response to sideslip) that, combined with reduced aerodynamic damping at high altitude, can result in a weakly damped oscillation",
      "swept wings eliminate directional stability entirely, making the aircraft impossible to control under any flight condition whatsoever",
    ],
    answer: 2,
    explain:
      "Wing sweep contributes additional dihedral effect, producing a strong roll response to sideslip; combined with reduced aerodynamic damping in the thinner air at high altitude, this can result in a weakly damped Dutch roll oscillation, more pronounced than on an unswept, low-altitude aircraft.",
    reference: "TP 690 -- Theory of Flight: Dutch roll and wing sweep/altitude",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given vertical gust encountered in flight, an aircraft with higher wing loading (weight divided by wing area) generally experiences",
    options: [
      "an identical load factor increase regardless of wing loading, since wing loading is considered irrelevant to how an aircraft structurally responds to any vertical gust encountered in flight",
      "a much larger increase in load factor than a lower-wing-loading aircraft under identical gust, airspeed, and altitude conditions",
      "no change in load factor at all, since gusts are understood to only affect aircraft operating below a specific, formally defined wing loading threshold",
      "a smaller increase in load factor than a lower-wing-loading aircraft in the same gust, since the angle-of-attack change yields a smaller proportional lift change relative to weight",
    ],
    answer: 3,
    explain:
      "A higher-wing-loading aircraft generally experiences a smaller load factor increase for a given gust than a lower-wing-loading aircraft, since the gust-induced change in angle of attack and the resulting lift change are smaller in proportion to the aircraft's greater weight.",
    reference: "TP 690 -- Theory of Flight: Gust load factor and wing loading",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "On a V-n (maneuvering) diagram, in addition to maneuvering speed (Va) and never-exceed speed (Vne), design cruising speed (Vc) and design dive speed (Vd) represent",
    options: [
      "reference speeds used in the aircraft's structural certification, representing design conditions for cruise flight and an established maximum diving speed, against which the airframe's strength is demonstrated",
      "speeds used only for engine performance calculations, with no structural significance",
      "speeds that are always numerically identical to Va and Vne respectively",
      "speeds relevant only to a rejected takeoff, not to any other phase of flight",
    ],
    answer: 0,
    explain:
      "Design cruising speed (Vc) and design dive speed (Vd) are reference speeds used in structural certification, representing design conditions for cruise flight and an established maximum diving speed against which the airframe's structural strength is demonstrated on the V-n diagram.",
    reference: "TP 690 -- Theory of Flight: Design cruising and design dive speeds on the V-n diagram",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A wing's boundary layer transition point -- where the boundary layer changes from laminar to turbulent flow -- generally moves forward (occurs earlier along the chord) when",
    options: [
      "the wing surface becomes smoother, or angle of attack is reduced, since both factors are understood to consistently and reliably delay the onset of transition further along the chord",
      "the wing surface becomes rougher or contaminated (such as by ice, frost, or insect residue), or angle of attack is increased, since both promote earlier transition",
      "the wing is flown at a lower Reynolds number than any other flight condition ever encountered in normal operation, without exception",
      "airspeed decreases to zero, since boundary layer transition is understood to only occur with the aircraft stationary on the ground",
    ],
    answer: 1,
    explain:
      "A rougher or contaminated wing surface, or an increase in angle of attack, both tend to promote earlier transition from laminar to turbulent boundary layer flow, moving the transition point forward along the chord compared to a smooth, clean surface at a lower angle of attack.",
    reference: "TP 690 -- Theory of Flight: Boundary layer transition point",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A propeller's efficiency (the ratio of useful thrust power produced to the shaft power delivered by the engine) generally",
    options: [
      "has no relationship to airspeed at all, depending only on the engine's rated horsepower output regardless of propeller design",
      "is always highest at zero airspeed (static conditions), declining continuously and without exception as airspeed increases toward the aircraft's maximum design and structural limit speed",
      "varies across the speed range, typically peaking at a specific combination of airspeed and rotational speed (advance ratio), and declining at speeds well above or below that point",
      "remains completely constant across the entire range of airspeeds and rpm at which the propeller might ever operate in service",
    ],
    answer: 2,
    explain:
      "Propeller efficiency varies across the speed range, typically peaking at a specific combination of airspeed and rotational speed (advance ratio) for which the blade's geometry is best suited, and declining at speeds well above or below that optimal point.",
    reference: "TP 690 -- Theory of Flight: Propeller efficiency variation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A fixed-pitch propeller, compared to a constant-speed propeller, generally represents a performance compromise because its single, unchangeable blade angle",
    options: [
      "is only usable for takeoff, with an entirely separate and distinct propeller required for all other phases of flight",
      "can be adjusted in flight by the pilot to suit the current flight condition, just like a constant-speed propeller, with no efficiency penalty whatsoever in climb, cruise, or descent at any power setting or flight altitude",
      "provides identical efficiency to a constant-speed propeller under every possible flight condition and power setting",
      "can be optimized for only one flight condition, such as climb or cruise, providing reduced efficiency elsewhere, whereas a constant-speed propeller can adjust blade angle to stay closer to optimal across a wider range",
    ],
    answer: 3,
    explain:
      "A fixed-pitch propeller's single blade angle can be optimized for only one flight condition, such as climb or cruise, resulting in somewhat reduced efficiency in other flight regimes, whereas a constant-speed propeller can adjust blade angle to stay closer to optimal across a wider range of conditions.",
    reference: "TP 690 -- Theory of Flight: Fixed-pitch propeller performance compromise",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A slotted flap, as distinguished from a plain (non-slotted) flap, includes a gap between the wing's main element and the flap that allows",
    options: [
      "higher-energy air from beneath the wing to flow through the slot and re-energize the boundary layer on the flap's upper surface, helping delay flow separation and further increasing CLmax",
      "the flap to be removed entirely during cruise flight for reduced drag",
      "the slot to replace the need for any flap deflection at all",
      "fuel to be transferred from the wing tank to the flap actuator",
    ],
    answer: 0,
    explain:
      "The slot in a slotted flap allows higher-energy air from beneath the wing to flow through and re-energize the boundary layer on the flap's upper surface, helping delay flow separation over the flap and further increasing CLmax compared to a plain, non-slotted flap.",
    reference: "TP 690 -- Theory of Flight: Slotted flap boundary layer mechanism",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Sweeping a wing back helps delay the onset of compressibility effects primarily because, for a swept wing, the airflow's effect on the wing's pressure distribution and boundary layer depends mainly on",
    options: [
      "the full free-stream velocity, identical in every single respect to an unswept wing, with sweep providing no aerodynamic benefit whatsoever to the wing's pressure distribution or compressibility behavior at all times",
      "only the velocity component perpendicular to the wing's leading edge, which is lower than the aircraft's full flight speed, effectively reducing the wing's local (normal) Mach number for a given flight Mach number",
      "only the velocity component parallel to the leading edge, ignoring the perpendicular component entirely in every calculation performed",
      "the aircraft's altitude alone, independent of any velocity component or the aircraft's flight Mach number",
    ],
    answer: 1,
    explain:
      "For a swept wing, the pressure distribution and boundary layer behaviour depend mainly on the velocity component perpendicular to the leading edge, which is lower than the aircraft's full flight speed; this effectively reduces the wing's local (normal) Mach number for a given flight Mach number, delaying the onset of compressibility effects.",
    reference: "TP 690 -- Theory of Flight: Wing sweep and effective (normal) Mach number",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A wing alone, without a horizontal stabilizer, generally contributes a destabilizing effect to an aircraft's longitudinal static stability because, as angle of attack increases, a cambered wing's centre of pressure tends to move forward, producing an additional nose-up pitching moment; the horizontal stabilizer is generally sized and positioned so that",
    options: [
      "it reinforces this destabilizing tendency at every angle of attack throughout the flight envelope, making the complete aircraft even less longitudinally stable than the wing alone would be",
      "it eliminates the need for the wing to produce any lift at all during any phase of flight",
      "its own stabilizing contribution is sufficient to overcome the wing's destabilizing tendency, giving the complete aircraft an overall positive (stable) pitching moment response",
      "it has no effect whatsoever on the aircraft's overall longitudinal stability or trimmed flight condition",
    ],
    answer: 2,
    explain:
      "The wing alone generally contributes a destabilizing tendency as its centre of pressure moves forward with increasing angle of attack; the horizontal stabilizer is sized and positioned so that its own stabilizing contribution is sufficient to overcome this tendency, giving the complete aircraft an overall positive (stable) pitching moment response.",
    reference: "TP 690 -- Theory of Flight: Wing destabilizing contribution versus tail stabilizing contribution",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "'Longitudinal dihedral,' referring to the horizontal stabilizer being set at a lower angle of incidence than the wing, contributes to an aircraft's longitudinal static stability because",
    options: [
      "it is required only for aircraft with a T-tail configuration and no other tail arrangement",
      "it eliminates the need for any horizontal stabilizer trim adjustment throughout the entire flight envelope",
      "it has no aerodynamic significance whatsoever and is understood to be purely a manufacturing and assembly convenience with no bearing on the aircraft's stability or trim characteristics at all",
      "as the aircraft's angle of attack changes, this incidence difference helps ensure the tail experiences a stabilizing lift change, restoring the aircraft toward its trimmed condition",
    ],
    answer: 3,
    explain:
      "Setting the horizontal stabilizer at a lower incidence than the wing (longitudinal dihedral) helps ensure that as the aircraft's angle of attack changes, the tail experiences a stabilizing change in its own angle of attack and lift, tending to restore the aircraft toward its trimmed condition following a disturbance.",
    reference: "TP 690 -- Theory of Flight: Longitudinal dihedral",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Rudder deflection can produce a secondary rolling moment, distinct from the yaw-induced adverse roll caused by aileron deflection, primarily because",
    options: [
      "rudder-induced yaw produces a sideslip, and the aircraft's dihedral effect then generates a rolling moment in response to that sideslip",
      "the rudder is mechanically linked directly to the ailerons on all aircraft types regardless of manufacturer, design philosophy, or control system architecture",
      "rudder deflection has no aerodynamic effect on roll under any circumstance or at any airspeed",
      "the rudder is located on the wing rather than the vertical fin on all transport category aircraft",
    ],
    answer: 0,
    explain:
      "Rudder deflection generates yaw, which produces a sideslip; the aircraft's dihedral effect then responds to that sideslip by generating a rolling moment, producing a secondary roll response to rudder input that is distinct from the adverse roll-induced yaw caused by aileron deflection.",
    reference: "TP 690 -- Theory of Flight: Rudder-induced roll via dihedral effect",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Although extending trailing edge flaps increases a wing's maximum lift coefficient (CLmax), flap deflection generally also",
    options: [
      "makes angle of attack entirely irrelevant to whether or not the wing stalls",
      "reduces the critical (stalling) angle of attack measured relative to the original (flaps-up) wing chord line, since the flap effectively changes the airfoil's camber and reference chord line",
      "increases the critical (stalling) angle of attack measured relative to the original (flaps-up) wing chord line",
      "has no effect whatsoever on the angle of attack at which the wing stalls",
    ],
    answer: 1,
    explain:
      "Flap deflection effectively changes the airfoil's camber and reference chord line, which generally reduces the critical (stalling) angle of attack measured relative to the original flaps-up wing chord line, even as it increases CLmax overall.",
    reference: "TP 690 -- Theory of Flight: Flap extension's effect on critical angle of attack",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A cambered airfoil, unlike a symmetric airfoil, generally produces lift at an angle of attack of zero degrees, meaning that a cambered airfoil's",
    options: [
      "lift is entirely independent of angle of attack under all conditions for any airfoil shape",
      "zero-lift angle of attack is always a large positive value, identical for every cambered airfoil regardless of the amount of camber or airfoil thickness distribution used",
      "zero-lift angle of attack is a small negative value, whereas a symmetric airfoil's zero-lift angle of attack is exactly zero",
      "critical angle of attack is always exactly zero degrees for any cambered airfoil",
    ],
    answer: 2,
    explain:
      "A cambered airfoil's zero-lift angle of attack is a small negative value, meaning it must be pitched slightly nose-down before it produces zero lift, whereas a symmetric airfoil (with no camber) produces zero lift exactly at zero angle of attack.",
    reference: "TP 690 -- Theory of Flight: Zero-lift angle of attack",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Angle of attack is distinguished from pitch attitude in that angle of attack is measured relative to",
    options: [
      "magnetic north, which has no defined relationship whatsoever to either the direction of the oncoming airflow over the wing or the aircraft's pitch attitude relative to the true horizon in any flight condition or phase of flight at all times",
      "the true horizon, identical in every respect to how pitch attitude itself is measured by the attitude indicator",
      "the aircraft's landing gear position, which has no aerodynamic significance to the wing's actual angle relative to the oncoming airflow or the pilot's control inputs",
      "the relative airflow (the oncoming air's direction relative to the wing chord), which can differ from pitch attitude (measured relative to the horizon), such as a steep climb at low angle of attack or a descent at high angle of attack",
    ],
    answer: 3,
    explain:
      "Angle of attack is measured relative to the relative airflow (the oncoming air's direction relative to the wing chord), while pitch attitude is measured relative to the true horizon; the two can differ significantly, such as during a steep climb flown at a relatively low angle of attack, or a descent flown at a comparatively high angle of attack.",
    reference: "TP 690 -- Theory of Flight: Angle of attack versus pitch attitude",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Induced drag, unlike parasite drag, is fundamentally a consequence of a wing producing lift, meaning that",
    options: [
      "induced drag theoretically approaches zero as lift approaches zero (such as in a zero-lift dive), whereas parasite drag remains present even when the wing produces no lift at all",
      "induced drag remains constant regardless of how much lift the wing is producing, at any airspeed, altitude, weight, or angle of attack flown throughout the entire flight envelope encountered",
      "parasite drag is also zero whenever lift is zero, just like induced drag, at any airspeed or altitude flown",
      "induced drag and parasite drag are always numerically equal to one another at every airspeed and altitude combination flown",
    ],
    answer: 0,
    explain:
      "Because induced drag is fundamentally a consequence of lift production, it theoretically approaches zero as lift approaches zero, such as in a zero-lift dive, whereas parasite drag remains present even when the wing produces no lift at all, since it arises from factors such as skin friction and form drag unrelated to lift.",
    reference: "TP 690 -- Theory of Flight: Induced drag as a consequence of lift",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given weight, configuration, and load factor, an aircraft's stalling speed expressed in calibrated/indicated airspeed remains essentially constant, but its stalling speed expressed in true airspeed (TAS)",
    options: [
      "also remains completely constant regardless of air density",
      "increases as air density decreases (such as with increasing temperature at a constant pressure altitude, or with increasing altitude itself), since a given indicated stalling speed corresponds to a higher TAS in less dense air",
      "decreases as air density decreases, opposite to the actual relationship",
      "is entirely unrelated to air density under any circumstance",
    ],
    answer: 1,
    explain:
      "Because indicated/calibrated airspeed reflects dynamic pressure rather than true airspeed directly, a given indicated stalling speed corresponds to a higher TAS as air density decreases -- such as with increasing temperature at a constant pressure altitude, or with increasing altitude -- even though the indicated stalling speed itself remains essentially constant for the same weight, configuration, and load factor.",
    reference: "TP 690 -- Theory of Flight: Air density's effect on TAS stalling speed",
  },
];
