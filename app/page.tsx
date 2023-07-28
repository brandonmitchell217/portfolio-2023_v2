import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";
import Image from "next/image";
import { TestThing } from "../components/TestThing";
import { DataProps } from "@/lib/types";

import { useEffect, useState } from "react";
import InfoHeader from "@/components/Home/InfoHeader";
import Quote from "@/components/Home/Quote";
import { About } from "@/components/Home/About";
import Mouse from "@/components/assets/Mouse";
import Tools from "@/components/Home/Tools";

// TODO: Letter spacing & spacing in general

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
    <main className="w-full px-4 max-w-7xl">
      <section className="relative m-auto min-h-screen pt-32 pb-28 flex flex-col items-center justify-between">
        <Quote />
        <InfoHeader data={{ ...BasicInfo }} />
        <Mouse />
      </section>
      <section className="py-16 lg:py-32">
        <About />
      </section>
      <section className="pb-20 md:pb-48 space-y-20 md:space-y-48">
        <Tools />
        <h3 className="font-medium text-[20px] md:text-[40px] tracking-[0.02em] lg:leading-[60px] text-center">
          I am currently on the marketing team at{" "}
          <Link href={"https://www.gloo.us/"} target="_blank">
            <Image
              src={"/gloo.png"}
              alt="Gloo Logo"
              height={45}
              width={89}
              className="inline pb-1 scale-50 -m-[22px] md:scale-100 md:m-0"
            />
          </Link>
          . Our team uses a combination of both React & Vue with HubSpot to help
          drive new user/partner engagement.
        </h3>
      </section>
    </main>
  );
}
