import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 69 -- Section 4: Flight
// Planning, eighth pass. Original questions written from CARs, the
// TC AIM 2026-1, and the TP 690 syllabus (topic headings only, no
// sample questions). Covers the VFR flight plan/itinerary filing
// exemption near the departure aerodrome, single-engine over-water
// fuel planning, contingency fuel calculation methods, standard vs
// actual weighed values, pre-flight review of a computerized flight
// plan, the ETOPS/EDTO entry point concept, APU fuel burn, AIP vs
// NOTAM, minimum IFR altitude off established airways, in-flight
// FMS progress page cross-checks, anticipated destination holding
// in fuel decisions, the VFR lowest safe altitude concept,
// underload (available payload), an MEL-deferred item's effect on
// fuel burn, VFR departure aerodrome weather minima, and a
// provisional flight plan later confirmed or amended -- topics not
// yet addressed in batches 9, 12, 21, 30, 39, 49, or 59. Not
// transcribed or adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_69_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A VFR flight plan or flight itinerary is generally not required to be filed for a flight conducted",
    options: [
      "only above 3,000 ft AGL, with no exemption applying to any VFR flight conducted below that altitude.",
      "only when the pilot holds a commercial pilot licence, with no exemption applying to a recreational or private pilot's flight.",
      "within a specified distance of the departure aerodrome, provided the flight does not proceed beyond that limited local area, reflecting the reduced search-and-rescue risk of a flight that stays close to its point of departure.",
      "at any distance whatsoever, since a VFR flight plan or itinerary is never required under any circumstances for a VFR flight.",
    ],
    answer: 2,
    explain:
      "A VFR flight plan or itinerary is generally not required for a flight that remains within a specified limited distance of its departure aerodrome, reflecting the reduced search-and-rescue risk of a flight that never proceeds far from its point of departure; beyond that distance, filing a flight plan or itinerary (through one of the available means) becomes the general expectation so that search and rescue can be initiated appropriately if the flight becomes overdue.",
    reference: "CARs 602.73; TC AIM RAC -- Flight Plans and Itineraries",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a single-engine aircraft conducting an over-water flight, fuel planning differs from the twin-engine over-water case in that",
    options: [
      "fuel reserve requirements are reduced for a single-engine aircraft compared to an equivalent twin-engine aircraft on the same route.",
      "a single-engine aircraft is required to calculate an engine-out critical point in exactly the same way as a twin-engine aircraft, with no difference between the two cases.",
      "single-engine aircraft are categorically prohibited from any over-water flight, making fuel planning for such a flight entirely moot.",
      "there is no meaningful engine-out critical point (equal time point) to calculate, since the loss of the aircraft's only engine would generally require a ditching regardless of position along the route, shifting the planning emphasis toward survival equipment and route selection minimizing overall time over water.",
    ],
    answer: 3,
    explain:
      "Because a twin-engine aircraft's engine-out critical point calculation depends on comparing the time to reach different alternates using degraded (one-engine-inoperative) performance, that specific calculation has no real counterpart for a single-engine aircraft, where the loss of the only engine would generally necessitate a ditching wherever the aircraft happened to be along the route; over-water fuel and route planning for a single-engine aircraft instead places relatively greater emphasis on minimizing overall time spent over water and on appropriate survival equipment.",
    reference: "TP 690 -- Flight Planning: Overwater Operations",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Contingency fuel, an ICAO fuel-planning concept intended to cover unforeseen factors such as minor routing or wind deviations, is commonly calculated using a method such as",
    options: [
      "a specified percentage of the planned trip fuel (such as 5 percent), subject to a defined minimum floor (such as a set number of minutes' worth of fuel at a specified holding burn rate), whichever method the operator's approved fuel policy specifies.",
      "a fixed, universal figure identical for every flight regardless of trip fuel, route, or aircraft type.",
      "a value that is always identical in magnitude to the aircraft's required final reserve fuel.",
      "a calculation based exclusively on the destination's forecast weather, with no relationship to trip fuel or flight time at all.",
    ],
    answer: 0,
    explain:
      "Contingency fuel is commonly calculated as a specified percentage of planned trip fuel (such as 5 percent), often subject to a defined minimum floor expressed as a certain number of minutes' worth of fuel at a specified holding fuel burn rate, with the specific method and figures used depending on the operator's approved fuel policy -- providing a margin against unforeseen factors such as minor routing changes, ATC-imposed deviations, or wind different from forecast, distinct from the flight's final reserve fuel.",
    reference: "TP 690 -- Flight Planning: Fuel Planning",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An operator's decision to use standard (average) passenger and baggage weights, rather than actual weighed values, for weight and balance purposes is generally based on",
    options: [
      "the pilot-in-command's personal preference on the day of the flight, with no underlying regulatory criteria involved at all.",
      "regulatory criteria such as the size of the aircraft, the number of passengers typically carried, and demonstrated statistical validity of the standard weight figures for that operator's specific passenger population, rather than being left to unrestricted operator discretion.",
      "the colour of the aircraft's livery, a factor with no relationship to weight and balance methodology.",
      "the calendar date of the flight, with standard weights permitted only during specific months of the year.",
    ],
    answer: 1,
    explain:
      "The use of standard (average) passenger and baggage weights in place of actual weighed values is generally permitted based on regulatory criteria -- such as the aircraft's size and passenger capacity, and demonstrated statistical validity of the standard weight figures for the specific passenger population being carried -- rather than being left to unrestricted discretion; smaller aircraft or unusual passenger populations may instead require actual weights or a different set of standard figures to remain valid.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Before accepting and using a computerized (software-generated) flight plan, a pilot-in-command generally retains a responsibility to",
    options: [
      "review only the printed weather charts attached to the flight plan package, with no responsibility to review the flight plan's own calculated figures.",
      "accept the computer-generated flight plan without any independent review, since computerized flight planning systems are defined as incapable of producing an erroneous result.",
      "review the plan for overall reasonableness -- such as checking that the route, fuel figures, and weight and balance data make general sense for the flight -- rather than assuming the computer-generated output is automatically correct and complete in every respect.",
      "disregard the computerized flight plan entirely and always calculate every figure independently by hand before every flight, regardless of the software's demonstrated reliability.",
    ],
    answer: 2,
    explain:
      "A pilot-in-command retains a responsibility to review a computerized flight plan for overall reasonableness -- confirming that the route, fuel figures, and weight and balance data make general sense for the specific flight -- rather than assuming a computer-generated output is automatically correct and complete, since an error in the underlying data entered into the system (or in the system itself) could otherwise go unnoticed and be carried through to the actual flight.",
    reference: "TP 690 -- Flight Planning: Preflight Preparation",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "The 'entry point' into EDTO/ETOPS-applicable airspace along a given route is generally understood as",
    options: [
      "the point at which the aircraft physically crosses an international boundary, regardless of its distance from any suitable alternate aerodrome.",
      "the point at which the aircraft reaches its planned cruise altitude, unrelated to its distance from any suitable alternate aerodrome.",
      "a fixed geographic point identical for every route and every aircraft type, regardless of cruise speed or the location of suitable alternates.",
      "the point along the route at which the aircraft first becomes more than the applicable single-engine (or otherwise degraded) diversion time from a suitable en route alternate aerodrome, triggering the specific EDTO/ETOPS fuel, equipment, and operational requirements.",
    ],
    answer: 3,
    explain:
      "The EDTO/ETOPS entry point is the point along a specific route at which the aircraft first becomes more than the applicable diversion time (based on its approved single-engine, or otherwise degraded, cruise performance) from a suitable en route alternate aerodrome; beyond that point, the flight is operating within EDTO/ETOPS-applicable conditions and the associated fuel, equipment, and operational requirements apply until the aircraft comes back within that diversion time of a suitable alternate later in the route.",
    reference: "TC AIM RAC -- Extended Diversion Time Operations",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "Fuel consumed by an aircraft's Auxiliary Power Unit (APU), both on the ground before engine start and, on some flights, during flight, is generally",
    options: [
      "accounted for as a distinct component within the total fuel load calculation, since APU operation (for ground electrical/air conditioning power, or as an in-flight backup power source) consumes fuel in addition to the fuel burned by the main engines.",
      "never included in any fuel planning calculation, since the APU is defined as consuming no fuel under any circumstances.",
      "always identical in magnitude to taxi fuel, making a separate APU fuel figure unnecessary in any flight plan.",
      "relevant only to fuel planning for helicopters, with no application to fixed-wing aircraft fitted with an APU.",
    ],
    answer: 0,
    explain:
      "Because an APU consumes fuel while running -- whether providing electrical power and air conditioning on the ground before engine start, or, on some flights, serving as an in-flight backup power source -- that fuel consumption is generally accounted for as a distinct component within the overall fuel load calculation, in addition to (and separate from) the fuel burned by the main engines during taxi, takeoff, and flight.",
    reference: "TP 690 -- Flight Planning: Fuel Planning",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An Aeronautical Information Publication (AIP), as distinguished from a NOTAM, is generally intended to contain",
    options: [
      "information that applies only to VFR flights, with no relevance to IFR flight planning.",
      "relatively permanent or long-term aeronautical information (such as standing procedures, facility descriptions, and airspace structure), whereas a NOTAM conveys more time-sensitive, temporary, or urgent information not yet reflected in the AIP.",
      "exclusively temporary and time-sensitive information, a description that actually applies to a NOTAM rather than the AIP.",
      "no information relevant to flight planning whatsoever, existing purely as an administrative or historical record.",
    ],
    answer: 1,
    explain:
      "The Aeronautical Information Publication contains relatively permanent or long-term aeronautical information -- standing procedures, facility descriptions, airspace structure, and similar reference material -- that is periodically revised on a scheduled cycle (such as the AIRAC cycle), whereas a NOTAM is used to promptly convey more time-sensitive, temporary, or urgent information (an unserviceable NAVAID, a closed runway, a new temporary restriction) that has not yet been incorporated into the next scheduled AIP revision.",
    reference: "TC AIM GEN -- Aeronautical Information Publication",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For an IFR flight operating off a designated airway (direct routing, for example), the flight is generally required to be planned at or above",
    options: [
      "the same minimum altitude published for the nearest airway, regardless of whether that airway's terrain and obstacle environment actually matches the off-airway route being flown.",
      "no defined minimum altitude at all, since obstacle clearance requirements are understood to apply only to a flight conducted on a published airway.",
      "a minimum altitude that provides the applicable obstacle clearance for that specific segment of the route, determined by the pilot or the operator from available terrain and obstacle information, since no published airway minimum altitude exists for that off-airway segment.",
      "an altitude of exactly 10,000 ft ASL in every case, regardless of the actual terrain or obstacles present along the specific route flown.",
    ],
    answer: 2,
    explain:
      "For a segment of an IFR flight conducted off a published airway (a direct routing, for example), there is no published airway minimum altitude to rely on directly, so the flight must instead be planned at or above a minimum altitude that provides the applicable obstacle clearance for that specific route segment, determined from available terrain and obstacle information for the area actually being overflown, rather than simply borrowing a nearby airway's published minimum, which may not reflect the same terrain and obstacle environment.",
    reference: "CARs 602.32; TC AIM RAC -- IFR Minimum Altitudes",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "During flight, cross-checking the FMS 'progress' page (showing waypoints, distances, and fuel predictions) against the original flight plan is a useful practice primarily because it",
    options: [
      "provides no information relevant to fuel status, showing only distance and time data with no fuel prediction of any kind.",
      "replaces the need for the crew to monitor any other flight instrument or navigation display for the remainder of the flight.",
      "is required only once, immediately after departure, with no value in repeating the cross-check at any later point in the flight.",
      "allows the crew to confirm the aircraft is actually progressing along the route and consuming fuel as originally planned, and to notice promptly if actual progress has begun to diverge meaningfully from the plan.",
    ],
    answer: 3,
    explain:
      "Periodically cross-checking the FMS progress page against the original flight plan lets the crew confirm that actual progress -- position, fuel remaining, and predicted fuel at destination -- is tracking reasonably close to what was planned, and lets them notice promptly if actual conditions (stronger-than-forecast headwinds, a routing change, and so on) have caused a meaningful divergence that might call for a decision such as requesting a more direct routing or reviewing fuel options, rather than only discovering such a divergence much later in the flight.",
    reference: "TP 690 -- Flight Planning: En Route Monitoring",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If ATC advises, well before arrival, that an inbound flight should expect a period of holding at the destination due to traffic congestion, the crew's fuel planning response should generally include",
    options: [
      "reassessing remaining fuel against the anticipated additional holding time, beyond the fuel already carried for standard holding, contingency, and reserve purposes, and considering whether a request for a more direct routing, an early decision to divert, or another option is warranted.",
      "descending immediately to the destination's minimum sector altitude, regardless of ATC instructions or the aircraft's current position.",
      "immediately declaring a fuel emergency regardless of the actual fuel state or the length of holding anticipated.",
      "ignoring the advisory entirely, since standard holding fuel already carried is defined as covering any amount of additional holding ATC might subsequently require.",
    ],
    answer: 0,
    explain:
      "An ATC advisory of anticipated holding at the destination gives the crew useful advance notice to reassess their actual remaining fuel against the anticipated additional holding time -- beyond whatever standard holding, contingency, and reserve fuel was already planned -- and to consider proactively whether a request for a more direct routing, an earlier decision to divert to an alternate, or another option would be prudent, rather than simply proceeding and reassessing only once already established in the hold.",
    reference: "TP 690 -- Flight Planning: Fuel Management",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a VFR cross-country flight, the concept of a 'lowest safe altitude' generally refers to",
    options: [
      "the altitude at which the aircraft's stalling speed is lowest, a performance characteristic unrelated to terrain or obstacle clearance.",
      "an altitude providing an adequate vertical buffer (commonly expressed as a set height, such as 1,000 ft, above the highest obstacle within a specified radius of the intended track) to ensure terrain and obstacle clearance throughout the flight.",
      "the lowest altitude at which the aircraft's engine can still develop rated power, a performance limit unrelated to terrain or obstacle clearance.",
      "a fixed altitude of 500 ft AGL that applies identically to every VFR flight regardless of the terrain being overflown.",
    ],
    answer: 1,
    explain:
      "For VFR cross-country flight planning, a lowest safe altitude is generally established by adding a defined vertical buffer (such as 1,000 ft) to the height of the highest known obstacle within a specified radius of the intended track, giving the pilot an altitude that can be flown with adequate terrain and obstacle clearance for that specific route, distinct from any fixed altitude value or from an engine or aerodynamic performance limit.",
    reference: "TP 690 -- Flight Planning: VFR Navigation",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "An aircraft's 'underload,' calculated as part of dispatch planning, generally represents",
    options: [
      "the amount by which the aircraft's actual takeoff weight exceeds its maximum certified takeoff weight, a description that actually applies to an overload condition rather than an underload.",
      "the difference between indicated and true airspeed at a given flight condition, a concept unrelated to weight and balance planning.",
      "the payload (or combined payload and fuel) margin still available below the applicable maximum weight limit for the flight, after the aircraft's basic weight, fuel, and any already-loaded payload have been accounted for.",
      "a fixed structural limit identical to Maximum Zero Fuel Weight, rather than a variable margin calculated for each specific flight's loading.",
    ],
    answer: 2,
    explain:
      "Underload represents the remaining payload (or combined payload and fuel) margin still available below the applicable maximum weight limit for a specific flight's loading, calculated after the aircraft's basic weight, planned fuel, and any payload already accounted for have been subtracted from that limit; it gives dispatchers and the crew a quick sense of how much additional weight, if any, could still be added before reaching the relevant maximum weight for that flight.",
    reference: "TP 690 -- Flight Planning: Weight and Balance",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "If a Minimum Equipment List (MEL) item permits dispatch with a specific system inoperative, but that system's absence is known to increase the aircraft's fuel consumption (for example, due to an increase in aerodynamic drag or a reduction in engine efficiency), fuel planning for that flight generally",
    options: [
      "is entirely unaffected by the inoperative system, since MEL dispatch relief is defined as never having any effect on fuel consumption.",
      "requires the flight to carry exactly double its normal total fuel load, regardless of the actual magnitude of the fuel penalty associated with that specific item.",
      "is handled by simply removing the item from the MEL rather than by any adjustment to the flight's fuel planning.",
      "must account for the resulting increase in fuel burn, typically by applying a specified fuel penalty figure associated with that MEL item, rather than simply using the standard, unaffected fuel figures for that route and aircraft type.",
    ],
    answer: 3,
    explain:
      "Some MEL items carry a known fuel penalty -- reflecting increased aerodynamic drag or reduced engine or system efficiency with that particular item inoperative -- and where applicable, fuel planning for a flight dispatched under such an item must account for that increased fuel burn, typically by applying a specified fuel penalty figure associated with the MEL item, rather than relying on the standard fuel figures that assume a fully serviceable aircraft.",
    reference: "TP 690 -- Flight Planning: MEL Dispatch Considerations",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "For a VFR flight, weather conditions at the departure aerodrome are generally required to meet applicable VFR weather minima",
    options: [
      "before the flight is commenced, in addition to the requirement to consider forecast conditions along the route and at the destination, since a flight cannot legally depart VFR from an aerodrome where conditions do not meet the applicable minima at the time of departure.",
      "only if the departure aerodrome is a certified airport, with no equivalent requirement applying to departure from an uncertified aerodrome.",
      "only when the flight is planned to operate under an IFR flight plan, with no equivalent requirement applicable to a purely VFR flight.",
      "only for the destination and alternate aerodromes, with the departure aerodrome's own weather considered entirely irrelevant to a VFR departure.",
    ],
    answer: 0,
    explain:
      "Before commencing a VFR flight, the departure aerodrome's own weather conditions are generally required to meet the applicable VFR weather minima at the time of departure, in addition to considering forecast conditions along the route and at the destination -- a VFR flight is not permitted to depart from an aerodrome where conditions do not currently meet the applicable minima, regardless of what conditions might be forecast to improve to later.",
    reference: "CARs 602.114-602.115; TC AIM RAC -- VFR Weather Minima",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Planning",
    q: "A 'provisional' (or preliminary) flight plan, sometimes prepared before final load and weather data are available, is generally",
    options: [
      "used exclusively for VFR flights, with no application to IFR flight planning of any kind.",
      "confirmed, refined, or amended closer to departure once final weight and balance figures and current weather and NOTAM information are available, rather than being relied upon as the final basis for the flight without that later confirmation.",
      "prepared only after the flight has already departed, rather than in advance of departure.",
      "always treated as the final, unchangeable basis for the flight, with no further review or amendment permitted regardless of any later change in load or weather.",
    ],
    answer: 1,
    explain:
      "A provisional or preliminary flight plan, prepared using estimated or forecast figures before all final data is available, is generally confirmed, refined, or amended closer to departure once final weight and balance figures, current weather, and current NOTAM information become available, ensuring the flight actually proceeds on the basis of the most current and accurate information rather than the earlier provisional estimates alone.",
    reference: "TP 690 -- Flight Planning: Preflight Preparation",
  },
];
