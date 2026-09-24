import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 62 -- Section 7: Theory of
// Flight, seventh pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// aerodynamic theory. Covers minimum control speed (Vmc), torsional
// aeroelastic divergence vs flutter, drag divergence Mach number vs
// critical Mach number, low-speed pre-stall buffet vs Mach buffet,
// flap extension reducing the numerical critical angle of attack,
// the spiral/dutch roll/roll-subsidence lateral-directional modes,
// interference drag, wing sweep as a dihedral-effect source,
// forward CG's effect on stalling speed, reversible vs irreversible
// flight controls and artificial feel, the trimmable horizontal
// stabilizer vs a trim tab, dynamic pressure and the V-squared
// relationship, wing loading's effect on gust response, the
// autorotation mechanism sustaining a spin, and minimum power-
// required (best endurance) vs minimum drag (best range) speed for
// a propeller aircraft -- topics not yet addressed in batches 6,
// 14, 23, 32, 42, or 52. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_62_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a multi-engine aircraft, minimum control speed (Vmc), as established for takeoff and certification purposes, is best described as the minimum speed, following the sudden failure of the critical engine at takeoff power, at which",
    options: [
      "the landing gear can still be safely retracted during the initial climb, with no relationship at all to engine failure or to maintaining directional control.",
      "the aircraft can still climb at its best rate-of-climb speed with all engines operating normally, entirely unrelated to any engine failure scenario.",
      "the pilot can still maintain directional control of the aircraft using rudder alone (with a limited bank angle toward the operating engine permitted), without exceeding specified control force limits.",
      "the stalling speed for the aircraft's current weight, configuration, and centre of gravity is reached, making Vmc simply another name for the power-off stalling speed.",
    ],
    answer: 2,
    explain:
      "Vmc is the minimum speed at which, following a sudden failure of the critical engine at takeoff power, the pilot can still maintain directional control of the aircraft using rudder alone (with a limited amount of bank toward the operating engine typically permitted) without exceeding specified control force limits -- below Vmc, the remaining rudder authority is insufficient to counter the asymmetric thrust and drag, and the aircraft will yaw and potentially roll uncontrollably toward the failed engine.",
    reference: "TP 690 -- Theory of Flight: Multi-Engine Aerodynamics",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Aeroelastic (torsional) divergence, as distinguished from flutter, is best described as",
    options: [
      "a purely thermal effect caused by aerodynamic heating at high Mach numbers during sustained high-speed cruise, and therefore unrelated to any aerodynamic twisting moment or torsional stiffness consideration at all.",
      "a phenomenon that occurs only at very low airspeeds near the stall, driven by separated boundary-layer airflow rather than any structural twisting moment, with no relationship to high-speed flight at all.",
      "a dynamic, oscillatory phenomenon in which a structure vibrates at rapidly increasing amplitude due to coupling between aerodynamic, elastic, and inertial forces acting simultaneously on the structure -- making torsional divergence simply another name for flutter under this description.",
      "a static instability in which the aerodynamic twisting moment on a structure (such as a wing) increases faster than the structure's torsional stiffness can resist as airspeed rises, causing progressive twisting until failure, without necessarily involving oscillation.",
    ],
    answer: 3,
    explain:
      "Torsional divergence is a static aeroelastic instability: as airspeed increases, the aerodynamic twisting moment on a structure such as a wing can grow faster than the structure's torsional stiffness can resist, causing progressive, non-oscillatory twisting that leads to structural failure -- this is distinct from flutter, which is a dynamic, oscillatory instability arising from coupling between aerodynamic, elastic, and inertial forces.",
    reference: "TP 690 -- Theory of Flight: Aeroelasticity",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's drag divergence Mach number, as distinguished from its critical Mach number, is",
    options: [
      "generally a somewhat higher Mach number than critical Mach, at which the sharp rise in drag caused by developing shock waves and their associated flow separation becomes pronounced enough to be operationally significant.",
      "always a lower Mach number than critical Mach, occurring well before any local airflow over the wing, fuselage, or empennage has actually accelerated enough to reach the speed of sound anywhere at all on the airframe surface.",
      "unrelated to shock waves or drag rise at all, and instead refers strictly and exclusively to the onset of engine compressor stall occurring at high Mach numbers during cruise.",
      "always numerically identical to critical Mach number in every flight condition, with the two terms simply being alternative names applied to one and the same underlying value.",
    ],
    answer: 0,
    explain:
      "Critical Mach number is the free-stream Mach number at which local airflow somewhere on the airframe first reaches the speed of sound (Mach 1); drag divergence Mach number is generally somewhat higher, marking the point at which the resulting shock waves and shock-induced flow separation have grown enough to cause a sharp, operationally significant rise in total drag -- the two are related but distinct milestones along the same speed increase.",
    reference: "TP 690 -- Theory of Flight: High-Speed Aerodynamics",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Low-speed (pre-stall) airframe buffet, felt by the pilot as the aircraft approaches the stall, results primarily from",
    options: [
      "resonance set up between the landing gear structure and the runway surface texture, a mechanical effect applicable only during the takeoff or landing ground roll itself.",
      "turbulent, separated airflow coming off the wing at high angle of attack striking the horizontal tail and/or fuselage, transmitting vibration through the airframe.",
      "engine vibration transmitted through the airframe mounts alone, a mechanical source entirely unrelated to any wing airflow condition or angle of attack.",
      "shock waves forming on the wing's upper surface at high forward speed, identical in underlying origin and cause to high-speed Mach buffet encountered near critical Mach number.",
    ],
    answer: 1,
    explain:
      "As angle of attack increases approaching the stall, airflow over the wing begins to separate and becomes turbulent; this disturbed, separated air striking the horizontal tail and/or aft fuselage is transmitted through the airframe as buffet, giving the pilot a valuable tactile warning of the approaching stall that is aerodynamic in origin, distinct from shock-induced high-speed Mach buffet.",
    reference: "TP 690 -- Theory of Flight: Stalls",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "High-speed (Mach) buffet, encountered as an aircraft approaches or exceeds its critical Mach number, results primarily from",
    options: [
      "the same turbulent separation mechanism as low-speed stall buffet, with angle of attack rather than Mach number as the causative factor in both cases.",
      "a complete and simultaneous loss of all lift across the entire wing surface at once and without warning, a drastic condition that would make Mach buffet aerodynamically identical in every practical respect to a full, classic aerodynamic stall.",
      "shock-induced flow separation behind the shock wave(s) forming on the wing, creating turbulent, disturbed airflow that buffets the airframe -- similar to low-speed buffet, but with a shock wave rather than high angle of attack as the cause.",
      "vibration transmitted purely and directly from the engines and their mounts, with no relationship whatsoever to wing airflow conditions or shock wave formation at all.",
    ],
    answer: 2,
    explain:
      "As critical Mach number is exceeded, shock waves form on the wing, and the airflow behind those shock waves tends to separate from the surface, becoming turbulent; that shock-induced separated flow buffets the airframe in a manner similar in sensation to low-speed stall buffet, but the underlying cause is the shock wave and its associated separation rather than a high angle of attack.",
    reference: "TP 690 -- Theory of Flight: High-Speed Aerodynamics",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Extending trailing edge flaps generally increases a wing's maximum lift coefficient (CLmax), but it also tends to",
    options: [
      "eliminate the very concept of a critical angle of attack entirely, since a flapped wing in this description is defined as incapable of ever stalling.",
      "leave the critical angle of attack completely unchanged in every case, regardless of flap type, deflection amount, or aircraft configuration.",
      "increase the critical angle of attack to a noticeably higher numerical value than the clean wing configuration, in addition to increasing CLmax.",
      "reduce the numerical value of the critical (stalling) angle of attack, so that the wing with flaps extended reaches its (now higher) CLmax, and stalls, at a lower angle of attack than the clean wing does.",
    ],
    answer: 3,
    explain:
      "While flap extension increases CLmax (the peak lift coefficient the wing can generate), it generally does so while reducing the numerical value of the angle of attack at which that peak -- and the resulting stall -- occurs, so a flapped wing typically reaches its higher CLmax, and stalls, at a lower angle of attack in degrees than the same wing configured clean.",
    reference: "TP 690 -- Theory of Flight: High Lift Devices",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's lateral-directional dynamic stability is often described using three characteristic modes -- spiral, dutch roll, and roll (subsidence) -- which differ in that",
    options: [
      "spiral describes a slow, often divergent, combined roll-yaw tendency; dutch roll is a coupled, oscillatory roll-yaw motion; and roll subsidence describes how quickly a roll rate, once established, damps out on its own.",
      "roll subsidence describes an oscillatory motion that grows in amplitude over time, while dutch roll describes a purely non-oscillatory, slowly divergent tendency instead -- essentially the reverse of their actual characteristics.",
      "spiral and dutch roll both refer exclusively to longitudinal (pitch) motion in this description, while roll subsidence is said to be the only one of the three modes related to lateral motion at all.",
      "all three terms describe the identical underlying motion in this view, differing only in which axis (roll, pitch, or yaw) is conventionally used to measure and describe it.",
    ],
    answer: 0,
    explain:
      "The spiral mode is a slow, often mildly divergent or convergent, coupled roll-yaw tendency; dutch roll is a coupled, oscillatory roll-yaw motion (a 'wagging' combination of rolling and yawing); and roll (subsidence) mode describes how quickly a rolling motion, once initiated, damps out due to roll damping -- together these three modes are commonly used to characterize an aircraft's overall lateral-directional dynamic behaviour.",
    reference: "TP 690 -- Theory of Flight: Dynamic Stability",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Interference drag, one of the components making up an aircraft's total parasite drag, arises specifically from",
    options: [
      "electromagnetic interference occurring between various onboard avionics, radar, and electrical systems, a phenomenon entirely unrelated to aerodynamic airflow or the intersection of physical surfaces.",
      "the disruption and mixing of airflow where two separate surfaces meet (such as where a wing joins the fuselage), which is often reduced through the use of fairings at those junctions.",
      "friction generated between the passing airflow and the aircraft's external skin surface alone, unrelated to the intersection or junction of any two separate surfaces.",
      "the drag directly and solely associated with generating lift, and therefore one that varies inversely with airspeed in essentially the same manner as ordinary induced drag.",
    ],
    answer: 1,
    explain:
      "Interference drag results from the disruption and turbulent mixing of airflow where two separate surfaces or components meet -- a classic example being the wing-to-fuselage junction -- and is commonly reduced through the use of aerodynamic fairings at such junctions, distinguishing it from skin friction drag (surface friction) and form drag (shape-related pressure drag), the other components of parasite drag.",
    reference: "TP 690 -- Theory of Flight: Drag",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In addition to geometric dihedral (the wings physically angled upward from root to tip), wing sweep also contributes to an aircraft's dihedral effect because, in a sideslip,",
    options: [
      "swept wings always fully and completely cancel out any dihedral effect that geometric dihedral would otherwise produce on its own, no matter what sweep angle is chosen or what sideslip angle happens to be involved.",
      "wing sweep produces a yawing moment only during a sideslip, contributing no rolling moment to dihedral effect at all under any circumstances.",
      "the wing leading into the relative wind presents a shorter, less sweep-reduced lift-producing span, generating relatively more lift than the trailing wing, producing a rolling moment similar to geometric dihedral.",
      "wing sweep has no aerodynamic relationship whatsoever to dihedral effect, which according to this view is generated exclusively by geometric dihedral angle alone.",
    ],
    answer: 2,
    explain:
      "In a sideslip, the wing on the leading (into-the-wind) side of a swept-wing aircraft effectively presents a somewhat shorter, less swept span relative to the airflow, generating relatively more lift than the trailing wing, which produces a rolling moment toward wings-level in the same sense as geometric dihedral -- meaning that a swept wing contributes to overall dihedral effect independently of, and in addition to, any geometric dihedral built into the wing.",
    reference: "TP 690 -- Theory of Flight: Lateral Stability",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Moving an aircraft's centre of gravity forward (toward its approved forward limit), compared to a more aft CG position at the same weight and configuration, generally has the effect of",
    options: [
      "eliminating the stall entirely and in all circumstances, since a sufficiently forward CG position is by this description defined as making the aircraft aerodynamically incapable of ever stalling.",
      "having no effect whatsoever on stalling speed, which by this description is determined solely by CLmax and wing loading and is entirely independent of CG position.",
      "slightly decreasing the indicated stalling speed, since a forward CG position is said to always reduce the total lift that the wing itself must produce.",
      "slightly increasing the indicated stalling speed, since a forward CG requires the horizontal tail to generate a greater download to balance the aircraft, adding to the wing's required lift.",
    ],
    answer: 3,
    explain:
      "A more forward centre of gravity requires the horizontal tail to generate a greater download to keep the aircraft in pitch trim; that download effectively adds to the total load the wing must support beyond just the aircraft's weight, which slightly increases the wing loading actually being carried and, correspondingly, slightly increases the indicated stalling speed compared to a more aft CG position at the same aircraft weight.",
    reference: "TP 690 -- Theory of Flight: Weight and Balance Effects",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A reversible flight control system (in which aerodynamic hinge moments on the control surface are felt directly by the pilot through the controls), as distinguished from an irreversible (fully powered, hydraulically actuated) system, generally means that",
    options: [
      "control forces felt by the pilot on a reversible system vary naturally with airspeed and control deflection (giving natural aerodynamic feel), whereas an irreversible system isolates the pilot from those forces and must instead generate artificial feel electronically or mechanically.",
      "an irreversible system always requires substantially greater physical effort from the pilot than a comparable reversible system does, at any given airspeed or deflection.",
      "the terms describe an identical control architecture in every respect, differing only in the particular name applied to it by different manufacturers.",
      "a reversible system uses hydraulic actuators exclusively in every installation, while an irreversible system relies entirely on direct cable-and-pulley connections with no hydraulic assistance at all.",
    ],
    answer: 0,
    explain:
      "In a reversible (typically manual, cable-and-pulley or push-rod) system, the aerodynamic hinge moment on the control surface is transmitted back through the linkage and felt directly by the pilot, giving natural feel that varies with airspeed and deflection; in an irreversible, fully powered system, the actuator isolates the pilot from those aerodynamic forces entirely, so the system must synthesize an artificial feel force (often as a function of airspeed) to give the pilot meaningful tactile feedback.",
    reference: "TP 690 -- Theory of Flight: Flight Controls",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A trimmable horizontal stabilizer (THS), used for longitudinal trim on many transport aircraft, differs from a simple elevator trim tab in that the THS",
    options: [
      "provides roll trim rather than pitch trim entirely in this description, making it functionally equivalent instead to an aileron trim tab mounted out on the wing itself.",
      "achieves trim by adjusting the incidence angle of the horizontal stabilizer itself, rather than deflecting a small tab on the elevator, producing large trim changes with less resulting drag.",
      "cannot be adjusted at all once airborne, and is instead set permanently to a single fixed position only during scheduled ground maintenance.",
      "is simply and essentially a form of trim tab itself, with no meaningful functional or aerodynamic distinction whatsoever from a conventional elevator trim tab mounted directly on the elevator surface.",
    ],
    answer: 1,
    explain:
      "A trimmable horizontal stabilizer achieves pitch trim by adjusting the incidence angle of the entire stabilizer surface, rather than by deflecting a small auxiliary trim tab on the elevator; because the whole, larger stabilizer surface is repositioned rather than just a small tab, a THS can produce large trim changes while generally generating less trim drag than an equivalent trim change made using only a tab.",
    reference: "TP 690 -- Theory of Flight: Flight Controls",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Dynamic pressure (commonly denoted q), a key term in the lift and drag equations, explains why aerodynamic forces such as lift generally",
    options: [
      "decrease as airspeed increases, since higher airspeed is in this view said to reduce the aircraft's angle of attack requirement to a proportionally much greater degree than the speed increase itself accounts for.",
      "remain entirely constant regardless of airspeed under this description, varying only with angle of attack and never with dynamic pressure at all.",
      "increase with the square of true airspeed (doubling airspeed, at constant angle of attack and density, roughly quadruples the force), since dynamic pressure is proportional to density times velocity squared.",
      "increase only in direct linear proportion to true airspeed as it rises, with no dependence on air density or the square of velocity at all.",
    ],
    answer: 2,
    explain:
      "Dynamic pressure is proportional to air density multiplied by the square of velocity; because lift and drag are both proportional to dynamic pressure (along with the relevant coefficient and reference area), doubling airspeed at a constant angle of attack and air density roughly quadruples the resulting aerodynamic force, which is why small changes in airspeed have an outsized effect on lift and drag compared to a simple linear relationship.",
    reference: "TP 690 -- Theory of Flight: Fundamentals",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing two aircraft of similar weight but different wing loading (weight divided by wing area), the aircraft with the higher wing loading will generally",
    options: [
      "experience a larger change in load factor for the identical gust, making a higher wing-loaded aircraft always the rougher-riding of the two in turbulence.",
      "be entirely unaffected by gusts of any magnitude whatsoever, regardless of wing loading, since gust response is said to depend solely on aircraft mass alone.",
      "have no relationship at all between wing loading and gust-induced load factor changes, since turbulence response in every case is said to depend only on total aircraft mass and nothing else.",
      "experience a smaller change in load factor for a given vertical gust, and therefore generally ride more smoothly through turbulence, than the lower wing-loaded aircraft.",
    ],
    answer: 3,
    explain:
      "For a given vertical gust velocity, an aircraft with higher wing loading experiences a proportionally smaller sudden change in angle of attack (and thus in lift and load factor) relative to its weight than a lower wing-loaded aircraft would, which is part of why higher wing-loaded aircraft (all else being similar) generally provide a smoother ride through turbulence.",
    reference: "TP 690 -- Theory of Flight: Load Factors",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "During a fully developed spin, the self-sustaining rotation (autorotation) is maintained primarily because",
    options: [
      "the descending wing (moving further into the stalled region of its lift curve, with increasing effective angle of attack) generates less lift and more drag than the rising wing, sustaining the rotation.",
      "autorotation is said to be entirely and completely unrelated to any difference in lift or drag between the two wings at all, and instead to result solely and exclusively from engine torque effects alone.",
      "the descending wing generates more lift than the rising wing under this description, an effect that would actually tend to stop rather than sustain the ongoing rotation.",
      "both wings are said to remain fully unstalled throughout the entire spin, with the rotation instead driven entirely by continuous rudder input alone.",
    ],
    answer: 0,
    explain:
      "In a developed spin, the descending wing has a higher effective angle of attack and is more deeply stalled, producing less lift and more drag than the rising wing (which is less stalled or unstalled and producing relatively more lift); this asymmetry in lift and drag between the two wings produces a continuing rolling and yawing moment that sustains the autorotation, rather than the rotation being driven by rudder input or engine effects alone.",
    reference: "TP 690 -- Theory of Flight: Spins",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a propeller-driven aircraft, the speed for minimum power required (associated with best endurance) differs from the speed for minimum drag (best L/D, associated with best range) in that",
    options: [
      "minimum power required always occurs at a distinctly faster airspeed than minimum drag speed does, which is in fact the reverse of their actual real-world relationship.",
      "minimum power required occurs at a slower airspeed than minimum drag, since power is the product of drag and velocity, and that product can still be falling even as drag itself begins rising slightly.",
      "power required is said to be entirely independent of drag in every flight condition, making any direct comparison between the two speeds essentially meaningless.",
      "the two speeds are always numerically identical for any propeller aircraft, since power required and drag are simply proportional to one another at every airspeed.",
    ],
    answer: 1,
    explain:
      "Power required equals drag multiplied by velocity; because that product can still be decreasing with increasing speed even after drag itself has passed its own minimum and started to rise slightly, the speed for minimum power required (associated with best endurance -- staying aloft longest for a given fuel quantity) occurs at a slower airspeed than the speed for minimum drag, or best L/D (associated with best range -- covering the greatest distance for a given fuel quantity).",
    reference: "TP 690 -- Theory of Flight: Performance",
  },
];
