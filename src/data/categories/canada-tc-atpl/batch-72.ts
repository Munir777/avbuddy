import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 72 -- Section 7: Theory of
// Flight, eighth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// aerodynamic theory. Covers winglets/wingtip devices, the region
// of reverse command (back side of the power curve), weight's
// effect on glide performance, propeller blade twist, the constant-
// speed propeller's aerodynamic mechanism, anhedral as a corrective
// design feature, power loading vs wing loading, humidity's effect
// on air density, density altitude fundamentals, spoiler/speedbrake
// aerodynamic effect, boundary layer separation as the stall
// mechanism, thrust horsepower vs brake horsepower for propeller
// aircraft, TAS and Mach number increasing with altitude at a
// constant IAS, control-surface mass balancing, the servo (geared)
// tab, and symmetrical vs cambered airfoil centre-of-pressure
// travel -- topics not yet addressed in batches 6, 14, 23, 32, 42,
// 52, or 62. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_72_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Winglets and other wingtip devices reduce induced drag primarily by",
    options: [
      "deflecting engine exhaust outward and away from the fuselage to reduce interference drag.",
      "smoothing the boundary layer near the wingtip so that it remains laminar rather than turbulent across the entire wing.",
      "weakening and altering the shape of the wingtip vortex, reducing the amount of energy the wing loses to generating it, which acts similarly to increasing the wing's effective aspect ratio.",
      "increasing the wing's total surface area enough to lower wing loading and therefore lower stalling speed.",
    ],
    answer: 2,
    explain:
      "A winglet or other wingtip device reduces induced drag by weakening and reshaping the wingtip vortex -- the tip leakage flow that would otherwise roll up into a strong vortex -- which recovers some of the energy that would otherwise be lost and acts aerodynamically much like increasing the wing's effective aspect ratio, without the structural penalty of physically extending the span.",
    reference: "TP 690 -- Theory of Flight: Drag Reduction Devices",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "On the total drag curve, the 'region of reverse command' (sometimes called the back side of the power curve) refers to the speed range, below the speed for minimum drag, in which",
    options: [
      "the aircraft can no longer be flown below its stalling speed under any circumstances, regardless of power applied.",
      "elevator and rudder controls become fully reversed in sense, so that pulling back on the control column causes the nose to pitch down.",
      "engine power output physically decreases as throttle is advanced, requiring the pilot to reduce throttle to gain speed.",
      "total drag increases as airspeed decreases, so maintaining slower flight requires progressively more thrust or power rather than less, reversing the normal relationship between speed and power required.",
    ],
    answer: 3,
    explain:
      "In the region of reverse command, flying more slowly than the speed for minimum drag requires more power, not less, because induced drag rises steeply as speed decreases -- this reverses the normal 'more power equals more speed' relationship and is why flight in this regime (typically on final approach at low speed) demands active power management rather than pitch-alone speed control.",
    reference: "TP 690 -- Theory of Flight: Drag and Power Required",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given aircraft in a power-off glide, increasing weight (within the approved range) generally",
    options: [
      "increases the speed for best glide angle and increases the rate of descent, but leaves the maximum glide ratio (and therefore the still-air glide range from a given altitude) essentially unchanged.",
      "decreases the speed for best glide angle while increasing the maximum glide range achievable from a given altitude.",
      "has no effect at all on best glide speed, rate of descent, or glide ratio.",
      "increases the maximum glide ratio, allowing a heavier aircraft to glide farther than a lighter one from the same altitude.",
    ],
    answer: 0,
    explain:
      "A heavier aircraft must fly faster to generate the same lift coefficient for best L/D, so both the best glide speed and the resulting rate of descent increase with weight; however, because the speed for maximum L/D still occurs at the same lift coefficient, the glide ratio itself -- and therefore the still-air glide range from a given altitude -- is essentially unaffected by weight.",
    reference: "TP 690 -- Theory of Flight: Glide Performance",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A propeller blade is built with geometric twist -- a coarser (higher) blade angle near the root and a finer (lower) blade angle near the tip -- primarily because",
    options: [
      "it reduces the total weight of the propeller by removing material near the tip.",
      "rotational velocity increases with distance from the hub, so twisting the blade helps maintain a more uniform, efficient angle of attack along the entire blade span rather than the tip stalling while the root remains inefficiently loaded.",
      "it prevents the propeller from producing any thrust at low rotational speeds, protecting the engine from overload on startup.",
      "it is required purely for manufacturing convenience and has no aerodynamic purpose.",
    ],
    answer: 1,
    explain:
      "Because each blade section's rotational (tangential) velocity increases with distance from the hub, an untwisted blade would present a much higher angle of attack near the root than near the tip for a given forward speed; twisting the blade -- coarser near the root, finer near the tip -- keeps the local angle of attack closer to the efficient optimum along the full span, improving overall propeller efficiency.",
    reference: "TP 690 -- Theory of Flight: Propeller Aerodynamics",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "From a purely aerodynamic standpoint, a constant-speed propeller maintains a near-constant rpm across a wide range of airspeeds and power settings by",
    options: [
      "physically changing the number of blades in flight to match the required thrust.",
      "changing the direction of blade rotation to counteract changes in airspeed.",
      "varying the blade (pitch) angle -- coarser as airspeed or power increases, finer as airspeed or power decreases -- so that blade angle of attack, and therefore the aerodynamic load the blades present to the engine, stays matched to the selected rpm.",
      "relying entirely on changes in engine manifold pressure, with the blade angle fixed and unable to move.",
    ],
    answer: 2,
    explain:
      "A constant-speed propeller's governor adjusts blade (pitch) angle -- coarsening it as airspeed or power tends to increase rpm, and fining it as airspeed or power tends to decrease rpm -- so that the aerodynamic load the blades present to the engine continuously matches the selected rpm, allowing the engine to operate at a chosen rotational speed across a wide range of flight conditions.",
    reference: "TP 690 -- Theory of Flight: Propeller Aerodynamics",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Some high-wing aircraft designs, which already possess substantial inherent dihedral effect from the wing-fuselage arrangement, are given a small amount of anhedral (a slight downward angle from root to tip) specifically to",
    options: [
      "raise the aircraft's never-exceed speed by strengthening the wing structure.",
      "eliminate adverse yaw entirely during aileron-induced rolls.",
      "increase the aircraft's maximum lift coefficient at high angles of attack.",
      "reduce the otherwise excessive lateral (roll) stability that strong inherent dihedral effect would produce, keeping roll response crisp and preventing an unpleasant 'overly stable,' sluggish-feeling roll handling.",
    ],
    answer: 3,
    explain:
      "A high-wing configuration already produces significant inherent dihedral effect from the pendulum-like relationship between the wing and a fuselage-mounted centre of gravity; adding a small amount of anhedral offsets some of this, tuning the aircraft's overall lateral stability back toward a comfortable middle ground rather than leaving it excessively stable and sluggish in roll.",
    reference: "TP 690 -- Theory of Flight: Lateral Stability",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Power loading, expressed as an aircraft's weight divided by its available power (or thrust), is most directly related to",
    options: [
      "climb performance, since a lower power loading (more power available per unit of weight) generally provides greater excess power and therefore a better rate of climb.",
      "maximum operating Mach number, which is determined entirely by power loading regardless of wing or airframe design.",
      "stalling speed, since power loading and wing loading are simply two names for the same ratio.",
      "the aircraft's empty weight, since power loading is calculated using empty weight rather than gross weight.",
    ],
    answer: 0,
    explain:
      "Power loading (weight divided by available power or thrust) is most directly tied to climb performance: an aircraft with a lower power loading has more power available relative to its weight, giving it greater excess power (or thrust) beyond that required for level flight, which translates directly into a better rate of climb -- this is distinct from wing loading, which relates more to stalling speed, gust response, and maneuvering.",
    reference: "TP 690 -- Theory of Flight: Climb Performance",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "At the same temperature and pressure, humid air is less dense than dry air, which means that, all else being equal, high humidity",
    options: [
      "has no measurable effect on aircraft performance, since water vapour has essentially the same molecular weight as the nitrogen and oxygen it displaces.",
      "slightly reduces both aerodynamic lift available at a given airspeed and engine power output, working in the same direction as high temperature or high altitude to degrade aircraft performance.",
      "affects only piston-engine aircraft and has no effect on turbine-engine performance.",
      "increases air density and therefore improves both lift and engine performance.",
    ],
    answer: 1,
    explain:
      "Water vapour molecules are lighter than the nitrogen and oxygen molecules they displace, so humid air is slightly less dense than dry air at the same temperature and pressure -- this reduces both the aerodynamic lift generated at a given airspeed and the mass of oxygen available for combustion, so high humidity degrades performance in the same direction as high temperature or high density altitude, though typically to a smaller degree.",
    reference: "TP 690 -- Theory of Flight: Atmospheric Effects on Performance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Density altitude is best defined as",
    options: [
      "the height above ground level shown by a radio altimeter, adjusted for local terrain.",
      "the aircraft's true altitude above mean sea level, as measured directly by a barometric altimeter with no corrections applied.",
      "pressure altitude corrected for non-standard temperature, representing the altitude in the standard atmosphere at which the actual air density presently exists.",
      "the altitude at which the aircraft's engine will completely lose power due to insufficient oxygen.",
    ],
    answer: 2,
    explain:
      "Density altitude is pressure altitude corrected for temperature deviation from the International Standard Atmosphere -- it represents the altitude, in the standard atmosphere, at which the air density actually present at the aircraft's location would be found; high density altitude (from high elevation, high temperature, or both) reduces aerodynamic lift, propeller and wing efficiency, and engine power, degrading takeoff, climb, and landing performance.",
    reference: "TP 690 -- Theory of Flight: Atmospheric Effects on Performance",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Spoilers, when deployed symmetrically in flight (as opposed to their differential use for roll control on some aircraft), primarily act aerodynamically to",
    options: [
      "increase the wing's maximum lift coefficient in the same manner as trailing edge flaps.",
      "smooth the boundary layer over the wing, delaying separation and stall to a higher angle of attack.",
      "reduce induced drag by weakening the wingtip vortex during descent.",
      "disrupt airflow over the upper wing surface, sharply increasing drag and reducing lift, which is used to increase the rate of descent or shorten the landing roll without necessarily changing airspeed.",
    ],
    answer: 3,
    explain:
      "Symmetrically deployed spoilers disrupt (spoil) the smooth airflow over the upper wing surface, both sharply increasing drag and reducing lift -- this 'lift dumping' effect is used to steepen the descent profile without building excess airspeed, and, on landing, to rapidly reduce lift so that the aircraft's weight transfers onto the wheels, improving brake and reverse-thrust effectiveness.",
    reference: "TP 690 -- Theory of Flight: High-Lift and Drag Devices",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "As angle of attack is progressively increased toward the stall, the wing stalls because",
    options: [
      "the adverse pressure gradient over the aft portion of the upper surface grows strong enough that the boundary layer can no longer remain attached, and the separation point progressively migrates forward until the flow over most of the upper surface has separated and lift collapses.",
      "the wing's structure physically flexes enough at high angle of attack to reduce its effective camber to zero.",
      "dynamic pressure drops to zero at the stalling angle of attack, regardless of airspeed.",
      "the air simply runs out of room to flow around the wing once a fixed angle is reached, unrelated to boundary layer behaviour.",
    ],
    answer: 0,
    explain:
      "As angle of attack increases, the adverse pressure gradient the boundary layer must fight through over the aft upper surface becomes progressively steeper; the flow separation point, which starts near the trailing edge, migrates forward as angle of attack rises until, at the stalling angle, separation has spread far enough forward that the upper-surface flow is predominantly separated and turbulent, and the large, organized pressure differential that produced lift collapses.",
    reference: "TP 690 -- Theory of Flight: The Stall",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a propeller-driven aircraft, thrust horsepower is related to brake (shaft) horsepower delivered by the engine in that thrust horsepower is",
    options: [
      "greater than brake horsepower whenever the propeller is operated at a fine pitch setting.",
      "brake horsepower multiplied by propeller efficiency, since some of the engine's shaft power is inevitably lost to factors such as slipstream rotation and blade profile drag rather than being converted into useful thrust.",
      "always numerically equal to brake horsepower, since the propeller converts shaft power to thrust with no losses.",
      "unrelated to brake horsepower and determined solely by airspeed.",
    ],
    answer: 1,
    explain:
      "The propeller converts the engine's brake (shaft) horsepower into thrust horsepower, but this conversion is never perfectly efficient -- some power is lost to effects such as rotational energy imparted to the slipstream and blade profile drag -- so thrust horsepower equals brake horsepower multiplied by propeller efficiency, a figure that is always somewhat less than one and that varies with airspeed and blade angle.",
    reference: "TP 690 -- Theory of Flight: Propeller Aerodynamics",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For an aircraft climbing at a constant indicated airspeed (IAS) into the higher flight levels, both true airspeed (TAS) and Mach number tend to increase, primarily because",
    options: [
      "the speed of sound increases with altitude at the same rate that TAS increases, so Mach number actually remains constant at a constant IAS.",
      "air density increases with altitude, requiring a lower true airspeed to maintain the same IAS.",
      "decreasing air density at altitude means a higher true airspeed is needed to generate the same dynamic pressure (and therefore the same IAS), while decreasing air temperature simultaneously lowers the local speed of sound, so a given TAS represents a progressively higher Mach number.",
      "IAS and TAS are simply two different units for the same measured quantity and are always numerically identical at any altitude.",
    ],
    answer: 2,
    explain:
      "Because air density decreases with altitude, a higher true airspeed is required to produce the same dynamic pressure -- and therefore the same indicated airspeed -- so TAS increases as an aircraft climbs at constant IAS; at the same time, falling temperature at altitude reduces the local speed of sound, so the same (now higher) TAS corresponds to a progressively higher Mach number, which is why high-altitude climbs are typically flown at a constant Mach number rather than a constant IAS once a crossover altitude is reached.",
    reference: "TP 690 -- Theory of Flight: Airspeed and Mach Number",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Mass balancing of a flight control surface (adding weight ahead of its hinge line) is a design feature used primarily to",
    options: [
      "increase the surface's maximum deflection angle available to the pilot.",
      "reduce the total weight of the control surface to improve control response.",
      "eliminate the need for a trim tab on that control surface.",
      "shift the surface's centre of mass toward or ahead of its hinge line, reducing or eliminating the aerodynamic-inertial coupling that can drive flutter at high airspeed.",
    ],
    answer: 3,
    explain:
      "A control surface whose centre of mass lies well aft of its hinge line can develop a destabilizing coupling between bending and torsional motion of the structure and its own inertia, feeding energy into flutter; mass balancing -- adding weight ahead of the hinge line to shift the surface's centre of mass toward or ahead of the hinge -- reduces or eliminates this coupling, raising the airspeed at which flutter could otherwise develop.",
    reference: "TP 690 -- Theory of Flight: Aeroelasticity",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A servo tab (or geared tab), as distinguished from a simple trim tab, is a small control surface, linked to the main control surface, that is designed primarily to",
    options: [
      "deflect automatically, opposite to the main surface, whenever the pilot moves the control, generating an aerodynamic force that helps move the main surface and reduces the control force the pilot must apply.",
      "provide structural reinforcement to the main control surface with no aerodynamic function of its own.",
      "increase the maximum lift coefficient of the wing during landing, serving the same purpose as a flap.",
      "hold the main control surface in a fixed position to relieve a steady control force, only moving when the pilot separately adjusts a trim wheel.",
    ],
    answer: 0,
    explain:
      "A servo (geared) tab is mechanically linked so that it deflects automatically, in the opposite sense to the main surface, whenever the pilot moves the control -- the aerodynamic force this generates on the tab helps drive the main surface, reducing the force the pilot must apply, which differs from a simple trim tab that is set independently by the pilot purely to relieve a steady control force rather than to assist every control input.",
    reference: "TP 690 -- Theory of Flight: Flight Control Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Comparing a symmetrical airfoil to a cambered airfoil, the centre of pressure's behaviour with changing angle of attack differs in that",
    options: [
      "both airfoil types produce an identical, constant centre of pressure location regardless of angle of attack or camber.",
      "a symmetrical airfoil generates essentially zero pitching moment about its aerodynamic centre and its centre of pressure stays fixed near the aerodynamic centre across the normal angle-of-attack range, whereas a cambered airfoil produces a nose-down pitching moment about its aerodynamic centre even at zero lift, and its centre of pressure shifts with angle of attack.",
      "camber has no effect on pitching moment, and only angle of attack determines centre of pressure location for any airfoil shape.",
      "a symmetrical airfoil's centre of pressure moves dramatically with angle of attack, while a cambered airfoil's centre of pressure never moves at all.",
    ],
    answer: 1,
    explain:
      "A symmetrical airfoil generates essentially zero pitching moment about its aerodynamic centre, so its centre of pressure remains close to the aerodynamic centre across the normal angle-of-attack range; a cambered airfoil, by contrast, produces a nose-down pitching moment about its aerodynamic centre that persists even at zero lift (a non-zero Cm0), and its centre of pressure location shifts as angle of attack -- and therefore lift -- changes, which is part of why cambered-wing aircraft require a trimming force from the tail even in cruise.",
    reference: "TP 690 -- Theory of Flight: Airfoil Pitching Moment",
  },
];
