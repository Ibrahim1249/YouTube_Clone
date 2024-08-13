
import { useEffect } from 'react'
import CategoryList from '../Components/CategoryList'
import VideoContainer from '../Components/VideoContainer'
import useFetch from '../Constaint/useFetch'

function Main({setIsToggle , category}) {
     const {videos , isLoading} = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`)
    useEffect(() => {
      setIsToggle(true);
    }, [setIsToggle]);

    const {videos : videoCategory} = useFetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=`)

  return (
    <>
      <div className='flex-1 relative'>
      <CategoryList videoCategory={videoCategory}/>
      <VideoContainer videos={videos} isLoading={isLoading}/>
      </div>
    </>
  )
}

export default Main