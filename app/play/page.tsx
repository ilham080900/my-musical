"use client";

import Box from "@/components/Box";
import Button from "@/components/Button";
import Header from "@/components/Header";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import PlayContent from "./components/PlayContent";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import PlayMenu from "@/components/PlayMenu";

export const revalidate = 0;

const Play = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-1 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 lg:w-[935px] md:w-[830px] sm:w-[600px] p-8">
          <PlayMenu />
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 h-[495px] rounded-md">
            <div className="relative h-[400px] w-[400px] overflow-hidden py-2 px-2">
              <Image
                className="object-cover"
                src="https://cdn.musebycl.io/2020-07/art-of-the-album-van-halen-hed-2020.jpg"
                fill
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-9 lg:w-[400px] md:w-[300px] left-[200px] mr-5 ml-9 py-8">
          <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md">
            <button className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Terkait</p>
            </button>
            <button className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Lirik</p>
            </button>
          </div>
          <div className="overflow-y-auto pt-2 items-center text-center bg-neutral-800 h-[495px] rounded-md">
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
