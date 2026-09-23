import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 17 -- Section 10: Radio
// Communications and Aids to Navigation, second pass. Original
// questions written from the CARs, the TC AIM (RAC/COM), and the
// TP 690 syllabus (topic headings only, no sample questions). Covers
// transponder codes, TCAS equipage levels, ground communication
// facilities, and ILS/NDB/satellite-augmentation topics not yet
// addressed in batch 10. Not transcribed or adapted from any
// commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_17_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Remote Communications Outlet (RCO) is best described as",
    options: [
      "a VHF transmitter/receiver installed at a designated aerodrome or off-aerodrome site to extend communication coverage between aircraft and an FSS or FIC.",
      "a satellite ground station used exclusively to relay ADS-B position reports to air traffic control.",
      "a backup air-to-air frequency used only when both primary and secondary ATC frequencies have failed simultaneously.",
      "a type of DME ground station that also provides two-way voice communication in addition to distance information.",
    ],
    answer: 0,
    explain:
      "An RCO extends the reach of an FSS or FIC by placing a VHF transmitter/receiver at a location (an aerodrome, or sometimes a remote en route site) that lets aircraft too far from the main facility still establish two-way communication for flight information or remote aerodrome advisory service -- it's a communications relay, not a satellite link, a last-resort frequency, or a DME station.",
    reference: "TC AIM RAC 1.4.1",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A pilot's VHF radio display is only able to show two decimal digits and shows a frequency as 132.47, while the actual assigned frequency (as published) is 132.475. In this situation, the aircraft radio",
    options: [
      "is actually tuned to the correct frequency; some 25-kHz-capable radios omit the trailing digit from the display without affecting the frequency actually selected.",
      "is mistuned and must be corrected before use, since any mismatch between the displayed and published frequency indicates an equipment fault.",
      "can only be used for reception, not transmission, whenever its display cannot show all three decimal digits.",
      "is defaulting to a completely unrelated, unpredictable frequency, and the pilot cannot know what frequency is actually selected.",
    ],
    answer: 0,
    explain:
      "Some radio displays simply don't show the third decimal digit, even though the underlying frequency selected is the fully correct one -- the TC AIM specifically notes that when the last digit shown ends in a two or a seven, the equipment is capable of 25-kHz-spaced operations and is, in fact, tuned correctly, even though the display looks like it's one digit short of the published frequency.",
    reference: "TC AIM COM 1.4",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A pilot experiencing a total two-way radio communication failure, while still transponder-equipped, should generally select transponder code",
    options: [
      "7600.",
      "7700.",
      "7500.",
      "1200.",
    ],
    answer: 0,
    explain:
      "Code 7600 is the standardized signal for radio communication failure, alerting ATC to the specific nature of the problem on situation displays even though the pilot can no longer be reached by voice -- distinct from 7700 (general emergency) and 7500 (unlawful interference), each of which is reserved for its own specific situation.",
    reference: "TC AIM RAC/COM, Transponder Operation",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Selecting transponder code 7500 is specifically reserved for a situation involving",
    options: [
      "an act of unlawful interference in progress, such as a hijacking.",
      "any general in-flight emergency not otherwise classified, including engine failure or a medical emergency.",
      "a radio communication failure with no other complicating factor.",
      "routine VFR flight, functioning as the default en route squawk code.",
    ],
    answer: 0,
    explain:
      "Code 7500 has one very specific, sensitive meaning: unlawful interference (such as a hijacking) in progress. ATC does not assign it and will confirm its use discreetly rather than openly querying the crew over the radio, since an open query could itself create danger if a hijacker is monitoring the exchange -- a sharp contrast with 7700's broad emergency scope or 7600's radio-failure meaning.",
    reference: "TC AIM COM 9.1",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Comparing TCAS I and TCAS II, the key functional difference is that",
    options: [
      "TCAS I provides only Traffic Advisories (TAs) to assist visual acquisition, while TCAS II additionally provides vertical-plane Resolution Advisories (RAs) and requires a Mode S transponder.",
      "TCAS I provides both TAs and RAs, while TCAS II provides TAs only, the reverse of the usual assumption.",
      "TCAS I and TCAS II are functionally identical; the distinction is purely a difference in display hardware, not capability.",
      "TCAS I requires a Mode S transponder, while TCAS II can operate using only a basic Mode A transponder.",
    ],
    answer: 0,
    explain:
      "TCAS I is the more limited system: a computer and display giving Traffic Advisories to help a pilot visually spot potential conflicting traffic, but issuing no resolution guidance. TCAS II goes further, adding vertical-plane Resolution Advisories with recommended climb/descend/maintain guidance, and it requires a Mode S transponder to support the data-link coordination that lets two TCAS II aircraft negotiate complementary advisories with each other.",
    reference: "TC AIM COM 9.1",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An intruder aircraft equipped with a Mode C transponder, but with no altitude information available to that transponder, is treated by a TCAS-equipped aircraft as",
    options: [
      "a non-altitude-reporting target, deemed to be at the same altitude as own aircraft, with no data tag or trend arrow shown.",
      "completely invisible, exactly as if the intruder aircraft were not squawking at all.",
      "a target automatically assumed to be 1 000 ft above own aircraft, regardless of its actual altitude.",
      "a target that automatically triggers a Resolution Advisory the moment it is detected, regardless of separation.",
    ],
    answer: 0,
    explain:
      "A Mode C transponder that isn't actually supplying altitude data still replies to interrogations, so TCAS detects it, but with nothing to judge vertical separation by, the system treats it conservatively as a same-altitude target -- displayed without the data tag or trend arrow that a properly altitude-reporting target would show, a meaningfully different (and less informative) picture than either an invisible non-transponding aircraft or a fully altitude-reporting one.",
    reference: "TC AIM COM 9.1",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Compared to a Mode C transponder, a Mode S transponder",
    options: [
      "provides each aircraft a unique, discrete address and supports data-link functions (such as the complementary Resolution Advisory coordination used by TCAS II), beyond simply replying with altitude.",
      "reports altitude information less precisely than Mode C, rounding to the nearest 1 000 ft rather than 100 ft.",
      "is functionally identical to Mode C in every respect, with 'Mode S' being only a newer name for the same technology.",
      "cannot be used at all by aircraft operating within RVSM airspace, which requires Mode C exclusively.",
    ],
    answer: 0,
    explain:
      "Mode S goes beyond Mode C's simple altitude-reporting reply: it gives each aircraft a unique, addressable identity and supports genuine data-link exchange, which is exactly what lets two TCAS II-equipped aircraft communicate directly with each other's computers and agree on complementary (opposite-direction) Resolution Advisories during an encounter -- a capability that a Mode C-only transponder, or a description of Mode S as 'just a rename,' can't account for.",
    reference: "TC AIM COM 9.1",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The three ILS marker beacons -- outer, middle, and inner marker -- are primarily distinguished from one another, as received in the cockpit, by",
    options: [
      "a distinct combination of tone (audio frequency), Morse-style keying pattern, and indicator light colour for each marker.",
      "operating on three entirely different VHF frequencies, one dedicated to each marker.",
      "requiring a separate, dedicated antenna and receiver be installed for each of the three markers.",
      "displaying distance-to-threshold information numerically, in the same way a DME readout does.",
    ],
    answer: 0,
    explain:
      "All ILS marker beacons transmit on the same VHF frequency (75 MHz); what distinguishes the outer, middle, and inner marker as an aircraft crosses each one is the combination of audio tone, keying pattern (dots/dashes), and cockpit indicator light colour associated with each, giving the crew an audible and visual cue for progressively closer, precisely defined points along the approach.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The ILS approach categories (CAT I, CAT II, CAT III) primarily distinguish",
    options: [
      "progressively lower decision height and runway visual range minima permitted, generally requiring correspondingly more capable aircraft/crew equipment and qualification as the category increases.",
      "the physical length of the runway required to support each category, unrelated to any weather minima.",
      "the specific VHF frequency band used for the localizer and glideslope transmissions of each category.",
      "whether the approach is flown manually (CAT I) or is required to be flown by autopilot (CAT II and III), with no distinction in weather minima at all.",
    ],
    answer: 0,
    explain:
      "The ILS categories form a progression of increasingly demanding low-visibility capability: CAT I permits the highest decision height and visibility minima, while CAT II and CAT III permit progressively lower minima (CAT III down to very low or, in some variants, no decision height at all), which in turn generally demands more capable ground equipment, aircraft systems (such as autoland), and specific crew training and qualification to be authorized to fly them.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A false glideslope indication -- a spurious signal capable of drawing an aircraft toward an incorrect, often steeper, descent path -- can arise because",
    options: [
      "the glideslope signal's radiation pattern includes additional lobes above the true glidepath angle, caused by reflections and signal geometry, which can mimic a valid on-path indication if intercepted.",
      "glideslope transmitters intentionally broadcast several different, equally valid glidepath angles for the same runway, and pilots simply select the desired one.",
      "false glideslope indications are purely a legacy problem that has been completely eliminated in all glideslope equipment manufactured since 1990.",
      "glideslope signals only become unreliable in the final 200 ft before touchdown, with no false-indication risk earlier in the approach.",
    ],
    answer: 0,
    explain:
      "Because of how a glideslope antenna array's signal geometry propagates, additional false lobes can exist at angles steeper than the true, published glidepath. If an aircraft intercepts one of those false lobes -- particularly a risk during an unstabilized or excessively high intercept -- the indication can look like a valid on-path signal while actually commanding a dangerously steep descent, which is why a stabilized, correctly sequenced intercept from below the glidepath is emphasized in ILS approach technique.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A non-directional beacon (NDB), used with an automatic direction finder (ADF) in the aircraft, operates on the basic principle that",
    options: [
      "the ground station transmits an omnidirectional low/medium frequency signal, and the aircraft's ADF receiver determines the relative bearing to the station from the direction of the strongest received signal.",
      "the ground station transmits a narrow, highly directional beam, and the aircraft simply flies along whichever specific beam it happens to intercept.",
      "the aircraft transmits an interrogation signal to the NDB, which replies with a precise distance measurement, similar in principle to DME.",
      "the NDB transmits on a VHF frequency identical in range to a VOR, differing from VOR only in its ground antenna design.",
    ],
    answer: 0,
    explain:
      "An NDB is deliberately non-directional -- it radiates its low/medium frequency signal equally in all directions -- and it's the aircraft's ADF receiver and loop/sense antenna combination that does the directional work, sensing the direction the signal is arriving from and displaying that as a relative bearing to the station, quite unlike a directional VOR radial or a distance-based DME interrogation-and-reply system.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, NDB/ADF",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The COSPAS-SARSAT satellite system's role in a distress situation is to",
    options: [
      "detect and locate the signal transmitted by an activated emergency locator transmitter (ELT) or similar distress beacon, and relay that information to search and rescue authorities.",
      "transmit two-way voice communication between a downed aircraft's occupants and rescue coordination centres directly.",
      "automatically deploy a life raft and survival equipment from the aircraft upon detecting a crash.",
      "provide the ELT's own power source, since ELTs otherwise have no independent battery of their own.",
    ],
    answer: 0,
    explain:
      "COSPAS-SARSAT is a satellite-based detection and location system, not a communication or rescue-equipment system in itself: it listens for the signal an ELT (or a personal/maritime distress beacon) transmits once activated, determines the beacon's location, and passes that information along to search and rescue authorities so a physical rescue response can be coordinated and dispatched.",
    reference: "TC AIM SAR 1.2, RAC 4.12",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A satellite-based augmentation system (SBAS), applied to GNSS approaches, primarily improves on unaugmented GNSS by",
    options: [
      "providing correction and integrity data that improves accuracy enough to support approaches with vertical guidance, in addition to the lateral guidance basic GNSS already supports.",
      "physically boosting the strength of the GPS satellite signals themselves as they are transmitted from orbit.",
      "replacing the need for any ground-based navigation infrastructure at every aerodrome in the country, with no exceptions.",
      "eliminating RAIM monitoring requirements entirely, since SBAS is considered inherently fail-safe.",
    ],
    answer: 0,
    explain:
      "SBAS works by broadcasting correction and integrity information (derived from a network of ground reference stations) via geostationary satellites, refining GNSS position accuracy enough to support approaches with reliable vertical guidance -- upgrading a basic GNSS approach's lateral-only guidance into something closer to an ILS-like vertical profile, without eliminating the need for RAIM-type integrity monitoring or every piece of ground infrastructure.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, GNSS",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A DME co-located with, and paired to, an ILS at some aerodromes primarily provides the crew with",
    options: [
      "distance to the runway threshold (or a defined reference point), rather than distance to a separate, independently located DME facility.",
      "an independent glidepath angle, entirely separate from and redundant to the ILS glideslope transmitter.",
      "lateral guidance equivalent to the localizer, made redundant so the ILS localizer receiver is no longer needed.",
      "a continuous readout of groundspeed, calculated from the rate of change of DME distance, displayed directly on the ILS indicator.",
    ],
    answer: 0,
    explain:
      "When a DME facility is paired with an ILS and tuned automatically alongside it, its reference point is typically set to correspond to the runway threshold (or another defined point near it) rather than to the DME antenna's own physical location -- giving the crew a directly useful distance-to-touchdown-area readout to cross-check progress down the approach, distinct from providing lateral or vertical guidance itself.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "For long-range HF communication, pilots often need to select a higher HF frequency by day and a lower HF frequency by night for reliable skywave propagation, because",
    options: [
      "increased ionospheric ionization from solar radiation during the day raises the frequency needed for effective skywave refraction, while the less ionized nighttime ionosphere favours lower frequencies.",
      "HF ground stations are only permitted to transmit on their higher assigned frequencies during daylight hours, by regulation, regardless of propagation conditions.",
      "higher HF frequencies always propagate further than lower ones, regardless of time of day, making the day/night distinction irrelevant to range.",
      "lower HF frequencies are reserved exclusively for maritime use, making higher frequencies the only ones available to aircraft regardless of the hour.",
    ],
    answer: 0,
    explain:
      "The ionosphere's ionization level, driven largely by solar radiation, is higher during the day and lower at night, and that ionization level determines which HF frequencies refract (bend back to earth) effectively rather than passing through into space. Daytime conditions generally favour higher HF frequencies for reliable skywave propagation, while the less-ionized nighttime ionosphere favours lower frequencies -- which is why aircraft operating long-range HF schedules are typically given both a day and a night frequency for the same route.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, HF Communications",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A pilot's transponder replies to a Mode C interrogation with altitude information ultimately sourced from",
    options: [
      "an altitude (pressure) encoder referenced to standard pressure (29.92 in. Hg / 1013.2 hPa), regardless of the QNH set in the pilot's own altimeter.",
      "the pilot's primary altimeter display exactly as set to the current local QNH, with the encoder simply repeating that displayed value.",
      "GNSS-derived geometric altitude, entirely independent of any pressure-based measurement.",
      "the aircraft's radio altimeter, giving height above terrain rather than any form of pressure or geometric altitude.",
    ],
    answer: 0,
    explain:
      "The altitude a Mode C (or Mode S) transponder reports is generated by a pressure altitude encoder referenced to standard pressure, not to whatever QNH the pilot has set on the primary altimeter -- which is exactly why ATC's displayed Mode C readout stays consistent and comparable between aircraft on different local altimeter settings, since it reflects a common standard-pressure reference rather than each pilot's individually set subscale.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, Transponders",
  },
];
