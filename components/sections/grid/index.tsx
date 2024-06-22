import React from 'react'
import gridItems from '@/constants/grid-items.constants'
import { BentoGrid } from '@/components/ui/bento-grid'
import BentoGridItem from './components/bento-grid-item'

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
