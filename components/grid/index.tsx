import React from 'react'
import gridItems from '@/constants/grid-items.constants'
import BentoGridItem from './components/bento-grid-item'
import { BentoGrid } from '../ui/bento-grid'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(item => {
          return <BentoGridItem {...item} key={item.id} />
        })}
      </BentoGrid>
    </section>
  )
}

export default Grid
