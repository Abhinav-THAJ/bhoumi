import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Globe,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import OfficeCard from "@/components/OfficeCard";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Bhoumi Consultancy",
  description:
    "Let’s Find the Right Health Insurance Option for You. Nilambur and Wandoor offices. Phone: +91 99950 67188, 8848151514.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const primaryPhone = SITE_CONFIG.phones[0];
  const secondaryPhone = SITE_CONFIG.phones[1];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION & ENQUIRY GRID */}
      <section className="bg-gradient-to-b from-primary-subtle/50 via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-neutral-borderSoft">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-subtle mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Bhoumi Consultancy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-heading leading-[1.18] tracking-tight">
              Let’s Find the Right Health Insurance Option for You
            </h1>

            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
              Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Get in Touch & 4 CTAs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Get in Touch Card */}
              <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-7 shadow-card space-y-5">
                <h3 className="text-xl font-bold text-heading border-b border-neutral-borderSoft pb-3">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-light border border-neutral-border">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-body">
                        Phone Numbers
                      </span>
                      <div className="text-sm sm:text-base font-bold text-heading flex flex-wrap gap-2 pt-0.5">
                        <a href={`tel:${primaryPhone.raw}`} className="hover:text-primary transition-colors">
                          {primaryPhone.display}
                        </a>
                        <span className="text-gray-400">,</span>
                        <a href={`tel:${secondaryPhone.raw}`} className="hover:text-primary transition-colors">
                          {secondaryPhone.display}
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-light hover:bg-primary-subtle border border-neutral-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-bold uppercase tracking-wider text-body">
                        Email
                      </span>
                      <span className="text-sm sm:text-base font-bold text-heading group-hover:text-primary transition-colors truncate block">
                        {SITE_CONFIG.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={SITE_CONFIG.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-light hover:bg-primary-subtle border border-neutral-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-body">
                        Website
                      </span>
                      <span className="text-sm sm:text-base font-bold text-heading group-hover:text-primary transition-colors">
                        bhoumiconsultancy.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Suggested Calls to Action */}
              <div className="bg-navy text-white rounded-card-lg p-6 sm:p-7 shadow-card space-y-4">
                <h4 className="text-base font-bold text-white">
                  Suggested Calls to Action
                </h4>

                <div className="space-y-2.5">
                  {/* Call Button */}
                  <a
                    href={`tel:${primaryPhone.raw}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us for Health Insurance Guidance</span>
                  </a>

                  {/* Request a Call Back (Whatsapp Button) */}
                  <a
                    href={getWhatsAppUrl("Hello Bhoumi Consultancy, please call me back regarding health insurance guidance.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Request a Call Back (WhatsApp)</span>
                  </a>

                  {/* Ask About Star Health Plans (Whatsapp Button) */}
                  <a
                    href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to ask about Star Health plans.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Ask About Star Health Plans (WhatsApp)</span>
                  </a>

                  {/* Ask About HDFC ERGO Plans (Whatsap Button) */}
                  <a
                    href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to ask about HDFC ERGO plans.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Ask About HDFC ERGO Plans (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: OFFICES */}
      <section className="py-16 lg:py-24 bg-neutral-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Locations"
            title="Bhoumi Consultancy Offices"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SITE_CONFIG.offices.map((office, idx) => (
              <OfficeCard key={idx} office={office} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
