import React from "react";
import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface InsuranceProviderCardProps {
  name: string;
  shortName: string;
  logoSrc: string;
  officialUrl: string;
}

export default function InsuranceProviderCard({
  name,
  shortName,
  logoSrc,
  officialUrl,
}: InsuranceProviderCardProps) {
  const waUrl = getWhatsAppUrl(
    `Hello Bhoumi Consultancy, I would like to ask about ${shortName} plans.`
  );

  return (
    <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="h-16 w-full relative mb-6 pb-2 border-b border-neutral-borderSoft flex items-center">
          <div
            className={`relative h-12 rounded-xl overflow-hidden p-1.5 ${
              logoSrc.includes("star-health")
                ? "bg-[#1b63b7] w-56"
                : "bg-[#ED1C24] w-36"
            }`}
          >
            <Image
              src={logoSrc}
              alt={name}
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-subtle px-2.5 py-1 rounded-full border border-primary/20 inline-block mb-3">
          Insurance Provider
        </span>

        <h3 className="text-xl font-bold text-heading leading-snug">
          {name}
        </h3>
      </div>

      <div className="mt-8 pt-5 border-t border-neutral-borderSoft flex flex-col sm:flex-row items-center gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask About {shortName} Plans</span>
        </a>

        <a
          href={officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-body hover:text-heading bg-neutral-light hover:bg-neutral-borderSoft border border-neutral-border transition-colors"
        >
          <span>Official Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
