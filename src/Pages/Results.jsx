import { useLocation } from "react-router-dom"
import {  useEffect } from "react";
import ResultVideo from "../Components/ResultVideo";
import useFetch from "../Constaint/useFetch";

function Results({setIsToggle,isToggle}) {
 const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  const youtube_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=`
  const {videos} = useFetch(youtube_url)

  useEffect(()=>{
     setIsToggle(true)
  },[])
  



  return (
    <>
      <div className="py-8 px-4 flex flex-col justify-center w-[70%] mx-auto">
         {videos && videos.map((video,index)=>{
          return <ResultVideo video={video} key={index} />
         })}
      </div>
    </>
  )
}

export default Results