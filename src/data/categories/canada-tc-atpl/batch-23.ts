import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 23 -- Section 6: Theory of
// Flight, third pass. Original questions written from aerodynamic
// principles and the TP 690 syllabus (topic headings only, no sample
// questions). Covers lift generation theory, swept-wing behaviour,
// propeller left-turning tendencies, and performance-curve concepts
// not yet addressed in batches 6 or 14. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_23_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Bernoulli's principle (pressure/velocity relationship over the airfoil) and Newton's third law (downward deflection of airflow) are often presented as competing explanations for lift. In reality, they",
    options: [
      "apply to entirely different flight regimes, with Bernoulli's principle relevant only below the speed of sound and Newton's third law only above it.",
      "have no real connection to how a wing generates lift, and both are considered outdated explanations replaced entirely by modern aerodynamic theory.",
      "are complementary descriptions of the same physical phenomenon, each capturing a valid part of how a wing generates lift.",
      "are mutually exclusive; only one of the two can correctly account for lift on any given wing, and the other must be discarded.",
    ],
    answer: 2,
    explain:
      "Modern aerodynamic understanding treats Bernoulli's principle (the pressure differential created as air flows at different speeds over the wing's upper and lower surfaces) and Newton's third law (the equal and opposite reaction to the wing deflecting a mass of air downward) as two complementary, consistent descriptions of the same underlying flow field, rather than as competing theories where only one can be correct -- both are genuinely present and connected in how a real wing generates lift.",
    reference: "TP 690 Section 6 - Theory of Flight, Lift",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Angle of incidence is distinguished from angle of attack in that angle of incidence is",
    options: [
      "a variable, in-flight angle that changes with every pitch input, while angle of attack is a fixed value set at the time of manufacture.",
      "measured only during level flight, while angle of attack is measured only during a climb or descent, with no overlap between the two.",
      "identical to angle of attack in every respect, with the two terms simply being regional naming variants for the same quantity.",
      "a fixed, structural angle between the wing's chord line and a reference line on the fuselage, set at manufacture, while angle of attack varies continuously in flight with the relative airflow.",
    ],
    answer: 3,
    explain:
      "Angle of incidence is a fixed, built-in design angle -- how the wing is mounted relative to the fuselage's reference line -- and doesn't change once the aircraft is built. Angle of attack, by contrast, is the angle between the wing's chord line and the actual relative airflow, and it changes continuously in flight as the flight path and pitch attitude change, which is exactly the quantity that determines whether and how close the wing is to its stalling angle.",
    reference: "TP 690 Section 6 - Theory of Flight, Lift",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Increasing an airfoil's camber (the curvature of its mean line), all else being equal, generally",
    options: [
      "increases the lift coefficient generated at a given angle of attack, and typically increases the airfoil's nose-down pitching moment as well.",
      "eliminates the airfoil's stalling angle of attack entirely, allowing lift to be generated at any angle of attack without separation.",
      "has no effect on lift coefficient at all, affecting only the airfoil's structural weight and manufacturing cost.",
      "decreases the lift coefficient generated at a given angle of attack, with no effect on the airfoil's pitching moment.",
    ],
    answer: 0,
    explain:
      "A more cambered airfoil generates more lift at a given angle of attack than a flatter one, which is part of why flaps (which effectively increase camber) are so effective at boosting lift for takeoff and landing -- but that increased camber also typically comes with an increased nose-down pitching moment, a trade-off reflected in the greater trim and control forces often needed with flaps extended.",
    reference: "TP 690 Section 6 - Theory of Flight, Lift",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's neutral point, in the context of longitudinal static stability, is best described as",
    options: [
      "the specific centre of gravity position that produces the aircraft's maximum possible static stability margin, and is therefore the ideal loading target for every flight.",
      "the centre of gravity position at which the aircraft would have zero static longitudinal stability margin, with any further aft CG movement making the aircraft statically unstable.",
      "a fixed point on the aircraft used only for weight and balance documentation, with no relationship to aerodynamic stability at all.",
      "the point at which the ailerons, rather than the elevator, provide the aircraft's primary source of pitch stability.",
    ],
    answer: 1,
    explain:
      "The neutral point is the critical centre of gravity position at which the aircraft's static longitudinal stability margin is exactly zero -- loading the aircraft with its CG forward of the neutral point gives a positive stability margin (the further forward, the greater the margin, generally at the cost of increased trim drag), while a CG at or aft of the neutral point removes or reverses that margin, which is why aft CG limits are set with a real margin ahead of the neutral point rather than at it.",
    reference: "TP 690 Section 6 - Theory of Flight, Stability and Control",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Aileron reversal, a high-speed aeroelastic phenomenon, occurs when",
    options: [
      "the ailerons physically jam in a neutral position at high speed, producing no rolling moment in either direction.",
      "the autopilot's roll channel malfunctions and commands aileron deflection opposite to what the flight director indicates.",
      "aerodynamic loads from aileron deflection twist a sufficiently flexible wing enough that the resulting change in the wing's effective angle of attack overcomes, and reverses, the intended rolling effect of the aileron.",
      "a pilot deflects the ailerons in the wrong direction during a crosswind landing, an entirely pilot-induced error unrelated to any structural or aerodynamic effect.",
    ],
    answer: 2,
    explain:
      "At sufficiently high speed and dynamic pressure, a wing (especially a flexible, high-aspect-ratio one) can twist enough under the aerodynamic load created by aileron deflection that the change in local angle of attack from that twist actually overwhelms and reverses the aileron's intended rolling effect -- a genuine aeroelastic (structure-meets-aerodynamics) phenomenon, not a pilot input error, autopilot fault, or mechanical jam, and one of the reasons wing torsional stiffness is a real design consideration.",
    reference: "TP 690 Section 6 - Theory of Flight, High-Speed Flight",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "On a swept wing, spanwise airflow -- boundary layer air migrating outward, from wing root toward wingtip, as it flows aft -- contributes to a tendency for",
    options: [
      "the ailerons to become more effective as angle of attack increases, rather than less effective, due to the spanwise flow reinforcing aileron authority.",
      "spanwise airflow to have no measurable effect on where a swept wing initially stalls, since stall onset depends purely on angle of attack, not boundary layer behaviour.",
      "the wing root region to reach its stalling angle of attack well before the wingtip, the reverse of the usual swept-wing tendency.",
      "the wingtip region to reach its stalling angle of attack before the wing root, since the thickening, slower-moving boundary layer accumulating toward the tip separates more readily.",
    ],
    answer: 3,
    explain:
      "On a swept wing, the boundary layer tends to drift spanwise, outward toward the tip, as it flows rearward -- thickening and slowing the airflow out near the tip and making it more prone to separation there. That's a key reason swept-wing aircraft are especially prone to tip-first stalling (with the associated loss of aileron effectiveness and pitch-up tendency), which is exactly why they're commonly fitted with wing fences, vortex generators, leading-edge devices, or washout specifically to manage that spanwise flow and delay tip stall.",
    reference: "TP 690 Section 6 - Theory of Flight, High-Speed Flight",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A swept-wing aircraft that begins to stall at the wingtips first can develop a self-reinforcing pitch-up tendency because",
    options: [
      "as the outboard (rearward, on a swept wing) lift-generating area stalls, the wing's centre of lift shifts forward and inboard, increasing the nose-up pitching moment and further increasing angle of attack.",
      "tip stall causes the wing's centre of lift to shift aft and outboard, increasing nose-down pitching moment and helping the aircraft recover from the stall automatically.",
      "the fuselage alone, independent of the wing, generates the pitch-up moment associated with a swept-wing tip stall.",
      "tip stall has no effect on the wing's centre of lift at all, so any pitch-up tendency observed must be attributed entirely to elevator input by the pilot.",
    ],
    answer: 0,
    explain:
      "Because a swept wing's tips are positioned further aft than its root, losing lift at the tips first shifts the wing's overall centre of lift forward and inboard -- and that forward shift increases the nose-up pitching moment, which tends to increase angle of attack further and deepen the stall, a self-reinforcing (divergent) tendency that's a specific, well-known hazard of swept-wing tip stall rather than an ordinary, self-correcting stall behaviour.",
    reference: "TP 690 Section 6 - Theory of Flight, Stalls",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The strength of the wingtip vortices a given aircraft generates is greatest when the aircraft is",
    options: [
      "heavy, fast, and in a steep descent, since descent rate rather than weight or speed is the dominant factor in vortex strength.",
      "heavy, slow, and clean (flaps and gear retracted), since these conditions require a high lift coefficient concentrated with minimal spanwise spreading.",
      "unaffected by weight, speed, or configuration; wingtip vortex strength depends solely on the aircraft's registered maximum takeoff weight.",
      "light, fast, and in landing configuration (flaps and gear extended), the combination that produces the weakest possible vortices.",
    ],
    answer: 1,
    explain:
      "Wingtip vortex strength scales with how much lift the wing has to generate relative to its span and how concentrated that lift is: a heavy, slow, clean aircraft (a large transport just after takeoff, for instance) needs a high lift coefficient with a comparatively short effective span for its weight, producing the strongest vortices -- exactly the combination behind the more conservative wake turbulence separation applied to a heavy aircraft departing slowly and cleanly.",
    reference: "TP 690 Section 6 - Theory of Flight, Drag",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In a propeller-driven aircraft, torque reaction -- one of several 'left-turning tendencies' at high power and low airspeed -- arises because",
    options: [
      "the descending propeller blade on one side takes a greater bite of air than the ascending blade on the other side at high angle of attack.",
      "the spinning mass of the propeller behaves gyroscopically, resisting any pitch input with a reaction displaced 90 degrees in the direction of rotation.",
      "by Newton's third law, the engine's reaction to spinning the propeller in one direction tends to rotate the airframe in the opposite direction.",
      "the propeller's slipstream spirals around the fuselage and strikes the vertical stabilizer asymmetrically, an effect unrelated to any reaction torque.",
    ],
    answer: 2,
    explain:
      "Torque reaction is a straightforward application of Newton's third law: the engine exerts a torque to spin the propeller one way, and by Newton's third law the airframe experiences an equal and opposite reaction torque, tending to roll (or, depending on mounting, otherwise rotate) the aircraft in the opposite direction -- a genuinely distinct mechanism from slipstream effect (asymmetric airflow striking the tail), P-factor (asymmetric propeller disc loading), or gyroscopic precession (the propeller's spinning-mass reaction to a pitch or yaw input), even though all four are grouped together as contributing left-turning tendencies in a typical single-engine, propeller-driven aircraft.",
    reference: "TP 690 Section 6 - Theory of Flight, Propeller Effects",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The slipstream effect, another of the propeller left-turning tendencies, results from",
    options: [
      "Newton's third law reaction to the propeller's own rotation, causing the airframe to rotate opposite to the direction the propeller spins.",
      "the descending propeller blade generating more thrust than the ascending blade whenever the aircraft is at a high angle of attack.",
      "the propeller behaving as a spinning gyroscope, deflecting any pitch input 90 degrees in the direction of rotation to produce a yaw.",
      "the propeller's slipstream spiralling rearward around the fuselage and striking the vertical stabilizer and rudder asymmetrically, producing a yawing moment.",
    ],
    answer: 3,
    explain:
      "The slipstream leaving the propeller doesn't travel straight back -- it spirals around the fuselage as it moves aft, and that spiral strikes the vertical stabilizer and rudder from one side more than the other, producing a yawing moment. That's a distinct mechanism from torque reaction (Newton's third law on the airframe itself), P-factor (asymmetric disc loading at high AoA), or gyroscopic precession (the spinning propeller mass's reaction to a pitch/yaw input) -- each of the four left-turning tendencies works through its own separate physical pathway.",
    reference: "TP 690 Section 6 - Theory of Flight, Propeller Effects",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Gyroscopic precession, as it affects a propeller-driven aircraft, means that a pitch input applied to a spinning propeller",
    options: [
      "produces a reaction that is felt approximately 90 degrees further around in the direction of rotation, typically manifesting as a yaw rather than a pure pitch response.",
      "is cancelled out entirely by torque reaction, so the two effects always sum to exactly zero net moment on the airframe.",
      "has no effect on the propeller's behaviour at all, since gyroscopic precession applies only to instruments such as the attitude indicator and heading indicator.",
      "produces a reaction felt immediately and only as additional pitch, with no yaw component at all.",
    ],
    answer: 0,
    explain:
      "A spinning propeller behaves, in this respect, like any other gyroscope: a force applied to try to tilt its spin axis (such as raising the tail during a tailwheel aircraft's takeoff roll, effectively pitching the propeller disc) doesn't produce a response where you'd naively expect it -- the resulting reaction is felt about 90 degrees further around in the direction of rotation, which is why raising the tail on many single-engine, propeller-driven, tailwheel aircraft produces a yawing tendency rather than a purely vertical pitch effect, distinct from and additional to torque reaction, slipstream effect, and P-factor.",
    reference: "TP 690 Section 6 - Theory of Flight, Propeller Effects",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's absolute ceiling is distinguished from its service ceiling in that the absolute ceiling is",
    options: [
      "always a lower altitude than the service ceiling, the reverse of the usual relationship between the two terms.",
      "the altitude at which maximum rate of climb has decreased to zero, while the service ceiling is a lower altitude at which a small, specified positive rate of climb (such as 100 ft/min) can still just be achieved.",
      "defined solely by the aircraft's maximum operating Mach number, with no relationship to climb performance at all.",
      "identical to the service ceiling for every aircraft type, with the two terms simply describing the same altitude using different words.",
    ],
    answer: 1,
    explain:
      "The absolute ceiling is a theoretical limit: the altitude at which the aircraft's maximum achievable rate of climb has decreased all the way to zero, meaning it could level off but never climb any higher. The service ceiling is a more practically useful (and always lower) figure, defined as the altitude at which a small but still-positive specified rate of climb -- often 100 ft/min -- can still be achieved, since an aircraft that can barely maintain altitude, let alone climb meaningfully, isn't considered to have any further useful climb capability left.",
    reference: "TP 690 Section 6 - Theory of Flight, Climb Performance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a propeller-driven aircraft, best rate of climb speed corresponds to the speed at which",
    options: [
      "excess thrust (thrust available minus thrust required) is at its maximum, exactly as it is for a jet aircraft's best rate of climb speed.",
      "the aircraft's stalling speed is reached, since maximum excess power is assumed to always occur right at the stall.",
      "the excess power available (power available minus power required) is at its maximum, rather than where excess thrust is at its maximum.",
      "power required is at its absolute minimum value, regardless of how much power is actually available at that speed.",
    ],
    answer: 2,
    explain:
      "For a propeller aircraft, rate of climb is fundamentally about excess power (the surplus of power available over power required), not excess thrust -- which is why the best-rate-of-climb speed for a propeller aircraft typically differs from a jet aircraft's, where excess thrust (rather than excess power) is the governing quantity for best rate of climb, reflecting the different way a propeller converts engine output into usable thrust across the speed range compared to a jet engine.",
    reference: "TP 690 Section 6 - Theory of Flight, Climb Performance",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing two wings of different aspect ratio but similar airfoil section, a lower-aspect-ratio wing generally stalls",
    options: [
      "only at a substantially higher indicated airspeed than a higher-aspect-ratio wing, regardless of weight or load factor.",
      "at exactly the same angle of attack and with identical stall character as a higher-aspect-ratio wing of the same airfoil section.",
      "more abruptly and sharply, with a more sudden loss of lift, compared to the gentler stall of a higher-aspect-ratio wing.",
      "more gently and progressively, with a more gradual loss of lift and often more retained aileron control, compared to the sharper stall break of a higher-aspect-ratio wing.",
    ],
    answer: 3,
    explain:
      "A lower-aspect-ratio wing (shorter, relatively wider) tends to stall more gradually and gently, with lift falling off progressively rather than abruptly -- a real, if secondary, benefit that comes alongside the increased induced drag lower-aspect-ratio wings otherwise suffer, in contrast to a higher-aspect-ratio wing's generally sharper, more sudden stall break.",
    reference: "TP 690 Section 6 - Theory of Flight, Stalls",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Sweeping a wing back, for a given airfoil section and thickness, generally has the effect of",
    options: [
      "increasing the wing's critical Mach number, delaying the onset of compressibility effects to a higher flight Mach number than an equivalent unswept wing.",
      "having no effect on critical Mach number at all, with wing sweep affecting only the wing's structural weight.",
      "decreasing the wing's critical Mach number, causing compressibility effects to be encountered at a lower flight Mach number than an equivalent unswept wing.",
      "eliminating the concept of critical Mach number entirely for that wing, making compressibility effects impossible regardless of speed.",
    ],
    answer: 0,
    explain:
      "Sweeping the wing back effectively reduces the component of airflow velocity perceived perpendicular to the wing's leading edge (the spanwise component being aerodynamically less significant), which delays the local airflow acceleration to sonic speed until a higher overall flight Mach number is reached -- raising the wing's critical Mach number and helping push compressibility drag rise and shock-induced effects further out into the high-speed cruise regime, one of the main reasons high-speed jet aircraft use swept wings.",
    reference: "TP 690 Section 6 - Theory of Flight, High-Speed Flight",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The three basic categories of static stability -- positive, neutral, and negative -- describe an aircraft's initial tendency, following a disturbance from equilibrium, to",
    options: [
      "be determined solely by airspeed, with static stability category changing automatically and continuously as speed varies in flight.",
      "move back toward its original equilibrium condition (positive), remain in the disturbed condition without further tendency either way (neutral), or continue moving further away from equilibrium (negative).",
      "apply exclusively to an aircraft's lateral axis, with no equivalent categorization existing for longitudinal or directional stability.",
      "always return fully to its original equilibrium condition regardless of category, with the three terms only describing how quickly that return happens.",
    ],
    answer: 1,
    explain:
      "Static stability describes only the initial tendency right after a disturbance, not the full subsequent motion: positive static stability means the initial tendency is back toward equilibrium, neutral static stability means no tendency either way (the aircraft simply stays in the disturbed state), and negative static stability means the initial tendency is to diverge further away from equilibrium -- a categorization that applies across longitudinal, lateral, and directional stability alike, not to the lateral axis exclusively.",
    reference: "TP 690 Section 6 - Theory of Flight, Stability and Control",
  },
];
