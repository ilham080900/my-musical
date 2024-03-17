"use client";

import Modal from "./Modal";
import Register from "./Register";
import { useAuthModalRegister } from "@/hooks/useAuthModal";

const AuthModal = () => {
  const isOpen = useAuthModalRegister((state) => state.isOpen);
  const closeModal = useAuthModalRegister((state) => state.onClose);

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={closeModal}
    >
      <Register />
    </Modal>
  );
};

export default AuthModal;
