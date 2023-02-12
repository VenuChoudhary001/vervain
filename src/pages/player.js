import React, { useEffect, useState,useContext } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { getParticularVideo } from "../utils/apiService";
import GLOBAL_CONTEXT from "../context/store";
import Thumb from "../components/cards/thumbs";
import PlayerComponent from "../components/videoPlayer";
const VideoPlayer = () => {
  let { videoId } = useParams();
  const {initialState}=useContext(GLOBAL_CONTEXT)
  console.log(videoId);
  const [url, setURL] = useState();
  useEffect(() => {
    (async () => {
      let res = await getParticularVideo(videoId);
      console.log(res);
      setURL(res.data);
    })();
  }, [videoId]);
  return (
    <>
    <Navbar/>
      <main className="grid grid-cols-7 bg-dark   gap-6 min-h-screen">
        <PlayerComponent url={url} />
        <main className="scroll columns-2 w-full col-span-2 gap-0 max-h-[700px] overflow-y-scroll ">
            {url && url.tags.length==0 && initialState.popularVideos.map((item,index)=> index < 6 && <Thumb item={item} vertical={false} />)}
        </main>
      </main>
    </>
  );
};

export default VideoPlayer;
