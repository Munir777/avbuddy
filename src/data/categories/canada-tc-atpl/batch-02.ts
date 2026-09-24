import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 2 -- Section 2: Airframes, Power
// Plants, Propellers and Aircraft Systems. Original questions written from
// general turbine-aircraft systems knowledge and the TP 690 syllabus
// (which lists topic headings only, no sample questions). Not transcribed
// or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_02_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Full Authority Digital Engine Control (FADEC) manages engine operation using",
    options: [
      "control of fuel scheduling only, with every other engine parameter still set manually by the crew.",
      "a digital system that always reverts automatically to a hydromechanical backup control if the primary channel fails.",
      "a digital electronic control system with no separate hydromechanical backup, so a failure of that control typically means the loss of control of that engine's fuel scheduling rather than reversion to a manual mode.",
      "a purely mechanical and hydraulic governor system, with digital instrumentation used only for cockpit display.",
    ],
    answer: 2,
    explain:
      "'Full authority' is the operative word: FADEC has complete authority over the engine, with no separate non-digital backup mode -- unlike earlier 'supervisory' digital systems that retained a hydromechanical backup channel. Most FADEC units are internally dual-channel for redundancy, but that is a different thing from an independent manual backup.",
    reference: "TP 690 Section 2 - Full Authority Digital Engine Control (FADEC)",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A constant-speed propeller maintains a selected RPM primarily by",
    options: [
      "varying the number of blades exposed to the airflow during flight.",
      "holding a fixed blade angle and relying entirely on the engine's own RPM limiter.",
      "varying engine fuel flow directly, independent of the propeller itself.",
      "varying the propeller's blade pitch angle in response to changes in power or airspeed, through the action of the propeller governor.",
    ],
    answer: 3,
    explain:
      "A constant-speed unit governs propeller RPM by adjusting blade pitch: coarsening pitch to prevent overspeed as power or airspeed increases, and fining pitch to prevent underspeed as they decrease, keeping RPM at the selected value across a range of conditions.",
    reference: "TP 690 Section 2 - Propellers, Constant Speed",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Feathering a propeller after an engine failure is done primarily to",
    options: [
      "minimize drag, by turning the blades close to parallel with the airflow -- a windmilling propeller left at a normal pitch angle produces significant drag.",
      "increase drag deliberately, to help slow the aircraft during an emergency descent.",
      "prevent the propeller from producing any thrust at all in the direction opposite to flight.",
      "allow the engine to be restarted more quickly using the propeller's rotational momentum.",
    ],
    answer: 0,
    explain:
      "An unfeathered, windmilling propeller after an engine failure creates substantial drag and asymmetric handling problems on a multi-engine aircraft. Feathering turns the blades close to edge-on to the relative airflow, minimizing that drag.",
    reference: "TP 690 Section 2 - Propellers, Feathering",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Reversing a propeller for use after landing is achieved by",
    options: [
      "physically reversing the direction the propeller and engine rotate.",
      "rotating the blades to a negative pitch angle, so the propeller generates thrust opposite to the aircraft's direction of travel.",
      "increasing blade pitch to its maximum, coarsest angle.",
      "disconnecting the propeller governor and allowing the blades to feather.",
    ],
    answer: 1,
    explain:
      "Reverse thrust on a propeller-driven aircraft is produced by moving the blades into a negative pitch range, not by reversing the direction of rotation -- the propeller and engine keep turning the same way; it's the blade angle that changes.",
    reference: "TP 690 Section 2 - Propellers, Reversing",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Asymmetric propeller thrust ('P-factor') is most pronounced when the aircraft is operating at",
    options: [
      "idle power only, regardless of the aircraft's angle of attack.",
      "low power, low angle of attack, and high airspeed, such as during a high-speed cruise descent.",
      "high power, high angle of attack, and relatively low airspeed, such as during take-off or a go-around.",
      "any power setting, provided the aircraft is above its manoeuvring speed.",
    ],
    answer: 2,
    explain:
      "P-factor arises because the descending propeller blade has a higher angle of attack (and thus more thrust) than the ascending blade when the propeller disc is inclined to the relative airflow -- an effect that grows with power and angle of attack and shrinks as airspeed increases, making it most pronounced at high-power, low-speed, high-AoA conditions like take-off.",
    reference: "TP 690 Section 2 - Propellers, Slipstream, Gyroscopic Effect and Asymmetric Thrust",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The primary aerodynamic benefit of winglets is to",
    options: [
      "increase the stall angle of attack across the entire wing.",
      "reduce parasite drag by streamlining the wingtip itself.",
      "increase the aircraft's critical Mach number by delaying shock wave formation.",
      "reduce induced drag by disrupting the formation of the wingtip vortex.",
    ],
    answer: 3,
    explain:
      "Winglets act like an increase in effective aspect ratio, weakening the wingtip vortex that would otherwise form as high-pressure air below the wing spills around the tip to the lower-pressure air above it -- this reduces induced drag, which matters most at the lower speeds and higher lift coefficients typical of climb.",
    reference: "TP 690 Section 2 - Wing Systems, Winglets",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Vortex generators fitted to a wing or tail surface work by",
    options: [
      "energizing the boundary layer, which delays airflow separation at higher angles of attack or lower speeds.",
      "increasing the wing's total surface area to generate additional lift.",
      "acting as a mechanical stall warning device that vibrates at high angle of attack.",
      "reducing the wingtip vortex that is responsible for induced drag.",
    ],
    answer: 0,
    explain:
      "Vortex generators are small vanes that create tiny, energetic vortices, mixing higher-energy air from outside the boundary layer into the slower air close to the surface. That keeps the boundary layer attached longer, delaying flow separation to a higher angle of attack than the plain surface would otherwise achieve.",
    reference: "TP 690 Section 2 - Wing Systems, Vortex Generators",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Mass balancing of a flight control surface is primarily intended to prevent",
    options: [
      "control surface icing, by shifting weight away from the leading edge.",
      "flutter, an uncontrolled and potentially destructive oscillation arising from the coupling of aerodynamic, inertial, and elastic forces.",
      "excessive control forces at high airspeed.",
      "asymmetric deployment of the surface during normal operation.",
    ],
    answer: 1,
    explain:
      "Flutter results from an unfavourable coupling between a control surface's aerodynamic loads, its own inertia, and the elastic stiffness of its structure. Mass balancing shifts the surface's centre of gravity (often forward, toward or ahead of the hinge line) to break that coupling and raise the speed at which flutter would otherwise onset.",
    reference: "TP 690 Section 2 - Flight Controls, Flutter and Mass Balance",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The distinction commonly drawn between 'speed brakes' and 'spoilers' on a transport aircraft is that",
    options: [
      "spoilers reduce drag, while speed brakes increase lift.",
      "speed brakes are used only on the ground, while spoilers are used only in flight.",
      "speed brakes are deployed symmetrically to increase drag, while some or all of the same panels can also deploy asymmetrically as roll spoilers to supplement the ailerons.",
      "speed brakes are hydraulically actuated while spoilers are electrically actuated, with no other functional difference.",
    ],
    answer: 2,
    explain:
      "On most transport types, the same panels serve both roles: deployed together (symmetrically) they act as a speed brake to increase drag and steepen the descent path or act as lift dumpers on landing, while deployed differentially they supplement roll control alongside the ailerons.",
    reference: "TP 690 Section 2 - Flight Controls, Speed Brakes and Spoilers",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Ailerons, the elevator (or stabilator), and the rudder are generally classified as",
    options: [
      "primary flight controls only when hydraulically actuated -- manually actuated versions are classified as secondary.",
      "secondary flight controls, since flaps and trim are considered the true primary controls.",
      "neither primary nor secondary, since that classification applies only to high-lift devices.",
      "primary flight controls, since they provide control about the three axes of the aeroplane.",
    ],
    answer: 3,
    explain:
      "Primary flight controls are those that directly provide control about the aircraft's three axes: ailerons for roll, elevator/stabilator for pitch, and rudder for yaw. Flaps, slats, trim systems, and speed brakes are secondary/auxiliary controls -- they modify lift, drag, or control forces rather than providing primary axis control.",
    reference: "TP 690 Section 2 - Flight Controls, Primary/Secondary Flight Controls",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Compared to a turbojet or turbofan, a turbo-prop engine generally provides",
    options: [
      "more rapid thrust response to throttle movement, since propeller thrust changes quickly as blade angle and RPM respond to power lever inputs.",
      "identical throttle response characteristics, since both use the same core gas-generator principles.",
      "slower thrust response than a turbojet, due to the added rotational inertia of the propeller and reduction gearbox.",
      "no usable thrust below a minimum RPM, unlike a turbojet, which produces thrust at any RPM above idle.",
    ],
    answer: 0,
    explain:
      "A turbo-prop's propeller can change thrust output quickly through pitch and RPM changes even while the gas-generator core itself is spooling more slowly, giving it noticeably crisper throttle response than a pure turbojet/turbofan, whose thrust is tied directly to core spool speed.",
    reference: "TP 690 Section 2 - Power Plants, Handling Procedures for Turbo-prop Engines",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "'Spool-up lag' in a turbojet or turbofan engine refers to",
    options: [
      "the delay in oil pressure rising after engine start.",
      "the delay between advancing the throttle and the engine reaching the corresponding thrust, caused by the rotational inertia of the compressor/turbine spool(s).",
      "the lag between selecting reverse thrust and the thrust reversers physically deploying.",
      "the time required for the FADEC's software to initialize after engine start.",
    ],
    answer: 1,
    explain:
      "Because the compressor and turbine assembly has significant rotational inertia, a turbojet/turbofan core takes a perceptible time to accelerate from a lower RPM (e.g. idle or approach power) to the higher RPM that corresponds to a new throttle setting -- this is spool-up lag, and it's most operationally significant when rapid thrust is needed from a low power setting, such as a go-around.",
    reference: "TP 690 Section 2 - Power Plants, Handling and Procedures for Turbo-jet Engines",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Engine Pressure Ratio (EPR) is a measure of",
    options: [
      "the ratio of fuel flow to airflow through the engine core.",
      "the ratio of oil pressure to oil temperature.",
      "the ratio of turbine discharge (exhaust) pressure to compressor inlet pressure, used as an indication of thrust being produced.",
      "the ratio of N1 to N2 rotational speeds.",
    ],
    answer: 2,
    explain:
      "EPR compares exhaust (turbine discharge) total pressure to inlet total pressure and correlates well with the thrust a turbojet/turbofan is producing, which is why some manufacturers use it (rather than N1) as the primary thrust-setting parameter.",
    reference: "TP 690 Section 3 - Engine Instruments, EPR",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "In a turbine engine's oil system, the oil's primary purposes are to",
    options: [
      "act as the sole medium for fuel-air mixing before combustion.",
      "provide hydraulic power for the aircraft's flight controls.",
      "provide the primary source of cooling for the combustion chamber itself.",
      "lubricate and cool the bearings and gears, and in some installations also actuate components such as the propeller pitch-change mechanism.",
    ],
    answer: 3,
    explain:
      "Turbine engine oil systems lubricate and cool the main bearings and accessory gearing, and on many turboprop installations the same oil supply also drives the propeller's pitch-change mechanism -- distinct from the aircraft's separate hydraulic system, which serves the flight controls and landing gear.",
    reference: "TP 690 Section 2 - Power Plants, Oil Systems",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A fuel crossfeed system on a multi-engine aircraft is used to",
    options: [
      "allow fuel normally feeding one engine to be supplied to another engine instead, useful for managing a fuel imbalance or after a tank- or engine-related failure.",
      "transfer fuel between the main tanks and the APU only.",
      "automatically dump excess fuel overboard during an emergency descent.",
      "prevent fuel from any one tank from ever being used by more than one engine, as a safety interlock.",
    ],
    answer: 0,
    explain:
      "Crossfeed lets fuel from any tank feed any engine, which is what makes it possible to correct a lateral fuel imbalance or to keep both engines supplied if one tank or fuel system develops a problem -- the opposite of an interlock that would restrict a tank to a single engine.",
    reference: "TP 690 Section 2 - Aircraft Systems, Fuel",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The 'essential' (or emergency) electrical bus on a transport aircraft is designed to",
    options: [
      "supply power exclusively to the autopilot, with every other system on a separate bus.",
      "remain powered by a limited, high-priority set of sources (such as a battery or a dedicated generator), so flight-critical equipment stays available after a major generation failure.",
      "replace the need for a battery entirely during normal operations.",
      "supply power only to cabin lighting and passenger entertainment systems.",
    ],
    answer: 1,
    explain:
      "Electrical load-shedding architecture is built around the idea that if most generation sources are lost, a small, carefully chosen set of flight-critical items (essential flight instruments, communication, essential lighting, and so on) keeps functioning on the essential bus, fed by a battery or standby source, rather than everything failing together.",
    reference: "TP 690 Section 2 - Aircraft Systems, Electrical",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Transport aircraft typically use multiple independent hydraulic systems primarily to",
    options: [
      "reduce the total weight of hydraulic fluid carried compared with a single larger system.",
      "let each system operate at a different pressure for entirely unrelated purposes.",
      "provide redundancy, so a single hydraulic system failure does not cause the loss of flight control or other critical hydraulically powered functions.",
      "allow a single, larger hydraulic pump to be shared across all engines.",
    ],
    answer: 2,
    explain:
      "Redundancy is the point: critical functions like primary flight controls, landing gear, and brakes are typically powered from more than one independent hydraulic system, so that losing one system (a leak, a pump failure) still leaves the aircraft controllable through the remaining system(s).",
    reference: "TP 690 Section 2 - Aircraft Systems, Hydraulic",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Bleed air tapped from a turbine engine's compressor is typically used for",
    options: [
      "cooling the engine's combustion chamber only.",
      "pressurizing the hydraulic reservoirs only.",
      "powering the primary flight control surfaces directly.",
      "cabin pressurization and air conditioning, engine and airframe anti-ice/de-ice systems, and engine starting.",
    ],
    answer: 3,
    explain:
      "Pneumatic (bleed air) systems distribute hot, high-pressure air drawn from the engine compressor stages to a range of consumers -- pressurization and air conditioning packs, wing and engine anti-ice, and cross-bleed engine starting -- rather than powering flight controls, which are typically hydraulic or electric.",
    reference: "TP 690 Section 2 - Aircraft Systems, Pneumatic",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An engine fire extinguishing system on a transport aircraft is typically designed to allow",
    options: [
      "discharge of a limited number of extinguisher bottles (often two) into a selected engine, giving the crew more than one attempt if the fire persists after the first discharge.",
      "discharge only into the APU compartment, since engine fires are handled by shutting off fuel alone.",
      "continuous, unlimited discharge of extinguishing agent into all engines simultaneously.",
      "fully automatic discharge with no crew action required, in every case.",
    ],
    answer: 0,
    explain:
      "A typical installation provides two extinguisher bottles per protected zone that the crew can selectively discharge into the affected engine (or APU), one at a time -- not an unlimited or fully automatic system, and not something limited to the APU alone.",
    reference: "TP 690 Section 2 - Aircraft Systems, Fire Protection",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The distinction between an 'anti-ice' system and a 'de-ice' system is that",
    options: [
      "anti-ice systems are used only on the ground, while de-ice systems are used only in flight.",
      "anti-ice systems prevent ice from forming in the first place (e.g. continuously heated surfaces), while de-ice systems allow a limited amount of ice to accumulate before removing it (e.g. cyclically inflated pneumatic boots).",
      "de-ice systems prevent ice formation, while anti-ice systems remove ice after it has formed.",
      "there is no meaningful operational difference; the two terms are interchangeable.",
    ],
    answer: 1,
    explain:
      "Anti-ice systems (continuously heated leading edges, for example) are run before or as ice would start forming, to prevent accumulation. De-ice systems, such as pneumatic boots, are deliberately allowed to let a small amount of ice build up before cycling to crack and shed it -- the two approaches work on opposite timing relative to ice formation.",
    reference: "TP 690 Section 2 - Aircraft Systems, Ice and Rain Protection",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "Supplemental oxygen requirements for flight crew in a pressurized aeroplane are generally more stringent than for passengers because",
    options: [
      "there is actually no meaningful difference between crew and passenger oxygen requirements.",
      "passengers are assumed to be met by a ground-based emergency service on landing, making in-flight oxygen unnecessary for them.",
      "crew members must remain capable of performing critical duties throughout a depressurization event, including at higher cabin altitudes and for longer durations than passengers typically require.",
      "crew oxygen systems are inherently less reliable than passenger drop-down systems, requiring more redundancy.",
    ],
    answer: 2,
    explain:
      "Crew oxygen requirements are built around maintaining useful consciousness and the ability to fly the aircraft and manage an emergency descent -- a materially higher bar than simply preventing serious harm to passengers during the same event, which is why crew provisions (quick-donning masks, continuous-flow requirements at certain altitudes, longer duration) are more demanding.",
    reference: "TP 690 Section 2 - Aircraft Systems, Oxygen",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The 'cabin altitude' of a pressurized aircraft in cruise refers to",
    options: [
      "the actual flight altitude of the aircraft, expressed in feet.",
      "the maximum certified altitude for the aircraft type, regardless of the altitude actually being flown.",
      "the altitude at which the cabin was pressurized on the ground before departure.",
      "the equivalent pressure altitude inside the cabin, which is normally maintained well below the aircraft's actual flight altitude.",
    ],
    answer: 3,
    explain:
      "The pressurization system keeps the cabin's internal pressure equivalent to a much lower altitude than the aircraft is actually flying at (commonly around 6,000-8,000 ft even when the aircraft is at FL350+), which is why cabin altitude and flight altitude are two distinct numbers that shouldn't be confused.",
    reference: "TP 690 Section 2 - Aircraft Systems, Heating, Air Conditioning and Pressurization",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An anti-skid (anti-lock) braking system on a transport aircraft functions primarily to",
    options: [
      "modulate brake pressure to prevent a wheel from locking up and skidding, maximizing effective braking friction, especially on a contaminated runway.",
      "equalize hydraulic pressure between the main gear and the nose gear brakes only.",
      "prevent the landing gear from retracting while weight is still on the wheels.",
      "automatically apply maximum braking as soon as the wheels spin up after touchdown, regardless of runway condition.",
    ],
    answer: 0,
    explain:
      "A locked, skidding wheel produces less effective braking friction than one kept just short of locking -- anti-skid systems sense wheel deceleration and release/reapply brake pressure to keep each wheel near its peak braking friction, which matters most when the runway is wet, icy, or otherwise contaminated.",
    reference: "TP 690 Section 2 - Aircraft Systems, Landing Gear and Brakes",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "An autothrottle (or autothrust) system is primarily used to",
    options: [
      "automatically select the appropriate engine for single-engine operation after a failure.",
      "automatically adjust engine thrust to maintain a selected speed, thrust setting, or other target, reducing crew workload across various phases of flight.",
      "replace the need for the autopilot to control pitch and roll.",
      "automatically set the parking brake after landing.",
    ],
    answer: 1,
    explain:
      "Autothrottle/autothrust manages thrust the way the autopilot manages pitch and roll -- holding a target speed or thrust value automatically -- and normally works together with, not instead of, the autopilot's pitch/roll functions.",
    reference: "TP 690 Section 2 - Aircraft Systems, Autoflight",
  },
  {
    id: 25,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The Cockpit Voice Recorder (CVR) and Flight Data Recorder (FDR) are required to be powered such that they",
    options: [
      "operate only when specifically activated by the crew during an emergency.",
      "are automatically erased at the end of each flight to protect crew privacy.",
      "continue recording throughout the period of flight required by regulation, capturing data leading up to and immediately following an abnormal event.",
      "record only engine parameters, with cockpit audio and flight control data captured by separate, unrelated systems.",
    ],
    answer: 2,
    explain:
      "CVR/FDR value comes precisely from recording continuously through normal operation, so that if an abnormal event occurs, the data covering the lead-up to and aftermath of that event is already captured -- a crew-activated-only system would defeat that purpose.",
    reference: "TP 690 Section 2 - Aircraft Systems, Voice/Flight Data Recording",
  },
  {
    id: 26,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A master warning (or master caution) system on a modern flight deck is designed to",
    options: [
      "automatically correct the underlying fault without any crew intervention.",
      "function only while the aircraft is on the ground.",
      "replace the need for individual system annunciator lights or messages.",
      "draw the crew's attention to the presence of a warning or caution condition, directing them to the relevant system display for further detail.",
    ],
    answer: 3,
    explain:
      "Master warning/caution lights and aural tones act as an attention-getter that something needs the crew's attention, prompting them to check the relevant system page or annunciator panel for the specific fault -- they summarize that something is wrong, they don't fix it or replace the detailed indications.",
    reference: "TP 690 Section 2 - Warning and Protection Systems, Master Warning Systems",
  },
  {
    id: 27,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "The distinction between a stick shaker and a stick pusher is that",
    options: [
      "a stick shaker provides a stall warning by vibrating the control column, while a stick pusher actively moves the control column forward to help prevent or recover from an actual stall.",
      "both perform the same function; the terms just reflect different manufacturers' naming conventions.",
      "a stick pusher provides a warning only, while a stick shaker actively changes the aircraft's pitch attitude.",
      "a stick shaker is used only during pre-flight checks on the ground, while a stick pusher is used only in flight.",
    ],
    answer: 0,
    explain:
      "A stick shaker is a warning device -- it vibrates the control column as the aircraft approaches the stall angle of attack, giving the pilot a chance to react. A stick pusher is a stall identification/protection device -- it applies a forward force on the controls (sometimes overridable, sometimes not, depending on the aircraft) to actively reduce angle of attack if the aircraft reaches a more critical condition.",
    reference: "TP 690 Section 2 - Warning and Protection Systems, Stall Warning/Identification/Protection",
  },
  {
    id: 28,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Terrain Awareness and Warning System (TAWS), also known by its earlier name Ground Proximity Warning System (GPWS), provides alerts based on factors that include",
    options: [
      "the aircraft's weight and balance being outside certified limits.",
      "excessive rate of descent, excessive terrain closure rate, and descent below the glideslope, among other modes.",
      "cabin altitude exceeding a safe threshold.",
      "engine parameters exceeding their certified operating limits.",
    ],
    answer: 1,
    explain:
      "TAWS/GPWS combines several dedicated warning 'modes,' each targeting a different unsafe proximity-to-terrain scenario -- excessive descent rate, excessive terrain closure rate, unsafe terrain clearance, descent below glideslope, and (for the enhanced/EGPWS versions) a forward-looking terrain database. None of the distractor items are what these systems monitor.",
    reference: "TP 690 Section 2 - Warning and Protection Systems, TAWS/GPWS/EGPWS",
  },
  {
    id: 29,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A take-off configuration warning system alerts the crew when",
    options: [
      "the outside air temperature exceeds the engine's flat-rated temperature limit.",
      "the aircraft's weight exceeds its maximum certified take-off weight.",
      "the throttles are advanced for take-off while one or more required systems (such as flaps, trim, or spoilers) are not in the correct take-off configuration.",
      "the runway remaining is insufficient for the calculated take-off distance.",
    ],
    answer: 2,
    explain:
      "Take-off configuration warnings are triggered by throttle advancement (i.e. an actual take-off attempt) combined with one or more monitored items -- flaps, trim, spoilers, parking brake, among others depending on the type -- being out of the position required for take-off. It's a configuration check, not a performance, weight, or weather check.",
    reference: "TP 690 Section 2 - Warning and Protection Systems, Take-off/Configuration Test/Warnings",
  },
  {
    id: 30,
    subject: "Canada TC ATPL",
    system: "Airframes, Power Plants, Propellers and Aircraft Systems",
    q: "A Minimum Equipment List (MEL) is used to",
    options: [
      "list the equipment required to be installed on every flight, with no exceptions permitted.",
      "specify equipment that must be carried in addition to the aircraft's type-certificate requirements, for marketing purposes.",
      "record routine maintenance completed on the aircraft, independent of any dispatch decision.",
      "identify equipment that may be inoperative for dispatch, subject to specified conditions or limitations, without compromising an acceptable level of safety.",
    ],
    answer: 3,
    explain:
      "The MEL is a dispatch tool: it lists items that may be unserviceable and still allow the aircraft to be legally dispatched, each entry carrying its own conditions (operational limitations, maintenance procedures, or a time limit for repair) -- it is not a maintenance log, and it does not describe every piece of equipment required to exist on the aircraft.",
    reference: "TP 690 Section 2 - Serviceability, Unserviceabilities, Snags, Minimum Equipment List",
  },
];
