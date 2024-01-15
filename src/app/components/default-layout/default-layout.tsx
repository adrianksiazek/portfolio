"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
      <Toaster position="bottom-right" />
    </ReactLenis>
  );
}
