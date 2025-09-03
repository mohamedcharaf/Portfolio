import React from 'react';

import { AiOutlineGithub } from 'react-icons/ai';

import project1 from '../assets/project1.png';
import project2 from '../assets/project-parfum.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

import Reveal from './Reveal';

const projects = [
 {
  img: project1,
  title: "Project #1: Expat Relocation Platform",
  description: `A full-stack web application developed for BKBO Expat, designed to streamline the relocation process for expatriates. Built with React.js for the frontend and Firebase as the backend, the platform provides:

- Dynamic and responsive user interface for an intuitive experience.
- Real-time database for managing user data and content.
- Authentication & security features to ensure safe access.
- Scalable architecture supporting future growth and additional services.`,
  links: {
    site: "https://www.bkbo-expat.com",
  },
},

  {
    img: project2,
    title: "Project #2: E-commerce Platform",
    description:
      "A fully responsive e-commerce website built to optimize the online shopping experience. It includes a structured product catalog, smooth checkout process, and user-friendly design to enhance conversion rates and customer satisfaction.",
    links: {
      site: "https://tourmaline-semifreddo-ba7492.netlify.app/",
    },
  },
  {
    img: project3,
    title: "Project #3: Gaming E-commerce Platform",
    description:
      "An online e-commerce platform specifically designed for gamers. The platform features a sleek and dynamic interface, product categories for gaming gear, and a responsive design to deliver a tailored shopping experience for the gaming community.",
    links: {
      site: "https://gaming-hefk-6i17g3u3j.vercel.app",
    },
  },
  {
    img: project4,
    title: "Project #4: Interactive Quiz Game",
    description:
      "A web-based quiz game platform offering interactive and engaging challenges. Built with a responsive design, it provides dynamic question rendering, instant feedback, and an enjoyable experience for both entertainment and educational purposes.",
    links: {
      site: "https://haj-nine.vercel.app/",
    },
  },
  {
    img: project5,
    title: "Project #5: Charity Organization Website",
    description:
      "A professional website developed for a charitable organization to showcase its mission, activities, and community impact. It enables visitors to easily access information, explore ongoing projects, and contribute through an intuitive and responsive interface.",
    links: {
      site: "https://idyllic-melba-eaaaba.netlify.app/",
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
