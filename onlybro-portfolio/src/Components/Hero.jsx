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
    <section className='Section_bg bg-[#0b0b0d] z-0' >
 
  
             
               
             
            
           
     
               {/* Decorative particles */}
            <div className="relative  pointer-events-none z-0">
               {/* Arrow particles */}
               <DottedArrow color="#a3c300" size={70} className="absolute top-95 left-0"  />
                
            </div>

    <div className="Section_wrapper z-50">
       <div className="flex mt-12  flex-col  items-center  justify-center space-y-6 lg:mt-12">
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
                    className="text-[18px] lg:text-[18px] zalando font-bold text-center  uppercase text-[#fffced] mb-2"
                />
              </motion.div>
            
                    <h1 className="head text-[78px] z-50 leading-[78px] text-center text-[#fffced]  chivo font-extrabold  mt-2  lg:text-[98px] lg:leading-[98px] tracking-wide  lg:max-w-full">Letting Digital Reign.</h1>
                    <p className='chivo text-center text-[16px] w-[530px] z-50 text-[#fffced]'>Enhancing network performance through robust design and expert implementation. </p>
             
              <div className='flex lg:flex-row z-50 flex-col  justify-center gap-6'>
              
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
    
      
    </div>
    
    </section>
    
    
  )
}

export default Hero