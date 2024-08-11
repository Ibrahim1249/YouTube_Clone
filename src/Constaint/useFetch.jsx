import { useEffect , useState } from "react";

export default function useFetch(url) {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchCategory(url);
      }, [url]); 

      const fetchCategory = async (url) => {
        try {
          const response = await fetch(url+import.meta.env.VITE_YOUTUBE_KEY);
          const results = await response.json();
          setVideos(results.items);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      return { videos };
}
