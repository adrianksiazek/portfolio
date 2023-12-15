"use client";

import React from "react";
import { motion } from "framer-motion";
import clxs from "clsx";
import { links } from "../../lib/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="header relative z-[999]">
      <nav
        className={clxs(
          "nav fixed left-1/2 top-[0.15rem] w-full -translate-x-1/2 bg-transparent py-2",
          "sm:top-0 sm:h-[inital] sm:py-8",
        )}
      >
        <ul
          className={clxs(
            "flex w-[22rem] flex-wrap items-center justify-center gap-y-1",
            "text-[0.9rem] font-medium text-gray-500",
            "sm:w-[initial] sm:flex-nowrap sm:gap-5",
          )}
        >
          {links.map((link) => (
            <motion.li
              className="flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Link href="#contact" className="btn btn-primary group">
              Let's talk <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};
