import React from 'react'
import FadeContent from './FadeContent'
import GradientText from './GradientText'


const Stats = () => {
  return (
    <div className='flex flex-row flex-wrap items-stretch gap-4 lg:gap-6'>
      {/* Card 1 */}
      <div className='group relative p-[1px] rounded-2xl overflow-hidden'>
        {/* subtle gradient border */}
        <div className='absolute inset-0 opacity-80'></div>
        <div className='relative flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
          <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
              <h1 className='text-4xl font-bold text-left text-green-800 preon'>23+</h1>

              <h4 className='text-[16px] haunt'>Websites</h4>

          </FadeContent>
        </div>
      </div>

      {/* Card 2 */}
      <div className='group relative p-[1px] rounded-2xl overflow-hidden'>
        <div className='absolute inset-0 bg-[] opacity-10'></div>
        <div className='relative flex flex-col items-center justify-center space-y-2 rounded-2xl backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
          <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
           
              <h1 className='text-4xl font-bold text-orange-800 preon'>5+</h1>
     
            <GradientText>
              <h4 className='text-[16px] haunt'>Projects</h4>
            </GradientText>
          </FadeContent>
        </div>
      </div>

      {/* Card 3 */}
      <div className='group relative p-[1px] rounded-2xl overflow-hidden'>
        <div className='absolute inset-0 opacity-80'></div>
        <div className='relative flex flex-col items-center justify-center space-y-2 rounded-2xl backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
          <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
           
              <h1 className='text-4xl font-bold text-blue-500 preon '>150+</h1>
      
            <GradientText>
              <h4 className='text-[16px] haunt'>UI Designs</h4>
            </GradientText>
          </FadeContent>
        </div>
      </div>

      {/* Card 4 */}
      <div className='group relative p-[1px] rounded-2xl overflow-hidden'>
        <div className='absolute inset-0 opacity-80'></div>
        <div className='relative flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_center,#2c7b8e,#000000)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 min-w-[180px] hover:bg-white/15 transition-colors'>
          <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
        
              <h1 className='text-4xl font-bold text-left text-white preon'>12+</h1>
     
            
              <h4 className='text-[16px] haunt'>Certificates</h4>

          </FadeContent>
        </div>
      </div>
    </div>
  )
}

export default Stats