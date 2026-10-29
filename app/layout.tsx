import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1557B0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Health Insurance Plans | Star Health & HDFC ERGO | Bhoumi Consultancy",
    template: "%s | Bhoumi Consultancy",
  },
  description:
    "Explore health insurance options from Star Health and HDFC ERGO with guidance from Bhoumi Consultancy. Get help understanding coverage, policy terms, applications, and renewals.",
  keywords: [
    "health insurance advisory",
    "Star Health insurance plans",
    "HDFC ERGO health insurance",
    "family health insurance",
    "individual health insurance",
    "senior citizen health insurance",
    "health insurance in Nilambur",
    "health insurance in Wandoor",
    "Bhoumi Consultancy",
  ],
  authors: [{ name: SITE_CONFIG.advisor.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Health Insurance Plans | Star Health & HDFC ERGO | Bhoumi Consultancy",
    description:
      "Explore health insurance options from Star Health and HDFC ERGO with guidance from Bhoumi Consultancy. Get help understanding coverage, policy terms, applications, and renewals.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-family.jpg",
        width: 1200,
        height: 675,
        alt: "Bhoumi Consultancy - Health Insurance Advisory in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insurance Plans | Star Health & HDFC ERGO | Bhoumi Consultancy",
    description:
      "Explore health insurance options from Star Health and HDFC ERGO with guidance from Bhoumi Consultancy.",
    images: ["/images/hero-family.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": `${SITE_CONFIG.url}/#agency`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        image: `${SITE_CONFIG.url}/images/hero-family.jpg`,
        telephone: [SITE_CONFIG.phones[0].raw, SITE_CONFIG.phones[1].raw],
        email: SITE_CONFIG.email,
        description:
          "Health insurance advisory service in Kerala offering guidance on plans from Star Health and Allied Insurance Company Limited and HDFC ERGO General Insurance Company Limited.",
        founder: {
          "@type": "Person",
          name: SITE_CONFIG.advisor.name,
          jobTitle: SITE_CONFIG.advisor.title,
        },
        address: SITE_CONFIG.offices.map((office) => ({
          "@type": "PostalAddress",
          streetAddress: `${office.building}, ${office.street}`,
          addressLocality: office.locality,
          addressRegion: office.state,
          postalCode: office.pincode,
          addressCountry: "IN",
        })),
        areaServed: {
          "@type": "State",
          name: "Kerala",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased selection:bg-primary-subtle selection:text-primary">
        <SiteHeader />
        <main id="main-content" className="min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

