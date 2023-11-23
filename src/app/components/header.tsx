"use client";

import React from "react";
import { motion } from "framer-motion";
import clxs from "clsx";

export const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className={clxs(
          "border-opactity-40 border border-white",
          "fixed left-1/2 top-0 h-[4.5rem] w-full",
          "sm:top-6 sm:h-[3.25rem] sm:w-[36rem]",
          "shadow-lg shadow-black/[0.03]",
          "bg-white bg-opacity-80 backdrop-blur-[0.5rem]",
          "rounded-none sm:rounded-full",
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className={clxs(
          "fixed left-1/2 top-[0.15rem] h-12 -translate-x-1/2 py-2",
          "sm:top-[1.7rem] sm:h-[inital] sm:py-0",
        )}
      >
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
