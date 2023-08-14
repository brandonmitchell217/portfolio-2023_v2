"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { NavigationLinksProps } from "@/lib/types";
import { useMediaQuery } from "usehooks-ts";

export function SocialHover({ links }: NavigationLinksProps) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto md:max-w-3xl flex h-16 items-end justify-center gap-24 rounded-2xl border border-dark px-4 pb-3 group"
    >
      {links.map((link: Partial<NavigationLinksProps>) => (
        <Link key={link.name} href={link.url || ""} target="_blank">
          <AppIcon mouseX={mouseX} key={link.id} name={link.name || ""} />
        </Link>
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, name }: { mouseX: MotionValue; name: string }) {
  const desktopMatches = useMediaQuery("(min-width: 1023px)");
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  function whichIcon(name: string) {
    if (name === "Email") {
      return <Mail className="lg:group-hover:w-12 lg:group-hover:h-auto" />;
    }
    if (name === "Github") {
      return <Github className="lg:group-hover:w-12 lg:group-hover:h-auto" />;
    }
    if (name === "LinkedIn") {
      return (
        <Linkedin className="m-0.5 lg:group-hover:w-12 lg:group-hover:h-auto" />
      );
    }
  }

  return (
    <motion.div
      ref={ref}
      style={desktopMatches ? { width } : undefined}
      className="aspect-square w-10 hover:scale-110 hover:bg-lime lg:hover:scale-100 lg:group-hover:p-2 flex justify-center items-center rounded-full border border-dark group"
    >
      {whichIcon(name)}
    </motion.div>
  );
}
