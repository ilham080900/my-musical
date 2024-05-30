"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
  className?: string;
}

const LikeItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // add authentication before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
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
          src={image}
          alt="liked"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full text-start">{name}</p>
      </div>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-neutral-300 p-4 drop-shadow-md right-[10px] group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black right-[10px]" />
      </div>
    </button>
  );
};

export default LikeItem;
