import React from "react";
import { PastPresent } from "@/components/About/PastPresent";
import Tools from "@/components/Home/Tools";
import WorkStatus from "@/components/WorkStatus";
import Contact from "@/components/Home/Contact";
import MobileHeader from "@/components/ui/MobileHeader";

export default function AboutPage() {
  return (
    <main className="w-full">
      <div className="relative w-full px-4 max-w-7xl m-auto">
        <MobileHeader />
        <section className="py-32 lg:py-44">
          <PastPresent />
        </section>
        <section className="pb-20 md:pb-48 space-y-20 md:space-y-48">
          <Tools />
          <WorkStatus />
        </section>
      </div>
      <Contact />
    </main>
  );
}
