export type SocialItemProps = {
  id: number
  img: string
  href: string
}

function SocialItem({ img, href }: SocialItemProps) {
  return (
    <a target='_blank' href={href}>
      <div
        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
      '
      >
        <img src={img} alt='social media' className='w-6 h-6' />
      </div>
    </a>
  )
}

export default SocialItem
