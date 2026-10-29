import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InsuranceSolutionCard from "@/components/InsuranceSolutionCard";
import InsuranceProviderCard from "@/components/InsuranceProviderCard";
import {
  HEALTH_INSURANCE_OPTIONS,
  HOW_WE_HELP_POINTS,
  OUR_APPROACH_FACTORS,
} from "@/lib/content";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Health Insurance Plans | Star Health & HDFC ERGO | Bhoumi Consultancy",
  description:
    "Explore health insurance options from Star Health and HDFC ERGO with guidance from Bhoumi Consultancy. Get help understanding coverage, policy terms, applications, and renewals.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/health-insurance-plans`,
  },
};

export default function HealthInsurancePlansPage() {
  const primaryPhone = SITE_CONFIG.phones[0];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-primary-subtle/60 via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-neutral-borderSoft">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-subtle">
                <Shield className="w-3.5 h-3.5" />
                <span>Health Insurance Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading leading-[1.18] tracking-tight">
                Health Insurance Guidance for Individuals and Families
              </h1>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Choosing a health insurance policy involves more than comparing premiums. It is important to understand what is covered, applicable limits, waiting periods, exclusions, and the conditions that apply when making a claim.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                Bhoumi Consultancy helps customers explore suitable health insurance options offered by Star Health and HDFC ERGO, based on their stated needs and the terms of the available plans.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to explore health insurance plan options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CALL / Whatsapp: 9995067188</span>
                </a>

                <a
                  href={`tel:${primaryPhone.raw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-heading bg-neutral-light hover:bg-neutral-borderSoft border border-neutral-border transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call {primaryPhone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-border shadow-card bg-neutral-light">
                <Image
                  src="/images/consultation.jpg"
                  alt="Health insurance consultation"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: HEALTH INSURANCE OPTIONS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage Options"
            title="Health Insurance Options"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {HEALTH_INSURANCE_OPTIONS.map((solution) => (
              <InsuranceSolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION: HOW WE HELP */}
      <section className="py-16 lg:py-24 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Support"
            title="How We Help"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {HOW_WE_HELP_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card border border-neutral-border p-6 shadow-subtle flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-sm font-semibold text-heading leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR APPROACH */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Review Framework"
              title="Our Approach"
              description="We help customers review relevant plan information from Star Health and HDFC ERGO and consider factors such as:"
              align="center"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OUR_APPROACH_FACTORS.map((factor, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-light rounded-xl p-5 border border-neutral-border flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-heading leading-snug">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: INSURANCE PROVIDERS */}
      <section className="py-16 lg:py-24 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official Insurers"
            title="Insurance Providers"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InsuranceProviderCard
              name="Star Health and Allied Insurance Company Limited"
              shortName="Star Health"
              logoSrc="/logos/star-health.jpg"
              officialUrl="https://www.starhealth.in"
            />

            <InsuranceProviderCard
              name="HDFC ERGO General Insurance Company Limited"
              shortName="HDFC ERGO"
              logoSrc="/logos/hdfc-ergo.png"
              officialUrl="https://www.hdfcergo.com"
            />
          </div>

          {/* Important Notice */}
          <div className="mt-10 max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Important:</strong> Plan availability, benefits, premiums, underwriting decisions, and claim outcomes are determined by the respective insurer and the policy wording. Please review the latest policy documents before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Health Insurance Guidance for Individuals and Families
          </h2>
          <p className="text-base text-blue-100">
            Bhoumi Consultancy helps customers explore suitable health insurance options offered by Star Health and HDFC ERGO.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to explore health insurance plan options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CALL / Whatsapp: 9995067188</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
