import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Outfit, Unbounded } from "next/font/google";
import Footer from "@/components/ui/Footer";
import MobileHeader from "@/components/ui/MobileHeader";
import Script from "next/script";
import { gaMeasurementId } from "@/lib/gtag";

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
  description: "Portfolio of Brandon Mitchell, a frontend developer",
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
        </body>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
      </html>
    </>
  );
}
