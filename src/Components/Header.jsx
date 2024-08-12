import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useRef } from "react";
import SearchItem from "./SearchItem";
import { Link, useNavigate } from "react-router-dom";

function Header({ setIsToggle, isToggle }) {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}&key${
      import.meta.env.VITE_YOUTUBE_KEY
    }`;
    let timer = setTimeout(() => {
      fetchData(url);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const results = await response.json();
      setSearchData(results[1]);
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleClick(e) {
    setIsToggle(!isToggle);
  }
  function handleSearchButton(e) {
    e.preventDefault();
    navigate(`/result?search=${search}`);
  }


  useEffect(() => {
     if(isVisible){
       const handleKeyboardPress = (event)=>{
         if(event.key === "ArrowUp"){
            setActiveIndex((prevActiveIndex)=> prevActiveIndex > 0 ? prevActiveIndex - 1 : prevActiveIndex)
         }else if(event.key === "ArrowDown"){
          setActiveIndex((prevActiveIndex)=> prevActiveIndex < searchData.length -1 ? prevActiveIndex + 1 : prevActiveIndex)
         }else if(event.key === "Enter" && activeIndex >= 0){
           const selectSearchValue = searchData[activeIndex];
           setSearch(selectSearchValue);
           setActiveIndex(-1);
         }
       }
       document.addEventListener("keydown" , handleKeyboardPress);
       return ()=>{
          document.removeEventListener("keydown",handleKeyboardPress)
       }
     }
  }, [isVisible, activeIndex, searchData]);


  return (
    <>
      <nav className="flex items-center py-4 px-8 justify-between sticky top-0 w-full z-10 bg-slate-50">
        <div className="flex items-center">
          <MenuIcon
            className="px-1 mx-1 scale-150 cursor-pointer"
            onClick={handleClick}
          />
          <Link to={"/"}>
            <img src={logo} alt="" className="w-32" />
          </Link>
        </div>
        <div className="w-[25%] flex">
          <div className="w-full relative">
            <input
              type="text"
              value={search}
              ref={inputRef}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="search"
              className="border-2 w-full py-1 px-4 rounded-tl-2xl rounded-bl-2xl"
              onFocus={() => {
                setIsVisible(true);
              }}
              onBlur={() => {
                setTimeout(() => setIsVisible(false), 100); 
              }}
            />
            {isVisible && (
              <div className="absolute w-full bg-[#faf9f9] mt-1 rounded-lg">
                {searchData &&
                  searchData.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer ${
                        activeIndex === index ? "bg-gray-200" : ""
                      }`}
                      onMouseDown={() => {
                        setSearch(item);
                        setIsVisible(false);
                      }}
                    >
                      <SearchItem item={item} />
                    </div>
                  ))}
              </div>
            )}
          </div>
          <button
            className="rounded-tr-2xl rounded-br-2xl border-r-2 border-t-2 border-b-2 py-1 px-4"
            onClick={handleSearchButton}
          >
            <SearchIcon />
          </button>
        </div>
        <div>
          <NotificationsIcon className="px-1 mx-1 scale-150" />
          <PersonIcon className="px-1 mx-1 scale-150" />
        </div>
      </nav>
    </>
  );
}

export default Header;
