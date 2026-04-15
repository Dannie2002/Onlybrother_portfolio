import React from 'react'
import { motion } from 'framer-motion'
import Network from '../assets/Images/Networking.jpg'
import Webdev from '../assets/Images/WebDev.jpg'
import Design from '../assets/Images/Designing.jpg'
import Mother from '../assets/Images/Motherboard.jpg'
import noise from "../assets/Noise.png"
import Service from '../assets/Images/Service_desk.jpg'
import communication from '../assets/Images/communication.jpg'
import Arrow from '../Components/Icons/Arrow'


const projects = [
  {
    id:1,
    title: 'Networking',
    description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: Network
  },
  {
      id:2,
    title: 'Web Development',
    description: 'I transformed raw data into actionable insights that supported informed business decisions',
    tech: ['SAP BOBJ', 'TABLEAU', 'Tailwind'],
    link: '#',
    image: Webdev
  },
  {
      id:3,
    title: 'UI/UX Design',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Design
  },

    {
        id:3,
    title: 'Hardware Repair',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Mother
  },

      {
          id:4,
    title: 'Service Desk Analysis',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: Service
  },
  
     {
        id:5,
    title: 'Communication and Collaboration',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: communication
  },

];





const Expetise = () => {

 

  return (
    <section className='Section_bg'>
     <div className='Section_wrapper flex items-start justify-start flex-col'> 
                 <h1 className='text-[14px] zalando font-bold  text-center lg:text-[16px] uppercase text-[#b27f32]'>
           My Expertise
          </h1>
          <div className='w-10 h-1 mt-3 bg-[#b27f32]'></div>
       <h4 className='zalando text-left capitalize font-semibold lg:leading-[32px] lg:text-[32px] text-[#4a4a4a] lg:max-w-6xl mt-8'>
          A curated selection of work highlighting design clarity, <span className='text-[#605f5d]'>performance, and clean code.</span>
        </h4>
  
    <div className='Grid_4 lg:gap-12 '>
      {projects.slice(0,4).map((project,index)=>(

        <div key={project.id} className='group relative '>
          
          <div className='h-[470px] relative'>
            <img src={project.image} alt={project.title} className='object-cover grayscale group-hover:grayscale-0 size-full' />
            <img src={noise} alt="noise" className="absolute inset-0 size-full mix-blend-multiply opacity-40 object-cover"/>
            <div className='absolute inset-0 group-hover:bg-gradient-to-t from-(--primary-color)/60 to-(--primary-color)/30 to-transparent transition-all duration-500 bg-blend-multiply z-10 size-full'></div>
            
          </div>

          <div className='flex items-center justify-between py-4'>
            <h4 className='text-[#4a4a4a] uppercase chivo nefesta text-[24px]'>
                {project.title}
            </h4>
            <Arrow color='#b27f32' size={35} className='group-hover:animate-bounce' />
           </div>

        </div>  
        
      ))}
    

    </div>


      <div className='mt-4 flex flex-row items-center justify-start gap-2'>
        <button
         
           className='inline-flex items-center gap-2 p-2 bg-[#4a4a4a]/40 text-white rounded-full shadow hover:bg-[#0f4f85]'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4'>
            <path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          
        </button>

        <button
        
          className='inline-flex items-center gap-2 p-2 bg-[#4a4a4a]/40 text-white rounded-full shadow hover:bg-[#0f4f85]'
        >
          
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4'>
            <path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>






    </div>
  </section>
  )
}

export default Expetise





