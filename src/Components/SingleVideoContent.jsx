import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { formatNumber, timeAgo } from "../Constaint/constaint";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import useFetch from "../Constaint/useFetch";
import { useNavigate } from "react-router-dom";

function SingleVideoContent({ videos, channel }) {
  console.log(videos);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { videos: channelDetails } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videos[0]?.snippet?.channelId}&key=`
  );

  const handleChannelClick = () => {
    if (channelDetails) {
      const channelUserName = channelDetails[0]?.snippet?.customUrl;
      const channelId = videos[0]?.snippet?.channelId;
      const playlist =
        channelDetails[0]?.contentDetails?.relatedPlaylists?.uploads;
      navigate(`/${channelUserName}`, {
        state: { channelDetails, channelId, playlist },
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3 items-center">
          <img
            src={channel[0]?.snippet?.thumbnails?.medium?.url}
            alt=""
            className="w-10 h-10 rounded-full "
          />
          <div>
            <span
              onClick={handleChannelClick}
              className="font-medium text-slate-700 cursor-pointer"
            >
              {videos[0]?.snippet?.channelTitle}
            </span>
             <p>{formatNumber(Number(channel[0]?.statistics?.subscriberCount ))}</p>
          </div>
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

      <div className="bg-slate-200 py-4 px-6 full rounded-lg">
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
            {videos[0]?.snippet?.description.split("\n").map((data, index) => {
              return <p className="text-sm">{data}</p>;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SingleVideoContent;
