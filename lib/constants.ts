export interface OfficeLocation {
  name: string;
  building: string;
  street: string;
  locality: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  mapQuery: string;
}

export const SITE_CONFIG = {
  name: "Bhoumi Consultancy",
  url: "https://bhoumiconsultancy.com",
  advisor: {
    name: "Sanju P B",
    formalName: "Mr. Sanju Palakkaparamaban",
    title: "Health Insurance Advisor",
    experienceYears: "More than 15 years",
    bio1: "Sanju P B is an insurance professional with more than 15 years of experience across the healthcare and health insurance sectors. His experience includes hospital insurance operations, claims processes, insurance coordination, and customer support.",
    bio2: "He has previously served in insurance leadership roles at hospitals including Aster Medcity and Meitra Hospital, gaining practical experience in hospital insurance systems, claim documentation, and coordination between healthcare providers and insurers.",
    focus: "At Bhoumi Consultancy, the focus is on helping customers understand health insurance options offered by Star Health and HDFC ERGO and navigate the application and policy-servicing process with greater clarity.",
  },
  phones: [
    { display: "+91 99950 67188", raw: "+919995067188", primary: true },
    { display: "+91 88481 51514", raw: "+918848151514", primary: false },
  ],
  whatsapp: {
    number: "919995067188",
    display: "9995067188",
  },
  email: "bhoumiconsultancy@gmail.com",
  offices: [
    {
      name: "Nilambur Office",
      building: "Madari Building",
      street: "Mini Bypass Road",
      locality: "Nilambur",
      district: "Malappuram",
      state: "Kerala",
      pincode: "679329",
      phone: "+91 99950 67188",
      mapQuery: "Madari+Building+Mini+Bypass+Road+Nilambur+Malappuram+Kerala+679329",
    },
    {
      name: "Wandoor Office",
      building: "Arimbra Building",
      street: "Nilambur Road",
      locality: "Wandoor",
      district: "Malappuram",
      state: "Kerala",
      pincode: "679328",
      phone: "+91 88481 51514",
      mapQuery: "Arimbra+Building+Nilambur+Road+Wandoor+Malappuram+Kerala+679328",
    },
  ],
  insurers: [
    {
      id: "star-health",
      name: "Star Health and Allied Insurance Company Limited",
      shortName: "Star Health",
      officialUrl: "https://www.starhealth.in",
    },
    {
      id: "hdfc-ergo",
      name: "HDFC ERGO General Insurance Company Limited",
      shortName: "HDFC ERGO",
      officialUrl: "https://www.hdfcergo.com",
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Health Insurance Plans", href: "/health-insurance-plans" },
    { label: "About Us", href: "/about-us" },
    { label: "FAQs & Resources", href: "/faqs-resources" },
    { label: "Contact", href: "/contact" },
  ],
  disclaimer:
    "Bhoumi Consultancy provides assistance and guidance relating to health insurance products offered by Star Health and HDFC ERGO from Health Insurance Expert Mr.Sanju Palakkaparamaban. Product features, eligibility, premiums, underwriting, policy issuance, and claim decisions are subject to the respective insurer’s terms, conditions, and policy wording. Customers should review official policy documents before purchasing.",
  importantNotice:
    "Important: Plan availability, benefits, premiums, underwriting decisions, and claim outcomes are determined by the respective insurer and the policy wording. Please review the latest policy documents before purchasing.",
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello Bhoumi Consultancy, I would like to inquire about health insurance plans.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
}
