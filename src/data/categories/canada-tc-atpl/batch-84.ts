import type { Question } from "../../../types";

// Canada TC ATPL - Section 5: Radio Communications and Aids to Navigation
// Batch 84 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_84_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Some ILS installations provide a 'back course,' usable for an approach to the runway opposite the one served by the front course. When flying a back course approach without back-course-capable avionics, the pilot must be aware that",
    options: [
      "the back course transmits on an entirely different frequency from the front course, a claim inconsistent with how this system is actually certified and operated",
      "a back course approach provides greater precision than the front course because of the antenna array's directional pattern, as this equipment actually functions",
      "the CDI needle deflection is reversed relative to a normal (front course) approach, requiring the pilot to fly away from a needle that appears to indicate the wrong direction",
      "glideslope guidance remains fully usable and behaves identically to a front course approach, regardless of the specific installation",
    ],
    answer: 2,
    explain:
      "A back course approach uses the same localizer transmission from the opposite direction, which produces reversed sensing on a conventional CDI unless the avionics automatically correct for it; the pilot must fly toward, rather than away from, a needle that appears to point the wrong way. A back course also does not provide usable glideslope guidance.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: ILS back course",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "In addition to the original L1 C/A civil signal, modern GPS satellites broadcast additional civil signals on the L2C and L5 frequencies. A key benefit of these additional civil frequencies is that they allow a suitably equipped receiver to",
    options: [
      "eliminate the need for RAIM integrity monitoring entirely, which overlooks the technical or procedural considerations that actually govern this equipment",
      "receive GPS signals during a complete loss of all satellite line-of-sight visibility, which overlooks the technical or procedural considerations that actually govern this equipment",
      "operate without any antenna, since L2C and L5 do not require line-of-sight reception, which overlooks the technical or procedural considerations that actually govern this equipment",
      "directly estimate and correct for ionospheric delay by comparing measurements made on two different frequencies, improving position accuracy",
    ],
    answer: 3,
    explain:
      "Because ionospheric delay affects different GNSS frequencies by different amounts, a dual-frequency receiver can compare measurements on two frequencies to estimate and largely correct for that delay, improving position accuracy compared to a single-frequency receiver relying on a generic ionospheric model.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: GPS civil signals",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "GNSS augmentation systems used to improve accuracy, integrity, availability, or continuity are generally grouped into three broad categories, based on where the augmentation function is performed: ABAS (aircraft-based, such as RAIM), SBAS (satellite-based, such as WAAS), and",
    options: [
      "GBAS (ground-based, such as a local-area system providing corrections from a single aerodrome)",
      "TBAS (time-based augmentation, correcting for atomic clock drift only), an oversimplification that ignores the practical limitations inherent in this equipment",
      "MBAS (military-based augmentation, restricted to defence applications), which overlooks the technical or procedural considerations that actually govern this equipment",
      "CBAS (crew-based augmentation, relying on manual pilot cross-checks), which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 0,
    explain:
      "GNSS augmentation is typically categorized by where the augmentation is generated: ABAS operates within the aircraft's own receiver (such as RAIM), SBAS broadcasts wide-area corrections from geostationary satellites, and GBAS provides local, high-accuracy corrections from equipment at a specific aerodrome, supporting services such as a GLS approach.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: GNSS augmentation categories",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A traditional ADF (Automatic Direction Finder) receiver resolves the 180-degree ambiguity inherent in a simple loop antenna's bidirectional reception pattern by",
    options: [
      "relying entirely on the pilot's manual rotation of the loop antenna to identify the correct bearing, which overlooks the technical or procedural considerations that actually govern this equipment",
      "combining the loop antenna's signal with that of a separate, non-directional sense antenna to produce a single cardioid reception pattern",
      "measuring the Doppler shift of the received NDB signal as the aircraft moves, which overlooks the technical or procedural considerations that actually govern this equipment",
      "using two identical loop antennas mounted at right angles to each other with no additional antenna required, a description not supported by the applicable equipment design standards or normal practice",
    ],
    answer: 1,
    explain:
      "A loop antenna alone produces a figure-eight pattern that cannot distinguish between two bearings 180 degrees apart. Combining its signal with a separate, non-directional sense antenna produces a single-lobed (cardioid) pattern, resolving the ambiguity and indicating the correct bearing to the station.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: ADF loop and sense antenna",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VOR or ILS receiver display's 'NAV' or 'OFF' warning flag, when displayed, indicates to the pilot that",
    options: [
      "the CDI needle is centered and the aircraft is precisely on course, regardless of the specific installation",
      "the receiver has automatically tuned to a backup frequency and is functioning normally, regardless of the specific installation",
      "the received signal is too weak, absent, or otherwise unreliable for the display to be trusted for navigation",
      "the aircraft has flown outside the designated service volume for that VOR station only, and never applies to ILS receivers",
    ],
    answer: 2,
    explain:
      "A NAV or OFF warning flag appears whenever the receiver determines that the signal being received is too weak, absent, or otherwise fails an internal validity check, warning the pilot that the associated course or glideslope indication should not be trusted for navigation until the flag clears.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: NAV warning flag",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A TCAS/ACAS Resolution Advisory (RA) may be classified as either 'preventive' or 'corrective.' The distinguishing difference is that a corrective RA",
    options: [
      "is always weaker in urgency than a preventive RA, which overlooks the technical or procedural considerations that actually govern this equipment, as this equipment actually functions",
      "is issued only for a Traffic Advisory, never for a Resolution Advisory, which overlooks the technical or procedural considerations that actually govern this equipment",
      "applies only to intruder aircraft above the TCAS-equipped aircraft's altitude, which overlooks the technical or procedural considerations that actually govern this equipment",
      "requires the pilot to change the aircraft's current vertical speed to establish or increase separation, whereas a preventive RA restricts a maneuver without requiring an actual vertical speed change",
    ],
    answer: 3,
    explain:
      "A corrective RA requires the pilot to actively change the aircraft's vertical speed (such as climbing or descending) to achieve adequate separation. A preventive RA instead restricts what the pilot may do -- for example, advising against a climb -- without requiring a change from the current vertical speed, since existing separation is already adequate if maintained.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: TCAS preventive and corrective RAs",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Within NAV CANADA's air navigation services, a Flight Information Centre (FIC) is primarily distinguished from a Flight Service Station (FSS) in that an FIC",
    options: [
      "provides pre-flight and in-flight telephone briefing, weather, and NOTAM information over a wide area, while an FSS provides services more directly tied to a specific aerodrome or local area",
      "is staffed exclusively by air traffic controllers providing IFR separation services, which overlooks the technical or procedural considerations that actually govern this equipment",
      "exists only to operate remote communications outlets, with no briefing function at all, which overlooks the technical or procedural considerations that actually govern this equipment, regardless of the specific installation",
      "has been fully replaced by automated ATIS broadcasts and no longer operates in Canada, which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 0,
    explain:
      "An FIC provides broad-area services such as pre-flight and in-flight weather and NOTAM briefings by telephone or radio, while an FSS is generally associated with services tied more directly to a specific aerodrome or local area, such as airport advisory service.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: FIC versus FSS",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Because an airborne weather radar's beam spreads out with increasing distance from the antenna, at long range the radar's ability to resolve fine detail within a weather cell is reduced primarily because",
    options: [
      "precipitation always attenuates the signal completely beyond 50 nautical miles, which overlooks the technical or procedural considerations that actually govern this equipment",
      "the beam's cross-sectional width at long range covers a much larger volume of atmosphere, so the displayed return represents an average over that wider area rather than a precise point",
      "the radar switches from an active to a passive detection mode at long range, which overlooks the technical or procedural considerations that actually govern this equipment",
      "the antenna automatically shuts off beyond a fixed maximum range for safety reasons, which overlooks the technical or procedural considerations that actually govern this equipment, regardless of the specific installation",
    ],
    answer: 1,
    explain:
      "A radar beam's diameter increases with distance from the antenna, so at long range a single displayed return represents the average reflectivity across a much larger volume of atmosphere, reducing the radar's ability to resolve fine structure within a weather cell compared to closer range.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Weather radar beam width",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Manually reducing an airborne weather radar's gain below its normal (calibrated) setting is a technique sometimes used by pilots primarily to",
    options: [
      "increase the radar's maximum detection range beyond its rated limit, which overlooks the technical or procedural considerations that actually govern this equipment",
      "permanently improve the accuracy of the radar's automatic tilt function, which overlooks the technical or procedural considerations that actually govern this equipment",
      "help distinguish the most intense precipitation returns from less severe returns, since at reduced gain only the strongest reflections remain clearly displayed",
      "convert the display from a horizontal (plan) view to a vertical profile view, which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 2,
    explain:
      "Reducing gain below the calibrated setting causes weaker returns to fade from the display while the strongest reflections remain visible, helping a pilot identify the most intense cores within an area of precipitation that might otherwise appear uniformly severe at normal gain.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Weather radar gain",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "If a VOR station's Morse code identifier is missing, garbled, or replaced by a continuous tone during a period of maintenance, a pilot using that station should",
    options: [
      "assume the station has automatically switched to a backup frequency, which overlooks the technical or procedural considerations that actually govern this equipment",
      "continue to rely on the received bearing information as fully accurate, since the identifier and navigation signal are generated independently, regardless of the specific installation",
      "report the issue only if requested to do so by ATC, but continue using the station in the meantime, a description not supported by the applicable equipment design standards or normal practice",
      "treat the navigation information from that station as unreliable and not use it for navigation until a proper identification can be confirmed",
    ],
    answer: 3,
    explain:
      "A missing, garbled, or continuous-tone identifier is a specific warning that the station may be unreliable, often signalling maintenance or a fault; standard practice is to treat the station's navigation information as unusable until a valid identification can be confirmed.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: VOR identification and reliability",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "When a DME receiver is first tuned to a new station, it typically passes through a 'search' mode before settling into a 'track' mode. This search mode is best described as the period during which the receiver is",
    options: [
      "transmitting interrogation pulses and attempting to identify and lock onto valid reply pulses from the ground station, before it can reliably display distance",
      "recalibrating its internal clock against the GNSS time reference, a claim inconsistent with how this system is actually certified and operated",
      "broadcasting the aircraft's identity to the DME ground station for logging purposes, regardless of the specific installation",
      "receiving VOR radial information exclusively, with distance information unavailable until the aircraft lands, as this equipment actually functions",
    ],
    answer: 0,
    explain:
      "During search mode, the DME interrogator transmits pulse pairs and scans for a matching pattern of reply pulses from the ground transponder; once a valid, consistent reply is identified, the receiver locks on and enters track mode, at which point distance can be reliably displayed.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: DME search and track modes",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Aviation HF voice communication is generally transmitted using single-sideband (SSB) modulation rather than conventional double-sideband AM primarily because SSB",
    options: [
      "provides significantly greater range than any VHF communication system regardless of frequency selection, which overlooks the technical or procedural considerations that actually govern this equipment",
      "makes more efficient use of the limited HF spectrum and transmitter power by not transmitting a carrier or the redundant second sideband",
      "automatically encrypts the voice signal for security purposes, which overlooks the technical or procedural considerations that actually govern this equipment",
      "requires no antenna coupler or tuning unit, unlike AM, which overlooks the technical or procedural considerations that actually govern this equipment, regardless of the specific installation",
    ],
    answer: 1,
    explain:
      "SSB transmits only one sideband and suppresses the carrier and the other sideband, concentrating available transmitter power into the information-carrying portion of the signal and using less spectrum than conventional double-sideband AM, which is valuable given the limited and congested HF band.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: HF single-sideband modulation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The 'capture effect,' a characteristic of FM and VHF AM receivers, describes the tendency for a receiver, when two stations transmit simultaneously on the same frequency, to",
    options: [
      "receive both transmissions with perfect clarity and no interference whatsoever, which overlooks the technical or procedural considerations that actually govern this equipment",
      "automatically mute both transmissions until one station stops transmitting, which overlooks the technical or procedural considerations that actually govern this equipment",
      "predominantly reproduce the stronger of the two signals, often with a distinctive heterodyne squeal if the signal strengths are close",
      "switch to a pre-programmed backup frequency, which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 2,
    explain:
      "The capture effect causes a receiver to lock onto and reproduce mainly the stronger of two simultaneous same-frequency transmissions; when the two signals are close in strength, the interference between them can produce a distinctive squeal, making both transmissions difficult to understand.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: VHF receiver capture effect",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An LNAV/VNAV approach minima line, as published on many GNSS/RNAV approach charts, is distinguished from an LPV minima line in that LNAV/VNAV",
    options: [
      "requires ground-based ILS equipment to generate the vertical path, which overlooks the technical or procedural considerations that actually govern this equipment",
      "provides no vertical guidance of any kind, functioning identically to a basic LNAV approach, which overlooks the technical or procedural considerations that actually govern this equipment",
      "is only available to aircraft equipped with a radar altimeter, which overlooks the technical or procedural considerations that actually govern this equipment",
      "combines GNSS lateral guidance with a computed (typically barometric) vertical path, rather than the SBAS-derived precision vertical guidance used by LPV",
    ],
    answer: 3,
    explain:
      "LNAV/VNAV pairs standard GNSS lateral guidance with a computed vertical path, commonly derived from barometric altitude, rather than the higher-precision, SBAS-augmented vertical guidance that defines an LPV approach; the two minima lines reflect this difference in the source and precision of vertical guidance.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: LNAV/VNAV versus LPV",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A 'sidetone' feature on an aircraft VHF communication radio allows a pilot to",
    options: [
      "hear their own transmitted voice fed back into their headset while transmitting, helping confirm the microphone and radio are functioning correctly",
      "hear a continuous background tone confirming the radio is powered on, independent of any transmission, which overlooks the technical or procedural considerations that actually govern this equipment",
      "transmit on two frequencies simultaneously, which overlooks the technical or procedural considerations that actually govern this equipment, regardless of the specific installation",
      "automatically silence all other radios in the cockpit while transmitting, which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 0,
    explain:
      "Sidetone feeds a pilot's own transmitted voice back into their headset while they are keyed up, giving immediate confirmation that the microphone and radio are working and that the transmission is being generated, without needing another station to confirm receipt.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: VHF radio sidetone",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A 'compass locator,' a low-power NDB sometimes collocated with the outer or middle marker of an ILS, is primarily used to",
    options: [
      "replace the need for any ILS glideslope equipment at the aerodrome, an oversimplification that ignores the practical limitations inherent in this equipment",
      "provide a bearing reference to help the pilot intercept and track the localizer course during the approach and missed approach, distinct from a high-power en route NDB",
      "transmit ATIS-equivalent weather information exclusively, which overlooks the technical or procedural considerations that actually govern this equipment",
      "serve only as a backup power source for the ILS transmitter, which overlooks the technical or procedural considerations that actually govern this equipment",
    ],
    answer: 1,
    explain:
      "A compass locator is a low-power NDB, typically collocated with an ILS outer or middle marker, that provides a bearing reference to assist a pilot in intercepting and tracking the localizer course, including during a missed approach -- a more limited-range application than a high-power en route NDB used for general navigation.",
    reference: "TP 690 -- Radio Communications and Aids to Navigation: Compass locator",
  },
];
