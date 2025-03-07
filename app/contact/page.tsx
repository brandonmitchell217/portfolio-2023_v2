import React from "react";
import ContactForm from "@/components/ContactForm";
import { SocialLinks } from "@/lib/util";
import SectionTitle from "@/components/SectionTitle";
import Social from "@/components/Social";

export default function ContactPage() {
  return (
    <main className="w-full">
      <section aria-label="Contact" className="max-w-7xl m-auto px-2 sm:px-4 py-28 md:py-36 space-y-24">
        <div className="space-y-12 lg:space-y-0">
          <SectionTitle title="Contact" size="large" />
          <div className="w-full px-4">
            <ContactForm />
          </div>
        </div>
        <div>
          <Social links={SocialLinks} new_tab={true} hover_text={true} />
        </div>
      </section>
    </main>
  );
}
