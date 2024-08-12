import { Link, useNavigate } from "react-router-dom";
import { timeAgo } from "../Constaint/constaint";

function ResultVideo({video}) {
    const navigate = useNavigate()
    function handleClick(e){
        e.preventDefault()
         if(video?.id?.videoId){
            navigate(`/watch?v=${video?.id?.videoId}&c=${video?.snippet?.channelId}`)
         }else{
            navigate(`/playlist?v=${video?.id?.playlistId}&c=${video?.snippet?.channelId}`)
         }
    }
  return (
    <>
      <div className='flex mb-6 gap-8 cursor-pointer' onClick={handleClick}>
        <div>
            <img src={video?.snippet?.thumbnails?.medium?.url} alt="" className='rounded-lg'/>
        </div>
        <div className='flex-1' >
            <h2 className='text-xl mb-1'>{video?.snippet?.title}</h2>
            <p className="pl-1 mb-4">{timeAgo(video?.snippet?.publishedAt)}</p>
            <div className='flex items-center gap-2 mb-2'>
                <img src={video?.snippet?.thumbnails?.default?.url} alt="" className='w-8 h-8 rounded-full'/>
                 <p>{video?.snippet?.channelTitle}</p>
            </div>
            <p>{video?.snippet?.description}</p>
        </div>
     </div>

    </>
  )
}

export default ResultVideo