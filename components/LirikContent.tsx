/* eslint-disable react/no-unescaped-entities */
"use client";

import usePlayer from "@/hooks/usePlayer";

const LirikContent = () => {
  const playSong = usePlayer((state) => state.song)
  console.log(playSong.lirik)
  return (
    <div className="overflow-y-auto pt-2 bg-neutral-800 rounded-md">
      <div className="flex w-full justify-start">
        <div className="text-start whitespace-pre-line text-white/60 tracking-wide font-open-sans">
          {playSong.lirik}
        </div>
      </div>
    </div>
  );
};

export default LirikContent;
