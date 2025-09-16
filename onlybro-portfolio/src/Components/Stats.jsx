import React from 'react'
import FadeContent from './FadeContent'
import GradientText from './GradientText'


const Stats = () => {
  return (
    <div className='flex flex-row items-center space-x-6 '>



    
    <div className='flex flex-col items-center justify-center space-y-2'>
    <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
      <GradientText>
      <h1 className='text-4xl font-bold'>5+ </h1>
      </GradientText>
    
    <GradientText>
    <h4 className='text-2xl'>Websites</h4>
     </GradientText>
    </FadeContent>       
    </div>
    
    <div className='flex flex-col items-center justify-center space-y-2 '>
    <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
      <GradientText>
      <h1 className='text-4xl font-bold'>15+ </h1>
      </GradientText>
    
    <GradientText>
    <h4 className='text-2xl'>Certificates</h4>
     </GradientText>
    </FadeContent>       
    </div>
    
    <div className='flex flex-col items-center justify-center space-y-2 '>
    <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
      <GradientText>
      <h1 className='text-4xl font-bold'>15+ </h1>
      </GradientText>
    
    <GradientText>
    <h4 className='text-2xl'>Certificates</h4>
     </GradientText>
    </FadeContent>       
    </div>

    <div className='flex flex-col items-center justify-center space-y-2 '>
    <FadeContent blur={false} duration={8000} easing="ease-out" initialOpacity={0} delay={800} className='flex flex-col items-start justify-center'>
      <GradientText>
      <h1 className='text-4xl font-bold'>15+ </h1>
      </GradientText>
    
    <GradientText>
    <h4 className='text-2xl'>Certificates</h4>
     </GradientText>
    </FadeContent>       
    </div>
    
    
    
    
    
    </div>
  )
}

export default Stats