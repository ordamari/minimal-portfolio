import socialMediaList from '@/constants/social-media-list.constant'
import SocialItem from '../social-item'

function SocialList() {
  return (
    <div className='flex items-center md:gap-3 gap-6'>
      {socialMediaList.map(socialMedia => {
        return <SocialItem key={socialMedia.id} {...socialMedia} />
      })}
    </div>
  )
}

export default SocialList
