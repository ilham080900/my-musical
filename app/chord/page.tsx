"use client";

import Header from "@/components/Header";
import PlayMenu from "@/components/PlayMenu";

const Chord = () => {
  return (
    <div className="bg-neutral-900 text-white rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-4 p-8">
          <div className="lg:w-[1285px] md:w-[830px] sm:w-[600px] ">
            <PlayMenu />
          </div>
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 lg:w-[1285px] md:w-[830px] sm:w-[600px] h-[800px] rounded-md">
            Chords!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chord;
