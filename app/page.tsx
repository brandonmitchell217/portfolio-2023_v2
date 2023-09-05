import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import InfoHeader from "@/components/InfoHeader";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Loading from "@/components/ui/Loading";
import Loading1 from "@/components/ui/Loading1";

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
    <main className="relative w-full space-y-6 md:space-y-12">
      {/* <Loading /> */}
      <Loading1 />
      <div className="relative px-4 max-w-7xl w-full m-auto">
        {/* Only shows on mobile when bottom nav appears */}
        <section className="relative pb-32 pt-24 h-screen sm:h-full sm:gap-72 md:gap-80 lg:gap-72 flex flex-col items-center justify-between">
          <Quote />
          <InfoHeader data={{ ...BasicInfo }} />
        </section>
      </div>
      <Contact />
    </main>
  );
}
