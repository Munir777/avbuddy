import type { Question } from "../../../types";

// 737 MAX 8 - Anti-Ice & Rain Protection. Original, independently-written
// questions based on general/public 737-family systems knowledge (not
// sourced from any operator-specific or manufacturer-proprietary document) -
// no company, airline, publisher, or person names.
export const B737_ANTI_ICE_RAIN_QUESTIONS: Question[] = [
  {
    id: 1,
    system: "Anti-Ice & Rain",
    q: "How is flight deck windshield anti-icing/anti-fogging typically provided?",
    options: [
      "By an electrically heated conductive coating or element built into the windshield panel itself",
      "By hot bleed air blown directly across the outside of the windshield",
      "By a chemical de-icing fluid sprayed continuously in flight",
      "Windshields on this class of aircraft have no anti-ice protection at all",
    ],
    answer: 0,
    explain:
      "Flight deck windshields are typically kept clear of ice and internal fogging by electrical heating - a conductive element or coating within the windshield panel itself that's controlled to a target temperature - rather than by bleed air or a fluid spray, since the windshield needs consistent, controllable heating across its whole viewing area.",
    reference: "Anti-Ice & Rain - Windshield Heat",
  },
  {
    id: 2,
    system: "Anti-Ice & Rain",
    q: "What is the general purpose of a rain repellent system, as distinct from the windshield wipers?",
    options: [
      "It applies a chemical fluid to the windshield's outer surface that causes rain to bead up and blow away, improving visibility, especially at higher speeds where wipers become less effective",
      "It is simply another name for the windshield heating system",
      "It removes ice rather than rain, with no effect on rain at all",
      "It functions only while the aircraft is stationary on the ground",
    ],
    answer: 0,
    explain:
      "A rain repellent system sprays a chemical fluid onto the windshield's outer surface that changes how rain behaves on the glass - causing it to bead and blow off in the airstream rather than sheet across the surface - which is particularly useful at the higher approach/landing speeds where mechanical wipers alone become less effective at clearing heavy rain.",
    reference: "Anti-Ice & Rain - Rain Repellent",
  },
  {
    id: 3,
    system: "Anti-Ice & Rain",
    q: "Why does turning on engine anti-ice (bleed-air-based) sometimes come with a related reduction in available engine performance limits?",
    options: [
      "Diverting some compressor bleed air to anti-icing reduces the airflow otherwise available to produce thrust, so a lower thrust/EGT limit may apply while it's selected on",
      "Engine anti-ice has no relationship to engine performance limits whatsoever",
      "Engine anti-ice always increases the available thrust limit rather than reducing it",
      "Engine anti-ice is only usable with the engines shut down",
    ],
    answer: 0,
    explain:
      "Because engine anti-icing draws bleed air from the compressor, that air is no longer available to contribute to thrust, so many types apply a correspondingly adjusted (often lower) thrust or EGT limit while engine anti-ice is selected on, reflecting the reduced margin that remains once bleed air has been diverted to anti-icing.",
    reference: "Anti-Ice & Rain - Engine Anti-Ice Performance Effect",
  },
  {
    id: 4,
    system: "Anti-Ice & Rain",
    q: "What is the general purpose of an automatic ice detection system?",
    options: [
      "It senses the onset of ice-forming conditions and alerts the crew (or, on some installations, can automatically activate anti-ice systems) without relying solely on the crew visually noticing ice",
      "It only detects ice after it has already accumulated to a hazardous thickness on the wings",
      "It measures fuel temperature rather than airframe icing",
      "It functions only while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "An ice detection system is designed to sense the onset of icing conditions directly (rather than requiring the crew to visually identify ice forming, which can be difficult at night or on surfaces the crew can't easily see), alerting the crew - and on some installations, supporting automatic anti-ice activation - so protection can be applied promptly.",
    reference: "Anti-Ice & Rain - Ice Detection",
  },
  {
    id: 5,
    system: "Anti-Ice & Rain",
    q: "Why are anti-ice systems typically checked for correct operation during a pre-flight or engine-start procedure, even in clearly warm, ice-free conditions?",
    options: [
      "To confirm the system itself is functioning correctly before it's actually needed, since a fault might otherwise only be discovered once the aircraft is already in icing conditions",
      "Because anti-ice systems can only be tested when it is warm outside",
      "Because regulations only require the check once per aircraft, not per flight",
      "Testing in warm conditions has no purpose and is done purely as a formality with no real check involved",
    ],
    answer: 0,
    explain:
      "Verifying anti-ice system operation on the ground - regardless of the actual outside temperature - confirms the system itself is functional before the flight, since discovering a fault only after encountering real icing conditions in flight would be a much worse time to find out; a functional check doesn't require actual ice to be present.",
    reference: "Anti-Ice & Rain - Pre-Flight System Checks",
  },
  {
    id: 6,
    system: "Anti-Ice & Rain",
    q: "Why is wing leading-edge (thermal bleed-air) anti-ice typically inhibited or restricted while the aircraft is stationary on the ground with engines producing high power?",
    options: [
      "Without forward airflow to help carry the heat away, the leading edge structure could overheat from the concentrated bleed air heating while the aircraft isn't moving",
      "Ground anti-ice use has no restriction of any kind compared with in-flight use",
      "It is restricted only to reduce noise on the ramp",
      "It is restricted because bleed air is entirely unavailable while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "In flight, forward airspeed helps carry heat away from the anti-iced leading edge surfaces; without that airflow while stationary on the ground, the same bleed-air heating that's safe in flight can risk locally overheating the structure, which is why wing anti-ice use is typically restricted or handled differently during extended high-power ground operation.",
    reference: "Anti-Ice & Rain - Ground Use Restriction",
  },
  {
    id: 7,
    system: "Anti-Ice & Rain",
    q: "Why is pitot, static, and angle-of-attack probe heating generally left on continuously in flight, rather than only being switched on once the crew visually notices icing conditions?",
    options: [
      "Ice can form on these small, safety-critical probes quickly and sometimes without being visually obvious to the crew, so continuous heating avoids depending on the crew to notice and react in time",
      "These probes are never at risk of icing under any conditions",
      "Continuous heating is used only to prevent lightning strikes",
      "It is switched on only after landing, never in flight",
    ],
    answer: 0,
    explain:
      "Because these probes are small, safety-critical, and can ice over quickly - sometimes without being visually apparent to the crew from the flight deck - probe heating is generally kept on continuously in flight rather than being something the crew has to remember to activate only once icing is noticed, removing a step that could otherwise be missed.",
    reference: "Anti-Ice & Rain - Continuous Probe Heating",
  },
  {
    id: 8,
    system: "Anti-Ice & Rain",
    q: "Besides the wing leading edge, what other engine-related surface is commonly protected by thermal (bleed-air) anti-ice?",
    options: [
      "The engine inlet cowl/lip, to prevent ice from forming there and potentially being ingested into the engine",
      "The engine exhaust nozzle only, with the inlet left completely unprotected",
      "Only the fan blades themselves, with the inlet cowl left unprotected",
      "No engine surface besides the wing leading edge is ever anti-iced",
    ],
    answer: 0,
    explain:
      "The engine inlet cowl/lip is commonly protected with thermal (bleed-air) anti-ice as well, since ice forming there could break off and be ingested into the engine core or fan - a distinct anti-ice application from the wing leading edge, but using a similar bleed-air-based approach.",
    reference: "Anti-Ice & Rain - Engine Inlet Anti-Ice",
  },
  {
    id: 9,
    system: "Anti-Ice & Rain",
    q: "What is the general benefit of an 'automatic' anti-ice mode that can engage protection based on ice-detection input, compared with a purely manual on/off selection?",
    options: [
      "It can activate anti-ice protection as soon as icing conditions are detected, without depending on the crew to notice the conditions and select it manually",
      "Automatic mode permanently disables the ability to manually select anti-ice at all",
      "It has no advantage over manual selection in any respect",
      "It only works while the aircraft is on the ground",
    ],
    answer: 0,
    explain:
      "An automatic anti-ice mode tied to ice-detection input can turn protection on as soon as icing conditions are actually sensed, reducing the chance of a delay between conditions developing and the crew noticing and manually selecting anti-ice on - while a manual mode remains available for the crew to select protection proactively regardless of what the detector reports.",
    reference: "Anti-Ice & Rain - Automatic vs Manual Anti-Ice Selection",
  },
  {
    id: 10,
    system: "Anti-Ice & Rain",
    q: "Why do anti-ice systems generally have a defined temperature band in which icing is considered a genuine risk, rather than needing to run in all conditions?",
    options: [
      "Airframe icing generally requires both sufficiently cold temperatures and the presence of moisture, so anti-ice need/activation logic is built around that specific combination rather than temperature alone",
      "Icing risk is completely unrelated to temperature",
      "Anti-ice systems must always run throughout every flight regardless of conditions",
      "The temperature band exists only to control cabin comfort, not actual icing risk",
    ],
    answer: 0,
    explain:
      "Airframe icing generally needs both a sufficiently cold temperature and the presence of moisture (visible or otherwise) to actually occur, so anti-ice activation guidance and detection logic are built around that combined condition - well below freezing with no moisture present, for example, doesn't carry the same icing risk as conditions nearer freezing with visible moisture.",
    reference: "Anti-Ice & Rain - Icing Condition Temperature Band",
  },
];
