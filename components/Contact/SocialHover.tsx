"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Grip, X } from "lucide-react";

export function SocialHover({ links }: any) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end justify-center gap-4 rounded-2xl bg-dark px-4 pb-3"
    >
      {links.map((link: any) => (
        <AppIcon mouseX={mouseX} key={link.id} name={link.name} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, name }: { mouseX: MotionValue; name: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  function whichIcon(name: string) {
    if (name === "Email") {
      return (
        <Mail className="group-hover:w-12 group-hover:h-12 transition-all" />
      );
    }
    if (name === "Github") {
      return (
        <Github className="group-hover:w-12 group-hover:h-12 transition-all" />
      );
    }
    if (name === "LinkedIn") {
      return (
        <Linkedin className="group-hover:w-12 group-hover:h-12 transition-all" />
      );
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 flex justify-center items-center rounded-full bg-lime group"
    >
      {whichIcon(name)}
    </motion.div>
  );
}
