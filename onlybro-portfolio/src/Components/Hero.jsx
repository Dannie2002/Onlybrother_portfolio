import React from 'react'
import heroImage from '../assets/Images/head3.jpg' // Ensure you have an image at this path or use a placeholder URL
import TextType from './TextType'
import ShinyText from './ShinyText';
import GradientText from './GradientText'
import FadeContent from './FadeContent'
import Stats from './Stats'
import arrow from '../assets/arrow2.png'
import noise from "../assets/Noise.png"
import ink from '../assets/ink.png'
import electric from'../assets/electric.png'
import SocialMediaIcon from './SocialMediaIcon';
import { FaFileDownload } from 'react-icons/fa';
import {motion} from 'framer-motion';
import { FlipWords } from './FlipWords';
import DottedArrow from './Icons/Dotted_Arrow';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(useGSAP, SplitText);


const Hero = () => {

useGSAP(() => {
  const heroSplit = new SplitText(".head", { type: "lines, words, chars" });
  gsap.from(heroSplit.chars, {
    opacity: 0,
    y: 50,
    ease: "power4.out",
    duration: 1,
    stagger: 0.05,
    delay: 0.5
  });
}, []);

  return (
    <section className='relative z-10 flex flex-col bg-[#F2EBDF] min-h-screen overflow-hidden px-6 lg:px-36 items-center justify-center' style={{ background: `url(${heroImage}) center/cover fixed no-repeat` }}>
      <img src={noise} alt="noise" className="absolute inset-0 w-full mix-blend-multiply opacity-40 h-full object-cover"/>
    {/* Background blur circles */}
         <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              <div className="absolute size-full opacity-60  bg-[#323232] "></div>
               <div className="hidden absolute top-40 left-32 w-[32rem] h-[32rem] rounded-full bg-[#125d95] opacity-95 blur-[120px]"></div>
              <div className="absolute hidden bottom-44 left-90 w-[48rem] h-[18rem] rounded-full bg-[#000000] opacity-20 "></div>
            </div>
            
           
     
               {/* Decorative particles */}
            <div className="relative  pointer-events-none z-30">
               {/* Arrow particles */}
               <DottedArrow color="#a3c300" size={70} className="absolute top-95 left-0"  />
                
            </div>

    <div className="relative z-20 flex flex-col items-center w-full gap-12 py-12 lg:mt-6 lg:flex-row lg:items-start lg:justify-between max-w-7xl lg:py-0 lg:gap-6">
       <div className="flex mt-12  flex-col z-50 items-center lg:items-start justify-center space-y-6 lg:mt-12">
            <motion.h1 className="text-[16px] text-[#fffced] font-bold text-center leading-[22px]  lg:text-left lg:text-[14px] lg:leading-[14px] chivo"
             initial={{ opacity: 0, x: -37 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, ease: "easeOut" }}
            >
               Hi, I'm Dani.
            </motion.h1>

              <motion.div className="flex flex-row items-center"
              initial={{opacity:0, x:-37}}
              animate={{ opacity: 1, x: 0 }}
              transition={{duration:0.4, delay: 0.5, ease: "easeOut" }}>
                <span className="text-[18px] lg:text-[20px] zalando font-semibold text-center lg:text-left uppercase text-[#a3c300] mb-2">
                  a&nbsp;
                 </span>
               <FlipWords
                   words={['Full-Stack Developer', 'UI/UX Designer']}
                   interval={3000}
                    className="text-[18px] lg:text-[20px] zalando font-bold text-center lg:text-left uppercase text-[#fffced] mb-2"
                />
              </motion.div>
            
                    <h1 className="head text-[78px] leading-[78px] text-center text-[#fffced] lg:text-start chivo font-extrabold uppercase mt-2  lg:text-[108px] lg:leading-[108px] tracking-wide  lg:max-w-full">Letting Digital Reign.</h1>
                    <p className='chivo lg:text-left text-center text-[16px] w-[330px] text-[#fffced]'>Enhancing network performance through robust design and expert implementation. </p>
             
              <div className='flex lg:flex-row flex-col  justify-center gap-6'>
              
                 <a href="#contact" className=" text-[16px]   lg:inline-flex items-center justify-center px-6 py-2 text-[#fffced] zalando transition-all duration-400 rounded bg-[#125D98] hover:bg-[#5176A3/60] hover:text-white box-border border-2 border-transparent">
                   View Projects
                 </a>
            
                 <a href="#cv" className="text-[16px] zalando inline-flex items-center justify-center px-6 py-2 text-[#fffced] transition-all duration-300 bg-transparent border rounded border-[#fffced] hover:text-white gap-2 box-border hover:border-none btn-fill-sweep">
                   <FaFileDownload size={15} />
                   <span className="relative z-10">Download CV</span>
                 </a>
               

              </div>
             
               {/* <Stats /> */}
    </div>
    
      <div className='nefesta text-[#a3c300]  text-[12px] mt-12'>UI DESIGNING</div>
    </div>
    
    </section>
    
    
  )
}

export default Hero