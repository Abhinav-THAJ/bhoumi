"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after slight scroll or small delay
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 1200);

    const tooltipDismiss = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipDismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Direct WhatsApp Advisory Chat"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-navy text-white text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center gap-2 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300 border border-white/10">
          <span>Need guidance on Star Health or HDFC ERGO? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult with an advisor regarding health insurance plans.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Health Insurance Advisor on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="font-bold text-sm hidden sm:inline-block pr-1 tracking-wide">
          Chat with Advisor
        </span>
      </a>
    </aside>
  );
}

