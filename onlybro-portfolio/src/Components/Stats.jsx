import React from 'react'
import FadeContent from './FadeContent'
import GradientText from './GradientText'

const stats = [
  { id: 1, value: '23+', label: 'Websites', color: '#fffced' },
  { id: 2, value: '10+', label: 'Clients', color: '#fffced' },
  { id: 3, value: '50+', label: 'Projects', color: '#fffced' },
  { id: 4, value: '5K+', label: 'Visitors', color: '#fffced' },
]


const Stats = () => {
  return (
    <div className='flex flex-row flex-wrap items-stretch gap-2 lg:gap-6'>
      {stats.map((stat) => (
        <div key={stat.id} className='p-[1px] rounded-2xl overflow-hidden'>
          <div className='flex flex-col items-center justify-center gap-2 rounded-2xl backdrop-blur-xl p-4 min-w-[120px]'>
            <h1 className="text-4xl text-left orizon" style={{ color: stat.color }}>{stat.value}</h1>
            <h4 className='text-[16px] text-[#fffced]'>{stat.label}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats