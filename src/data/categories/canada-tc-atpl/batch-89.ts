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
      "immediately escalated to a search-and-rescue alert, regardless of whether the flight ever departed",
      "considered automatically cancelled, and ATS will not expect the flight or initiate search and rescue action based on it",
      "automatically extended indefinitely with no need for the pilot to take any action",
      "converted automatically into an IFR flight plan",
    ],
    answer: 1,
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
      "the clearance applies only to the return flight, not the outbound departure",
      "the aircraft must be airborne by the stated time, or the clearance is no longer valid and the pilot must obtain a new clearance before departing",
      "the pilot must land by the stated time or face automatic cancellation of the flight plan",
      "the clearance remains valid indefinitely, with no time restriction of any kind",
    ],
    answer: 1,
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
      "the total fuel loaded onto the aircraft before departure, including all reserves",
      "the fuel consumed specifically during the descent and approach phase only",
      "the planned or actual fuel quantity expected to remain on board upon arrival overhead the destination, used as an operational reference point for monitoring the flight's fuel status",
      "a fixed regulatory reserve figure that never varies by route or aircraft type",
    ],
    answer: 2,
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
      "replaces the need for any fuel planning on the very next flight",
      "helps identify systematic planning inaccuracies (such as an outdated fuel flow model or consistently optimistic wind forecasts), supporting more accurate fuel planning on future flights",
      "has no operational value once the flight has already landed",
      "is required only to satisfy a passenger's request for information",
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
      "freeze point only affects turbine oil, never the fuel itself",
      "prolonged exposure to very cold outside air temperatures can cool fuel toward its freeze point, potentially requiring a change in cruise altitude, speed, or routing to keep fuel temperature within safe limits",
      "fuel freezing is only ever a concern on the ground, never during flight",
      "fuel temperature has no relationship to outside air temperature or flight duration",
    ],
    answer: 1,
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
      "approval only from the aircraft's manufacturer, with no involvement from the regulator or operator",
      "no additional approval whatsoever, since any GNSS-equipped aircraft may fly any PBN route without restriction",
      "specific operational approval confirming that the aircraft, its equipment, and the operator's procedures meet the navigation specification applicable to that particular route",
      "approval that, once granted for one PBN route, automatically applies to every other PBN route worldwide",
    ],
    answer: 2,
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
      "requires no runway or approach capability at all, only a suitable radio frequency",
      "refers only to the destination aerodrome, never to any diversion aerodrome",
      "is identical in meaning to an adequate aerodrome, with the two terms used interchangeably",
      "meets the physical and service criteria of an adequate aerodrome and, in addition, is expected to have acceptable weather conditions at the relevant time of use",
    ],
    answer: 3,
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
      "entirely unrelated to, and unaffected by, the later development of Performance-Based Navigation (PBN) and RNP-based navigation specifications",
      "largely superseded by newer Performance-Based Navigation (PBN) requirements, such as specific RNP navigation specifications, reflecting the broader industry shift toward performance-based rather than sensor-specific navigation standards",
      "replaced entirely by a requirement for ground-based NAVAID navigation only",
      "applied exclusively to VFR flights, never to IFR oceanic operations",
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
      "is only possible for VFR flights, never for IFR flights",
      "requires the aircraft and operator to meet the applicable navigation performance requirements for direct routing, since the flight will not be following ground-based airway guidance",
      "is never permitted under any circumstance in Canadian airspace",
      "automatically exempts the flight from any navigation equipment requirements",
    ],
    answer: 1,
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
      "apply exclusively to weather-related information",
      "alert users to a significant, often permanent change that is about to take effect (such as a new procedure or chart amendment), directing them to consult the upcoming AIP amendment for full details",
      "report only temporary runway closures, never any other type of change",
      "replace the need for any AIP amendment entirely",
    ],
    answer: 1,
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
      "a point that is recalculated only once, at the very start of the search, and never updated afterward",
      "the exact geographic centre of the search area, chosen arbitrarily by the search coordinator",
      "the computed most probable position of the missing aircraft, based on its last known position, intended track, and estimated drift, around which the circle of uncertainty is then drawn",
      "the departure aerodrome, used as a fixed reference regardless of how far the flight may have progressed",
    ],
    answer: 2,
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
      "are automatically and instantly recalculated by ATC on the crew's behalf, requiring no crew action",
      "should be reviewed and, where the change is significant, recalculated, since the shortcut can alter the distances and therefore the timing on which the original critical point calculation was based",
      "remain fully valid and require no further attention, since a direct routing never affects distance or timing",
      "become relevant only after landing, with no operational significance during the flight itself",
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
      "a responsibility that transfers entirely to air traffic control once the flight is airborne, with the operator having no further role",
      "monitoring only the aircraft's cabin service, with no reference to operational conditions",
      "monitoring the flight's progress and relevant conditions (such as significant weather changes or NOTAMs) throughout the flight, and communicating updated information to the crew as needed",
      "no further involvement at all once the flight has departed",
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
      "the aircraft's cruising altitude and requested route, which are instead recorded in earlier fields of the form",
      "endurance, number of persons on board, and details of emergency and survival equipment carried, information primarily useful to search and rescue in the event the flight becomes overdue",
      "the pilot's total flying hours logged to date",
      "the destination aerodrome's runway length and elevation",
    ],
    answer: 1,
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
      "an entirely separate, additional fuel quantity that must be added on top of the full trip, destination alternate, and reserve fuel already carried for the planned flight",
      "addressed by the fuel already carried for the flight (since departing with a near-full fuel load shortly after takeoff leaves ample fuel to reach a nearby takeoff alternate), rather than requiring a separate additive fuel component",
      "irrelevant, since a takeoff alternate is never actually used for fuel planning purposes",
      "calculated using the same reserve figure required for an en route alternate on a long oceanic flight",
    ],
    answer: 1,
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
      "the destination aerodrome's runway length alone",
      "applicable weight limits (such as maximum takeoff weight or a performance-limited weight for the runway and conditions), meaning additional fuel cannot always be added even if tank capacity would otherwise allow it",
      "the number of passengers on board, with no reference to aircraft weight limits",
      "nothing at all, since fuel tank volume is always the only limiting factor",
    ],
    answer: 1,
    explain:
      "Even when tank capacity would allow more fuel to be loaded, a pilot-in-command's discretion to add extra fuel is generally constrained by applicable weight limits, such as maximum takeoff weight or a performance-limited weight for the specific runway and conditions.",
    reference: "TP 690 -- Flight Planning: Discretionary fuel and weight limits",
  },
];
