import gsap from "gsap";
import { useEffect } from "react";
import { getScrollTrigger } from "../../animations/animations";

export const useAbout = () => {
  useEffect(() => {
    const tl = gsap.timeline(getScrollTrigger("#about", "-=200 center", "top center"));

    tl.to(".body", { backgroundColor: "#e5e7eb" });
  }, []);
};
