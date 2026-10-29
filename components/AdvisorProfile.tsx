import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { SANJU_AREAS_OF_EXPERIENCE } from "@/lib/content";

interface AdvisorProfileProps {
  showFullDetails?: boolean;
}

export default function AdvisorProfile({ showFullDetails = false }: AdvisorProfileProps) {
  const advisor = SITE_CONFIG.advisor;

  return (
    <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-10 lg:p-12 shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-border shadow-subtle bg-neutral-light">
            <Image
              src="/images/advisory-office.jpg"
              alt="Health insurance advisory consultation setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Nilambur &bull; Wandoor
              </span>
              <p className="text-sm font-semibold">
                Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Text Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-subtle px-3 py-1 rounded-full border border-primary/20 inline-block">
            Leadership &bull; {advisor.experienceYears} of Experience
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-heading">
            {advisor.name}
          </h3>

          <p className="text-sm sm:text-base text-body leading-relaxed">
            {advisor.bio1}
          </p>

          <p className="text-sm sm:text-base text-body leading-relaxed">
            {advisor.bio2}
          </p>

          <p className="text-sm sm:text-base text-body leading-relaxed">
            {advisor.focus}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
            >
              <span>Consult with Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {!showFullDetails && (
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl font-bold text-sm text-heading hover:text-primary bg-neutral-light hover:bg-neutral-borderSoft border border-neutral-border transition-colors"
              >
                <span>Read More</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Areas of Experience */}
      <div className="mt-10 pt-8 border-t border-neutral-borderSoft">
        <h4 className="text-lg font-bold text-heading mb-4">
          Areas of Experience
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SANJU_AREAS_OF_EXPERIENCE.map((area, idx) => (
            <div
              key={idx}
              className="bg-neutral-light rounded-xl p-4 border border-neutral-borderSoft flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-heading">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
