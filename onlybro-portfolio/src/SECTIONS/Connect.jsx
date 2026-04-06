import React from 'react'
import Set from '../assets/Images/Handshake.jpg';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { gsap } from "gsap";



const Connect = () => {
  return (
    <section
      className='relative min-h-screen bg-[#f6f6f7] '
    >
<div className='flex flex-col lg:flex-row h-screen' >
<div className='lg:w-1/2 flex flex-col items-start justify-start bg-[#0b0b0d] p-12'>
     <motion.h1
     initial={{ opacity: 0, x: 60 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
     className='text-[48px] leading-[48px] chivo font-bold text-start lg:text-[48px] uppercase text-[#FFFCED]'>
           Lets reign digital together.
     </motion.h1>
          <div className='w-10 h-1 mt-6 bg-[#FFFCED]'></div>

            <div className='flex flex-col lg:flex-row items-start justify-between gap-12 mt-4'>
              <div className='w-full mt-6'>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
                  className='text-[18px] lg:text-[28px] zalando text-[#FFFCED] lg:max-w-[400px] font-semibold leading-[28px] lg:leading-[38px] lg:text-start'
                >
                                        We’re going to
                                        became partners
                                        for a long-term
                                        <span className='text-[#b9b8b6]'> business relationship. 
                                        </span>
                </motion.p>  

                 <button href="#cv" className="Glassy_btn bg-transparent mt-6 text-white zalando hover:border-none btn-fill-sweep">
                                   
                                   <span className="relative z-10 white">Get in Touch</span>
                                 </button>                    
 
              </div>
             
            </div>
            
</div>



                <div className='lg:w-1/2'>
                    <img src={Set} alt='grid' className=' lg:h-full filter grayscale h-[400px] w-full lg:w-full object-cover' />  
                </div>


</div>
           
    </section>
  )
}

export default Connect