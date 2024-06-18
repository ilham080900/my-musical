import { create } from "zustand";

interface RecomendationPlaylistStore {
  recomendation_playlist: any;
  newPlaylist: boolean;
  setPlaylist: (playlist: any) => void;
  onNewPlayList: (status: boolean) => void;
}

const useRecomendation = create<RecomendationPlaylistStore>((set) => ({
  recomendation_playlist: [],
  newPlaylist: false,
  setPlaylist: (playlist) => set({ recomendation_playlist: playlist }),
  onNewPlayList: (status) => set({ newPlaylist: status }),
}));

export default useRecomendation;
