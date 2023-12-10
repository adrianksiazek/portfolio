"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="h-screen max-w-5xl text-center">
      <div className="my-10 flex flex-col gap-8 text-2xl font-extrabold uppercase sm:text-4xl md:text-9xl">
        <div className="overflow-hidden px-4">
          <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
            Hey, I'm Adrian
          </motion.div>
        </div>
        <div className="overflow-hidden px-4">
          <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
            Hey, I'm Adrian
          </motion.div>
        </div>
        <div className="overflow-hidden px-4">
          <motion.div initial={{ y: 144 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
            Hey, I'm Adrian
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <a className="btn btn-secondary group" href="/CV.pdf" download>
          Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a className="btn btn-tertiary" href="https://linkedin.com/" target="_blank">
          <BsLinkedin />
        </a>
        <a className="btn btn-tertiary text-[1.35rem]" href="https://github.com/azeksi" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>

      <motion.div
        className="absolute right-2 text-2xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2 }}
      >
        <div className="rotate-90">scroll</div>
        <motion.div
          className="h-12 w-2 rounded-full bg-gray-900"
          animate={{ y: 130 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        ></motion.div>
      </motion.div>
    </section>
  );
};
