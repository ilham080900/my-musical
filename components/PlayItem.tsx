"use client";

import React from "react";
import Image from "next/image";

interface MediaItemProps {
  data: any;
  onClick?: (id: string) => void;
}

const PlayItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
      >
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          {data.song_name ? (
            <Image
              className="object-cover"
              src={"/images/" + data.thumbnail}
              fill
              alt="image"
              width={200}
              height={200}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayItem;
