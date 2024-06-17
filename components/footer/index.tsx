import email from '@/constants/email.constant'
import React from 'react'
import MagicButton from '../ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa6'
import socialMediaList from '@/constants/social-media-list.constant'

const Footer = () => {
  return (
    <footer className='w-full pt-20 mb-[100px] md:mb-5' id='contact'>
      <div className='w-full absolute left-0 -button-72 min-h-96'>
        <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50' />
      </div>
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
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Or Damari</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMediaList.map(socialMedia => {
            return (
              <div
                key={socialMedia.id}
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
                '
              >
                <img src={socialMedia.img} alt='social media' className='w-6 h-6' />
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
