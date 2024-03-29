import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Outfit, Unbounded } from "next/font/google";
import Footer from "@/components/ui/Footer";
import MobileHeader from "@/components/ui/MobileHeader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export const metadata = {
  title: "Brandon Mitchell - Portfolio",
  description: "Portfolio of Brandon Mitchell, Software Developer",
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
