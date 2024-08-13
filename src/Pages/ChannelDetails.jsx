import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ChannelDetails({setIsToggle , isToggle}) {
    const location = useLocation();
    const { channelDetails } = location.state || {};
    console.log(channelDetails)
    useEffect(()=>{
        setIsToggle(true)
     },[])
  return (
    <>
      
    </>
  )
}

export default ChannelDetails