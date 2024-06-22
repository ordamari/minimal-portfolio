import approachList from '@/constants/approach-list.constant'
import ApproachItem from '../approach-item'

function ApproachList() {
  return (
    <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
      {approachList.map((item, index) => (
        <ApproachItem key={index} {...item} />
      ))}
    </div>
  )
}

export default ApproachList
