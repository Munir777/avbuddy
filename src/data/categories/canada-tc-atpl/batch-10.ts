import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 10 -- Section 10: Radio
// Communications and Aids to Navigation (radio theory, aircraft
// transceivers, SELCAL, air traffic surveillance, weather radar,
// navigation systems, approach aids, and transponders/ACAS/TCAS).
// Original questions written from general avionics/radio theory
// knowledge and the TP 690 syllabus (topic headings only, no sample
// questions). Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_10_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "For a radio wave, wavelength and frequency are related such that",
    options: [
      "wavelength and frequency are entirely unrelated properties of a radio wave, regardless of the medium or propagation speed involved.",
      "wavelength and frequency are inversely related -- as frequency increases, wavelength decreases, for a constant propagation speed.",
      "wavelength depends only on the transmitting antenna's length, with no relationship to frequency at all.",
      "wavelength and frequency are directly proportional -- as frequency increases, wavelength also increases.",
    ],
    answer: 1,
    explain:
      "Since a radio wave's propagation speed (the speed of light) is effectively constant, wavelength equals that speed divided by frequency -- so higher frequencies always correspond to shorter wavelengths, and lower frequencies to longer wavelengths, across every frequency band.",
    reference: "TP 690 Section 10 - Radio, Wave Length and Frequency",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "VHF radio (used for most air-ground voice communication, VOR, and the ILS localizer) propagates primarily as a",
    options: [
      "sky wave, refracted back to Earth by the ionosphere over very long distances.",
      "wave that is entirely unaffected by terrain, curvature of the Earth, or distance from the transmitting station at any time.",
      "direct, line-of-sight (space) wave, limited in range by the curvature of the Earth and by terrain obstructions.",
      "ground wave, following the curvature of the Earth well beyond the visual horizon.",
    ],
    answer: 2,
    explain:
      "VHF's short wavelength makes it propagate essentially as a direct, line-of-sight wave, which is why VHF range depends heavily on altitude (how far the horizon is) and is blocked by terrain -- unlike the lower-frequency ground waves (LF/MF) that follow the Earth's curvature, or HF sky waves that refract off the ionosphere for very long-range propagation.",
    reference: "TP 690 Section 10 - Radio, Characteristics of Low, High and Very High Frequency Radio Waves",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "HF radio is used for long-range oceanic and remote-area voice communication primarily because",
    options: [
      "HF signals travel in a perfectly straight line, giving them dramatically longer line-of-sight range than VHF.",
      "HF requires no ground station infrastructure of any kind at all to function properly, unlike VHF communication systems in general use today.",
      "HF is entirely unaffected by atmospheric static or interference, unlike VHF.",
      "its sky wave can be refracted back to Earth by the ionosphere, allowing communication far beyond VHF's line-of-sight range.",
    ],
    answer: 3,
    explain:
      "HF's sky wave propagation -- bouncing off the ionosphere and back down to Earth, sometimes over multiple hops -- is what gives it usable range far beyond VHF's line-of-sight limit, making it the traditional choice for oceanic and remote-area voice communication where VHF ground stations aren't within range. This comes at the cost of being more susceptible to atmospheric static and ionospheric variability than VHF.",
    reference: "TP 690 Section 10 - Radio, Ground Waves and Sky Waves",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The 'skip zone' associated with sky wave propagation refers to",
    options: [
      "a region beyond the range of the ground wave but closer than where the sky wave first returns to Earth, in which the signal may not be reliably received.",
      "the specific frequency range that a transmitter is licensed to broadcast on.",
      "the entire area within the ground wave's normal range, where reception is always reliable.",
      "a zone that exists only for VHF transmissions, never for HF.",
    ],
    answer: 0,
    explain:
      "Ground wave coverage fades out at some distance from the transmitter, while the sky wave -- reflected off the ionosphere -- doesn't return to Earth until some further distance out. Between those two points lies the skip zone, where neither the ground wave nor the sky wave provides reliable signal, a real limitation for HF and other sky-wave-dependent communication.",
    reference: "TP 690 Section 10 - Radio, Skip Distance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "'Night effect' on ADF bearing accuracy is most pronounced",
    options: [
      "only when the aircraft is directly overhead the NDB station, and nowhere else along the route.",
      "around dawn and dusk, when ground wave and sky wave signals from an NDB can arrive out of phase and interfere with each other.",
      "only over water, and never over land.",
      "at local solar noon, when the sun is at its highest point.",
    ],
    answer: 1,
    explain:
      "Around sunrise and sunset, the ionosphere's reflective properties are changing rapidly, and both ground wave and sky wave components of an NDB's signal can reach the aircraft simultaneously but out of phase, causing the ADF needle to swing or give an unreliable bearing -- a known limitation of NDB/ADF that VOR is largely immune to.",
    reference: "TP 690 Section 10 - Radio, Night Effect",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "ACARS (Aircraft Communications Addressing and Reporting System) is best described as a system that",
    options: [
      "is used exclusively for voice communication between the crew and company dispatch.",
      "functions only while the aircraft is on the ground, with absolutely no in-flight capability whatsoever provided.",
      "transmits digital data messages (operational messages, weather, some ATC clearances) rather than voice.",
      "replaces the aircraft's transponder, providing position data to ATC in place of secondary radar.",
    ],
    answer: 2,
    explain:
      "ACARS is a datalink system -- exchanging digital messages rather than voice -- used for things like company operational communication, automated position/status reports, weather requests, and (via CPDLC integration on suitably equipped aircraft) some categories of ATC clearance delivery, reducing reliance on congested voice channels, especially over long-range routes.",
    reference: "TP 690 Section 10 - Aircraft Radio Transceivers, DATALINK, ACARS",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A SELCAL (Selective Calling) system is used primarily to",
    options: [
      "automatically select the strongest available VHF frequency for the aircraft's radios, with no crew input required.",
      "provide automated position reporting, in the same way ADS-B does.",
      "replace the need for a transponder, by identifying the aircraft to ATC via a coded audio tone instead.",
      "allow a ground station to alert a specific aircraft with a coded tone, so the crew doesn't need to continuously monitor an HF or VHF frequency for calls.",
    ],
    answer: 3,
    explain:
      "SELCAL assigns each aircraft a unique code; a ground station calling that aircraft sends the coded tone, which triggers a cockpit indication, so the crew can safely leave the audio muted (rather than continuously listening to what may be a busy or static-filled HF channel) and still be reliably alerted when a call for their specific aircraft comes in.",
    reference: "TP 690 Section 10 - Selective Call System (SELCAL)",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The key operational difference between primary and secondary surveillance radar (PSR and SSR) is that SSR",
    options: [
      "relies on a reply from the transponder, which can provide identity and altitude data, unlike a primary radar return.",
      "is used only for weather detection purposes, while primary radar is said to be used only for aircraft detection purposes in general.",
      "cannot provide any altitude information under any circumstances, unlike primary radar.",
      "requires no equipment on board the aircraft at all, in the same way primary radar does.",
    ],
    answer: 0,
    explain:
      "Primary radar simply detects the reflected energy off any object -- no aircraft equipment is required, but it provides no identity or (without additional processing) reliable altitude information. Secondary radar interrogates the aircraft's transponder, which replies with a code that (with Mode C or Mode S) can include pressure altitude, giving ATC much richer and generally more reliable target information than a raw primary skin-paint return.",
    reference: "TP 690 Section 10 - Air Traffic Surveillance, Primary Returns / Secondary Returns",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "ADS-B (Automatic Dependent Surveillance-Broadcast) differs from secondary radar surveillance in that ADS-B",
    options: [
      "can only be received by other aircraft, and is never used by ground-based ATC systems.",
      "has the aircraft broadcast its own GPS-derived position and other data automatically, without ground interrogation.",
      "provides no position information at all, only altitude and identity data, according to this description of the system.",
      "requires the aircraft to be interrogated by a ground-based radar antenna, exactly as SSR does.",
    ],
    answer: 1,
    explain:
      "ADS-B is 'dependent' on the aircraft's own navigation source (typically GPS) and 'automatic' in that the aircraft broadcasts its position, velocity, and other data on its own schedule, without a ground station needing to interrogate it first -- a fundamentally different surveillance architecture from SSR's interrogate-and-reply approach, and one that both ATC ground stations and suitably equipped aircraft (ADS-B In) can receive.",
    reference: "TP 690 Section 10 - Air Traffic Surveillance, ADS-B",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Multilateration (MLAT) determines an aircraft's position by",
    options: [
      "using a single ground-based radar antenna to measure both range and bearing directly, without any additional receiver sites needed at all.",
      "requiring the aircraft to be equipped with GNSS and broadcast its own computed position, exactly as ADS-B does.",
      "measuring small differences in arrival time of the transponder signal at multiple, precisely surveyed ground receiver sites.",
      "relying entirely on the aircraft's onboard inertial reference system, with no ground infrastructure involved.",
    ],
    answer: 2,
    explain:
      "MLAT works by having several ground receivers (at known, surveyed locations) each note the precise time they receive a given transponder reply; the small differences in arrival time between sites let the system calculate the aircraft's position through triangulation-like math -- useful for extending effective surveillance coverage (including in mountainous or remote terrain where traditional radar coverage is poor) using existing Mode A/C/S transponder equipment, without requiring ADS-B or GNSS equipage on the aircraft itself.",
    reference: "TP 690 Section 10 - Air Traffic Surveillance, Multilateration (MLAT)",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Airborne weather radar primarily detects",
    options: [
      "turbulence directly, by measuring air density fluctuations continuously along the entire length of the radar beam path itself.",
      "dry hail and dry snow with the same strong reflectivity as heavy rain.",
      "clear air turbulence with the same reliability it detects precipitation.",
      "reflectivity from precipitation-sized droplets or ice particles, used to infer, but not directly measure, turbulence.",
    ],
    answer: 3,
    explain:
      "Weather radar works by reflecting energy off precipitation particles, so it responds to the size and density of those particles, not to turbulence itself -- turbulence potential is inferred indirectly from the reflectivity pattern (strong gradients, particular shapes), which is why radar can miss clear air turbulence entirely, and why dry hail or dry snow (with weak reflectivity compared to their actual hazard) can be under-represented on the display.",
    reference: "TP 690 Section 10 - Weather Radar, Operation and Interpretation",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Weather radar 'attenuation' behind a heavy precipitation cell refers to the situation where",
    options: [
      "the radar beam is significantly absorbed or scattered by an intense cell ahead, masking cells further along the beam path.",
      "attenuation is said to be a phenomenon that affects ground-based ATC radar only, and never airborne weather radar systems at all.",
      "the radar automatically increases its transmitted power once heavy precipitation is detected, improving the return from cells behind it.",
      "the radar display always shows every cell along the beam path with equal, undiminished intensity, regardless of what lies in front.",
    ],
    answer: 0,
    explain:
      "A sufficiently intense, heavy-precipitation cell can absorb and scatter enough of the radar beam's energy that little is left to detect and display a genuinely hazardous cell sitting behind it along the same beam path -- a real limitation that can create a false sense of a 'clear' area beyond an intense storm, which is one reason weather radar interpretation training emphasizes not simply threading a path toward the darkest gap on the display.",
    reference: "TP 690 Section 10 - Weather Radar, Operation and Interpretation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An ADF (Automatic Direction Finder) needle indicates",
    options: [
      "distance to the tuned station, in the same way a DME does.",
      "the relative bearing to the tuned NDB station, measured from the aircraft's nose.",
      "the magnetic bearing to the tuned station directly, with no need to reference the aircraft's heading.",
      "the aircraft's current groundspeed, derived from the strength of the received NDB signal.",
    ],
    answer: 1,
    explain:
      "The ADF needle points to the relative bearing of the station -- its direction measured from the nose of the aircraft, not from magnetic north. To get the magnetic bearing to the station, the pilot adds the relative bearing to the aircraft's magnetic heading (subtracting 360 if the result exceeds it); the raw needle indication by itself does not directly give a usable magnetic bearing without that step.",
    reference: "TP 690 Section 10 - Navigation Systems, ADF and RMI",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "Compared to an NDB/ADF system, a VOR generally provides",
    options: [
      "identical accuracy and identical susceptibility to weather-related errors as ADF, according to this particular comparison.",
      "a less accurate bearing, since VOR operates at a lower, more error-prone frequency than NDB.",
      "a more accurate, weather-resistant bearing, since VOR resists the thunderstorm and night-effect errors common to ADF.",
      "distance information as its primary function, with bearing being only a secondary capability.",
    ],
    answer: 2,
    explain:
      "VOR's higher (VHF) operating frequency and its different signal structure (phase comparison between a reference and a variable signal) make it far less susceptible to the thunderstorm-attraction and night-effect bearing errors that are a well-known limitation of NDB/ADF -- one reason VOR became the primary short/medium-range navigation aid over NDB for so long, even before RNAV and GNSS further changed the picture.",
    reference: "TP 690 Section 10 - Navigation Systems, VOR",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "DME (Distance Measuring Equipment) provides the aircraft's",
    options: [
      "horizontal ground distance to the station exactly, with no error introduced by the aircraft's altitude.",
      "bearing to the station only, with distance information being merely a secondary, less accurate capability provided in this system.",
      "groundspeed directly, without needing successive distance readings over time.",
      "slant range distance to the station, which differs from horizontal ground distance when close to and above the station.",
    ],
    answer: 3,
    explain:
      "DME measures the time for a signal to travel to the aircraft and back, which corresponds to the straight-line (slant) distance between the aircraft and the ground station -- not the horizontal ground distance. That difference is negligible at typical en route distances and altitudes, but becomes significant when the aircraft is at high altitude close to the station (for example, overhead a VOR/DME at cruise altitude, where slant range reads a value well above zero even directly overhead).",
    reference: "TP 690 Section 10 - Navigation Systems, DME",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A VORTAC facility combines a civil VOR with a military TACAN, allowing civil aircraft to use",
    options: [
      "the VOR component for bearing and the TACAN component's distance function (equivalent to DME) for range, from one co-located facility.",
      "the full military TACAN bearing function, with the VOR component providing distance only.",
      "neither component, since VORTAC facilities are restricted to military aircraft exclusively.",
      "the TACAN bearing function only, with no distance-measuring capability made available to civil aircraft at all under any circumstance whatsoever.",
    ],
    answer: 0,
    explain:
      "TACAN itself provides both bearing and distance for military use, but at a co-located VORTAC facility, civil aircraft use the separate VOR component for bearing and rely on TACAN's distance-measuring function (which operates on the same principle as, and is compatible with, civil DME equipment) for range -- giving civil aircraft the equivalent of a VOR/DME service from a facility built primarily to also serve military TACAN users.",
    reference: "TP 690 Section 10 - Navigation Systems, Co-located VOR and TACAN (VORTAC)",
  },
  {
    id: 17,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "RAIM (Receiver Autonomous Integrity Monitoring), used with GNSS/GPS navigation, functions by",
    options: [
      "replacing the need for any other means of navigation once installed.",
      "cross-checking redundant satellite signals to detect whether the position solution's integrity meets the required standard for the phase of flight, and alerting the crew if it does not.",
      "physically preventing the aircraft from descending below a minimum altitude if GPS signal is lost.",
      "boosting the strength of the received satellite signal to improve position accuracy.",
    ],
    answer: 1,
    explain:
      "RAIM checks that enough redundant satellite geometry is available to detect (and in some implementations, isolate) a faulty satellite signal, giving the crew confidence that the GNSS position meets the integrity requirement for the operation being flown (such as an en route segment or an approach) -- and alerting them if that integrity can't currently be assured, rather than silently providing a position that might be wrong.",
    reference: "TP 690 Section 10 - Navigation Systems, Global Navigation Satellite System (GNSS - GPS)",
  },
  {
    id: 18,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "An Inertial Navigation System (INS) or Inertial Reference System (IRS) determines the aircraft's position by",
    options: [
      "receiving GNSS satellite signals exclusively, with no independent sensing capability of its own.",
      "receiving and processing signals from ground-based VOR/DME stations exclusively.",
      "continuously sensing the aircraft's accelerations from a known starting position, without needing any external radio or satellite signal, though its computed position gradually drifts (accumulates error) over time.",
      "measuring the aircraft's true airspeed and heading only, with no capability to sense acceleration.",
    ],
    answer: 2,
    explain:
      "INS/IRS is self-contained: it senses linear acceleration (and, combined with gyros for attitude/heading reference, integrates that acceleration over time) to continuously compute position from a known starting point, requiring no external signal at all. The trade-off is that small sensor errors accumulate (integrate) over time, causing the computed position to drift progressively away from the aircraft's actual position unless updated by an external reference such as GNSS.",
    reference: "TP 690 Section 10 - Navigation Systems, Inertial Navigation System (INS) / Inertial Reference System (IRS)",
  },
  {
    id: 19,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "On an ILS, the localizer and glideslope transmissions operate in",
    options: [
      "the HF band exclusively, for both the localizer and glideslope transmissions at every ILS-equipped aerodrome across the network.",
      "the same frequency band, with the pilot selecting localizer or glideslope reception manually on the same tuned frequency.",
      "the same exact frequency, with localizer and glideslope information carried as different modulation depths of a single signal.",
      "different frequency bands -- localizer in VHF, glideslope in UHF -- paired together for each specific ILS installation.",
    ],
    answer: 3,
    explain:
      "The localizer transmits in the VHF band (in the same general range as VOR frequencies) while the glideslope transmits in the UHF band; the two are paired so that tuning the VHF localizer frequency automatically selects the correct associated UHF glideslope frequency, without the pilot needing to separately tune it.",
    reference: "TP 690 Section 10 - Approach Aids, Instrument Landing System (ILS)",
  },
  {
    id: 20,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A GNSS approach with vertical guidance (such as LPV) provides its vertical path primarily through",
    options: [
      "satellite-based positioning, often augmented for accuracy, rather than a ground-based glideslope transmitter as used by an ILS.",
      "the exact same ground-based UHF glideslope transmitter equipment used by an ILS.",
      "the aircraft's barometric altimeter exclusively, with no satellite input used at all.",
      "a radar altimeter reading, referenced continuously from the final approach fix all the way to the runway threshold itself, throughout the final segment.",
    ],
    answer: 0,
    explain:
      "Unlike an ILS, which needs ground-based localizer and glideslope transmitters at the aerodrome, a satellite-based vertically guided approach derives its path from GNSS positioning (with augmentation systems improving the accuracy and integrity enough to support vertical guidance), removing the dependency on that specific ground infrastructure being installed and operational at every runway end.",
    reference: "TP 690 Section 10 - Approach Aids, Global Navigation Satellite System Approaches",
  },
  {
    id: 21,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A Precision Approach Radar (PAR) approach is flown by",
    options: [
      "reference to VASIS/PAPI lights exclusively, with no radar or radio guidance involved at all.",
      "a ground controller watching the aircraft's radar position and issuing verbal heading and glidepath corrections throughout.",
      "the aircraft's onboard weather radar, repurposed to provide approach guidance.",
      "the pilot following cockpit displayed lateral and vertical guidance only, with no controller verbal input required at all throughout the entire approach.",
    ],
    answer: 1,
    explain:
      "PAR is a controller-guided approach: the controller watches the aircraft's position relative to the desired course and glidepath on a precision radar display and talks the pilot down with continuous heading and elevation corrections, rather than the pilot following an onboard instrument display as with an ILS or a GNSS approach.",
    reference: "TP 690 Section 10 - Approach Aids, Precision Approach Radar (PAR)",
  },
  {
    id: 22,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "A PAPI (Precision Approach Path Indicator) uses a row of lights to show the pilot",
    options: [
      "the distance remaining to the runway threshold, in nautical miles.",
      "the exact runway heading, independent of the aircraft's position on the approach.",
      "whether the aircraft is above, on, or below the designed visual glidepath, through the combination of red and white lights observed.",
      "the current wind direction and speed at the aerodrome.",
    ],
    answer: 2,
    explain:
      "Each light unit in a PAPI array shows red or white depending on the aircraft's angle relative to that unit's calibrated split; the combination the pilot sees across the row of lights (for example, more white lights than red indicating high, or more red than white indicating low) gives a simple, purely visual indication of position relative to the intended glidepath, with no separate distance or wind information provided.",
    reference: "TP 690 Section 10 - Approach Aids, VASIS/PAPI",
  },
  {
    id: 23,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "The operational difference between a TCAS/ACAS Traffic Advisory (TA) and a Resolution Advisory (RA) is that",
    options: [
      "a TA commands a specific avoidance manoeuvre directly, while an RA is purely informational, with no manoeuvre ever commanded at all.",
      "a TA and an RA are two names for exactly the same alert, issued under different circumstances.",
      "only an RA is displayed to the crew; a TA is logged silently for post-flight review only.",
      "a TA alerts the crew to nearby traffic without commanding a manoeuvre; an RA commands a specific vertical avoidance manoeuvre.",
    ],
    answer: 3,
    explain:
      "A TA is the earlier, lower-urgency alert -- it tells the crew where to look for traffic and to be ready to act, but doesn't itself command a manoeuvre. If the traffic conflict continues to develop, an RA follows, commanding a specific vertical manoeuvre (climb, descend, or a vertical speed limit) intended to increase or maintain separation -- a materially more directive alert than a TA.",
    reference: "TP 690 Section 10 - Transponders ACAS/TCAS, Use of TCAS/ACAS",
  },
  {
    id: 24,
    subject: "Canada TC ATPL",
    system: "Radio Communications and Aids to Navigation",
    q: "When responding to a TCAS/ACAS Resolution Advisory, the expected pilot/controller radio interchange includes the pilot",
    options: [
      "advising ATC of the RA and deviation as soon as practicable, then reporting clear of conflict on returning to the clearance.",
      "remaining completely silent throughout the entire event, since ATC is assumed here to already be fully aware of every RA as it happens.",
      "requesting the controller's permission before responding to the RA in any way.",
      "cancelling the RA verbally with ATC before the onboard system itself indicates the conflict is resolved.",
    ],
    answer: 0,
    explain:
      "Because the pilot is expected to comply with the RA immediately, rather than waiting for a clearance to do so, the standard phraseology sequence is to advise ATC of the deviation as soon as practicable after starting to respond to the RA, and then to report clear of conflict once the RA has resolved and the aircraft is returning to its previously assigned clearance -- ATC coordination follows the response, it doesn't precede or gate it.",
    reference: "TP 690 Section 10 - Transponders ACAS/TCAS, Pilot/Controller Interchange",
  },
];
