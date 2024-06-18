"use client";

import PlayButton from "@/components/PlayButton";
import Image from "next/image";

interface RecomendationPlaylistProps {
  data: any;
  onClick?: (id: string) => void;
  thumbnail?: boolean;
}

const RecomendationPlaylistItem: React.FC<RecomendationPlaylistProps> = ({ data, onClick, thumbnail }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
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
          className="object-cover rounded-md"
          src="/images/gambar playlist.jpg"
          height={200}
          width={200}
          alt="image"
        />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.playlist_name}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          Our recomendation
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default RecomendationPlaylistItem;
