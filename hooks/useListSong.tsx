import { useCallback, useEffect } from "react";
import useSong from "./useSong";
import { apiListSong } from "@/services/song";

export const useListSong = () => {
  const setSong = useSong((state) => state.setSong);

  const getSong = useCallback(async () => {
    const data = await apiListSong();
    setSong(data.data);
    const listSongstringify = JSON.stringify(data.data);
    localStorage.setItem("listSong", listSongstringify);
  }, [setSong]);

  useEffect(() => {
    const songFromLocal = localStorage.getItem("listSong");

    if (songFromLocal) {
      const listSong = JSON.parse(songFromLocal);
      setSong(listSong);
    } else {
      getSong();
    }
  }, [getSong, setSong]);
};
