'use client'

import ApproachItem from './components/approach-item'
import approachList from '@/constants/approach-list.constant'
import Title from '@/components/ui/title'
import ApproachList from './components/approach-list'

function Approach() {
  return (
    <section className='w-full py-20'>
      <Title withoutHighlight='My ' withHighlight='approach' />
      <ApproachList />
    </section>
  )
}

export default Approach
