"use client";

import React from "react";
import { motion } from "framer-motion";
import { useDescription } from "./description.effect";

export const Description = () => {
  useDescription();

  return (
    <section id="description" className="my-8 flex h-screen w-full items-center justify-center px-8">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: 100,
        }}
      >
        <h2 className="text-8xl font-bold text-gray-200">
          I create elevating digtial experiences that inspire and connect with people through development and design
        </h2>
      </motion.div>
    </section>
  );
};
