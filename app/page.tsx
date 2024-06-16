import Approach from '@/components/approach'
import Colleagues from '@/components/colleagues'
import Experience from '@/components/experience'
import Grid from '@/components/grid'
import Hero from '@/components/hero'
import RecentProjects from '@/components/recent-projects'
import { FloatingNav } from '@/components/ui/floating-navbar'
import navItems from '@/constants/nav-items.constant'

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Colleagues />
        <Experience />
        <Approach />
      </div>
    </main>
  )
}
