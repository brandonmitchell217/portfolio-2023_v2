import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import Image from "next/image";
import { DataProps } from "@/lib/types";

import { useEffect, useState, Suspense } from "react";
import InfoHeader from "@/components/Home/InfoHeader";
import Quote from "@/components/Home/Quote";
import { PastPresent } from "@/components/About/PastPresent";
import Mouse from "@/components/assets/Mouse";
import Tools from "@/components/Home/Tools";
import WorkStatus from "@/components/WorkStatus";
import ProjectCard from "@/components/Projects/ProjectCard";
import Contact from "@/components/Home/Contact";
import { SocialLinks } from "@/lib/util";
import MobileHeader from "@/components/ui/MobileHeader";

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
    <main className="relative w-full">
      <div className="relative w-full px-4 max-w-7xl m-auto">
        {/* Only shows on mobile when bottom nav appears */}
        <MobileHeader />
        <section className="relative min-h-screen py-32 flex flex-col items-center justify-between">
          <Quote />
          <InfoHeader data={{ ...BasicInfo }} />
          <Mouse />
        </section>
        <section id="about" className="py-16 lg:py-44">
          <PastPresent />
        </section>
        <section className="pb-20 md:pb-48 space-y-20 md:space-y-48">
          <Tools />
          <WorkStatus />
        </section>
      </div>
      <section className="">
        <Contact />
      </section>
    </main>
  );
}
