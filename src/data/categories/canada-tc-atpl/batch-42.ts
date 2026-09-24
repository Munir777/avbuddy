import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 42 -- Section 6: Theory of
// Flight, fifth pass. Original questions written from standard
// aerodynamic principles and the TP 690 syllabus (topic headings
// only, no sample questions). Covers spin aerodynamics, multi-
// engine critical engine theory, trim drag, tail design, and
// planform/loading effects not yet addressed in batches 6, 14, 23,
// or 32. Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_42_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A fixed leading-edge slot, as distinguished from a moveable leading-edge slat, is",
    options: [
      "a permanently open gap built into the wing's leading edge, always allowing accelerated airflow over the upper surface, rather than a surface that extends and retracts as needed.",
      "identical in every respect to a slat, with 'slot' and 'slat' simply being two interchangeable names describing an identical moveable device.",
      "a device that only ever closes completely and never remains open, the reverse of an actual fixed slot's always-open design.",
      "found exclusively on the trailing edge of the wing, making 'leading-edge slot' a misleading name for what is actually a trailing-edge device.",
    ],
    answer: 0,
    explain:
      "A fixed slot is a permanently open gap built into the wing's leading edge structure, continuously allowing energized airflow to accelerate over the upper surface and delay separation at high angle of attack -- unlike a moveable slat, which is a separate surface that extends forward and down (typically automatically, driven by aerodynamic forces, or mechanically) to open a slot only when needed (high angle of attack) and otherwise remains flush with the leading edge; the two achieve a similar aerodynamic effect through genuinely different mechanical designs, one fixed and one moveable, and both are leading-edge (not trailing-edge) devices.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A wing with significant taper (a narrower chord at the tip than at the root), compared to an untapered (rectangular) wing of the same span and area, generally",
    options: [
      "reduces structural weight (by moving lift-generated bending load inward, closer to the root), but tends to promote a less desirable spanwise lift distribution that can favour tip-first (rather than root-first) stall onset unless corrected.",
      "increases structural weight compared to an untapered wing, the opposite of taper's usual structural benefit.",
      "has no effect whatsoever on either structural weight or spanwise lift distribution, making taper ratio an aerodynamically and structurally insignificant design choice.",
      "guarantees a root-first stall onset automatically, with no additional design feature (such as washout) ever needed to help ensure that stall pattern on a tapered wing.",
    ],
    answer: 0,
    explain:
      "Tapering a wing (narrower tip chord than root chord) tends to reduce structural weight, since it shifts more of the spanwise lift distribution -- and the resulting bending moment -- closer to the wing root rather than spreading it as far outboard as an untapered wing would, but that same shift in lift distribution can undesirably favour the tip reaching its critical angle of attack before the root does, which is exactly why tapered wings often incorporate washout (or other stall-pattern design features, covered elsewhere) to help ensure a more desirable root-first stall onset instead.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A high-wing configuration, compared to a low-wing configuration on an otherwise similar airframe with no additional geometric dihedral built in, tends to exhibit",
    options: [
      "a greater inherent (positive) dihedral effect, since in a sideslip the fuselage tends to shield and reduce airflow/lift on the lower (leading) wing of a high-wing design, generating a rolling moment back toward wings-level.",
      "a lesser inherent dihedral effect than a low-wing configuration, the opposite of the generally understood relationship between wing placement and dihedral effect.",
      "no inherent dihedral effect at all from wing placement alone, with dihedral effect entirely dependent on geometric dihedral regardless of whether the wing is mounted high or low.",
      "an inherent dihedral effect that is identical regardless of whether the wing is mounted high or low, making wing vertical placement irrelevant to the resulting dihedral effect.",
    ],
    answer: 0,
    explain:
      "Beyond geometric dihedral (an intentional upward wing angle), wing vertical placement itself contributes an inherent pendulum-like/shielding effect: on a high-wing design, the fuselage in a sideslip tends to partially shield and disrupt airflow over the lower, leading wing, reducing its lift relative to the upper, trailing wing and producing a rolling moment back toward wings-level -- a genuine, if generally smaller, positive dihedral effect contribution distinct from geometric dihedral, and typically greater than the corresponding effect on a comparable low-wing design, which is part of why high-wing aircraft often need less geometric dihedral built in to achieve similar lateral stability characteristics.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "As an aircraft approaches the stall, the adverse yaw generated by a given aileron input tends to",
    options: [
      "become more pronounced, since the down-going aileron's wing is operating closer to its own critical angle of attack, making its increased induced drag (relative to the up-going aileron's wing) comparatively larger.",
      "become less pronounced, the opposite of the actual relationship between proximity to the stall and adverse yaw severity.",
      "disappear entirely, since adverse yaw is understood to occur only at cruise airspeed and is considered entirely absent near the stall.",
      "remain completely unaffected by proximity to the stall, with adverse yaw severity considered independent of the wing's angle of attack at the moment of aileron input.",
    ],
    answer: 0,
    explain:
      "Because adverse yaw stems from the down-going aileron's wing generating more induced drag than the up-going aileron's wing, and because a wing operating closer to its critical angle of attack is more sensitive to a given further increase in local angle of attack (and the corresponding induced drag increase), adverse yaw generally becomes more pronounced as the aircraft slows toward the stall -- precisely why coordinated, deliberate rudder use (and caution with aileron input) becomes especially important in low-speed, high-angle-of-attack flight, rather than adverse yaw diminishing, vanishing, or staying constant regardless of proximity to the stall.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A spin, aerodynamically, is best described as",
    options: [
      "a state of autorotation, in which one wing remains more deeply stalled than the other, sustaining a rolling, yawing, and descending motion that continues without further pilot-applied roll or yaw input.",
      "simply a very steep, rapidly rotating descending turn in which neither wing is actually stalled at any point during the manoeuvre.",
      "a condition that, once entered, is aerodynamically impossible to exit through any pilot control input, regardless of technique.",
      "identical in every aerodynamic respect to a spiral dive, with 'spin' and 'spiral dive' simply describing the same phenomenon under two different names.",
    ],
    answer: 0,
    explain:
      "A spin is fundamentally an autorotation: with one wing more deeply stalled (and therefore producing less lift and more drag) than the other, the resulting asymmetric lift and drag sustains a self-perpetuating rolling and yawing motion combined with a descent, continuing without further pilot roll/yaw input, in contrast to a spiral dive, where neither wing is stalled and airspeed instead increases rapidly -- a genuinely different, and generally recoverable (through appropriate technique, covered elsewhere), aerodynamic phenomenon from a spiral, not an unrecoverable condition or merely a fast turning descent with both wings still flying normally.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A commonly taught spin recovery technique (often summarized by a mnemonic such as PARE) generally involves, in sequence,",
    options: [
      "reducing power to idle, neutralizing the ailerons, applying full rudder opposite the direction of rotation, and then, once rotation stops, moving the control column forward to break the stall, before recovering from the resulting dive.",
      "immediately applying full aileron in the direction of rotation, without any corresponding rudder or elevator input, as the sole recovery action required.",
      "increasing power to maximum immediately upon entering the spin, since additional power is generally understood to be the primary factor that stops the autorotation.",
      "holding the control column fully aft throughout the entire recovery attempt, maintaining the stalled condition rather than working to break it.",
    ],
    answer: 0,
    explain:
      "A standard spin recovery sequence generally reduces power (idle), neutralizes ailerons (which can otherwise aggravate the spin), applies full rudder opposite the direction of rotation to stop the yaw, and then, once rotation has stopped, moves the elevator control forward to reduce angle of attack and break the stall on both wings, followed by a controlled recovery from the resulting dive -- ailerons in the direction of rotation, maximum power, and holding the elevator aft are all recognized as actions that can aggravate or sustain a spin rather than recover from one.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The aerodynamic mechanism behind ground effect, encountered when a wing operates very close to the surface, is that",
    options: [
      "the ground restricts the wing's downwash, reducing the wing's effective induced drag (and altering its pitching moment) for a given angle of attack and lift.",
      "the ground increases the wing's downwash, the opposite of the actual mechanism responsible for ground effect.",
      "ground effect results entirely from a change in local air temperature near the surface, an unrelated thermal rather than an aerodynamic-flow-based mechanism.",
      "ground effect results from increased skin friction drag caused by proximity to the surface, unrelated to any change in downwash or induced drag.",
    ],
    answer: 0,
    explain:
      "Ground effect's underlying mechanism is a restriction of the wing's downwash and the associated wingtip vortex system when the wing operates very close to the ground -- that restricted downwash effectively reduces induced drag for a given lift and angle of attack (and also alters the wing's pitching moment somewhat), which is the aerodynamic basis for ground effect's practical results (such as a tendency to float during landing, or reduced induced drag aiding takeoff acceleration) covered elsewhere; it's a downwash/induced-drag mechanism, not a temperature-related or skin-friction-related one.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In a twin-engine propeller aircraft with two engines rotating in the same direction, the 'critical engine' -- generally the left engine on a typical clockwise-rotating (viewed from behind) propeller pair -- is more critical to lose because, following its failure,",
    options: [
      "the remaining (right) engine's own P-factor-driven thrust line is offset further from the aircraft's centreline than the left engine's would have been, producing a larger, more difficult-to-counter yawing moment.",
      "the remaining engine produces less thrust than the failed engine would have, regardless of which specific engine fails, making the identity of the failed engine aerodynamically irrelevant.",
      "the failure of either engine on a same-direction-rotating twin produces exactly identical yawing and controllability consequences, meaning no critical engine can be meaningfully identified.",
      "the remaining engine's propeller stops producing any P-factor asymmetry at all once the opposite engine has failed, eliminating rather than worsening any yaw asymmetry.",
    ],
    answer: 0,
    explain:
      "On a twin with same-direction-rotating propellers, P-factor asymmetry means each engine's effective thrust line (accounting for the descending blade's greater local thrust contribution) sits slightly off the engine's geometric centreline -- for the right engine (with a typical clockwise rotation viewed from behind), that effective thrust line sits further out from the aircraft's centreline than the left engine's does, so losing the left engine leaves the right engine producing a larger, harder-to-counter yawing moment than losing the right engine would (leaving the less-offset left engine running), which is exactly why the left engine is generally termed the 'critical engine' on such an aircraft -- a distinction eliminated on aircraft with counter-rotating propellers, where P-factor asymmetry is symmetric between the two engines.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Following an engine failure on a multi-engine aircraft, banking slightly (commonly around 5 degrees) into the operative engine, rather than maintaining wings-level flight with rudder alone, generally",
    options: [
      "helps counter the yawing moment aerodynamically, reducing the rudder deflection (and associated drag) otherwise needed and improving overall controllability, particularly near minimum control speed.",
      "worsens the yawing moment, requiring even more rudder deflection than wings-level flight would, the opposite of the technique's actual intended effect.",
      "has no aerodynamic effect on controllability whatsoever, making the specific bank angle used an arbitrary, aerodynamically meaningless choice.",
      "is used specifically to reduce engine thrust asymmetry itself, an engine-power-related rather than an aerodynamic-yaw-control-related purpose.",
    ],
    answer: 0,
    explain:
      "A small bank into the operative engine introduces a helpful component of the aircraft's weight/lift vector that works aerodynamically alongside rudder deflection to counter the failed engine's asymmetric yawing moment, reducing the amount of rudder deflection (and the drag that comes with it) otherwise needed to maintain directional control -- a genuine controllability improvement, particularly important near minimum control speed, rather than something that worsens the yaw, has no aerodynamic effect, or changes the actual thrust asymmetry between the two engines (which remains whatever it is regardless of bank angle).",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The horizontal stabilizer/elevator's effective angle of attack (and thus its lift and pitching-moment contribution) is influenced by the downwash coming off the wing ahead of it, meaning that a change in wing downwash (such as from extending flaps or changing power setting)",
    options: [
      "can meaningfully change the tail's effective angle of attack and its resulting contribution to pitch trim and control, even without any direct change in the tail surface's own deflection.",
      "has no effect whatsoever on the tail's effective angle of attack, since the tail is considered to operate in airflow entirely undisturbed by the wing ahead of it.",
      "affects the wing's own lift only, with the horizontal stabilizer considered aerodynamically isolated from any wing-generated downwash under any circumstance.",
      "affects only the vertical stabilizer/rudder, with the horizontal stabilizer specifically excluded from any downwash-related effect.",
    ],
    answer: 0,
    explain:
      "The horizontal tail sits in the wing's downwash field, so anything that changes that downwash -- flap extension (which increases downwash), a change in power setting (which can change slipstream effects and effective downwash, particularly on propeller aircraft), or a change in angle of attack itself -- changes the tail's own effective angle of attack and, with it, its lift and pitching-moment contribution, even with no direct change in elevator or stabilizer deflection; this downwash interaction is a real aerodynamic coupling, not something the tail is isolated from, and it specifically concerns the horizontal (pitch-related) tail surface, not the vertical stabilizer/rudder.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given CLmax, an aircraft's stalling speed is related to wing loading (weight divided by wing area) such that",
    options: [
      "stalling speed increases as wing loading increases, since a higher wing loading requires a higher dynamic pressure (and thus airspeed) to generate the lift needed to support the aircraft's weight at the same CLmax.",
      "stalling speed decreases as wing loading increases, the opposite of the actual relationship between wing loading and stalling speed.",
      "stalling speed is entirely unrelated to wing loading, being determined solely by CLmax with no dependence on the weight-to-wing-area ratio at all.",
      "stalling speed is affected by wing loading only when the aircraft is above its maximum certified weight, with no relationship at or below that weight.",
    ],
    answer: 0,
    explain:
      "Since lift at the stall must still equal weight, and lift depends on dynamic pressure (a function of airspeed), wing area, and CLmax, a higher wing loading (more weight relative to wing area) requires a higher dynamic pressure -- and therefore a higher stalling speed -- to generate the necessary lift at the same CLmax, a direct, positive relationship between wing loading and stalling speed that holds generally, not only above maximum certified weight, and CLmax is one factor in the relationship, not the sole determinant independent of wing loading.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In a level, coordinated turn, the load factor experienced is related to bank angle such that",
    options: [
      "load factor increases as bank angle increases, following the relationship load factor equals one divided by the cosine of the bank angle.",
      "load factor decreases as bank angle increases, the opposite of the actual relationship between load factor and bank angle in a level turn.",
      "load factor remains constant at exactly 1g regardless of bank angle, provided the turn is level and coordinated.",
      "load factor depends only on the aircraft's airspeed during the turn, with bank angle itself having no direct mathematical relationship to load factor.",
    ],
    answer: 0,
    explain:
      "To maintain level flight in a coordinated turn, the wings' lift must be increased so that its vertical component still equals weight even as some of that lift is now directed toward the centre of the turn -- the resulting load factor follows the relationship n = 1/cos(bank angle), meaning load factor increases (and increases sharply at steep bank angles) as bank angle increases, rather than decreasing, staying fixed at 1g, or depending on airspeed alone independent of the geometric bank-angle relationship.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A stall strip, a small, fixed device sometimes fitted near the wing root's leading edge, is used to",
    options: [
      "deliberately provoke earlier local flow separation at the wing root at high angle of attack, helping ensure the wing root stalls before the wingtips do.",
      "deliberately delay flow separation at the wing root, the opposite of a stall strip's actual intended aerodynamic effect.",
      "increase the wingtip's stall margin specifically, with the wing root's own stall behaviour considered unaffected by a stall strip located there.",
      "function as a form of vortex generator, re-energizing rather than provoking earlier separation of the boundary layer at the point where it's installed.",
    ],
    answer: 0,
    explain:
      "A stall strip is a small, fixed disruptor (often a simple triangular or wedge-shaped device) mounted near the wing root's leading edge specifically to deliberately trigger earlier local flow separation there at high angle of attack -- a design approach (alongside or as an alternative to washout) aimed at ensuring the wing root stalls before the wingtips, so that aileron control is retained longer into the stall and the resulting break tends to be less prone to an abrupt wing-drop; it's the functional opposite of a vortex generator (which re-energizes the boundary layer to delay, not provoke, separation), and its effect is specifically local to where it's installed, not the wingtip.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A stabilator (an all-moving horizontal tail), as distinguished from a conventional fixed horizontal stabilizer with a hinged elevator, provides pitch control by",
    options: [
      "moving the entire horizontal tail surface as a single unit, rather than deflecting only a smaller, separately hinged elevator surface relative to a fixed stabilizer.",
      "using exactly the same mechanism as a conventional elevator, with 'stabilator' simply being an alternate name describing an identical hinged-elevator design.",
      "eliminating the horizontal tail surface entirely, achieving pitch control through some means other than any tail surface at all.",
      "functioning only as a fixed, non-moving surface, with 'all-moving' in its common description being an inaccurate characterization of how a stabilator actually operates.",
    ],
    answer: 0,
    explain:
      "A stabilator pivots the entire horizontal tail surface as a single unit to produce a pitch control input, rather than keeping a fixed stabilizer in place and deflecting only a smaller, separately hinged elevator surface relative to it -- moving the whole tail surface generally provides greater pitch control authority (useful, for example, at high speed or with an aft CG) than a conventional elevator design can achieve for a comparably sized tail, a genuinely different mechanical arrangement from a conventional elevator, and it very much still relies on a tail surface (just one that moves as a whole) rather than eliminating the tail.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Trim drag refers to the additional drag generated because",
    options: [
      "the horizontal tail, to keep the aircraft in longitudinal trim, typically must produce a small download (or an adjusted lift force) that the wing must in turn generate additional lift (and therefore additional induced drag) to support.",
      "trimming the aircraft always reduces the total drag being generated, making 'trim drag' a misleading name for what is, in fact, a drag-reducing effect.",
      "trim drag arises exclusively from control surface friction in the trim mechanism itself, unrelated to any aerodynamic lift or download produced by the tail.",
      "trim drag applies only to aircraft with a fixed horizontal stabilizer, with any aircraft using a stabilator considered entirely free of trim drag.",
    ],
    answer: 0,
    explain:
      "Keeping the aircraft in longitudinal trim commonly requires the horizontal tail to generate a specific lift force -- often a small download on many configurations -- to balance the pitching moment produced by the wing and fuselage; since the wing then has to generate slightly more lift (and therefore more induced drag) to compensate for that tail download and still support the aircraft's total weight, trim drag is this real, aerodynamic-lift-driven drag penalty, not a mechanical-friction effect, not something that reduces total drag, and not a phenomenon confined only to fixed-stabilizer designs (a stabilator's trimmed position produces an analogous effect).",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Moving an aircraft's centre of gravity aft (within approved limits) generally has the effect, with respect to trim drag, of",
    options: [
      "reducing trim drag, since a more aft CG typically requires a smaller tail download (or even an upward tail lift force) to trim the aircraft, reducing the extra induced drag the wing must otherwise generate to compensate.",
      "increasing trim drag, the opposite of the generally understood relationship between aft CG position and trim drag.",
      "having no effect whatsoever on trim drag, since trim drag is considered entirely independent of the aircraft's centre of gravity position.",
      "eliminating the wing's induced drag entirely, an unrealistically large effect well beyond what an aft CG shift actually produces.",
    ],
    answer: 0,
    explain:
      "As CG moves aft, the pitching moment the tail needs to balance to achieve trim generally decreases, meaning the tail can trim with a smaller download (or, in some cases, even a small upward lift force) rather than a larger one -- since a smaller tail download means the wing doesn't need to generate as much additional lift (and induced drag) to compensate, trim drag is generally reduced with a more aft CG, which is part of why airlines can gain a fuel-efficiency benefit from operating closer to the aft end of the approved CG range, rather than trim drag increasing, staying unaffected, or the wing's induced drag being eliminated altogether.",
    reference: "TP 690 Section 6 - Theory of Flight",
  },
];
