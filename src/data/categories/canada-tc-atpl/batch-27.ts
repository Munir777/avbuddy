import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 27 -- Section 3: Instruments,
// third pass. Original questions written from standard flight
// instrument principles and the TP 690 syllabus (topic headings only,
// no sample questions). Covers pitot-static edge cases, autoflight
// and alerting displays, and navigation/attitude system details not
// yet addressed in batches 3 or 16. Not transcribed or adapted from
// any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_27_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "If a pitot tube becomes blocked but its drain hole remains clear, the airspeed indicator will subsequently tend to behave like",
    options: [
      "a vertical speed indicator, displaying a rate of change rather than any absolute value at all.",
      "a perfectly accurate airspeed indicator, since a clear drain hole is sufficient to maintain fully normal ASI function despite the blockage.",
      "an altimeter, since the trapped pitot pressure stays roughly constant while static pressure (still connected through the drain hole path) continues to vary with altitude, so the ASI reads higher climbing and lower descending.",
      "a completely frozen, unmoving instrument, exactly as it would if the drain hole were also blocked.",
    ],
    answer: 2,
    explain:
      "With the pitot inlet blocked but the drain hole open, trapped pitot pressure stays essentially fixed while static pressure -- effectively still able to act on the system through the drain hole path -- keeps changing with altitude. The ASI, which normally displays the difference between pitot and static pressure, ends up behaving like an altimeter instead: it reads higher than actual while climbing and lower than actual while descending, a genuinely different (and importantly, different-to-recognize) failure mode than a fully blocked pitot system with no drain hole path at all.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static System",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A conventional (non-instantaneous) VSI displays vertical speed with a few seconds of lag because it relies on",
    options: [
      "a mechanical gyroscope, whose rigidity in space inherently introduces a delay before the indication catches up to actual vertical speed.",
      "an electric accelerometer with a built-in signal-processing delay, identical in mechanism to the accelerometer used in an IVSI.",
      "GNSS-derived altitude data, which updates only once every several seconds due to satellite signal processing time.",
      "a calibrated leak, which lets static pressure inside the instrument's diaphragm equalize with outside static pressure at a controlled, gradual rate rather than instantly.",
    ],
    answer: 3,
    explain:
      "A conventional VSI works by comparing static pressure acting directly on a diaphragm against static pressure that reaches the instrument's case only through a calibrated leak -- a restricted path that intentionally slows equalization -- so the pressure difference driving the needle (and therefore the indicated rate) takes a few seconds to build up to a value that accurately reflects the actual rate of climb or descent, which is exactly the lag an IVSI's added accelerometer is designed to compensate for.",
    reference: "TP 690 Section 3 - Instruments, Pitot-Static Instruments",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An angle of attack (AoA) indicator offers an advantage over airspeed alone for judging proximity to the stall because",
    options: [
      "the stalling angle of attack is essentially constant regardless of weight, bank angle, or load factor, while the stalling airspeed varies with all of those factors.",
      "an AoA indicator eliminates the need to ever reference airspeed at all, for any purpose, once it is installed.",
      "airspeed is always a more precise and reliable stall-margin indicator than angle of attack, making an AoA indicator largely redundant.",
      "angle of attack, unlike airspeed, changes only with altitude and is otherwise unaffected by any other flight parameter.",
    ],
    answer: 0,
    explain:
      "Because the wing stalls at essentially the same critical angle of attack regardless of weight, bank angle, or load factor, an AoA indicator gives a genuinely consistent stall-margin reference across all of those varying conditions -- whereas the airspeed at which the stall actually occurs shifts with weight and especially with load factor (as in a steep turn), meaning a single 'stall speed' number doesn't capture the full picture the way angle of attack directly does.",
    reference: "TP 690 Section 3 - Instruments, Flight Instruments",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On a Horizontal Situation Indicator (HSI), the course deviation bar and the heading bug together provide",
    options: [
      "vertical speed and altitude information exclusively, duplicating the function of the VSI and altimeter.",
      "lateral deviation from a selected course (via the deviation bar) and a pilot- or autopilot-selected target heading (via the heading bug), combined with the compass card showing present heading.",
      "engine parameter information exclusively, with no navigation or heading-related function on the HSI at all.",
      "a direct digital readout of groundspeed and estimated time en route, with no bearing or course information shown.",
    ],
    answer: 1,
    explain:
      "The HSI combines several navigation references onto one compass-card-based display: the course deviation bar shows how far off (laterally) the aircraft is from a selected VOR radial, localizer, or RNAV course, while the separately set heading bug marks a target heading (often coupled to the autopilot's heading-select mode) -- together with the rotating compass card showing present heading, giving a single, integrated picture of course, heading, and lateral deviation rather than any engine or altitude-related information.",
    reference: "TP 690 Section 3 - Instruments, Electronic Flight Instrument Systems",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A Radio Magnetic Indicator (RMI), with its dual bearing needles, typically allows a pilot to",
    options: [
      "display groundspeed on one needle and true airspeed on the other, with no bearing information shown by either needle.",
      "display cabin altitude on one needle and cabin rate of change on the other, functioning as a dedicated pressurization instrument.",
      "simultaneously display magnetic bearings to two different navigation sources at once, such as one needle referencing a VOR and the other an NDB.",
      "display only a single bearing at a time, with the second needle serving purely as a decorative, non-functional backup.",
    ],
    answer: 2,
    explain:
      "The RMI's two independent needles can each be set to reference a different navigation source -- commonly one to a VOR and the other to an NDB -- letting a pilot see both bearings simultaneously against the same rotating compass card, which is particularly useful for cross-checking position with two independent references or flying a bearing to one station while monitoring another, rather than either needle being redundant or unrelated to bearing information.",
    reference: "TP 690 Section 3 - Instruments, Radio Navigation Instruments",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The command bars (or cue) displayed by a flight director on the attitude indicator represent",
    options: [
      "engine thrust setting information, unrelated to pitch, roll, or any guidance mode.",
      "raw, unprocessed lateral and vertical deviation from the selected course and glidepath, identical in function to a course deviation bar.",
      "the aircraft's actual, current pitch and roll attitude, duplicating the function of the underlying attitude indicator symbology.",
      "the pitch and roll attitude the pilot should fly to satisfy the currently selected lateral and vertical guidance modes, rather than raw deviation from a course or glidepath.",
    ],
    answer: 3,
    explain:
      "A flight director computes and displays command bars that tell the pilot what attitude to fly right now -- a processed guidance cue, not a raw deviation display -- to satisfy whatever lateral and vertical modes are currently selected (heading, nav, approach, altitude hold, and so on); the pilot (or the autopilot, if coupled) simply flies to keep the aircraft symbol aligned with those command bars, rather than having to interpret raw deviation information and mentally convert it into a pitch/roll correction.",
    reference: "TP 690 Section 3 - Instruments, Flight Director and Autopilot",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "On an EICAS or ECAM alerting display, messages are typically colour-coded so that",
    options: [
      "red generally indicates a warning requiring immediate crew action, while amber (or yellow) generally indicates a caution requiring crew awareness and timely, but not necessarily immediate, action.",
      "amber always indicates a more urgent condition than red, the reverse of the conventional colour-coding scheme.",
      "red and amber are used interchangeably with no distinction in urgency, and the specific colour chosen is purely a matter of display aesthetics.",
      "colour coding is applied only to engine parameters, with no colour distinction used for any system-related caution or warning message.",
    ],
    answer: 0,
    explain:
      "EICAS/ECAM colour coding follows a broadly consistent urgency hierarchy: red is reserved for warnings that typically demand immediate crew action (often paired with an aural alert), while amber/yellow denotes a caution -- something the crew needs to be aware of and address, but not necessarily right away -- letting the crew triage multiple simultaneous messages at a glance rather than having to read and interpret every message's full text under pressure to judge its urgency.",
    reference: "TP 690 Section 3 - Instruments, Engine Indicating and Crew Alerting Systems",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An FMS's navigation database is typically required to be updated on a cycle of",
    options: [
      "12 months, aligned with the aircraft's annual inspection cycle rather than any aeronautical information cycle.",
      "28 days, aligned with the AIRAC cycle used for aeronautical information generally.",
      "24 hours, requiring a fresh database load before every single flight regardless of route.",
      "there is no defined update cycle at all; once loaded, an FMS navigation database remains valid indefinitely.",
    ],
    answer: 1,
    explain:
      "FMS navigation databases are refreshed on the same 28-day AIRAC cycle used for aeronautical charts and other navigation information generally, ensuring the waypoints, procedures, and route data an FMS relies on stay synchronized with current, published aeronautical information rather than drifting out of date against real-world changes to routes, procedures, or NAVAID status.",
    reference: "TP 690 Section 3 - Instruments, Flight Management Systems",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A standby attitude indicator, in most modern glass cockpit aircraft, is typically",
    options: [
      "not required to have any power source at all, since a standby attitude indicator is defined as a purely mechanical, unpowered instrument.",
      "powered exclusively from the same bus as the primary flight displays, offering no meaningful redundancy if that bus is lost.",
      "powered by its own independent, often battery-backed power source, so it remains available even following a broader loss of the aircraft's main electrical or hydraulic systems.",
      "driven mechanically by the same vacuum system as the primary attitude indicator, with no independent power source of its own.",
    ],
    answer: 2,
    explain:
      "The whole point of a standby attitude indicator is to remain available precisely when the normal systems have failed, so it's typically fitted with its own dedicated, often battery-backed power source (sometimes self-contained within the instrument itself) rather than depending on the same bus, generator, or vacuum source as the primary displays -- sharing a power source with what it's meant to back up would defeat its purpose as a genuinely independent last line of defence.",
    reference: "TP 690 Section 3 - Instruments, Flight Instrument Systems",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "An autothrottle (or autothrust) system is functionally distinct from the autopilot in that the autothrottle",
    options: [
      "controls the flight control surfaces to maintain pitch and roll, while the autopilot controls engine thrust, the reverse of the usual division of responsibility.",
      "and the autopilot are simply two names for the exact same system, with no functional distinction between them.",
      "can only be used when the autopilot is disengaged, since the two systems are mutually exclusive and cannot operate simultaneously.",
      "controls engine thrust/power setting to maintain a target airspeed, Mach number, or thrust value, while the autopilot controls the flight control surfaces to maintain pitch, roll, and heading/track.",
    ],
    answer: 3,
    explain:
      "The two systems divide the flying task along a clean line: the autothrottle/autothrust manages engine power to hold a target speed, Mach number, or thrust setting, while the autopilot manages the flight control surfaces to hold a commanded pitch, roll, and lateral track -- and the two are specifically designed to work together simultaneously (an autopilot holding an altitude while the autothrottle holds the speed needed to do so, for instance), not as mutually exclusive alternatives.",
    reference: "TP 690 Section 3 - Instruments, Flight Director and Autopilot",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Compared to a basic Ground Proximity Warning System (GPWS), a Terrain Awareness and Warning System (TAWS) adds",
    options: [
      "a forward-looking terrain display and predictive alerting, using a stored terrain database and the aircraft's position to warn of a potential conflict with terrain ahead of the aircraft's current flight path.",
      "no meaningful additional capability at all; TAWS and GPWS are simply two different names for identical functionality.",
      "a requirement that the system be manually armed by the crew before every flight, unlike GPWS which operates automatically without any crew action.",
      "the ability to detect wind shear only, with terrain-related alerting entirely removed compared to a basic GPWS.",
    ],
    answer: 0,
    explain:
      "A basic GPWS reacts to the aircraft's current closure rate and configuration relative to the ground directly beneath and immediately ahead of it. TAWS goes further, using a stored terrain (and often obstacle) database along with the aircraft's own position to look further ahead along the actual flight path and provide predictive alerting -- warning of a potential conflict with terrain the aircraft hasn't reached yet, rather than only reacting to an immediate, close-in closure-rate threat.",
    reference: "TP 690 Section 3 - Instruments, Terrain Awareness and Warning Systems",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A standby altimeter, compared to a primary altimeter driven through the aircraft's air data computer, is typically",
    options: [
      "driven exclusively by GNSS-derived geometric altitude, with no static pressure connection at all.",
      "a self-contained, direct-reading mechanical (or independently powered) instrument, connected straight to a static source rather than depending on the air data computer to function.",
      "entirely dependent on the same air data computer as the primary altimeter, offering no redundancy if that computer fails.",
      "not required to display altitude at all, since 'standby altimeter' is a misnomer for an instrument that actually displays only airspeed.",
    ],
    answer: 1,
    explain:
      "Where a primary altimeter on a modern aircraft often has its displayed value processed through the air data computer, a standby altimeter is generally kept deliberately simple and independent -- a direct-reading mechanical instrument connected straight to a static source -- specifically so it keeps working if the air data computer, its associated electronics, or other supporting systems fail, preserving the same kind of independence a standby attitude indicator provides for attitude information.",
    reference: "TP 690 Section 3 - Instruments, Flight Instrument Systems",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A triple-spool turbofan engine, in addition to the N1 (fan/low-pressure) and N2 (high-pressure) spools common to a two-spool design, adds",
    options: [
      "a second fan, mechanically linked to rotate at exactly the same speed as the existing fan, rather than an additional independently rotating spool.",
      "a spool used exclusively during engine start, which is mechanically disconnected and no longer rotates once the engine reaches idle power.",
      "an intermediate-pressure spool (commonly labelled N2, with the high-pressure spool then labelled N3), each spool rotating independently at its own speed.",
      "no additional rotating component at all; 'triple-spool' refers only to a third fuel injection stage, unrelated to any additional compressor/turbine spool.",
    ],
    answer: 2,
    explain:
      "A triple-spool design adds a third, intermediate-pressure compressor and turbine section between the low-pressure (fan) and high-pressure spools of a conventional two-spool engine, with each of the three spools free to rotate at its own independent speed -- a design approach (used by some manufacturers) intended to let each compressor stage operate closer to its own aerodynamically optimal speed across the engine's full operating range, rather than being mechanically tied to a fan or high-pressure spool speed a two-spool layout would otherwise force it to share.",
    reference: "TP 690 Section 3 - Instruments, Engine Instruments",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "A trend vector, displayed alongside the airspeed or altitude tape on a modern PFD, indicates",
    options: [
      "a historical record of the aircraft's airspeed or altitude over the preceding several minutes, rather than any future prediction.",
      "the aircraft's airspeed or altitude exactly one hour into the future, assuming current conditions remain constant for that entire period.",
      "the maximum structurally certified airspeed or altitude limit for the aircraft type, unrelated to the aircraft's current rate of change.",
      "the predicted airspeed or altitude value a short time (commonly around 6 to 10 seconds) into the future if the current rate of change continues.",
    ],
    answer: 3,
    explain:
      "A trend vector is a short-term forward projection, not a historical record or a structural limit marking: it extends from the current airspeed or altitude tape value to show where that value is heading a short time ahead (commonly on the order of 6 to 10 seconds) if the aircraft's present rate of acceleration/deceleration or climb/descent continues unchanged, giving the crew an at-a-glance sense of where the parameter is trending rather than requiring them to mentally extrapolate from the raw numeric value alone.",
    reference: "TP 690 Section 3 - Instruments, Electronic Flight Instrument Systems",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "The course deviation indicator (CDI) needle is considerably more sensitive when receiving a localizer signal than when receiving an en route VOR radial, meaning that",
    options: [
      "a smaller angular (and, close to the runway, physical) displacement from the localizer course produces full-scale needle deflection, compared to the wider angular displacement needed for full-scale deflection from a VOR radial.",
      "the CDI needle is actually less sensitive to localizer signals than to VOR radials, the reverse of the usual relationship between the two modes.",
      "CDI sensitivity is determined solely by the aircraft's groundspeed, and has no relationship to whether a VOR or localizer signal is being received.",
      "the CDI needle displays identical sensitivity whether receiving a localizer or a VOR signal, with no difference in scaling between the two.",
    ],
    answer: 0,
    explain:
      "Because precise lateral guidance matters more on a narrow final approach than it does navigating along a wide en route VOR radial, the CDI automatically scales itself more sensitively in localizer mode than in VOR mode -- a smaller angular deviation from the localizer course drives the needle to full-scale deflection than the same needle movement would represent on a VOR radial, which is why the same small stick or yoke correction that looks trivial on a VOR radial can look (and needs to be flown) far more precisely on a localizer.",
    reference: "TP 690 Section 3 - Instruments, Radio Navigation Instruments",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Instruments",
    q: "Before an Inertial Reference System (IRS) can be used for navigation, it typically requires",
    options: [
      "the aircraft to already be airborne and in stabilized cruise flight before alignment can begin, making ground alignment impossible.",
      "a stationary alignment period, during which the system determines its initial position and orientation (including true north) before it can begin accurately integrating acceleration into position.",
      "no alignment or initialization period at all; an IRS can begin accurate navigation the instant it is powered on, while the aircraft is still moving.",
      "manual entry of the destination airport only, with no reference to the aircraft's actual starting position needed at all.",
    ],
    answer: 1,
    explain:
      "Because an IRS derives position by integrating sensed acceleration starting from a known reference, it needs a stationary alignment period on the ground first -- during which it senses the earth's rotation and gravity to work out its precise initial position and true heading reference -- before it can begin reliably integrating acceleration into an accurate, continuously updated position once the aircraft starts moving; skipping or rushing that alignment leaves the system without the accurate starting reference its entire subsequent navigation solution depends on.",
    reference: "TP 690 Section 3 - Instruments, Inertial Reference Systems",
  },
];
