"use client";

import React from "react";
import RecomendationPlaylistItem from "@/components/RecomendationPlaylistItem";
import { useRouter } from "next/navigation";

interface PageContentPlaylistProps {
  playlists: any[];
}
const PageContentPlaylist: React.FC<PageContentPlaylistProps> = ({ playlists }) => {
  const router = useRouter()

  if (playlists.length === 0) {
    return <div className="mt-4 text-neutral-400">No playlist available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {playlists.map((playlist: any) => {
        return (
          <RecomendationPlaylistItem key={playlist.id} onClick={() => {router.push(`/recomendation/${playlist.id}`);}} data={playlist} />
        );
      })}
    </div>
  );
};

export default PageContentPlaylist;
