"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const primaryPhone = SITE_CONFIG.phones[0];
  const secondaryPhone = SITE_CONFIG.phones[1];

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top Contact Strip (Desktop) */}
      <div className="hidden lg:block bg-navy text-white text-xs py-2 px-4 border-b border-navy-light/40">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Nilambur Office &bull; Wandoor Office (Kerala)</span>
            </span>
            <span>Health Insurance Advisory • Star Health • HDFC ERGO</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-300">Phone:</span>
            <a
              href={`tel:${primaryPhone.raw}`}
              className="font-semibold text-white hover:text-blue-200 transition-colors"
            >
              {primaryPhone.display}
            </a>
            <span className="text-gray-500">,</span>
            <a
              href={`tel:${secondaryPhone.raw}`}
              className="font-semibold text-white hover:text-blue-200 transition-colors"
            >
              {secondaryPhone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full border-b transition-shadow ${
          scrolled
            ? "shadow-md border-neutral-border bg-white/95 backdrop-blur-md"
            : "border-neutral-borderSoft bg-white"
        }`}
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group py-2"
            aria-label="Bhoumi Consultancy - Home"
          >
            <div className="relative h-12 w-48 sm:w-56 md:w-60 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/logo.png"
                alt="Bhoumi Consultancy logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-primary bg-primary-subtle font-bold"
                      : "text-heading hover:text-primary hover:bg-neutral-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-button transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>CALL / Whatsapp: 9995067188</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${primaryPhone.raw}`}
              aria-label="Call Bhoumi Consultancy"
              className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center border border-primary/20 active:bg-primary active:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="w-10 h-10 rounded-xl bg-neutral-light text-heading flex items-center justify-center border border-neutral-border focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-border bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-4 pb-6 space-y-3">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-primary bg-primary-subtle font-bold"
                        : "text-heading hover:bg-neutral-light"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-neutral-border space-y-2.5">
              <a
                href={getWhatsAppUrl("Hello Bhoumi Consultancy, I would like to consult on health insurance plans.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-sm bg-primary text-white shadow-button"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CALL / Whatsapp: 9995067188</span>
              </a>

              <a
                href={`tel:${primaryPhone.raw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-neutral-light text-heading border border-neutral-border"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call {primaryPhone.display}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-center text-body">
              Nilambur &bull; Wandoor &bull; Star Health &bull; HDFC ERGO
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
