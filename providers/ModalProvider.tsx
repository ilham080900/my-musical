"use client";

import { useEffect, useState } from "react";
import AuthModalLogin from "@/components/AuthModalLogin";
import AuthModaRegister from "@/components/AuthModalRegister";

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
    </>
  );
};

export default ModalProvider;
