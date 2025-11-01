import React from 'react'
import FadeContent from './FadeContent'
import GradientText from './GradientText'

const projects = [
  {
    title: 'Portfolio Redesign',
    description: 'A minimal, responsive portfolio with custom animations and glassmorphism.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E-commerce UI',
    description: 'High-converting storefront UI with optimized product grid and filters.',
    tech: ['Vite', 'React', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1548095115-45697e336585?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Dashboard System',
    description: 'Analytics dashboard with cards, charts, and dark/light themes.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className='group relative rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]'>
      <div className='absolute inset-0 p-[1px] rounded-2xl pointer-events-none'>
        <div className='w-full h-full rounded-2xl bg-gradient-to-tr from-[#965424]/30 via-white/10 to-[#46210e]/30 opacity-90'></div>
      </div>
      <div className='relative flex flex-col h-full'>
        <div className='w-full overflow-hidden h-44'>
          <img src={project.image} alt={project.title} className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105' />
        </div>
        <div className='flex flex-col gap-2 p-5'>
          <GradientText>
            <h3 className='text-xl font-bold haunt'>{project.title}</h3>
          </GradientText>
          <p className='text-sm text-gray-800 geonova'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {project.tech.map((t) => (
              <span key={t} className='px-2 py-1 text-xs tracking-wide text-gray-800 uppercase border rounded akira bg-black/5 border-black/10'>
                {t}
              </span>
            ))}
          </div>
          <div className='mt-3'>
            <a href={project.link} className='akira uppercase inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-[#b98815] transition-all duration-300 bg-transparent border-2 rounded border-[#ffffff] hover:text-white gap-2 box-border hover:border-none btn-fill-sweep'>
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const MyProject = () => {
  return (
    <section id='projects' className='relative z-10 h-screen px-6 py-12 lg:px-24'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <FadeContent blur={false} duration={1400} easing='ease-out' initialOpacity={0} delay={200}>
          <h2 className='text-3xl font-bold tracking-wide text-center lg:text-4xl haunt text-[#eaa84a]'>
           All Projects
          </h2>
        </FadeContent>
        <p className='geonova text-[18px] text-gray-800 lg:max-w-[800px] mt-2'>
          A curated selection of work highlighting design clarity, performance, and clean code.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p) => (
          <FadeContent key={p.title} blur={false} duration={1200} easing='ease-out' initialOpacity={0} delay={200}>
            <ProjectCard project={p} />
          </FadeContent>
        ))}
      </div>
    </section>
  )
}

export default MyProject





