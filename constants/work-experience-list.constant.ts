import { WorkExperienceCardProps } from '@/components/sections/experience/components/work-experience-card'

export const workExperienceList: WorkExperienceCardProps[] = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in developing a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/work-experience/exp1.svg'
  },
  {
    id: 2,
    title: 'Tested App Development',
    desc: 'Built and rigorously tested applications using Jest and Storybook, ensuring high reliability and quality.',
    className: 'md:col-span-2',
    thumbnail: '/work-experience/exp2.svg'
  },
  {
    id: 3,
    title: 'Pixel-Perfect Projects',
    desc: 'Developed pixel-perfect projects utilizing advanced technologies such as TailwindCSS, ShadCN, and Material UI.',
    className: 'md:col-span-2',
    thumbnail: '/work-experience/exp3.svg'
  },
  {
    id: 4,
    title: 'Secure & Accessible Web Apps',
    desc: 'Built secure and accessible web applications, ensuring data protection and inclusivity for all users.',
    className: 'md:col-span-2',
    thumbnail: '/work-experience/exp4.svg'
  }
]
