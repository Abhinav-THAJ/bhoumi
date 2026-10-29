import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-light/40">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white px-3.5 py-2 rounded-2xl inline-block shadow-sm">
              <div className="relative h-11 w-48 sm:w-56">
                <Image
                  src="/logo.png"
                  alt="Bhoumi Consultancy logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Bhoumi Consultancy helps individuals and families explore health insurance plans offered by Star Health and HDFC ERGO.
            </p>

            <div className="pt-1 flex flex-col gap-2 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>Phone: +91 99950 67188, 8848151514</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>Email: {SITE_CONFIG.email}</span>
              </div>
              <div className="text-xs text-gray-400 pt-1">
                Website: bhoumiconsultancy.com
              </div>
            </div>
          </div>

          {/* Navigation Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight border-l-2 border-secondary pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight border-l-2 border-secondary pl-2.5">
              Offices
            </h4>

            {/* Nilambur Office */}
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 text-xs text-gray-300 space-y-1">
              <div className="font-bold text-white text-sm flex items-center justify-between">
                <span>Nilambur Office</span>
                <MapPin className="w-3.5 h-3.5 text-secondary" />
              </div>
              <p>Madari Building</p>
              <p>Mini Bypass Road</p>
              <p>Nilambur, Malappuram, Kerala – 679329</p>
            </div>

            {/* Wandoor Office */}
            <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 text-xs text-gray-300 space-y-1">
              <div className="font-bold text-white text-sm flex items-center justify-between">
                <span>Wandoor Office</span>
                <MapPin className="w-3.5 h-3.5 text-secondary" />
              </div>
              <p>Arimbra Building</p>
              <p>Nilambur Road</p>
              <p>Wandoor, Malappuram, Kerala – 679328</p>
            </div>
          </div>

          {/* Insurance Providers (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold tracking-tight border-l-2 border-secondary pl-2.5">
              Insurance Providers
            </h4>

            <div className="space-y-2.5">
              <div className="bg-[#1b63b7] rounded-xl p-2.5 border border-white/20 shadow-sm overflow-hidden">
                <div className="relative h-10 w-full">
                  <Image
                    src="/logos/star-health.jpg"
                    alt="Star Health logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <div className="bg-[#ED1C24] rounded-xl p-2.5 border border-white/20 shadow-sm overflow-hidden">
                <div className="relative h-10 w-full">
                  <Image
                    src="/logos/hdfc-ergo.png"
                    alt="HDFC ERGO logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white transition-colors"
              >
                <span>CALL / Whatsapp: 9995067188</span>
              </a>
            </div>
          </div>
        </div>

        {/* Suggested Disclaimer */}
        <div className="pt-8 pb-6 border-b border-white/10">
          <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Suggested Disclaimer
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Website: bhoumiconsultancy.com
          </div>
        </div>
      </div>
    </footer>
  );
}
