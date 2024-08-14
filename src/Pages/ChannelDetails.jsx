import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../Constaint/useFetch";
import { formatNumber, timeAgo , filterUniqueVideos} from "../Constaint/constaint";
import ChannelVideos from "../Components/ChannelVideos";


function ChannelDetails({ setIsToggle, isToggle }) {
  const location = useLocation();
  const { channelDetails, channelId, playlist } = location.state || {};

  useEffect(() => {
    setIsToggle(true);
  }, []);

  const { videos: channelRecommendedVideos } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=`
  );

  const { videos: channelPlaylist } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=`
  );
  
  let filterChannelRecommendedVideo = channelRecommendedVideos && filterUniqueVideos(channelRecommendedVideos);

  return (
    <>
      <div className="px-8 py-8 w-[80%] mx-auto  ">
        <div className="flex gap-6 items-center mb-6">
          <div >
            <img
              src={channelDetails[0]?.snippet?.thumbnails?.medium?.url}
              alt=""
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-2xl mb-1">
              {channelDetails[0]?.snippet?.title}
            </h1>
            <div className="flex gap-2">
              <p>{channelDetails[0]?.snippet?.customUrl}</p>
              <p>{`${formatNumber(
                channelDetails[0]?.statistics?.subscriberCount
              )}`}</p>
              <p>{`${channelDetails[0]?.statistics?.videoCount} videos`}</p>
              <p>{`${formatNumber(
                channelDetails[0]?.statistics?.viewCount
              )} views`}</p>
            </div>
            <p className="mb-4">{channelDetails[0]?.snippet?.description}</p>
            <button className="py-2 px-4 border rounded-3xl bg-slate-200 ml-2 hover:bg-slate-300 cursor-pointer transition-all ">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border border-black"/>

        <div className="w-full py-2">
          <h1 className="mb-4 text-xl font-medium">For You</h1>
           
           <div className="flex flex-wrap justify-center gap-4">
              {filterChannelRecommendedVideo && filterChannelRecommendedVideo?.map((video,index)=>{
                 return <ChannelVideos video={video} key={index}/>
              })}
           </div>

        </div>
         
        <hr className="border border-black"/>

        <div className="w-full py-2">
          <h1 className="mb-4 text-xl font-medium">PlayLists</h1>
           
           <div className="flex flex-wrap justify-center gap-4">
              {channelPlaylist && channelPlaylist?.slice(0,10).map((video,index)=>{
                 return <ChannelVideos video={video} key={index}/>
              })}
           </div>

        </div>
      </div>
    </>
  );
}

export default ChannelDetails;
