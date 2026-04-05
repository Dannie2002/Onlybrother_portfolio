import React from 'react'
import { motion } from 'framer-motion'
import Network from '../assets/Images/Networking.jpg'
import Design from '../assets/Images/Designing.jpg'
import Mother from '../assets/Images/Motherboard.jpg'
import noise from "../assets/Noise.png"
import Service from '../assets/Images/Service_desk.jpg'
import communication from '../assets/Images/communication.jpg'
import Arrow from '../Components/Icons/Arrow'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const projects = [
  {
    title: 'Networking',
    description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: Network
  },
  {
    title: 'Web Development',
    description: 'I transformed raw data into actionable insights that supported informed business decisions',
    tech: ['SAP BOBJ', 'TABLEAU', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'UI/UX Design',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Design
  },

    {
    title: 'Hardware Repair',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Mother
  },

      {
    title: 'Service Desk Analysis',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Service
  },
  
     {
    title: 'Communication and Collaboration',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: communication
  },

]

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className='group relative rounded-2xl overflow-hidden  bg-[#f3f2f0] box shadow-2xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className='absolute group-hover:bg-gradient-to-t from-[#125d95]/60 to-[#125d95]/30 transition-all duration-500 bg-blend-multiply z-10 size-full bg-[#0b0b0d]/40'></div>
        
        <div className='w-full overflow-hidden h-[340px] lg:h-[490px] relative'>
          <img
            src={project.image}
            alt={project.title}
            className='object-cover w-full h-full filter grayscale transition-all ease-in-out duration-1000 group-hover:grayscale-0 group-hover:scale-105'
          />
          <img src={noise} alt="noise" className="absolute inset-0 w-full mix-blend-multiply opacity-40 h-full object-cover"/>
          
          {/* Content container that slides up on hover */}
          <motion.div 
            className='absolute bottom-2 left-4 right-4 z-10 flex flex-col'
            animate={{ y: isHovered ? -100 : 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className='flex flex-col'>
              <Arrow color='#a3c300' size={45} className='group-hover:animate-bounce' />
              <h4 className='text-[#fffced] uppercase chivo font-semibold text-2xl'>{project.title}</h4>
            </div>

            {/* Description that appears on hover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='mt-1.5 h-0'
            >
              <p className='text-[#fffced] text-[16px] pb-2 max-w-[370px] leading-relaxed zalando'>{project.description}</p>
            </motion.div>
          </motion.div>
        </div>

    </div>
  )
}

const Expetise = () => {

   useGSAP(() => {
  gsap.from(".subheading", {
    y: 100,
    opacity: 0,
    duration: 0.95,
    scrollTrigger: {
      trigger: ".subheading",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
    }
  });
});

  return (
    <section id='projects' className='Section_bg'>
      <div className='Section_wrapper'>
      <div className='flex flex-col items-start justify-center mb-8 lg:mt-12'>  
          <h1 className='text-4xl  zalando font-semibold text-center lg:text-[20px] uppercase text-[#036043]'>
           Expertise
          </h1>
          <div className='w-10 h-1 mt-6 bg-[#036043]'></div>
      
        <h4
       
        className='subheading lg:leading-[48px] lg:text-[42px] text-[#4a4a4a] lg:max-w-6xl mt-10'>
          Enhancing network performance through robust design and expert implementation.
        </h4>
      </div>

      <div className='grid grid-cols-1 gap-6 mt-12 lg:mt-22 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p, i) => (
          <ProjectCard key={p.title ?? i} project={p} />
        ))}
      </div>
    </div>
    </section>
  )
}

export default Expetise





