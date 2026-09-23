import type { Question } from "../../../types";

// FAA ATP written-test question bank, batch 10.
// Source: Prepware "Study Session Results" printout, source questions 688-750
// (PDF pages 136-151 of 258).
// This page range mixes more figure-dependent performance/CG-chart questions
// with a large run of self-contained pallet floor-load-limit arithmetic
// problems (all data given in the question stem, no chart needed), plus a
// handful of general IFR/ATC procedures questions. Introduces a new system,
// "Weight & Balance," for the pallet load-limit and CG computation
// questions. Skipped original source numbers: 688, 689, 690, 692, 693, 694,
// 695, 696, 697, 698, 699, 700, 701, 702, 704, 705, 706, 707, 708, 713, 720,
// 724, 725, 729, 732, 739, 740, 741, 742 (duplicate of 734), 743, and 747.
export const FAA_ATP_BATCH_10_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Which operational requirement must be observed by a commercial operator when ferrying a large, three-engine, turbojet-powered airplane from one facility to another to repair an inoperative engine?",
    options: [
      "The computed takeoff distance to reach V(1) must not exceed 70 percent of the effective runway length.",
      "The existing and forecast weather for departure, en route, and approach must be VFR.",
      "No passengers may be carried.",
    ],
    answer: 2,
    explain:
      "A commercial operator of large aircraft may conduct a ferry flight of a four-engine airplane or a turbine-engine-powered, three-engine airplane with one engine inoperative, to a base for the purpose of repairing the engine. Several restrictions apply to such flights. These include: 1. The Airplane Flight Manual must include procedures and performance data which allow for the safe operation of such a flight. 2. The initial climb cannot be over thickly-populated areas. 3. Weather conditions at the takeoff and destination airports must be VFR. 4. Only required flight crewmembers may be on board the aircraft. Answer (A) is incorrect because runway length allowing V(1) in less than 70% of the runway is not required for ferry flights with one engine inoperative. Answer (B) is incorrect because the weather conditions must be VFR only for takeoff and landing.",
    reference: "14 CFR 121.197",
  },
  {
    id: 2,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "Which speed symbol indicates the maximum operating limit speed for an airplane?",
    options: ["V(LE).", "V(MO)/M(MO).", "V(LO)/M(LO)."],
    answer: 1,
    explain:
      "V(MO) / M(MO) - maximum operating limit speed. Answer (A) is incorrect because V(LE) is maximum landing gear extended speed. Answer (C) is incorrect because V(LO)/M(LO) is the maximum speed for operating the landing gear.",
    reference: "14 CFR 1.2 - V-Speed Definitions",
  },
  {
    id: 3,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "What is the best method of speed reduction if hydroplaning is experienced on landing?",
    options: [
      "Apply full main wheel braking only.",
      "Apply nosewheel and main wheel braking alternately and abruptly.",
      "Apply aerodynamic braking to the fullest advantage.",
    ],
    answer: 2,
    explain:
      "Since occurrence of dynamic hydroplaning is related to speed, it is prudent to slow the aircraft with spoilers, reverse thrust, etc., as much as possible prior to applying the brakes. Answer (A) is incorrect because applying full main wheel braking may increase or compound the problems associated with hydroplaning. If any brakes are used, a pumping or modulating motion like an antiskid system can be used. Aerodynamic braking is recommended. Answer (B) is incorrect because abrupt use of either the nose wheel or main wheel brakes will lock the wheels and compound the problem.",
    reference: "FAA Airplane Flying Handbook - Hydroplaning",
  },
  {
    id: 4,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "For which of these aircraft is the 'clearway' for a particular runway considered in computing takeoff weight limitations?",
    options: [
      "Those passenger-carrying transport aircraft certificated between August 26, 1957 and August 30, 1959.",
      "Turbine-engine-powered transport airplanes certificated after September 30, 1958.",
      "U.S. certified air carrier airplanes certificated after August 29, 1959.",
    ],
    answer: 1,
    explain:
      "'Clearway' may be considered when determining the takeoff distance of turbine-engine-powered transport category airplane certificated after August 29, 1959. Answer (A) is incorrect because the passenger-carrying transport aircraft and air carrier airplane would have to be turbine-engine-powered in order to include the clearway in determining runway length for takeoff purposes. Answer (C) is incorrect because the passenger-carrying transport aircraft and air carrier airplane would have to be turbine-engine-powered in order to include the clearway in determining runway length for takeoff purposes.",
    reference: "14 CFR 25 - Clearway",
  },
  {
    id: 5,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the minimum floor load limit that an aircraft must have to carry the following pallet of cargo? Pallet dimensions are 116.8 x 87.7 inches. Pallet weight - 137 lbs. Tiedown devices - 49 lbs. Cargo weight - 12,262.4 lbs.",
    options: ["172 lbs/sq ft.", "176 lbs/sq ft.", "179 lbs/sq ft."],
    answer: 1,
    explain:
      "1. Determine the area. 116.8 x 87.7 ÷ 144 = 71.13 sq ft. 2. Determine the total weight. 12,262.4 + 49 + 137 = 12,448.4. 3. Determine the minimum floor load limit. 12,448.4 ÷ 71.13 = 175.00 lbs/sq ft.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 6,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 138.5 x 97.6 inches? Floor load limit - 235 lb/sq ft. Pallet weight - 219 lb. Tiedown devices - 71 lb.",
    options: ["21,840.9 pounds.", "21,769.9 pounds.", "22,059.9 pounds."],
    answer: 1,
    explain:
      "1. Determine the area. 138.5 x 97.6 ÷ 144 = 93.87 square feet. 2. Determine the floor load limit. 93.87 x 235 = 22,059.97 pounds. 3. Subtract the weight of the pallet and tiedown devices. 22,059.97 - 290 = 21,769.97 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 7,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the minimum floor load limit that an aircraft must have to carry the following pallet of cargo? Pallet dimensions are 48.5 x 33.5 inches. Pallet weight - 44 lbs. Tiedown devices - 27 lbs. Cargo weight - 786.5 lbs.",
    options: ["79 lbs/sq ft.", "76 lbs/sq ft.", "73 lbs/sq ft."],
    answer: 1,
    explain:
      "1. Determine the area. 48.5 x 33.5 ÷ 144 = 11.28 sq ft. 2. Determine the total weight. 786.5 + 27 + 44 = 857.5. 3. Determine the minimum floor load limit. 857.5 ÷ 11.28 = 76.00 lbs/sq ft.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 8,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 42.6 x 48.7 inches? Floor load limit - 121 lb/sq ft. Pallet weight - 47 lb. Tiedown devices - 33 lb.",
    options: ["1,710.2 pounds.", "1,663.2 pounds.", "1,696.2 pounds."],
    answer: 1,
    explain:
      "1. Determine the area. 42.6 x 48.7 ÷ 144 = 14.41 square feet. 2. Determine the floor load limit. 14.41 x 121 = 1,743.25 pounds. 3. Subtract the weight of the pallet and tiedown devices. 1,743.25 - 80 = 1,663.25 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 9,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 33.5 x 48.5 inches? Floor load limit - 76 lb/sq ft. Pallet weight - 44 lb. Tiedown devices - 27 lb.",
    options: ["857.4 pounds.", "830.4 pounds.", "786.5 pounds."],
    answer: 2,
    explain:
      "1. Determine the area. 33.5 x 48.5 ÷ 144 = 11.28 square feet. 2. Determine the floor load limit. 11.28 x 76 = 857.51 pounds. 3. Subtract the weight of the pallet and tiedown devices. 857.51 - 71 = 786.51 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 10,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 24.6 x 68.7 inches? Floor load limit - 79 lb/sq ft. Pallet weight - 43 lb. Tiedown devices - 27 lb.",
    options: ["884.1 pounds.", "857.1 pounds.", "841.1 pounds."],
    answer: 1,
    explain:
      "1. Determine the area. 24.6 x 68.7 ÷ 144 = 11.74 square feet. 2. Determine the floor load limit. 11.74 x 79 = 927.16 pounds. 3. Subtract the weight of the pallet and tiedown devices. 927.16 - 70 = 857.16 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 11,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 42.6 x 48.7 inches? Floor load limit - 117 lb/sq ft. Pallet weight - 43 lb. Tiedown devices - 31 lb.",
    options: ["1,611.6 pounds.", "1,654.6 pounds.", "1,601.6 pounds."],
    answer: 0,
    explain:
      "1. Determine the area. 42.6 x 48.7 ÷ 144 = 14.41 square feet. 2. Determine the floor load limit. 14.41 x 117 = 1,685.63 pounds. 3. Subtract the weight of the pallet and tiedown devices. 1,685.63 - 74 = 1,611.63 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 12,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 143 x 125.2 inches? Floor load limit - 209 lb/sq ft. Pallet weight - 197 lb. Tiedown devices - 66 lb.",
    options: ["25,984.9 pounds.", "25,787.9 pounds.", "25,721.9 pounds."],
    answer: 2,
    explain:
      "1. Determine the area. 143 x 125.2 ÷ 144 = 124.33 square feet. 2. Determine the floor load limit. 124.33 x 209 = 25,985.09 pounds. 3. Subtract the weight of the pallet and tiedown devices. 25,985.09 - 263 = 25,722.09 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 13,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 96.1 x 133.3 inches? Floor load limit - 249 lb/sq ft. Pallet weight - 347 lb. Tiedown devices - 134 lb.",
    options: ["21,669.8 pounds.", "21,803.8 pounds.", "22,120.8 pounds."],
    answer: 0,
    explain:
      "1. Determine the area. 96.1 x 133.3 ÷ 144 = 88.96 square feet. 2. Determine the floor load limit. 88.96 x 249 = 22,150.85 pounds. 3. Subtract the weight of the pallet and tiedown devices. 22,150.85 - 481 = 21,669.85 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 14,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 76 x 74 inches? Floor load limit: 176 lbs/sq ft. Pallet weight: 77 lbs. Tiedown devices: 29 lbs.",
    options: ["6,767.8 pounds.", "6,873.7 pounds.", "6,796.8 pounds."],
    answer: 0,
    explain:
      "Pallet area = (76\" x 74\")/144 = 39.1 sq ft. Floor load limit = 39.1 sq ft x 176 lbs/sq ft = 6,873.8 lbs. Allowable weight = 6,873.8 lbs - 106 lbs = 6,767.8 lbs.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 15,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the minimum floor load limit that an aircraft must have to carry the following pallet of cargo? Pallet dimensions are 37.5 x 35 inches. Pallet weight - 34 lbs. Tiedown devices - 23 lbs. Cargo weight - 1,255.4 lbs.",
    options: ["152 lbs/sq ft.", "148 lbs/sq ft.", "144 lbs/sq ft."],
    answer: 2,
    explain:
      "1. Determine the area. 37.5 x 35 ÷ 144 = 9.12 sq ft. 2. Determine the total weight. 1,255.4 + 23 + 34 = 1,312.4. 3. Determine the minimum floor load limit. 1,312.4 ÷ 9.12 = 143.99 lbs/sq ft.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 16,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 24.6 x 68.7 inches? Floor load limit - 85 lb/sq ft. Pallet weight - 44 lb. Tiedown devices - 29 lb.",
    options: ["924.5 pounds.", "968.6 pounds.", "953.6 pounds."],
    answer: 0,
    explain:
      "1. Determine the area. 24.6 x 68.7 ÷ 144 = 11.74 square feet. 2. Determine the floor load limit. 11.74 x 85 = 997.58 pounds. 3. Subtract the weight of the pallet and tiedown devices. 997.58 - 73 = 924.58 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 17,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 81 x 83 inches? Floor load limit - 180 lbs/sq ft. Pallet weight - 82 lbs. Tiedown devices: 31 lbs.",
    options: ["8,403.7 pounds.", "8,321.8 pounds.", "8,290.8 pounds."],
    answer: 2,
    explain:
      "Pallet area = (81\" x 83\")/144 = 46.7 sq ft. Floor load limit = 46.7 sq ft x 180 lbs/sq ft = 8,403.8 lbs. Allowable weight = 8,403.8 lbs - 113 lbs = 8,290.8 lbs.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 18,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 98.7 x 78.9 inches? Floor load limit - 183 lb/sq ft. Pallet weight - 161 lb. Tiedown devices - 54 lb.",
    options: ["9,896.5 pounds.", "9,735.5 pounds.", "9,681.5 pounds."],
    answer: 2,
    explain:
      "1. Determine the area. 98.7 x 78.9 ÷ 144 = 54.08 square feet. 2. Determine the floor load limit. 54.08 x 183 = 9,896.53 pounds. 3. Subtract the weight of the pallet and tiedown devices. 9,896.53 - 215 = 9,681.53 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 19,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 36.5 x 48.5 inches? Floor load limit - 107 lb/sq ft. Pallet weight - 37 lb. Tiedown devices - 33 lb.",
    options: ["1,295.3 pounds.", "1,212.3 pounds.", "1,245.3 pounds."],
    answer: 2,
    explain:
      "1. Determine the area. 36.5 x 48.5 ÷ 144 = 12.29 square feet. 2. Determine the floor load limit. 12.29 x 107 = 1,315.39 pounds. 3. Subtract the weight of the pallet and tiedown devices. 1,315.39 - 70 = 1,245.39 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 20,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 36.5 x 48.5 inches? Floor load limit - 112 lb/sq ft. Pallet weight - 45 lb. Tiedown devices - 29 lb.",
    options: ["1,331.8 pounds.", "1,302.8 pounds.", "1,347.8 pounds."],
    answer: 1,
    explain:
      "1. Determine the area. 36.5 x 48.5 ÷ 144 = 12.29 square feet. 2. Determine the floor load limit. 12.29 x 112 = 1,376.86 pounds. 3. Subtract the weight of the pallet and tiedown devices. 1,376.86 - 74 = 1,302.86 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 21,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 34.6 x 46.4 inches? Floor load limit - 88 lb/sq ft. Pallet weight - 41 lb. Tiedown devices - 26 lb.",
    options: ["914.1 pounds.", "940.1 pounds.", "981.1 pounds."],
    answer: 0,
    explain:
      "1. Determine the area. 34.6 x 46.4 ÷ 144 = 11.15 square feet. 2. Determine the floor load limit. 11.15 x 88 = 981.10 pounds. 3. Subtract the weight of the pallet and tiedown devices. 981.10 - 67 = 914.10 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 22,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the minimum floor load limit that an aircraft must have to carry the following pallet of cargo? Pallet dimensions are 78.9 x 98.7 inches. Tiedown devices - 54 lbs. Pallet weight - 161 lbs. Cargo weight - 9,681.5 lbs.",
    options: ["180 lbs/sq ft.", "186 lbs/sq ft.", "183 lbs/sq ft."],
    answer: 2,
    explain:
      "1. Determine the area. 78.9 x 98.7 ÷ 144 = 54.08 sq ft. 2. Determine the total weight. 9,681.5 + 54 + 161 = 9,896.5. 3. Determine the minimum floor load limit. 9,896.5 ÷ 54.08 = 183.00 lbs/sq ft.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 23,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 87.7 x 116.8 inches? Floor load limit - 175 lb/sq ft. Pallet weight - 137 lb. Tiedown devices - 49 lb.",
    options: ["12,262.4 pounds.", "12,448.4 pounds.", "12,311.4 pounds."],
    answer: 0,
    explain:
      "1. Determine the area. 87.7 x 116.8 ÷ 144 = 71.13 square feet. 2. Determine the floor load limit. 71.13 x 175 = 12,448.52 pounds. 3. Subtract the weight of the pallet and tiedown devices. 12,448.52 - 186 = 12,262.52 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 24,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 33.5 x 48.5 inches? Floor load limit - 66 lb/sq ft. Pallet weight - 34 lb. Tiedown devices - 29 lb.",
    options: ["744.6 pounds.", "681.6 pounds.", "663.0 pounds."],
    answer: 1,
    explain:
      "1. Determine the area. 33.5 x 48.5 ÷ 144 = 11.28 square feet. 2. Determine the floor load limit. 11.28 x 66 = 744.68 pounds. 3. Subtract the weight of the pallet and tiedown devices. 744.68 - 63 = 681.68 pounds.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 25,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the maximum allowable weight that may be carried on a pallet which has the dimensions of 36 x 48 inches? Floor load limit: 169 lbs/sq ft. Pallet weight: 47 lb. Tiedown devices: 33 lbs.",
    options: ["1,948.0 pounds.", "1,995.0 pounds.", "1,981.0 pounds."],
    answer: 0,
    explain:
      "Pallet area = (36 x 48)/144 = 12 sq ft. Floor load limit = 12 sq ft x 169 lbs/sq ft = 2,028 lbs. Allowable weight = 2,028 lbs - 80 lbs = 1,948 lbs.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 26,
    subject: "FAA ATP",
    system: "Weight & Balance",
    q: "What is the minimum floor load limit that an aircraft must have to carry the following pallet of cargo? Pallet dimensions are 39 x 37 inches. Pallet weight - 37 lbs. Tiedown devices - 21 lbs. Cargo weight - 1,094.3 lbs.",
    options: ["115 lbs/sq ft.", "112 lbs/sq ft.", "109 lbs/sq ft."],
    answer: 0,
    explain:
      "1. Determine the area. 39 x 37 ÷ 144 = 10.02 sq ft. 2. Determine the total weight. 1,094.3 + 21 + 37 = 1,152.3. 3. Determine the minimum floor load limit. 1,152.3 ÷ 10.02 = 114.99 lbs/sq ft.",
    reference: "FAA Aircraft Weight and Balance Handbook - Cargo Loading",
  },
  {
    id: 27,
    subject: "FAA ATP",
    system: "Aerodynamics & Aircraft Performance",
    q: "During takeoff roll with runway remaining, you receive a master caution light after V(R). What action should you take?",
    options: ["Reject the takeoff.", "Hold the nose down to takeoff speed.", "Continue the takeoff."],
    answer: 2,
    explain:
      "V(R) is defined as the speed at which the rotation of the aircraft should be initiated to takeoff attitude. V(R) or rotation speed cannot be less than V1. If it is greater than V1 and it is found that, at V(R), rotation cannot be achieved, a subsequent rejected takeoff may not be possible within the remaining runway length and is likely to result in a runway excursion. In these circumstances (after V(R), runway remaining), you should continue the takeoff.",
    reference: "FAA Airplane Flying Handbook - Takeoff and Rejected Takeoff",
  },
  {
    id: 28,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "What report should the pilot make at a clearance limit?",
    options: [
      "Time and altitude/flight level arriving or leaving.",
      "Time, altitude/flight level, and expected holding speed.",
      "Time, altitude/flight level, expected holding speed, and inbound leg length.",
    ],
    answer: 0,
    explain:
      "Pilots should report to ATC the time and altitude/flight level at which the aircraft reaches the clearance limit, and report when leaving the clearance limit. Answer (B) is incorrect because ATC does not need the expected holding speed reported since it will be below the maximum holding airspeed. For all aircraft between MHA and 6,000 feet MSL, holding speed is 200 KIAS; for all aircraft between 6,001 and 14,000 feet MSL, holding speed is 230 KIAS; for all aircraft 14,001 and above, holding speed is 265 KIAS. Answer (C) is incorrect because inbound leg lengths are set by time or DME distance. At or below 14,000 feet MSL there is a 1-minute inbound leg. Above 14,000 feet MSL the inbound leg is 1-1/2 minutes.",
    reference: "AIM 5-3-2 - Position Reporting",
  },
  {
    id: 29,
    subject: "FAA ATP",
    system: "Navigation & Flight Planning",
    q: "Where are position reports required on an IFR flight on airways or routes?",
    options: [
      "Over all designated compulsory reporting points.",
      "Only where specifically requested by ARTCC.",
      "When requested to change altitude or advise of weather conditions.",
    ],
    answer: 0,
    explain:
      "A position report is required by all flights regardless of altitude over each designated compulsory reporting point along the route being flown. Note: When the controller states 'radar contact,' this requirement is removed. However, the question states nothing about being in 'radar contact.' Answer (B) is incorrect because the 'on request' reporting point is indicated on enroute charts by an open triangle. Reports passing an 'on request' reporting point are only necessary when requested by ARTCC. Answer (C) is incorrect because pilots in IFR are expected to report weather conditions which have not been forecast, or hazardous conditions which have been forecast.",
    reference: "AIM 5-3-2 - Position Reporting",
  },
  {
    id: 30,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "When flying in the airspace underlying Class B airspace, the maximum speed authorized is",
    options: ["200 knots.", "230 knots.", "250 knots."],
    answer: 0,
    explain:
      "No person may operate an aircraft in the airspace underlying Class B airspace at a speed of more than 200 knots.",
    reference: "14 CFR 91.117",
  },
  {
    id: 31,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "Under what conditions may a pilot on an IFR flight plan comply with authorization to maintain 'VFR on Top'?",
    options: [
      "Maintain IFR flight plan but comply with visual flight rules while in VFR conditions.",
      "Maintain VFR altitudes, cloud clearances, and comply with applicable instrument flight rules.",
      "Maintain IFR altitudes, VFR cloud clearances, and comply with applicable instrument flight rules.",
    ],
    answer: 1,
    explain:
      "When operating in VFR conditions with an ATC authorization to 'maintain VFR-On-Top' pilots on IFR flight plans must: 1. Fly an appropriate VFR altitude, 2. Comply with VFR visibility and distance from cloud criteria, and 3. Comply with instrument flight rules that are applicable to the flight. Answer (A) is incorrect because not only will a pilot remain on the IFR flight plan and comply with IFR altitudes, visibility, and cloud clearances, he/she must also comply with applicable IFR rules, e.g., position reporting, minimum IFR altitudes. Answer (C) is incorrect because, while operating on a 'VFR-On-Top' clearance, a pilot must maintain VFR altitudes.",
    reference: "14 CFR 91.181; AIM 4-4-8",
  },
  {
    id: 32,
    subject: "FAA ATP",
    system: "Regulations & Certification",
    q: "What action should a pilot take when a clearance is received from ATC that appears to be contrary to a regulation?",
    options: ["Read the clearance back in its entirety.", "Request a clarification from ATC.", "Do not accept the clearance."],
    answer: 1,
    explain:
      "If a pilot is uncertain of the meaning of an ATC clearance, he/she shall immediately request clarification from ATC. Answer (A) is incorrect because reading the clearance back in its entirety does not inform ATC of the possible conflict to a regulation. A pilot should actively seek clarification if there is any doubt. Answer (C) is incorrect because not accepting a clearance is not the proper procedure to use when, in a pilot's opinion, it would conflict with a regulation. First, a pilot should receive a clarification from ATC, then ask for an amended clearance, if necessary.",
    reference: "AIM 4-4-8 - Clearances",
  },
];
