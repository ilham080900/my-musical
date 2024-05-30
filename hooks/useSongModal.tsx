import { create } from "zustand";

interface SongModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSongModal = create<SongModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSongModal;
