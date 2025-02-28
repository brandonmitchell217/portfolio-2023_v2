import React from "react";
import { PastPresent } from "@/components/PastPresent";
import Tools from "@/components/Tools";
import WorkStatus from "@/components/WorkStatus";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <main className="w-full">
      <div className="relative w-full px-2 sm:px-4 max-w-7xl m-auto">
        <section aria-label="Past and Present" className="py-24 sm:py-32 lg:py-44 xl:pt-36 xl:pb-52">
          <PastPresent />
        </section>
        <section aria-label="Tools and Work Status" className="relative pb-20 md:pb-48 space-y-20 md:space-y-36">
          <Tools />
          <WorkStatus />
        </section>
      </div>
      <Contact />
    </main>
  );
}
