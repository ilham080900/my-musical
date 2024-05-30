"use client";

import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";
import useSong from "@/hooks/useSong";

export const revalidate = 0;

const Liked = () => {
  const song = useSong((state) => state.song);
  const likedSong = useSong((state) => state.likedSong);

  const songs = song.filter((obj: any) => likedSong.includes(obj.id));

  return (
    <div className="rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="mt-20">
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                <Image
                  src="/images/liked.png"
                  alt="Playlist"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">
                  Playlist
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                  Like songs!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} isLoading />
    </div>
  );
};

export default Liked;
