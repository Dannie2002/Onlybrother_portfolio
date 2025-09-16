import React from 'react'
import heroImage from '../assets/head.jpg' // Ensure you have an image at this path or use a placeholder URL
import TextType from './TextType'
import ShinyText from './ShinyText';
import GradientText from './GradientText'
import FadeContent from './FadeContent'
import Stats from './Stats'
import noise from '../assets/noise.png'
import arrow from '../assets/arrow.png'
import ink from '../assets/ink.png'
import electric from'../assets/electric.png'
import SocialMediaIcon from './SocialMediaIcon';
import { FaFileDownload } from 'react-icons/fa';






const Hero = () => {
  return (
    <div className='relative z-10 flex flex-col bg-[#e0e0d3] h-screen overflow-hidden px-6 lg:px-24 items-center justify-center '>
    {/* Background blur circles */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
               <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#9c40ff] opacity-30 blur-[140px]"></div>
               <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#ffaa40] opacity-25 blur-[120px]"></div>
               <div className="absolute -bottom-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] opacity-20 blur-[160px]"></div>
            </div>
            <img src={noise} alt="noise" className='absolute inset-0 -z-5 bg-blend-multiply'/>
     
               {/* Decorative particles */}
            <div className="absolute inset-0 pointer-events-none -z-5">
               {/* Arrow particles */}
              <img src={arrow} alt="arrow" className="absolute w-6 h-6 opacity-20 rotate-12 animate-pulse" style={{ top: '16%', left: '8%' }} />
              <img src={ink} alt="arrow" className="absolute h-26 w-26 opacity-20 rotate-12 animate-pulse" style={{ top: '50%', left: '90%' }} />
              <img src={electric} alt="electric" className="absolute h-26 w-26 opacity-60 rotate-12 animate-pulse" style={{ top: '80%', left: '50%' }} />
            </div>
     
    <div className="flex flex-col items-center justify-center w-full space-y-6 text-center">
            <h1 className="text-[72px] leading-[72px] font-bold text-center lg:text-[92px] lg:leading-[92px] font-geologica">
               Hello, I'm
                <span> <ShinyText 
                text=" Only Brother." 
                speed={10}
                disabled={false}  
                color="#b98815"
                shineColor="rgba(185, 136, 21, 0.7)"
               />
               </span>   
            </h1>
            <p className="text-2xl font-bold text-center para ">
             <TextType 
               text={[
                "I am UI/UX Designer.",
                "I am Frontend Developer." 
                    ]}
               speed={90}
               pause={3000}
               loop={true}
                className="text-gray-800"
               cursor={true}
               cursorChar="|"
             />
                
              </p>
              <div className='flex justify-center gap-4'>
               <FadeContent blur={false} duration={1400} easing="ease-out" initialOpacity={0} delay={200}>
                 <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-400 rounded bg-[#b98815] hover:bg-[#b98815] hover:text-white box-border border-2 border-transparent">
                   View Projects
                 </a>
               </FadeContent>
               <FadeContent blur={false} duration={4000} easing="ease-out" initialOpacity={0} delay={800}>
                 <a href="#cv" className=" inline-flex items-center justify-center px-6 py-3 font-bold text-black transition-all duration-300 bg-transparent border-2 rounded border-[#b98815] hover:text-white gap-2 box-border btn-fill-sweep">
                   <FaFileDownload size={15} />
                   <span className="relative z-10">Download CV</span>
                 </a>
               </FadeContent>

              </div>
              <SocialMediaIcon />
               <Stats />
    </div>
    
    </div>
    
    
  )
}

export default Hero