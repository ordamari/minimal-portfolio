import projects from '@/constants/projects.constants'
import ProjectCard from '../project-card'

function Projects() {
  return (
    <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
      {projects.map(project => {
        return <ProjectCard key={project.id} {...project} />
      })}
    </div>
  )
}

export default Projects
