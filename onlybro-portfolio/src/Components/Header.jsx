import React, { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-white/20">
      <div className='flex items-center px-4 py-2 lg:justify-between lg:px-16'>
        <a>
          <h1 className="py-4 text-3xl font-bold text-gray-800">
            Only Brother
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className='items-center justify-center hidden px-4 lg:gap-14 lg:flex lg:mx-auto lg:relative lg:py-0 '>
            <a href="#home" className='text-[18px] font-semibold text-gray-700 hover:text-[#EF7722] transition-all'>Home</a>
            <a href="#about" className='text-[18px] font-semibold text-gray-700 hover:text-gray-900'>About</a>
            <a href="#services" className='text-[18px] font-semibold text-gray-700 hover:text-gray-900'>Services</a>
            <a href="#portfolio" className='text-[18px] font-semibold text-gray-700 hover:text-gray-900'>Projects</a>
            <a href="#contact" className='text-[18px] font-semibold text-gray-700 hover:text-gray-900'>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='z-50 ml-auto lg:hidden'
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Open navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className='hidden px-4 py-2 text-white transition duration-300 bg-[#b98815] rounded lg:block hover:bg-blue-700'>
          Let's Connect
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {navOpen && (
        <>
          {/* Backdrop */}
          <div 
            className='fixed inset-0 z-40 bg-black bg-opacity-50'
            onClick={() => setNavOpen(false)}
          />
          
          {/* Mobile Navigation */}
          <nav className='fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center gap-6 shadow-2xl bg-gradient-to-br from-white/98 to-gray-50/95 backdrop-blur-xl lg:hidden'>
            {/* Close Button */}
            <button
              className='absolute p-3 transition-all duration-300 rounded-full top-6 right-6 hover:bg-gray-100'
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Logo in Mobile Nav */}
            <div className='absolute top-6 left-6'>
              <h2 className="text-xl font-bold text-gray-800">Only Brother</h2>
            </div>
            
            {/* Navigation Links */}
            <div className='flex flex-col items-center gap-6 mt-16'>
              <a href="#home" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Home</a>
              <a href="#about" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>About</a>
              <a href="#services" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Services</a>
              <a href="#portfolio" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Projects</a>
              <a href="#contact" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Contact</a>
            </div>
            
            {/* Hire Me Button for Mobile */}
            <button className='px-8 py-4 text-white font-bold bg-gradient-to-r from-[#b98815] to-[#d4a017] rounded-xl hover:from-[#a07712] hover:to-[#b88814] transition-all duration-300 mt-8 shadow-lg hover:shadow-xl hover:scale-105'>
              Hire Me
            </button>
          </nav>
        </>
      )}
    </div>
  )
}

export default Header