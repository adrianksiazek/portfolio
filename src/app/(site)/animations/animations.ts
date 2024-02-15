export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

export const listItem = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
} as const;

export const getScrollTrigger = (section: string, start: string, end: string) => {
  return {
    scrollTrigger: {
      trigger: section,
      start: start,
      end: end,
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  };
};
