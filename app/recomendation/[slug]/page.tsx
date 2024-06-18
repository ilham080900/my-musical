/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "@/components/Header";
import Image from "next/image";
import useRecomendation from "@/hooks/useRecomendation";
import PlaylistContent from "./components/PlaylistContent";


const Playlist = ({ params }: { params: { slug: string } }) => {
  const playlists = useRecomendation((state) => state.recomendation_playlist);

  const playlist = playlists.find((e: any) => e.id == params.slug);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="mt-20">
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative h-32 w-32 lg:h-42 lg:w-42 rounded-md">
                <Image
                  fill
                  src="/images/gambar playlist.jpg"
                  alt="Playlist"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">
                  Playlist
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                  {playlist ? playlist.playlist_name : ""}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Header>
      {playlist ? <PlaylistContent songs={playlist.songs} isLoading /> : <></>}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Playlist;
