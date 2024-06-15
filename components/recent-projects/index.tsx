import projects from '@/constants/projects.constants'
import React from 'react'
import ProjectCard from './components/project-card'

const RecentProjects = () => {
  return (
    <div id='projects' className='py-20'>
      <h1 className='heading'>
        A small selection of <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default RecentProjects
