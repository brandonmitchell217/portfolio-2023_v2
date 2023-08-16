"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import InfoHeader from "@/components/InfoHeader";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { gaMeasurementId } from "@/lib/gtag";
import type { NextWebVitalsMetric } from "next/app";
import { useEffect } from "react";

type EventOptions = Record<string, any> & {
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  userId?: string;
};

function event(
  action: string,
  {
    category,
    label,
    value,
    nonInteraction,
    userId,
    ...otherOptions
  }: EventOptions = {}
): void {
  if (!window.gtag) {
    return;
  }
}

function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  }),
    gaMeasurementId;
}

export default function Index() {
  // const supabase = createServerComponentClient({ cookies });
  const BasicInfo = {
    name: "Brandon Mitchell",
    title: "Frontend Developer",
    location: "Raleigh, North Carolina",
  };

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // const { data: data } = await supabase.from("projects").select();

  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId={gaMeasurementId} />
      <main className="relative w-full space-y-6 md:space-y-12">
        <div className="relative px-4 max-w-7xl w-full m-auto">
          {/* Only shows on mobile when bottom nav appears */}
          <section className="relative h-[90vh] md:h-screen pt-32 pb-12 md:pb-16 flex flex-col items-center justify-between">
            <Quote />
            <InfoHeader data={{ ...BasicInfo }} />
          </section>
        </div>
        <Contact />
      </main>
    </>
  );
}
