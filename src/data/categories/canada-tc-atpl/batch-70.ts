import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 70 -- Section 10: Airframes,
// Power Plants, Propellers and Aircraft Systems, seventh pass --
// 70-BATCH MILESTONE. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and general
// airframe/powerplant systems knowledge. Covers engine cowl/inlet
// anti-ice, landing gear retraction actuator types, the brake
// metering valve, air-driven vs electric starter-generators,
// multi-spar/torsion-box wing structure, the anti-skid system's
// failure mode, variable stator vanes in an axial compressor, a
// fuel/water separator, de-ice boot cycling to avoid ice bridging,
// laminated cockpit windows for bird strike resistance, tire
// construction (bias-ply vs radial), dual-loop fire detection
// redundancy, single-point vs over-wing refueling, the engine
// accessory gearbox, the independently powered emergency lighting
// system, and the engine oil system chip detector -- topics not yet
// addressed in batches 2, 19, 29, 40, 50, or 60. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_70_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Engine cowl (nacelle inlet) anti-ice, as distinguished from wing leading-edge anti-ice, generally uses hot bleed air to",
    options: [
      "prevent ice from forming on the engine air inlet lip, which could otherwise break off and be ingested into the engine core, potentially causing compressor damage, a flameout, or other engine disruption.",
      "prevent ice from forming exclusively on the wing's leading edge, with cowl anti-ice performing an identical function to wing anti-ice and providing no protection to the engine inlet itself.",
      "cool the engine's compressor section, a function unrelated to ice prevention or protection of the engine inlet.",
      "heat the cabin, a function unrelated to the engine inlet or ice protection of any kind.",
    ],
    answer: 0,
    explain:
      "Engine cowl (nacelle inlet) anti-ice circulates hot bleed air through passages within the inlet lip to prevent ice accretion there; this matters because ice forming on the inlet lip could subsequently break off and be ingested directly into the engine core, risking compressor blade damage, a flameout, or other engine disruption -- a distinct concern from, though using a broadly similar bleed-air heating principle to, wing leading-edge anti-ice.",
    reference: "TP 690 -- Airframes, Engines and Systems: Ice and Rain Protection",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Landing gear retraction and extension is generally actuated using either hydraulic actuators or, on some aircraft, electromechanical (motor-driven screw jack) actuators, with the choice generally reflecting",
    options: [
      "the aircraft's overall systems architecture and design philosophy, since either approach can provide the necessary force and reliability, though a more electric aircraft design may favour electromechanical actuation to reduce reliance on hydraulic systems.",
      "a strict regulatory requirement mandating hydraulic actuation exclusively for every certified transport-category aircraft, leaving no room for an electromechanical alternative.",
      "the fact that electromechanical actuators are incapable of providing sufficient force to retract or extend any landing gear, making hydraulic actuation the only physically possible option.",
      "the aircraft's paint scheme and livery, factors entirely unrelated to the choice of landing gear actuation method.",
    ],
    answer: 0,
    explain:
      "Both hydraulic actuators and electromechanical (motor-driven screw jack) actuators can provide the force and reliability needed for landing gear retraction and extension, and the choice between them generally reflects the aircraft's overall systems architecture and design philosophy -- a 'more electric aircraft' design trend, for example, may favour electromechanical actuation for some systems to reduce overall reliance on centralized hydraulic systems, rather than either approach being categorically prohibited or impossible.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A brake metering valve, within a hydraulically actuated wheel brake system, generally functions to",
    options: [
      "convert the pilot's brake pedal input (mechanical or hydraulic) into a proportional hydraulic brake pressure delivered to the brake units, so greater pedal displacement or force results in greater braking pressure applied at the wheels.",
      "measure the aircraft's current groundspeed, a function unrelated to brake pressure and instead performed by other aircraft systems.",
      "regulate cabin pressurization, a function unrelated to wheel braking and instead performed by the pressurization system's outflow valve.",
      "always deliver a single, fixed brake pressure regardless of how much pedal displacement or force the pilot applies.",
    ],
    answer: 0,
    explain:
      "A brake metering valve translates the pilot's brake pedal input into a proportional hydraulic brake pressure sent to the brake units at each wheel, so that greater pedal displacement or force results in correspondingly greater braking pressure (and thus braking force) -- giving the pilot graduated, proportional control over braking rather than a simple on/off function.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Turbine engine starting can be accomplished using either an air-driven (pneumatic) starter or an electric starter (often integrated as a combined starter-generator), a choice that generally reflects",
    options: [
      "the aircraft's available power sources for starting (such as bleed air from an APU or ground cart for a pneumatic starter, versus sufficient electrical power for an electric starter) and the specific engine's design, since both approaches are used across different aircraft types.",
      "a universal rule that every turbine engine, on every aircraft type, must be started using an air-driven starter exclusively, with no electric starting method ever used.",
      "the fact that an electric starter-generator is incapable of also functioning as a generator once the engine is running, making its use as a starter its only possible function.",
      "the outside air temperature alone, with starter type otherwise having no relationship to the aircraft's available power sources or engine design.",
    ],
    answer: 0,
    explain:
      "Both air-driven (pneumatic) starters, using bleed air from a source such as an APU or a ground air cart, and electric starters (on some engines integrated as a combined starter-generator, which functions as a starter during start-up and then as a generator once the engine is running) are used across different turbine-powered aircraft, with the choice generally reflecting the aircraft's available power sources for starting and the specific engine's overall design, rather than one method being universally exclusive.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A multi-spar (or torsion-box) wing structural design, using more than one continuous spanwise spar together with the wing's skin panels, generally provides",
    options: [
      "multiple redundant load paths and a closed, torsionally stiff box structure, contributing to both fail-safe damage tolerance and the wing's ability to resist twisting under aerodynamic and control-surface loads.",
      "a single, isolated load path with no redundancy, a description that actually applies to a simple single-spar design rather than a multi-spar/torsion-box design.",
      "no meaningful contribution to the wing's ability to resist torsional (twisting) loads, with torsional stiffness instead provided entirely by the engine pylons.",
      "a structure that eliminates any need for periodic structural inspection, since a multi-spar torsion-box design is defined as immune to fatigue or damage.",
    ],
    answer: 0,
    explain:
      "A multi-spar (torsion-box) wing design uses more than one continuous spanwise spar working together with the wing's upper and lower skin panels to form a closed box structure; this arrangement provides multiple redundant load paths (supporting fail-safe, damage-tolerant design) and gives the wing significant torsional stiffness to resist twisting under aerodynamic and control-surface loads, distinguishing it from a simpler single-spar design with less inherent redundancy and torsional rigidity.",
    reference: "TP 690 -- Airframes, Engines and Systems: Structures",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "If an aircraft's anti-skid braking system fails or is switched off, the wheel brakes generally",
    options: [
      "remain available for manual braking, but without the automatic skid-protection modulation the anti-skid system normally provides, meaning the pilot must apply brake pressure more cautiously to avoid a locked-wheel skid, particularly on a wet or contaminated runway.",
      "become entirely inoperative, with no braking capability whatsoever available for the remainder of that flight.",
      "automatically apply full braking force continuously, regardless of any pilot brake pedal input, until the aircraft comes to a complete stop.",
      "switch automatically to an entirely separate, independent brake system with no relationship to the original hydraulic brake system.",
    ],
    answer: 0,
    explain:
      "With the anti-skid system failed or switched off, the wheel brakes generally remain available for manual use, but without the automatic skid-protection modulation that anti-skid normally provides (releasing and reapplying brake pressure at each wheel to prevent a locked-wheel skid); the pilot must therefore apply brake pressure more cautiously to avoid an inadvertent skid, a particular concern on a wet or contaminated runway where the margin before a wheel locks up is reduced, and landing distance is generally increased as a result.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Variable stator vanes (or variable inlet guide vanes), fitted to the compressor section of some turbine engines, are adjusted primarily to",
    options: [
      "optimize the angle at which airflow strikes the following rotor blades across a range of engine speeds, helping to maintain efficient compressor operation and reduce the risk of a compressor stall or surge, particularly at lower engine speeds.",
      "control the engine's fuel flow rate directly, a function unrelated to compressor airflow angle and instead performed by the fuel control unit or FADEC.",
      "adjust propeller blade pitch, a function unrelated to a turbine engine's internal compressor airflow and instead performed by the propeller governor.",
      "regulate cabin pressurization, a function unrelated to the engine's internal compressor airflow.",
    ],
    answer: 0,
    explain:
      "Variable stator vanes adjust their angle across the engine's operating range to optimize the angle at which airflow strikes the following rotor blades, helping maintain efficient, stable compressor operation and reduce the risk of a compressor stall or surge -- a risk that is generally greater at lower engine speeds, where the fixed geometry of a simpler compressor design would otherwise present airflow at a less favourable angle to the rotor blades.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel/water separator (or water scavenge feature), incorporated into some aircraft fuel tank or fuel system designs, is intended to",
    options: [
      "help remove or collect water that has accumulated in the fuel (from condensation or contamination), reducing the risk of that water reaching the engine, freezing at altitude, or supporting microbial growth within the tank.",
      "separate fuel into its different octane or cetane components, a function unrelated to water contamination.",
      "convert fuel vapour into liquid fuel, a function unrelated to water removal from the fuel system.",
      "regulate fuel temperature directly, a function that is actually performed by a fuel heater rather than a fuel/water separator.",
    ],
    answer: 0,
    explain:
      "A fuel/water separator or water scavenge feature helps remove or collect water that has accumulated within the fuel (from atmospheric condensation inside the tank or from contaminated fuel at uplift), reducing the risk of that water reaching the engine, forming ice at cold fuel temperatures and altitude, or supporting microbial growth within the tank -- fuel tanks are also generally drained at their low points during routine maintenance as a complementary water-removal practice.",
    reference: "TP 690 -- Airframes, Engines and Systems: Fuel Systems",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Pneumatic de-ice boots are generally cycled (inflated and deflated) according to a specific timing sequence, rather than being left continuously inflated, primarily to avoid",
    options: [
      "'ice bridging,' a condition in which ice accumulates over and conforms to the shape of a continuously inflated boot, becoming difficult to shed even when the boot is subsequently cycled.",
      "excessive fuel consumption, since boot cycling is understood to have a direct and significant effect on engine fuel burn.",
      "electrical system overload, since pneumatic boots are powered exclusively by the aircraft's electrical system rather than by bleed air or an engine-driven pneumatic pump.",
      "structural damage to the wing spar, a concern unrelated to how de-ice boots are cycled.",
    ],
    answer: 0,
    explain:
      "De-ice boots are cycled on a defined timing sequence (rather than left continuously inflated) partly to avoid 'ice bridging,' a condition in which ice can accumulate over and conform to the shape of a boot that has been left inflated for too long, making that ice difficult to shed even once the boot is subsequently cycled; correctly timed cycling, generally allowing some ice to accumulate before cycling, helps the boot shed ice effectively rather than simply flexing beneath an already-bridged ice layer.",
    reference: "TP 690 -- Airframes, Engines and Systems: Ice and Rain Protection",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Cockpit windows on many transport aircraft are constructed using multiple laminated panes (or plies) rather than a single pane primarily because",
    options: [
      "a multi-ply laminated structure provides significantly greater resistance to penetration from a bird strike or other impact than a single pane would, while still allowing some redundancy if one ply is damaged.",
      "a multi-ply laminated structure is chosen purely to reduce manufacturing cost compared to a single-pane window, with impact resistance an incidental and unimportant benefit.",
      "a single pane is incapable of providing any electrical heating for anti-fog or anti-ice purposes, making a multi-ply structure necessary solely for that reason.",
      "multiple panes are used exclusively to reduce the window's overall weight compared to an equivalent single pane of the same impact resistance.",
    ],
    answer: 0,
    explain:
      "A multi-ply laminated cockpit window structure provides significantly greater resistance to penetration from a bird strike or other impact than a single pane of comparable thickness would, since the layered construction helps absorb and distribute impact energy across multiple plies, while also offering some structural redundancy if one ply is damaged -- an important safety consideration given the flight deck's exposure to bird strikes and other impacts at flight speed.",
    reference: "TP 690 -- Airframes, Engines and Systems: Structures",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Comparing bias-ply and radial-ply aircraft tire construction, a radial tire generally offers",
    options: [
      "improved heat dissipation and a longer tread life compared to a bias-ply tire of similar size and rating, benefits related to its different internal cord/belt construction.",
      "no meaningful difference whatsoever from a bias-ply tire, the two construction methods being functionally and structurally identical.",
      "a significantly lower maximum speed rating than an equivalent bias-ply tire in every case.",
      "the elimination of any need for a thermal (fuse) plug, a protection that remains necessary regardless of tire construction type.",
    ],
    answer: 0,
    explain:
      "Radial-ply tire construction, using belts running more directly across the tire (rather than the crossing bias-angle plies of a bias-ply tire), generally provides improved heat dissipation and a longer tread life compared to an equivalent bias-ply tire, among other differences in flex characteristics and contact patch behaviour -- both construction types remain in use across different aircraft types, and thermal fuse plug protection remains relevant regardless of which tire construction is fitted.",
    reference: "TP 690 -- Airframes, Engines and Systems: Landing Gear",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine fire detection system using dual, independent detection loops (rather than a single loop) is designed so that",
    options: [
      "both loops generally need to detect a fire condition in agreement before a fire warning is triggered, reducing the risk of a false (nuisance) warning caused by a fault or spurious signal in a single loop alone.",
      "either loop alone, regardless of the other loop's state, is always sufficient by itself to trigger a fire warning, with no cross-check between the two loops.",
      "both loops must fail simultaneously before any fire warning of any kind can ever be triggered, regardless of whether an actual fire is present.",
      "the two loops serve entirely unrelated functions, with only one of the two loops actually performing any fire detection function at all.",
    ],
    answer: 0,
    explain:
      "A dual-loop fire detection system uses two independent detection loops so that a fire warning is generally triggered only when both loops agree that a fire condition is present, which reduces the risk of a false or nuisance warning being triggered by a fault, damage, or spurious signal affecting a single loop alone -- while many such systems are also designed so that a single-loop fault is itself separately annunciated, distinct from an actual fire warning, so the crew can be aware of reduced system redundancy without a false alarm.",
    reference: "TP 690 -- Airframes, Engines and Systems: Fire Protection",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Single-point pressure refueling, as distinguished from over-wing gravity refueling, allows fuel to be",
    options: [
      "supplied under pressure through a single connection point (commonly beneath the wing), with a panel of controls allowing the operator to direct fuel to each tank as needed, generally allowing for a significantly faster refueling process than gravity refueling through multiple over-wing ports.",
      "supplied exclusively by gravity feed from an elevated fuel truck, with no pressurized pumping involved at any point in the process.",
      "loaded only into a single fuel tank, with no ability to distribute fuel to multiple tanks from that one connection point.",
      "supplied only while the aircraft's engines are running, with no capability to refuel while the aircraft is parked with engines shut down.",
    ],
    answer: 0,
    explain:
      "Single-point pressure refueling supplies fuel under pressure through one connection point (commonly located beneath a wing), with a refueling control panel allowing the operator to direct fuel appropriately to each tank as needed and monitor quantities as they fill; because fuel is pumped in under pressure through a single, larger-flow connection rather than by gravity through multiple smaller over-wing ports, pressure refueling is generally significantly faster than over-wing gravity refueling for a given total fuel quantity.",
    reference: "TP 690 -- Airframes, Engines and Systems: Fuel Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine's accessory gearbox, driven by the engine's rotating core, is used primarily to",
    options: [
      "mechanically drive engine-mounted accessories such as generators, hydraulic pumps, and fuel pumps, allowing those accessories to be powered directly by the running engine rather than requiring a separate independent power source of their own.",
      "control the engine's fuel-air mixture ratio directly, a function performed by the fuel control unit or FADEC rather than the accessory gearbox.",
      "adjust the pitch angle of propeller blades, a function relevant only to a turboprop's propeller governor rather than the engine's own accessory gearbox.",
      "regulate cabin pressurization, a function unrelated to the engine's mechanically driven accessories.",
    ],
    answer: 0,
    explain:
      "An engine's accessory gearbox is mechanically driven by the engine's rotating core (typically via a driveshaft from one of the spools) and, in turn, drives engine-mounted accessories such as electrical generators, hydraulic pumps, and fuel pumps, allowing those accessories to be powered directly and continuously by the running engine itself, rather than requiring each accessory to have its own separate, independent power source.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An aircraft's emergency (floor path and exit sign) lighting system is generally designed to be powered by",
    options: [
      "an independent battery power source, separate from the aircraft's main electrical generation system, ensuring the emergency lighting remains available even if the main electrical system fails or is lost.",
      "the main electrical generation system exclusively, with no independent or backup power source of any kind provided for emergency lighting.",
      "the aircraft's hydraulic system, a power source unrelated to electrical lighting of any kind.",
      "engine bleed air, a power source unrelated to electrical lighting of any kind.",
    ],
    answer: 0,
    explain:
      "Emergency (floor path and exit sign) lighting is generally designed to be powered by an independent battery power source, separate from the aircraft's main electrical generation system, specifically so that this lighting remains available to help guide an evacuation even in a scenario where the main electrical system has failed or been lost, such as following an accident or a significant electrical malfunction.",
    reference: "TP 690 -- Airframes, Engines and Systems: Emergency Equipment",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine oil system's chip detector (magnetic plug), inspected during routine maintenance, is designed to",
    options: [
      "collect small metallic particles suspended in the circulating oil (using a magnetized element), giving maintenance personnel an early warning indicator of internal mechanical wear or an impending component failure inside the engine.",
      "measure the oil's current temperature, a function performed by a separate oil temperature gauge rather than a chip detector.",
      "regulate oil pressure within the engine, a function performed by a separate oil pressure regulating valve rather than a chip detector.",
      "filter out all particulate contamination from the oil, a function performed by the oil filter rather than the chip detector.",
    ],
    answer: 0,
    explain:
      "A chip detector (magnetic plug) is positioned within the engine's oil system to attract and collect small metallic particles that may be suspended in the circulating oil, using its magnetized element; inspecting the chip detector during routine maintenance (or monitoring an electronic chip detection system, on some engines) gives maintenance personnel an early warning indicator of internal mechanical wear -- such as a deteriorating bearing or gear -- well before it might otherwise progress to a more significant component failure.",
    reference: "TP 690 -- Airframes, Engines and Systems: Power Plants",
  },
];
