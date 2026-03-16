import React from 'react'
import subnetworking from '../../assets/Images/subnet.jpg'
import ArrowDown from '../../Components/Icons/Arrow_down'

const stats = [
  { id: 1, value: '23+', label: 'Websites', color: '#fffced' },
  { id: 2, value: '10+', label: 'Clients', color: '#fffced' },
  { id: 3, value: '50+', label: 'Projects', color: '#fffced' },
  { id: 4, value: '5K+', label: 'Visitors', color: '#fffced' },
]


const Subnetworking = () => {
  return (
    <section className='flex flex-col h-screen bg-[#323232]' >
        <div className='relative h-64 flex items-end justify-start' style={{ background: `url(${subnetworking}) center/cover fixed no-repeat` }}>
        <div className="absolute size-full opacity-60 z-0 bg-[#323232] "></div> 
        <div className='flex z-5 p-8 flex-row items-center justify-center gap-6'>
           <ArrowDown color='#aafabb' size={30} className='font-bold' />
           <h1 className='text-4xl chivo uppercase font-bold  text-[#fffced]'>Networking</h1>
        </div>
          
        </div>

        <div className='mt-12'>
            <h4 className='text-4xl zalando uppercase font-bold text-[#fffced] '>Our Networking Services</h4>

        </div>
 
    </section>
  )
}

export default Subnetworking