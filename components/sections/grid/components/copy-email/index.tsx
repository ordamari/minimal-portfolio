'use client'

import confettiAnimationData from '@/data/confetti.json'
import email from '@/constants/email.constant'
import useToggle from '@/hooks/useToggle'
import { cn } from '@/utils/cn'
import Lottie from 'react-lottie'
import MagicButton from '@/components/ui/magic-button'
import { IoCopyOutline } from 'react-icons/io5'
import useTimeout from '@/hooks/useTimeout'

function CopyEmail() {
  const [isCopied, toggleIsCopied] = useToggle()
  const [set] = useTimeout()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toggleIsCopied(true)
    set(() => {
      toggleIsCopied(false)
    }, 1000)
  }

  return (
    <div className='mt-5 relative'>
      <div className={cn('absolute -bottom-5 right-0')}>
        <Lottie
          key={isCopied ? 'confetti' : 'empty'}
          options={{
            loop: isCopied,
            autoplay: isCopied,
            animationData: confettiAnimationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
      </div>
      <MagicButton position='left' icon={<IoCopyOutline />} className='bg-[#161a31]' onClick={handleCopyEmail}>
        {isCopied ? 'Email copied!' : 'Copy my email'}
      </MagicButton>
    </div>
  )
}

export default CopyEmail
