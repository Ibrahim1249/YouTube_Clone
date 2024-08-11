
import { useEffect } from 'react'
import CategoryList from '../Components/CategoryList'
import VideoContainer from '../Components/VideoContainer'
import useFetch from '../Constaint/useFetch'


function Main({setIsToggle}) {
     const {videos} = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`)
    useEffect(() => {
      setIsToggle(true);
  
    }, [setIsToggle]);

  return (
    <>
      <div className='flex-1 relative'>
      <CategoryList />
      <VideoContainer videos={videos}/>
      </div>
    </>
  )
}

export default Main