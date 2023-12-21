"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useAbout } from "./about.effect";
import Image from "next/image";

export const About = () => {
  useAbout();

  return (
    <section id="about" className="section">
      <motion.h2
        className="text-center text-8xl font-bold uppercase"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2 }}
      >
        About me
      </motion.h2>
      <div className="mt-48 flex w-full gap-24">
        <div className="w-1/2 rounded-full">
          <Image
            src="/images/portrait.jpg"
            alt="portrait"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "2rem",
            }}
            width={500}
            height={300}
          />
        </div>
        <motion.div
          className="flex h-screen w-1/2 flex-col"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="mx-auto max-w-2xl text-lg">
            <h2 className="mt-5 text-4xl">A brief intro, who am I? </h2>
            <p className="mt-5">
              I am a self-taught, creative frontend developer, web designer and wanted to become full stack developer
              with UI/UX skills in the future based in Wroclaw, Poland. I'm passionate about catering to emerging
              startups and small businesses that make an impact, inspire and connect with people 😎. When I'm not
              developing or designing, I enjoy watching videos about front-end development, productivity and design. I
              also enjoy spending time with my cat 🐈 and distracting myself by going to the gym or riding my bike.
            </p>
            <motion.div
              className="mt-4 flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};
