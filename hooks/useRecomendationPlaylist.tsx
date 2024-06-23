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
    console.log(songFromLocal)

    if (songFromLocal && 
      songFromLocal !== undefined && 
      songFromLocal !== "undefined")
    {
      const listRecomendation = JSON.parse(songFromLocal);
      setPlaylist(listRecomendation);
    } else {
      console.log("tst")
      getRecomendation();
    }
  }, [getRecomendation, setPlaylist]);
};
