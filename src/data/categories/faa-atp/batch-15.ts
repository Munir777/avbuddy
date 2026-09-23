import type { Question } from "../../../types";

// FAA ATP written-test question bank, batch 15.
// Source: Prepware "Study Session Results" printout, source questions 1072-1153
// (PDF pages 213-227 of 258).
// This page range pivots heavily into self-contained Weather content
// (fronts, clouds, thunderstorms, icing, turbulence, pressure systems,
// jet stream, METAR/TAF/PIREP decoding, weather charts), with a handful
// of Human Factors, Aerodynamics & Aircraft Performance, Navigation &
// Flight Planning, and Regulations & Certification questions mixed in.
// Skipped original source numbers (all figure-dependent): 1085, 1088,
// 1096, 1116, 1122, 1132, 1135, 1136, 1137, 1138, 1142, 1144, and 1153.
export const FAA_ATP_BATCH_15_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Under what condition does ATC issue safety alerts?",
    options: [
      "When collision with another aircraft is imminent.",
      "If the aircraft altitude is noted to be in close proximity to the surface or an obstacle.",
      "When weather conditions are extreme and wind shear or large hail is in the vicinity.",
    ],
    answer: 1,
    explain:
      "A safety alert will be issued to pilots of aircraft being controlled by ATC if the controller is aware the aircraft is at an altitude which, in the controller's judgment, places the aircraft in unsafe proximity to terrain, obstructions or other aircraft. Answer (A) is incorrect because a safety alert is issued to a pilot if ATC believes that his/her airplane is at an altitude which would place it in unsafe proximity to another airplane. Answer (C) is incorrect because, when weather conditions are extreme and wind shear or large hail is in the vicinity, a Convective SIGMET would be broadcast.",
    reference: "AIM 5-5-10 - Safety Alert",
  },
  {
    id: 2,
    subject: "FAA ATP",
    system: "Human Factors",
    q: "A pilot should be aware the alcohol in one beer can be detected for as long as",
    options: ["minimum of 60 minutes.", "2 hours.", "3 hours."],
    answer: 2,
    explain:
      "As little as one ounce of liquor, one bottle of beer, or four ounces of wine can impair flying skills, with the alcohol consumed in these drinks being detectable in the breath and blood for at least 3 hours.",
    reference: "14 CFR 91.17 - Alcohol or Drugs",
  },
  {
    id: 3,
    subject: "FAA ATP",
    system: "Human Factors",
    q: "While making prolonged constant rate turns under IFR conditions, an abrupt head movement can create the illusion of rotation on an entirely different axis. This is known as",
    options: ["autokinesis.", "Coriolis illusion.", "the leans."],
    answer: 1,
    explain:
      "An abrupt head movement while making a prolonged constant rate turn can produce a strong sensation of rotation or movement in an entirely different axis. The phenomenon is known as Coriolis Illusion. Answer (A) is incorrect because autokinesis refers to a stationary light appearing to move about when stared at for many seconds in the dark. Answer (C) is incorrect because the leans refer to an abrupt correction of a banked attitude which can create the illusion of bank in the opposite direction.",
    reference: "FAA-H-8083-25 - Pilot's Handbook of Aeronautical Knowledge, Ch. 17 (Spatial Disorientation)",
  },
  {
    id: 4,
    subject: "FAA ATP",
    system: "Human Factors",
    q: "Pilot performance can be seriously degraded by",
    options: [
      "prescribed and over-the-counter medications.",
      "prescription medications only.",
      "over-the-counter medications only.",
    ],
    answer: 0,
    explain:
      "Pilot performance can be seriously degraded by both prescribed and over-the-counter medications, as well as by the medical conditions for which they are taken. Many medications have primary effects that may impair judgment, memory, alertness, coordination, vision, and the ability to make calculations. Others have side effects that may impair the same critical functions. Any medication that depresses the nervous system, such as a sedative, tranquilizer, or antihistamine, can make a pilot much more susceptible to hypoxia. Pilots are prohibited from performing crewmember duties while using any medication that affects the faculties in any way contrary to safety.",
    reference: "14 CFR 91.17 - Alcohol or Drugs",
  },
  {
    id: 5,
    subject: "FAA ATP",
    system: "Weather",
    q: "What wind direction and speed aloft are forecast by this WINDS AND TEMPERATURE ALOFT FORECAST (FD) for FL390 - '731960'?",
    options: ["230° at 119 knots.", "131° at 96 knots.", "073° at 196 knots."],
    answer: 0,
    explain:
      "FB forecasts of wind speeds from 100 knots through 199 knots have 50 added to the wind direction code and 100 subtracted from the speed. The forecast of 731960 decodes as a wind of 230° at 119 knots with a temperature of -60°C. Answer (B) is incorrect because coded directions with wind speed over 100 knots range from 51 through 86. The direction is 230° (not 131°) at 119 knots (not 96 knots). Answer (C) is incorrect because 50 must be subtracted from the first two digits and 100 added to the second two digits. The last two digits are the temperature.",
    reference: "AC 00-45 - Aviation Weather Services, Winds and Temperatures Aloft Forecast (FD/FB)",
  },
  {
    id: 6,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "Test data indicate that ice, snow, or frost having a thickness and roughness similar to medium or coarse sandpaper on the leading edge and upper surface of a wing can",
    options: [
      "reduce lift by as much as 40 percent and increase drag by 30 percent.",
      "increase drag and reduce lift by as much as 40 percent.",
      "reduce lift by as much as 30 percent and increase drag by 40 percent.",
    ],
    answer: 2,
    explain:
      "Test data indicate that ice, snow, or frost formations having a thickness and surface roughness similar to medium or coarse sandpaper on the leading edge and upper surface of a wing can reduce wing lift by as much as 30 percent and increase drag by 40 percent.",
    reference: "FAA-H-8083-25 - Pilot's Handbook of Aeronautical Knowledge, Ch. 4 (Aerodynamics of Flight)",
  },
  {
    id: 7,
    subject: "FAA ATP",
    system: "Weather",
    q: "On the constant pressure analysis chart, satellite and aircraft observations are used in the analysis, over areas of sparse data. A satellite observation plotted using",
    options: ["a station circle at the cloud top location.", "a square at the cloud top location.", "a star at the cloud top location."],
    answer: 2,
    explain:
      "A star identifies satellite wind estimates made from cloud types. Answer (A) is incorrect because a station circle is used for the weather stations which send up radiosondes. Answer (B) is incorrect because a square at the aircraft location is used to signify an aircraft report.",
    reference: "AC 00-45 - Aviation Weather Services, Constant Pressure Analysis Chart",
  },
  {
    id: 8,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "The pilot in command of an airplane en route determines that icing conditions can be expected that might adversely affect safety of the flight. Which action is appropriate?",
    options: [
      "The pilot in command may continue to the original destination airport, after climbing to a higher altitude.",
      "The pilot in command shall not continue flight into the icing conditions.",
      "The flight may continue to the original destination airport, provided all anti-icing and deicing equipment is operational and is used.",
    ],
    answer: 1,
    explain:
      "No person may dispatch or release an aircraft, continue to operate an aircraft en route, or land an aircraft when, in the opinion of the pilot-in-command or aircraft dispatcher, icing conditions are expected or met that might adversely affect the safety of flight.",
    reference: "14 CFR 121.629 - Operation in Icing Conditions",
  },
  {
    id: 9,
    subject: "FAA ATP",
    system: "Weather",
    q: "The practice developed and accepted by the North American air carrier industry using traditional North American fluids is to ensure that the freeze point of the remaining film is below ambient temperature by at least",
    options: ["10°F.", "20°F.", "20°C."],
    answer: 1,
    explain:
      "As it is applied, deicing fluid is often diluted by melted snow and ice. It is standard practice to ensure that the remaining film of diluted fluid has a freeze point at least 20°F below the ambient temperature.",
    reference: "FAA AC 135-17 - Pilot Guide, Small Aircraft Ground Deicing",
  },
  {
    id: 10,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "Which initial cockpit indications should a pilot be aware of when a constant headwind shears to a calm wind?",
    options: [
      "Altitude increases; pitch and indicated airspeed decrease.",
      "Altitude, pitch, and indicated airspeed decrease.",
      "Altitude, pitch, and indicated airspeed increase.",
    ],
    answer: 1,
    explain:
      "An increasing tailwind (or decreasing headwind) shear will decrease indicated airspeed and performance capability. Due to airspeed loss, the airplane may tend to pitch down to regain trim speed.",
    reference: "FAA-H-8083-25 - Pilot's Handbook of Aeronautical Knowledge, Ch. 12 (Weather Theory - Wind Shear)",
  },
  {
    id: 11,
    subject: "FAA ATP",
    system: "Weather",
    q: "When will frost most likely form on aircraft surfaces?",
    options: [
      "On clear nights with stable air and light winds.",
      "On overcast nights with freezing drizzle precipitation.",
      "On clear nights with convective action and a small temperature/dewpoint spread.",
    ],
    answer: 0,
    explain:
      "Frost forms when both the temperature and the dewpoint of the collecting surface are below freezing. When this occurs, water vapor sublimates directly into frost. This condition most often occurs on clear nights with little or no wind. Answer (B) is incorrect because freezing drizzle would produce ice on the aircraft surfaces, not frost. Answer (C) is incorrect because stable air is required. Convective action requires unstable conditions.",
    reference: "FAA-H-8083-25 - Pilot's Handbook of Aeronautical Knowledge, Ch. 12 (Weather Theory - Structural Icing)",
  },
  {
    id: 12,
    subject: "FAA ATP",
    system: "Weather",
    q: "Where do squall lines most often develop?",
    options: ["In an occluded front.", "Ahead of a cold front.", "Behind a stationary front."],
    answer: 1,
    explain:
      "A squall line is a non-frontal, narrow band of active thunderstorms. Often it develops ahead of a cold front in moist, unstable air. Answer (A) is incorrect because squall lines most often develop ahead of a cold front, not in an occluded front. Answer (C) is incorrect because squall lines most often develop ahead of a cold front, not behind a stationary front.",
    reference: "AC 00-6 - Aviation Weather, Squall Lines",
  },
  {
    id: 13,
    subject: "FAA ATP",
    system: "Weather",
    q: "What characterizes a ground-based inversion?",
    options: ["Convection currents at the surface.", "Cold temperatures.", "Poor visibility."],
    answer: 2,
    explain:
      "Inversions can occur in warm and cold temperatures in stable air, and usually trap particles in the air causing poor visibility. Answer (A) is incorrect because convective currents at the surface do not occur when there is a ground-based inversion. Answer (B) is incorrect because when the temperature is cold, it is difficult for the earth to radiate enough heat to become colder than the overlying air.",
    reference: "AC 00-6 - Aviation Weather, Temperature Inversions",
  },
  {
    id: 14,
    subject: "FAA ATP",
    system: "Weather",
    q: 'What information from the control tower is indicated by the following transmission?\n"SOUTH BOUNDARY WIND ONE SIX ZERO AT TWO FIVE, WEST BOUNDARY WIND TWO FOUR ZERO AT THREE FIVE."',
    options: [
      "A downburst is located at the center of the airport.",
      "Wake turbulence exists on the west side of the active runway.",
      "There is a possibility of wind shear over or near the airport.",
    ],
    answer: 2,
    explain:
      "The Low-Level Wind Shear Alert System (LLWAS) is a computerized system which detects the presence of a possible hazardous low-level wind shear by continuously comparing the winds measured by sensors installed around the periphery of an airport with the wind measured at the center field location. If the difference between the center field wind sensor and peripheral sensor becomes excessive, a thunderstorm or thunderstorm gust front wind shear is probable. When this condition exists, the tower controller will provide arrival and departure aircraft with an advisory of the situation which includes the center field wind plus the remote location and wind. The broadcast quoted in the question is an example of this type of advisory. Answer (A) is incorrect because a downburst is a vertical movement of air which is not measured by the LLWAS until it has horizontal movement. Also the wind direction is toward the center of the airport, not away from it. Answer (B) is incorrect because wake turbulence does not produce wind. It is generated by an aircraft that is producing lift, which could be on either side of the active runway.",
    reference: "AIM 7-1-25 - Low Level Wind Shear/Microburst Detection Systems",
  },
  {
    id: 15,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which type of weather can only be directly observed during flight and then reported in a PIREP?",
    options: ["Turbulence and structural icing.", "Jetstream-type winds and icing.", "Level of the tropopause and turbulence."],
    answer: 0,
    explain:
      "Aircraft in flight are the only means of directly observing cloud tops, icing, and turbulence. Answer (B) is incorrect because a pilot would not be able to determine from observation if jet stream type winds or other CAT were encountered. Answer (C) is incorrect because the level of the tropopause is determined by radiosondes released by ground weather observing stations. It is not a type of weather that can be directly observed by a pilot during flight.",
    reference: "AC 00-45 - Aviation Weather Services, Pilot Weather Reports (PIREPs)",
  },
  {
    id: 16,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which procedure increases holding time when deicing/anti-icing an airplane using a two-step process?",
    options: [
      "Heated Type 1 fluid followed by cold Type 2 fluid.",
      "Cold Type 2 fluid followed by hot Type 2 fluid.",
      "Heated Type 1 or 2 fluid followed by cold Type 1 fluid.",
    ],
    answer: 0,
    explain:
      "Type 2 fluid is applied cold to increase its thickness and increase holding time. Answer (B) is incorrect because cold Type 2 would not be an effective deicer. Answer (C) is incorrect because step 2 should be Type 2.",
    reference: "FAA AC 135-17 - Pilot Guide, Small Aircraft Ground Deicing",
  },
  {
    id: 17,
    subject: "FAA ATP",
    system: "Weather",
    q: "Summer thunderstorms in the arctic region will generally move",
    options: [
      "northeast to southwest in polar easterlies.",
      "southwest to northeast with the jetstream flow.",
      "directly north to south with the low-level polar airflow.",
    ],
    answer: 0,
    explain:
      "Arctic thundershowers, usually circumnavigable, move generally from northeast to southwest in the polar easterlies which is opposite from the general movement in mid-latitudes.",
    reference: "AC 00-6 - Aviation Weather, Arctic Weather",
  },
  {
    id: 18,
    subject: "FAA ATP",
    system: "Weather",
    q: "Maximum downdrafts in a microburst encounter are strong and may include horizontal winds near the surface as strong as",
    options: ["34 knots.", "20 knots.", "45 knots."],
    answer: 2,
    explain:
      "Microburst downdrafts can be as strong as 6,000 feet per minute. Horizontal winds near the surface can be as strong as 45 knots resulting in a 90-knot shear across the microburst.",
    reference: "AC 00-54 - Pilot Windshear Guide",
  },
  {
    id: 19,
    subject: "FAA ATP",
    system: "Weather",
    q: "What is indicated by the term 'embedded thunderstorms'?",
    options: [
      "Severe thunderstorms are embedded in a squall line.",
      "Thunderstorms are predicted to develop in a stable air mass.",
      "Thunderstorms are obscured by other types of clouds.",
    ],
    answer: 2,
    explain:
      "A layer of stratiform clouds may sometimes form in a mildly stable layer while a few convective clouds penetrate the layer, thus merging stratiform with cumuliform. Under the right conditions, the cumuliform clouds can become thunderstorms which are completely obscured by the surrounding stratus clouds. Answer (A) is incorrect because a squall line consists of severe thunderstorms which can always be seen. Answer (B) is incorrect because thunderstorms do not occur in stable air masses.",
    reference: "AC 00-6 - Aviation Weather, Embedded Thunderstorms",
  },
  {
    id: 20,
    subject: "FAA ATP",
    system: "Weather",
    q: "What is the general direction of movement of a hurricane located in the Caribbean or Gulf of Mexico region?",
    options: [
      "Northwesterly curving to northeasterly.",
      "Westerly, until encountering land, then easterly.",
      "Counterclockwise over open water, then dissipating outward over land.",
    ],
    answer: 0,
    explain:
      "Hurricanes located in the Caribbean or Gulf of Mexico move northwesterly in the lower latitudes curving to northeasterly in the higher latitudes. Answer (B) is incorrect because a hurricane will curve easterly because of prevailing winds, not because of land. Answer (C) is incorrect because the windflow in the hurricane is counterclockwise, not the general movement of the hurricane itself.",
    reference: "AC 00-45 - Aviation Weather Services, Tropical Weather",
  },
  {
    id: 21,
    subject: "FAA ATP",
    system: "Weather",
    q: "What minimum thickness of cloud layer is indicated if precipitation is reported as light or greater intensity?",
    options: [
      "4,000 feet thick.",
      "2,000 feet thick.",
      "A thickness which allows the cloud tops to be higher than the freezing level.",
    ],
    answer: 0,
    explain:
      "When arriving at or departing from a terminal reporting precipitation of light or greater intensity, expect clouds to be more than 4,000 feet thick. Answer (B) is incorrect because to produce significant precipitation (light or greater intensity), clouds are normally at least 4,000 feet thick. Answer (C) is incorrect because a cloud thickness resulting in cloud tops above the freezing level means ice droplets and supercooled water will develop.",
    reference: "AC 00-6 - Aviation Weather, Precipitation and Cloud Thickness",
  },
  {
    id: 22,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "The Telephone Information Briefing Service (TIBS) recordings are provided by selected Automated Flight Service Stations and",
    options: [
      "are updated on the hour.",
      "are designed to replace the standard briefing given by a flight service specialist.",
      "contain area briefings encompassing a 50 NM radius.",
    ],
    answer: 2,
    explain:
      "TIBS provides continuous telephone recordings of meteorological and aeronautical information, specifically area and route briefings, as well as airspace procedures and special announcements, if applicable. It is designed to be a preliminary briefing tool and is not intended to replace a standard briefing from a flight service specialist. TIBS is available 24 hours a day by calling 1-800-WX-BRIEF and is updated when conditions change. As a minimum, area briefings encompass a 50 NM radius.",
    reference: "AIM 7-1-7 - Telephone Information Briefing Service (TIBS)",
  },
  {
    id: 23,
    subject: "FAA ATP",
    system: "Weather",
    q: "What condition is necessary for the formation of structural icing in flight?",
    options: ["Supercooled water drops.", "Water vapor.", "Visible water."],
    answer: 2,
    explain:
      "For structural icing to form, the aircraft must be flying through visible moisture and the temperature where the moisture strikes the aircraft must be 0°C or colder. Note that the moisture does not need to be supercooled. Answer (A) is incorrect because supercooled water drops increase the rate of icing, but are not a condition necessary for the formation of structural icing. Answer (B) is incorrect because water must be visible, not in a gaseous (vapor) state.",
    reference: "AC 00-6 - Aviation Weather, Structural Icing",
  },
  {
    id: 24,
    subject: "FAA ATP",
    system: "Weather",
    q: "Under what conditions would clear air turbulence (CAT) most likely be encountered?",
    options: [
      "When constant pressure charts show 20-knot isotachs less than 150 NM apart.",
      "When constant pressure charts show 60-knot isotachs less than 20 NM apart.",
      "When a sharp trough is moving at a speed less than 20 knots.",
    ],
    answer: 0,
    explain:
      "Clear Air Turbulence (CAT) is likely in areas where the vertical wind shear exceeds 6 knots per 1,000 feet or horizontal shear exceeds 40 knots per 150 miles. Answer (B) is incorrect because when constant pressure charts show 20-knot isotachs less than 60 NM, CAT is most likely to be encountered, and '60-knot isotachs' do not exist. Answer (C) is incorrect because CAT can be expected upwind of the base of a deep upper trough, not because a sharp trough is moving.",
    reference: "AC 00-30 - Clear Air Turbulence Avoidance",
  },
  {
    id: 25,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "Which is an effect of ice, snow, or frost formation on an airplane?",
    options: ["Decreased stall speed.", "Decreased pitchup tendencies.", "Decreased angle of attack for stalls."],
    answer: 2,
    explain:
      "Stall angle of attack will decrease and in some aircraft stall will occur prior to activation of stall warning devices. Answer (A) is incorrect because the stall speed will increase. Answer (B) is incorrect because there are no pitch-up tendencies with an aircraft having ice, snow, or frost formation.",
    reference: "FAA-H-8083-25 - Pilot's Handbook of Aeronautical Knowledge, Ch. 4 (Aerodynamics of Flight)",
  },
  {
    id: 26,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "What is the recommended technique to counter the loss of airspeed and resultant lift from wind shear?",
    options: [
      "Lower the pitch attitude and regain lost airspeed.",
      "Avoid overstressing the aircraft, 'pitch to airspeed,' and apply maximum power.",
      "Maintain, or increase, pitch attitude and accept the lower-than-normal airspeed indications.",
    ],
    answer: 2,
    explain:
      "Pitch attitude must be maintained or increased even when lower-than-normal airspeed indications are required. Answer (A) is incorrect because lowering the pitch attitude to regain lost airspeed is a result of past training emphasis on airspeed control, not recovering from a wind shear. Answer (B) is incorrect because the recommended technique to recover from a wind shear is to maintain or increase pitch attitude and not 'pitch to airspeed,' which may decrease pitch to regain lost airspeed.",
    reference: "AC 00-54 - Pilot Windshear Guide",
  },
  {
    id: 27,
    subject: "FAA ATP",
    system: "Weather",
    q: "What term describes an elongated area of low pressure?",
    options: ["Trough.", "Ridge.", "Hurricane or typhoon."],
    answer: 0,
    explain:
      "A trough is an elongated area of low pressure with the lowest pressure along a line marking maximum anticyclonic curvature. Answer (B) is incorrect because a ridge is an elongated area of high pressure. Answer (C) is incorrect because a hurricane or typhoon is a tropical cyclone (low) with highest sustained winds of 65 knots or greater.",
    reference: "AC 00-6 - Aviation Weather, Pressure Systems",
  },
  {
    id: 28,
    subject: "FAA ATP",
    system: "Weather",
    q: "A prognostic chart depicts the conditions",
    options: [
      "existing at the surface during the past 6 hours.",
      "which presently exist from the 1,000-millibar through the 700-millibar level.",
      "forecast to exist at a specific time in the future.",
    ],
    answer: 2,
    explain:
      "The Low-Level Prog is a four-panel chart. The two lower panels are 12- and 24-hour surface progs. The two upper panels are 12- and 24-hour progs of significant weather from the surface to 400 millibars (24,000 feet). The charts show conditions as they are forecast to be at the valid time of the chart. Answer (A) is incorrect because prognostic charts relate to the future, not the past. Answer (B) is incorrect because Low-Level Prognostic Charts are issued for the surface and 24,000 feet, which is 400 MB. 1,000 MB is very close to the surface; i.e., sea level is 1,013 MB. 700 MB is approximately 10,000 feet MSL.",
    reference: "AC 00-45 - Aviation Weather Services, Low-Level Significant Weather Prognostic Chart",
  },
  {
    id: 29,
    subject: "FAA ATP",
    system: "Weather",
    q: "Turbulence encountered above 15,000 feet AGL, not associated with cloud formations, should be reported as",
    options: ["convective turbulence.", "high altitude turbulence.", "clear air turbulence."],
    answer: 2,
    explain:
      "High-level turbulence (normally above 15,000 feet AGL) not associated with cumuliform cloudiness, including thunderstorms, should be reported as CAT (Clear Air Turbulence). Answer (A) is incorrect because convective turbulence is normally associated with cumuliform clouds and is reported as turbulence. Answer (B) is incorrect because turbulence above 15,000 feet AGL, not associated with clouds, is termed clear air turbulence, not high altitude turbulence.",
    reference: "AIM 7-1-24 - PIREPs Relating to Turbulence",
  },
  {
    id: 30,
    subject: "FAA ATP",
    system: "Weather",
    q: "Frozen dew is",
    options: ["white and opaque.", "hard and opaque.", "hard and transparent."],
    answer: 2,
    explain:
      "Frost forms in much the same way as dew. The difference is that the dew point of surrounding air must be colder than freezing. Water vapor then sublimates directly as ice crystals or frost rather than condensing as dew. Sometimes dew forms and later freezes; however, frozen dew is easily distinguished from frost. Frozen dew is hard and transparent while frost is white and opaque.",
    reference: "AC 00-6 - Aviation Weather, Frost",
  },
  {
    id: 31,
    subject: "FAA ATP",
    system: "Weather",
    q: "What feature is normally associated with the cumulus stage of a thunderstorm?",
    options: ["Beginning of rain at the surface.", "Frequent lightning.", "Continuous updraft."],
    answer: 2,
    explain:
      "The key feature of the cumulus stage is a continuous updraft. Answer (A) is incorrect because the beginning of rain at a surface marks the beginning of the mature stage. Answer (B) is incorrect because frequent lightning occurs after the downdrafts have developed and produce the static electricity which causes lighting.",
    reference: "AC 00-6 - Aviation Weather, Thunderstorm Life Cycle",
  },
  {
    id: 32,
    subject: "FAA ATP",
    system: "Weather",
    q: "A steady state thunderstorm is associated with",
    options: ["surface heating.", "weather systems.", "mature stage."],
    answer: 1,
    explain:
      "Steady state thunderstorms usually are associated with weather systems. Fronts, converging winds, and troughs aloft force upward motion spawning these storms which often form into squall lines. Afternoon heating intensifies them.",
    reference: "AC 00-6 - Aviation Weather, Thunderstorm Types",
  },
  {
    id: 33,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which action is recommended regarding an altitude change to get out of jetstream turbulence?",
    options: [
      "Descend if ambient temperature is falling.",
      "Descend if ambient temperature is rising.",
      "Maintain altitude if ambient temperature is not changing.",
    ],
    answer: 0,
    explain:
      "If you want to traverse an area of CAT more quickly, watch the temperature gauge for a minute or two. If the temperature is rising-climb; if the temperature is falling-descend. Application of these rules will prevent you from following the sloping tropopause and staying in the turbulent area. If the temperature remains constant, the flight is probably close to the level of the core, so either climb or descend as convenient. Answer (B) is incorrect because to get out of jet stream turbulence with a rising ambient temperature you would climb, not descend. Answer (C) is incorrect because you would need to make an altitude change due to jet stream turbulence, and there should be a temperature change due to a sloping tropopause.",
    reference: "AC 00-6 - Aviation Weather, Jet Stream Turbulence",
  },
  {
    id: 34,
    subject: "FAA ATP",
    system: "Weather",
    q: "The U.S. Low-Level Significant Weather Prognostic Chart depicts weather conditions",
    options: [
      "that are forecast to exist at a specific time shown on the chart.",
      "as they existed at the time the chart was prepared.",
      "that are forecast to exist 6 hours after the chart was prepared.",
    ],
    answer: 0,
    explain:
      "The Low-Level Prognostic Chart depicts weather conditions that are forecast to exist at a specific time shown on the chart. Answer (B) is incorrect because prognostic charts forecast conditions, not report observed conditions (as the Weather Depiction Chart does). Answer (C) is incorrect because Low-Level Prognostic Charts forecast conditions 12 and 24 hours (not 6 hours) after the time of issuance.",
    reference: "AC 00-45 - Aviation Weather Services, Low-Level Significant Weather Prognostic Chart",
  },
  {
    id: 35,
    subject: "FAA ATP",
    system: "Weather",
    q: "The threshold wind speed in the jet stream for clear air turbulence is generally considered to be",
    options: ["100 kts.", "110 kts.", "120 kts."],
    answer: 1,
    explain:
      "The threshold wind speed in the jet stream for CAT is generally considered to be 110 knots. Wind speed in jet streams can be much stronger than 110 knots and the probability of encountering CAT increases proportionally with the wind speed and the wind shear it generates. It is not the wind speed itself that causes CAT; it is the wind shear or difference in wind speed from one level or point to another that causes the wave motion or overturning in the atmosphere that is turbulence to an aircraft.",
    reference: "AC 00-6 - Aviation Weather, Jet Stream Turbulence",
  },
  {
    id: 36,
    subject: "FAA ATP",
    system: "Weather",
    q: 'The symbol ($) at the end of the following METAR indicates that\nMETAR KFSM 131756Z AUTO 00000KT M1/4SM R25/0600V1000FT -RA FG VV004 06/05 A2989 RMK AO2 $',
    options: [
      "the latest information is transmitted over a discrete VHF frequency at KFSM.",
      "the latest information is broadcast on the voice portion of a local navaid at KFSM.",
      "maintenance is needed on the system.",
    ],
    answer: 2,
    explain: "The dollar symbol ($) indicates the system may need maintenance.",
    reference: "AC 00-45 - Aviation Weather Services, METAR",
  },
  {
    id: 37,
    subject: "FAA ATP",
    system: "Weather",
    q: "All ATC facilities using radar weather processors with the ability to determine precipitation intensities will describe the intensity as",
    options: [
      "light, moderate, heavy, intense, extreme, or severe.",
      "light, moderate, heavy, extreme, severe.",
      "light, moderate, heavy, extreme.",
    ],
    answer: 2,
    explain:
      "All ATC facilities using radar weather processors with the ability to determine precipitation intensity describes the intensity to pilots as: LIGHT (< 30 dBZ), MODERATE (30 to 40 dBZ), HEAVY (>40 to 50 dBZ), or EXTREME (>50 dBZ).",
    reference: "AIM 7-1-13 - ATC Radar Weather Displays",
  },
  {
    id: 38,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which type storms are most likely to produce funnel clouds or tornadoes?",
    options: [
      "Air mass thunderstorms.",
      "Cold front or squall line thunderstorms.",
      "Storms associated with icing and supercooled water.",
    ],
    answer: 1,
    explain:
      "Tornadoes occur with isolated thunderstorms at times, but much more frequently, they form with steady-state thunderstorms associated with cold fronts or squall lines. Answer (A) is incorrect because even though air mass thunderstorms may produce funnel clouds or tornadoes, they are most likely to occur with steady-state thunderstorms. Answer (C) is incorrect because all thunderstorms that have updrafts and carry water above the freezing level can produce icing and supercooled water. But thunderstorms associated with cold fronts and squall lines are most likely to produce funnel clouds or tornadoes.",
    reference: "AC 00-6 - Aviation Weather, Thunderstorms and Tornadoes",
  },
  {
    id: 39,
    subject: "FAA ATP",
    system: "Weather",
    q: "What sources reflect the most accurate information on current and forecast icing conditions?",
    options: [
      "Low-Level Sig Weather Prog Chart, RADATs, and the Area Forecast.",
      "PIREPs, Area Forecast, and the Freezing Level Chart.",
      "AIRMET Zulu.",
    ],
    answer: 2,
    explain:
      "AIRMET Zulu describes moderate icing and provides freezing level heights. Answer (A) is incorrect because Low-Level Sig Weather Prog Charts do not forecast icing conditions but do forecast freezing levels. Answer (B) is incorrect because although the Freezing Level Panel of the Composite Moisture Stability Chart gives you the lowest observed freezing level, it does not indicate the presence of clouds or precipitation, which must be present for icing to occur.",
    reference: "AC 00-45 - Aviation Weather Services, AIRMET",
  },
  {
    id: 40,
    subject: "FAA ATP",
    system: "Weather",
    q: "The tropopause is generally found when the free air temperatures are",
    options: ["between -55degC and -65degC.", "between -40degC and -55degC.", "colder than -60degC."],
    answer: 0,
    explain:
      "In the absence of other information, the tropopause will generally have a temperature of between -55degC and -65degC.",
    reference: "AC 00-6 - Aviation Weather, The Tropopause",
  },
  {
    id: 41,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which type cloud is associated with violent turbulence and a tendency toward the production of funnel clouds?",
    options: ["Cumulonimbus mammatus.", "Standing lenticular.", "Stratocumulus."],
    answer: 0,
    explain:
      "Frequently, cumulonimbus mammatus clouds occur in connection with violent thunderstorms and tornadoes. Answer (B) is incorrect because standing lenticular clouds mark mountain waves that are the product of stable air flowing over an obstruction. Answer (C) is incorrect because stratocumulus sometimes form from the breaking up of stratus or the spreading out of cumulus, and they are associated with some turbulence and possible icing at subfreezing levels.",
    reference: "AC 00-6 - Aviation Weather, Cloud Types",
  },
  {
    id: 42,
    subject: "FAA ATP",
    system: "Weather",
    q: "What weather difference is found on each side of a 'dry line'?",
    options: ["Extreme temperature difference.", "Dewpoint difference.", "Stratus versus cumulus clouds."],
    answer: 1,
    explain:
      "A dewpoint front or 'dry line' is formed when two air masses of similar density and temperature meet. Except for the moisture differences, there is little contrast across the front. Answer (A) is incorrect because except for moisture (not extreme temperature) difference, there is seldom any significant air mass contrast across the 'dry line.' Answer (C) is incorrect because the side with moisture may have clouds, while generally clear skies mark the dry side.",
    reference: "AC 00-6 - Aviation Weather, Dry Line",
  },
  {
    id: 43,
    subject: "FAA ATP",
    system: "Weather",
    q: "If squalls are reported at the destination airport, what wind conditions existed at the time?",
    options: [
      "Sudden increases in windspeed of at least 15 knots, to a sustained wind speed of 20 knots, lasting for at least 1 minute.",
      "A sudden increase in wind speed of at least 16 knots, the speed rising to 22 knots or more for 1 minute or longer.",
      "Rapid variation in wind direction of at least 20° and changes in speed of at least 10 knots between peaks and lulls.",
    ],
    answer: 1,
    explain:
      "A squall (SQ) is a sudden increase in wind speed of at least 16 knots, the speed rising to 22 knots or more and lasting at least 1 minute.",
    reference: "AC 00-45 - Aviation Weather Services, METAR",
  },
  {
    id: 44,
    subject: "FAA ATP",
    system: "Weather",
    q: "Where do the maximum winds associated with the jetstream usually occur?",
    options: [
      "In the vicinity of breaks in the tropopause on the polar side of the jet core.",
      "Below the jet core where a long straight stretch of the jetstream is located.",
      "On the equatorial side of the jetstream where moisture has formed cirriform clouds.",
    ],
    answer: 0,
    explain:
      "Maximum winds in a jet stream occur near a break in the tropopause and on the polar side. Answer (B) is incorrect because in the jet stream, the maximum winds are found in, not below, the core. Answer (C) is incorrect because when moisture is available, cirriform clouds will form on the upward motion of air of the jet stream on the equatorial side. This will occur in the slower moving side of the jet stream.",
    reference: "AC 00-6 - Aviation Weather, Jet Stream",
  },
  {
    id: 45,
    subject: "FAA ATP",
    system: "Weather",
    q: "What feature is associated with a temperature inversion?",
    options: ["A stable layer of air.", "An unstable layer of air.", "Air mass thunderstorms."],
    answer: 0,
    explain:
      "A temperature inversion is defined as an increase in temperature with increasing altitude, or a negative temperature lapse rate. Stable air masses have a low or negative lapse rate. Answer (B) is incorrect because instability occurs when the temperature decreases (not increases as in a temperature inversion) with an increase in altitude, and the rising air continues to rise. Answer (C) is incorrect because air mass thunderstorms result from instability. They do not occur when there is a temperature inversion.",
    reference: "AC 00-6 - Aviation Weather, Temperature Inversions",
  },
  {
    id: 46,
    subject: "FAA ATP",
    system: "Weather",
    q: "Shear turbulence from a thunderstorm has been encountered",
    options: ["10 miles from the severe thunderstorm.", "15 miles from the severe thunderstorm.", "20 miles from the severe thunderstorm."],
    answer: 2,
    explain:
      "Hazardous turbulence is present in all thunderstorms; and in a severe thunderstorm, it can damage an airframe. Strongest turbulence within the cloud occurs with shear between updrafts and downdrafts. Outside the cloud, shear turbulence has been encountered several thousand feet above and 20 miles laterally from a severe storm.",
    reference: "AC 00-6 - Aviation Weather, Thunderstorm Turbulence",
  },
  {
    id: 47,
    subject: "FAA ATP",
    system: "Weather",
    q: "Weather conditions expected to occur in the vicinity of the airport, but not at the airport, are denoted by the letters 'V(C).' When V(C) appears in a Terminal Aerodrome Forecast, it covers a geographical area of",
    options: [
      "a 5 to 10 statute mile radius from the airport.",
      "a 5-mile radius of the center of a runway complex.",
      "10 miles of the station originating the forecast.",
    ],
    answer: 0,
    explain:
      "Proximity applies to weather conditions expected to occur in the vicinity of the airport (between a 5 to 10 mile radius of the airport), but not at the airport itself. It is denoted by the letters 'V(C).'",
    reference: "AC 00-45 - Aviation Weather Services, Terminal Aerodrome Forecast (TAF)",
  },
  {
    id: 48,
    subject: "FAA ATP",
    system: "Weather",
    q: "A calm wind that is forecast, in the International Terminal Aerodrome Forecast (TAF), is encoded as",
    options: ["VRB00KT.", "00000KT.", "00003KT."],
    answer: 1,
    explain: "A forecast of '00000KT' (calm) on a TAF means winds are expected at 3 knots or less.",
    reference: "AC 00-45 - Aviation Weather Services, Terminal Aerodrome Forecast (TAF)",
  },
  {
    id: 49,
    subject: "FAA ATP",
    system: "Weather",
    q: "What is the result when water vapor changes to the liquid state while being lifted in a thunderstorm?",
    options: [
      "Latent heat is released to the atmosphere.",
      "Latent heat is transformed into pure energy.",
      "Latent heat is absorbed from the surrounding air by the water droplet.",
    ],
    answer: 0,
    explain:
      "When water vapor condenses to liquid water or sublimates directly to ice, energy originally used in the evaporation reappears as heat and is released to the atmosphere. This energy is 'latent heat.' Answer (B) is incorrect because latent heat cannot create pure energy. Latent heat is returned to the surrounding atmosphere. Answer (C) is incorrect because this is the process of latent heat in vaporization, which is changing liquid water to vapor.",
    reference: "AC 00-6 - Aviation Weather, Latent Heat",
  },
  {
    id: 50,
    subject: "FAA ATP",
    system: "Weather",
    q: "Maximum turbulence potential charts (GTG-2) are issued",
    options: ["every morning at 0400.", "two times a day.", "hourly."],
    answer: 2,
    explain:
      "The Graphical Turbulence Guidance (GTG-2) graphics are computer-generated four-dimensional forecasts of information related to the likelihood of encountering Clear Air Turbulence (CAT) associated with upper-level fronts and jet streams. The GTG-2 product consists of a 00, 01, 02, and 03 hour forecast, which are updated every hour, and a 06, 09, and 12 hour forecast, which are updated every three hours, starting at 00Z. GTG-2 graphics are 'snapshot' graphics, intended to depict forecasted clear air turbulence conditions at the valid time (for example, at 1200Z), not for a valid time range (for example, from 1200Z to 1300Z).",
    reference: "AC 00-45 - Aviation Weather Services, Graphical Turbulence Guidance (GTG)",
  },
  {
    id: 51,
    subject: "FAA ATP",
    system: "Weather",
    q: "How does Coriolis force affect wind direction in the Southern Hemisphere?",
    options: [
      "Causes clockwise rotation around a low.",
      "Causes wind to flow out of a low toward a high.",
      "Has exactly the same effect as in the Northern Hemisphere.",
    ],
    answer: 0,
    explain:
      "Coriolis force deflects air flow to the right causing winds above the friction level to flow parallel to the isobars. In the northern hemisphere, winds flow clockwise around high-pressure areas and counterclockwise around low-pressure areas. In the southern hemisphere, Coriolis force causes a counterclockwise flow around highs and a clockwise flow around lows. Answer (B) is incorrect because the wind flows from a high to a low (not a low to a high) in both the northern and southern hemispheres. Answer (C) is incorrect because the Coriolis force deflects air to the left in the southern hemisphere, which is the opposite effect from the northern hemisphere.",
    reference: "AC 00-6 - Aviation Weather, Coriolis Force",
  },
  {
    id: 52,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which of the following weather conditions are conducive to in-flight icing?",
    options: [
      "Visible rain with temperatures below 0 degrees C.",
      "Visible rain with temperatures below 10 degrees C.",
      "Visible rain with temperatures below 5 degrees C.",
    ],
    answer: 0,
    explain:
      "The following weather conditions may be conducive to severe in-flight icing: visible rain at temperatures below 0 degrees C ambient air temperature; droplets that splash or splatter on impact at temperatures below 0 degrees C ambient air temperature.",
    reference: "AC 00-6 - Aviation Weather, In-Flight Icing",
  },
  {
    id: 53,
    subject: "FAA ATP",
    system: "Weather",
    q: "You are planning a flight to a coastal area which is currently below published weather minimums for the ILS approach due to fog. The winds are forecast to increase to 20 knots from the west at your scheduled arrival time. What weather should you expect?",
    options: ["Surface ice.", "Advection fog thickening as the winds increase to 20 knots.", "A low layer of stratus or stratocumulus clouds."],
    answer: 2,
    explain:
      "Advection fog is most common along coastal areas and will develop into a layer of stratus of stratocumulus clouds with wind speeds in excess of 15 knots.",
    reference: "AC 00-6 - Aviation Weather, Advection Fog",
  },
  {
    id: 54,
    subject: "FAA ATP",
    system: "Weather",
    q: "Where is a common location for an inversion?",
    options: ["At the tropopause.", "In the stratosphere.", "At the base of cumulus clouds."],
    answer: 1,
    explain:
      "Inversions are common in the stratosphere. Answer (A) is incorrect because a common location for an inversion is in the stratosphere, not at the tropopause. Answer (C) is incorrect because the base of cumulus clouds is where the dewpoint lapse rate and the dry adiabatic lapse rate converge. It is not a common location for an inversion.",
    reference: "AC 00-6 - Aviation Weather, Temperature Inversions",
  },
  {
    id: 55,
    subject: "FAA ATP",
    system: "Weather",
    q: "Convective clouds which penetrate a stratus layer can produce which threat to instrument flight?",
    options: ["Freezing rain.", "Clear air turbulence.", "Embedded thunderstorms."],
    answer: 2,
    explain:
      "A layer of stratiform clouds may sometimes form in a mildly stable layer while a few convective clouds penetrate the layer thus merging stratiform with cumuliform. Under the right conditions, the cumuliform clouds can become thunderstorms which are completely obscured by the surrounding stratus clouds. Answer (A) is incorrect because the formation of freezing rain is dependent on rain falling through colder air. Convective clouds that penetrate a stratus layer may or may not produce precipitation. Answer (B) is incorrect because clear air turbulence is turbulence encountered in air where no clouds are present.",
    reference: "AC 00-6 - Aviation Weather, Embedded Thunderstorms",
  },
  {
    id: 56,
    subject: "FAA ATP",
    system: "Weather",
    q: "The Hazardous Inflight Weather Advisory Service (HIWAS) is a continuous broadcast over selected VORs of",
    options: [
      "SIGMETs, CONVECTIVE SIGMETs, AIRMETs, Severe Weather Forecast Alerts (AWW), and Center Weather Advisories (CWA).",
      "SIGMETs, CONVECTIVE SIGMETs, AIRMETs, Wind Shear Advisories, and Severe Weather Forecast Alerts (AWW).",
      "Wind Shear Advisories, Radar Weather Reports, SIGMETs, CONVECTIVE SIGMETs, AIRMETs, and Center Weather Advisories (CWA).",
    ],
    answer: 0,
    explain:
      "HIWAS broadcasts include SIGMETs, Convective SIGMETs, AIRMETs, Severe Weather Forecast Alerts, and Center Weather Advisories.",
    reference: "AIM 7-1-11 - Hazardous Inflight Weather Advisory Service (HIWAS)",
  },
  {
    id: 57,
    subject: "FAA ATP",
    system: "Weather",
    q: "METAR KMAF 131756Z 02020KT 12SM BKN025 OVC250 27/18 A3009 RMK RAE44.\nWhich weather condition is indicated by this METAR report at Midland (KMAF)?",
    options: [
      "Rain of unknown intensity ended 16 minutes before the hour.",
      "The ceiling was at 25,000 feet MSL.",
      "Wind was 020° magnetic at 20 knots.",
    ],
    answer: 0,
    explain:
      "'RAE44' indicates the rain ended 44 minutes past the hour, which is the same thing as 16 minutes before the hour. Answer (B) is incorrect because a ceiling is the lowest broken or overcast layer. 'BKN025' indicates a broken layer (not a ceiling) at 2,500 feet. The base of the higher overcast layer is at 25,000 feet above the station (not sea level). Answer (C) is incorrect because the winds are 020° true at 20 knots.",
    reference: "AC 00-45 - Aviation Weather Services, METAR",
  },
  {
    id: 58,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which term applies when the temperature of the air changes by compression or expansion with no heat added or removed?",
    options: ["Katabatic.", "Advection.", "Adiabatic."],
    answer: 2,
    explain:
      "When air expands, it cools; and when compressed, it warms. These changes are adiabatic, meaning that no heat is removed from or added to the air. Answer (A) is incorrect because katabatic is a wind blowing down an incline caused by cold, heavier air spilling down the incline displacing warmer, less dense air. Answer (B) is incorrect because advection is the horizontal flow in a convective current, i.e., wind.",
    reference: "AC 00-6 - Aviation Weather, Adiabatic Process",
  },
  {
    id: 59,
    subject: "FAA ATP",
    system: "Weather",
    q: "A station is forecasting wind and temperature aloft to be 280° at 205 knots; temperature -51°C at FL390. How would this data be encoded in the FD?",
    options: ["7800-51.", "789951", "280051"],
    answer: 1,
    explain:
      "FB forecasts of wind speeds from 100 knots through 199 knots have 50 added to the wind direction code and 100 subtracted from the speed. Winds over 200 knots are coded as 199 knots. A wind of 280° at 205 knots with a temperature of -51°C is coded as '789951.' Answer (A) is incorrect because it indicates wind at 280° at 100 knots. The minus sign is to be omitted above 24,000 feet MSL. Answer (C) is incorrect because if the wind is 0 knots, the direction and wind group is coded '9900.'",
    reference: "AC 00-45 - Aviation Weather Services, Winds and Temperatures Aloft Forecast (FD/FB)",
  },
  {
    id: 60,
    subject: "FAA ATP",
    system: "Weather",
    q: "Maximum downdrafts in a microburst encounter may be as strong as",
    options: ["8,000 ft/min.", "7,000 ft/min.", "6,000 ft/min."],
    answer: 2,
    explain:
      "The downdrafts can be as strong as 6,000 feet per minute. Horizontal winds near the surface can be as strong as 45 knots resulting in a 90-knot shear across the microburst.",
    reference: "AC 00-54 - Pilot Windshear Guide",
  },
  {
    id: 61,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which type weather conditions are covered in the Convective SIGMET?",
    options: [
      "Embedded thunderstorms, lines of thunderstorms, and thunderstorms with 3/4-inch hail or tornadoes.",
      "Cumulonimbus clouds with tops above the tropopause and thunderstorms with 1/2-inch hail or funnel clouds.",
      "Any thunderstorm with a severity level of VIP 2 or more.",
    ],
    answer: 0,
    explain:
      "Convective SIGMET forecast: 1. Severe thunderstorms which have either surface winds greater than 50 knots, hail equal to or greater than 3/4 inches in diameter, or tornadoes; 2. Embedded thunderstorms; 3. Lines of thunderstorms; or 4. Thunderstorms equal to or greater than VIP level 4 affecting 40% or more of an area at least 3,000 square miles. Answer (B) is incorrect because cumulonimbus clouds with tops above the tropopause is not a weather condition covered in a Convective SIGMET. Answer (C) is incorrect because thunderstorms must be at least VIP level 4.",
    reference: "AC 00-45 - Aviation Weather Services, Convective SIGMET",
  },
  {
    id: 62,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which weather condition is defined as an anti-cyclone?",
    options: ["Calm.", "High pressure area.", "COL."],
    answer: 1,
    explain:
      "The clockwise flow of air around a high-pressure area in the northern hemisphere is called an anticyclone. Answer (A) is incorrect because calm is defined as the absence of wind or of apparent motion of the air. Answer (C) is incorrect because COL is the neutral area between two highs or two lows. It is also the intersection of a trough and a ridge.",
    reference: "AC 00-6 - Aviation Weather, Pressure Systems",
  },
  {
    id: 63,
    subject: "FAA ATP",
    system: "Weather",
    q: "METAR KFSO 031053Z VRB02KT 7SM MIFG SKC 15/14 A3012 RMK SLP993 6///// T01500139 56012\nIn the above METAR, the SLP993 6//// indicates",
    options: [
      "sea-level pressure 999.3 hectopascals which in the last 6 hours has dropped .4 hectopascals.",
      "sea-level pressure 999.3 hectopascals and an indeterminable amount of precipitation has occurred over the last 3 hours.",
      "sea-level pressure 999.3 hectopascals and in the last 6 hours that four-tenths of an inch of precipitation has fallen.",
    ],
    answer: 1,
    explain:
      "The 'SLP993 6/////' in the Remarks section of the METAR indicates sea-level pressure 999.3 hectopascals and an indeterminable amount of precipitation has occurred over the last 3 hours.",
    reference: "AC 00-45 - Aviation Weather Services, METAR",
  },
  {
    id: 64,
    subject: "FAA ATP",
    system: "Weather",
    q: "SPECI KGLS 131802Z 10012G21KT 060V140 2SM +SHRA SCT005 BKN035 OVC050CB 24/23 A2980 RMK RAB57 WS TKO RW09L WSHFT 58 FROPA.\nThis SPECI report at Galveston (KGLS) indicates which condition?",
    options: [
      "Wind steady at 100° magnetic at 12 knots, gusts to 21.",
      "Precipitation started at 1757.",
      "5,000 feet overcast with towering cumulus.",
    ],
    answer: 1,
    explain:
      "The remarks 'RAB57' indicates rain began at 57 minutes past the hour. Answer (A) is incorrect because '10012G21KT 060V140' indicates the wind was from 100° at 12 knots with gusts to 21 knots; however, the wind direction was variable from 60-140°, and wind direction in written reports and forecasts are referenced to true north. Answer (C) is incorrect because 'OVC050CB' indicates there was an overcast cumulonimbus cloud at 5,000 feet. Towering cumulus is abbreviated 'TCU.'",
    reference: "AC 00-45 - Aviation Weather Services, METAR",
  },
  {
    id: 65,
    subject: "FAA ATP",
    system: "Weather",
    q: "Large areas of land",
    options: ["tend to increase temperature variations.", "do not influence the troposhere.", "minimize temperature variations."],
    answer: 0,
    explain: "Land and water surfaces underlying the atmosphere greatly affect cloud and precipitation development.",
    reference: "AC 00-6 - Aviation Weather, Air Masses",
  },
  {
    id: 66,
    subject: "FAA ATP",
    system: "Weather",
    q: "What condition is indicated when ice pellets are encountered during flight?",
    options: ["Thunderstorms at higher levels.", "Freezing rain at higher levels.", "Snow at higher levels."],
    answer: 1,
    explain:
      "Rain or drizzle is always formed in temperatures which are above freezing. Rain falling through colder air may become supercooled, freezing on impact as freezing rain. As it continues to fall in the freezing temperature, it will form into ice pellets. Answer (A) is incorrect because ice pellets always indicate freezing rain, not thunderstorms, at higher altitudes. Answer (C) is incorrect because freezing rain, not snow, is indicated at higher altitude when ice pellets are encountered.",
    reference: "AC 00-6 - Aviation Weather, Ice Pellets",
  },
  {
    id: 67,
    subject: "FAA ATP",
    system: "Weather",
    q: "Which is a definition of 'severe wind shear'?",
    options: [
      "Any rapid change of horizontal wind shear in excess of 25 knots; vertical shear excepted.",
      "Any rapid change in wind direction or velocity which causes airspeed changes greater than 15 knots or vertical speed changes greater than 500 ft/min.",
      "Any change of airspeed greater than 20 knots which is sustained for more than 20 seconds or vertical speed changes in excess of 100 ft/min.",
    ],
    answer: 1,
    explain:
      "Severe wind shear is defined as any rapid change in wind direction or velocity which causes airspeed changes greater than 15 knots or vertical speed changes greater than 500 feet per minute. Answer (A) is incorrect because a severe wind shear can be caused by both horizontal and vertical shears. Answer (C) is incorrect because a severe wind shear causes airspeed changes greater than 15 knots or vertical speed changes greater than 500 fpm.",
    reference: "AC 00-54 - Pilot Windshear Guide",
  },
  {
    id: 68,
    subject: "FAA ATP",
    system: "Weather",
    q: "A cyclone is",
    options: [
      "a hurricane force storm in the Indian Ocean.",
      "a tropical depression with sustained winds of 63 knots.",
      "a tropical depression with a barometric pressure in the center of the feature that is 35 mb lower than pressure outside the weather feature.",
    ],
    answer: 0,
    explain:
      "The low pressure and its wind system is a cyclone. Strong tropical cyclones are known by different names in different regions of the world. A tropical cyclone in the Atlantic and eastern Pacific is a 'hurricane'; in the western Pacific, 'typhoon'; near Australia, 'willy-willy'; and in the Indian Ocean, simply 'cyclone.'",
    reference: "AC 00-45 - Aviation Weather Services, Tropical Weather",
  },
  {
    id: 69,
    subject: "FAA ATP",
    system: "Weather",
    q: "What is a characteristic of the troposphere?",
    options: [
      "It contains all the moisture of the atmosphere.",
      "There is an overall decrease of temperature with an increase of altitude.",
      "The average altitude of the top of the troposphere is about 6 miles.",
    ],
    answer: 1,
    explain:
      "The troposphere is the layer of atmosphere from the surface to an average altitude of 7 miles. It is characterized by an overall decrease of temperature with increasing altitude. Answer (A) is incorrect because moisture can be found in the stratosphere, as evidenced by some of the largest thunderstorms. Answer (C) is incorrect because the average altitude of the top of the troposphere is about 7 miles.",
    reference: "AC 00-6 - Aviation Weather, Atmospheric Composition",
  },
];
