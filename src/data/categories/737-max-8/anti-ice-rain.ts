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
];
