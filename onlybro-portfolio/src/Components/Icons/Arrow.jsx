import React from 'react'

const Arrow = ({ color = '#000000', size = 24, className = '' }) => {
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
        <path d="m558.9 505.34c-1.0547 9.7734-9.7227 16.828-19.344 15.77l-140.56-14.457c-9.6719-1.0078-16.727-9.6211-15.77-19.398 1.0586-9.6211 9.7227-16.727 19.445-15.77l98.141 10.125-88.012-108.21-63.984 51.992c-7.457 5.9961-18.391 4.7852-24.535-2.5703l-94.516-116.23c-5.5938-7.9609-3.6289-18.945 4.332-24.586 7.1055-4.9883 16.828-4.082 22.824 2.1641l83.43 102.83 63.984-51.941c7.457-5.9961 18.391-4.8359 24.586 2.5703l99.199 121.97 10.125-98.293c1.0586-9.6758 9.7266-16.73 19.398-15.723 9.6719 1.0078 16.727 9.6211 15.77 19.348z"></path>
      </g>
    </svg>
  )
}

export default Arrow