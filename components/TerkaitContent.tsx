"use client";

import useSong from "@/hooks/useSong";
import MediaItem from "./MediaItem";
import usePlayer from "@/hooks/usePlayer";

const TerkaitContent = () => {
  const listSong = useSong((state) => state.song);
  const setSong = usePlayer((state) => state.setSong);

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
    <div className="overflow-y-auto pt-2 items-center bg-neutral-800 w-full rounded-md">
      {listSong.map((song: any) => (
        <div
          key={song.id}
          className="flex gap-x-4 w-full hover:bg-neutral-400/20 cursor-pointer rounded-md"
        >
          <MediaItem onClick={() => playSong(song)} data={song} />
        </div>
      ))}
    </div>
  );
};

export default TerkaitContent;
