import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { formatNumber, timeAgo } from "../Constaint/constaint";
import useFetch from "../Constaint/useFetch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LiveChat from "../Components/LiveChat";
import VideoComment from "../Components/VideoComment";

function Watch({ setIsToggle, isToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("v");

  useEffect(() => {
    setIsToggle(false);
  }, [searchParams, setIsToggle]);

  const youtube_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchQuery}&key=`;
  const { videos } = useFetch(youtube_url);
  const {videos : videoComments} = useFetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchQuery}&key=`)
  console.log(videoComments)

  return (
    <>
      <div className="py-4 px-16 ">
   
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
        <div className="w-[1200px] mb-4">
          <h2 className="mb-4 text-2xl">{videos[0]?.snippet?.title}</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <img
                src={videos[0]?.snippet?.thumbnails?.default?.url}
                alt=""
                className="w-10 h-10 rounded-full "
              />
              <p className="font-medium text-slate-700">
                {videos[0]?.snippet?.channelTitle}
              </p>
              <button className="py-2 px-4 border rounded-3xl bg-slate-200 ml-2 hover:bg-slate-300 cursor-pointer transition-all ">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center py-2 px-4 rounded-3xl bg-slate-200  hover:bg-slate-300 gap-2  cursor-pointer transition-all text-sm">
                <ThumbUpIcon className="" />
                <p>{formatNumber(Number(videos[0]?.statistics?.likeCount))}</p>
              </div>
              <div className="flex items-center py-2 px-4 rounded-3xl bg-slate-200  hover:bg-slate-300 gap-2  cursor-pointer transition-all text-sm">
                <ReplyIcon className="" />
                <p>Share</p>
              </div>
              <div className="flex items-center py-2 px-4 rounded-3xl bg-slate-200  hover:bg-slate-300 gap-2  cursor-pointer transition-all text-sm">
                <ArrowDownwardIcon className="" />
                <p>Download</p>
              </div>
              <div className="flex items-center py-2 px-4 rounded-3xl bg-slate-200  hover:bg-slate-300 gap-2  cursor-pointer transition-all text-sm">
                <ContentCutIcon className="" />
                <p>Clip</p>
              </div>
              <div className="flex items-center py-2 px-4 rounded-3xl bg-slate-200  hover:bg-slate-300 gap-2  cursor-pointer transition-all text-sm">
                <BookmarkBorderIcon className="" />
                <p>Save</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 py-4 px-6 w-[1200px] rounded-lg">
            <div className="flex mb-2 text-md">
              <p className="text-slate-600  italic pr-2">
                {formatNumber(Number(videos[0]?.statistics?.viewCount))} Views
              </p>
              <p className="text-slate-600  italic">
                {timeAgo(videos[0]?.statistics?.publishedAt)}
              </p>
              <div className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
                <KeyboardArrowDownIcon className="scale-125 cursor-pointer" />
              </div>
            </div>

            {isOpen ? (
              <div>
                {videos[0]?.snippet?.description
                  .split("\n")
                  .map((data, index) => {
                    return <p className="text-sm">{data}</p>;
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
         
        <div>
         <h1 className="mb-4 text-xl font-semibold">Comments</h1>
           {videoComments && videoComments.map((comment,index)=>{
             return <VideoComment comment={comment} key={index}/>
           })}
        </div>
      </div>

      <LiveChat />
    </>
  );
}

export default Watch;
