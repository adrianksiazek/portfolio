"use client";

import { motion } from "framer-motion";
import { useWorks } from "./works.effect";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { projects } from "@/app/lib/data";
import Image from "next/image";
import clsx from "clsx";

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
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex h-full w-full flex-col rounded-lg border-2 border-gray-600 p-8 glow:bg-gray-900 2xl:h-[700px] 2xl:w-[700px]",
                    project.image && "lg:h-[700px] 2xl:w-full",
                    !project.image && "h-[400px]",
                  )}
                >
                  <div className="relative flex-1 overflow-hidden">
                    <p>{project.name}</p>
                    <p
                      className={clsx(
                        "mt-8 w-full text-justify text-sm leading-6 text-gray-600",
                        project.image && "lg:w-2/5 xl:w-1/2",
                        !project.image && "w-full",
                      )}
                    >
                      {project.description}
                    </p>
                    {project.image && (
                      <Image
                        src={project.image}
                        className="-right-48 top-0 transition-all lg:absolute"
                        alt="Project work"
                        width={900}
                        height={900}
                      />
                    )}
                  </div>
                  <div className="pt-4">
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
