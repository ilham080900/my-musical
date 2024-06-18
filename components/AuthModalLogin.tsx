"use client";

import Modal from "./Modal";
import Login from "./Login";
import { useAuthModalLogin } from "@/hooks/UseAuthModal";

const AuthModal = () => {
  const isOpen = useAuthModalLogin((state) => state.isOpen);
  const closeModal = useAuthModalLogin((state) => state.onClose);

  return (
    <Modal
      title=""
      description="Login to your account"
      isOpen={isOpen}
      onChange={closeModal}
    >
      <Login />
    </Modal>
  );
};

export default AuthModal;
