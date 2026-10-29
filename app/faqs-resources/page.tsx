import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FileQuestion,
  MessageCircle,
  Phone,
  ShieldAlert,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import EducationalGuideCard from "@/components/EducationalGuideCard";
import { FAQ_LIST, EDUCATIONAL_GUIDES } from "@/lib/content";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs & Resources | Bhoumi Consultancy",
  description:
    "Explore health insurance options from Star Health and HDFC ERGO with guidance from Bhoumi Consultancy. Get help understanding coverage, policy terms, applications, and renewals.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/faqs-resources`,
  },
};

export default function FaqsResourcesPage() {
  const primaryPhone = SITE_CONFIG.phones[0];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-primary-subtle/70 via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-neutral-borderSoft">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-subtle">
                <FileQuestion className="w-3.5 h-3.5" />
                <span>FAQs &amp; Resources</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading leading-[1.18] tracking-tight">
                Understanding Health Insurance Benefits, Waiting Periods, and Exclusions
              </h1>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO. We provide guidance to help customers understand available coverage, policy features, eligibility, waiting periods, exclusions, and the application process.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#faq-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
                >
                  <span>Frequently Asked Questions</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Bhoumi Consultancy, I have a question regarding health insurance terms.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-heading bg-neutral-light hover:bg-neutral-borderSoft border border-neutral-border transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>CALL / Whatsapp: 9995067188</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-border shadow-card bg-neutral-light">
                <Image
                  src="/images/insurance-guide.jpg"
                  alt="Understanding health insurance documents and coverage"
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

      {/* 2. SECTION: ACCORDION FAQS */}
      <section id="faq-section" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Helpful Answers"
            title="Frequently Asked Questions"
            description="Clear guidance on health insurance plans, policy terms, and advisory procedures."
            align="center"
          />

          <div className="mt-12">
            <FAQAccordion items={FAQ_LIST} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* 3. SECTION: HELPFUL GUIDES */}
      <section className="py-16 lg:py-24 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Suggested Resources"
            title="Health Insurance Application and Policy Support"
            description="Guidance on policy features, required documentation, and claim procedures."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {EDUCATIONAL_GUIDES.map((guide) => (
              <EducationalGuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: DISCLAIMER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-subtle border border-primary/20 rounded-2xl p-6 sm:p-8 space-y-3 text-left">
            <div className="flex items-center gap-2.5 text-primary font-bold text-sm uppercase tracking-wider">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>Suggested Disclaimer</span>
            </div>
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 5. SECTION: CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Have Questions About Health Insurance?
          </h2>
          <p className="text-base text-gray-300">
            Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I have questions about health insurance plans.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-primary hover:bg-primary-hover text-white shadow-button transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CALL / Whatsapp: 9995067188</span>
            </a>

            <a
              href={`tel:${primaryPhone.raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {primaryPhone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
