"use client";

import Login from "./Login";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import Button from "./Button";
import { useAuthModalLogin, useAuthModalRegister } from "@/hooks/UseAuthModal";
import AuthModal from "./AuthModalLogin";
import { Sign } from "crypto";

interface HeaderProps {
  children: React.ReactNode;
  className?: String;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const openModalLogin = useAuthModalLogin((state) => state.onOpen);
  const openModalRegister = useAuthModalRegister((state) => state.onOpen);

  const Username = AuthModal();

  const handleLogout = () => {
    router.refresh();
  };

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
          {/* {Username ? (
            <div className="flex gap-x-4 items-center">
              <button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </button>
              <button
                onClick={() => router.push("/Profil")}
                className="bg-white"
              >
                <FaUserAlt />
              </button>
            </div>
          ) : ( */}
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
          {/* )} */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
