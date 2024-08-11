import Video from "./Video"


function VideoContainer({videos}) {
  return (
    <div className='flex flex-wrap gap-2 px-4 justify-between'>
       {videos && videos.map((video,index)=>{
         return <Video key={index} video={video}/>
       })}
    </div>
  )
}

export default VideoContainer