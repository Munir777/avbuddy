import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 71 -- Section 3: Navigation -
// General, eighth pass. Original questions written from the TP 690
// syllabus (topic headings only, no sample questions), the TC AIM
// 2026-1, and general air navigation theory. Covers VOR line-of-
// sight reception and terrain shadowing, VOR/DME RNAV accuracy
// degrading with distance, the Transverse Mercator projection's
// suitability for north-south-oriented regions, ADF homing vs
// tracking technique, GNSS geometric dilution of precision (GDOP),
// daylight saving time's effect on flight planning, differential
// GNSS correction, Mercator scale distortion with latitude,
// conformal vs equal-area map projections, RNAV along-track error,
// the fundamental definition of dead reckoning, GNSS
// ephemeris/almanac data, VOR accuracy tolerance, isoclinic lines,
// GNSS ionospheric delay, and estimated position vs fix vs DR
// position -- topics not yet addressed in batches 4, 13, 22, 31,
// 41, 51, or 61. Not transcribed or adapted from any commercial
// test-prep publisher.
export const CANADA_TC_ATPL_BATCH_71_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Because VOR signals propagate essentially by line-of-sight, reliable reception can be reduced or lost when",
    options: [
      "the aircraft is above the station's published service volume ceiling only, with terrain and earth curvature having no relevance to VOR reception at any altitude.",
      "the aircraft is flying directly toward the station regardless of altitude or intervening terrain, since VOR signals are defined as unaffected by direction of flight.",
      "intervening terrain (such as a mountain ridge) or the curvature of the earth blocks the direct line-of-sight path between the aircraft and the VOR station, an effect most significant at lower altitudes and greater distances from the station.",
      "the VOR station's Morse code identifier is temporarily inaudible, a condition unrelated to the physical line-of-sight propagation path.",
    ],
    answer: 2,
    explain:
      "VOR signals propagate essentially by line-of-sight, so intervening terrain such as a mountain ridge, or simply the curvature of the earth over a sufficient distance, can block the direct path between the aircraft and the station and degrade or eliminate reliable reception; this effect is most pronounced at lower altitudes and greater distances, which is part of why a VOR's usable service volume is altitude-dependent even in the absence of any terrain obstruction.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "For area navigation based on a VOR/DME (RHO-THETA) station, the resulting computed position generally becomes",
    options: [
      "more accurate with increasing distance from the station, the reverse of the actual relationship between bearing error and distance.",
      "dependent solely on DME distance accuracy, with the VOR bearing component contributing no error to the computed position at any range.",
      "entirely unaffected by distance from the station, with positional accuracy remaining constant regardless of range.",
      "less accurate with increasing distance from the station, since a given small angular bearing error corresponds to a progressively larger lateral position error the further the aircraft is from the station.",
    ],
    answer: 3,
    explain:
      "Because a VOR/DME RNAV position is computed using an angular bearing (theta) combined with a distance (rho), a given small angular bearing error translates into a progressively larger lateral position error as distance from the station increases (the same angular error subtends a wider arc at greater range); this is part of why VOR/DME-based RNAV is generally considered less inherently accurate at longer range than a system such as GNSS, which does not suffer this particular distance-dependent degradation.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A Transverse Mercator projection, using a cylinder oriented along a meridian rather than along the equator, is particularly well suited to charting",
    options: [
      "a region with a predominantly north-south orientation, since the line of minimal distortion (the central meridian) runs north-south, keeping distortion low across such a region in a way a standard equatorial Mercator projection would not.",
      "no particular region more effectively than a standard equatorial Mercator projection, the two being functionally identical in every respect.",
      "a region straddling the equator exclusively, with no advantage over a standard Mercator projection for a north-south-oriented region.",
      "polar regions exclusively, a role that is instead generally better served by a polar stereographic projection.",
    ],
    answer: 0,
    explain:
      "Because a Transverse Mercator projection's cylinder is oriented along a chosen meridian rather than along the equator, its line of minimal distortion runs north-south along that central meridian rather than east-west along the equator, making it particularly well suited to charting a region with a predominantly north-south orientation, where a standard equatorial Mercator projection would introduce more significant distortion.",
    reference: "TP 690 -- Navigation - General: Charts",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "'Homing' to an NDB station using an ADF, as distinguished from 'tracking' a specific bearing to or from that station, generally involves",
    options: [
      "a technique usable only when no crosswind is present, with homing considered impossible in any wind condition other than a calm wind.",
      "continuously turning the aircraft to keep the ADF needle pointing directly to the nose (zero relative bearing), which results in a curved flight path over the ground whenever a crosswind is present, rather than maintaining a specific, constant magnetic track.",
      "flying directly away from the station at all times, with the needle pointing to the tail rather than the nose.",
      "maintaining a specific, constant magnetic bearing to or from the station by applying a wind correction angle, a description that actually applies to tracking rather than homing.",
    ],
    answer: 1,
    explain:
      "Homing involves continuously turning the aircraft to keep the ADF needle pointing straight ahead (zero relative bearing), which, in the presence of a crosswind, results in a curved flight path over the ground (drifting progressively downwind while still homing toward the station) rather than a straight track; tracking, by contrast, involves determining and applying an appropriate wind correction angle to maintain a specific, constant magnetic bearing to or from the station, resulting in a straight ground track despite the crosswind.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Geometric Dilution of Precision (GDOP), a factor affecting GNSS position accuracy, refers to the effect that",
    options: [
      "the receiver's own internal clock error alone has on positional accuracy, with satellite geometry having no bearing on GDOP at all.",
      "the total number of satellites in the entire GNSS constellation, worldwide, has on the accuracy of a fix taken at any single location on any given day.",
      "the relative geometric arrangement of the satellites being used for a position fix has on accuracy, with a wider, more spread-out satellite geometry generally giving a more accurate fix than a geometry in which the satellites are clustered closely together in the sky.",
      "atmospheric temperature has on GNSS signal accuracy, a factor unrelated to satellite geometry.",
    ],
    answer: 2,
    explain:
      "GDOP reflects how the relative geometric arrangement of the specific satellites being used for a position fix affects the accuracy of that fix: a wider, well-spread-out geometry (satellites distributed across a broad range of the sky) generally yields a more accurate position than a poor geometry in which the satellites being used are clustered closely together, even with the same number of satellites and the same underlying signal quality -- receivers generally favour satellite selections that minimize GDOP where a choice is available.",
    reference: "TP 690 -- Navigation - General: GNSS",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "The transition into or out of Daylight Saving Time at a given location is relevant to flight planning primarily because",
    options: [
      "Daylight Saving Time has no relevance whatsoever to any aspect of flight planning, scheduling, or time conversion.",
      "UTC (Zulu) time itself shifts by an hour at the Daylight Saving Time transition, a description that actually applies to local clock time rather than UTC.",
      "Daylight Saving Time changes the actual length of the day in hours, a description that inaccurately describes what the time change actually does.",
      "local clock time shifts by an hour relative to UTC (or relative to Standard Time) at the transition, so a flight or schedule referenced using local time around that transition must be carefully checked against UTC to avoid an hour's error in planning.",
    ],
    answer: 3,
    explain:
      "At a Daylight Saving Time transition, local clock time shifts by an hour relative to Standard Time, changing the offset between local time and UTC at that location; because aviation planning, weather products, and NOTAMs are commonly referenced to UTC (Zulu) time precisely to avoid this kind of ambiguity, care is still needed when converting to or communicating in local time around a Daylight Saving Time transition to avoid introducing an hour's error into scheduling or planning.",
    reference: "TP 690 -- Navigation - General: Time",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Differential GNSS correction, as a general principle (applied in various forms by systems such as SBAS and GBAS), works by",
    options: [
      "having a ground reference station at a precisely known, surveyed location compare its own GNSS-computed position against its known true position, then broadcasting the resulting correction data to nearby (or regionally distributed) users to improve their own GNSS position accuracy.",
      "eliminating the need for any satellite signal at all, deriving position purely from the ground reference station's own broadcast signal.",
      "applying an identical, fixed correction value worldwide, regardless of the user's location relative to any ground reference station.",
      "having every individual aircraft compute its own correction independently, with no ground reference station or shared correction data involved at any point.",
    ],
    answer: 0,
    explain:
      "The general principle behind differential GNSS correction is that a ground reference station, installed at a precisely known and surveyed location, compares its own GNSS-computed position against that known true position; the resulting correction data (reflecting errors common to nearby users, such as certain atmospheric and satellite-clock effects) is then broadcast to users in the area, allowing their own GNSS receivers to apply that correction and achieve improved position accuracy compared to relying on unaugmented GNSS alone.",
    reference: "TP 690 -- Navigation - General: GNSS",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "On a Mercator chart, the scale (the relationship between chart distance and actual distance) is",
    options: [
      "constant along meridians but undefined along parallels, a distinction that does not accurately describe how Mercator scale distortion actually behaves.",
      "not constant across the chart, but instead increases with increasing latitude, since the projection progressively stretches distances (and areas) further from the equator to keep meridians parallel and preserve angles locally.",
      "perfectly constant everywhere on the chart, regardless of latitude, making a single scale figure valid across the entire chart.",
      "greatest at the equator and decreases toward the poles, the reverse of the actual relationship.",
    ],
    answer: 1,
    explain:
      "A Mercator projection's scale is not constant across the chart: because the projection stretches the spacing between parallels (and, correspondingly, distances and areas) progressively more with increasing distance from the equator in order to keep meridians parallel to each other and preserve angles locally (its conformal property), the scale increases with increasing latitude, meaning a single, simple scale figure is only strictly accurate at the specific latitude it was computed for.",
    reference: "TP 690 -- Navigation - General: Charts",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A conformal map projection (such as a Lambert Conformal Conic or a Mercator projection) is distinguished from an equal-area projection in that a conformal projection",
    options: [
      "preserves both angles and area perfectly everywhere on the chart, with no distortion of any kind introduced by either property.",
      "is defined by having no relationship whatsoever to either angular accuracy or areal accuracy, and instead only concerns chart colour scheme.",
      "preserves angles and local shapes accurately at any given point, generally at the cost of distorting the relative size (area) of regions, particularly ones far apart or at very different latitudes on the chart.",
      "preserves the relative size (area) of every region on the chart accurately, while distorting angles and local shapes, a description that actually applies to an equal-area projection rather than a conformal one.",
    ],
    answer: 2,
    explain:
      "A conformal projection -- the property shared by both the Lambert Conformal Conic and the Mercator projection, which is why both are useful for aeronautical charts -- preserves angles and local shapes accurately at any given point (meaning a small area on the chart is shaped correctly relative to the real world), generally at the cost of distorting the relative size of regions, particularly ones far apart or at significantly different latitudes; an equal-area projection instead preserves relative size accurately across the chart, generally at the cost of distorting shape and angles.",
    reference: "TP 690 -- Navigation - General: Charts",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Along-track error, as distinguished from cross-track error (XTK) on an RNAV/FMS system, represents",
    options: [
      "the error in the aircraft's indicated altitude, a vertical quantity unrelated to either lateral or along-route positional error.",
      "the same quantity as cross-track error, the two terms simply being alternate names for an identical lateral displacement measurement.",
      "an error that exists only for a VOR/DME-based RNAV system, with no equivalent concept for a GNSS-based RNAV system.",
      "the aircraft's positional error measured along the direction of the route itself (ahead of or behind where it is computed to actually be), rather than the lateral (perpendicular) displacement from the route centreline that cross-track error measures.",
    ],
    answer: 3,
    explain:
      "While cross-track error (XTK) measures the aircraft's lateral (perpendicular) displacement from the route centreline, along-track error measures positional error along the direction of the route itself -- essentially how far ahead of or behind its computed position the aircraft actually is along the route -- a distinct dimension of overall navigational accuracy from the lateral displacement that XTK captures, and one relevant to any RNAV system, GNSS-based or otherwise.",
    reference: "TP 690 -- Navigation - General: Area Navigation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Dead reckoning, as a fundamental method of air navigation, is best described as",
    options: [
      "determining an aircraft's current position by applying its heading, true airspeed (adjusted for known or forecast wind), and elapsed time since departure from a known starting position, without relying on an external fix from a NAVAID, visual landmark, or satellite system.",
      "determining position solely by radio bearings taken from two or more ground stations, with no use of heading, airspeed, or elapsed time.",
      "a method of navigation used exclusively over water, with no application to over-land flight of any kind.",
      "determining position exclusively from a satellite-based system such as GNSS, with no reliance on heading, airspeed, or elapsed time of any kind.",
    ],
    answer: 0,
    explain:
      "Dead reckoning is the fundamental method of deriving a computed (estimated) position by applying an aircraft's heading, true airspeed (adjusted for known or forecast wind to give the resulting track and groundspeed), and the elapsed time since a known starting position, without relying on an external fix from a radio NAVAID, a visual landmark, or a satellite system -- other navigation methods (radio fixing, visual pilotage, GNSS) are commonly used to periodically confirm or correct the dead-reckoned position, rather than replacing the underlying dead reckoning computation entirely.",
    reference: "TP 690 -- Navigation - General: Dead Reckoning",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Ephemeris data, broadcast by each GNSS satellite as part of its navigation message, provides a receiver with",
    options: [
      "weather information relevant to the receiver's current location, a function unrelated to satellite orbital data.",
      "precise information about that specific satellite's own current orbital position, which the receiver uses (together with signal timing) to calculate its own position relative to that satellite.",
      "the receiver's own current position directly, computed entirely on board the satellite rather than by the receiver.",
      "the identity and position of every other aircraft currently using the same GNSS constellation, a function unrelated to a satellite's own orbital data.",
    ],
    answer: 1,
    explain:
      "Ephemeris data, broadcast by each GNSS satellite as part of its ongoing navigation message, provides precise information about that specific satellite's own current orbital position; a receiver uses this data, together with the precise timing of the received signal, to calculate its own position relative to that satellite, and combines the results from multiple satellites to compute an overall position fix -- a broader, less precise 'almanac' dataset, also broadcast, gives approximate orbital data for the entire constellation, helping a receiver know which satellites to expect to find.",
    reference: "TP 690 -- Navigation - General: GNSS",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "A VOR station's signal accuracy is generally certified and maintained within a specified tolerance (commonly expressed as a small number of degrees), meaning that",
    options: [
      "every VOR station provides a mathematically perfect, error-free radial with no tolerance or possible deviation of any kind.",
      "VOR accuracy tolerance applies only to a VOR used for an instrument approach, with no accuracy standard applicable to VOR use for general en route navigation.",
      "a given VOR radial displayed to the pilot can be expected to be accurate within that published tolerance under normal conditions, though the actual overall system accuracy experienced also depends on factors such as receiver accuracy, VOR type (conventional or Doppler), and terrain-related siting error.",
      "the published accuracy tolerance applies only to the ground station's transmitted signal power, with no relationship to the accuracy of the radial itself.",
    ],
    answer: 2,
    explain:
      "A VOR station's transmitted signal is certified and maintained within a specified accuracy tolerance (commonly cited as a small number of degrees), meaning a displayed radial can generally be expected to be accurate within that tolerance under normal conditions; the overall accuracy actually experienced by a pilot also depends on additional factors such as the aircraft's receiver accuracy, whether the station is a conventional or Doppler VOR (which affects susceptibility to terrain-related site error), and other practical considerations beyond the ground station's own certified tolerance alone.",
    reference: "TP 690 -- Navigation - General: Radio Navigation",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Isoclinic lines, drawn on a chart connecting points of equal magnetic dip (inclination), are distinguished from isogonic lines (equal magnetic variation) in that isoclinic lines instead depict",
    options: [
      "lines of equal barometric pressure, a description that applies to isobars rather than either isoclinic or isogonic lines.",
      "the identical quantity as isogonic lines, the two terms simply being alternate names for an identical chart feature.",
      "lines of equal elevation (contour lines), a description that applies to neither isoclinic nor isogonic lines.",
      "the angle at which the earth's magnetic field lines intersect the horizontal at a given location, rather than the angular difference between true north and magnetic north that isogonic lines depict.",
    ],
    answer: 3,
    explain:
      "Isoclinic lines connect points of equal magnetic dip (inclination) -- the angle at which the earth's magnetic field lines intersect the horizontal plane at a given location, which increases toward the magnetic poles -- distinguishing them from isogonic lines, which instead connect points of equal magnetic variation (the angular difference between true north and magnetic north at that location); the agonic line, covered separately, is the specific isogonic line along which variation is zero.",
    reference: "TP 690 -- Navigation - General: Magnetism",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "Ionospheric delay, a source of GNSS position error caused by the satellite signal's passage through the earth's ionosphere, occurs because",
    options: [
      "charged particles in the ionosphere slow the signal's propagation speed somewhat compared to its speed in a vacuum, introducing a timing error that translates into a position error unless corrected (for example, through a dual-frequency receiver or an augmentation system).",
      "the ionosphere physically blocks the GNSS signal entirely, preventing any signal from a satellite located behind that layer from being received at all.",
      "ionospheric delay applies only to signals received at night, with no ionospheric effect present on a signal received during daylight hours.",
      "the ionosphere reflects the GNSS signal back toward the satellite, preventing it from ever reaching the receiver on the ground or in the aircraft.",
    ],
    answer: 0,
    explain:
      "Charged particles within the earth's ionosphere slow a GNSS signal's propagation speed somewhat compared to its speed in a vacuum (an effect that varies with solar activity, time of day, and the signal's path through the ionosphere), introducing a timing error that, since GNSS position is computed from precise signal timing, translates into a position error unless corrected -- a dual-frequency receiver can directly measure and correct for much of this effect, and augmentation systems such as SBAS also broadcast ionospheric correction data to single-frequency users.",
    reference: "TP 690 -- Navigation - General: GNSS",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Navigation - General",
    q: "An 'estimated position,' as distinguished from both a dead-reckoning (DR) position and a full position fix, generally refers to a position derived from",
    options: [
      "the identical method as a full position fix, the two terms simply being alternate names for an identical calculation using two or more independent lines of position.",
      "a dead-reckoning position that has been refined using a single available line of position (such as one radio bearing), rather than the two or more independent lines of position that a full fix requires.",
      "pure dead reckoning alone, with no additional external information of any kind incorporated, a description that actually applies to a DR position rather than an estimated position.",
      "a position obtained exclusively from a satellite-based system, with no relationship whatsoever to dead reckoning or any radio bearing.",
    ],
    answer: 1,
    explain:
      "An estimated position sits between a pure dead-reckoning position (computed from heading, airspeed, and elapsed time alone, with no external reference) and a full fix (requiring two or more independent lines of position that intersect to pinpoint a location); it is generally a DR position refined using a single available line of position -- such as one radio bearing -- which narrows the DR position down to a specific point along that line, without providing the independent cross-check that a second line of position would give.",
    reference: "TP 690 -- Navigation - General: Position Fixing",
  },
];
