import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 82 -- Section 7: Theory of
// Flight, ninth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// aerodynamic theory. Covers induced drag's relationship to lift
// coefficient squared, wingtip vortex rotation direction, specific
// excess power, shock-induced flow separation, wing bending relief
// from podded engines, downwash as the source of induced drag,
// stick-free vs stick-fixed stability, wing loading's effect on
// turn performance, negative-G flight aerodynamics, boundary layer
// control by suction/blowing, the induced-equals-parasite-drag
// minimum-drag point, aerodynamic vs geometric washout, airfoil
// thickness ratio's effect on critical Mach, spanwise lift
// distribution's effect on wing root bending moment, jet vs
// propeller climb performance curve shape, and icing's effect on
// stall warning accuracy -- topics not yet addressed in batches 6,
// 14, 23, 32, 42, 52, 62, or 72. Not transcribed or adapted from
// any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_82_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Induced drag rises sharply at low airspeed and high angle of attack primarily because induced drag is",
    options: [
      "constant at every angle of attack and airspeed, never varying throughout the flight envelope, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "proportional to airspeed alone, meaning it increases directly and linearly as airspeed decreases, with no relationship to angle of attack or lift coefficient, a characterization that does not match established aerodynamic theory.",
      "proportional to the square of the lift coefficient, so as angle of attack (and therefore lift coefficient) increases at low speed to maintain the lift needed to support the aircraft's weight, induced drag increases much faster than lift coefficient itself.",
      "entirely independent of angle of attack or lift coefficient, depending only on the aircraft's parasite drag characteristics, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 2,
    explain:
      "Induced drag is proportional to the square of the lift coefficient, so as an aircraft slows and must fly at a higher angle of attack (and correspondingly higher lift coefficient) to continue generating enough lift to support its weight, induced drag grows much more steeply than lift coefficient itself -- this squared relationship is why induced drag becomes the dominant drag component at low speed and high angle of attack, and why total drag rises again as speed decreases below the speed for minimum drag.",
    reference: "TP 690 -- Theory of Flight: Induced Drag",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The wingtip vortex trailing behind each wing rotates in a specific direction -- upward and outboard beyond the wingtip, downward and inboard closer to the fuselage -- a pattern significant to a following aircraft because",
    options: [
      "the vortex rotates in a completely random and unpredictable direction on every flight, making any avoidance technique based on rotation direction entirely useless, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "the vortex direction has no bearing whatsoever on wake turbulence avoidance technique, since only vortex strength matters, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "the vortex rotates in the same direction as the propeller or engine fan rotation, meaning its direction changes depending on which side of a multi-engine aircraft generated it, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, contrary to basic aerodynamic principles.",
      "a following aircraft positioned slightly outboard and above a preceding aircraft's flight path can encounter a region of upward-moving air from the vortex, which pilots are taught to use to their advantage when avoiding the more hazardous downward-rotating core closer to the centreline.",
    ],
    answer: 3,
    explain:
      "A wingtip vortex rotates outward and upward beyond the wingtip and inward and downward closer to the fuselage centreline (the mirror-image pattern occurring at the opposite wingtip), a consistent pattern arising from the wing's own lift generation rather than engine or propeller rotation; understanding this rotation helps explain published wake turbulence avoidance guidance, such as remaining slightly above and, where practical, upwind of a preceding heavier aircraft's flight path to reduce the likelihood of encountering the more hazardous downward-rotating vortex core.",
    reference: "TP 690 -- Theory of Flight: Wingtip Vortices",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Specific excess power (Ps), a concept describing an aircraft's surplus power beyond that required for steady, level flight at a given speed, is significant because it illustrates that",
    options: [
      "an aircraft can use its available excess power to either climb or accelerate, but not fully achieve both simultaneously, since surplus power devoted to gaining altitude is not simultaneously available to increase airspeed, and vice versa.",
      "excess power can always be used to climb and accelerate simultaneously to the maximum extent possible in both dimensions at once, with no trade-off between the two, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "an aircraft with zero excess power can still both climb and accelerate freely, since specific excess power has no bearing on either capability, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "specific excess power applies only to jet aircraft, with no equivalent concept meaningful for a propeller-driven aircraft, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 0,
    explain:
      "Specific excess power represents the surplus power (or thrust, translated into power) an aircraft has available beyond what steady, level flight at a given speed requires, and that surplus can be converted into either potential energy (a climb) or kinetic energy (an acceleration) -- but not fully into both simultaneously, since power devoted to gaining altitude is power not simultaneously available to increase speed, which is why a pilot managing a marginal climb-and-accelerate scenario (such as after an engine failure) must generally prioritize one over the other rather than expecting maximum performance in both at once.",
    reference: "TP 690 -- Theory of Flight: Aircraft Performance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Shock-induced flow separation ('shock stall'), occurring as an aircraft approaches or exceeds its critical Mach number, is distinguished from a classic low-speed stall in that shock-induced separation",
    options: [
      "occurs only at very low airspeeds and angles of attack, in exactly the same flight regime as a classic low-speed stall, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "results from the abrupt pressure rise across a shock wave forming on the wing's upper surface, which can separate the boundary layer immediately behind the shock, rather than resulting from exceeding the wing's critical angle of attack at low speed.",
      "is caused by ice accumulation on the leading edge, with no relationship to Mach number or shock wave formation at all, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "has no effect on the wing's lift or drag characteristics, making it operationally identical to normal, unseparated high-speed flow, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, a characterization that does not match established aerodynamic theory.",
    ],
    answer: 1,
    explain:
      "A classic low-speed stall results from exceeding the wing's critical angle of attack, causing the boundary layer to separate from the leading edge back; shock-induced separation instead results from the sudden, sharp pressure rise that occurs across a shock wave forming on the wing's upper surface as the local airflow decelerates from supersonic back to subsonic behind it -- this abrupt pressure rise can be severe enough to separate the boundary layer immediately downstream of the shock, producing buffet, a loss of lift, and a pitching moment change through a fundamentally different mechanism than the classic angle-of-attack-driven stall.",
    reference: "TP 690 -- Theory of Flight: High-Speed Aerodynamics",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Engines mounted in pods beneath or ahead of the wing, rather than buried within the fuselage, provide an additional structural benefit in flight because their weight",
    options: [
      "adds to the wing's bending moment in the same direction as lift, increasing the structural load the wing root must withstand compared to a fuselage-mounted engine arrangement, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, contrary to basic aerodynamic principles.",
      "eliminates the wing's bending moment entirely, regardless of how much lift the wing is generating at a given moment, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "acts as a distributed mass along the wing span, partially offsetting the upward bending moment the wing's own lift generates, thereby reducing the net structural bending load the wing root must carry compared to an equivalent aircraft with all mass concentrated in the fuselage.",
      "has no structural relationship whatsoever to the wing's bending moment, since engine weight and aerodynamic lift are entirely independent structural considerations, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 2,
    explain:
      "In flight, a wing's own lift generates an upward bending moment along its span, greatest at the wing root; a mass distributed out along the span -- such as podded engines, or fuel carried in the wings -- acts in the opposite (downward) sense relative to that lift-induced bending, partially offsetting it and reducing the net structural bending load the wing root must carry compared to an equivalent design where all mass is concentrated in the fuselage, which is one structural (in addition to aerodynamic and maintenance) consideration behind podded engine placement.",
    reference: "TP 690 -- Theory of Flight: Structural Loads",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Downwash behind a finite (three-dimensional) wing is the fundamental source of induced drag because the downwash",
    options: [
      "increases the wing's maximum lift coefficient, which by itself is the direct cause of induced drag rather than any tilting of the lift vector, which does not reflect how this aerodynamic phenomenon actually manifests in flight.",
      "occurs only at the wing root, with no downwash present near the wingtips where wingtip vortices form, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "has no relationship to induced drag at all, with induced drag instead arising entirely from skin friction over the wing's surface, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "tilts the local airflow, and therefore the wing's lift vector, slightly rearward relative to the free-stream direction, so a small rearward component of what would otherwise be purely vertical lift now acts along the direction of flight as drag.",
    ],
    answer: 3,
    explain:
      "Because a finite wing generates trailing wingtip vortices, the air passing over and behind the wing is deflected downward (downwash), which effectively tilts the local relative airflow -- and with it, the wing's lift vector, which by definition acts perpendicular to the local airflow -- slightly rearward relative to the free-stream direction; this small rearward tilt means a component of what would otherwise be purely vertical lift now acts backward along the flight path, and that rearward component is, by definition, induced drag.",
    reference: "TP 690 -- Theory of Flight: Induced Drag",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing 'stick-fixed' longitudinal static stability (assessed with the elevator held in a fixed position) to 'stick-free' stability (assessed with the controls released, allowing the elevator to float freely), an aircraft's stick-free stability is generally",
    options: [
      "somewhat less than its stick-fixed stability, since a freely floating elevator tends to align itself with the local airflow in a way that reduces the stabilizing moment the tail would otherwise contribute if held fixed.",
      "always greater than its stick-fixed stability, since a freely floating elevator always adds additional stabilizing moment beyond what a fixed elevator provides, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "always identical to its stick-fixed stability, since releasing the controls has no measurable effect on an aircraft's static stability, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "entirely unrelated to elevator behaviour, being determined solely by wing sweep and dihedral rather than by any tail surface consideration, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 0,
    explain:
      "Stick-fixed stability is assessed with the elevator locked in position, so the full stabilizing moment the tail surface can generate as angle of attack changes is captured; stick-free stability, assessed with the controls released so the elevator floats freely under its own aerodynamic hinge moment, is generally somewhat lower, because a freely floating elevator tends to partially align itself with the local airflow rather than staying fixed, which reduces the net stabilizing moment the tail contributes compared to the stick-fixed case -- an important distinction for aircraft with reversible (unpowered) flight controls.",
    reference: "TP 690 -- Theory of Flight: Longitudinal Stability",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing two aircraft of similar weight and available thrust or power but different wing loading, the aircraft with the lower wing loading will generally be capable of",
    options: [
      "no difference at all in turn radius or turn rate compared to a higher wing loading aircraft, since wing loading affects only straight-and-level stalling speed, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, a characterization that does not match established aerodynamic theory.",
      "a tighter (smaller-radius) turn, and a higher achievable turn rate, at a given airspeed, since a lower wing loading allows the wing to generate the higher lift coefficient a tight turn requires without exceeding its stalling angle of attack as readily as a more heavily loaded wing.",
      "a tighter turn only at very high airspeeds, with no advantage at all at lower airspeeds relevant to typical turning flight, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "only a wider (larger-radius) turn at any given airspeed, since lower wing loading always increases both stalling speed and turn radius, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
    ],
    answer: 1,
    explain:
      "A tight, high-load-factor turn requires the wing to generate a high lift coefficient at the turn's airspeed; an aircraft with a lower wing loading reaches its maximum available lift coefficient (and therefore its structural or aerodynamic turn limit) at a smaller turn radius and higher turn rate than a more heavily wing-loaded aircraft of similar weight and available thrust or power, since the lighter wing loading allows more lift to be generated per unit of wing area before the wing approaches its stalling angle of attack or the aircraft's structural load factor limit.",
    reference: "TP 690 -- Theory of Flight: Turning Flight",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "During sustained negative-G flight, such as pushing over the top of a manoeuvre or flying briefly inverted, the wing must generate lift acting in the opposite (downward, relative to the aircraft) direction from normal flight, which generally requires the wing to be flown at",
    options: [
      "a lower airspeed than normal flight, with angle of attack playing no role in generating a downward-acting aerodynamic force, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "the exact same, unchanged positive angle of attack used in normal, upright, positive-G flight, since angle of attack has no relationship to the direction lift acts, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "a negative angle of attack relative to its normal, positive-lift orientation, since the airfoil's camber and orientation must effectively be reversed relative to the airflow to produce a downward-acting aerodynamic force.",
      "an angle of attack that has no defined relationship to lift direction at all, since lift direction is determined solely by engine thrust rather than by the wing's orientation to the airflow, a claim inconsistent with the basic physics governing lift, drag, or stability in this regime.",
    ],
    answer: 2,
    explain:
      "To generate an aerodynamic force acting downward (relative to the aircraft) rather than the usual upward-acting lift, a wing generally must be flown at a negative angle of attack relative to its normal orientation, effectively reversing the pressure differential a conventional cambered airfoil is otherwise shaped to produce -- this is part of why many conventional airfoils are markedly less efficient at generating negative lift than positive lift, and why sustained inverted or negative-G flight is a more demanding aerodynamic (and, separately, systems) condition than normal upright flight.",
    reference: "TP 690 -- Theory of Flight: Negative-G Flight",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Boundary layer control by suction or blowing, as an alternative or supplement to mechanical high-lift devices such as flaps and slats, works by",
    options: [
      "reducing the wing's overall surface area, in the same manner as retracting a leading edge slat, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "increasing the local air pressure ahead of the wing's leading edge, with no effect on the boundary layer itself, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "physically changing the wing's geometric shape, functioning identically to extending a trailing edge flap, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "either removing the slower-moving, energy-depleted air within the boundary layer (suction) or reenergizing it with a jet of higher-velocity air (blowing), in either case helping the boundary layer remain attached to the wing surface at a higher angle of attack than would otherwise cause separation.",
    ],
    answer: 3,
    explain:
      "Boundary layer control techniques address the boundary layer directly rather than changing the wing's physical shape: suction removes the slower-moving, energy-depleted air nearest the surface through small perforations or slots, while blowing reenergizes that same low-momentum air with a jet of higher-velocity air -- both approaches help the boundary layer resist the adverse pressure gradient for longer, delaying separation and allowing the wing to be flown to a higher angle of attack (and therefore higher lift coefficient) before stalling than would otherwise be possible.",
    reference: "TP 690 -- Theory of Flight: High-Lift Devices",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "On a total drag curve plotted against airspeed, the speed for minimum total drag (and therefore best L/D) occurs specifically at the point where",
    options: [
      "induced drag and parasite drag are equal to one another, since total drag is the sum of the two and this particular balance between a decreasing curve (induced drag) and an increasing curve (parasite drag) produces the lowest combined total.",
      "induced drag is at its absolute maximum value and parasite drag is at its absolute minimum value simultaneously, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "parasite drag has already dropped to zero, leaving only induced drag as the sole contributor to total drag at that speed, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "both induced drag and parasite drag are simultaneously at their own individual minimum values, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 0,
    explain:
      "Because induced drag decreases as airspeed increases (a decreasing curve) while parasite drag increases as airspeed increases (an increasing, roughly speed-squared curve), their sum -- total drag -- traces a curve that reaches its minimum value at the specific airspeed where the two individual drag curves cross and are equal to one another; this speed for minimum total drag corresponds to the best lift-to-drag ratio and, for a jet aircraft in unaccelerated level flight, the minimum thrust required to maintain altitude.",
    reference: "TP 690 -- Theory of Flight: Drag",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Aerodynamic washout, achieved by varying the airfoil section or camber progressively along the wing's span, differs from geometric washout (built-in physical twist reducing the wingtip's angle of incidence) in that aerodynamic washout",
    options: [
      "is simply another name for geometric washout, with the two terms describing an identical physical construction technique, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "achieves a similar goal -- delaying wingtip stall relative to the wing root -- without physically twisting the wing structure, instead relying on a spanwise change in airfoil shape to give the tip a lower local lift coefficient at a given angle of attack than the root.",
      "increases, rather than decreases, the likelihood that the wingtip stalls before the wing root, the opposite effect from geometric washout, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, a description not supported by standard aerodynamic principles or flight test experience.",
      "can only be applied to a wing that has zero sweep, with no application to a swept-wing aircraft design, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
    ],
    answer: 1,
    explain:
      "Where geometric washout achieves a lower effective angle of attack at the wingtip through physical, built-in twist of the wing structure, aerodynamic washout achieves a broadly similar practical effect -- encouraging the wing root to stall before the wingtip, preserving aileron effectiveness and roll control longer into the stall -- without physically twisting the wing, instead varying the airfoil section or camber along the span so the tip naturally produces a lower local lift coefficient than the root at a given angle of attack.",
    reference: "TP 690 -- Theory of Flight: Wing Design",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing two wings of similar planform but different thickness-to-chord ratio, a thinner wing generally has",
    options: [
      "an identical critical Mach number to a thicker wing of the same planform, since thickness ratio has no effect on critical Mach number, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "a lower critical Mach number than a thicker wing, since airfoil thickness has no bearing on how much the local airflow accelerates over the upper surface, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "a higher critical Mach number than a thicker wing, since a thinner airfoil section produces a smaller local increase in airflow velocity over its upper surface, delaying the point at which local airflow reaches the speed of sound.",
      "no meaningful aerodynamic difference at all, with thickness ratio relevant only to the wing's structural strength, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 2,
    explain:
      "A thicker airfoil section causes a greater local acceleration of the airflow over its upper surface (to travel the longer path around the thicker shape) than a thinner section at the same free-stream speed, meaning local airflow reaches the speed of sound -- and produces the first shock wave -- at a lower free-stream Mach number on a thicker wing; a thinner wing, producing less local flow acceleration, generally achieves a higher critical Mach number, which is part of why high-speed aircraft often combine wing sweep with a comparatively thin airfoil section.",
    reference: "TP 690 -- Theory of Flight: High-Speed Aerodynamics",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A wing's spanwise lift distribution affects its structural wing root bending moment such that, for a given total lift and span, a lift distribution weighted more heavily toward the wingtips generally produces",
    options: [
      "no difference at all in wing root bending moment, since total lift, not its spanwise distribution, is the only factor relevant to bending moment, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "a bending moment that depends entirely on airspeed rather than on how lift is distributed along the span, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "a smaller wing root bending moment than a root-weighted distribution, since lift generated near the wingtip has essentially no moment arm about the wing root, a description not supported by standard aerodynamic principles or flight test experience.",
      "a greater wing root bending moment than a distribution weighted more toward the wing root, since lift generated farther out along the span has a longer moment arm about the wing root.",
    ],
    answer: 3,
    explain:
      "Wing root bending moment depends not just on the total amount of lift a wing generates but on how far out along the span that lift acts, since each increment of lift contributes a bending moment proportional to its distance (moment arm) from the wing root; a lift distribution weighted more heavily toward the wingtips therefore produces a greater wing root bending moment than an equivalent total lift concentrated closer to the root, which is part of why distributing mass (such as fuel or engines) out along the span can help offset lift-induced bending, as covered separately for podded engine placement.",
    reference: "TP 690 -- Theory of Flight: Structural Loads",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing the shape of a jet aircraft's thrust-available curve to a propeller aircraft's power-available curve (both plotted against airspeed), a key difference relevant to climb performance is that",
    options: [
      "a jet engine's thrust available remains comparatively close to constant across a wide range of airspeeds, whereas a propeller's power available (and therefore the thrust it can produce) varies more significantly with airspeed, giving the two types of aircraft different best-climb-speed characteristics relative to their minimum-drag speed.",
      "both jet thrust available and propeller power available are identical, unvarying functions of airspeed, with no meaningful difference between the two aircraft types, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "thrust and power available have no bearing on climb performance for either aircraft type, which is instead determined entirely by wing area alone, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
      "a jet engine's thrust available always decreases sharply as airspeed increases, while a propeller's power available remains perfectly constant at every airspeed, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope, which overlooks the underlying physical mechanism that actually governs this aerodynamic effect.",
    ],
    answer: 0,
    explain:
      "A jet engine's thrust output stays comparatively close to constant across a fairly wide range of airspeeds (though it does vary with altitude and other factors), while a propeller-driven aircraft's power available -- and the thrust that power translates into at a given speed -- varies more significantly with airspeed due to the mechanics of propeller efficiency; this difference in how thrust or power available behaves with airspeed is part of why the best rate-of-climb speed for a jet tends to correspond more closely to its minimum-drag speed, while a propeller aircraft's best rate-of-climb speed is more directly tied to its speed for minimum power required, a related but numerically different speed.",
    reference: "TP 690 -- Theory of Flight: Climb Performance",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Ice accumulation on a wing can degrade the accuracy of an angle-of-attack-based stall warning system primarily because",
    options: [
      "angle-of-attack-based stall warning systems are entirely unaffected by airframe icing under any circumstance, since the sensing vane itself is always heated and ice-free, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "the system's stall warning trigger point is generally calibrated for the aircraft's clean (ice-free) aerodynamic characteristics, and ice contamination can cause the wing to actually stall at a lower angle of attack than the system was calibrated to warn for, reducing or eliminating the intended warning margin.",
      "ice accumulation always increases the angle of attack at which a wing stalls, meaning any stall warning system becomes overly conservative and provides more margin than intended, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
      "ice accumulation has no effect on a wing's stalling angle of attack at all, making this concern purely theoretical with no real aerodynamic basis, an assumption inconsistent with how lift, drag, and stability actually behave across the flight envelope.",
    ],
    answer: 1,
    explain:
      "A stall warning system's trigger point is generally calibrated against the aircraft's clean, ice-free aerodynamic characteristics; because ice contamination on the wing's leading edge can disrupt airflow and cause the wing to actually stall at a lower angle of attack than it would in a clean condition, an iced wing can reach its true (now-reduced) stalling angle of attack before the warning system -- still calibrated for the clean-wing case -- provides its intended margin, which is why icing conditions call for particular caution even when a stall warning has not yet activated.",
    reference: "TP 690 -- Theory of Flight: Icing Effects on Aerodynamics",
  },
];
