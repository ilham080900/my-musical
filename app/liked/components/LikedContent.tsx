"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import usePlayer from "@/hooks/usePlayer";

interface LikedContentProps {
  songs: any[];
  isLoading: boolean;
}

const LikedContent: React.FC<LikedContentProps> = ({ songs, isLoading }) => {
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
        No Liked Songs.
      </div>
    );
  }

  function playSong(value: any) {
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
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              key={song.id}
              onClick={() => playSong(song)}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
