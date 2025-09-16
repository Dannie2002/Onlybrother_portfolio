import React from 'react'
import BlurText from "./BlurText";
import FadeContent from './FadeContent';
import TiltedCard from './TiltedCard';
import patternImage from '../assets/pattern.jpg';
import headImage from '../assets/head.jpg';
import HoverCard from './HoverCard';

const About = () => {
  return (
    <div 
      className='relative flex items-center justify-center min-h-screen'
      style={{
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    >
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-white/80'></div>
      
      {/* Content container */}
      <div className='relative z-10 w-full max-w-6xl px-4 py-12 mx-auto sm:px-6 md:px-8 lg:py-24'>
        <div className='flex flex-col items-center gap-10 md:gap-12 lg:flex-row'>
          {/* Text content */}
          <div className='flex flex-col space-y-6 lg:w-1/2'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl'>
              <BlurText
                text="About Me"
                delay={150}
                animateBy="letters"
                direction="top"
                className=""
              />
            </h1> 
            
            <p className='text-base font-medium leading-relaxed text-gray-700 sm:text-lg md:text-xl'>
              I'm a passionate web developer who builds modern, responsive websites that help companies and individuals achieve their goals. With a focus on clean code, user experience, and cutting-edge technologies, I create digital solutions that make a real impact.
            </p>
            
            <div className='grid w-full grid-cols-1 gap-3 sm:flex sm:flex-row sm:gap-4'>
              <FadeContent blur={false} duration={1400} easing="ease-out" initialOpacity={0} delay={200}>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-transform duration-200 rounded-lg sm:px-8 sm:py-4 sm:text-base bg-[#b98815] hover:bg-[#a07712] shadow-lg hover:shadow-xl transform-gpu hover:scale-105"
                  style={{ transformOrigin: 'center' }}
                >
                  Contact Me
                </a>
              </FadeContent>
              <FadeContent blur={false} duration={4000} easing="ease-out" initialOpacity={0} delay={800}>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-transform duration-200 rounded-lg sm:px-8 sm:py-4 sm:text-base bg-[#b98815] hover:bg-[#a07712] shadow-lg hover:shadow-xl transform-gpu hover:scale-105"
                  style={{ transformOrigin: 'center' }}
                >
                  Let's Connect
                </a>
              </FadeContent>
            </div>
          </div>

          {/* TiltedCard section */}
          <div className='flex justify-center w-full lg:w-1/2'>
            <TiltedCard 
              imageSrc={headImage}
              altText="Developer portrait"
              containerHeight="auto"
              containerWidth="100%"
              aspectRatio="4 / 4"
              scaleOnHover={1.02}
              rotateAmplitude={6}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex flex-col items-center justify-center h-full p-4 text-center sm:p-6 bg-black/60 backdrop-blur-sm rounded-[15px]">
                  {/* Icon */}
                  <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">
                    💻
                  </div>
                  
                  {/* Heading */}
                  <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">
                    Full Stack Developer
                  </h3>
                  
                  {/* Paragraph */}
                  <p className="text-xs leading-relaxed text-gray-200 sm:text-sm">
                    Passionate about creating amazing web experiences with modern technologies
                  </p>
                </div>
              }
              className="w-full max-w-sm sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About