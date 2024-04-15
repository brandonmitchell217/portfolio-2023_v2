"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { SocialLinks, NavigationLinks } from "@/lib/util";
import { Grip, X } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import Social from "../Social";
import { twMerge } from "tailwind-merge";
import { NavigationLinksProps } from "@/lib/types";

export default function Nav() {
  const pathname = usePathname();
  const [isNavDevice, setIsNavDevice] = React.useState<React.ReactNode>();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const tabletNavRef = useRef<HTMLDivElement>(null);
  const desktopMatches = useMediaQuery("(min-width: 1023px)");
  const tabletMatches = useMediaQuery("(min-width: 640px)");
  const mobileMatches = useMediaQuery("(max-width: 639px)");
  let [activeTab, setActiveTab] = React.useState(pathname || undefined);

  // TODO: Figure this out with framer motion
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setPosition(latest);
  // });
  const [scrollDirection, setScrollDirection] = React.useState<string>("up");

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        tabletNavRef.current &&
        !tabletNavRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("resize", () => setIsMenuOpen(false));

    const updateScrollDirection = () => {
      const offY = window.pageYOffset;
      const direction = offY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (offY - lastScrollY > 10 || offY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = offY > 0 ? offY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
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

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("resize", () => setIsMenuOpen(false));
    };
  }, [
    isMenuOpen,
    desktopMatches,
    tabletMatches,
    mobileMatches,
    pathname,
    scrollDirection,
  ]);

  const MobileNav = () => {
    return (
      <motion.nav
        className={`fixed bottom-0 w-full z-10 shadow-xl  ${
          scrollDirection === "up" ? "" : "bottom-[-100%]"
        }`}
      >
        <div className="flex justify-evenly items-center bg-dark">
          {NavigationLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url || ""}
              onClick={() => setActiveTab(link.url)}
              aria-label={link.name + " link"}
              scroll={true}
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
      </motion.nav>
    );
  };

  const TabletNav = () => {
    const tabletNavFunc = (link: NavigationLinksProps["links"]) => {
      setIsMenuOpen(!isMenuOpen);
      setActiveTab(link.url || "");
    };
    return (
      <nav ref={tabletNavRef} className={`w-full fixed top-0 z-10`}>
        <div className="relative max-w-7xl m-auto p-4 flex justify-between items-center">
          <a href={"/"}>
            <Image src="/logo.png" alt="Letter B logo" width="56" height="56" />
          </a>

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
                        scroll={true}
                        className="hover:text-light/60"
                        aria-label={link.name + " link"}
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
                        aria-label={link.name + " link"}
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
      <nav className={`w-full fixed top-0 z-10`}>
        <div className="max-w-7xl m-auto p-4 xl:px-0 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={"/"}>
              <Image
                src="/logo.png"
                alt="Letter B logo"
                width="70"
                height="70"
              />
            </a>
            <ul className="px-12 flex gap-12 text-xl">
              {NavigationLinks.slice(1).map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url || ""}
                    onClick={() => setActiveTab(link.url || "")}
                    scroll={true}
                    className="hover:text-dark/80"
                    aria-label={link.name + " link"}
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
                    aria-label={link.name + " link"}
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
