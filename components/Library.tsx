/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import MediaItem from "./MediaItem";
import usePlaylistModal from "@/hooks/usePlaylistModal";
import useAuth from "@/hooks/useAuth";
import { useCallback, useEffect } from "react";
import { apiListPlaylist } from "@/services/playlist";
import usePlaylist from "@/hooks/usePlaylist";
import { PlaylistTypes } from "@/services/data-types";
import { useRouter } from "next/navigation";
import LikeButton from "./LikeButton";
import usePlayer from "@/hooks/usePlayer";
import MediaPlaylist from "./MediaPlaylist";

const Library = () => {
  const router = useRouter();

  const openModal = usePlaylistModal((state) => state.onOpen);
  const isLogin = useAuth((state) => state.isLogin);
  const setPlaylist = usePlaylist((state) => state.setPlaylist);
  const playlist = usePlaylist((state) => state.playlist);
  const newPlaylist = usePlaylist((state) => state.newPlaylist);
  const setNewPlaylist = usePlaylist((state) => state.onNewPlayList);

  const getPlaylist = useCallback(async () => {
    const data = await apiListPlaylist();
    setPlaylist(data.data);
    console.log(data.data);
  }, [apiListPlaylist]);

  useEffect(() => {
    if (isLogin) {
      getPlaylist();
    }
    if (newPlaylist) {
      setNewPlaylist(false);
    }
  }, [isLogin, newPlaylist]);

  return (
    <div key={0} className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={isLogin ? openModal : () => {}}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      {isLogin
        ? playlist.length > 0
          ? playlist.map((item: PlaylistTypes) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="flex flex-col gap-y-2 mt-4 px-3"
                  >
                    <MediaPlaylist
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
  );
};

export default Library;
