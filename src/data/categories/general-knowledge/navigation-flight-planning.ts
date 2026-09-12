import type { Question } from "../../../types";

// General aviation knowledge - Navigation & Flight Planning.
// Original questions written from general, widely-published aviation
// navigation and flight-planning knowledge, not copied from any single
// source document. No company, brand, or publisher names appear anywhere
// below.
export const NAVIGATION_FLIGHT_PLANNING_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "An aircraft is flying directly over a DME ground station at FL360. What will the DME display read?",
    options: [
      "Approximately 6 nm, reflecting slant range rather than ground distance",
      "Zero, since DME always reads ground distance",
      "36 nm, matching the flight level number",
      "A blank or invalid reading, since DME cannot function directly overhead a station"
    ],
    answer: 0,
    explain:
      "DME measures slant range - the direct line-of-sight distance to the station - not ground distance. Directly overhead a station at FL360 (roughly 36,000 ft, or about 6 nm of altitude), the DME will read approximately 6 nm rather than zero, since altitude itself contributes to that slant-range distance.",
    reference: "Navigation - Radio Navigation Aids (DME)",
  },
  {
    id: 2,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "What is the minimum number of satellites a GPS receiver generally needs in view to compute a full three-dimensional position fix (latitude, longitude, and altitude)?",
    options: ["4", "2", "6", "1"],
    answer: 0,
    explain:
      "A GPS receiver needs signals from at least four satellites to solve for a three-dimensional position (latitude, longitude, altitude) plus the receiver's own clock error. With only three satellites in view, the receiver can typically only produce a two-dimensional fix.",
    reference: "Navigation - Satellite Navigation Fundamentals",
  },
  {
    id: 3,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "As a rule of thumb, what descent rate is needed to maintain a standard 3° glideslope at a given groundspeed?",
    options: [
      "Groundspeed multiplied by 5",
      "Groundspeed multiplied by 3",
      "Groundspeed divided by 2",
      "Groundspeed multiplied by 10"
    ],
    answer: 0,
    explain:
      "A widely used rule of thumb for a 3° glidepath is: required descent rate in feet per minute is approximately groundspeed (in knots) multiplied by 5. For example, at 140 knots groundspeed, roughly 700 ft/min maintains a 3° path.",
    reference: "Navigation - Descent Planning & Approach Geometry",
  },
  {
    id: 4,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "A secondary surveillance radar (SSR) transponder reporting Mode C altitude bases that reading on which pressure setting?",
    options: [
      "The standard pressure setting of 1013.25 hPa",
      "The current local QNH",
      "Whatever altimeter setting the crew has selected",
      "Sea-level pressure at the departure aerodrome"
    ],
    answer: 0,
    explain:
      "Mode C (and Mode S altitude reporting) transmits pressure altitude, referenced to the standard setting of 1013.25 hPa, regardless of what the crew has set on their own altimeters. Ground systems then apply the necessary correction to display an altitude relative to QNH when required.",
    reference: "Navigation - Surveillance & Transponder Systems",
  },
  {
    id: 5,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In a METAR, surface wind direction is reported relative to which reference?",
    options: ["True north", "Magnetic north", "The active runway heading", "Grid north"],
    answer: 0,
    explain:
      "METAR surface wind directions are reported relative to true north. This differs from the wind information passed by air traffic control for takeoff and landing, which is normally given relative to magnetic north to match runway headings - a distinction worth keeping straight when planning.",
    reference: "Navigation - Meteorological Reports for Flight Planning",
  },
  {
    id: 6,
    subject: "General Knowledge",
    system: "Navigation & Flight Planning",
    q: "In a TAF, what does a 'PROB30' group generally indicate?",
    options: [
      "A 30% probability of the stated condition occurring during the specified period",
      "A guaranteed condition lasting exactly 30 minutes",
      "A 30-knot wind gust forecast for the period",
      "A forecast confidence level of 30%, applied to the entire TAF"
    ],
    answer: 0,
    explain:
      "PROB30 (or PROB40) indicates a stated probability - here 30% - that the described weather condition will occur during the specified time period, used by forecasters to flag possible but not certain conditions such as thunderstorms or reduced visibility.",
    reference: "Navigation - Meteorological Reports for Flight Planning",
  },
];
