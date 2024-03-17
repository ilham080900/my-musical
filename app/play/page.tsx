"use client";

import Box from "@/components/Box";
import Button from "@/components/Button";
import Header from "@/components/Header";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import PlayContent from "./components/PlayContent";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";

export const revalidate = 0;

const Play = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-1 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 w-[930px] p-8">
          <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md">
            <button className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Musik</p>
            </button>
            <button className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Video</p>
            </button>
            <button className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Chord</p>
            </button>
          </div>
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 h-[475px] rounded-md">
            <div className="relative h-[400px] w-[400px] overflow-hidden py-2 px-2">
              <Image
                className="object-cover"
                src="/images/musik.jpg"
                fill
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-9 w-[400px] left-[200px] mr-9 ml-9 py-8">
          <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md">
            <button className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Terkait</p>
            </button>
            <button className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Lirik</p>
            </button>
          </div>
          <div className="overflow-y-auto h-full pt-2 items-center text-center bg-neutral-800 h-[475px] rounded-md">
            <div className="flex w-full justify-start">
              <div className="flex items-center gap-x-4 px-4 py-2">
                <PlayContent key={0} songs={[]} songId={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
