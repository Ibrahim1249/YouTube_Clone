import Video from "./Video"
import Loading from "./Loading"

function VideoContainer({videos , isLoading}) {
  return (
    isLoading ? <Loading /> : <div className='flex flex-wrap gap-4 px-4 justify-center'>
      {videos && videos.map((video,index)=>{
        return <Video key={index} video={video}/>
      })}
   </div>

  )
}

export default VideoContainer