import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Landing from "./pages/landing";
  import VideoPlayer from "./pages/player";
  import Search from "./pages/search";
const App = () => {
    const router=createBrowserRouter([
        {
          path:'/',
          element:<Landing/>
        },{
          path:'/video/:videoId',
          element:<VideoPlayer/>
        },
        {
          path:'/search/:searchID',
          element:<Search/>
        }
      ])
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}
export default App;