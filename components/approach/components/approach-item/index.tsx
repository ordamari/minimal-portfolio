import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import ApproachCard from '../approach-card'

export type ApproachItemProps = {
  title: string
  des: string
  buttonText: string
  animationSpeed: number
  containerClassName?: string
  colors?: [number, number, number][]
  dotSize?: number
}

function ApproachItem({
  title,
  des,
  buttonText,
  animationSpeed,
  containerClassName,
  colors,
  dotSize
}: ApproachItemProps) {
  return (
    <ApproachCard title={title} buttonText={buttonText} des={des}>
      <CanvasRevealEffect
        colors={colors}
        dotSize={dotSize}
        animationSpeed={animationSpeed}
        containerClassName={containerClassName}
      />
    </ApproachCard>
  )
}

export default ApproachItem
