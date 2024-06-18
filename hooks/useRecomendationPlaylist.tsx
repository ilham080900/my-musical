import { useCallback, useEffect } from "react";
import useRecomendation from "./useRecomendation";
import { getRecomendationPlaylist } from "@/services/playlist";

export const useRecomendationPlaylist = () => {
  const setPlaylist = useRecomendation((state) => state.setPlaylist);

  const getRecomendation = useCallback(async () => {
    console.log("tst")
    const data = await getRecomendationPlaylist();
    setPlaylist(data.data);
    console.log(data.data)
    const listRecomendation = JSON.stringify(data.data);
    localStorage.setItem("listRecomendation", listRecomendation);
  }, [setPlaylist]);

  useEffect(() => {
    const songFromLocal = localStorage.getItem("listRecomendation");

    if (songFromLocal) {
      const listRecomendation = JSON.parse(songFromLocal);
      setPlaylist(listRecomendation);
    } else {
      getRecomendation();
    }
  }, [getRecomendation, setPlaylist]);
};
