import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 5 -- Section 5: Flight Operations
// (atmospheric effects, performance, performance charts, critical surface
// contamination, flight manual, volcanic ash, airmanship rules of thumb,
// and abnormal flight procedures). Original questions written from
// general flight-operations knowledge and the TP 690 syllabus (topic
// headings only, no sample questions). Not transcribed or adapted from
// any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_05_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The ICAO Standard Atmosphere defines sea-level conditions of",
    options: [
      "15°C and 29.92 in. Hg (1013.25 hPa), with a lapse rate of approximately 2°C per 1,000 ft up to the tropopause.",
      "0°C and 29.92 in. Hg, with a constant lapse rate all the way to 60,000 ft.",
      "15°C and 30.00 in. Hg exactly, with no defined lapse rate.",
      "59°F and 1000 hPa, with a lapse rate of 1°C per 1,000 ft.",
    ],
    answer: 0,
    explain:
      "The ICAO Standard Atmosphere is the reference model used to calibrate altimeters and performance data: 15°C and 29.92 in. Hg (1013.25 hPa) at sea level, temperature decreasing at roughly 1.98°C per 1,000 ft up to the tropopause (about 36,090 ft), above which it is modelled as constant.",
    reference: "TP 690 Section 5 - Atmospheric Effects in Flight, ICAO Standard Atmosphere",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Density altitude is best described as",
    options: [
      "pressure altitude corrected for non-standard temperature, representing the altitude in the standard atmosphere that has the same air density as the actual conditions.",
      "the altitude read directly off the altimeter with the current altimeter setting applied, with no temperature correction.",
      "true altitude above mean sea level, unrelated to air density.",
      "the altitude at which the aircraft's cabin is pressurized to match ambient conditions.",
    ],
    answer: 0,
    explain:
      "Density altitude answers the question 'what altitude in the standard atmosphere would have this same air density?' -- it's pressure altitude adjusted for the actual temperature, and it's the parameter that actually governs aircraft and engine performance, not indicated or true altitude by themselves.",
    reference: "TP 690 Section 5 - Atmospheric Effects in Flight, Temperature and Pressure / Air Density",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Compared to dry air at the same temperature and pressure, humid air is",
    options: [
      "less dense, because water vapour molecules are lighter than the nitrogen and oxygen molecules they displace.",
      "more dense, because water vapour adds extra mass to the air.",
      "identical in density, since humidity has no measurable effect on air density.",
      "less dense only at temperatures below freezing, and more dense above freezing.",
    ],
    answer: 0,
    explain:
      "Water vapour has a lower molecular weight than the nitrogen and oxygen it displaces in a given volume of air, so humid air is actually less dense than dry air at the same temperature and pressure -- a small but real performance penalty (longer take-off roll, reduced climb) on hot, humid days, on top of the larger effect of temperature itself.",
    reference: "TP 690 Section 5 - Atmospheric Effects in Flight, Humidity/Rain",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Cold temperature altimeter corrections are applied on approach because, in air significantly colder than standard, the aircraft's",
    options: [
      "true altitude is lower than the altimeter indicates, reducing actual obstacle clearance below published minimums unless a correction is added.",
      "true altitude is higher than the altimeter indicates, increasing obstacle clearance beyond published minimums.",
      "indicated airspeed reads artificially low, requiring a higher approach speed to compensate.",
      "groundspeed is reduced, requiring an increase in the published minimum descent altitude.",
    ],
    answer: 0,
    explain:
      "Cold, denser air means a given pressure level actually sits lower than the standard atmosphere assumes, so the altimeter over-reads and true altitude is lower than indicated -- eroding the obstacle clearance that minimum altitudes were designed to provide, unless the pilot applies a published cold-temperature correction to those altitudes.",
    reference: "TP 690 Section 5 - Atmospheric Effects in Flight, Cold Temperature Corrections",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For a given weight, configuration, and load factor, an aircraft's true stalling speed (in TAS)",
    options: [
      "increases with altitude, since the same indicated/calibrated stalling speed corresponds to a higher true airspeed as air density decreases.",
      "decreases with altitude, since less lift is required as air density decreases.",
      "remains exactly the same at any altitude, whether expressed as indicated, calibrated, or true airspeed.",
      "is unrelated to air density, and depends only on the aircraft's weight.",
    ],
    answer: 0,
    explain:
      "For a fixed weight/configuration/load factor, indicated (and calibrated) stalling speed stays essentially constant with altitude, because the airspeed indicator itself responds to dynamic pressure. But since dynamic pressure at a given true airspeed falls as air density decreases with altitude, achieving that same indicated stall speed at altitude requires a higher true airspeed -- so true stalling speed increases with altitude even though indicated stalling speed does not.",
    reference: "TP 690 Section 5 - Performance, Indicated and True Stalling Speeds",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The relationship between airspeed and angle of attack, for a given weight and load factor, is such that",
    options: [
      "a lower airspeed requires a higher angle of attack to generate the same lift, and the aircraft stalls when the critical angle of attack is exceeded, regardless of airspeed.",
      "angle of attack is fixed by the aircraft's pitch attitude alone, and is unrelated to airspeed.",
      "the aircraft always stalls at the same indicated airspeed, regardless of angle of attack or load factor.",
      "increasing airspeed always increases angle of attack, for a constant altitude and weight.",
    ],
    answer: 0,
    explain:
      "Lift depends on both airspeed and angle of attack; at lower speeds, a higher angle of attack is needed to produce the lift required to support the aircraft's weight and load factor. The aircraft stalls whenever the critical angle of attack is exceeded -- which is why stall speed rises with load factor (a steep turn or abrupt pull-up can stall the aircraft at an airspeed well above its normal 1g stall speed), not because the critical AoA itself changes.",
    reference: "TP 690 Section 5 - Performance, Relationship of Speed to Angle of Attack",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For a jet transport aircraft, the speed that gives maximum range in still air is generally",
    options: [
      "somewhat higher than the speed for minimum drag, because a jet's specific fuel consumption characteristics make it more fuel-efficient, per nautical mile, to cruise slightly faster than the minimum-drag speed.",
      "exactly equal to the speed for minimum drag, since range and drag are directly interchangeable concepts for any aircraft type.",
      "the same as the speed for maximum endurance, since both maximize how long the aircraft can stay airborne on a given amount of fuel.",
      "always the aircraft's maximum operating speed (VMO/MMO), since faster is always more efficient for a jet.",
    ],
    answer: 0,
    explain:
      "Maximum endurance (most time aloft per unit fuel) is found at minimum drag/power-required speed. Maximum range (most distance per unit fuel) for a jet, however, is found somewhat faster than minimum drag speed, because of how a jet's fuel flow varies with speed -- going a bit faster than minimum drag still covers more ground per unit of fuel, even though drag itself is slightly higher there.",
    reference: "TP 690 Section 5 - Performance, Cruising for Range/Endurance",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "V1, as used in transport-category take-off performance, is defined as",
    options: [
      "the maximum speed at which the take-off can be rejected and the aircraft stopped within the accelerate-stop distance available, and the minimum speed at which the take-off can continue safely after an engine failure.",
      "the speed at which the aircraft is rotated to its take-off pitch attitude.",
      "the minimum control speed with the critical engine inoperative.",
      "the aircraft's maximum tire-rated ground speed for take-off or landing.",
    ],
    answer: 0,
    explain:
      "V1 (take-off decision speed) is the speed that splits the decision: below V1, a rejected take-off is expected to stop within the available accelerate-stop distance; at or above V1, the take-off is expected to continue safely to a screen height even with a critical engine failure, since stopping is no longer assured within the available distance. Rotation speed is VR, and minimum control speed in the air is VMCA.",
    reference: "TP 690 Section 5 - Performance, Flight Performance V-Speeds",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Increasing an aircraft's take-off weight, all else being equal, generally results in",
    options: [
      "a higher stalling speed, a longer take-off distance required, and reduced climb performance.",
      "a lower stalling speed and a shorter take-off distance, since a heavier aircraft accelerates more quickly.",
      "no change in stalling speed, since stalling speed depends only on configuration, never on weight.",
      "improved climb performance, since a heavier aircraft has more momentum available for climbing.",
    ],
    answer: 0,
    explain:
      "More weight means more lift is required at any given speed, which raises stalling speed; it also means a longer ground roll to reach the (now higher) required take-off speed, and less excess thrust/power available for climb once airborne -- all three effects point the same direction as weight increases.",
    reference: "TP 690 Section 5 - Performance, Effect of Changes in Weight and Load Distribution",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Moving the aircraft's centre of gravity aft, within approved limits, generally",
    options: [
      "reduces longitudinal stability and reduces trim drag, compared to a more forward CG.",
      "increases longitudinal stability and increases trim drag, compared to a more forward CG.",
      "has no effect on either stability or trim drag, since CG position only affects structural loading.",
      "always makes the aircraft easier and safer to control, with no operational downside.",
    ],
    answer: 0,
    explain:
      "A more aft CG reduces the stabilizing moment arm the tailplane has to work with, reducing longitudinal (pitch) stability -- but it also typically requires less nose-down tail load (and therefore less trim drag) to balance the aircraft, which is why operators often favour a CG toward the aft end of the approved range for cruise efficiency, within the stability and control margins the certification limits protect.",
    reference: "TP 690 Section 5 - Performance, Effect of Changes in Weight and Load Distribution",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Dynamic hydroplaning on a wet runway becomes possible above a minimum speed that depends primarily on",
    options: [
      "tire pressure, with minimum hydroplaning speed increasing as tire pressure increases.",
      "outside air temperature alone, independent of tire pressure or ground speed.",
      "aircraft weight alone, independent of tire pressure.",
      "runway length alone, independent of speed or tire pressure.",
    ],
    answer: 0,
    explain:
      "Dynamic hydroplaning occurs when a wedge of water builds up faster than it can escape from under the tire, lifting it off the runway surface; the speed at which that starts to happen rises with tire pressure (a commonly cited rule of thumb scales minimum hydroplaning speed with the square root of tire pressure), which is why higher-pressure tires need to go faster before hydroplaning becomes a risk.",
    reference: "TP 690 Section 5 - Performance, Hydroplaning",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The recommended technique for an inadvertent encounter with significant wind shear during take-off or approach is generally to",
    options: [
      "apply maximum thrust and fly a target pitch attitude (or to the stick shaker margin) to prioritize energy and terrain/obstacle clearance, accepting deviations from the intended flight path.",
      "reduce thrust and lower the nose to regain the planned airspeed as quickly as possible.",
      "disconnect all automation immediately and hand-fly using only outside visual references.",
      "continue following the flight director command bars exactly, even if doing so conflicts with maintaining a safe pitch attitude.",
    ],
    answer: 0,
    explain:
      "Wind shear escape/recovery technique prioritizes maximum available thrust and a target pitch attitude close to the stall-warning margin, accepting that airspeed, altitude, or the original flight path may be temporarily compromised -- the priority is survivable energy and terrain clearance, not returning smoothly to the planned speed or blindly following guidance that may not reflect the escape manoeuvre.",
    reference: "TP 690 Section 5 - Performance, Wind Shear - Effects, Avoidance and Recovery",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A buffet boundary chart is used to determine",
    options: [
      "the margin between low-speed (stall) buffet and high-speed (Mach) buffet at a given weight, altitude, and load factor -- the manoeuvring margin available at altitude.",
      "the runway distance required for take-off at a given weight and temperature.",
      "the maximum allowable crosswind component for landing.",
      "fuel flow at a given cruise altitude and weight.",
    ],
    answer: 0,
    explain:
      "At high cruise altitudes, the speed margin between the low-speed buffet boundary (approaching stall) and the high-speed buffet boundary (approaching critical Mach) narrows -- sometimes called 'coffin corner' when they converge. A buffet boundary chart shows how that available margin depends on weight, altitude, and load factor (e.g. bank angle in a turn), which is what limits safe manoeuvring margin at high altitude.",
    reference: "TP 690 Section 5 - Charts and Graphs, Buffet Boundary",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Weight-Altitude-Temperature (WAT) chart or limit is used to determine",
    options: [
      "the maximum take-off or landing weight permitted by climb performance requirements at a given pressure altitude and temperature, which may be more restrictive than the structural maximum weight.",
      "the weight and balance index for a given loading configuration.",
      "the minimum crew complement required for a given aircraft weight.",
      "the maximum permissible crosswind component at a given weight.",
    ],
    answer: 0,
    explain:
      "WAT limits reflect the fact that as pressure altitude and/or temperature increase (reducing air density and engine/aerodynamic performance), the weight at which the aircraft can still meet required climb gradients may fall below the aircraft's structural maximum weight -- the actual allowable take-off or landing weight is the lowest of the structural, WAT, and other applicable limits.",
    reference: "TP 690 Section 5 - Charts and Graphs, Weight, Altitude, Temperature (WAT), Take-off/Landing Performance Charts",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A Canadian Runway Friction Index (CRFI) report is used, together with a crosswind/CRFI chart, primarily to",
    options: [
      "determine a reduced maximum crosswind component appropriate to the reported runway friction condition.",
      "determine the required take-off distance on a dry runway at a given weight.",
      "determine the aircraft's maximum operating altitude for a given temperature.",
      "determine the minimum fuel reserve required for the flight.",
    ],
    answer: 0,
    explain:
      "CRFI quantifies how slippery a contaminated runway is; as friction decreases (lower CRFI), the crosswind component an aircraft can safely handle without directional control problems or excessive drift also decreases, which is exactly the relationship a crosswind/CRFI chart or table is built to show.",
    reference: "TP 690 Section 5 - Charts and Graphs, Crosswind/CRFI",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The 'clean aircraft concept' requires that, before take-off,",
    options: [
      "an aircraft's critical surfaces be free of frost, ice, or snow that could adversely affect the aircraft's performance or flight characteristics.",
      "the aircraft be entirely free of dirt or staining, for cosmetic reasons only.",
      "de-icing fluid be applied regardless of whether any contamination is actually present.",
      "the requirement applies only to aircraft operating under Part VII (commercial) rules, never to any other operation.",
    ],
    answer: 0,
    explain:
      "The clean aircraft concept is a safety-of-flight requirement, not a cosmetic one: frost, ice, or snow adhering to critical surfaces (wings, control surfaces, and other specified areas) can seriously degrade lift and handling, so those surfaces must be free of such contamination before take-off -- the requirement isn't limited to commercial operations.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, Clean Aircraft Concept",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Cold-soaked fuel in an aircraft's wing tanks can cause frost to form on the wing's upper surface",
    options: [
      "even when the ambient air temperature is above freezing, if the wing skin is chilled by the cold fuel below the local dew point (or frost point).",
      "only when the ambient air temperature is itself below freezing.",
      "only after the aircraft has been de-iced, as a reaction with the de-icing fluid.",
      "only while the aircraft is airborne, never while parked on the ground.",
    ],
    answer: 0,
    explain:
      "Fuel that has been chilled at high altitude on a previous flight can remain very cold in the tanks for hours after landing. If the wing skin over the cold fuel drops below the dew or frost point of the surrounding air -- which can happen even when the ambient air itself is well above freezing -- frost can form directly on that cold-soaked surface, a hazard easy to miss on a walk-around if it isn't specifically checked for.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, Frozen Contaminants Including Cold-Soaking Phenomenon",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Hoar frost forming on an aircraft in clear conditions (with no precipitation falling) is caused by",
    options: [
      "sublimation of water vapour directly onto a surface that is colder than the frost point of the surrounding air, typically overnight under clear, calm conditions.",
      "rain that has frozen after landing on the aircraft's surface.",
      "condensation of engine exhaust moisture on the airframe.",
      "de-icing fluid residue reacting with humidity in the air.",
    ],
    answer: 0,
    explain:
      "Hoar frost forms by sublimation -- water vapour depositing directly as ice crystals onto a surface that has radiatively cooled below the frost point, typically overnight under clear skies with little wind. It requires no precipitation at all, which is exactly why it can catch a crew off guard if they're only watching for obvious weather.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, Icing in Clear Air (Hoar Frost)",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The distinction between a Type I and a Type IV de-icing/anti-icing fluid is that Type IV fluid is",
    options: [
      "thickened, giving it a longer holdover time by remaining on the surface, while Type I is a low-viscosity fluid used mainly to remove existing contamination rather than provide extended protection.",
      "used only for removing contamination, with no anti-icing protective capability at all.",
      "always heated before application, while Type I is always applied cold.",
      "interchangeable with Type I in every respect, differing only in colour for identification purposes.",
    ],
    answer: 0,
    explain:
      "Type I fluid is thin and typically heated, mainly to remove existing frost/ice/snow (de-icing) -- it doesn't stay on the surface long, so it provides only limited anti-icing protection. Type IV (and Type II) fluids are thickened so they cling to the surface and continue to absorb and shed falling precipitation, giving a meaningfully longer holdover time, which is why a two-step de-ice-then-anti-ice application (Type I followed by Type IV) is common in active precipitation.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, De-icing and Anti-icing Fluids",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Holdover time (HOT), as published in de-icing guideline tables, represents",
    options: [
      "an estimated range of time during which anti-icing fluid is expected to prevent ice, frost, or snow from adhering to and accumulating on treated surfaces, under specified weather conditions.",
      "a fixed time limit, identical regardless of precipitation type or intensity.",
      "the time required for the fluid itself to fully dry after application.",
      "the maximum time an aircraft may legally remain on the ground before departure, regardless of weather.",
    ],
    answer: 0,
    explain:
      "HOT tables give a range (not a single fixed number) that depends on the fluid type/concentration and the specific weather condition (precipitation type and intensity, and outside air temperature) -- it estimates how long the anti-icing protection can be relied on before contamination may begin adhering again, which is why a pre-take-off contamination check is still required if HOT is approached or exceeded.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, Variables that Can Influence Holdover Time",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A pre-take-off contamination inspection (or 'pre-take-off check') is performed",
    options: [
      "as close as practical to the time of take-off, to confirm the aircraft's critical surfaces are still free of contamination before the take-off roll begins.",
      "only once, immediately after de-icing fluid is applied, with no further check required before departure.",
      "only when the crew visually suspects contamination; otherwise it may be omitted entirely.",
      "only on aircraft without an anti-icing fluid application, since anti-iced aircraft are assumed to remain clean.",
    ],
    answer: 0,
    explain:
      "Because contamination can re-accumulate after de-icing/anti-icing (especially as holdover time is used up in ongoing precipitation), a check as close to take-off time as practical -- not just immediately after treatment -- is what actually confirms the clean aircraft concept is still being met at the moment that matters.",
    reference: "TP 690 Section 5 - Critical Surface Contamination, Pre-take-off Inspection",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Within an aircraft's Flight Manual, the data and limitations that have been specifically approved by the certifying authority",
    options: [
      "carry regulatory weight and must be complied with, distinct from other advisory or informational material the manual may also contain.",
      "carry no more weight than any other operating advice printed in the manual.",
      "apply only to the manufacturer's own test pilots, not to line operations.",
      "are limited to the weight and balance section, with all other sections being purely advisory.",
    ],
    answer: 0,
    explain:
      "An Aircraft Flight Manual typically distinguishes approved material (limitations and certified performance data, which are mandatory) from other, non-approved advisory content the manufacturer includes for guidance -- the approved portions are the ones that carry direct regulatory force.",
    reference: "TP 690 Section 5 - Flight Manual, Approved Information",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Volcanic ash presents a particular hazard to jet aircraft because it",
    options: [
      "can cause engine damage or flameout, abrade the windscreen and airframe, and is not reliably detected by onboard weather radar.",
      "is easily detected and displayed by standard onboard weather radar, in the same way precipitation is.",
      "poses a hazard only to piston-engine aircraft, not to turbine engines.",
      "dissipates immediately after an eruption and is not a hazard to aircraft flying more than a few hours later.",
    ],
    answer: 0,
    explain:
      "Volcanic ash can melt and re-solidify inside a hot turbine engine core, causing serious damage or flameout, and it abrades windscreens, leading edges, and other surfaces -- and critically, weather radar is designed to detect water/ice particles, not the fine mineral ash particles in a volcanic cloud, so radar gives a false sense of security in ash-affected airspace. Ash clouds can also persist and drift for very long distances and durations after an eruption.",
    reference: "TP 690 Section 5 - Volcanic Ash, Hazards",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A commonly used rule of thumb for a 3-degree descent path is that the required rate of descent, in feet per minute, is approximately",
    options: [
      "five times the groundspeed in knots.",
      "half the groundspeed in knots.",
      "the groundspeed in knots divided by three.",
      "unrelated to groundspeed, and depends only on altitude to lose.",
    ],
    answer: 0,
    explain:
      "For a standard 3-degree glidepath, a convenient rule of thumb is rate of descent (ft/min) approximately equals groundspeed (kt) multiplied by 5 -- for example, at 140 kt groundspeed, roughly 700 ft/min maintains a 3-degree path. It's a planning aid, not a substitute for the actual glidepath guidance being flown.",
    reference: "TP 690 Section 5 - Airmanship/Rules of Thumb, Rate of Descent",
  },
  {
    id: 25,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A commonly used rule of thumb for planning a top-of-descent point for a 3-degree descent path is that the distance required, in nautical miles, is approximately",
    options: [
      "three times the altitude to be lost, expressed in thousands of feet.",
      "the altitude to be lost, expressed in thousands of feet, with no multiplier.",
      "five times the altitude to be lost, expressed in thousands of feet.",
      "unrelated to the altitude to be lost, and depends only on groundspeed.",
    ],
    answer: 0,
    explain:
      "The '3-to-1' rule of thumb estimates descent distance as roughly 3 NM for every 1,000 ft to be lost on a standard 3-degree path -- so descending from 30,000 ft to sea level would suggest starting descent at roughly 90 NM out, before fine-tuning for wind and speed.",
    reference: "TP 690 Section 5 - Airmanship/Rules of Thumb, Descent Point",
  },
  {
    id: 26,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The recommended lateral avoidance distance from a significant thunderstorm cell is generally at least",
    options: [
      "20 NM.",
      "2 NM.",
      "50 NM, regardless of cell intensity.",
      "there is no recommended distance; avoidance is left entirely to pilot judgment with no guideline.",
    ],
    answer: 0,
    explain:
      "A commonly cited avoidance guideline for a significant thunderstorm cell is to remain at least 20 NM laterally clear, reflecting the fact that hazards (turbulence, hail, lightning, gust fronts) can extend well beyond the visible or radar-painted core of the storm -- not just a couple of miles, but also not an impractically large blanket distance regardless of the storm's actual size and intensity.",
    reference: "TP 690 Section 5 - Airmanship/Rules of Thumb, Thunderstorm Penetration & Avoidance",
  },
  {
    id: 27,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A tailplane stall caused by ice contamination on the horizontal stabilizer differs from a normal wing stall in that a tailplane stall",
    options: [
      "typically produces an uncommanded nose-down pitching moment, and the correct recovery (retracting flaps, easing back pressure rather than pushing forward) is essentially the reverse of a normal wing-stall recovery.",
      "produces exactly the same symptoms and requires exactly the same recovery technique as a normal wing stall.",
      "can only occur with the flaps fully retracted, and never with flaps extended.",
      "is entirely unrelated to ice contamination, and is instead caused only by excessive aft centre of gravity.",
    ],
    answer: 0,
    explain:
      "Ice on the tailplane can cause it to stall (often triggered or worsened by extending flaps, which increases the downwash the tailplane must counter), producing a nose-down pitching tendency and control-force changes that feel very different from -- and in some respects opposite to -- a wing stall. Because the recommended recovery (reducing flap, easing rather than adding forward pressure) is essentially reversed from a normal stall recovery, misdiagnosing a tailplane stall as a wing stall can make the situation worse.",
    reference: "TP 690 Section 5 - Abnormal Flight Procedures/Recovery, Icing, Tailplane Stall, Roll Upset",
  },
  {
    id: 28,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Standard turbulence reporting criteria (light, moderate, severe, extreme) are defined primarily by",
    options: [
      "the observed effect on the aircraft and its occupants -- such as difficulty walking, objects being dislodged, or momentary loss of control -- rather than by a specific numerical value alone.",
      "the exact vertical acceleration recorded by the aircraft's flight data recorder, with no reference to any observed effect.",
      "the type of cloud associated with the turbulence, regardless of its actual effect on the aircraft.",
      "the pilot's total flight time, since more experienced pilots report the same turbulence in a lower category.",
    ],
    answer: 0,
    explain:
      "The standard turbulence intensity categories are described in terms of observable effects -- from slight, rhythmic bumpiness (light) up through changes in altitude/attitude and occupants being forced against their seatbelts (moderate), momentary loss of control and structural damage risk (severe), to extreme turbulence that makes the aircraft impossible to control and can cause structural damage -- giving pilots a shared, effect-based vocabulary for PIREPs rather than requiring an instrumented measurement.",
    reference: "TP 690 Section 5 - Abnormal Flight Procedures/Recovery, Turbulence Reporting Criteria",
  },
];
