import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import gridItems from '@/constants/grid-items.constants'

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
