# Bhoumi Consultancy — Health Insurance Advisory Website

A production-grade, accessible, and conversion-focused website for **Bhoumi Consultancy**, a dedicated health insurance advisory service operating in Nilambur and Wandoor, Malappuram, Kerala, India.

Specialized exclusively in health insurance guidance relating to **Star Health and Allied Insurance Company Limited** and **HDFC ERGO General Insurance Company Limited**, led by Health Insurance Expert **Sanju P B** (Mr. Sanju Palakkaparamaban) with 15+ years of healthcare and hospital insurance operations experience.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom branding tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod
- **Images & Fonts**: `next/image` (WebP/AVIF) & `next/font/google` (Inter & Plus Jakarta Sans)
- **SEO**: Metadata API, Open Graph, Twitter Cards, Sitemap, Robots, and Schema.org LocalBusiness structured data

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── enquiry/route.ts      # Validated API endpoint with WhatsApp fallback
│   ├── about-us/page.tsx         # Page 3: About Us & Sanju P B Profile
│   ├── contact/page.tsx          # Page 5: Contact, Offices & Enquiry Form
│   ├── faqs-resources/page.tsx   # Page 4: 10 FAQs & 4 Educational Guides
│   ├── health-insurance-plans/page.tsx # Page 2: 8 Plan Options & Policy Literacy
│   ├── favicon.svg               # Vector brand tab icon
│   ├── globals.css               # Design system & accessible focus styles
│   ├── layout.tsx                # Root layout with fonts, JSON-LD Schema & chrome
│   ├── page.tsx                  # Page 1: Homepage & conversion flow
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/
│   ├── AdvisorProfile.tsx        # Sanju P B experience & leadership card
│   ├── ContactForm.tsx           # Zod validated form with WhatsApp direct action
│   ├── EducationalGuideCard.tsx  # Interactive policy literacy guides
│   ├── FAQAccordion.tsx          # Accessible ARIA accordion
│   ├── InsuranceProviderCard.tsx # Star Health & HDFC ERGO verification cards
│   ├── InsuranceSolutionCard.tsx # 8 solution categories with WhatsApp CTAs
│   ├── OfficeCard.tsx            # Nilambur & Wandoor office location cards
│   ├── SectionHeading.tsx        # Consistent typographic section headers
│   ├── SiteFooter.tsx            # Full footer with mandatory legal disclaimer
│   ├── SiteHeader.tsx            # Sticky header with desktop strip & mobile menu
│   └── WhatsAppFloatingButton.tsx# Floating advisory WhatsApp action
├── lib/
│   ├── constants.ts              # Business details, offices, phones, wa.me generator
│   └── content.ts                # Authoritative content & FAQ data models
└── public/
    ├── images/                   # Photorealistic 16:9 imagery
    └── logos/                    # Brand & authorized insurer vector logos
```

---

## 🛠️ Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🔒 Environment Variables (Optional)

The website features an automatic fallback that directs enquiries directly to the official WhatsApp desk (`+91 99950 67188`). To enable direct server-side SMTP email dispatch, provide the following in `.env.local`:

```env
SMTP_HOST="smtp.provider.com"
SMTP_PORT=587
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-app-password"
SMTP_FROM="enquiry@bhoumiconsultancy.com"
```

---

## ⚖️ Compliance & Advisory Disclaimer

> **Bhoumi Consultancy** provides assistance and guidance relating to health insurance products offered by **Star Health and Allied Insurance Company Limited** and **HDFC ERGO General Insurance Company Limited** from Health Insurance Expert **Mr. Sanju Palakkaparamaban**. Product features, eligibility, premiums, underwriting, policy issuance, and claim decisions are subject to the respective insurer's terms, conditions, and policy wording. Customers should review official policy documents before purchasing.

# bhoumi
