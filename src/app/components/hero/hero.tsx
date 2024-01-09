"use client";

import React from "react";
import { motion } from "framer-motion";
import { useHero } from "./hero.effect";

export const Hero = () => {
  useHero();

  return (
    <section id="hero" className="relative flex h-screen w-full items-center justify-center">
      <div className="max-w-6xl">
        <div className="my-10 flex flex-col gap-32 text-2xl font-extrabold uppercase sm:text-4xl md:text-9xl">
          <div className="overflow-hidden px-4 text-center">
            <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
              Hey, I'm Adrian
            </motion.div>
          </div>
          <div className="overflow-hidden px-4 text-center">
            <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
              Hey, I'm Adrian
            </motion.div>
          </div>
          <div className="overflow-hidden px-4 text-center">
            <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
              Hey, I'm Adrian
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-20 right-2 flex flex-col text-2xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
        >
          <div className="mb-8 rotate-90">scroll</div>
          <div className="flex justify-center overflow-hidden">
            <motion.div
              className="h-14 w-2 rounded-sm bg-gray-900"
              initial={{ y: "-200%" }}
              animate={{ y: "100%" }}
              transition={{ repeat: Infinity, ease: "easeInOut", duration: 1.4 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
