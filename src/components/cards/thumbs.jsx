import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { Link } from "react-router-dom";
import { getVideoDuration } from "../../utils";
const Thumb = ({item,vertical=true}) => {
  let duration=getVideoDuration(item.duration)
  return (
    <>
      <Link to={`/video/${item.id}`} className={`flex relative ${vertical?"flex-col": "flex-row m-2"} gap-3 w-ful max-w-[380px]`}>
        <div className="overflow-hidden  relative w-full rounded-[5px] h-[220px]">
          <HoverVideoPlayer
            videoSrc={item.video_files[item.video_files.length-3].link}
            pausedOverlay={
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-[220px]"
              />
            }
            loadingOverlay={
              <div className="loading-overlay relative blur-sm">
                <div className="bg-black absolute bottom-5 text-white p-3 right-2">
                  keep hovering to play
                </div>
              </div>
            }
          />
          <span className="bg-black/70 p-1 absolute bottom-4 right-4 text-white text-xs font-semibold rounded">
            {duration}
          </span>
        </div>
        <div className="absolute bottom-1 left-2 z-50 flex gap-2 items-start text-white">
          <div className="flex flex-col gap-">
            <div className="text-lg capitalize font-bold">
             {item.user.name}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const ThumbSkeleton = () => {
  return (
    <>
      <main className="flex flex-col gap-3 w-full animate-pulse max-w-[380px]">
        <div className="overflow-hidden relative bg-dark-100 rounded-[5px] h-[220px]"></div>
        <div className="flex gap-2 w-full items-start text-white">
          <div className="w-8 mt-1 h-8 rounded-full bg-dark-200"></div>
          <div className="flex flex-col gap-2 w-full gap-">
            <div className="w-3/4 h-[20px] bg-dark-100"></div>
            <div className="w-2/4 h-[20px] bg-dark-100"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Thumb;
