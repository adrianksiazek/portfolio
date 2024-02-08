"use client";

import { container, listItem } from "@/app/(site)/animations/animations";
import { services, technologies } from "@/app/(site)/lib/data";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="section my-64 w-full">
      <motion.h2
        className="heading-section"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="my-24 flex flex-col items-start justify-between lg:flex-row">
        <div className="w-1/2">
          <h3 className="text-5xl font-semibold">my expertises.</h3>
          <p className="mt-4 max-w-md text-xl leading-8 text-gray-800">
            I focus on all things design and web related. With each of my services, my goal is to deliver an impactful
            and elevating digital experience for everyone.
          </p>
        </div>
        <div className="w-1/2 text-5xl font-extrabold text-primary lg:text-7xl">
          <motion.ul variants={container} initial="hidden" animate="show">
            {services.map((service) => (
              <motion.li variants={listItem} key={service}>
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="my-24 flex flex-col items-start justify-between lg:flex-row">
        <div className="w-1/2">
          <h3 className="text-5xl font-semibold">my digital tool box.</h3>
          <p className="mt-4 max-w-md text-xl leading-8 text-gray-800">
            These are my go to tech stack to make any projects happen. I am always eager of learning more about my
            current stack, and new technologies that could expand my horizons.
          </p>
        </div>
        <div className="w-1/2 text-5xl font-extrabold text-secondary lg:text-7xl">
          <ul>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
