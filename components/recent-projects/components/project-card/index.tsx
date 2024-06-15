/* eslint-disable @next/next/no-img-element */
import { PinContainer } from '@/components/ui/pin-container'
import { FaLocationArrow } from 'react-icons/fa6'

export type ProjectCardProps = {
  id: number
  title: string
  des: string
  img: string
  iconLists: string[]
  link: string
}

function ProjectCard({ title, des, img, iconLists, link }: ProjectCardProps) {
  return (
    <div className='lg:min-h-[32.5rem] sm:h-[633px] h-[602px] flex items-center justify-center sm:w-[570px] w-[80vw]'>
      <PinContainer title={link} href={link}>
        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw]  overflow-hidden h-[30vh] mb-10'>
          <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
            <img src='/bg.png' alt='/bg.png' />
          </div>
          <img src={img} alt={title} className='z-10 absolute bottom-0' />
        </div>
        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
        <div className='flex items-center justify-between mt-7 mb-3'>
          <div className='flex items-center'>
            {iconLists.map((icon, index) => (
              <div
                key={icon}
                style={{
                  transform: `translateX(-${5 * index + 2}px)`
                }}
                className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
              >
                <img src={icon} alt={icon} className='p-2' />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
            <FaLocationArrow className='ms-3' color='#cbacf9' />
          </div>
        </div>
      </PinContainer>
    </div>
  )
}

export default ProjectCard
