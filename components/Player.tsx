"use client";

import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();

  // if (!player || !player || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full h-[80px] py-2 px-4">
      <PlayerContent key={0} song={[]} songUrl={""} />
    </div>
  );
};

export default Player;
