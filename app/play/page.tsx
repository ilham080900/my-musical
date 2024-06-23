"use client";

import Header from "@/components/Header";

import Image from "next/image";
import PlayMenu from "@/components/PlayMenu";
import React from "react";

import usePlayer from "@/hooks/usePlayer";
import { useListSong } from "@/hooks/useListSong";
import PlayOptionSubMenu from "@/components/PlayOptionSubMenu";

export default function Play(){
  useListSong();

  const playSong = usePlayer((state) => state.song);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-1 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 lg:w-[960px] md:w-[665px] sm:w-[615px] p-8">
          <PlayMenu />
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 gap-x-2 sm:w-[550px] md:w-[600px] lg:w-[895px] h-[435px] rounded-md">
            <div className="relative h-[400px] w-[400px] overflow-hidden py-2 px-2">
              <Image
                className="object-cover rounded-md"
                src={`/images/${playSong?.thumbnail}`}
                fill
                alt="image"
              />
            </div>
          </div>
        </div>
        <PlayOptionSubMenu />
      </div>
    </div>
  );
};

