"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Github, Linkedin, Grip, X } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

// TODO: Media query & which nav to use

export default function Nav() {
  const [isNavDevice, setIsNavDevice] = React.useState<React.ReactNode>();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const desktopMatches = useMediaQuery("(min-width: 1023px)");
  const tabletMatches = useMediaQuery("(min-width: 640px)");
  let [activeTab, setActiveTab] = React.useState(0);

  let tabs: { id: number; label: string }[] = [
    { id: 1, label: "World" },
    { id: 2, label: "N.Y." },
    { id: 3, label: "Business" },
    { id: 4, label: "Arts" },
    { id: 5, label: "Science" },
  ];

  const SocialLinks = [
    {
      name: "Email",
      link: "mailto:brandonmitchell217@gmail.com",
      icon: <Mail size={24} />,
    },
    {
      name: "Github",
      link: "https://github.com/brandonmitchell217",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/brandonmitchell217",
      icon: <Linkedin size={24} />,
    },
  ];

  const MobileNav = () => {
    return (
      <nav className="fixed bottom-0 w-full z-10 flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </nav>
    );
  };

  const TabletNav = () => {
    return (
      <nav className="w-full fixed top-5 z-10">
        <div className="relative max-w-7xl m-auto px-4 flex justify-between items-center">
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
            <div className="absolute top-0 right-0 bg-dark z-10 p-10">
              <ul className="flex flex-col gap-4 text-xl text-light">
                <li>
                  <a href={"/#about"}>About</a>
                </li>
                <li>
                  <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };

  const DesktopNav = () => {
    return (
      <nav className="w-full fixed top-5 z-10">
        <div className="max-w-7xl m-auto px-4 xl:px-0 flex justify-between items-center">
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
              <li>
                <a href={"/#about"}>About</a>
              </li>
              <li>
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="flex gap-12">
              {SocialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.link} target="_blank">
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

  React.useEffect(() => {
    if (desktopMatches) {
      setIsNavDevice(<DesktopNav />);
    } else if (tabletMatches) {
      setIsNavDevice(<TabletNav />);
    } else {
      setIsNavDevice(<MobileNav />);
    }
  }, [isMenuOpen]);

  return <>{isNavDevice}</>;
}
