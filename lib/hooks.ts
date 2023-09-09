"use client";
import { useEffect, useState } from "react";

export enum TailwindBreakpoint {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "2xl",
}
export const useTailwindBreakpoint = (): TailwindBreakpoint => {
  const tailwindBreakpointFromWidth = (width: number): TailwindBreakpoint => {
    if (width < 768) {
      return TailwindBreakpoint.SM;
    }
    if (width < 1024) {
      return TailwindBreakpoint.MD;
    }
    if (width < 1280) {
      return TailwindBreakpoint.LG;
    }
    if (width < 1536) {
      return TailwindBreakpoint.XL;
    }
    return TailwindBreakpoint.XXL;
  };

  const [tailwindBreakpoint, setTailwindBreakpoint] =
    useState<TailwindBreakpoint>(TailwindBreakpoint.MD);

  useEffect(() => {
    const handleResize = () => {
      setTailwindBreakpoint(tailwindBreakpointFromWidth(window.innerWidth));
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return tailwindBreakpoint;
};

export const useIsMobile = () => {
  const twBreakpoint = useTailwindBreakpoint();
  return twBreakpoint === TailwindBreakpoint.SM;
};

export const tailwindBreakpointLt = (
  a: TailwindBreakpoint,
  b: TailwindBreakpoint
): boolean => {
  if (a === b) {
    return false;
  }
  switch (a) {
    case TailwindBreakpoint.SM:
      return [
        TailwindBreakpoint.MD,
        TailwindBreakpoint.LG,
        TailwindBreakpoint.XL,
        TailwindBreakpoint.XXL,
      ].includes(b);
    case TailwindBreakpoint.MD:
      return [
        TailwindBreakpoint.LG,
        TailwindBreakpoint.XL,
        TailwindBreakpoint.XXL,
      ].includes(b);
    case TailwindBreakpoint.LG:
      return [TailwindBreakpoint.XL, TailwindBreakpoint.XXL].includes(b);
    case TailwindBreakpoint.XL:
      return b === TailwindBreakpoint.XXL;
    case TailwindBreakpoint.XXL:
      return false;
  }
};
