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

const resources = [
  {
    title: "Cookie-based Auth and the Next.js App Router",
    subtitle:
      "This free course by Jon Meyers, shows you how to configure Supabase Auth to use cookies, and steps through some common patterns.",
    url: "https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF",
    icon: "M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z",
  },
  {
    title: "Supabase Next.js App Router Example",
    subtitle:
      "Want to see a code example containing some common patterns with Next.js and Supabase? Check out this repo!",
    url: "https://github.com/supabase/supabase/tree/master/examples/auth/nextjs",
    icon: "M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8",
  },
  {
    title: "Supabase Auth Helpers Docs",
    subtitle:
      "This template has configured Supabase Auth to use cookies for you, but the docs are a great place to learn more.",
    url: "https://supabase.com/docs/guides/auth/auth-helpers/nextjs",
    icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528",
  },
];

const examples = [
  { type: "Client Components", src: "app/_examples/client-component/page.tsx" },
  { type: "Server Components", src: "app/_examples/server-component/page.tsx" },
  { type: "Server Actions", src: "app/_examples/server-action/page.tsx" },
  { type: "Route Handlers", src: "app/_examples/route-handler.ts" },
  { type: "Middleware", src: "app/middleware.ts" },
  { type: "Protected Routes", src: "app/_examples/protected/page.tsx" },
];

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  const { data: data } = await supabase.from("projects").select();

  return (
    <main className="w-full">
      <section className="m-auto min-h-screen max-w-7xl px-4 pt-44 pb-20 flex flex-col items-center justify-between">
        <div className="max-w-[60vw] md:max-w-sm flex flex-col items-end self-end">
          <p className="pr-6 md:pr-4 text-[15px] md:text-lg font-light">
            A man is a success if he gets up in the morning and gets to bed at
            night, and in between he does what he wants to do.
          </p>
          <p className="font-medium text-normal md:text-xl">-Bob Dylan</p>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h5 className="text-[3.5vw] md:text-2xl font-medium xl:text-[32px]">
              17:24 EST | 07 Jun 2023
            </h5>
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <h5 className="text-[3.5vw] md:text-2xl font-medium xl:text-[32px]">
              Raleigh, North Carolina
            </h5>
          </div>

          <div className="text-center">
            <div className="border-t-4 border-b-4 border-black rounded-sm my-3">
              <h1 className="uppercase text-[9.125vw] md:text-7xl xl:text-[100px] leading-none font-extrabold">
                Brandon Mitchell
              </h1>
            </div>
            <div className="bg-black text-light text-center w-fit rounded-xl m-auto">
              <h2 className="uppercase px-4 py-1.5 md:px-5 md:py-2.5 text-[3.89vw] md:text-3xl xl:text-4xl font-unbounded font-normal">
                Frontend Developer
              </h2>
            </div>
          </div>
        </div>

        {/* <TestThing data={data} /> */}
      </section>
    </main>
  );
}
