import React from 'react'
import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import {Highlighter} from './Highlighter';
import Set from '../assets/Images/Developer_Set.jpg';
import grid_two from '../assets/grid_two.png';
import Stats from './Stats';
import { motion } from 'framer-motion';
import { AuroraText } from './AuroraText';
import { WordRotate } from './WordRotate';
import { IconCloud } from './IconCloud';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const About = () => {
  return (
    <section
      className='relative min-h-screen bg-[#f6f6f7] '
    >
<div className='flex flex-row h-screen' >
<div className='w-1/2'>
      <img src={Set} alt='grid' className=' h-full w-full object-cover' />  
</div>
<div className='w-1/2 flex flex-col items-start justify-start bg-[#f6f6f7] p-12'>
     <h1 className='text-3xl orizon text-start lg:text-[18px] uppercase text-[#125d95]'>
           About Me
     </h1>
          <div className='w-10 h-1 mt-3 bg-[#1284b1]'></div>

            <div className='flex flex-row items-start justify-between gap-12 mt-4'>
              <div className='w-full'>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className='text-[16px] text-[#4a4a4a] zalando leading-relaxed'
                >
                  I'm a passionate Network Engineer with a knack for solving complex problems and optimizing network performance.
                   With over 5 years of experience in designing, implementing, and managing robust
                   network infrastructures, I thrive on ensuring seamless connectivity and security for businesses of all sizes. 

                </motion.p>                       
                  
              <div className='mt-12 flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-3  items-start justify-center'>
                   <h4 className='orizon text-[22px] text-[#125d95]'>My Mission</h4>
                   <p className='zalando text-start text-[#4a4a4a]'>Design, Implementing and supporting reliable IT environments end to end.</p>

                </div>
              
              <div className='flex flex-col gap-3  items-start justify-center'>
                   <h4 className='orizon text-[22px] text-[#125d95] '>My Vision</h4>
                   <p className='zalando text-[#4a4a4a] text-start'>To build reliable and scalable technology ecosystems that empower people and business.</p>

                </div>
            </div>  

            <div className='mt-14 bg-[#125d95] p-6 rounded-[4px]'>
              <Stats />
            </div>


              </div>

                
                
                  
            </div>
</div>





</div>
           
    </section>
  )
}

export default About