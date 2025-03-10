import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Outfit, Unbounded } from "next/font/google";
import Footer from "@/components/ui/Footer";
import MobileHeader from "@/components/ui/MobileHeader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Person, WithContext } from "schema-dts";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
});
const unbounded = Unbounded({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--font-unbounded",
});

export const schema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brandon Mitchell",
  description:
    "Frontend Developer specializing in modern web technologies, UI/UX, and performance optimization.",
  jobTitle: "Frontend Developer",
  url: "https://brandon-mitchell.dev",
  image:
    "https://www.brandon-mitchell.dev/me1.jpg",
  sameAs: [
    "https://www.linkedin.com/in/brandonmitchell217/",
    "https://www.github.com/brandonmitchell217"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiry",
    url: "https://brandon-mitchell.dev/contact"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raleigh",
    addressRegion: "North Carolina",
    addressCountry: "US",
  },
  knowsAbout: [
    "Frontend Development",
    "Web Development",
    "Web Design",
    "Email Development",
    "Responsive Design",
    "Mobile-First Design",
    "Cross-Browser Compatibility",
    "Accessibility",
    "Web Performance",
    "Web Accessibility",
    "Software Development",
    "UI/UX Design",
    "Performance Optimization",
    "SEO",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SCSS",
    "React",
    "Vue.js",
    "Next.js",
    "GraphQL",
    "TailwindCSS",
    "Bootstrap",
    "HubSpot CMS",
    "HubL",
    "Node.js",
    "Figma",
    "Storybook"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Mole Street",
    url: "https://www.molestreet.com/"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="en"
        className={`${outfit.variable} ${unbounded.variable} scroll-smooth`}
      >
        <head>
        <title>Brandon Mitchell | Frontend Developer</title>
        <meta name="description" content="Portfolio of Brandon Mitchell, a frontend developer from Raleigh, North Carolina who specializes in React, Next.js, HubSpot CMS and TailwindCSS. I developer responsive, performant websites and web applications." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        </head>
        <body className="h-full bg-light text-dark relative z-[1] font-outfit flex flex-col items-center">
          <Nav />
          <MobileHeader />
          {children}
          <Footer />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
