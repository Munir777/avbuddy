import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 80 -- Section 10: Airframes,
// Power Plants, Propellers and Aircraft Systems, eighth pass.
// Original questions written from the TP 690 syllabus (topic
// headings only, no sample questions) and general airframe/systems
// principles. Covers hot section engine inspection, landing gear
// uplock/downlock mechanisms, fuel jettison nozzle placement,
// stringers vs frames in semi-monocoque construction, control
// linkage types (cable vs push-pull rod), fly-by-wire flight
// controls, engine mount/pylon vibration isolation, APU automatic
// fire protection, electrical power source priority logic, the
// pitot-static port's fuselage placement, dual pitot heat
// redundancy, fuel tank baffle ribs, the fuel collector tank,
// landing gear shock strut servicing, the bleed air precooler, and
// circuit breaker trip-free design -- topics not yet addressed in
// batches 2, 19, 29, 40, 50, 60, or 70. Not transcribed or adapted
// from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_80_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Hot section components of a turbine engine, such as the combustor and turbine section, generally require more frequent inspection and carry more restrictive life limits than the compressor section primarily because they",
    options: [
      "operate at the highest temperatures and thermal stresses within the engine, making them more susceptible to material fatigue, thermal cracking, and creep over time than the comparatively cooler compressor section.",
      "rotate at a slower speed than the compressor, which by itself increases wear regardless of temperature.",
      "are the only components in the engine constructed from a lightweight aluminum alloy.",
      "carry no meaningful thermal or mechanical stress at all, making their inspection frequency purely arbitrary.",
    ],
    answer: 0,
    explain:
      "The combustor and turbine section operate at the highest temperatures anywhere in a turbine engine, exposed to the direct products of combustion and extreme thermal stress, which makes their materials more susceptible over time to fatigue, thermal cracking, and creep than the comparatively cooler compressor section -- this is why hot section components are typically subject to more restrictive inspection intervals and life limits, and why a hot section inspection is a distinct, significant maintenance event in a turbine engine's life.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Gas Turbine Engines",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A landing gear uplock, securing the gear in the retracted position, and a downlock, securing the gear in the extended position, together serve primarily to",
    options: [
      "mechanically hold the gear in its selected position independent of hydraulic pressure, preventing an unintended gear movement -- such as inadvertent extension in flight or retraction on the ground -- if hydraulic pressure is lost or fluctuates.",
      "provide the sole source of structural support for the gear's weight, with the shock strut playing no role in bearing any load.",
      "control the rate at which the gear extends or retracts, functioning as the system's only speed-limiting device.",
      "indicate gear position to the crew, replacing the need for any separate landing gear position indicating system.",
    ],
    answer: 0,
    explain:
      "Because a hydraulic actuator alone, dependent on continuously maintained pressure, would not reliably hold the gear securely in position if that pressure were lost or fluctuated, uplocks and downlocks provide a mechanical means of securing the gear independent of hydraulic pressure -- the uplock prevents an inadvertent extension while the gear is retracted in flight, and the downlock prevents an inadvertent retraction while the gear is extended on the ground or during landing, each engaging positively once the gear reaches its selected position.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Landing Gear",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Fuel jettison nozzles, where fitted, are generally located at or near the wingtips primarily to",
    options: [
      "release fuel as far as practical from the fuselage, engines, and other hot or ignition-prone surfaces, reducing the risk that jettisoned fuel or its vapour could contact a heat source or be drawn into an engine intake.",
      "maximize the aerodynamic drag produced by the jettison process, slowing the aircraft as quickly as possible.",
      "ensure jettisoned fuel is released as close as possible to the fuselage centreline, minimizing any lateral distance from the aircraft.",
      "allow fuel to be dumped directly into the engine intakes for a more efficient disposal process.",
    ],
    answer: 0,
    explain:
      "Fuel jettison nozzles are positioned at or near the wingtips specifically to release fuel as far as practical from the fuselage, engines, and other potential ignition sources, reducing the risk that the jettisoned fuel stream or its vapour could contact a hot surface, be ingested by an engine, or otherwise create a hazard to the aircraft during the jettison process -- this placement, along with the jettison flow rate and pattern, is a certified part of the system's design.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Fuel Systems",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "In a typical semi-monocoque fuselage, stringers and frames (formers) serve distinct structural roles in that",
    options: [
      "stringers run longitudinally and, together with the skin, primarily carry bending and axial loads along the fuselage's length, while frames are oriented around the fuselage's circumference and primarily maintain its cross-sectional shape and resist hoop stress from pressurization.",
      "stringers and frames perform an identical structural function, with the two terms simply describing the same component from different manufacturers.",
      "frames run longitudinally along the fuselage's length, while stringers are oriented circumferentially around the fuselage.",
      "neither stringers nor frames carry any structural load, serving only to provide attachment points for interior cabin trim panels.",
    ],
    answer: 0,
    explain:
      "Stringers are longitudinal structural members running along the length of the fuselage, working together with the skin to carry bending and axial loads as the fuselage flexes in flight, while frames (formers) are oriented circumferentially around the fuselage cross-section, maintaining its shape and resisting the hoop stress generated by cabin pressurization -- together, this combination of longitudinal and circumferential members with a load-carrying skin is what characterizes semi-monocoque construction, as distinguished from a simpler, unstiffened monocoque shell.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Airframe Structure",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Comparing a cable-and-pulley flight control linkage to a push-pull rod linkage, a key practical difference is that a cable system",
    options: [
      "can only transmit control force by pulling (tension), typically requiring cables routed in pairs so that one cable pulls in each direction, whereas a rigid push-pull rod can transmit force in both tension and compression through a single linkage.",
      "can transmit force equally well in both tension and compression through a single cable run, exactly like a push-pull rod.",
      "is heavier and more rigid than an equivalent push-pull rod system of the same length, with no advantage in weight or routing flexibility.",
      "cannot be used anywhere on an aircraft that also uses hydraulic actuation, since the two linkage types are mutually incompatible.",
    ],
    answer: 0,
    explain:
      "A cable can only usefully transmit force by being pulled in tension -- it cannot push -- so a cable-actuated control system typically routes cables in pairs, one pulling in each direction around pulleys, to achieve control movement both ways; a push-pull rod, being rigid, can transmit force in both tension and compression through a single linkage, which can simplify routing in some installations at the cost of the greater routing flexibility (around pulleys and through tight spaces) that a lighter cable system often offers.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Flight Control Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fly-by-wire flight control system, as distinguished from a conventional mechanical (cable or rod) flight control system, transmits the pilot's control input to the flight control surfaces primarily by",
    options: [
      "converting the input into an electrical signal, processed by flight control computers and then sent to electrically commanded hydraulic (or electric) actuators at the control surface, rather than moving the surface through a direct, continuous mechanical linkage.",
      "using a system of cables and pulleys identical in every respect to a conventional mechanical flight control system.",
      "eliminating the need for any hydraulic or electric actuation at the control surface, since fly-by-wire surfaces are moved by aerodynamic force alone.",
      "requiring the pilot's control input to be manually relayed to the control surface by a crew member physically located at that surface.",
    ],
    answer: 0,
    explain:
      "In a fly-by-wire system, the pilot's control input (from a control column, sidestick, or pedals) is converted into an electrical signal rather than being transmitted through a direct, continuous mechanical linkage; that signal is processed by flight control computers -- which can also apply flight envelope protections and control law logic -- before being sent electrically to command the actuators that actually move the control surface, offering benefits such as reduced weight, simplified routing, and built-in protections not available with a purely mechanical system.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Flight Control Systems",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine mount (or pylon), attaching a turbine engine to the wing or fuselage, is generally designed to accommodate",
    options: [
      "thermal expansion of the hot engine relative to the comparatively cooler surrounding structure, along with vibration isolation, while still transmitting the engine's thrust load securely into the airframe.",
      "no thermal expansion or vibration effects at all, since the engine and mount are assumed to remain at an identical, constant temperature throughout every flight.",
      "electrical power generation exclusively, with no structural or thrust-transmission function of any kind.",
      "fuel storage, serving as an integral fuel tank in addition to its structural mounting function.",
    ],
    answer: 0,
    explain:
      "An engine mount or pylon must securely transmit the engine's substantial thrust load into the surrounding wing or fuselage structure while also accommodating the thermal expansion that occurs as the hot engine heats relative to the comparatively cooler mount and airframe structure around it, and providing a degree of vibration isolation so that engine-generated vibration is not directly and fully transmitted into the airframe -- balancing structural rigidity for load transfer against enough flexibility to handle these thermal and vibration effects.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Engine Installation",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An APU's fire detection and extinguishing system is often designed with automatic activation capability, distinguishing it from a main engine fire system, primarily because",
    options: [
      "the APU is commonly run unattended (such as while the aircraft is parked with no crew on the flight deck), so automatic shutdown and extinguishing on detecting a fire provides protection even when no crew member is immediately present to respond manually.",
      "the APU never requires any fire detection or extinguishing capability at all, since it is considered inherently fireproof.",
      "automatic activation is used only because the APU physically cannot be reached by any crew member during flight, with no connection to unattended ground operation.",
      "main engines are never equipped with any fire detection or extinguishing system, making the APU the only powerplant on the aircraft with this protection.",
    ],
    answer: 0,
    explain:
      "Because an APU is often started and run while the aircraft is parked on the ground, sometimes with no crew member on the flight deck to notice and manually respond to a fire indication, many APU fire protection systems are designed with an automatic activation capability -- shutting down the APU and discharging the extinguishing agent automatically upon detecting a fire -- providing protection during unattended ground operation, in addition to the manual activation capability available to the crew when they are present and can respond directly.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Fire Protection Systems",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "When external ground power, the APU generator, and the engine-driven generators are all potentially available, an aircraft's electrical system generally incorporates priority logic (often through bus tie arrangements and interlocks) primarily to",
    options: [
      "prevent two power sources from being connected to the same bus simultaneously in an uncontrolled way, while automatically or procedurally establishing which source actually supplies the electrical buses at a given time.",
      "ensure that all available power sources are always connected to every electrical bus simultaneously, with no distinction between sources at any time.",
      "permanently disable the engine-driven generators any time external ground power is connected, with no way to reconnect them until the aircraft is airborne.",
      "eliminate the need for any electrical bus arrangement at all, since a single, undivided electrical system requires no priority logic.",
    ],
    answer: 0,
    explain:
      "With multiple potential electrical sources -- external ground power, the APU generator, and the engine-driven generators -- an aircraft's electrical system uses priority logic, interlocks, and bus tie arrangements to prevent incompatible sources from being connected to the same bus simultaneously in an uncontrolled way (which could cause damage or a fault), while establishing, either automatically or through crew procedure, which source actually supplies power to the buses at a given phase of ground or flight operation.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Electrical Systems",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The static port(s) on an aircraft's fuselage are generally located at a position specifically chosen to",
    options: [
      "sense a region of airflow as close as practical to true undisturbed ambient (static) pressure, minimizing the local pressure disturbance created by the fuselage's own shape that would otherwise introduce position error into the pitot-static instruments.",
      "sit directly in the aircraft's highest-velocity airflow, deliberately maximizing dynamic pressure at the sensing point.",
      "always be located inside the engine inlet, where pressure is most representative of the surrounding atmosphere.",
      "be placed at random, since static port location has no measurable effect on the accuracy of pitot-static instrument readings.",
    ],
    answer: 0,
    explain:
      "Airflow around a fuselage in motion is disturbed by the fuselage's own shape, meaning local pressure at any given point can differ somewhat from the true, undisturbed ambient (static) pressure of the surrounding air; static ports are deliberately positioned at a location on the fuselage found, through flight testing, to minimize this disturbance and most closely approximate true static pressure, reducing the position error that would otherwise be introduced into the airspeed indicator, altimeter, and vertical speed indicator.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Pitot-Static Systems",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Many transport aircraft are fitted with two or more independent pitot tubes, each with its own electrically heated element and, commonly, its own independent electrical power source, primarily to",
    options: [
      "ensure that a single electrical fault or failure cannot simultaneously disable heating on every pitot tube at once, reducing the risk that all of the aircraft's airspeed indications could be lost to icing from one common failure.",
      "increase the aircraft's overall airspeed reading by averaging the output of multiple pitot tubes together at all times.",
      "provide a purely cosmetic redundancy, since pitot tube icing is not considered a meaningful operational hazard on a modern aircraft.",
      "eliminate the need for any pitot heat test to be performed by the crew before flight.",
    ],
    answer: 0,
    explain:
      "By giving each pitot tube its own independent heating element and, commonly, drawing that heat from a separate electrical source or bus, the system is designed so that a single electrical fault cannot simultaneously disable heating across every pitot tube at once -- since a loss of pitot heat can lead to ice blockage and unreliable or lost airspeed indication, this redundancy reduces the risk of a common-cause failure taking out all of the aircraft's airspeed sources together.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Pitot-Static Systems",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Baffle ribs (or baffle plates) fitted inside a wing fuel tank are intended primarily to",
    options: [
      "restrict the free movement of fuel within the tank during aircraft manoeuvring, reducing fuel slosh and the sudden shift in weight and centre of gravity that unrestricted fuel movement could otherwise cause.",
      "filter contaminants out of the fuel before it reaches the engine, performing the same function as a fuel filter.",
      "heat the fuel to prevent ice crystal formation, performing the same function as a fuel-oil heat exchanger.",
      "measure the quantity of fuel remaining in the tank, performing the same function as a capacitance probe.",
    ],
    answer: 0,
    explain:
      "Baffle ribs are internal partitions within a fuel tank, generally perforated to allow fuel to still flow between compartments, that restrict how freely fuel can slosh back and forth as the aircraft manoeuvres -- without them, a large, unrestricted mass of fuel shifting suddenly during a turn or turbulence could produce an undesirable, rapid shift in weight distribution and centre of gravity, along with structural loads on the tank itself, which the baffles help to moderate.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Fuel Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel collector tank (or collector cell), positioned around a tank's boost pump inlet, is designed to",
    options: [
      "maintain a small, reliable reservoir of fuel immediately available to the boost pump regardless of the aircraft's attitude or manoeuvring, helping ensure an uninterrupted fuel supply even when the main tank's fuel level is low or momentarily shifted away from the pump inlet.",
      "serve as the aircraft's sole fuel tank, replacing the need for any main wing fuel tank.",
      "measure total fuel quantity across the entire aircraft, replacing the need for a separate fuel quantity indicating system.",
      "heat incoming fuel before it reaches the collector, performing the same function as a fuel-oil heat exchanger.",
    ],
    answer: 0,
    explain:
      "A collector tank or cell surrounds the boost pump inlet with a smaller, localized reservoir of fuel that tends to remain filled even when the aircraft manoeuvres or when the main tank's overall fuel level runs low, helping ensure the boost pump continues to draw a reliable, uninterrupted fuel supply rather than momentarily running dry if fuel in the broader tank shifts away from the pump inlet during an unusual attitude, a low-fuel condition, or aggressive manoeuvring.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Fuel Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An oleo-pneumatic landing gear shock strut that is incorrectly serviced -- either under-inflated or over-inflated relative to its specified charge -- can result in",
    options: [
      "either reduced shock-absorbing capacity and excessive strut compression (if under-serviced) or a harsher ride with reduced compression travel (if over-serviced), in either case degrading the strut's intended shock-absorption performance from its properly serviced condition.",
      "no meaningful operational effect at all, since a shock strut's performance is entirely independent of its nitrogen and hydraulic fluid charge.",
      "improved shock-absorbing performance whenever the strut is under-serviced, since a lower charge always improves cushioning regardless of degree.",
      "a change in the aircraft's electrical system configuration, since the shock strut charge is electrically monitored and directly affects generator output.",
    ],
    answer: 0,
    explain:
      "An oleo-pneumatic strut relies on a properly specified charge of compressed nitrogen (or air) and hydraulic fluid to absorb shock loads correctly; an under-serviced strut can compress excessively under load, reducing available shock-absorbing travel and risking a harder bottoming-out on a firm landing, while an over-serviced strut compresses too little, transmitting a harsher, less cushioned ride into the airframe -- both deviations from the correct charge degrade the strut's intended shock-absorption performance in different ways.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Landing Gear",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A bleed air precooler, fitted between the engine's compressor bleed port and the aircraft's pneumatic system, is used to",
    options: [
      "reduce the temperature of the hot, high-pressure bleed air -- typically using cooler fan or ram air as the cooling medium -- to a level suitable for the ducting, valves, and downstream systems that use it, before it enters the rest of the pneumatic system.",
      "increase the temperature of the bleed air further before it is used for any aircraft system, in the same manner as a fuel heater.",
      "compress the bleed air to a higher pressure than it had when it left the engine's compressor.",
      "convert the bleed air into electrical power, replacing the need for any engine-driven generator.",
    ],
    answer: 0,
    explain:
      "Air bled from a turbine engine's compressor is both hot and at high pressure -- often too hot for the ducting, valves, and downstream equipment of the aircraft's pneumatic system to handle directly -- so a precooler, typically using cooler fan air or ram air as the cooling medium in a heat exchanger, reduces the bleed air's temperature to a suitable level before it is distributed to systems such as cabin air conditioning, pressurization, and anti-ice, protecting downstream components from excessive heat.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Pneumatic Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Aircraft circuit breakers are generally designed to be 'trip-free,' meaning that",
    options: [
      "the breaker will open (trip) to interrupt an overload or fault condition even if a crew member is physically holding the breaker's button in, since the internal tripping mechanism is not defeated by external pressure on the button.",
      "once tripped, a circuit breaker can never be reset again for the remainder of the flight under any circumstances.",
      "the breaker cannot be manually tripped by a crew member at all, and will only open automatically in response to an electrical fault.",
      "circuit breakers require no overload or fault condition whatsoever to trip, opening at random intervals regardless of the circuit's actual current draw.",
    ],
    answer: 0,
    explain:
      "A trip-free circuit breaker's internal mechanism is designed so that the breaker will still open to interrupt an overload or fault condition even if someone is physically holding the reset button in, preventing a crew member from defeating the breaker's protective function simply by holding it closed -- this is also why standard guidance generally cautions against resetting a tripped breaker more than once without a clear explanation, since a repeated trip indicates a persistent fault the breaker is correctly protecting the circuit and wiring from.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Electrical Systems",
  },
];
