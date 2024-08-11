import { useLocation, useSearchParams } from "react-router-dom"
import { useState , useEffect } from "react";
import Watch from "../Pages/Watch";

function Playlists({setIsToggle , isToggle}) {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("v");
    const [videos,setVideos] = useState([]);
    const youtube_url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_KEY}`
    useEffect(()=>{
      fetchCategory(youtube_url);
    },[])

    const fetchCategory = async(url)=>{
        try{
            const response = await fetch(url);
            const results = await response.json();
            setVideos(results.items)
            console.log(results.items)
        }catch(error){
            console.log(error.message)
        }
    }
  return (
    <>
       <div>
          <Watch isToggle={isToggle} setIsToggle={setIsToggle} videoId={videos[0]?.snippet?.resourceId?.videoId}/>
       </div>
    </>
  )
}

export default Playlists