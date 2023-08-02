import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import Image from "next/image";
import { DataProps } from "@/lib/types";

import { useEffect, useState } from "react";
import InfoHeader from "@/components/Home/InfoHeader";
import Quote from "@/components/Home/Quote";
import { About } from "@/components/Home/About";
import Mouse from "@/components/assets/Mouse";
import Tools from "@/components/Home/Tools";
import WorkStatus from "@/components/WorkStatus";
import ProjectCard from "@/components/Home/ProjectCard";
import Contact from "@/components/Home/Contact";

// TODO: Mouse svg

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

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
    <main className="w-full">
      <div className="w-full px-4 max-w-7xl m-auto">
        <section className="min-h-screen pt-32 pb-28 flex flex-col items-center justify-between">
          <Quote />
          <InfoHeader data={{ ...BasicInfo }} />
          <Mouse />
        </section>
        <section id="about" className="py-16 lg:py-44">
          <About />
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
