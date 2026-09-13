import type { Question } from "../../../types";

// General aviation knowledge - Performance & Principles of Flight.
// Original questions written from general, widely-published aviation
// performance and principles-of-flight knowledge, not copied from any
// single source document. No company, brand, or publisher names appear
// anywhere below.
export const PERFORMANCE_PRINCIPLES_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "During a multi-engine take-off, what does V1 represent?",
    options: [
      "The maximum speed at which the take-off can be rejected and stopped within the accelerate-stop distance",
      "The speed at which the aircraft first becomes airborne",
      "The minimum speed for the aircraft to safely rotate",
      "The speed at which flaps must be retracted",
    ],
    answer: 0,
    explain:
      "V1 is the decision speed: the maximum speed at which a rejected take-off can be initiated and the aircraft brought to a stop within the calculated accelerate-stop distance. Above V1, the take-off must be continued even after an engine failure.",
    reference: "Performance - Take-off Speed Definitions",
  },
  {
    id: 2,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What does VMCG represent?",
    options: [
      "The minimum control speed on the ground following a sudden critical-engine failure during take-off roll",
      "The minimum speed at which the aircraft can be controlled in flight with the critical engine inoperative",
      "The speed at which the nosewheel is expected to lift off",
      "The maximum ground taxi speed permitted",
    ],
    answer: 0,
    explain:
      "VMCG is the minimum speed, during the take-off roll, at which directional control can still be maintained using aerodynamic controls alone (rudder), typically without relying on nosewheel steering, after a sudden critical-engine failure - it is an airborne counterpart, VMCA, for control in flight.",
    reference: "Performance - Minimum Control Speeds",
  },
  {
    id: 3,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What does VMCA represent?",
    options: [
      "The minimum speed in flight at which directional control can be maintained with the critical engine inoperative and the remaining engine(s) at take-off thrust",
      "The maximum speed for safe single-engine flight",
      "The stalling speed with the critical engine inoperative",
      "The speed at which the landing gear must be retracted",
    ],
    answer: 0,
    explain:
      "VMCA is the minimum flight speed at which the aircraft can still be controlled directionally (using no more than a defined bank angle toward the operating engine) with the critical engine suddenly made inoperative and the remaining engine(s) producing take-off thrust.",
    reference: "Performance - Minimum Control Speeds",
  },
  {
    id: 4,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is meant by a 'balanced field length' take-off calculation?",
    options: [
      "A condition where the accelerate-stop distance equals the accelerate-go distance",
      "A runway that is exactly the same length in both directions",
      "A take-off where thrust is balanced equally across all engines",
      "A runway with identical slope in both directions",
    ],
    answer: 0,
    explain:
      "A balanced field length take-off is one where V1 is chosen so that the distance needed to reject the take-off and stop (accelerate-stop distance) equals the distance needed to continue after an engine failure and reach screen height (accelerate-go distance) - giving equal margins whichever choice is made at V1.",
    reference: "Performance - Take-off Field Length Concepts",
  },
  {
    id: 5,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "For twin-engine aircraft not holding extended-range (ETOPS-style) approval, what is the commonly applied diversion time limit for enroute route planning away from a suitable aerodrome?",
    options: [
      "60 minutes at one-engine-inoperative cruise speed",
      "180 minutes at all-engines cruise speed",
      "15 minutes at all-engines cruise speed",
      "There is no limit for twin-engine aircraft",
    ],
    answer: 0,
    explain:
      "Without extended-range approval, twin-engine aircraft are generally restricted to routes that keep them within about 60 minutes (at one-engine-inoperative cruise speed) of a suitable diversion aerodrome at all times - extended-range approval allows this to be increased substantially.",
    reference: "Performance - Route Planning & Diversion Limits",
  },
  {
    id: 6,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is the purpose of a 'drift-down' procedure?",
    options: [
      "To safely descend to a sustainable altitude following an engine failure at cruise, using the reduced climb/cruise capability of the remaining engine(s)",
      "To intentionally lose altitude quickly during an emergency descent for decompression",
      "To reduce speed gradually before starting an approach",
      "To descend below cloud base for a visual approach",
    ],
    answer: 0,
    explain:
      "Drift-down describes the controlled descent flown after an engine failure at cruise altitude, easing down to whatever altitude the remaining engine(s) can sustain in level flight, following a profile designed to maximize obstacle clearance along the way.",
    reference: "Performance - Engine-Failure Cruise Procedures",
  },
  {
    id: 7,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "As aircraft mass decreases during cruise, how does the optimum cruise altitude generally change?",
    options: [
      "It generally increases",
      "It generally decreases",
      "It stays exactly the same regardless of mass",
      "It becomes unpredictable",
    ],
    answer: 0,
    explain:
      "As fuel burns off and mass decreases, less lift (and therefore less induced drag) is needed to maintain level flight, so the most efficient cruise altitude generally rises with time - which is why aircraft often plan step climbs during a long cruise.",
    reference: "Performance - Cruise Altitude Optimization",
  },
  {
    id: 8,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Why is a reduced (flexible/derated) take-off thrust setting generally not used on a contaminated runway?",
    options: [
      "Because it would reduce the safety margins already narrowed by the contaminated surface's degraded performance",
      "Because reduced thrust settings are mechanically impossible to set on a contaminated runway",
      "Because it always damages the engines when used on a wet or contaminated surface",
      "Because air traffic control regulations forbid it outright in all jurisdictions",
    ],
    answer: 0,
    explain:
      "A contaminated runway already reduces available accelerate-stop margins (through degraded braking and possible drag/spray effects), so reduced-thrust take-offs, which themselves trade away performance margin for engine life, are generally not permitted when that margin is already eroded.",
    reference: "Performance - Reduced Thrust Take-off Limitations",
  },
  {
    id: 9,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does a higher outside air temperature (OAT) generally affect an aircraft's climb performance?",
    options: [
      "It generally reduces both climb angle and climb rate",
      "It generally improves both climb angle and climb rate",
      "It has no effect on climb performance",
      "It improves climb rate but reduces climb angle only",
    ],
    answer: 0,
    explain:
      "Higher OAT reduces air density, which reduces engine thrust output (and propeller/fan efficiency) while also increasing true airspeed for a given indicated airspeed - the net effect is reduced excess thrust/power available, degrading both climb angle and climb rate.",
    reference: "Performance - Temperature Effects on Climb Performance",
  },
  {
    id: 10,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Moving the center of gravity aft (within approved limits) generally has what effect on an aircraft's cruise performance?",
    options: [
      "It reduces induced drag and can improve range and fuel efficiency, at some cost to longitudinal stability",
      "It always increases induced drag and reduces range",
      "It has no measurable effect on performance or stability",
      "It improves stability but has no effect on drag",
    ],
    answer: 0,
    explain:
      "An aft CG generally requires less nose-down trim (less download from the tailplane), reducing the lift the wing must generate and therefore reducing induced drag, which can improve range and fuel efficiency - though it comes at the cost of reduced longitudinal stability compared with a more forward CG.",
    reference: "Performance - Centre of Gravity Effects",
  },
  {
    id: 11,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Which of the following generally increases an aircraft's stalling speed?",
    options: [
      "An increase in load factor, such as during a steep turn",
      "A decrease in aircraft weight",
      "Deploying flaps to a landing setting",
      "Flying at a more aft center of gravity",
    ],
    answer: 0,
    explain:
      "Stalling speed increases with the square root of load factor, so maneuvers that increase load factor (such as a steep turn or pull-up) raise the stalling speed - by contrast, lower weight, flap extension, and a more aft CG each tend to reduce stalling speed rather than increase it.",
    reference: "Performance - Stalling Speed Factors",
  },
  {
    id: 12,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is 'ground effect' and how does it generally influence an aircraft close to the surface?",
    options: [
      "A reduction in induced drag and increase in effective lift when flying very close to the ground",
      "An increase in induced drag when flying close to the ground",
      "A phenomenon that only affects helicopters, not fixed-wing aircraft",
      "An effect that only occurs above the tropopause",
    ],
    answer: 0,
    explain:
      "Ground effect occurs when an aircraft flies within roughly a wingspan of the surface: the ground restricts the formation of wingtip vortices and downwash, reducing induced drag and effectively increasing lift for a given angle of attack - which is why aircraft can 'float' during landing flare.",
    reference: "Performance - Ground Effect",
  },
  {
    id: 13,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is meant by the critical Mach number (Mcrit) of a wing?",
    options: [
      "The freestream Mach number at which airflow over some part of the wing first reaches Mach 1, even though the aircraft itself is still flying below Mach 1",
      "The Mach number at which the aircraft's stall speed is reached",
      "The maximum Mach number the aircraft is structurally certified to reach",
      "The Mach number at which cabin pressurization must be reduced",
    ],
    answer: 0,
    explain:
      "Because airflow accelerates over the curved upper surface of a wing, local airflow can reach the speed of sound before the aircraft's own true airspeed does - the critical Mach number is the freestream Mach number at which this first happens, marking the onset of local shockwave formation.",
    reference: "Performance - Critical Mach Number",
  },
  {
    id: 14,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Compared with a straight wing of the same airfoil section, why does a swept wing generally have a higher critical Mach number?",
    options: [
      "Sweep reduces the effective (chordwise) component of airflow velocity that the wing 'feels', delaying the onset of local shock formation",
      "Sweep increases the local airflow speed over the wing, delaying compressibility effects",
      "Sweep has no effect on critical Mach number, only on structural weight",
      "Sweep increases wing area, which alone raises critical Mach number",
    ],
    answer: 0,
    explain:
      "Sweeping a wing means the airflow's velocity component perpendicular to the leading edge (the component that matters for local acceleration and shock formation) is reduced relative to the aircraft's true airspeed, allowing the aircraft to reach a higher overall Mach number before local airflow reaches Mach 1.",
    reference: "Performance - Swept Wing Aerodynamics",
  },
  {
    id: 15,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Why do swept wings have a general tendency toward tip stall (and a resulting nose-up pitching tendency at the stall)?",
    options: [
      "Spanwise airflow tends to drift outward toward the tips, causing the wingtips to reach a high angle of attack and stall before the root",
      "The wingtips always carry more structural loading than the root, causing them to stall first",
      "Swept wings have no tendency toward tip stall; that is a feature unique to straight wings",
      "Tip stall on a swept wing is caused solely by insufficient engine thrust",
    ],
    answer: 0,
    explain:
      "On a swept wing, boundary-layer airflow tends to drift spanwise outward toward the tips as angle of attack increases, thickening the boundary layer there and causing the tips to stall before the root - because lift is lost outboard (behind the CG on a swept wing), this produces a nose-up pitching moment right when the aircraft is already near the stall.",
    reference: "Performance - Swept Wing Stall Characteristics",
  },
  {
    id: 16,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is 'Dutch roll'?",
    options: [
      "A coupled, oscillatory combination of yawing and rolling motion",
      "A pure rolling oscillation with no yaw component",
      "A steady, non-oscillatory sideslip condition",
      "A ground-handling technique used during crosswind taxi",
    ],
    answer: 0,
    explain:
      "Dutch roll is a dynamic lateral-directional oscillation in which yaw and roll are coupled - the aircraft's nose yaws one way while the wings roll in a related, out-of-phase motion - most pronounced on swept-wing aircraft with strong directional but comparatively weak damping in that mode, and is usually countered with a yaw damper.",
    reference: "Performance - Lateral-Directional Dynamic Stability",
  },
  {
    id: 17,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What generally causes high-speed buffet on a swept-wing jet transport aircraft?",
    options: [
      "Airflow separation induced by shockwaves forming on the wing as critical Mach number is exceeded",
      "Airflow separation caused purely by a low angle of attack",
      "Engine vibration transmitted through the airframe",
      "Excessive flap deployment at high speed",
    ],
    answer: 0,
    explain:
      "High-speed (Mach) buffet results from shockwaves forming on the wing once local airflow exceeds Mach 1 beyond the critical Mach number - the shock induces airflow separation behind it, causing buffeting distinct from the low-speed buffet associated with an approaching aerodynamic stall.",
    reference: "Performance - High-Speed Buffet",
  },
  {
    id: 18,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "During take-off, how is rotation speed (VR) generally related to V1 and the minimum control speed in the air (VMCA)?",
    options: [
      "VR must not be less than V1 nor less than VMCA",
      "VR must always be less than V1",
      "VR has no defined relationship to V1 or VMCA",
      "VR must always equal V1 exactly",
    ],
    answer: 0,
    explain:
      "Rotation speed (VR) is scheduled so that it is never less than the decision speed V1, and never less than the minimum control speed in the air (VMCA), ensuring the aircraft can be both stopped safely if rotation is delayed and controlled directionally once airborne.",
    reference: "Performance - Take-off Speed Scheduling",
  },
  {
    id: 19,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is the general purpose of a defined center of gravity (CG) envelope for an aircraft type?",
    options: [
      "To set the forward and aft CG limits within which the aircraft remains controllable and structurally safe to operate",
      "To specify the range of altitudes the aircraft may cruise at",
      "To define the acceptable range of outside air temperatures for dispatch",
      "To set the minimum and maximum cabin pressure differential",
    ],
    answer: 0,
    explain:
      "The CG envelope defines the forward and aft limits (often varying with weight) within which the loaded aircraft's centre of gravity must fall for the aircraft to remain controllable, stable, and structurally within its certificated limits throughout the flight, including as fuel burns off.",
    reference: "Performance - Centre of Gravity Limits",
  },
  {
    id: 20,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does a more forward center of gravity generally affect stalling speed compared with a more aft center of gravity?",
    options: [
      "It increases stalling speed",
      "It decreases stalling speed",
      "It has no effect on stalling speed",
      "It only affects stalling speed in a turn, not in level flight",
    ],
    answer: 0,
    explain:
      "A more forward CG requires more nose-up trim (more download from the tailplane) to balance the aircraft, meaning the wing must generate additional lift to support that extra effective load - this raises the angle of attack needed at any given speed and, correspondingly, raises the stalling speed.",
    reference: "Performance - Centre of Gravity Effects",
  },
  {
    id: 21,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is generally meant by an aircraft's 'zero fuel weight'?",
    options: [
      "The maximum weight of the aircraft and its payload before any usable fuel is added",
      "The weight of the aircraft with absolutely no equipment or furnishings installed",
      "The weight of the aircraft after all fuel has been consumed in flight",
      "The minimum weight required for the aircraft to become airborne",
    ],
    answer: 0,
    explain:
      "Zero fuel weight represents the total weight of the aircraft, crew, and payload before any usable fuel is loaded - it has a certificated maximum, separate from maximum takeoff or landing weight, because the wing structure needs a certain amount of fuel weight in it to help relieve bending loads in flight.",
    reference: "Performance - Weight Definitions",
  },
  {
    id: 22,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Why is an aircraft's maximum certificated landing weight generally lower than its maximum takeoff weight?",
    options: [
      "Landing gear and structural loads are generally higher during landing impact than during a normal takeoff, so a lower weight limit protects those structural margins",
      "There is no general reason; the two figures are typically identical for most aircraft types",
      "It is purely to limit the amount of fuel that can be loaded before departure",
      "It reflects only a regulatory paperwork distinction with no structural basis",
    ],
    answer: 0,
    explain:
      "Touching down involves a comparatively abrupt structural load on the landing gear and airframe compared with a normal takeoff roll, so many aircraft types are certificated with a maximum landing weight lower than the maximum takeoff weight, giving structural margin for that heavier impact loading - which is also part of why fuel dumping or burn-off may be needed before an early, overweight landing.",
    reference: "Performance - Weight Definitions",
  },
  {
    id: 23,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does higher density altitude generally affect takeoff performance?",
    options: [
      "It increases the required takeoff distance and reduces the climb rate available",
      "It reduces the required takeoff distance and improves climb rate",
      "It has no measurable effect on takeoff performance",
      "It only affects landing performance, not takeoff",
    ],
    answer: 0,
    explain:
      "Higher density altitude (from high elevation, high temperature, or low pressure) means the air is less dense, reducing both the lift generated at a given airspeed and the thrust or power an engine can produce - the combined effect is a longer takeoff roll and reduced climb performance.",
    reference: "Performance - Density Altitude Effects",
  },
  {
    id: 24,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does a tailwind component generally affect takeoff and landing distance compared with a headwind of the same magnitude?",
    options: [
      "A tailwind increases both takeoff and landing distance, generally by a larger factor than the equivalent headwind reduces it",
      "A tailwind reduces both takeoff and landing distance",
      "A tailwind has no measurable effect on either distance",
      "A tailwind only affects landing distance, not takeoff distance",
    ],
    answer: 0,
    explain:
      "Both takeoff and landing rely on achieving a given airspeed, so a tailwind requires a higher groundspeed (and therefore more distance) to reach that airspeed, while a headwind reduces the groundspeed needed - performance charts generally penalise tailwind more heavily per knot than they credit headwind, reflecting the disproportionately larger distance penalty tailwind produces.",
    reference: "Performance - Wind Effects on Takeoff & Landing",
  },
  {
    id: 25,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does an upslope (uphill) runway gradient generally affect takeoff distance?",
    options: [
      "It increases the required takeoff distance",
      "It decreases the required takeoff distance",
      "It has no effect on takeoff distance",
      "It only affects landing distance, not takeoff",
    ],
    answer: 0,
    explain:
      "An upslope runway works against the aircraft's acceleration during the takeoff roll, requiring a longer distance to reach the required takeoff speed compared with a level or downsloping runway - performance calculations generally apply a distance correction for runway slope for exactly this reason.",
    reference: "Performance - Runway Slope Effects",
  },
  {
    id: 26,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "In a level, coordinated turn, how does load factor generally change as bank angle increases?",
    options: [
      "Load factor increases, and increases more steeply as bank angle gets larger",
      "Load factor decreases as bank angle increases",
      "Load factor stays exactly 1g regardless of bank angle",
      "Load factor depends only on airspeed, not on bank angle",
    ],
    answer: 0,
    explain:
      "To maintain level flight in a turn, the wing's lift must have a vertical component equal to weight, meaning total lift (and therefore load factor) must increase with bank angle - and this increase accelerates sharply at higher bank angles, which is why steep turns raise stalling speed noticeably more than shallow ones.",
    reference: "Performance - Load Factor in Turns",
  },
  {
    id: 27,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is the general difference between an aircraft's 'absolute ceiling' and its 'service ceiling'?",
    options: [
      "Absolute ceiling is the altitude at which climb rate reaches zero; service ceiling is the (lower) altitude at which climb rate falls to a small defined residual rate",
      "Absolute ceiling and service ceiling are always the same value",
      "Service ceiling is always higher than absolute ceiling",
      "Absolute ceiling refers only to cabin pressurization limits",
    ],
    answer: 0,
    explain:
      "Absolute ceiling is the theoretical altitude at which an aircraft can no longer climb at all (zero rate of climb); service ceiling is a more practically useful, lower altitude at which the climb rate has fallen to some small defined residual value (a commonly used reference is 100 ft/min for many aircraft categories), reflecting that reaching the true absolute ceiling would take an impractically long time.",
    reference: "Performance - Ceiling Definitions",
  },
  {
    id: 28,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What effect does icing on the wing's leading edge generally have on stalling speed and the stall itself?",
    options: [
      "It increases stalling speed and can cause an earlier, more abrupt, and less predictable stall",
      "It decreases stalling speed and delays the stall",
      "It has no measurable effect on stall characteristics",
      "It affects only cruise speed, not stall characteristics",
    ],
    answer: 0,
    explain:
      "Ice accumulation disrupts the smooth airflow over the wing's leading edge, degrading maximum lift capability - this generally raises the stalling speed and can bring on a stall earlier, more abruptly, and with less of the usual aerodynamic warning than a clean-wing stall would give.",
    reference: "Performance - Icing Effects on Stall Characteristics",
  },
  {
    id: 29,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is 'adverse yaw', and how is it generally corrected?",
    options: [
      "A tendency for the aircraft's nose to yaw toward the outside of an intended turn due to differential aileron drag, corrected with coordinated rudder input",
      "A tendency for the aircraft to yaw toward the inside of a turn, corrected by reducing aileron deflection to zero",
      "A structural vibration unrelated to aileron use",
      "An effect that only appears at speeds above Mcrit",
    ],
    answer: 0,
    explain:
      "When aileron is applied to roll into a turn, the down-going aileron on the rising wing generates more lift and more induced drag than the up-going aileron on the other wing, yawing the nose toward the outside of the intended turn (opposite to the roll) - coordinated rudder input in the direction of the turn corrects this adverse yaw.",
    reference: "Performance - Adverse Yaw & Turn Coordination",
  },
  {
    id: 30,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "The 'phugoid' is best described as:",
    options: [
      "A long-period oscillation in pitch, airspeed, and altitude, occurring at a roughly constant angle of attack",
      "A rapid, short-period oscillation in pitch at constant airspeed",
      "A lateral oscillation combining roll and yaw",
      "A structural vibration mode of the wing at high Mach number",
    ],
    answer: 0,
    explain:
      "The phugoid is a slow, long-period longitudinal oscillation where the aircraft trades altitude for airspeed and back again while the angle of attack stays roughly constant - it's generally easy for a pilot to control or damp manually, unlike the more rapid short period mode.",
    reference: "Performance - Longitudinal Dynamic Stability",
  },
  {
    id: 31,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "The 'short period' pitch oscillation is generally characterised by:",
    options: [
      "A rapid oscillation at nearly constant airspeed, involving a changing angle of attack, that is normally well damped on a well-behaved aircraft",
      "A slow oscillation over several minutes with large airspeed swings",
      "An oscillation that only involves roll, not pitch",
      "An oscillation that occurs only in ground effect",
    ],
    answer: 0,
    explain:
      "The short period mode is a rapid pitch oscillation occurring at essentially constant airspeed, with angle of attack changing quickly - it's normally heavily and quickly damped on a well-designed aircraft, in contrast with the slower, easily controlled phugoid, which trades altitude and airspeed at roughly constant angle of attack.",
    reference: "Performance - Longitudinal Dynamic Stability",
  },
  {
    id: 32,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "All else being equal, how does a higher wing aspect ratio (long, narrow wings) generally affect induced drag compared with a lower aspect ratio wing of the same area?",
    options: [
      "It generally results in lower induced drag for a given amount of lift",
      "It generally results in higher induced drag for a given amount of lift",
      "Aspect ratio has no effect on induced drag",
      "It only affects parasite drag, not induced drag",
    ],
    answer: 0,
    explain:
      "A higher aspect ratio wing spreads a given lift force over a longer span, reducing the relative strength of the wingtip vortices (and the associated induced drag) compared with a shorter, stubbier wing of the same area - part of why gliders, which prioritise low drag, tend to have very high aspect ratio wings.",
    reference: "Performance - Wing Aspect Ratio & Induced Drag",
  },
  {
    id: 33,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "On a total drag versus airspeed curve, the speed for minimum total drag (best lift/drag ratio) occurs where:",
    options: [
      "Induced drag and parasite drag are equal",
      "Induced drag is zero",
      "Parasite drag is zero",
      "Total drag is at its absolute maximum",
    ],
    answer: 0,
    explain:
      "Induced drag falls as speed increases while parasite drag rises with speed, so total drag (their sum) reaches its minimum at the speed where the two curves cross and are equal - this point corresponds to the best lift-to-drag ratio, a key reference speed for maximum range/endurance performance.",
    reference: "Performance - Drag Curves & Best Lift/Drag Speed",
  },
  {
    id: 34,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "How does the best angle-of-climb speed (Vx) generally compare with the best rate-of-climb speed (Vy)?",
    options: [
      "Vx is generally lower than Vy",
      "Vx is generally higher than Vy",
      "Vx and Vy are always the same speed",
      "Vx applies only to descent, not climb",
    ],
    answer: 0,
    explain:
      "Vx (best angle of climb) is generally flown slower than Vy (best rate of climb) - Vx maximises altitude gained per unit of horizontal distance covered, useful for clearing obstacles close ahead, while Vy maximises altitude gained per unit of time, useful for climbing to altitude efficiently once obstacles are no longer a concern.",
    reference: "Performance - Climb Speed Definitions",
  },
  {
    id: 35,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "Extending flaps generally has what combined effect on lift and drag?",
    options: [
      "It increases the maximum lift coefficient available (lowering stall speed) while also increasing drag",
      "It increases maximum lift while reducing drag",
      "It decreases both lift and drag equally",
      "It has no effect on lift, only on drag",
    ],
    answer: 0,
    explain:
      "Flap extension increases the wing's camber (and sometimes area), raising the maximum lift coefficient available and thereby lowering the stalling speed - but this comes together with a substantial increase in drag, which is part of why flap settings are chosen deliberately to balance the two effects.",
    reference: "Performance - Flap Effects on Lift & Drag",
  },
  {
    id: 36,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "What is the general function of spoilers (as distinct from pure speed brakes) when deployed in flight or on the ground after landing?",
    options: [
      "They increase drag and reduce lift, helping increase descent rate in flight and improve wheel braking effectiveness after touchdown by increasing weight on the wheels",
      "They increase lift in flight while having no ground function",
      "They function only as a backup flap system",
      "They are used exclusively to reduce engine thrust",
    ],
    answer: 0,
    explain:
      "Spoilers disrupt airflow over the wing's upper surface, increasing drag and reducing lift - in flight this helps increase descent rate or assist deceleration, while on the ground after touchdown ('ground spoilers') the loss of lift transfers more of the aircraft's weight onto the wheels, improving the effectiveness of wheel braking.",
    reference: "Performance - Spoiler & Speed Brake Function",
  },
  {
    id: 37,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "'Mach tuck' refers to the tendency of an aircraft, as it approaches or exceeds its critical Mach number, to:",
    options: [
      "Pitch nose-down due to shock-induced airflow separation and a rearward shift in the wing's centre of pressure",
      "Pitch nose-up sharply with no aerodynamic cause",
      "Roll uncontrollably to one side, with no pitch change",
      "Experience a sudden loss of all aerodynamic lift",
    ],
    answer: 0,
    explain:
      "As airflow over the wing accelerates past the critical Mach number, shockwaves form and can cause flow separation behind them, shifting the wing's centre of pressure rearward - this shift generally produces a nose-down pitching tendency known as Mach tuck, which high-speed aircraft are designed or equipped (such as with a Mach trim system) to counter.",
    reference: "Performance - High-Speed Aerodynamic Effects",
  },
  {
    id: 38,
    subject: "ATPL General Knowledge",
    system: "Performance & Principles of Flight",
    q: "On a multi-engine aircraft with one engine failed, the asymmetric thrust from the remaining engine(s) generally produces a yawing moment in which direction, and how is it typically corrected?",
    options: [
      "A yaw toward the failed engine, corrected with rudder toward the operating engine(s), typically combined with a small amount of bank toward the operating side",
      "A yaw toward the operating engine, corrected with rudder toward the failed engine",
      "No yawing moment is produced as long as thrust on the remaining engine(s) is reduced to idle",
      "A rolling moment only, with no yaw involved at all",
    ],
    answer: 0,
    explain:
      "With thrust now asymmetric, the operating engine(s) push the aircraft's nose toward the dead engine side, so rudder is applied toward the operating engine(s) to counter that yaw - a small amount of bank toward the operating engine(s) is also typically held, which helps balance the sideslip that would otherwise develop and reduces the rudder force required.",
    reference: "Performance - Asymmetric Thrust & Engine-Out Handling",
  },
];
