"use client";

import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";
import SongItem from "./SongItem";
import useGetSongById from "@/hooks/useGetSongById";
import { Play } from "next/font/google";
import SongModal from "./SongModal";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

const Player = () => {
  const player = usePlayer();
  // const songId = useGetSongById(player.activeId);
  const playSong = usePlayer((state) => state.song);

  const songUrl = useLoadSongUrl(SongItem);

  // if (!songId || !playSong || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full h-[80px] py-2 px-4">
      <PlayerContent key={playSong.id} songs={[]} songUrl={""} />
    </div>
  );
};

export default Player;
