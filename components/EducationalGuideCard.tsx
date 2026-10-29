"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { EducationalGuide } from "@/lib/content";

interface EducationalGuideCardProps {
  guide: EducationalGuide;
}

export default function EducationalGuideCard({ guide }: EducationalGuideCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-white rounded-card border border-neutral-border p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-secondary bg-neutral-light px-2.5 py-1 rounded-full border border-neutral-border">
            Policy Guide
          </span>
        </div>

        <h3 className="text-lg font-bold text-heading leading-snug">
          {guide.title}
        </h3>

        <p className="mt-3 text-sm text-body leading-relaxed">
          {guide.summary}
        </p>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-neutral-borderSoft space-y-2.5 animate-in fade-in duration-200">
            <ul className="space-y-2 text-xs text-body">
              {guide.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-borderSoft">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover py-2 rounded-lg hover:bg-primary-subtle transition-colors"
        >
          <span>{expanded ? "Show Less" : "Read Details"}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </article>
  );
}
