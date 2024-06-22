import Approach from '@/components/sections/approach'
import Colleagues from '@/components/sections/colleagues'
import Experience from '@/components/sections/experience'
import Footer from '@/components/sections/footer'
import Grid from '@/components/sections/grid'
import Hero from '@/components/sections/hero'
import RecentProjects from '@/components/sections/recent-projects'
import { FloatingNav } from '@/components/ui/floating-navbar'
import navItems from '@/constants/nav-items.constant'

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Colleagues />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}
