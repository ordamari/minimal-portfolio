import { ApproachItemProps } from '@/components/sections/approach/components/approach-item'

const approachList: ApproachItemProps[] = [
  {
    title: 'Design & Prototyping',
    animationSpeed: 5.1,
    containerClassName: 'rounded-3xl overflow-hidden bg-emerald-900',
    buttonText: 'Phase 1',
    des: 'Collaborate to design and prototype your web solutions using tools like Figma and Sketch. Plan out the structure, navigation, and visual aesthetics.'
  },
  {
    title: 'Development & Testing',
    animationSpeed: 3,
    des: 'Develop the application using modern frameworks and libraries such as React.js and Node.js. Perform rigorous testing using Jest and Storybook to ensure quality and reliability.',
    buttonText: 'Phase 2',
    containerClassName: 'rounded-3xl overflow-hidden bg-black',
    colors: [
      [236, 72, 153],
      [232, 121, 249]
    ],
    dotSize: 2
  },
  {
    title: 'Deployment & Optimization',
    des: 'Translate designs into functional code and deploy using CI/CD pipelines. Optimize for performance, accessibility, and security to ensure a seamless user experience.',
    buttonText: 'Phase 3',
    animationSpeed: 3,
    containerClassName: 'rounded-3xl overflow-hidden bg-sky-600',
    colors: [[125, 211, 252]]
  }
]

export default approachList
