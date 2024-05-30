import { useState } from "react";
import LirikContent from "@/components/LirikContent";
import TerkaitContent from "@/components/TerkaitContent";

const PlayOptionSubMenu = () => {
  const [subMenu, setSubMenu] = useState<string>("terkait");

  function playOption(value: string) {
    setSubMenu(value);
  }
  return (
    <div className="relative flex flex-col md:flex gap-y-2 gap-x-9 lg:w-[400px] md:w-[300px] left-[200px] mr-5 ml-9 py-8 right-0">
      <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md">
        <button
          onClick={() => playOption("terkait")}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Related</p>
        </button>
        <button
          onClick={() => playOption("lirik")}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Lyrics</p>
        </button>
      </div>
      <div className="overflow-y-auto pt-2 items-center text-start bg-neutral-800 h-[495px] w-full rounded-md">
        {subMenu === "terkait" ? (
          <div className="flex w-full justify-start gap-x-4 px-4 py-2">
            <TerkaitContent />
          </div>
        ) : (
          <div className="flex w-full justify-start">
            <div className="flex items-center gap-x-4 px-4 py-2">
              <LirikContent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayOptionSubMenu;
