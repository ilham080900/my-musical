/* eslint-disable react/no-unescaped-entities */
"use client";

import usePlaylist from "@/hooks/usePlaylist";
import useSongModal from "@/hooks/useSongModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import MediaItem from "./MediaItem";
import usePlayer from "@/hooks/usePlayer";
import { apiAddToPlaylist } from "@/services/playlist";
import MediaPlaylist from "./MediaPlaylist";

const AddSongToPlaylist = () => {
  const closeModal = useSongModal((state) => state.onClose);
  const playlist = usePlaylist((state) => state.playlist);
  const song = usePlayer((state) => state.song);

  async function addSong(id: number) {
    const data = {
      playlist_id: id,
      songs: [song.id],
    };
    const response = await apiAddToPlaylist(data);

    if (response.error) {
      return toast.error(response.message);
    }

    toast.success("Success Add to Playlist");
    closeModal();
  }

  return (
    <>
      <div className="mb-4 pt-2">
        {playlist.length > 0
          ? playlist.map((item: any) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="flex flex-col gap-y-2 mt-4 px-3 rounded-md cursor-pointer"
                  >
                    <MediaPlaylist
                      onClick={() => addSong(item.id)}
                      data={item}
                    />
                  </div>
                </>
              );
            })
          : "No Playlist, please create a Playlist First"}
      </div>
    </>
  );
};
export default AddSongToPlaylist;
