"use client";

import useSong from "@/hooks/useSong";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
  songId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const likedSong = useSong((state) => state.likedSong);
  const addLikedSong = useSong((state) => state.addLikedSong);
  const removeLikedSong = useSong((state) => state.removeLikedSong);

  const isLiked = likedSong.includes(songId);
  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    console.log(songId);
    if (isLiked) {
      removeLikedSong(songId);
    } else {
      addLikedSong(songId);
    }
  };

  return (
    <button onClick={handleLike} className="hover:opacity-75 transition">
      <Icon color={isLiked ? "white" : "white"} size={25} />
    </button>
  );
};

export default LikeButton;
