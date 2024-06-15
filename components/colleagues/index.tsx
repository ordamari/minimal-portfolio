/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import testimonials from '@/constants/testimonials.constant'
import companies from '@/constants/companies.constant'

const Colleagues = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind words from <span className='text-purple'>colleagues</span>
      </h1>
      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards items={testimonials} speed='slow' />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
          {companies.map(company => {
            const { id, name, img, nameImg } = company
            return (
              <div key={id} className='flex md:max-w-16 max-w-32 gap-2'>
                <img src={img} alt={name} className='md:w-10 w-5' />
                <img src={nameImg} alt={name} className='md:w-24 w-20' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Colleagues
