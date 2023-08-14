import ContactForm from "@/components/Contact/ContactForm";
import { SocialHover } from "@/components/Contact/SocialHover";
import Star from "@/components/assets/Star";
import React from "react";
import { SocialLinks } from "@/lib/util";
import SectionTitle from "@/components/SectionTitle";

// TODO: Sizing for the title, perhaps break out into component

export default function ContactPage() {
  return (
    <main className="w-full h-screen lg:h-auto pt-8 sm:pt-20 lg:pt-32 pb-20">
      <section className="max-w-7xl m-auto px-3 space-y-24">
        <div className="space-y-12 lg:space-y-0">
          <SectionTitle title="Contact" size="large" />
          <div className="w-full px-4">
            <ContactForm />
          </div>
        </div>
        <div>
          <SocialHover links={SocialLinks} />
        </div>
      </section>
    </main>
  );
}
