"use client";

import usePlaylistModal from "@/hooks/usePlaylistModal";
import Modal from "./Modal";
import CreatePlaylist from "./CreatePlaylist";

const PlaylistModal = () => {
  const isOpen = usePlaylistModal((state) => state.isOpen);
  const closeModal = usePlaylistModal((state) => state.onClose);

  return (
    <Modal
      title="Create New Playlist"
      description=""
      isOpen={isOpen}
      onChange={closeModal}
    >
      <CreatePlaylist />
    </Modal>
  );
};

export default PlaylistModal;
