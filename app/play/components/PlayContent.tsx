"use client";

import MediaItem from "@/components/MediaItem";
import Image from "next/image";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

interface PlayContentProps {
  songs: any;
  songId: string;
}

const PlayContent: React.FC<PlayContentProps> = ({ songs, songId }) => {
  return (
    <div className="flex flex-col w-[345px] h-[500px] cursor-pointer rounded-lg">
      <div className="relative hover:bg-neutral-700/50 rounded-lg">
        {/* <MediaItem onClick={() => {}} data={songs[0]} /> */}
      </div>
    </div>
  );
};

export default PlayContent;
