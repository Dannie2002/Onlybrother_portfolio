import React from 'react'

const ArrowDown = ({ color = '#000000', size = 24, className = '' }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="144 144 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="m578.43 274.05v289.59l-338.91-339.02-14.906 14.906 339.02 338.91h-289.59v20.992h314.88c2.7852 0 5.4531-1.1055 7.4219-3.0742s3.0742-4.6367 3.0742-7.4219v-314.88z" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}

export default ArrowDown
