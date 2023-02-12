import React, { useContext, useState } from "react";
import SearchBar from "./searchBar";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import GLOBAL_CONTEXT from "../context/store";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <main className=" w-full flex items-center gap-8 py-3 text-white ">
        <div className="font-semibold text-xl pl-4 flex items-center gap-3">
          {/* <img src="/menu.svg" alt="" className="block w-6" /> */}
          <div className="flex items-center gap-2">
            <Link to='/'>
              <span className="text-pink-500">Ver</span>vain
            </Link>
            <img src="/play.png" alt="" className="block w-8" />
          </div>
        </div>
        <SearchBar />
      </main>
    </>
  );
};

export const SideBar = () => {
  return (
    <>
      <div className="flex w-[13vw] pr-3 border-dark-200 flex-col gap-1">
        <div className="flex gap-6  text-white rounded-[6px] items-center px-4 py-2 hover:bg-dark-100">
          <img src="/video.png" alt="" className="block w-8" />
          <div className="text-base font-semibold">Videos</div>
        </div>
        <div className="flex gap-6  text-white rounded-[6px] items-center px-4 py-2 hover:bg-dark-100">
          <img src="/gallery.png" alt="" className="block w-8" />
          <div className="text-base font-semibold">Photos</div>
        </div>
      </div>
    </>
  );
};

export const TagBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const arr = [
    "All",
    "Posts",
    "Movies",
    "Anime",
    "Fiction",
    "Computer promgramming",
    "books",
    "internship",
    "java",
    "python",
    "javascript",
    "react",
  ];
  return (
    <>
    <main className="flex gap-2 relative">
      {loaded && instanceRef.current &&   <div
              className={`flex items-center justify-center bg-dark-200/50 w-8 h-8 hover:bg-dark-100 rounded-full ${
                currentSlide === 0 && "hidden"
              } `}
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
             <img src="/prev.svg" alt="" className="block" />
            </div>}
      <main
        ref={sliderRef}
        className="max-w-[80vw] relative keen-slider overflow-x-scrol flex gap-3 "
      >
        {arr.map((item) => (
          <Tags item={item} />
        ))}
        {arr.map((item) => (
          <Tags item={item} />
        ))}
      </main>
      {loaded && instanceRef.current && <>
        <div
              className={`flex items-center justify-center bg-dark-200/50 w-8 h-8 hover:bg-dark-100 rounded-full ${
                currentSlide === 
                instanceRef.current.track.details.slides.length - 1 && "hidden"
              } `}
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }

            >
             <img src="/next.svg" alt="" className="block" />
            </div>
      </>}
    </main>
    </>
  );
};

export const Tags = ({ item }) => {
  const { getSearchedItems}=useContext(GLOBAL_CONTEXT);
  let naviage=useNavigate();
  const handleClick=()=>{
     getSearchedItems(item);
     naviage(`/search/${item}`)
  }
  return (
    <>
      <div onClick={handleClick} className="px-3 cursor-pointer keen-slider__slide py-1 min-w-max hover:bg-dark-100 font-medium text-base rounded-[7px] bg-dark-200 text-white">
        {item}
      </div>
    </>
  );
};

export default Navbar;
