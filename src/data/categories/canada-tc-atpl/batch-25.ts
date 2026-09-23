import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 25 -- Section 10: Radio
// Communications and Aids to Navigation, third pass. Original
// questions written from the CARs, the TC AIM (RAC/COM), and the
// TP 690 syllabus (topic headings only, no sample questions). Covers
// DME/NDB/VOR error mechanisms, ILS/GNSS approach precision levels,
// and mandatory reporting/communication procedures not yet addressed
// in batches 10 or 17. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_25_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A DME (distance measuring equipment) system determines slant range by",
    options: [
      "the aircraft's interrogator transmitting a paired pulse to the ground station, which replies after a fixed known delay, and the airborne equipment measuring the round-trip time to compute distance.",
      "the ground station continuously broadcasting a signal whose strength the aircraft measures, converting signal strength directly into a distance value.",
      "comparing the phase difference between two VOR radial signals received simultaneously from the same ground facility.",
      "receiving timing signals from a satellite constellation and computing distance by trilateration, entirely independent of any ground-based transmission.",
    ],
    answer: 0,
    explain:
      "DME works on a request-and-reply basis: the aircraft's interrogator transmits a paired pulse, the ground transponder replies after a fixed, known processing delay, and the airborne DME equipment measures the total round-trip time (subtracting that known delay) to compute the aircraft's slant range from the station -- a fundamentally different mechanism from VOR's radial bearing, a satellite-based range fix, or a simple signal-strength measurement.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, DME",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "NDB signal reception can be distorted by 'mountain effect,' in which",
    options: [
      "the NDB signal reflects off nearby high terrain, arriving at the aircraft from more than one direction and causing the ADF needle to give an erroneous or fluctuating indication.",
      "high terrain physically blocks the NDB's low/medium frequency signal entirely, producing no reception at all rather than an erroneous indication.",
      "mountainous terrain increases NDB signal range well beyond its normal published service volume, improving reception at long range.",
      "mountain effect refers exclusively to VOR reception, and has no application to NDB or ADF operation at all.",
    ],
    answer: 0,
    explain:
      "Because an NDB's low/medium frequency signal can reflect off high terrain, an aircraft near mountainous ground may receive both the direct signal and one or more reflected paths simultaneously -- the ADF needle, trying to resolve a single bearing from what's actually a combination of signals, can swing, fluctuate, or settle on an erroneous indication, a distortion distinct from the signal simply being blocked or from the well-known coastal refraction and night effect errors.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, NDB/ADF",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Coastal refraction, an NDB/ADF error, occurs because",
    options: [
      "the NDB signal bends as it crosses a coastline, since it travels at different speeds over land and over water, distorting the indicated bearing for a signal crossing the coast at an oblique angle.",
      "NDB signals cannot cross a coastline at all, so any bearing indication received while over water must always be discarded as unreliable.",
      "coastal refraction affects only VOR signals, since NDB signals are entirely unaffected by any change from land to water beneath their path.",
      "the NDB ground station itself must be relocated inland whenever it is found to be affected by coastal refraction, eliminating the error at its source.",
    ],
    answer: 0,
    explain:
      "An NDB's radio wave propagates at a slightly different effective speed over land than over water, and when the signal's path crosses a coastline at other than a right angle, that speed difference bends (refracts) the wavefront -- distorting the ADF's indicated bearing. The error is most pronounced for a shallow (oblique) crossing angle and is one of several well-recognized NDB/ADF error sources alongside night effect and mountain effect.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, NDB/ADF",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "VOR 'scalloping' or site error, an error in the received radial, is generally caused by",
    options: [
      "reflections of the VOR signal off nearby terrain, buildings, or other obstructions near the ground antenna, distorting the transmitted signal.",
      "excessive distance from the VOR station alone, an error that occurs even over perfectly flat, obstruction-free terrain.",
      "the aircraft's own transponder interfering with its VOR receiver, an entirely airborne-equipment-based source of error.",
      "magnetic variation changing faster than the VOR ground station's published alignment can be updated.",
    ],
    answer: 0,
    explain:
      "Scalloping (a wavering or oscillating error in the received radial) is typically a site-specific problem: reflections of the VOR's transmitted signal off nearby terrain features, buildings, or other obstructions near the ground station distort the signal actually received by the aircraft, an error that's independent of magnetic variation, distance alone, or the aircraft's own onboard equipment.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, VOR",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Comparing ADS-B Out and ADS-B In, ADS-B Out",
    options: [
      "transmits the aircraft's own position and other data for reception by ATC ground stations and other suitably equipped aircraft, while ADS-B In is the capability to receive that same kind of broadcast data from other sources.",
      "receives traffic and weather information broadcast from ground stations, while ADS-B In transmits the aircraft's own position data outward.",
      "is required only for VFR aircraft, while ADS-B In is required only for IFR aircraft, with no aircraft ever requiring both.",
      "and ADS-B In are simply two different names for the exact same equipment and function, with no meaningful distinction between them.",
    ],
    answer: 0,
    explain:
      "ADS-B Out is the transmitting side: the aircraft periodically broadcasts its own GNSS-derived position (and other data) outward for ATC ground stations and other equipped aircraft to receive -- which is the piece increasingly mandated in various airspace. ADS-B In is the separate, receiving capability, letting an aircraft pick up broadcasts (including traffic and, where available, weather information) from other sources -- a genuinely different function that an aircraft can have independently of, or in addition to, ADS-B Out.",
    reference: "TC AIM COM 8.0",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An ILS localizer's course is calibrated to provide full-scale CDI deflection at a specific angular width either side of the runway centreline, meaning that",
    options: [
      "the physical distance the aircraft can be laterally displaced before reaching full-scale deflection widens with increasing distance from the runway threshold, since it is defined by angle rather than a fixed lateral distance.",
      "the physical distance the aircraft can be laterally displaced before reaching full-scale deflection narrows with increasing distance from the runway threshold, the reverse of the usual relationship.",
      "the localizer's angular width has no relationship to distance from the threshold at all, remaining a fixed lateral distance in feet or metres regardless of range.",
      "full-scale deflection occurs only within the final 500 ft before touchdown, with no full-scale deflection indication possible at any greater distance.",
    ],
    answer: 0,
    explain:
      "Because the localizer course is defined in angular terms (a specified width in degrees either side of the centreline, calibrated so that width corresponds to a set physical distance at the runway threshold), the corresponding lateral distance that produces full-scale CDI deflection actually widens the further the aircraft is from the threshold -- exactly like a flashlight beam spreading wider with distance -- which is why localizer guidance becomes more sensitive (a smaller lateral displacement causes a larger CDI deflection) the closer the aircraft gets to the runway.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A typical ILS glideslope is set to approximately 3 degrees, a value generally chosen to",
    options: [
      "provide a reasonable balance between a comfortable, manageable rate of descent for most transport-category aircraft and adequate obstacle clearance on the approach.",
      "exactly match the standard visual approach slope indicator (PAPI/VASI) angle at every runway worldwide, with no exceptions permitted.",
      "match the critical angle of attack of a typical transport-category wing, ensuring the aircraft remains just above the stall throughout the approach.",
      "minimize fuel burn during the approach segment specifically, with obstacle clearance and descent rate considered only secondary factors.",
    ],
    answer: 0,
    explain:
      "A roughly 3-degree glideslope angle reflects a practical compromise: steep enough to provide meaningful obstacle clearance margin on the approach path, but shallow enough to produce a descent rate that's comfortable and manageable to fly precisely and stabilize for most transport-category aircraft at their typical approach speeds -- some aerodromes do publish a steeper glidepath where terrain or noise abatement requires it, but 3 degrees is the common baseline rather than a universally fixed value.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, ILS",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Comparing GNSS approach types, an LPV approach differs from a basic LNAV approach mainly in that LPV",
    options: [
      "provides SBAS-augmented lateral and vertical guidance similar in precision to an ILS, while LNAV provides lateral guidance only, flown to a minimum descent altitude rather than a decision altitude/height.",
      "provides lateral guidance only, while LNAV provides both lateral and vertical guidance, the reverse of the usual relationship between the two approach types.",
      "is flown using only a magnetic compass and DME, entirely independent of any GNSS signal, unlike LNAV which is GNSS-based.",
      "requires no SBAS augmentation at all, while LNAV specifically requires SBAS augmentation to be flown.",
    ],
    answer: 0,
    explain:
      "LPV (Localizer Performance with Vertical guidance) uses SBAS augmentation to provide both lateral and vertical guidance precise enough to fly to a decision altitude/height, much like an ILS approach in procedure even though no ILS ground equipment is involved. A basic LNAV approach, by contrast, provides lateral guidance only, and is flown to a minimum descent altitude with a step-down, non-precision profile rather than a continuous vertical guidance path -- LNAV/VNAV sits in between, adding advisory or barometric vertical guidance without SBAS-level precision.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, GNSS",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Because VHF communication and navigation signals are generally limited to line-of-sight propagation, the maximum reliable reception range between an aircraft and a ground station",
    options: [
      "increases as the aircraft's altitude increases, since a higher aircraft can maintain line of sight to the ground station over a greater distance before the earth's curvature blocks the signal.",
      "decreases as the aircraft's altitude increases, the reverse of the usual relationship between altitude and VHF range.",
      "is entirely unaffected by the aircraft's altitude, and depends only on the ground station's transmitter power.",
      "is fixed at exactly the same value for every VHF facility regardless of aircraft altitude, ground station location, or terrain.",
    ],
    answer: 0,
    explain:
      "VHF signals travel essentially in a straight line and don't reliably bend around the earth's curvature (unlike HF's skywave propagation), so range is fundamentally a line-of-sight problem -- climbing higher lets an aircraft 'see' further over the horizon to a ground station (or vice versa), which is exactly why VHF range figures are commonly expressed as increasing with altitude, and why a low-altitude aircraft can lose VHF contact with a station it could easily reach at a higher cruising altitude.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, VHF Propagation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The transponder IDENT function, activated when requested by ATC, causes",
    options: [
      "the aircraft's return to be specially highlighted on the controller's radar display, helping the controller positively identify that specific aircraft among the traffic being displayed.",
      "the transponder to automatically switch from Mode C to Mode S, without changing anything about how the return appears on the display.",
      "the aircraft's assigned squawk code to be changed automatically to a new, randomly generated code.",
      "the transponder to transmit the pilot's voice callsign directly, functioning as an alternate communication channel to ATC.",
    ],
    answer: 0,
    explain:
      "IDENT doesn't change the squawk code or transmit voice -- it briefly and distinctly highlights that specific aircraft's return on the controller's radar display, which is exactly why ATC asks for it when they need help positively picking out one aircraft's return among others on the scope, such as when first establishing radar contact or resolving ambiguity about which target corresponds to which aircraft.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, Transponders",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Compared to the 25 kHz VHF communication channel spacing standard historically used throughout North American airspace, 8.33 kHz channel spacing",
    options: [
      "packs a greater number of distinct channels into the same VHF communication band, addressing frequency congestion, and is used in regions (such as much of Europe) with denser channel demand.",
      "is used throughout Canadian domestic airspace as the sole standard, having fully replaced 25 kHz spacing.",
      "applies exclusively to navigation frequencies such as VOR and ILS, with no application to any voice communication frequency.",
      "provides fewer available channels than 25 kHz spacing within the same VHF band, the opposite of its actual purpose.",
    ],
    answer: 0,
    explain:
      "Narrower 8.33 kHz channel spacing packs more distinct communication channels into the same limited VHF band than the coarser 25 kHz spacing allows, which is exactly why it's been adopted in regions facing more severe frequency congestion (much of Europe, for example) -- while Canadian domestic airspace has historically relied primarily on the 25 kHz standard, reflecting comparatively lower channel demand across most of its airspace.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, VHF Communications",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An ATIS (Automatic Terminal Information Service) broadcast is intended primarily to",
    options: [
      "provide routine, recorded arrival and departure information (weather, active runway, and similar details) to reduce repetitive individual communication between pilots and ATC.",
      "provide individually tailored ATC clearances to each pilot who tunes in, replacing the need for any direct voice clearance from a controller.",
      "provide only NOTAM information, with weather and runway-in-use information excluded from an ATIS broadcast entirely.",
      "serve exclusively as a backup emergency frequency, monitored only when a pilot's primary and secondary ATC frequencies have both failed.",
    ],
    answer: 0,
    explain:
      "ATIS exists to offload routine, repetitive information -- current weather, the runway(s) in use, relevant NOTAMs, and similar details -- from individual radio exchanges: a pilot listens to the recorded broadcast once, then reports having received it (often by its identifying letter) when contacting ATC, which frees up both the pilot's and the controller's time compared to relaying all of that information verbally on every single contact.",
    reference: "TC AIM COM 4.2.1",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Within a designated Mandatory Frequency (MF) area, an aircraft operating on the ground or in the air is required to",
    options: [
      "be equipped with a functioning radio capable of two-way communication and to follow the specific reporting procedures set out in the CARs for that area.",
      "maintain radio silence at all times, since 'mandatory frequency' specifically refers to a frequency that must never be transmitted on.",
      "obtain a full ATC clearance before any movement, exactly as would be required within controlled (Class C or D) airspace.",
      "use only a designated emergency frequency, with normal MF-area communication considered optional rather than mandatory.",
    ],
    answer: 0,
    explain:
      "An MF area is established at an uncontrolled aerodrome (or one that's uncontrolled during certain hours) with enough traffic that coordinated self-reporting on a common frequency is warranted; aircraft operating there, on the ground or in the air, must be equipped with a functioning two-way radio and must follow the specific reporting procedures set out in the CARs -- a self-announcing system, not a silence requirement, and distinct from the full ATC clearance structure of controlled airspace.",
    reference: "CARs 602.97-602.103; TC AIM RAC 4.5.4",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "For a pilot not operating within airspace where the flight is being tracked by ATC surveillance (identified by ATC), standard practice for altitude reporting is generally to",
    options: [
      "report reaching the initially cleared altitude, and when climbing or descending en route, report leaving a previously assigned altitude and reaching the newly assigned altitude.",
      "never report altitude information at all, since altitude reports are considered entirely unnecessary outside surveillance airspace.",
      "report altitude only once per flight, immediately after departure, with no further altitude reports expected for the remainder of the flight.",
      "report altitude exclusively when specifically requested by ATC, with no proactive reporting expected under any other circumstance.",
    ],
    answer: 0,
    explain:
      "Outside ATC surveillance (where the controller can directly see the aircraft's altitude on a radar or ADS-B display), altitude reports become a meaningful safety input rather than a redundant one -- so pilots are expected to proactively report reaching their initially cleared altitude, and, during any subsequent climb or descent, to report both leaving the previously assigned altitude and reaching the new one, keeping ATC informed of vertical position it can't otherwise directly observe.",
    reference: "TC AIM RAC 8.3",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A peripheral station (PAL), as a type of remote communication facility, is used to",
    options: [
      "extend an FSS's or ATC unit's communication coverage into areas beyond the reach of its main site, with some PAL locations also relaying a pilot's broadcast to another PAL frequency via a radio re-transmit unit.",
      "provide only navigation guidance (such as distance and bearing information), with no communication function at all.",
      "serve exclusively as a backup power source for a primary ATC facility, unrelated to any radio communication function.",
      "automatically translate a pilot's voice transmission into a data link message for onward transmission, a purely data-based function.",
    ],
    answer: 0,
    explain:
      "PAL sites exist specifically to stretch a facility's practical communication footprint into areas its main transmitter/receiver can't reliably reach -- and where a radio re-transmit unit (RRTU) is also fitted at a PAL location, a pilot's broadcast received there can be relayed out over another PAL's frequency as well, helping pilots on different PAL frequencies stay aware that the controller is working traffic elsewhere in the coverage area.",
    reference: "TC AIM RAC 8.3 (Peripheral Stations)",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "When ATC issues an instruction or clearance, certain items -- such as an assigned altitude, a heading, a runway assignment, or a hold-short instruction -- are generally required to be",
    options: [
      "read back in full by the pilot, so the controller can confirm the instruction was correctly received and understood before it is acted on.",
      "acknowledged with only a generic 'roger' or callsign, with no requirement to restate any of the actual instruction's content.",
      "read back only if the pilot personally judges the instruction to be unusually complex, with routine instructions exempt from any readback requirement.",
      "written down by the pilot for the flight's records, but never actually transmitted back to the controller over the radio.",
    ],
    answer: 0,
    explain:
      "Certain safety-critical clearance elements -- altitudes, headings, runway assignments, hold-short and crossing instructions among them -- carry a mandatory readback expectation specifically because a garbled, mis-heard, or misunderstood instruction acted on without that check can have serious consequences; a bare acknowledgment, a personal judgment call about complexity, or writing it down without transmitting it back all fail to give the controller the actual verification the readback is meant to provide.",
    reference: "TP 690 Section 10 - Radio Communications and Aids to Navigation, Communication Procedures",
  },
];
