// Shared Material — interview experiences and notes organised by airline.
//
// Curated content only for now (no public submission form yet — that's a
// planned future feature). Entries get added here as material is collected;
// each entry should note where/how it was gathered so readers can judge its
// currency, since airline interview processes change over time.

export interface SharedEntry {
  id: number;
  title: string;
  body: string;
  note?: string; // e.g. how/when this was gathered
}

export const AIRLINES = ["Emirates", "Qatar Airways", "Etihad", "Riyadh Air", "FlyDubai"] as const;

export type Airline = (typeof AIRLINES)[number];

export const SHARED_MATERIAL: Record<Airline, SharedEntry[]> = {
  Emirates: [],
  "Qatar Airways": [],
  Etihad: [],
  "Riyadh Air": [
  {
    id: 1,
    title: "Aerodynamics",
    body:
      "What causes Dutch roll on a swept-wing jet? A coupling between yaw and roll — swept wings produce a fairly strong dihedral (roll) effect relative to a comparatively weak directional (yaw) stability, so a yaw disturbance keeps re-triggering a roll response and vice versa; a yaw damper is what keeps it in check.\n\n" +
      "Why do jet aircraft use swept wings? Sweep delays the onset of the critical Mach number and reduces wave drag, which improves efficiency at high cruise speeds.\n\n" +
      "How does true airspeed change with altitude at a constant indicated airspeed? TAS increases with altitude — roughly 2% per 1,000 ft under ISA conditions — because air density falls.\n\n" +
      "How does a forward CG affect cruise performance? It requires more nose-up trim, which adds trim drag and increases fuel burn, shortening range.\n\n" +
      "How does an aft CG affect fuel efficiency? Less trim drag is needed, so efficiency and range both improve — within the certified CG envelope.\n\n" +
      "At what angle of attack does a contaminated wing stall? Earlier than a clean wing — contamination (ice, frost) trips the airflow and reduces the maximum usable angle of attack, so the wing stalls at a lower AoA and a higher indicated speed than normal.\n\n" +
      "What do flaps do? Increase both lift and drag by adding camber and/or wing area, allowing slower takeoff and landing speeds and a steeper approach path.\n\n" +
      "What is laminar flow? Smooth, orderly airflow with low skin-friction drag — and one that's easily disrupted by surface contamination or roughness, at which point it transitions to turbulent flow.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level aerodynamics questions from the technical portion of the interview.",
  },
  {
    id: 2,
    title: "Engines & Systems",
    body:
      "What does the turbine section of a jet engine actually do? It extracts energy from the hot expanding exhaust gas and uses that energy to drive the compressor (and, on a turbofan, the fan and accessories) — it's what keeps the engine running.\n\n" +
      "What's the main job of thrust reversers? They redirect engine thrust forward, helping decelerate the aircraft after landing or during a rejected takeoff.\n\n" +
      "What does a stick pusher do? It automatically pushes the nose down if the angle of attack approaches the stall, to prevent an actual stall from developing.\n\n" +
      "On a fly-by-wire aircraft, what does the flight control computer do? It takes the pilot's control inputs, applies the relevant control law and any flight envelope protections, and translates all of that into commands sent to the control surface actuators.\n\n" +
      "What's the bleed air system used for? Hot, high-pressure air tapped from the engines is used for cabin pressurisation, air conditioning, wing/engine anti-ice, engine starting, and various pneumatic systems.\n\n" +
      "What do stator vanes do inside a jet engine? In the compressor section they straighten and diffuse the airflow between rotor stages; in the turbine section they redirect and accelerate the gas flow onto the next set of turbine blades.\n\n" +
      "Why does an inertial reference system (IRS) develop position errors over time? Because it works by continuously integrating measured accelerations into velocity and position, small sensor errors accumulate the longer it runs, causing the position estimate to drift — which is why it's periodically corrected using GPS or DME updates.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level systems/engines questions from the technical portion of the interview.",
  },
  {
    id: 3,
    title: "Meteorology",
    body:
      "What are isobars? Lines on a weather chart joining points of equal atmospheric pressure.\n\n" +
      "How is a jet stream shown on a significant weather chart? As a core line with arrows showing direction, shaded bands (isotachs) showing speed, and labels for wind speed and the flight level(s) it's found at.\n\n" +
      "What causes a sea breeze? Land heats up faster than the adjacent sea during the day, creating slightly lower pressure over the land, which draws in a cooler onshore flow from the sea.\n\n" +
      "What typically causes a temperature inversion in the troposphere? Either radiational cooling of the surface (commonly overnight) or subsidence warming air aloft — either way, temperature increases with height instead of the usual decrease.\n\n" +
      "What is a microburst? A small but intense, highly localised downdraft that spreads out on hitting the ground, producing severe and hazardous wind shear close to the surface.\n\n" +
      "What are the hazards of clear air turbulence? It strikes with no visual warning, and can be strong enough to cause passenger/crew injury and significant structural loads — it's most often encountered near jet streams.\n\n" +
      "What characterises a cold front? A steep frontal slope, a relatively narrow band of showers or cumulonimbus, turbulence and gusty winds, a wind direction shift, falling temperature, and rising pressure once it has passed.\n\n" +
      "What is the tropopause? The boundary between the troposphere and the stratosphere, marked by the normal decrease of temperature with height levelling off to become roughly constant.\n\n" +
      "Roughly where does the troposphere end? It varies with latitude — roughly FL550 near the equator, FL350-400 in the mid-latitudes, and around FL250 near the poles.\n\n" +
      "What altimeter error occurs flying from a warmer air mass into a colder one? True altitude ends up lower than what the altimeter indicates — the classic memory aid is 'from hot to cold, don't be bold', since the aircraft is actually lower than it appears.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level meteorology questions from the technical portion of the interview.",
  },
  {
    id: 4,
    title: "Performance",
    body:
      "How does aircraft weight affect takeoff distance? A heavier aircraft needs a significantly longer takeoff roll — the relationship is roughly proportional to the square of the weight, since a heavier aircraft needs a higher speed to generate enough lift, and distance grows with the square of that speed.\n\n" +
      "How does a contaminated runway (standing water, slush, snow) affect landing distance? Landing distance increases, mainly due to reduced braking effectiveness and the risk of hydroplaning.\n\n" +
      "What's the standard formula for hydroplaning speed? Roughly 9 times the square root of the tyre pressure in psi, giving a speed in knots — for typical transport-category tyre pressures this generally works out to somewhere around 100-150 kt.\n\n" +
      "How does pressure altitude affect climb performance? Higher pressure altitude means lower air density, which reduces available engine thrust and degrades climb performance.\n\n" +
      "How does pressure altitude affect thrust available versus thrust required? Available thrust decreases with altitude, while the thrust required for a given indicated airspeed actually increases, since true airspeed for that same indicated speed is higher at altitude.\n\n" +
      "If outside air temperature rises, what happens to the required takeoff thrust setting? Higher OAT reduces the thrust an engine can produce for a given setting, so a higher thrust setting may be needed for takeoff (less derate, or full rated thrust).\n\n" +
      "What should be done if fuel temperature approaches its freezing limit? Descend or increase speed to raise the total air temperature, use fuel heaters if fitted, and keep monitoring the fuel temperature against its limits.\n\n" +
      "When does de-icing/anti-icing fluid holdover time end? At whichever comes first: the fluid no longer effectively prevents contamination building up, or the published holdover time for the current conditions has expired.",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level performance questions from the technical portion of the interview.",
  },
  {
    id: 5,
    title: "Navigation & Instruments",
    body:
      "What happens if you fly from a region of high pressure into one of low pressure without resetting the altimeter? The aircraft ends up lower than the altimeter indicates — the classic memory aid is 'from high to low, look out below'.\n\n" +
      "What does Mach number represent? The ratio of true airspeed to the local speed of sound.\n\n" +
      "What does a course deviation indicator (CDI) show? Lateral deviation from a selected VOR radial or localiser course — it's centred when the aircraft is exactly on that course.\n\n" +
      "Tracking to a VOR with a 20 kt tailwind, does that affect the standard bearing-change method for estimating time to the station? The method itself still works — it's based on the rate of bearing change, not groundspeed directly — although the actual groundspeed (and therefore the real time to the station) does change with the wind.\n\n" +
      "What is WAAS? A Wide Area Augmentation System — it improves GPS accuracy using a network of ground reference stations and geostationary satellites to broadcast correction signals (an example of a satellite-based augmentation system).",
    note: "Reported by a candidate who interviewed for a first officer role at Riyadh Air — general ATPL-level navigation/instruments questions from the technical portion of the interview.",
  },
  ],
  FlyDubai: [],
};
