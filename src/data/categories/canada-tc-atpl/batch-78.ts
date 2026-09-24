import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 78 -- Section 5: Flight
// Operations, eighth pass. Original questions written from the TP
// 690 syllabus (topic headings only, no sample questions) and
// general transport-category flight operations principles. Covers
// non-normal configuration landing speed additives, long landing
// risk, rejecting a takeoff after V1 in extreme circumstances,
// one-engine-inoperative landing rollout, the circling approach
// missed approach technique, downslope runway effect on landing
// distance, the approach speed floor, manual (non-anti-skid)
// braking technique, go-around initial technique, takeoff alternate
// weather minima, brake cooling before a subsequent takeoff, high
// density altitude's effect on approach groundspeed, OEI approach
// flap configuration, all-engine-out glide technique, the displaced
// threshold, and the anti-ice/de-ice climb performance penalty --
// topics not yet addressed in batches 5, 20, 28, 38, 48, 58, or 68.
// Not transcribed or adapted from any commercial test-prep
// publisher.
export const CANADA_TC_ATPL_BATCH_78_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "When landing in a non-normal configuration, such as with less than full flap deployed, standard guidance generally calls for the crew to",
    options: [
      "make no adjustment at all to approach speed, since flap setting has no effect on the speed required to remain safely above the stall.",
      "reduce the approach speed below the normal reference speed, since less flap always reduces the stalling speed for a given weight.",
      "add a specified speed increment above the normal reference landing speed to compensate for the reduced lift coefficient available at the non-normal flap setting, accepting the resulting increase in landing distance required.",
      "always execute a go-around rather than attempt to land in any non-normal flap configuration, regardless of the specific failure or the runway available, a blanket rule that does not reflect actual procedure, which instead calls for adding a speed increment to compensate for reduced lift and accepting a longer landing distance rather than mandating a go-around in every non-normal flap case.",
    ],
    answer: 2,
    explain:
      "A reduced flap setting lowers the maximum lift coefficient available and raises the stalling speed for a given weight, so landing in such a non-normal configuration generally requires the crew to add a specified speed increment above the normal reference landing speed to maintain an adequate margin above the stall -- the trade-off is an increased landing distance required, which must be checked against the landing distance available before the approach is continued.",
    reference: "TP 690 -- Flight Operations: Non-Normal Landing Configurations",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A long landing, in which the aircraft touches down significantly beyond the normal touchdown zone, is commonly caused by",
    options: [
      "touching down at exactly the reference landing speed with a normal flare, which by definition always produces a long landing, a description that misstates the actual cause, since touching down at the correct reference speed with a normal flare is precisely what a stabilized approach and landing are meant to achieve, not a factor that produces a long landing.",
      "a stabilized approach flown precisely on the correct glide path and airspeed all the way to the runway.",
      "applying maximum braking immediately upon crossing the runway threshold, before the aircraft has actually touched down.",
      "excess airspeed, a shallow or extended flare, or floating in ground effect before touchdown, all of which consume runway distance before the aircraft actually settles onto the surface.",
    ],
    answer: 3,
    explain:
      "A long landing typically results from carrying excess airspeed over the threshold, an extended or overly shallow flare, or floating in ground effect while the aircraft bleeds off excess speed before finally settling onto the runway -- each of these consumes runway distance before touchdown actually occurs, eating into the landing distance margin and, in a limiting case, increasing the risk of a runway overrun, which is why a stabilized approach at the correct speed and a positive, appropriately timed touchdown are emphasized.",
    reference: "TP 690 -- Flight Operations: Landing Technique",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Although standard guidance strongly favours continuing a takeoff once V1 has been reached, the extremely limited circumstances in which rejecting the takeoff after V1 may still be justified generally involve",
    options: [
      "clear evidence that the aircraft is unsafe or unable to fly, such as a severe structural failure, a fire warning that persists, or a clear indication the aircraft will not become airborne, rather than routine malfunctions that do not prevent a safe takeoff and climb-out.",
      "the crew's subjective discomfort with continuing, even absent any specific indication that the aircraft cannot safely fly.",
      "a routine engine failure alone, with no other complicating factor, since this is considered sufficient justification on its own to reject after V1, a description that overstates the threshold, since a routine engine failure without additional complicating factors is generally regarded as something the aircraft can safely continue to fly with and climb away from after V1 rather than an automatic justification to reject.",
      "any illumination of a caution light on the EICAS or ECAM display, regardless of its nature or severity.",
    ],
    answer: 0,
    explain:
      "Standard guidance treats the takeoff as committed once V1 is reached, since the runway remaining is calculated on the assumption that the takeoff will be continued and an engine failure alone does not prevent a safe climb-out; the extremely narrow exceptions where rejecting after V1 may still be justified generally involve clear evidence the aircraft is unsafe or unable to fly at all -- such as a severe structural failure, a persistent fire, or an unambiguous indication the aircraft will not become airborne -- rather than routine malfunctions that leave the aircraft capable of a safe takeoff and climb.",
    reference: "TP 690 -- Flight Operations: Rejected Takeoff",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "During the landing rollout of a multi-engine aircraft that has landed with one engine inoperative, directional control on the runway is primarily maintained by",
    options: [
      "banking steeply into the inoperative engine throughout the entire landing rollout, in the same manner as used during an OEI approach.",
      "rudder and, as the aircraft decelerates and rudder authority diminishes, differential braking and nosewheel steering, since the asymmetric thrust that existed in flight is no longer a factor once the operating engine(s) are brought to idle or reverse.",
      "aileron input alone, with no role for rudder, differential braking, or nosewheel steering during the landing rollout, a description that leaves out the controls actually used, since directional control during the landing rollout instead relies primarily on rudder and, as speed decreases, on differential braking and nosewheel steering rather than aileron alone.",
      "immediately applying maximum reverse thrust on the operating engine only, which is the sole technique used to maintain the centreline.",
    ],
    answer: 1,
    explain:
      "Once a multi-engine aircraft with an inoperative engine has landed, the asymmetric thrust concern that dominated the approach and go-around case is largely resolved as the operating engine(s) are brought to idle or reverse; directional control during the rollout is then maintained primarily through rudder, and as the aircraft decelerates and rudder effectiveness diminishes with airspeed, through differential braking and nosewheel steering, rather than through the aileron, bank angle, or single-engine reverse thrust techniques relevant to other phases of an OEI operation.",
    reference: "TP 690 -- Flight Operations: One-Engine-Inoperative Operations",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "If visual contact with the runway environment is lost during the circling manoeuvre of a circling approach, standard guidance generally directs the crew to",
    options: [
      "descend below the published circling minimum descent altitude in an attempt to regain visual contact more quickly.",
      "continue circling indefinitely at the current altitude until visual contact is regained, regardless of how much time or fuel this requires.",
      "execute the missed approach procedure specified for a circling approach, which typically involves turning toward the airport (or a specified direction) and climbing, rather than automatically following the straight-ahead missed approach track published for a straight-in approach to that runway.",
      "immediately follow the straight-in missed approach track published for the runway originally intended to be used, even though the aircraft is no longer aligned with that runway, a track that does not correspond to the aircraft's actual position during a circling manoeuvre, since the appropriate procedure is instead the specific circling missed approach, which typically turns toward the airport and climbs rather than following the straight-in track meant for an aircraft already aligned on final.",
    ],
    answer: 2,
    explain:
      "Because an aircraft circling to land may be positioned anywhere around the airport rather than aligned with the approach course used for a straight-in missed approach, losing visual contact during the circling manoeuvre requires following the specific circling missed approach procedure -- typically involving a turn toward the airport, or in a specified direction, followed by a climb -- rather than defaulting to the straight-in missed approach track, which could carry the aircraft away from the airport, into terrain, or through other traffic given the aircraft's actual position at the moment visual contact is lost.",
    reference: "TP 690 -- Flight Operations: Circling Approach",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A downsloping runway (descending in the direction of landing), compared to a level runway, generally has the effect on landing distance of",
    options: [
      "having no effect at all on landing distance, since runway slope is relevant only to takeoff performance calculations.",
      "decreasing landing distance required, since gravity assists deceleration on a downslope in the same way it assists acceleration on an upslope during takeoff.",
      "decreasing landing distance required only when the aircraft lands with a tailwind, and having no effect with a headwind.",
      "increasing landing distance required, since the downslope tends to accelerate the aircraft during the landing roll, working against the deceleration provided by braking and reverse thrust.",
    ],
    answer: 3,
    explain:
      "Just as an upsloping runway assists deceleration during a rejected takeoff or hinders acceleration during a normal takeoff roll, a downsloping runway during landing works in the opposite direction to what a pilot might intuitively expect for deceleration: the downslope tends to accelerate the aircraft along the runway during the landing roll, working against the aircraft's brakes and reverse thrust and generally increasing the landing distance required compared to a level runway at the same weight, speed, and surface condition.",
    reference: "TP 690 -- Flight Operations: Landing Performance",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Even when a strong, steady headwind component is present on approach, standard guidance generally requires that approach speed",
    options: [
      "not be reduced below the aircraft's minimum reference approach speed for the current weight and configuration, since that speed already provides the required margin above the stall regardless of how much the headwind reduces the resulting groundspeed.",
      "always be reduced by an amount equal to the full headwind component, regardless of how close this brings the aircraft to its stalling speed.",
      "have no defined minimum at all, since a sufficiently strong headwind component is considered to eliminate any stall margin concern, a claim that ignores the stall margin approach speed exists to protect, since that minimum reference speed continues to apply regardless of how much a headwind happens to reduce the resulting groundspeed.",
      "be increased by the full headwind component, in the same manner as a gust additive, rather than being based on weight and configuration.",
    ],
    answer: 0,
    explain:
      "Approach speed is based on providing an adequate margin above the aircraft's stalling speed for its current weight and configuration -- a margin defined in terms of airspeed, not groundspeed -- so even though a strong, steady headwind component reduces groundspeed and therefore the runway distance covered per unit of airspeed, standard guidance does not permit reducing the indicated approach speed below the aircraft's minimum reference speed simply because a headwind is present, since doing so would erode the stall margin the reference speed is designed to protect.",
    reference: "TP 690 -- Flight Operations: Approach Speed",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "On an aircraft without an anti-skid braking system, effective manual braking technique on a runway with reduced friction generally involves",
    options: [
      "applying maximum, continuous, unbroken brake pressure from the moment of touchdown, since this always produces the shortest possible landing roll regardless of runway condition, a technique that risks the opposite of its intended effect on a slippery surface, since a continuously locked wheel loses both braking effectiveness and directional steering capability compared with a cadence technique that periodically releases pressure to let the wheel regain rotation.",
      "applying brakes in a cadence (a rhythmic, pumping application and release) rather than continuous, steady, firm pressure, since a locked wheel loses braking effectiveness and steering control, and releasing periodically allows the wheel to regain rotation before the next application.",
      "applying brakes only on one main gear at a time, alternating sides throughout the entire landing roll regardless of any need for directional correction.",
      "avoiding the use of brakes entirely on any runway with reduced friction, relying solely on aerodynamic drag to decelerate the aircraft.",
    ],
    answer: 1,
    explain:
      "Without an anti-skid system to automatically modulate brake pressure and prevent a wheel from locking, a pilot applying continuous, firm braking on a runway with reduced friction risks locking a wheel, which both reduces braking effectiveness (a skidding tire generates less friction than one still rotating) and can compromise directional control; a cadence braking technique -- applying firm pressure, then releasing briefly before reapplying -- allows a locked wheel to regain rotation between applications, generally producing more effective overall deceleration than sustained maximum pressure on a slippery surface.",
    reference: "TP 690 -- Flight Operations: Braking Technique",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "The initial actions upon commencing a go-around generally include, in sequence,",
    options: [
      "maintaining the current descent rate and configuration while awaiting a specific ATC clearance before taking any go-around action.",
      "retracting the landing gear and flaps immediately and simultaneously with the thrust application, before any positive rate of climb has been established, a sequence that risks retracting lift-producing devices before the aircraft has actually begun to climb, rather than waiting for a confirmed positive rate of climb before progressively retracting gear and flaps according to the appropriate schedule.",
      "applying go-around thrust, establishing a positive pitch attitude to arrest the descent and begin a climb, and then, as a positive rate of climb is confirmed, retracting the landing gear and progressively retracting flaps according to the appropriate schedule.",
      "reducing thrust to idle first, to avoid an abrupt pitch change, and only then establishing a climb attitude.",
    ],
    answer: 2,
    explain:
      "A go-around begins with the crew applying go-around thrust and establishing a positive, climbing pitch attitude to arrest the descent, since delaying either of these risks continuing toward the ground; only once a positive rate of climb is confirmed does the crew begin retracting the landing gear and progressively retracting flaps according to the appropriate schedule, since retracting gear or flaps before a climb is actually established could increase drag or reduce lift at the worst possible moment, close to the ground.",
    reference: "TP 690 -- Flight Operations: Go-Around Procedure",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In addition to being reachable within the required diversion time, a takeoff alternate aerodrome must generally also",
    options: [
      "have no weather requirement at all, since a takeoff alternate is selected based solely on its distance from the departure aerodrome.",
      "have a runway length identical to that of the departure aerodrome, regardless of the aircraft's actual performance requirements at reduced weight.",
      "be located in the same direction from the departure aerodrome as the destination, regardless of its actual weather conditions.",
      "have forecast weather conditions, for the expected time of use, that meet the applicable weather minima for the approach and landing to be flown there.",
    ],
    answer: 3,
    explain:
      "Selecting a takeoff alternate involves more than simply confirming it can be reached within the required diversion time following a departure-phase emergency such as an engine failure -- the aerodrome's forecast weather for the expected time of use must also meet the applicable weather minima for the approach and landing that would actually be flown there, since an aerodrome that is close enough to reach but has weather below usable minima would not actually serve as a viable alternate.",
    reference: "TP 690 -- Flight Operations: Alternate Aerodrome Selection",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Following a high-energy event such as a high-speed rejected takeoff or several closely spaced landings, allowing adequate time for brake cooling before the next takeoff is important primarily because",
    options: [
      "brakes that remain excessively hot risk further degraded performance if braking is needed again soon, and in some cases risk a fuse plug releasing tire pressure or, in extreme cases, a brake fire, particularly if the next takeoff is then rejected as well.",
      "hot brakes improve subsequent braking performance, meaning a shorter cooling period is always preferable to a longer one.",
      "brake temperature has no bearing on braking performance or tire integrity, making cooling time an unnecessary precaution.",
      "brake cooling is required only to satisfy a maintenance logbook entry, with no actual safety implication for a subsequent takeoff, a paperwork-only framing that overlooks the genuine safety concern, since excessively hot brakes can degrade further braking performance and, in some cases, risk a fuse plug release or brake fire if another rejected takeoff or landing follows too soon.",
    ],
    answer: 0,
    explain:
      "A high-energy braking event, such as a high-speed rejected takeoff or a sequence of landings without adequate cooling in between, can leave the brakes significantly hotter than normal; if the next takeoff is then also rejected, or if braking is otherwise needed again soon, the already-hot brakes may perform less effectively and, in more extreme cases, can trigger a thermal fuse plug (releasing tire pressure to prevent a tire burst) or even a brake fire, which is why published brake cooling schedules and, where fitted, brake temperature indications are used to determine when it is safe to depart again.",
    reference: "TP 690 -- Flight Operations: Brake Management",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "At a high-elevation (high density altitude) aerodrome, an aircraft flown at the correct indicated/calibrated approach speed for its weight will",
    options: [
      "require less runway to land than at a low-elevation aerodrome, since reduced air density also reduces the aircraft's momentum during the landing roll.",
      "have a true airspeed and groundspeed higher than at the same indicated speed at a low-elevation aerodrome, meaning the aircraft covers more distance over the ground per unit of time and requires more runway to land, even though the indicated approach speed itself is unchanged.",
      "require a lower indicated approach speed than at a low-elevation aerodrome, in order to compensate for the reduced air density.",
      "have a true airspeed and groundspeed identical to those at a low-elevation aerodrome, since indicated airspeed alone determines groundspeed regardless of air density, a claim that leaves out air density's role entirely, since the same indicated airspeed actually corresponds to a higher true airspeed at a high-elevation, lower-density aerodrome, and therefore to a higher groundspeed as well.",
    ],
    answer: 1,
    explain:
      "Because air density decreases with density altitude, a given indicated (or calibrated) airspeed corresponds to a higher true airspeed at a high-elevation aerodrome than it would at a low-elevation one -- and, for a given wind, a correspondingly higher groundspeed -- so even though the reference approach speed itself (which is based on weight and configuration) does not change, the aircraft actually covers the runway at a higher groundspeed, consuming more runway distance during the landing roll than the same indicated speed would at a lower elevation.",
    reference: "TP 690 -- Flight Operations: High-Elevation Aerodrome Operations",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "When conducting an approach and landing with one engine inoperative, operators commonly favour using less than full landing flap primarily because",
    options: [
      "full flap is prohibited by regulation on any approach conducted with one engine inoperative, regardless of aircraft type or performance margin.",
      "a reduced flap setting always produces a shorter landing distance than full flap, regardless of the reduced go-around performance consideration.",
      "a reduced flap setting requires less thrust from the operating engine(s) to maintain the approach path, preserving a greater go-around climb performance margin should a go-around become necessary, at the cost of a somewhat higher approach and landing speed.",
      "flap setting has no bearing on go-around climb performance with one engine inoperative, making the choice purely a matter of pilot preference.",
    ],
    answer: 2,
    explain:
      "With one engine inoperative, less than full flap is often selected for the approach because a reduced flap setting requires less thrust from the remaining operating engine(s) to sustain the approach path, preserving more of the aircraft's already-reduced excess thrust as a margin for climb performance should a go-around become necessary -- this comes at the cost of a somewhat higher approach and landing speed and, correspondingly, a longer landing distance required, a trade-off operators and crews weigh against the specific runway available.",
    reference: "TP 690 -- Flight Operations: One-Engine-Inoperative Approach",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "In the rare event of a total loss of thrust from all engines at altitude, with restart unsuccessful, standard guidance for the resulting glide toward a suitable landing area generally emphasizes",
    options: [
      "descending as steeply as possible to reach the ground in the shortest possible time, without regard to maximizing glide distance.",
      "maintaining maximum airspeed throughout the glide, since higher speed always maximizes glide distance regardless of the aircraft's specific best-glide speed.",
      "immediately extending full flap and landing gear at the earliest possible moment after the thrust loss, regardless of altitude or distance from a suitable landing area, a premature configuration change that would increase drag and reduce the achievable glide distance well before it is actually needed, rather than being deferred until a suitable landing site is assured within gliding range.",
      "establishing and maintaining the aircraft's published best-glide speed to maximize the distance the aircraft can cover for the altitude available, while assessing restart options and identifying a suitable landing site within gliding range.",
    ],
    answer: 3,
    explain:
      "Following a total loss of thrust with restart unsuccessful, the crew's priority is to establish and maintain the aircraft's published best-glide speed -- the speed that maximizes the distance covered per unit of altitude lost -- while working the restart procedure and identifying and manoeuvring toward a suitable landing area within the resulting glide range; premature extension of flaps or landing gear, or flying faster or slower than best-glide speed, both reduce the distance the aircraft can cover and are generally reserved until the landing area is assured to be within reach.",
    reference: "TP 690 -- Flight Operations: All-Engine-Out Glide",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "A displaced threshold, marked by an arrow and a threshold bar located some distance beyond the physical start of the runway pavement, generally means that the portion of pavement before the threshold",
    options: [
      "may be used for takeoff and for landing rollout (after crossing the displaced threshold) but is not available for touchdown before the threshold, meaning it does not count toward landing distance available but may still contribute to takeoff distance available.",
      "counts fully toward both landing distance available and takeoff distance available, with no restriction on its use.",
      "is reserved exclusively for aircraft taxiing to and from the runway, with no application to either takeoff or landing distance calculations.",
      "may not be used for any purpose at all, including takeoff, and is functionally identical to a stopway, a description that overstates the restriction and conflates two different surfaces, since a displaced threshold area remains usable for takeoff and for landing rollout after the threshold, unlike a stopway, which is not available for takeoff run at all.",
    ],
    answer: 0,
    explain:
      "A displaced threshold moves the landing threshold beyond the physical start of the runway, typically because an obstacle or other consideration limits usable landing distance from that end -- the pavement before the displaced threshold is not available for touchdown and does not count toward landing distance available, but it can generally still be used for the takeoff roll (and, once past, for a landing aircraft's rollout after touchdown beyond the threshold), so its usability depends on which specific distance calculation -- takeoff or landing -- is being made.",
    reference: "TP 690 -- Flight Operations: Runway Markings and Declared Distances",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Flight Operations",
    q: "Operating an aircraft's engine anti-ice (and, on some types, airframe de-ice) systems generally imposes a performance penalty during climb because",
    options: [
      "anti-ice and de-ice systems always increase available thrust, improving climb performance whenever they are selected on.",
      "these systems typically draw bleed air (or electrical power) from the engines, reducing the thrust or power available for climb, which is why performance charts often require a correction to the climb gradient when anti-ice is selected on.",
      "these systems can only be operated on the ground, making any climb performance penalty irrelevant once airborne.",
      "anti-ice and de-ice systems have no effect on engine thrust or power output, imposing no performance penalty of any kind.",
    ],
    answer: 1,
    explain:
      "Engine and airframe anti-ice/de-ice systems commonly rely on bleed air extracted from the engine's compressor (or, on some systems, electrical power drawn from a generator), and diverting this air or power reduces the thrust or shaft power otherwise available for climb -- as a result, performance charts and WAT-limit calculations often require the crew to apply a specific penalty to climb gradient or weight limits whenever anti-ice is selected on, reflecting this trade-off between ice protection and available climb performance margin.",
    reference: "TP 690 -- Flight Operations: Anti-Ice and Performance",
  },
];
