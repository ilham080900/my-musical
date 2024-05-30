"use client";

import Modal from "./Modal";
import useSongModal from "@/hooks/useSongModal";
import AddSongToPlaylist from "./AddSongToPlaylist";

const SongModal = () => {
  const isOpen = useSongModal((state) => state.isOpen);
  const closeModal = useSongModal((state) => state.onClose);

  return (
    <Modal
      title="Add Song to Playlist"
      description="Select playlist to add this song"
      isOpen={isOpen}
      onChange={closeModal}
    >
      <AddSongToPlaylist />
    </Modal>
  );
};

export default SongModal;
