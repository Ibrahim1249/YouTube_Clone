import { Link  , useNavigate} from "react-router-dom";


function ChannelVideos({video}) {
    const navigate = useNavigate()
    function handleClick(e){
        e.preventDefault()
         if(video?.id?.videoId){
            navigate(`/watch?v=${video?.id?.videoId}&c=${video?.snippet?.channelId}`)
         }else if(video?.id?.playlistId){
            navigate(`/watch?p=${video?.id?.playlistId}&c=${video?.snippet?.channelId}`)
         }
    }
  return (
    <>
      <div className="w-[19%] mb-4 cursor-pointer" onClick={handleClick}>
          <div className="mb-1">
            <img
              src={video?.snippet?.thumbnails?.medium?.url}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="w-[100%] flex gap-2">
            <img
              src={video?.snippet?.thumbnails?.default?.url}
              alt=""
              className="w-10 h-10 rounded-full "
            />
            <div>
              <p className="leading-[20px] font-medium ">
                {video?.snippet?.localized?.title}
              </p>
              <span
                className="font-medium text-slate-700 cursor-pointer"
              >
                {video?.snippet?.channelTitle}
              </span>

            </div>
          </div>
     
      </div>
    </>
  )
}

export default ChannelVideos