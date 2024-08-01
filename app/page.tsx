import InfoHeader from "@/components/InfoHeader";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";

export default function Index() {
  const BasicInfo: { name: string; title: string; location: string } = {
    name: "Brandon Mitchell",
    title: "Frontend Developer",
    location: "Raleigh, North Carolina",
  };

  return (
    <main className="relative w-full space-y-6 md:space-y-12">
      <div className="relative px-4 max-w-7xl w-full m-auto">
        {/* Only shows on mobile when bottom nav appears */}
        <section className="relative pb-32 pt-28 h-screen sm:h-full sm:gap-72 md:gap-80 lg:gap-72 flex flex-col items-center justify-between">
          <Quote />
          <InfoHeader data={{ ...BasicInfo }} />
        </section>
      </div>
      <Contact />
    </main>
  );
}
