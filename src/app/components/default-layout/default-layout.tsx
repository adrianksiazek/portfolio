"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
