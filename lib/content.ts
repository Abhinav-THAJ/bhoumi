export interface SolutionItem {
  id: string;
  title: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EducationalGuide {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

// Exact 8 Health Insurance Options from supplied document
export const HEALTH_INSURANCE_OPTIONS: SolutionItem[] = [
  {
    id: "individual",
    title: "Individual health insurance plans",
    iconName: "User",
  },
  {
    id: "family-floater",
    title: "Family floater health insurance plans",
    iconName: "Users",
  },
  {
    id: "senior-citizen",
    title: "Health insurance options for senior citizens",
    iconName: "HeartPulse",
  },
  {
    id: "specified-enhanced",
    title: "Plans with specified or enhanced coverage features, where available",
    iconName: "ShieldCheck",
  },
  {
    id: "top-up",
    title: "Top-up or super top-up options, where available",
    iconName: "ArrowUpCircle",
  },
  {
    id: "other-eligible",
    title: "Other eligible health insurance products offered by Star Health or HDFC ERGO",
    iconName: "FileCheck2",
  },
  {
    id: "travel",
    title: "Travel Insurance",
    iconName: "Plane",
  },
  {
    id: "corporate-group",
    title: "Corporate & Group Health Insurance",
    iconName: "Building2",
  },
];

// Exact 6 Why Choose Bhoumi Consultancy points from Page 1
export const WHY_CHOOSE_POINTS = [
  "Focused guidance on health insurance plans from Star Health and HDFC ERGO",
  "Support in understanding benefits, limits, waiting periods, and exclusions",
  "Assistance with proposal forms and policy application requirements",
  "Help understanding policy documents and renewal requirements",
  "Guidance on claim-related procedures and documentation",
  "A transparent, customer-focused approach",
];

// Exact 6 How We Help points from Page 2
export const HOW_WE_HELP_POINTS = [
  "Understand your health insurance needs and priorities",
  "Explain available plan features, benefits, limits, waiting periods, and exclusions",
  "Guide you through proposal forms and required information",
  "Explain premium and policy terms as stated by the insurer",
  "Help you understand policy documents, renewals, and servicing procedures",
  "Provide general guidance on claim procedures and required documentation",
];

// Exact 6 Our Approach factors from Page 2
export const OUR_APPROACH_FACTORS = [
  "Individual or family coverage requirements",
  "Coverage benefits and sub-limits",
  "Waiting periods, exclusions, and co-payment conditions, where applicable",
  "Premium and affordability",
  "Eligibility and underwriting requirements",
  "Customer priorities and the policy terms issued by the insurer",
];

// Exact 5 Areas of Experience for Sanju P B from Page 3
export const SANJU_AREAS_OF_EXPERIENCE = [
  "Health insurance plan guidance",
  "Hospital insurance operations and coordination",
  "Claim documentation and process awareness",
  "Insurance desk processes and service improvement",
  "Customer communication and policy-related support",
];

// Exact FAQs based directly on the supplied scope & guidance instructions
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What does health insurance guidance from Bhoumi Consultancy cover?",
    answer:
      "Bhoumi Consultancy provides guidance on available health insurance plans offered by Star Health and HDFC ERGO. We help customers understand available coverage, policy features, eligibility, waiting periods, exclusions, the application process, policy documents, renewals, and general claim procedures.",
  },
  {
    id: "faq-2",
    question: "What is the difference between individual and family floater health insurance?",
    answer:
      "An individual health insurance plan provides dedicated coverage and a separate sum insured for a single person. A family floater plan covers family members under a single shared sum insured. Exact terms, eligibility, and conditions depend on the specific policy issued by the insurer.",
  },
  {
    id: "faq-3",
    question: "Are senior citizen plans available?",
    answer:
      "Yes, health insurance options for senior citizens are available through Star Health and HDFC ERGO. Plan availability, entry age criteria, underwriting requirements, waiting periods, and co-payment conditions depend on the insurer's current products and policy terms.",
  },
  {
    id: "faq-4",
    question: "What are waiting periods?",
    answer:
      "Waiting periods are specified timeframes defined in the policy wording during which coverage for certain conditions or treatments is not yet effective. This may include initial waiting periods, specific ailment waiting periods, and waiting periods for pre-existing diseases, as determined by the insurer.",
  },
  {
    id: "faq-5",
    question: "What are exclusions and sub-limits?",
    answer:
      "Exclusions are medical conditions, treatments, or expenses that are not covered under the insurance policy. Sub-limits are defined monetary caps on specific coverage components, such as room rent or particular medical procedures. Customers must review the official policy document for exact exclusions and sub-limits.",
  },
  {
    id: "faq-6",
    question: "Which documents may be required when applying?",
    answer:
      "Documentation requirements vary depending on the insurer, the chosen plan, the applicant's age, and medical declarations. Insurers may request identity proof, address proof, age proof, completed proposal forms, and medical reports where required by underwriting guidelines.",
  },
  {
    id: "faq-7",
    question: "Can Bhoumi Consultancy guarantee claim approval?",
    answer:
      "No. Bhoumi Consultancy does not and cannot guarantee claim approval. Claim decisions, admissibility, and settlements are determined exclusively by the respective insurance company (Star Health or HDFC ERGO) based on the policy wording, terms, and applicable procedures.",
  },
  {
    id: "faq-8",
    question: "Can I get help with policy renewal?",
    answer:
      "Yes. Bhoumi Consultancy provides help understanding policy documents and renewal requirements, subject to the insurer's current renewal process and policy terms.",
  },
  {
    id: "faq-9",
    question: "How do I enquire about Star Health or HDFC ERGO?",
    answer:
      "You can contact Bhoumi Consultancy by calling +91 99950 67188 or +91 88481 51514, via WhatsApp at 9995067188, by emailing bhoumiconsultancy@gmail.com, or by visiting our Nilambur or Wandoor offices.",
  },
  {
    id: "faq-10",
    question: "Does Bhoumi Consultancy provide other insurance or investment services?",
    answer:
      "No. Bhoumi Consultancy is focused exclusively on health insurance advisory relating to Star Health and HDFC ERGO. Investment advisory, mutual funds, stock market services, loans, life insurance, and other general insurance services have been removed and are not provided.",
  },
];

