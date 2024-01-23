"use client";

import { motion } from "framer-motion";
import { useWorks } from "./works.effect";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { projects } from "@/app/lib/data";

export const Works = () => {
  useWorks();

  return (
    <section id="works" className="section my-64 w-full font-bold text-gray-200">
      <motion.h2
        className="heading-section"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Works
      </motion.h2>
      <div className="my-24">
        <GlowCapture>
          <Glow>
            <div className="flex flex-wrap gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex h-[500px] max-h-[500px] w-[700px] max-w-[700px] flex-col rounded-lg border-2 border-gray-600 p-8 glow:bg-gray-900"
                >
                  <div className="flex-1">
                    <p>{project.name}</p>
                    <p className="mt-8 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-4 text-xs text-gray-400">
                      {project.technologies.map((technoloy, index) => (
                        <li key={index} className="rounded-full border-2 border-gray-600 px-3 py-1">
                          {technoloy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Glow>
        </GlowCapture>
      </div>
    </section>
  );
};
