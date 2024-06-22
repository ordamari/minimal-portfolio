import Title from '@/components/ui/title'
import WorkExperienceList from './components/work-experience-list'

const Experience = () => {
  return (
    <div className='py-20'>
      <Title withoutHighlight='My ' withHighlight='work experience' />
      <WorkExperienceList />
    </div>
  )
}

export default Experience
