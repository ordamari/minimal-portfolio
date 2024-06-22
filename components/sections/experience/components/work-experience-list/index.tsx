import { workExperienceList } from '@/constants/work-experience-list.constant'
import WorkExperienceCard from '../work-experience-card'

function WorkExperienceList() {
  return (
    <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
      {workExperienceList.map(experience => {
        return <WorkExperienceCard key={experience.id} {...experience} />
      })}
    </div>
  )
}

export default WorkExperienceList
