"use client";

import Header from "@/components/Header";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { apiListPlaylist } from "@/services/playlist";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import usePlaylist from "@/hooks/usePlaylist";
import { PlaylistTypes } from "@/services/data-types";
import PlayListItem from "@/components/PlaylistItem";
import LikeItem from "@/components/LikeItem";
import useEditProfilModal from "@/hooks/useEditProfilModal";


const Profil = () => {
  const router = useRouter();
  const openModalEdit = useEditProfilModal((state) => state.onOpen);

  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useAuth((state) => state.isLogin);
  const setPlaylist = usePlaylist((state) => state.setPlaylist);
  const playlist = usePlaylist((state) => state.playlist);
  const newPlaylist = usePlaylist((state) => state.newPlaylist);
  const setNewPlaylist = usePlaylist((state) => state.onNewPlayList);

  const getPlaylist = useCallback(async () => {
    const data = await apiListPlaylist();
    setPlaylist(data.data);
  }, [apiListPlaylist]);

  useEffect(() => {
    if (isLogin) {
      getPlaylist();
    }
    if (newPlaylist) {
      setNewPlaylist(false);
    }
  }, [isLogin, newPlaylist]);

  const user = useAuth((state) => state.user);
  const setLogin = useAuth((state) => state.setLogin);
  const setUser = useAuth((state) => state.setUser);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const user: any = payload;
      setUser(user);
      setLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLogin]);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="mt-20">
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                <Image
                  className="object-cover rounded-md"
                  src="/images/profil.jpg"
                  alt="Image"
                  fill
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">Profil</p>
                {isLogin ? (
                  <h1 className="text-white text-sm sm:text-5xl lg:text-7xl font-bold">
                    {user.fullname}
                  </h1>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className=" text-neutral-400 hover:text-white text-3xl font-semibold px-2 py-2 cursor-pointer transition"
              id="menu-btn"
            >
              {/* <IoIosMore /> */}
            </div>
            {/* {isOpen ? (
              <div
                id="myDropdown"
                className="absolute flex flex-col bg-neutral-800 text-white py-1 mx-2 my-8 w-40 rounded-md cursor-pointer transition"
              >
                <button
                  onClick={() => openModalEdit()}
                  id="myDropdown"
                  className="flex justify-start text-sm text-white text-start text-md px-2 py-2 m-1 rounded-md hover:bg-neutral-600"
                >
                  <CiEdit className="mr-2" /> Edit Profil
                </button>
              </div>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </Header>
      <h4 className="text-white text-2xl font-semibold px-6">Your Library</h4>
      <div className="mt-1 mb-3 px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-1">
          <LikeItem
            image="/images/liked.png"
            name="Liked Songs"
            href="/liked"
          />
          {isLogin
            ? playlist.length > 0
              ? playlist.map((item: PlaylistTypes) => {
                  return (
                    <>
                      <div
                        key={item.id}
                        className="flex flex-col gap-y-2 mt-4 px-3"
                      >
                        <PlayListItem
                          onClick={() => {
                            router.push(`/playlist/${item.id}`);
                          }}
                          data={item}
                        />
                      </div>
                    </>
                  );
                })
              : ""
            : ""}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Profil;
