/* eslint-disable @next/next/no-img-element */
import React from 'react'
import testimonials from '@/constants/testimonials.constant'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import Title from '@/components/ui/title'

const Colleagues = () => {
  return (
    <div id='testimonials' className='py-20'>
      <Title withoutHighlight='Kind words from ' withHighlight='colleagues' />
      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards items={testimonials} speed='slow' />
      </div>
    </div>
  )
}

export default Colleagues
