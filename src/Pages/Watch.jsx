import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useFetch from "../Constaint/useFetch";

import LiveChat from "../Components/LiveChat";
import VideoComment from "../Components/VideoComment";
import RecommendedVideos from "../Components/RecommendedVideos";
import SingleVideoContent from "../Components/SingleVideoContent";

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
  console.log(recommendVideos);
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
          {videoComments &&
            videoComments.map((comment, index) => {
              return <VideoComment comment={comment} key={index} />;
            })}
        </div>

      </div>

      <LiveChat />
      
      <div>
        <h1>Recommended Videos</h1>
        <RecommendedVideos recommendVideos={recommendVideos[0]} />
      </div>
    </>
  );
}

export default Watch;
