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
      <section className="m-auto min-h-screen  pt-44 pb-20 flex flex-col items-center justify-between">
        <Quote />
        <InfoHeader data={{ ...BasicInfo }} />
      </section>
      <section className="">
        <About />
      </section>
    </main>
  );
}
