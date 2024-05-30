/* eslint-disable react/no-unescaped-entities */
"use client";

import usePlaylist from "@/hooks/usePlaylist";
import usePlaylistModal from "@/hooks/usePlaylistModal";
import { CreatePlaylistTypes } from "@/services/data-types";
import { apiCreatePlaylist } from "@/services/playlist";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState<string>("");

  const closeModal = usePlaylistModal((state) => state.onClose);
  const newPlaylist = usePlaylist((state) => state.onNewPlayList);

  const router = useRouter();

  async function onClick() {
    if (!playlistName) {
      return toast.error("Please fill all input");
    }

    const data: CreatePlaylistTypes = {
      playlist_name: playlistName,
    };

    const response = await apiCreatePlaylist(data);

    if (response.error) {
      return toast.error(response.message);
    }

    toast.success("Success create new Playlist");
    newPlaylist(true);
    closeModal();
    router.push("/");
  }

  return (
    <>
      <div className="mb-4 pb-5">
        <label
          htmlFor="Playlist"
          className="block text-white text-md font-bold mb-2"
        >
          Playlist Name
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-neutral-800 leading-tight focus:outline-none focus:shadow-outline"
          id="Playlist"
          type="text"
          placeholder="Playlist"
          name="username"
          value={playlistName}
          onChange={(event) => setPlaylistName(event.target.value)}
        />
      </div>
      <div className="mb-4 pt-2">
        <button
          className="bg-neutral-700 w-full flex justify-center items-center text-white font-bold py-2 px-4 rounded hover:bg-neutral-500"
          onClick={onClick}
        >
          Create
        </button>
      </div>
    </>
  );
};
export default CreatePlaylist;
