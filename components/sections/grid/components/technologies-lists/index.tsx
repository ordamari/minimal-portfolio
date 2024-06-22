import technologiesLists from '@/constants/technologies-lists.constant'

function TechnologiesLists() {
  return (
    <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
      {technologiesLists.map((technologies, index) => {
        return (
          <div key={index} className='flex flex-col gap-3 lg:gap-8'>
            {technologies.map((tech, index) => {
              if (!tech) return <span key={index} className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
              return (
                <span
                  key={tech}
                  className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                >
                  {tech}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default TechnologiesLists
