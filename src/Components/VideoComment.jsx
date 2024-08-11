import { timeAgo } from "../Constaint/constaint";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function VideoComment({comment}) {
  return (
    <>
      <div className="flex gap-3 mb-4">
        <img
          src={
            comment?.snippet?.topLevelComment?.snippet
              ?.authorProfileImageUrl
          }
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-[15px] font-semibold">
            {
              comment?.snippet?.topLevelComment?.snippet
                ?.authorDisplayName
            }
            <span className="pl-4 text-[14px]">
              {timeAgo(
                comment?.snippet?.topLevelComment?.snippet?.updatedAt
              )}
            </span>
          </p>
          <p className="font-medium text-[16px] mb-1">
            {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
          </p>

          <div className="flex gap-2 items-center">
            <ThumbUpIcon style={{fontSize: "18px"}}/>
            <p>{ comment?.snippet?.topLevelComment?.snippet
              ?.likeCount}</p>
        </div>
        </div>
     
      </div>
    </>
  );
}

export default VideoComment;
