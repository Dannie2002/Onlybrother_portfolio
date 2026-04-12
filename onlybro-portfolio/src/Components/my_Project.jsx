import React from 'react'
import FadeContent from './FadeContent'
import GradientText from './GradientText'
import { Highlighter } from './Highlighter'
import { motion, AnimatePresence } from 'framer-motion'
import Mwapata_project from '../assets/Images/Mwapata_project.png'
import portfolio from '../assets/Images/Portfolio.jpg'
import web from '../assets/Images/Web-redesign.jpg'

const projects = [
  {
    title: 'MwAPATA INSTITUTE WEBSITE DEVELOPMENT',
    description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: Mwapata_project
  },
  {
    title: 'Data Visualization and Reporting',
    description: 'I transformed raw data into actionable insights that supported informed business decisions',
    tech: ['SAP BOBJ', 'TABLEAU', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1548095115-45697e336585?q=80&w=1600&auto=format&fit=crop'
  },

  {
    title: 'Website Redesign',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: web
  }
  

  
]

const ProjectCard = ({ project, isActive, anyActive, onHoverStart, onHoverEnd }) => {
  return (
    <div
      className='group relative rounded-[4px] overflow-hidden bg-[#f3f2f0] shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
      onMouseEnter={() => onHoverStart && onHoverStart(project.title)}
      onMouseLeave={() => onHoverEnd && onHoverEnd()}
      style={{ flex: isActive ? 2 : anyActive ? 0.8 : 1, minWidth: '90px', transition: 'flex 350ms ease' }}
    >
      <div className='absolute inset-0 transition-all duration-500 z-10 pointer-events-none bg-gradient-to-t from-black/40 to-black/10 opacity-90 group-hover:opacity-100'></div>

      <div className='w-full overflow-hidden h-[160px] lg:h-[490px] relative'>
        <img
          src={project.image}
          alt={project.title}
          className='object-cover w-full h-full transition-all ease-in-out duration-700 group-hover:grayscale-0 group-hover:scale-105'
        />

        <AnimatePresence>
          {isActive && (
            <motion.div
              key='hover-content'
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className='absolute inset-0 z-30 p-6 flex flex-col'
              style={{ background: '#125d95' }}
            >
              <h3 className='text-2xl chivo uppercase text-[#fffced] mb-2'>{project.title}</h3>
              <p className='text-[14px] zalando leading-relaxed text-[#fffced] mb-4'>{project.description}</p>

              <div className='mt-auto flex flex-wrap gap-2'>
                {project.tech.map((t) => (
                  <span key={t} className='px-2 py-1 text-xs tracking-wide text-white uppercase border rounded akira bg-white/10 border-white/20'>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className='absolute bottom-4 left-4 right-4 z-20 flex flex-col'
          animate={{ y: isActive ? -80 : 0 }}
          transition={{ duration: 0.95, ease: 'easeOut' }}
        >
          <h3 className='text-2xl chivo uppercase font-semibold text-[#fffced] drop-shadow-md'>{project.title}</h3>
        </motion.div>
      </div>
    </div>
  )
}

const MyProject = () => {
  const [hovered, setHovered] = React.useState(null)
  const listRef = React.useRef(null)

  const scrollAmount = () => (listRef.current ? Math.round(listRef.current.clientWidth * 0.8) : 300)

  const handleNext = () => {
    if (!listRef.current) return
    listRef.current.scrollBy({ left: scrollAmount(), behavior: 'smooth' })
  }

  const handlePrev = () => {
    if (!listRef.current) return
    listRef.current.scrollBy({ left: -scrollAmount(), behavior: 'smooth' })
  }
  return (
    <section id='projects' className='Section_bg bg-[#0b0b0d]'>
      <div className='Section_wrapper flex items-center justify-center flex-col'>  
          <h1 className='text-3xl zalando font-bold  text-center lg:text-[18px] uppercase text-[#b27f32]'>
           My projects
          </h1>
          <div className='w-10 h-1 mt-3 bg-[#b27f32]'></div>
       <h4 className='chivo text-center font-semibold lg:leading-[48px] lg:text-[42px] text-[#fffced] lg:max-w-6xl mt-8'>
          A curated selection of work highlighting design clarity, <span className='text-[#b9b8b6]'>performance, and clean code.</span>
        </h4>
      

      <div ref={listRef} className='flex flex-col gap-4 lg:mt-18 lg:gap-8 lg:flex-row pb-4'>
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            isActive={hovered === p.title}
            anyActive={Boolean(hovered)}
            onHoverStart={(t) => setHovered(t)}
            onHoverEnd={() => setHovered(null)}
          />
        ))}
      </div>

      <div className='mt-4 flex items-center justify-end gap-2'>
        <button
          onClick={handlePrev}
          aria-label='Previous projects'
           className='inline-flex items-center gap-2 p-2 bg-[#125D98] text-white rounded-full shadow hover:bg-[#0f4f85]'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4'>
            <path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          
        </button>

        <button
          onClick={handleNext}
          aria-label='Next projects'
          className='inline-flex items-center gap-2 p-2 bg-[#125D98] text-white rounded-full shadow hover:bg-[#0f4f85]'
        >
          
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4'>
            <path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>
      </div>
    </section>
  )
}

export default MyProject





