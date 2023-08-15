import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import InfoHeader from "@/components/Home/InfoHeader";
import Quote from "@/components/Home/Quote";
import Contact from "@/components/Home/Contact";
import MobileHeader from "@/components/ui/MobileHeader";
import Loading from "@/components/ui/Loading";

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
      {/* <Loading /> */}
      <div className="relative w-full px-4 max-w-7xl m-auto">
        {/* Only shows on mobile when bottom nav appears */}
        <MobileHeader />
        <section className="relative min-h-[80vh] sm:min-h-screen pt-32 pb-12 md:pb-16 flex flex-col items-center justify-between">
          <Quote />
          <InfoHeader data={{ ...BasicInfo }} />
        </section>
      </div>
    </main>
  );
}
