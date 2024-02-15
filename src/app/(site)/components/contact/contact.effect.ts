import gsap from "gsap";
import { useEffect } from "react";
import { getScrollTrigger } from "../../animations/animations";

export const useContact = () => {
  useEffect(() => {
    const tl = gsap.timeline(getScrollTrigger("#contact", "-=200 center", "top center"));

    tl.to(".body", { backgroundColor: "#e5e7eb" });
  }, []);
};
