import React, { useEffect, useState } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import useFetch from "../Constaint/useFetch";
import LiveChat from "../Components/LiveChat";
import RecommendedVideos from "../Components/RecommendedVideos";
import SingleVideoContent from "../Components/SingleVideoContent";
import CommentList from "../Components/CommentList";
import PlayListCart from "../Components/PlayListCart";

function Watch({ setIsToggle, isToggle }) {
  const location = useLocation();
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("c");
  const playListId = searchParams.get("p");
  const [currentVideoId, setCurrentVideoId] = useState(videoId);

  useEffect(() => {
    setIsToggle(false);
    window.scrollTo(0, 0);
  }, [searchParams, setIsToggle]);

  useEffect(() => {
    setCurrentVideoId(videoId);
  }, [videoId]);

  const playlistItemsUrl = playListId
  ? `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playListId}&key=`
  : null;

const { videos: playlistItems } = useFetch(playlistItemsUrl);

const videoDetailsUrl = currentVideoId
  ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${currentVideoId}&key=`
  : null;

const { videos: videoDetails } = useFetch(videoDetailsUrl);

  const { videos: videoComments } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${currentVideoId}&key=`
  );
  const { videos: recommendVideos } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=`
  );

 function handleVideoChange(videoId) {
    setCurrentVideoId(videoId);
    searchParams.set("v", videoId);
    navigate(`/watch?v=${videoId}&p=${playListId}&c=${channelId}`);
  }


  return (
    <>
      <div className="py-4 px-16 w-[1300px]">
        <iframe
          width="100%"
          height="650"
          src={
            playListId
              ? `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`
              : `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg mb-4 "
        ></iframe>

        <div className="w-full mb-4">
          <h2 className="mb-4 text-xl">
            {" "}
            {playListId ? "Playlist: " : "Video: "}
            {videoDetails[0]?.snippet?.title}
          </h2>
          <SingleVideoContent videos={videoDetails} />
        </div>

        <div>
          <h1 className="mb-4 text-xl font-semibold">Comments</h1>
          {videoComments && <CommentList commentList={videoComments} />}
        </div>
      </div>

      <div className="flex flex-col h-[650px] w-[500px]">
        {playListId ? (
          <PlayListCart
            videos={playlistItems}
            onVideoChange={handleVideoChange}
            currentVideoId={currentVideoId}
          />
        ) : (
          <LiveChat />
        )}

        <div className="w-full">
          <h1 className="mb-4 text-xl font-medium">Recommended Videos</h1>
          {recommendVideos?.length > 0 ? (
            recommendVideos?.slice(0, 18)?.map((recommendVideo, index) => {
              return (
                <RecommendedVideos
                  recommendVideo={recommendVideo}
                  key={index}
                />
              );
            })
          ) : (
            <div className="text-red-700">No recommendVideo is found !!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Watch;
