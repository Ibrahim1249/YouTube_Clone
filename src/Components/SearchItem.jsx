import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchItem({item}) {
    const navigate = useNavigate()

  return (
    <>

    <div className="flex justify-between items-center px-4 hover:bg-slate-300 transition-all " >
        <div className="flex flex-1 items-center mb-1 cursor-pointer">
          <SearchIcon />
          <Link to={"/result"} className='z-0'><p className="py-1 px-2  text-[15px]  ">{item}</p></Link> 
        </div>
        <CloseIcon className="cursor-pointer" />
      </div>
    </>
  );
}

export default SearchItem;
