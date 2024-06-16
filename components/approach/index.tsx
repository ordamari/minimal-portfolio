'use client'

import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import ApproachItem, { ApproachItemProps } from './components/approach-item'
import ApproachCard from './components/approach-card'
import approachList from '@/constants/approach-list.constant'

function Approach() {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>approach</span>
      </h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
        {approachList.map((item, index) => (
          <ApproachItem key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

const AceternityIcon = () => {
  return (
    <svg
      width='66'
      height='65'
      viewBox='0 0 66 65'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white '
    >
      <path
        d='M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696'
        stroke='currentColor'
        strokeWidth='15'
        strokeMiterlimit='3.86874'
        strokeLinecap='round'
        style={{ mixBlendMode: 'darken' }}
      />
    </svg>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  )
}

export default Approach
