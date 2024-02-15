import gsap from "gsap";
import { useEffect } from "react";
import { getScrollTrigger } from "../../animations/animations";

export const useDescription = () => {
  useEffect(() => {
    const tl = gsap.timeline(getScrollTrigger("#description", "+=200 center", "center center"));

    tl.to(".body", { backgroundColor: "#030712" });
  }, []);
};
