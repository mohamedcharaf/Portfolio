import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Project #1: Frontend UI Development",
    description:
      "A modern, responsive platform built with React.js for BKBO Expat, designed to help expatriates navigate and manage their relocation process. It features intuitive UI, dynamic content, and a user-friendly interface for a seamless experience.",
    links: {
      site: "https://www.bkbo-expat.com",
    },
  },
  {
    img: project2,
    title: "Project #2: E-commerce Platform",
    description:
      "An e-commerce website built to enhance online shopping experiences. It features a responsive design, product catalog, and a smooth checkout process.",
    links: {
      site: "https://chahriya.com",
    },
  },

];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}
          >
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  View Site
                </a>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  >
                    <AiOutlineGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
