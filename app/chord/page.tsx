"use client";

import Header from "@/components/Header";
import PlayMenu from "@/components/PlayMenu";
import usePlayer from "@/hooks/usePlayer";
import { useEffect, useState } from "react";

const Chord = () => {
  const [htmlContent, setHtmlContent] = useState<any>("");
  const playSong = usePlayer((state) => state.song);

  useEffect(() => {
    if (playSong) {
      setHtmlContent(playSong.chord);
    }
  }, [playSong]);

  return (
    <div className="bg-neutral-900 text-white rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-2 xl:grid-cols-1 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 p-8 lg:w-[1390px] md:w-[665px] sm:w-[630px]">
        <PlayMenu />
          <div className="relative flex flex-col pt-2 pb-2 bg-neutral-800 lg:w-[1325px] md:w-[600px] sm:w-[565px] rounded-md">
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="ml-3 mr-5 mt-2 mb-3"
            />
            <div className="absolute flex flex-col justify-end items-end object-right-top p-4 pt-2 mr-1 mt-2 rtl:text-right right-[0%] top-[0%] w-[80%] hight-[25%] rounded-md">
              <video className="w-[50%]" controls>
                <source
                  src={`/videos/tutorgitaraboutyou-the1975.mp4`}
                  // src={`/videos/${playSong.video_chord}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Chord;
