import React from 'react'
import heroImage from '../assets/head.jpg' // Ensure you have an image at this path or use a placeholder URL
import TextType from './TextType'
import ShinyText from './ShinyText';
import GradientText from './GradientText'
import FadeContent from './FadeContent'
import Stats from './Stats'
import { FaGithub, FaXTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa6';
import { FaFileDownload } from 'react-icons/fa';





const Hero = () => {
  return (
    <div className='relative z-10 flex flex-col bg-[#e0e0d3] min-h-screen lg:px-24 lg:py-24 '>
    <div className="flex flex-col items-center justify-center gap-10 lg:flex-row ">
      
        <div className='flex flex-col space-y-6 lg:w-1/2'>
            <h1 className="font-bold text-left text-[92px] leading-[92px] font-geologica">
               Hello, I'm

          <ShinyText 
            text=" Only Brother." 
            speed={10}
            disabled={false}  
            color="#b98815"
            shineColor="rgba(185, 136, 21, 0.4)"
          />

            </h1>
            <p className="text-2xl font-bold text-left ">
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
               <div className='flex gap-4'>
                <FadeContent blur={false} duration={1400} easing="ease-out" initialOpacity={0} delay={200}>
                  <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-400 rounded bg-[#b98815] hover:bg-[#b98815] hover:text-white">
                    Contact Me
                  </a>
                </FadeContent>
                <FadeContent blur={false} duration={4000} easing="ease-out" initialOpacity={0} delay={800}>
                  <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 font-bold text-black transition-all duration-300 bg-transparent border-2 rounded border-[#b98815] hover:bg-[#b98815] hover:text-white gap-2">
                    <FaFileDownload size={18} />
                    Download Cv
                  </a>
                </FadeContent>

               </div>
               <div className="flex pt-6 space-x-4">
                    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-pink-500" aria-label="GitHub">
                        <FaGithub className="text-white" size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-blue-400" aria-label="Twitter/X">
                        <FaXTwitter className="text-white" size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-blue-600" aria-label="LinkedIn">
                        <FaLinkedinIn className="text-white" size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-purple-500" aria-label="Discord">
                        <FaDiscord className="text-white" size={20} />
                    </a>
                </div>


               
        </div>

      
          <div className="flex justify-center lg:w-1/2">
              <img className="block object-cover w-[500px] mt-8 rounded-lg shadow-lg h-[500px]" src={heroImage} alt="Portfolio" />
          </div>

        
    </div>
    <Stats />
    </div>
    
    
  )
}

export default Hero