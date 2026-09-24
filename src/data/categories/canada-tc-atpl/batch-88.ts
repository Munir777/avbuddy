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
      "is always numerically identical to VR for every aircraft type and weight",
      "represents the maximum speed at which the takeoff may still be safely rejected",
      "must be achieved by a specified height above the runway (commonly 35 feet) following an engine failure at V1, providing an adequate margin above stall speed and minimum control speed for the initial climb",
      "applies only to a takeoff conducted with all engines operating normally",
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
      "used only during a missed approach, never during a normal landing",
      "that remains constant regardless of the aircraft's landing weight or configuration",
      "equal to the aircraft's maximum operating speed (Vmo) in the landing configuration",
      "based on a specified margin above the aircraft's stall speed in the landing configuration, for the aircraft's actual landing weight",
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
      "at or near the aircraft's maximum operating speed (Vmo/Mmo), maximizing the rate of descent while remaining within structural limits",
      "that is irrelevant, since only vertical speed, not airspeed, matters during an emergency descent",
      "at or near the minimum controllable airspeed, to conserve altitude for as long as possible",
      "that must never exceed the normal cruise climb speed",
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
      "the demonstrated crosswind component only applies to takeoff, never to landing",
      "a contaminated surface increases the risk of losing directional control, since reduced tire friction limits the aircraft's ability to counteract the crosswind's side force",
      "contamination always increases the runway's effective friction, making a higher crosswind limit safe",
      "crosswind has no aerodynamic effect at all on a contaminated runway",
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
      "ice on the airframe always increases indicated airspeed readings, requiring a lower target speed to compensate",
      "the increment is required only to compensate for reduced radio reception in icing conditions",
      "icing accumulation can degrade wing performance and reduce the stall margin, so a higher approach speed helps maintain an adequate buffer above the (potentially elevated) stall speed",
      "icing conditions have no aerodynamic effect on approach speed requirements",
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
      "the specific point on the runway where an aircraft must rotate for takeoff",
      "a section of runway pavement that generates unusually high friction, improving braking performance",
      "an area reserved exclusively for de-icing operations",
      "a location on the movement area with a history of confusion, incursion, or increased collision risk, warranting heightened crew awareness",
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
      "runway length available, runway surface condition, and landing weight, selecting a higher setting when a shorter, more slippery, or heavier landing is expected",
      "only the time of day, since autobrake settings are unrelated to runway or aircraft conditions",
      "the colour of the runway centreline lighting",
      "the cabin crew's preference for passenger comfort exclusively, with no reference to runway performance",
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
      "ground operations never require anti-ice protection under any circumstance",
      "frost, ice, or supercooled moisture can begin forming on critical surfaces under conditions that do not require active precipitation, so proactive protection helps maintain a clean aircraft for takeoff",
      "anti-ice systems are only effective once ice has already visibly accumulated on the airframe",
      "activating anti-ice on the ground has no effect on the aircraft's readiness for takeoff",
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
      "always use a shorter runway than would be required for either a full-stop landing or a normal takeoff alone",
      "shut down and restart the engines during the ground roll",
      "reconfigure the aircraft (such as adjusting flap setting and trim) promptly and correctly during the brief ground contact, in order to safely resume the takeoff and climb",
      "disregard the landing checklist entirely, using only the takeoff checklist",
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
      "that the autopilot must always be engaged before any transfer of control can occur",
      "no verbal communication, since control transfer is assumed to be obvious from context",
      "that control may only be transferred while the aircraft is on the ground",
      "a clear verbal statement and acknowledgment (and, where practical, a physical check) confirming which pilot currently has control, to avoid any ambiguity about who is flying the aircraft",
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
      "asymmetric yaw, abnormal noise or vibration, and relevant engine instrument indications, prompting the crew to assess whether the failure occurred before or after V1",
      "a change in outside air temperature displayed on the ND",
      "the autopilot automatically announcing the failure verbally, with no need for crew recognition",
      "a scheduled maintenance reminder displayed on the PFD",
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
      "only be permitted on runways longer than 10,000 feet",
      "reduce the runway distance available for the takeoff roll compared to lining up and stopping first, since some distance is used during the turn onto the runway, though it can reduce engine spool time and foreign object debris exposure",
      "always increase the takeoff distance required compared to a static (standing) takeoff from a full stop",
      "have no effect whatsoever on takeoff distance or engine operation",
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
      "descend further in an attempt to regain visual contact with the runway",
      "continue the circling turn indefinitely until visual contact with the runway is regained",
      "turn toward the airport (or as otherwise published) and climb, generally continuing the turn in the same direction as the circling pattern, to remain within the protected circling area before proceeding on the published missed approach",
      "immediately reverse course and fly directly away from the aerodrome regardless of published guidance",
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
      "the destination aerodrome's runway length",
      "the number of passengers seated in the rear cabin, independent of overall CG position",
      "the outside air temperature at the departure aerodrome",
      "the aircraft's centre of gravity position, since an incorrectly set trim can result in an unexpected pitch response, an excessive rotation rate, or difficulty rotating at VR",
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
      "avoid retracting the gear if the aircraft were to settle back toward the runway (such as after a bounce or in ground effect), which could result in a gear-up runway contact",
      "allow the anti-skid system additional time to reset between landing and the next takeoff",
      "reduce aerodynamic drag as early as possible during the climb, regardless of the aircraft's actual flight path",
      "comply with a requirement that has no safety rationale, purely as a matter of tradition",
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
      "any temperature below 0 degrees Celsius is present, regardless of whether moisture is visible",
      "visible moisture (such as cloud, fog with visibility below a specified value, rain, or snow) is present and the total air temperature or outside air temperature is at or below a specified threshold, whether on the ground or in flight",
      "the aircraft is above 10,000 feet, regardless of temperature or moisture",
      "the pilot visually observes ice already accreted on the wing leading edge",
    ],
    answer: 1,
    explain:
      "Icing conditions, for procedural purposes, are generally defined by the combination of visible moisture -- such as cloud, fog with reduced visibility, rain, or snow -- together with a total air temperature or outside air temperature at or below a specified threshold, applicable whether the aircraft is on the ground or in flight.",
    reference: "TP 690 -- Flight Operations: Definition of icing conditions",
  },
];
