/* eslint-disable @next/next/no-img-element */

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { cn } from '@/utils/cn'
import GridGlobe from '../grid-globe'
import technologiesLists from '@/constants/technologies-lists.constant'
import CopyEmail from '../copy-email'
import TechnologiesLists from '../technologies-lists'

export type BentoGridItemProps = {
  className?: string
  imgClassName?: string
  titleClassName?: string
  img?: string
  spareImg?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  id: number
}

const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col border border-white/[0.1]',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={cn('', id === 6 && 'flex justify-center')}>
        <div className='w-full h-full absolute'>
          {<img src={img} alt={img} className={cn('object-cover object-center', imgClassName)} />}
        </div>
      </div>
      <div className={cn('absolute right-0 -bottom-5', id === 5 && 'w-full opacity-80')}>
        {spareImg && <img src={spareImg} alt={spareImg} className={cn('object-cover object-center w-full h-full')} />}
      </div>
      {id === 6 && <BackgroundGradientAnimation />}
      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}
      >
        <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
          {description}
        </div>
        <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>{title}</div>

        {id === 2 && <GridGlobe />}
        {id === 3 && <TechnologiesLists />}
        {id === 6 && <CopyEmail />}
      </div>
    </div>
  )
}

export default BentoGridItem
