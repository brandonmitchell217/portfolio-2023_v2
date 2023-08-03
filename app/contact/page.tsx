import ContactForm from "@/components/Contact/ContactForm";
import { SocialHover } from "@/components/Contact/SocialHover";
import Star from "@/components/assets/Star";
import React from "react";
import { SocialLinks } from "@/lib/util";

export default function ContactPage() {
  return (
    <section className="w-full pt-40 pb-20">
      <div className="max-w-7xl m-auto px-3 space-y-24">
        <div>
          <div className="flex sm:gap-[21.5px] lg:gap-[43px] items-center">
            <Star />
            <h2 className="border-b-[1.5px] md:border-b-[3px] border-dark font-unbounded text-[32px] md:text-[48px] xl:text-[72px] font-semibold tracking-[0.03em] leading-none">
              Contact:
            </h2>
          </div>
          <div className="w-full px-4">
            <ContactForm />
          </div>
        </div>
        <div>
          <SocialHover links={SocialLinks} />
        </div>
      </div>
    </section>
  );
}
