import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed bg-[#0b0b0d]/40 backdrop-blur-2xl  top-0 left-0 z-50 w-full ">
      <div className='flex items-center justify-between px-24 py-4 lg:px-36'>
        <a href="#home" className="flex items-center">
          <h1 className=" text-[#b27f32] text-[16px] zalando uppercase font-bold ">
            Only Brother
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className='items-center justify-center text-[#fffced] hidden px-4 lg:gap-8 lg:flex lg:mx-auto lg:relative lg:py-0 zalando'>
            <a href="#home" className='text-[14px] hover:text-[#b98815] transition-all duration-300 relative group'>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b98815] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className='text-[14px]  text-[#fffced] hover:text-[#b27f32] transition-all duration-300 relative group'>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b27f32] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className='text-[14px] text-[#fffced] hover:text-[#b98815] transition-all duration-300 relative group'>
              Core Expertise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b98815] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className='text-[14px]  text-[#fffced] hover:text-[#b98815] transition-all duration-300 relative group'>
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b98815] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className='text-[14px] text-[#fffced] hover:text-[#b98815] transition-all duration-300 relative group'>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b98815] transition-all duration-300 group-hover:w-full"></span>
            </a>
        </nav>

        {/* Animated Hamburger Menu Button */}
        <button
          className='relative z-50 flex flex-col items-center justify-center w-8 h-8 ml-auto lg:hidden group'
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${navOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>

        <motion.button className='hidden group relative px-6 py-2.5 text-[#fffced] zalando transition-all duration-300 bg-[#b27f32] rounded-[4px] lg:block  text-[14px]'
        whileHover={{boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
        whileTap={{ scale: 0.25 }}
        
        >
          Let's Connect
         
        </motion.button>
      </div>

      {/* Mobile Nav Overlay */}
      {navOpen && (
        <>
          {/* Backdrop */}
          <div 
            className='fixed inset-0 z-40 duration-300 bg-black bg-opacity-50 backdrop-blur-sm animate-in fade-in'
            onClick={() => setNavOpen(false)}
          />
          
          {/* Mobile Navigation */}
          <nav className='fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center gap-8 duration-300 shadow-2xl bg-gradient-to-br from-white/98 to-gray-50/95 backdrop-blur-xl lg:hidden animate-in slide-in-from-right'>
            {/* Logo in Mobile Nav */}
            <div className='absolute top-6 left-6'>
              <h2 className="text-xl font-bold text-gray-800">Only Brother</h2>
            </div>
            
            {/* Navigation Links */}
            <div className='flex flex-col items-center gap-8 mt-16'>
              <a href="#home" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1' onClick={() => setNavOpen(false)}>Home</a>
              <a href="#about" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1' onClick={() => setNavOpen(false)}>About</a>
              <a href="#services" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1' onClick={() => setNavOpen(false)}>Services</a>
              <a href="#portfolio" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1' onClick={() => setNavOpen(false)}>Projects</a>
              <a href="#contact" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1' onClick={() => setNavOpen(false)}>Contact</a>
            </div>
            
            {/* Hire Me Button for Mobile */}
            <button className='px-8 py-4 text-white font-bold bg-gradient-to-r from-[#b98815] to-[#d4a017] rounded-xl hover:from-[#a07712] hover:to-[#b88814] transition-all duration-300 mt-8 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1'>
              Hire Me
            </button>
          </nav>
        </>
      )}
    </div>
  )
}

export default Header