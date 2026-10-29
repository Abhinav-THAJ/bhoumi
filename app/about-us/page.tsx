import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle2,
  MessageCircle,
  Phone,
  Building,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SANJU_AREAS_OF_EXPERIENCE } from "@/lib/content";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Leadership — Sanju P B | Bhoumi Consultancy",
  description:
    "Sanju P B is an insurance professional with more than 15 years of experience across the healthcare and health insurance sectors.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about-us`,
  },
};

export default function AboutUsPage() {
  const primaryPhone = SITE_CONFIG.phones[0];
  const advisor = SITE_CONFIG.advisor;

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-primary-subtle/50 via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-neutral-borderSoft">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-subtle">
                <Shield className="w-3.5 h-3.5" />
                <span>Leadership — Sanju P B</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading leading-[1.18] tracking-tight">
                Health Insurance Experience You Can Rely On
              </h1>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                {advisor.bio1}
              </p>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                {advisor.bio2}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
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
                  src="/images/advisory-office.jpg"
                  alt="Sanju P B health insurance advisory desk"
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

      {/* 2. SECTION: AREAS OF EXPERIENCE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialization"
            title="Areas of Experience"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SANJU_AREAS_OF_EXPERIENCE.map((area, idx) => (
              <div
                key={idx}
                className="bg-neutral-light rounded-card border border-neutral-border p-6 shadow-subtle flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <h3 className="text-base font-bold text-heading leading-snug">
                  {area}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-primary-subtle border border-primary/20 rounded-2xl p-6 sm:p-8 text-center space-y-3">
            <p className="text-base sm:text-lg text-heading font-medium leading-relaxed">
              At Bhoumi Consultancy, the focus is on helping customers understand health insurance options offered by Star Health and HDFC ERGO and navigate the application and policy-servicing process with greater clarity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION: PRIOR HOSPITAL LEADERSHIP */}
      <section className="py-16 lg:py-20 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-secondary border border-secondary/20">
            <Building className="w-3.5 h-3.5" />
            <span>Healthcare Background</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
            Hospital Insurance Leadership Experience
          </h2>

          <p className="text-base text-body leading-relaxed">
            Prior insurance leadership roles at hospitals including <strong>Aster Medcity</strong> and <strong>Meitra Hospital</strong>, gaining practical experience in hospital insurance systems, claim documentation, and coordination between healthcare providers and insurers.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CALL / Whatsapp: 9995067188</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-heading bg-white hover:bg-neutral-light border border-neutral-border transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
