import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import testimonials from '@/constants/testimonials.constant'

const Colleagues = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind words from <span className='text-purple'>colleagues</span>
      </h1>
      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards items={testimonials} speed='slow' />
        <div className=''></div>
      </div>
    </div>
  )
}

export default Colleagues
