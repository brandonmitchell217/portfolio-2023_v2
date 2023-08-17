"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialLinks, NavigationLinks } from "@/lib/util";
import { Grip, X } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Social from "../Social";

export default function Nav() {
  const pathname = usePathname();
  const [isNavDevice, setIsNavDevice] = React.useState<React.ReactNode>();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const desktopMatches = useMediaQuery("(min-width: 1023px)");
  const tabletMatches = useMediaQuery("(min-width: 640px)");
  const mobileMatches = useMediaQuery("(max-width: 639px)");
  let [activeTab, setActiveTab] = React.useState(pathname || undefined);

  React.useEffect(() => {
    if (desktopMatches) {
      setIsNavDevice(<DesktopNav />);
      setActiveTab(pathname);
    } else if (tabletMatches) {
      setIsNavDevice(<TabletNav />);
      setActiveTab(pathname);
    } else if (mobileMatches) {
      setIsNavDevice(<MobileNav />);
      setActiveTab(pathname);
    }
  }, [isMenuOpen, desktopMatches, tabletMatches, mobileMatches, pathname]);

  const MobileNav = () => {
    return (
      <nav className="fixed bottom-0 w-full z-10 shadow-xl">
        <div className="flex justify-evenly items-center bg-dark">
          {NavigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url || ""}
              onClick={() => setActiveTab(link.url)}
              className={`${
                activeTab === link.url ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-3 text-sm font-medium text-white transition focus-visible:outline-2 flex flex-col items-center w-1/4`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === link.url && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-lime mix-blend-difference"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  const TabletNav = () => {
    const tabletNavFunc = (link: any) => {
      setIsMenuOpen(!isMenuOpen);
      setActiveTab(link.url || "");
    };
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
            <div className="absolute top-0 right-0 max-w-[450px] w-1/2 bg-dark z-10 px-10 pt-24 pb-16 rounded-bl-2.5xl">
              <div className="space-y-12">
                <ul className="flex flex-col gap-12 text-xl text-light text-center">
                  {NavigationLinks.slice(1).map((link) => (
                    <li key={link.id}>
                      <Link
                        onClick={() => tabletNavFunc(link)}
                        href={link.url || ""}
                        className="hover:text-light/60"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="w-full flex items-center justify-center gap-12 text-light">
                  {SocialLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.url || ""}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        target="_blank"
                        className="hover:text-light/60"
                      >
                        {link.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Social links={SocialLinks} new_tab={true} size={32} />
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
                  <Link
                    href={link.url || ""}
                    onClick={() => setActiveTab(link.url || "")}
                    className="hover:text-dark/80"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={pathname === "/contact" ? "hidden" : ""}>
            <ul className="flex gap-12">
              {SocialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url || ""}
                    target="_blank"
                    className="hover:text-dark/80"
                  >
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
