import { workExperienceList } from '@/constants/work-experience-list.constant'
import React from 'react'
import WorkExperienceCard from './components/work-experience-card'

const Experience = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>work experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperienceList.map(experience => {
          return <WorkExperienceCard key={experience.id} {...experience} />
        })}
      </div>
    </div>
  )
}

export default Experience
