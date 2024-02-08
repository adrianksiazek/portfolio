"use client";

import { motion } from "framer-motion";
import { useWorks } from "./works.effect";
import Image from "next/image";
import clsx from "clsx";

export const Works = () => {
  const { works } = useWorks();

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
        <div className="flex flex-col flex-wrap justify-center gap-8 2xl:flex-row">
          {works &&
            works.map((work, index) => (
              <div
                key={index}
                className={clsx(
                  "flexw-full group relative flex-col rounded-sm border-2 border-gray-600 bg-[url('/images/bg-work.jpg')] bg-cover 2xl:h-[700px] 2xl:w-[700px]",
                  work.workImage && "h-[800px] lg:h-[700px] 2xl:w-full",
                  !work.workImage && "h-[400px]",
                )}
              >
                <div className="absolute inset-0 bg-black bg-opacity-80 p-8">
                  <div className="flex h-full flex-col gap-8">
                    <div className="relative flex-1 overflow-hidden">
                      <p>{work.name}</p>
                      <p
                        className={clsx(
                          "mt-8 w-full text-justify text-sm leading-6 text-gray-600",
                          work.workImage && "lg:w-2/5 xl:w-1/2",
                          !work.workImage && "w-full",
                        )}
                      >
                        {work.description}
                      </p>
                      {work.workImage && (
                        <Image
                          src={work.workImage.image}
                          className="-top-4 right-5 transition-all group-hover:scale-105 lg:absolute"
                          alt="Project work"
                          width={650}
                          height={300}
                        />
                      )}
                    </div>
                    <div>
                      <ul className="flex flex-wrap gap-4 text-xs text-gray-400">
                        {work.skills?.map((technoloy, index) => (
                          <li key={index} className="rounded-full border-2 border-gray-600 px-3 py-1">
                            {technoloy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
