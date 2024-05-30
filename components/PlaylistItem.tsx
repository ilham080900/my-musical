"use client";

import PlayButton from "@/components/PlayButton";
import useAuth from "@/hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { TbPlaylist } from "react-icons/tb";

interface PlaylistItemProps {
  data: any;
  onClick?: (id: string) => void;
  thumbnail?: boolean;
}

const PlayListItem: React.FC<PlaylistItemProps> = ({
  data,
  onClick,
  thumbnail,
}) => {
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
    <div
      onClick={handleClick}
      className="
        relative 
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <TbPlaylist className="object-cover text-neutral-400 h-50" size={100} />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {data
            ? data.playlist_name
              ? data.playlist_name
              : data.song_name
            : ""}
        </p>
        {isLogin ? (
          <p className="text-neutral-400 text-sm pb-4 w-full truncate">
            {user.username}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default PlayListItem;
