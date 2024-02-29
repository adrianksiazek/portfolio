"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAbout } from "./about.effect";
import Image from "next/image";

export default function About() {
  useAbout();

  return (
    <section id="about" className="section my-64 w-full">
      <motion.h2
        className="heading-section"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        About me
      </motion.h2>
      <div className="mt-48 flex w-full flex-col gap-24 lg:flex-row">
        <div className="w-full rounded-full lg:w-1/2">
          <Image
            src="/images/portrait.jpg"
            alt="portrait"
            sizes="(max-width: 768px) 33vw, 100vw"
            className="mx-auto w-1/2 rounded-2xl lg:w-full"
            width={500}
            height={300}
          />
        </div>
        <motion.div
          className="flex h-screen w-full flex-col lg:w-1/2"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-2xl text-justify text-lg">
            <h3 className="mt-5 text-5xl font-bold md:text-6xl">A brief intro, who am I? </h3>
            <p className="mt-5 text-2xl leading-9 text-gray-800">
              I am a self-taught, creative frontend developer, web designer and wanted to become full stack developer
              with UI/UX skills in the future based in Wroclaw, Poland. I'm passionate about catering to emerging
              startups and small businesses that make an impact, inspire and connect with people 😎.
            </p>
            <p className="mt-5 text-2xl leading-9 text-gray-800">
              When I'm not developing or designing, I enjoy watching videos about front-end development, productivity
              and design. I also enjoy spending time with my cat 🐈 and distracting myself by going to the gym or riding
              my bike.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
