import gsap from "gsap";
import { useEffect } from "react";

export const useAbout = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "+=200 center",
        end: "center center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".body", { backgroundColor: "#030712", duration: 4 });
    tl.to("nav", { backgroundColor: "#030712" });
  }, []);
};
