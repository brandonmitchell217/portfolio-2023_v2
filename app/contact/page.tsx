import React from "react";
import ContactForm from "@/components/ContactForm";
import { SocialHover } from "@/components/SocialHover";
import { SocialLinks } from "@/lib/util";
import SectionTitle from "@/components/SectionTitle";
import Social from "@/components/Social";

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="max-w-7xl m-auto px-3 py-28 md:py-36 space-y-24">
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
