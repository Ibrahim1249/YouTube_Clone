
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


function Sidebar({setIsToggle , isToggle}) {
  return (
      isToggle ? <div className="py-4 pl-4 pr-2 w-[10%] border-r-2 sticky top-20  h-screen">
      <div className='flex p-1.5 rounded-lg hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <HomeIcon className='px-1 mx-1 scale-150'/>
         <p>Home</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <SubscriptionsIcon className='px-1 mx-1 scale-150'/>
         <p>Subscription</p>
      </div>
      <hr className='border border-stone-950 my-4' />
       
      <p className='my-2'>You</p>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <HistoryIcon className='px-1 mx-1 scale-150'/>
         <p>History</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <PlaylistAddCheckIcon className='px-1 mx-1 scale-150'/>
         <p>Playlists</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <WatchLaterIcon className='px-1 mx-1 scale-150'/>
         <p>Watch Later</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <ThumbUpIcon className='px-1 mx-1 scale-150'/>
         <p>Likes</p>
      </div>


      <hr className='border border-stone-950 mt-4' />
      <p className='my-2'>Explore</p>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <WhatshotIcon className='px-1 mx-1 scale-150'/>
         <p>Trending</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <MusicNoteIcon className='px-1 mx-1 scale-150'/>
         <p>Music</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <ShoppingBagIcon className='px-1 mx-1 scale-150'/>
         <p>Shopping</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <SportsEsportsIcon className='px-1 mx-1 scale-150'/>
         <p>Gaming</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <NewspaperIcon className='px-1 mx-1 scale-150'/>
         <p>News</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <PodcastsIcon className='px-1 mx-1 scale-150'/>
         <p>Podcast</p>
      </div>
      <div className='flex p-1.5 rounded-lg  hover:bg-slate-300 gap-6 mb-2 cursor-pointer transition-all'>
         <EmojiEventsIcon className='px-1 mx-1 scale-150'/>
         <p>Sports</p>
      </div>

   </div> : ""
  )
}

export default Sidebar