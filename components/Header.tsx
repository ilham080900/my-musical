"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import Button from "./Button";
import { useAuthModalLogin, useAuthModalRegister } from "@/hooks/UseAuthModal";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface HeaderProps {
  children: React.ReactNode;
  className?: String;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const openModalLogin = useAuthModalLogin((state) => state.onOpen);
  const openModalRegister = useAuthModalRegister((state) => state.onOpen);

  const isLogin = useAuth((state) => state.isLogin);
  const user = useAuth((state) => state.user);
  const setLogin = useAuth((state) => state.setLogin);
  const setUser = useAuth((state) => state.setUser);

  const handleLogout = () => {
    Cookies.remove("token");
    setLogin(false);
    router.push("/");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const user: any = payload;
      setUser(user);
      setLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLogin]);

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {isLogin ? (
            <div className="flex gap-x-6 items-center">
              <p className="hidden md:block">{user.username}</p>
              <button
                className="p-2 border border-2 rounded-full"
                onClick={() => router.push("/profil")}
              >
                <FaUserAlt />
              </button>
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={openModalRegister}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button onClick={openModalLogin} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
