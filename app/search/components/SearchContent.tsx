"use client";

import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface SearchContentProps {
  songs: any[];
}
const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full w-full px-6 text-neutral-400">
        No Songs Found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      <MediaItem onClick={() => {}} data={songs[0]} />
      <LikeButton songId={songs[0].id} />
    </div>
    /* TODO: add like more songs */
  );
};

export default SearchContent;
