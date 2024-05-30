import { UserTypes } from "@/services/data-types";
import { create } from "zustand";

interface AuthStore {
  isLogin: boolean;
  user: {
    username: string;
    fullname: string;
    user_id: number;
  };
  setLogin: (login: boolean) => void;
  setUser: (data: UserTypes) => void;
}

const useAuth = create<AuthStore>((set) => ({
  isLogin: false,
  user: {
    username: "",
    fullname: "",
    user_id: 0,
  },
  setLogin: (login) => set({ isLogin: login }),
  setUser: (data: UserTypes) => set({ user: data }),
}));

export default useAuth;
