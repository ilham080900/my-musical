"use client";

import Modal from "./Modal";
import EditProfil from "./EditProfil";
import useEditProfilModal from "@/hooks/useEditProfilModal";

const EditProfilModal = () => {
  const isOpen = useEditProfilModal((state) => state.isOpen);
  const closeModal = useEditProfilModal((state) => state.onClose);

  return (
    <Modal
      title="Edit Profil"
      description=""
      isOpen={isOpen}
      onChange={closeModal}
    >
      <EditProfil />
    </Modal>
  );
};

export default EditProfilModal;
