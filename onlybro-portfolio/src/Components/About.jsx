import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import {Highlighter} from './Highlighter';
import Set from '../assets/Images/Developer_Set.jpg';
import Service from '../assets/Images/Service_desk.jpg'
import Stats from './Stats';
import { AuroraText } from './AuroraText';
import { WordRotate } from './WordRotate';
import { IconCloud } from './IconCloud';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import React, { Children, useRef } from 'react';
import {motion, useTransform, useScroll} from "framer-motion"

const About = () => {

  const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "center center"]
})

const clipPath = useTransform(
  scrollYProgress,
  [0, 1],
  ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
)


  return (
    <section
      className='Section_bg'
    >

    
<div className='Section_wrapper'>
     <h1 className='text-[16px] zalando font-bold text-start lg:text-[18px] uppercase text-[#b27f32]'>
           About Me
     </h1>
          <div className='w-10 h-1 mt-3 bg-[#b27f32]'></div>

           
             <div className="Grid_4  lg:grid-cols-3">

          
          
              <div className="flex flex-col  gap-6">
                <h4 className="nefesta text-grey  uppercase text-[24px] lg:text-[28px]">
                  Skilled in leveraging IT solutions to solve business challenges.
                </h4>
                 
              </div>
             
              <motion.div ref={ref} style={{ clipPath }} className="relative flex mt-0 items-end justify-end ">
              
                <img src={Service} alt="research" className="w-full grayscale clip h-[470px]  object-cover"/>
                 
               
              </motion.div>

              <div className="flex flex-col items-end justify-end">
                  <div className="flex flex-col  gap-4">
                      <p className="text_para text-grey w-full lg:w-[90%]">
 Expert in UI/UX design
and branding, creating user-friendly and visually appealing interfaces. Committed to upholding ethical standards, integrity, and service excellence while
driving organizational innovation and compliance.
                      </p>
                      
                        <h6 className="text-green uppercase mt-6 font-semibold">ABOUT US</h6>
     
                      
                </div> 
              </div>
      
            
            </div>
                
                
                  
            
</div>






           
    </section>
  )
}

export default About