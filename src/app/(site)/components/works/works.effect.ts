import gsap from "gsap";
import { useEffect } from "react";
import { getWork } from "../../../../../sanity/query";
import { Work } from "./works.types";
import { useQuery } from "@tanstack/react-query";
import { getScrollTrigger } from "../../animations/animations";

export const useWorks = () => {
  useEffect(() => {
    const tl = gsap.timeline(getScrollTrigger("#works", "-=400 center", "top center"));

    tl.to(".body", { backgroundColor: "#030712" });
  }, []);

  const { data } = useQuery<Work[]>({ queryKey: ["works"], queryFn: getWork });

  return { works: data };
};
