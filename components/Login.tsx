/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import { useAuthModalLogin, useAuthModalRegister } from "@/hooks/UseAuthModal";
import { apiLogin } from "@/services/auth";
import { LoginTypes, UserTypes } from "@/services/data-types";
import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useAuth from "@/hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const closeModalLogin = useAuthModalLogin((state) => state.onClose);
  const openModalRegister = useAuthModalRegister((state) => state.onOpen);
  const setLogin = useAuth((state) => state.setLogin);
  const setUser = useAuth((state) => state.setUser);

  const onClick = () => {
    closeModalLogin();
    openModalRegister();
  };

  async function onLogin() {
    if (!username && !password) {
      return toast.error("Please fill all input");
    }

    const data: LoginTypes = {
      username,
      password,
    };

    const response = await apiLogin(data);

    if (response.error) {
      return toast.error(response.message);
    }

    toast.success("Login Success");
    const token = response.data;
    const payload: UserTypes = jwtDecode(token);
    setUser(payload);
    const tokenBase64 = btoa(token);
    Cookies.set("token", tokenBase64, { expires: 1 });
    setLogin(true);
    closeModalLogin();
    router.push("/");
  }

  return (
    <>
      <div className="mb-4 pb-5">
        <label
          htmlFor="Username"
          className="block text-neutral-800 text-md font-bold mb-2"
        >
          Username
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-neutral-800 leading-tight focus:outline-none focus:shadow-outline"
          id="Username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-4 pb-5">
        <label
          htmlFor="password"
          className="block text-neutral-800 text-md font-bold mb-2"
        >
          Password
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-neutral-800 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*******"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-4 pt-2">
        <button
          className="bg-white w-full flex justify-center items-center text-neutral-800 font-bold py-2 px-4 rounded hover:bg-neutral-500"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
      <p className="text-white text-center text-sm mt-2 mb-6">
        Don't Have an account?{" "}
        <button onClick={onClick} className="font-bold text-blue-600">
          Register
        </button>
      </p>
    </>
  );
};
export default Login;
