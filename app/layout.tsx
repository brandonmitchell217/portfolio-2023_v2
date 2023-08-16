import Nav from "@/components/ui/Nav";
import "./globals.css";
import { Outfit, Unbounded } from "next/font/google";
import Footer from "@/components/ui/Footer";
import MobileHeader from "@/components/ui/MobileHeader";
import Head from "next/head";
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
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            page_path: window.location.pathname,
          })
        `,
            }}
          />
        </Head>
        <body
          suppressHydrationWarning={true}
          className="h-full bg-light text-dark relative z-[1] font-outfit flex flex-col items-center"
        >
          <Nav />
          <MobileHeader />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
