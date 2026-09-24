import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 40 -- Section 2: Airframes,
// Power Plants, Propellers and Aircraft Systems, fourth pass.
// Original questions written from standard airframe/powerplant
// systems principles and the TP 690 syllabus (topic headings only,
// no sample questions). Covers engine starting, fuel tank design,
// static protection, flight control tab types, yaw damping, wheel
// brakes, and electrical/oxygen systems not yet addressed in
// batches 2, 19, or 29. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_40_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A typical turbine engine start sequence generally involves",
    options: [
      "motoring the engine core to a specified rotational speed (using a pneumatic, electric, or APU-supplied starter) before fuel and ignition are introduced, followed by monitoring for a normal light-off and acceleration to idle.",
      "introducing fuel and ignition before any rotation of the engine core has begun, with the starter motor engaged only after light-off has already occurred.",
      "requiring no external starter source of any kind, since a turbine engine is designed to self-start from a fully static condition using fuel and ignition alone.",
      "monitoring only oil pressure during the start sequence, with turbine temperature considered irrelevant to a normal start and monitored only in cruise flight.",
    ],
    answer: 0,
    explain:
      "A normal turbine start motors the engine core up to a specified rotational speed first -- established, moving airflow through the compressor -- before fuel and ignition are introduced, and the crew then monitors the light-off (confirming it occurs, and within limits) and the subsequent acceleration to idle, watching parameters including turbine temperature (to catch a hot start) alongside oil pressure and other indications; a turbine engine does need an external starter source (pneumatic air, an electric starter, or an APU-supplied source) rather than being able to self-start from a fully static condition.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Aircraft hydraulic reservoirs are typically pressurized (rather than left at ambient pressure) primarily to",
    options: [
      "help ensure a positive supply of fluid to the hydraulic pump's inlet, reducing the risk of pump cavitation, particularly at altitude or during high-demand conditions.",
      "increase the total volume of hydraulic fluid the reservoir can hold, a fluid-capacity rather than a pump-supply-related purpose.",
      "eliminate the need for a hydraulic pump entirely, since a sufficiently pressurized reservoir is assumed capable of supplying the system on its own.",
      "cool the hydraulic fluid, a thermal-management rather than a pump-supply-related function.",
    ],
    answer: 0,
    explain:
      "Pressurizing the hydraulic reservoir (commonly using bleed air or another pressure source) helps push fluid positively toward the pump's inlet, reducing the risk that the pump will cavitate -- draw in vapor or entrained air rather than a solid column of fluid -- a risk that becomes more significant at altitude (lower ambient pressure) or under high-flow-demand conditions; it isn't primarily about increasing storage volume, eliminating the need for a pump (the reservoir alone provides no continuous pressure to the system), or cooling the fluid.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A trailing-link landing gear design, compared to a simple, straight oleo-pneumatic strut, generally offers",
    options: [
      "a smoother touchdown and taxi ride, since the wheel is mounted on an arm that moves rearward and upward on contact, allowing a longer, more gradual stroke to absorb the shock load.",
      "no meaningful difference in shock-absorbing characteristics compared to a simple straight oleo strut, since the two designs are functionally identical in that respect.",
      "the complete elimination of any hydraulic fluid or gas charge, relying entirely on the mechanical trailing-link arm itself to absorb all shock loads.",
      "a design used exclusively on very large transport aircraft, with trailing-link gear considered structurally unsuitable for smaller aircraft of any kind.",
    ],
    answer: 0,
    explain:
      "A trailing-link gear mounts the wheel on an arm (the trailing link) that pivots rearward and upward as the strut compresses, giving the wheel more room to move relative to the airframe and effectively lengthening and smoothing the shock-absorbing stroke compared to a simple straight oleo strut -- often producing a notably softer touchdown and better bump absorption during taxi over rough surfaces, and it still relies on an oleo-pneumatic mechanism (hydraulic fluid and a gas charge) within the strut itself, rather than eliminating that entirely, and it's used on a range of aircraft sizes, not exclusively very large transports.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An integral ('wet wing') fuel tank, as distinguished from a separate bladder-type fuel tank, is",
    options: [
      "formed by the wing structure itself (using sealant at the joints to make the structure fuel-tight), rather than being a distinct, separately installed flexible container within the wing.",
      "identical in construction to a bladder tank, with 'integral' simply describing an alternate name for the same flexible-container design.",
      "a tank located exclusively in the fuselage, making 'wet wing' a misleading name for a fuel tank that is not actually located within the wing at all.",
      "a fuel tank design used only on piston-engine light aircraft, with integral wet-wing tanks considered structurally unsuitable for any transport-category aircraft.",
    ],
    answer: 0,
    explain:
      "An integral (wet wing) tank uses the wing's own internal structure -- ribs, spars, and skin, sealed at the joints -- as the fuel tank itself, rather than housing a separate, distinct container within the wing the way a bladder-type tank does; this genuinely different construction approach (wing structure doing double duty as both airframe and tank) is widely used on many transport-category aircraft, not confined to piston-engine light aircraft, and 'wet wing' specifically refers to fuel being carried within the wing structure itself, not the fuselage.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel tank venting system is required primarily to",
    options: [
      "allow air to enter or leave the tank as fuel level changes and as altitude/temperature vary, preventing a damaging pressure differential (excess pressure or a partial vacuum) from developing within the tank structure.",
      "actively pump fuel out of the tank during normal engine feed, making the venting system functionally identical to the fuel feed/supply system.",
      "prevent any fuel from ever being added to or removed from the tank, functioning as a permanent seal rather than a pressure-equalizing pathway.",
      "cool the fuel within the tank, a thermal-management rather than a pressure-equalization function.",
    ],
    answer: 0,
    explain:
      "As fuel is consumed (or added during refuelling) and as altitude and temperature change, the air space above the fuel needs to be able to equalize with outside pressure -- a venting system provides that pathway, preventing a damaging pressure differential (either excess internal pressure or a partial vacuum) from building up and potentially deforming or damaging the tank structure; it's a pressure-equalization function, entirely distinct from the fuel feed/supply system that actually delivers fuel to the engines, and it applies to fuel tanks generally, wing tanks included, not fuselage tanks exclusively.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Static dischargers (static wicks), typically mounted at the trailing edges of the wings, tail, and other extremities, are fitted primarily to",
    options: [
      "provide a controlled path for accumulated static electric charge to dissipate from the airframe into the surrounding air, reducing radio/navigation interference and the risk of a disruptive static discharge.",
      "physically strengthen the trailing edge structure against aerodynamic flutter, a structural rather than an electrical function despite the name.",
      "generate electrical power for the aircraft's electrical system, functioning as a supplementary power-generation device.",
      "provide additional aerodynamic lift at the trailing edge, a lift-augmentation rather than an electrical-discharge function.",
    ],
    answer: 0,
    explain:
      "As an aircraft flies through the atmosphere (through precipitation, ice crystals, or dust, among other things), it can accumulate a static electric charge -- static dischargers are placed at trailing-edge extremities specifically to give that charge a low-resistance path off the airframe into the surrounding air in a controlled way, reducing precipitation static (P-static) interference with radio and navigation reception and reducing the risk of an uncontrolled, disruptive discharge; they aren't a structural flutter-prevention device, a power-generation device, or a lift-producing device.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A wing leading-edge anti-ice system using a 'piccolo tube' works by",
    options: [
      "routing hot bleed air through a perforated tube running along the inside of the leading edge, with the air escaping through small holes to directly heat the leading-edge skin from within.",
      "using an electrical heating element embedded within the leading edge skin, with 'piccolo tube' describing the shape of that electrical heating element rather than any air-carrying duct.",
      "mechanically inflating and deflating a rubber boot along the leading edge, making the piccolo tube system functionally identical to a pneumatic de-ice boot.",
      "spraying a freezing-point-depressant fluid over the leading edge, making the piccolo tube system functionally identical to a TKS weeping-wing system.",
    ],
    answer: 0,
    explain:
      "A piccolo tube is a perforated duct running along the inside of the wing (or tail) leading edge, through which hot bleed air is routed -- the air escapes through the small perforations (resembling the finger holes of a piccolo, which gives the system its name) to directly heat the leading-edge skin from behind, keeping it warm enough to prevent ice accretion; this is a genuinely bleed-air-based anti-ice mechanism, distinct from an electrical heating element, a pneumatic de-ice boot's inflate/deflate cycle, or a TKS fluid system's freezing-point-depressant spray.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A servo tab, a small auxiliary surface hinged to the trailing edge of a primary flight control surface, assists control movement by",
    options: [
      "being deflected first (directly by the pilot's control input) into the airflow, and the resulting aerodynamic force on the tab then helps move the larger primary control surface itself.",
      "being deflected in the same direction and by the same mechanism as the primary control surface, with no independent aerodynamic role of its own.",
      "physically locking the primary control surface in a fixed position, preventing rather than assisting any further movement of that surface.",
      "functioning exclusively as a trim device, with no role whatsoever in assisting the moment-to-moment aerodynamic movement of the primary control surface.",
    ],
    answer: 0,
    explain:
      "A servo tab is deflected directly by the pilot's control input (through a mechanical linkage), and the aerodynamic force generated by that small tab deflection is what actually helps move the larger primary control surface -- a mechanical-advantage arrangement useful where control forces would otherwise be excessive for direct manual actuation, distinct from a pure trim tab (used to relieve steady-state control force rather than to assist moment-to-moment control movement) and distinct from an anti-balance or balance tab, which work by different aerodynamic mechanisms.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A rudder travel limiter, fitted to many transport aircraft, is designed to",
    options: [
      "progressively reduce the maximum available rudder deflection as airspeed increases, protecting the vertical stabilizer and rudder structure from excessive aerodynamic loads at high speed.",
      "progressively increase the maximum available rudder deflection as airspeed increases, the opposite of the travel limiter's actual protective function.",
      "lock the rudder in a single fixed position for the entire flight, eliminating any rudder movement once the travel limiter is engaged.",
      "apply only during ground operations, with the rudder travel limiter considered inactive at any point once the aircraft becomes airborne.",
    ],
    answer: 0,
    explain:
      "Because the aerodynamic force generated by a given rudder deflection increases sharply with airspeed, a full, low-speed-range rudder deflection applied at high speed could overstress the vertical stabilizer and rudder structure -- a rudder travel limiter progressively reduces the maximum available deflection as airspeed increases, protecting that structure while still allowing full rudder authority at the lower speeds where it may genuinely be needed (such as for crosswind landings or an engine-failure scenario); it isn't a system that increases deflection with speed, that locks the rudder rigidly in one position, or that applies only on the ground.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A yaw damper, fitted to most transport aircraft, is primarily intended to",
    options: [
      "automatically apply small, continuous rudder inputs to counteract Dutch roll and other unwanted yaw oscillations, improving ride comfort and directional stability.",
      "provide the primary means of directional control during a normal crosswind landing, replacing the need for any pilot rudder input at all in that situation.",
      "increase, rather than damp, the aircraft's natural yaw oscillation tendency, the opposite of the system's actual intended effect.",
      "control pitch trim exclusively, with 'yaw damper' being a misleading name for what is actually a pitch-axis trim system.",
    ],
    answer: 0,
    explain:
      "A yaw damper senses yaw rate (and related motion) and automatically applies small, continuous rudder inputs specifically to counteract Dutch roll and other unwanted yaw/roll coupling oscillations, particularly at higher altitudes and speeds where an aircraft's natural directional/lateral stability characteristics can otherwise produce an uncomfortable or even uncomfortable-to-handle oscillation -- it's a damping, not an amplifying, system, it doesn't replace the pilot's own rudder input during a crosswind landing (a very different, large-deflection use of the rudder), and it operates on the yaw axis, not pitch trim.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Flight spoilers, as distinguished from ground spoilers on the same panels, can be used in flight to",
    options: [
      "augment roll control by deploying asymmetrically (extending more on the down-going wing's side) in coordination with aileron deflection, in addition to their speed-brake/descent function.",
      "extend only symmetrically and only after touchdown, making 'flight spoiler' a misleading term for a device that never actually functions in flight.",
      "control engine thrust directly, an engine-management rather than a flight-control-surface function despite the name.",
      "increase lift rather than reduce it, the opposite of a spoiler's actual aerodynamic effect on the wing.",
    ],
    answer: 0,
    explain:
      "Beyond their symmetric speed-brake role (increasing drag/reducing lift in flight, covered elsewhere), flight spoilers on many aircraft are also used asymmetrically to augment roll control -- deploying further on the side of the down-going wing (working alongside conventional aileron deflection) to increase the rolling moment for a given control input, particularly valuable given that ailerons alone can become less effective at high speed -- distinct from ground spoilers (which deploy symmetrically and fully after touchdown to dump lift and aid braking), and spoilers reduce, not increase, lift on the panel where they're deployed, and have no direct role in engine thrust control.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel heater (fuel-oil heat exchanger), fitted to many turbine-powered aircraft, serves to",
    options: [
      "warm the fuel using heat drawn from the engine oil system, reducing the risk of ice crystals forming within the fuel (from any entrained water) and blocking fuel filters.",
      "cool the fuel to a specified minimum temperature before it reaches the engine, a cooling rather than a warming function despite the component's name.",
      "warm the engine oil using heat drawn from the fuel, the reverse heat-transfer direction from the fuel heater's actual function.",
      "eliminate the need for any fuel filter, since heated fuel is assumed to be entirely free of any particulate or water contamination.",
    ],
    answer: 0,
    explain:
      "A fuel heater is a heat exchanger that transfers heat from the (comparatively warm) engine oil into the fuel, warming it enough to prevent any water entrained in the fuel from forming ice crystals that could otherwise block fuel filters, particularly relevant at the very cold fuel temperatures encountered at high-altitude cruise -- a genuinely fuel-warming (not fuel-cooling) function that happens to also usefully help cool the oil as a secondary benefit of the heat exchange, but it doesn't eliminate the ongoing need for fuel filtration, and the heat transfer direction is from oil to fuel, not the reverse.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Carbon (carbon-carbon) brakes, compared to traditional multi-disc steel brakes, generally offer",
    options: [
      "a significant weight saving along with better high-temperature performance, though typically at a higher initial cost than steel brakes.",
      "a substantial weight increase compared to steel brakes, making carbon brakes heavier despite their other performance advantages.",
      "no difference in weight or thermal performance whatsoever compared to steel brakes, with the material choice being purely cosmetic.",
      "a braking mechanism that does not rely on friction at all, using an entirely different, non-friction-based stopping principle from steel disc brakes.",
    ],
    answer: 0,
    explain:
      "Carbon brakes are prized for a genuine, significant weight saving over steel brakes of equivalent stopping capability, along with generally superior high-temperature performance and heat capacity (helpful for repeated heavy braking, such as multiple rejected-takeoff-severity stops without adequate cooling time) -- real, meaningful advantages that come at a higher acquisition cost than traditional steel disc brakes, and carbon brakes still work on the same fundamental friction principle as steel brakes, converting kinetic energy to heat through friction between rotating and stationary disc elements, rather than using some entirely different, non-friction mechanism.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A nose wheel steering system, found on most tricycle-gear transport and many general aviation aircraft, allows the crew to",
    options: [
      "directly steer the nose wheel (typically through a tiller, and/or through rudder pedal input at lower deflection angles) for ground manoeuvring, distinct from the rudder's primary in-flight directional control function.",
      "steer the nose wheel using the same physical control surface deflection as the rudder's in-flight function, making nose wheel steering and rudder control mechanically identical systems.",
      "control the main landing gear's steering angle exclusively, with the nose wheel itself considered non-steerable on any tricycle-gear aircraft.",
      "steer the aircraft only while airborne, with nose wheel steering considered inoperative and irrelevant during any ground operation.",
    ],
    answer: 0,
    explain:
      "Nose wheel steering gives the crew direct ground-manoeuvring control of the nose wheel's steering angle -- often through a dedicated tiller for larger steering angles during tight ground manoeuvring (taxiing, turning onto/off a runway), with rudder pedal input typically providing a smaller range of steering angle useful during the takeoff and landing roll -- a system distinct from, though sometimes interconnected at the pedal level with, the rudder's separate in-flight aerodynamic directional-control function; the nose wheel (not the main gear) is the steerable wheel on a typical tricycle-gear configuration, and the system is specifically a ground-operations function, not an airborne one.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Transformer Rectifier Unit (TRU), found in many transport aircraft electrical systems, functions by",
    options: [
      "converting the aircraft's AC electrical power into DC power, supplying DC buses and DC-powered equipment (and, often, charging the battery) from the AC generation system.",
      "converting the aircraft's DC electrical power into AC power, the reverse conversion direction from a TRU's actual function.",
      "generating electrical power independently, without relying on any AC source to convert from, making a TRU a standalone power-generation device rather than a converter.",
      "controlling hydraulic system pressure, an unrelated hydraulic rather than an electrical-conversion function despite the name.",
    ],
    answer: 0,
    explain:
      "Many transport aircraft generate AC power as their primary electrical source but still need DC power for certain buses, equipment, and battery charging -- a TRU converts that AC power into DC (transforming the voltage as needed, then rectifying it from AC to DC), rather than converting in the opposite direction, generating power independently on its own, or having any hydraulic function; it's a conversion device sitting between the AC generation system and the aircraft's DC electrical loads.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Passenger emergency oxygen, deployed from an overhead panel during a rapid decompression, is commonly supplied on many aircraft by",
    options: [
      "a chemical oxygen generator, which produces oxygen through an exothermic chemical reaction once activated, generally providing a fixed, limited duration of supply rather than a continuously replenishable gaseous source.",
      "the same high-pressure gaseous oxygen cylinder system used to supply the flight crew, making passenger and crew oxygen supply systems functionally and physically identical.",
      "the aircraft's air conditioning packs directly, with no separate or dedicated emergency oxygen supply system of any kind for passengers.",
      "a liquid oxygen (LOX) system exclusively, with chemical generators and gaseous cylinders considered inapplicable to passenger emergency oxygen on any aircraft type.",
    ],
    answer: 0,
    explain:
      "Passenger emergency oxygen systems commonly use individual chemical oxygen generators -- one per mask/drop-down unit, producing oxygen through a self-contained exothermic chemical reaction once triggered -- providing a fixed, limited-duration supply intended to cover the descent to a safe altitude rather than an indefinitely replenishable source; this is generally a distinct system from the flight crew's own oxygen supply (often a separate, gaseous high-pressure cylinder system providing a more flexible, longer-duration supply appropriate for crew needs), and passenger emergency oxygen is not simply drawn from the air conditioning packs or reliant only on a liquid oxygen system.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
];
