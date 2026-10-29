"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/lib/content";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export default function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "bg-white border-primary/40 shadow-card"
                : "bg-white/80 border-neutral-border hover:border-neutral-borderSoft hover:bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
              className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold transition-colors ${
                    isOpen
                      ? "bg-primary text-white"
                      : "bg-primary-subtle text-primary"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="font-bold text-base sm:text-lg text-heading leading-snug">
                  {item.question}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-primary-subtle text-primary"
                    : "bg-neutral-light text-body"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-body leading-relaxed border-t border-neutral-borderSoft"
              >
                <div className="pl-10 sm:pl-11">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

