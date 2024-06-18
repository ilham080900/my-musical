"use client";

import usePlayer from "@/hooks/usePlayer";
import { useRouter } from "next/navigation";
import PlayItem from "@/components/PlayItem";
import { useEffect } from "react";

interface PlayContentProps {
  songs: any[];
  isLoading: boolean;
}

const PlayContent: React.FC<PlayContentProps> = ({ songs, isLoading }) => {
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
        No Play Songs.
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
    <div className="flex flex-col gap-y-2 w-[345px] h-[500px] cursor-pointer rounded-lg">
      <div className="relative hover:bg-neutral-700/50 rounded-lg">
        {songs.map((song) => (
          <div key={song.id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <PlayItem
                key={song.id}
                onClick={() => playSong(song)}
                data={song}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayContent;
