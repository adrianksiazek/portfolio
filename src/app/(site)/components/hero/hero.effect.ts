import gsap from "gsap";
import { useEffect } from "react";
import { getScrollTrigger } from "../../animations/animations";

export const useHero = () => {
  useEffect(() => {
    const tl = gsap.timeline(getScrollTrigger("#hero", "top top", "+=100 top"));

    tl.to("#header nav", { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", backdropFilter: "blur(24px)" }, 0.1);
  }, []);
};
