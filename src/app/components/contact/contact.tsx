"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact-form/contact-form";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { Clock } from "./clock/clock";

export const Contact = () => {
  return (
    <section id="contact" className="section my-64 w-full">
      <motion.h2
        className="heading-section"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        contact me
      </motion.h2>
      <div className="my-24 flex flex-col lg:flex-row lg:space-x-52">
        <div className="mb-20 flex w-full flex-col justify-between lg:mb-0 lg:w-3/4">
          <div>
            <h3 className="text-6xl font-bold">Have an awesome idea? Let's bring it to life.</h3>
            <p className="mb-16 mt-8 text-3xl text-gray-500">
              I am looking for freelance opportunities or internships in startups, software houses, agencies and design
              studios
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/4">
          <div className="pb-8">
            <h4 className="text-4xl font-bold">Contact details</h4>
            <ul className="mt-8 text-lg font-medium">
              <li>
                <a href="mailto:ksiazek.adrian@protonmail.com" className="btn btn-tertiary">
                  <HiMail />
                  ksiazek.adrian@protonmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="py-8">
            <h4 className="text-4xl font-bold">My digital spaces</h4>
            <motion.ul
              className="mt-8 flex flex-col justify-center gap-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              viewport={{ once: true }}
            >
              <li>
                <a className="btn btn-secondary group" href="/CV.pdf" download>
                  Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
                </a>
              </li>
              <li>
                <a className="btn btn-tertiary" href="https://linkedin.com/" target="_blank">
                  <BsLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a className="btn btn-tertiary text-[1.35rem]" href="https://github.com/azeksi" target="_blank">
                  <FaGithubSquare /> Github
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="pt-8">
            <h4 className="text-4xl font-bold">Location</h4>
            <Clock city="Wrocław" timeZone="Europe/Warsaw" />
          </div>
        </div>
      </div>
    </section>
  );
};
