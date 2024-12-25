import { LoadingGif } from "assets/images/gif"

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <img src={LoadingGif} alt="loading" className="w-[600px] h-[600px]" />
    </div>
  )
}
