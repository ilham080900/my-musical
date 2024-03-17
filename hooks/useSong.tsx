import { create } from "zustand";

interface SongsStore {
  song: any;
  likedSong: any;
  setSong: (song: any) => void;
  addLikedSong: (song: number) => void;
  removeLikedSong: (song: number) => void;
}

const useSong = create<SongsStore>((set) => ({
  song: [],
  likedSong: [],
  setSong: (song) => set({ song }),
  addLikedSong: (number) =>
    set((state) => ({ likedSong: [...state.likedSong, number] })),
  removeLikedSong: (number) =>
    set((state) => ({
      likedSong: state.likedSong.filter((n: any) => n !== number),
    })),
}));

export default useSong;
