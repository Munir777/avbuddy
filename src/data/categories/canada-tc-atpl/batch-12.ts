import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 12 -- Section 9: Flight Planning,
// second pass. Original questions written from the CARs and the TC AIM
// (RAC 3.11-3.14, fuel and alternate-aerodrome requirements), plus the
// TP 690 syllabus (topic headings only, no sample questions). Covers
// flight plan/itinerary closing and SAR alerting, VFR/IFR fuel reserve
// requirements, and alternate aerodrome selection -- not yet addressed
// in batch 9. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_12_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under CAR 602.78, an arrival report closing a flight plan or flight itinerary must include all of the following EXCEPT",
    options: [
      "the aircraft's fuel remaining on landing, reported to the nearest quarter-hour.",
      "the departure aerodrome and the arrival aerodrome, as originally filed on the flight plan.",
      "the date and time of arrival at the destination aerodrome, stated in local or UTC time.",
      "the aircraft registration mark, flight number, or radio call sign used throughout the flight.",
    ],
    answer: 0,
    explain:
      "An arrival report closing a flight plan or itinerary is a short, standardized set of items -- aircraft identification, the type of flight plan or itinerary filed, the departure and arrival aerodromes, and the date/time of arrival -- aimed at telling ATS/SAR authorities that the flight landed safely and can be removed from alerting watch. It is not a fuel report; remaining fuel endurance isn't part of the required arrival report content.",
    reference: "CARs 602.78; TC AIM RAC 3.11.1",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot may close a flight plan or flight itinerary prior to landing. Doing so",
    options: [
      "is only permitted for VFR flights; IFR flight plans can only be closed after landing.",
      "is treated as filing the arrival report, terminating alerting service with respect to SAR notification.",
      "automatically cancels IFR air traffic separation service at the same time, even if the pilot says nothing to ATC.",
      "has no effect on SAR alerting, which remains based on the destination and ETA already on file regardless.",
    ],
    answer: 1,
    explain:
      "Closing a flight plan or itinerary before landing -- with an ATC unit, FIC, FSS, or CARS -- is treated exactly as if the arrival report had been filed, and it terminates SAR alerting service right away. It doesn't itself affect IFR separation service (that's a separate matter, handled by 'Cancelling IFR' with ATC), and no further arrival report is needed once it's been closed this way.",
    reference: "TC AIM RAC 3.11.2",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot flying IFR cancels IFR with ATC ('Cancelling IFR') while continuing toward the destination. With respect to the flight plan or flight itinerary on file, this phrase",
    options: [
      "converts the flight plan into a VFR flight plan without any further action required by the pilot.",
      "has no defined effect at all under the CARs or the TC AIM and should therefore not be used in this context.",
      "discontinues IFR separation service only; it does not itself close the flight plan or end SAR alerting.",
      "automatically closes the flight plan or itinerary and ends SAR alerting, exactly as landing would.",
    ],
    answer: 2,
    explain:
      "'Cancelling IFR' tells ATC to stop providing IFR separation, but it does not close the flight plan or itinerary. SAR alerting stays active, based on the original filed information, until the pilot separately closes the flight plan/itinerary before landing or files an arrival report after landing.",
    reference: "TC AIM RAC 3.11.2",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot lands and simply fails to close a flight plan or flight itinerary. SAR action will generally be initiated",
    options: [
      "immediately upon the scheduled ETA passing, with no grace period allowed under any circumstances.",
      "never, since flight plans and itineraries have no built-in overdue-notification mechanism in Canada.",
      "only if a third party, such as a family member or employer, separately reports the aircraft overdue to authorities.",
      "at the SAR time specified in the itinerary, or, if none was specified, 24 hours after the last reported ETA.",
    ],
    answer: 3,
    explain:
      "The whole point of filing a flight plan or itinerary is that it carries a built-in overdue trigger: SAR action starts at the SAR time given in the itinerary, or, failing that, 24 hours after the last reported ETA -- which is exactly why failing to close it (even after a perfectly safe landing) sets alerting services in motion.",
    reference: "TC AIM RAC 3.11",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a VFR flight in an aeroplane (not a helicopter), the minimum fuel required beyond reaching the destination aerodrome is, at normal cruising speed,",
    options: [
      "30 minutes by day, 45 minutes by night.",
      "45 minutes by day, 30 minutes by night -- the reverse of the usual assumption.",
      "no additional fuel beyond reaching the destination; VFR flights need only carry trip fuel.",
      "20 minutes regardless of whether the flight is conducted by day or by night.",
    ],
    answer: 0,
    explain:
      "VFR fuel requirements scale with the reduced visual references available at night: 30 minutes' additional endurance at normal cruising speed by day, rising to 45 minutes by night. (A helicopter's VFR reserve is a separate, lower figure -- 20 minutes -- reflecting its different operating profile.)",
    reference: "CARs 602.88; TC AIM RAC 3.12.1",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An IFR flight plan specifies an alternate aerodrome. For a propeller-driven aeroplane, the minimum fuel required is enough to fly to the destination, execute an approach and a missed approach, fly to and land at the alternate, and then fly for a further",
    options: [
      "30 minutes, the reserve figure that instead applies to turbojet aeroplanes and helicopters in this same scenario.",
      "45 minutes at normal cruising speed, flown after landing at the alternate aerodrome.",
      "60 minutes at normal cruising speed, flown after landing at the alternate aerodrome.",
      "15 minutes at normal cruising speed, flown after landing at the alternate aerodrome.",
    ],
    answer: 1,
    explain:
      "With an alternate specified, a propeller-driven aeroplane's IFR fuel reserve, after landing at the alternate, is 45 minutes -- more generous than the 30-minute figure that applies to turbojet aeroplanes and helicopters in the same alternate-specified scenario, reflecting propeller aircraft's typically lower fuel burn at endurance speeds.",
    reference: "CARs 602.88; TC AIM RAC 3.12.2",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Compared to a propeller-driven aeroplane, the IFR fuel reserve required after landing at a specified alternate aerodrome, for a turbojet-powered aeroplane or a helicopter, is",
    options: [
      "identical: 45 minutes, the same figure applies regardless of aircraft type.",
      "longer: 60 minutes, rather than the 45 minutes required for a propeller-driven aeroplane.",
      "shorter: 30 minutes, rather than the 45 minutes required for a propeller-driven aeroplane.",
      "not separately specified; turbojet aircraft and helicopters follow the VFR fuel table instead.",
    ],
    answer: 2,
    explain:
      "Turbojet aeroplanes and helicopters carry a 30-minute reserve after landing at the alternate, shorter than the 45-minute figure for propeller-driven aeroplanes in the same alternate-specified scenario -- the CARs set distinct minimums by propulsion type for this leg of the fuel calculation.",
    reference: "CARs 602.88; TC AIM RAC 3.12.2",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An IFR flight plan is filed with no alternate aerodrome specified. Compared to the alternate-specified case, the fuel requirement",
    options: [
      "is eliminated entirely; an IFR flight plan with no alternate aerodrome specified carries no fuel reserve requirement whatsoever under the CARs or the TC AIM guidance material.",
      "is reduced, since not carrying fuel to reach an alternate aerodrome is assumed to free up a corresponding fuel margin elsewhere in the flight.",
      "applies only to turbojet aeroplanes operating under Subpart 705; propeller aeroplanes with no alternate specified have no separate fuel rule.",
      "still requires the same 45-minute (propeller) or 30-minute (turbojet/helicopter) reserve, flown at the destination rather than after diverting to an alternate.",
    ],
    answer: 3,
    explain:
      "Omitting an alternate doesn't remove the reserve requirement -- it changes where that reserve is flown. The same 45-minute (propeller) or 30-minute (turbojet/helicopter) figure still applies, but it's flown at the destination itself after the approach and missed approach, rather than after diverting to and landing at an alternate aerodrome.",
    reference: "CARs 602.88; TC AIM RAC 3.12.2",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Beyond the basic VFR or IFR reserve figures, CAR 602.88 requires that fuel planning also account for factors such as",
    options: [
      "taxi and pre-takeoff delays, expected weather, ATC routing delays, and reaching a suitable aerodrome after an engine failure or pressurization loss en route.",
      "the aircraft's insured hull value, which supposedly determines how much reserve fuel the operator's insurer requires it to carry.",
      "crew duty time remaining, which is substituted for any fuel calculation entirely on flights under 2 hours in scheduled duration.",
      "only the direct trip fuel between departure and destination, calculated at maximum-range cruise power with no other adjustment made.",
    ],
    answer: 0,
    explain:
      "CAR 602.88's fuel requirement isn't just a fixed VFR/IFR reserve bolted onto trip fuel -- it explicitly requires accounting for realistic operational factors: taxi and pre-departure delays, forecast weather, expected ATC routing and traffic delays, and the fuel needed to reach a suitable aerodrome if an engine fails (multi-engine aircraft) or cabin pressurization is lost at the worst possible point along the route.",
    reference: "CARs 602.88",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Except where otherwise authorized (for example, under an air operator certificate or private operator certificate), an IFR flight plan or flight itinerary must",
    options: [
      "never include an alternate aerodrome, since IFR flights are assumed to always be able to land at the destination.",
      "include an alternate aerodrome with a landing area suitable for the aircraft, unless specifically exempted.",
      "include at least two alternate aerodromes, so that a second option remains if the first also deteriorates.",
      "include an alternate only when the destination has a single runway with no crosswind-runway option.",
    ],
    answer: 1,
    explain:
      "The default rule for IFR flight is that an alternate aerodrome, suitable for the aircraft, must be included in the flight plan or itinerary -- the exceptions (certain AOC or POC authorizations) are just that: specific authorizations to depart from the general requirement, not the general rule itself.",
    reference: "CARs 602.122, 602.123; TC AIM RAC 3.13",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aerodrome may only be listed as an IFR alternate if available weather information indicates that, at the expected time of arrival, the ceiling and visibility there will",
    options: [
      "match current conditions at the departure aerodrome at the time of takeoff.",
      "be VFR conditions, since IFR alternates must always be usable under visual flight rules as a backup.",
      "be at or above the alternate aerodrome weather minima criteria published for that aerodrome in the Canada Air Pilot.",
      "be at or above standard landing minima for the destination aerodrome, regardless of what is published for the alternate.",
    ],
    answer: 2,
    explain:
      "Selecting an alternate isn't just about picking a nearby airport with an approach -- the forecast weather there has to meet or exceed the alternate aerodrome weather minima criteria specifically published for it in the CAP at the expected time of arrival, which are typically more conservative than ordinary landing minima to build in a margin for forecast uncertainty.",
    reference: "CARs 602.122, 602.123; TC AIM RAC 3.13",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Under the standard alternate aerodrome weather minima table, an alternate served by two or more usable precision approaches to separate suitable runways is generally authorized a lower (more favourable) minima than an alternate with",
    options: [
      "any number of precision approaches at all, since the number of approaches has no bearing on alternate minima.",
      "a control tower in operation, since tower status -- not approach type or count -- is what sets alternate minima.",
      "a single non-precision approach, which is actually authorized a lower minima than an aerodrome with two precision approaches.",
      "only one usable precision approach, or with only non-precision approaches available.",
    ],
    answer: 3,
    explain:
      "The standard alternate minima table scales with redundancy and approach precision: an aerodrome offering two or more usable precision approaches to separate suitable runways earns the most favourable minima, while an aerodrome with only one usable precision approach, or only non-precision approaches, is held to progressively higher (more conservative) minima.",
    reference: "TC AIM RAC 3.13.1, Table 3.7",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aerodrome with no IFR approach procedure available at all may still be filed as an alternate, provided the forecast weather is",
    options: [
      "no lower than 500 ft above a minimum IFR altitude that will permit a VFR approach and landing.",
      "impossible to meet; an aerodrome with no IFR approach can never legally be filed as an IFR alternate.",
      "identical to standard precision-approach alternate minima, since the absence of an approach has no bearing on the requirement.",
      "at or above VFR minima for controlled airspace only, with no altitude-based component to the requirement.",
    ],
    answer: 0,
    explain:
      "Without a published IFR approach, an alternate can't be reached by descending on an instrument procedure -- so the requirement instead ensures the aircraft can descend to, and remain at, a minimum IFR altitude with enough of a margin (500 ft above it) that a VFR approach and landing remain realistic in the forecast conditions.",
    reference: "TC AIM RAC 3.13.1, Table 3.7",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A TAF for a candidate alternate aerodrome contains a BECMG (becoming) group forecasting an improvement in conditions. For alternate-suitability purposes, this improved condition is considered applicable",
    options: [
      "as of the start of the BECMG time period, crediting the improvement immediately even before it is forecast to occur.",
      "as of the end of the BECMG time period, and must not be below the published alternate minima once it applies.",
      "never; BECMG groups are excluded entirely from alternate-suitability determinations.",
      "for the entire TAF validity period, applied retroactively to conditions before the BECMG group as well.",
    ],
    answer: 1,
    explain:
      "The rule is conservative in both directions: an improving (BECMG) trend can only be relied on once it's actually forecast to have taken hold -- the end of the BECMG period -- not from the moment the group begins. (The reverse logic applies to a deteriorating BECMG trend, which is instead assumed to apply from the start of its period.)",
    reference: "TC AIM RAC 3.13.1",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aerodrome served only by a Graphic Area Forecast (GFA), with no TAF, may still qualify as an alternate provided the forecast shows",
    options: [
      "conditions matching the standard 600-2 alternate minima exactly, with no separate GFA-specific criteria at all.",
      "cumulonimbus is acceptable provided the ceiling remains above 3 000 ft AGL for the duration of the forecast.",
      "no cloud lower than 1 000 ft above the lowest usable HAT/HAA, no cumulonimbus, and visibility of at least 3 SM.",
      "any ceiling at all, provided visibility is forecast to be unrestricted (10 SM or greater) throughout the forecast period.",
    ],
    answer: 2,
    explain:
      "Because a GFA is a graphical, area-based forecast rather than a point forecast like a TAF, the alternate-suitability criteria built around it are correspondingly specific: no cloud below 1 000 ft above the lowest usable HAT/HAA, no cumulonimbus forecast, and a minimum forecast visibility of 3 SM.",
    reference: "TC AIM RAC 3.13.1, Table 3.7 Notes",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The 'other authorized minima' table, which permits a reduced ceiling in exchange for an increased visibility requirement (or vice versa) at some alternate aerodromes, applies",
    options: [
      "only when no TAF, GFA, or aerodrome advisory forecast of any kind is available at the alternate aerodrome at all.",
      "automatically at every aerodrome without exception, entirely independent of whether standard alternate minima can be met there.",
      "only to turbojet-powered aeroplanes operating under Subpart 705 exclusively; propeller aeroplanes and helicopters must always use standard minima instead.",
      "only where the standard alternate minima requirement is met there; it is an additional option, not a replacement for the standard assessment.",
    ],
    answer: 3,
    explain:
      "The reduced 'other authorized minima' aren't a shortcut around the standard alternate minima requirement -- they're only available as a further option once the standard minima are shown to be met at that aerodrome, at which point the trade-off table (higher visibility for a lower ceiling, or vice versa) can be applied.",
    reference: "TC AIM RAC 3.13.1, Table 3.8",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The underlying purpose of the IFR alternate aerodrome requirement is best described as",
    options: [
      "building a fuel and routing margin against the chance that forecast weather at the destination does not hold, or the approach cannot be completed.",
      "a requirement that exists only for aircraft operating under Subpart 705 scheduled airline operations, with no application to any smaller commercial operations.",
      "a substitute for carrying VFR fuel reserves, applicable only when VFR flight is not possible for any portion of the entire route.",
      "a purely administrative filing requirement with no operational fuel-planning consequence attached to it whatsoever.",
    ],
    answer: 0,
    explain:
      "Requiring a qualifying alternate -- with its own fuel allowance and its own weather-minima test -- exists precisely because a destination forecast, however carefully prepared, can fail to hold by the time the aircraft arrives; the alternate requirement builds a real operational margin (fuel and a viable diversion aerodrome) against that possibility, and it isn't limited to any one type of commercial operation.",
    reference: "CARs 602.122, 602.123; TC AIM RAC 3.13",
  },
];
