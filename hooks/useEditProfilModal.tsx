import { create } from "zustand";

interface EditProfilModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditProfilModal = create<EditProfilModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditProfilModal;
