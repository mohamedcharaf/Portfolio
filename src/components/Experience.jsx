import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Fullstack Developer - BKBO Group',
    period: 'Oct 2024 - Present',
    description:
      'Developing and maintaining web and mobile applications with React.js, ensuring high performance and security. Collaborating with teams to meet client requirements and implement innovative features while optimizing technical architecture and development processes.',
  },
  {
    company: 'Fullstack Developer & Startup Co-founder',
    period: 'Jan 2024 - Jun 2024',
    description:
      'Developed an innovative mobile application using Flutter and Firebase. Designed and executed a business model canvas, achieving an innovation label that recognized the project’s originality and potential impact.',
  },
  {
    company: 'Assistant Founder - Immidir',
    period: 'Aug 2023 - Dec 2023',
    description:
      'Managed SQL databases (Supabase), resolved various technical and organizational challenges, and handled community management across social media platforms to meet diverse client demands.',
  },
  {
    company: 'Graphic Designer - Moudi Photographe',
    period: 'Jun 2023 - Sep 2023',
    description:
      'Created professional video montages and performed photo retouching using Photoshop. Oversaw store operations, managed client requests, and organized video shoots.',
  },
  {
    company: 'Web Developer - Immidir',
    period: 'Jan 2022 - Jun 2022',
    description:
      'Developed a website for a tourism agency using Angular and Firebase. Managed the database and implemented secure user authentication, enhancing the interactive user experience.',
  },
];

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div className='space-y-8' initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
