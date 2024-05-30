import { create } from "zustand";

interface PlaylistStore {
  playlist: any;
  newPlaylist: boolean;
  setPlaylist: (playlist: any) => void;
  onNewPlayList: (status: boolean) => void;
}

const usePlaylist = create<PlaylistStore>((set) => ({
  playlist: [],
  newPlaylist: false,
  setPlaylist: (playlist) => set({ playlist }),
  onNewPlayList: (status) => set({ newPlaylist: status }),
}));

export default usePlaylist;
