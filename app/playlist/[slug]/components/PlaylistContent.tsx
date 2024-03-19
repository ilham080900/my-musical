"use client";

import React from "react";
import SongItem from "@/components/SongItem";
import usePlayer from "@/hooks/usePlayer";
import MediaItem from "@/components/MediaItem";
import { headers } from "next/headers";

interface PlaylistContentProps {
  songs: any[];
}
const PlaylistContent: React.FC<PlaylistContentProps> = ({ songs }) => {
  const setSong = usePlayer((state) => state.setSong);
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No song available</div>;
  }

  function playSong(value: any) {
    setSong({ song_name: value.song_name, artist: value.artist, id: value.id });
  }

  return (
    <div key={0} className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => {
        return (
          <div className="flex items-center gap-x-4 w-full">
            <MediaItem
              key={song.id}
              onClick={() => playSong(song)}
              data={song}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistContent;
