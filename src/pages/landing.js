import React,{useContext, useEffect} from 'react'
import Navbar,{SideBar,TagBar} from '../components/navbar';
import Thumb, { ThumbSkeleton } from '../components/cards/thumbs';
import GLOBAL_CONTEXT from '../context/store';
const Landing = () => {
   let minShow=[1,2,3,4,5,6,7,8,9];
   const {initialState,getPopularVideos}=useContext(GLOBAL_CONTEXT);
   useEffect(()=>{
    getPopularVideos();
   },[])
  return (
   <>
   <Navbar />
      <main className="flex relative h-full gap-4">
        <SideBar />
        <main className="flex pt-3 flex-col gap-6 w-full">
          <TagBar />
          <main className='text-2xl font-semibold text-white'>Popular Videos</main>
          <main className="flex gap-8 flex-wrap items-center justify-cente">
            {!initialState.popularVideos.length>0 && minShow.map(item=><ThumbSkeleton />)}
              {initialState.popularVideos.length>0 &&  initialState.popularVideos.map(item=><Thumb  item={item} /> ) }
          </main>
        </main>
      </main>
   </>
  )
}

export default Landing