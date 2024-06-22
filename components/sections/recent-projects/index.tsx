import projects from '@/constants/projects.constants'
import React from 'react'
import ProjectCard from './components/project-card'
import Title from '@/components/ui/title'
import Projects from './components/projects'

const RecentProjects = () => {
  return (
    <div id='projects' className='py-20'>
      <Title withoutHighlight='A small selection of' withHighlight='recent projects' />
      <Projects />
    </div>
  )
}

export default RecentProjects
