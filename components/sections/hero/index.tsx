import React from 'react'
import Spotlights from './components/spotlights'
import Background from './components/background'
import Content from './components/content'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <Spotlights />
      <Background />
      <Content />
    </div>
  )
}

export default Hero
