import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 52 -- Section 6: Theory of
// Flight, sixth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions) and
// established aerodynamic principles. Covers static margin, roll
// damping, directional (weathercock) stability, induced vs parasite
// drag variation with speed, indicated stall speed vs altitude,
// power-on vs power-off stall speed, elevator effectiveness near
// aft CG, flaps lowering critical AoA, the V-n diagram, maneuvering
// speed, Vne's structural basis, best angle vs best rate of climb,
// power and thrust required/available curves, spin vs spiral dive,
// and aerodynamic center vs center of pressure -- topics not yet
// addressed in batches 6, 14, 23, 32, or 42. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_52_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's static margin -- the distance between its centre of gravity and its neutral point, expressed as a fraction of the mean aerodynamic chord -- is significant because",
    options: [
      "a larger static margin always corresponds to less stability, the reverse of its actual relationship to an aircraft's stability characteristics.",
      "static margin is a purely lateral (roll-related) concept, unrelated to longitudinal (pitch) stability in any way.",
      "a larger static margin (CG further ahead of the neutral point) generally corresponds to greater positive longitudinal static stability, while a smaller margin corresponds to a less stable, more responsive aircraft.",
      "static margin has no relationship whatsoever to longitudinal stability, since stability is determined entirely by wing area rather than any CG-to-neutral-point relationship.",
    ],
    answer: 2,
    explain:
      "Static margin -- the distance between the CG and the neutral point, expressed as a fraction of mean aerodynamic chord -- reflects the degree of positive longitudinal static stability: a larger margin (CG further ahead of the neutral point) generally means greater stability and less pitch sensitivity, while a smaller margin means a less stable, more responsive aircraft; it is not determined by wing area alone, and it is fundamentally a longitudinal (pitch), not lateral (roll), stability concept.",
    reference: "TP 690 - Theory of Flight: Longitudinal Stability",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Roll damping, an aerodynamic effect that opposes a developing roll rate once ailerons are applied, arises because",
    options: [
      "roll damping has no aerodynamic basis at all, since roll rate is understood to increase indefinitely and without limit for as long as aileron deflection is held, regardless of aircraft type or speed.",
      "the ailerons themselves physically lock in place once a certain roll rate is reached, mechanically preventing any further increase in roll rate.",
      "roll damping applies only to yaw rate, not roll rate, despite what its name would otherwise suggest about the axis it actually affects.",
      "the downgoing wing experiences an increased effective angle of attack (and the upgoing wing a decreased one) due to the roll rate itself, generating a moment that opposes further roll acceleration.",
    ],
    answer: 3,
    explain:
      "Roll damping arises because, once the aircraft begins rolling, the downgoing wing experiences an increased effective angle of attack (and corresponding increased lift) while the upgoing wing experiences a decreased effective angle of attack, generating an aerodynamic moment that opposes further roll acceleration -- this is why roll rate stabilizes at a steady value for a given aileron deflection rather than increasing without limit, and it is a genuine aerodynamic effect (not a mechanical aileron lock) acting about the roll, not the yaw, axis.",
    reference: "TP 690 - Theory of Flight: Roll Stability and Damping",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Directional (weathercock) stability, provided primarily by the vertical fin/rudder area behind the centre of gravity, describes an aircraft's tendency to",
    options: [
      "realign its nose back into the relative airflow following a yaw disturbance, much as a weathervane aligns itself with the wind.",
      "continue yawing further away from the relative airflow following any disturbance, the opposite of a stabilizing, restoring tendency.",
      "roll, rather than yaw, back toward wings-level following a disturbance, making 'directional stability' a misleading description of a roll-axis phenomenon.",
      "have no aerodynamic basis at all, since directional stability is understood to be provided entirely by the ailerons rather than the vertical fin.",
    ],
    answer: 0,
    explain:
      "Directional (weathercock) stability, provided primarily by the vertical fin and rudder area located behind the centre of gravity, describes the aircraft's tendency to realign its nose back into the relative airflow following a yaw disturbance -- analogous to a weathervane aligning with the wind -- rather than yawing further away from it; it is fundamentally a yaw-axis stability characteristic provided by the vertical tail surfaces, not a roll-axis effect from the ailerons.",
    reference: "TP 690 - Theory of Flight: Directional Stability",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "On a total drag curve plotted against airspeed, induced drag and parasite drag behave differently in that",
    options: [
      "both induced drag and parasite drag increase identically with airspeed, meaning the two drag components cannot be meaningfully distinguished on a total drag curve.",
      "induced drag is greatest at low airspeed (where a high angle of attack is needed to generate the required lift) and decreases as speed increases, while parasite drag increases with the square of airspeed.",
      "neither drag component varies with airspeed at all, since total drag is understood to remain constant across the entire speed range of an aircraft.",
      "induced drag increases with the square of airspeed while parasite drag decreases as speed increases, the exact reverse of their actual respective relationships to airspeed throughout the whole flight envelope.",
    ],
    answer: 1,
    explain:
      "Induced drag is greatest at low airspeed, where a high angle of attack is needed to generate the required lift, and decreases as speed increases and less angle of attack is needed, while parasite drag increases roughly with the square of airspeed -- these opposing trends are what give the total drag curve its characteristic shape and define the speed for minimum total drag (best L/D), rather than the two components behaving identically or remaining constant with speed.",
    reference: "TP 690 - Theory of Flight: Drag Curves",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a given aircraft weight and configuration, the indicated stalling speed",
    options: [
      "is undefined above a certain altitude, since the concept of an indicated stalling speed is understood to apply only near sea level.",
      "increases substantially with altitude, since higher altitude is understood to always require a correspondingly higher indicated stalling speed for the same weight, configuration, and bank angle at every phase of flight.",
      "remains essentially constant regardless of altitude, since indicated airspeed is itself a measure of dynamic pressure, and the same dynamic pressure is required to generate the same lift at the stall.",
      "decreases substantially with altitude, since higher altitude is understood to always require a correspondingly lower indicated stalling speed for the same weight and configuration.",
    ],
    answer: 2,
    explain:
      "Indicated stalling speed remains essentially constant regardless of altitude for a given weight and configuration, because indicated airspeed itself reflects dynamic pressure, and the same dynamic pressure is needed to generate the required lift at the stall whatever the altitude -- even though true airspeed at the stall increases with altitude (as air density decreases), the indicated value does not, and the concept remains meaningfully defined at any operating altitude.",
    reference: "TP 690 - Theory of Flight: Stalling Speed",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a propeller-driven aircraft, power-on stalling speed is generally somewhat lower than power-off stalling speed for the same weight and configuration, primarily because",
    options: [
      "power-on stalling speed is always higher, not lower, than power-off stalling speed, the reverse of the actual relationship typically observed.",
      "engine power has no aerodynamic effect on stalling speed whatsoever, making power-on and power-off stalling speeds identical for any propeller-driven aircraft type or configuration.",
      "the effect applies only to jet aircraft, since propeller slipstream is understood to have no influence on stalling speed for any propeller-driven type.",
      "propeller slipstream over the wing root and inboard sections, along with a favourable thrust vector component, can delay the stall and reduce the airspeed at which it occurs.",
    ],
    answer: 3,
    explain:
      "In a propeller-driven aircraft, power-on stalling speed is generally somewhat lower than power-off stalling speed for the same weight and configuration, because propeller slipstream flowing over the wing root and inboard sections, along with a favourable thrust vector component at a high pitch attitude, can delay the stall and reduce the speed at which it occurs -- this effect is specific to propeller slipstream and does not apply in the same way to jet aircraft without a comparable slipstream effect.",
    reference: "TP 690 - Theory of Flight: Power Effects on Stall",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "As an aircraft's centre of gravity moves aft, toward its approved aft limit, elevator (or stabilator) authority for pitch control and stall recovery generally",
    options: [
      "decreases somewhat, since a more aft CG reduces the moment arm and effectiveness available to the elevator for a given control deflection, all else being equal.",
      "becomes entirely unrelated to stall recovery, since elevator authority near the stall is determined exclusively by flap position rather than CG location.",
      "remains completely unaffected by CG position, since elevator authority is understood to depend solely on airspeed and never on the CG's fore-aft location.",
      "increases substantially, since a more aft CG is understood to always improve, rather than reduce, elevator control authority and effectiveness.",
    ],
    answer: 0,
    explain:
      "As the CG moves aft toward its approved limit, elevator (or stabilator) authority for pitch control and stall recovery generally decreases somewhat, since a more aft CG reduces the moment arm and resulting effectiveness available to the elevator for a given control surface deflection -- this is one of the reasons aft CG limits are established, rather than aft CG improving control authority, and while airspeed and flap position also matter, CG position is a real and relevant factor.",
    reference: "TP 690 - Theory of Flight: CG Effects on Control",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Extending trailing edge flaps generally has the effect, in addition to increasing CLmax, of",
    options: [
      "raising the critical angle of attack at which the wing stalls, in addition to raising CLmax, with both values increasing together as flaps are extended.",
      "lowering the absolute (actual) critical angle of attack at which the wing stalls, even as the maximum lift coefficient achieved at that lower angle increases.",
      "eliminating the concept of a critical angle of attack entirely for the flap-extended configuration, since a flapped wing is understood to be incapable of stalling.",
      "leaving the critical angle of attack completely unchanged, since flap extension is understood to affect CLmax exclusively with no corresponding effect on stall angle.",
    ],
    answer: 1,
    explain:
      "Extending trailing edge flaps generally lowers the absolute (actual) critical angle of attack at which the wing stalls, even though the maximum lift coefficient (CLmax) achieved at that now-lower angle of attack is increased -- this is why a flapped wing stalls at a visibly lower nose-up pitch attitude for a given airspeed than the clean wing would, rather than the critical angle of attack rising alongside CLmax, remaining unchanged, or the concept ceasing to apply.",
    reference: "TP 690 - Theory of Flight: Flap Effects",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A V-n (velocity-load factor, or maneuvering) diagram for an aircraft generally depicts",
    options: [
      "a chart used exclusively for navigation route planning, with no application whatsoever to aircraft structural or aerodynamic limits.",
      "only the aircraft's maximum permissible airspeed, with no depiction of load factor or any structural limit at any speed.",
      "the structural positive and negative load factor limits across a range of airspeeds, showing how the maximum load factor the aircraft can safely sustain (or generate aerodynamically) varies with speed.",
      "only the aircraft's fuel consumption at various speeds, a performance parameter unrelated to structural load factor limits.",
    ],
    answer: 2,
    explain:
      "A V-n diagram depicts the structural positive and negative load factor limits across a range of airspeeds, showing both the aerodynamic limit (the load factor at which the wing stalls at a given speed) and the structural limit (the maximum load factor the airframe is built to withstand), and how the effective maximum sustainable load factor varies with speed -- it is not a fuel consumption chart, a navigation planning tool, or a depiction of airspeed alone without any load factor information.",
    reference: "TP 690 - Theory of Flight: V-n Diagram",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Maneuvering speed (Va), the speed at or below which full, abrupt control deflection should not overstress the airframe, is generally",
    options: [
      "higher at a lower weight than at a higher weight, the reverse of the actual relationship between maneuvering speed and aircraft weight.",
      "unrelated to load factor limits entirely, since maneuvering speed is understood to be determined solely by airspeed indicator markings rather than any structural, aerodynamic, or weight-based consideration whatsoever.",
      "identical at every weight, since maneuvering speed is understood to be a fixed value entirely independent of the aircraft's actual weight at the time.",
      "lower at a lower aircraft weight than at a higher weight, since a lighter aircraft reaches its aerodynamic (stall) load factor limit -- rather than exceeding the structural limit -- at a correspondingly lower speed.",
    ],
    answer: 3,
    explain:
      "Maneuvering speed is lower at a lower aircraft weight than at a higher weight, because at a lighter weight the wing reaches its aerodynamic (stall) load factor limit -- rather than the aircraft exceeding its structural load factor limit -- at a correspondingly lower speed, which is the underlying design intent behind Va; it is not a single fixed value independent of weight, and it is directly tied to load factor and stall considerations rather than being an arbitrary instrument marking.",
    reference: "TP 690 - Theory of Flight: Maneuvering Speed",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An aircraft's never-exceed speed (Vne) is generally established with a structural or aeroelastic margin primarily to protect against",
    options: [
      "phenomena such as aeroelastic flutter, control surface reversal, or other high-speed structural risks that become more likely as airspeed increases toward and beyond the aircraft's design limits.",
      "running out of usable runway length during takeoff or landing, a ground-roll performance concern entirely unrelated to any airspeed limit applicable throughout the rest of the aircraft's flight envelope.",
      "excessive fuel consumption at high speed, a purely economic consideration rather than a structural or aeroelastic safety concern.",
      "passenger discomfort from noise at high speed, a cabin comfort consideration unrelated to any structural or aeroelastic risk.",
    ],
    answer: 0,
    explain:
      "Never-exceed speed (Vne) is established with a margin primarily to protect against high-speed structural and aeroelastic risks such as flutter or control surface reversal, which become more likely as airspeed increases toward and beyond the aircraft's design limits -- it is fundamentally a structural safety limit, not primarily an economic fuel-consumption consideration, a cabin noise comfort limit, or a runway length concern.",
    reference: "TP 690 - Theory of Flight: Vne and Flutter Margin",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "Best angle of climb speed, as distinguished from best rate of climb speed, corresponds to the speed that provides",
    options: [
      "the lowest possible fuel burn during the climb segment, a purely economic criterion unrelated to altitude gained per unit of horizontal distance or time.",
      "the greatest altitude gain for a given horizontal distance travelled, generally a lower speed than best rate of climb, making it useful for clearing an obstacle close to the departure end of a runway.",
      "the greatest altitude gain for a given amount of time, an outcome that is, by definition, identical to best rate of climb speed rather than a distinct concept.",
      "the highest possible true airspeed the aircraft can sustain in a climb, a speed value that has no meaningful relationship whatsoever to the aircraft's actual rate or angle of altitude gain at any weight.",
    ],
    answer: 1,
    explain:
      "Best angle of climb speed provides the greatest altitude gain for a given horizontal distance travelled, and is generally a lower speed than best rate of climb speed (which instead provides the greatest altitude gain for a given amount of time) -- this makes best angle of climb particularly useful for clearing an obstacle close to the departure end of a runway, and the two speeds are distinct concepts, not the same value defined differently or determined by fuel economy or maximum sustainable airspeed.",
    reference: "TP 690 - Theory of Flight: Climb Performance",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a propeller-driven aircraft, best rate of climb is fundamentally determined by the speed at which",
    options: [
      "the aircraft is flown at its absolute maximum permissible airspeed, since higher speed alone is understood to always produce the greatest climb rate for any propeller-driven aircraft type at any weight or altitude.",
      "power required exceeds power available by the greatest margin, the reverse of the condition that actually maximizes climb rate.",
      "the excess power available (power available from the engine/propeller combination minus power required for level flight) is at its maximum, since climb rate depends on excess power rather than excess thrust alone.",
      "excess thrust, rather than excess power, is at its maximum, making thrust the determining factor for a propeller aircraft's climb performance rather than power.",
    ],
    answer: 2,
    explain:
      "For a propeller-driven aircraft, best rate of climb occurs at the speed where excess power -- power available from the engine/propeller combination minus power required for level flight -- is at its maximum, since climb rate is fundamentally a power-based (rather than purely thrust-based) relationship for propeller aircraft; it does not occur where power required exceeds power available, and simply flying at the highest permissible airspeed does not produce the maximum excess power or the best rate of climb.",
    reference: "TP 690 - Theory of Flight: Power Curves and Climb",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "For a jet aircraft, excess thrust (thrust available minus thrust required for level flight at a given speed) is the parameter most directly associated with",
    options: [
      "cruise fuel efficiency exclusively, with no relationship whatsoever to the aircraft's ability to climb at a given speed.",
      "the aircraft's maximum operating altitude, a factor understood to be entirely unrelated to thrust available versus thrust required at any given speed.",
      "landing distance performance exclusively, a ground-roll consideration unrelated to the in-flight thrust-versus-drag relationship used to assess climb capability.",
      "climb performance, since the rate of climb is fundamentally related to the excess thrust (and resulting excess power) available at a given speed and altitude.",
    ],
    answer: 3,
    explain:
      "For a jet aircraft, excess thrust -- thrust available minus thrust required for level flight at a given speed -- is directly associated with climb performance, since the rate of climb depends fundamentally on the excess thrust (and the resulting excess power) available at a given speed and altitude; while fuel efficiency and maximum altitude are influenced by the overall thrust-drag relationship, excess thrust's primary and most direct application in this context is assessing climb capability, not landing distance.",
    reference: "TP 690 - Theory of Flight: Thrust Curves and Climb",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "A spin is distinguished from a spiral dive primarily in that, during a spin, the aircraft is",
    options: [
      "in an aerodynamically stalled condition on at least one wing throughout the rotation, whereas a spiral dive is an unstalled, steep descending turn with rapidly increasing airspeed.",
      "never stalled at any point, making a spin functionally identical to a spiral dive in terms of the wing's aerodynamic state throughout the maneuver.",
      "gaining, rather than losing, altitude throughout the maneuver, the opposite of the altitude loss actually associated with both a spin and a spiral dive.",
      "always recovered using the exact same control inputs used to recover from a spiral dive, since the two maneuvers are understood to require an identical recovery technique regardless of aircraft type.",
    ],
    answer: 0,
    explain:
      "A spin involves an aerodynamically stalled condition on at least one wing throughout the rotation, with the aircraft descending while rotating about a fairly constant, relatively steep attitude and relatively low, roughly constant airspeed, whereas a spiral dive is an unstalled, steep, continuously tightening descending turn with rapidly increasing airspeed -- because the wing's aerodynamic state differs fundamentally between the two, their recovery techniques also differ (a spin requires first breaking the stall, while a spiral dive requires reducing bank and power without over-stressing the airframe), and both involve losing, not gaining, altitude.",
    reference: "TP 690 - Theory of Flight: Spin vs Spiral Dive",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Theory of Flight",
    q: "An airfoil's aerodynamic center, as distinguished from its center of pressure, is best described as",
    options: [
      "a point that moves substantially forward and aft with changing angle of attack, while the center of pressure is understood to remain fixed -- the reverse of their actual respective behaviours.",
      "a fixed reference point (typically near the quarter-chord on a subsonic airfoil) about which the pitching moment coefficient remains essentially constant as angle of attack changes, unlike the center of pressure, which moves.",
      "exactly the same point as the center of pressure at every angle of attack, making the two terms fully interchangeable descriptions of a single, identical location.",
      "a purely structural attachment point with no aerodynamic significance, unrelated to pitching moment or lift distribution in any way.",
    ],
    answer: 1,
    explain:
      "The aerodynamic center is a fixed reference point on an airfoil (typically near the quarter-chord for a subsonic airfoil) about which the pitching moment coefficient remains essentially constant as angle of attack changes, in contrast to the center of pressure, which moves fore and aft as angle of attack changes -- the two are distinct concepts with essentially opposite behaviour regarding movement, not interchangeable terms, and the aerodynamic center is a genuinely meaningful aerodynamic (not merely structural) reference point.",
    reference: "TP 690 - Theory of Flight: Aerodynamic Center",
  },
];
