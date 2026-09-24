import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 60 -- Section 10: Airframes,
// Power Plants, Propellers and Aircraft Systems, sixth pass.
// Original questions written from the TP 690 syllabus (topic
// headings only, no sample questions), the CARs, and general
// airframe/powerplant systems knowledge. Covers non-destructive
// testing methods, fail-safe/damage-tolerant structural design,
// fan blade containment, the cabin pressurization controller,
// fire-resistant hydraulic fluid, tire construction and thermal
// fuse plugs, fuel transfer/trim tank systems, the Fowler flap
// track mechanism, engine oil pressure vs scavenge pumps, AC
// electrical distribution rationale, the nose wheel shimmy damper,
// landing gear door sequencing, slats vs Krueger flaps, autobrake
// systems, capacitance-type fuel quantity indication, and turbine
// engine continuous ignition -- topics not yet addressed in
// batches 2, 19, 29, 40, or 50. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_60_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Non-destructive testing (NDT) methods used to inspect airframe structure for cracks or defects -- such as eddy current, ultrasonic, dye penetrant, and magnetic particle inspection -- are valued primarily because they allow",
    options: [
      "a component's total service life to be extended indefinitely regardless of any flaws detected, since NDT methods always repair the flaw as part of the inspection process.",
      "visual inspection to be entirely replaced, since NDT methods require no visual follow-up of any kind once a flaw is detected.",
      "a component to be inspected for internal or surface flaws without being cut apart or permanently damaged, so the same part can be returned to service if it passes inspection.",
      "structural inspection to be performed only once, at initial manufacture, with no need for recurring in-service inspection.",
    ],
    answer: 2,
    explain:
      "Non-destructive testing methods -- such as eddy current, ultrasonic, dye penetrant, and magnetic particle inspection -- allow a structure or component to be examined for internal or surface flaws (cracks, corrosion, delamination) without cutting it apart or otherwise damaging it, so a part that passes inspection can be returned to service, and recurring NDT is a routine part of ongoing structural maintenance programs.",
    reference: "TP 690 -- Airframes, Engines and Systems: Structures",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fail-safe (or damage-tolerant) structural design philosophy, as applied to transport aircraft primary structure, is characterized by",
    options: [
      "eliminating the need for any scheduled structural inspection program, since fail-safe structure is defined as inherently crack-proof.",
      "designing structure to fail completely and simultaneously in every member at once, so that damage is always immediately obvious to the crew.",
      "relying on a single, very strong load path so massively overbuilt that inspection for cracks becomes unnecessary.",
      "providing multiple redundant load paths (such as several spars or stringers) so that a single crack or failure in one structural member does not immediately lead to catastrophic failure, while the damage remains detectable through inspection before it grows critical.",
    ],
    answer: 3,
    explain:
      "Fail-safe (damage-tolerant) design provides multiple redundant load paths -- for example several wing spars or fuselage stringers/frames -- so that a crack or local failure in one member is carried by the remaining structure rather than causing immediate catastrophic failure, and the design assumes such damage will be found and repaired through a scheduled inspection program before it can grow to critical size.",
    reference: "TP 690 -- Airframes, Engines and Systems: Structures",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A turbofan engine's fan case is designed and certified to include fan blade containment capability, meaning that",
    options: [
      "if a fan blade fails and separates in flight, the case is designed to contain the resulting debris within the engine nacelle rather than allowing it to penetrate outward into the fuselage, wing, or other critical aircraft structure.",
      "containment capability applies only to the engine's turbine section, with no equivalent requirement for the fan section.",
      "the fan case prevents any fan blade from ever failing in the first place, making in-flight blade separation structurally impossible.",
      "the fan case is designed to eject failed blade debris forward out of the engine intake, away from the aircraft.",
    ],
    answer: 0,
    explain:
      "Turbofan engines are certified to demonstrate that, in the event of an in-flight fan blade failure and separation, the fan case will contain the resulting debris within the nacelle rather than allowing it to be thrown outward with enough energy to penetrate the fuselage, wing, fuel tanks, or other critical structure and systems.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A cabin pressurization system's automatic controller, once the crew pre-selects the planned cruise and landing altitudes before departure, generally",
    options: [
      "requires the crew to manually adjust the outflow valve position continuously throughout every phase of flight, since no automatic scheduling function exists on transport aircraft.",
      "computes and schedules the cabin altitude and its rate of change throughout the climb, cruise, and descent automatically, modulating the outflow valve accordingly with no further crew input required under normal operation.",
      "operates only during the cruise phase, with climb and descent pressurization scheduling left entirely to manual crew control.",
      "controls only cabin temperature, with cabin pressure left entirely to an unregulated, fully open outflow valve at all times.",
    ],
    answer: 1,
    explain:
      "Given the pre-selected cruise and landing field elevations, a modern cabin pressurization controller automatically computes and schedules cabin altitude and its rate of change through climb, cruise, and descent, modulating the outflow valve position accordingly, so that normal operation requires no continuous manual crew adjustment.",
    reference: "TP 690 -- Airframes, Engines and Systems: Pressurization",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Fire-resistant synthetic hydraulic fluid (such as a phosphate-ester-based fluid), as used in most transport aircraft hydraulic systems, is chosen primarily because it",
    options: [
      "is fully compatible with all aircraft paints, seals, and finishes with no special handling precautions required.",
      "is chosen purely for its lower cost compared to petroleum-based hydraulic fluid, with fire resistance an incidental and unimportant property.",
      "has a significantly higher autoignition/flash point and greater resistance to sustained combustion than petroleum-based fluids, reducing fire risk if a hydraulic line ruptures near a hot engine or brake component.",
      "eliminates the need for hydraulic system filtration, since it is inherently free of any particulate contamination.",
    ],
    answer: 2,
    explain:
      "Fire-resistant synthetic hydraulic fluids (commonly phosphate-ester-based) are used in transport aircraft primarily because of their significantly higher resistance to ignition and sustained combustion compared to petroleum-based fluids, which matters because hydraulic lines and components often run near engines, brakes, and other hot areas where a leak could otherwise pose a serious fire risk.",
    reference: "TP 690 -- Airframes, Engines and Systems: Hydraulics",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Thermal (fuse) plugs, fitted into some aircraft wheel assemblies near the brakes, are designed to",
    options: [
      "automatically reinflate a tire that has lost pressure during a long taxi.",
      "prevent the wheel brakes from being applied at all once a preset temperature threshold is reached.",
      "regulate normal tire pressure during routine ground operations with no relationship to brake temperature at all.",
      "melt and deflate the tire in a controlled manner if brake temperature becomes excessive (for example after a high-energy rejected takeoff), preventing an uncontrolled, more violent tire or wheel failure from overheated, over-pressurized air.",
    ],
    answer: 3,
    explain:
      "Thermal fuse plugs are designed to melt at a specific temperature, releasing the tire's air in a controlled, gradual manner if brake heat (for example following a high-energy rejected takeoff) becomes excessive, which is intended to prevent a more violent, uncontrolled tire or wheel failure that could otherwise result from continued overheating and rising internal pressure.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel transfer (trim tank) system, fitted to some long-range transport aircraft, is used primarily to",
    options: [
      "shift fuel between a tail-mounted trim tank and the main wing tanks during cruise, moving the aircraft's centre of gravity aft to reduce trim drag and improve fuel efficiency, within limits monitored by the fuel and flight control systems.",
      "convert fuel directly into hydraulic fluid for use by the aircraft's hydraulic system.",
      "provide a completely independent emergency fuel supply usable only after all other tanks are fully exhausted.",
      "cool the engine oil by circulating fuel through the tail structure before returning it to the main tanks unchanged.",
    ],
    answer: 0,
    explain:
      "A fuel transfer (trim tank) system moves fuel between a tail-mounted tank and the main wing tanks, typically aft during cruise, to shift the aircraft's centre of gravity rearward and reduce the tail-down force the horizontal stabilizer must otherwise generate, lowering trim drag and improving fuel efficiency, with the transfer managed and limited by the fuel and flight control systems to keep CG within certified bounds.",
    reference: "TP 690 -- Airframes, Engines and Systems: Fuel Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Fowler flap, as distinguished from a simple plain or split flap, uses a track-and-carriage (or similar) mechanism that allows the flap to",
    options: [
      "operate solely as a spoiler, reducing rather than increasing lift when extended.",
      "move rearward along a curved track as it extends, increasing wing area as well as camber, which produces a greater lift increase than a flap that simply hinges downward without moving aft.",
      "rotate only around a fixed hinge line directly below the wing's trailing edge, with no rearward travel at all.",
      "retract fully into the wing's interior with no external movement visible from outside the aircraft at any flap setting.",
    ],
    answer: 1,
    explain:
      "A Fowler flap rides rearward along a track (via a carriage or similar mechanism) as it extends, which increases both the wing's effective area and its camber -- unlike a simple plain or split flap that only hinges downward in place -- giving a Fowler flap a greater lift increase for a given flap deflection.",
    reference: "TP 690 -- Airframes, Engines and Systems: Flight Controls",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Within a turbine engine's lubrication system, the pressure pump and the scavenge pump(s) serve distinct roles in that",
    options: [
      "the pressure pump and scavenge pump perform the identical function, existing purely as a redundant backup pair with no functional distinction.",
      "neither pump handles oil at all; both are dedicated exclusively to fuel system pressurization.",
      "the pressure pump delivers filtered oil under pressure to the bearings and gears that need lubrication, while the scavenge pump(s) return the used, often aerated oil from those areas back to the oil tank, typically at a higher flow capacity than the pressure pump to prevent oil accumulation.",
      "the scavenge pump alone supplies all lubrication to the engine, while the pressure pump exists solely to drain used oil overboard.",
    ],
    answer: 2,
    explain:
      "The pressure pump supplies filtered oil under pressure to the bearings, gears, and other components requiring lubrication, while separate scavenge pump(s) return the used oil -- typically aerated by that point -- from the sumps back to the oil tank; scavenge pump capacity is generally sized greater than pressure pump output to prevent oil from accumulating in the engine.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Transport aircraft primary electrical distribution is generally based on AC power (commonly 115V, 400Hz, three-phase) rather than DC power because AC systems generally",
    options: [
      "are entirely incompatible with any DC-powered equipment, requiring every piece of aircraft avionics to be redesigned specifically for AC-only operation.",
      "eliminate the need for any battery or standby power source, since AC systems are defined as never losing power in flight.",
      "always weigh more than an equivalent DC distribution system, making the choice purely a matter of historical convention with no weight advantage.",
      "allow electrical power to be transmitted at higher voltage for a given current (reducing conductor weight and resistive losses) and to be readily transformed to other voltages, while high-power AC motors and generators are generally lighter than DC equivalents of similar output.",
    ],
    answer: 3,
    explain:
      "AC distribution allows power to be transmitted at higher voltage for a given current (reducing the conductor weight and resistive losses that would otherwise be needed), can be readily stepped up or down with transformers, and generally allows lighter, more efficient high-power generators and motors than DC equivalents of similar output -- advantages that outweigh DC's simplicity for large transport-category electrical loads, though DC (often via transformer-rectifier units) remains used for many specific systems.",
    reference: "TP 690 -- Airframes, Engines and Systems: Electrical",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A nose wheel shimmy damper, fitted to most nose landing gear assemblies, is designed to",
    options: [
      "dampen and suppress a self-sustaining, rapid side-to-side oscillation (shimmy) of the nose wheel that can otherwise develop during taxi, takeoff roll, or landing roll, particularly at certain speeds.",
      "absorb the vertical shock loads of landing, performing the same function as the main oleo-pneumatic strut.",
      "provide the primary steering input for taxiing, replacing the need for a separate nose wheel steering system.",
      "prevent the nose gear from retracting until weight is fully off the wheels.",
    ],
    answer: 0,
    explain:
      "A shimmy damper (commonly a small hydraulic or friction damping unit) suppresses shimmy -- a self-sustaining, rapid lateral oscillation of the nose wheel that can develop at certain ground speeds due to the interaction of tire flexibility, gear geometry, and gear stiffness -- rather than providing steering input or absorbing vertical landing shock, which are separate systems' functions.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "On a retractable landing gear system with gear doors separate from the gear itself, the door sequencing during retraction and extension is generally arranged so that",
    options: [
      "gear doors close before the gear has finished retracting, with the gear designed to simply push through the closed doors.",
      "the doors open, the gear moves through the wheel well, and the doors then close behind it (with some designs leaving a small door open when the gear is down), coordinated by mechanical linkages or a sequencing valve so doors and gear do not collide.",
      "the gear doors remain permanently open throughout the entire flight, with no closing sequence at any point.",
      "the gear doors and the landing gear itself are mechanically identical and move as a single rigid unit with no separate sequencing required.",
    ],
    answer: 1,
    explain:
      "Where gear doors are separate from the gear legs, retraction and extension are sequenced -- typically via mechanical linkages, a sequencing valve, or an electronic controller -- so the doors open first, the gear then moves clear through the wheel well opening, and the doors close again once the gear is fully stowed (some designs leave a small door open around the gear leg when extended), preventing the doors and gear from colliding.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A wing leading-edge slat and a Krueger flap both serve to increase the wing's critical angle of attack for high-lift purposes, but they differ in that",
    options: [
      "a slat reduces the wing's angle of attack capability, while only a Krueger flap increases it.",
      "a Krueger flap is fitted only to the trailing edge of the wing, making it functionally a rear flap rather than a leading-edge device.",
      "a slat is a separate aerofoil-shaped surface that extends forward and/or down from the wing's leading edge (often creating a slot that reenergizes the boundary layer), while a Krueger flap hinges forward and down from beneath the leading edge, effectively increasing leading-edge camber without necessarily forming the same kind of slot.",
      "a slat and a Krueger flap are simply two different names for the identical device, with no design or functional distinction between them.",
    ],
    answer: 2,
    explain:
      "A slat is a separate, aerofoil-shaped leading-edge surface, often forming a slot with the main wing that reenergizes the upper-surface boundary layer and delays flow separation, while a Krueger flap is typically a flat or curved panel hinged from beneath the leading edge that folds forward and down to increase effective leading-edge camber, without necessarily creating the same kind of energizing slot -- both raise the usable (critical) angle of attack, but by somewhat different aerodynamic mechanisms.",
    reference: "TP 690 -- Airframes, Engines and Systems: Flight Controls",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An autobrake system, available on many transport aircraft for landing (and sometimes for a rejected takeoff), functions by",
    options: [
      "applying brakes only while the aircraft is still airborne, releasing them automatically the instant the wheels touch the runway.",
      "disabling all wheel braking automatically once the aircraft touches down, relying entirely on reverse thrust and aerodynamic drag to decelerate.",
      "controlling only nose wheel steering during the landing roll, with no function related to wheel braking at all.",
      "automatically applying wheel braking to a pre-selected deceleration rate once the aircraft is on the ground (and, on RTO settings, automatically at maximum braking when the throttles are retarded above a threshold speed), without requiring the pilot to manually modulate the brake pedals.",
    ],
    answer: 3,
    explain:
      "An autobrake system automatically applies wheel braking to a pre-selected deceleration rate once weight is on wheels after landing (freeing the pilot from manually modulating brake pressure), and on aircraft with an RTO autobrake setting, it arms maximum automatic braking that activates if the takeoff is rejected above a threshold speed with the throttles retarded, rather than disabling braking or controlling steering.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A capacitance-type fuel quantity indicating system determines the amount of fuel in a tank by",
    options: [
      "measuring the change in electrical capacitance of probes mounted in the tank, which varies according to how much fuel (with a different dielectric property than the air above it) surrounds each probe, and converting that signal into an indicated quantity.",
      "counting the number of times a mechanical float valve opens and closes as fuel is consumed.",
      "physically weighing the entire fuel tank assembly on a set of load cells mounted beneath the wing.",
      "measuring fuel flow rate at the engine and subtracting it from a fixed initial tank volume with no reference to the tank itself.",
    ],
    answer: 0,
    explain:
      "A capacitance-type system uses probes (acting as capacitors) mounted at intervals within the fuel tank; because fuel has a different dielectric constant than the air or vapour above it, the probes' capacitance changes according to how much of their length is immersed in fuel, and this signal is processed and converted into an indicated fuel quantity, rather than relying on a mechanical float or external weighing.",
    reference: "TP 690 -- Airframes, Engines and Systems: Fuel Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Continuous ignition, selected on many turbine-powered aircraft during conditions such as heavy precipitation, icing, or turbulence, provides",
    options: [
      "permanent illumination of the cockpit fire warning lights as a precautionary indication, unrelated to the engine's ignition system.",
      "an ongoing spark at the igniters (rather than the normal brief burst used only during a start) so that if a flameout or a momentary flame disruption occurs, the engine relights immediately without requiring a separate crew-initiated restart sequence.",
      "a continuous supply of additional fuel to the engine, unrelated to the ignition or spark system.",
      "a reduction in engine thrust output, used specifically to prevent compressor stalls during turbulence.",
    ],
    answer: 1,
    explain:
      "Continuous ignition keeps the igniters sparking on an ongoing basis (rather than only briefly during a normal start sequence), so that if conditions such as heavy rain, icing, or turbulence cause a momentary flame disruption or flameout, the engine can relight immediately on its own rather than requiring the crew to notice the flameout and carry out a full restart procedure.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
];
