import { create } from "zustand";

interface PlaylistModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePlaylistModal = create<PlaylistModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePlaylistModal;
