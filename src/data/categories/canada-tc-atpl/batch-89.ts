import type { Question } from "../../../types";

// Canada TC ATPL - Section 8: Flight Planning
// Batch 89 - Tenth depth pass
export const CANADA_TC_ATPL_BATCH_89_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A filed VFR flight plan or flight itinerary that is not activated (the flight does not depart) within a specified period after the filed proposed departure time is generally",
    options: [
      "automatically extended indefinitely with no need for the pilot to take any action, contact ATS, or file an updated proposed departure time",
      "converted automatically into an IFR flight plan, without any further action or confirmation required from the pilot",
      "considered automatically cancelled, so ATS will not expect the flight or initiate search and rescue action on its basis",
      "immediately escalated to a search-and-rescue alert, regardless of whether the flight ever actually departed the aerodrome",
    ],
    answer: 2,
    explain:
      "A VFR flight plan or itinerary not activated within a specified period after the proposed departure time is generally considered automatically cancelled, so that ATS does not expect the flight and search and rescue action is not triggered on its basis.",
    reference: "TP 690 -- Flight Planning: VFR flight plan validity period",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An IFR clearance issued with a 'clearance void time' generally means that",
    options: [
      "the clearance applies only to the return flight, not the outbound departure, since departure clearances carry no void time",
      "the pilot must land by the stated time or face automatic cancellation of the flight plan for the remainder of the journey",
      "the clearance remains valid indefinitely, with no time restriction of any kind once issued by air traffic control",
      "the aircraft must be airborne by the stated time, or the clearance is no longer valid and the pilot must obtain a new clearance before attempting to depart",
    ],
    answer: 3,
    explain:
      "A clearance void time requires the aircraft to be airborne by the stated time; if it is not, the clearance is no longer valid, and the pilot must obtain a new clearance (typically by contacting ATC) before attempting to depart.",
    reference: "TP 690 -- Flight Planning: IFR clearance void time",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "'Fuel over destination' (FOD), as used in operational fuel planning and en route monitoring, refers to",
    options: [
      "the planned or actual fuel quantity expected to remain on board upon arrival overhead the destination, used as an operational reference point",
      "the fuel consumed specifically during the descent and approach phase only, excluding any fuel used during cruise or taxi",
      "the total fuel loaded onto the aircraft before departure, including all reserves, contingency fuel, and any additional discretionary fuel requested by the captain",
      "a fixed regulatory reserve figure that never varies by route, aircraft type, or prevailing weather conditions",
    ],
    answer: 0,
    explain:
      "Fuel over destination is the planned or actual fuel quantity expected to remain on board upon arrival overhead the destination, serving as a practical operational reference point the crew can monitor against as the flight progresses.",
    reference: "TP 690 -- Flight Planning: Fuel over destination (FOD)",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Comparing actual fuel used on a completed flight against the planned (flight-plan) fuel figure, as part of a post-flight fuel reconciliation process, is useful primarily because it",
    options: [
      "is required only to satisfy a passenger's request for information, and has no bearing whatsoever on the airline's future fuel planning practices, procedures, or dispatch release calculations",
      "helps identify systematic planning inaccuracies, such as an outdated fuel flow model or optimistic wind forecasts, supporting more accurate future fuel planning",
      "has no operational value once the flight has already landed, since post-flight data is never reviewed by the operator",
      "replaces the need for any fuel planning on the very next flight, regardless of route, aircraft type, or season",
    ],
    answer: 1,
    explain:
      "Post-flight fuel reconciliation helps identify systematic planning inaccuracies -- such as an outdated fuel flow model or consistently optimistic wind forecasts -- feeding back into more accurate fuel planning on future flights, rather than having value only in the moment.",
    reference: "TP 690 -- Flight Planning: Post-flight fuel reconciliation",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "On a long-range flight, particularly over polar or other very cold routes, fuel planning may need to account for the fuel's freeze point primarily because",
    options: [
      "fuel temperature has no relationship to outside air temperature or flight duration, since fuel tanks are fully insulated from the external environment",
      "fuel freezing is only ever a concern on the ground, never during flight, since airborne fuel is assumed to be continuously warmed by friction with the surrounding airflow and engine heat",
      "prolonged exposure to very cold outside air temperatures can cool fuel toward its freeze point, potentially requiring a change in cruise altitude, speed, or routing",
      "freeze point only affects turbine oil, never the fuel itself, regardless of how cold the outside air temperature becomes",
    ],
    answer: 2,
    explain:
      "Extended exposure to very cold outside air temperatures on a long polar or high-latitude route can cool fuel toward its freeze point; fuel planning may need to account for this by considering a change in cruise altitude, speed, or routing to keep fuel temperature within safe limits.",
    reference: "TP 690 -- Flight Planning: Fuel freeze point on long-range routes",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Beyond the general concept that Performance-Based Navigation (PBN) defines required navigation performance in terms of accuracy, integrity, and functionality, an operator wishing to fly a specific PBN route (such as a designated RNP route) generally requires",
    options: [
      "no additional approval whatsoever, since any GNSS-equipped aircraft may fly any PBN route without restriction or prior authorization",
      "approval only from the aircraft's manufacturer, with no involvement from the regulator, the operator, or any flight standards authority",
      "approval that, once granted for one PBN route, automatically applies to every other PBN route worldwide without further review",
      "specific operational approval confirming the aircraft, its equipment, and the operator's procedures meet the applicable navigation specification for that route",
    ],
    answer: 3,
    explain:
      "Flying a specific PBN route generally requires the operator to hold specific operational approval confirming that the aircraft, its equipment, and the operator's procedures meet the applicable navigation specification for that route, rather than relying on a blanket approval covering every PBN route.",
    reference: "TP 690 -- Flight Planning: PBN route operational approval",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In EDTO/ETOPS and general alternate aerodrome planning terminology, an 'adequate' aerodrome is distinguished from a 'suitable' aerodrome in that a suitable aerodrome",
    options: [
      "meets the physical and service criteria of an adequate aerodrome and is additionally expected to have acceptable weather at the relevant time of use",
      "is identical in meaning to an adequate aerodrome, with the two terms used interchangeably throughout all Canadian aeronautical publications and operational manuals",
      "refers only to the destination aerodrome, never to any diversion or alternate aerodrome under consideration",
      "requires no runway or approach capability at all, only a suitable radio frequency and a means of ground communication",
    ],
    answer: 0,
    explain:
      "An adequate aerodrome meets defined physical and service criteria (such as runway length and available services); a suitable aerodrome additionally must be expected to have acceptable weather conditions at the relevant time of use, making 'suitable' a narrower, time-specific subset of 'adequate.'",
    reference: "TP 690 -- Flight Planning: Adequate versus suitable aerodrome",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Minimum Navigation Performance Specifications (MNPS), historically applied within North Atlantic High Level Airspace, have generally been",
    options: [
      "applied exclusively to VFR flights, never to IFR oceanic operations conducted within North Atlantic airspace",
      "largely superseded by newer Performance-Based Navigation requirements, such as specific RNP navigation specifications, reflecting the industry shift toward performance-based navigation standards",
      "entirely unrelated to, and unaffected by, the later development of Performance-Based Navigation and RNP-based navigation specifications introduced across North Atlantic and other oceanic and remote airspace regions",
      "replaced entirely by a requirement for ground-based NAVAID navigation only, with no role for any satellite-based system",
    ],
    answer: 1,
    explain:
      "MNPS, an earlier sensor-specific navigation performance requirement, has largely been superseded by newer Performance-Based Navigation requirements such as specific RNP navigation specifications, reflecting the broader industry-wide shift toward performance-based rather than sensor-specific navigation standards.",
    reference: "TP 690 -- Flight Planning: MNPS and the shift to PBN",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An IFR flight may generally be planned along a published ATS (airway) route structure or, where authorized, along a 'random' (direct, point-to-point) routing not following any published airway. Choosing a random routing generally",
    options: [
      "is only possible for VFR flights, never for IFR flights, since IFR routing is considered to always be confined strictly to the published ATS airway structure regardless of aircraft capability",
      "is never permitted under any circumstance in Canadian airspace, regardless of the aircraft's navigation equipment or the operator's approvals",
      "requires the aircraft and operator to meet the applicable navigation performance requirements for direct routing, since ground-based airway guidance will not be available",
      "automatically exempts the flight from any navigation equipment requirements, regardless of the routing actually flown",
    ],
    answer: 2,
    explain:
      "A random (direct, point-to-point) routing not following a published airway generally requires the aircraft and operator to meet the applicable navigation performance requirements for direct routing, since the flight will not be relying on ground-based airway structure for lateral guidance.",
    reference: "TP 690 -- Flight Planning: ATS route versus random routing",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A 'trigger' NOTAM is generally issued to",
    options: [
      "report only temporary runway closures, never any other type of aerodrome or airspace change",
      "apply exclusively to weather-related information, never to procedural, chart, or airspace-related changes of any kind, regardless of how permanent or operationally significant they may be",
      "replace the need for any AIP amendment entirely, since the NOTAM itself becomes the permanent record",
      "alert users to a significant, often permanent change about to take effect, such as a new procedure or chart amendment, directing them to the upcoming AIP amendment",
    ],
    answer: 3,
    explain:
      "A trigger NOTAM alerts users to a significant, often permanent change about to take effect -- such as a new procedure or chart amendment -- while directing them to the upcoming AIP amendment for the complete details, rather than substituting for that amendment.",
    reference: "TP 690 -- Flight Planning: Trigger NOTAM",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "In search-and-rescue planning for an overdue aircraft, the 'datum point' represents",
    options: [
      "the computed most probable position of the missing aircraft, based on its last known position, intended track, and estimated drift, updated as the search progresses",
      "the departure aerodrome, used as a fixed reference regardless of how far the flight may have actually progressed along its route",
      "a point that is recalculated only once, at the very start of the search, and never updated afterward regardless of new information",
      "the exact geographic centre of the search area, chosen arbitrarily by the search coordinator without reference to any flight data",
    ],
    answer: 0,
    explain:
      "The datum point is the computed most probable position of the missing aircraft, derived from its last known position, intended track, and estimated drift; the circle of uncertainty is then drawn around this point to define the search area, and the datum point may be updated as more information becomes available.",
    reference: "TP 690 -- Flight Planning: SAR datum point",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If a crew accepts an ATC-offered direct routing ('direct-to') shortcut that significantly changes the planned track during a long overwater or remote-area flight, previously calculated critical points (equal time points) and associated fuel planning figures generally",
    options: [
      "remain fully valid and require no further attention, since a direct routing is assumed to never affect distance or timing calculations",
      "should be reviewed and, where the change is significant, recalculated, since the shortcut can alter the distances and timing on which the calculation was based",
      "are automatically and instantly recalculated by ATC on the crew's behalf, requiring no crew action or cross-check whatsoever",
      "become relevant only after landing, with no operational significance during the flight itself, regardless of how significantly the routing or distances have changed",
    ],
    answer: 1,
    explain:
      "Accepting a direct-to shortcut that significantly changes the planned track can alter the distances involved, so previously calculated critical points and their associated fuel planning figures should be reviewed and, where the change is significant, recalculated by the crew.",
    reference: "TP 690 -- Flight Planning: Direct-to shortcuts and critical point recalculation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Beyond the initial dispatch release, an operator's ongoing 'flight watch' (flight following) responsibility during the flight generally involves",
    options: [
      "monitoring only the aircraft's cabin service, with no reference at all to operational conditions such as significant weather changes, NOTAMs, or fuel status",
      "a responsibility that transfers entirely to air traffic control once the flight is airborne, with the operator retaining no further monitoring role",
      "monitoring the flight's progress and relevant conditions, such as significant weather changes or NOTAMs, and communicating updates to the crew as needed",
      "no further involvement at all once the flight has departed, regardless of any subsequent changes in weather or routing",
    ],
    answer: 2,
    explain:
      "An operator's ongoing flight watch responsibility involves monitoring the flight's progress and relevant conditions -- such as significant weather changes or new NOTAMs -- throughout the flight, and communicating updated information to the crew as needed, extending beyond the initial dispatch release.",
    reference: "TP 690 -- Flight Planning: Ongoing flight watch during the flight",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Item 19 (Supplementary Information) of the ICAO flight plan form is generally used to record information such as",
    options: [
      "the destination aerodrome's runway length and elevation, details found instead in the relevant aerodrome chart or CFS entry",
      "the aircraft's cruising altitude and requested route, which are instead recorded in earlier fields of the flight plan form",
      "the pilot's total flying hours logged to date, a figure that is instead maintained separately in the pilot's personal logbook and the company's training records",
      "endurance, number of persons on board, and details of emergency and survival equipment carried, information primarily useful to search and rescue",
    ],
    answer: 3,
    explain:
      "Item 19 of the ICAO flight plan form records supplementary information such as endurance, the number of persons on board, and details of emergency and survival equipment carried -- information that is primarily valuable to search and rescue if the flight should become overdue.",
    reference: "TP 690 -- Flight Planning: ICAO flight plan Item 19 (Supplementary Information)",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "When a takeoff alternate aerodrome is required (such as when weather at the departure aerodrome is below the applicable landing minima), the fuel required to divert there after an early return is generally",
    options: [
      "addressed by the fuel already carried for the flight, since departing with a near-full fuel load shortly after takeoff leaves ample fuel to reach a nearby takeoff alternate",
      "an entirely separate, additional fuel quantity that must be added on top of the full trip, destination alternate, and contingency reserve fuel already carried",
      "calculated using the same reserve figure required for an en route alternate on a long oceanic or remote-area flight",
      "irrelevant, since a takeoff alternate is never actually used for fuel planning purposes, as any early return is instead handled entirely through the destination alternate fuel reserve",
    ],
    answer: 0,
    explain:
      "Because a return to a takeoff alternate would occur shortly after departure, when the aircraft is still carrying nearly its full fuel load, the fuel already carried for the planned flight is generally sufficient to reach a nearby takeoff alternate, rather than requiring a separate, additive fuel component on top of the trip and destination alternate fuel.",
    reference: "TP 690 -- Flight Planning: Takeoff alternate fuel considerations",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A pilot-in-command's discretion to add extra fuel beyond the dispatch release figure is generally constrained by",
    options: [
      "the destination aerodrome's runway length alone, independent of the aircraft's structural or performance weight limits",
      "applicable weight limits, such as maximum takeoff weight or a performance-limited weight for the runway and conditions, even where tank capacity would allow more",
      "the number of passengers on board, with no reference at all to the aircraft's maximum takeoff weight or structural limits",
      "nothing at all, since fuel tank volume is always considered the only limiting factor regardless of aircraft weight",
    ],
    answer: 1,
    explain:
      "Even when tank capacity would allow more fuel to be loaded, a pilot-in-command's discretion to add extra fuel is generally constrained by applicable weight limits, such as maximum takeoff weight or a performance-limited weight for the specific runway and conditions.",
    reference: "TP 690 -- Flight Planning: Discretionary fuel and weight limits",
  },
];
