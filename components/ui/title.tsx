type TitleProps = {
  withoutHighlight: string
  withHighlight: string
}

function Title({ withoutHighlight, withHighlight }: TitleProps) {
  return (
    <h1 className='heading'>
      {withoutHighlight} <span className='text-purple'>{withHighlight}</span>
    </h1>
  )
}

export default Title
