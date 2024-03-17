"use client";

import React from "react";
import Image from "next/image";

interface MediaItemProps {
  data: any;
  onClick?: () => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
      >
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          {data.song_name || data.playlist_name ? (
            <Image
              className="object-cover"
              src="/images/musik.jpg"
              fill
              alt="image"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden">
          <p className="text-white truncate">
            {data
              ? data.playlist_name
                ? data.playlist_name
                : data.song_name
              : ""}
          </p>
          <p className="text-neutral-400 text text-sm truncate">
            {data ? data.artist : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default MediaItem;
