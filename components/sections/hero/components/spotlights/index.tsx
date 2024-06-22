import { Spotlight } from '@/components/ui/Spotlight'
import spotlights from '@/constants/spotlights.constant'

function Spotlights() {
  return (
    <div className=''>
      {spotlights.map((spotlight, index) => (
        <Spotlight key={index} {...spotlight} />
      ))}
    </div>
  )
}

export default Spotlights
