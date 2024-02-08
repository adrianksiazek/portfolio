import gsap from "gsap";
import { useEffect } from "react";
import { getWork } from "../../../../../sanity/query";
import { Work } from "./works.types";
import { useQuery } from "@tanstack/react-query";

export const useWorks = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#works",
        start: "-=400 center",
        end: "top center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".body", { backgroundColor: "#030712" });
  }, []);

  const { data } = useQuery<Work[]>({ queryKey: ["works"], queryFn: getWork });

  return { works: data };
};
