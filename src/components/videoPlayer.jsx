import React from "react";

const PlayerComponent = ({url}) => {
  return (
    <>
      <main className="w-full  col-span-5 flex flex-col gap-4">
        {url && (
          <video controls src={url.video_files[0].link} className="w-full max-h-[700px] h-full">
            {/* <source
              className="w-full h-full object-cover"
            /> */}
          </video>
        )}
        <div className="flex flex-col gap-6 text-white">
          <div className="text-lg font-bold">
            Creator : {url && url.user.name}
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayerComponent;
