"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialLinks, NavigationLinks } from "@/lib/util";
import { Grip, X } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

// TODO: Media query & which nav to use

export default function Nav() {
  const [isNavDevice, setIsNavDevice] = React.useState<React.ReactNode>();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const desktopMatches = useMediaQuery("(min-width: 1023px)");
  const tabletMatches = useMediaQuery("(min-width: 640px)");
  const mobileMatches = useMediaQuery("(max-width: 639px)");
  let [activeTab, setActiveTab] = React.useState(SocialLinks[0].id);

  React.useEffect(() => {
    if (desktopMatches) {
      setIsNavDevice(<DesktopNav />);
    } else if (tabletMatches) {
      setIsNavDevice(<TabletNav />);
    } else if (mobileMatches) {
      setIsNavDevice(<MobileNav />);
    }
  }, [isMenuOpen, desktopMatches, tabletMatches, mobileMatches, activeTab]);

  const MobileNav = () => {
    return (
      <nav className="fixed bottom-6 w-full z-10">
        <div className="max-w-[90%] m-auto flex justify-evenly items-center py-2 bg-dark rounded-full">
          {NavigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setActiveTab(link.id)}
              className={`${
                activeTab === link.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === link.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute rounded-full inset-0 z-10 bg-lime mix-blend-difference"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.icon}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  const TabletNav = () => {
    return (
      <nav className="w-full fixed top-0 z-10">
        <div className="relative max-w-7xl m-auto p-4 flex justify-between items-center">
          <Link href={"/"}>
            <Image src="/logo.png" alt="Letter B logo" width="56" height="56" />
          </Link>

          <div
            className="cursor-pointer relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-light" />
            ) : (
              <Grip size={24} className="text-dark" />
            )}
          </div>

          {isMenuOpen && (
            <div className="absolute top-0 right-0 max-w-[450px] w-1/2 bg-dark z-10 px-10 py-24">
              <div className="space-y-12">
                <ul className="flex flex-col gap-12 text-xl text-light">
                  {NavigationLinks.slice(1).map((link) => (
                    <li key={link.id}>
                      <Link
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        href={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="w-full flex items-center justify-center gap-12 text-light">
                  {SocialLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url} target="_blank">
                        {link.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

  const DesktopNav = () => {
    return (
      <nav className="w-full fixed top-0 z-10">
        <div className="max-w-7xl m-auto p-4 xl:px-0 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Letter B logo"
                width="70"
                height="70"
              />
            </Link>
            <ul className="px-12 flex gap-12 text-xl">
              {NavigationLinks.slice(1).map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <ul className="flex gap-12">
              {SocialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return <>{isNavDevice}</>;
}
