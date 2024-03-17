"use client";

import Header from "@/components/Header";

const Chord = () => {
  return (
    <div className="bg-neutral-900 text-white rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6"></div>
      </Header>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-4">
        <div className="relative flex flex-col md:flex gap-y-2 gap-x-8 px-8">
          <div className="flex justify-center gap-y-4 py-1 px-1 items-center text-center bg-neutral-800 rounded-md w-[1285px]">
            <button className="flex flex-row justify-center bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Musik</p>
            </button>
            <button className="flex flex-row justify-center bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Video</p>
            </button>
            <button className="flex flex-row justify-center bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500">
              <p>Chord</p>
            </button>
          </div>
          <div className="flex justify-center items-center overflow-y-auto pt-2 bg-neutral-800 w-[1285px] h-[800px] rounded-md">
            Chords!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chord;
