"use client";

import { useEffect, useState } from "react";
import AuthModalLogin from "@/components/AuthModalLogin";
import AuthModaRegister from "@/components/AuthModalRegister";
import PlaylistModal from "@/components/ModalCreateplaylist";
import SongModal from "@/components/SongModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModalLogin />
      <AuthModaRegister />
      <PlaylistModal />
      <SongModal />
    </>
  );
};

export default ModalProvider;
