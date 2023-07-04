"use client";

import Youtube from "react-youtube";

const VideoContainer: React.FC<{ source: string }> = ({ source }) => {
  return (
    <div className="flex flex-col bg-white my-5 p-5 rounded-md border">
      <h1 className="text-lg font-medium text-slate-800">Video</h1>
      <div className="flex justify-center">
        <Youtube
          videoId={source}
          opts={{
            // height: "400",
            // width: "800",
            playerVars: { autoplay: 1 },
          }}
          iframeClassName="h-[400px] w-[400px] md:w-[500px] xl:w-[800px]"
        />
      </div>
    </div>
  );
};

export default VideoContainer;
