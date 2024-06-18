"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

import Button from "./Button";
import { useAuthModalLogin, useAuthModalRegister } from "@/hooks/UseAuthModal";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Search from "@/app/search/page";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("listRecomendation")
    localStorage.removeItem("listSong")
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
    <div className={twMerge(`h-fit bg-gradient-to-b from-purple-500 p-6`)}>
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
          <button onClick={() => router.push("/")} className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button onClick={() => router.push("/search")} className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {isLogin ? (
            <div className="flex gap-x-6 items-center overflow-auto">
              <p className="hidden md:block">{user.fullname}</p>
              <>
                <button
                  className="p-2 rounded-full bg-neutral-800 hover:opacity-75 transition"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  id="menu-button"
                >
                  <FaUserAlt className="text-neutral-400" />
                </button>
                {isOpen ? (
                  <div
                    className="absolute flex flex-col bg-neutral-800 text-white py-2 mx-2 my-4 w-60 rounded-md cursor-pointer transition duration-300 ease-in-out top-14 right-10"
                    id="menu-Dropdown"
                  >
                    <button
                      onClick={() => router.push("/profil")}
                      className="flex justify-start text-sm text-white text-start text-md px-2 py-2 m-1 hover:bg-neutral-600 rounded-md"
                    >
                      <FaUserAlt className="mr-5" /> Profil
                    </button>
                    <hr className="border-neutral-600 mx-3" />
                    <button
                      onClick={handleLogout}
                      className="flex justify-start text-sm text-white text-start text-md px-2 py-2 m-1 hover:bg-neutral-600 rounded-md"
                    >
                      <IoExitOutline className="mr-4" size={20} /> Logout
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
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