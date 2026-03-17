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
<div className='flex flex-col px-6 py-8 lg:px-22 mt-12 ' >
    
<div className=' flex flex-col items-start justify-start  lg:p-12'>
     <h1 className='text-[16px] zalando font-bold text-start lg:text-[18px] uppercase text-[#125d95]'>
           About Me
     </h1>
          <div className='w-10 h-1 mt-3 bg-[#1284b1]'></div>

           
              <div className='w-full mt-12'>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  className='text-[36px] leading-[36px] font-bold text-[#4a4a4a] chivo text-center lg:text-start'
                >
                  I'm a passionate Network Engineer with a knack for solving complex problems and optimizing network performance.
                   

                </motion.h1>                       
                  </div>
              <div className='mt-12 flex flex-col lg:flex-row items-center gap-22 justify-center'>
                  <div className='flex items-center justify-center'>
                     <img src={Set} alt='grid' className=' h-[490px] rounded-[14px] w-full lg:w-[370px] object-cover' />  
                   </div>
                   <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3 items-center lg:items-start justify-center'>
                   <h4 className='chivo uppercase text-[26px] font-bold text-[#125d95]'>My Mission</h4>
                   <p className='text-[18px] text-center lg:text-[28px] zalando text-[#4a4a4a] lg:max-w-[400px] font-semibold leading-[28px] lg:leading-[38px] lg:text-start'>Design, Implementing and supporting reliable IT environments end to end.</p>

                </div>
              
              <div className='flex flex-col gap-3 items-center  lg:items-start justify-center'>
                   <h4 className='chivo uppercase text-[26px] font-bold text-[#125d95] '>My Vision</h4>
                   <p className='text-[18px] lg:text-[28px] zalando text-[#4a4a4a] lg:max-w-[400px] font-semibold leading-[28px] lg:leading-[38px] text-center lg:text-start'>To build reliable and scalable technology ecosystems that empower people and business.</p>

                </div>
                   </div>
               
            

            


              </div>

                
                
                  
            
</div>





</div>
           
    </section>
  )
}

export default About