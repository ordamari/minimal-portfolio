import { ApproachItemProps } from '@/components/approach/components/approach-item'

const approachList: ApproachItemProps[] = [
  {
    title: 'Planning & Strategy',
    animationSpeed: 5.1,
    containerClassName: 'rounded-3xl overflow-hidden bg-emerald-900',
    buttonText: 'Phase 1',
    des: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
  },
  {
    title: 'Development & Progress Update',
    animationSpeed: 3,
    des: 'Once we agree on the plan, I cue my lofi playlist and dive intocoding. From initial sketches to polished code, I keep you updatedevery step of the way.',
    buttonText: 'Phase 2',
    containerClassName: 'rounded-3xl overflow-hidden bg-black',
    colors: [
      [236, 72, 153],
      [232, 121, 249]
    ],
    dotSize: 2
  },
  {
    title: 'Development & Launch',
    des: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    buttonText: 'Phase 3',
    animationSpeed: 3,
    containerClassName: 'rounded-3xl overflow-hidden bg-sky-600',
    colors: [[125, 211, 252]]
  }
]

export default approachList
