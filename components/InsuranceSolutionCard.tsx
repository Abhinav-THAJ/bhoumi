import React from "react";
import {
  User,
  Users,
  HeartPulse,
  ShieldCheck,
  ArrowUpCircle,
  FileCheck2,
  Plane,
  Building2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { SolutionItem } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  User,
  Users,
  HeartPulse,
  ShieldCheck,
  ArrowUpCircle,
  FileCheck2,
  Plane,
  Building2,
};

interface InsuranceSolutionCardProps {
  solution: SolutionItem;
}

export default function InsuranceSolutionCard({ solution }: InsuranceSolutionCardProps) {
  const IconComponent = ICON_MAP[solution.iconName] || ShieldCheck;

  const waLink = getWhatsAppUrl(
    `Hello Bhoumi Consultancy, I would like to ask about ${solution.title}.`
  );

  return (
    <div className="bg-white rounded-card border border-neutral-border hover:border-primary/40 p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary-subtle text-primary flex items-center justify-center border border-primary/20">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-body/90 bg-neutral-light px-3 py-1 rounded-full border border-neutral-border">
            Star Health &bull; HDFC ERGO
          </span>
        </div>

        <h3 className="text-lg font-bold text-heading leading-snug">
          {solution.title}
        </h3>
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-borderSoft">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-neutral-light hover:bg-primary text-heading hover:text-white border border-neutral-border hover:border-primary transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
          <span>Ask About This Option</span>
          <ArrowRight className="w-3.5 h-3.5 ml-0.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
