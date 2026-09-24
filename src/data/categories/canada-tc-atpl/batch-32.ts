import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 32 -- Section 6: Theory of
// Flight, fourth pass. Original questions written from standard
// aerodynamic principles and the TP 690 syllabus (topic headings
// only, no sample questions). Covers P-factor, drag component
// breakdown, transonic aerodynamic effects, flap types, stability
// contributions, and aeroelastic phenomena not yet addressed in
// batches 6, 14, or 23. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_32_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "P-factor, one of the propeller 'left-turning tendencies' most pronounced at high power and high angle of attack, results from",
    options: [
      "the descending propeller blade (typically on the right side, for a conventional clockwise-rotating propeller viewed from behind) taking a greater bite of air than the ascending blade, producing more thrust on that side and yawing the aircraft.",
      "the reaction torque of the spinning propeller against the engine, causing the aircraft to roll opposite to the direction of propeller rotation.",
      "the corkscrewing propeller slipstream striking the tail's left side asymmetrically, unrelated to blade angle of attack at all.",
      "gyroscopic precession of the propeller disc, manifesting a pitch input as an effect offset 90 degrees in the direction of rotation.",
    ],
    answer: 0,
    explain:
      "P-factor (asymmetric disc loading) arises when the propeller disc is at an angle of attack to the relative airflow (as in a high-power, nose-high, low-airspeed condition) -- the descending blade meets the air at a higher local angle of attack and produces more thrust than the ascending blade, and this thrust asymmetry between the two sides of the disc yaws the aircraft, distinct from torque reaction (a rolling effect from engine reaction), the slipstream effect (a yawing effect from the corkscrewing airflow striking the tail), or gyroscopic precession (a pitch/yaw-input-driven effect offset around the disc).",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Parasite drag, as distinct from induced drag, is generally broken down into components including",
    options: [
      "form (pressure) drag, skin friction drag, and interference drag, all of which arise regardless of whether the aircraft is producing lift.",
      "only induced drag itself, since parasite drag and induced drag are simply two names describing the identical physical phenomenon.",
      "wave drag alone, with form drag, skin friction drag, and interference drag all properly classified as forms of induced drag instead.",
      "a single, undifferentiated component, since parasite drag is not considered separable into distinct contributing sources.",
    ],
    answer: 0,
    explain:
      "Parasite drag is the drag not directly associated with the production of lift, and it's commonly broken into form drag (from the pressure difference created by an object's shape moving through the air), skin friction drag (from viscous friction between the airflow and the aircraft's surface), and interference drag (from the disrupted, often turbulent airflow where different components, such as a wing and fuselage, meet) -- a meaningfully different set of mechanisms from induced drag (which is directly tied to lift production) or wave drag (a transonic/supersonic-specific phenomenon).",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Reynolds number, a dimensionless ratio of inertial to viscous forces in the airflow over a surface, is significant to boundary layer behaviour because",
    options: [
      "it strongly influences whether the boundary layer over a given surface location remains laminar or transitions to turbulent flow, with transition tending to occur at a characteristic Reynolds number.",
      "it determines the aircraft's true airspeed directly, with no connection to boundary layer flow characteristics at all.",
      "it applies exclusively to airflow inside jet engines, with no relevance to external airflow over a wing or fuselage.",
      "it is a fixed, unchanging constant for a given aircraft type, independent of airspeed, altitude, or surface length.",
    ],
    answer: 0,
    explain:
      "Reynolds number (depending on airspeed, a characteristic length along the surface, and the air's density and viscosity) is one of the key parameters governing where and whether a boundary layer transitions from smooth, laminar flow to turbulent flow -- transition tends to happen once a characteristic Reynolds number is reached for the flow conditions and surface involved, and since airspeed and air density both vary through a flight, Reynolds number varies too, rather than being fixed, airspeed-derived, or an internal-engine-only concept.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given configuration and altitude, an aircraft's stalling speed varies with weight such that",
    options: [
      "stalling speed increases with the square root of weight, so a given percentage increase in weight produces a smaller percentage increase in stalling speed.",
      "stalling speed is entirely independent of aircraft weight, remaining identical regardless of how heavily the aircraft is loaded.",
      "stalling speed decreases as weight increases, the opposite of the actual relationship between the two.",
      "stalling speed increases in direct, one-to-one proportion with weight, so doubling weight exactly doubles stalling speed.",
    ],
    answer: 0,
    explain:
      "Because lift at the stall (a function of CLmax, dynamic pressure, and wing area) must still equal weight, and dynamic pressure varies with the square of speed, stalling speed scales with the square root of weight rather than in direct proportion to it -- meaning a given percentage increase in weight produces a noticeably smaller percentage increase in stalling speed, not an equal one, and stalling speed is very much weight-dependent rather than fixed or inversely related to weight.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The horizontal stabilizer's contribution to an aircraft's positive longitudinal static stability comes primarily from",
    options: [
      "generating a restoring pitching moment when the aircraft is disturbed in pitch (for example, by a gust), tending to return the aircraft toward its original angle of attack.",
      "generating thrust, which the wing alone is otherwise unable to produce, making longitudinal stability dependent on the stabilizer's own thrust output.",
      "increasing the aircraft's maximum lift coefficient at the stall, a role otherwise performed exclusively by wing-mounted high-lift devices.",
      "eliminating adverse yaw during a roll, a function otherwise performed by the ailerons and rudder rather than the horizontal stabilizer.",
    ],
    answer: 0,
    explain:
      "A properly designed and positioned horizontal stabilizer (behind the CG on a conventional configuration) produces a pitching moment that opposes, rather than reinforces, a disturbance-induced change in angle of attack -- if a gust pitches the nose up, the resulting change in the stabilizer's own angle of attack and lift generates a nose-down restoring moment, and vice versa, which is the core mechanism behind positive longitudinal static stability; it isn't a thrust-generating, stall-CLmax, or adverse-yaw-correcting surface.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "'Mach tuck,' a nose-down pitching tendency that can develop as an aircraft approaches and exceeds its critical Mach number, results primarily from",
    options: [
      "a shock-induced rearward shift of the wing's centre of pressure, which moves the lift distribution aft of the CG and creates a nose-down pitching moment.",
      "a forward shift of the wing's centre of pressure, creating a nose-up rather than nose-down pitching moment, the opposite of the actual effect.",
      "increased propeller torque at high Mach number, a cause unrelated to any change in the wing's own centre of pressure.",
      "a reduction in horizontal stabilizer effectiveness alone, with the wing's centre of pressure remaining entirely unaffected by compressibility effects.",
    ],
    answer: 0,
    explain:
      "As airflow over the wing accelerates locally to supersonic speed and a shock wave forms, the resulting change in the chordwise pressure distribution tends to shift the wing's centre of pressure aft -- moving the effective lift point further behind the CG and creating a nose-down pitching moment (Mach tuck) that a pilot may need to counter, an effect driven by the wing's own aerodynamic pressure distribution rather than by propeller torque (irrelevant on the jet/high-speed aircraft where Mach tuck is a real concern) or exclusively by any change in stabilizer effectiveness.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing common trailing edge flap types, a Fowler flap is distinguished from a simple plain flap in that a Fowler flap",
    options: [
      "extends aft (and typically down) on tracks, increasing both wing camber and effective wing area, rather than only increasing camber by hinging downward in place.",
      "increases wing camber by an identical mechanism to a plain flap, with the only difference between the two being the material used in construction.",
      "reduces wing area as it deploys, the opposite of a plain flap's effect on wing area.",
      "operates exclusively on the wing's leading edge, making it functionally equivalent to a slat rather than a trailing edge device.",
    ],
    answer: 0,
    explain:
      "A plain flap simply hinges downward from the wing's trailing edge, increasing camber (and thus CLmax) without changing wing area -- a Fowler flap, by contrast, moves aft along tracks before (and while) deflecting downward, which increases both effective wing area and camber, generally producing a larger increase in CLmax than a plain flap of comparable size, and it remains a trailing edge (not leading edge) device, distinguishing it from a slat or slot.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "At the fundamental aerodynamic level, a wing stall occurs because",
    options: [
      "the airflow separates from the wing's upper surface, disrupting the smooth pressure distribution that had been generating lift, rather than because airspeed itself has dropped below some fixed value.",
      "airspeed drops below a fixed value unique to the aircraft type, with angle of attack and airflow behaviour playing no role in the stall at all.",
      "the wing's structure physically deforms beyond a safe limit, with aerodynamic airflow behaviour being unrelated to the stall event.",
      "engine thrust becomes insufficient to maintain altitude, a power-related rather than an aerodynamic-flow-related phenomenon.",
    ],
    answer: 0,
    explain:
      "A stall is fundamentally a flow-separation event: as angle of attack increases, the adverse pressure gradient over the upper surface eventually overcomes the boundary layer's energy, causing the airflow to separate from the surface rather than following it smoothly -- that separation is what disrupts the lift-generating pressure distribution and causes the sharp lift loss characteristic of a stall, which is why stall is fundamentally tied to angle of attack (as covered elsewhere) rather than to a fixed airspeed, structural deformation, or engine thrust alone.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Vortex generators, small vanes sometimes fitted to a wing's upper surface, improve high-angle-of-attack performance by",
    options: [
      "creating small vortices that mix high-energy airflow from outside the boundary layer into the boundary layer itself, helping it resist separation to a higher angle of attack.",
      "physically blocking airflow over a portion of the wing, deliberately inducing earlier separation and an earlier stall in that region.",
      "reducing the wing's overall surface area exposed to the airflow, lowering both lift and drag simultaneously.",
      "generating additional engine thrust, an effect entirely unrelated to boundary layer or airflow behaviour over the wing.",
    ],
    answer: 0,
    explain:
      "Vortex generators work by deliberately introducing small vortices that draw higher-energy air from outside the boundary layer down into it -- re-energizing a boundary layer that would otherwise be more prone to separating under an adverse pressure gradient, which delays separation (and therefore stall) to a higher angle of attack in the areas where they're effective, a very different purpose from the deliberate stall-strip concept (which does intentionally provoke early, controlled separation) or any thrust- or area-reducing function.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A supercritical airfoil, used on many modern transport aircraft wings, is specifically shaped to",
    options: [
      "delay and soften the onset of the drag rise associated with local supersonic flow and shock formation, allowing efficient flight closer to (or at) a higher critical Mach number.",
      "eliminate the possibility of any shock wave forming on the wing at any speed, making critical Mach number an irrelevant concept for such a wing.",
      "reduce induced drag specifically, with no particular relationship to transonic or compressibility effects at all.",
      "increase the wing's stall speed deliberately, trading off low-speed performance for a structural benefit unrelated to high-speed flight.",
    ],
    answer: 0,
    explain:
      "A supercritical airfoil's characteristic flattened upper surface and specific curvature are shaped to manage how and where local supersonic flow and any resulting shock develop, softening and delaying the sharp transonic drag rise compared to a conventional airfoil section -- it doesn't eliminate shock formation altogether (critical Mach number remains a meaningful concept), and its purpose is specifically about transonic/compressibility drag behaviour rather than induced drag or a deliberate stall-speed trade-off.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Wave drag, a drag component that becomes significant as an aircraft approaches and exceeds its critical Mach number, is caused by",
    options: [
      "energy losses associated with the formation of shock waves on the aircraft's surfaces as local airflow reaches and exceeds the speed of sound.",
      "skin friction between the airflow and the aircraft's surface, identical in mechanism to ordinary subsonic skin friction drag.",
      "the production of lift itself, making wave drag simply another name for induced drag rather than a separate drag source.",
      "propeller inefficiency at high RPM, a mechanical rather than an aerodynamic source of drag.",
    ],
    answer: 0,
    explain:
      "Wave drag specifically arises from the energy dissipated as shock waves form where local airflow over the aircraft accelerates to and past the speed of sound -- a mechanism distinct from ordinary subsonic skin friction drag (a viscous effect present regardless of Mach number), induced drag (tied to lift production at any speed), or propeller mechanical inefficiency, and it's precisely why total drag rises sharply as an aircraft nears its critical Mach number.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Aeroelastic flutter is best described as",
    options: [
      "a potentially destructive, self-excited oscillation arising from the interaction of aerodynamic, inertial, and elastic (structural) forces on a lifting or control surface.",
      "a routine, harmless vibration present on every aircraft at every airspeed, requiring no design consideration or operating limitation at all.",
      "a purely aerodynamic phenomenon with no structural or inertial component involved, unrelated to the surface's own physical flexibility.",
      "identical in mechanism to a simple wind gust response, with no self-sustaining or potentially divergent oscillatory behaviour involved.",
    ],
    answer: 0,
    explain:
      "Flutter is a coupled aeroelastic phenomenon: aerodynamic forces, the surface's own inertia, and its structural elasticity interact in a feedback loop that, beyond a certain speed (the flutter speed/boundary), can become self-sustaining or even divergent rather than damping out -- a genuinely serious structural design and operating-limitation concern (which is why aircraft are flight-tested and operating limits are set specifically to stay well clear of flutter onset), not a routine vibration or a purely aerodynamic or purely gust-response effect.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Plotted against angle of attack, a wing's lift coefficient (CL) generally",
    options: [
      "increases in an approximately linear (straight-line) relationship with angle of attack over most of the normal flight range, before that relationship curves and CL reaches a maximum near the stall.",
      "remains completely constant regardless of angle of attack, with CL entirely independent of angle of attack across the flight envelope.",
      "decreases as angle of attack increases throughout the entire range, the opposite of the actual lift curve's shape.",
      "increases in direct proportion to airspeed rather than angle of attack, with angle of attack playing no role in determining CL at all.",
    ],
    answer: 0,
    explain:
      "The lift curve (CL versus angle of attack) is one of the most fundamental relationships in aerodynamics: over most of the practical flight range, CL rises in an approximately straight-line (linear) fashion as angle of attack increases, but that linearity breaks down as the critical angle of attack is approached, with CL reaching a maximum (CLmax) at the stall and then dropping off -- CL is fundamentally a function of angle of attack (and airfoil shape), not of airspeed itself, which is a separate variable in the broader lift equation.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Although extending trailing edge flaps increases a wing's maximum lift coefficient (CLmax) and therefore generally lowers stalling speed, flap extension typically also",
    options: [
      "reduces the absolute angle of attack at which the wing stalls, since the added camber changes the airflow such that separation begins at a lower geometric angle of attack than the clean-wing critical angle of attack.",
      "increases the absolute angle of attack at which the wing stalls, an effect in addition to, rather than instead of, the CLmax increase.",
      "has no effect whatsoever on the angle of attack at which the wing stalls, with only CLmax itself being altered by flap extension.",
      "eliminates the concept of a stalling angle of attack entirely, since a flapped wing is incapable of stalling under any flight condition.",
    ],
    answer: 0,
    explain:
      "It's a genuinely counterintuitive but well-established result: even though flaps raise CLmax and lower stalling speed overall, the added camber typically means the flapped wing actually stalls (separates) at a lower geometric angle of attack than the clean wing would -- CLmax is reached, and exceeded, sooner in terms of angle of attack, even though it's reached at a higher lift coefficient and (all else equal) a lower airspeed, which is why flap extension changes both the airspeed and the angle-of-attack margin to the stall, not just the airspeed alone.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Differential aileron deflection, and the frise aileron design specifically, are both intended to reduce adverse yaw by",
    options: [
      "increasing drag on the wing with the upward-deflected (up-going) aileron relative to the wing with the downward-deflected aileron, helping offset the yawing moment that would otherwise result from differing induced drag between the two wings.",
      "increasing lift on the wing with the upward-deflected aileron beyond that of the downward-deflected aileron's wing, a lift-based rather than drag-based correction.",
      "eliminating aileron-generated roll entirely, making differential deflection and frise ailerons unsuitable for any aircraft still intended to roll via aileron input.",
      "reducing total drag on both wings equally and symmetrically, an effect that would do nothing to correct any yawing asymmetry between them.",
    ],
    answer: 0,
    explain:
      "Adverse yaw arises because the down-going aileron (on the wing producing more lift as it rolls) also tends to produce more induced drag than the up-going aileron's wing -- differential deflection (deflecting the up aileron further than the down aileron) and frise ailerons (which present extra drag-inducing area into the airflow on the up-going side) both work by deliberately adding drag on the up-going aileron's wing, narrowing that drag asymmetry between the two wings without eliminating the intended rolling moment itself.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In a level, coordinated turn at increasing bank angle, an 'overbanking tendency' can develop because",
    options: [
      "the outer wing, travelling a longer path through the turn at a higher relative speed than the inner wing, generates more lift, producing a rolling moment that tends to increase bank further unless corrected.",
      "the inner wing generates more lift than the outer wing at any bank angle, producing a rolling moment that would tend to reduce, not increase, bank angle.",
      "overbanking tendency is unrelated to any difference in lift between the two wings, arising instead purely from rudder input during the turn.",
      "overbanking tendency only occurs at very shallow bank angles, disappearing entirely as bank angle increases in a steepening turn.",
    ],
    answer: 0,
    explain:
      "In a turn, the outer wing traces a larger-radius arc than the inner wing in the same time, giving it a slightly higher true airspeed and, consequently, slightly more lift -- that lift asymmetry produces a rolling moment tending to increase bank angle further, an effect that becomes more pronounced (not less) as bank angle steepens and turn radius tightens, which is why maintaining a constant bank in a steep turn typically requires some opposite aileron pressure to counter this self-reinforcing tendency, rather than the tendency being rudder-driven or confined to shallow bank angles.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
];
