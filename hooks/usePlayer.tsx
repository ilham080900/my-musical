import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  song: {
    song_name: string;
    artist: string;
    id: number;
  };
  setSong: (data: any) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activedId: undefined,
  song: {
    song_name: "",
    artist: "",
    id: 0,
  },
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  setSong: (data) => set({ song: data }),
}));

export default usePlayer;
