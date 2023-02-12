import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GLOBAL_CONTEXT from "../context/store";
import VoiceSearch from "./voiceSearch";

const SearchBar = () => {
  const [search,setSearch]=useState();
  const [show,setShow]=useState(false);
  let navigate=useNavigate()
  const [showVoiceSearch,setShowVoiceSearch]=useState(false);
  const handleClick=()=>{
    let query=search.trim();
    if(search!="" && query!=""){
      getSearchedItems(query);
      navigate(`/search/${search}`)
    }
  }
  const handleChange=(e)=>{
    if(e.keyCode===13){
     handleClick();
    }
  }
  const {getSearchedItems}=useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className="flex gap-4 relative items-center">
        <div  className="w-[600px] border-[1px] overflow-hidden text-white font-medium font-primary border-gray-800 flex px- rounded-full bg-dark-10 ">
          <input
            type={"text"}
            value={search}
            placeholder="Search"
            className="bg-transparent w-full px-4 py-2 rounded-full outline-none "
            onChange={e=>setSearch(e.target.value)}
            onKeyDown={(e)=>{handleChange(e)}}
          />
          <div onClick={handleClick} className="flex items-center cursor-pointer w-16 justify-center bg-dark-200">
            <img src="/search.svg" className="" />
          </div>
        </div>
        <div onClick={()=>setShowVoiceSearch(true)} className=" bg-dark-200 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full">
          <img src="/voice.svg" alt="" />
        </div>
        {showVoiceSearch && <VoiceSearch setShow={setShowVoiceSearch} setSearch={setSearch}/>}
        {/* <DropDown setSearch={setSearch}/> */}
      </div>
    </>
  );
};

export const DropDown = () => {
  const arr=[1,2,3,1,4,5,6,7,8,9]
  return <>
     <div className="w-full absolute pt-2 bg-white flex flex-col top-[51px] z-20 scroll rounded-[12px] overflow-y-scroll h-[400px]">
      {arr.map(item=><div className="flex gap-4 hover:bg-gray-200 cursor-pointer font-semibold px-5 py-2 text-dark-200">
        <img src="/search.svg" alt="" className="block w-4" />
        Hello baby daddy's home! 
      </div>)}
      

     </div>
  </>;
};

export default SearchBar;
