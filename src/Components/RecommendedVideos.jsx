import { Link } from "react-router-dom";
import { timeAgo } from "../Constaint/constaint";
function RecommendedVideos({ recommendVideo }) {
  return (
    <>
     <Link to={`/watch?v=${recommendVideo?.contentDetails?.upload?.videoId}&c=${recommendVideo?.snippet?.channelId}`}>
      <div className="flex gap-4 mb-4">
        <div className="w-[200px] ">
          <img
            src={recommendVideo?.snippet?.thumbnails?.medium?.url}
            alt=""
            className=" rounded-lg"
          />
        </div>
        <div className="flex-1">
          <p className="mb-1 text-[15px]">
            {recommendVideo?.snippet?.title?.includes("#")
              ? recommendVideo?.snippet?.title
                  ?.split("#")
                  .slice(1)
                  .filter(Boolean)
                  .join(" ")
              : recommendVideo?.snippet?.title}
          </p>
          <p className="font-medium">
            {recommendVideo?.snippet?.channelTitle}{" "}
            <span className="pl-2 text-[14px] text-slate-600 italic">
              {timeAgo(recommendVideo?.snippet?.publishedAt)}
            </span>
          </p>
        </div>
      
      </div>
      </Link>
    </>
  );
}

export default RecommendedVideos;
