import React from 'react'
import heroImage from '../assets/head2.png' // Ensure you have an image at this path or use a placeholder URL
import TextType from './TextType'
import ShinyText from './ShinyText';
import GradientText from './GradientText'
import FadeContent from './FadeContent'
import Stats from './Stats'
import noise from '../assets/noise.png'
import arrow from '../assets/arrow2.png'
import ink from '../assets/ink.png'
import electric from'../assets/electric.png'
import SocialMediaIcon from './SocialMediaIcon';
import { FaFileDownload } from 'react-icons/fa';
import {motion} from 'framer-motion';
import { FlipWords } from './FlipWords';
import { Highlighter } from './Highlighter';






const Hero = () => {
  return (
    <section className='relative z-10 flex flex-col bg-[#F2EBDF] min-h-screen overflow-hidden px-6 lg:px-26 items-center justify-center'>
    {/* Background blur circles */}
         <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              {/*<div className="hidden absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#9c40ff] opacity-30 blur-[140px]"></div>*/}
              {/* <div className=" absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#ffaa40] opacity-25 blur-[120px]"></div>*/}
              {/*<div className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-20 blur-[160px]"></div>*/}
            </div>
            
            <img src={noise} alt="noise" className='absolute inset-0 pointer-events-none -z-10' style={{ mixBlendMode: 'multiply' }} />
     
               {/* Decorative particles */}
            <div className="absolute inset-0 pointer-events-none -z-5">
               {/* Arrow particles */}
              <img src={arrow} alt="arrow" className="absolute h-auto w-22 opacity-20 rotate-12 animate-pulse" style={{ top: '43%', left: '30%', rotate: '12deg'}} />
              <img src={ink} alt="arrow" className="absolute h-26 w-26 opacity-20 rotate-12 animate-pulse" style={{ top: '50%', left: '90%' }} />
              <img src={electric} alt="electric" className="absolute h-26 w-26 opacity-60 rotate-12 animate-pulse" style={{ top: '80%', left: '50%' }} />
            </div>

     <div className="relative z-20 flex flex-col items-center w-full gap-12 py-12 lg:mt-6 lg:flex-row lg:items-start lg:justify-between max-w-7xl lg:py-0 lg:gap-6">
    <div className="flex flex-col items-start justify-center w-1/2 space-y-6 lg:mt-12">
            <motion.h1 className="text-[22px] leading-[22px] font-bold lg:text-left lg:text-[14px] lg:leading-[14px] altere"
             initial={{ opacity: 0, x: -230 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1, ease: "easeOut" }}
            >
               Hi, I'm     <Highlighter color='#F0523D' action='underline'>Dani.</Highlighter>
            </motion.h1>

              <motion.div className="flex flex-row items-center"
              initial={{opacity:0,x:-220}}
              animate={{ opacity: 1, x: 0 }}
              transition={{duration:0.2, delay: 1.5, ease: "easeOut" }}>
                <span className="text-[18px] lg:text-[26px] altere font-semibold text-left uppercase text-[#F0523D] mb-2">
                  a&nbsp;
                 </span>
               <FlipWords
                   words={['Full-Stack Developer', 'UI/UX Designer']}
                   interval={3000}
                    className="text-[18px] lg:text-[18px] altere font-semibold text-left uppercase text-[#1d1b1b] mb-2"
                />
              </motion.div>
            
            <motion.h1 className="text-2xl font-bold text-start golant lg:text-[46px] lg:leading-[46px] tracking-wider text-transparent lg:max-w-[550px]"
              initial={{ opacity: 0, x: -230 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{duration: 2, delay: 1.8, ease: "easeOut" }}
            >
              <ShinyText
                text="I build digital experiences that drive market results."
                speed={9}
                disabled={false}
                color="#177A96"
                shineColor="rgba(240, 82, 62, 0.9)"
              />
              </motion.h1>
               <SocialMediaIcon />
              <div className='flex justify-center gap-4'>
               <FadeContent blur={false} duration={1400} easing="ease-out" initialOpacity={0} delay={200}>
                 <a href="#contact" className=" text-[14px] worky inline-flex items-center justify-center px-6 py-2 text-white transition-all duration-400 rounded bg-[#5176A3] hover:bg-[#5176A3/60] hover:text-white box-border border-2 border-transparent">
                   View Projects
                 </a>
               </FadeContent>
               <FadeContent blur={false} duration={4000} easing="ease-out" initialOpacity={0} delay={800}>
                 <a href="#cv" className="text-[14px] worky inline-flex items-center justify-center px-6 py-2 text-[#177A96] transition-all duration-300 bg-transparent border-2 rounded border-[#177A96] hover:text-white gap-2 box-border hover:border-none btn-fill-sweep">
                   <FaFileDownload size={15} />
                   <span className="relative z-10">Download CV</span>
                 </a>
               </FadeContent>

              </div>
             
               {/* <Stats /> */}
    </div>
    

           <div className='items-center justify-center hidden lg:flex lg:w-1/2'>
              <img src={heroImage} alt="Hero" className='w-full h-auto transition-transform duration-500 ease-in-out rounded-3xl hover:scale-105' />
            </div>
    </div>
    
    </section>
    
    
  )
}

export default Hero