// Educational Guides using supplied SEO H2 and H3 Headings
export const EDUCATIONAL_GUIDES: EducationalGuide[] = [
  {
    id: "guide-1",
    title: "Understanding Policy Limits and Waiting Periods",
    summary:
      "Understand what is covered, applicable limits, waiting periods, exclusions, and co-payment conditions before selecting a policy.",
    points: [
      "Review coverage benefits, room rent limits, and sub-limits stated in official insurer documents.",
      "Understand initial, specific disease, and pre-existing condition waiting periods.",
      "Check co-payment conditions and deductible clauses where applicable.",
      "Always verify terms with current Star Health or HDFC ERGO policy wording.",
    ],
  },
  {
    id: "guide-2",
    title: "Documents Required for a Health Insurance Proposal",
    summary:
      "Assistance with proposal forms, application requirements, and required information as specified by the insurer.",
    points: [
      "Identity proof, address proof, and age documentation as requested by the insurer.",
      "Accurate declaration of health information and existing medical conditions on the proposal form.",
      "Underwriting and medical screening requirements where applicable.",
      "Submission of complete proposal documentation for insurer review.",
    ],
  },
  {
    id: "guide-3",
    title: "Health Insurance Renewal Guidance",
    summary:
      "Help understanding policy documents, renewal dates, and servicing procedures to keep your coverage active.",
    points: [
      "Understanding renewal timelines and grace periods as specified by the insurer.",
      "Reviewing any changes in policy terms or premiums upon renewal.",
      "Ensuring continuous coverage to maintain applicable waiting period benefits.",
      "Guidance on renewal payment procedures through official insurer channels.",
    ],
  },
  {
    id: "guide-4",
    title: "Understanding Health Insurance Claim Procedures",
    summary:
      "General guidance on claim-related procedures, documentation, and coordination between healthcare providers and insurers.",
    points: [
      "Overview of cashless hospitalization procedures at network hospitals.",
      "Guidance on required claim documentation for reimbursement submissions.",
      "Understanding that claim outcomes and approvals are determined solely by the insurer.",
      "Coordination and communication support for general claim process awareness.",
    ],
  },
];
