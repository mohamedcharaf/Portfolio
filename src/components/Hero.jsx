import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { DiHtml5, DiCss3, DiJavascript1, DiPython, DiAngularSimple } from 'react-icons/di';
import { SiFlutter } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

import profilepic from '../assets/monphoto.png';
import ShinyEffect from './ShinyEffect';

const Hero = () => {
  return (
    <section className="mt-24 max-w-[1200px] mx-auto relative" aria-label="Hero section">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer", 1000,
              "Software Engineer", 1000,
              "Startup Innovator", 1000
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hi, I'm <br />
            <span className="text-purple-500">Bouzid Daho Mohamed Charaf-Eddine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            A recently graduated software engineer passionate about developing web and mobile applications, I have hands-on experience on innovative projects. Currently a developer at BKBO Group, I’m always seeking new challenges to showcase my technical expertise and entrepreneurial spirit.
          </motion.p>

          {/* Download Button & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              href="/cv_2025.pdf"
              download="cv_2025.pdf"
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/mohamedcharaf" target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/mohamed-charaf-eddine-b-847b3b247/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] rounded-2xl shadow-lg"
          alt="Bouzid Daho Mohamed Charaf-Eddine"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-6xl px-12 md:px-0 w-full justify-center items-center py-24 flex-wrap gap-6"
      >
        <p className="text-gray-200 mr-4 text-3xl">My Tech Stack</p>
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiAngularSimple className="text-red-600" />
        <SiFlutter className="text-blue-400" />
        <DiPython className="text-blue-500" />
      </motion.div>

      {/* Shiny background effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </section>
  );
};

export default Hero;
