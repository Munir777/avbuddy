import type { Question } from "../../../types";

// Canada TC ATPL question bank, Batch 65 -- Section 1: Air Law and
// Procedures, sixth pass. Original questions written from the CARs
// and the TC AIM 2026-1 (topic headings and regulatory provisions,
// no sample questions transcribed from any commercial source).
// Covers CARs Subpart 702 (Aerial Work), Category 1 vs Category 3
// medical certificates, VFR minima below 1,000 ft AGL in
// uncontrolled airspace, Class E airspace, circling approaches, the
// required visual reference to continue descent below DH/MDA, the
// head-on converging right-of-way rule, flight deck door security,
// advance passenger information for international flights, the
// Chicago Convention/ICAO Annexes as the basis for the CARs, state
// of registry responsibilities, wet lease vs dry lease, minimum
// flight crew complement, de-icing/anti-icing holdover time, the
// Certificate of Registration vs the Certificate of Airworthiness,
// and the definition of a commercial air service -- topics not yet
// addressed in batches 1, 11, 35, 45, or 55. Not transcribed or
// adapted from any commercial test-prep publisher.
export const CANADA_TC_ATPL_BATCH_65_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "CARs Subpart 702 (Aerial Work) generally governs commercial air operations such as",
    options: [
      "commuter operations using small multi-engine aircraft on scheduled routes, a category of operation more directly governed by Subpart 704.",
      "large transport-category aircraft operations carrying passengers on scheduled routes, a category of operation more directly governed by Subpart 705.",
      "specialized, typically single-aircraft-at-a-time operations conducted for purposes other than transporting passengers or cargo from one point to another for hire, such as aerial application, aerial survey, or forest fire fighting.",
      "strictly recreational, non-commercial private flying conducted entirely for personal enjoyment with no commercial component, remuneration, or air operator certificate requirement of any kind whatsoever, regardless of the aircraft type or activity being flown.",
    ],
    answer: 2,
    explain:
      "CARs Subpart 702 governs aerial work operations -- specialized commercial flying conducted for purposes other than transporting passengers or cargo between points for hire, such as aerial application (spraying), aerial survey, forest fire fighting, and similar specialized tasks -- distinguishing it from the passenger/cargo transport operations governed by Subparts 703, 704, and 705.",
    reference: "CARs Subpart 702; TP 690 -- Air Law: Air Operator Certification",
  },
  {
    id: 2,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A Category 3 medical certificate, as distinguished from the Category 1 medical certificate required to exercise ATPL privileges, is generally sufficient for a pilot to exercise",
    options: [
      "no pilot privileges whatsoever, since a Category 3 medical certificate is defined as an obsolete classification that was formally discontinued and no longer exists in any form under the current CARs medical standards.",
      "only glider pilot privileges, with no application to any powered aircraft licence.",
      "the full privileges of an Airline Transport Pilot Licence, since Category 1 and Category 3 medical certificates are interchangeable for any licence type.",
      "the privileges of a recreational or private pilot licence, but not the privileges of a commercial or airline transport pilot licence, which require the higher medical standard of a Category 1 certificate.",
    ],
    answer: 3,
    explain:
      "A Category 3 medical certificate reflects a lower medical standard generally sufficient for exercising recreational or private pilot licence privileges, whereas exercising commercial or airline transport pilot licence privileges requires the higher medical standard of a Category 1 certificate, reflecting the greater responsibility and risk exposure associated with commercial and airline operations.",
    reference: "CARs Part IV; TP 690 -- Air Law: Personnel Licensing",
  },
  {
    id: 3,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Compared to the standard VMC (visual meteorological conditions) table applicable at higher altitudes, VFR flight below 1,000 ft AGL in uncontrolled airspace generally requires only that the aircraft be operated",
    options: [
      "with visual reference to the surface and clear of cloud, a reduced minimum reflecting the lower altitude and closer proximity to the ground rather than the full distance-from-cloud and flight visibility figures required at higher altitudes.",
      "with identical minimum flight visibility and distance-from-cloud figures to those required at any other altitude or in controlled airspace, with no reduction whatsoever permitted at low level regardless of how close the aircraft is operating to the surface.",
      "in cloud, provided the pilot holds an instrument rating, since a VFR flight below 1,000 ft AGL is treated identically to an IFR flight for cloud clearance purposes.",
      "with no visibility or cloud clearance requirement whatsoever below 1,000 ft AGL in uncontrolled airspace.",
    ],
    answer: 0,
    explain:
      "Below 1,000 ft AGL in uncontrolled airspace, VFR flight is generally permitted with visual reference to the surface and clear of cloud, a reduced standard compared to the specific flight visibility and distance-from-cloud figures required in the standard VMC table applicable at higher altitudes or in controlled airspace, reflecting the practical realities of low-level flight close to terrain.",
    reference: "CARs 602.114-602.115; TC AIM RAC -- VFR Weather Minima",
  },
  {
    id: 4,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Class E airspace, within the Canadian Domestic Airspace classification system, is generally characterized by",
    options: [
      "being uncontrolled airspace in which no ATC clearance is issued to any aircraft, IFR or VFR, under any circumstances.",
      "being controlled airspace in which IFR flights require an ATC clearance, while VFR flights may operate without a clearance and without being required to establish two-way radio contact with ATC.",
      "being reserved exclusively for military training activity, with civilian flight prohibited at all times.",
      "requiring every aircraft, VFR or IFR, to be equipped with and operate a functioning transponder before entry is permitted.",
    ],
    answer: 1,
    explain:
      "Class E airspace is controlled airspace in which IFR flights require an ATC clearance to operate, but VFR flights may generally operate within it without an ATC clearance and without being required to establish two-way radio communication with ATC, distinguishing it from Class C and D airspace (where VFR flights generally do need clearance/communication) and from uncontrolled Class F/G airspace.",
    reference: "TC AIM RAC -- Canadian Domestic Airspace Classification",
  },
  {
    id: 5,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A circling approach, flown after completing an instrument approach procedure, involves",
    options: [
      "continuing straight ahead on the final approach course without any visual manoeuvring at all, landing directly on the runway the instrument approach is aligned with, and requiring no consideration whatsoever of a protected circling area, a description that in fact applies only to a straight-in approach and never to a circling procedure of any kind under the CARs.",
      "a procedure used exclusively for a missed approach, with no application to a normal landing sequence.",
      "manoeuvring visually, within a protected area defined around the aerodrome, from the instrument approach's alignment to position the aircraft for landing on a runway not served by (or not aligned with) that instrument approach, while remaining at or above the published circling minimum descent altitude until in a position to land.",
      "descending below the published circling minimum descent altitude immediately upon breaking out of cloud, regardless of the aircraft's position relative to the landing runway.",
    ],
    answer: 2,
    explain:
      "A circling approach is used when the runway to be used for landing is not served by, or not sufficiently aligned with, the instrument approach procedure flown; after reaching visual conditions, the pilot manoeuvres visually within a protected circling area around the aerodrome to position for landing on the intended runway, remaining at or above the published circling minimum descent altitude (MDA) until in a position from which a normal descent and landing can be made.",
    reference: "TC AIM RAC -- Instrument Approach Procedures",
  },
  {
    id: 6,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the CARs, a pilot conducting an instrument approach may not descend below the applicable decision height (DH) or minimum descent altitude (MDA) unless",
    options: [
      "ATC has issued a specific verbal authorization to descend below DH or MDA, a requirement that applies in place of any visual reference requirement.",
      "the aircraft's weather radar indicates no precipitation is present along the final approach course, a condition that is defined under the CARs as fully satisfying the regulatory requirement in place of any visual reference to the runway environment, approach lighting, or its surrounding terrain, regardless of cloud base or visibility.",
      "the pilot has simply reached the published DH or MDA value on the altimeter, regardless of whether any visual reference to the runway environment has been established.",
      "the required visual reference for the runway of intended landing (such as the runway threshold, approach lights, runway markings, or other specified visual references) is distinctly visible and identifiable to the pilot, and the aircraft is in a position from which a normal rate of descent and landing can be made.",
    ],
    answer: 3,
    explain:
      "Under the CARs, descent below the applicable DH or MDA on an instrument approach is only permitted once the required visual reference for the intended runway -- such as the runway threshold, approach lighting system, runway markings, or other specified references -- is distinctly visible and identifiable, and the aircraft is in a position from which a normal rate of descent to a landing can be made; without that visual reference, the crew must execute a missed approach rather than continuing the descent.",
    reference: "CARs 602.128-602.129; TC AIM RAC -- Instrument Approach Procedures",
  },
  {
    id: 7,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the general right-of-way rules, when two aircraft are approaching each other head-on (or approximately so) at approximately the same altitude,",
    options: [
      "each aircraft is generally required to alter its heading to the right, so both aircraft turn away from one another on the same side.",
      "neither aircraft is required to take any avoiding action, since head-on convergence is not addressed by the right-of-way rules.",
      "only one of the two aircraft is required to alter course, with the other aircraft required to maintain its heading and altitude unchanged.",
      "both aircraft are required to alter course to the left, turning toward one another on the same side.",
    ],
    answer: 0,
    explain:
      "When two aircraft are approaching each other head-on, or approximately so, and there is a risk of collision, each pilot is generally required to alter heading to the right, so that both aircraft turn away from one another on the same (right-hand) side, avoiding a collision without either pilot needing to determine which aircraft has the right of way in the encounter.",
    reference: "CARs 602.19; TC AIM RAC -- Right of Way",
  },
  {
    id: 8,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Regulatory requirements for a secure, lockable flight deck door on certain transport category aircraft are intended primarily to",
    options: [
      "apply exclusively to cargo aircraft carrying no passengers, with no application to passenger-carrying aircraft.",
      "prevent unauthorized access to the flight deck from the cabin during flight, reducing the risk of unlawful interference with the flight crew.",
      "prevent the flight crew from being able to leave the flight deck under any circumstances once the door has been closed.",
      "regulate cabin pressurization, performing the same function as the aircraft's pressurization outflow valve.",
    ],
    answer: 1,
    explain:
      "A secure, lockable flight deck door requirement is a security measure intended to prevent unauthorized access to the flight deck from the cabin during flight, reducing the risk of unlawful interference with the flight crew and supporting the overall security of the flight, rather than serving any pressurization, structural, or crew-confinement function.",
    reference: "CARs Part VI (Security); TC AIM SEC -- Flight Deck Security",
  },
  {
    id: 9,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Advance passenger information (API), which certain international flights are required to transmit to border/customs authorities before or shortly after departure, generally serves to",
    options: [
      "replace the requirement for passengers to carry any travel document, such as a passport, upon arrival, since submission of advance passenger information is defined as a full substitute for presenting travel documents to border officials on arrival.",
      "apply only to domestic flights within Canada, with no relevance to any international flight.",
      "allow the destination country's border services to screen passenger and crew information against relevant databases before the flight's arrival, supporting security and customs/immigration processing.",
      "provide weather information to the flight crew, unrelated to passenger or crew identification.",
    ],
    answer: 2,
    explain:
      "Advance passenger information requirements generally require certain international flights to transmit passenger and crew identification data to the destination country's border services in advance of (or shortly after) departure, allowing that country to screen the information against relevant security and immigration databases ahead of the flight's arrival, supporting more efficient and effective border processing and security screening.",
    reference: "TC AIM GEN -- Facilitation",
  },
  {
    id: 10,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The Canadian Aviation Regulations exist, in significant part, to implement Canada's obligations as a signatory to the Convention on International Civil Aviation (the Chicago Convention) and its associated ICAO Annexes, meaning that",
    options: [
      "the CARs are entirely independent of any international agreement or standard, having no relationship whatsoever to the Chicago Convention or ICAO.",
      "the Chicago Convention applies only to military aviation, with no relevance to civil aviation regulation in Canada.",
      "ICAO Annexes are binding directly on individual pilots and operators without any need for implementation through a member state's own domestic regulations such as the CARs, since each Annex is defined as having direct legal effect within Canadian airspace the moment it is adopted by ICAO.",
      "many CARs provisions are designed to align with internationally agreed standards and recommended practices, supporting consistency and mutual recognition between Canada's aviation system and those of other ICAO member states.",
    ],
    answer: 3,
    explain:
      "As a signatory to the Chicago Convention, Canada is obligated to implement (so far as practicable) the international standards and recommended practices set out in the ICAO Annexes through its own domestic legislation; the CARs are, in significant part, Canada's implementation of those international obligations, which is why many CARs provisions align closely with ICAO standards, supporting consistency and mutual recognition between Canada's aviation system and those of other member states.",
    reference: "TC AIM GEN -- International Civil Aviation",
  },
  {
    id: 11,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "Under the ICAO framework adopted in Canadian aviation regulation, the 'state of registry' of an aircraft generally bears primary responsibility for",
    options: [
      "establishing and overseeing the airworthiness and operational standards applicable to that aircraft, since the aircraft is registered on that state's civil aircraft register.",
      "issuing the pilot licences of every crew member who operates that aircraft, regardless of the crew members' own nationality or state of licensing.",
      "setting customs and immigration requirements for every country the aircraft might land in, superseding each destination country's own such requirements.",
      "providing air traffic control services to that aircraft in every country it overflies, regardless of which country's airspace it is operating in at the time.",
    ],
    answer: 0,
    explain:
      "Under the Chicago Convention/ICAO framework, an aircraft's 'state of registry' -- the state on whose civil aircraft register it is entered -- generally bears primary responsibility for establishing and overseeing the airworthiness and operational standards applicable to that aircraft (issuing its Certificate of Airworthiness, for example), a responsibility distinct from air traffic control (provided by the state whose airspace is being used) and from destination countries' own customs and immigration authority.",
    reference: "TC AIM GEN -- International Civil Aviation",
  },
  {
    id: 12,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A 'wet lease' arrangement between two air operators, as distinguished from a 'dry lease,' generally involves",
    options: [
      "an arrangement that eliminates the need for either party to hold any form of air operator certificate.",
      "the lessor providing the aircraft together with a crew (and typically maintenance and insurance), so the aircraft continues to be operated under the lessor's air operator certificate, whereas a dry lease provides the aircraft alone, with the lessee crewing and operating it under its own certificate.",
      "the lessor providing only the bare aircraft with no crew, maintenance, or insurance included, a description that actually applies to a dry lease rather than a wet lease.",
      "an arrangement used exclusively for cargo aircraft, with no application to passenger-carrying operations, since the wet lease and dry lease distinction is defined under the CARs as applying only to aircraft configured solely for the carriage of goods and is expressly stated to have no bearing on crew, maintenance, or insurance arrangements of any kind.",
    ],
    answer: 1,
    explain:
      "In a wet lease, the lessor provides the aircraft together with a crew (and typically maintenance and insurance), and the aircraft continues to be operated under the lessor's air operator certificate on behalf of the lessee; in a dry lease, the lessor provides only the aircraft itself, with the lessee supplying its own crew and operating the aircraft under its own air operator certificate -- a distinction with significant operational control and regulatory implications for both parties.",
    reference: "TP 690 -- Air Law: Air Operator Certification",
  },
  {
    id: 13,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The minimum flight crew complement required to operate a given aircraft is generally determined by",
    options: [
      "the personal preference of the pilot-in-command on any given flight, with no regulatory minimum applicable to any aircraft type, since minimum crew complement is defined under the CARs as being left entirely to individual operator and pilot discretion regardless of aircraft type or operating subpart.",
      "the aircraft's registration marks alone, with no relationship to its type certification or the applicable operating subpart.",
      "the aircraft's type certification (as reflected in its flight manual) together with any additional requirement imposed by the specific regulatory subpart under which the operation is conducted, and cannot simply be reduced at the operator's discretion below that minimum.",
      "the number of passengers on board for that specific flight, with an identical aircraft requiring a different minimum crew complement on every flight depending on load.",
    ],
    answer: 2,
    explain:
      "An aircraft's minimum required flight crew complement is generally established by its type certification, reflected in the aircraft flight manual, and may be further constrained by the specific regulatory subpart governing the operation being conducted (for example, certain commercial operations requiring two pilots even where the aircraft is certified for single-pilot operation); an operator cannot simply reduce crew complement below the applicable minimum at its own discretion.",
    reference: "TP 690 -- Air Law: Air Operator Certification",
  },
  {
    id: 14,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "The published holdover time for a given de-icing or anti-icing fluid, used during ground de-icing/anti-icing operations, represents",
    options: [
      "a fixed, universal time limit that applies identically regardless of precipitation type, precipitation intensity, or outside air temperature.",
      "the time required for de-icing personnel to physically apply the fluid to the aircraft, unrelated to how long the treatment remains effective.",
      "the total flight time the fluid remains effective once the aircraft is airborne, with no relevance whatsoever to the ground period before takeoff, since holdover time is defined under the CARs as an airborne endurance figure rather than as any pre-takeoff ground holdover guidance for de-icing or anti-icing purposes, and is unrelated to precipitation type, intensity, or outside air temperature.",
      "the estimated period, under specified precipitation and temperature conditions, during which the fluid is expected to prevent the accumulation of frost, ice, or snow on treated aircraft surfaces before takeoff, after which the treatment can no longer be relied upon and a fresh check or reapplication is generally required.",
    ],
    answer: 3,
    explain:
      "A de-icing/anti-icing fluid's published holdover time is an estimated range, varying with the specific fluid type, the precipitation type and intensity, and the outside air temperature, during which the fluid can be expected to prevent frost, ice, or snow from accumulating on treated critical surfaces before takeoff; once that holdover time has elapsed (or conditions exceed what the published table covers), the crew can no longer rely on the earlier treatment and must obtain a fresh pre-takeoff contamination check or reapplication before departing.",
    reference: "TC AIM RAC -- Aircraft Ground Icing Operations",
  },
  {
    id: 15,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "An aircraft's Certificate of Registration, as distinguished from its Certificate of Airworthiness, primarily establishes",
    options: [
      "the aircraft's nationality and the identity of its registered owner, whereas the Certificate of Airworthiness attests to the aircraft's ongoing compliance with the applicable airworthiness standard for safe operation.",
      "the aircraft's ongoing compliance with the applicable airworthiness standard, a function actually performed by the Certificate of Airworthiness rather than the Certificate of Registration.",
      "the same information as the Certificate of Airworthiness, the two documents being functionally identical and issued for an identical purpose.",
      "the qualifications of the pilots authorized to operate that specific aircraft, a matter unrelated to either certificate.",
    ],
    answer: 0,
    explain:
      "The Certificate of Registration establishes an aircraft's nationality (its state of registry) and identifies its registered owner, functioning similarly to a vehicle's ownership registration; the Certificate of Airworthiness is a separate document attesting that the aircraft, at the time of issue and subject to ongoing maintenance, conforms to its approved type design and is in a condition for safe operation -- both are generally required to be carried on board and valid for flight.",
    reference: "CARs Part II; TP 690 -- Air Law: Airworthiness",
  },
  {
    id: 16,
    subject: "Canada TC ATPL",
    system: "Air Law and Procedures",
    q: "A 'commercial air service,' as defined under the CARs, is generally distinguished from private (non-commercial) flying in that a commercial air service involves",
    options: [
      "any flight conducted by a pilot holding a commercial pilot licence, regardless of whether the flight itself involves remuneration or private, non-commercial purposes.",
      "the use of an aircraft for hire or reward -- that is, in exchange for remuneration -- to transport persons or goods, or for another commercial purpose, rather than flying conducted purely for the operator's own private, non-remunerated purposes.",
      "any flight operated using an aircraft with more than one engine, regardless of whether remuneration is involved.",
      "any flight conducted above a specified altitude, with altitude alone determining whether the flight is classified as commercial, since the CARs are defined as drawing the line between commercial and private flying solely by reference to a fixed altitude threshold rather than to remuneration or purpose.",
    ],
    answer: 1,
    explain:
      "A commercial air service is generally defined by the use of an aircraft for hire or reward -- in exchange for remuneration -- to transport persons or goods or for another commercial purpose, which is the key distinguishing feature from private flying conducted purely for the operator's own non-remunerated purposes; the classification depends on the nature and purpose of the specific flight, not on the pilot's own licence category, the aircraft's engine count, or its operating altitude.",
    reference: "CARs Part I (Interpretation); TP 690 -- Air Law: Air Operator Certification",
  },
];
