"use client";

import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import usePlayer from "@/hooks/usePlayer";

interface SearchContentProps {
  songs: any[];
}
const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const setSong = usePlayer((state) => state.setSong);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Songs Found.
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
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <MediaItem onClick={() => playSong(song)} data={song} />
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
    /* TODO: add like more songs */
  );
};

export default SearchContent;
