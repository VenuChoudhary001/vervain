import React, { useState, useEffect, useReducer } from "react";
import { apiService, popularVideosAPI } from "../utils/apiService";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";

const GLOBAL_CONTEXT = React.createContext();

export const INITIAL_STATE={
  popularVideos:[],
  popularPics:[],
  search:{},
  user:{
  }
}




export const Provider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,INITIAL_STATE);
  
  const value={
    initialState:state,
    getPopularVideos:async ()=>{
      let res=await popularVideosAPI()
      dispatch({type:ACTIONS.GET_POPULAR_VIDEOS,payload:res});
      },
    getSearchedItems:async (query)=>{
      let res=await apiService('GET',`/search?query=${query}`);
      dispatch({type:ACTIONS.SEARCH_VIDEOS,payload:res});
    }
  }

  

  return (
    <>
      <GLOBAL_CONTEXT.Provider  value={value}>{children}</GLOBAL_CONTEXT.Provider>
    </>
  );
};

export default GLOBAL_CONTEXT;
