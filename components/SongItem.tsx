"use client";

import PlayButton from "@/components/PlayButton";
import Image from "next/image";

interface SongItemProps {
  data?: any;
  onClick?: () => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative 
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src="/images/musik.jpg"
          sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
          fill
          alt="image"
        />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.song_name}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          {data.artist}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
