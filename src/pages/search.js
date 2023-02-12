import React, { useContext } from "react";
import Thumb from "../components/cards/thumbs";
import Navbar, { SideBar, TagBar } from "../components/navbar";
import GLOBAL_CONTEXT from "../context/store";
const Search = () => {
  const { initialState } = useContext(GLOBAL_CONTEXT);
  return (
    <>
      <Navbar />
      <main className="flex relative h-full gap-4">
        <SideBar />
        <main className="flex pt-3 flex-col gap-6 w-full">
          <TagBar />
          <div className="flex gap-8 flex-wrap items-center justify-center">
            {initialState.search.videos &&
            initialState.search.videos.length > 0 ? (
              initialState.search.videos.map((item) => <Thumb item={item} />)
            ) : (
              <div className="text-white text-2xl ">No results found!</div>
            )}
          </div>
        </main>
      </main>
    </>
  );
};

export default Search;
