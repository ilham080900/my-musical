"use client";

import Modal from "./Modal";
import Register from "./Register";
import { useAuthModalRegister } from "@/hooks/UseAuthModal";

const AuthModal = () => {
  const isOpen = useAuthModalRegister((state) => state.isOpen);
  const closeModal = useAuthModalRegister((state) => state.onClose);

  return (
    <Modal
      title="Welcome to My Musical"
      description="Let's get you all set up. Create a free account to continue."
      isOpen={isOpen}
      onChange={closeModal}
    >
      <Register />
    </Modal>
  );
};

export default AuthModal;
