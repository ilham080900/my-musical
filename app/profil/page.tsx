"use client";

import Header from "@/components/Header";
import Image from "next/image";
import ProfilContent from "./components/ProfilContent";

export const revalidate = 0;

const Profil = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="mt-20">
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                <Image
                  fill
                  src="/images/liked.png"
                  alt="Playlist"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">Profil</p>
                <h1 className="text-white text-sm sm:text-5xl lg:text-7xl font-bold">
                  Muhammad Ilham
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <ProfilContent songs={[]} isLoading />
    </div>
  );
};

export default Profil;
