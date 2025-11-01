import React, { useEffect, useMemo } from 'react'

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  intensity = 0.7,
  glowWidth = '300%',
  glowHeight = '50%',
  bottomOffset = '-11px',
  topOffset = '-10px',
  cornerRadius = '20px',
  contentClassName = 'relative z-10 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px]',
  children,
  ...rest
}) => {
  const ids = useMemo(() => {
    const uid = Math.random().toString(36).slice(2, 9)
    return {
      bottom: `star-move-bottom-${uid}`,
      top: `star-move-top-${uid}`
    }
  }, [])

  useEffect(() => {
    const styleEl = document.createElement('style')
    styleEl.setAttribute('data-star-border', ids.bottom)
    styleEl.innerHTML = `
@keyframes ${ids.bottom} {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(-100%, 0%); opacity: 0; }
}
@keyframes ${ids.top} {
  0% { transform: translate(0%, 0%); opacity: 1; }
  100% { transform: translate(100%, 0%); opacity: 0; }
}`
    document.head.appendChild(styleEl)
    return () => {
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl)
    }
  }, [ids])

  return (
    <Component
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        padding: `${thickness}px 0`,
        borderRadius: cornerRadius,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute z-0"
        style={{
          width: glowWidth,
          height: glowHeight,
          opacity: intensity,
          bottom: bottomOffset,
          right: `calc(-1 * ${glowWidth})`,
          borderRadius: '9999px',
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `${ids.bottom} ${speed} linear infinite alternate`
        }}
      ></div>
      <div
        className="absolute z-0"
        style={{
          width: glowWidth,
          height: glowHeight,
          opacity: intensity,
          top: topOffset,
          left: `calc(-1 * ${glowWidth})`,
          borderRadius: '9999px',
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `${ids.top} ${speed} linear infinite alternate`
        }}
      ></div>
      <div
        className={`${contentClassName}`}
        style={{ borderRadius: cornerRadius }}
      >
        {children}
      </div>
    </Component>
  )
}

export default StarBorder