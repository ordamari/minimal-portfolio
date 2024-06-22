import MagicButton from '@/components/ui/magic-button'
import email from '@/constants/email.constant'
import { FaLocationArrow } from 'react-icons/fa6'
import Copyright from '../copyright'
import SocialList from '../social-list'

function Content() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?{' '}
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how we can work together to achieve your goals.
        </p>
        <a href={`mailto:${email}`}>
          <MagicButton icon={<FaLocationArrow />}>Let&apos;s get in touch</MagicButton>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-6'>
        <Copyright />
        <SocialList />
      </div>
    </>
  )
}

export default Content
