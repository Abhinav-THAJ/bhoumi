import React from "react";
import { MapPin, Phone, ExternalLink, Navigation } from "lucide-react";
import { OfficeLocation, getWhatsAppUrl } from "@/lib/constants";

interface OfficeCardProps {
  office: OfficeLocation;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${office.building}, ${office.street}, ${office.locality}, ${office.district}, ${office.state} ${office.pincode}`
  )}`;

  const waOfficeUrl = getWhatsAppUrl(
    `Hello Bhoumi Consultancy, I would like to visit or consult with your ${office.name} regarding health insurance options.`
  );

  return (
    <div className="bg-white rounded-card-lg border border-neutral-border p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-primary-subtle/60 px-3 py-1 rounded-full border border-primary/20">
            Advisory Desk
          </span>
        </div>

        <h3 className="text-xl font-bold text-heading">
          {office.name}
        </h3>

        <div className="mt-4 space-y-1.5 text-sm text-body">
          <p className="font-semibold text-heading">{office.building}</p>
          <p>{office.street}</p>
          <p>{office.locality}, {office.district}</p>
          <p>{office.state} – {office.pincode}</p>
        </div>

        <div className="mt-5 pt-4 border-t border-neutral-borderSoft">
          <span className="text-xs text-body font-medium block mb-1">Direct Phone</span>
          <a
            href={`tel:${office.phone.replace(/\s+/g, "")}`}
            className="text-base font-bold text-primary hover:text-primary-hover flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{office.phone}</span>
          </a>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-borderSoft flex flex-col sm:flex-row items-center gap-3">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-light hover:bg-neutral-borderSoft text-heading border border-neutral-border transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-primary" />
          <span>View on Map</span>
          <ExternalLink className="w-3 h-3 text-body" />
        </a>

        <a
          href={waOfficeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-hover shadow-button transition-colors"
        >
          <span>Chat with Office</span>
        </a>
      </div>
    </div>
  );
}

