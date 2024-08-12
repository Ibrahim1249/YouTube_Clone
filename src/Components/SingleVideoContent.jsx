import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { formatNumber, timeAgo } from "../Constaint/constaint";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, {  useState } from "react";

function SingleVideoContent({videos}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
