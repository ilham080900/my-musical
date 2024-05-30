"use client";

import Header from "@/components/Header";
import PlayMenu from "@/components/PlayMenu";
import PlayOptions from "@/components/PlayOptions";
import TerkaitContent from "../../components/TerkaitContent";
import LirikContent from "../../components/LirikContent";
import usePlayer from "@/hooks/usePlayer";
import PlayOptionSubMenu from "@/components/PlayOptionSubMenu";

export const revalidate = 0;

const Video = () => {
  const playSong = usePlayer((state) => state.song);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-1 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 lg:w-[935px] md:w-[830px] sm:w-[600px] p-8">
          <PlayMenu />
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 h-[495px] rounded-md">
            <div className="relative h-[400px] w-[800px] overflow-hidden py-2 px-2">
              <video className="w-full h-full rounded-md" controls>
                <source src={`/videos/${playSong.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <PlayOptionSubMenu />
      </div>
    </div>
  );
};

export default Video;
