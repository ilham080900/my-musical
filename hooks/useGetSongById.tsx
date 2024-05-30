import { useEffect, useState } from "react";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [song, setSong] = useState<any | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/getSongById?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSong(data);
        setIsLoading(false);
      });
  });
  return {
    isLoading,
    song,
    setSong,
  };
};
export default useGetSongById;
