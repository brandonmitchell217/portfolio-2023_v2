import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import { SocialHover } from "@/components/Contact/SocialHover";
import { SocialLinks } from "@/lib/util";
import SectionTitle from "@/components/SectionTitle";
import MobileHeader from "@/components/ui/MobileHeader";
import Social from "@/components/Contact/Social";

export default function ContactPage() {
  return (
    <main className="w-full h-screen lg:h-auto">
      <MobileHeader />
      <section className="max-w-7xl m-auto px-3 py-24 md:py-36 space-y-24">
        <div className="space-y-12 lg:space-y-0">
          <SectionTitle title="Contact" size="large" />
          <div className="w-full px-4">
            <ContactForm />
          </div>
        </div>
        <div>
          {/* <SocialHover links={SocialLinks} /> */}
          <Social links={SocialLinks} />
        </div>
      </section>
    </main>
  );
}
