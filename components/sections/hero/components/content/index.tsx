import MagicButton from '@/components/ui/magic-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FaLocationArrow } from 'react-icons/fa6'

function Content() {
  return (
    <div className='flex justify-center relative my-20'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          Dynamic Web Magic with Next.js
        </h2>
        <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Transforming Concepts into Seamless User Experiences'
        />
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hi, I&apos;m Or Damari, a Full Stack Web Developer
        </p>
        <a href='#about'>
          <MagicButton icon={<FaLocationArrow />}>Show my work</MagicButton>
        </a>
      </div>
    </div>
  )
}

export default Content
