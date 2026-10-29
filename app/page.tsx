import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InsuranceSolutionCard from "@/components/InsuranceSolutionCard";
import AdvisorProfile from "@/components/AdvisorProfile";
import {
  HEALTH_INSURANCE_OPTIONS,
  WHY_CHOOSE_POINTS,
  HOW_WE_HELP_POINTS,
} from "@/lib/content";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function HomePage() {
  const primaryPhone = SITE_CONFIG.phones[0];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-primary-subtle/50 via-white to-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-neutral-borderSoft">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Primary H1 for SEO */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-subtle">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Health Insurance Advisory • Star Health • HDFC ERGO</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading leading-[1.15] tracking-tight">
                Health Insurance That Protects What Matters Most
              </h1>

              <p className="text-base sm:text-lg text-body leading-relaxed max-w-2xl">
                Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO. We provide guidance to help customers understand available coverage, policy features, eligibility, waiting periods, exclusions, and the application process.
              </p>

              <div className="bg-primary-subtle/80 border-l-4 border-primary p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-heading">
                  Our focus is simple: help you make an informed health insurance decision for yourself and your family.
                </p>
              </div>

              {/* Primary Calls to Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base bg-primary hover:bg-primary-hover text-white shadow-button transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>CALL / Whatsapp: 9995067188</span>
                </a>

                <Link
                  href="/health-insurance-plans"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-heading hover:text-primary bg-white hover:bg-neutral-light border border-neutral-border shadow-subtle transition-colors"
                >
                  <span>Explore Health Insurance Plans</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Family Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-border shadow-card bg-neutral-light">
                <Image
                  src="/images/hero-family.jpg"
                  alt="Health insurance or family protection"
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

      {/* 2. TRUST STRIP: STAR HEALTH & HDFC ERGO LOGOS */}
      <section className="bg-white border-b border-neutral-border py-8">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-sm sm:text-base font-bold text-heading">
                Health Insurance Advisory for Individuals and Families
              </h2>
              <p className="text-xs text-body">
                Guidance on plans from Star Health and HDFC ERGO
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <div className="h-14 px-3 py-1.5 bg-[#1b63b7] rounded-xl border border-neutral-border flex items-center justify-center overflow-hidden shadow-sm">
                <div className="relative h-11 w-44">
                  <Image
                    src="/logos/star-health.jpg"
                    alt="Star Health logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="h-14 px-4 py-1.5 bg-[#ED1C24] rounded-xl border border-neutral-border flex items-center justify-center overflow-hidden shadow-sm">
                <div className="relative h-11 w-32">
                  <Image
                    src="/logos/hdfc-ergo.png"
                    alt="HDFC ERGO logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: WHO WE ARE */}
      <section className="py-16 lg:py-24 bg-neutral-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-border shadow-card bg-white">
                <Image
                  src="/images/consultation.jpg"
                  alt="Health insurance consultation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20">
                <span>Who We Are</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Health Insurance Guidance, Made Clear
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Bhoumi Consultancy is a health insurance advisory service focused exclusively on health insurance plans from Star Health and HDFC ERGO. We aim to make the process of understanding, selecting, and applying for health insurance clearer and more convenient.
              </p>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR CORE SERVICE & HEALTH INSURANCE OPTIONS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Core Service"
            title="Health Insurance Advisory"
            description="Individual and family health insurance options, senior citizen plans, and other eligible health insurance products available from Star Health and HDFC ERGO, subject to insurer terms and eligibility."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {HEALTH_INSURANCE_OPTIONS.map((solution) => (
              <InsuranceSolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: WHY CHOOSE BHOUMI CONSULTANCY */}
      <section className="py-16 lg:py-24 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Advisory Guidance"
            title="Why Choose Bhoumi Consultancy"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card border border-neutral-border p-6 shadow-subtle hover:shadow-card transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-heading leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: HOW WE HELP */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process Support"
            title="How We Help"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_HELP_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-light rounded-card border border-neutral-border p-6 shadow-subtle flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Step 0{idx + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-heading leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: LEADERSHIP — SANJU P B */}
      <section className="py-16 lg:py-24 bg-neutral-light border-t border-neutral-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeading
              eyebrow="Leadership — Sanju P B"
              title="Health Insurance Experience You Can Rely On"
              align="center"
            />
          </div>

          <AdvisorProfile showFullDetails={false} />
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Health Insurance Advisory • Star Health • HDFC ERGO
          </h2>
          <p className="text-base text-gray-300">
            Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
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
