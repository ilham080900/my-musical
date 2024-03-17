"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface LikedContentProps {
  songs: any[];
  isLoading: boolean;
}

const LikedContent: React.FC<LikedContentProps> = ({ songs, isLoading }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !songs.length) {
      router.replace("/");
    }
  }, [isLoading, songs.length, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked Songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
