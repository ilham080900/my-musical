"use client";

import React, { useEffect } from "react";
import usePlayer from "@/hooks/usePlayer";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import { useRouter } from "next/navigation";
import MediaPlaylist from "@/components/MediaPlaylist";

interface PlaylistContentProps {
  songs: any[];
  isLoading: boolean;
}
const PlaylistContent: React.FC<PlaylistContentProps> = ({
  songs,
  isLoading,
}) => {
  const router = useRouter();

  const setSong = usePlayer((state) => state.setSong);

  useEffect(() => {
    if (!isLoading && !songs.length) {
      router.replace("/");
    }
  }, [isLoading, songs.length, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Playlist Songs.
      </div>
    );
  }

  function playSong(value: any) {
    console.log(value);
    setSong({
      song_name: value.song_name,
      artist: value.artist,
      id: value.id,
      thumbnail: value.thumbnail,
      video: value.video,
      lirik: value.lirik,
      chord: value.chord,
      video_chord: value.video_chord,
    });
  }

  return (
    <div key={0} className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => {
        return (
          <div key={song.id} className="flex items-center gap-x-4 w-full">
            <MediaItem
              key={song.id}
              onClick={() => playSong(song)}
              data={song}
            />
            <LikeButton songId={song.id} />
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistContent;
