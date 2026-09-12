import type { Question } from "../../../types";

// General aviation knowledge - Air Law & Regulations.
// Original questions written from general, widely-published aviation
// knowledge (ICAO-style standards and common regulatory conventions), not
// copied from any single source document. No company, brand, or publisher
// names appear anywhere below.
export const AIR_LAW_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "General Knowledge",
    system: "Air Law",
    q: "Which transponder code should a pilot select to indicate a general emergency?",
    options: ["7700", "7600", "7500", "2000"],
    answer: 0,
    explain:
      "7700 is the universal transponder code for a general emergency. 7600 signals a radio communication failure, 7500 signals unlawful interference (hijack), and 2000 is the general conspicuity code used when entering radar airspace from an area where no discrete code was assigned.",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 2,
    subject: "General Knowledge",
    system: "Air Law",
    q: "A pilot squawks 7500. What does this code indicate to air traffic control?",
    options: ["Radio failure", "Unlawful interference (hijack)", "General emergency", "Loss of cabin pressure"],
    answer: 1,
    explain:
      "7500 is reserved specifically to alert controllers to unlawful interference with the aircraft, such as a hijacking, and is treated with particular sensitivity by ATC once selected.",
    reference: "Air Law - Emergency & Conspicuity Transponder Codes",
  },
  {
    id: 3,
    subject: "General Knowledge",
    system: "Air Law",
    q: "For a standard Category I precision approach, what are the typical minimum decision height and visibility/RVR requirements?",
    options: [
      "Decision height no lower than 200 ft, RVR no less than about 550 m",
      "Decision height no lower than 100 ft, RVR no less than about 200 m",
      "Decision height no lower than 500 ft, RVR no less than about 1500 m",
      "No decision height applies; only a minimum descent altitude is used",
    ],
    answer: 0,
    explain:
      "Category I approaches are generally flown to a decision height not lower than 200 ft with a required runway visual range of not less than roughly 550 m (or a reported visibility around 800 m where RVR isn't available). Lower minima belong to Category II/III approaches, which need additional aircraft and crew certification.",
    reference: "Air Law - Approach Categories & Minima",
  },
  {
    id: 4,
    subject: "General Knowledge",
    system: "Air Law",
    q: "Under standard wake turbulence categorisation, what generally defines a 'Heavy' aircraft?",
    options: [
      "A maximum certificated take-off mass of 136,000 kg or more",
      "A maximum certificated take-off mass of 50,000 kg or more",
      "Any aircraft with four or more engines, regardless of mass",
      "Any aircraft used for cargo operations",
    ],
    answer: 0,
    explain:
      "Wake turbulence categories are based on maximum certificated take-off mass: 'Heavy' applies at 136,000 kg or above, 'Medium' covers roughly 7,000 kg up to that threshold, and 'Light' applies below about 7,000 kg. Engine count and mission type aren't the deciding factor.",
    reference: "Air Law - Wake Turbulence Categories",
  },
  {
    id: 5,
    subject: "General Knowledge",
    system: "Air Law",
    q: "Reduced Vertical Separation Minimum (RVSM) airspace typically applies between which flight levels?",
    options: ["FL290 to FL410 inclusive", "FL180 to FL290 inclusive", "FL100 to FL180 inclusive", "FL410 to FL600 inclusive"],
    answer: 0,
    explain:
      "RVSM airspace generally spans FL290 through FL410 inclusive, where 1,000 ft vertical separation is used between suitably equipped and approved aircraft instead of the larger separation required above and below that band.",
    reference: "Air Law - Airspace & Separation Standards",
  },
  {
    id: 6,
    subject: "General Knowledge",
    system: "Air Law",
    q: "A fire involving flammable liquids, such as fuel or oil, is generally classified under which fire class?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: 1,
    explain:
      "Class A fires involve ordinary combustibles like wood or paper, Class B involves flammable liquids (fuel, oil, solvents), Class C involves flammable gases, and Class D involves combustible metals - each calling for a different type of extinguishing agent.",
    reference: "Air Law - Fire Classification & Extinguishing Agents",
  },
];
