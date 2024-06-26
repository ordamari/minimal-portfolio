import { cn } from '@/utils/cn'
import React from 'react'

type MagicButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  position?: 'left' | 'right'
  className?: string
  onClick?: () => void
}

const MagicButton = ({ children, icon, className, position = 'right', onClick }: MagicButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10'
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span
        className={cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg gap-2  bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl',
          className
        )}
      >
        {position === 'left' && icon}
        {children}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton
