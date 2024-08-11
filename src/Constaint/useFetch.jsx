import { useEffect , useState } from "react";

export default function useFetch(url) {
    const [videos, setVideos] = useState([]);
    const [isLoading , setIsLoading] = useState(false)
    useEffect(() => {
        fetchCategory(url);
      }, [url]); 

      const fetchCategory = async (url) => {
        try {
          setIsLoading(true)
          const response = await fetch(url+import.meta.env.VITE_YOUTUBE_KEY);
          const results = await response.json();
          setVideos(results.items);
          setIsLoading(false)
        } catch (error) {
          console.log(error.message);
        }
      };
    
      return { videos , isLoading};
}
