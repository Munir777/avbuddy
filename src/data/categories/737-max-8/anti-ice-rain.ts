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
  {
    id: 11,
    system: "Anti-Ice & Rain",
    q: "Besides chemical rain repellent, what other general method can help remove heavy rain from the windshield?",
    options: [
      "Conventional windshield wipers, which remain effective for a wide range of rain intensities and speeds even though they become less effective at very high approach/landing speeds",
      "A dedicated pneumatic rain-removal system is the only method ever used, with wipers never fitted",
      "Rain is only ever removed by natural airflow, with no wiper or chemical system fitted at all",
      "Rain removal is accomplished solely by increasing cabin pressurization",
    ],
    answer: 0,
    explain:
      "Conventional windshield wipers remain a standard, straightforward method of clearing rain across a wide range of conditions, complementing the chemical rain repellent system that becomes especially useful at the higher speeds where mechanical wiper effectiveness starts to fall off.",
    reference: "Anti-Ice & Rain - Windshield Rain Removal Methods",
  },
  {
    id: 12,
    system: "Anti-Ice & Rain",
    q: "What is the general distinction between an 'anti-ice' system and a 'de-ice' system?",
    options: [
      "An anti-ice system works continuously or proactively to prevent ice from forming in the first place, while a de-ice system is typically cycled to periodically remove ice that has already accumulated",
      "The two terms describe exactly the same function with no meaningful difference",
      "De-ice systems only work in the air, while anti-ice systems only work on the ground",
      "Anti-ice systems remove existing ice, while de-ice systems prevent ice from ever forming",
    ],
    answer: 0,
    explain:
      "An anti-ice system is generally designed to run proactively (often continuously) to prevent ice from ever accumulating on the protected surface in the first place, whereas a de-ice system is more commonly designed to be cycled on and off, allowing a small amount of ice to build up before it's periodically shed - two different philosophies for handling the same underlying icing risk.",
    reference: "Anti-Ice & Rain - Anti-Ice vs De-Ice Distinction",
  },
  {
    id: 13,
    system: "Anti-Ice & Rain",
    q: "Why might crews apply an airspeed additive (a small increase to the normal approach speed) after flying through significant airframe icing?",
    options: [
      "Any residual ice that anti-ice/de-ice systems haven't fully removed can degrade the wing's aerodynamic performance, so extra speed provides additional margin above the stall in that degraded condition",
      "The additive is used only to reduce fuel burn, unrelated to icing",
      "Airspeed additives are applied only in conditions with absolutely no icing risk",
      "An airspeed additive is applied to intentionally slow the aircraft down further",
    ],
    answer: 0,
    explain:
      "Even effective anti-ice and de-ice systems may not remove every trace of ice from every surface, and residual ice can degrade lift and increase stall speed, so adding some extra airspeed above the normal reference speed after a significant icing encounter provides additional margin above the stall in that potentially degraded aerodynamic condition.",
    reference: "Anti-Ice & Rain - Speed Additive After Icing",
  },
  {
    id: 14,
    system: "Anti-Ice & Rain",
    q: "Why might a minimum equipment list generally impose a dispatch restriction (such as avoiding known or forecast icing conditions) if a wing or engine anti-ice system is inoperative?",
    options: [
      "Without that protection functioning, the aircraft would lack an important defense against ice accumulation, so dispatch is restricted to conditions where that protection isn't expected to be needed",
      "Anti-ice systems have no bearing on dispatch decisions under any circumstances",
      "The restriction applies only when every anti-ice system on the aircraft is simultaneously inoperative",
      "MEL dispatch restrictions apply only to hydraulic systems, never to anti-ice",
    ],
    answer: 0,
    explain:
      "If an anti-ice system that would normally protect against ice accumulation is inoperative, dispatching into conditions where ice is actually expected would remove an important layer of protection, so a dispatch restriction along those lines - avoiding known or forecast icing - helps ensure the aircraft isn't relying on a system that isn't there to help.",
    reference: "Anti-Ice & Rain - Dispatch Restriction With Anti-Ice Inoperative",
  },
  {
    id: 15,
    system: "Anti-Ice & Rain",
    q: "In general terms, why are engines certified to tolerate ingesting a defined amount of rain and hail without a resulting flameout or serious damage?",
    options: [
      "Because operating through heavy rain or hail showers is a realistic operational scenario, so engines are tested and certified to keep running reliably through a representative amount of water/hail ingestion",
      "Because engines never actually encounter rain or hail under any real operating condition",
      "Because rain and hail ingestion has no effect on engine operation regardless of quantity",
      "Because certification testing only considers dry-air conditions, with no water ingestion testing performed",
    ],
    answer: 0,
    explain:
      "Since aircraft realistically do fly through rain showers and, at times, hail, engines are certified against defined water and hail ingestion tests to demonstrate they keep operating reliably (without flaming out or suffering serious damage) through a representative amount of ingestion - reflecting a real operational condition rather than an idealized dry-air-only environment.",
    reference: "Anti-Ice & Rain - Engine Water/Hail Ingestion Certification",
  },
];
