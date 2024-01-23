import gsap from "gsap";
import { useEffect } from "react";

export const useWorks = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "-=400 center",
        end: "top center",
        scrub: 2,
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
    });

    tl.to(".body", { backgroundColor: "#030712" });
  }, []);
};
