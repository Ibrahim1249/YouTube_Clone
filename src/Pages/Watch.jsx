import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useFetch from "../Constaint/useFetch";

import LiveChat from "../Components/LiveChat";
import VideoComment from "../Components/VideoComment";
import RecommendedVideos from "../Components/RecommendedVideos";
import SingleVideoContent from "../Components/SingleVideoContent";
import CommentList from "../Components/CommentList";

function Watch({ setIsToggle, isToggle }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("c");
  
  useEffect(() => {
    setIsToggle(false);
    window.scrollTo(0, 0);
  }, [searchParams, setIsToggle]);

  const { videos } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=`);
  const { videos: videoComments } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=`
  );
  const { videos: recommendVideos } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=`
  );

  return (
    <>
      <div className="py-4 px-16 w-[1300px]">
        <iframe
          width="100%"
          height="650"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg mb-4 "
        ></iframe>

        <div className="w-full mb-4">
          <h2 className="mb-4 text-2xl">{videos[0]?.snippet?.title}</h2>
          <SingleVideoContent videos={videos} />
        </div>

        <div>
          <h1 className="mb-4 text-xl font-semibold">Comments</h1>
          {videoComments && <CommentList commentList={videoComments}/>}
        </div>

      </div>
     
     <div className="flex flex-col h-[650px] w-[500px]">
      <LiveChat />
      
      <div className="w-full">
        <h1 className="mb-4 text-xl font-medium">Recommended Videos</h1>
         {recommendVideos?.length > 0 ? recommendVideos?.slice(0,18)?.map((recommendVideo , index)=>{
            return   <RecommendedVideos recommendVideo={recommendVideo} key={index}/>
         }) : <div className="text-red-700">No recommendVideo is found !!</div>}
      
      </div>
      </div>
    </>
  );
}

export default Watch;
