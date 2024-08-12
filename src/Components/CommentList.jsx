import VideoComment from "./VideoComment";

function CommentList({commentList}) {
  return (
    <>
       {commentList?.map((comment,index)=>{
          return <div>
               <VideoComment comment={comment} key={index} />
              <div className="pl-5 border-l-black ml-5">
                 <CommentList commentList={comment?.replies?.comments} />
              </div>
          </div>
       })}
    </>
  )
}

export default CommentList