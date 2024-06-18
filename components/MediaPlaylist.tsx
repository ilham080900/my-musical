"use client";

import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import useAuth from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { TbPlaylist } from "react-icons/tb";

interface MediaPlaylistProps {
  data: any;
  onClick?: (id: string) => void;
}

const MediaPlaylist: React.FC<MediaPlaylistProps> = ({ data, onClick }) => {
  const isLogin = useAuth((state) => state.isLogin);
  const user = useAuth((state) => state.user);
  const setLogin = useAuth((state) => state.setLogin);
  const setUser = useAuth((state) => state.setUser);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

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
    <>
      <div
        onClick={handleClick}
        className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-400/10 w-full p-2 rounded-md"
      >
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          {data.song_name || data.playlist_name ? (
            <TbPlaylist className="object-cover text-neutral-400" size={50} />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden">
          <p className="text-white truncate">
            {data
              ? data.playlist_name
                ? data.playlist_name
                : data.song_name
              : ""}
          </p>
          {isLogin ? (
            <p className="text-neutral-400 text text-sm truncate">
              {user.fullname}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MediaPlaylist;
