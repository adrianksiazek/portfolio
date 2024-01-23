import gsap from "gsap";
import { useEffect } from "react";

export const useAbout = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "-=200 center",
        end: "top center",
        scrub: 2,
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      },
    });

    tl.to(".body", { backgroundColor: "#e5e7eb" });
  }, []);
};
