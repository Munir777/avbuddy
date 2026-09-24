import type { Question } from "../../../types";

// Canada TC ATPL - Section 10: Airframes, Power Plants, Propellers and Aircraft Systems
// Batch 90 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_90_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Generator Control Unit (GCU), associated with each AC generator in a transport aircraft's electrical system, is primarily responsible for",
    options: [
      "physically driving the generator's rotor at a constant mechanical speed",
      "converting DC battery power into AC power for the essential bus",
      "regulating generator output voltage and frequency, and disconnecting the generator from the bus if a fault (such as an overvoltage or underfrequency condition) is detected",
      "providing hydraulic pressure to the landing gear system",
    ],
    answer: 2,
    explain:
      "A GCU regulates its associated generator's output voltage and frequency and monitors for faults such as an overvoltage or underfrequency condition, disconnecting the generator from the bus if a fault is detected to protect the electrical system.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Generator Control Unit",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "In a dual-spool turbofan or turbojet engine, the low-pressure (N1) and high-pressure (N2) spools are generally",
    options: [
      "present only on turboprop engines, never on a turbofan or turbojet",
      "connected only during the engine start sequence, then permanently locked together for the remainder of the flight",
      "mechanically connected by a common shaft, forcing them to rotate at a fixed ratio to one another",
      "not mechanically connected to each other, each spool being free to rotate at its own speed, coupled to the other only aerodynamically through the gas flow passing through the engine core",
    ],
    answer: 3,
    explain:
      "The N1 and N2 spools of a dual-spool engine are not mechanically connected; each is free to rotate at its own speed, and the two are coupled only aerodynamically through the gas flow passing through the engine core, allowing N1 and N2 to vary somewhat independently.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Dual-spool mechanical independence",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Delamination, a form of internal damage that can occur within a composite (carbon-fibre-reinforced polymer) structure, presents a particular inspection challenge compared to a fatigue crack in a metal structure because delamination",
    options: [
      "can occur beneath the surface with little or no visible external indication, generally requiring specialized non-destructive testing methods to detect reliably",
      "never affects the structural strength of a composite component",
      "only occurs in metal structures, never in composite materials",
      "is always immediately visible on the surface, making inspection simpler than for metal structures",
    ],
    answer: 0,
    explain:
      "Delamination can develop beneath the surface of a composite structure with little or no visible external indication, unlike many metal fatigue cracks that eventually become visible; reliably detecting delamination generally requires specialized non-destructive testing methods.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Composite delamination detection",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Beyond modulating brake pressure to prevent a skid during the landing roll, many anti-skid systems also include a touchdown (or locked-wheel) protection feature that",
    options: [
      "has no function related to the landing roll, applying only during taxi",
      "inhibits brake application until the wheels have spun up to an appropriate speed after touchdown, preventing the tires from being subjected to braking before they are rotating",
      "permanently disables braking for the remainder of the flight after a single skid event",
      "automatically applies maximum braking the instant the aircraft touches down, regardless of wheel spin-up",
    ],
    answer: 1,
    explain:
      "Touchdown (locked-wheel) protection inhibits brake application until the wheels have spun up to an appropriate speed after touchdown, preventing the tires from being subjected to braking force before they are actually rotating, which could otherwise cause a tire to skid and be damaged.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Anti-skid touchdown protection",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An APU generator, in addition to providing electrical power on the ground, can often also be used as an in-flight backup electrical (and sometimes pneumatic) source, though its use in flight is generally",
    options: [
      "only possible if all engine-driven generators have already failed, with no other circumstance permitting its use",
      "unrestricted at any altitude, with no operational limitation whatsoever",
      "subject to a maximum operating altitude limitation published in the AFM, above which APU use in flight is not approved",
      "never permitted under any circumstance, since APUs are certified for ground use only",
    ],
    answer: 2,
    explain:
      "APU use in flight is generally subject to a maximum operating altitude limitation published in the AFM, reflecting the APU's certified operating envelope, above which in-flight APU use is not approved even though it may be useful as a backup source at lower altitudes.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: APU in-flight altitude limitation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A turbine engine's certified thrust ratings generally include multiple distinct limits, such as takeoff thrust, maximum continuous thrust, and go-around thrust, which exist primarily to",
    options: [
      "represent a single, identical thrust value that never changes regardless of the phase of flight",
      "apply only to piston engines, never to turbine engines",
      "eliminate the need for any other engine operating limitation, such as N1 or EGT limits",
      "define the maximum thrust permitted for specific phases of flight, each with an associated time limitation and/or operating condition appropriate to that phase",
    ],
    answer: 3,
    explain:
      "Distinct thrust ratings such as takeoff, maximum continuous, and go-around thrust define the maximum permitted thrust for specific phases of flight, each generally carrying its own time limitation and operating condition appropriate to how long and how often that rating is expected to be used.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Engine thrust rating designations",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Maintaining correct tire inflation pressure on an aircraft is important because",
    options: [
      "underinflation can cause excessive flexing, heat buildup, and sidewall damage, while overinflation can reduce the tire's contact patch and increase susceptibility to cuts or damage from surface irregularities",
      "only overinflation presents any risk at all, since underinflated tires are always safer",
      "tire pressure is relevant only to ground handling ease, with no safety implication",
      "tire pressure has no relationship to tire temperature, wear, or structural integrity",
    ],
    answer: 0,
    explain:
      "Underinflation can cause excessive tire flexing, heat buildup, and sidewall damage, while overinflation reduces the tire's contact patch and can increase its susceptibility to cuts or damage from surface irregularities; correct inflation balances these risks.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Tire pressure monitoring",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A static (or emergency) inverter, fitted to some aircraft electrical systems, is designed to",
    options: [
      "convert AC generator output into DC power for charging the battery, performing the same function as a TRU",
      "convert available DC battery power into a limited AC supply, providing essential AC-powered equipment with power during a total loss of normal AC generation",
      "mechanically drive the RAT's hydraulic pump",
      "permanently replace the need for any battery on the aircraft",
    ],
    answer: 1,
    explain:
      "A static or emergency inverter converts available DC battery power into a limited AC supply, providing essential AC-powered equipment with power during a total loss of normal AC generation -- the reverse conversion direction from a Transformer Rectifier Unit, which converts AC to DC.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Static/emergency inverter",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Following the loss of one or more AC generators, an aircraft's electrical system load-shedding logic generally",
    options: [
      "shuts down the entire electrical system to prevent further faults",
      "applies only on the ground, never during flight",
      "automatically disconnects selected non-essential electrical loads, preserving available generating capacity for essential and higher-priority equipment",
      "has no defined logic, relying entirely on the crew to manually select which equipment to power",
    ],
    answer: 2,
    explain:
      "Load-shedding logic automatically disconnects selected non-essential electrical loads following a generator loss, preserving the remaining available generating capacity for essential and higher-priority equipment rather than shutting the entire system down or leaving load management entirely to the crew.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Electrical load shedding",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A landing gear wheel well fire (or overheat) detection system, fitted to some transport aircraft, is intended to alert the crew to",
    options: [
      "low tire pressure, with no relation to fire or heat at all",
      "a fire occurring exclusively in the passenger cabin",
      "a fault in the aircraft's weather radar system",
      "a fire or overheat condition specifically within the landing gear bay, such as from an overheated brake or a hydraulic fluid fire, distinct from engine, APU, or cargo compartment fire detection",
    ],
    answer: 3,
    explain:
      "A wheel well fire or overheat detection system alerts the crew to a fire or overheat condition specifically within the landing gear bay -- such as from an overheated brake or a hydraulic fluid fire -- distinct from the separate detection systems covering the engines, APU, or cargo compartments.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Wheel well fire detection",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Many transport aircraft flap and slat systems use a common drive shaft (torque tube) running the length of the wing, connected to a central power drive unit, primarily so that",
    options: [
      "the panels on both wings are mechanically interconnected and driven in a synchronized manner from a single power source, helping ensure symmetric deployment",
      "flap and slat deployment speed is unrelated to the drive shaft's rotational speed",
      "the system can operate without any electrical or hydraulic power source at all",
      "each flap or slat panel can be driven completely independently, with no mechanical relationship to any other panel",
    ],
    answer: 0,
    explain:
      "A common drive shaft connected to a central power drive unit mechanically interconnects the flap or slat panels on both wings, driving them in a synchronized manner from a single power source and helping ensure symmetric deployment, complementing the separate asymmetry protection system that detects a fault if synchronization is lost.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Flap/slat drive shaft interconnect",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A nose landing gear centering cam mechanism is generally designed to",
    options: [
      "permanently lock the nose wheel in a fixed position during flight, preventing any future extension",
      "automatically align (centre) the nose wheel straight ahead as the gear retracts, so it fits properly within the confines of the wheel well",
      "automatically steer the nose wheel during taxi in place of the pilot's steering input",
      "increase nose wheel steering sensitivity at high taxi speeds",
    ],
    answer: 1,
    explain:
      "A centering cam automatically aligns the nose wheel straight ahead as the gear retracts, ensuring it fits properly within the confines of the wheel well, since the gear bay is generally not large enough to accommodate the wheel at an arbitrary steering angle.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Nose gear centering cam",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Electrical bonding straps, fitted across structural joints such as a control surface hinge or an access panel, are used primarily to",
    options: [
      "provide the primary structural strength connection at that joint, replacing the need for mechanical fasteners",
      "insulate the two sides of the joint electrically from one another",
      "provide a low-resistance electrical path across the joint, helping safely conduct lightning current or static charge and reducing the risk of arcing or sparking at that joint",
      "exist only on composite aircraft, never on aluminum airframes",
    ],
    answer: 2,
    explain:
      "Bonding straps provide a low-resistance electrical path across a structural joint, helping safely conduct lightning current or static charge across the joint and reducing the risk of damaging arcing or sparking, rather than serving a primary structural or insulating role.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Electrical bonding straps",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel filter (strainer) bypass valve, fitted within an aircraft's fuel system, is designed to",
    options: [
      "increase fuel pressure well beyond the boost pump's normal output",
      "permanently block fuel flow if the filter becomes clogged, protecting the engine from any contamination",
      "convert fuel from a liquid to a vapour state before reaching the engine",
      "allow fuel to continue flowing to the engine, bypassing a clogged filter element, if the pressure differential across the filter becomes excessive, prioritizing continued fuel flow over filtration",
    ],
    answer: 3,
    explain:
      "A fuel filter bypass valve opens to allow fuel to continue flowing to the engine, bypassing a clogged filter element, if the pressure differential across the filter becomes excessive -- prioritizing continued fuel flow, and therefore continued engine operation, over full filtration in that circumstance.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Fuel filter bypass valve",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A mechanical brake wear indicator (commonly a pin that visibly recedes as the brake material wears) allows maintenance personnel to",
    options: [
      "assess the remaining serviceable life of the brake assembly's friction material without needing to fully disassemble the brake",
      "measure hydraulic fluid quantity in the brake system reservoir",
      "determine tire pressure without a separate gauge",
      "directly measure brake temperature during a landing rollout",
    ],
    answer: 0,
    explain:
      "A mechanical brake wear indicator lets maintenance personnel assess the remaining serviceable life of the brake assembly's friction material through a simple visual check, without needing to fully disassemble the brake to measure wear directly.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Brake wear indicator",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A pressure bulkhead, typically located at the forward and aft ends of a transport aircraft's pressurized fuselage section, is structurally distinguished from a standard fuselage frame in that the pressure bulkhead",
    options: [
      "serves no structural purpose, being purely a cosmetic panel",
      "is specifically designed to withstand the pressurization load across the boundary between the pressurized cabin and the unpressurized section beyond it (such as the tail cone or radome area)",
      "is found only on unpressurized aircraft",
      "is identical in design and loading to every other frame along the fuselage",
    ],
    answer: 1,
    explain:
      "A pressure bulkhead is specifically designed to withstand the pressurization load across the boundary between the pressurized cabin and an unpressurized section beyond it, such as the tail cone or radome area, carrying loads that a standard fuselage frame along the pressurized section does not experience in the same way.",
    reference: "TP 690 -- Airframes, Power Plants, Propellers and Aircraft Systems: Pressure bulkhead",
  },
];
