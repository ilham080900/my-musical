"use client";

import React from "react";
import SongItem from "@/components/SongItem";
import usePlayer from "@/hooks/usePlayer";

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
    <div
      key={0}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
    >
      {songs.map((song) => {
        return (
          <SongItem key={song.id} onClick={() => playSong(song)} data={song} />
        );
      })}
    </div>
  );
};

export default PlaylistContent;
