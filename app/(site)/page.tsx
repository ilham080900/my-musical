"use client";

import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import PageContentPlaylist from "./components/PageContentPlaylist";
import useSong from "@/hooks/useSong";
import useRecomendation from "@/hooks/useRecomendation";
import { useListSong } from "@/hooks/useListSong";
import {useRecomendationPlaylist} from '@/hooks/useRecomendationPlaylist'

export default function Home() {
  const song = useSong((state) => state.song);
  const recomendationPlaylist = useRecomendation((state) => state.recomendation_playlist);

  useListSong();
  useRecomendationPlaylist()
  

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="mb-2">
        <h1 className="text-white text-3xl font-semibold">
          Welcome to My Musical
        </h1>
        <div className="grid grid=cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem
            image="/images/liked.png"
            name="Liked Songs"
            href="/liked"
          />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs </h1>
        </div>
        <PageContent songs={song} />
      </div>
      <div className="mt-2 mb-7 px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Recommended Playlist </h1>
        </div>
        <PageContentPlaylist playlists={recomendationPlaylist} />
      </div>
      <br />
      <br />
    </div>
  );
}
