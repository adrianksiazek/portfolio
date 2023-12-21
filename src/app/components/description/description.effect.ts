import gsap from "gsap";
import { useEffect } from "react";

export const useDescription = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#description",
        start: "+=200 center",
        end: "center center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".body", { backgroundColor: "#030712", duration: 4 });
  }, []);
};
