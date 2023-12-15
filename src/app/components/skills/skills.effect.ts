import gsap from "gsap";
import { useEffect } from "react";

export const useSkills = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "-=200 center",
        end: "top center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".body", { backgroundColor: "#e5e7eb" });
    tl.to("nav", { backgroundColor: "#e5e7eb" });
  }, []);
};
