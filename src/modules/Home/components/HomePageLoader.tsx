import { HomeLoader } from 'assets/images/gif'

export default function HomePageLoader() {
  return (
    <div className='w-full flex items-center justify-center'>
        <img src={HomeLoader} alt="loading..." className='w-[300px] h-[300px]'/>
    </div>
  )
}
