
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PlayListCart({videos, onVideoChange, currentVideoId}) {
    const navigate = useNavigate();
    function handleVideoClick(videoId, playlistId, channelId) {
        onVideoChange(videoId);
        navigate(`/watch?v=${videoId}&p=${playlistId}&c=${channelId}`);
      }

  return (
    <>
    <div className={`border-2 my-4 h-full w-[450px] rounded-lg flex flex-col border-black`}>
      <h3 className="my-4 text-center">PlayList</h3>
      <div className="flex-grow flex flex-col overflow-y-auto ">
        {videos &&
          videos.map((video, index) => (
            <div key={index}  className={`mb-2 flex gap-2 cursor-pointer px-4 ${currentVideoId === index ? 'bg-gray-300' : ''}`}
             onClick={() =>
                handleVideoClick(
                  video?.snippet?.resourceId?.videoId,
                  video?.snippet?.playlistId,
                  video?.snippet?.channelId
                )
              }
            >
               <p className="mr-2 flex justify-center items-center"> {index + 1}</p>
              <img src={video?.snippet?.thumbnails?.default?.url} alt="" className="rounded-lg"/>
              <div className="text-[15px] py-2 ml-2 flex flex-col justify-between cursor-pointer">
                 <p className="font-medium leading-5">{video?.snippet?.title}</p>
                 <p className="text-[14px] italic">{video?.snippet?.channelTitle}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  )
}

export default PlayListCart