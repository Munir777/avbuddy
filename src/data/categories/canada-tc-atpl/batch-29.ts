import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 29 -- Section 2: Airframes,
// Power Plants, Propellers and Aircraft Systems, third pass.
// Original questions written from standard airframe/powerplant
// systems principles and the TP 690 syllabus (topic headings only,
// no sample questions). Covers hydraulic, pneumatic, electrical,
// fuel, pressurization, ice protection, and propeller/engine
// control systems not yet addressed in batches 2 or 19. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_29_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Transport category aircraft typically incorporate multiple, independent hydraulic systems primarily to",
    options: [
      "allow each hydraulic system to power a completely unrelated, non-flight-critical function, since flight controls are never hydraulically actuated on transport aircraft.",
      "reduce the aircraft's empty weight, since multiple smaller hydraulic systems are lighter in combination than a single larger one.",
      "provide redundancy, so that flight controls, landing gear, and other hydraulically actuated systems remain operable even if one hydraulic system fails.",
      "increase total hydraulic fluid capacity only, with no redundancy or failure-tolerance benefit intended by the multiple-system design.",
    ],
    answer: 2,
    explain:
      "Multiple independent hydraulic systems (commonly three on many transport aircraft) exist chiefly for redundancy -- flight controls, landing gear, brakes, and other hydraulically powered systems are typically arranged so that no single hydraulic system failure removes the aircraft's ability to fly and land safely, often with critical functions duplicated or triplicated across systems and, on some types, a power transfer unit (PTU) allowing one system to help pressurize another.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A power transfer unit (PTU), found in some transport aircraft hydraulic system designs, allows",
    options: [
      "fuel to be transferred between hydraulic reservoirs, functioning as a cross-feed valve for engine fuel rather than for hydraulic fluid.",
      "one engine's bleed air to pressurize a hydraulic reservoir on the opposite side of the aircraft.",
      "electrical power to be transferred directly into a hydraulic system, converting electrical energy straight into fluid pressure with no intervening pump.",
      "one hydraulic system to drive a pump that pressurizes a second hydraulic system, transferring hydraulic power without transferring fluid between the two systems.",
    ],
    answer: 3,
    explain:
      "A PTU uses hydraulic pressure (or flow) from one system to drive a hydraulic motor coupled to a pump in a second, otherwise separate system -- transmitting hydraulic power across systems while keeping the fluid of each system physically separate, which helps preserve a degree of hydraulic power availability to a system that has lost its own primary source of pressurization.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An aircraft's pneumatic (bleed air) system, drawing compressed air from the engine compressor section, is typically used for",
    options: [
      "cabin pressurization and air conditioning, engine and wing anti-ice, and engine starting, among other pneumatically powered functions.",
      "flight control actuation exclusively, replacing hydraulic actuation entirely on aircraft equipped with a bleed air system.",
      "fuel tank pressurization only, serving no role in cabin environmental control or ice protection.",
      "hydraulic system pressurization exclusively, with no other use for bleed air anywhere else on the aircraft.",
    ],
    answer: 0,
    explain:
      "Bleed air tapped from the engine compressor is a genuinely multi-purpose resource on many transport aircraft: it supplies the air conditioning packs and pressurization system, provides hot air for wing and engine anti-ice, and is commonly used to pneumatically start the engines (cross-bleed or APU-supplied) -- distinct from hydraulic pressurization or flight control actuation, which are separate systems on aircraft not using an all-electric architecture.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The 'essential' electrical bus on a transport aircraft is specifically arranged so that",
    options: [
      "it carries the aircraft's non-essential cabin amenities, such as entertainment systems, while flight-critical equipment is deliberately excluded from it.",
      "it carries only the equipment needed for continued safe flight and landing, and can be powered from multiple possible sources (main generators, APU, or a battery/standby source) if the normal supply is lost.",
      "it is powered exclusively by the battery at all times, with no other possible source of power ever connected to it.",
      "it is physically identical to the main AC bus, with 'essential' being purely a naming convention carrying no functional distinction.",
    ],
    answer: 1,
    explain:
      "The essential bus concept exists to guarantee that the minimum equipment needed for continued safe flight and landing -- certain flight instruments, communication and navigation equipment, and similar items -- stays powered even through an electrical failure, by design allowing it to be fed from more than one possible source (normal generators, the APU generator, or ultimately the battery/standby system) rather than being tied to a single point of failure.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An oleo-pneumatic shock strut, used in most transport and many general aviation landing gear designs, absorbs landing and taxi shock loads primarily by",
    options: [
      "relying on a solid rubber block alone, with no hydraulic fluid or compressed gas involved in the strut's operation at all.",
      "relying entirely on tire deflection, with the strut itself playing no role in shock absorption.",
      "forcing hydraulic fluid through a metered orifice while compressing a charge of gas (typically nitrogen), dissipating energy through fluid flow restriction as the strut compresses and extends.",
      "relying on an electrically actuated damper, with hydraulic fluid and gas charge playing no part in a modern oleo strut design.",
    ],
    answer: 2,
    explain:
      "An oleo-pneumatic strut combines a gas charge (compressed nitrogen, providing the spring-like force that supports the aircraft's weight) with hydraulic fluid metered through an orifice (providing damping by resisting rapid strut movement) -- the orifice flow is what actually dissipates landing shock energy as heat, distinguishing it from a simple air spring or a purely mechanical automotive-style coil spring.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A landing gear squat switch (also called a weight-on-wheels switch) is used to",
    options: [
      "control brake application exclusively, with no connection to any other aircraft system or function.",
      "measure the aircraft's total weight for load-and-trim sheet purposes, replacing the need for any separate weight calculation.",
      "physically lock the landing gear in the extended position, replacing any separate mechanical downlock mechanism.",
      "signal to various aircraft systems whether the aircraft is on the ground or in the air, enabling or inhibiting functions such as gear retraction, spoiler deployment, or certain warning systems accordingly.",
    ],
    answer: 3,
    explain:
      "The squat switch senses strut compression (weight on the gear) and feeds an air/ground logic signal used throughout the aircraft's systems -- for example, inhibiting inadvertent gear retraction on the ground, enabling ground spoiler deployment on landing, or changing the logic of certain warning systems between ground and flight modes -- a logic signal, not itself a mechanical downlock, brake control, or weight-measurement device.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel crossfeed system, found on most multi-engine aircraft, allows",
    options: [
      "fuel from a tank normally dedicated to one engine to be routed to feed a different engine, useful for managing an asymmetric fuel state or after an engine or fuel system malfunction.",
      "fuel to be transferred directly between the aircraft and an external ground fuel truck without using a fuelling port.",
      "hydraulic fluid to be exchanged with fuel system components, sharing a common reservoir between the two systems.",
      "each engine to draw fuel exclusively from its own dedicated tank at all times, with crossfeed specifically preventing any tank from feeding another engine's system.",
    ],
    answer: 0,
    explain:
      "Crossfeed lets fuel intended for one engine's tank be directed to another engine instead, which is useful both for planned lateral fuel balancing and for managing situations such as a fuel leak, a failed engine-driven pump, or an engine shutdown where continuing to draw only from that engine's own tank would create an undesirable fuel imbalance -- the opposite of restricting each engine strictly to its own tank.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A cabin pressurization system's outflow valve is primarily responsible for",
    options: [
      "physically sealing the cabin completely once a target pressure is reached, stopping all further air exchange with the outside atmosphere.",
      "controlling the rate at which air is allowed to leave the pressurized cabin, and thereby regulating cabin pressure (and cabin altitude/rate of change) in conjunction with the air continuously being supplied by the pressurization source.",
      "regulating engine bleed air pressure at its source, rather than regulating anything downstream in the cabin itself.",
      "controlling the volume of air entering the cabin from the air conditioning packs, with cabin air exit uncontrolled and unrestricted at all times.",
    ],
    answer: 1,
    explain:
      "Cabin pressure is controlled by balancing continuous air inflow (from the packs/bleed air) against a metered outflow -- the outflow valve modulates how much air is allowed to leave the pressure vessel, and by opening or closing it the pressurization controller manages cabin altitude and its rate of change, rather than sealing the cabin shut or acting on the inflow side of the system.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A pneumatic de-ice boot, as used on the leading edges of some unpressurized and turboprop aircraft, protects against ice accretion by",
    options: [
      "heating the leading edge surface electrically to a temperature that prevents any ice from ever forming, functioning as an anti-ice rather than a de-ice system.",
      "increasing local airflow velocity over the leading edge enough that ice cannot adhere to the surface under any conditions.",
      "inflating and deflating in a cyclic pattern to mechanically crack and break away ice that has already formed, rather than preventing ice from forming in the first place.",
      "spraying a freezing-point-depressant fluid over the leading edge surface, identical in method to a TKS weeping-wing system.",
    ],
    answer: 2,
    explain:
      "Pneumatic boots are fundamentally a de-ice (rather than anti-ice) technology: they're allowed to accumulate a small amount of ice, then cyclically inflated with pneumatic pressure to flex the surface and mechanically crack and shed that ice, then deflated again -- distinct from electrothermal anti-ice (which prevents accretion by heating) or TKS fluid systems (which use a freezing-point-depressant fluid), and unrelated to airflow-velocity effects.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The essential functional difference between an anti-ice system and a de-ice system is that",
    options: [
      "anti-ice refers exclusively to windshield protection, while de-ice refers exclusively to wing and tail leading-edge protection.",
      "there is no meaningful functional difference between the two terms, which are simply interchangeable names for the same protection method.",
      "anti-ice systems are used only on the ground, while de-ice systems are used only in flight, with no overlap between the two operating regimes.",
      "anti-ice is intended to prevent ice from forming or accreting in the first place, while de-ice is intended to remove ice after it has already formed.",
    ],
    answer: 3,
    explain:
      "The anti-ice/de-ice distinction is about timing relative to ice formation, not about which surface or which phase of flight is involved: an anti-ice system (such as continuously heated leading edges) is run to keep ice from accreting at all, while a de-ice system (such as pneumatic boots) is allowed to let a small amount of ice build up before removing it -- either concept can, in principle, be applied to a windshield, a wing, a tail, or a propeller, depending on the specific system design.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A constant-speed propeller's governor automatically adjusts blade pitch angle primarily in order to",
    options: [
      "maintain a selected propeller RPM as engine power or airspeed changes, by varying blade angle (and thus the aerodynamic load on the propeller) to hold that RPM roughly constant.",
      "feather the propeller automatically any time engine power is reduced below cruise power, regardless of whether an engine failure has occurred.",
      "maintain a fixed blade angle at all times, with RPM allowed to vary freely with engine power and airspeed instead.",
      "control fuel flow to the engine directly, with blade angle itself remaining entirely unaffected by the governor's operation.",
    ],
    answer: 0,
    explain:
      "A constant-speed propeller's whole purpose is to decouple propeller RPM from blade angle in the way a fixed-pitch propeller cannot: the governor senses RPM and adjusts blade angle (via hydraulic oil pressure acting on the propeller hub, opposed by counterweights and/or a spring) to increase or decrease the propeller's aerodynamic load and hold RPM at the pilot-selected value across a range of power settings and airspeeds -- it doesn't act directly on fuel flow, and it doesn't feather automatically on ordinary power reductions.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A FADEC (Full Authority Digital Engine Control) system, fitted to many modern turbine engines, is characterized by",
    options: [
      "a system used exclusively for propeller pitch control, with no role in managing engine fuel flow or power settings.",
      "an electronic engine control computer with full authority over engine operating parameters (such as fuel flow), generally without a separate hydromechanical backup control retaining full authority of its own.",
      "a purely mechanical, hydromechanical fuel control unit with no electronic component involved in its operation at all.",
      "authority limited strictly to cockpit display functions, with no actual control over engine fuel flow or operating limits.",
    ],
    answer: 1,
    explain:
      "'Full authority' is the key distinguishing term: unlike earlier hydromechanical-primary designs with limited-authority electronic trim, a FADEC's digital engine control computer has complete authority over fuel scheduling and other engine operating parameters, optimizing performance and enforcing operating limits, typically without a separate hydromechanical system that could independently take over full control -- it is fundamentally an engine fuel/power control concept, not a display-only or propeller-only system.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Two common types of thrust reverser design used on turbofan engines are",
    options: [
      "the spoiler type and the flap type, both of which act on wing airflow rather than on engine exhaust or bypass air.",
      "the oleo type and the trailing-link type, both of which are landing gear shock strut designs rather than thrust reverser designs.",
      "the cascade type, which redirects bypass fan air forward through openings in the engine cowling via a system of vanes, and the clamshell/bucket-door type, which mechanically blocks and redirects the exhaust flow forward.",
      "the pneumatic boot type and the electrothermal type, both of which are ice protection technologies rather than thrust reverser designs.",
    ],
    answer: 2,
    explain:
      "Cascade-type reversers (common on high-bypass turbofans) open blocker doors that divert the bypass fan airflow through fixed cascade vanes angled to redirect thrust forward, while clamshell (or bucket) type reversers use hinged doors that physically rotate into the exhaust path to block and turn the flow forward -- distinct concepts from wing spoilers/flaps, ice protection systems, or landing gear shock strut designs, which serve entirely different purposes.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Galvanic corrosion, one of several corrosion mechanisms of concern in aircraft structures, occurs when",
    options: [
      "a composite structure is exposed to ultraviolet light, with the resulting damage classified as galvanic corrosion regardless of any metal content.",
      "a single metal is exposed to dry air with no moisture present at all, with corrosion proceeding purely from oxygen exposure and no electrolyte involved.",
      "two identical, chemically matched metals are joined together, with the corrosion arising purely from mechanical fatigue rather than any electrochemical process.",
      "two dissimilar metals are in direct electrical contact in the presence of an electrolyte (such as moisture), causing one metal to corrode preferentially as current flows between them.",
    ],
    answer: 3,
    explain:
      "Galvanic corrosion is specifically an electrochemical process requiring both dissimilar metals (with different electrochemical potentials) and an electrolyte to complete the circuit between them -- moisture (including humid air, condensation, or contamination) commonly serves as that electrolyte -- and it's why aircraft manufacturers take care with dissimilar-metal contact, isolating fasteners and fittings, and protective coatings at such interfaces, unlike UV degradation of composites or fatigue cracking, which are separate damage mechanisms.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An auxiliary power unit (APU), compared to ground power and air-start equipment, offers the operational advantage of",
    options: [
      "allowing the aircraft to be self-sufficient for electrical power, pneumatic (bleed) air, and often engine starting, without needing external ground support equipment to be connected.",
      "being usable only while at least one main engine is already running, offering no independent power source of its own.",
      "providing hydraulic power exclusively, with no capability to supply electrical power or pneumatic air to the aircraft.",
      "being certified for use only while the aircraft is airborne, with ground operation of the APU prohibited entirely.",
    ],
    answer: 0,
    explain:
      "An APU is essentially a small, self-contained gas turbine engine, typically mounted in the tail, that lets the aircraft generate its own electrical power and bleed air (and, via that bleed air, start the main engines) independent of ground power carts or air-start units -- valuable at aerodromes without such ground support equipment, and, on many types, available for at least limited use in flight as well as on the ground, unlike hydraulic-only or airborne-only equipment.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine-driven AC generator's constant-speed drive (CSD), or integrated drive generator (IDG) combining the two into one unit, exists because",
    options: [
      "the engine's rotational speed is already constant at all power settings, making the constant-speed drive purely redundant equipment with no real function.",
      "the generator must be driven at a constant rotational speed to produce stable-frequency AC power, while the engine (and its accessory gearbox) itself operates across a range of RPM as power setting changes.",
      "the constant-speed drive's sole purpose is mechanical lubrication of the generator bearings, with no role in regulating output frequency.",
      "the generator otherwise produces DC power only, with the constant-speed drive being what converts that DC output into usable AC power.",
    ],
    answer: 1,
    explain:
      "AC power at a stable frequency (typically 400 Hz on many aircraft systems) requires the generator itself to spin at a constant speed, but the engine's accessory gearbox speed varies with engine RPM across the power range -- a CSD (a hydromechanical unit) or an IDG (combining the CSD and generator into a single sealed unit) absorbs that variation and delivers constant output speed to the generator, which is a fundamentally different function from DC-to-AC conversion or simple bearing lubrication.",
    reference: "TP 690 Section 2 - Airframes, Power Plants, Propellers and Aircraft Systems",
  },
];
