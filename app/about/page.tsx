import React from "react";
import { PastPresent } from "@/components/PastPresent";
import Tools from "@/components/Tools";
import WorkStatus from "@/components/WorkStatus";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <main className="w-full">
      <div className="relative w-full px-4 max-w-7xl m-auto">
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
