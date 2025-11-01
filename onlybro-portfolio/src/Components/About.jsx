import React from 'react'
import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import TiltedCard from './TiltedCard';
import headImage from '../assets/head.jpg';
import HoverCard from './HoverCard';

const About = () => {
  return (
    <section
      className='relative flex flex-col items-center justify-center min-h-screen bg-[#0b0b0d] lg:p-24 lg:px-34'
    >
            <h1 className='uppercase text-3xl font-extrabold leading-tight text-[#08769b] md:text-[26px] big_heading'>
              <BlurText
                text="About Me"
                delay={150}
                animateBy="letters"
                direction="top"
                className=""
              />
            </h1> 
            <div className='grid grid-cols-1 gap-12 px-12 mt-12 lg:grid-cols-6 max-w-7xl lg:px-0'>
                  
                      <div className='lg:col-span-3 relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#5176A3,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  <p className='text-white/80'>
                    I love creating interactive and dynamic web applications that provide a great user experience.
                  </p>
                  </div>
                     <div className='lg:col-span-3 relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#2c7b8e,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  </div>
                     <div className='lg:col-span-3 relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#F0523D,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  </div>
                     <div className='lg:col-span-3 relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#2c7b8e,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
                  <h1 className='text-white'>Why I'm Passionate About Web Development</h1>
                  </div>
                  
                  
              

            </div>
    </section>
  )
}

export default About