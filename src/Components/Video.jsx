import { Link } from "react-router-dom";
import { formatNumber , timeAgo } from "../Constaint/constaint";

function Video({video}) {


  return (
   <>
    <div className='w-[19%] mb-4 cursor-pointer'>
       <Link to={`/watch?v=${video?.id}&c=${video?.snippet?.channelId}`}>
       <div className='mb-1'>
           <img src={video?.snippet?.thumbnails?.medium?.url} alt="" className="rounded-lg"/>
        </div>
        <div className='w-[100%] flex gap-2'>
           <img src={video?.snippet?.thumbnails?.default?.url} alt="" className="w-10 h-10 rounded-full " />
           <div>
              <p className="leading-[20px] font-medium mb-2">{video?.snippet?.localized?.title}</p>
              <p className="font-medium text-slate-700">{video?.snippet?.channelTitle}</p>
            <div className='flex'>
            <p className="text-slate-600 text-sm italic">{formatNumber(video?.statistics?.viewCount)} Views .</p>
            <p className="text-slate-600 text-sm italic">{timeAgo(video?.snippet?.publishedAt)}</p>
            </div>
           </div>
        </div>
       
       </Link>
    </div>
   </>
  )
}

export default Video