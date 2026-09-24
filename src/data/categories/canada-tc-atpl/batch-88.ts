import type { Question } from "../../../types";

// Canada TC ATPL - Section 6: Flight Operations
// Batch 88 - Ninth depth pass
export const CANADA_TC_ATPL_BATCH_88_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "V2, the takeoff safety speed used in transport-category takeoff performance, is generally defined as the speed that",
    options: [
      "is always numerically identical to VR for every aircraft type and weight, regardless of flap setting, runway length, or the specific engine-out performance limits that apply",
      "represents the maximum speed at which the takeoff may still be safely rejected before the aircraft becomes committed to continuing the takeoff roll and completing the departure",
      "must be achieved by a specified height above the runway, commonly 35 feet, following an engine failure at V1, with adequate margin above stall speed and minimum control speed",
      "applies only to a takeoff conducted with all engines operating normally, and is considered undefined whenever an engine failure occurs before reaching V1",
    ],
    answer: 2,
    explain:
      "V2 is the takeoff safety speed: the speed that must be achieved by a specified screen height (commonly 35 feet) following an engine failure at V1, providing an adequate margin above both the stall speed and the minimum control speed to support a safe initial climb on the remaining engine(s).",
    reference: "TP 690 -- Flight Operations: V2 (takeoff safety speed)",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Vref, the reference landing speed used as the basis for establishing final approach speed, is generally defined as a speed",
    options: [
      "used only during a missed approach, never during a normal landing, since a normal approach is instead flown to a target speed derived from other criteria",
      "that remains constant regardless of the aircraft's landing weight or configuration, applying the same numerical value on every approach",
      "equal to the aircraft's maximum operating speed (Vmo) in the landing configuration, without regard to the actual landing weight",
      "based on a specified margin above stall speed in the landing configuration, for the actual landing weight",
    ],
    answer: 3,
    explain:
      "Vref is based on a specified margin above the aircraft's stall speed in the landing configuration, calculated for the aircraft's actual landing weight, and serves as the reference from which the target final approach speed (including any additives) is established.",
    reference: "TP 690 -- Flight Operations: Vref (reference landing speed)",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During an emergency (rapid) descent, such as following a decompression, the crew generally targets a descent speed",
    options: [
      "at or near Vmo/Mmo, maximizing the rate of descent while remaining within structural speed limits",
      "that is irrelevant, since only vertical speed, not airspeed, matters during an emergency descent procedure",
      "at or near the minimum controllable airspeed, to conserve altitude for as long as possible during the descent",
      "that must never exceed the normal cruise climb speed used during a routine climb to cruising altitude",
    ],
    answer: 0,
    explain:
      "An emergency descent generally targets a speed at or near Vmo/Mmo, maximizing the rate of descent to reach a safe altitude as quickly as possible while remaining within the aircraft's structural speed limits.",
    reference: "TP 690 -- Flight Operations: Emergency descent target speed",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "An aircraft's demonstrated crosswind component, established during certification on a dry runway, is generally reduced for operational use on a wet or contaminated runway primarily because",
    options: [
      "the demonstrated crosswind component only applies to takeoff, never to landing, since landing crosswind limits are established through an entirely separate certification process",
      "a contaminated surface increases the risk of losing directional control, since reduced tire friction limits the ability to counteract crosswind side force",
      "contamination always increases the runway's effective friction, making a higher crosswind limit safe regardless of the type or depth of contaminant present",
      "crosswind has no aerodynamic effect at all on a contaminated runway, since the side force on the fuselage and vertical stabilizer is fixed solely by dry-runway certification data",
    ],
    answer: 1,
    explain:
      "A wet or contaminated runway reduces available tire friction, limiting the aircraft's ability to counteract the crosswind's side force and increasing the risk of losing directional control; operational crosswind limits are generally reduced on such surfaces compared to the dry-runway demonstrated value.",
    reference: "TP 690 -- Flight Operations: Crosswind limits on a contaminated runway",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In addition to any gust additive, some aircraft require an additional approach speed increment when icing conditions have been encountered or are present, primarily because",
    options: [
      "ice on the airframe always increases indicated airspeed readings, requiring a lower target approach speed to compensate for the erroneous instrument indication",
      "the increment is required only to compensate for reduced radio and navigation reception in icing conditions, and has nothing to do with aerodynamic performance or stall margin",
      "icing accumulation can degrade wing performance and reduce stall margin, so a higher approach speed maintains a buffer above the potentially elevated stall speed",
      "icing conditions have no aerodynamic effect on approach speed requirements, since the stall speed remains fixed regardless of any airframe contamination",
    ],
    answer: 2,
    explain:
      "Icing can degrade wing aerodynamic performance and raise the effective stall speed, so an additional approach speed increment beyond any gust additive helps maintain an adequate margin above the potentially elevated stall speed under icing conditions.",
    reference: "TP 690 -- Flight Operations: Approach speed additive for icing",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A 'hot spot,' as depicted on an aerodrome chart, identifies",
    options: [
      "the specific point on the runway where an aircraft must rotate for takeoff, as calculated from the aircraft's weight and the prevailing performance conditions",
      "a section of runway pavement that generates unusually high friction, improving braking performance during both landing and a rejected takeoff",
      "an area reserved exclusively for de-icing operations, separate from the taxiways and runways used for active aircraft movement",
      "a location on the movement area with a history of confusion or incursion, warranting heightened crew awareness",
    ],
    answer: 3,
    explain:
      "A hot spot marks a location on the aerodrome movement area -- often a complex intersection or a point with a history of runway incursions or crew confusion -- warranting heightened awareness and care during taxi operations.",
    reference: "TP 690 -- Flight Operations: Aerodrome chart hot spots",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "When selecting an autobrake setting for landing, a crew is generally expected to consider factors such as",
    options: [
      "runway length available, surface condition, and landing weight, selecting a higher setting for a shorter, slippery, or heavier landing",
      "only the time of day, since autobrake settings are considered entirely unrelated to runway or aircraft conditions",
      "the colour of the runway centreline lighting, which is assumed to correlate with the runway's braking performance",
      "the cabin crew's preference for passenger comfort exclusively, with no reference at all to runway length or surface condition",
    ],
    answer: 0,
    explain:
      "Autobrake setting selection generally weighs runway length available, surface condition, and landing weight, with a higher setting chosen when a shorter, more slippery, or heavier landing is expected, and a lower setting used when ample runway and good conditions allow for a smoother deceleration.",
    reference: "TP 690 -- Flight Operations: Autobrake setting selection",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In icing conditions, a crew may be required to activate engine and/or airframe anti-ice systems during ground operations even before visible precipitation begins falling, primarily because",
    options: [
      "ground operations never require anti-ice protection under any circumstance, since active precipitation must already be visibly falling before frost or ice can begin to accumulate on any critical airframe surface",
      "frost, ice, or supercooled moisture can begin forming on critical surfaces without active precipitation, so proactive protection helps maintain a clean aircraft for takeoff",
      "anti-ice systems are only effective once ice has already visibly accumulated on the airframe, and provide no benefit when activated beforehand",
      "activating anti-ice on the ground has no effect on the aircraft's readiness for takeoff, since the relevant surfaces are inspected visually just prior to departure",
    ],
    answer: 1,
    explain:
      "Ice, frost, or supercooled moisture can begin forming on critical surfaces under conditions that do not require active, visible precipitation; proactively activating anti-ice protection during ground operations helps maintain a clean aircraft for takeoff, consistent with the clean aircraft concept.",
    reference: "TP 690 -- Flight Operations: Proactive anti-ice use during ground operations",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A touch-and-go landing, in which the aircraft touches down briefly before taking off again without coming to a full stop, generally requires the crew to",
    options: [
      "always use a shorter runway than would be required for either a full-stop landing or a normal takeoff alone, regardless of aircraft weight or performance",
      "shut down and restart the engines during the ground roll, in order to reset the engine and flight instruments before the subsequent takeoff",
      "reconfigure the aircraft, such as adjusting flap setting and trim, promptly and correctly during the brief ground contact, to safely resume the takeoff",
      "disregard the landing checklist entirely, using only the takeoff checklist, since the aircraft is considered to remain in the takeoff configuration throughout the entire manoeuvre",
    ],
    answer: 2,
    explain:
      "A touch-and-go requires the crew to promptly and correctly reconfigure the aircraft -- such as resetting flap and trim to appropriate takeoff values -- during the brief period of ground contact, so the subsequent takeoff and climb can be flown safely.",
    reference: "TP 690 -- Flight Operations: Touch-and-go landing technique",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A 'positive exchange of flight controls' procedure, used when transferring control of the aircraft between pilots, generally requires",
    options: [
      "that the autopilot must always be engaged before any transfer of control can occur, even briefly during a routine handover on the ground",
      "no verbal communication, since control transfer is assumed to be obvious from context and from each pilot's normal hand position on the controls, throttles, and trim switches",
      "that control may only be transferred while the aircraft is on the ground, never at any point during flight",
      "a clear verbal statement and acknowledgment, and where practical a physical check, confirming which pilot currently has control",
    ],
    answer: 3,
    explain:
      "A positive exchange of flight controls uses a clear verbal statement and acknowledgment -- and, where practical, a physical check -- so both pilots are unambiguously certain which of them currently has control of the aircraft, avoiding a dangerous situation where neither (or both) believe they are flying.",
    reference: "TP 690 -- Flight Operations: Positive exchange of flight controls",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During the takeoff roll, a crew is generally trained to recognize a developing engine failure primarily through cues such as",
    options: [
      "asymmetric yaw, abnormal noise or vibration, and engine instrument indications, prompting an assessment of whether the failure occurred before or after V1",
      "a change in outside air temperature displayed on the ND, unrelated to any engine parameter or control response",
      "the autopilot automatically announcing the failure verbally over the flight deck speakers, with no need for crew recognition",
      "a scheduled maintenance reminder displayed on the PFD shortly after the throttles are advanced for takeoff",
    ],
    answer: 0,
    explain:
      "A developing engine failure during the takeoff roll is generally recognized through cues such as asymmetric yaw, abnormal noise or vibration, and relevant engine instrument indications, prompting the crew to assess whether the failure occurred before or after V1 in order to decide the appropriate response.",
    reference: "TP 690 -- Flight Operations: Recognizing engine failure during takeoff roll",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A rolling takeoff, in which the aircraft continues moving onto the runway and smoothly advances to takeoff thrust without stopping to line up, is generally understood to",
    options: [
      "only be permitted on runways longer than 10,000 feet, regardless of the aircraft type or its actual takeoff performance requirements",
      "reduce the runway distance available for the takeoff roll compared to lining up and stopping first, though it can reduce engine spool time and foreign object debris exposure",
      "always increase the takeoff distance required compared to a static (standing) takeoff from a full stop, regardless of the runway length available, engine spool-up characteristics, or aircraft weight",
      "have no effect whatsoever on takeoff distance or engine operation, regardless of how the turn onto the runway is flown",
    ],
    answer: 1,
    explain:
      "A rolling takeoff uses some of the available runway distance while turning onto the runway before reaching takeoff thrust, reducing the distance available for the takeoff roll compared to a static takeoff, though it can reduce engine spool-up time and exposure to foreign object debris compared to stopping first.",
    reference: "TP 690 -- Flight Operations: Rolling takeoff versus static takeoff",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "If a missed approach is initiated during the circling portion of a circling approach, standard guidance generally directs the crew to",
    options: [
      "descend further in an attempt to regain visual contact with the runway, since remaining below the circling minimum descent altitude is considered to pose no additional risk once a missed approach has already been initiated",
      "continue the circling turn indefinitely until visual contact with the runway is regained, regardless of the aircraft's remaining fuel or the deteriorating weather conditions",
      "turn toward the airport, or as otherwise published, and climb, continuing the turn in the same direction as the circling pattern, to remain within the protected circling area",
      "immediately reverse course and fly directly away from the aerodrome regardless of published guidance or the direction of the circling pattern being flown",
    ],
    answer: 2,
    explain:
      "A missed approach initiated during circling generally directs the crew to turn toward the airport (or as otherwise published) and climb, continuing the turn in the same direction as the circling pattern to remain within the protected circling area, before proceeding on the published missed approach procedure.",
    reference: "TP 690 -- Flight Operations: Missed approach from a circling approach",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Before takeoff, the horizontal stabilizer trim is generally set to a specific value based primarily on",
    options: [
      "the destination aerodrome's runway length, independent of the aircraft's loading or centre of gravity position",
      "the number of passengers seated in the rear cabin, independent of the aircraft's overall centre of gravity position, its actual weight distribution, or the loaded baggage",
      "the outside air temperature at the departure aerodrome, independent of the aircraft's weight or balance condition",
      "the aircraft's centre of gravity position, since incorrect trim can cause an unexpected pitch response or difficulty rotating at VR",
    ],
    answer: 3,
    explain:
      "Takeoff stabilizer trim is generally set based on the aircraft's centre of gravity position, since an incorrectly set trim can result in an unexpected pitch response during rotation, an excessive rotation rate, or difficulty achieving rotation at VR.",
    reference: "TP 690 -- Flight Operations: Takeoff stabilizer trim setting",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "After liftoff, the landing gear is generally not retracted until the crew has confirmed a 'positive rate' of climb, primarily to",
    options: [
      "avoid retracting the gear if the aircraft were to settle back toward the runway, such as after a bounce or while still in ground effect, which could cause a gear-up contact",
      "allow the anti-skid system additional time to reset between landing and the next takeoff, independent of the aircraft's actual flight path after liftoff",
      "reduce aerodynamic drag as early as possible during the climb, regardless of the aircraft's actual flight path or proximity to the runway surface",
      "comply with a requirement that has no safety rationale at all, existing purely as a matter of longstanding operational tradition",
    ],
    answer: 0,
    explain:
      "Waiting for a confirmed positive rate of climb before retracting the gear guards against the aircraft settling back toward the runway -- such as after a bounce or while still in ground effect -- which could otherwise result in a gear-up runway contact if the gear had already been retracted.",
    reference: "TP 690 -- Flight Operations: Positive rate and gear retraction timing",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "For procedural purposes, an aircraft is generally considered to be operating in 'icing conditions' when",
    options: [
      "any temperature below 0 degrees Celsius is present, regardless of whether any moisture, visible or otherwise, is present at all",
      "visible moisture, such as cloud, fog with reduced visibility, rain, or snow, together with a total or outside air temperature at or below a specified threshold, on the ground or in flight",
      "the aircraft is above 10,000 feet, regardless of the temperature or the presence or absence of moisture",
      "the pilot visually observes ice already accreted on the wing leading edge, since no procedural definition of icing conditions is considered to apply before ice becomes visible on any external airframe surface",
    ],
    answer: 1,
    explain:
      "Icing conditions, for procedural purposes, are generally defined by the combination of visible moisture -- such as cloud, fog with reduced visibility, rain, or snow -- together with a total air temperature or outside air temperature at or below a specified threshold, applicable whether the aircraft is on the ground or in flight.",
    reference: "TP 690 -- Flight Operations: Definition of icing conditions",
  },
];
