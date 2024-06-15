/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/moving-border'

export type WorkExperienceCardProps = {
  id: number
  title: string
  desc: string
  className: string
  thumbnail: string
}

function WorkExperienceCard({ id, title, desc, className, thumbnail }: WorkExperienceCardProps) {
  return (
    <Button
      duration={Math.random() * 10000 + 10000}
      className='flex-1 text-white border-neutral-200 dark:border-slate-800'
      borderRadius='1.75rem'
    >
      <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
        <img src={thumbnail} alt={thumbnail} className='lg:w-32 md:w-20 w-16' />
        <div className='lg:ms-5'>
          <h1 className='text-start text-xl md:text-2xl font-bold'>{title}</h1>
          <p className='text-start text-white-100 mt-3 font-semibold'>{desc}</p>
        </div>
      </div>
    </Button>
  )
}

export default WorkExperienceCard
