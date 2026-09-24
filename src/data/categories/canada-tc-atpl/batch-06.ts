import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 6 -- Section 6: Theory of Flight
// (forces acting on an aeroplane, subsonic and high-speed aerodynamics,
// wing design, and effects of in-flight icing). Original questions
// written from general aerodynamics knowledge and the TP 690 syllabus
// (topic headings only, no sample questions). Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_06_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Load factor, expressed in 'g', is defined as",
    options: [
      "the ratio of thrust to drag at a given moment.",
      "the aircraft's actual weight, expressed in units of gravitational acceleration.",
      "the ratio of the total lift being generated to the aircraft's weight.",
      "the ratio of indicated airspeed to true airspeed.",
    ],
    answer: 2,
    explain:
      "Load factor is lift divided by weight. In straight-and-level, unaccelerated flight it is 1g (lift equals weight); in a coordinated turn or a pull-up, lift must exceed weight to provide the additional centripetal force or curve the flight path, so load factor rises above 1g.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Load Factor",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "As load factor increases above 1g (for example, in a steep turn or an abrupt pull-up), the aircraft's stalling speed",
    options: [
      "stays exactly the same, since stalling speed depends only on weight, not load factor.",
      "decreases, since a higher load factor implies more lift being generated at any speed.",
      "increases in direct proportion to load factor, without any square-root relationship.",
      "increases, in proportion to the square root of the load factor.",
    ],
    answer: 3,
    explain:
      "Stalling speed varies with the square root of load factor: doubling load factor from 1g to 4g would double stalling speed, not quadruple it. This is why a steep turn or an aggressive pull-up can stall an aircraft at an indicated airspeed comfortably above its normal 1g stall speed -- the aircraft is generating more lift, but it's also demanding a higher angle of attack to do so at any given speed, and the critical angle of attack is reached sooner.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Relationship of Weight and Load Factor to Stalling",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A sudden vertical gust encountered in flight increases load factor primarily because it",
    options: [
      "momentarily changes the wing's effective angle of attack, increasing lift (and therefore load factor) until the disturbance is damped out.",
      "directly changes the aircraft's weight for the duration of the gust.",
      "has no effect on load factor, only on indicated airspeed.",
      "always reduces load factor, regardless of the gust's direction.",
    ],
    answer: 0,
    explain:
      "An updraft (or a downward gust hitting the wing) changes the relative airflow direction, momentarily increasing the wing's effective angle of attack and therefore its lift -- producing a load factor spike whose severity depends on gust velocity, aircraft speed (which is why manoeuvring speed limits are set with gust loads in mind), and wing loading.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Gust Loads",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Positive static stability means that, following a disturbance from equilibrium, an aircraft",
    options: [
      "shows no tendency to move in either direction after being disturbed.",
      "has an initial tendency to return toward its original equilibrium condition.",
      "has an initial tendency to continue moving further away from its original equilibrium condition.",
      "will oscillate indefinitely around the disturbed condition, never returning to equilibrium.",
    ],
    answer: 1,
    explain:
      "Static stability describes only the initial tendency right after a disturbance: positive static stability means the initial tendency is back toward equilibrium. Whether the aircraft then smoothly settles back, oscillates with decreasing amplitude, or oscillates with constant/increasing amplitude is a separate question of dynamic stability -- a distinct concept from static stability, even though the two are related.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Stability",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "In steady, straight-and-level, unaccelerated flight, the four forces of lift, weight, thrust, and drag are related such that",
    options: [
      "lift equals drag and thrust equals weight.",
      "the four forces need not be in any particular balance for steady flight to be maintained.",
      "lift equals weight and thrust equals drag.",
      "lift always exceeds weight, and thrust always exceeds drag.",
    ],
    answer: 2,
    explain:
      "By definition, 'steady, straight-and-level, unaccelerated flight' means no net force is acting to change the aircraft's speed or flight path, which requires the vertical force pair (lift and weight) to be balanced and the horizontal force pair (thrust and drag) to be balanced. Climbing, descending, or accelerating flight involves a deliberate imbalance in one or both pairs.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Lift/Weight/Thrust/Drag",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The overall pitching moment about an aircraft's centre of gravity in trimmed, steady flight is",
    options: [
      "always nose-down, requiring continuous forward control pressure to remain level.",
      "unrelated to the aircraft's centre of gravity position.",
      "always nose-up, requiring continuous aft control pressure to remain level.",
      "zero, since the nose-up and nose-down moments from all sources (wing, tailplane, thrust line, etc.) are balanced.",
    ],
    answer: 3,
    explain:
      "Trim, by definition, is the condition where the sum of pitching moments about the CG -- from the wing's own moment, the tailplane's balancing force, the thrust line's offset from the CG, and so on -- is zero, so the aircraft requires no continuous control input to hold its attitude. Moving the CG changes the moment arms involved, which is exactly why CG position affects trim drag and control forces.",
    reference: "TP 690 Section 6 - Forces Acting on an Aeroplane, Moments",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A turbulent boundary layer, compared to a laminar boundary layer at the same location on a wing, generally",
    options: [
      "has more skin friction drag, but is more resistant to flow separation.",
      "is identical to a laminar boundary layer in every practical respect.",
      "has less skin friction drag, and is also more resistant to flow separation.",
      "cannot exist on an aircraft wing under any circumstances.",
    ],
    answer: 0,
    explain:
      "A turbulent boundary layer has more internal mixing and therefore more skin friction drag than a laminar layer, but that same mixing brings higher-energy air closer to the surface, making a turbulent boundary layer more resistant to separating from the surface (which is part of why vortex generators deliberately trip the flow turbulent in some applications, trading a small drag penalty for delayed separation at higher angles of attack).",
    reference: "TP 690 Section 6 - Subsonic Aerodynamics, Airflow, Boundary Layer",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Downwash behind a lifting wing is best understood as",
    options: [
      "a phenomenon unrelated to lift production, caused instead by engine exhaust.",
      "a direct consequence of Newton's third law -- the wing deflects air downward to produce lift, and the air's downward deflection is the reaction to the upward lift force.",
      "airflow that only occurs on swept wings, never on a straight (unswept) wing.",
      "the same thing as the wingtip vortex, just described using different terminology.",
    ],
    answer: 1,
    explain:
      "A wing generating lift necessarily deflects the air passing over and under it downward on net; by Newton's third law, the reaction to that downward deflection of air is the upward lift force on the wing. Downwash is present on any lifting surface, swept or not, and is distinct from -- though related to -- the wingtip vortex, which is specifically the spillage of air around the tip driven by the spanwise pressure difference.",
    reference: "TP 690 Section 6 - Subsonic Aerodynamics, 2-Dimensional Airflow",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The wingtip vortex, a three-dimensional airflow effect, is caused by",
    options: [
      "compressibility effects that only occur at transonic or supersonic speeds.",
      "engine exhaust gases interacting with the wing's trailing edge.",
      "higher-pressure air beneath the wing spilling around the wingtip toward the lower-pressure air above it.",
      "the wing's leading-edge stagnation point, unrelated to spanwise pressure differences.",
    ],
    answer: 2,
    explain:
      "Because pressure below the wing is higher than pressure above it (that pressure difference is what produces lift), air at the wingtip -- where there's no wing surface left to separate the two -- spills from the high-pressure lower surface around and up to the low-pressure upper surface, rolling up into the wingtip (and, on a larger scale, wake) vortex, which is the source of induced drag and of wake turbulence encountered by following aircraft.",
    reference: "TP 690 Section 6 - Subsonic Aerodynamics, 3-Dimensional Airflow",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Ground effect, encountered when a wing operates close to the surface, generally results in",
    options: [
      "no measurable change in the wing's aerodynamic characteristics at any height above the surface.",
      "increased induced drag and increased downwash, compared to flight well clear of the ground.",
      "an effect that is significant only above roughly one wingspan of altitude, and negligible closer to the ground.",
      "reduced induced drag and reduced downwash, for a given angle of attack, compared to flight well clear of the ground.",
    ],
    answer: 3,
    explain:
      "Close to the ground, the surface restricts the formation of the wingtip vortex and reduces downwash, which reduces induced drag and effectively increases lift for a given angle of attack -- this is why an aircraft can seem to 'float' during landing flare, and why it may briefly appear to have better climb performance right after lift-off than it actually has once it climbs clear of ground effect. The effect becomes significant within roughly one wingspan of the ground, not above it.",
    reference: "TP 690 Section 6 - Subsonic Aerodynamics, 3-Dimensional Airflow, Ground Effect",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "The local speed of sound in the air surrounding an aircraft depends primarily on",
    options: [
      "the outside air temperature.",
      "the aircraft's altitude directly, independent of temperature.",
      "the aircraft's true airspeed.",
      "the ambient air pressure, independent of temperature.",
    ],
    answer: 0,
    explain:
      "The speed of sound in air is a function of temperature (specifically, of the square root of absolute temperature) -- not of pressure or altitude directly, though altitude correlates with temperature in the standard atmosphere. This is exactly why Mach number (TAS divided by local speed of sound) doesn't map onto a single fixed TAS value across different altitudes and temperatures.",
    reference: "TP 690 Section 6 - High Speed Aerodynamics, Speed of Sound, Mach, Compressibility, Shock Waves",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's critical Mach number is defined as the free-stream Mach number at which",
    options: [
      "the autopilot automatically disengages for safety reasons.",
      "airflow over some part of the airframe (typically the wing's upper surface) first reaches the local speed of sound, even though the aircraft itself is still flying below Mach 1.",
      "the aircraft's entire airframe first reaches supersonic speed simultaneously.",
      "engine thrust output first begins to decline with increasing altitude.",
    ],
    answer: 1,
    explain:
      "Airflow accelerates as it passes over curved surfaces like the wing's upper camber, so local airflow there can reach the speed of sound while the aircraft's free-stream (true) airspeed is still subsonic. Critical Mach number is the free-stream Mach at which that first happens somewhere on the airframe -- the onset of local supersonic flow and the shock waves that come with it, well before the whole aircraft is flying at or above Mach 1.",
    reference: "TP 690 Section 6 - High Speed Aerodynamics, Critical Mach",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A shock wave forming on a wing as critical Mach is exceeded typically causes",
    options: [
      "no change in pitching moment, since shock waves affect only drag, never pitch.",
      "an immediate and total loss of all lift from the affected wing.",
      "a sudden pressure rise, airflow separation aft of the shock, increased drag (wave drag), and often a nose-down pitching moment (Mach tuck).",
      "a reduction in drag, since supersonic flow is inherently more efficient than subsonic flow.",
    ],
    answer: 2,
    explain:
      "The shock wave itself represents an abrupt pressure rise, and the adverse pressure gradient behind it tends to separate the boundary layer, both increasing drag (wave drag) and disturbing the smooth lift distribution. On many swept-wing designs, the resulting shift in the centre of pressure produces a nose-down pitching moment known as Mach tuck -- a real handling concern near the high-speed buffet boundary, not simply a drag-only phenomenon.",
    reference: "TP 690 Section 6 - High Speed Aerodynamics, Speed of Sound, Mach, Compressibility, Shock Waves",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Sweeping a wing back is done primarily to",
    options: [
      "reduce the wing's structural weight, which is the sole reason sweepback is used.",
      "eliminate the need for any leading-edge high-lift devices.",
      "increase the wing's stall angle of attack at low speed, improving slow-speed handling.",
      "delay the onset of compressibility effects by reducing the component of airflow velocity perpendicular to the leading edge, raising the effective critical Mach number.",
    ],
    answer: 3,
    explain:
      "What actually matters for compressibility onset is the airflow component perpendicular to the leading edge, not the aircraft's total true airspeed; sweeping the wing back reduces that perpendicular component for a given true airspeed, which is why a swept wing can fly faster (to a higher critical Mach) before shock-induced effects become significant. That benefit comes at a cost, though: sweepback tends to worsen low-speed handling and increase the tendency toward tip stall and spanwise flow, which is why swept-wing aircraft typically need more elaborate high-lift and flow-control devices, not fewer.",
    reference: "TP 690 Section 6 - Wing Design, Sweepback",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Trailing edge flaps increase an aircraft's maximum lift coefficient (CLmax) primarily by",
    options: [
      "increasing the wing's effective camber (and, on some flap designs, its effective area), allowing more lift to be produced at a given angle of attack and speed.",
      "increasing the wing's aspect ratio.",
      "delaying the onset of compressibility effects at high speed.",
      "reducing the wing's total surface area exposed to the airflow.",
    ],
    answer: 0,
    explain:
      "Extending trailing edge flaps effectively increases the wing's camber (curvature), and on Fowler-type flaps also increases wing area, both of which raise CLmax -- allowing the aircraft to generate the required lift at a lower speed (and lower angle of attack for a given speed) than the clean wing could, which is exactly why flaps are used for take-off and landing.",
    reference: "TP 690 Section 6 - Wing Design, Leading and Trailing Edge Flaps",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Leading edge devices, such as slats or slots, primarily improve high-angle-of-attack performance by",
    options: [
      "increasing the wing's camber at the trailing edge, exactly as trailing edge flaps do.",
      "re-energizing the upper-surface boundary layer (or maintaining smooth airflow over the leading edge), delaying flow separation to a higher angle of attack before stall.",
      "reducing the wing's total lift at any given angle of attack.",
      "reducing drag at high speed cruise, with no effect on stall characteristics.",
    ],
    answer: 1,
    explain:
      "A slat (or slot) allows higher-energy air from below the wing to flow over the upper surface near the leading edge, re-energizing the boundary layer there and delaying separation -- this raises the angle of attack at which the wing stalls, rather than primarily changing camber the way a trailing edge flap does.",
    reference: "TP 690 Section 6 - Wing Design, Leading and Trailing Edge Flaps",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A canard configuration, in which a smaller lifting surface is mounted ahead of the main wing, is sometimes deliberately designed so that",
    options: [
      "the canard and the main wing always stall at exactly the same instant, with no design preference either way.",
      "canards are used only for yaw control, and have no role in pitch or stall behaviour.",
      "the canard reaches its stalling angle of attack before the main wing does, pitching the nose down and preventing the main wing from stalling.",
      "the main wing is designed to stall first, to provide an early warning through the canard's control feel.",
    ],
    answer: 2,
    explain:
      "Because a canard-forward design uses the forward surface for pitch trim/control, some canard aircraft are deliberately designed so the canard's stalling angle of attack is lower than the main wing's -- the canard stalls first, producing a nose-down pitching moment that reduces the main wing's angle of attack before it can reach its own critical angle, acting as a built-in stall-protection feature.",
    reference: "TP 690 Section 6 - Wing Design, Canards",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Wing fences on a swept wing are intended primarily to",
    options: [
      "reduce induced drag in exactly the same way a winglet does.",
      "serve purely as a lightning-strike diverter, with no aerodynamic function.",
      "increase the wing's critical Mach number, in the same way sweepback does.",
      "impede the spanwise (outward) flow of boundary layer air along a swept wing, reducing the tendency for the wingtip to stall before the wing root.",
    ],
    answer: 3,
    explain:
      "On a swept wing, boundary layer air tends to drift spanwise, outward toward the tip, thickening the boundary layer there and promoting an earlier tip stall (which is aerodynamically undesirable because of its effect on aileron authority and pitching moment). A wing fence is a physical barrier along the chord that impedes that spanwise flow, helping keep the boundary layer healthier out toward the tip.",
    reference: "TP 690 Section 6 - Wing Design, Wing Fences",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Ice accumulation on a wing's leading edge generally affects lift and drag by",
    options: [
      "disrupting smooth airflow over the airfoil, reducing maximum lift coefficient and the angle of attack at which the wing stalls, while significantly increasing drag.",
      "increasing maximum lift coefficient, since the rough ice surface energizes the boundary layer in a beneficial way.",
      "reducing drag, since ice smooths out minor surface imperfections on the wing.",
      "having no measurable effect on lift or drag until the ice thickness exceeds several inches.",
    ],
    answer: 0,
    explain:
      "Even fairly thin, rough ice disrupts the smooth pressure distribution an airfoil depends on, promoting earlier flow separation. That means the wing stalls at a lower angle of attack (and correspondingly higher airspeed) than it would clean, generates less lift for a given angle of attack, and experiences substantially more drag -- a combination of effects that can significantly erode performance and safety margins well before the ice becomes visually dramatic.",
    reference: "TP 690 Section 6 - Effects of In-Flight Icing, Lift and Drag",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Ice accumulation on engine inlets or propeller blades primarily degrades performance by",
    options: [
      "having no effect on either engines or propellers, since only aerodynamic (wing/tail) surfaces are affected by icing.",
      "disrupting smooth airflow into the engine or over the propeller airfoil, reducing efficiency, and potentially causing imbalance or ice-shedding damage.",
      "increasing engine thrust and propeller efficiency, since ice adds mass to the rotating assembly.",
      "affecting fuel quality directly, by contaminating the fuel system.",
    ],
    answer: 1,
    explain:
      "Ice on an engine inlet disturbs the smooth, efficient airflow the engine needs, reducing mass airflow and potentially causing compressor issues if shed ice is ingested; ice on propeller blades distorts the blade's airfoil shape (reducing thrust efficiency for a given RPM/power) and can create damaging imbalance if it sheds unevenly -- both are real degradations distinct from, and in addition to, the airframe icing effects on the wings and tail.",
    reference: "TP 690 Section 6 - Effects of In-Flight Icing, Engine and Propeller Efficiency",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Because ice accumulation reduces the critical angle of attack at which a surface stalls, an iced tailplane is at particular risk of stalling when",
    options: [
      "the aircraft is flown at a higher airspeed than normal, since tailplane stall risk increases with speed.",
      "the landing gear is retracted, since gear position is what primarily determines tailplane loading.",
      "flaps are extended, since flap extension increases the downwash angle the tailplane must counter, increasing the tailplane's effective angle of attack.",
      "flaps are retracted, since flap retraction always increases tailplane angle of attack regardless of downwash.",
    ],
    answer: 2,
    explain:
      "Extending flaps increases the wing's downwash, which increases the tailplane's effective angle of attack as it works to counter that downwash -- on a tailplane already compromised by ice (with a lower critical angle of attack than normal), that added angle of attack demand from flap extension is exactly the kind of trigger that can push it into a tailplane stall, which is why some icing procedures call for caution with flap selection in known or suspected tailplane icing conditions.",
    reference: "TP 690 Section 6 - Effects of In-Flight Icing, Wing and Tailplane Stalls",
  },
];
