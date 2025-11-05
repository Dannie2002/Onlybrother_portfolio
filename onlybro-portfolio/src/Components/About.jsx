import React from 'react'
import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import {Highlighter} from './Highlighter';
import grid_one from '../assets/grid_one.png';
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
      className='relative flex flex-col items-center justify-center min-h-screen bg-[#0b0b0d] lg:p-24 lg:px-24'
    >
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="hidden absolute top-40 left-40 w-[40rem] h-[40rem] rounded-full bg-[#9c40ff] opacity-30 blur-[140px]"></div>
        <div className=" absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#2eaec4] opacity-25 blur-[120px]"></div>
        <div className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-20 blur-[160px]"></div>
      </div>
            <h1 className='uppercase text-3xl font-extrabold leading-tight text-[#ffffff] md:text-[36px] altere'>
              <BlurText
                text="About Me"
                delay={150}
                animateBy="letters"
                direction="top"
                className=""
              />
            </h1> 
            <div className='grid grid-cols-1 gap-12 px-12 mt-12 lg:grid-cols-5 max-w-7xl lg:px-0'>
                  
                    <div className='lg:col-span-2 relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/30 bg-[radial-gradient(circle_at_center,#5176A3,#0b0b0d)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white transition-colors'>
                      <img src={grid_two} alt="grid" className='object-cover h-[300px] pointer-events-none rounded-2xl'/>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  <p className='text-white/80'>
                    I love creating interactive and dynamic web applications that provide a great user experience.
                  </p>
                  </div>
                     <div className='lg:col-span-3 relative flex flex-col items-start justify-start space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#2c7b8e,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white text-[26px] golant'>Core <span className='text-[#8b949e]'>Technologies</span></h1>
                     <WordRotate words={['React', 'Node.js', 'CSS']} 
                     duration={4000}
                     className='uppercase altere text-amber-300' />
                     <IconCloud
                       icons={[
                           <FaReact size={170} color="#61dafb" />,
                           <FaGitAlt size={170} color="#f34f29" />,
                           <SiFigma size={170} color="#a259ff" />,
                           <FaReact size={170} color="#61dafb" />,
                           <FaGitAlt size={170} color="#f34f29" />,
                           <SiFigma size={170} color="#a259ff" />
                             ]}
                     />
                  </div>
                     <div className='lg:col-span-5 relative flex flex-col items-center justify-between p-14  rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#177A96,#0b0b0d)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  <Stats/>
                  </div>
                  
            </div>
    </section>
  )
}

export default About