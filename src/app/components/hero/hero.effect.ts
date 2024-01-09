import gsap from "gsap";
import { useEffect } from "react";

export const useHero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=100 top",
        scrub: 1,
        markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to("#header nav", { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", backdropFilter: "blur(24px)" }, 0.1);
  }, []);
};
