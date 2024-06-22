import { ProjectCardProps } from '@/components/sections/recent-projects/components/project-card'

const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: 'Or.ds.e Design System',
    des: 'I developed a design system using atomic design principles, this comprehensive system comprises meticulously styled, reusable, and thoroughly tested components along with efficient hooks.',
    img: '/projects/design-system.png',
    iconLists: ['/technologies-icons/re.svg', '/technologies-icons/ts.svg'].sort(),
    link: 'https://or-ds-e.netlify.app',
    linkLabel: 'Check Storybook'
  },
  {
    id: 6,
    title: 'Three.js Portfolio',
    des: 'I developed a unique and visually striking portfolio using cutting-edge web technologies. By leveraging React Three Fiber, I rendered 3D elements and scenes within the portfolio. Additionally, I utilized Framer Motion to create stunning and fluid animations for an enhanced user experience. This project showcases my ability to create advanced web applications with modern front-end technologies, delivering high-quality, visually impressive user interfaces.',
    img: '/projects/portfolio.png',
    iconLists: ['/technologies-icons/re.svg', '/technologies-icons/three.svg', '/technologies-icons/sass.svg'].sort(),
    link: 'https://ordamari.github.io/Portfolio/'
  },
  {
    id: 2,
    title: 'SmartSend',
    des: "I developed this project using React and TypeScript while working at 'Oversight' for a client. The project enables users to send messages, manage a bot, create campaigns, and manage distribution lists via WhatsApp. With this solution, users can efficiently communicate with their audience, streamline their marketing efforts, and easily manage their messaging campaigns. This project showcases my expertise in building custom software solutions using modern technologies such as React and TypeScript to meet the specific needs of clients and end-users alike.",
    img: '/projects/smart-send.png',
    iconLists: ['/technologies-icons/ts.svg', '/technologies-icons/re.svg'].sort(),
    link: 'https://smartsend.co.il',
    linkLabel: 'Check Client Website'
  },
  {
    id: 4,
    title: 'Trello Clone App',
    des: 'A clone of the popular project management app Trello, using React and SASS. The app allows users to create boards, add lists, and create cards with tasks that can be assigned to team members. The app also features drag-and-drop functionality, allowing users to easily move cards between lists and boards.',
    img: '/projects/trello.jpg',
    iconLists: ['/technologies-icons/re.svg', '/technologies-icons/sass.svg'].sort(),
    link: 'https://trello-back-4ft9.onrender.com/#/'
  },
  {
    id: 5,
    title: 'Netfliy',
    des: 'I developed a clone of Netflix using React and Styled-Components. The application is a pixel-perfect replica of the Netflix landing page, login, signup, and browse pages. By utilizing React and Styled-Components, I was able to create a seamless user interface and a responsive design that accurately mimics the original Netflix platform. This project showcases my expertise in building complex web applications using modern front-end technologies and delivering high-quality, visually stunning user interfaces.',
    img: '/projects/netflix.jpg',
    iconLists: ['/technologies-icons/re.svg', '/technologies-icons/sass.svg'].sort(),
    link: 'https://ordamari.github.io/netfliy/'
  }
]

export default projects
