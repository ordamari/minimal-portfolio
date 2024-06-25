import { BentoGridItemProps } from '@/components/sections/grid/components/bento-grid-item'

const gridItems: BentoGridItemProps[] = [
  {
    id: 1,
    title: 'Dedicated Full Stack Developer with a focus on user-friendly solutions',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/grid/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    title: 'Experienced in testing new technologies',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    title: 'Leveraging design patterns for maintainable code',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid/grid.svg',
    spareImg: '/grid/b4.svg'
  },

  {
    id: 5,
    title: 'Tech enthusiast with a passion for development',
    description: 'Always looking to improve and innovate',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/grid/b5.svg',
    spareImg: '/grid/grid.svg'
  },
  {
    id: 6,
    title: 'Do you want to know more about me?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: ''
  }
]

export default gridItems
